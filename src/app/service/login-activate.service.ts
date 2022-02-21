import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {SignInComponent} from "../signin/sign-in.component";

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      console.log(this.authService.isLoggedIn());
      this.router.navigate(['signin']);
    } /*else {
      console.log(this.authService.isLoggedIn());
      this.router.navigate(["employees"]);
    }*/
    //console.log("activate");
    return true;
  }
}
