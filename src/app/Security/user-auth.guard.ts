import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Services/user-auth-service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  isUserLogged:boolean = false;
  constructor(private userAuthService:UserAuthService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.isUserLogged = this.userAuthService.isLogged();
    if(!this.isUserLogged)
    {
      alert("Login Please");
        this.router.navigate(['User/Login']);
        return false
    }
    return true;
  }

}
