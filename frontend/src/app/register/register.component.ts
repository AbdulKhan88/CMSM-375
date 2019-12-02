import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from "../shared/http.service";
import {User} from "../shared/user";
import {Router} from "@angular/router";
import {UsernameValidator} from "./username-validator";
import {EmailValidator} from "./email-validator";
import {AuthenticationService} from "../shared/authentication.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // by default password is hidden
  hide = true;

  // form for html
  registerForm: FormGroup;

  // this uses a regular expression to validate the email
  private readonly emailRegex = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;

  // user object that will be passed through HTTP
  user: User = new User();

  constructor(private loginService: AuthenticationService, private emailValidator: EmailValidator, private usernameValidator: UsernameValidator, private fb: FormBuilder, private httpService: HttpService, private router: Router) {

    // upon construction we call the create form method
    this.createForm();
  }

  // this method creates a registration form
  public createForm() {
    this.registerForm = this.fb.group({

      firstName: ['', Validators.required], // required
      lastName: ['', Validators.required], // required
      userName: ['', [Validators.required], this.usernameValidator.validate.bind(this.usernameValidator)],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)], this.emailValidator.validate.bind(this.emailValidator)],
      password: ['', Validators.required], // required
    });
  }

  public registerUser(value): void {

    // pass form values to user typescript object
    this.user.firstName = value.firstName;
    this.user.lastName = value.lastName;
    this.user.email = value.email;
    this.user.username = value.userName;
    this.user.password = value.password;

    this.httpService.registerUser(this.user).subscribe(data => {
      alert("User created successfully.");
      //sessionStorage.setItem('username', this.user.username);
      console.log(data.email);
      this.loginService.login(data.email, data.password).pipe(first())
        .subscribe(
          data => {
            this.router.navigate([""]);
          },
          error => {
            alert("Invalid Shit Yo");
          });
      this.router.navigate([""]);
    });
  };

  formHasError(field: string, error: string) {

    // get the field in registration form
    const ctrl = this.registerForm.get(field);

    // check if the user deleted the field (dirty) or if it does not meet the requirements of the form.
    return ctrl.dirty && ctrl.hasError(error);
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

}
