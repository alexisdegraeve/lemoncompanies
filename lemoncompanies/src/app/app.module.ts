import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LemonNavbarComponent } from './lemon-navbar/lemon-navbar.component';
import { LemonWelcomeComponent } from './lemon-welcome/lemon-welcome.component';
import { LemonNotFoundComponent } from './lemon-not-found/lemon-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonNavbarComponent,
    LemonWelcomeComponent,
    LemonNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
