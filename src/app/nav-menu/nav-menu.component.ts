import {Component, Input, OnInit} from '@angular/core';
import {UserStorageService} from "../service/user-storage.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [UserStorageService]
})

export class NavMenuComponent {
  constructor(private authService: AuthService) {
  }

  signOut() {
    this.authService.signOut();
  }
}
