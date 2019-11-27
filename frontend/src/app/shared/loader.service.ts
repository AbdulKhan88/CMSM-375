import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // the point of this class is to expose a Subject: isVisible
  // to which we can give values of True or False from the interceptor and listen for changes from LoaderComp.
  // A subject is basically special type of Observable, its can acts like a Observable and Observer
  isLoading = new Subject<boolean>();
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
  constructor() { }
}
