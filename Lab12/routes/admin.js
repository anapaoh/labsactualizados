const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/agregar', adminController.getAgregarPersonaje);
router.post('/agregar', adminController.postAgregarPersonaje);

module.exports = router;