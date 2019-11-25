import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Screw} from "./screw";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API = 'http://localhost:8080'; // API to talk to spring

  private SCREWS_API = this.API + '/screws'; // to get to the mapping of screws

  httpOptions = { // not 100% if this is need and what it does gotten from tour of hero
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // injected a HttpClient
  constructor(private http: HttpClient) {
  }

  // Method to get a list of Screw objects from DB
  getScrewList() { // will return an array of screws
    return this.http.get<Screw[]>(this.SCREWS_API)
      .pipe(
        catchError(this.handleError<Screw[]>('getScrewList', []))
      );
  }

  // method to add a screw
  // Takes in a Screw object
  // Returns a Observable Screw
  addScrew(screw: Screw): Observable<Screw> {
    return this.http.post<Screw>(this.SCREWS_API, screw, this.httpOptions).pipe(
      tap((newScrew: Screw) => {
        return this.log(`added Screw w/ id=${newScrew.id}`);
      }),
      catchError(this.handleError<Screw>('addScrew'))
    );
  }

  getScrewByID(screwId: number) {
    const ID_API = `${this.SCREWS_API}/${screwId}`; // API to get a screw by id
    console.log(screwId);
    return this.http.get<Screw>(ID_API)
      .pipe(
        catchError(this.handleError<Screw>('getScrewById'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    // This is from tour of hero, with some changes
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}
