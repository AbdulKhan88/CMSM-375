import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {Router} from "@angular/router";
import {HttpService} from "../shared/http.service";
import {User} from "../shared/user";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  // The current user
  currentUser: any;
  emailChange: boolean = false;
  passwordChange: boolean = false;
  model: User;

  constructor(private loginService: AuthenticationService, private HttpService: HttpService) {

    this.loginService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {
  }

  // A User object with the updated info is passed to this method
  // then it passes to the service which gives it to backend to update DB
  changeUserInfo(updatedUser: User) {
    this.resetBoolean(updatedUser);

    let t = new User();
    this.HttpService.updateUser(updatedUser).subscribe(
      data => {
        t = data;
        this.loginService.logOut(); // not the best way, but logs out the outdated user and logs in new one
        this.loginService.login(data.email, data.password).subscribe();
      },
      error => {
        alert("Invalid Shit Yo");
      });


  }

  emailChanger() {
    if (!this.emailChange) { // was just clicked
      this.emailChange = true;
    }
  }

  passWordChanger() {
    if (!this.passwordChange) { // was just clicked
      this.passwordChange = true;
    }
  }

  resetBoolean(updatedUser: User) {
    if (this.currentUser.email == updatedUser.email) { // the current user had its email changed
      this.emailChange = false;
    }
    if (this.currentUser.password == updatedUser.password) {
      this.passwordChange = false;

    }
  }

}
