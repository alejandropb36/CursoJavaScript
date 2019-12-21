'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS

// Rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1> Home page API </h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde mi api'
    });
});

app.post('/test', (req, res) => {
    console.log(req);
    res.status(200).send({
        message: 'Hola mundo desde mi api'
    });
});
// Export
module.exports = app;