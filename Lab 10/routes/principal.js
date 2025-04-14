const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'valle.html'));
});

router.get('/peliculas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'peliculas.html'));
});

router.get('/hadas', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'hadas.html'));
  });  

module.exports = router;