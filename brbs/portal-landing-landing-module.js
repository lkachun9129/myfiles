(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-landing-landing-module"],{

/***/ "./src/app/portal/landing/landing-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/portal/landing/landing-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-guard/direct-access.guard */ "./src/app/portal/route-guard/direct-access.guard.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/portal/landing/maintenance/maintenance.component.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/portal/landing/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/portal/landing/step2/step2.component.ts");
/* harmony import */ var _timeout_timeout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeout/timeout.component */ "./src/app/portal/landing/timeout/timeout.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/portal/landing/welcome/welcome.component.ts");










var routes = [
    {
        path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"]
    },
    {
        path: 'step1',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step1_step1_component__WEBPACK_IMPORTED_MODULE_4__["Step1Component"]
    },
    {
        path: 'step2',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _step2_step2_component__WEBPACK_IMPORTED_MODULE_5__["Step2Component"]
    },
    {
        path: 'maintenance',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__["MaintenanceComponent"],
    },
    {
        path: 'timeout',
        canActivate: [_route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]],
        component: _timeout_timeout_component__WEBPACK_IMPORTED_MODULE_6__["TimeoutComponent"]
    },
    {
        path: '**',
        redirectTo: 'welcome'
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
    LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LandingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/landing/landing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/portal/landing/landing.module.ts ***!
  \**************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/portal-common.module */ "./src/app/portal/common/portal-common.module.ts");
/* harmony import */ var _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-guard/direct-access.guard */ "./src/app/portal/route-guard/direct-access.guard.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/portal/landing/landing-routing.module.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/portal/landing/maintenance/maintenance.component.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/portal/landing/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/portal/landing/step2/step2.component.ts");
/* harmony import */ var _timeout_timeout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeout/timeout.component */ "./src/app/portal/landing/timeout/timeout.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/portal/landing/welcome/welcome.component.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _service_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/language.service */ "./src/app/portal/service/language.service.ts");













var LandingModule = /** @class */ (function () {
    function LandingModule(_translateService, _languageService) {
        this._translateService = _translateService;
        this._languageService = _languageService;
        this._languageService.register(this._translateService);
    }
    LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
    LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__["TranslocoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"])); }, providers: [
            _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"],
            _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]
        ], imports: [[
                _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
            ]] });
    return LandingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
        _step1_step1_component__WEBPACK_IMPORTED_MODULE_6__["Step1Component"],
        _step2_step2_component__WEBPACK_IMPORTED_MODULE_7__["Step2Component"],
        _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceComponent"],
        _timeout_timeout_component__WEBPACK_IMPORTED_MODULE_8__["TimeoutComponent"]], imports: [_common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                    _step1_step1_component__WEBPACK_IMPORTED_MODULE_6__["Step1Component"],
                    _step2_step2_component__WEBPACK_IMPORTED_MODULE_7__["Step2Component"],
                    _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceComponent"],
                    _timeout_timeout_component__WEBPACK_IMPORTED_MODULE_8__["TimeoutComponent"],
                ],
                imports: [
                    _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
                ],
                providers: [
                    _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"],
                    _route_guard_direct_access_guard__WEBPACK_IMPORTED_MODULE_2__["DirectAccessGuard"]
                ]
            }]
    }], function () { return [{ type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__["TranslocoService"] }, { type: _service_language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/landing/maintenance/maintenance.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/portal/landing/maintenance/maintenance.component.ts ***!
  \*********************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");





function MaintenanceComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r85("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r85("systemSubheader"));
} }
function MaintenanceComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MaintenanceComponent_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "System Maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Online Appoinment Booking is currently suspended for system maintenance. Please try again later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
} }
var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(_portalService) {
        this._portalService = _portalService;
        this.scopeName = 'portal.Landing.Maintenance';
        this._portalService.setPageTitle(this.scopeName + '.title');
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_1__["PortalService"])); };
    MaintenanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MaintenanceComponent_ng_container_0_Template, 9, 2, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_3__["PortalHeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9sYW5kaW5nL21haW50ZW5hbmNlL21haW50ZW5hbmNlLmNvbXBvbmVudC5zYXNzIn0= */"] });
    return MaintenanceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintenanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maintenance',
                templateUrl: './maintenance.component.html',
                styleUrls: ['./maintenance.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_1__["PortalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/landing/step1/step1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/portal/landing/step1/step1.component.ts ***!
  \*********************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/splash-screen/splash-screen.component */ "./src/app/portal/common/splash-screen/splash-screen.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");












function Step1Component_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r89("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r89("systemSubheader"));
} }
var _c0 = function (a0) { return { numOfWorkingDay: a0 }; };
function Step1Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Step1Component_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "command-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "splash-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r87 = ctx.$implicit;
    var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.step1Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.step1Notice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.typeOfService"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", t1_r87("lbl.booking"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.registration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.sumission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.cancellationAppointment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUser"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUserNote1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUserNote2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUserNote3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUserNote4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUserNote5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.serviceUserNote6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.appointmentBooking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.appointmentBookingNote1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx_r86.data.numOfWorkingDay)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.appointmentBookingNote2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.appointmentBookingNote3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r87("lbl.appointmentBookingNote4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r86.commandBarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r86.splashScreenConfig.position)("status", ctx_r86.splashScreenConfig.status)("visibility", ctx_r86.splashScreenConfig.visibility)("message", ctx_r86.splashScreenConfig.message);
} }
var Step1Component = /** @class */ (function () {
    function Step1Component(_router, _portalService, _translate, _scheduleService) {
        var _this = this;
        this._router = _router;
        this._portalService = _portalService;
        this._translate = _translate;
        this._scheduleService = _scheduleService;
        this.scopeName = 'portal.Landing.Step1';
        this.commandBarButtons = [];
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.data = {
            numOfWorkingDay: 0
        };
        this.splashScreenConfig = {
            position: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__["SplashScreenPosition"].Fixed,
            message: {
                scopeName: this.scopeName,
                label: 'loading'
            },
            visibility: true,
            status: _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__["SplashScreenStatus"].Loading
        };
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.acceptTerms'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.back'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onBackButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    Step1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._scheduleService.getBookingPeriod().subscribe({
            next: function (bookingPeriod) {
                _this.data.numOfWorkingDay = bookingPeriod;
                _this.splashScreenConfig.visibility = false;
            },
            error: function (errorCode) {
                _this.splashScreenConfig.status = _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__["SplashScreenStatus"].Error;
                _this.splashScreenConfig.message = {
                    scopeName: _this.scopeName,
                    label: 'lbl.systemBusy',
                    params: { errorCode: errorCode }
                };
            }
        });
    };
    Step1Component.prototype.onBackButtonClick = function () {
        this._router.navigate(['/landing/welcome']);
    };
    Step1Component.prototype.onContinueButtonClick = function () {
        this._router.navigate(['/landing/step2']);
    };
    Step1Component.ɵfac = function Step1Component_Factory(t) { return new (t || Step1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_5__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"])); };
    Step1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step1Component, selectors: [["app-step1"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [1, "statement"], [1, "align-left"], ["type", "disc"], [3, "buttons"], [3, "position", "status", "visibility", "message"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"]], template: function Step1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step1Component_ng_container_0_Template, 51, 28, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_8__["PortalHeaderComponent"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarComponent"], _common_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__["SplashScreenComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9sYW5kaW5nL3N0ZXAxL3N0ZXAxLmNvbXBvbmVudC5zYXNzIn0= */"] });
    return Step1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step1',
                templateUrl: './step1.component.html',
                styleUrls: ['./step1.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _service_portal_service__WEBPACK_IMPORTED_MODULE_5__["PortalService"] }, { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoService"] }, { type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/landing/step2/step2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/portal/landing/step2/step2.component.ts ***!
  \*********************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");










function Step2Component_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r99("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r99("systemSubheader"));
} }
function Step2Component_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step2Component_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step2Component_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step2Component_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step2Component_ng_container_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step2Component_ng_container_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Step2Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Step2Component_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step2Component_ng_container_0_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.action("registration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Step2Component_ng_container_0_div_8_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Step2Component_ng_container_0_div_9_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step2Component_ng_container_0_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.action("submission"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Step2Component_ng_container_0_div_13_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Step2Component_ng_container_0_div_14_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step2Component_ng_container_0_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.action("appointment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Step2Component_ng_container_0_div_18_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Step2Component_ng_container_0_div_19_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "command-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r91 = ctx.$implicit;
    var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r91("lbl.step2Title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r90.selectedAction === "registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.selectedAction === "registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.selectedAction != "registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r91("lbl.registration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r90.selectedAction === "submission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.selectedAction === "submission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.selectedAction != "submission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r91("lbl.submission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r90.selectedAction === "appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.selectedAction === "appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.selectedAction != "appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r91("lbl.appointment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r90.commandBarButtons);
} }
var Step2Component = /** @class */ (function () {
    function Step2Component(_portalService, _router) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this.scopeName = 'portal.Landing.Step2';
        this.selectedAction = '';
        this.commandBarButtons = [];
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.back'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onBackButtonClick();
                    observer.next();
                });
                return observable;
            }
        }, {
            content: {
                scopeName: this.scopeName,
                label: 'btn.abort'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Normal,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onAbortButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    Step2Component.prototype.action = function (selectedAction) {
        this.selectedAction = selectedAction;
    };
    Step2Component.prototype.ngOnInit = function () { };
    Step2Component.prototype.onAbortButtonClick = function () {
        this._router.navigate(['/landing/welcome']);
    };
    Step2Component.prototype.onBackButtonClick = function () {
        this._router.navigate(['/landing/step1']);
    };
    Step2Component.prototype.onContinueButtonClick = function () {
        this._router.navigate(['/' + this.selectedAction + '/']);
    };
    Step2Component.ɵfac = function Step2Component_Factory(t) { return new (t || Step2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    Step2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step2Component, selectors: [["app-step2"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [1, "container-fluid", "content-box", "action-selector", 3, "click"], ["class", "d-table-cell", 4, "ngIf"], ["class", "d-table-cell unselected", 4, "ngIf"], [1, "d-table-cell", "pl-3"], [3, "buttons"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"], [1, "d-table-cell"], [1, "fas", "fa-check-circle"], [1, "d-table-cell", "unselected"], [1, "far", "fa-check-circle"]], template: function Step2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step2Component_ng_container_0_Template, 23, 19, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_6__["PortalHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarComponent"]], styles: ["div.action-selector[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 5px;\n}\ndiv.action-selector[_ngcontent-%COMP%]:hover {\n  color: #d06c0a !important;\n  border: 1px solid #d06c0a;\n}\ndiv.action-selector[_ngcontent-%COMP%]:hover   .unselected[_ngcontent-%COMP%] {\n  color: #d06c0a;\n}\ndiv.action-selector[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 20px;\n}\ndiv.action-selector.selected[_ngcontent-%COMP%] {\n  color: #1167E9 !important;\n  border: 1px solid #1167E9;\n}\ndiv.action-selector[_ngcontent-%COMP%]   .unselected[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2xhbmRpbmcvc3RlcDIvQzpcXFVzZXJzXFxsa2FjaFxcRG9jdW1lbnRzXFxHaXRSZXBvXFxicmJzLXBvcnRhbC11aVxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29tbW9uXFxfYnJicy52YXJpYWJsZS5zYXNzIiwic3JjL2FwcC9wb3J0YWwvbGFuZGluZy9zdGVwMi9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxccG9ydGFsXFxsYW5kaW5nXFxzdGVwMlxcc3RlcDIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9sYW5kaW5nL3N0ZXAyL3N0ZXAyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUFBO0FDR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREhJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0tSO0FESlE7RUFDSSxjRDhDSztBRXhDakI7QURMSTtFQUNJLG1CQUFBO0FDT1I7QUROSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUNRUjtBRFBJO0VBQ0ksV0FBQTtBQ1NSIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL2xhbmRpbmcvc3RlcDIvc3RlcDIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb246IDEuMC4wXHJcbiAqXHJcbiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcclxuICpcclxuICovXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDc1cHhcclxuJGNvbW1hbmRiYXItaGVpZ2h0OiA1MnB4XHJcblxyXG4kZm9udC1mYW1pbHk6ICdBcmlhbCcsICdNaWNyb3NvZnQgSmhlbmdoZWknLCBQbWluZ2xpdSwgJ1NlZ29lIFVJJywgVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG4kZm9udC1zaXplLW5vcm1hbDogMTVweFxyXG4kZm9udC1zaXplLW1vYmlsZTogMTRweFxyXG5cclxuJHRhYmxlLWhlYWRlci1jb2xvcjogIzcwNzA3MFxyXG4kdGFibGUtcm93LWNvbG9yOiAjZGRkZGRkXHJcblxyXG4kY29sb3ItZGFya2VyOiAjYWFhYWFhXHJcbiRjb2xvci1kYXJrZXItYWx0OiAjYzI1NTAyXHJcbiRjb2xvci1kYXJrZXItZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWRhcms6ICMwZTZmYzlcclxuJGNvbG9yLWRhcmstYWx0OiAjMzc2MDkyXHJcbiRjb2xvci1kYXJrLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1ub3JtYWw6ICM3Njc2NzZcclxuJGNvbG9yLW5vcm1hbC1hbHQ6ICM1NDU0NTRcclxuJGNvbG9yLW5vcm1hbC1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItbGlnaHQ6ICNmMGYwZjBcclxuJGNvbG9yLWxpZ2h0LWFsdDogI2RlZGVkZVxyXG4kY29sb3ItbGlnaHQtZm9yZTogIzAwMDAwMFxyXG5cclxuJGNvbG9yLWxpZ2h0ZXI6ICNmOGY4ZjhcclxuJGNvbG9yLWxpZ2h0ZXItYWx0OiAjZTZlNmU2XHJcbiRjb2xvci1saWdodGVyLWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1pbmZvOiAjMzc2MDkyXHJcbiRjb2xvci1pbmZvLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItaW5mby1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItZXJyb3I6ICNjNjAwMDBcclxuJGNvbG9yLWVycm9yLWFsdDogI2I0MDAwMFxyXG4kY29sb3ItZXJyb3ItZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICMyNzg0MDBcclxuJGNvbG9yLXN1Y2Nlc3MtYWx0OiAjMTU3MjAwXHJcbiRjb2xvci1zdWNjZXNzLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci13YXJuaW5nOiAjZmZlMTFmXHJcbiRjb2xvci13YXJuaW5nLWFsdDogI2VkY2YwZFxyXG4kY29sb3Itd2FybmluZy1mb3JlOiAjNjA1MzAwXHJcblxyXG4kY29sb3ItcG9zaXRpdmU6ICNkMDZjMGFcclxuJGNvbG9yLXBvc2l0aXZlLWFsdDogI2IwNDMwMFxyXG4kY29sb3ItcG9zaXRpdmUtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWNvbnRlbnQ6ICMwMDAwMDBcclxuJGNvbG9yLWNvbnRlbnQtYWx0OiAjMDAwMDAwXHJcbiRjb2xvci1saW5rOiAjMGU2ZmM5XHJcblxyXG4kY29sb3ItZm9ybS1jb250cm9sLWJvcmRlcjogI2NjY2NjY1xyXG4iLCJcclxuQGltcG9ydCBicmJzLnZhcmlhYmxlXHJcblxyXG5kaXYuYWN0aW9uLXNlbGVjdG9yXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIG1hcmdpbi1ib3R0b206IDVweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcG9zaXRpdmUgIWltcG9ydGFudFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wb3NpdGl2ZVxyXG4gICAgICAgIC51bnNlbGVjdGVkXHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcG9zaXRpdmVcclxuICAgICY6bGFzdC1vZi10eXBlXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG4gICAgJi5zZWxlY3RlZFxyXG4gICAgICAgIGNvbG9yOiAjMTE2N0U5ICFpbXBvcnRhbnRcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTE2N0U5XHJcbiAgICAudW5zZWxlY3RlZFxyXG4gICAgICAgIGNvbG9yOiAjY2NjIiwiLyogKiBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW1cbiAqICogVmVyc2lvbjogMS4wLjBcbiAqICpcbiAqICogVGhpcyBzdHlsZXNoZWV0IGNvbnRhaW5zIHR5cG9ncmFwaHkgZGVmaW5pdGlvbiBmb3IgQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtIFBvcnRhbFxuICogKlxuICogKi9cbmRpdi5hY3Rpb24tc2VsZWN0b3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmRpdi5hY3Rpb24tc2VsZWN0b3I6aG92ZXIge1xuICBjb2xvcjogI2QwNmMwYSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDA2YzBhO1xufVxuZGl2LmFjdGlvbi1zZWxlY3Rvcjpob3ZlciAudW5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZDA2YzBhO1xufVxuZGl2LmFjdGlvbi1zZWxlY3RvcjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuZGl2LmFjdGlvbi1zZWxlY3Rvci5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMTE2N0U5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTY3RTk7XG59XG5kaXYuYWN0aW9uLXNlbGVjdG9yIC51bnNlbGVjdGVkIHtcbiAgY29sb3I6ICNjY2M7XG59Il19 */"] });
    return Step2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step2',
                templateUrl: './step2.component.html',
                styleUrls: ['./step2.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/landing/timeout/timeout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/portal/landing/timeout/timeout.component.ts ***!
  \*************************************************************/
/*! exports provided: TimeoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutComponent", function() { return TimeoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");









function TimeoutComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r107("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r107("systemSubheader"));
} }
function TimeoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeoutComponent_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "command-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r105 = ctx.$implicit;
    var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r105("lbl.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r105("lbl.msg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r104.commandBarButtons);
} }
var TimeoutComponent = /** @class */ (function () {
    function TimeoutComponent(_portalService, _router) {
        var _this = this;
        this._portalService = _portalService;
        this._router = _router;
        this.commandBarButtons = [];
        this.scopeName = 'portal.Landing.Timeout';
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.exit'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onExitButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    TimeoutComponent.prototype.ngOnInit = function () {
    };
    TimeoutComponent.prototype.onExitButtonClick = function () {
        this._router.navigate(['/landing/welcome']);
    };
    TimeoutComponent.ɵfac = function TimeoutComponent_Factory(t) { return new (t || TimeoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    TimeoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeoutComponent, selectors: [["app-timeout"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [3, "buttons"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"]], template: function TimeoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimeoutComponent_ng_container_0_Template, 10, 5, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_6__["PortalHeaderComponent"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9sYW5kaW5nL3RpbWVvdXQvdGltZW91dC5jb21wb25lbnQuc2FzcyJ9 */"] });
    return TimeoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeout',
                templateUrl: './timeout.component.html',
                styleUrls: ['./timeout.component.sass']
            }]
    }], function () { return [{ type: _service_portal_service__WEBPACK_IMPORTED_MODULE_3__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/landing/welcome/welcome.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/portal/landing/welcome/welcome.component.ts ***!
  \*************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _common_portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/portal-footer/portal-footer.component */ "./src/app/portal/common/portal-footer/portal-footer.component.ts");











function WelcomeComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r111("systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r111("systemSubheader"));
} }
function WelcomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "portal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WelcomeComponent_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is an announcement published via Internal Function (to be available in the future). This is an announcement published via Internal Function (to be available in the future). This is an announcement published via Internal Function (to be available in the future). This is an announcement published via Internal Function (to be available in the future). This is an announcement published via Internal Function (to be available in the future).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "command-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "portal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r109 = ctx.$implicit;
    var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common")("translocoRead", "portal.Common");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.systemAnnouncement"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.timeRequired"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step2-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.booking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step3Booking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step4Booking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step5Booking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step6Booking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step7Booking"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.enquiryCancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step3Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step4Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r109("lbl.step5Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx_r108.commandBarButtons);
} }
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(_cookieService, _portalService, _router) {
        var _this = this;
        this._cookieService = _cookieService;
        this._portalService = _portalService;
        this._router = _router;
        this.commandBarButtons = [];
        this.scopeName = 'portal.Landing.Welcome';
        this.testDate = (new Date()).getTime();
        this._portalService.setPageTitle(this.scopeName + '.title');
        this.commandBarButtons.push({
            content: {
                scopeName: this.scopeName,
                label: 'btn.continue'
            },
            style: _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarButtonStyle"].Positive,
            hidden: false,
            disabled: false,
            action: function () {
                var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                    _this.onContinueButtonClick();
                    observer.next();
                });
                return observable;
            }
        });
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getLanguage();
    };
    WelcomeComponent.prototype.getLanguage = function () {
        var lang = this._cookieService.get('preferedLanguage');
        if (!lang || lang === 'en_gb') {
            return 'en';
        }
        else {
            return 'zh';
        }
    };
    WelcomeComponent.prototype.onContinueButtonClick = function () {
        this._router.navigate(['/landing/step1']);
    };
    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "container", "main-content"], [1, "container-fluid", "content-box"], [3, "buttons"], [1, "d-none", "d-sm-block"], [1, "d-sm-block", "d-md-inline"], [1, "subheader", "d-sm-block", "d-md-inline"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WelcomeComponent_ng_container_0_Template, 58, 27, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx.scopeName)("translocoRead", ctx.scopeName);
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoDirective"], _common_portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_7__["PortalHeaderComponent"], _common_command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_2__["CommandBarComponent"], _common_portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_8__["PortalFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9sYW5kaW5nL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2FzcyJ9 */"] });
    return WelcomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.sass'],
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }, { type: _service_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=portal-landing-landing-module.js.map