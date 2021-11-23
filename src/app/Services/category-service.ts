import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/icategory';
import { IProduct } from '../models/iproduct';
import { IcategoryVM } from '../ViewModels/icategory-vm';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpService:HttpClient) { }

  getAllCateogories():Observable<IcategoryVM[]>
  {
    return this.httpService.get<IcategoryVM[]>(`${environment.APIURL}/categories`)
  }
}
