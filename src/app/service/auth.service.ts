import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { baseUrl } from 'src/environments/environment';
import {Subject} from "rxjs";

export interface Credentials {
  username: string;
  password: string;
}

interface User {
  username: string;
  role: string;
}

@Injectable()
export class AuthService {
  private baseUrl: string = baseUrl;
  authenticated: boolean;
  user$: Subject<any>;

  constructor(private http: HttpClient) {

  }

  login(credentials: Credentials) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(this.baseUrl + '/signin', credentials, httpOptions).subscribe(status => {
      this.authenticated = !!status;
      this.user$.next({status: this.authenticated});
    });
  }

  isLoggedIn() {
    return true;
  }
}
