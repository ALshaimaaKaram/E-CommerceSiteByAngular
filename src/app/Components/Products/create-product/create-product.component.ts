import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { IProductVM } from 'src/app/ViewModels/iproduct-vm';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  newProduct:IProductVM={} as IProductVM;
  createForm:FormGroup = {} as FormGroup;
  constructor(private productService:ProductService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group(
      {
        name:['',[Validators.required]],
        quantity:[''],
        price:['']
      }
    )
  }

  createProduct()
  {
    this.newProduct={
      Name: this.createForm.value['name'],
      Price: this.createForm.value['price'],
      Quantity: this.createForm.value['quantity'],
      ImgURL: 'https://picsum.photos/200'
    }
    this.productService.addProduct(this.newProduct).subscribe({
      next: (res)=>console.log(res),
      error: (err)=>console.log(err)
    })
  }
}
