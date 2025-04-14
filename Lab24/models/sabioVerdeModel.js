const db = require('../util/database');

module.exports = {
  async obtenerTodos(callback) {
    try {
      const [rows] = await db.query('SELECT * FROM consejos ORDER BY fecha DESC');
      callback(null, rows);
    } catch (err) {
      callback(err, null);
    }
  },

  async agregarNuevo(consejoVerde, callback) {
    try {
      const [result] = await db.query('INSERT INTO consejos (consejoVerde) VALUES (?)', [consejoVerde]);
      callback(null, {
        id: result.insertId,
        consejoVerde,
        fecha: new Date().toISOString()
      });
    } catch (err) {
      callback(err, null);
    }
  }
};