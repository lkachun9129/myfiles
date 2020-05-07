(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/portal/route-guard/direct-access.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/portal/route-guard/direct-access.guard.ts ***!
  \***********************************************************/
/*! exports provided: DirectAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectAccessGuard", function() { return DirectAccessGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var DirectAccessGuard = /** @class */ (function () {
    function DirectAccessGuard(_router) {
        this._router = _router;
    }
    DirectAccessGuard.prototype.canActivate = function (route, state) {
        if (this._router.url === "/") {
            this._router.navigate(['/landing/welcome']);
        }
        else {
            return true;
        }
    };
    DirectAccessGuard.ɵfac = function DirectAccessGuard_Factory(t) { return new (t || DirectAccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    DirectAccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DirectAccessGuard, factory: DirectAccessGuard.ɵfac });
    return DirectAccessGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectAccessGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map
