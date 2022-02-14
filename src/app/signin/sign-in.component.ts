import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService, Credentials} from "../service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: []
})

export class SignInComponent {
  error: boolean;
  credentials: Credentials;

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.user$.subscribe(status => {
      if (status) {
        this.router.navigate(['employees']);
        return;
      }
      this.error = true;
    });
    this.authService.login(this.credentials);
  }

}
