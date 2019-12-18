import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [
    PeticionesService
  ]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: number;

  constructor(private _peticionesService: PeticionesService) { 
    this.userId = 1;
  }

  ngOnInit() {
    this.cargaUsuario();
  }

  cargaUsuario() {
    return this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result;
        console.log(this.user);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
