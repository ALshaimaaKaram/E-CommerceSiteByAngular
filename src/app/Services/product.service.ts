import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/iproduct';
import { IProductVM } from '../ViewModels/iproduct-vm';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpClient) { }

  getAllProducts():Observable<IProductVM[]>
  {
    return this.httpService.get<IProductVM[]>(`${environment.APIURL}/products`)
  }

  getProductsByCategoryID(categoryId:number):Observable<IProductVM[]>
  {
    if (categoryId == 0) return this.httpService.get<IProductVM[]>(`${environment.APIURL}/products`)
    else
    return this.httpService.get<IProductVM[]>(`${environment.APIURL}/products?CategoryID=${categoryId}`);
  }

  getProductByID(pID:number):Observable<IProductVM>
  {
    return this.httpService.get<IProductVM>(`${environment.APIURL}/products/${pID}`)
    // return foundPrd ? foundPrd : ({} as IProductVM);
  }

  addProduct(product:IProductVM)
  {
    const httpOption = {
      headers:new HttpHeaders({
        'content-type':'Application/JSON'
      })
    }
    return this.httpService.post(`${environment.APIURL}/products`, JSON.stringify(product), httpOption);
  }
}
