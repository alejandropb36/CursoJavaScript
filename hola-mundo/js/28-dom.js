'use stric'

// DOM - Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}

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


// Uso de DOM en javascript


// Conseguir los elementos por Clase de css
/*var divsAmarillos = document.getElementsByClassName('amarillo');
var divsRojos = document.getElementsByClassName('rojo');

console.log(divsAmarillos);

divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if(divsRojos[div].className == "rojo"){
		console.log(divsRojos[div]);
		divsRojos[div].style.background= "red";
	}
}
 
console.log(divsRojos);*/