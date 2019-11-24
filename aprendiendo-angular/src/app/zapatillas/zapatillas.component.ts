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
    public marcas: String[];
    constructor() {
        this.marcas = new Array();
        this.titulo = 'Componente de zapatillas en angular';
        this.zapatillas = [
            new Zapatilla("Charly gris", "Charly", "gris/azul", 780, true),
            new Zapatilla("Nike rtx345", "Nike", "gris/azul", 530, true),
            new Zapatilla("running", "Adidas", "gris/azul", 1200, true),
            new Zapatilla("Charly gis claro", "Charly", "gris claro", 399, false),
            new Zapatilla("Botas", "Alexa", "cafes", 599, false)
        ];

        this.deportivas = [
            new Zapatilla("Nike r34", "Nike", "gris/azul", 699, true),
            new Zapatilla("Adidas 334", "Adiddas", "gris claro", 699, true),
            new Zapatilla("Pirma tuy6", "Pirma", "cafes", 599, true)
        ];

    }

    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
                console.log(index);
            }
        });
        console.log( this.marcas);
    }

}