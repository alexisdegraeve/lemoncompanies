import { LemonDynamicSquareComponent } from './lemon-dynamic-square/lemon-dynamic-square.component';
import { LemonNotFoundComponent } from './lemon-not-found/lemon-not-found.component';
import { LemonWelcomeComponent } from './lemon-welcome/lemon-welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: LemonWelcomeComponent },
  { path: 'testhtml', component: LemonDynamicSquareComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: LemonNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
