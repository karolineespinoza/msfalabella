"use strict"
const funciones = require('../funciones/funciones');

exports.guardar = function (req, res) {
    try {
       const body = req.body;

        if(!body.rut) {
            return res.status(500).send('El campo RUT es requerido');
        }
        else if (!body.numeroCelular) {
            return res.status(500).send('El campo numeroCelular es requerido');
        }
        else if (!body.email) {
                return res.status(500).send('El campo email es requerido');
        }
        else if (!body.renta) {
                return res.status(500).send('El campo renta es requerido');
        }
        else {
            funciones.escribir(JSON.stringify(body));
            return res.status(200).send('Datos guardados correctamente.');
        }
    } catch (error) {
    console.log(error);
        return res.status(500).send(error);
    }
}