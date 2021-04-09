import { ItunesInfo } from './itunesinfo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesmusicService {

  constructor(private http:HttpClient) { }

  getItunesSearch(nameartist: string): Observable<any> {
    let url = `https://itunes.apple.com/search?term=${nameartist}`;
    return this.http.get<any>(url);
  }

  getItunesSearchDetail(id: string): Observable<any> {
    let url = `https://itunes.apple.com/lookup?id=${id}&entity=song&media=music`;

    return this.http.get<any>(url).pipe();
  }
}
