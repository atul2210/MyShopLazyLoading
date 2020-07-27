(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-logout-logout-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container fontClass\">\r\n    <h2 >You have logged out successfully.</h2>\r\n  </div>\r\n</form>");
            /***/ 
        }),
        /***/ "./src/app/pages/logout/logout.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/pages/logout/logout.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/logout/logout.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pages/logout/logout.component.ts ***!
          \**************************************************/
        /*! exports provided: LogoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () { return LogoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            var LogoutComponent = /** @class */ (function () {
                function LogoutComponent(service) {
                    this.service = service;
                }
                LogoutComponent.prototype.ngOnInit = function () {
                    this.service.userFullName("");
                    this.service.logout();
                };
                return LogoutComponent;
            }());
            LogoutComponent.ctorParameters = function () { return [
                { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingApiService"] }
            ]; };
            LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/pages/logout/logout.component.css")).default]
                })
            ], LogoutComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/logout/logout.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/pages/logout/logout.module.ts ***!
          \***********************************************/
        /*! exports provided: LogoutModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutModule", function () { return LogoutModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.component */ "./src/app/pages/logout/logout.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var routes = [{ path: '', component: _logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
            ];
            var LogoutModule = /** @class */ (function () {
                function LogoutModule() {
                }
                return LogoutModule;
            }());
            LogoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ]
                })
            ], LogoutModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=app-pages-logout-logout-module-es2015.js.map
//# sourceMappingURL=app-pages-logout-logout-module-es5.js.map
//# sourceMappingURL=app-pages-logout-logout-module-es5.js.map