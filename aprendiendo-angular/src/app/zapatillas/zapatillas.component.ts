import { Component } from '@angular/core'
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
    public titulo: string;
    constructor(){
        this.titulo = "Componente de zapatillas en angular";
    }
}