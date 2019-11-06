class Camiseta {
    private color: string;
    public modelo: string;
    public marca: string;
    public precio: number;

    constructor(color, modelo, marca, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor():string{
        return this.color;
    }

}
""
var camiseta = new Camiseta("Rojo", "Manga larga", "nike", 10);

var playera = new Camiseta("Azul", "Manga marca", "nike", 10);

console.log(camiseta);
console.log(playera);