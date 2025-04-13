const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const path = require('path');

const usersRoutes = require('./routes/users.routes');
const csrfProtection = csrf();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'mi_secreto_seguro',
  resave: false,
  saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.user = req.session.user;
  next();
});

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/users/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});