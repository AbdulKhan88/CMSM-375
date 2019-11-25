import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {HttpService} from "../shared/http.service";
import {switchMap} from 'rxjs/operators';
import {Screw} from "../shared/screw";
import {Observable} from "rxjs";

@Component({
  selector: 'app-screw-details',
  templateUrl: './screw-details.component.html',
  styleUrls: ['./screw-details.component.css']
})
export class ScrewDetailsComponent implements OnInit {

  screw$: Observable<Screw>;

  constructor(private route: ActivatedRoute,
              private router: Router, private HttpService: HttpService) {
  }

  ngOnInit() {
    this.screw$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.HttpService.getScrewByID(+params.get('screwId')))
    );
  }

}
