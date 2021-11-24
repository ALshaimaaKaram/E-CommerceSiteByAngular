import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { CategoryService } from 'src/app/Services/category-service';
import { ProductService } from 'src/app/Services/product.service';
import { IcategoryVM } from 'src/app/ViewModels/icategory-vm';
import { IProductVM } from 'src/app/ViewModels/iproduct-vm';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  SelectedCategory:any;
  newProduct:IProductVM={} as IProductVM;
  createForm:FormGroup = {} as FormGroup;
  categoryList:IcategoryVM[] = [];
  constructor(private productService:ProductService,private formBuilder:FormBuilder,
              private categoryService:CategoryService, private router:Router) {
    this.categoryService.getAllCateogories().subscribe({
      next: (categories) => {
        this.categoryList = categories;
        console.log(this.categoryList)
      }, error: (err) => alert("Error")
    })
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group(
      {
        name:['',[Validators.required]],
        quantity:['',[Validators.required]],
        price:['',[Validators.required]],
        CategoryID: ['',[Validators.required]]
      }
    )
    this.createForm.controls['CategoryID'].valueChanges.subscribe(CategoryID =>
      this.SelectedCategory = CategoryID
    );
  }

  addProduct()
  {
    this.newProduct={
      Name: this.createForm.value['name'],
      Price: this.createForm.value['price'],
      Quantity: this.createForm.value['quantity'],
      ImgURL: 'https://picsum.photos/200',
      CategoryID: this.SelectedCategory
    }
    console.log(this.SelectedCategory)
    this.productService.addProduct(this.newProduct).subscribe({
      next: (res)=>console.log(res),
      error: (err)=>console.log(err)
    })
    this.router.navigate(['/Home'])
  }

  gwtCat(catId:number)
  {
    this.SelectedCategory = catId;
  }
}
