'use strict'

// Localsorage

/**
 * Comprobar si el localstorage esta disponible
 */
if(typeof(Storage) != 'undefined'){
    console.log("Localstorage disponible");
}
else{
    console.log("Incompatible con localstorage ");
}

/**
 * Guardar datos en el localstorage
 */
localStorage.setItem("titulo", "elemento del localstorage");

/**
 * Recuperar elemento del localstorage
 */
var local = localStorage.getItem("titulo");
console.log(local);

document.querySelector("#peliculas").innerHTML = local;


/**
 * Guardar Objetos en el local storage
 */
var usuario = {
    nombre: "Alejandro Ponce",
    email: "alexponce36@hotmail.com",
    web: "alex.com"
};

// Con el stringify podemos convertir a string en objeto json
localStorage.setItem("usuario", JSON.stringify(usuario));

/**
 * Recuperar objeto JSON del localstorage
 */
var json = localStorage.getItem("usuario");
console.log(json);

var userjs = JSON.parse(json);

console.log(userjs);

document.querySelector("#datos").append(" web: " + userjs.web);

/**
 * Borrar elementos del local storage
 */
localStorage.removeItem("usuario")

// Vaciar todo el local storage
localStorage.clear();