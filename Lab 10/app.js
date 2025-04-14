const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const rutasPrincipales = require('./routes/principal');
const rutasFans = require('./routes/fans');

app.use('/', rutasPrincipales);
app.use('/', rutasFans);

app.use((req, res) => {
  res.status(404).send('<h1>🧚‍♀️ 404 - No se encontró esta página</h1><a href="/">Inicio</a>');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});