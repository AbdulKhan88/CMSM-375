import {Screw} from "../shared/screw";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-screw-card',
  templateUrl: './screw-card.component.html',
  styleUrls: ['./screw-card.component.css']
})
export class ScrewCardComponent {

  @Input() cardScrew: Screw;
  @Input() screwId: string;

  constructor() {

  }

  addProductToCart() {

  }

  openDialog() {

  }
}
