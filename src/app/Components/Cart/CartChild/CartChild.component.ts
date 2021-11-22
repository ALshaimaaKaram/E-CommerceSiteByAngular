import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductListService } from 'src/app/Services/product-list.service';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';

@Component({
  selector: 'app-CartChild',
  templateUrl: './CartChild.component.html',
  styleUrls: ['./CartChild.component.scss'],
})
export class CartChildComponent implements OnInit, OnChanges {
  productList: IProduct[] = [];
  productsSelectedByCat: IProduct[] = [];
  //value from Child Component(pass Data from Parent to Child)
  @Input() categoryId: number = 0;
  //event for Pass Data from Child to Parent
  // @Output() quantitySelected: EventEmitter<number>;
  @Output() shoppingCartItems: EventEmitter<IShoppingCartItems[]>;
  shoppingCartItem: IShoppingCartItems[] = [];
  productShop: IProduct = {} as IProduct;
  // productCount:any;
  // productQuantityBase:number = 0;

  // productService:ProductListService;
  constructor(private productService: ProductListService) {
    // this.productService = productService;
    // this.quantitySelected = new EventEmitter<number>();
    this.shoppingCartItems = new EventEmitter<IShoppingCartItems[]>();
  }

  ngOnChanges(): void {
    this.productsSelectedByCat = this.productService.getProductByCategoryId(
      this.categoryId
    );
  }

  ngOnInit() {
    this.productList = this.productService.getAllProduct();
  }

  increaseQuantity(productID: number, inputQuantity: string) {
    this.shoppingCartItem = this.productService.increaseQuantity(productID, inputQuantity);
    // this.quantitySelected.emit(+inputQuantity);

    this.shoppingCartItems.emit(this.shoppingCartItem);
  }

  decreaseQuantity(productID: number, inputQuantity: string) {
    this.shoppingCartItem = this.productService.decreaseQuantity(productID, inputQuantity);
    // this.quantitySelected.emit(+inputQuantity);

    this.shoppingCartItems.emit(this.shoppingCartItem);
  }
}
