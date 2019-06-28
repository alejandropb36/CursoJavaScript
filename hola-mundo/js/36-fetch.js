'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario");

/**
 * La promesa nos sirve para hacer multiples peticiones
 * sin hacer tanto callback
 */
getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        // Se utiliza el return por la promesa
        return getUsuario(2);
    })
    .then(data => data.json())
    .then(user => {
        mostrarUsuario(user.data);
    });

function getUsuarios(){
    return fetch('https://reqres.in/api/user');
}

function getUsuario(id){
    var url = 'https://reqres.in/api/users/' + id;
    console.log(url);
    return fetch(url);
}

function listadoUsuarios(usuarios){
    // Esto es lo mismo que un foreach
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        
        nombre.innerHTML= i + ". " + user.name + ", year: " + user.year;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';

        });
}

function mostrarUsuario (user){
    // Esto es lo mismo que un foreach
    console.log(user.avatar);
    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');
    nombre.innerHTML=  user.first_name + ", email: " + user.email;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_usuario.appendChild(nombre);
    div_usuario.appendChild(avatar); 

    document.querySelector("#usuario .loading").style.display = 'none';

    
}


