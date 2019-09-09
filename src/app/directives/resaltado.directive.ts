import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') color: string;

  constructor(private element: ElementRef) {
    
   }
  
   @HostListener('mouseenter') enterMouse(){
     this.resaltar(this.color || 'orange')
      //this.element.nativeElement.style.backgroundColor = "red";
      //ahora la funcion resaltar manda el color
   }
   @HostListener('mouseleave') leaveMouse(){
    this.resaltar(null || '')
   }
   private resaltar( color:string){
    this.element.nativeElement.style.backgroundColor = color;
   }
}
