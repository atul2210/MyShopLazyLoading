var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$": 
        /*!**************************************************!*\
          !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./af": "./node_modules/moment/locale/af.js",
                "./af.js": "./node_modules/moment/locale/af.js",
                "./ar": "./node_modules/moment/locale/ar.js",
                "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
                "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
                "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
                "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
                "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
                "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
                "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
                "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
                "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
                "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
                "./ar.js": "./node_modules/moment/locale/ar.js",
                "./az": "./node_modules/moment/locale/az.js",
                "./az.js": "./node_modules/moment/locale/az.js",
                "./be": "./node_modules/moment/locale/be.js",
                "./be.js": "./node_modules/moment/locale/be.js",
                "./bg": "./node_modules/moment/locale/bg.js",
                "./bg.js": "./node_modules/moment/locale/bg.js",
                "./bm": "./node_modules/moment/locale/bm.js",
                "./bm.js": "./node_modules/moment/locale/bm.js",
                "./bn": "./node_modules/moment/locale/bn.js",
                "./bn.js": "./node_modules/moment/locale/bn.js",
                "./bo": "./node_modules/moment/locale/bo.js",
                "./bo.js": "./node_modules/moment/locale/bo.js",
                "./br": "./node_modules/moment/locale/br.js",
                "./br.js": "./node_modules/moment/locale/br.js",
                "./bs": "./node_modules/moment/locale/bs.js",
                "./bs.js": "./node_modules/moment/locale/bs.js",
                "./ca": "./node_modules/moment/locale/ca.js",
                "./ca.js": "./node_modules/moment/locale/ca.js",
                "./cs": "./node_modules/moment/locale/cs.js",
                "./cs.js": "./node_modules/moment/locale/cs.js",
                "./cv": "./node_modules/moment/locale/cv.js",
                "./cv.js": "./node_modules/moment/locale/cv.js",
                "./cy": "./node_modules/moment/locale/cy.js",
                "./cy.js": "./node_modules/moment/locale/cy.js",
                "./da": "./node_modules/moment/locale/da.js",
                "./da.js": "./node_modules/moment/locale/da.js",
                "./de": "./node_modules/moment/locale/de.js",
                "./de-at": "./node_modules/moment/locale/de-at.js",
                "./de-at.js": "./node_modules/moment/locale/de-at.js",
                "./de-ch": "./node_modules/moment/locale/de-ch.js",
                "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
                "./de.js": "./node_modules/moment/locale/de.js",
                "./dv": "./node_modules/moment/locale/dv.js",
                "./dv.js": "./node_modules/moment/locale/dv.js",
                "./el": "./node_modules/moment/locale/el.js",
                "./el.js": "./node_modules/moment/locale/el.js",
                "./en-SG": "./node_modules/moment/locale/en-SG.js",
                "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
                "./en-au": "./node_modules/moment/locale/en-au.js",
                "./en-au.js": "./node_modules/moment/locale/en-au.js",
                "./en-ca": "./node_modules/moment/locale/en-ca.js",
                "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
                "./en-gb": "./node_modules/moment/locale/en-gb.js",
                "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
                "./en-ie": "./node_modules/moment/locale/en-ie.js",
                "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
                "./en-il": "./node_modules/moment/locale/en-il.js",
                "./en-il.js": "./node_modules/moment/locale/en-il.js",
                "./en-nz": "./node_modules/moment/locale/en-nz.js",
                "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
                "./eo": "./node_modules/moment/locale/eo.js",
                "./eo.js": "./node_modules/moment/locale/eo.js",
                "./es": "./node_modules/moment/locale/es.js",
                "./es-do": "./node_modules/moment/locale/es-do.js",
                "./es-do.js": "./node_modules/moment/locale/es-do.js",
                "./es-us": "./node_modules/moment/locale/es-us.js",
                "./es-us.js": "./node_modules/moment/locale/es-us.js",
                "./es.js": "./node_modules/moment/locale/es.js",
                "./et": "./node_modules/moment/locale/et.js",
                "./et.js": "./node_modules/moment/locale/et.js",
                "./eu": "./node_modules/moment/locale/eu.js",
                "./eu.js": "./node_modules/moment/locale/eu.js",
                "./fa": "./node_modules/moment/locale/fa.js",
                "./fa.js": "./node_modules/moment/locale/fa.js",
                "./fi": "./node_modules/moment/locale/fi.js",
                "./fi.js": "./node_modules/moment/locale/fi.js",
                "./fo": "./node_modules/moment/locale/fo.js",
                "./fo.js": "./node_modules/moment/locale/fo.js",
                "./fr": "./node_modules/moment/locale/fr.js",
                "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
                "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
                "./fr.js": "./node_modules/moment/locale/fr.js",
                "./fy": "./node_modules/moment/locale/fy.js",
                "./fy.js": "./node_modules/moment/locale/fy.js",
                "./ga": "./node_modules/moment/locale/ga.js",
                "./ga.js": "./node_modules/moment/locale/ga.js",
                "./gd": "./node_modules/moment/locale/gd.js",
                "./gd.js": "./node_modules/moment/locale/gd.js",
                "./gl": "./node_modules/moment/locale/gl.js",
                "./gl.js": "./node_modules/moment/locale/gl.js",
                "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
                "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
                "./gu": "./node_modules/moment/locale/gu.js",
                "./gu.js": "./node_modules/moment/locale/gu.js",
                "./he": "./node_modules/moment/locale/he.js",
                "./he.js": "./node_modules/moment/locale/he.js",
                "./hi": "./node_modules/moment/locale/hi.js",
                "./hi.js": "./node_modules/moment/locale/hi.js",
                "./hr": "./node_modules/moment/locale/hr.js",
                "./hr.js": "./node_modules/moment/locale/hr.js",
                "./hu": "./node_modules/moment/locale/hu.js",
                "./hu.js": "./node_modules/moment/locale/hu.js",
                "./hy-am": "./node_modules/moment/locale/hy-am.js",
                "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
                "./id": "./node_modules/moment/locale/id.js",
                "./id.js": "./node_modules/moment/locale/id.js",
                "./is": "./node_modules/moment/locale/is.js",
                "./is.js": "./node_modules/moment/locale/is.js",
                "./it": "./node_modules/moment/locale/it.js",
                "./it-ch": "./node_modules/moment/locale/it-ch.js",
                "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
                "./it.js": "./node_modules/moment/locale/it.js",
                "./ja": "./node_modules/moment/locale/ja.js",
                "./ja.js": "./node_modules/moment/locale/ja.js",
                "./jv": "./node_modules/moment/locale/jv.js",
                "./jv.js": "./node_modules/moment/locale/jv.js",
                "./ka": "./node_modules/moment/locale/ka.js",
                "./ka.js": "./node_modules/moment/locale/ka.js",
                "./kk": "./node_modules/moment/locale/kk.js",
                "./kk.js": "./node_modules/moment/locale/kk.js",
                "./km": "./node_modules/moment/locale/km.js",
                "./km.js": "./node_modules/moment/locale/km.js",
                "./kn": "./node_modules/moment/locale/kn.js",
                "./kn.js": "./node_modules/moment/locale/kn.js",
                "./ko": "./node_modules/moment/locale/ko.js",
                "./ko.js": "./node_modules/moment/locale/ko.js",
                "./ku": "./node_modules/moment/locale/ku.js",
                "./ku.js": "./node_modules/moment/locale/ku.js",
                "./ky": "./node_modules/moment/locale/ky.js",
                "./ky.js": "./node_modules/moment/locale/ky.js",
                "./lb": "./node_modules/moment/locale/lb.js",
                "./lb.js": "./node_modules/moment/locale/lb.js",
                "./lo": "./node_modules/moment/locale/lo.js",
                "./lo.js": "./node_modules/moment/locale/lo.js",
                "./lt": "./node_modules/moment/locale/lt.js",
                "./lt.js": "./node_modules/moment/locale/lt.js",
                "./lv": "./node_modules/moment/locale/lv.js",
                "./lv.js": "./node_modules/moment/locale/lv.js",
                "./me": "./node_modules/moment/locale/me.js",
                "./me.js": "./node_modules/moment/locale/me.js",
                "./mi": "./node_modules/moment/locale/mi.js",
                "./mi.js": "./node_modules/moment/locale/mi.js",
                "./mk": "./node_modules/moment/locale/mk.js",
                "./mk.js": "./node_modules/moment/locale/mk.js",
                "./ml": "./node_modules/moment/locale/ml.js",
                "./ml.js": "./node_modules/moment/locale/ml.js",
                "./mn": "./node_modules/moment/locale/mn.js",
                "./mn.js": "./node_modules/moment/locale/mn.js",
                "./mr": "./node_modules/moment/locale/mr.js",
                "./mr.js": "./node_modules/moment/locale/mr.js",
                "./ms": "./node_modules/moment/locale/ms.js",
                "./ms-my": "./node_modules/moment/locale/ms-my.js",
                "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
                "./ms.js": "./node_modules/moment/locale/ms.js",
                "./mt": "./node_modules/moment/locale/mt.js",
                "./mt.js": "./node_modules/moment/locale/mt.js",
                "./my": "./node_modules/moment/locale/my.js",
                "./my.js": "./node_modules/moment/locale/my.js",
                "./nb": "./node_modules/moment/locale/nb.js",
                "./nb.js": "./node_modules/moment/locale/nb.js",
                "./ne": "./node_modules/moment/locale/ne.js",
                "./ne.js": "./node_modules/moment/locale/ne.js",
                "./nl": "./node_modules/moment/locale/nl.js",
                "./nl-be": "./node_modules/moment/locale/nl-be.js",
                "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
                "./nl.js": "./node_modules/moment/locale/nl.js",
                "./nn": "./node_modules/moment/locale/nn.js",
                "./nn.js": "./node_modules/moment/locale/nn.js",
                "./pa-in": "./node_modules/moment/locale/pa-in.js",
                "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
                "./pl": "./node_modules/moment/locale/pl.js",
                "./pl.js": "./node_modules/moment/locale/pl.js",
                "./pt": "./node_modules/moment/locale/pt.js",
                "./pt-br": "./node_modules/moment/locale/pt-br.js",
                "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
                "./pt.js": "./node_modules/moment/locale/pt.js",
                "./ro": "./node_modules/moment/locale/ro.js",
                "./ro.js": "./node_modules/moment/locale/ro.js",
                "./ru": "./node_modules/moment/locale/ru.js",
                "./ru.js": "./node_modules/moment/locale/ru.js",
                "./sd": "./node_modules/moment/locale/sd.js",
                "./sd.js": "./node_modules/moment/locale/sd.js",
                "./se": "./node_modules/moment/locale/se.js",
                "./se.js": "./node_modules/moment/locale/se.js",
                "./si": "./node_modules/moment/locale/si.js",
                "./si.js": "./node_modules/moment/locale/si.js",
                "./sk": "./node_modules/moment/locale/sk.js",
                "./sk.js": "./node_modules/moment/locale/sk.js",
                "./sl": "./node_modules/moment/locale/sl.js",
                "./sl.js": "./node_modules/moment/locale/sl.js",
                "./sq": "./node_modules/moment/locale/sq.js",
                "./sq.js": "./node_modules/moment/locale/sq.js",
                "./sr": "./node_modules/moment/locale/sr.js",
                "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr.js": "./node_modules/moment/locale/sr.js",
                "./ss": "./node_modules/moment/locale/ss.js",
                "./ss.js": "./node_modules/moment/locale/ss.js",
                "./sv": "./node_modules/moment/locale/sv.js",
                "./sv.js": "./node_modules/moment/locale/sv.js",
                "./sw": "./node_modules/moment/locale/sw.js",
                "./sw.js": "./node_modules/moment/locale/sw.js",
                "./ta": "./node_modules/moment/locale/ta.js",
                "./ta.js": "./node_modules/moment/locale/ta.js",
                "./te": "./node_modules/moment/locale/te.js",
                "./te.js": "./node_modules/moment/locale/te.js",
                "./tet": "./node_modules/moment/locale/tet.js",
                "./tet.js": "./node_modules/moment/locale/tet.js",
                "./tg": "./node_modules/moment/locale/tg.js",
                "./tg.js": "./node_modules/moment/locale/tg.js",
                "./th": "./node_modules/moment/locale/th.js",
                "./th.js": "./node_modules/moment/locale/th.js",
                "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
                "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
                "./tlh": "./node_modules/moment/locale/tlh.js",
                "./tlh.js": "./node_modules/moment/locale/tlh.js",
                "./tr": "./node_modules/moment/locale/tr.js",
                "./tr.js": "./node_modules/moment/locale/tr.js",
                "./tzl": "./node_modules/moment/locale/tzl.js",
                "./tzl.js": "./node_modules/moment/locale/tzl.js",
                "./tzm": "./node_modules/moment/locale/tzm.js",
                "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm.js": "./node_modules/moment/locale/tzm.js",
                "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
                "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
                "./uk": "./node_modules/moment/locale/uk.js",
                "./uk.js": "./node_modules/moment/locale/uk.js",
                "./ur": "./node_modules/moment/locale/ur.js",
                "./ur.js": "./node_modules/moment/locale/ur.js",
                "./uz": "./node_modules/moment/locale/uz.js",
                "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
                "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
                "./uz.js": "./node_modules/moment/locale/uz.js",
                "./vi": "./node_modules/moment/locale/vi.js",
                "./vi.js": "./node_modules/moment/locale/vi.js",
                "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
                "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
                "./yo": "./node_modules/moment/locale/yo.js",
                "./yo.js": "./node_modules/moment/locale/yo.js",
                "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
                "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
                "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
                "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
                "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
                "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" >  \r\n  <img src =\"assets/loading/loading.gif\" class = \"header-shadow\" > 000Loading ...\r\n</div>\r\n\r\n<div  class = \"container\">\r\n\t<app-sliders></app-sliders>\r\n</div> \r\n\t<!-- <div  infiniteScroll (scrolled)=\"onScrollDown()\" [scrollWindow]=\"true\" [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" >\r\n\r\n\t\t<div style=\"background-color: orangered\" class = \"ui four cards justify-content-center\"  >\r\n\t  <div *ngFor=\"let item of categoryItemArray;let i=index\" style= \"padding: 5px;\">\r\n\t\r\n\t\t<a target='_blank' [routerLink]=\"['/itemDetail/',item.itemid]\" class =\"red card\">\r\n\t\r\n\t\t  <div class=\"image\">\r\n\t\t\t<img style=\"width:150px;height:150px;\" [src]=item.image1>\r\n\t\t  </div>\r\n\t\t  <div class=\"\">\r\n\t\t\t<a class=\"header\">{{item.itemName}}</a>\r\n\t\t\t<div class=\"meta\">\r\n\t\t\t\t<span class=\"date\">Color : {{item.color}}</span>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"description\" >\r\n\t\t\t   Size : {{item.sizeName}}\r\n\t\t\t  </div>\r\n\t\t\t<div class=\"meta\">\r\n\t\t\t\t<span class=\"date\">Price : {{item.price |currency :\"₹\":'0'}}</span>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"meta\">\r\n\t\t\t\t<span class=\"date\">Offer Price : {{item.offerPrice |currency :\"₹\":'0'}}</span>\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t\t  <div >\r\n\t\t\t\r\n\t\t\t  <i class=\"user icon\"></i>\r\n\t\t\t  Brand : {{item.brand}}\r\n\t\t   \r\n\t\t  </div>\r\n\t\r\n\t\r\n\t</a>\r\n\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n\t<div  infiniteScroller (scrolled)=\"onScrollDown()\"   >\r\n\r\n\t\t<div style=\"background-color: orangered\" class = \"ui four cards justify-content-center\"  >\r\n\t  <div *ngFor=\"let item of categoryItemArray;let i=index\" style= \"padding: 5px;\">\r\n\t\r\n\t\t<a target='_blank' [routerLink]=\"['/itemDetail/',item.itemid]\" class =\"red card\">\r\n\t\r\n\t\t  <div class=\"image\">\r\n\t\t\t<img style=\"cursor: pointer;width:150px;height:150px;\" [src]=\"item.image1 |safe:'url'\">\r\n\t\t  </div>\r\n\t\t  <div class=\"\">\r\n\t\t\t<a class=\"header\">{{item.itemName}}</a>\r\n\t\t\t<!-- <div class=\"description\" >\r\n\t\t\t\t<span class=\"date\">Description : {{item.itemDescription}}</span>\r\n\t\t\t  </div> -->\r\n\t\t\t<div class=\"meta\">\r\n\t\t\t\t<span class=\"date\">Color : {{item.color}}</span>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"description\" >\r\n\t\t\t   Size : {{item.sizeName}}\r\n\t\t\t  </div>\r\n\t\t\t<div class=\"meta\">\r\n\t\t\t\t<span class=\"date\">Price : {{item.price |currency :\"₹\":''}}</span>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"meta\">\r\n\t\t\t\t<span class=\"date\">Offer Price : {{item.offerPrice |currency :\"₹\":''}}</span>\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t\t  <div >\r\n\t\t\t\r\n\t\t\t  <i class=\"user icon\"></i>\r\n\t\t\t  Brand : {{item.brand}}\r\n\t\t   \r\n\t\t  </div>\r\n\t\r\n\t\r\n\t</a>\r\n\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/homepage/homepage.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/homepage/homepage.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n  <app-dynamic-menu></app-dynamic-menu>\r\n  <div style=\"background-color: black\">\r\n\r\n    <span class=\"d-none\">men women kids vidhim shopping kurti legging kids frocks online shopping \r\n      cheap rate www.vidhim.com all types of cheap range items.\r\n      </span>\r\n\r\n\r\n<div class=\"mt-0\">\r\n\r\n    <a [routerLink]=\"['']\" class=\"ml-1\" > <i class=\"fa fa-home fa-fw aria-hidden=true\" aria-hidden=\"true\"></i></a>\r\n    <div class=\"mobile-center d-inline\">\r\n          <input type=\"text\"  style=\"line-height:1.5\" placeholder=\"Search\" class=\" input:focus \" name=\"search\" [(ngModel)]=\"itemname\" >\r\n          <a style=\"width:30px;\"  class=\"cur btn btn-danger\" (click)=\"searchResult()\" ><i class=\"fa fa-search pull-left\"></i></a>\r\n      \r\n          \r\n         \r\n       \r\n  </div>\r\n<div class=\"pull-right mr-2 d-inline\">\r\n    <label for=\"fullname\" class=\"badge text-primary\" >{{fullName}}</label>\r\n         \r\n          \r\n    <button style=\"width:30px;height:25px;\" class=\"cur btn btn-danger dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i>\r\n    <span class=\"caret\"></span></button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li><a  class=\"cur btn btn-danger mr-2\" style=\"width:85px;text-align:left;font-size:10px;\" (click)=\"RedirectToLogin()\">Sign In <i class=\"fa fa-sign-in \"></i> </a></li>\r\n      <li><a [routerLink]=\"['/logout']\" style=\"width:85px;text-align:left;font-size:10px;color: black; \" class=\" cur btn btn-danger mr-2\">Sign Out <i class=\"fa fa-sign-in \"></i> </a></li>\r\n     \r\n    </ul>\r\n  <a class= \"text-danger cur  \" style=\"width:70px;margin-top: -3px\"  (click)=\"getCheckedInItems()\" >\r\n    <span  >\r\n            <i class=\"fa fa-shopping-cart\"></i>\r\n            <span class=\"label label-danger rounded-circle\"> {{totalItem.totalCartItem}}</span>\r\n    </span>\r\n  </a>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"mt-5\"  >\r\n  <router-outlet  ></router-outlet>\r\n\r\n</div>\r\n\r\n<!-- Footer -->\r\n\r\n<footer class=\"footer\">\r\n \r\n    <img src =\"assets\\ICO\\logo.jpg\"/>\r\n\r\n      <div class=\"text-center\">\r\n          <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\r\n          <a href=\"#\"><i class=\"fa fa-skype\"></i></a>\r\n     </div>\r\n<h4 class=\"green\" >Shopping Help</h4>\r\n<div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\r\n    <ul class=\"links\">\r\n        <li type=\"square\" class=\"first\"><a class=\"pl-2\"  [routerLink]=\"['ContactUs']\" > <i class=\"fa fa-phone\"></i>&nbsp;Contact Us</a></li>\r\n        <li type=\"square\"><a class=\"pl-2\"  [routerLink]=\"['AboutUs']\" > <i class=\"fa fa-info\"></i>&nbsp; AboutUs</a></li>\r\n        <li type=\"square\"><a class=\"pl-2\"  [routerLink]=\"['PrivacyPolicy']\" > <i class=\"fa fa-info\"></i>&nbsp;Privacy Policy</a></li>\r\n        <li type=\"square\" ><a class=\"pl-2\"  [routerLink]=\"['Payment']\" > <i class=\"fa fa-link\"></i>&nbsp;Payment Policy</a></li>\r\n        <li type=\"square\"><a class=\"pl-2\"  [routerLink]=\"['ShippingPolicy']\" > <i class=\"fa fa-truck\"></i>&nbsp;Shipping Policy</a></li>\r\n\r\n    </ul>\r\n</div>\r\n\r\n      <div class=\"footer-bottom\">\r\n          <div class=\"col-sm-8 col-xs-12 coppyright\">\r\n            Copyright's <i class=\"fa fa-copyright\"></i> 2019 vidhim.com . All rights reserved.</div>\r\n      </div>\r\n      \r\n  </footer>\r\n \r\n</div>\r\n\r\n\r\n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found-component/page-not-found-component.component.html": 
        /*!***************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found-component/page-not-found-component.component.html ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p style=\"color:red\">\r\n  page-not-found-component works!\r\n</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-content>\r\n\r\n</ng-content> \r\n\r\n<!-- <div  [innerHTML] = \"menuHtml |safe:'script'\" ></div> -->\r\n\r\n<nav class=\"navbar navbar-expand-md  navbar-dark \">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      \r\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      \r\n          <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 \"  >\r\n            \r\n      \r\n                <li class=\"nav-item dropdown\" *ngFor=\"let item of menuitems;\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    {{item.menuName}}\r\n                \r\n                    </a>\r\n                 \r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                           <div class=\"lisetting\" >                             \r\n                                  <a *ngFor=\"let subitems of item.children;\" class=\"dropdown-item\" [routerLink]=\"['/TempRouteSearch/',subitems.id,'menuid']\">{{subitems.menuName}}</a>\r\n                           </div> \r\n                          \r\n                        </div>\r\n                      </li>\r\n      \r\n\r\n\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/PrivacyPolicy']\">Privacy Policy</a>\r\n            </li> -->\r\n            <li class=\"nav-item\"> \r\n                <a class=\"nav-link\" [routerLink]=\"['']\">Home</a>\r\n            </li>\r\n            \r\n            \r\n<!--             \r\n            <li>\r\n              <div class=\"input-group\">\r\n                  <input type=\"text\" placeholder=\"search\"  name=\"search\" [(ngModel)]=\"itemname\" >\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"button\" (click)=\"searchResult()\" style = \"width:60%\"class=\"btn btn-info\"><i class=\"fa fa-search\"></i></button>\r\n                   \r\n                  </span>\r\n                  \r\n              </div>\r\n          </li> -->\r\n      \r\n          </ul>\r\n        </div>\r\n      </nav>\r\n      \r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n   \r\n      <h2 class=\"text-center text-danger\" >{{message}}</h2>\r\n      <button (click)=\"previouspage()\" style = \"margin-left:600px \"class=\"btn btn-success\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\" ></i>Back</button>\r\n      \r\n    </div>\r\n    \r\n   \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-time-user/first-time-user.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-time-user/first-time-user.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>{{status}}</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n      <app-sliders></app-sliders>\r\n\r\n\r\n      <div *ngIf=\"loading\" >  \r\n        <img src =\"assets/loading/loading.gif\" class = \"header-shadow\" > Loading ...\r\n      </div>\r\n\r\n <div  infiniteScroll (scrolled)=\"onScrollDown()\" [scrollWindow]=\"true\" [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\">\r\n\r\n <div style=\"background-color: orangered\" class = \"ui four cards justify-content-center\">\r\n  <div *ngFor=\"let item of itemsarr;let i=index\" style= \"padding: 5px;\">\r\n \r\n\r\n    <a target='_blank' [routerLink]=\"['/itemDetail/',item.itemid]\" class =\"card\">\r\n\r\n      <div class=\"image\" >\r\n        <img style=\"cursor: pointer;width:150px;height:150px;\" [src]=\"item.image1 |safe:'url'\">\r\n      </div>\r\n      \r\n        <a class=\"header\">{{item.itemName}}</a>\r\n        <!-- <div class=\"description\" class= \"col-6\" style=\"max-width: 50%; word-wrap: break-word;\">\r\n          Description : {{item.itemDescription}}\r\n        </div> -->\r\n        <div class=\"meta\">\r\n          <span class=\"date\">Color : {{item.color}}</span>\r\n        </div>\r\n        <div class=\"description\" >\r\n         Size : {{item.sizeName}}\r\n        </div>\r\n        <div class=\"meta\">\r\n          <span class=\"date\">Price : {{item.price |currency :\"₹\":\"\"}}</span>\r\n        </div>\r\n        <div class=\"meta\">\r\n          <span class=\"date\">Offer Price : {{item.offerPrice |currency :\"₹\":''}}</span>\r\n        </div>\r\n      \r\n      <div >\r\n        \r\n          <i class=\"user icon\"></i>\r\n          Brand : {{item.brand}}\r\n       \r\n      </div>\r\n\r\n\r\n</a>\r\n            </div>\r\n        </div>\r\n     </div> \r\n \r\n     <!-- <div    >\r\n\r\n      <div  id=\"scroller\" ngxInfiniteScroller (onScrollDown)=\"getdata();\" style=\"background-color: orangered\" class = \"ui four cards justify-content-center\">\r\n       <div *ngFor=\"let item of itemsarr;let i=index\" style= \"padding: 5px;\">\r\n      \r\n     \r\n         <a target='_blank' [routerLink]=\"['/itemDetail/',item.itemid]\" class =\"red card\">\r\n     \r\n           <div class=\"image\" >\r\n             <img style=\"width:150px;height:150px;\" [src]=item.image1>\r\n           </div>\r\n           <div class=\"\">\r\n             <a class=\"header\">{{item.itemName}}</a>\r\n             <div class=\"meta\">\r\n               <span class=\"date\">Color : {{item.color}}</span>\r\n             </div>\r\n             <div class=\"description\" >\r\n              Size : {{item.sizeName}}\r\n             </div>\r\n             <div class=\"meta\">\r\n               <span class=\"date\">Price : {{item.price |currency :\"₹\":\"0\"}}</span>\r\n             </div>\r\n             <div class=\"meta\">\r\n               <span class=\"date\">Offer Price : {{item.offerPrice |currency :\"₹\":'0'}}</span>\r\n             </div>\r\n           </div>\r\n           <div >\r\n             \r\n               <i class=\"user icon\"></i>\r\n               Brand : {{item.brand}}\r\n            \r\n           </div>\r\n     \r\n     \r\n     </a>\r\n                 </div>\r\n             </div>\r\n          </div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-result/search-result.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-result/search-result.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div  class = \"container\">\r\n  <app-sliders></app-sliders>\r\n</div>\r\n<ng-content></ng-content>\r\n\r\n<div  infiniteScroller (scrolled)=\"onScrollDown(search)\"  >\r\n\r\n        <div style=\"background-color: orangered\" class = \"ui four cards justify-content-center\"  >\r\n      <div *ngFor=\"let item of items;let i=index\" style= \"padding: 5px; \">\r\n     \r\n   \r\n        <a  target='_blank' [routerLink]=\"['/itemDetail/',item.itemid]\" class =\"red card\">\r\n    \r\n          <div  class=\"image\">\r\n            <img style=\"cursor: pointer;width:150px;height:150px;\" [src]=\"item.image1 |safe:'url'\">\r\n          </div>\r\n          <div class=\"\">\r\n            <a class=\"header\">{{item.itemName}}</a>\r\n            <!-- <div class=\"description\" >\r\n              <span class=\"date\">Description : {{item.itemDescription}}</span>\r\n            </div> -->\r\n            <div class=\"meta\">\r\n              <span class=\"date\">Color : {{item.color}}</span>\r\n            </div>\r\n            <div class=\"description\" >\r\n             Size : {{item.sizeName}}\r\n            </div>\r\n            <div class=\"meta\">\r\n              <span class=\"date\">Price : {{item.price |currency :\"₹\":''}}</span>\r\n            </div>\r\n            <div class=\"meta\">\r\n              <span class=\"date\">Offer Price : {{item.offerPrice |currency :\"₹\":''}}</span>\r\n            </div>\r\n          </div>\r\n          <div >\r\n            \r\n              <i class=\"user icon\"></i>\r\n              Brand : {{item.brand}}\r\n           \r\n          </div>\r\n\r\n\r\n  </a>\r\n    \r\n\r\n\r\n\r\n<!-- </div> -->\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n   <!-- <div class=\"paginator mat-elevation-z4\" *ngIf=\"productsDisplayed.length !== 0\">\r\n     <md-paginator\r\n       [length]=\"paginatorSize\"\r\n       [pageSize]=\"numberOfProductsDisplayedInPage\"\r\n       [pageSizeOptions]=\"[12, 24]\"\r\n       (page)=\"updateProductsDisplayedInPage($event)\">\r\n     </md-paginator> \r\n   </div>\r\n</div>  -->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliders/sliders.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliders/sliders.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\"  >\r\n \r\n<table class = \"table  borderless\"  >\r\n <tr>\r\n   <td>   \r\n      <img class=\"img-fluid\" style=\"width:200px;height:200px ;\"  src=\"assets/ICO/logo.jpg\"/>\r\n  </td>\r\n\r\n      <!-- <ngx-slider [init]=\"slider\"></ngx-slider> -->\r\n  <td> \r\n      <ngb-carousel >\r\n          <ng-container *ngFor = \"let item of imageItems;let i = index;\">\r\n        <ng-template   ngbSlide [id]=i >\r\n          \r\n          <img [src]=\"item|safe:'url'\" class=\"mx-auto d-block\" style=\"width:200px;height:200px ;\" /> \r\n       \r\n        </ng-template>\r\n        </ng-container>\r\n        </ngb-carousel>\r\n</td>\r\n</tr>\r\n\r\n</table>\r\n</div>\r\n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp-route/temp-route.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp-route/temp-route.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  temp-route works!\r\n</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.browser.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app.browser.module.ts ***!
          \***************************************/
        /*! exports provided: AppBrowserModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function () { return AppBrowserModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_service_shopping_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _page_not_found_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found-component/page-not-found-component.component */ "./src/app/page-not-found/page-not-found-component/page-not-found-component.component.ts");
            /* harmony import */ var _model_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/global */ "./src/app/model/global.ts");
            /* harmony import */ var _service_sevice_intercepter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/sevice-intercepter */ "./src/app/service/sevice-intercepter.ts");
            /* harmony import */ var _app_service_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/service/auth-guard */ "./src/app/service/auth-guard.ts");
            /* harmony import */ var ngx_img_zoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-img-zoom */ "./node_modules/ngx-img-zoom/fesm2015/ngx-img-zoom.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
            /* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
            /* harmony import */ var ngx_infinite_scroller__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-infinite-scroller */ "./node_modules/ngx-infinite-scroller/fesm2015/ngx-infinite-scroller.js");
            /* harmony import */ var _model_pagedata__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./model/pagedata */ "./src/app/model/pagedata.ts");
            /* harmony import */ var _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/cart-item-service.service */ "./src/app/service/cart-item-service.service.ts");
            /* harmony import */ var _pages_itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/itemdetails/item-notify */ "./src/app/pages/itemdetails/item-notify.ts");
            /* harmony import */ var _service_httpXsrfIntercepter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/httpXsrfIntercepter */ "./src/app/service/httpXsrfIntercepter.ts");
            /* harmony import */ var _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/search-result/search-result.component */ "./src/app/pages/search-result/search-result.component.ts");
            /* harmony import */ var _src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../src/app/service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
            /* harmony import */ var _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/menu/menu-service.service */ "./src/app/service/menu/menu-service.service.ts");
            /* harmony import */ var _service_search_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/search-service.service */ "./src/app/service/search-service.service.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/temp-route/temp-route.component */ "./src/app/pages/temp-route/temp-route.component.ts");
            /* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
            /* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
            /* harmony import */ var _app_pages_itemdetails_itemdetails_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../app/pages/itemdetails/itemdetails.service */ "./src/app/pages/itemdetails/itemdetails.service.ts");
            /* harmony import */ var _service_singleton_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./service/singleton.service */ "./src/app/service/singleton.service.ts");
            /* harmony import */ var _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./service/ActivateUserService */ "./src/app/service/ActivateUserService.ts");
            /* harmony import */ var _pages_first_time_user_first_time_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/first-time-user/first-time-user.component */ "./src/app/pages/first-time-user/first-time-user.component.ts");
            /* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
            /////////import { SliderModule } from 'ngx-slider';
            //import { ForegetPasswordComponent } from './pages/foreget-password/foreget-password.component';
            var AppBrowserModule = /** @class */ (function () {
                function AppBrowserModule() {
                }
                return AppBrowserModule;
            }());
            AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_32__["NgxDatatableModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                            { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
                            { path: 'login', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-login-login-module */ "app-pages-login-login-module").then(__webpack_require__.bind(null, /*! ../app/pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(function (m) { return m.LoginModule; }); } },
                            { path: 'welcome', loadChildren: function () { return __webpack_require__.e(/*! import() | app-welcome-welcome-module */ "app-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../app/welcome/welcome.module */ "./src/app/welcome/welcome.module.ts")).then(function (m) { return m.WelcomeModule; }); } },
                            { path: 'HomeComponent', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                            { path: 'menu/:subcategory', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'women/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'men/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'kids/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'furn/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'sports/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'grocery/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'elec/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'home', component: _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"] },
                            { path: 'FirstTimeUser', component: _pages_first_time_user_first_time_user_component__WEBPACK_IMPORTED_MODULE_37__["FirstTimeUserComponent"] },
                            { path: 'itemDetail/:itemid', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-itemdetails-itemdetail-module */ "app-pages-itemdetails-itemdetail-module").then(__webpack_require__.bind(null, /*! ../app/pages/itemdetails/itemdetail.module */ "./src/app/pages/itemdetails/itemdetail.module.ts")).then(function (m) { return m.ItemdetailsModule; }); } },
                            { path: 'TempRouteSearch/:tempsearch/:val', component: _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_31__["TempRouteComponent"] },
                            { path: 'menu/:menucate/:menusubcate', component: _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_31__["TempRouteComponent"] },
                            { path: 'checkin', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-checkin-checkin-module */ "app-pages-checkin-checkin-module").then(__webpack_require__.bind(null, /*! ../app/pages/checkin/checkin.module */ "./src/app/pages/checkin/checkin.module.ts")).then(function (m) { return m.CheckintModule; }); } },
                            { path: 'registration/:mobile', loadChildren: function () { return Promise.all(/*! import() | app-pages-user-registration-user-registration-module */ [__webpack_require__.e("common"), __webpack_require__.e("app-pages-user-registration-user-registration-module")]).then(__webpack_require__.bind(null, /*! ../app/pages/user-registration/user-registration.module */ "./src/app/pages/user-registration/user-registration.module.ts")).then(function (m) { return m.UserRegistrationComponentModule; }); } },
                            { path: 'search/:item', component: _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_24__["SearchResultComponent"], runGuardsAndResolvers: 'always' },
                            { path: 'forgetpassword', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-foreget-password-forget-password-module */ "app-pages-foreget-password-forget-password-module").then(__webpack_require__.bind(null, /*! ../app/pages/foreget-password/forget-password.module */ "./src/app/pages/foreget-password/forget-password.module.ts")).then(function (m) { return m.ForgetPasswordModule; }); } },
                            { path: 'logout', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-logout-logout-module */ "app-pages-logout-logout-module").then(__webpack_require__.bind(null, /*! ../app/pages/logout/logout.module */ "./src/app/pages/logout/logout.module.ts")).then(function (m) { return m.LogoutModule; }); } },
                            { path: 'changepassword', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-changepassword-changepassword-module */ "app-pages-changepassword-changepassword-module").then(__webpack_require__.bind(null, /*! ../app/pages/changepassword/changepassword.module */ "./src/app/pages/changepassword/changepassword.module.ts")).then(function (m) { return m.ChangepasswordModule; }); } },
                            { path: 'Error/:message/:compo/:mobi', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_33__["ErrorComponent"] },
                            { path: 'ContactUs', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-contact-us-contactus-module */ "app-pages-contact-us-contactus-module").then(__webpack_require__.bind(null, /*! ../app/pages/contact-us/contactus.module */ "./src/app/pages/contact-us/contactus.module.ts")).then(function (m) { return m.ContactUsModule; }); } },
                            { path: 'PrivacyPolicy', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-privacy-policy-privacy-policy-modle */ "app-pages-privacy-policy-privacy-policy-modle").then(__webpack_require__.bind(null, /*! ../app/pages/privacy-policy/privacy-policy.modle */ "./src/app/pages/privacy-policy/privacy-policy.modle.ts")).then(function (m) { return m.PrivacyPolicyModule; }); } },
                            { path: 'AboutUs', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-about-us-module */ "app-pages-about-us-module").then(__webpack_require__.bind(null, /*! ../app/pages/about-us.module */ "./src/app/pages/about-us.module.ts")).then(function (m) { return m.AboutUsModule; }); } },
                            // {path: 'forgetpassword', loadChildren: () => import('../app/pages/foreget-password/forget-password.module').then(m => m.ForgetPasswordModule)},
                            { path: 'Payment', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-payment-payment-module */ "app-pages-payment-payment-module").then(__webpack_require__.bind(null, /*! ../app/pages/payment/payment.module */ "./src/app/pages/payment/payment.module.ts")).then(function (m) { return m.PaymentModule; }); } },
                            { path: 'ShippingPolicy', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-shipping-policy-shipping-policy-module */ "app-pages-shipping-policy-shipping-policy-module").then(__webpack_require__.bind(null, /*! ../app/pages/shipping-policy/shipping-policy.module */ "./src/app/pages/shipping-policy/shipping-policy.module.ts")).then(function (m) { return m.ShippingPolicydModule; }); } },
                            { path: 'PlaceOrder/', loadChildren: function () { return Promise.all(/*! import() | app-pages-place-order-place-order-module */ [__webpack_require__.e("common"), __webpack_require__.e("app-pages-place-order-place-order-module")]).then(__webpack_require__.bind(null, /*! ../app/pages/place-order/place-order.module */ "./src/app/pages/place-order/place-order.module.ts")).then(function (m) { return m.PlaceOrdersModule; }); } },
                            { path: 'PmtRecevdThanks', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-pmt-rcvt-thanks-pmt-rcvt-thanks-module */ "app-pages-pmt-rcvt-thanks-pmt-rcvt-thanks-module").then(__webpack_require__.bind(null, /*! ../app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.module */ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.module.ts")).then(function (m) { return m.PmtRcvtThanksModule; }); } },
                            { path: 'NewUserActivate', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-new-user-activate-new-usre-activate-module */ "app-pages-new-user-activate-new-usre-activate-module").then(__webpack_require__.bind(null, /*! ../app/pages/new-user-activate/new-usre-activate.module */ "./src/app/pages/new-user-activate/new-usre-activate.module.ts")).then(function (m) { return m.NewUserActivateModule; }); } },
                            { path: '**', component: _page_not_found_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponentComponent"] }
                        ], { onSameUrlNavigation: 'reload' }),
                        //////// SliderModule,
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                        ngx_image_zoom__WEBPACK_IMPORTED_MODULE_17__["NgxImageZoomModule"].forRoot(),
                        ngx_infinite_scroller__WEBPACK_IMPORTED_MODULE_19__["NgxInfiniteScrollerModule"],
                        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__["InfiniteScrollModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        ngx_img_zoom__WEBPACK_IMPORTED_MODULE_15__["NgxImgZoomModule"],
                        ///// BrowserAnimationsModule,
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
                        _app_module__WEBPACK_IMPORTED_MODULE_38__["AppModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"]
                    ],
                    providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }, _app_service_shopping_api_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingApiService"], _model_global__WEBPACK_IMPORTED_MODULE_12__["Globals"],
                        _app_service_shopping_api_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingApiService"], _service_singleton_service__WEBPACK_IMPORTED_MODULE_35__["SingletonService"], _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_36__["activateuserservce"], _app_pages_itemdetails_itemdetails_service__WEBPACK_IMPORTED_MODULE_34__["itemService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _service_sevice_intercepter__WEBPACK_IMPORTED_MODULE_13__["serviceintercepter"],
                            multi: true
                        },
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _service_httpXsrfIntercepter__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfInterceptor"],
                            multi: true
                        },
                        _src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_25__["LoadingIndicatorServiceService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useFactory: function (service) { return new _src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_25__["LoadingIndicatorInterceptor"](service); },
                            multi: true,
                            deps: [_src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_25__["LoadingIndicatorServiceService"]]
                        },
                        _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_26__["MenuServiceService"],
                        _app_service_auth_guard__WEBPACK_IMPORTED_MODULE_14__["authguard"], _model_pagedata__WEBPACK_IMPORTED_MODULE_20__["responseData"], _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_21__["CartItemServiceService"], _pages_itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_22__["itemNotify"], _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_24__["SearchResultComponent"],
                        _service_search_service_service__WEBPACK_IMPORTED_MODULE_27__["SearchServiceService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _service_sevice_intercepter__WEBPACK_IMPORTED_MODULE_13__["serviceintercepter"],
                            multi: true
                        },
                    ],
                    bootstrap: [_home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"]]
                })
            ], AppBrowserModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_search_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/search-service.service */ "./src/app/service/search-service.service.ts");
            /* harmony import */ var _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(loadingIndicatorService, restProvider, route) {
                    var _this = this;
                    this.loadingIndicatorService = loadingIndicatorService;
                    this.restProvider = restProvider;
                    this.route = route;
                    this.title = 'app';
                    this.categoryItemArray = [];
                    this.pagesize = 8;
                    this.loading = false;
                    loadingIndicatorService
                        .onLoadingChanged
                        .subscribe(function (isLoading) { return _this.loading = isLoading; });
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.subcategory = this.route.snapshot.params["subcategory"];
                    this.pageindex = 0;
                    this.onScrollDown();
                };
                AppComponent.prototype.onScrollDown = function () {
                    var _this = this;
                    this.pageindex = this.pageindex + 1;
                    this.restProvider.AllItems(this.subcategory, this.pageindex, this.pagesize, function (categoryItemArray) {
                        _this.totalcount = categoryItemArray.count;
                        //   for(let i=0;i<this.totalcount;i++)
                        //  {
                        //     if( categoryItemArray.results[i].image1!=='undefined')
                        //     categoryItemArray.results[i].image1 = 'data:image/jpeg;base64,' +  categoryItemArray.results[i].image1;
                        //   // categoryItemArray.results[i].image1 = categoryItemArray.results[i].image1;
                        //  }
                        //  if(categoryItemArray.results.length<=this.totalcount)
                        //   {
                        //      this.categoryItemArray = this.categoryItemArray.concat(categoryItemArray.results);
                        // }   
                        if (_this.categoryItemArray.length < _this.totalcount) {
                            // for(let i =0;i<(itemsarr.results.length);i++ )
                            // {
                            //   itemsarr.results[i].image1 = 'data:image/jpeg;base64,' +  itemsarr.results[i].image1;
                            // }
                            _this.categoryItemArray = _this.categoryItemArray.concat(categoryItemArray.results);
                            console.log('fffff', _this.categoryItemArray);
                        }
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorServiceService"] },
                { type: _service_search_service_service__WEBPACK_IMPORTED_MODULE_3__["SearchServiceService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_service_shopping_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _page_not_found_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found-component/page-not-found-component.component */ "./src/app/page-not-found/page-not-found-component/page-not-found-component.component.ts");
            /* harmony import */ var _model_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/global */ "./src/app/model/global.ts");
            /* harmony import */ var _service_sevice_intercepter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/sevice-intercepter */ "./src/app/service/sevice-intercepter.ts");
            /* harmony import */ var _app_service_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/service/auth-guard */ "./src/app/service/auth-guard.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
            /* harmony import */ var ngx_infinite_scroller__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-infinite-scroller */ "./node_modules/ngx-infinite-scroller/fesm2015/ngx-infinite-scroller.js");
            /* harmony import */ var _model_pagedata__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./model/pagedata */ "./src/app/model/pagedata.ts");
            /* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
            /* harmony import */ var _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/cart-item-service.service */ "./src/app/service/cart-item-service.service.ts");
            /* harmony import */ var _pages_itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/itemdetails/item-notify */ "./src/app/pages/itemdetails/item-notify.ts");
            /* harmony import */ var _service_httpXsrfIntercepter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/httpXsrfIntercepter */ "./src/app/service/httpXsrfIntercepter.ts");
            /* harmony import */ var _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/search-result/search-result.component */ "./src/app/pages/search-result/search-result.component.ts");
            /* harmony import */ var _src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../src/app/service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
            /* harmony import */ var _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/menu/menu-service.service */ "./src/app/service/menu/menu-service.service.ts");
            /* harmony import */ var _service_search_service_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/search-service.service */ "./src/app/service/search-service.service.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _pages_dynamic_menu_dynamic_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/dynamic-menu/dynamic-menu.component */ "./src/app/pages/dynamic-menu/dynamic-menu.component.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _pages_sliders_sliders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/sliders/sliders.component */ "./src/app/pages/sliders/sliders.component.ts");
            /* harmony import */ var _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/temp-route/temp-route.component */ "./src/app/pages/temp-route/temp-route.component.ts");
            /* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
            /* harmony import */ var _service_singleton_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./service/singleton.service */ "./src/app/service/singleton.service.ts");
            /* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm2015/common.js");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            /* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
            /* harmony import */ var _app_pages_itemdetails_itemdetails_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../app/pages/itemdetails/itemdetails.service */ "./src/app/pages/itemdetails/itemdetails.service.ts");
            /* harmony import */ var _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./service/ActivateUserService */ "./src/app/service/ActivateUserService.ts");
            /* harmony import */ var _pages_first_time_user_first_time_user_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/first-time-user/first-time-user.component */ "./src/app/pages/first-time-user/first-time-user.component.ts");
            //import { NgxImgZoomModule } from 'ngx-img-zoom';
            //import { ContactUsComponent } from './pages/contact-us/contact-us.component';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                        _page_not_found_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponentComponent"],
                        _safe_pipe__WEBPACK_IMPORTED_MODULE_19__["SafePipe"],
                        _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_23__["SearchResultComponent"],
                        _pages_dynamic_menu_dynamic_menu_component__WEBPACK_IMPORTED_MODULE_29__["DynamicMenuComponent"],
                        _pages_sliders_sliders_component__WEBPACK_IMPORTED_MODULE_31__["SlidersComponent"],
                        _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_32__["TempRouteComponent"],
                        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_33__["ErrorComponent"],
                        _pages_first_time_user_first_time_user_component__WEBPACK_IMPORTED_MODULE_40__["FirstTimeUserComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                            { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
                            { path: 'welcome', loadChildren: function () { return __webpack_require__.e(/*! import() | app-welcome-welcome-module */ "app-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../app/welcome/welcome.module */ "./src/app/welcome/welcome.module.ts")).then(function (m) { return m.WelcomeModule; }); } },
                            { path: 'HomeComponent', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                            { path: 'menu/:subcategory', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'women/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'men/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'kids/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'furn/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'sports/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'grocery/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'elec/:category/:pageindex', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
                            { path: 'home', component: _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"] },
                            { path: 'FirstTimeUser/:email', component: _pages_first_time_user_first_time_user_component__WEBPACK_IMPORTED_MODULE_40__["FirstTimeUserComponent"] },
                            { path: 'itemDetail/:itemid', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-itemdetails-itemdetail-module */ "app-pages-itemdetails-itemdetail-module").then(__webpack_require__.bind(null, /*! ../app/pages/itemdetails/itemdetail.module */ "./src/app/pages/itemdetails/itemdetail.module.ts")).then(function (m) { return m.ItemdetailsModule; }); } },
                            { path: 'TempRouteSearch/:tempsearch/:val', component: _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_32__["TempRouteComponent"] },
                            { path: 'menu/:menucate/:menusubcate', component: _pages_temp_route_temp_route_component__WEBPACK_IMPORTED_MODULE_32__["TempRouteComponent"] },
                            { path: 'checkin', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-checkin-checkin-module */ "app-pages-checkin-checkin-module").then(__webpack_require__.bind(null, /*! ../app/pages/checkin/checkin.module */ "./src/app/pages/checkin/checkin.module.ts")).then(function (m) { return m.CheckintModule; }); } },
                            { path: 'registration/:mobile', loadChildren: function () { return Promise.all(/*! import() | app-pages-user-registration-user-registration-module */ [__webpack_require__.e("common"), __webpack_require__.e("app-pages-user-registration-user-registration-module")]).then(__webpack_require__.bind(null, /*! ../app/pages/user-registration/user-registration.module */ "./src/app/pages/user-registration/user-registration.module.ts")).then(function (m) { return m.UserRegistrationComponentModule; }); } },
                            { path: 'search/:item', component: _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_23__["SearchResultComponent"], runGuardsAndResolvers: 'always' },
                            { path: 'forgetpassword', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-foreget-password-forget-password-module */ "app-pages-foreget-password-forget-password-module").then(__webpack_require__.bind(null, /*! ../app/pages/foreget-password/forget-password.module */ "./src/app/pages/foreget-password/forget-password.module.ts")).then(function (m) { return m.ForgetPasswordModule; }); } },
                            { path: 'Payment', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-payment-payment-module */ "app-pages-payment-payment-module").then(__webpack_require__.bind(null, /*! ../app/pages/payment/payment.module */ "./src/app/pages/payment/payment.module.ts")).then(function (m) { return m.PaymentModule; }); } },
                            { path: 'changepassword', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-changepassword-changepassword-module */ "app-pages-changepassword-changepassword-module").then(__webpack_require__.bind(null, /*! ../app/pages/changepassword/changepassword.module */ "./src/app/pages/changepassword/changepassword.module.ts")).then(function (m) { return m.ChangepasswordModule; }); } },
                            { path: 'Error/:message/:compo/:mobi', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_33__["ErrorComponent"] },
                            { path: 'ContactUs', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-contact-us-contactus-module */ "app-pages-contact-us-contactus-module").then(__webpack_require__.bind(null, /*! ../app/pages/contact-us/contactus.module */ "./src/app/pages/contact-us/contactus.module.ts")).then(function (m) { return m.ContactUsModule; }); } },
                            { path: 'PrivacyPolicy', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-privacy-policy-privacy-policy-modle */ "app-pages-privacy-policy-privacy-policy-modle").then(__webpack_require__.bind(null, /*! ../app/pages/privacy-policy/privacy-policy.modle */ "./src/app/pages/privacy-policy/privacy-policy.modle.ts")).then(function (m) { return m.PrivacyPolicyModule; }); } },
                            { path: 'AboutUs', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-about-us-module */ "app-pages-about-us-module").then(__webpack_require__.bind(null, /*! ../app/pages/about-us.module */ "./src/app/pages/about-us.module.ts")).then(function (m) { return m.AboutUsModule; }); } },
                            { path: 'ShippingPolicy', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-shipping-policy-shipping-policy-module */ "app-pages-shipping-policy-shipping-policy-module").then(__webpack_require__.bind(null, /*! ../app/pages/shipping-policy/shipping-policy.module */ "./src/app/pages/shipping-policy/shipping-policy.module.ts")).then(function (m) { return m.ShippingPolicydModule; }); } },
                            { path: 'PlaceOrder/', loadChildren: function () { return Promise.all(/*! import() | app-pages-place-order-place-order-module */ [__webpack_require__.e("common"), __webpack_require__.e("app-pages-place-order-place-order-module")]).then(__webpack_require__.bind(null, /*! ../app/pages/place-order/place-order.module */ "./src/app/pages/place-order/place-order.module.ts")).then(function (m) { return m.PlaceOrdersModule; }); } },
                            { path: 'login', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-login-login-module */ "app-pages-login-login-module").then(__webpack_require__.bind(null, /*! ../app/pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(function (m) { return m.LoginModule; }); } },
                            { path: 'logout', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-logout-logout-module */ "app-pages-logout-logout-module").then(__webpack_require__.bind(null, /*! ../app/pages/logout/logout.module */ "./src/app/pages/logout/logout.module.ts")).then(function (m) { return m.LogoutModule; }); } },
                            { path: 'order-list', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-order-list-orders-module */ "app-pages-order-list-orders-module").then(__webpack_require__.bind(null, /*! ../app/pages/order-list/orders.module */ "./src/app/pages/order-list/orders.module.ts")).then(function (m) { return m.OrdersModule; }); } },
                            { path: 'PmtRecevdThanks', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-pmt-rcvt-thanks-pmt-rcvt-thanks-module */ "app-pages-pmt-rcvt-thanks-pmt-rcvt-thanks-module").then(__webpack_require__.bind(null, /*! ../app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.module */ "./src/app/pages/pmt-rcvt-thanks/pmt-rcvt-thanks.module.ts")).then(function (m) { return m.PmtRcvtThanksModule; }); } },
                            { path: 'NewUserActivate', loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-new-user-activate-new-usre-activate-module */ "app-pages-new-user-activate-new-usre-activate-module").then(__webpack_require__.bind(null, /*! ../app/pages/new-user-activate/new-usre-activate.module */ "./src/app/pages/new-user-activate/new-usre-activate.module.ts")).then(function (m) { return m.NewUserActivateModule; }); } },
                            { path: '**', component: _page_not_found_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponentComponent"] }
                        ], { onSameUrlNavigation: 'reload' }),
                        //////// SliderModule,
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                        ngx_infinite_scroller__WEBPACK_IMPORTED_MODULE_17__["NgxInfiniteScrollerModule"],
                        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__["InfiniteScrollModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        ////// NgxImgZoomModule,
                        ///// BrowserAnimationsModule,
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _nguniversal_common__WEBPACK_IMPORTED_MODULE_35__["TransferHttpCacheModule"],
                        _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_36__["NgtUniversalModule"],
                        ///////// LoginModule
                        ngx_device_detector__WEBPACK_IMPORTED_MODULE_37__["DeviceDetectorModule"].forRoot()
                    ],
                    providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }, _app_service_shopping_api_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingApiService"], _model_global__WEBPACK_IMPORTED_MODULE_12__["Globals"],
                        _app_service_shopping_api_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingApiService"], _service_singleton_service__WEBPACK_IMPORTED_MODULE_34__["SingletonService"], _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_39__["activateuserservce"], _app_pages_itemdetails_itemdetails_service__WEBPACK_IMPORTED_MODULE_38__["itemService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _service_sevice_intercepter__WEBPACK_IMPORTED_MODULE_13__["serviceintercepter"],
                            multi: true
                        },
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _service_httpXsrfIntercepter__WEBPACK_IMPORTED_MODULE_22__["HttpXsrfInterceptor"],
                            multi: true
                        },
                        _src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_24__["LoadingIndicatorServiceService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useFactory: function (service) { return new _src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_24__["LoadingIndicatorInterceptor"](service); },
                            multi: true,
                            deps: [_src_app_service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_24__["LoadingIndicatorServiceService"]]
                        },
                        _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_25__["MenuServiceService"],
                        _app_service_auth_guard__WEBPACK_IMPORTED_MODULE_14__["authguard"], _model_pagedata__WEBPACK_IMPORTED_MODULE_18__["responseData"], _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_20__["CartItemServiceService"], _pages_itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_21__["itemNotify"], _pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_23__["SearchResultComponent"],
                        _service_search_service_service__WEBPACK_IMPORTED_MODULE_26__["SearchServiceService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _service_sevice_intercepter__WEBPACK_IMPORTED_MODULE_13__["serviceintercepter"],
                            multi: true
                        },
                    ],
                    bootstrap: [_home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/home/homepage/homepage.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/home/homepage/homepage.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".cart {\r\n    position: relative;\r\n       \r\n    width: 100%;\r\n    height: 90%;\r\n    border: 3px solid green;\r\n} \r\n\r\n.thisImage\r\n{\r\n    position: relative;\r\n    left:950px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 3px solid lightcoral;\r\n\r\n} \r\n\r\n.img-responsive { \r\n    \r\n    position: relative;\r\n    left:950px;\r\n    /* width: 30px; */\r\n    height: 30px;\r\n    /* border: 3px solid lightcoral; */\r\n} \r\n\r\n/* .bottom-left {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    left: 16px;\r\n}\r\n\r\n.top-left {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 16px;\r\n}\r\n\r\n.top-right {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 2px;\r\n    \r\n}\r\n\r\n.fixed-top-2 {\r\n    margin-top: 156px;\r\n}\r\n\r\nmarginul{\r\n    margin-top: 20px;\r\n}\r\nbody {\r\n    padding-top: 50px;\r\n}\r\n.custom_li{\r\n    display:inline-block;\r\n    \r\n }\r\n\r\n\r\n .fixed-top-2 {\r\n    margin-top: 56px;\r\n}\r\n\r\nbody {\r\n    padding-top: 105px;\r\n    background-color: rgb(123, 72, 136)\r\n}\r\n\r\ndiv.inline { float:left; }\r\n.clearBoth { clear:both; } */ \r\n\r\n/* .table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {\r\n    background-color: red;\r\n } */ \r\n\r\n.footer-middle {\r\n  margin: 18px 0px 0px 0px;\r\n  display: inline-block;\r\n } \r\n\r\nfooter h4.green {\r\n  border-bottom: 2px solid #98d070;\r\n  margin-bottom: 10px;\r\n} \r\n\r\n.footer {\r\n    background: #061D25;\r\n    margin-top:30px;\r\n    \r\n    /* padding-top: 5px ;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n \r\n  width: 100%;\r\n  height:auto; */\r\n\r\n  } \r\n\r\n.footer a {\r\n    color: #70726F;\r\n    font-size: 15px;\r\n    padding: px;\r\n    /* border-right: 1px solid #70726F; */\r\n    transition: all .5s ease;\r\n    left: 0;\r\n  \r\n  } \r\n\r\n.footer a:first-child {\r\n    /* border-left: 1px solid #70726F; */\r\n  } \r\n\r\n.footer a:hover {\r\n    color: white;\r\n  } \r\n\r\ninput:focus {\r\n    background-color: yellow;\r\n  } \r\n\r\n.bgcolor\r\n  {\r\n    background: white;\r\n    font: green;\r\n   \r\n  } \r\n\r\n.btn\r\n  {\r\n     width:130px;   \r\n\r\n  } \r\n\r\n.cur\r\n  {\r\n    cursor: pointer;\r\n    border:1px solid black\r\n  } \r\n\r\n.cur:hover {\r\n\r\n    border:1px solid green\r\n} \r\n\r\nimg {\r\n  border: 1px solid #ddd;\r\n  border-radius: 8px;\r\n  margin-top:3px;\r\n  margin-left:3px;\r\n  padding: 5px;\r\n  width: 150px;\r\n} \r\n\r\nfooter h4.green {\r\n  border-bottom: 2px solid #98d070;\r\n  margin-bottom: 10px;\r\n} \r\n\r\nfooter h4 {\r\n  padding: 0 0 10px;\r\n  font-size: 13px;\r\n  margin: 0;\r\n  color: #BEBEBE;\r\n  font-weight: normal;\r\n  font-family: 'Open Sans', sans-serif;\r\n  text-transform: uppercase;\r\n} \r\n\r\n.footer-middle .links li {\r\n  list-style: none;\r\n  padding: 5px 0px;\r\n} \r\n\r\n.footer-middle ul.links {\r\n  margin: auto;\r\n  padding: 0px;\r\n} \r\n\r\n.footer-bottom {\r\n  /* background: none repeat scroll 0 0 black; */\r\n  display: inline-block;\r\n  margin: auto auto -16px;\r\n  overflow: hidden;\r\n  padding: 20px 0;\r\n  width: 100%;\r\n  color: #BEBEBE;\r\n} \r\n\r\n.dropdown-menu\r\n{\r\n  min-width:80px;\r\n  margin-top: 1px;\r\n} \r\n\r\n.mobile-center{\r\n  float:none !important;\r\n  margin: 0 auto\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCOztBQUVoQzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBNkM0Qjs7QUFFNUI7O0lBRUk7O0FBQ0g7RUFDQyx3QkFBd0I7RUFDeEIscUJBQXFCO0NBQ3RCOztBQUVBO0VBQ0MsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQztJQUNHLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmOzs7Ozs7Z0JBTVk7O0VBRWQ7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLE9BQU87O0VBRVQ7O0FBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7O0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0FBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLFdBQVc7O0VBRWI7O0FBQ0E7O0tBRUcsV0FBVzs7RUFFZDs7QUFDQTs7SUFFRSxlQUFlO0lBQ2Y7RUFDRjs7QUFFQTs7SUFFRTtBQUNKOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcclxufSBcclxuXHJcbi50aGlzSW1hZ2Vcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDo5NTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRjb3JhbDtcclxuXHJcbn1cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSB7IFxyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0Ojk1MHB4O1xyXG4gICAgLyogd2lkdGg6IDMwcHg7ICovXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xyXG59XHJcblxyXG4vKiAuYm90dG9tLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4udG9wLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4udG9wLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIFxyXG59XHJcblxyXG4uZml4ZWQtdG9wLTIge1xyXG4gICAgbWFyZ2luLXRvcDogMTU2cHg7XHJcbn1cclxuXHJcbm1hcmdpbnVse1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5jdXN0b21fbGl7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIFxyXG4gfVxyXG5cclxuXHJcbiAuZml4ZWQtdG9wLTIge1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIzLCA3MiwgMTM2KVxyXG59XHJcblxyXG5kaXYuaW5saW5lIHsgZmxvYXQ6bGVmdDsgfVxyXG4uY2xlYXJCb3RoIHsgY2xlYXI6Ym90aDsgfSAqL1xyXG5cclxuLyogLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgybisxKSA+IHRkLCAudGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDJuKzEpID4gdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gfSAqL1xyXG4gLmZvb3Rlci1taWRkbGUge1xyXG4gIG1hcmdpbjogMThweCAwcHggMHB4IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiB9XHJcblxyXG4gZm9vdGVyIGg0LmdyZWVuIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4ZDA3MDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4gLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDYxRDI1O1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgXHJcbiAgICAvKiBwYWRkaW5nLXRvcDogNXB4IDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6YXV0bzsgKi9cclxuXHJcbiAgfVxyXG4gIC5mb290ZXIgYSB7XHJcbiAgICBjb2xvcjogIzcwNzI2RjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IHB4O1xyXG4gICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNzI2RjsgKi9cclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgXHJcbiAgfVxyXG4gIC5mb290ZXIgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3MDcyNkY7ICovXHJcbiAgfVxyXG4gIC5mb290ZXIgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICAuYmdjb2xvclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udDogZ3JlZW47XHJcbiAgIFxyXG4gIH1cclxuICAuYnRuXHJcbiAge1xyXG4gICAgIHdpZHRoOjEzMHB4OyAgIFxyXG5cclxuICB9XHJcbiAgLmN1clxyXG4gIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2tcclxuICB9XHJcblxyXG4gIC5jdXI6aG92ZXIge1xyXG5cclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JlZW5cclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tdG9wOjNweDtcclxuICBtYXJnaW4tbGVmdDozcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuZm9vdGVyIGg0LmdyZWVuIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4ZDA3MDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5mb290ZXIgaDQge1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNCRUJFQkU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZvb3Rlci1taWRkbGUgLmxpbmtzIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbWlkZGxlIHVsLmxpbmtzIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSB7XHJcbiAgLyogYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCBibGFjazsgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gLTE2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNCRUJFQkU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51XHJcbntcclxuICBtaW4td2lkdGg6ODBweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtY2VudGVye1xyXG4gIGZsb2F0Om5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgYXV0b1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/homepage/homepage.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/home/homepage/homepage.component.ts ***!
          \*****************************************************/
        /*! exports provided: HomepageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () { return HomepageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/global */ "./src/app/model/global.ts");
            /* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/cart-item-service.service */ "./src/app/service/cart-item-service.service.ts");
            /* harmony import */ var _pages_itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/itemdetails/item-notify */ "./src/app/pages/itemdetails/item-notify.ts");
            /* harmony import */ var _app_pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/pages/search-result/search-result.component */ "./src/app/pages/search-result/search-result.component.ts");
            /* harmony import */ var _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
            /* harmony import */ var _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/menu/menu-service.service */ "./src/app/service/menu/menu-service.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            var HomepageComponent = /** @class */ (function () {
                function HomepageComponent(localStorage, router, search, globals, ShoppingApiService, CartItemServiceService, totalItem, loadingIndicatorService, service) {
                    this.localStorage = localStorage;
                    this.router = router;
                    this.search = search;
                    this.globals = globals;
                    this.ShoppingApiService = ShoppingApiService;
                    this.CartItemServiceService = CartItemServiceService;
                    this.totalItem = totalItem;
                    this.loadingIndicatorService = loadingIndicatorService;
                    this.service = service;
                    this.loading = false;
                }
                HomepageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.GetMenuItems();
                    this.loadingIndicatorService
                        .onLoadingChanged
                        .subscribe(function (isLoading) { return _this.loading = isLoading; });
                    this.getcheck();
                    this.subscription = this.ShoppingApiService.getItem()
                        .subscribe(function (ttlItems) {
                        _this.totalItem = ttlItems;
                    });
                    if (this.localStorage.getItem("fullName") === null) {
                        this.fullNameSubcription = this.ShoppingApiService.getUserFullName()
                            .subscribe(function (fullname) {
                            _this.fullName = "Hi " + fullname;
                            _this.localStorage.setItem("fullName", _this.fullName);
                        });
                    }
                    else
                        this.fullName = this.localStorage.getItem("fullName");
                };
                HomepageComponent.prototype.GetMenuItems = function () {
                    var _this = this;
                    this.subs = this.service.menuitems()
                        .subscribe(function (res) {
                        _this.menuitems = res.body;
                    });
                };
                HomepageComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                    this.subs.unsubscribe();
                };
                HomepageComponent.prototype.getCheckedInItems = function () {
                    this.router.navigateByUrl('/checkin');
                    this.getcheck();
                };
                HomepageComponent.prototype.getcheck = function () {
                    var _this = this;
                    var userSessionid;
                    userSessionid = this.localStorage.getItem("id_token");
                    if (userSessionid !== null) {
                        this.ShoppingApiService.getCheckedInItem(userSessionid)
                            .subscribe(
                        //  (data:checkedInItemsArray) => { 
                        function (data) {
                            _this.cartItems = data.body;
                            _this.totalItem.totalCartItem = data.body.length;
                            return _this.cartItems;
                        });
                    }
                };
                HomepageComponent.prototype.searchResult = function () {
                    // temporarily commented - 25 Feb 2019
                    /// this.service.changeSelectedItem(this.itemname);
                    ////temporirly commented end here
                    this.router.navigateByUrl('/TempRouteSearch/' + this.itemname + '/search');
                };
                HomepageComponent.prototype.RedirectToLogin = function () {
                    this.router.navigateByUrl('/login');
                };
                return HomepageComponent;
            }());
            HomepageComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_10__["LOCAL_STORAGE"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
                { type: _app_pages_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"] },
                { type: _model_global__WEBPACK_IMPORTED_MODULE_2__["Globals"] },
                { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingApiService"] },
                { type: _service_cart_item_service_service__WEBPACK_IMPORTED_MODULE_4__["CartItemServiceService"] },
                { type: _pages_itemdetails_item_notify__WEBPACK_IMPORTED_MODULE_5__["itemNotify"] },
                { type: _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_7__["LoadingIndicatorServiceService"] },
                { type: _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_8__["MenuServiceService"] }
            ]; };
            HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-homepage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/homepage/homepage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/home/homepage/homepage.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_10__["LOCAL_STORAGE"]))
            ], HomepageComponent);
            /***/ 
        }),
        /***/ "./src/app/model/global.ts": 
        /*!*********************************!*\
          !*** ./src/app/model/global.ts ***!
          \*********************************/
        /*! exports provided: Globals */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function () { return Globals; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Globals = /** @class */ (function () {
                function Globals() {
                    this.addToCartItem = 0;
                }
                return Globals;
            }());
            Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], Globals);
            /***/ 
        }),
        /***/ "./src/app/model/pagedata.ts": 
        /*!***********************************!*\
          !*** ./src/app/model/pagedata.ts ***!
          \***********************************/
        /*! exports provided: pagedata, responseData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagedata", function () { return pagedata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseData", function () { return responseData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var pagedata = /** @class */ (function () {
                function pagedata(values) {
                    if (values === void 0) { values = {}; }
                    Object.assign(this, values);
                }
                return pagedata;
            }());
            var responseData = /** @class */ (function () {
                function responseData() {
                }
                return responseData;
            }());
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found-component/page-not-found-component.component.css": 
        /*!************************************************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found-component/page-not-found-component.component.css ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLWNvbXBvbmVudC9wYWdlLW5vdC1mb3VuZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found-component/page-not-found-component.component.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found-component/page-not-found-component.component.ts ***!
          \***********************************************************************************************/
        /*! exports provided: PageNotFoundComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponentComponent", function () { return PageNotFoundComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponentComponent = /** @class */ (function () {
                function PageNotFoundComponentComponent() {
                }
                PageNotFoundComponentComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponentComponent;
            }());
            PageNotFoundComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found-component/page-not-found-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found-component.component.css */ "./src/app/page-not-found/page-not-found-component/page-not-found-component.component.css")).default]
                })
            ], PageNotFoundComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/dynamic-menu/dynamic-menu.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/dynamic-menu/dynamic-menu.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.navbar{\r\n    background: orangered !important;\r\n}\r\n\r\n.dropdown{\r\n    border-radius:0;\r\n    border:0;\r\n}\r\n\r\n.dropdown-menu{\r\n    background:#5350f1;\r\n    border:0;\r\n    top:80%;\r\n    border-radius:0px 0px 5px 5px;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    background:orangered;\r\n    color:rgb(42, 22, 221);\r\n}\r\n\r\n.dropdown-menu a{\r\n    color:#fff;\r\n}\r\n\r\n.navbar .nav-item .nav-link{\r\n    color:#eee !important; \r\n    \r\n}\r\n\r\n.navbar .nav-item .nav-link:hover .navbar .nav-item .nav-link{\r\n    color:red !important;\r\n    \r\n}\r\n\r\nnav a {\r\n    display:inline;\r\n\r\n  }\r\n\r\n.lisetting\r\n  {\r\n    \r\n    margin: auto;\r\n    display: grid;\r\n     grid-template-columns: auto auto auto;\r\n    \r\n    justify-items: stretch;\r\n    align-items: stretch;\r\n    box-shadow: 1px 1px blue;\r\n    \r\n    padding: 5px;\r\n\r\n    /* float: left;\r\n    width: 550px;\r\n    height: 500px;\r\n    margin: 0 4px 12px 0;\r\n    color: transparent;\r\n    background: rgba(0, 0, 0, .2);\r\n    border: 3px solid #0059dd;\r\n    box-sizing: border-box; */\r\n\r\n\r\n  }\r\n\r\n/* #wrap > .container {\r\n    padding: 60px 15px 0;\r\n   \r\n  }\r\n  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHluYW1pYy1tZW51L2R5bmFtaWMtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0kscUJBQXFCOztBQUV6Qjs7QUFDQTtJQUNJLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxjQUFjOztFQUVoQjs7QUFFQTs7O0lBR0UsWUFBWTtJQUNaLGFBQWE7S0FDWixxQ0FBcUM7O0lBRXRDLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsd0JBQXdCOztJQUV4QixZQUFZOztJQUVaOzs7Ozs7OzZCQU95Qjs7O0VBRzNCOztBQUNBOzs7O0dBSUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9keW5hbWljLW1lbnUvZHluYW1pYy1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd257XHJcbiAgICBib3JkZXItcmFkaXVzOjA7XHJcbiAgICBib3JkZXI6MDtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIGJhY2tncm91bmQ6IzUzNTBmMTtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgdG9wOjgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4IDBweCA1cHggNXB4O1xyXG59XHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDpvcmFuZ2VyZWQ7XHJcbiAgICBjb2xvcjpyZ2IoNDIsIDIyLCAyMjEpO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IGF7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59IFxyXG4ubmF2YmFyIC5uYXYtaXRlbSAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjojZWVlICFpbXBvcnRhbnQ7IFxyXG4gICAgXHJcbn1cclxuLm5hdmJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIC5uYXZiYXIgLm5hdi1pdGVtIC5uYXYtbGlua3tcclxuICAgIGNvbG9yOnJlZCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICAgIGRpc3BsYXk6aW5saW5lO1xyXG5cclxuICB9XHJcblxyXG4gIC5saXNldHRpbmdcclxuICB7XHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIFxyXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCBibHVlO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgLyogZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDRweCAxMnB4IDA7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDU5ZGQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG5cclxuXHJcbiAgfVxyXG4gIC8qICN3cmFwID4gLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDE1cHggMDtcclxuICAgXHJcbiAgfVxyXG4gICovIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/dynamic-menu/dynamic-menu.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/dynamic-menu/dynamic-menu.component.ts ***!
          \**************************************************************/
        /*! exports provided: DynamicMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMenuComponent", function () { return DynamicMenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/menu/menu-service.service */ "./src/app/service/menu/menu-service.service.ts");
            /* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-result/search-result.component */ "./src/app/pages/search-result/search-result.component.ts");
            /* harmony import */ var _service_search_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/search-service.service */ "./src/app/service/search-service.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            //import {MatButton,MatMenu,MatMenuTrigger} from '@angular/material';
            var DynamicMenuComponent = /** @class */ (function () {
                function DynamicMenuComponent(localStorage, router, http, service, search) {
                    this.localStorage = localStorage;
                    this.router = router;
                    this.http = http;
                    this.service = service;
                    this.search = search;
                    this.loading = false;
                    this.menuHtml = "";
                    this.pageindex = 0;
                    this.pagesize = 0;
                }
                DynamicMenuComponent.prototype.toHTML = function (input) {
                    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
                };
                DynamicMenuComponent.prototype.ngOnInit = function () {
                    ///    this.GetMenuItems();
                    this.GetBootStrapMenuItems();
                };
                DynamicMenuComponent.prototype.searchResult = function () {
                    // temporarily commented - 25 Feb 2019
                    /// this.service.changeSelectedItem(this.itemname);
                    ////temporirly commented end here
                    this.router.navigateByUrl('/TempRouteSearch/' + this.itemname + '/search');
                };
                DynamicMenuComponent.prototype.GetBootStrapMenuItems = function () {
                    var _this = this;
                    var isMainMenu = true;
                    this.subs = this.service.menuitems()
                        .subscribe(function (res) {
                        _this.menuitems = res.body;
                        //////  let xsrf = res.headers.get('XSRF-TOKENlolo');
                        ////////////// localStorage.setItem("xsrf",xsrf)
                        //console.log(res.headers.get('XSRF-TOKEN'));
                    });
                };
                return DynamicMenuComponent;
            }());
            DynamicMenuComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _service_search_service_service__WEBPACK_IMPORTED_MODULE_4__["SearchServiceService"] },
                { type: _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_2__["MenuServiceService"] },
                { type: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DynamicMenuComponent.prototype, "items", void 0);
            DynamicMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dynamic-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dynamic-menu.component.css */ "./src/app/pages/dynamic-menu/dynamic-menu.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"]))
            ], DynamicMenuComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/error/error.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/pages/error/error.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#addQuestion{\r\n    background-color: #C5C9B8;\r\n    width: 100%;\r\n    color: #333333;\r\n    height: 150px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    padding: 10px 0;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    display: flex;\r\n    float: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FkZFF1ZXN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzlCODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsb2F0OiBub25lO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/error/error.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/error/error.component.ts ***!
          \************************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent(router, activatedRoute) {
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    this.message = null;
                    this.backc = null;
                }
                ErrorComponent.prototype.ngOnInit = function () {
                    this.message = this.activatedRoute.snapshot.params["message"];
                    this.backc = this.activatedRoute.snapshot.params["compo"];
                    this.mobi = this.activatedRoute.snapshot.params["mobi"];
                };
                ErrorComponent.prototype.previouspage = function () {
                    if (this.backc == "regis") {
                        this.router.navigateByUrl("/registration/" + this.mobi);
                    }
                    if (this.backc == "logi") {
                        this.router.navigateByUrl("/login");
                    }
                };
                return ErrorComponent;
            }());
            ErrorComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/pages/error/error.component.css")).default]
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/first-time-user/first-time-user.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/first-time-user/first-time-user.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0LXRpbWUtdXNlci9maXJzdC10aW1lLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/first-time-user/first-time-user.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/first-time-user/first-time-user.component.ts ***!
          \********************************************************************/
        /*! exports provided: FirstTimeUserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTimeUserComponent", function () { return FirstTimeUserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ActivateUserService */ "./src/app/service/ActivateUserService.ts");
            /* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var FirstTimeUserComponent = /** @class */ (function () {
                function FirstTimeUserComponent(activeservice, ShoppingApiService, router) {
                    this.activeservice = activeservice;
                    this.ShoppingApiService = ShoppingApiService;
                    this.router = router;
                }
                FirstTimeUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    ////  this.emailId=this.activeservice.getOption();
                    this.emailId = this.router.snapshot.params['email'];
                    this.ShoppingApiService.ActivateUserAccount(this.emailId, true)
                        .subscribe(function (data) {
                        _this.status = data;
                    });
                };
                return FirstTimeUserComponent;
            }());
            FirstTimeUserComponent.ctorParameters = function () { return [
                { type: _service_ActivateUserService__WEBPACK_IMPORTED_MODULE_2__["activateuserservce"] },
                { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            FirstTimeUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-first-time-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-time-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-time-user/first-time-user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-time-user.component.css */ "./src/app/pages/first-time-user/first-time-user.component.css")).default]
                })
            ], FirstTimeUserComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _model_pagedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/pagedata */ "./src/app/model/pagedata.ts");
            /* harmony import */ var _service_search_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/search-service.service */ "./src/app/service/search-service.service.ts");
            /* harmony import */ var _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/loading-indicator-service.service */ "./src/app/service/loading-indicator-service.service.ts");
            /* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(responseData, ShoppingApiService, service, loadingIndicatorService, devideDetect, titleService, metaService) {
                    var _this = this;
                    this.responseData = responseData;
                    this.ShoppingApiService = ShoppingApiService;
                    this.service = service;
                    this.loadingIndicatorService = loadingIndicatorService;
                    this.devideDetect = devideDetect;
                    this.titleService = titleService;
                    this.metaService = metaService;
                    this.loading = false;
                    this.pageindex = 0;
                    this.pagesize = 0;
                    this.deviceInfo = null;
                    this.itemsarr = [];
                    loadingIndicatorService
                        .onLoadingChanged
                        .subscribe(function (isLoading) { return _this.loading = isLoading; });
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle("Vidhim");
                    this.metaService.addTags([
                        { name: 'keywords', content: 'men women kids vidhim shopping kurti legging kids frocks online shopping ' },
                        { name: 'description', content: 'cheap rate www.vidhim.com all types of cheap range items online shopping kids women woman men man kid .' },
                        { name: 'robots', content: 'subse sasta loot machi hai ' }
                    ]);
                    this.deviceInfo = this.devideDetect.getDeviceInfo();
                    var isMobile = this.devideDetect.isMobile();
                    var isTablet = this.devideDetect.isTablet();
                    var isDesktopDevice = this.devideDetect.isDesktop();
                    if (isMobile) {
                        this.pagesize = 4;
                    }
                    if (isTablet) {
                        this.pagesize = 8;
                    }
                    if (isDesktopDevice)
                        (this.pagesize = 50);
                    this.itemsarr = [];
                    this.onScrollDown();
                };
                HomeComponent.prototype.GetDynamicDiv = function (arr) {
                    var e_1, _a;
                    try {
                        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                            var item = arr_1_1.value;
                            this.data = this.data + "<ul>";
                            this.data = this.data + "<li id =" + item.itemid + ">";
                            this.data = this.data + "<a  target='_blank' href='/itemDetail/" + item.itemid + "'>";
                            this.data = this.data + "<img src='" + item.image + "' class='items' height='100px' width='100px'  />";
                            this.data = this.data + "</a>";
                            this.data = this.data + "<br clear='all' />";
                            this.data = this.data + "<div>" + item.itemName + "</div>";
                            this.data = this.data + "</li></ul>";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return this.data;
                };
                HomeComponent.prototype.toHTML = function (input) {
                    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
                };
                HomeComponent.prototype.onScrollDown = function () {
                    var _this = this;
                    this.service.GetItems(this.pageindex, this.pagesize, function (itemsarr) {
                        _this.count = itemsarr.count;
                        if (_this.itemsarr.length < _this.count) {
                            // for(let i =0;i<(itemsarr.results.length);i++ )
                            // {
                            //   itemsarr.results[i].image1 = 'data:image/jpeg;base64,' +  itemsarr.results[i].image1;
                            // }
                            _this.itemsarr = _this.itemsarr.concat(itemsarr.results);
                        }
                    });
                };
                // public onScrollDown(): void {
                //   this.service.GetItemsonPaging(this.pageindex,this.pagesize)
                //   .pipe(finalize(() => this.onFinalize()))
                //   .subscribe((items) => {
                //     this.pageindex++;
                //     for(let i =0;i<(items.results.length-1);i++ )
                //           {
                //             if( items.results[i].image1!=='undefined')
                //             items.results[i].image1 = 'data:image/jpeg;base64,' +  items.results[i].image1;
                //           }
                //     this.itemsarr = this.itemsarr.concat(items["results"]);
                //     console.log(this.itemsarr);
                //   });
                //     this.count = itemsarr.count;
                //     // alert(itemsarr.count);
                //   if(this.itemsarr.length<this.count)
                //      {
                //       for(let i =0;i<(itemsarr.results.length-1);i++ )
                //       {
                //         if( itemsarr.results[i].image1!=='undefined')
                //         itemsarr.results[i].image1 = 'data:image/jpeg;base64,' +  itemsarr.results[i].image1;
                //       }
                //        this.itemsarr = this.itemsarr.concat(itemsarr.results);
                //     }    
                // });
                //}
                HomeComponent.prototype.onFinalize = function () {
                    this.request$ = null;
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _model_pagedata__WEBPACK_IMPORTED_MODULE_3__["responseData"] },
                { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingApiService"] },
                { type: _service_search_service_service__WEBPACK_IMPORTED_MODULE_4__["SearchServiceService"] },
                { type: _service_loading_indicator_service_service__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicatorServiceService"] },
                { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/itemdetails/item-notify.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pages/itemdetails/item-notify.ts ***!
          \**************************************************/
        /*! exports provided: itemNotify */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemNotify", function () { return itemNotify; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var itemNotify = /** @class */ (function () {
                function itemNotify() {
                }
                return itemNotify;
            }());
            /***/ 
        }),
        /***/ "./src/app/pages/itemdetails/itemdetails.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/pages/itemdetails/itemdetails.service.ts ***!
          \**********************************************************/
        /*! exports provided: itemService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemService", function () { return itemService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var itemService = /** @class */ (function () {
                function itemService() {
                }
                Object.defineProperty(itemService.prototype, "itemIdLogin", {
                    get: function () {
                        return this.itemid;
                    },
                    set: function (object) {
                        this.itemid = object;
                    },
                    enumerable: true,
                    configurable: true
                });
                return itemService;
            }());
            itemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], itemService);
            /***/ 
        }),
        /***/ "./src/app/pages/search-result/search-result.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/search-result/search-result.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-deck-container{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    -ms-box-orient:horizontal;\r\n    -ms-box-direction: normal;\r\n    \r\n    flex: 1 1 1;\r\n    box-sizing: border-box;\r\n    -webkit-box-flex: 1;\r\n    -ms-box-flex: 1;\r\n    -moz-box-flex: 1;\r\n   \r\n    width: 100%;\r\n    max-width: 1180px;\r\n    position: relative;\r\n    border-radius: 2px;\r\n    padding: 10px 10px 10px;\r\n    margin: 10px 10px 10px 10px;\r\n    background-color: #f5f5f5;\r\n    \r\n}\r\n\r\n.card-item{\r\n    flex: 1;\r\n    box-sizing: border-box;\r\n    -webkit-box-flex: 1;\r\n    -ms-box-flex: 1;\r\n    -moz-box-flex: 1;\r\n    padding: 2px 2px 2px 2px;\r\n    margin:2;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    margin-left: 5px;\r\n    \r\n    width:150px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBRW5CLHlCQUF5QjtJQUd6Qix5QkFBeUI7O0lBR3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixRQUFRO0lBQ1IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVjay1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC1tcy1ib3gtb3JpZW50Omhvcml6b250YWw7XHJcbiAgICAtbW96LWJveC1vcmllbnQ6aG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgXHJcbiAgICBmbGV4OiAxIDEgMTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLW1zLWJveC1mbGV4OiAxO1xyXG4gICAgLW1vei1ib3gtZmxleDogMTtcclxuICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTE4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJkLWl0ZW17XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtbXMtYm94LWZsZXg6IDE7XHJcbiAgICAtbW96LWJveC1mbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xyXG4gICAgbWFyZ2luOjI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgXHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/search-result/search-result.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/pages/search-result/search-result.component.ts ***!
          \****************************************************************/
        /*! exports provided: SearchResultComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () { return SearchResultComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_search_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/search-service.service */ "./src/app/service/search-service.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_pagedata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/pagedata */ "./src/app/model/pagedata.ts");
            /* harmony import */ var _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/menu/menu-service.service */ "./src/app/service/menu/menu-service.service.ts");
            var SearchResultComponent = /** @class */ (function () {
                function SearchResultComponent(responseData, router, route, service, MenuServiceService) {
                    /*
                   this.navigationSubscription = this.router.events.subscribe((e: any) => {
                    // If it is a NavigationEnd event re-initalise the component
                    if (e instanceof NavigationEnd) {
                      this.initialiseInvites();
                    }
                  });
                  */ //temporarily commented - 25 Feb 2019
                    this.responseData = responseData;
                    this.router = router;
                    this.route = route;
                    this.service = service;
                    this.MenuServiceService = MenuServiceService;
                    this.pageindex = 0;
                    this.pagesize = 8;
                    this.items = [];
                }
                /*
                   initialiseInvites() {
                    // Set default values and re-fetch any data you need.
                    
                  }*/
                SearchResultComponent.prototype.ngOnInit = function () {
                    //if seach request is coming first time from dynamic munu component
                    this.search = this.route.snapshot.params.item;
                    this.onScrollDown(this.search);
                    // first reuuest ends here    
                    /*this.onScrollDown(this.search);
                        this.subscription= this.MenuServiceService.getItem()
                        .subscribe(
                            searchString=>
                            {
                              this.searchString = searchString;
                              this.pageindex=0;
                              this.onScrollDown(this.searchString);
                            });
                    */ //temporarily commented 25 Feb 2019
                };
                SearchResultComponent.prototype.ngOnDestroy = function () {
                    //this.subscription.unsubscribe();
                    //  this.subs.unsubscribe();
                    if (this.navigationSubscription) {
                        this.navigationSubscription.unsubscribe();
                    }
                };
                SearchResultComponent.prototype.onScrollDown = function (searchitem) {
                    var _this = this;
                    this.pageindex = this.pageindex + 1;
                    this.service.SearchItems(this.pageindex, this.pagesize, searchitem, function (items) {
                        _this.count = items.count;
                        // // //   if(this.items.length<this.count)
                        // // //   {
                        // // //    for(let i =0;i<items.count;i++ )
                        // // //    {
                        // // //      if( items.results[i].image1!=='undefined')
                        // // //      items.results[i].image1 = 'data:image/jpeg;base64,' +  items.results[i].image1;
                        // // //    }
                        // // //     this.items = this.items.concat(items.results);
                        // // //    console.log('search',this.items.length);
                        // // //  } 
                        if (_this.items.length < _this.count) {
                            // //  // for(let i =0;i<(itemsarr.results.length);i++ )
                            // //  // {
                            // //  //   itemsarr.results[i].image1 = 'data:image/jpeg;base64,' +  itemsarr.results[i].image1;
                            // //  // }
                            _this.items = _this.items.concat(items.results);
                        }
                    });
                };
                return SearchResultComponent;
            }());
            SearchResultComponent.ctorParameters = function () { return [
                { type: _model_pagedata__WEBPACK_IMPORTED_MODULE_4__["responseData"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _service_search_service_service__WEBPACK_IMPORTED_MODULE_2__["SearchServiceService"] },
                { type: _service_menu_menu_service_service__WEBPACK_IMPORTED_MODULE_5__["MenuServiceService"] }
            ]; };
            SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-result',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-result/search-result.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result.component.css */ "./src/app/pages/search-result/search-result.component.css")).default]
                })
            ], SearchResultComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/sliders/sliders.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/sliders/sliders.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* @import './slider.component.css'; */\r\n\r\n.slide-item {\r\n    display: inline-block;\r\n    height: 100%;\r\n    opacity: 0.5;\r\n    transition: opacity 1s, transform 1s;\r\n}\r\n\r\n.slide {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-size: 300px 100px;\r\n    background-position: center;\r\n    margin: 0 5px;\r\n}\r\n\r\n.center {\r\n    display: fixed;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    height:50%;\r\n  }\r\n\r\nimg {\r\n    /* border: 1px solid #ddd; */\r\n    border-radius: 8px;\r\n    margin-top:3px;\r\n    margin-left:3px;\r\n    padding: 5px;\r\n    width: 150px;\r\n    /* border-color: darkred; */\r\n  }\r\n\r\n.borderless td, .borderless th {\r\n    border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVycy9zbGlkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDOztBQUV0QztJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFDQztJQUNHLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7RUFDWjs7QUFFQTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7QUFDQTtJQUNFLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zbGlkZXJzL3NsaWRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgJy4vc2xpZGVyLmNvbXBvbmVudC5jc3MnOyAqL1xyXG5cclxuLnNsaWRlLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgdHJhbnNmb3JtIDFzO1xyXG59XHJcbiAuc2xpZGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwcHggMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZpeGVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OjUwJTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDozcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAvKiBib3JkZXItY29sb3I6IGRhcmtyZWQ7ICovXHJcbiAgfVxyXG4gIC5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/sliders/sliders.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/sliders/sliders.component.ts ***!
          \****************************************************/
        /*! exports provided: SlidersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersComponent", function () { return SlidersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            var SlidersComponent = /** @class */ (function () {
                function SlidersComponent(config, shopapi) {
                    this.config = config;
                    this.shopapi = shopapi;
                    this.imageItems = [];
                    /*ngx sliders end*/
                    config.interval = 2000;
                    config.wrap = true;
                    config.keyboard = false;
                    //config.pauseOnHover = false;
                    // this.shopapi.getimages()
                    // .subscribe((m)=>
                    // {
                    //   this.item = m;
                    //   this.imageItems = this.item.body;
                    //   console.log(this.imageItems);
                    // },
                    // err=>{
                    // console.log(err);
                    // }
                    // );
                    // this.imageItems = [
                    //   'https://placeimg.com/600/600/any',
                    //   'https://placeimg.com/600/600/nature',
                    //   'https://placeimg.com/600/600/sepia',
                    //   'https://placeimg.com/600/600/people',
                    //   'https://placeimg.com/600/600/tech'
                    // ];
                    // this.imageItems = [
                    //   'https://placeimg.com/600/600/any',
                    //   'https://placeimg.com/600/600/nature',
                    //   'https://placeimg.com/600/600/sepia',
                    //   'https://placeimg.com/600/600/people',
                    //   'https://placeimg.com/600/600/tech'
                    // ];
                    this.imageItems = ['assets/Pics/free1.jpg',
                        'assets/Pics/free2.jpg',
                        'assets/Pics/free3.jpg',
                        'assets/Pics/free4.jpg',
                        'assets/Pics/free5.jpg',
                        'assets/Pics/free6.jpg',
                        'assets/Pics/free8.jpg'
                    ];
                }
                SlidersComponent.prototype.ngOnInit = function () {
                    // const slideItems = [
                    //   { src: "assets/Pics/pic4.jpg", title: 'Title 1' },
                    //   { src: 'assets/Pics/pic1.jpg', title: 'Title 2' },
                    //   { src: 'assets/Pics/pic2.jpg', title: 'Title 3' },
                    //   { src: 'assets/Pics/pic3.jpg', title: 'Title 4' }
                    // ];
                    //  this.slider.items = slideItems; //ngx 
                };
                return SlidersComponent;
            }());
            SlidersComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] },
                { type: _service_shopping_api_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingApiService"] }
            ]; };
            SlidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sliders',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sliders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliders/sliders.component.html")).default,
                    providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sliders.component.css */ "./src/app/pages/sliders/sliders.component.css")).default]
                })
            ], SlidersComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/temp-route/temp-route.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/pages/temp-route/temp-route.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbXAtcm91dGUvdGVtcC1yb3V0ZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/temp-route/temp-route.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/pages/temp-route/temp-route.component.ts ***!
          \**********************************************************/
        /*! exports provided: TempRouteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempRouteComponent", function () { return TempRouteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var TempRouteComponent = /** @class */ (function () {
                function TempRouteComponent(route, router) {
                    this.route = route;
                    this.router = router;
                }
                TempRouteComponent.prototype.ngOnInit = function () {
                    this.search = this.route.snapshot.params.tempsearch;
                    this.val = this.route.snapshot.params.val;
                    if (this.val == 'search') {
                        this.router.navigateByUrl('/search/' + this.search);
                    }
                    else {
                        this.router.navigateByUrl('/menu/' + this.search.toString());
                    }
                };
                return TempRouteComponent;
            }());
            TempRouteComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            TempRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-temp-route',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./temp-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/temp-route/temp-route.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./temp-route.component.css */ "./src/app/pages/temp-route/temp-route.component.css")).default]
                })
            ], TempRouteComponent);
            /***/ 
        }),
        /***/ "./src/app/safe.pipe.ts": 
        /*!******************************!*\
          !*** ./src/app/safe.pipe.ts ***!
          \******************************/
        /*! exports provided: SafePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function () { return SafePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SafePipe = /** @class */ (function () {
                function SafePipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                //  transform(value: any, type:string,args?: any): any {
                SafePipe.prototype.transform = function (value, type) {
                    switch (type) {
                        case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
                        case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
                        case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
                        case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
                        case 'resourceurl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
                        //  case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
                        default: throw new Error('Invalid safe type speicified : ${type}');
                    }
                };
                SafePipe.prototype.getSantizeUrl = function (url) {
                    return this.sanitizer.bypassSecurityTrustUrl(url);
                };
                return SafePipe;
            }());
            SafePipe.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'safe'
                })
            ], SafePipe);
            /***/ 
        }),
        /***/ "./src/app/service/ActivateUserService.ts": 
        /*!************************************************!*\
          !*** ./src/app/service/ActivateUserService.ts ***!
          \************************************************/
        /*! exports provided: activateuserservce */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateuserservce", function () { return activateuserservce; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var activateuserservce = /** @class */ (function () {
                function activateuserservce() {
                    this.getEmail = null;
                }
                activateuserservce.prototype.setOption = function (option, value) {
                    this.getEmail = value;
                };
                activateuserservce.prototype.getOption = function () {
                    return this.getEmail;
                };
                return activateuserservce;
            }());
            /***/ 
        }),
        /***/ "./src/app/service/auth-guard.ts": 
        /*!***************************************!*\
          !*** ./src/app/service/auth-guard.ts ***!
          \***************************************/
        /*! exports provided: authguard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authguard", function () { return authguard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shopping_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            var authguard = /** @class */ (function () {
                function authguard(window, localStorage, appservice, router, route) {
                    this.window = window;
                    this.localStorage = localStorage;
                    this.appservice = appservice;
                    this.router = router;
                    this.route = route;
                }
                authguard.prototype.ngOnInit = function () {
                    this.returnUrl = this.route.snapshot.queryParams['home'] || '/';
                };
                authguard.prototype.canActivate = function (route, state) {
                    var url = state.url;
                    //return this.checkLogin(url,state);
                    var idToken = this.localStorage.getItem("id_token");
                    if (idToken) {
                        //added on 15 jul 2018
                        // this.router.navigate(['home']);
                        return true;
                    }
                    else {
                        // not logged in so redirect to login page with the return url and return false
                        this.router.navigate(['/login']);
                        return false;
                    }
                };
                authguard.prototype.checkLogin = function (url, state) {
                    var idToken = localStorage.getItem("Id_token");
                    if (idToken) {
                        //added on 15 jul 2018
                        // this.router.navigate(['home']);
                        return true;
                    }
                    else {
                        // not logged in so redirect to login page with the return url and return false
                        this.router.navigate(['/login']);
                        return false;
                    }
                };
                return authguard;
            }());
            authguard.ctorParameters = function () { return [
                { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] },
                { type: _shopping_api_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            authguard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
            ], authguard);
            /***/ 
        }),
        /***/ "./src/app/service/cart-item-service.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/service/cart-item-service.service.ts ***!
          \******************************************************/
        /*! exports provided: CartItemServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemServiceService", function () { return CartItemServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CartItemServiceService = /** @class */ (function () {
                function CartItemServiceService() {
                }
                return CartItemServiceService;
            }());
            CartItemServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CartItemServiceService);
            /***/ 
        }),
        /***/ "./src/app/service/httpXsrfIntercepter.ts": 
        /*!************************************************!*\
          !*** ./src/app/service/httpXsrfIntercepter.ts ***!
          \************************************************/
        /*! exports provided: HttpXsrfInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfInterceptor", function () { return HttpXsrfInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            var HttpXsrfInterceptor = /** @class */ (function () {
                function HttpXsrfInterceptor(localStorage, tokenExtractor) {
                    this.localStorage = localStorage;
                    this.tokenExtractor = tokenExtractor;
                }
                HttpXsrfInterceptor.prototype.intercept = function (req, next) {
                    var headerName = 'X-XSRF-TOKEN';
                    var token = this.tokenExtractor.getToken();
                    ///let token = localStorage.getItem("xsrf");
                    var requestToForward = req;
                    if (token === null) {
                        requestToForward = req.clone({ withCredentials: true,
                        });
                    }
                    else {
                        requestToForward = req.clone({ withCredentials: true,
                            headers: req.headers.set(headerName, token) });
                    }
                    return next.handle(requestToForward);
                };
                return HttpXsrfInterceptor;
            }());
            HttpXsrfInterceptor.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"],] }] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpXsrfTokenExtractor"] }
            ]; };
            HttpXsrfInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]))
            ], HttpXsrfInterceptor);
            /***/ 
        }),
        /***/ "./src/app/service/loading-indicator-service.service.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/service/loading-indicator-service.service.ts ***!
          \**************************************************************/
        /*! exports provided: LoadingIndicatorInterceptor, LoadingIndicatorServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorInterceptor", function () { return LoadingIndicatorInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorServiceService", function () { return LoadingIndicatorServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoadingIndicatorInterceptor = /** @class */ (function () {
                function LoadingIndicatorInterceptor(loadingIndicatorService) {
                    this.loadingIndicatorService = loadingIndicatorService;
                }
                LoadingIndicatorInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    // emit onStarted event before request execution
                    this.loadingIndicatorService.onStarted(req);
                    return next
                        .handle(req).pipe(
                    // emit onFinished event after request execution
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.loadingIndicatorService.onFinished(req); }));
                };
                return LoadingIndicatorInterceptor;
            }());
            LoadingIndicatorInterceptor.ctorParameters = function () { return [
                { type: LoadingIndicatorServiceService }
            ]; };
            LoadingIndicatorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], LoadingIndicatorInterceptor);
            var LoadingIndicatorServiceService = /** @class */ (function () {
                function LoadingIndicatorServiceService() {
                    this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    /**
                     * Stores all currently active requests
                     */
                    this.requests = [];
                }
                /**
                 * Adds request to the storage and notifies observers
                 */
                LoadingIndicatorServiceService.prototype.onStarted = function (req) {
                    this.requests.push(req);
                    this.notify();
                };
                /**
                 * Removes request from the storage and notifies observers
                 */
                LoadingIndicatorServiceService.prototype.onFinished = function (req) {
                    var index = this.requests.indexOf(req);
                    if (index !== -1) {
                        this.requests.splice(index, 1);
                    }
                    this.notify();
                };
                /**
                 * Notifies observers about whether there are any requests on fly
                 */
                LoadingIndicatorServiceService.prototype.notify = function () {
                    this.onLoadingChanged.emit(this.requests.length !== 0);
                };
                return LoadingIndicatorServiceService;
            }());
            LoadingIndicatorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], LoadingIndicatorServiceService);
            /***/ 
        }),
        /***/ "./src/app/service/menu/menu-service.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/service/menu/menu-service.service.ts ***!
          \******************************************************/
        /*! exports provided: MenuServiceService, SearchItem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceService", function () { return MenuServiceService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItem", function () { return SearchItem; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _model_pagedata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/pagedata */ "./src/app/model/pagedata.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            //import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
            ///import { observableToBeFn } from 'rxjs/testing/TestScheduler';
            var MenuServiceService = /** @class */ (function () {
                function MenuServiceService(http, responseData) {
                    this.http = http;
                    this.responseData = responseData;
                    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                MenuServiceService.prototype.menuitems = function () {
                    this.uri = this.baseUrl + "/api/menu/menuitems/";
                    return this.http.get(this.uri, { observe: 'response' }).pipe(
                    // catchError(err => of(this.myError)),
                    );
                };
                MenuServiceService.prototype.changeSelectedItem = function (totalItem) {
                    this.subject.next(totalItem);
                };
                MenuServiceService.prototype.getItem = function () {
                    return this.subject.asObservable();
                };
                return MenuServiceService;
            }());
            MenuServiceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _model_pagedata__WEBPACK_IMPORTED_MODULE_5__["responseData"] }
            ]; };
            MenuServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MenuServiceService);
            var SearchItem = /** @class */ (function () {
                function SearchItem() {
                }
                return SearchItem;
            }());
            /***/ 
        }),
        /***/ "./src/app/service/search-service.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/service/search-service.service.ts ***!
          \***************************************************/
        /*! exports provided: SearchServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceService", function () { return SearchServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var SearchServiceService = /** @class */ (function () {
                function SearchServiceService(http) {
                    this.http = http;
                    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
                    this.httpReqestInProgress = false;
                    this.httpItemReqestInProgress = false;
                    this.currentPage = 1;
                    this.news = [];
                    this.ItemcurrentPage = 1;
                    this.ItemArray = [];
                    this.CategoryCurrentPage = 1;
                    this.categoryItemArray = [];
                    this.categoryhttpItemReqestInProgress = false;
                }
                SearchServiceService.prototype.SearchResult = function (searchItem, pageindex, pagesize) {
                    var querystring;
                    this.uri = this.baseUrl + "/api/items/";
                    querystring = "?Page=" + pageindex + "&Count=" + pagesize + "&IsPagingSpecified=true&IsSortingSpecified=true&itemSearch=" + searchItem;
                    return this.http.get(this.uri + "SearchItem/" + querystring, { observe: 'response' }).pipe(
                    // catchError(this.handleError)
                    );
                };
                // private handleError(error: HttpErrorResponse) {
                //   if (error.error instanceof ErrorEvent) {
                //     // A client-side or network error occurred. Handle it accordingly.
                //     console.error('An error occurred:', error.error.message);
                //   } else {
                //     // The backend returned an unsuccessful response code.
                //     // The response body may contain clues as to what went wrong,
                //     console.error(
                //       `Backend returned code ${error.status}, ` +
                //       `body was: ${error.error}`);
                //   }
                //   // return an ErrorObservable with a user-facing error message
                //   return throwError(
                //     'Something bad happened; please try again later.');
                //   }
                SearchServiceService.prototype.SearchItems = function (page, pagesize, searchItem, saveResultsCallback) {
                    var _this = this;
                    var querystring;
                    this.uri = this.baseUrl + "/api/items/";
                    querystring = "?Page=" + page + "&Count=" + pagesize + "&IsPagingSpecified=true&IsSortingSpecified=true&itemSearch=" + searchItem;
                    return this.http.get(this.uri + "SearchItem/" + querystring).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skipWhile"])(function () { return _this.httpReqestInProgress; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { _this.httpReqestInProgress = true; }))
                        .subscribe(function (news) {
                        _this.currentPage++;
                        saveResultsCallback(news);
                        _this.httpReqestInProgress = false;
                    });
                };
                SearchServiceService.prototype.GetItems = function (page, pagesize, saveItemResultsCallback) {
                    var _this = this;
                    if (page === void 0) { page = 1; }
                    var querystring;
                    this.uri = this.baseUrl + "/api/items/";
                    querystring = "?Page=" + this.ItemcurrentPage + "&Count=" + pagesize + "&IsPagingSpecified=true&IsSortingSpecified=true";
                    return this.http.get(this.uri + "AllItemsOnPaging" + querystring).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skipWhile"])(function () { return _this.httpItemReqestInProgress; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { _this.httpItemReqestInProgress = true; }))
                        .subscribe(function (ItemArray) {
                        _this.ItemcurrentPage++;
                        saveItemResultsCallback(ItemArray);
                        _this.httpItemReqestInProgress = false;
                    });
                };
                SearchServiceService.prototype.GetItemsonPaging = function (page, pagesize) {
                    if (page === void 0) { page = 1; }
                    var querystring;
                    this.uri = this.baseUrl + "/api/items/";
                    querystring = "?Page=" + this.ItemcurrentPage + "&Count=" + pagesize + "&IsPagingSpecified=true&IsSortingSpecified=true";
                    if (this.request$) {
                        return this.request$;
                    }
                    else {
                        return this.http.get(this.uri + "AllItemsOnPaging" + querystring);
                    }
                };
                SearchServiceService.prototype.onFinalize = function () {
                    this.request$ = null;
                };
                SearchServiceService.prototype.AllItems = function (ChildMenuId, CategoryPageIndex, pagesize, saveCategoryItemResultsCallback) {
                    var _this = this;
                    var querystring;
                    this.uri = this.baseUrl + "/api/items/";
                    querystring = "?ChildMenuId=" + ChildMenuId.toString() + "&Page=" + CategoryPageIndex.toString() + "&Count=" + pagesize + "&IsPagingSpecified=true&IsSortingSpecified=true";
                    return this.http.get(this.uri + "AllItems" + querystring).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skipWhile"])(function () { return _this.categoryhttpItemReqestInProgress; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { _this.categoryhttpItemReqestInProgress = true; }))
                        .subscribe(function (categoryItemArray) {
                        _this.CategoryCurrentPage;
                        saveCategoryItemResultsCallback(categoryItemArray);
                        _this.categoryhttpItemReqestInProgress = false;
                    });
                };
                return SearchServiceService;
            }());
            SearchServiceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            SearchServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], SearchServiceService);
            /***/ 
        }),
        /***/ "./src/app/service/sevice-intercepter.ts": 
        /*!***********************************************!*\
          !*** ./src/app/service/sevice-intercepter.ts ***!
          \***********************************************/
        /*! exports provided: serviceintercepter */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceintercepter", function () { return serviceintercepter; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shopping_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-api.service */ "./src/app/service/shopping-api.service.ts");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var serviceintercepter = /** @class */ (function () {
                function serviceintercepter(localStorage, document, http) {
                    this.localStorage = localStorage;
                    this.document = document;
                    this.http = http;
                }
                serviceintercepter.prototype.intercept = function (request, next) {
                    var idToken = this.localStorage.getItem("id_token");
                    if (idToken) {
                        var clone = request.clone({
                            headers: request.headers.set("Authorization", "Bearer " + idToken)
                        });
                        return next.handle(clone);
                    }
                    else {
                        return next.handle(request);
                    }
                };
                return serviceintercepter;
            }());
            serviceintercepter.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
                { type: _shopping_api_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingApiService"] }
            ]; };
            serviceintercepter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
            ], serviceintercepter);
            /***/ 
        }),
        /***/ "./src/app/service/shopping-api.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/service/shopping-api.service.ts ***!
          \*************************************************/
        /*! exports provided: ShoppingApiService, optResponse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingApiService", function () { return ShoppingApiService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optResponse", function () { return optResponse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _model_pagedata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/pagedata */ "./src/app/model/pagedata.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            var ShoppingApiService = /** @class */ (function () {
                function ShoppingApiService(localStorage, http, responseData) {
                    this.localStorage = localStorage;
                    this.http = http;
                    this.responseData = responseData;
                    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
                    this.loggedIn = false;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                    this.userFullNamesubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                }
                ShoppingApiService.prototype.AllItems = function (category, index) {
                    this.uri = this.baseUrl + "/api/items/";
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('categoryId', category).set("pageIndex", index);
                    return this.http.get(this.uri + "AllItems/", { observe: 'response', params: params }).pipe(
                    ///  catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.itemDetails = function (itemId) {
                    this.uri = this.baseUrl + "/api/items/";
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('itemId', itemId);
                    return this.http.get(this.uri + "itemDetail/", { observe: 'response', params: params }).pipe(
                    // catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.addToCart = function (itemid, quantity) {
                    var querystring;
                    var id_token;
                    id_token = this.localStorage.getItem("id_token");
                    querystring = "?itemid=" + itemid + "&quantity=" + quantity + "&sessionId=" + id_token;
                    this.uri = this.baseUrl + "/api/items/";
                    return this.http.post(this.uri + "addCart" + querystring, { observe: 'response' }).pipe(
                    //catchError(this.handleError)
                    );
                };
                ShoppingApiService.prototype.getCheckedInItem = function (sessionId) {
                    var querystring;
                    ////let sessionToken:string
                    this.uri = this.baseUrl + "/api/items/";
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('userSession', sessionId);
                    return this.http.get(this.uri + "getcheckedinItem", { observe: 'response', params: params }).pipe(
                    //catchError(this.handleError)
                    );
                };
                ShoppingApiService.prototype.RemoveItem = function (itemid, quantity, sessionId, checkinid) {
                    var querystring;
                    querystring = "?itemid=" + itemid + "&returnedItemQty=" + quantity + "&sessionId=" + sessionId + "&checkedinId=" + checkinid;
                    this.uri = this.baseUrl + "/api/items/";
                    return this.http.post(this.uri + "RemoveItems" + querystring, { observe: 'response' }).pipe(
                    // catchError(this.handleError.bind(this) )
                    );
                };
                // private handleError(error: HttpErrorResponse) {
                //     if (error.error instanceof ErrorEvent) {
                //       // A client-side or network error occurred. Handle it accordingly.
                //       console.error('An error occurred:', error.error.message);
                //     } else {
                //       // The backend returned an unsuccessful response code.
                //       // The response body may contain clues as to what went wrong,
                //       console.error(
                //         `Backend returned code ${error.status}, ` +
                //         `body was: ${error.error}`);
                //     }
                //     // return an ErrorObservable with a user-facing error message
                //     return throwError(error.error
                //       );
                //   };
                ShoppingApiService.prototype.Login = function (userId, password) {
                    var _this = this;
                    this.localStorage.removeItem('id_token');
                    this.localStorage.removeItem("expires_at");
                    this.localStorage.removeItem("email");
                    this.localStorage.removeItem("fullName");
                    var encodedval = btoa(userId + ":" + password);
                    this.uri = this.baseUrl + "/api/token/";
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json')
                        .set('authorization', encodedval);
                    return this.http.get(this.uri, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
                        _this.localStorage.setItem("email", userId);
                        _this.setSession(res);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
                };
                ;
                ShoppingApiService.prototype.setSession = function (authResult) {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_7__(authResult.expiration);
                    var futureMonth = moment__WEBPACK_IMPORTED_MODULE_7__(currentDate).add(1, 'M');
                    var futureMonthEnd = moment__WEBPACK_IMPORTED_MODULE_7__(futureMonth).endOf('month');
                    if (currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
                        futureMonth = futureMonth.add(1, 'd');
                    }
                    var tokenExpire = currentDate.add(5, "days");
                    this.localStorage.setItem('id_token', authResult.authToken);
                    this.localStorage.setItem("expires_at", tokenExpire.toString());
                    ///// const expiresAt = moment().add(authResult.expiration,'minute');
                    ///localStorage.setItem('id_token', authResult.authToken);
                    ///localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
                };
                ShoppingApiService.prototype.logout = function () {
                    this.localStorage.removeItem("id_token");
                    this.localStorage.removeItem("expires_at");
                    this.localStorage.removeItem("fullName");
                    this.localStorage.removeItem("email");
                };
                ShoppingApiService.prototype.isLoggedIn = function () {
                    return moment__WEBPACK_IMPORTED_MODULE_7__().isBefore(this.getExpiration());
                };
                ShoppingApiService.prototype.isLoggedOut = function () {
                    return !this.isLoggedIn();
                };
                ShoppingApiService.prototype.getExpiration = function () {
                    var expiration = this.localStorage.getItem("expires_at");
                    var expiresAt = JSON.parse(expiration);
                    return moment__WEBPACK_IMPORTED_MODULE_7__(expiresAt);
                };
                ShoppingApiService.prototype.GetHomePageItems = function (pagesize, pageindex) {
                    var querystring;
                    this.uri = this.baseUrl + "/api/items/";
                    querystring = "?Page=" + pageindex + "&Count=" + pagesize + "&IsPagingSpecified=true&IsSortingSpecified=true";
                    return this.http.get(this.uri + "AllItemsOnPaging/" + querystring, { observe: 'response' }).pipe(
                    // catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.addUser = function (user) {
                    var _this = this;
                    this.localStorage.removeItem('id_token');
                    this.localStorage.removeItem("expires_at");
                    this.localStorage.removeItem("email");
                    this.localStorage.removeItem("fullName");
                    this.uri = this.baseUrl + "/api/user/NewUser/";
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers.append('Content-Type', 'application/form-data');
                    return this.http.post(this.uri, {
                        "emailId": user.myemail,
                        "password": user.password,
                        "firstName": user.firstName,
                        "middleName": user.middleName,
                        "lastName": user.lastName,
                        "mobile": user.mobile,
                        "ulternateMobile": user.ulternateMobile,
                        "address": user.address,
                        "city": user.city,
                        "state": user.mystate,
                        "pin": user.pin,
                        "enterOPT": user.otp
                    }, {
                        headers: headers
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
                        _this.localStorage.setItem("email", user.myemail);
                    }));
                };
                ShoppingApiService.prototype.handError = function (errorResponse) {
                    if (errorResponse.error instanceof ErrorEvent) {
                        console.log("client side error", errorResponse.error.message);
                    }
                    else {
                        console.log("server side error", errorResponse);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorResponse);
                };
                ShoppingApiService.prototype.changeSelectedItem = function (totalItem) {
                    this.subject.next(totalItem);
                };
                ShoppingApiService.prototype.getItem = function () {
                    return this.subject.asObservable();
                };
                ShoppingApiService.prototype.userFullName = function (fullName) {
                    return this.userFullNamesubject.next(fullName);
                };
                ShoppingApiService.prototype.getUserFullName = function () {
                    return this.userFullNamesubject.asObservable();
                };
                ShoppingApiService.prototype.getOTP = function (mobile) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uri = this.baseUrl + "/api/sms/Otpsender?mobileNumber=" + mobile;
                                    return [4 /*yield*/, this.http.get(this.uri, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
                                        }))
                                            .toPromise()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                ;
                ShoppingApiService.prototype.ResetPassword = function (email) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uri = this.baseUrl + "/api/sms/ResetPassword?email=" + email;
                                    return [4 /*yield*/, this.http.get(this.uri, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
                                            // this.setOTP(res)
                                        }))
                                            .toPromise()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                ;
                ShoppingApiService.prototype.paymentreceive = function (session, registration) {
                    this.uri = this.baseUrl + "/api/items/CheckoutPaymentReceived?UserSession=" + session;
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers.append('Content-Type', 'application/form-data');
                    return this.http.post(this.uri, registration, {
                        headers: headers
                    });
                };
                ShoppingApiService.prototype.SaveEditedAddress = function (edit) {
                    this.uri = this.baseUrl + "/api/items/EditAddress";
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers.append('Content-Type', 'application/form-data');
                    return this.http.put(this.uri, edit, {
                        headers: headers
                    });
                };
                ShoppingApiService.prototype.changepassword = function (email, password, confirmpassword) {
                    this.uri = this.baseUrl + "/api/sms/ChangePassword?email=" + email + "&password=" + password + "&confirmpassword=" + confirmpassword;
                    return this.http.get(this.uri, { observe: 'response' }).pipe(
                    // catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.getimages = function () {
                    this.uri = this.baseUrl + "/api/File/images";
                    return this.http.get(this.uri, { observe: 'response' }).pipe(
                    // catchError(this.handleError)
                    );
                };
                ShoppingApiService.prototype.GetAddress = function (sessionId) {
                    this.uri = this.baseUrl + "/api/User/";
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('usersession', sessionId);
                    return this.http.get(this.uri + "Address", { observe: 'response', params: params }).pipe(
                    // catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.GetStates = function () {
                    this.uri = this.baseUrl + "/api/User/";
                    return this.http.get(this.uri + "GetStates", { observe: 'response' }).pipe(
                    // catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.GetCities = function (StateId) {
                    this.uri = this.baseUrl + "/api/User/";
                    return this.http.get(this.uri + "GetCities?StateId=" + StateId, { observe: 'response' }).pipe(
                    // catchError(this.handleError )
                    );
                };
                ShoppingApiService.prototype.ActivateUserAccount = function (email, active) {
                    this.uri = this.baseUrl + "/api/User/";
                    this.uri = this.baseUrl + "/api/User/ActivateUser?Activate=" + active + "&email=" + email;
                    return this.http.get(this.uri).pipe();
                };
                return ShoppingApiService;
            }());
            ShoppingApiService.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__["LOCAL_STORAGE"],] }] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _model_pagedata__WEBPACK_IMPORTED_MODULE_6__["responseData"] }
            ]; };
            ShoppingApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__["LOCAL_STORAGE"]))
            ], ShoppingApiService);
            var optResponse = /** @class */ (function () {
                function optResponse(localStorage) {
                    this.localStorage = localStorage;
                }
                return optResponse;
            }());
            optResponse = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__["LOCAL_STORAGE"]))
            ], optResponse);
            /***/ 
        }),
        /***/ "./src/app/service/singleton.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/service/singleton.service.ts ***!
          \**********************************************/
        /*! exports provided: SingletonService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonService", function () { return SingletonService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm2015/ng-toolkit-universal.js");
            var SingletonService = /** @class */ (function () {
                function SingletonService(localStorage) {
                    this.localStorage = localStorage;
                    this.session = this.localStorage.getItem("id_token");
                }
                return SingletonService;
            }());
            SingletonService.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] }
            ]; };
            SingletonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"]))
            ], SingletonService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            var environment = {
                production: false,
                baseUrl: 'http://localhost:49999'
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            document.addEventListener('DOMContentLoaded', function () {
                Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_5__["AppBrowserModule"])
                    .catch(function (err) { return console.error(err); });
            });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\shop\shopUI\MyShopLazyLoading\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map