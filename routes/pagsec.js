const express = require('express');

const router = express.Router();

router.get('/productos', (req, res, next) => {
    res.render('productos', { titulo: 'Nuestros Productos' });
});

router.get('/servicios', (req, res, next) => {
    res.render('servicios', { titulo: 'Nuestros Servicios' });
});

module.exports = router;