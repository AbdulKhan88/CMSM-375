import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from "../shared/http.service";
import {User} from "../shared/user";
import {Router} from "@angular/router";
import {environment} from "../register/username-validator";
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from "../shared/authentication.service";
import {Observable} from "rxjs";
import {Screw} from "../shared/screw";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user object we will be passing
  user: User;
  users: User[];
  temp;

  model: any = {};
  username: string;
  password: string;
  message: any;
  loginForm: FormGroup;

  constructor(private loginService: AuthenticationService, private http: HttpClient, private fb: FormBuilder, private httpService: HttpService, private router: Router) {
    this.createForm();
  }

  public createForm() {
    this.loginForm = this.fb.group({

      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // this method runs on init
  // it gets the list from services
  ngOnInit() {
    //this.httpService.getUsers().subscribe(response => this.handleSuccessfulResponse(response))
    sessionStorage.setItem('token', '');
  }




   login(value) {
    // Model gets set to the form values

    this.model.email = value.email;
    this.model.password = value.password;
    this.loginService.login(value.email, value.password).pipe(first())
      .subscribe(
        data => {
          this.router.navigate([""]);
        },
        error => {
          alert("Invalid Shit Yo");
        });
    /*// call our service to get our boolean to see if the shit matches
    this.httpService.login(value.email, value.password).subscribe(isValid => {
      // if it is valid
      if (isValid) {
        this.httpService.getUserByEmail(value.email).subscribe( res => {
          this.user = res;
          this.loginService.loggedInUser = this.user;
          console.log(this.user.username);
        });

        /!*sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
        sessionStorage.setItem('username', this.model.username);*!/
        this.router.navigate(['']);
      } else {
        alert("Invalid Login Information");
      }
    });*/
  }


  /*public loginUser(value) {
    // asrarea
    // TestTest
    this.user.email = value.email;
    this.user.password = value.password;
    this.httpService.loginUser(this.user).subscribe(response => this.handleSuccessfulResponse(response));
    if (this.temp != null) {
      sessionStorage.setItem('username', this.temp.username);
      this.loginService.authenticate(this.temp);
      this.router.navigate(['/homepage']);
    } else {
      console.log(this.temp);
    }
    /!* // otherwise call the server with a new promise
     return new Promise((resolve, reject) => {

       // call our springboot environment with the url
       this.http.get<boolean>(`${environment.serverURL}/checkUsername?value=${value.user}`)
         .subscribe(flag => {
             if (flag) {
               resolve({'usernameTaken': true});
             } else {
               resolve(null);
             }
           },
           (err) => {
             console.log(err);
           }
         );
     });*!/
  }
*/
}
