import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-screw',
  templateUrl: './add-screw.component.html',
  styleUrls: ['./add-screw.component.css']
})
export class AddScrewComponent implements OnInit {

  screwForm: FormGroup;

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.screwForm = this.fb.group({
      content: ['']
    });
  }

  onSubmit(value) {
    console.log(value.content)
    this.http.addScrew(value).subscribe(result => this.goToScrewList());
  }

  goToScrewList() { // routes to list page
    this.router.navigate(['']);
  }
}
