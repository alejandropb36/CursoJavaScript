var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
"";
var camiseta = new Camiseta("Rojo", "Manga larga", "nike", 10);
var playera = new Camiseta("Azul", "Manga marca", "nike", 10);
console.log(camiseta);
console.log(playera);
