const express = require('express');
const router = express.Router();
const sabioVerdeController = require('../controllers/sabioVerdeController');

router.get('/', sabioVerdeController.renderInicio);

router.get('/consejos', sabioVerdeController.obtenerConsejos);
router.post('/consejos', sabioVerdeController.agregarConsejo);

module.exports = router;