import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AsideComponent } from './Components/aside/aside.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProducttComponent } from './Components/Productt/Productt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/ProductCard.directive';
import { IDNationalPipe } from './Pipes/IDNational.pipe';
import { CreditCardPipe } from './Pipes/CreditCard/creditCard.pipe';
import { CartParentComponent } from './Components/Cart/CartParent/CartParent.component';
import { CartChildComponent } from './Components/Cart/CartChild/CartChild.component';
import { ProductDetailsComponent } from './Components/Products/ProductDetails/ProductDetails.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './Components/Products/create-product/create-product.component';
import { DetailsProductApiComponent } from './Components/Products/details-product-api/details-product-api.component';
import { PRoductListComponent } from './Components/Products/product-list/product-list.component';

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
    ProductDetailsComponent,
    CreateProductComponent,
    DetailsProductApiComponent,
    PRoductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
