import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScrewListComponent} from "./screw-list/screw-list.component";
import {AddScrewComponent} from "./add-screw/add-screw.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {RegisterComponent} from "./register/register.component";
import {ScrewDetailsComponent} from "./screw-details/screw-details.component";
import {ScrewLayoutComponent} from "./screw-layout/screw-layout.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {PasswordChangeComponent} from "./password-change/password-change.component";
import {EmailChangeComponent} from "./email-change/email-change.component";
import {BillingAddressChangeComponent} from "./billing-address-change/billing-address-change.component";

const routes: Routes = [
  {path: 'screws', component: ScrewLayoutComponent},
  {path: "", component: HomepageComponent},
  {path: 'screws', component: ScrewListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addScrew', component: AddScrewComponent},
  {path: 'screws/:screwId', component: ScrewDetailsComponent},

  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'account-settings', component: AccountSettingsComponent},
  {path: 'email-change' , component: EmailChangeComponent},
  {path: 'password-change' , component: PasswordChangeComponent},
  {path: 'billing-address-change' , component: BillingAddressChangeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
