import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrewListComponent} from "./screw-list/screw-list.component";
import {AddScrewComponent} from "./add-screw/add-screw.component";


const routes: Routes = [
  {path: '', component: ScrewListComponent},
  {path: 'addScrew', component: AddScrewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
