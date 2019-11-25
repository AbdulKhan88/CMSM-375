import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpService} from "../shared/http.service";
import {User} from "../shared/user";
import {Router} from "@angular/router";
import {environment} from "../register/username-validator";
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user object we will be passing
  user : User = new User();

  users : User[];

  loginForm: FormGroup;

  constructor(private loginService:AuthenticationService, private readonly http: HttpClient, private fb: FormBuilder, private httpService: HttpService, private router : Router) {
    this.createForm();
  }

  public createForm() {
    this.loginForm = this.fb.group({

      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  // this method runs on init
  // it gets the list from services
  ngOnInit() {
    this.httpService.getUsers().subscribe(response => this.handleSuccessfulResponse(response))
  }

  // helper method for init
  handleSuccessfulResponse(response) {
    this.users = response;
  }





  // public loginUser(value) {
  //
  //   this.user.email = value.email;
  //   this.user.password = value.password;
  //
  //   // otherwise call the server with a new promise
  //   return new Promise((resolve, reject) => {
  //
  //     // call our springboot environment with the url
  //     this.http.get<boolean>(`${environment.serverURL}/checkUsername?value=${value.user}`)
  //       .subscribe(flag => {
  //           if (flag) {
  //             resolve({'usernameTaken': true});
  //           } else {
  //             resolve(null);
  //           }
  //         },
  //         (err) => {
  //           console.log(err);
  //         }
  //       );
  //   });


}
