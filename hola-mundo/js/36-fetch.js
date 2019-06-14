'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios")


var usuarios = [];
fetch('https://reqres.in/api/user')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        // Esto es lo mismo que un foreach
        usuarios.map((user, i) => {
           let nombre = document.createElement('h3');

           nombre.innerHTML= i + ". " + user.name + ", year: " + user.year;

           div_usuarios.appendChild(nombre);

           document.querySelector(".loading").style.display = 'none';

        });
    });


