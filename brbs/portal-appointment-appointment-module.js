(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-appointment-appointment-module"],{

/***/ "./src/app/portal/appointment/appointment-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/portal/appointment/appointment-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AppointmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRoutingModule", function() { return AppointmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/portal/appointment/step3/step3.component.ts");





var routes = [
    {
        path: 'step3',
        component: _step3_step3_component__WEBPACK_IMPORTED_MODULE_2__["Step3Component"]
    }
];
var AppointmentRoutingModule = /** @class */ (function () {
    function AppointmentRoutingModule() {
    }
    AppointmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppointmentRoutingModule });
    AppointmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppointmentRoutingModule_Factory(t) { return new (t || AppointmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppointmentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/appointment/appointment.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/portal/appointment/appointment.module.ts ***!
  \**********************************************************/
/*! exports provided: AppointmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentModule", function() { return AppointmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/portal-common.module */ "./src/app/portal/common/portal-common.module.ts");
/* harmony import */ var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-routing.module */ "./src/app/portal/appointment/appointment-routing.module.ts");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/portal/appointment/step3/step3.component.ts");
/* harmony import */ var _service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/language.service */ "./src/app/portal/service/language.service.ts");








var AppointmentModule = /** @class */ (function () {
    function AppointmentModule(_translateService, _languageService) {
        this._translateService = _translateService;
        this._languageService = _languageService;
        this._languageService.register(this._translateService);
    }
    AppointmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppointmentModule });
    AppointmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppointmentModule_Factory(t) { return new (t || AppointmentModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"])); }, imports: [[
                _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"],
                _common_portal_common_module__WEBPACK_IMPORTED_MODULE_2__["PortalCommonModule"],
                _appointment_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppointmentRoutingModule"]
            ]] });
    return AppointmentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentModule, { declarations: [_step3_step3_component__WEBPACK_IMPORTED_MODULE_4__["Step3Component"]], imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"],
        _common_portal_common_module__WEBPACK_IMPORTED_MODULE_2__["PortalCommonModule"],
        _appointment_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppointmentRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _step3_step3_component__WEBPACK_IMPORTED_MODULE_4__["Step3Component"]
                ],
                imports: [
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"],
                    _common_portal_common_module__WEBPACK_IMPORTED_MODULE_2__["PortalCommonModule"],
                    _appointment_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppointmentRoutingModule"]
                ]
            }]
    }], function () { return [{ type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoService"] }, { type: _service_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/appointment/step3/step3.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/portal/appointment/step3/step3.component.ts ***!
  \*************************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");








var Step3Component = /** @class */ (function () {
    function Step3Component(_portalService, _router) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this.commandBarButtons = [];
        this.scopeName = 'portal.appointment.step3';
        this._portalService.setPageTitle('portal.landing.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_1__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.abort'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_1__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this.onAbortButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    Step3Component.prototype.ngOnInit = function () { };
    Step3Component.prototype.onAbortButtonClick = function () {
        this._router.navigate(['/landing/welcome']);
    };
    Step3Component.prototype.onContinueButtonClick = function () {
        this._router.navigate(['/cancellation/confirmation']);
    };
    Step3Component.ɵfac = function Step3Component_Factory(t) { return new (t || Step3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    Step3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step3Component, selectors: [["app-step3"]], decls: 6, vars: 2, consts: [[1, "view"], [1, "page-content", "has-commandbar"], [1, "container"], [3, "translate"], [3, "buttons"]], template: function Step3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "portal-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "command-bar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "portal.landing.title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx.commandBarButtons);
        } }, directives: [_common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_5__["PortalHeaderComponent"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_1__["CommandBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9hcHBvaW50bWVudC9zdGVwMy9zdGVwMy5jb21wb25lbnQuc2FzcyJ9 */"] });
    return Step3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step3',
                templateUrl: './step3.component.html',
                styleUrls: ['./step3.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=portal-appointment-appointment-module.js.map