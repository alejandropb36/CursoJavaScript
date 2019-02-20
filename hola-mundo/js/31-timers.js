'use strict'

window.addEventListener('load', () => {
    // Timers

    function intervalo(){
        var tiempo = setInterval(() => {
            console.log("Set interval ejecutado");
    
            var h1 = document.querySelector("h1");
    
            if(h1.style.fontsize == "50px"){
                h1.style.fontsize = "25px";
            }
            else{
                h1.style.fontsize = "50px";
            }
        }, 1000);
        return tiempo;
    }
    
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener('click', function () {
        alert("Has parado el intervalo en bucle"); 
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener('click', function () {
        alert("Has iniciado el intervalo"); 
        intervalo();
    });

});