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