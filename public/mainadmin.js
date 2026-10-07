const translations = {
    uk: {
        adminLabel: 'адмін',
        nav: { products: 'Товари', orders: 'Замовлення', emails: 'Emails', partners: 'Партнери', feedback: 'Відгуки' },
        footer: 'Панель керування магазином',
        controls: { theme: 'Тема', language: 'Мова' },
        common: {
            edit: 'Редагувати', delete: 'Видалити',
            untitled: 'Без назви', noName: 'Без імені', anonymous: 'Анонім',
            currency: 'грн'
        },
        products: {
            title: 'Товари',
            namePlaceholder: 'Назва товару',
            pricePlaceholder: 'Ціна, грн',
            descPlaceholder: 'Опис товару',
            inStockLabel: 'Є в наявності',
            photoLabel: 'Фото',
            saveBtn: 'Зберегти товар',
            updateBtn: 'Оновити товар',
            empty: 'Поки немає жодного товару — додайте перший вище',
            inStock: 'В наявності',
            outOfStock: 'Немає в наявності',
            confirmDelete: 'Видалити товар?',
            alertName: 'Введіть назву товару'
        },
        orders: {
            title: 'Замовлення',
            customerPlaceholder: "Ім'я клієнта",
            phonePlaceholder: 'Телефон',
            addressPlaceholder: 'Адреса доставки',
            itemsPlaceholder: 'Склад замовлення (напр. Торт «Наполеон» ×1, Тістечка ×6)',
            totalPlaceholder: 'Сума, грн',
            addBtn: 'Додати замовлення',
            empty: 'Замовлень поки немає',
            confirmDelete: 'Видалити замовлення?',
            alertRequired: "Вкажіть ім'я клієнта і телефон",
            status: { new: 'Новий', processing: 'В обробці', shipped: 'Відправлено', done: 'Виконано', cancelled: 'Скасовано' }
        },
        emails: {
            title: 'Emails',
            addBtn: 'Додати',
            copyBtn: 'Скопіювати всі',
            empty: 'Підписників поки немає',
            added: 'Додано',
            confirmDelete: 'Видалити email?',
            alertInvalid: 'Введіть коректний email',
            alertEmpty: 'Список порожній',
            alertCopied: 'Emails скопійовано в буфер обміну',
            subjectPlaceholder: 'Тема листа',
            textPlaceholder: 'Текст листа',
            sendBtn: 'Надіслати всім',
            alertSubjectEmpty: 'Введіть тему листа',
            alertTextEmpty: 'Введіть текст листа',
            sending: 'Надсилання...',
            sentSuccess: 'Листи надіслано',
            sentFail: 'Не вдалося надіслати листи'
        },
        partners: {
            title: 'Партнери',
            namePlaceholder: 'Назва компанії',
            phonePlaceholder: 'Телефон',
            addBtn: 'Додати партнера',
            empty: 'Партнерів поки немає',
            confirmDelete: 'Видалити партнера?',
            alertName: 'Введіть назву компанії',
            expiryLabel: 'Встановити термін дії',
            expiresUntil: 'Діє до',
            status: { active: 'Активний', inactive: 'Неактивний' }
        },
        feedback: {
            title: 'Відгуки',
            namePlaceholder: "Ім'я клієнта",
            textPlaceholder: 'Текст відгуку',
            addBtn: 'Додати відгук',
            empty: 'Відгуків поки немає',
            visibleOn: 'На сайті',
            hidden: 'Приховано',
            confirmDelete: 'Видалити відгук?',
            alertText: 'Введіть текст відгуку'
        }
    },
    en: {
        adminLabel: 'admin',
        nav: { products: 'Products', orders: 'Orders', emails: 'Emails', partners: 'Partners', feedback: 'Feedback' },
        footer: 'Store management panel',
        controls: { theme: 'Theme', language: 'Language' },
        common: {
            edit: 'Edit', delete: 'Delete',
            untitled: 'Untitled', noName: 'No name', anonymous: 'Anonymous',
            currency: 'UAH'
        },
        products: {
            title: 'Products',
            namePlaceholder: 'Product name',
            pricePlaceholder: 'Price, UAH',
            descPlaceholder: 'Product description',
            inStockLabel: 'In stock',
            photoLabel: 'Photo',
            saveBtn: 'Save product',
            updateBtn: 'Update product',
            empty: 'No products yet — add the first one above',
            inStock: 'In stock',
            outOfStock: 'Out of stock',
            confirmDelete: 'Delete this product?',
            alertName: 'Enter a product name'
        },
        orders: {
            title: 'Orders',
            customerPlaceholder: 'Customer name',
            phonePlaceholder: 'Phone',
            addressPlaceholder: 'Delivery address',
            itemsPlaceholder: 'Order contents (e.g. Napoleon cake ×1, Pastries ×6)',
            totalPlaceholder: 'Total, UAH',
            addBtn: 'Add order',
            empty: 'No orders yet',
            confirmDelete: 'Delete this order?',
            alertRequired: 'Please enter customer name and phone',
            status: { new: 'New', processing: 'Processing', shipped: 'Shipped', done: 'Done', cancelled: 'Cancelled' }
        },
        emails: {
            title: 'Emails',
            addBtn: 'Add',
            copyBtn: 'Copy all',
            empty: 'No subscribers yet',
            added: 'Added',
            confirmDelete: 'Delete this email?',
            alertInvalid: 'Enter a valid email',
            alertEmpty: 'The list is empty',
            alertCopied: 'Emails copied to clipboard',
            subjectPlaceholder: 'Email subject',
            textPlaceholder: 'Email text',
            sendBtn: 'Send to all',
            alertSubjectEmpty: 'Enter a subject',
            alertTextEmpty: 'Enter the email text',
            sending: 'Sending...',
            sentSuccess: 'Emails sent',
            sentFail: 'Failed to send emails'
        },
        partners: {
            title: 'Partners',
            namePlaceholder: 'Company name',
            phonePlaceholder: 'Phone',
            addBtn: 'Add partner',
            empty: 'No partners yet',
            confirmDelete: 'Delete this partner?',
            alertName: 'Enter a company name',
            expiryLabel: 'Set an expiration date',
            expiresUntil: 'Active until',
            status: { active: 'Active', inactive: 'Inactive' }
        },
        feedback: {
            title: 'Feedback',
            namePlaceholder: 'Customer name',
            textPlaceholder: 'Feedback text',
            addBtn: 'Add feedback',
            empty: 'No feedback yet',
            visibleOn: 'Live on site',
            hidden: 'Hidden',
            confirmDelete: 'Delete this feedback?',
            alertText: 'Enter the feedback text'
        }
    },
    pl: {
        adminLabel: 'admin',
        nav: { products: 'Produkty', orders: 'Zamówienia', emails: 'Emails', partners: 'Partnerzy', feedback: 'Opinie' },
        footer: 'Panel zarządzania sklepem',
        controls: { theme: 'Motyw', language: 'Język' },
        common: {
            edit: 'Edytuj', delete: 'Usuń',
            untitled: 'Bez nazwy', noName: 'Bez imienia', anonymous: 'Anonim',
            currency: 'UAH'
        },
        products: {
            title: 'Produkty',
            namePlaceholder: 'Nazwa produktu',
            pricePlaceholder: 'Cena, UAH',
            descPlaceholder: 'Opis produktu',
            inStockLabel: 'Dostępny',
            photoLabel: 'Zdjęcie',
            saveBtn: 'Zapisz produkt',
            updateBtn: 'Zaktualizuj produkt',
            empty: 'Brak produktów — dodaj pierwszy powyżej',
            inStock: 'Dostępny',
            outOfStock: 'Niedostępny',
            confirmDelete: 'Usunąć ten produkt?',
            alertName: 'Podaj nazwę produktu'
        },
        orders: {
            title: 'Zamówienia',
            customerPlaceholder: 'Imię klienta',
            phonePlaceholder: 'Telefon',
            addressPlaceholder: 'Adres dostawy',
            itemsPlaceholder: 'Zawartość zamówienia (np. Tort Napoleon ×1, Ciastka ×6)',
            totalPlaceholder: 'Suma, UAH',
            addBtn: 'Dodaj zamówienie',
            empty: 'Brak zamówień',
            confirmDelete: 'Usunąć to zamówienie?',
            alertRequired: 'Podaj imię klienta i telefon',
            status: { new: 'Nowe', processing: 'W trakcie', shipped: 'Wysłane', done: 'Zrealizowane', cancelled: 'Anulowane' }
        },
        emails: {
            title: 'Emails',
            addBtn: 'Dodaj',
            copyBtn: 'Skopiuj wszystkie',
            empty: 'Brak subskrybentów',
            added: 'Dodano',
            confirmDelete: 'Usunąć ten email?',
            alertInvalid: 'Podaj poprawny email',
            alertEmpty: 'Lista jest pusta',
            alertCopied: 'Emaile skopiowane do schowka',
            subjectPlaceholder: 'Temat wiadomości',
            textPlaceholder: 'Treść wiadomości',
            sendBtn: 'Wyślij do wszystkich',
            alertSubjectEmpty: 'Podaj temat wiadomości',
            alertTextEmpty: 'Podaj treść wiadomości',
            sending: 'Wysyłanie...',
            sentSuccess: 'Wiadomości wysłane',
            sentFail: 'Nie udało się wysłać wiadomości'
        },
        partners: {
            title: 'Partnerzy',
            namePlaceholder: 'Nazwa firmy',
            phonePlaceholder: 'Telefon',
            addBtn: 'Dodaj partnera',
            empty: 'Brak partnerów',
            confirmDelete: 'Usunąć tego partnera?',
            alertName: 'Podaj nazwę firmy',
            expiryLabel: 'Ustaw okres ważności',
            expiresUntil: 'Ważne do',
            status: { active: 'Aktywny', inactive: 'Nieaktywny' }
        },
        feedback: {
            title: 'Opinie',
            namePlaceholder: 'Imię klienta',
            textPlaceholder: 'Treść opinii',
            addBtn: 'Dodaj opinię',
            empty: 'Brak opinii',
            visibleOn: 'Na stronie',
            hidden: 'Ukryte',
            confirmDelete: 'Usunąć tę opinię?',
            alertText: 'Podaj treść opinii'
        }
    }
};

const localeByLang = { uk: 'uk-UA', en: 'en-GB', pl: 'pl-PL' };

let currentLang = localStorage.getItem('slikLang') || 'uk';
let currentTheme = localStorage.getItem('slikTheme') || 'dark';
let currentTab = 'products';

function t(path) {
    function lookup(lang) {
        return path.split('.').reduce((obj, key) => (obj ? obj[key] : undefined), translations[lang]);
    }
    const value = lookup(currentLang);
    if (value !== undefined) return value;
    return lookup('uk') ?? path;
}

function fmtDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d)) return '';
    return d.toLocaleString(localeByLang[currentLang] || 'uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function stars(rating) {
    const n = parseInt(rating) || 0;
    return '★'.repeat(n) + '☆'.repeat(5 - n);
}

let orderStatusLabels = translations[currentLang].orders.status;
let partnerStatusLabels = translations[currentLang].partners.status;

function badgeClassForOrder(status) {
    if (status === 'done') return 'badge-success';
    if (status === 'cancelled') return 'badge-danger';
    if (status === 'processing') return 'badge-warning';
    if (status === 'shipped') return 'badge-info';
    return 'badge-muted';
}

function badgeClassForPartner(status) {
    if (status === 'active') return 'badge-success';
    return 'badge-muted';
}

const trashIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>';

function applyTheme(theme) {
    currentTheme = theme;
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add('theme-' + theme);
    localStorage.setItem('slikTheme', theme);
}

$('#themeToggle').click(function () {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
})

function applyStaticTranslations() {
    document.documentElement.lang = currentLang;

    $('[data-i18n]').each(function () {
        $(this).text(t($(this).data('i18n')));
    })

    $('[data-i18n-placeholder]').each(function () {
        $(this).attr('placeholder', t($(this).data('i18n-placeholder')));
    })

    orderStatusLabels = translations[currentLang].orders.status;
    partnerStatusLabels = translations[currentLang].partners.status;

    $('#saveProduct').text(editProductId ? t('products.updateBtn') : t('products.saveBtn'));
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('slikLang', lang);
    $('#langSelect').val(lang);
    applyStaticTranslations();
    loadTab(currentTab);
}

$('#langSelect').change(function () {
    applyLanguage($(this).val());
})

$('.navBtn').click(function () {
    const tab = $(this).data('tab');
    currentTab = tab;
    $('.navBtn').removeClass('active');
    $(this).addClass('active');
    $('.tabContent').hide();
    $(`[data-tab-content="${tab}"]`).show();
    loadTab(tab);
})

function loadTab(tab) {
    if (tab === 'products') loadProducts();
    if (tab === 'orders') loadOrders();
    if (tab === 'emails') loadEmails();
    if (tab === 'partners') loadPartners();
    if (tab === 'feedback') loadFeedback();
}



let editProductId = null;
let selectedPhoto = '';

$('#photoBox').click(function () { $('#photoInput').click(); })

$('#photoInput').change(function (e) {
    const file = e.target.files[0];
    if (!file) return;
    $('#photoPreview').attr('src', URL.createObjectURL(file)).show();
    $('#photoPlaceholder').hide();
    const formData = new FormData();
    formData.append('photo', file);
    $.ajax({
        url: '/api/upload', method: 'POST', data: formData, contentType: false, processData: false,
        success: function (res) { selectedPhoto = res.url; }
    });
})

function clearProductForm() {
    editProductId = null;
    selectedPhoto = '';
    $('#name').val('');
    $('#price').val('');
    $('#descriptiontext').val('');
    $('#inStock').prop('checked', true);
    $('#photoPreview').attr('src', '#').hide();
    $('#photoPlaceholder').show();
    $('#saveProduct').text(t('products.saveBtn'));
}

function fillProductForm(p) {
    editProductId = p.id;
    selectedPhoto = p.photo || '';
    $('#name').val(p.name);
    $('#price').val(p.price);
    $('#descriptiontext').val(p.description);
    $('#inStock').prop('checked', p.inStock !== false);
    if (selectedPhoto) {
        $('#photoPreview').attr('src', selectedPhoto).show();
        $('#photoPlaceholder').hide();
    } else {
        $('#photoPreview').attr('src', '#').hide();
        $('#photoPlaceholder').show();
    }
    $('#saveProduct').text(t('products.updateBtn'));
    window.scrollTo(0, 0);
}

function renderProducts(products) {
    const grid = $('#productsGrid');
    grid.empty();
    if (!products.length) {
        grid.append(`<div class="emptyState">${t('products.empty')}</div>`);
        return;
    }
    products.forEach(function (p) {
        const photoHtml = p.photo
            ? `<img src="${p.photo}" alt="">`
            : `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 16l-5-4-4 3-3-2-6 5"/></svg>`;
        const stockBadge = p.inStock !== false
            ? `<span class="badge badge-success">${t('products.inStock')}</span>`
            : `<span class="badge badge-danger">${t('products.outOfStock')}</span>`;

        const card = $(`
            <div class="itemCard">
                <div class="itemPhoto">${photoHtml}</div>
                <div class="itemTitleRow">
                    <div class="itemTitle">${p.name || t('common.untitled')}</div>
                    ${stockBadge}
                </div>
                <div class="itemSub">${p.price} ${t('common.currency')}</div>
                <div class="itemDesc">${p.description}</div>
                <div class="itemActions">
                    <button class="smallBtn editBtn">${t('common.edit')}</button>
                    <button class="smallBtn danger deleteBtn">${t('common.delete')}</button>
                </div>
            </div>
        `);

        card.find('.editBtn').click(function () { fillProductForm(p); })
        card.find('.deleteBtn').click(function () {
            if (!confirm(t('products.confirmDelete'))) return;
            $.ajax({ url: '/api/products/' + p.id, method: 'DELETE', success: loadProducts });
        })

        grid.append(card);
    })
}

function loadProducts() {
    $.get('/api/products', renderProducts);
}

$('#saveProduct').click(function () {
    const data = {
        name: $('#name').val().trim(),
        price: $('#price').val().trim(),
        description: $('#descriptiontext').val().trim(),
        photo: selectedPhoto,
        inStock: $('#inStock').is(':checked')
    };
    if (!data.name) { alert(t('products.alertName')); return; }

    const done = function () { clearProductForm(); loadProducts(); }
    if (editProductId) {
        $.ajax({ url: '/api/products/' + editProductId, method: 'PUT', contentType: 'application/json', data: JSON.stringify(data), success: done });
    } else {
        $.ajax({ url: '/api/products', method: 'POST', contentType: 'application/json', data: JSON.stringify(data), success: done });
    }
})

function renderOrders(orders) {
    const wrap = $('#ordersList');
    wrap.empty();
    if (!orders.length) {
        wrap.append(`<div class="emptyState">${t('orders.empty')}</div>`);
        return;
    }
    orders.forEach(function (o) {
        const row = $(`
            <div class="listRow">
                <div class="rowMain">
                    <div class="rowTitle">${o.customerName || t('common.noName')} · ${o.phone}</div>
                    <div class="rowMeta">${o.address} · ${fmtDate(o.date)}</div>
                    <div class="rowItems">${o.items}</div>
                </div>
                <div class="rowTotal">${o.total} ${t('common.currency')}</div>
                <div class="statusDropdown">
                    <button type="button" class="statusDropdown__toggle">
                        <span class="statusDropdown__dot"></span>
                        <span class="statusDropdown__label"></span>
                        <svg class="statusDropdown__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    <div class="statusDropdown__menu"></div>
                </div>
                <button class="rowDelete" title="${t('common.delete')}">${trashIcon}</button>
            </div>
        `);

        const dropdown = row.find('.statusDropdown');
        const toggle = dropdown.find('.statusDropdown__toggle');
        const dot = dropdown.find('.statusDropdown__dot');
        const label = dropdown.find('.statusDropdown__label');
        const menu = dropdown.find('.statusDropdown__menu');

        function setStatus(status) {
            o.status = status;
            dot.attr('class', 'statusDropdown__dot ' + badgeClassForOrder(status));
            label.text(orderStatusLabels[status] || orderStatusLabels.new);
            menu.find('.statusDropdown__option').each(function () {
                $(this).toggleClass('selected', $(this).data('value') === status);
            });
        }

        Object.keys(orderStatusLabels).forEach(key => {
            const option = $(`
                <button type="button" class="statusDropdown__option" data-value="${key}">
                    <span class="statusDropdown__dot ${badgeClassForOrder(key)}"></span>
                    <span>${orderStatusLabels[key]}</span>
                </button>
            `);
            option.click(function (e) {
                e.stopPropagation();
                const status = $(this).data('value');
                setStatus(status);
                dropdown.removeClass('open');
                $.ajax({
                    url: '/api/orders/' + o.id,
                    method: 'PUT',
                    contentType: 'application/json',
                    data: JSON.stringify({ status: status })
                });
            })
            menu.append(option);
        })

        setStatus(o.status || 'new');

        toggle.click(function (e) {
            e.stopPropagation();
            const isOpen = dropdown.hasClass('open');
            $('.statusDropdown.open').removeClass('open');
            if (!isOpen) dropdown.addClass('open');
        })

        row.find('.rowDelete').click(function () {
            if (!confirm(t('orders.confirmDelete'))) return;
            $.ajax({ url: '/api/orders/' + o.id, method: 'DELETE', success: loadOrders });
        })

        wrap.append(row);
    })
}

$(document).click(function () {
    $('.statusDropdown.open').removeClass('open');
})

function loadOrders() {
    $.get('/api/orders', renderOrders);
}

let currentEmails = [];

function renderEmails(emails) {
    currentEmails = emails;
    const wrap = $('#emailsList');
    wrap.empty();
    if (!emails.length) {
        wrap.append(`<div class="emptyState">${t('emails.empty')}</div>`);
        return;
    }
    emails.forEach(function (e) {
        const row = $(`
            <div class="listRow">
                <div class="rowMain">
                    <div class="rowTitle">${e.email}</div>
                    <div class="rowMeta">${t('emails.added')} ${fmtDate(e.date)}</div>
                </div>
                <button class="rowDelete" title="${t('common.delete')}">${trashIcon}</button>
            </div>
        `);
        row.find('.rowDelete').click(function () {
            if (!confirm(t('emails.confirmDelete'))) return;
            $.ajax({ url: '/api/emails/' + e.id, method: 'DELETE', success: loadEmails });
        })
        wrap.append(row);
    })
}

function loadEmails() {
    $.get('/api/emails', renderEmails);
}

$('#copyEmails').click(function () {
    if (!currentEmails.length) { alert(t('emails.alertEmpty')); return; }
    const text = currentEmails.map(e => e.email).join(', ');
    navigator.clipboard.writeText(text).then(function () {
        alert(t('emails.alertCopied'));
    })
})

$('#sendBroadcast').click(function () {
    const subject = $('#broadcastSubject').val().trim();
    const text = $('#broadcastText').val().trim();
    const $note = $('#broadcastNote');

    if (!currentEmails.length) { alert(t('emails.alertEmpty')); return; }
    if (!subject) { alert(t('emails.alertSubjectEmpty')); return; }
    if (!text) { alert(t('emails.alertTextEmpty')); return; }

    const $btn = $(this);
    $btn.prop('disabled', true);
    $note.text(t('emails.sending'));

    $.ajax({
        url: '/api/emails/broadcast',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ subject: subject, text: text })
    })
        .done(function () {
            $note.text(t('emails.sentSuccess'));
            $('#broadcastSubject, #broadcastText').val('');
        })
        .fail(function () {
            $note.text(t('emails.sentFail'));
        })
        .always(function () {
            $btn.prop('disabled', false);
        });
})

let selectedPartnerPhoto = '';

$('#partnerPhotoBox').click(function () {
    $('#partnerPhotoInput').click();
})

$('#partnerPhotoInput').change(function (e) {
    const file = e.target.files[0];
    if (!file) return;
    $('#partnerPhotoPreview').attr('src', URL.createObjectURL(file)).show();
    $('#partnerPhotoPlaceholder').hide();
    const formData = new FormData();
    formData.append('photo', file);
    $.ajax({
        url: '/api/upload', method: 'POST', data: formData, contentType: false, processData: false,
        success: function (res) { selectedPartnerPhoto = res.url; }
    });
})

$('#partnerExpiryCheck').change(function () {
    const checked = $(this).is(':checked');
    $('#partnerExpiryInput').toggle(checked);
    if (!checked) $('#partnerExpiryInput').val('');
})



function resetPartnerForm() {
    $('#partnerName, #partnerPhone').val('');
    $('#partnerStatus').val('active');
    selectedPartnerPhoto = '';
    $('#partnerPhotoPreview').attr('src', '#').hide();
    $('#partnerPhotoPlaceholder').show();
    $('#partnerExpiryCheck').prop('checked', false);
    $('#partnerExpiryInput').val('').hide();
}





function renderPartners(partners) {
    const grid = $('#partnersGrid');
    grid.empty();
    if (!partners.length) {
        grid.append(`<div class="emptyState">${t('partners.empty')}</div>`);
        return;
    }
    partners.forEach(function (p) {
        const badge = `<span class="badge ${badgeClassForPartner(p.status)}">${partnerStatusLabels[p.status] || partnerStatusLabels.active}</span>`;
        const photoHtml = p.photo ? `<div class="itemPhoto"><img src="${p.photo}" alt=""></div>` : '';
        const expiryHtml = p.expiryDate ? `<div class="itemSub">${t('partners.expiresUntil')}: ${fmtDate(p.expiryDate)}</div>` : '';
        const card = $(`
            <div class="itemCard">
                ${photoHtml}
                <div class="itemTitleRow">
                    <div class="itemTitle">${p.name || t('common.untitled')}</div>
                    ${badge}
                </div>
                <div class="itemSub">${p.phone}</div>
                ${expiryHtml}
                <div class="itemActions">
                    <button class="smallBtn deleteBtn danger">${t('common.delete')}</button>
                </div>
            </div>
        `);
        card.find('.deleteBtn').click(function () {
            if (!confirm(t('partners.confirmDelete'))) return;
            $.ajax({ url: '/api/partners/' + p.id, method: 'DELETE', success: loadPartners });
        })
        grid.append(card);
    })
}

function loadPartners() {
    $.get('/api/partners', renderPartners);
}
$('#savePartner').click(function () {
    const data = {
        name: $('#partnerName').val().trim(),
        phone: $('#partnerPhone').val().trim(),
        status: $('#partnerStatus').val(),
        photo: selectedPartnerPhoto,
        expiryDate: $('#partnerExpiryCheck').is(':checked') ? $('#partnerExpiryInput').val() : null
    };
    if (!data.name) { alert(t('partners.alertName')); return; }
    $.ajax({
        url: '/api/partners', method: 'POST', contentType: 'application/json', data: JSON.stringify(data),
        success: function () {
            resetPartnerForm();
            loadPartners();
        }
    })
})

function renderFeedback(list) {
    const wrap = $('#feedbackList');
    wrap.empty();
    if (!list.length) {
        wrap.append(`<div class="emptyState">${t('feedback.empty')}</div>`);
        return;
    }
    list.forEach(function (f) {
        const isVisible = f.visible !== false;
        const row = $(`
            <div class="listRow">
                <div class="rowMain">
                    <div class="rowTitle">${f.name || t('common.anonymous')} <span class="stars">${stars(f.rating)}</span></div>
                    <div class="rowMeta">${fmtDate(f.date)}</div>
                    <div class="rowItems">${f.text}</div>
                </div>
                <button class="smallBtn toggleBtn ${isVisible ? 'active-toggle' : ''}">${isVisible ? t('feedback.visibleOn') : t('feedback.hidden')}</button>
                <button class="rowDelete" title="${t('common.delete')}">${trashIcon}</button>
            </div>
        `);

        row.find('.toggleBtn').click(function () {
            $.ajax({
                url: '/api/feedback/' + f.id, method: 'PUT', contentType: 'application/json',
                data: JSON.stringify({ visible: !isVisible }),
                success: loadFeedback
            });
        })

        row.find('.rowDelete').click(function () {
            if (!confirm(t('feedback.confirmDelete'))) return;
            $.ajax({ url: '/api/feedback/' + f.id, method: 'DELETE', success: loadFeedback });
        })

        wrap.append(row);
    })
}

function loadFeedback() {
    $.get('/api/feedback', renderFeedback);
}

$('#saveFeedback').click(function () {
    const data = {
        name: $('#feedbackName').val().trim(),
        rating: $('#feedbackRating').val(),
        text: $('#feedbackText').val().trim(),
        visible: true
    };
    if (!data.text) { alert(t('feedback.alertText')); return; }
    $.ajax({
        url: '/api/feedback', method: 'POST', contentType: 'application/json', data: JSON.stringify(data),
        success: function () {
            $('#feedbackName, #feedbackText').val('');
            $('#feedbackRating').val('5');
            loadFeedback();
        }
    })
})

$(document).ready(function () {
    applyTheme(currentTheme);
    $('#langSelect').val(currentLang);
    applyStaticTranslations();
    loadProducts();
})