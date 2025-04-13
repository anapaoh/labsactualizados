const express = require('express');
const router = express.Router();
const personajesController = require('../controllers/personajesController');

router.get('/', personajesController.getInicio);
router.get('/personajes', personajesController.getPersonajes);

module.exports = router;