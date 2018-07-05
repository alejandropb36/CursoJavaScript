'use strict'
// Pruebas con let y var

var numero = 40;

console.log(numero); //Valor va a ser 40

if(true){
    var numero = 50;
    console.log(numero); // Valor va a ser 50
}

console.log(numero); //Valor va a ser 50


// Prueba con let
var texto = "Curso de JS ";
console.log(texto); // valor js

if(true){
    let texto = "Curso de phyton"; //valor phyton
    console.log(texto); 
}

console.log(texto); //valor js


// Let se limita a ser local y var sera global