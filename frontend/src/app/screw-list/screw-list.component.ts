import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {Screw} from "../shared/screw";
import {ActivatedRoute, Router} from "@angular/router";
import {ActiveFilter} from "../filter/filter1.component";
import {SearchBoxComponent} from "../search-box/search-box.component";

@Component({
  selector: 'app-screw-list',
  templateUrl: './screw-list.component.html',
  styleUrls: ['./screw-list.component.css'],
})
export class ScrewListComponent implements OnInit {

  // arrays of screws
  @Input() screwList: Screw[];
  // for filtered Screws
  @Input() private filteredScrewList: Screw[];
  // For search bar (2x data bind)
  private _searchTerm: string;

  @ViewChild(SearchBoxComponent, {static: false}) search: SearchBoxComponent;


  // Inject our service
  constructor(private HttpService: HttpService, private router: Router) {

  }

  // this method runs on init
  // it gets the list from services
  ngOnInit() {
    //this.HttpService.getScrewList().subscribe(response => this.handleSuccessfulResponse(response))
    this.filteredScrewList = this.screwList;
  }

  // helper method for init
  handleSuccessfulResponse(response) {
    this.screwList = response;
    this.filteredScrewList = response;
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

 /* set filteredScrew(any) {
    console.log(this.search.filter.group);
    this.filteredScrewList = this.filtererScrewListByGroup(this.search.filter);
  }*/


  /*set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredScrewList = this.filtererScrewList(value);
  }*/
  optionReceived(option:ActiveFilter){
    console.log('Consulting: ' + option.group + '--' +option.active);
  }
  rtToAddScrew() {
    this.router.navigate(['/addScrew']);
  }

  private filtererScrewList(searchString: string) {

    return this.screwList.filter(screw =>
      screw.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

  }

  private filtererScrewListByGroup(option:ActiveFilter) {
    return this.screwList.filter(screw =>
    screw.toString().toLowerCase().indexOf(option.group.toLowerCase()) !== -1);
  }
}

