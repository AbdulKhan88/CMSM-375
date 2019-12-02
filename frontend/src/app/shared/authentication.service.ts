import {Injectable} from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Subjects and Observables are used to store the current user object and notify other components when the user logs in and out of the app
  // Behavior Subject
  private currentUserSubject: BehaviorSubject<any>;
  // public so other components can subscribe to it
  public currentUser: Observable<any>;

  private API = 'http://localhost:8080'; // API to talk to spring

  private LOGIN2_API = this.API + "/login";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // to log in user
  login(userName, password) {
    // Currently just using email to see if the shits are valid
    let model: any = {};
    model.email = userName;
    model.password = password;
    console.log('Auth:' + model.email);

    // this is making the post call to sever not service
    return this.http.post<User>(this.LOGIN2_API, model)
      .pipe(map(user => {
        console.log(user.email);
        if (user != null) { // this check may need to be removed
          // Spring will return a user object based from the email
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(JSON.stringify(user));
          this.currentUserSubject.next(user);
        } else {
          alert("Invaild");
        }
        return user;
      }));
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  authenticate(user: User) {
    // sessionStorage.setItem('token', btoa(user.username + ':' + user.password));
    localStorage.setItem('username', user.username);
  }

  logOut() { // Method to log out currentUser
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
