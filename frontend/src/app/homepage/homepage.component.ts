import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  mySlideImages = ["../../assets/img/pic1.jpg","../../assets/img/pic2.jpg","../../assets/img/pic3.jpg"]
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};
  constructor() {
    
   }
  

  ngOnInit() {
  }

}
