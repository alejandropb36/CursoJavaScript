import { Injectable } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService  {

    public zapatillas: Zapatilla[];

    constructor() {
        this.zapatillas = [
            new Zapatilla('Charly gris', 'Charly', 'gris/azul', 780, true),
            new Zapatilla('Nike rtx345', 'Nike', 'gris/azul', 530, true),
            new Zapatilla('running', 'Adidas', 'gris/azul', 1200, true),
            new Zapatilla('Charly gis claro', 'Charly', 'gris claro', 399, false),
            new Zapatilla('Botas', 'Alexa', 'cafes', 599, false)
        ];
    }

    getTexto() {
        return 'Hola que hace esto es un testo';
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}