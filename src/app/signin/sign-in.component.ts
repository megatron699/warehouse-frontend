import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {UserStorageService} from "../service/user-storage.service";
import {throwError} from "rxjs";
import {LoginService} from "../service/login.service";


@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthService, UserStorageService]
})

export class SignInComponent implements OnInit {
  error: boolean;
  credentials: any = {
    username: null,
    password: null
  };
  isLoggedIn: boolean;
  private role: string;
  showAdmin = false;

  constructor(private authService: AuthService, private router: Router, @Inject(UserStorageService) private userStorageService: UserStorageService,
              private loginService: LoginService) {

  }

  ngOnInit() {
    const login = this.loginService.login();
    if (login) {
      this.isLoggedIn = true;
      this.router.navigate(['employees']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.credentials;

    this.authService.login(username, password).subscribe(
      data => {
        console.log(data);
        if (!data) { return throwError("Wrong login/password")}
        this.userStorageService.saveUser(data);

        this.error = false;
        this.isLoggedIn = true;
        // this.authService.isLoggedIn(this.isLoggedIn);
       // this.authService.isLogged = this.isLoggedIn;
      //  console.log(this.authService.isLogged);
       // this.reloadPage();
        window.location.reload();
        this.router.navigate(['employees']);
      },
      err => {
        // this.errorMessage = err.error.message;
        this.isLoggedIn = false;
     //   this.authService.isLogged = this.isLoggedIn;
        this.error = true;
      }
    );

  }

  isLogged() {
    return this.isLoggedIn;
  }
}
