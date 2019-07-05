'use strict'

$(document).ready(function (){
    console.log('jQuery y página listos !!');

    /**
     * MouseOver y MouseOut.
     * Este tipo de animaciones se pueden hacer con CSS
     * pero cuando se require mas funcionalidades que solo
     * la animacion es mejor usa jQuery o JS, si no se 
     * requiere entonces CSS.
     */
    var caja = $("#caja");
    /*
    caja.mouseover(function () {
        $(this).css('background', 'red');
    });

    caja.mouseout(function() {
        $(this).css("background", "green");
    });
    */

    /**
     * Hover.
     * Hace lo mismo que los eventos pasados pero mas facil.
     */
    function cambiaRojo() {
        $(this).css('background', 'red');
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    /**
     * Click y doble click
     */
    caja.click(function() {
        $(this).css("background", "blue")
                .css("color", "white");
    });

    caja.dblclick(function() {
        $(this).css("background", "pink")
                .css("color", "yellow");
    });

});