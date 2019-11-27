import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {LoaderService} from "../shared/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading; // gives us the correct state

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

}
