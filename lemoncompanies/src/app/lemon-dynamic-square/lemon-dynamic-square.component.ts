import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemon-dynamic-square',
  templateUrl: './lemon-dynamic-square.component.html',
  styleUrls: ['./lemon-dynamic-square.component.scss']
})
export class LemonDynamicSquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // this.changeSize();
  }
  public counter(i: number) {
    return new Array(i);
  }

 /* changeSize(){
    window.resizeTo(300,200);
  } */
}
