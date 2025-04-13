const fs = require('fs');
const path = require('path');
const personajesController = require('./personajesController');
const personajes = personajesController.personajes;

exports.getAgregarPersonaje = (req, res) => {
  res.render('agregar-personaje', { titulo: 'Agregar Personaje' });
};

exports.postAgregarPersonaje = (req, res) => {
  const nuevoPersonaje = {
    nombre: req.body.nombre,
    habilidad: req.body.habilidad,
    hada: req.body.hada === 'on'
  };

  personajes.push(nuevoPersonaje);

  const linea = `Nombre: ${nuevoPersonaje.nombre}, Habilidad: ${nuevoPersonaje.habilidad}, ¿Es hada?: ${nuevoPersonaje.hada}\n`;

  const rutaArchivo = path.join(__dirname, '..', 'data', 'personajes.txt');
  fs.appendFile(rutaArchivo, linea, (err) => {
    if (err) {
      console.error('Error al guardar el personaje en el archivo:', err);
    }
  });

  res.redirect('/personajes');
};
