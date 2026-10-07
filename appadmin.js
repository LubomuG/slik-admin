require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MONGODB_URI не задано. Створи .env файл (див. .env.example).');
    process.exit(1);
}

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB підключено'))
    .catch(err => {
        console.error('Помилка підключення до MongoDB:', err.message);
        process.exit(1);
    });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

app.use(express.json({ limit: '15mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const uploadDir = path.join(__dirname, 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Завантажити фото
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Посилання на завантажений файл
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 */
app.post('/api/upload', upload.single('photo'), (req, res) => {
    const fullUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ url: fullUrl });
});

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Перевірити, що сервер адмінки працює
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Сервер працює
 */
app.get('/admin', (req, res) => {
    res.json({ message: 'server is on' });
});

const schemaOptions = {
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
        }
    }
};

function buildSchema(fields) {
    return new mongoose.Schema(fields, schemaOptions);
}

const Product = mongoose.model('Product', buildSchema({
    name: { type: String, default: '' },
    price: { type: String, default: '' },
    description: { type: String, default: '' },
    photo: { type: String, default: '' },
    inStock: { type: Boolean, default: true }
}));

const Order = mongoose.model('Order', buildSchema({
    customerName: { type: String, default: '' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
    items: { type: String, default: '' },
    total: { type: String, default: '' },
    status: { type: String, default: 'new' },
    date: { type: String, default: () => new Date().toISOString() }
}));

const Email = mongoose.model('Email', buildSchema({
    email: { type: String, default: '' },
    date: { type: String, default: () => new Date().toISOString() }
}));

const Partner = mongoose.model('Partner', buildSchema({
    name: { type: String, default: '' },
    phone: { type: String, default: '' },
    photo: { type: String, default: '' },
    status: { type: String, default: 'active' },
    expiryDate: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now }
}));

const Feedback = mongoose.model('Feedback', buildSchema({
    name: { type: String, default: '' },
    rating: { type: String, default: '5' },
    text: { type: String, default: '' },
    date: { type: String, default: () => new Date().toISOString() },
    visible: { type: Boolean, default: true }
}));

const models = {
    products: Product,
    orders: Order,
    emails: Email,
    partners: Partner,
    feedback: Feedback
};

function registerCrud(name) {
    const Model = models[name];

    app.get(`/api/${name}`, async (req, res) => {
        try {
            const items = await Model.find().sort({ _id: -1 });
            res.json(items);
        } catch (err) {
            res.status(500).json({ message: 'Помилка сервера' });
        }
    });

    app.post(`/api/${name}`, async (req, res) => {
        try {
            const item = await Model.create(req.body);
            res.json(item);
        } catch (err) {
            res.status(400).json({ message: 'Некоректні дані' });
        }
    });

    app.put(`/api/${name}/:id`, async (req, res) => {
        try {
            const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!item) return res.status(404).json({ message: 'Не знайдено' });
            res.json(item);
        } catch (err) {
            res.status(400).json({ message: 'Некоректний id' });
        }
    });

    app.delete(`/api/${name}/:id`, async (req, res) => {
        try {
            const item = await Model.findByIdAndDelete(req.params.id);
            if (!item) return res.status(404).json({ message: 'Не знайдено' });
            res.json({ message: 'Видалено' });
        } catch (err) {
            res.status(400).json({ message: 'Некоректний id' });
        }
    });
}

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Отримати список товарів
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Масив товарів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *   post:
 *     summary: Створити товар
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Створений товар
 *       400:
 *         description: Некоректні дані
 *
 * /api/products/{id}:
 *   put:
 *     summary: Оновити товар
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Оновлений товар
 *       404:
 *         description: Не знайдено
 *   delete:
 *     summary: Видалити товар
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Видалено
 *       404:
 *         description: Не знайдено
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Отримати список замовлень
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Масив замовлень
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *   post:
 *     summary: Створити замовлення
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Створене замовлення
 *       400:
 *         description: Некоректні дані
 *
 * /api/orders/{id}:
 *   put:
 *     summary: Оновити статус замовлення
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Оновлене замовлення
 *       404:
 *         description: Не знайдено
 *   delete:
 *     summary: Видалити замовлення
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Видалено
 *       404:
 *         description: Не знайдено
 */

/**
 * @swagger
 * /api/emails:
 *   get:
 *     summary: Отримати список підписників
 *     tags: [Emails]
 *     responses:
 *       200:
 *         description: Масив email-ів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Email'
 *   post:
 *     summary: Додати email вручну
 *     tags: [Emails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Створений запис
 *       400:
 *         description: Некоректні дані
 *
 * /api/emails/{id}:
 *   delete:
 *     summary: Видалити email
 *     tags: [Emails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Видалено
 *       404:
 *         description: Не знайдено
 */

/**
 * @swagger
 * /api/partners:
 *   get:
 *     summary: Отримати список партнерів
 *     tags: [Partners]
 *     responses:
 *       200:
 *         description: Масив партнерів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Partner'
 *   post:
 *     summary: Створити партнера
 *     tags: [Partners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Partner'
 *     responses:
 *       200:
 *         description: Створений партнер
 *       400:
 *         description: Некоректні дані
 *
 * /api/partners/{id}:
 *   put:
 *     summary: Оновити партнера
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Partner'
 *     responses:
 *       200:
 *         description: Оновлений партнер
 *       404:
 *         description: Не знайдено
 *   delete:
 *     summary: Видалити партнера
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Видалено
 *       404:
 *         description: Не знайдено
 */

/**
 * @swagger
 * /api/feedback:
 *   get:
 *     summary: Отримати список відгуків
 *     tags: [Feedback]
 *     responses:
 *       200:
 *         description: Масив відгуків
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Feedback'
 *   post:
 *     summary: Створити відгук
 *     tags: [Feedback]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       200:
 *         description: Створений відгук
 *       400:
 *         description: Некоректні дані
 *
 * /api/feedback/{id}:
 *   put:
 *     summary: Показати/приховати відгук на сайті
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visible:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Оновлений відгук
 *       404:
 *         description: Не знайдено
 *   delete:
 *     summary: Видалити відгук
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Видалено
 *       404:
 *         description: Не знайдено
 */
Object.keys(models).forEach(registerCrud);

/**
 * @swagger
 * /api/emails/broadcast:
 *   post:
 *     summary: Надіслати лист усім підписникам
 *     tags: [Emails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Розсилку надіслано
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 count:
 *                   type: integer
 *       400:
 *         description: Некоректні дані або немає підписників
 */
app.post('/api/emails/broadcast', async (req, res) => {
    try {
        const subject = (req.body.subject || '').trim();
        const text = (req.body.text || '').trim();
        if (!subject || !text) return res.status(400).json({ message: 'Некоректні дані' });

        const subscribers = await Email.find();
        if (!subscribers.length) return res.status(400).json({ message: 'Немає підписників' });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            bcc: subscribers.map(s => s.email),
            subject: subject,
            text: text
        });

        res.json({ message: 'Надіслано', count: subscribers.length });
    } catch (err) {
        console.error('Помилка розсилки:', err.message);
        res.status(500).json({ message: 'Не вдалося надіслати листи' });
    }
});

cron.schedule('* * * * *', async () => {
    try {
        const now = new Date();
        const result = await Partner.updateMany(
            { status: 'active', expiryDate: { $ne: null, $lte: now } },
            { $set: { status: 'inactive' } }
        );

        if (result.modifiedCount > 0) {
            console.log(`Деактивовано партнерів: ${result.modifiedCount}`);
        }
    } catch (error) {
        console.error('Помилка CRON:', error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});