import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ItunesmusicService } from '../services/itunesmusic.service';
import { ItunesTrack } from '../services/itunestrack';



@Component({
  selector: 'app-itunesdetail',
  templateUrl: './itunesdetail.component.html',
  styleUrls: ['./itunesdetail.component.scss']
})
export class ItunesdetailComponent implements OnInit {

  public collectionId: string = '';
  public ituneTrack: ItunesTrack[] = [];

  constructor(private route:ActivatedRoute, private itunesmusicService: ItunesmusicService) {}
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') !== null) {
      const id = this.route.snapshot.paramMap.get('id');
      this.collectionId = id? id : '';
      this.research_track();
    }

  }


  research_track() {
     this.itunesmusicService.getItunesSearchDetail(this.collectionId).subscribe(
       data => {
        this.ituneTrack = data.results;
       }
     )
   }



}
