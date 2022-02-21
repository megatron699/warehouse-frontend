import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {baseUrl} from 'src/environments/environment';
import {Observable, Subject} from "rxjs";
import {log} from "util";
import {UserStorageService} from "./user-storage.service";
import {LoginActivate} from "./login-activate.service";
import {LoginService} from "./login.service";

// export interface Credentials {
//   username: string;
//   password: string;
// }

interface User {
  username: string;
  role: string;
}

@Injectable()
export class AuthService {
  private baseUrl: string = baseUrl;
  authenticated: boolean;
  user$: Subject<any>;
  isLogged: boolean;

  constructor(private http: HttpClient, private userStorageService: UserStorageService, private loginService: LoginService) {

  }

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.baseUrl + '/signin', {username, password}, httpOptions);
    /*this.http.post(this.baseUrl + '/signin', credentials, httpOptions).subscribe(status => {
      this.authenticated = !!status;
      this.user$.next({status: this.authenticated});
    });*/
  }

  isLoggedIn() {
    const login = this.loginService.login();
    console.log(!!login);
    return !!login;
  }

  signOut() {
    this.userStorageService.signOut();

    // this.isLoggedIn();
  }
}

