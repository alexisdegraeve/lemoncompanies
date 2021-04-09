import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemon-navbar',
  templateUrl: './lemon-navbar.component.html',
  styleUrls: ['./lemon-navbar.component.scss']
})
export class LemonNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    goToLink(url: string, w:number ,h:number){
      var left = (screen.width/2)-(w/2);
      var top = (screen.height/2)-(h/2);
      let externalwindow =  window.open(url, "_blank",'width=' + w + ', height=' + h +', top='+top+', left='+left);


  }

}
