import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Screw} from "./screw";
import {User} from "./user";
import {Review} from "./review";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API = 'http://localhost:8080'; // API to talk to spring

  private SCREWS_API = this.API + '/screws'; // to get to the mapping of screws

  private USER_API = this.API + "/users"; // to get to the map of users

  private LOGIN_API = this.API + "/loginUser";

  private LOGIN2_API = this.API + "/login";

  private REVIEW_API = this.API + "/review";

  private CHANGE_USER_API = this.API + "/usersChange";

  httpOptions = { // not 100% if this is need and what it does gotten from tour of hero
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // injected a HttpClient
  constructor(private http: HttpClient) {

  }

  // Method to get a list of Screw objects from DB
  getScrewList() { // will return an array of screws
    return this.http.get<Screw[]>(this.SCREWS_API, this.httpOptions)
      .pipe(
        catchError(this.handleError<Screw[]>('getScrewList', []))
      );
  }

  getReviewForScrew(screwId: string) {
    let params = new HttpParams().set('screwId', screwId);
    return this.http.get<Review[]>(this.REVIEW_API, {headers: {'Content-Type': 'application/json'}, params: params})
      .pipe(
        catchError(this.handleError<Review[]>('getReviewForScrew', []))
      );
  }

  addReview(temp:Review) {
    console.log(JSON.stringify(temp));
    return this.http.post<Review>(this.REVIEW_API, temp , this.httpOptions).pipe(
      tap((review: Review) => {
        return this.log(`added review w/ content=${review.content}`);
      }),
      catchError(this.handleError<Review>('addReview'))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API).pipe();
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

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.USER_API, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.post<User>(this.CHANGE_USER_API, user);
  }
  public loginUser(user: User): Observable<User> {
    //call our springboot environment with the url
    return this.http.post<User>(this.LOGIN_API, user, this.httpOptions);
  }

  public getUserByEmail(email: string) {
    // const ID_API = `${this.USER_API}/${email}`; // API to get a screw by id
    let temp = User;
    let ID_API = `${this.USER_API}/${email}`; // API to get a user by email
    return this.http.get<User>(ID_API, this.httpOptions)

    /*return this.http.get<User>(ID_API);*/
  }

  getScrewByID(screwId: number) {
    const ID_API = `${this.SCREWS_API}/${screwId}`; // API to get a screw by id
    return this.http.get<Screw>(ID_API)
      .pipe(map(data => data));

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

  // _p is something i added so i would not get confused with userName
  // username is basically email, will change names later most likely
  public login(userName_p, password_p) {
    /*  const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(userName_p + ':' + password_p)});
      return this.http.get(this.API, {headers, responseType: 'text' as 'json'});
  */
    let model: any = {};
    model.email = userName_p;
    // post request to API with the user and pass, get a boolean value in return
    return this.http.post<Observable<boolean>>(this.LOGIN2_API, model);
  }


}

