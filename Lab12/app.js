const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const personajesRoutes = require('./routes/personajes');
const adminRoutes = require('./routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(personajesRoutes);

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada' });
});

app.listen(3000);