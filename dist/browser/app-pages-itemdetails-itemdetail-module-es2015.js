(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-itemdetails-itemdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itemdetails/itemdetails.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itemdetails/itemdetails.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- <div class=\"container\" *ngFor=\"let item of itemDetail;\"> -->\r\n\r\n  <div *ngIf=\"loading\" >\r\n    <img src =\"assets/loading/loading.gif\" class = \"header-shadow\" > Loading ...\r\n  </div>\r\n<div *ngIf=\"!displayError;\">\r\n\r\n  <mat-grid-list  rowHeight=\"2:0.5\" [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\" *ngFor=\"let item of itemDetail;\" >\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n\r\n              <div class=\"card \">\r\n    <!-- <ngx-img-zoom\r\n    [zoomImageSrc]=item.image1\r\n    [previewImageSrc]=item.image1\r\n    [imgStyle]=\"'width:415px; height:415px; bottom:0;  left:0;  right:0;  top:0;  margin:0 auto; border:1px solid #dcdcdc;'\"\r\n    [resultStyle]=\"'width:524px; height:524px; background-repeat: no-repeat; z-index: 2; position:absolute;\r\n                   -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 90%;'\"\r\n    [lensStyle]=\"'width:90px; height:90px'\"\r\n   \r\n    [containerStyle]=\"\"\r\n></ngx-img-zoom> -->\r\n\r\n\r\n\r\n                <ngx-image-zoom\r\n                [thumbImage]=item.image1\r\n                [fullImage]= item.image1\r\n                [enableLens] = false\r\n               \r\n                [enableScrollZoom] =true\r\n                [enableLens]=true\r\n                [magnification] =2\r\n                [circularLens] = true\r\n                [enableScrollZoom]=true\r\n            ></ngx-image-zoom>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card \">\r\n                <li style=\"background-color: blueviolet\" class=\"list-group-item\" >\r\n                  <h2 style=\"color: white\" >{{item.itemDescription}}</h2>\r\n                </li  >\r\n                <li class=\" list-group-item item-fore-color\">\r\n                Size:&nbsp; {{item.sizeName}}\r\n                </li>\r\n                <li class=\"list-group-item\" style= \"-webkit-text-fill-color:crimson \"  >\r\n                  <h4>Available Quantity: &nbsp;{{item.availableQty}}</h4>\r\n                </li >\r\n                <li class=\"list-group-item item-fore-color\">\r\n                  <s><h4>Total Price: &nbsp;{{item.price |currency :\"₹\":'0'}}</h4>\r\n                  </s>\r\n                            <!-- <img border=\"0\" alt=\"Information\" src=\"../../../assets/download.jpg\" width=\"30\" height=\"30\" (mouseenter)=\"overTitle()\" (mouseleave)=\"overTitle()\"> -->\r\n                </li>\r\n                          <!-- <mat-list-item  id = \"hover\" class=\"alert alert-info\" role=\"alert\" *ngIf=\"showSelected\" style=\"position:fixed\" > -->\r\n                <li class=\"list-group-item\">\r\n                  <ul style=\"-webkit-text-fill-color: indigo\"  >\r\n                      <li item-fore-color style=\"\" >\r\n                          <b> Color:&nbsp; {{item.color}}</b>\r\n                        </li>\r\n                        <li >\r\n                          <b> Brand:&nbsp; {{item.brand}}</b>\r\n                        </li>\r\n                      <li item-fore-color>\r\n                        <b>    Delivery Charges:&nbsp; {{item.deliveryCharges |currency :\"₹\":''}}</b>\r\n                          </li>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"list-group-item item-fore-color\">\r\n                        <h4> Offer Price:&nbsp;  {{item.offerPrice|currency :\"₹\":''}}</h4>\r\n                </li>\r\n\r\n              <li class=\"list-group-item item-fore-color\">\r\n                          Brand:&nbsp; {{item.brand}}\r\n\r\n              </li>\r\n              <li class=\"list-group-item item-fore-color\" >\r\n                <b>  Delivery:&nbsp; By Courier</b>\r\n              </li>\r\n              <!-- <li class=\"list-group-item item-fore-color\">\r\n              <b>  Fabric:&nbsp; Pure Cotton </b>\r\n              </li>  -->\r\n\r\n\r\n\r\n            <button style=\"white-space:nowrap;\" (click)=\"addToCart();\" class=\"float-right m-2 mat-raised-button btn-danger \"  >\r\n              <mat-icon>shopping_cart</mat-icon>\r\n              Add to Cart\r\n            </button >\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n</mat-grid-list>\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf=\"displayError;\"><h1>Oops Item sold. No quantity available now</h1></div>\r\n\r\n\r\n<!--\r\n<script>\r\n\r\n    $('#74').ezPlus();\r\n\r\n</script> -->");

/***/ }),

/***/ "./src/app/pages/itemdetails/itemdetail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/itemdetails/itemdetail.module.ts ***!
  \********************************************************/
/*! exports provided: ItemdetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsModule", function() { return ItemdetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _itemdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemdetails.component */ "./src/app/pages/itemdetails/itemdetails.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








const routes = [{ path: '', component: _itemdetails_component__WEBPACK_IMPORTED_MODULE_3__["ItemdetailsComponent"] },
];
let ItemdetailsModule = class ItemdetailsModule {
};
ItemdetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_itemdetails_component__WEBPACK_IMPORTED_MODULE_3__["ItemdetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6__["NgxImageZoomModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], ItemdetailsModule);



/***/ }),

/***/ "./src/app/pages/itemdetails/itemdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/itemdetails/itemdetails.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* #hover {\r\n    display: none;\r\n    position: relative;\r\n    top: -25px;\r\n}\r\n\r\n#image:hover {\r\n    opacity: .7;\r\n}\r\n\r\n#image:hover + #hover {\r\n    display: block;\r\n} */\r\n\r\n\r\n.rounded {\r\n    border-radius: 20px;\r\n    background: lightgreen;\r\n    width:250px; \r\n  }\r\n\r\n\r\n.rounded:hover {\r\n    \r\n    background: rgb(238, 144, 207) \r\n}\r\n\r\n\r\n.example-button-row {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n  }\r\n\r\n\r\nh1\r\n  {\r\n      \r\n  }\r\n\r\n\r\nh1::first-letter {\r\n    /* font-size: 200%; */\r\n    color: #8A2BE2;\r\n  }\r\n\r\n\r\n.item-fore-color\r\n  {\r\n    background-color: rgb(239, 241, 235);\r\n    color: blue;\r\n\r\n  }\r\n\r\n\r\n.li-text-color\r\n  {\r\n    color: red;\r\n\r\n  }\r\n\r\n\r\n::ng-deep .ngxImageZoomContainer > img{\r\n    max-height: 350px!important;\r\n    max-width: 350px!important;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbWRldGFpbHMvaXRlbWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7OztBQUdIO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7OztBQUVBOztJQUVFO0FBQ0o7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7OztBQUNBOzs7RUFHQTs7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7O0FBSUE7O0lBRUUsb0NBQW9DO0lBQ3BDLFdBQVc7O0VBRWI7OztBQUVBOztJQUVFLFVBQVU7O0VBRVo7OztBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW1kZXRhaWxzL2l0ZW1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjaG92ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbn1cclxuXHJcbiNpbWFnZTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuI2ltYWdlOmhvdmVyICsgI2hvdmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuLnJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbiAgICB3aWR0aDoyNTBweDsgXHJcbiAgfVxyXG5cclxuICAucm91bmRlZDpob3ZlciB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDE0NCwgMjA3KSBcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICBoMVxyXG4gIHtcclxuICAgICAgXHJcbiAgfVxyXG4gIGgxOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgLyogZm9udC1zaXplOiAyMDAlOyAqL1xyXG4gICAgY29sb3I6ICM4QTJCRTI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5pdGVtLWZvcmUtY29sb3JcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDEsIDIzNSk7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuXHJcbiAgfVxyXG5cclxuICAubGktdGV4dC1jb2xvclxyXG4gIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcblxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5uZ3hJbWFnZVpvb21Db250YWluZXIgPiBpbWd7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4IWltcG9ydGFudDtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/itemdetails/itemdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/itemdetails/itemdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ItemdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsComponent", function() { return ItemdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
/* harmony import */ var _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
/* harmony import */ var _model_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/global */ "./src/app/model/global.ts");
/* harmony import */ var _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/cart-item-service.service */ "./src/app/service/cart-item-service.service.ts");
/* harmony import */ var _item_notify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-notify */ "./src/app/pages/itemdetails/item-notify.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_itemdetails_itemdetails_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/itemdetails/itemdetails.service */ "./src/app/pages/itemdetails/itemdetails.service.ts");
/* harmony import */ var _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");













let ItemdetailsComponent = class ItemdetailsComponent {
    constructor(window, localStorage, restProvider, HomepageComponent, route, globals, router, CartItemServiceService, inotify, loadingIndicatorService, itemService) {
        this.window = window;
        this.localStorage = localStorage;
        this.restProvider = restProvider;
        this.HomepageComponent = HomepageComponent;
        this.route = route;
        this.globals = globals;
        this.router = router;
        this.CartItemServiceService = CartItemServiceService;
        this.inotify = inotify;
        this.loadingIndicatorService = loadingIndicatorService;
        this.itemService = itemService;
        this.quantity = 1;
        this.showSelected = false;
        this.displayError = false;
        this.loading = false;
        loadingIndicatorService
            .onLoadingChanged
            .subscribe(isLoading => this.loading = isLoading);
        //////  this.itemService= new itemService();
    }
    ngOnInit() {
        //const img1 = require('./assets/thumbnail.jpg');
        //const img2 = require('./assets/thumbnail2.jpg');
        //$('#74').ezPlus();
        this.breakpoint = (this.window.innerWidth <= 400) ? 1 : 2;
        this.itemid = this.route.snapshot.params["itemid"];
        this.restProvider.itemDetails(this.itemid)
            .subscribe(data => {
            if (data.body.availableQty > 0) {
                data.body.image1 = data.body.image1;
                this.itemDetail = Array.of(data.body);
                // //   ///this.colorDetail =data.body.availableColor.split(";")
                // //  // this.colorname=this.colorDetail[0]
                this.price = data.body.price;
                this.offerprice = data.body.offerPrice;
                this.deliverycharges = data.body.deliveryCharges;
                this.coloId = data.body.colorId;
                this.sizeName = data.body.sizeName;
                this.category = data.body.categoryName;
                this.brand = data.body.brand;
                this.availableQty = data.body.availableQty;
                this.displayError = false;
            }
            else {
                this.displayError = true;
            }
        });
    }
    overTitle() {
        if (this.showSelected == true) {
            ;
            this.showSelected = false;
        }
        else {
            this.showSelected = true;
        }
    }
    addToCart() {
        const idToken = this.localStorage.getItem("id_token");
        if (idToken) {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]();
            header.set("Authorization", "Bearer " + idToken);
            this.restProvider.addToCart(this.itemid, '1')
                .subscribe(data => {
                this.inotify.totalCartItem = data.count;
                this.notifyTotalItem(this.inotify);
                this.router.navigateByUrl('/checkin');
            }, err => {
                this.localStorage.removeItem("id_token");
                this.localStorage.removeItem("expires_at");
                this.localStorage.removeItem("fullName");
                this.localStorage.removeItem("email");
                this.router.navigateByUrl('/login');
            });
        }
        else {
            this.localStorage.removeItem("id_token");
            this.localStorage.removeItem("expires_at");
            this.localStorage.removeItem("fullName");
            this.localStorage.removeItem("email");
            this.itemService.itemid = Number(this.itemid);
            this.itemService.itemIdLogin = Number(this.itemid);
            this.router.navigateByUrl('/login');
        }
    }
    getColor(colorName) {
        this.colorname = colorName;
    }
    notifyTotalItem(totalItem) {
        this.restProvider.changeSelectedItem(totalItem);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
    }
};
ItemdetailsComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_11__["WINDOW"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_11__["LOCAL_STORAGE"],] }] },
    { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingApiService"] },
    { type: _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _model_global__WEBPACK_IMPORTED_MODULE_5__["Globals"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_6__["CartItemServiceService"] },
    { type: _item_notify__WEBPACK_IMPORTED_MODULE_7__["itemNotify"] },
    { type: _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_10__["LoadingIndicatorServiceService"] },
    { type: _pages_itemdetails_itemdetails_service__WEBPACK_IMPORTED_MODULE_9__["itemService"] }
];
ItemdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-itemdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itemdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itemdetails/itemdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itemdetails.component.css */ "./src/app/pages/itemdetails/itemdetails.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_11__["WINDOW"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_11__["LOCAL_STORAGE"]))
], ItemdetailsComponent);



/***/ })

}]);
//# sourceMappingURL=app-pages-itemdetails-itemdetail-module-es2015.js.map