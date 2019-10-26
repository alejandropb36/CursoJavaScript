var bicicleta = {
    color: "Rojo",
    modelo: "BMX",
    freno: "Disco",
    velocidadMaxima: "60km",
    cambiaColor: function (color) {
        // bicicleta.color = color
        this.color = color;
    }
};

console.log(bicicleta);

bicicleta.cambiaColor("azul");

console.log(bicicleta);