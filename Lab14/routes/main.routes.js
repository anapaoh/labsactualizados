const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

router.get('/', mainController.getInicio);
router.get('/login', mainController.getLogin);
router.post('/login', mainController.setSesion);
router.get('/logout', mainController.logout);
router.get('/set-cookie', mainController.setCookie);
router.get('/leer-cookie', mainController.leerCookie);

module.exports = router;
