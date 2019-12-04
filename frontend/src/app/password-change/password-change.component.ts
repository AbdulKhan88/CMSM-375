import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/user";
import {AuthenticationService} from "../shared/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  passwordForm: FormGroup;
  currentUser: any;

  @Output() public updatedUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private loginService: AuthenticationService, private router: Router) {
    this.createForm();
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {

  }

  public createForm() {

    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      currPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  changePassword(value) {
    alert("Your Password Has been updated");
    this.currentUser.password = value.password;
    this.updatedUser.emit(this.currentUser);
    //this.router.navigate(["account-settings"]);
  }
}
