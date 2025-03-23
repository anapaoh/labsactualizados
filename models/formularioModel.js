const fs = require('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, '..', 'data', 'formulario.txt');

exports.guardarFormulario = (datos, callback) => {
    const datosFormateados = `
Fecha: ${datos.fecha}
Nombre: ${datos.nombre}
Correo: ${datos.correo}
Mensaje: ${datos.mensaje}
----------------------------------------
`;

    fs.appendFile(rutaArchivo, datosFormateados, (err) => {
        callback(err);
    });
};

exports.obtenerMensajes = (callback) => {
    fs.readFile(rutaArchivo, 'utf8', (err, data) => {
        if (err) return callback(err, null);

        const mensajes = [];
        const bloques = data.split('----------------------------------------');
        
        bloques.forEach(bloque => {
            if (bloque.trim()) {
                const lineas = bloque.trim().split('\n');
                const mensaje = {};
                
                lineas.forEach(linea => {
                    const [clave, valor] = linea.split(': ');
                    if (clave && valor) {
                        mensaje[clave.toLowerCase()] = valor;
                    }
                });
                
                if (Object.keys(mensaje).length > 0) {
                    mensajes.push(mensaje);
                }
            }
        });

        callback(null, mensajes);
    });
};