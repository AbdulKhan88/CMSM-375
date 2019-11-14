import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrewListComponent} from "./screw-list/screw-list.component";
import {AddScrewComponent} from "./add-screw/add-screw.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: ScrewListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addScrew', component: AddScrewComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
