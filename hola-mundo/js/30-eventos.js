'use strict'

// Eventos del raton

var boton = document.querySelector("#boton");


function cambiarColor()
{
    var bg = boton.style.background;
     if(bg == "green")
     {
        boton.style.background = "red";
     }
     else
     {
        boton.style.background = "green";
     }
     boton.style.padding = "15px";
     boton.style.boder = "1px solid #ccc";
}

// click
boton.addEventListener('click', function(){
    cambiarColor();
});


// Mouse oover
boton.addEventListener('mouseover', function(){
    
    boton.style.background = "#ccc";
    
});

// Mouseout
boton.addEventListener('mouseout', function(){
    
    boton.style.background = "white";
    
});

// Focus
var input = document.querySelector("#campo_nombre");

input.addEventListener('focus', function () {

    console.log("Estas dentro de input");

});

// Blur
input.addEventListener('blur', function () {

    console.log("Estas fuera de input");

});

// Keydown
input.addEventListener('keydown', function (event) {

    console.log("[keydown]Pulsando esta tecla: ", String.fromCharCode(event.keyCode));

});

// Keypress
input.addEventListener('keypress', function (event) {

    console.log("[keypress]Tecla presionada: ", String.fromCharCode(event.keyCode));

});

// Keyup
input.addEventListener('keyup', function (event) {

    console.log("[keyup]Tecla soltada: ", String.fromCharCode(event.keyCode));

});
