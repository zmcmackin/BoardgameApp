import {Component, OnInit} from '@angular/core';

enum TileState { BLANK = 0, X, O }

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent implements OnInit {

  private static X_URL: string = './assets/images/x.png';
  private static O_URL: string = './assets/images/o.png';
  private static BLANK_URL: string = './assets/images/blank.png';

  tileState: TileState = TileState.BLANK;
  imgurl: string;

  constructor() {
  }

  ngOnInit() {
    this.imgurl = TileComponent.BLANK_URL;
  }

  onClick() {
    if (this.tileState == TileState.X) {
      this.setTileState(TileState.O);
    } else {
      this.setTileState(TileState.X);
    }
  }

  getTileState(): TileState {
    return this.tileState;
  }

  setTileState(newState: TileState) {
    if (this.tileState != newState) {
      this.tileState = newState;
      this.updateUrl();
    }
  }

  private updateUrl() {
    switch (this.tileState) {
      case TileState.BLANK:
        this.imgurl = TileComponent.BLANK_URL;
        break;
      case TileState.X:
        this.imgurl = TileComponent.X_URL;
        break;
      case TileState.O:
        this.imgurl = TileComponent.O_URL;
        break;
    }
  }
}
