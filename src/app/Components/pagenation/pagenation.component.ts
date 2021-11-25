import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent implements OnInit {
  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor() { }

  ngOnInit(): void {
  }

  // handlePageEvent(event: PageEvent) {
  //   this.length = event.length;
  //   this.pageSize = event.pageSize;
  //   this.pageIndex = event.pageIndex;
  // }
}
