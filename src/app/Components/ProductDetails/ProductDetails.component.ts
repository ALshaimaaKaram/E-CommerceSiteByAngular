import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductListService } from 'src/app/Services/product-list.service';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sentProductId: number = 0;
  count:number = 0;
  sentProduct: IProduct = {} as IProduct;
  constructor(private activeRouter: ActivatedRoute, private productService: ProductListService
    , private location:Location, private router:Router) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(
      (params) => {
        this.sentProductId = Number(params.get("PID")),
        this.count = Number(params.get("PCount")),
          this.sentProduct = this.productService.getProductById(this.sentProductId);
      }
    )
  }

  goBack() {
    this.location.back();
  }

  previousProduct()
  {
    // if(this.sentProductId <= 0)
      this.router.navigate(['/Product', this.sentProductId-1, this.count]);
  }

  nextProduct()
  {
    this.router.navigate(['/Product', this.sentProductId+1, this.count]);
  }
}
