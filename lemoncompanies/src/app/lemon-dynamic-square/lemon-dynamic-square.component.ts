import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemon-dynamic-square',
  templateUrl: './lemon-dynamic-square.component.html',
  styleUrls: ['./lemon-dynamic-square.component.scss']
})
export class LemonDynamicSquareComponent implements OnInit {

  public showContextMenu = false;
  public newColor = '';
  public selectedCell = false;

  constructor() { }

  ngOnInit(): void {
   // this.changeSize();
  }
  public counter(i: number) {
    return new Array(i);
  }

  onRightClick() {
    this.showContextMenu = !this.showContextMenu;
    return false;
}

  changeColor(newColor: string) {
    this.newColor = newColor;
  }

  mclickCell() {
  }

}
