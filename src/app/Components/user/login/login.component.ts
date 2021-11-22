import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isUserLogged:boolean = false;
  constructor(private userAuth:UserAuthService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.userAuth.Login("","");
    this.isUserLogged = this.userAuth.isLogged();
  }

  logout()
  {
    this.userAuth.Logout();
    this.isUserLogged = this.userAuth.isLogged();
  }
}
