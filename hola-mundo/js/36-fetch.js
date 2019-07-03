'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
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
        
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        console.log(data);
        return getUsuario(2);
    })
    .then(data => data.json())
    .then(user => {
        mostrarUsuario(user.data);   
    })
    .catch(error => {
        console.log(error + " Este es el error!!!!!");
    });

function getUsuarios(){
    return fetch('https://reqres.in/api/user');
}

function getUsuario(id){
    var url = 'https://reqres.in/api/users/' + id;
    console.log(url);
    return fetch(url);
}

function getInfo(){
    
    var profesor = {
        nombre: "Alejandro",
        apellidos: "Ponce",
        url: "alejandroponce.com"
    };
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function() {
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 9871');
            return resolve(profesor_string);
        }, 3000);
        
    });
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


