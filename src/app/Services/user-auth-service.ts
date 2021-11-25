import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private loginstatues:BehaviorSubject<boolean>;
  constructor() {
    this.loginstatues = new BehaviorSubject<boolean>(false);
   }

  Login(userName: string, password: string) {
    let token: string = "ffsjhjsk55-jjdj-5djs2sj-sd55ds32";
    localStorage.setItem("Token", token);
    this.loginstatues.next(true);
    return true;
  }

  Logout() {
    localStorage.removeItem("Token");
    this.loginstatues.next(false);
    return false;
  }

  isLogged(): boolean {
    if (localStorage.getItem("Token"))
      return true;
    else
      return false;
  }

  isloginstatues():Observable<boolean>
  {
    return this.loginstatues.asObservable();
  }
}
