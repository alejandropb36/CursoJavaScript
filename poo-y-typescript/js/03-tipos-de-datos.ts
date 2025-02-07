// string
let cadena: string | number = "Alejandro ponce";

cadena = 123;

console.log(cadena);

// Number
let numero: number = 12;

// numero = "cadena";

console.log(numero);

// Boleano
var verdadero_falso: boolean = true;

// verdadero_falso = 23;

console.log(verdadero_falso);

// Any

var cualquier_cosa: any = "Hola como estas";

cualquier_cosa = false;

console.log(cualquier_cosa);

// Arrays
var lenguajes : Array<string> = ["PHP", "JS", "C#"];

// lenguajes = [123,"Hola"];

console.log(lenguajes);

let years: number[] = [1,2,3,4,5];
console.log(years);

// Tipo de dato personalizado
type letrasNumeros = string | number;

var miType : letrasNumeros[] = [123, "string"];

console.log(miType);

// let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);