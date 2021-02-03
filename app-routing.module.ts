import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistComponent } from './booklist/booklist.component';
import {WelcomeComponent} from './welcome/welcome.component'

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'booklist', component: BooklistComponent},
  {path: 'bookdetail/:id', component: BookdetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
