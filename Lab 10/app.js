const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta 1: Valle de las Hadas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'valle.html'));
});

// Ruta 2: Películas
app.get('/peliculas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'peliculas.html'));
});

// Ruta 3: Formulario para hada favorita
app.get('/hada-favorita', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hada-favorita.html'));
});

app.post('/hada-favorita', (req, res) => {
  const { nombre, hada, motivo } = req.body;
  const entrada = `Nombre: ${nombre}, Hada favorita: ${hada}, Motivo: ${motivo}\n`;

  fs.appendFile('hadas-favoritas.txt', entrada, (err) => {
    if (err) {
      return res.status(500).send('Error al guardar tu hada');
    }
    res.send(`<h2>Se ha guardado tu hada favorita</h2><a href="/">Volver al Valle</a>`);
  });
});

// Ruta 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Este sendero de hadas no existee</h1><a href="/">Volver al Valle</a>');
});

app.listen(port, () => {
  console.log(`Valle de las Hadas en http://localhost:${port}`);
});
