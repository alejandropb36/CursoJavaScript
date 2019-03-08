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
