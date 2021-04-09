import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LemonNavbarComponent } from './lemon-navbar/lemon-navbar.component';
import { LemonWelcomeComponent } from './lemon-welcome/lemon-welcome.component';
import { LemonNotFoundComponent } from './lemon-not-found/lemon-not-found.component';
import { LemonDynamicSquareComponent } from './lemon-dynamic-square/lemon-dynamic-square.component';
import { LemonDynamicCellComponent } from './lemon-dynamic-cell/lemon-dynamic-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonNavbarComponent,
    LemonWelcomeComponent,
    LemonNotFoundComponent,
    LemonDynamicSquareComponent,
    LemonDynamicCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
