import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/iproduct';
import { IProductVM } from '../ViewModels/iproduct-vm';
import { IShoppingCartItems } from '../ViewModels/ishopping-cart-items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: IProductVM[] = [];
  shoppingCartItem: IShoppingCartItems[] = [];
  currentProduct: any;

  //Quantity in table of parent
  AvaliableQuantity: number = 0;
  constructor(private httpService: HttpClient) { }

  getAllProducts(): Observable<IProductVM[]> {
    return this.httpService.get<IProductVM[]>(`${environment.APIURL}/products`)
  }

  getProductsByCategoryID(categoryId: number): Observable<IProductVM[]> {
    if (categoryId == 0) return this.httpService.get<IProductVM[]>(`${environment.APIURL}/products`)
    else
      return this.httpService.get<IProductVM[]>(`${environment.APIURL}/products?CategoryID=${categoryId}`);
  }

  getProductByID(pID: number): Observable<IProductVM> {
    return this.httpService.get<IProductVM>(`${environment.APIURL}/products/${pID}`)
    // return foundPrd ? foundPrd : ({} as IProductVM);
  }

  addProduct(product: IProductVM) {
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'Application/JSON'
      })
    }
    return this.httpService.post(`${environment.APIURL}/products`, JSON.stringify(product), httpOption);
  }

  increaseQuantity(ProductID: number, inputQuantity: string): IShoppingCartItems[] {
    // console.log(inputQuantity);
    this.httpService.get<IProductVM>(`${environment.APIURL}/products/${ProductID}`).subscribe({
      next: (product) => {
        this.currentProduct = product;
        this.AvaliableQuantity = product.Quantity;
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
              ProductID: this.currentProduct.id,
              ProductName: this.currentProduct.Name,
              SelectedQuantity: +inputQuantity,
              Unit_price: this.currentProduct.Price,
            });
          }
        }
      }
    });
    // console.log(this.AvaliableQuantity);
    // console.log(inputQuantity);
    //Handle increse quantity for table in child


    return this.shoppingCartItem;
  }

  decreaseQuantity(ProductID: number, inputQuantity: string): IShoppingCartItems[] {
    this.httpService.get<IProductVM>(`${environment.APIURL}/products/${ProductID}`).subscribe({
      next: (product) => {
        // console.log("Decrease");
        this.currentProduct = product;
        this.AvaliableQuantity = product.Quantity;
        //Handle increse quantity for table in child
        if (+inputQuantity <= this.AvaliableQuantity) {
          //Handle change quantity in table in parent
          let item = this.shoppingCartItem.find((i) => i.ProductID == ProductID);
          if (item) {
            if (item.SelectedQuantity >= +inputQuantity) {
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

      }
    });
    return this.shoppingCartItem;
  }
}
