interface CamisetaBase{
    setColor(color);
    getColor();
}


class Camiseta implements CamisetaBase{
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

// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    public setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    public getCapucha(): boolean{
        return this.capucha;
    }

}


var camiseta = new Camiseta("Rojo", "Manga larga", "nike", 10);

var playera = new Camiseta("Azul", "Manga marca", "nike", 10);

var sudadera = new Sudadera("Rojo", "Manga larga", "nike", 10);
sudadera.setCapucha(true);
sudadera.setColor("Jaspeadito");
console.log(sudadera);

console.log(camiseta);
console.log(playera);