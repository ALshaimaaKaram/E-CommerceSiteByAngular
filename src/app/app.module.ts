import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AsideComponent } from './Components/aside/aside.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProducttComponent } from './Components/Productt/Productt.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/ProductCard.directive';
import { IDNationalPipe } from './Pipes/IDNational.pipe';
import { CreditCardPipe } from './Pipes/CreditCard/creditCard.pipe';
import { CartParentComponent } from './Components/Cart/CartParent/CartParent.component';
import { CartChildComponent } from './Components/Cart/CartChild/CartChild.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    ProducttComponent,
    CartParentComponent,
    CartChildComponent,
    ProductCardDirective,
    IDNationalPipe,
    CreditCardPipe,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
