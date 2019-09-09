import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>
      <app-css></app-css>
      <app-clases></app-clases>
      <br>
      <br>
      <h3>directiva</h3>
      <p [appResaltado]="'red'"> Hola Mundo</p>
      <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
