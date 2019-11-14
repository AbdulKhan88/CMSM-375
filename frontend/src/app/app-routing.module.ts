import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrewListComponent} from "./screw-list/screw-list.component";
import {AddScrewComponent} from "./add-screw/add-screw.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: ScrewListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addScrew', component: AddScrewComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
