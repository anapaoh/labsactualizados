const readline = require('readline');
const fs = require('fs');
const http = require('http');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return numeros.length > 0 ? suma / numeros.length : 0;
}

function guardarTexto(nombre, contenido) {
    fs.writeFileSync(nombre, contenido);
    console.log(`Se guardó el texto en ${nombre}`);
}

function obtenerNumeros() {
    rl.question('Ingresa los números separados por coma (por ejemplo: 1, 2, 3): ', (input) => {
        const numeros = input.split(',').map(num => parseFloat(num.trim()));

        const resultadoPromedio = promedio(numeros);
        console.log(`El promedio es: ${resultadoPromedio}`);

        rl.question('Ingresa un texto para guardar en un archivo: ', (texto) => {
            guardarTexto('mensaje.txt', texto);
            
            rl.close();
        });
    });
}

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'lab5', 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Hubo un error al cargar la página');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

obtenerNumeros();