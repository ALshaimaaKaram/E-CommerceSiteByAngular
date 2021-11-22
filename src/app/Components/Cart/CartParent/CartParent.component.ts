import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { ProductListService } from 'src/app/Services/product-list.service';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';
import { CartChildComponent } from '../CartChild/CartChild.component';

@Component({
  selector: 'app-CartParent',
  templateUrl: './CartParent.component.html',
  styleUrls: ['./CartParent.component.scss']
})
export class CartParentComponent implements OnInit, AfterViewInit {
  SelectedCategory: number = 0;
  CategoryList: ICategory[] = [];

  shoppingCartItem:IShoppingCartItems[] = [];
  totalPrice:number = 0;
  totalPriceWithTax:number = 0;

  @ViewChild('categorySel') categorySel!:ElementRef;
  //Get Child Component
  @ViewChild(CartChildComponent) CartChildComponent!:CartChildComponent

  constructor(private ProductService:ProductListService) {
    this.CategoryList = [
      { ID: 1, name: 'Mobiles' },
      { ID: 2, name: 'Labtop' },
      { ID: 3, name: 'tablet' },
      { ID: 4, name: 'TV' }
    ];
    //Cart With Subscribe
    // this.ProductService.shoppingCartItems.subscribe((val)=>this.shoppingCartItem = val);
   }
  ngAfterViewInit() {
    this.categorySel.nativeElement.style.bachgroundColor = "yellow";
    console.log(this.categorySel.nativeElement.value);
  }

  ngOnInit() {
  }

  addInCart(shoppingCartItem:IShoppingCartItems[])
  {
    this.totalPrice = 0;
    this.totalPriceWithTax = 0
    this.shoppingCartItem = shoppingCartItem;
    this.shoppingCartItem.forEach((item)=> this.totalPrice += item.Unit_price*item.SelectedQuantity)
    this.totalPriceWithTax = this.totalPrice + (this.totalPrice * 0.14);
  }

  getProduct()
  {
    this.shoppingCartItem = this.CartChildComponent.shoppingCartItem;

    console.log(this.CartChildComponent.shoppingCartItem);
  }
}
