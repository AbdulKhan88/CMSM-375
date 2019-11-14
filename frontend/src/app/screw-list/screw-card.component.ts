import {Screw} from "../shared/screw";
import {Component} from "@angular/core";

@Component({
  selector: 'app-screw-card',
  templateUrl: './screw-card.component.html',
  styleUrls: ['./screw-card.component.css']
})
export class ScrewCardComponent {
  Screw:Screw;
  cardShortDescription: "tester tester"
  cardTitle: "test"
  cardImagePath = "";

  constructor() {

  }

  addProductToCart() {

  }
  openDialog() {

  }
}
