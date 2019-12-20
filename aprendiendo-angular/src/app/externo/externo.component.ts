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
  public fecha: any;

  public newUser: any;
  public usuarioGuardado: any;

  constructor(private _peticionesService: PeticionesService) { 
    this.userId = 1;
    this.newUser = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date(2019, 11, 24);
  }

  cargaUsuario() {
    this.user = false;
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

  onSubmit(form) {
    console.log(this.newUser);
    this._peticionesService.addUser(this.newUser).subscribe(
      response => {
        console.log(response);
        this.usuarioGuardado = response;
        form.reset();
      },
      error => {
        console.log(error);
      }
    );
  }

}
