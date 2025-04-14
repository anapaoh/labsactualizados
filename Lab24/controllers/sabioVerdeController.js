const sabioVerdeModel = require('../models/sabioVerdeModel');

exports.renderInicio = (req, res) => {
  res.render('index');
};

exports.obtenerConsejos = (req, res) => {
  sabioVerdeModel.obtenerTodos((err, consejos) => {
    if (err) return res.status(500).json({ error: 'Error al obtener consejos' });
    res.json(consejos);
  });
};

exports.agregarConsejo = (req, res) => {
  const { consejoVerde } = req.body;
  if (!consejoVerde) return res.status(400).json({ error: 'Contenido requerido' });

  sabioVerdeModel.agregarNuevo(consejoVerde, (err, nuevo) => {
    if (err) return res.status(500).json({ error: 'Error al guardar consejo' });
    res.status(201).json(nuevo);
  });
};