const personajes = [];

exports.getInicio = (req, res) => {
  res.render('index', { titulo: 'Bienvenida al Mundo de Tinkerbell' });
};

exports.getPersonajes = (req, res) => {
  res.render('lista-personajes', { personajes, titulo: 'Personajes' });
};

exports.personajes = personajes;