const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const rutasPrincipales = require('./routes/pagprin');
const rutasSecundarias = require('./routes/pagsec');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    console.log('Middleware inicial ejecutado');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'old labs', 'pagina2')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'old labs', 'pagina2', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', rutasPrincipales);
app.use('/', rutasSecundarias);

app.use((req, res, next) => {
    res.status(404).render('404', { titulo: '404. Página no encontrada' });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
 
    if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data');
        console.log('Directorio de datos creado');
    }
});