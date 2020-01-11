import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    console.log(el);
  }

  ngOnInit() {
    var element = this.el.nativeElement;
    element.style.background = "blue";
    element.style.padding = "10px";
    element.style.fontSize = "xx-large";
    element.style.marginTop = "20px";
    element.style.color = "white";
  }

}
