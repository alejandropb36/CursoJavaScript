import { Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2> Componente de videojuego </h2>
        <ul> 
            <li> GTA </li>
            <li> principe de persia </li>
            <li> Tekken </li>
            <li> LOL </li>
        </ul>
    `
})

export class VideojuegoComponent {
    constructor() {
        console.log("Se cargo compoennte de videojuego");
    }
}