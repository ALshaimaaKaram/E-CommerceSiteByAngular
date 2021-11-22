import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  Login(userName: string, password: string) {
    let token: string = "ffsjhjsk55-jjdj-5djs2sj-sd55ds32";
    localStorage.setItem("Token", token);
  }

  Logout() {
    localStorage.removeItem("Token");
  }

  isLogged(): boolean {
    if (localStorage.getItem("Token"))
      return true;
    else
      return false;
  }
}
