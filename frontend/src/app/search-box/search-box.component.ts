import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  deckMate = false;
  gripRite = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(event){
    console.log(event);
    console.log(this.deckMate);
  }


}
