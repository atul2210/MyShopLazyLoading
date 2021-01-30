import { Component, OnInit, ElementRef, Injectable, ViewChild  } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {allItems  } from '../../model/allitems';

//import data from 'src/assets/data/company.json';
//import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

import {ShoppingApiService} from '../../service/shopping-api.service';

///const companyData = data as any[];

// class PagedData<T> {
//   data: T[];
// }


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  // styleUrls: ['./scrolling-server.component.css']
})
export class AdminListComponent implements OnInit {

  readonly headerHeight = 50;
  readonly rowHeight = 50;
  readonly pageLimit = 10;

  rows: allItems[] = [];
  isLoading: boolean;
  
 // ColumnMode = ColumnMode;
 @ViewChild('firstTable',{static:false}) table: AdminListComponent;


  constructor(private el: ElementRef,private ShopService:ShoppingApiService) { }

  ngOnInit() {
    this.onScroll(0);
  }
  
  onScroll(offsetY: number) {
    // total height of all rows in the viewport
    const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;

    // check if we scrolled to the end of the viewport
    if (!this.isLoading && offsetY + viewHeight >= this.rows.length * this.rowHeight) {
      // total number of results to load
      let limit = this.pageLimit;

      // check if we haven't fetched any results yet
      if (this.rows.length === 0) {
        // calculate the number of rows that fit within viewport
        const pageSize = Math.ceil(viewHeight / this.rowHeight);

        // change the limit to pageSize such that we fill the first page entirely
        // (otherwise, we won't be able to scroll past it)
        limit = Math.max(pageSize, this.pageLimit);
      }
      this.loadPage(limit);
    }
  }

  private loadPage(limit: number) {
    // set the loading flag, which serves two purposes:
    // 1) it prevents the same page from being loaded twice
    // 2) it enables display of the loading indicator
    this.isLoading = true;

    this.ShopService.GetHomePageItems(this.rows.length.toString(), limit.toString()).subscribe(results => {
      const rows = [...this.rows, ...results.data];
      this.rows = rows;
      this.isLoading = false;
    });
  }




}
