import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActiveFilter, Filter} from "./filter1.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'filters',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() group: string;
  @Input() filters: Filter[] = [];

  changeFilter;

  @Output() sendFilter = new EventEmitter<any>();

  categoryFilters: ActiveFilter[] = [
    {group: "Deck Mate", active: false},
    {group: "Everbilt", active: false},
    {group: "TimberLok", active: false},
    {group: "Grip-Rite", active: false},
    {group: "Backer-On", active: false},
  ];

  constructor() {
  }

  optionClicked(group: any) {
    if (group.active == true) { // comes in as unclick
      group.active = false;
    } else { // Was clicked for the first time
      group.active = true;
    }

    this.sendFilter.emit(group);
    //console.log('Filter from filters comp is: ' + group.group);
    this.group = group;
  }

  ngOnInit() {
  }


}
