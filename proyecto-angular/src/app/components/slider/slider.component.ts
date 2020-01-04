import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;

  constructor() { }

  ngOnInit() {
    $("#logo").click(function(e) {
      e.preventDefault();
      $("header").css("background", "green")
                  .css("height", "50px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

}
