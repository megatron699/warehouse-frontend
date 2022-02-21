import {Injectable} from "@angular/core";
import {UserStorageService} from "./user-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private role: string;
  isLoggedIn = false;
  showAdmin = false;

  constructor(private userStorageService: UserStorageService) {
  }

  login() {
    const user = this.userStorageService.getUser();
    console.log(user);
    if (user) {
      // this.roles = user.role;
      if (user.role === "ROLE_ADMIN") {
        this.showAdmin = true;
      } else {
        this.showAdmin = false;
      }
      return {
        showAdmin: this.showAdmin,
        currentUser: user,
      };
    } else {
      return false;
    }
  }
}
