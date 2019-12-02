import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActiveFilter} from "../filter/filter1.component";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  gripRite = false;
  constructor() { }
  _filter;
  private options: ActiveFilter[];
  @Output() public getOption = new EventEmitter<ActiveFilter>();
  ngOnInit() {
  }

  // Set a list of options to parent
  // Maybe filter out the false options here
  // So only true ones are in the list that is sent

  optionReceived(option:ActiveFilter){

    this.getOption.emit(option);
  }

  get filter(){
    return this.filter;
  }
}
