import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // use formgroup to build our angular form to take in user input
  // in this case we are getting a login form
  loginForm: FormGroup;

  // this will display our error message
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  // this method creates our login form
  public createForm() {

    // call the formbuilder to create the login form. In this case our form takes in email and password.
    this.loginForm = this.fb.group({email: ['', Validators.required ], password: ['',Validators.required]
    });
  }


  ngOnInit() {
  }

}
