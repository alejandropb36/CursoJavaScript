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
    

    // Selector de clases
    var mi_clase = $('.zebra');

    /**
     * Para seleccionar se puede usa como un array corchetes
     * [#] o el metodo .eq(#) que tiene mas metodos.
     * console.log(mi_clase.eq(1));
     */

     mi_clase.css("padding", "5px");

     $('.sin_borde').click(function() {
         console.log("Le has dado click a un elemento");
        $(this).addClass('zebra');
     });

    // Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var parrafo = $(this);
        if(!parrafo.hasClass("grande")){
            parrafo.addClass("grande");
        }
        else{
            parrafo.removeClass("grande");
        }
    });

    // Selectores de atributos
    $('[title="Google"]').css("background", "#ccc");
    $('[title="Facebook"]').css("background", "blue");
    
});