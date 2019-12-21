'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexion a base de datos establecida con éxito!");

        // Server
        app.listen(port, () => {
            console.log("Server running in url: http://localhost:3700");
        });

    })
    .catch(err => {
        console.log(err);
    });