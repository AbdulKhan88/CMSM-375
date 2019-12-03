import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Review} from "../shared/review";
import {HttpService} from "../shared/http.service";
import {AuthenticationService} from "../shared/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({

  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],

})
export class ReviewListComponent implements OnInit {

  @Input() screwID;
  // Array of reviews for the given screwID
  reviewList: Review[];
  // The current user
  currentUser: any;
  // Form group for making a Review
  reviewForm: FormGroup;

  constructor(private router: Router,private HttpService: HttpService, private loginService: AuthenticationService,private cd: ChangeDetectorRef , private fb: FormBuilder) {
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
    this.createForm();
  }

  public createForm() {
    this.reviewForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.HttpService.getReviewForScrew(this.screwID).subscribe(response => this.handleSuccessfulResponse(response));
    //this.reviewList = this.makeTestReviews();
  }

  handleSuccessfulResponse(response) {
    this.reviewList = response;
  }

  addReview(value) {

    if (!this.currentUser) { // not logged in
      alert("You have be logged to review the product");
    } else { // logged in

      let temp: Review = new Review(value.content, this.currentUser.email, this.screwID);
      this.HttpService.addReview(temp).subscribe();
      window.location.reload();
      // Updates the list of reviews (bad way to do this)
      //this.HttpService.getReviewForScrew(this.screwID).subscribe(response => this.handleSuccessfulResponse(response));

    }
  }
}
