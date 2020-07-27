(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-about-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container fontClass\" id =\"vidhimAbout\">\r\n    <h4 class=\"mt-4 \">Vidhimas Colluctions</h4>\r\n\r\n <div class=\"mt-18 text-justify\" style=\"line-height: 2em\" >   \r\n  A Gurgaon (Haryana) – India based company has enabled a market place for readymade garments consumers/owners in India. \r\n  Brands like vidhim.com is developed with the intention to organize your daily needs and bring transparency in pricing \r\n  and quality to the end consumer.\r\n  \r\n  With www.vidhim.com, consumer will be able to get the best product/service at the best price. \r\n  They will get very best deal will minimal price. \r\n</div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/about-us.component.css":
/*!**********************************************!*\
  !*** ./src/app/pages/about-us.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/about-us.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about-us.component.ts ***!
  \*********************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/pages/about-us.module.ts":
/*!******************************************!*\
  !*** ./src/app/pages/about-us.module.ts ***!
  \******************************************/
/*! exports provided: AboutUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/about-us.component */ "./src/app/pages/about-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





//import { PmtRcvtThanksComponent } from './pmt-rcvt-thanks/pmt-rcvt-thanks.component';
const routes = [{ path: '', component: _pages_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
];
let AboutUsModule = class AboutUsModule {
};
AboutUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], AboutUsModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-about-us-module-es2015.js.map