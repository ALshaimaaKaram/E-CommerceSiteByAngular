import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from 'src/app/Security/user-auth.guard';

const routes:Routes = [
  {path:"", redirectTo:'/User/MyProfile', pathMatch:"full"},
  {path:'MyProfile', component:ViewProfileComponent, canActivate:[UserAuthGuard]},
  {path:'EditProfile', component:EditProfileComponent, canActivate:[UserAuthGuard]},
  {path:'Login', component:LoginComponent}
]


@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
