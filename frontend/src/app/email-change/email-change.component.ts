import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/authentication.service";
import {Router} from "@angular/router";
import {ActiveFilter} from "../filter/filter1.component";
import {User} from "../shared/user";

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.css']
})
export class EmailChangeComponent implements OnInit {

  emailForm: FormGroup;
  currentUser: any;

  @Output() public updatedUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private loginService: AuthenticationService, private router: Router) {
    this.createForm();
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {

  }

  public createForm() {

    this.emailForm = this.fb.group({
      email: ['', Validators.required],

    });
  }

  changeEmail(value) {
    alert("Your Email Has Changed to: " + value.email);
    this.currentUser.email = value.email;
    this.updatedUser.emit(this.currentUser);
    //this.router.navigate(["account-settings"]);
  }

}
