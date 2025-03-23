const express = require('express');
const fs = require('fs');
const path = require('path');
const formularioController = require('../controllers/formularioController'); // Ajusta la ruta según tu estructura de carpetas

const router = express.Router();

router.get('/nosotros', (req, res, next) => {
    res.render('nosotros', { titulo: 'Sobre Nosotros' });
});

router.get('/contacto', (req, res, next) => {
    res.render('contacto', { titulo: 'Contacto' });
});

router.get('/formulario', (req, res) => {
    res.render('formulario', { titulo: 'Formulario de Contacto' });
});
router.post('/enviar-formulario', formularioController.procesarFormulario);

router.get('/mensajes', formularioController.mostrarMensajes);

module.exports = router;