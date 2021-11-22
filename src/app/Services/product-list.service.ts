import { EventEmitter, Injectable, OnChanges } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { IShoppingCartItems } from '../ViewModels/ishopping-cart-items';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productList: IProduct[] = [];
  shoppingCartItem: IShoppingCartItems[] = [];
  currentProduct: any;

  //Quantity in table of parent
  AvaliableQuantity: number = 0;

  //Cart with Subcribe
  //shoppingCartItems: EventEmitter<IShoppingCartItems[]> = new EventEmitter<IShoppingCartItems[]>();
  constructor() {
    this.productList = [
      {
        ID: 1,
        Name: 'Samsung',
        Price: 5000,
        Quantity: 4,
        Img: 'assets/Products/mobile1.jpeg',
        CateogryID: 1,
      },
      {
        ID: 2,
        Name: 'Samsung',
        Price: 6000,
        Quantity: 3,
        Img: 'assets/Products/labtopS.jpg',
        CateogryID: 2,
      },
      {
        ID: 3,
        Name: 'Lenovo',
        Price: 7000,
        Quantity: 1,
        Img: 'assets/Products/labtopL.jpg',
        CateogryID: 2,
      },
      {
        ID: 4,
        Name: 'LG',
        Price: 7000,
        Quantity: 5,
        Img: 'assets/Products/TVLG.webp',
        CateogryID: 4,
      },
      {
        ID: 5,
        Name: 'IPad',
        Price: 7000,
        Quantity: 6,
        Img: 'assets/Products/IPad.jpg',
        CateogryID: 3,
      },
    ];
  }

  getProductByCategoryId(categoryId: number): IProduct[] {
    if (categoryId == 0) return this.productList;
    else return this.productList.filter((p) => p.CateogryID == categoryId);
  }

  getAllProduct(): IProduct[] {
    return this.productList;
  }

  getProductById(ProductId: number): IProduct {
    let foundPrd = this.productList.find((p) => p.ID == ProductId);
    return foundPrd ? foundPrd : ({} as IProduct);
  }

  increaseQuantity(ProductID: number, inputQuantity: string): IShoppingCartItems[] {
    this.currentProduct = [...this.productList].find((i) => i.ID == ProductID);

    this.AvaliableQuantity = this.currentProduct.Quantity;
    //Handle increse quantity for table in child
    if (+inputQuantity <= this.AvaliableQuantity) {
      this.currentProduct.Quantity += +inputQuantity;
      //Handle change quantity in table in parent
      let item = this.shoppingCartItem.find((i) => i.ProductID == ProductID);
      if (item) {
        item.SelectedQuantity += +inputQuantity;
        let index = this.shoppingCartItem.indexOf(item);
        this.shoppingCartItem[index] = item;
      } else {
        this.shoppingCartItem.push({
          ProductID: this.currentProduct.ID,
          ProductName: this.currentProduct.Name,
          SelectedQuantity: +inputQuantity,
          Unit_price: this.currentProduct.Price,
        });
      }
    }

    return this.shoppingCartItem;
    //cart with Subscribe
    // this.shoppingCartItems.emit(this.shoppingCartItem);
  }

  decreaseQuantity(ProductID: number, inputQuantity: string): IShoppingCartItems[] {
    this.currentProduct = [...this.productList].find((i) => i.ID == ProductID);

    this.AvaliableQuantity = this.currentProduct.Quantity;

    //Handle increse quantity for table in child
    if (+inputQuantity <= this.AvaliableQuantity) {
      //Handle change quantity in table in parent
      let item = this.shoppingCartItem.find((i) => i.ProductID == ProductID);
      if (item) {
        if(item.SelectedQuantity >= +inputQuantity)
        {
          this.currentProduct.Quantity -= +inputQuantity;
          item.SelectedQuantity -= +inputQuantity;
          let index = this.shoppingCartItem.indexOf(item);
          this.shoppingCartItem[index] = item;
        }
      }
      // else {
      //   this.shoppingCartItem.push({
      //     ProductID: this.currentProduct.ID,
      //     ProductName: this.currentProduct.Name,
      //     SelectedQuantity: +inputQuantity,
      //     Unit_price: this.currentProduct.Price,
      //   });
      // }
    }


    // this.AvaliableQuantity = this.productCount.Quantity;
    // if (+inputQuantity <= this.AvaliableQuantity)
    //   this.productCount.Quantity -= +inputQuantity;

    // this.shoppingCartItem.push({
    //   ProductID: this.productCount.ID,
    //   ProductName: this.productCount.Name,
    //   SelectedQuantity: +inputQuantity,
    //   Unit_price: this.productCount.Price,
    // });

    return this.shoppingCartItem;
    //cart with subscribe
    // this.shoppingCartItemsSelect.emit(shoppingCartItemsSelect)
  }
}
