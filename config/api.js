/* Controladores */
const guardarDatos = require('../controladores/guardarDatos');

/* Operaciones */

module.exports = function (app) {

    app.post('/microservicio/guardarDatos', guardarDatos.guardar);
};