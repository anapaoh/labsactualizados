const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'un string',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());

const mainRoutes = require('./routes/main.routes');
app.use(mainRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
