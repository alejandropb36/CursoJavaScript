'use strict'

// BOM - Browser Object Model

function getBom()
{
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log("Screen");
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redirect(url)
{
    window.location.href = url;
}

function abrirVentana(url)
{
    // Esto abre en una pestaña
    //window.open(url); 
    // Esto abre una ventana pequeña
    window.open(url,"","width=500,height=400");
}
getBom();
