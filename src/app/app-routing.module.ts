import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartParentComponent } from './Components/Cart/CartParent/CartParent.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Aboutus', component: AboutUsComponent },
  { path: 'Contactus', component: ContactUsComponent },
  { path: 'Products', component: CartParentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
