'use strict'

/**
 * La palabra jQuery y $ es lo mismo: es el onjeto jQuery
 * el selector document se refiere a toda la pagina
 */
$(document).ready(function() {
    console.log("Estamos listos");

    // Selector de ID
    var rojo = $("#rojo");
    var amarillo = $("#amarillo");

    rojo.css("background", "red")
        .css("color","white");
    amarillo.css("background", "yellow")
            .css("color", "green");

    $("#verde").css("background", "green")
               .css("color", "white");

    console.log(rojo);
});