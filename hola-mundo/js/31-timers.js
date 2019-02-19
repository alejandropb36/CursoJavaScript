'use strict'

window.addEventListener('load', () => {
    // Timers
    var tiempo = setInterval(() => {
        console.log("Set interval ejecutado");

        var h1 = document.querySelector("h1");

        if(h1.style.fontsize == "50px"){
            h1.style.fontsize = "25px";
        }
        else{
            h1.style.fontsize = "50px";
        }

        

    }, 3000);
});