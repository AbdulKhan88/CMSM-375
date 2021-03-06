import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScrewListComponent} from './screw-list/screw-list.component';
import {AddScrewComponent} from './add-screw/add-screw.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "./shared/http.service";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatGridTile, MatProgressSpinnerModule,
  MatSidenavModule
} from "@angular/material";
import {ScrewCardComponent} from "./screw-list/screw-card.component";
import {FlexLayoutModule } from '@angular/flex-layout';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import { OwlModule } from 'ngx-owl-carousel';
import { FooterComponent } from "./footer/footer.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { SearchBoxComponent } from './search-box/search-box.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BillingAddressChangeComponent } from './billing-address-change/billing-address-change.component';
import { EmailChangeComponent } from './email-change/email-change.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ScrewDetailsComponent } from './screw-details/screw-details.component';

import { ScrewLayoutComponent } from './screw-layout/screw-layout.component';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import { LoaderComponent } from './loader/loader.component';
import {LoaderService} from "./shared/loader.service";
import {LoaderInterceptor} from "./interceptors/loader-interceptor";
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { FilterComponent } from './filter/filter.component';
import { FAppComponent } from './filter/filter-app.component';
@NgModule({
  declarations: [
    AppComponent,
    ScrewListComponent,
    AddScrewComponent,
    ScrewCardComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SearchBoxComponent,
    ScrewDetailsComponent,
    ScrewLayoutComponent,
    ShoppingCartComponent,
    SearchBoxComponent,
    AccountSettingsComponent,
    BillingAddressChangeComponent,
    EmailChangeComponent,
    PasswordChangeComponent,
    LoaderComponent,
    ReviewComponent,
    ReviewListComponent,
    FilterComponent,
    FAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    OwlModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  providers: [HttpService, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
