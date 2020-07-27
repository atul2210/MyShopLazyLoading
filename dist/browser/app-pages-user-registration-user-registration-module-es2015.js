(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-user-registration-user-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-registration/user-registration.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-registration/user-registration.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<form  class=\"container was-validated fontClass \" role=\"form\"  [formGroup]=\"myform\" \r\nrole=\"form\"  >\r\n\r\n      <div class = \"box box-body\">\r\n  <!-- <fieldset formGroupName=\"name\"> -->\r\n    <div class=\"box-header with-border\">\r\n      <h3 class=\"box-title\">New User</h3>\r\n    </div>\r\n<br>\r\n      <div class=\"form-group\"\r\n      [ngClass]=\"{\r\n     'has-danger': mobile.invalid && (mobile.dirty || mobile.touched),\r\n     'has-success': mobile.valid && (mobile.dirty || mobile.touched)\r\n   }\">\r\n   <label>Mobile Number</label>\r\n   <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"mobile\"  value=[mobileNum]  required>\r\n   <div class=\"was-validated\"\r\n        *ngIf=\"mobile.errors && (mobile.dirty || mobile.touched ) \">\r\n     <p *ngIf=\"mobile.errors.required\">Mobile number is required</p>\r\n     \r\n   </div>\r\n     <!-- <pre>Valid? {{ myform.controls.name.controls.mobile.valid }}</pre>\r\n     <pre>Dirty? {{ myform.controls.name.controls.mobile.dirty }}</pre>\r\n     <pre>pres? {{ myform.controls.name.controls.mobile.pristine }}</pre> -->\r\n </div>\r\n\r\n <div class=\"form-group\"\r\n [ngClass]=\"{\r\n'has-danger': otp.invalid && (otp.dirty || otp.touched),\r\n'has-success': otp.valid && (otp.dirty || otp.touched)\r\n}\">\r\n<label>OTP</label>\r\n<input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"otp\"  value=[otp]  required>\r\n<div class=\"was-validated\"\r\n   *ngIf=\"otp.errors && (otp.dirty || otp.touched ) \">\r\n<p *ngIf=\"otp.errors.required\">OTP is required</p>\r\n\r\n</div>\r\n\r\n<!-- <div *ngIf=\"!isOtpOK\";else [innerHTML] = \"'' |safe:'script'\"\r\n(change)=\"validateOTP();\"> -->\r\n<!-- <div  *ngIf=\"!isOtpOK\" >\r\n\r\nOTP is Invalid. Please re-enter wwwOTP\"\r\n\r\n</div> -->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{\r\n        'has-danger': firstName.invalid && (firstName.dirty || firstName.touched || firstName.pristine),\r\n        'has-success': firstName.valid && (firstName.dirty || firstName.touched)\r\n      }\">\r\n      <label>First Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control form-control-sm \"\r\n             formControlName=\"firstName\"\r\n             required>\r\n      <div class=\"form-control-feedback\"\r\n           *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\r\n        <p *ngIf=\"firstName.errors.required\">First Name is required</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group \">\r\n      <label>Middle Name</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"middleName\"> \r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{\r\n        'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\r\n        'has-success': lastName.valid && (lastName.dirty || lastName.touched)\r\n      }\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control form-control-sm\"\r\n             formControlName=\"lastName\"\r\n             required>\r\n      <div class=\"form-control-feedback\"\r\n           *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\r\n        <p *ngIf=\"lastName.errors.required\">Last Name is required</p>\r\n      </div>\r\n    </div>\r\n  \r\n  <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': myemail.invalid && (myemail.dirty || myemail.touched),\r\n        'has-success': myemail.valid && (myemail.dirty || myemail.touched)\r\n   }\">\r\n\r\n   <label>Email</label>\r\n    <input type=\"email\" \r\n           class=\"form-control form-control-sm\"\r\n           formControlName=\"myemail\"\r\n           required>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"myemail.errors && (myemail.dirty || myemail.touched)\">\r\n      <p *ngIf=\"myemail.errors.required\">Email is required</p>\r\n      <p *ngIf=\"myemail.errors.pattern\">The email address must contain at least the @ character</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': password.invalid && (password.dirty || password.touched|| password.pristine),\r\n        'has-success': password.valid && (password.dirty || password.touched)\r\n   }\">\r\n    <label>Password</label>\r\n    <input type=\"password\"\r\n           class=\"form-control form-control-sm\"\r\n           formControlName=\"password\"\r\n           required>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n      <p *ngIf=\"password.errors.required\">Password is required</p>\r\n      <p *ngIf=\"password.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--\r\n    <pre>{{ password.errors | json }}</pre>\r\n  -->\r\n  <div class=\"form-group\">\r\n    <label>Ulternate Mobile</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"ulternatemobile\"> \r\n  </div>\r\n\r\n  <div class=\"form-group\"\r\n  [ngClass]=\"{\r\n   'has-danger': address.invalid && (address.dirty || address.touched),\r\n   'has-success': address.valid && (address.dirty || address.touched)\r\n}\">\r\n<label>Address</label>\r\n<textarea rows=\"3\" class=\"form-control\" formControlName=\"address\" required></textarea>\r\n<div class=\"form-control-feedback\"\r\n    *ngIf=\"address.errors && (address.dirty || address.touched)\">\r\n <p *ngIf=\"address.errors.required\">Address is required</p>\r\n <!-- <p *ngIf=\"address.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p> -->\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\"\r\n[ngClass]=\"{\r\n 'has-danger': mystate.invalid && (mystate.dirty || mystate.touched),\r\n 'has-success': mystate.valid && (mystate.dirty || mystate.touched)\r\n}\">\r\n<label>State</label>\r\n<select class=\"form-control form-control-sm\"\r\n     formControlName=\"mystate\"  [(ngModel)]=\"selectedState\" (change)=GetCities(selectedState)>\r\n<!-- <option value=\"\">Please select a State</option> -->\r\n<option *ngFor=\"let lang of states\"\r\n[value]=\"lang.stateid\">{{lang.stateName}}\r\n</option>\r\n</select>\r\n\r\n<div class=\"form-control-feedback\"\r\n*ngIf=\"mystate.errors && (mystate.dirty || mystate.touched)\">\r\n<p *ngIf=\"mystate.errors.required\">State is required</p>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\"\r\n  [ngClass]=\"{\r\n   'has-danger': city.invalid && (city.dirty || city.touched),\r\n   'has-success': city.valid && (city.dirty || city.touched)\r\n}\">\r\n    <label>City</label>\r\n    <select class=\"form-control form-control-sm\"\r\n     formControlName=\"city\"  >\r\n\r\n    <option *ngFor=\"let cc of citeis\"\r\n    [value]=\"cc.stateid\">{{cc.city}}\r\n    </option>\r\n  </select>\r\n    <!-- <input type=\"city\"\r\n          class=\"form-control form-control-sm\"\r\n          formControlName=\"city\"\r\n          required> -->\r\n    <div class=\"form-control-feedback\"\r\n        *ngIf=\"city.errors && (city.dirty || city.touched)\">\r\n    <p *ngIf=\"city.errors.required\">City is required</p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"form-group\"\r\n  [ngClass]=\"{\r\n   'has-danger': pin.invalid && (pin.dirty || pin.touched),\r\n   'has-success': pin.valid && (pin.dirty || pin.touched)\r\n}\">\r\n    <label>Pin</label>\r\n    <input type=\"pin\"\r\n          class=\"form-control form-control-sm\"\r\n          formControlName=\"pin\"\r\n          required>\r\n    <div class=\"form-control-feedback\"\r\n        *ngIf=\"pin.errors && (pin.dirty || pin.touched)\">\r\n    <p *ngIf=\"pin.errors.required\">Pin is required</p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n  <!-- <pre>{{myform.value | json}}</pre> -->\r\n<!-- </fieldset> -->\r\n  <div class=\"box-footer\">\r\n      <button type=\"submit\" class=\"btn btn-default\">Cancel</button>\r\n      <button type=\"submit\" class=\"btn btn-primary mb-2 pull-right\" (click)=\"save()\"   >Submit</button>\r\n    </div>\r\n\r\n \r\n</div>\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/user-registration/user-registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user-registration/user-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/registration */ "./src/app/model/registration.ts");
/* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
/* harmony import */ var _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/ActivateUserService */ "./src/app/service/ActivateUserService.ts");








let UserRegistrationComponent = class UserRegistrationComponent {
    constructor(localStorage, ActivatedRoute, router, ShoppingApiService, activateuserservce) {
        this.localStorage = localStorage;
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this.ShoppingApiService = ShoppingApiService;
        this.activateuserservce = activateuserservce;
        //////  isOtpOK:boolean=true;
        this.states = [
        // 'Uttar Pradesh',
        // 'Delhi',
        // 'Madhya Pradesh',
        ];
        this.citeis = null;
        this.response = null;
    }
    ngOnInit() {
        let userform;
        this.createFormControls();
        this.createForm();
        this.myform.controls["mobile"].patchValue(this.ActivatedRoute.snapshot.params['mobile']);
        this.ShoppingApiService.GetStates()
            .subscribe((res) => {
            this.ResState = res.body;
            this.states = this.ResState;
            console.log("states", this.states);
        });
    }
    createFormControls() {
        this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.middleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.myemail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
        ]);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.mystate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.ulternatemobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.pin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.otp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    createForm() {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //name: new FormGroup({
            mobile: this.mobile,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            myemail: this.myemail,
            password: this.password,
            address: this.address,
            city: this.city,
            mystate: this.mystate,
            ulternatemobile: this.ulternatemobile,
            pin: this.pin,
            otp: this.otp
            //}),
        });
    }
    save() {
        if (this.myform.valid) {
            let data;
            data = new _model_registration__WEBPACK_IMPORTED_MODULE_4__["registration"]();
            data.mobile = this.myform.controls['mobile'].value;
            data.ulternateMobile = this.myform.controls["ulternatemobile"].value;
            data.firstName = this.myform.controls["firstName"].value;
            data.middleName = this.myform.controls["middleName"].value;
            data.lastName = this.myform.controls["lastName"].value;
            data.myemail = this.myform.controls["myemail"].value;
            data.password = this.myform.controls["password"].value;
            data.address = this.myform.controls["address"].value;
            data.city = this.myform.controls["city"].value;
            data.mystate = this.myform.controls["mystate"].value;
            data.pin = this.myform.controls["pin"].value;
            data.otp = +this.myform.controls["otp"].value;
            this.activateuserservce.setOption('email', this.myform.controls["myemail"].value);
            this.ShoppingApiService.addUser(data)
                .subscribe((m) => {
                this.response = m;
                this.router.navigateByUrl('/NewUserActivate');
            }, (err) => {
                console.log(err);
                this.router.navigateByUrl("/Error/" + err.error.Message + "/regis/" + data.mobile);
            });
        }
    }
    GetCities(StateId) {
        this.ShoppingApiService.GetCities(StateId)
            .subscribe((res) => {
            this.citeis = res.body;
            console.log(this.citeis);
        });
    }
};
UserRegistrationComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingApiService"] },
    { type: _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_7__["activateuserservce"] }
];
UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-registration/user-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-registration.component.css */ "./src/app/pages/user-registration/user-registration.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"]))
], UserRegistrationComponent);



/***/ }),

/***/ "./src/app/pages/user-registration/user-registration.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserRegistrationComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponentModule", function() { return UserRegistrationComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-registration.component */ "./src/app/pages/user-registration/user-registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [{ path: '', component: _user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"] },
];
let UserRegistrationComponentModule = class UserRegistrationComponentModule {
};
UserRegistrationComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], UserRegistrationComponentModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-user-registration-user-registration-module-es2015.js.map