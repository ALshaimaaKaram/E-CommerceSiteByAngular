import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-CartChild',
  templateUrl: './CartChild.component.html',
  styleUrls: ['./CartChild.component.scss'],
})
export class CartChildComponent implements OnInit, OnChanges {
  productList: IProduct[] = [];
  productsSelectedByCat: IProduct[] = [];
  @Input() categoryId:number = 0;
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

    this.productsSelectedByCat = Array.from(this.productList);
  }
  ngOnChanges(): void {
    if (this.categoryId == 0)
        this.productsSelectedByCat;
    else
    this.productsSelectedByCat = this.productList.filter((p) => p.CateogryID == this.categoryId);
  }

  ngOnInit() {}
  getAllProduct(): IProduct[] {
    return this.productList;
  }

  getProductById(ProductId: number): IProduct | undefined {
    return this.productList.find((p) => p.ID == ProductId);
  }

  getProductByCategoryId(CategoryId: number) {
    // if (this.categoryId == 0) return this.productsSelectedByCat;
    // else return productsSelectedByCat = this.productList.filter((p) => p.CateogryID == this.categoryId);
  }
}
