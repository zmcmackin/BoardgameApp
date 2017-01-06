import {Component} from '@angular/core';

@Component({
	selector: 'board',
	templateUrl: 'board.html'
})
export class BoardComponent {

	grid: Array<Array<number>>;

	constructor() {
		this.grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	}
}