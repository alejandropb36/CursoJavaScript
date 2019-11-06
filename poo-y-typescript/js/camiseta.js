var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
camiseta.modelo = "Manga larga";
camiseta.marca = "nike";
camiseta.precio = 10;
var playera = new Camiseta();
playera.setColor("Azul");
playera.modelo = "Manga corta";
playera.marca = "nike";
playera.precio = 10;
console.log(camiseta);
console.log(playera);
