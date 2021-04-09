import { ItunesInfo } from './../services/itunesinfo';
import { ItunesmusicService } from './../services/itunesmusic.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itunes-music-searcher',
  templateUrl: './itunes-music-searcher.component.html',
  styleUrls: ['./itunes-music-searcher.component.scss']
})
export class ItunesMusicSearcherComponent implements OnInit {

  public searchMusic : ItunesInfo[] = [];
  searchArtist: string = 'Madonna';
  constructor(private itunesmusicService: ItunesmusicService) {

  }

  ngOnInit(): void {
    this.research_artist();
  }

  research_artist() {
   // let nametosearch = "Britney Spears";
    this.itunesmusicService.getItunesSearch(this.searchArtist).subscribe(
      data => {
        console.log(data);
        this.searchMusic = data.results;
      }
    )
  }

}
