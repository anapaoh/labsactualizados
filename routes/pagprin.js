const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/nosotros', (req, res, next) => {
    res.render('nosotros', { titulo: 'Sobre Nosotros' });
});

router.get('/contacto', (req, res, next) => {
    res.render('contacto', { titulo: 'Contacto' });
});

router.get('/formulario', (req, res, next) => {
    res.render('formulario', { titulo: 'Formulario de Contacto' });
});

router.post('/enviar-formulario', (req, res, next) => {
    const datos = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        mensaje: req.body.mensaje,
        fecha: new Date().toLocaleString()
    };

    const datosFormateados = `
Fecha: ${datos.fecha}
Nombre: ${datos.nombre}
Correo: ${datos.correo}
Mensaje: ${datos.mensaje}
----------------------------------------
`;

    const rutaArchivo = path.join(__dirname, '..', 'data', 'formulario.txt');
    
    fs.appendFile(rutaArchivo, datosFormateados, (err) => {
        if (err) {
            console.error('Error al guardar datos:', err);
            return res.status(500).send('Error al procesar el formulario');
        }
        
        res.render('exito', { 
            titulo: 'Formulario Enviado', 
            nombre: datos.nombre 
        });
    });
});

router.get('/mensajes', (req, res, next) => {
    const rutaArchivo = path.join(__dirname, '..', 'data', 'formulario.txt');
    
    fs.readFile(rutaArchivo, 'utf8', (err, data) => {
        const mensajes = [];
        
        if (!err && data) {
            const bloques = data.split('----------------------------------------');
            
            for (const bloque of bloques) {
                if (bloque.trim() === '') continue;
                
                const lineas = bloque.trim().split('\n');
                const mensaje = {};
                
                for (const linea of lineas) {
                    if (linea.trim() === '') continue;
                    
                    const [clave, valor] = linea.split(': ');
                    if (clave && valor) {
                        mensaje[clave.toLowerCase()] = valor;
                    }
                }
                
                if (Object.keys(mensaje).length > 0) {
                    mensajes.push(mensaje);
                }
            }
        }
        
        res.render('mensajes', {
            titulo: 'Mensajes Recibidos',
            mensajes: mensajes
        });
    });
});

module.exports = router;