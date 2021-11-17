import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-CartParent',
  templateUrl: './CartParent.component.html',
  styleUrls: ['./CartParent.component.scss']
})
export class CartParentComponent implements OnInit {
  SelectedCategory: number = 0;
  CategoryList: ICategory[] = [];
  constructor() {
    this.CategoryList = [
      { ID: 1, name: 'Mobiles' },
      { ID: 2, name: 'Labtop' },
      { ID: 3, name: 'tablet' },
      { ID: 4, name: 'TV' }
    ];
   }

  ngOnInit() {
  }

}
