import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LemonNavbarComponent } from './lemon-navbar/lemon-navbar.component';
import { LemonWelcomeComponent } from './lemon-welcome/lemon-welcome.component';
import { LemonNotFoundComponent } from './lemon-not-found/lemon-not-found.component';
import { LemonDynamicSquareComponent } from './lemon-dynamic-square/lemon-dynamic-square.component';
import { LemonDynamicCellComponent } from './lemon-dynamic-cell/lemon-dynamic-cell.component';
import { LemonChangeColorCellComponent } from './lemon-change-color-cell/lemon-change-color-cell.component';
import { ItunesMusicSearcherComponent } from './itunes-music-searcher/itunes-music-searcher.component';
import { FormsModule } from '@angular/forms';
import { ItunesdetailComponent } from './itunesdetail/itunesdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonNavbarComponent,
    LemonWelcomeComponent,
    LemonNotFoundComponent,
    LemonDynamicSquareComponent,
    LemonDynamicCellComponent,
    LemonChangeColorCellComponent,
    ItunesMusicSearcherComponent,
    ItunesdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
