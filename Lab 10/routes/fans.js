const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/hada-favorita', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'hada-favorita.html'));
});

router.post('/hada-favorita', (req, res) => {
  const { nombre, hada, motivo } = req.body;
  const entrada = `${nombre} eligió a ${hada} porque: ${motivo}\n`;

  fs.appendFile('hadas-favoritas.txt', entrada, err => {
    if (err) return res.status(500).send('Error al guardar');
    res.redirect('/gracias');
  });
});

router.get('/gracias', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'gracias.html'));
});

module.exports = router;