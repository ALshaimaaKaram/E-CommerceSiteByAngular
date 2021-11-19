import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productList: IProduct[] = [];
  constructor() {
    this.productList = [
      {
        ID: 1,
        Name: 'Samsong',
        Price: 5000,
        Quantity: 4,
        Img: 'assets/Products/mobile1.jpeg',
        CateogryID: 1,
      },
      {
        ID: 2,
        Name: 'Samsong',
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

  getProductById(ProductId: number): IProduct | undefined {
    return this.productList.find((p) => p.ID == ProductId);
  }

  productCount:any;
  increaseQuantity(ProductID:number, inputQuantity:string)
  {
    this.productCount = [...this.productList].find((i) => i.ID == ProductID);
    // if(inputQuantity >= this.productCount.Quantity)
      this.productCount.Quantity += +inputQuantity;
  }
  decreaseQuantity(ProductID:number, inputQuantity:string)
  {
    this.productCount = [...this.productList].find((i) => i.ID == ProductID);
    if(this.productCount.Quantity > 0)
      this.productCount.Quantity -= +inputQuantity;
      // this.shoppingCartItemsSelect.emit(shoppingCartItemsSelect)
  }
}
