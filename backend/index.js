'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexion a base de datos establecida con éxito!");
    })
    .catch(err => {
        console.log(err);
    });