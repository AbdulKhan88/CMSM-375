import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  mySlideImages = ["../../assets/ScrewImg/Backer-On 2.jpg","../../assets/ScrewImg/Deck Mate 2.jpg","../../assets/ScrewImg/Everbilt 12.jpg"]
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};
  constructor() {
    
   }
  

  ngOnInit() {
  }

}
