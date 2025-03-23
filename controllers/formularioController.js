const formularioModel = require('../models/formularioModel');

exports.procesarFormulario = (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    const datos = {
        nombre,
        correo,
        mensaje,
        fecha: new Date().toLocaleString()
    };

    formularioModel.guardarFormulario(datos, (err) => {
        if (err) {
            console.error('Error al guardar datos:', err);
            return res.status(500).send('Error al procesar el formulario');
        }

        res.render('exito', {
            titulo: 'Formulario Enviado',
            nombre: datos.nombre
        });
    });
};

exports.mostrarMensajes = (req, res) => {
    formularioModel.obtenerMensajes((err, mensajes) => {
        if (err) {
            console.error('Error al leer los mensajes:', err);
            return res.status(500).send('Error al mostrar los mensajes');
        }

        res.render('mensajes', {
            titulo: 'Mensajes Recibidos',
            mensajes: mensajes
        });
    });
};