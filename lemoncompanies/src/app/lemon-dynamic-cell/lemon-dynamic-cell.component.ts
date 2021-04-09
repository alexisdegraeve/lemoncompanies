import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemon-dynamic-cell',
  templateUrl: './lemon-dynamic-cell.component.html',
  styleUrls: ['./lemon-dynamic-cell.component.scss']
})
export class LemonDynamicCellComponent implements OnInit {
  public innerWidth: any;
  public activate: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchStatusCell() {
    this.activate = !this.activate;
  }

}
