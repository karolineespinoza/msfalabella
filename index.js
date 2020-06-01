const express = require("express");
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var router = express.Router();

//CONFIG

app.use(router);
require('./config/api')(router);

app.get('/test', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(3000, () =>
    {
    console.log("Microservicio está ejecutándose en el puerto 3000");
    }
);

