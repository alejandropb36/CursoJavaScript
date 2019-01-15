'use stric'

// DOM - Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}

//Conseguir elementos con id en especifico
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
var caja2 = caja;

document.write("<div>" + caja2.innerHTML + "</div>");

caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola cajas";

console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto ";
contenidoEnTexto.style.background = "red";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

seccion.append(hr);

for (var valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == "string"){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}	
}
seccion.append(hr);