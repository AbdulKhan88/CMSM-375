import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // by default password is hidden
  hide = true;

  // make it so that the email is required and an actual email
  email = new FormControl('',[Validators.required, Validators.email]);

  // instance of formGroup called registerForm
  registerForm: FormGroup;

  // string for error message
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {

    // upon construction we call the create form method
    this.createForm();
  }

  // this method creates a registration form
  public createForm() {
    this.registerForm = this.fb.group({

      // firtname for form
      firstName: ['', Validators.required ],

      // lastname for form
      lastName: ['', Validators.required ],

      // login for form
      userName: ['', Validators.required ],

      // form will have an email and have the required validators
      email: ['', Validators.required],

      // form will have a password with the required validators
      password: ['',Validators.required],
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
  }

}
