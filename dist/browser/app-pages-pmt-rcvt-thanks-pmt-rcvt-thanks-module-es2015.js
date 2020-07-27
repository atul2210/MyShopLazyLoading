(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pmt-rcvt-thanks-pmt-rcvt-thanks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class =\"container fontClass \">\r\n    <h2>Thanks! </h2>\r\n    <hr>\r\n    <div class =\"mt-4 text-justify\">\r\n     You payment has been received. Happy Shopping !!!\r\n   <br><br>\r\n      \r\n     \r\n  </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BtdC1yY3Z0LXRoYW5rcy9wbXQtcmN2dC10aGFua3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.ts ***!
  \********************************************************************/
/*! exports provided: PmtRcvtThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmtRcvtThanksComponent", function() { return PmtRcvtThanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PmtRcvtThanksComponent = class PmtRcvtThanksComponent {
    constructor(route) { }
    ngOnInit() {
    }
};
PmtRcvtThanksComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PmtRcvtThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pmt-rcvt-thanks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pmt-rcvt-thanks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pmt-rcvt-thanks.component.css */ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.css")).default]
    })
], PmtRcvtThanksComponent);



/***/ }),

/***/ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.module.ts ***!
  \*****************************************************************/
/*! exports provided: PmtRcvtThanksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmtRcvtThanksModule", function() { return PmtRcvtThanksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pmt_rcvt_thanks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pmt-rcvt-thanks.component */ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    { path: '', component: _pmt_rcvt_thanks_component__WEBPACK_IMPORTED_MODULE_4__["PmtRcvtThanksComponent"] }
];
let PmtRcvtThanksModule = class PmtRcvtThanksModule {
};
PmtRcvtThanksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pmt_rcvt_thanks_component__WEBPACK_IMPORTED_MODULE_4__["PmtRcvtThanksComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], PmtRcvtThanksModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-pmt-rcvt-thanks-pmt-rcvt-thanks-module-es2015.js.map