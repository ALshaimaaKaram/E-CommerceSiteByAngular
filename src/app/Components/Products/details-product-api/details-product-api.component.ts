import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProductVM } from 'src/app/ViewModels/iproduct-vm';

@Component({
  selector: 'app-details-product-api',
  templateUrl: './details-product-api.component.html',
  styleUrls: ['./details-product-api.component.scss']
})
export class DetailsProductApiComponent implements OnInit {
  sentProductId: number = 0;
  count:number = 0;
  sentProduct: IProductVM = {} as IProductVM;
  constructor(private activeRouter: ActivatedRoute, private productService: ProductService
    , private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(
      (params) => {
        this.sentProductId = Number(params.get("PID")),
        this.count = Number(params.get("PCount")),
        this.productService.getProductByID(this.sentProductId)
        .subscribe({
          next: (product)=>
          {
            this.sentProduct = product
            console.log(this.sentProduct)
          }
          ,error: (err)=>alert(err)
        });
      }
    )
  }

  goBack() {
    this.location.back();
  }

  previousProduct()
  {
    // if(this.sentProductId <= 0)
      this.router.navigate(['/products', this.sentProductId-1, this.count]);
  }

  nextProduct()
  {
    this.router.navigate(['/products', this.sentProductId+1, this.count]);
  }
}
