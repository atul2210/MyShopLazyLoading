(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-shipping-policy-shipping-policy-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping-policy/shipping-policy.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping-policy/shipping-policy.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class =\"container fontClass \">\r\n  <h2>Shipping Policy</h2>\r\n  <hr>\r\n  <div class =\"mt-4 text-justify\">\r\n      Upon booking the order, customers will get an SMS or an Email about their booking detail with contact telephone number.\r\n       The customer will also get a call from our support person regarding your \r\n       purchase confirmation. \r\n<br><br>\r\n        Usually your booked/purchased item(s) is/are delivered within 3- 5 working days  from the booking \r\n        date and time. Customers are requested to show the order SMS/Email and mention and \r\n        valid Government Photo Id (Aadhar Card/Pan Card/ Voter Id/Driving License etc.)  \r\n        to the delivery person. \r\n        <br>\r\n        <br>\r\n        If the delivery person requests to change the purchased items or requests \r\n        to pay more than what is quoted, please call our support \r\n        number +91 8860658739. Our delivery office is opened \r\n        from 9:30am – 6:30pm Indian Standard Time (IST) Monday through Saturday except for holidays. \r\n</div>\r\n</div>");
            /***/ 
        }),
        /***/ "./src/app/pages/shipping-policy/shipping-policy.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/shipping-policy/shipping-policy.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoaXBwaW5nLXBvbGljeS9zaGlwcGluZy1wb2xpY3kuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/shipping-policy/shipping-policy.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/shipping-policy/shipping-policy.component.ts ***!
          \********************************************************************/
        /*! exports provided: ShippingPolicyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPolicyComponent", function () { return ShippingPolicyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ShippingPolicyComponent = /** @class */ (function () {
                function ShippingPolicyComponent() {
                }
                ShippingPolicyComponent.prototype.ngOnInit = function () {
                };
                return ShippingPolicyComponent;
            }());
            ShippingPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shipping-policy',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipping-policy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping-policy/shipping-policy.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipping-policy.component.css */ "./src/app/pages/shipping-policy/shipping-policy.component.css")).default]
                })
            ], ShippingPolicyComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/shipping-policy/shipping-policy.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/shipping-policy/shipping-policy.module.ts ***!
          \*****************************************************************/
        /*! exports provided: ShippingPolicydModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPolicydModule", function () { return ShippingPolicydModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shipping_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping-policy.component */ "./src/app/pages/shipping-policy/shipping-policy.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [{ path: '', component: _shipping_policy_component__WEBPACK_IMPORTED_MODULE_3__["ShippingPolicyComponent"] },
            ];
            var ShippingPolicydModule = /** @class */ (function () {
                function ShippingPolicydModule() {
                }
                return ShippingPolicydModule;
            }());
            ShippingPolicydModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_shipping_policy_component__WEBPACK_IMPORTED_MODULE_3__["ShippingPolicyComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ]
                })
            ], ShippingPolicydModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=app-pages-shipping-policy-shipping-policy-module-es2015.js.map
//# sourceMappingURL=app-pages-shipping-policy-shipping-policy-module-es5.js.map
//# sourceMappingURL=app-pages-shipping-policy-shipping-policy-module-es5.js.map