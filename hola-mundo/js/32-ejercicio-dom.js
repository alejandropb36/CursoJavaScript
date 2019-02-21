'use strict'

/**
 * 21/02/2019
 * Ejercicio del archivo Formulario.html
 */

 // Evento que carga primero la pagina antes que el script
 window.addEventListener('load', function () {
    console.log("Dom cargado!");

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function () {
        console.groupCollapsed("Evento submit capturado!!");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        console.log(nombre, apellido, edad);


    });

 });