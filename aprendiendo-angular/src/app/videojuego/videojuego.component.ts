import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    constructor() {
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de videojuegos";
        console.log("Se cargo compoennte de videojuego");
    }

    ngOnInit(){
        console.log("OnInit de videojuegos!!");
    }
    ngDoCheck(){
        console.log("DoCheck de videojuegos!!");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Titulo";
    }
}