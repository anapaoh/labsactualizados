exports.getInicio = (req, res) => {
    const usuario = req.session.user;
    const mensaje = req.flash('mensaje');
    res.render('index', { usuario, mensaje });
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.setSesion = (req, res) => {
    const nombreUsuario = req.body.username;
    req.session.user = nombreUsuario;
    req.flash('mensaje', 'Sesión iniciada correctamente');
    res.redirect('/');
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};

exports.setCookie = (req, res) => {
    res.setHeader('Set-Cookie', 'miCookie=valor123; HttpOnly');
    res.redirect('/');
};

exports.leerCookie = (req, res) => {
    const valor = req.cookies.miCookie || 'No encontrada';
    res.send('Valor de la cookie: ' + valor);
};