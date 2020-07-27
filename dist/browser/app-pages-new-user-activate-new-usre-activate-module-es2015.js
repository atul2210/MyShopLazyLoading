(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-new-user-activate-new-usre-activate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-user-activate/new-user-activate.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-user-activate/new-user-activate.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"container fontClass\" id =\"vidhimAbout\">\r\n        <h4 class=\"mt-4 \">Vidhimas Colluctions</h4>\r\n    \r\n     <div class=\"mt-18 text-justify\" style=\"line-height: 2em\" >   \r\n        We have sent an email to {{emailId}}.  Please login and click on \r\n        the link to activate your account.\r\n        <br>\r\n        \r\n        Happy Shopping !!!\r\n    </div>\r\n    </div>");

/***/ }),

/***/ "./src/app/pages/new-user-activate/new-user-activate.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/new-user-activate/new-user-activate.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy11c2VyLWFjdGl2YXRlL25ldy11c2VyLWFjdGl2YXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/new-user-activate/new-user-activate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/new-user-activate/new-user-activate.component.ts ***!
  \************************************************************************/
/*! exports provided: NewUserActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserActivateComponent", function() { return NewUserActivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ActivateUserService */ "./src/app/service/ActivateUserService.ts");



let NewUserActivateComponent = class NewUserActivateComponent {
    constructor(activate) {
        this.activate = activate;
    }
    ngOnInit() {
        this.emailId = this.activate.getOption();
    }
};
NewUserActivateComponent.ctorParameters = () => [
    { type: _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_2__["activateuserservce"] }
];
NewUserActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-user-activate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-user-activate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-user-activate/new-user-activate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-user-activate.component.css */ "./src/app/pages/new-user-activate/new-user-activate.component.css")).default]
    })
], NewUserActivateComponent);



/***/ }),

/***/ "./src/app/pages/new-user-activate/new-usre-activate.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/new-user-activate/new-usre-activate.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewUserActivateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserActivateModule", function() { return NewUserActivateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_user_activate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-user-activate.component */ "./src/app/pages/new-user-activate/new-user-activate.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





////import {FormsModule,ReactiveFormsModule} from '@angular/forms';
const routes = [{ path: '', component: _new_user_activate_component__WEBPACK_IMPORTED_MODULE_3__["NewUserActivateComponent"] },
];
let NewUserActivateModule = class NewUserActivateModule {
};
NewUserActivateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_user_activate_component__WEBPACK_IMPORTED_MODULE_3__["NewUserActivateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], NewUserActivateModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-new-user-activate-new-usre-activate-module-es2015.js.map