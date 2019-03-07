'use strict'

/**
 * 21/02/2019
 * Ejercicio del archivo Formulario.html
 */

 // Evento que carga primero la pagina antes que el script
 window.addEventListener('load', function () {
    console.log("Dom cargado!");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.groupCollapsed("Evento submit capturado!!");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        /**
         * Validación del formulario
         */
        if(nombre.trim() == null || nombre.trim().length == 0)
        {
            alert("El nombre no es valido");
            return false;
        }

        if(apellido.trim() == null || apellido.trim().length == 0)
        {
            alert("El apellido no es valido");
            return false;
        }

        if(edad == null || edad >= 0 || isNaN(edad))
        {
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellido, edad];
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;


        /*
        for(var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */
    });

 });