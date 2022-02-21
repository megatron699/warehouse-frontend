import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log(!!user);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
}