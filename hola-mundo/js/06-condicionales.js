'use strict'

// Condicional IF

var edad = 55; 

/*
 * Operadores relacionales
 * Mayor: >
 * Menor: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto: !=
*/

if(edad > 23){
    console.log("Eres mas grande que yo!");
}
else if (edad == 23){
    console.log("Tienes la misma edad que yo!");
}
else{
    console.log("Eres mas chico que yo!");
}

/*
 * Operadores logicos.
 * And: &&
 * Or: ||
 * Negación: !
*/

var year = 2019;
if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}
else{
    console.log("AÑO NO REGISTRADO");
}