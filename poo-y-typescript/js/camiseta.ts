class Camiseta {
    private color: string;
    public modelo: string;
    public marca: string;
    public precio: number;


    public setColor(color){
        this.color = color;
    }

    public getColor():string{
        return this.color;
    }

}

var camiseta = new Camiseta();
camiseta.setColor("Rojo");
camiseta.modelo= "Manga larga";
camiseta.marca = "nike";
camiseta.precio = 10;

var playera = new Camiseta();
playera.setColor("Azul");
playera.modelo= "Manga corta";
playera.marca = "nike";
playera.precio = 10;

console.log(camiseta);
console.log(playera);