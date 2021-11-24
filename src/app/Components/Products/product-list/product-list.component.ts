import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProductVM } from 'src/app/ViewModels/iproduct-vm';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class PRoductListComponent implements OnInit, OnChanges {
  @Input() categoryId: number = 0;
  productsSelectedByCat: IProductVM[] = [];
  productList:IProductVM[] = [];

  @Output() shoppingCartItems: EventEmitter<IShoppingCartItems[]>;
  shoppingCartItem: IShoppingCartItems[] = [];

  currentProduct: any;

  //Quantity in table of parent
  AvaliableQuantity: number = 0;
  constructor(private productService:ProductService, private router:Router) {
    this.shoppingCartItems = new EventEmitter<IShoppingCartItems[]>();

   }
  ngOnChanges(): void {
    this.productService.getProductsByCategoryID(this.categoryId).subscribe({
      next:(products)=>{
        this.productsSelectedByCat = products
        console.log(this.categoryId);
        console.log(this.productsSelectedByCat);
      }
    })
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products)=>
      {
        this.productList = products
      }
    });
  }

  increaseQuantity(productID: number, inputQuantity: string) {
    // this.shoppingCartItem = this.productService.increaseQuantity(productID, inputQuantity);
    // this.quantitySelected.emit(+inputQuantity);
    this.productService.getProductByID(productID).subscribe({
      next: (product) => {
        this.currentProduct = product;
        this.AvaliableQuantity = product.Quantity;
        if (+inputQuantity <= this.AvaliableQuantity) {
          this.currentProduct.Quantity += +inputQuantity;
          //Handle change quantity in table in parent
          let item = this.shoppingCartItem.find((i) => i.ProductID == productID);
          if (item) {
            item.SelectedQuantity += +inputQuantity;
            let index = this.shoppingCartItem.indexOf(item);
            this.shoppingCartItem[index] = item;
          } else {
            this.shoppingCartItem.push({
              ProductID: this.currentProduct.id,
              ProductName: this.currentProduct.Name,
              SelectedQuantity: +inputQuantity,
              Unit_price: this.currentProduct.Price,
            });
          }
          this.shoppingCartItems.emit(this.shoppingCartItem);
        }
      }
    });
  }

  decreaseQuantity(productID: number, inputQuantity: string) {
    this.shoppingCartItem = this.productService.decreaseQuantity(productID, inputQuantity);
    // this.quantitySelected.emit(+inputQuantity);

    this.shoppingCartItems.emit(this.shoppingCartItem);
  }

  openProdect(productId: number) {
    // this.productService.getProductByID(productId)
    this.router.navigate(['/products', productId, this.productList.length]);
  }
}
