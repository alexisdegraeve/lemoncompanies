import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lemon-change-color-cell',
  templateUrl: './lemon-change-color-cell.component.html',
  styleUrls: ['./lemon-change-color-cell.component.scss']
})
export class LemonChangeColorCellComponent implements OnInit {
  @Input() showPicker = false;
  @Output() changeColor = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  selectedColor(color: string) {
    this.showPicker = false;
    this.changeColor.emit(color);
  }

}
