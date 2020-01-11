import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraSlider: number;
  public captions: boolean;
  public autor: any;
  @ViewChild('textos', {static: true}) textos: ElementRef;

  constructor() {
    this.captions = true;
  }

  ngOnInit() {
    var opcion_clasica = document.querySelector('#texto').innerHTML;
    console.log(this.textos.nativeElement.textContent);
  }


  cargarSlider() {
    this.anchuraSlider = this.widthSlider;
  }

  resetSlider() {
    this.anchuraSlider = null;
  }

  getAutor(event) {
    console.log(event);
    this.autor = event;
  }
}
