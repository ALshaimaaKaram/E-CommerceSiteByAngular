import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { CategoryService } from 'src/app/Services/category-service';
import { ProductService } from 'src/app/Services/product.service';
import { IcategoryVM } from 'src/app/ViewModels/icategory-vm';
import { IProductVM } from 'src/app/ViewModels/iproduct-vm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  categoryList: IcategoryVM[] = [];
  productList: IProductVM[] = [];
  categoryId: number = 0;
  constructor(private categoryService: CategoryService, private productService: ProductService,private router:Router) {
  }
  // ngAfterViewInit(): void {
  //   this.categoryId = this.cat.nativeElement.value;
  //   this.productService.getProductsByCategoryID(this.categoryId).subscribe({
  //     next:(products)=>{
  //       this.productList = products;
  //     }, error: (err)=>alert("Error")
  //   });
  // }
  ngOnChanges(): void {

  }

  ngOnInit(): void {

    this.categoryService.getAllCateogories().subscribe({
      next: (categories) => {
        this.categoryList = categories;
      }, error: (err) => alert("Error")
    })

    this.productService.getAllProducts().subscribe({
      next: (productes) => {
        this.productList = productes;
      }, error: (err) => alert("Error")
    })

    this.productService.getProductsByCategoryID(this.categoryId).subscribe({
      next: (products) => {
        this.productList = products;
        console.log(this.categoryId);
      }, error: (err) => alert("Error")
    });
  }

  openProdect(productId: number) {
    // this.productService.getProductByID(productId)
    this.router.navigate(['/products', productId, this.productList.length]);
  }
}
