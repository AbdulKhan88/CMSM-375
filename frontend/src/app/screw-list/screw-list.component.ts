import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {Screw} from "../shared/screw";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-screw-list',
  templateUrl: './screw-list.component.html',
  styleUrls: ['./screw-list.component.css']
})
export class ScrewListComponent implements OnInit {

  // arrays of screws
  private screwList: Screw[];
  // for filtered Screws
  private filteredScrewList: Screw[];
  // For search bar (2x data bind)
  private _searchTerm: string;

  // rendering loading template (spinner while the product getting loaded)

  // Inject our service
  constructor(private HttpService: HttpService, private router: Router) {
  }

  // this method runs on init
  // it gets the list from services
  ngOnInit() {
    this.HttpService.getScrewList().subscribe(response => this.handleSuccessfulResponse(response))
  }

  // helper method for init
  handleSuccessfulResponse(response) {
    this.screwList = response;
    this.filteredScrewList = response;
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredScrewList = this.filtererScrewList(value);
  }

  rtToAddScrew() {
    this.router.navigate(['/addScrew']);
  }

  private filtererScrewList(searchString: string) {

    return this.screwList.filter(screw =>
    screw.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

  }
}

