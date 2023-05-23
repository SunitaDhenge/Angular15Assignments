import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit {

  @Input()  appShadow = "Yellow";

  constructor(private el:ElementRef) { }

   ngOnInit()
   {
      this.el.nativeElement.style.textShadow = "2px 2px 5px "+this.appShadow;
   }
}