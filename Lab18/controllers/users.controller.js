const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.getSignup = (req, res) => {
    res.render('signup', { isNew: true });
};

exports.postSignup = (req, res) => {
    const { username, password } = req.body;

    Usuario.findByUsername(username)
        .then(([rows]) => {
            if (rows.length > 0) {
                return res.redirect('/users/signup'); // Ya existe
            }
            const nuevo = new Usuario(username, password);
            return nuevo.save().then(() => res.redirect('/users/login'));
        })
        .catch(err => console.log(err));
};

exports.getLogin = (req, res) => {
    res.render('login', { isNew: false });
};

exports.postLogin = (req, res) => {
    const { username, password } = req.body;

    Usuario.findByUsername(username)
        .then(([rows]) => {
            if (rows.length === 0) {
                return res.redirect('/users/login');
            }

            const user = rows[0];
            bcrypt.compare(password, user.password)
                .then(match => {
                    if (match) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(() => res.redirect('/'));
                    }
                    res.redirect('/users/login');
                });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/users/login');
        });
};