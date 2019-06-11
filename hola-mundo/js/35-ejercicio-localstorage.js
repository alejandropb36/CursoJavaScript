'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function() {
    
    var titulo = document.querySelector("#addpelicula").value;
    
    if(titulo.length > 0){
        localStorage.setItem(titulo, titulo);
    }
    
});

var ul = document.querySelector("#peliculas-lista");
for(var i in localStorage){
    console.log(localStorage[i]);

    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formularioBorrar = document.querySelector("#formBorrarPeliculas");

formularioBorrar.addEventListener('submit', function() {
    
    var titulo = document.querySelector("#borrarPelicula").value;
    
    if(titulo.length > 0){
        localStorage.removeItem(titulo);
    }
    
});