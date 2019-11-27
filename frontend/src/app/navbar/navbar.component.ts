import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;

  constructor(private loginService: AuthenticationService) {
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  //userName = sessionStorage.getItem('username');

  ngOnInit() {
    //this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.loginService.logOut();
  }

}
