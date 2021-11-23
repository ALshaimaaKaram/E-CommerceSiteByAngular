import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartParentComponent } from './Components/Cart/CartParent/CartParent.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CreateProductComponent } from './Components/Products/create-product/create-product.component';
import { DetailsProductApiComponent } from './Components/Products/details-product-api/details-product-api.component';
import { ProductDetailsComponent } from './Components/Products/ProductDetails/ProductDetails.component';
import { ProducttComponent } from './Components/Productt/Productt.component';
import { UserAuthGuard } from './Security/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'Aboutus', component: AboutUsComponent },
  { path: 'Contactus', component: ContactUsComponent },
  { path: 'Products', component: CartParentComponent , canActivate:[UserAuthGuard]},
  { path: 'CreatProduct', component: CreateProductComponent , canActivate:[UserAuthGuard]},
  { path: 'ProductsByCard', component: ProducttComponent , canActivate:[UserAuthGuard]},
  { path: 'Product/:PID', component: ProductDetailsComponent},
  { path: 'Product/:PID/:PCount', component: ProductDetailsComponent},
  { path: 'products/:PID', component: DetailsProductApiComponent},
  { path: 'products/:PID/:PCount', component: DetailsProductApiComponent},
  {
    path: 'User',
    loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
