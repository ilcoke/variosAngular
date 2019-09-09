import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      hola mundo.. desde etiqqueta
    </p>
    <button (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 10;
  constructor() { }

  ngOnInit() {
  }

}
