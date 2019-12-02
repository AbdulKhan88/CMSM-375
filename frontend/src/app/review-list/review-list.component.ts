import {Component, OnInit} from '@angular/core';
import {Review} from "../shared/review";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviewList: Review[];

  constructor() {
  }

  ngOnInit() {
    this.reviewList = this.makeTestReviews();
  }

  private makeTestReviews() {
    let tempArr: Array<Review> = [

      {content:'this is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a reviewthis is a review', author:"TestGuy"},
      {content:'this is a review', author:"TestGuy2"},
      {content:'this is a review', author:"TestGuy3"},
    ]
    return tempArr;
  }
}
