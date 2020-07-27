(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-checkin-checkin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin/checkin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin/checkin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container bg-light\">\r\n        <ngx-datatable \r\n          #myTable\r\n          class=\"material expandable\" style=\"height:320px\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"30\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"250\"\r\n          [scrollbarV]=\"true\"\r\n         \r\n          [rows]='rows'\r\n          [limit]=\"3\"\r\n          (page)=\"onPage($event)\">\r\n        \r\n          <!-- Row Detail Template -->\r\n          <!-- <ngx-datatable-row-detail [rowHeight]=\"100\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n            <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\r\n              <div style=\"padding-left:35px;\">\r\n                <div>Item Id : {{row.itemId}}</div>\r\n                <div>Delivery Charges : {{row.deliveryCharges}}</div>\r\n                <div> <img [src]=\"row['imageUrl']\" height=\"50\" width=\"50\" > </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-row-detail> -->\r\n  \r\n          <!-- Column Templates -->\r\n           <!-- <ngx-datatable-column\r\n            [width]=\"50\"\r\n            [resizeable]=\"false\"\r\n            [sortable]=\"false\"\r\n            [draggable]=\"false\"\r\n            [canAutoResize]=\"false\">\r\n            <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\r\n              <a\r\n                href=\"javascript:void(0)\"\r\n                [class.datatable-icon-right]=\"!expanded\"\r\n                [class.datatable-icon-down]=\"expanded\"\r\n                title=\"Expand/Collapse Row\"\r\n                (click)=\"toggleExpandRow(row)\">\r\n              </a>\r\n            </ng-template>\r\n          </ngx-datatable-column> -->\r\n         \r\n          <ngx-datatable-column width=\"100\">\r\n                <ng-template ngx-datatable-header-template>\r\n                        <span class=\"fontClass\">Cart Items </span>\r\n                 </ng-template>\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n                  <div class =\"col-md-12\">\r\n                   <h4 style =\"color:blue\"> \r\n                      <i [innerHTML]=\"row['itemname']\"></i> </h4>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class =\"col-md-12\">\r\n                      <img [src]=\"row['image1']\" height=\"50\" width=\"50\" ><br>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class =\"col-md-12\">    \r\n                        <h4 style =\"color:blueviolet\">   Price : <i [innerHTML]=\"row['price']\"></i></h4>\r\n                </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class =\"col-md-12\">        \r\n                      <h4 style =\"color:blue\"> Offer Price : <i [innerHTML]=\"row['offerprice']\"></i></h4>\r\n                  </div>\r\n                </div>  \r\n                \r\n                <div class=\"row\">\r\n                    <div class =\"col-md-12\">    \r\n                      <h4 style =\"color:blueviolet\">  Saved : <i [innerHTML]=\"(+row['price']) - (+row['offerprice'])\"></i></h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class =\"col-md-12\">\r\n                          <h4 style =\"color:blue\">    Color : <i [innerHTML]=\"row['colorname']\"></i></h4>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class =\"col-md-12\">\r\n                          <h4 style =\"color:blueviolet\"> Quantity : <i [innerHTML]=\"row['quantity']\"></i></h4>\r\n                    </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class =\"col-md-12\">\r\n                           <button class =\"btn btn-success\" style=\"width:80px\" (click)=\"RemoveItems(row['itemId'],row['quantity'],row['id'])\" >\r\n                              <i class=\"fa fa-trash\">  Delete</i> \r\n                           </button>\r\n                       </div>\r\n                    </div>\r\n              </div>     \r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <!-- <ngx-datatable-column width=\"50\">\r\n            <ng-template ngx-datatable-header-template>\r\n              <span>&nbsp;</span>    \r\n             </ng-template>\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n         <img [src]=\"row['imageUrl']\" height=\"50\" width=\"50\" > \r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column width=\"80\">\r\n            <ng-template ngx-datatable-header-template>\r\n                    <span>Price</span>\r\n             </ng-template>\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <i [innerHTML]=\"row['price']\"></i>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column width=\"80\">\r\n        <ng-template ngx-datatable-header-template>\r\n                <span>Offer Price</span>\r\n         </ng-template>\r\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <i [innerHTML]=\"row['offerprice']\"></i>\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n\r\n  <ngx-datatable-column width=\"80\">\r\n    <ng-template ngx-datatable-header-template>\r\n            <span>Saved</span>\r\n     </ng-template>\r\n<ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n        <i [innerHTML]=\"(+row['price']) - (+row['offerprice'])\"></i>\r\n</ng-template>\r\n</ngx-datatable-column>\r\n\r\n\r\n      \r\n          <ngx-datatable-column width=\"50\">\r\n                <ng-template ngx-datatable-header-template>\r\n                        <span>Color</span>\r\n                 </ng-template>\r\n            \r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <i [innerHTML]=\"row['colorname']\"></i> \r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column width=\"30\" >\r\n                <ng-template ngx-datatable-header-template>\r\n                        <span>Quantity</span>\r\n                 </ng-template>\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <i [innerHTML]=\"row['quantity']\"></i>\r\n                </ng-template>\r\n\r\n\r\n          </ngx-datatable-column>\r\n        <ngx-datatable-column width=\"30\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <button class =\"btn btn-success\" style=\"width:80px\" (click)=\"RemoveItems(row['itemId'],row['quantity'],row['id'])\" >\r\n                  <i class=\"fa fa-trash\">  Delete</i> \r\n                </button>\r\n              </ng-template>\r\n\r\n\r\n          </ngx-datatable-column> -->\r\n\r\n        </ngx-datatable>\r\n        <br>\r\n              <p class=\"text-center mb-2\">You saved Rs : {{saveSum}}</p>\r\n              <p class =\"text-center\">Paid Amount  Rs : {{OfferPriceSum}}</p>\r\n      \r\n            <a class=\"btn btn-success mb-2\"  (click)= \"placeOrder();\" >Place Order</a>\r\n            <a  class=\"btn btn-danger pull-right\"(click)=\"cancel()\">Back</a>\r\n        \r\n         \r\n      </div>");

/***/ }),

/***/ "./src/app/pages/checkin/checkin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/checkin/checkin.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.header-shadow{\r\n    width:10%;\r\n    height:10%; \r\n    left:50%;\r\n    top:50%;\r\n    position: fixed;\r\n/*   \r\n   left:20%;\r\n   z-index: 10;\r\n     \r\n    width:100%;\r\n    height:100%;  */\r\n}\r\na\r\n{\r\n  cursor: pointer;\r\n\r\n}\r\na:link {\r\n  color: red;\r\n}\r\n/* visited link */\r\na:visited {\r\n  color: green;\r\n}\r\np::first-letter {\r\n    font-size: 200%;\r\n    color: #8A2BE2;\r\n  }\r\np::first-line {\r\n    color:red;\r\n    font-size:2vw;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tpbi9jaGVja2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLGVBQWU7QUFDbkI7Ozs7O21CQUttQjtBQUNuQjtBQUNBOztFQUVFLGVBQWU7O0FBRWpCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2tpbi9jaGVja2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlci1zaGFkb3d7XHJcbiAgICB3aWR0aDoxMCU7XHJcbiAgICBoZWlnaHQ6MTAlOyBcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLyogICBcclxuICAgbGVmdDoyMCU7XHJcbiAgIHotaW5kZXg6IDEwO1xyXG4gICAgIFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlOyAgKi9cclxufVxyXG5hXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG5hOmxpbmsge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIHZpc2l0ZWQgbGluayAqL1xyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5wOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgY29sb3I6ICM4QTJCRTI7XHJcbiAgfVxyXG4gIHA6OmZpcnN0LWxpbmUge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOjJ2dztcclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/checkin/checkin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/checkin/checkin.component.ts ***!
  \****************************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
/* harmony import */ var _itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../itemdetails/item-notify */ "./src/app/pages/itemdetails/item-notify.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");





/////import { DOCUMENT } from '@angular/platform-browser';





let CheckinComponent = class CheckinComponent {
    constructor(localStorage, document, ShoppingApiService, itemnotify, route, loadingIndicatorService, location) {
        this.localStorage = localStorage;
        this.document = document;
        this.ShoppingApiService = ShoppingApiService;
        this.itemnotify = itemnotify;
        this.route = route;
        this.loadingIndicatorService = loadingIndicatorService;
        this.location = location;
        this.loading = false;
        this.rows = [];
        this.expanded = {};
        this.OfferPriceSum = 0;
        this.saveSum = 0;
        loadingIndicatorService
            .onLoadingChanged
            .subscribe(isLoading => this.loading = isLoading);
    }
    ngOnInit() {
        this.GetCheckedInItems();
    }
    GetCheckedInItems() {
        let userSessionid;
        userSessionid = this.localStorage.getItem("id_token");
        if (userSessionid !== null) {
            this.ShoppingApiService.getCheckedInItem(userSessionid)
                .subscribe((data) => {
                // this.cartItems= data.body;
                // for(let i =0;i<this.cartItems.length;i++ )
                // {
                //   if( this.cartItems[i].image1!=='undefined')
                //   this.cartItems[i].image1 = 'data:image/jpeg;base64,' +  this.cartItems[i].image1;
                // }
                this.rows = data.body; //this.cartItems;
                this.itemnotify.totalCartItem = this.rows.length;
                this.getSum(this.rows);
                return this.rows;
            });
        }
    }
    getSum(sum) {
        this.OfferPriceSum = 0;
        this.saveSum = 0;
        for (var i = 0; i < sum.length; i++) {
            this.OfferPriceSum = this.OfferPriceSum + sum[i].offerprice;
            this.saveSum = this.saveSum + ((sum[i].price) - (sum[i].offerprice));
        }
    }
    myFunction(item) {
        document.getElementById("demo").innerHTML = this.rows.reduce(this.getSum);
    }
    RemoveItems(itemid, quantity, checkinid) {
        const idToken = this.localStorage.getItem("id_token");
        if (idToken) {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]();
            header.set("Authorization", "Bearer " + idToken);
        }
        else
            this.route.navigateByUrl('/login');
        this.ShoppingApiService.RemoveItem(itemid, quantity, idToken, checkinid)
            .subscribe((res) => {
            this.GetCheckedInItems();
        });
        this.ShoppingApiService.changeSelectedItem(this.itemnotify);
    }
    notify() {
        this.ShoppingApiService.changeSelectedItem(this.itemnotify);
    }
    placeOrder() {
        let storage = this.localStorage.getItem("id_token");
        let EmailId = this.localStorage.getItem("email");
        if (storage == null) {
            this.route.navigateByUrl('/login');
        }
        else {
            console.log("Move to payment gateway");
            this.route.navigateByUrl("/PlaceOrder/");
            // if(EmailId!=='undefined')
            // {
            //   this.ShoppingApiService.paymentreceive(EmailId,localstorage,this.rows)
            //   .subscribe((res:Response) =>
            //   {
            //     //if status code is unauthorized.. need to redirect login page with error message
            //   },
            //   err => 
            //   {
            //     if(err.status!==200)
            //     {
            //       localStorage.removeItem("id_token");
            //       this.route.navigateByUrl('/login')
            //     }
            //   }
            //);
            // }
        }
    }
    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
    }
    cancel() {
        this.location.back(); // <-- go back to previous location on cancel
    }
};
CheckinComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8__["LOCAL_STORAGE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingApiService"] },
    { type: _itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_3__["itemNotify"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_6__["LoadingIndicatorServiceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTable', { static: false })
], CheckinComponent.prototype, "table", void 0);
CheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin/checkin.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: ["\n      @media screen and (max-width: 800px) {\n        .desktop-hidden {\n          display: initial;\n        }\n        .mobile-hidden {\n          display: none;\n        }\n      }\n      @media screen and (min-width: 800px) {\n        .desktop-hidden {\n          display: none;\n        }\n        .mobile-hidden {\n          display: initial;\n        }\n      }\n    ", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkin.component.css */ "./src/app/pages/checkin/checkin.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8__["LOCAL_STORAGE"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))
], CheckinComponent);



/***/ }),

/***/ "./src/app/pages/checkin/checkin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkin/checkin.module.ts ***!
  \*************************************************/
/*! exports provided: CheckintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckintModule", function() { return CheckintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _checkin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin.component */ "./src/app/pages/checkin/checkin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");






const routes = [{ path: '', component: _checkin_component__WEBPACK_IMPORTED_MODULE_3__["CheckinComponent"] },
];
let CheckintModule = class CheckintModule {
};
CheckintModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_checkin_component__WEBPACK_IMPORTED_MODULE_3__["CheckinComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], CheckintModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-checkin-checkin-module-es2015.js.map