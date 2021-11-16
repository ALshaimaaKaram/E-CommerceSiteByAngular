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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    ProducttComponent,
    ProductCardDirective,
    IDNationalPipe,
    CreditCardPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
