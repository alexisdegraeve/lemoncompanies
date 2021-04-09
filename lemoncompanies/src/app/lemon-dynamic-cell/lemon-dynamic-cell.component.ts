import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lemon-dynamic-cell',
  templateUrl: './lemon-dynamic-cell.component.html',
  styleUrls: ['./lemon-dynamic-cell.component.scss']
})
export class LemonDynamicCellComponent implements OnInit {
  public innerWidth: any;
  public activate: boolean = false;
  public mColor: string = 'pink';
  @Input() newColor = 'pink';
  @Output() clickCell = new EventEmitter();
  @Input() selectCell: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  switchStatusCell() {
    if(this.newColor != '' && this.newColor != this.mColor) {
      this.mColor = this.newColor;
    }
    this.clickCell.next(false);
    this.activate = !this.activate;
  }



}
