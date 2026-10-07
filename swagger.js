const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Slik Admin API',
        version: '1.0.0',
        description: 'Документація API адмін-панелі Slik'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
    components: {
        schemas: {
            Product: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    price: { type: 'string' },
                    description: { type: 'string' },
                    photo: { type: 'string' },
                    inStock: { type: 'boolean' }
                }
            },
            Order: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    customerName: { type: 'string' },
                    phone: { type: 'string' },
                    address: { type: 'string' },
                    items: { type: 'string' },
                    total: { type: 'string' },
                    status: { type: 'string' },
                    date: { type: 'string' }
                }
            },
            Email: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    email: { type: 'string' },
                    date: { type: 'string' }
                }
            },
            Partner: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    phone: { type: 'string' },
                    photo: { type: 'string' },
                    status: { type: 'string', enum: ['active', 'inactive'] },
                    expiryDate: { type: 'string', format: 'date-time', nullable: true },
                    createdAt: { type: 'string', format: 'date-time' }
                }
            },
            Feedback: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    rating: { type: 'string' },
                    text: { type: 'string' },
                    date: { type: 'string' },
                    visible: { type: 'boolean' }
                }
            }
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['./appadmin.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };