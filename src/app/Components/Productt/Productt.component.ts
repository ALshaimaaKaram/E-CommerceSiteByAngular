import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-Productt',
  templateUrl: './Productt.component.html',
  styleUrls: ['./Productt.component.scss'],
})
export class ProducttComponent implements OnInit {
  todayDate:number = Date.now();
  IDNationalInput:number = 0;
  creditCardInput:number = 0;
  storeInfo: Store;
  offer: DiscountOffers;
  ClientName: string;
  ProductList: IProduct[] = [];
  CategoryList: ICategory[] = [];
  Products: IProduct[] = [];
  IsPurshased: boolean = true;
  selectedCat: number;
  productCount:any;
  defaultOption = null;

  constructor() {
    this.storeInfo = new Store('MyStore', 'https://fakeimg.pl/300/', [
      'Delivery, selling',
    ]);

    this.ProductList = [
      {
        ID: 1,
        Name: 'Mob1',
        Price: 5000,
        Quantity: 1,
        Img: 'https://picsum.photos/id/160/200/300',
        CateogryID: 1,
      },
      {
        ID: 2,
        Name: 'Mob2',
        Price: 6000,
        Quantity: 0,
        Img: 'https://picsum.photos/id/160/200/100',
        CateogryID: 2,
      },
      {
        ID: 3,
        Name: 'Mob3',
        Price: 7000,
        Quantity: 0,
        Img: 'https://picsum.photos/id/160/200/200',
        CateogryID: 1,
      },
      {
        ID: 4,
        Name: 'Mob4',
        Price: 7000,
        Quantity: 5,
        Img: 'https://picsum.photos/id/160/200/300',
        CateogryID: 1,
      },
      {
        ID: 5,
        Name: 'Mob5',
        Price: 7000,
        Quantity: 6,
        Img: 'https://picsum.photos/id/160/100/100',
        CateogryID: 2,
      },
    ];

    this.CategoryList = [
      { ID: 1, name: 'Cat1' },
      { ID: 2, name: 'Cat2' },
    ];

    this.selectedCat = this.CategoryList[0].ID;
    this.Products = Array.from(this.ProductList);
    // this.productCount = 0;

    this.offer = DiscountOffers.val1;
    this.ClientName = 'Muhammed';
  }

  ngOnInit() {}
  showtableProd() {
    this.IsPurshased = !this.IsPurshased;
  }

  changeCat(id: number) {
    this.Products = [...this.ProductList].filter((i) => i.CateogryID == id);
  }

  decreaseQuintity(id:number)
  {
    this.productCount = [...this.ProductList].find((i) => i.ID == id);
    if(this.productCount.Quantity > 0)
      this.productCount.Quantity --;

  }
}
