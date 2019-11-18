import { Component, OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public deportivas: Array<Zapatilla>;
    constructor() {
        this.titulo = 'Componente de zapatillas en angular';
        this.zapatillas = [
            new Zapatilla("Charly gris", "Charly", "gris/azul", 699, true),
            new Zapatilla("Charly gis claro", "Charly", "gris claro", 699, true),
            new Zapatilla("Botas", "Alexa", "cafes", 599, true)
        ];

        this.deportivas = [
            new Zapatilla("Nike r34", "Nike", "gris/azul", 699, true),
            new Zapatilla("Adidas 334", "Adiddas", "gris claro", 699, true),
            new Zapatilla("Pirma tuy6", "Pirma", "cafes", 599, true)
        ];

    }

    ngOnInit() {
        console.log(this.zapatillas);
    }
}