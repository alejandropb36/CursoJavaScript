'use strict'

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

var elemento = "";

do{
    elemento = prompt("Escribe una pelicula: ", "");
    peliculas.push(elemento);
}while(elemento != "er");

peliculas.pop();

var peliculas_string = peliculas.join();
var cadena = "texto1, texto2, texto3";
var peliculas_array = peliculas_string.split(",");
var cadena2 = cadena.split(", ");

console.log(cadena2);
console.log(peliculas_array);
