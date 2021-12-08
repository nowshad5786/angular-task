import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDivts]'
})
export class DivtsDirective {

  constructor(private e:ElementRef, private renderer:Renderer2) {
    e.nativeElement.style.color="red";
   }
   ngOnInit(){
     this.renderer.setStyle(this.e.nativeElement,'background-color','khaki');
   }

}
