const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'old labs/pagina2')));

app.use(express.json());

// Rutas del servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'old labs/pagina2/index.html'));
});

app.get('/nosotros', (req, res) => {
  res.send('Página de Nosotros');
});

app.get('/contacto', (req, res) => {
  res.send('Página de Contacto');
});

app.get('/productos', (req, res) => {
  res.send('Página de Productos');
});

app.get('/servicios', (req, res) => {
  res.send('Página de Servicios');
});

// Ruta para el formulario con POST - CORREGIDA
app.post('/', (req, res) => {
  console.log("Datos del formulario recibidos:", req.body);
  
  const { password, confirmPassword } = req.body;
  
  // Validación de contraseñas en el servidor
  if (!password || !confirmPassword) {
    return res.status(400).send('Por favor, completa todos los campos');
  }
  
  if (password !== confirmPassword) {
    return res.status(400).send('Las contraseñas no coinciden');
  }

  // Ruta absoluta al archivo datos.txt
  const datosRuta = path.join(__dirname, 'datos.txt');
  console.log('Guardando en la ruta: ', datosRuta);

  // Fecha y hora actual para el registro
  const fechaHora = new Date().toLocaleString();
  const contenido = `Fecha: ${fechaHora}, Contraseña: ${password}\n`;

  // Guardar en el archivo
  fs.appendFile(datosRuta, contenido, (err) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      return res.status(500).send('Hubo un error al guardar los datos');
    }
    console.log('Datos guardados exitosamente en:', datosRuta);
    res.status(200).send('Datos guardados correctamente');
  });
});

// Ruta 404 para manejar las rutas no existentes
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});