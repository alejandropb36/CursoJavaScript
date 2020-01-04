import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraSlider: number;
  public captions: boolean;

  constructor() {
    this.captions = true;
  }

  ngOnInit() {
  }


  cargarSlider() {
    this.anchuraSlider = this.widthSlider;
  }

  resetSlider() {
    this.anchuraSlider = null;
  }
}
