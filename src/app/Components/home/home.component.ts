import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { CategoryService } from 'src/app/Services/category-service';
import { ProductService } from 'src/app/Services/product.service';
import { IcategoryVM } from 'src/app/ViewModels/icategory-vm';
import { IProductVM } from 'src/app/ViewModels/iproduct-vm';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  SelectedCategory: number = 0;
  categoryList: IcategoryVM[] = [];
  productList: IProductVM[] = [];
  categoryId: number = 0;

  shoppingCartItem:IShoppingCartItems[] = [];
  totalPrice:number = 0;
  totalPriceWithTax:number = 0;

  // @ViewChild('categorySel') categorySel!:ElementRef;
  sb:any;
  constructor(private categoryService: CategoryService, private productService: ProductService,private router:Router) {
   this.sb = this.categoryService.getAllCateogories().subscribe({
      next: (categories) => {
        this.categoryList = categories;
      }, error: (err) => alert("Error")
    })
  }

  // ngAfterViewInit() {
  //   this.categorySel.nativeElement.style.bachgroundColor = "yellow";
  //   console.log(this.categorySel.nativeElement.value);
  // }
  // ngAfterViewInit(): void {
  //   this.categoryId = this.cat.nativeElement.value;
  //   this.productService.getProductsByCategoryID(this.categoryId).subscribe({
  //     next:(products)=>{
  //       this.productList = products;
  //     }, error: (err)=>alert("Error")
  //   });
  // }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //this.subsription.unsubscribe();
      this.sb.unsubscribe();
  }
  addInCart(shoppingCartItem:IShoppingCartItems[])
  {
    console.log(shoppingCartItem);
    this.totalPrice = 0;
    this.totalPriceWithTax = 0;
    this.shoppingCartItem = shoppingCartItem;
    this.shoppingCartItem.forEach((item)=> this.totalPrice += item.Unit_price*item.SelectedQuantity)
    this.totalPriceWithTax = this.totalPrice + (this.totalPrice * 0.14);
  }

  getProduct()
  {
    // this.shoppingCartItem = this.CartChildComponent.shoppingCartItem;

    // console.log(this.CartChildComponent.shoppingCartItem);
  }
}
