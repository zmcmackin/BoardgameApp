import { Component } from '@angular/core';

/*
  Generated class for the Board component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'board',
  templateUrl: 'board.html'
})
export class BoardComponent {

  text: string;

  constructor() {
    console.log('Hello Board Component');
    this.text = 'Hello World';
  }

}
