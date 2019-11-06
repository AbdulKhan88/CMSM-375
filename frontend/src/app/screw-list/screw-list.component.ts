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
  }

  rtToAddScrew() {
    this.router.navigate(['/addScrew']);
  }
}
