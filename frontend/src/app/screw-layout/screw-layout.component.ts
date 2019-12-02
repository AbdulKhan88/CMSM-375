import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {Screw} from "../shared/screw";
import {ActiveFilter} from "../filter/filter1.component";

@Component({
  selector: 'app-screw-layout',
  templateUrl: './screw-layout.component.html',
  styleUrls: ['./screw-layout.component.css']
})
export class ScrewLayoutComponent implements OnInit {
  // arrays of screws
  private screwList: Screw[];
  // for filtered Screws
  private filteredScrewList: Screw[];

  private options: Array<ActiveFilter> = [];

  constructor(private HttpService: HttpService) {
  }

  ngOnInit() {
    this.HttpService.getScrewList().subscribe(response => this.handleSuccessfulResponse(response))
  }

  handleSuccessfulResponse(response) {
    this.screwList = response;
    this.filteredScrewList = response;
  }

  // using output from child component, a filter is passed into this method
  optionReceived(option: ActiveFilter) {

    if (this.options.length == 0) { // empty array
      this.options.push(option);
    } else if (this.options.length > 0) {

      let contain: boolean = false; // boolean to see if a option is already in the Array

      for (let o of this.options) {
        if (o.group == option.group) { // Same option, only active state has changed
          o.active = option.active;
          contain = true; // set to true, the same filter group was found
        }
      }

      if (!contain) { // if it did not contain the option it is added
        this.options.push(option);
      }
    }
    this.filteredScrewList = this.fitlerList(this.options); // list is filtered based off of the options
  }

  private fitlerList(optons: ActiveFilter[]) {
    let temp: Array<Screw> = [];

    if (this.checkIfAllFalse(optons)) { // all options are false, can give OG list

      return this.screwList;

    } else { // options are still active

      for (let o of this.options) {

        if (o.active == true) { // Box is checked
          // temp = this.filtererScrewListByGroup(o);
          for (let s of this.filtererScrewListByGroup(o)) {
            temp.push(s);
          }
        }
      }
    }
    return temp;
  }

  private checkIfAllFalse(options: ActiveFilter[]) { // if all options are false will return true
    let count: number = 0;
    for (let o of options) { // Counter increments for every false
      if (!o.active) {
        count++;
      }
    }
    if (count == options.length) { // if counter = len of Array
      return true;
    }
    return false;
  }

  private filtererScrewListByGroup(option: ActiveFilter) {
    return this.screwList.filter(screw =>
      JSON.stringify(screw).toLowerCase().indexOf(option.group.toLowerCase()) !== -1);
  }


}
