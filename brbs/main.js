(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [
    {
        path: 'landing',
        loadChildren: function () { return Promise.all(/*! import() | portal-landing-landing-module */[__webpack_require__.e("common"), __webpack_require__.e("portal-landing-landing-module")]).then(__webpack_require__.bind(null, /*! ./portal/landing/landing.module */ "./src/app/portal/landing/landing.module.ts")).then(function (m) { return m.LandingModule; }); }
    },
    {
        path: 'registration',
        loadChildren: function () { return Promise.all(/*! import() | portal-registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("portal-registration-registration-module")]).then(__webpack_require__.bind(null, /*! ./portal/registration/registration.module */ "./src/app/portal/registration/registration.module.ts")).then(function (m) { return m.RegistrationModule; }); }
    },
    {
        path: 'appointment',
        loadChildren: function () { return __webpack_require__.e(/*! import() | portal-appointment-appointment-module */ "portal-appointment-appointment-module").then(__webpack_require__.bind(null, /*! ./portal/appointment/appointment.module */ "./src/app/portal/appointment/appointment.module.ts")).then(function (m) { return m.AppointmentModule; }); }
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _portal_service_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal/service/language.service */ "./src/app/portal/service/language.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_languageService) {
        this._languageService = _languageService;
        this.title = 'brbs-portal';
        this._languageService.initialize();
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_portal_service_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _portal_service_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: configFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm5/ng-idle-core.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm5/ng-idle-keepalive.js");
/* harmony import */ var _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-config/core */ "./node_modules/@ngx-config/core/__ivy_ngcc__/fesm5/ngx-config-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm5/ngx-webstorage-service.js");
/* harmony import */ var src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/portal/service/coalescing-component-factory-resolver.service */ "./src/app/portal/service/coalescing-component-factory-resolver.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portal_heartbeat_heartbeat_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portal/heartbeat/heartbeat.module */ "./src/app/portal/heartbeat/heartbeat.module.ts");
/* harmony import */ var _portal_interceptor_backend_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portal/interceptor/backend.interceptor */ "./src/app/portal/interceptor/backend.interceptor.ts");
/* harmony import */ var _portal_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portal/interceptor/jwt.interceptor */ "./src/app/portal/interceptor/jwt.interceptor.ts");
/* harmony import */ var _portal_service_language_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portal/service/language.service */ "./src/app/portal/service/language.service.ts");
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transloco-root.module */ "./src/app/transloco-root.module.ts");























function configFactory() {
    return new _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigStaticLoader"]({
        "system": {
            "hostApi": "../brbs_api"
        }
    });
}
var AppModule = /** @class */ (function () {
    function AppModule(coalescingResolver) {
        coalescingResolver.init();
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CoalescingComponentFactoryResolver"])); }, providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _portal_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _portal_interceptor_backend_interceptor__WEBPACK_IMPORTED_MODULE_13__["BackendHttpInterceptor"], multi: true },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
            src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CoalescingComponentFactoryResolver"],
            _portal_service_language_service__WEBPACK_IMPORTED_MODULE_15__["LanguageService"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceModule"],
                _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"].forRoot({
                    provide: _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigLoader"],
                    useFactory: (configFactory)
                }),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__["NgIdleKeepaliveModule"].forRoot(),
                _portal_heartbeat_heartbeat_module__WEBPACK_IMPORTED_MODULE_12__["HeartbeatModule"].forRoot({
                    idleTimeout: 60,
                    timeoutPeriod: 60,
                    interrupts: _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTERRUPTSOURCES"],
                    keepaliveInterval: 10
                }),
                _transloco_root_module__WEBPACK_IMPORTED_MODULE_16__["TranslocoRootModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceModule"], _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__["NgIdleKeepaliveModule"], _portal_heartbeat_heartbeat_module__WEBPACK_IMPORTED_MODULE_12__["HeartbeatModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_16__["TranslocoRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceModule"],
                    _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"].forRoot({
                        provide: _ngx_config_core__WEBPACK_IMPORTED_MODULE_5__["ConfigLoader"],
                        useFactory: (configFactory)
                    }),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                    _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__["NgIdleKeepaliveModule"].forRoot(),
                    _portal_heartbeat_heartbeat_module__WEBPACK_IMPORTED_MODULE_12__["HeartbeatModule"].forRoot({
                        idleTimeout: 60,
                        timeoutPeriod: 60,
                        interrupts: _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTERRUPTSOURCES"],
                        keepaliveInterval: 10
                    }),
                    _transloco_root_module__WEBPACK_IMPORTED_MODULE_16__["TranslocoRootModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _portal_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _portal_interceptor_backend_interceptor__WEBPACK_IMPORTED_MODULE_13__["BackendHttpInterceptor"], multi: true },
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
                    src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CoalescingComponentFactoryResolver"],
                    _portal_service_language_service__WEBPACK_IMPORTED_MODULE_15__["LanguageService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], function () { return [{ type: src_app_portal_service_coalescing_component_factory_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CoalescingComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/common/alert-box/alert-box.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portal/common/alert-box/alert-box.component.ts ***!
  \****************************************************************/
/*! exports provided: AlertBoxStyle, AlertBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBoxStyle", function() { return AlertBoxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBoxComponent", function() { return AlertBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function AlertBoxComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t2_r4 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t2_r4(ctx_r2.message.label, ctx_r2.message.params));
} }
function AlertBoxComponent_ng_container_0_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertBoxComponent_ng_container_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var button_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onActionButtonClick(button_r5.action); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r5 = ctx.$implicit;
    var t1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r1("btn." + button_r5.label));
} }
var _c0 = function (a0, a1, a2) { return { "modal-header-info": a0, "modal-header-warning": a1, "modal-header-error": a2 }; };
function AlertBoxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlertBoxComponent_ng_container_0_ng_container_3_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlertBoxComponent_ng_container_0_button_5_Template, 2, 1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx_r0.style === ctx_r0.AlertBoxStyle.Informative, ctx_r0.style === ctx_r0.AlertBoxStyle.Warning, ctx_r0.style === ctx_r0.AlertBoxStyle.Error));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx_r0.message.scopeName)("translocoRead", ctx_r0.message.scopeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.buttons);
} }
var AlertBoxStyle;
(function (AlertBoxStyle) {
    AlertBoxStyle[AlertBoxStyle["Informative"] = 0] = "Informative";
    AlertBoxStyle[AlertBoxStyle["Warning"] = 1] = "Warning";
    AlertBoxStyle[AlertBoxStyle["Error"] = 2] = "Error";
})(AlertBoxStyle || (AlertBoxStyle = {}));
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(bsModalRef, _translate) {
        this.bsModalRef = bsModalRef;
        this._translate = _translate;
        this.AlertBoxStyle = AlertBoxStyle;
    }
    AlertBoxComponent.prototype.ngOnInit = function () { };
    AlertBoxComponent.prototype.onActionButtonClick = function (action) {
        action && action();
        this.bsModalRef.hide();
    };
    AlertBoxComponent.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"])); };
    AlertBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertBoxComponent, selectors: [["modal-content"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "modal-header", 3, "ngClass"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "class", "btn btn-normal", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-normal", 3, "click"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertBoxComponent_ng_container_0_Template, 6, 8, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common.AlertBox")("translocoRead", "portal.Common.AlertBox");
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".modal-header[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.modal-header-info[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #376092;\n}\n.modal-header-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.modal-header-error[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #c60000;\n}\n.modal-header-error[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.modal-header-warning[_ngcontent-%COMP%] {\n  color: #605300;\n  background-color: #ffe11f;\n}\n.modal-header-warning[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #605300;\n}\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9hbGVydC1ib3gvQzpcXFVzZXJzXFxsa2FjaFxcRG9jdW1lbnRzXFxHaXRSZXBvXFxicmJzLXBvcnRhbC11aVxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29tbW9uXFxfYnJicy52YXJpYWJsZS5zYXNzIiwic3JjL2FwcC9wb3J0YWwvY29tbW9uL2FsZXJ0LWJveC9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxccG9ydGFsXFxjb21tb25cXGFsZXJ0LWJveFxcYWxlcnQtYm94LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wb3J0YWwvY29tbW9uL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBQUE7QUNHQTtFQUNJLGtCQUFBO0FDSUo7QURIQTtFQUNJLGNEb0NjO0VDbkNkLHlCRGlDUztBRTNCYjtBRExJO0VBQ0ksY0RpQ1U7QUUxQmxCO0FETkE7RUFDSSxjRG1DZTtFQ2xDZix5QkRnQ1U7QUV2QmQ7QURSSTtFQUNJLGNEZ0NXO0FFdEJuQjtBRFRBO0VBQ0ksY0RzQ2lCO0VDckNqQix5QkRtQ1k7QUV2QmhCO0FEWEk7RUFDSSxjRG1DYTtBRXRCckI7QURYQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ2NKO0FEWkE7RUFDSSxrQkFBQTtBQ2VKIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL2NvbW1vbi9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uOiAxLjAuMFxyXG4gKlxyXG4gKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXHJcbiAqXHJcbiAqL1xyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6ICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA3NXB4XHJcbiRjb21tYW5kYmFyLWhlaWdodDogNTJweFxyXG5cclxuJGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnTWljcm9zb2Z0IEpoZW5naGVpJywgUG1pbmdsaXUsICdTZWdvZSBVSScsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWZcclxuJGZvbnQtc2l6ZS1ub3JtYWw6IDE1cHhcclxuJGZvbnQtc2l6ZS1tb2JpbGU6IDE0cHhcclxuXHJcbiR0YWJsZS1oZWFkZXItY29sb3I6ICM3MDcwNzBcclxuJHRhYmxlLXJvdy1jb2xvcjogI2RkZGRkZFxyXG5cclxuJGNvbG9yLWRhcmtlcjogI2FhYWFhYVxyXG4kY29sb3ItZGFya2VyLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItZGFya2VyLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1kYXJrOiAjMGU2ZmM5XHJcbiRjb2xvci1kYXJrLWFsdDogIzM3NjA5MlxyXG4kY29sb3ItZGFyay1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itbm9ybWFsOiAjNzY3Njc2XHJcbiRjb2xvci1ub3JtYWwtYWx0OiAjNTQ1NDU0XHJcbiRjb2xvci1ub3JtYWwtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWxpZ2h0OiAjZjBmMGYwXHJcbiRjb2xvci1saWdodC1hbHQ6ICNkZWRlZGVcclxuJGNvbG9yLWxpZ2h0LWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1saWdodGVyOiAjZjhmOGY4XHJcbiRjb2xvci1saWdodGVyLWFsdDogI2U2ZTZlNlxyXG4kY29sb3ItbGlnaHRlci1mb3JlOiAjMDAwMDAwXHJcblxyXG4kY29sb3ItaW5mbzogIzM3NjA5MlxyXG4kY29sb3ItaW5mby1hbHQ6ICNjMjU1MDJcclxuJGNvbG9yLWluZm8tZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWVycm9yOiAjYzYwMDAwXHJcbiRjb2xvci1lcnJvci1hbHQ6ICNiNDAwMDBcclxuJGNvbG9yLWVycm9yLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1zdWNjZXNzOiAjMjc4NDAwXHJcbiRjb2xvci1zdWNjZXNzLWFsdDogIzE1NzIwMFxyXG4kY29sb3Itc3VjY2Vzcy1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itd2FybmluZzogI2ZmZTExZlxyXG4kY29sb3Itd2FybmluZy1hbHQ6ICNlZGNmMGRcclxuJGNvbG9yLXdhcm5pbmctZm9yZTogIzYwNTMwMFxyXG5cclxuJGNvbG9yLXBvc2l0aXZlOiAjZDA2YzBhXHJcbiRjb2xvci1wb3NpdGl2ZS1hbHQ6ICNiMDQzMDBcclxuJGNvbG9yLXBvc2l0aXZlLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1jb250ZW50OiAjMDAwMDAwXHJcbiRjb2xvci1jb250ZW50LWFsdDogIzAwMDAwMFxyXG4kY29sb3ItbGluazogIzBlNmZjOVxyXG5cclxuJGNvbG9yLWZvcm0tY29udHJvbC1ib3JkZXI6ICNjY2NjY2NcclxuIiwiXHJcbkBpbXBvcnQgYnJicy52YXJpYWJsZVxyXG5cclxuLm1vZGFsLWhlYWRlclxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4XHJcbi5tb2RhbC1oZWFkZXItaW5mb1xyXG4gICAgY29sb3I6ICRjb2xvci1pbmZvLWZvcmVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pbmZvXHJcbiAgICBoNFxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItaW5mby1mb3JlXHJcbi5tb2RhbC1oZWFkZXItZXJyb3JcclxuICAgIGNvbG9yOiAkY29sb3ItZXJyb3ItZm9yZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWVycm9yXHJcbiAgICBoNFxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZXJyb3ItZm9yZVxyXG4ubW9kYWwtaGVhZGVyLXdhcm5pbmdcclxuICAgIGNvbG9yOiAkY29sb3Itd2FybmluZy1mb3JlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2FybmluZ1xyXG4gICAgaDRcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXdhcm5pbmctZm9yZVxyXG5cclxuLm1vZGFsLWJvZHlcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgcGFkZGluZzogMTVweFxyXG5cclxuLm1vZGFsLWZvb3RlclxyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lXHJcbiIsIi8qICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXG4gKiAqIFZlcnNpb246IDEuMC4wXG4gKiAqXG4gKiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcbiAqICpcbiAqICovXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyLWluZm8ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NjA5Mjtcbn1cbi5tb2RhbC1oZWFkZXItaW5mbyBoNCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubW9kYWwtaGVhZGVyLWVycm9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjAwMDA7XG59XG4ubW9kYWwtaGVhZGVyLWVycm9yIGg0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tb2RhbC1oZWFkZXItd2FybmluZyB7XG4gIGNvbG9yOiAjNjA1MzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMTFmO1xufVxuLm1vZGFsLWhlYWRlci13YXJuaW5nIGg0IHtcbiAgY29sb3I6ICM2MDUzMDA7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufSJdfQ== */"] });
    return AlertBoxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modal-content',
                templateUrl: './alert-box.component.html',
                styleUrls: ['./alert-box.component.sass']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }, { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/common/calendar/calendar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/common/calendar/calendar.component.ts ***!
  \**************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_BookingStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/BookingStatus */ "./src/app/portal/model/BookingStatus.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");








function CalendarComponent_ng_container_0_div_31_ng_container_8_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 14);
} }
function CalendarComponent_ng_container_0_div_31_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_container_0_div_31_ng_container_8_ng_container_1_div_1_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var date_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.getArray(ctx_r15.toDate(date_r14.appointmentDate).getDay()));
} }
function CalendarComponent_ng_container_0_div_31_ng_container_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("lbl.full"));
} }
var _c0 = function (a0, a1, a2, a3, a4) { return { "available": a0, "full": a1, "selected": a2, "holiday": a3, "working": a4 }; };
function CalendarComponent_ng_container_0_div_31_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_container_0_div_31_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_ng_container_0_div_31_ng_container_8_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); var date_r14 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.onAppointmentDateSelected(date_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarComponent_ng_container_0_div_31_ng_container_8_span_4_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var date_r14 = ctx.$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.toDate(date_r14.appointmentDate).getDate() === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c0, date_r14.status === ctx_r13.BookingStatus.Available, date_r14.status === ctx_r13.BookingStatus.Full, date_r14.status === ctx_r13.BookingStatus.Selected, date_r14.status === ctx_r13.BookingStatus.Holiday, date_r14.status === ctx_r13.BookingStatus.Unavailable));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.toDate(date_r14.appointmentDate).getDate(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", date_r14.status === ctx_r13.BookingStatus.Full);
} }
function CalendarComponent_ng_container_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CalendarComponent_ng_container_0_div_31_ng_container_8_Template, 5, 10, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var month_r12 = ctx.$implicit;
    var t1_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("month." + month_r12.month));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](month_r12.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", month_r12.dates);
} }
function CalendarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CalendarComponent_ng_container_0_div_31_Template, 9, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r10 = ctx.$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.sun"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.mon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.tue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.wed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.thu"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.fri"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.sat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.sunday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.monday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.tuesday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.wednesday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.thursday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.friday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t1_r10("week.saturday"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.months);
} }
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(_scheduleService) {
        var _this = this;
        this._scheduleService = _scheduleService;
        this.scopeName = 'portal.common.calendar';
        this.BookingStatus = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"];
        this.months = [];
        this.loadSchedulesStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadSchedulesCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _scheduleService.schedulesUpdated.subscribe(function () {
            _this.refreshCalendar();
        });
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshCalendar();
        if (this._scheduleService.selectedSchedule && this._scheduleService.selectedTimeslot) {
            this.loadSchedulesStarted.emit();
            this._scheduleService.getSchedules({ appointmentDate: this._scheduleService.selectedSchedule.appointmentDate }).subscribe({
                next: function () {
                    _this.loadSchedulesCompleted.emit(_shared_constant__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE_SUCCESS"]);
                },
                error: function (errorCode) {
                    _this.loadSchedulesCompleted.emit(errorCode);
                }
            });
        }
    };
    CalendarComponent.prototype.onAppointmentDateSelected = function (selectedSchedule) {
        var _this = this;
        if (selectedSchedule.status === this.BookingStatus.Available) {
            this.loadSchedulesStarted.emit();
            this._scheduleService.getSchedules({ appointmentDate: selectedSchedule.appointmentDate }).subscribe({
                next: function () {
                    _this.loadSchedulesCompleted.emit(_shared_constant__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE_SUCCESS"]);
                },
                error: function (errorCode) {
                    _this.loadSchedulesCompleted.emit(errorCode);
                }
            });
        }
    };
    CalendarComponent.prototype.toDate = function (timestamp) {
        return new Date(timestamp);
    };
    CalendarComponent.prototype.getArray = function (size) {
        return Array(size).fill(0);
    };
    CalendarComponent.prototype.refreshCalendar = function () {
        var e_1, _a;
        this.months.length = 0;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._scheduleService.schedules), _c = _b.next(); !_c.done; _c = _b.next()) {
                var schedule = _c.value;
                var appointmentDate = new Date(schedule.appointmentDate);
                var month = appointmentDate.getMonth();
                if (this.months.length === 0) {
                    this.months.push({
                        month: month,
                        year: appointmentDate.getFullYear(),
                        dates: []
                    });
                }
                else if (this.months[this.months.length - 1].month != month) {
                    this.months.push({
                        month: month,
                        year: appointmentDate.getFullYear(),
                        dates: []
                    });
                }
                this.months[this.months.length - 1].dates.push(schedule);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"])); };
    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], outputs: { loadSchedulesStarted: "loadSchedulesStarted", loadSchedulesCompleted: "loadSchedulesCompleted" }, decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "calendar-container"], [1, "row", "calendar-header"], [1, "calendar-cell", "d-block", "d-lg-none"], [1, "calendar-cell", "d-none", "d-lg-block"], [4, "ngFor", "ngForOf"], [1, "row", "calendar-title"], [1, "calendar-cell"], [1, "ml-1"], [1, "row", "calendar-body"], [4, "ngIf"], [1, "calendar-cell", 3, "ngClass", "click"], ["class", "full-label", 4, "ngIf"], ["class", "calendar-cell hidden", 4, "ngFor", "ngForOf"], [1, "calendar-cell", "hidden"], [1, "full-label"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarComponent_ng_container_0_Template, 32, 15, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translocoScope", "portal.Common.Calendar")("translocoRead", "portal.Common.Calendar");
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".calendar-container[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  width: 100%;\n}\n@media screen and (min-width: 576px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n@media screen and (min-width: 992px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    width: 700px;\n  }\n}\n.calendar-cell[_ngcontent-%COMP%] {\n  background: #E7E7E9;\n  padding-left: 5px;\n  padding-right: 5px;\n  vertical-align: middle;\n  border: 2px solid #fff;\n  width: 14.2857142857%;\n}\n.calendar-header[_ngcontent-%COMP%]    > .calendar-cell[_ngcontent-%COMP%] {\n  background: #8A8A8A;\n  color: #fff;\n  height: 40px;\n  line-height: 40px;\n}\n.calendar-body[_ngcontent-%COMP%]    > .calendar-cell[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n}\n.calendar-title[_ngcontent-%COMP%]    > .calendar-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n.calendar-cell.hidden[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.calendar-cell.available[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n  background: #ffffff;\n  border: 1px solid #007bff;\n  height: 46px !important;\n  width: calc(100%/7 - 4px) !important;\n  margin: 2px;\n}\n.calendar-cell.available[_ngcontent-%COMP%]:hover {\n  color: #d06c0a;\n  border: 1px solid #d06c0a;\n}\n.calendar-cell.full[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #c83d3d;\n}\n.calendar-cell.holiday[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #aaaaaa;\n}\n.calendar-cell.working[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background: #fff;\n  color: #aaaaaa;\n  border: 1px solid #aaaaaa;\n  height: 46px !important;\n  width: calc(100%/7 - 4px) !important;\n  margin: 2px;\n}\n.calendar-cell.selected[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #d06c0a;\n  color: #fff;\n}\n.full-label[_ngcontent-%COMP%] {\n  float: right;\n}\n.calendar-offset-1[_ngcontent-%COMP%] {\n  margin-left: 14.2857142857% !important;\n}\n.calendar-offset-2[_ngcontent-%COMP%] {\n  margin-left: 28.5714285714% !important;\n}\n.calendar-offset-3[_ngcontent-%COMP%] {\n  margin-left: 42.8571428571% !important;\n}\n.calendar-offset-4[_ngcontent-%COMP%] {\n  margin-left: 57.1428571429% !important;\n}\n.calendar-offset-5[_ngcontent-%COMP%] {\n  margin-left: calc(100%/7 * 5) !important;\n}\n.calendar-offset-6[_ngcontent-%COMP%] {\n  margin-left: 85.7142857143% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9jYWxlbmRhci9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb25cXF9icmJzLnZhcmlhYmxlLnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9jb21tb24vY2FsZW5kYXIvQzpcXFVzZXJzXFxsa2FjaFxcRG9jdW1lbnRzXFxHaXRSZXBvXFxicmJzLXBvcnRhbC11aVxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHBvcnRhbFxcY29tbW9uXFxjYWxlbmRhclxcY2FsZW5kYXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9jb21tb24vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBQUE7QUNHQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0lGO0FESEU7RUFIRjtJQUlJLFdBQUE7RUNNRjtBQUNGO0FETkU7RUFMRjtJQU1JLFlBQUE7RUNTRjtBQUNGO0FEVEU7RUFQRjtJQVFJLFlBQUE7RUNZRjtBQUNGO0FEWEE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNjRjtBRGJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDZ0JGO0FEZkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNrQkY7QURqQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNvQkY7QURsQkU7RUFDRSw2QkFBQTtBQ3FCSjtBRHBCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDc0JKO0FEckJJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDdUJOO0FEdEJFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDd0JKO0FEdkJFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDeUJKO0FEeEJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDMEJKO0FEekJFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQzJCSjtBRDFCQTtFQUNFLFlBQUE7QUM2QkY7QUQzQkE7RUFDRSxzQ0FBQTtBQzhCRjtBRDdCQTtFQUNFLHNDQUFBO0FDZ0NGO0FEL0JBO0VBQ0Usc0NBQUE7QUNrQ0Y7QURqQ0E7RUFDRSxzQ0FBQTtBQ29DRjtBRG5DQTtFQUNFLHdDQUFBO0FDc0NGO0FEckNBO0VBQ0Usc0NBQUE7QUN3Q0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvY29tbW9uL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uOiAxLjAuMFxyXG4gKlxyXG4gKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXHJcbiAqXHJcbiAqL1xyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6ICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA3NXB4XHJcbiRjb21tYW5kYmFyLWhlaWdodDogNTJweFxyXG5cclxuJGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnTWljcm9zb2Z0IEpoZW5naGVpJywgUG1pbmdsaXUsICdTZWdvZSBVSScsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWZcclxuJGZvbnQtc2l6ZS1ub3JtYWw6IDE1cHhcclxuJGZvbnQtc2l6ZS1tb2JpbGU6IDE0cHhcclxuXHJcbiR0YWJsZS1oZWFkZXItY29sb3I6ICM3MDcwNzBcclxuJHRhYmxlLXJvdy1jb2xvcjogI2RkZGRkZFxyXG5cclxuJGNvbG9yLWRhcmtlcjogI2FhYWFhYVxyXG4kY29sb3ItZGFya2VyLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItZGFya2VyLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1kYXJrOiAjMGU2ZmM5XHJcbiRjb2xvci1kYXJrLWFsdDogIzM3NjA5MlxyXG4kY29sb3ItZGFyay1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itbm9ybWFsOiAjNzY3Njc2XHJcbiRjb2xvci1ub3JtYWwtYWx0OiAjNTQ1NDU0XHJcbiRjb2xvci1ub3JtYWwtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWxpZ2h0OiAjZjBmMGYwXHJcbiRjb2xvci1saWdodC1hbHQ6ICNkZWRlZGVcclxuJGNvbG9yLWxpZ2h0LWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1saWdodGVyOiAjZjhmOGY4XHJcbiRjb2xvci1saWdodGVyLWFsdDogI2U2ZTZlNlxyXG4kY29sb3ItbGlnaHRlci1mb3JlOiAjMDAwMDAwXHJcblxyXG4kY29sb3ItaW5mbzogIzM3NjA5MlxyXG4kY29sb3ItaW5mby1hbHQ6ICNjMjU1MDJcclxuJGNvbG9yLWluZm8tZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWVycm9yOiAjYzYwMDAwXHJcbiRjb2xvci1lcnJvci1hbHQ6ICNiNDAwMDBcclxuJGNvbG9yLWVycm9yLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1zdWNjZXNzOiAjMjc4NDAwXHJcbiRjb2xvci1zdWNjZXNzLWFsdDogIzE1NzIwMFxyXG4kY29sb3Itc3VjY2Vzcy1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itd2FybmluZzogI2ZmZTExZlxyXG4kY29sb3Itd2FybmluZy1hbHQ6ICNlZGNmMGRcclxuJGNvbG9yLXdhcm5pbmctZm9yZTogIzYwNTMwMFxyXG5cclxuJGNvbG9yLXBvc2l0aXZlOiAjZDA2YzBhXHJcbiRjb2xvci1wb3NpdGl2ZS1hbHQ6ICNiMDQzMDBcclxuJGNvbG9yLXBvc2l0aXZlLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1jb250ZW50OiAjMDAwMDAwXHJcbiRjb2xvci1jb250ZW50LWFsdDogIzAwMDAwMFxyXG4kY29sb3ItbGluazogIzBlNmZjOVxyXG5cclxuJGNvbG9yLWZvcm0tY29udHJvbC1ib3JkZXI6ICNjY2NjY2NcclxuIiwiXHJcbkBpbXBvcnQgYnJicy52YXJpYWJsZVxyXG5cclxuLmNhbGVuZGFyLWNvbnRhaW5lclxyXG4gIHBhZGRpbmc6IDBweCAxNXB4XHJcbiAgd2lkdGg6IDEwMCVcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcInNtXCIpKVxyXG4gICAgd2lkdGg6IDEwMCVcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcIm1kXCIpKVxyXG4gICAgd2lkdGg6IDUwMHB4XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSlcclxuICAgIHdpZHRoOiA3MDBweFxyXG5cclxuLmNhbGVuZGFyLWNlbGxcclxuICBiYWNrZ3JvdW5kOiAjRTdFN0U5XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHhcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHhcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZlxyXG4gIHdpZHRoOiBwZXJjZW50YWdlKDEvNylcclxuLmNhbGVuZGFyLWhlYWRlciA+IC5jYWxlbmRhci1jZWxsXHJcbiAgYmFja2dyb3VuZDogIzhBOEE4QVxyXG4gIGNvbG9yOiAjZmZmXHJcbiAgaGVpZ2h0OiA0MHB4XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHhcclxuLmNhbGVuZGFyLWJvZHkgPiAuY2FsZW5kYXItY2VsbFxyXG4gIGhlaWdodDogNTBweFxyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4XHJcbi5jYWxlbmRhci10aXRsZSA+IC5jYWxlbmRhci1jZWxsXHJcbiAgd2lkdGg6IDEwMCVcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICBoZWlnaHQ6IDQwcHhcclxuICBsaW5lLWhlaWdodDogNDBweFxyXG4uY2FsZW5kYXItY2VsbFxyXG4gICYuaGlkZGVuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG4gICYuYXZhaWxhYmxlXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGNvbG9yOiAjMDA3YmZmXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmXHJcbiAgICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwJS83IC0gNHB4KSAhaW1wb3J0YW50XHJcbiAgICBtYXJnaW46IDJweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICBjb2xvcjogI2QwNmMwYVxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDA2YzBhXHJcbiAgJi5mdWxsXHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcbiAgICBjb2xvcjogI2M4M2QzZFxyXG4gICYuaG9saWRheVxyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG4gICAgY29sb3I6ICNhYWFhYWFcclxuICAmLndvcmtpbmdcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWRcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGNvbG9yOiAjYWFhYWFhXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhXHJcbiAgICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwJS83IC0gNHB4KSAhaW1wb3J0YW50XHJcbiAgICBtYXJnaW46IDJweFxyXG4gICYuc2VsZWN0ZWRcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYmFja2dyb3VuZDogI2QwNmMwYVxyXG4gICAgY29sb3I6ICNmZmZcclxuLmZ1bGwtbGFiZWxcclxuICBmbG9hdDogcmlnaHRcclxuXHJcbi5jYWxlbmRhci1vZmZzZXQtMVxyXG4gIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKDEvNykgIWltcG9ydGFudFxyXG4uY2FsZW5kYXItb2Zmc2V0LTJcclxuICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgyLzcpICFpbXBvcnRhbnRcclxuLmNhbGVuZGFyLW9mZnNldC0zXHJcbiAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoMy83KSAhaW1wb3J0YW50XHJcbi5jYWxlbmRhci1vZmZzZXQtNFxyXG4gIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKDQvNykgIWltcG9ydGFudFxyXG4uY2FsZW5kYXItb2Zmc2V0LTVcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDAlLzcgKiA1KSAhaW1wb3J0YW50XHJcbi5jYWxlbmRhci1vZmZzZXQtNlxyXG4gIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKDYvNykgIWltcG9ydGFudCIsIi8qICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXG4gKiAqIFZlcnNpb246IDEuMC4wXG4gKiAqXG4gKiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcbiAqICpcbiAqICovXG4uY2FsZW5kYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYWxlbmRhci1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwMHB4O1xuICB9XG59XG5cbi5jYWxlbmRhci1jZWxsIHtcbiAgYmFja2dyb3VuZDogI0U3RTdFOTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgd2lkdGg6IDE0LjI4NTcxNDI4NTclO1xufVxuXG4uY2FsZW5kYXItaGVhZGVyID4gLmNhbGVuZGFyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjOEE4QThBO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmNhbGVuZGFyLWJvZHkgPiAuY2FsZW5kYXItY2VsbCB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5jYWxlbmRhci10aXRsZSA+IC5jYWxlbmRhci1jZWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmNhbGVuZGFyLWNlbGwuaGlkZGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY2FsZW5kYXItY2VsbC5hdmFpbGFibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJS83IC0gNHB4KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweDtcbn1cbi5jYWxlbmRhci1jZWxsLmF2YWlsYWJsZTpob3ZlciB7XG4gIGNvbG9yOiAjZDA2YzBhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDA2YzBhO1xufVxuLmNhbGVuZGFyLWNlbGwuZnVsbCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjYzgzZDNkO1xufVxuLmNhbGVuZGFyLWNlbGwuaG9saWRheSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjYWFhYWFhO1xufVxuLmNhbGVuZGFyLWNlbGwud29ya2luZyB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xuICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJS83IC0gNHB4KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweDtcbn1cbi5jYWxlbmRhci1jZWxsLnNlbGVjdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZDA2YzBhO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZ1bGwtbGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYWxlbmRhci1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiAxNC4yODU3MTQyODU3JSAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kYXItb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMjguNTcxNDI4NTcxNCUgIWltcG9ydGFudDtcbn1cblxuLmNhbGVuZGFyLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDQyLjg1NzE0Mjg1NzElICFpbXBvcnRhbnQ7XG59XG5cbi5jYWxlbmRhci1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiA1Ny4xNDI4NTcxNDI5JSAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kYXItb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogY2FsYygxMDAlLzcgKiA1KSAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kYXItb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogODUuNzE0Mjg1NzE0MyUgIWltcG9ydGFudDtcbn0iXX0= */"] });
    return CalendarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.sass']
            }]
    }], function () { return [{ type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"] }]; }, { loadSchedulesStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], loadSchedulesCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/common/captcha/captcha.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portal/common/captcha/captcha.component.ts ***!
  \************************************************************/
/*! exports provided: CaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function() { return CaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _service_alert_box_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/alert-box.service */ "./src/app/portal/service/alert-box.service.ts");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/portal.service */ "./src/app/portal/service/portal.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error-msg/error-msg.component */ "./src/app/portal/common/error-msg/error-msg.component.ts");












function CaptchaComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptchaComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.refreshCaptcha(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "error-msg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r25 = ctx.$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r24.captchaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r25("msg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r24.domSanitizer.bypassSecurityTrustUrl(ctx_r24.captcha.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopeName", ctx_r24.scopeName)("formField", ctx_r24.captchaForm.controls.captcha);
} }
var CaptchaComponent = /** @class */ (function () {
    function CaptchaComponent(_formBuilder, _portalService, _alertBoxService, _ngModuleRef, domSanitizer) {
        this._formBuilder = _formBuilder;
        this._portalService = _portalService;
        this._alertBoxService = _alertBoxService;
        this._ngModuleRef = _ngModuleRef;
        this.domSanitizer = domSanitizer;
        this.scopeName = 'portal.Common.Captcha';
        this.loadStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY7hw4QIABOQCcaizOWcAAAAASUVORK5CYII=';
    }
    CaptchaComponent.prototype.ngOnInit = function () {
        this.captchaForm = this._formBuilder.group({
            captcha: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxwebValidators"].required({ message: '0018' })]
        });
        this.captcha = {
            image: this._placeholderImage,
            sessionId: ''
        };
        this.refreshCaptcha();
    };
    CaptchaComponent.prototype.refreshCaptcha = function () {
        var _this = this;
        this.loadStarted.emit();
        this.captcha.image = this._placeholderImage;
        this._portalService.getCaptcha().subscribe({
            next: function (captcha) {
                _this.captcha = captcha;
                _this.loadCompleted.emit(true);
            },
            error: function (errorCode) {
                _this.loadCompleted.emit(false);
                _this._alertBoxService.show(_this._ngModuleRef.componentFactoryResolver, {
                    style: _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["AlertBoxStyle"].Error,
                    buttons: [{ label: 'close' }],
                    message: {
                        scopeName: _this.scopeName + '.ErrorMsg',
                        label: errorCode
                    }
                });
            }
        });
    };
    CaptchaComponent.ɵfac = function CaptchaComponent_Factory(t) { return new (t || CaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_alert_box_service__WEBPACK_IMPORTED_MODULE_3__["AlertBoxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
    CaptchaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptchaComponent, selectors: [["app-captcha"]], outputs: { loadStarted: "loadStarted", loadCompleted: "loadCompleted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_alert_box_service__WEBPACK_IMPORTED_MODULE_3__["AlertBoxService"]])], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "form-row", "my-1", 3, "formGroup"], [1, "col-md-5", "col-form-label"], [1, "col-md-7"], ["type", "text", "id", "captcha", "name", "captcha", "formControlName", "captcha", 1, "form-control", "input-captcha", "my-1"], [1, "form-row"], [1, "col-auto", "form-inline"], [1, "input-group"], [1, "form-control", "img-captcha", 3, "src"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-redo"], [1, "col-12", 3, "scopeName", "formField"]], template: function CaptchaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CaptchaComponent_ng_container_0_Template, 14, 5, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common.Captcha")("translocoRead", "portal.Common.Captcha");
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__["TranslocoDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMsgComponent"]], styles: [".input-captcha[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.img-captcha[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n  flex: 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9jYXB0Y2hhL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxwb3J0YWxcXGNvbW1vblxcY2FwdGNoYVxcY2FwdGNoYS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9jYXB0Y2hhL2NhcHRjaGEuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvY29tbW9uL2NhcHRjaGEvY2FwdGNoYS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jYXB0Y2hhXHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4XHJcbi5pbWctY2FwdGNoYVxyXG4gICAgd2lkdGg6IDIwMHB4XHJcbiAgICBoZWlnaHQ6IDgwcHhcclxuICAgIGZsZXg6IDE3NXB4IiwiLmlucHV0LWNhcHRjaGEge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uaW1nLWNhcHRjaGEge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZmxleDogMTc1cHg7XG59Il19 */"] });
    return CaptchaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptchaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-captcha',
                template: "\n<ng-container *transloco=\"let t1; scope: 'portal.Common.Captcha'; read: 'portal.Common.Captcha'\">\n    <div class=\"form-row my-1\" [formGroup]=\"captchaForm\">\n        <label class=\"col-md-5 col-form-label\">{{ t1('msg') }}</label>\n        <div class=\"col-md-7\">\n            <input class=\"form-control input-captcha my-1\" type=\"text\" id=\"captcha\" name=\"captcha\" formControlName=\"captcha\"/>\n            <div class=\"form-row\">\n                <div class=\"col-auto form-inline\">\n                    <div class=\"input-group\">\n                        <img class=\"form-control img-captcha\" [src]=\"domSanitizer.bypassSecurityTrustUrl(captcha.image)\" />\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"refreshCaptcha()\"><i class=\"fas fa-redo\" aria-hidden=\"true\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <error-msg class=\"col-12\" [scopeName]=\"scopeName\" [formField]=\"captchaForm.controls.captcha\"></error-msg>\n        </div>\n    </div>\n</ng-container>\n    ",
                styleUrls: ['./captcha.component.sass'],
                providers: [_service_alert_box_service__WEBPACK_IMPORTED_MODULE_3__["AlertBoxService"]]
            }]
    }], function () { return [{ type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_1__["RxFormBuilder"] }, { type: _service_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"] }, { type: _service_alert_box_service__WEBPACK_IMPORTED_MODULE_3__["AlertBoxService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, { loadStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/common/command-bar/command-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/portal/common/command-bar/command-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: CommandBarPosition, CommandBarButtonStyle, CommandBarButtonType, CommandBarButton, CommandBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarPosition", function() { return CommandBarPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarButtonStyle", function() { return CommandBarButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarButtonType", function() { return CommandBarButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return CommandBarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarComponent", function() { return CommandBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");




function CommandBarComponent_button_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t_r31 = ctx.$implicit;
    var btn_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r31(btn_r29.content.label));
} }
function CommandBarComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandBarComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); var btn_r29 = ctx.$implicit; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onButtonClick(btn_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommandBarComponent_button_1_ng_container_1_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var btn_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-", btn_r29.style, " float-right col-12 col-sm-auto mb-1 mb-sm-0 ml-0 ml-sm-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", btn_r29.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", btn_r29.disabled)("hidden", btn_r29.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", btn_r29.content.scopeName)("translocoRead", btn_r29.content.scopeName);
} }
var CommandBarPosition;
(function (CommandBarPosition) {
    CommandBarPosition["Fixed"] = "fixed";
    CommandBarPosition["Bottom"] = "bottom";
})(CommandBarPosition || (CommandBarPosition = {}));
var CommandBarButtonStyle;
(function (CommandBarButtonStyle) {
    CommandBarButtonStyle["Normal"] = "normal";
    CommandBarButtonStyle["Positive"] = "positive";
})(CommandBarButtonStyle || (CommandBarButtonStyle = {}));
var CommandBarButtonType;
(function (CommandBarButtonType) {
    CommandBarButtonType["GeneralButton"] = "button";
    CommandBarButtonType["SubmitButton"] = "submit";
})(CommandBarButtonType || (CommandBarButtonType = {}));
var CommandBarButton = /** @class */ (function () {
    function CommandBarButton() {
        this.type = CommandBarButtonType.GeneralButton;
    }
    return CommandBarButton;
}());

var CommandBarComponent = /** @class */ (function () {
    function CommandBarComponent() {
        this.buttons = [];
        this.position = CommandBarPosition.Fixed;
    }
    CommandBarComponent.prototype.ngOnInit = function () { };
    CommandBarComponent.prototype.onButtonClick = function (button) {
        if (button.action) {
            button.disabled = true;
            button.action.apply(this, button.actionArgs).subscribe({
                next: function () { return button.disabled = false; }
            });
        }
    };
    CommandBarComponent.ɵfac = function CommandBarComponent_Factory(t) { return new (t || CommandBarComponent)(); };
    CommandBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommandBarComponent, selectors: [["command-bar"]], inputs: { buttons: "buttons", position: "position" }, decls: 2, vars: 1, consts: [[1, "commandbar"], [3, "type", "class", "disabled", "hidden", "click", 4, "ngFor", "ngForOf"], [3, "type", "disabled", "hidden", "click"], [4, "transloco", "translocoScope", "translocoRead"]], template: function CommandBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommandBarComponent_button_1_Template, 2, 8, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"]], styles: [".commandbar[_ngcontent-%COMP%] {\n  display: table;\n  padding-bottom: 20px;\n  width: 100%;\n}\n@media only print {\n  .commandbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.commandbar-msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 32px;\n}\n.commandbar-msg[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9jb21tYW5kLWJhci9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb25cXF9icmJzLnZhcmlhYmxlLnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9jb21tb24vY29tbWFuZC1iYXIvQzpcXFVzZXJzXFxsa2FjaFxcRG9jdW1lbnRzXFxHaXRSZXBvXFxicmJzLXBvcnRhbC11aVxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHBvcnRhbFxcY29tbW9uXFxjb21tYW5kLWJhclxcY29tbWFuZC1iYXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9jb21tb24vY29tbWFuZC1iYXIvY29tbWFuZC1iYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBQUE7QUNHQTtJQUFBO0FBR0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDR0o7QURGSTtFQUpKO0lBS1EsYUFBQTtFQ0tOO0FBQ0Y7QURMQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRFBJO0VBQ0ksaUJBQUE7QUNTUiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9jb21tb24vY29tbWFuZC1iYXIvY29tbWFuZC1iYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb246IDEuMC4wXHJcbiAqXHJcbiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcclxuICpcclxuICovXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDc1cHhcclxuJGNvbW1hbmRiYXItaGVpZ2h0OiA1MnB4XHJcblxyXG4kZm9udC1mYW1pbHk6ICdBcmlhbCcsICdNaWNyb3NvZnQgSmhlbmdoZWknLCBQbWluZ2xpdSwgJ1NlZ29lIFVJJywgVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG4kZm9udC1zaXplLW5vcm1hbDogMTVweFxyXG4kZm9udC1zaXplLW1vYmlsZTogMTRweFxyXG5cclxuJHRhYmxlLWhlYWRlci1jb2xvcjogIzcwNzA3MFxyXG4kdGFibGUtcm93LWNvbG9yOiAjZGRkZGRkXHJcblxyXG4kY29sb3ItZGFya2VyOiAjYWFhYWFhXHJcbiRjb2xvci1kYXJrZXItYWx0OiAjYzI1NTAyXHJcbiRjb2xvci1kYXJrZXItZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWRhcms6ICMwZTZmYzlcclxuJGNvbG9yLWRhcmstYWx0OiAjMzc2MDkyXHJcbiRjb2xvci1kYXJrLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1ub3JtYWw6ICM3Njc2NzZcclxuJGNvbG9yLW5vcm1hbC1hbHQ6ICM1NDU0NTRcclxuJGNvbG9yLW5vcm1hbC1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItbGlnaHQ6ICNmMGYwZjBcclxuJGNvbG9yLWxpZ2h0LWFsdDogI2RlZGVkZVxyXG4kY29sb3ItbGlnaHQtZm9yZTogIzAwMDAwMFxyXG5cclxuJGNvbG9yLWxpZ2h0ZXI6ICNmOGY4ZjhcclxuJGNvbG9yLWxpZ2h0ZXItYWx0OiAjZTZlNmU2XHJcbiRjb2xvci1saWdodGVyLWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1pbmZvOiAjMzc2MDkyXHJcbiRjb2xvci1pbmZvLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItaW5mby1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItZXJyb3I6ICNjNjAwMDBcclxuJGNvbG9yLWVycm9yLWFsdDogI2I0MDAwMFxyXG4kY29sb3ItZXJyb3ItZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICMyNzg0MDBcclxuJGNvbG9yLXN1Y2Nlc3MtYWx0OiAjMTU3MjAwXHJcbiRjb2xvci1zdWNjZXNzLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci13YXJuaW5nOiAjZmZlMTFmXHJcbiRjb2xvci13YXJuaW5nLWFsdDogI2VkY2YwZFxyXG4kY29sb3Itd2FybmluZy1mb3JlOiAjNjA1MzAwXHJcblxyXG4kY29sb3ItcG9zaXRpdmU6ICNkMDZjMGFcclxuJGNvbG9yLXBvc2l0aXZlLWFsdDogI2IwNDMwMFxyXG4kY29sb3ItcG9zaXRpdmUtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWNvbnRlbnQ6ICMwMDAwMDBcclxuJGNvbG9yLWNvbnRlbnQtYWx0OiAjMDAwMDAwXHJcbiRjb2xvci1saW5rOiAjMGU2ZmM5XHJcblxyXG4kY29sb3ItZm9ybS1jb250cm9sLWJvcmRlcjogI2NjY2NjY1xyXG4iLCJcclxuQGltcG9ydCBicmJzLnZhcmlhYmxlXHJcblxyXG4vKlxyXG4gKiBQYWdlIGNvbW1hbmQgYmFyXHJcbiAqL1xyXG4uY29tbWFuZGJhclxyXG4gICAgZGlzcGxheTogdGFibGVcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgQG1lZGlhIG9ubHkgcHJpbnRcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbi5jb21tYW5kYmFyLW1zZ1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICBsaW5lLWhlaWdodDogMzJweFxyXG4gICAgLnJlcXVpcmVkXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHgiLCIvKiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxuICogKiBWZXJzaW9uOiAxLjAuMFxuICogKlxuICogKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXG4gKiAqXG4gKiAqL1xuLyogKiBQYWdlIGNvbW1hbmQgYmFyXG4gKiAqL1xuLmNvbW1hbmRiYXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgcHJpbnQge1xuICAuY29tbWFuZGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uY29tbWFuZGJhci1tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuLmNvbW1hbmRiYXItbXNnIC5yZXF1aXJlZCB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufSJdfQ== */"] });
    return CommandBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'command-bar',
                templateUrl: './command-bar.component.html',
                styleUrls: ['./command-bar.component.sass']
            }]
    }], function () { return []; }, { buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/common/directive/master-form-group.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/portal/common/directive/master-form-group.directive.ts ***!
  \************************************************************************/
/*! exports provided: MasterFormGroupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterFormGroupDirective", function() { return MasterFormGroupDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var MasterFormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MasterFormGroupDirective, _super);
    function MasterFormGroupDirective(_elementRef) {
        var _this = _super.call(this, null, null) || this;
        _this._elementRef = _elementRef;
        _this.ngSubmit.subscribe(function (_) {
            _this._elementRef.nativeElement.classList.add("ng-submitted");
        });
        return _this;
    }
    MasterFormGroupDirective.ɵfac = function MasterFormGroupDirective_Factory(t) { return new (t || MasterFormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
    MasterFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MasterFormGroupDirective, selectors: [["", "masterFormGroup", ""]], inputs: { form: ["masterFormGroup", "form"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
    return MasterFormGroupDirective;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MasterFormGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[masterFormGroup]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['masterFormGroup']
        }] }); })();


/***/ }),

/***/ "./src/app/portal/common/error-msg/error-msg.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portal/common/error-msg/error-msg.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgComponent", function() { return ErrorMsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive/master-form-group.directive */ "./src/app/portal/common/directive/master-form-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");







function ErrorMsgComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t_r37 = ctx.$implicit;
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r37(ctx_r36.formField["errorMessage"]));
} }
function ErrorMsgComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorMsgComponent_div_0_ng_container_1_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r35.isShown());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx_r35.scopeName + ".ErrorMsg")("translocoRead", ctx_r35.scopeName + ".ErrorMsg");
} }
var ErrorMsgComponent = /** @class */ (function () {
    function ErrorMsgComponent(formRef) {
        this.formRef = formRef;
    }
    ErrorMsgComponent.prototype.isShown = function () {
        var _a;
        if (this.formField.errors && (((_a = this.formRef) === null || _a === void 0 ? void 0 : _a.submitted) || (this.formField.touched && this.formField.dirty) || this.formField.touched)) {
            return true;
        }
        return false;
    };
    ErrorMsgComponent.ɵfac = function ErrorMsgComponent_Factory(t) { return new (t || ErrorMsgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_2__["MasterFormGroupDirective"])); };
    ErrorMsgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorMsgComponent, selectors: [["error-msg"]], inputs: { scopeName: "scopeName", formField: "formField" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_2__["MasterFormGroupDirective"] }])], decls: 1, vars: 1, consts: [["class", "error-msg-container", 3, "hidden", 4, "ngIf"], [1, "error-msg-container", 3, "hidden"], [4, "transloco", "translocoScope", "translocoRead"], [1, "fa", "fa-exclamation-triangle"], [1, "ml-2"]], template: function ErrorMsgComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorMsgComponent_div_0_Template, 2, 3, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formField.errors);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoDirective"]], styles: [".error-msg-container[_ngcontent-%COMP%] {\n  padding: 2px 5px !important;\n  color: #c60000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9lcnJvci1tc2cvQzpcXFVzZXJzXFxsa2FjaFxcRG9jdW1lbnRzXFxHaXRSZXBvXFxicmJzLXBvcnRhbC11aVxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29tbW9uXFxfYnJicy52YXJpYWJsZS5zYXNzIiwic3JjL2FwcC9wb3J0YWwvY29tbW9uL2Vycm9yLW1zZy9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxccG9ydGFsXFxjb21tb25cXGVycm9yLW1zZ1xcZXJyb3ItbXNnLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wb3J0YWwvY29tbW9uL2Vycm9yLW1zZy9lcnJvci1tc2cuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBQUE7QUNFQTtFQUNJLDJCQUFBO0VBQ0EsY0R3Q1U7QUVuQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvY29tbW9uL2Vycm9yLW1zZy9lcnJvci1tc2cuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb246IDEuMC4wXHJcbiAqXHJcbiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcclxuICpcclxuICovXHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDc1cHhcclxuJGNvbW1hbmRiYXItaGVpZ2h0OiA1MnB4XHJcblxyXG4kZm9udC1mYW1pbHk6ICdBcmlhbCcsICdNaWNyb3NvZnQgSmhlbmdoZWknLCBQbWluZ2xpdSwgJ1NlZ29lIFVJJywgVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG4kZm9udC1zaXplLW5vcm1hbDogMTVweFxyXG4kZm9udC1zaXplLW1vYmlsZTogMTRweFxyXG5cclxuJHRhYmxlLWhlYWRlci1jb2xvcjogIzcwNzA3MFxyXG4kdGFibGUtcm93LWNvbG9yOiAjZGRkZGRkXHJcblxyXG4kY29sb3ItZGFya2VyOiAjYWFhYWFhXHJcbiRjb2xvci1kYXJrZXItYWx0OiAjYzI1NTAyXHJcbiRjb2xvci1kYXJrZXItZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWRhcms6ICMwZTZmYzlcclxuJGNvbG9yLWRhcmstYWx0OiAjMzc2MDkyXHJcbiRjb2xvci1kYXJrLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1ub3JtYWw6ICM3Njc2NzZcclxuJGNvbG9yLW5vcm1hbC1hbHQ6ICM1NDU0NTRcclxuJGNvbG9yLW5vcm1hbC1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItbGlnaHQ6ICNmMGYwZjBcclxuJGNvbG9yLWxpZ2h0LWFsdDogI2RlZGVkZVxyXG4kY29sb3ItbGlnaHQtZm9yZTogIzAwMDAwMFxyXG5cclxuJGNvbG9yLWxpZ2h0ZXI6ICNmOGY4ZjhcclxuJGNvbG9yLWxpZ2h0ZXItYWx0OiAjZTZlNmU2XHJcbiRjb2xvci1saWdodGVyLWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1pbmZvOiAjMzc2MDkyXHJcbiRjb2xvci1pbmZvLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItaW5mby1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItZXJyb3I6ICNjNjAwMDBcclxuJGNvbG9yLWVycm9yLWFsdDogI2I0MDAwMFxyXG4kY29sb3ItZXJyb3ItZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICMyNzg0MDBcclxuJGNvbG9yLXN1Y2Nlc3MtYWx0OiAjMTU3MjAwXHJcbiRjb2xvci1zdWNjZXNzLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci13YXJuaW5nOiAjZmZlMTFmXHJcbiRjb2xvci13YXJuaW5nLWFsdDogI2VkY2YwZFxyXG4kY29sb3Itd2FybmluZy1mb3JlOiAjNjA1MzAwXHJcblxyXG4kY29sb3ItcG9zaXRpdmU6ICNkMDZjMGFcclxuJGNvbG9yLXBvc2l0aXZlLWFsdDogI2IwNDMwMFxyXG4kY29sb3ItcG9zaXRpdmUtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWNvbnRlbnQ6ICMwMDAwMDBcclxuJGNvbG9yLWNvbnRlbnQtYWx0OiAjMDAwMDAwXHJcbiRjb2xvci1saW5rOiAjMGU2ZmM5XHJcblxyXG4kY29sb3ItZm9ybS1jb250cm9sLWJvcmRlcjogI2NjY2NjY1xyXG4iLCJAaW1wb3J0IGJyYnMudmFyaWFibGVcclxuXHJcbi5lcnJvci1tc2ctY29udGFpbmVyXHJcbiAgICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnRcclxuICAgIGNvbG9yOiAkY29sb3ItZXJyb3IiLCIvKiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxuICogKiBWZXJzaW9uOiAxLjAuMFxuICogKlxuICogKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXG4gKiAqXG4gKiAqL1xuLmVycm9yLW1zZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYzYwMDAwO1xufSJdfQ== */"] });
    return ErrorMsgComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMsgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'error-msg',
                template: "\n<div class=\"error-msg-container\" *ngIf=\"formField.errors\" [hidden]=\"!isShown()\">\n  <ng-container *transloco=\"let t; scope: scopeName + '.ErrorMsg'; read: scopeName + '.ErrorMsg';\">\n    <i class=\"fa fa-exclamation-triangle\"></i>\n    <span class=\"ml-2\">{{ t(formField['errorMessage']) }}</span>\n  </ng-container>\n</div>\n  ",
                styleUrls: ['./error-msg.component.sass'],
                viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_2__["MasterFormGroupDirective"] }]
            }]
    }], function () { return [{ type: _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_2__["MasterFormGroupDirective"] }]; }, { scopeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/common/portal-common.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/portal/common/portal-common.module.ts ***!
  \*******************************************************/
/*! exports provided: PortalCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalCommonModule", function() { return PortalCommonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/portal/common/calendar/calendar.component.ts");
/* harmony import */ var _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./captcha/captcha.component */ "./src/app/portal/common/captcha/captcha.component.ts");
/* harmony import */ var _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./command-bar/command-bar.component */ "./src/app/portal/common/command-bar/command-bar.component.ts");
/* harmony import */ var _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directive/master-form-group.directive */ "./src/app/portal/common/directive/master-form-group.directive.ts");
/* harmony import */ var _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-msg/error-msg.component */ "./src/app/portal/common/error-msg/error-msg.component.ts");
/* harmony import */ var _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portal-footer/portal-footer.component */ "./src/app/portal/common/portal-footer/portal-footer.component.ts");
/* harmony import */ var _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portal-header/portal-header.component */ "./src/app/portal/common/portal-header/portal-header.component.ts");
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ "./src/app/portal/common/splash-screen/splash-screen.component.ts");
/* harmony import */ var _timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timeslot/timeslot.component */ "./src/app/portal/common/timeslot/timeslot.component.ts");

















var PortalCommonModule = /** @class */ (function () {
    function PortalCommonModule() {
    }
    PortalCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PortalCommonModule });
    PortalCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PortalCommonModule_Factory(t) { return new (t || PortalCommonModule)(); }, imports: [[
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"]] });
    return PortalCommonModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PortalCommonModule, { declarations: [_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_6__["AlertBoxComponent"],
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
        _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"],
        _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommandBarComponent"],
        _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMsgComponent"],
        _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_12__["PortalFooterComponent"],
        _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__["PortalHeaderComponent"],
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_14__["SplashScreenComponent"],
        _timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_15__["TimeslotComponent"],
        _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_10__["MasterFormGroupDirective"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"],
        _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_6__["AlertBoxComponent"],
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
        _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"],
        _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommandBarComponent"],
        _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMsgComponent"],
        _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_12__["PortalFooterComponent"],
        _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__["PortalHeaderComponent"],
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_14__["SplashScreenComponent"],
        _timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_15__["TimeslotComponent"],
        _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_10__["MasterFormGroupDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortalCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_6__["AlertBoxComponent"],
                    _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                    _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"],
                    _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommandBarComponent"],
                    _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMsgComponent"],
                    _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_12__["PortalFooterComponent"],
                    _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__["PortalHeaderComponent"],
                    _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_14__["SplashScreenComponent"],
                    _timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_15__["TimeslotComponent"],
                    _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_10__["MasterFormGroupDirective"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"],
                    _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_6__["AlertBoxComponent"],
                    _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                    _captcha_captcha_component__WEBPACK_IMPORTED_MODULE_8__["CaptchaComponent"],
                    _command_bar_command_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommandBarComponent"],
                    _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMsgComponent"],
                    _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_12__["PortalFooterComponent"],
                    _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_13__["PortalHeaderComponent"],
                    _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_14__["SplashScreenComponent"],
                    _timeslot_timeslot_component__WEBPACK_IMPORTED_MODULE_15__["TimeslotComponent"],
                    _directive_master_form_group_directive__WEBPACK_IMPORTED_MODULE_10__["MasterFormGroupDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/common/portal-footer/portal-footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/portal/common/portal-footer/portal-footer.component.ts ***!
  \************************************************************************/
/*! exports provided: PortalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalFooterComponent", function() { return PortalFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");



function PortalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalFooterComponent_ng_container_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.openCopyrightStatement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalFooterComponent_ng_container_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.openPrivacyNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalFooterComponent_ng_container_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.openDisclaimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalFooterComponent_ng_container_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.openSecurityStatement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r39("btn.copyright"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r39("btn.privacy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r39("btn.disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r39("btn.securityStatement"));
} }
var PortalFooterComponent = /** @class */ (function () {
    function PortalFooterComponent(_changeDetector) {
        this._changeDetector = _changeDetector;
    }
    PortalFooterComponent.prototype.ngOnInit = function () { };
    PortalFooterComponent.prototype.openCopyrightStatement = function () { };
    PortalFooterComponent.prototype.openPrivacyNotes = function () { };
    PortalFooterComponent.prototype.openDisclaimer = function () { };
    PortalFooterComponent.prototype.openSecurityStatement = function () { };
    PortalFooterComponent.ɵfac = function PortalFooterComponent_Factory(t) { return new (t || PortalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    PortalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalFooterComponent, selectors: [["portal-footer"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "page-footer"], ["type", "button", 1, "btn", "btn-text", "float-left", "col-12", "col-sm-auto", 3, "click"], [1, "page-footer-logo", "float-right", "col-12", "col-sm-auto"], ["src", "./assets/images/logo_footer.gif", "height", "40"]], template: function PortalFooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PortalFooterComponent_ng_container_0_Template, 12, 4, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common.PortalFooter")("translocoRead", "portal.Common.PortalFooter");
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoDirective"]], styles: [".page-footer[_ngcontent-%COMP%] {\n  display: table;\n  margin-bottom: 30px;\n  width: 100%;\n  border-top: 1px solid #999;\n}\n.page-footer[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8em;\n}\n.page-footer-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9wb3J0YWwtZm9vdGVyL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxwb3J0YWxcXGNvbW1vblxccG9ydGFsLWZvb3RlclxccG9ydGFsLWZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9wb3J0YWwtZm9vdGVyL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbW1vblxcX2JyYnMudmFyaWFibGUuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9wb3J0YWwtZm9vdGVyL3BvcnRhbC1mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0lBQUE7QUNEQTs7Ozs7SUFBQTtBRFdBO0lBQUE7QUFHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBRUZKO0FGR0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FFRFI7QUZHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FFQUoiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvY29tbW9uL3BvcnRhbC1mb290ZXIvcG9ydGFsLWZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2ZXJzaW9uOiBcIjEuMC4wXCJcclxuLypcclxuICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXHJcbiAqIExhbmRpbmcgUGFnZSBTdHlsZXNoZWV0ICN7JHZlcnNpb259LlxyXG4gKi9cclxuXHJcbkBpbXBvcnQgbWl4aW5zL2J1dHRvbnNcclxuXHJcbi8vIHZhcmlhYmxlc1xyXG5AaW1wb3J0IGJyYnMudmFyaWFibGVcclxuXHJcbi8qXHJcbiAqIFBhZ2UgZm9vdGVyXHJcbiAqL1xyXG4ucGFnZS1mb290ZXJcclxuICAgIGRpc3BsYXk6IHRhYmxlXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTlcclxuICAgIC5idG4tdGV4dFxyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbVxyXG5cclxuLnBhZ2UtZm9vdGVyLWxvZ29cclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgbWFyZ2luOiAxMHB4IDBweFxyXG4gICAgZmxvYXQ6IHJpZ2h0XHJcblxyXG5cclxuIiwiLyogXHJcbiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uOiAxLjAuMFxyXG4gKlxyXG4gKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXHJcbiAqXHJcbiAqL1xyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6ICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA3NXB4XHJcbiRjb21tYW5kYmFyLWhlaWdodDogNTJweFxyXG5cclxuJGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnTWljcm9zb2Z0IEpoZW5naGVpJywgUG1pbmdsaXUsICdTZWdvZSBVSScsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWZcclxuJGZvbnQtc2l6ZS1ub3JtYWw6IDE1cHhcclxuJGZvbnQtc2l6ZS1tb2JpbGU6IDE0cHhcclxuXHJcbiR0YWJsZS1oZWFkZXItY29sb3I6ICM3MDcwNzBcclxuJHRhYmxlLXJvdy1jb2xvcjogI2RkZGRkZFxyXG5cclxuJGNvbG9yLWRhcmtlcjogI2FhYWFhYVxyXG4kY29sb3ItZGFya2VyLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItZGFya2VyLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1kYXJrOiAjMGU2ZmM5XHJcbiRjb2xvci1kYXJrLWFsdDogIzM3NjA5MlxyXG4kY29sb3ItZGFyay1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itbm9ybWFsOiAjNzY3Njc2XHJcbiRjb2xvci1ub3JtYWwtYWx0OiAjNTQ1NDU0XHJcbiRjb2xvci1ub3JtYWwtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWxpZ2h0OiAjZjBmMGYwXHJcbiRjb2xvci1saWdodC1hbHQ6ICNkZWRlZGVcclxuJGNvbG9yLWxpZ2h0LWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1saWdodGVyOiAjZjhmOGY4XHJcbiRjb2xvci1saWdodGVyLWFsdDogI2U2ZTZlNlxyXG4kY29sb3ItbGlnaHRlci1mb3JlOiAjMDAwMDAwXHJcblxyXG4kY29sb3ItaW5mbzogIzM3NjA5MlxyXG4kY29sb3ItaW5mby1hbHQ6ICNjMjU1MDJcclxuJGNvbG9yLWluZm8tZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWVycm9yOiAjYzYwMDAwXHJcbiRjb2xvci1lcnJvci1hbHQ6ICNiNDAwMDBcclxuJGNvbG9yLWVycm9yLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1zdWNjZXNzOiAjMjc4NDAwXHJcbiRjb2xvci1zdWNjZXNzLWFsdDogIzE1NzIwMFxyXG4kY29sb3Itc3VjY2Vzcy1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itd2FybmluZzogI2ZmZTExZlxyXG4kY29sb3Itd2FybmluZy1hbHQ6ICNlZGNmMGRcclxuJGNvbG9yLXdhcm5pbmctZm9yZTogIzYwNTMwMFxyXG5cclxuJGNvbG9yLXBvc2l0aXZlOiAjZDA2YzBhXHJcbiRjb2xvci1wb3NpdGl2ZS1hbHQ6ICNiMDQzMDBcclxuJGNvbG9yLXBvc2l0aXZlLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1jb250ZW50OiAjMDAwMDAwXHJcbiRjb2xvci1jb250ZW50LWFsdDogIzAwMDAwMFxyXG4kY29sb3ItbGluazogIzBlNmZjOVxyXG5cclxuJGNvbG9yLWZvcm0tY29udHJvbC1ib3JkZXI6ICNjY2NjY2NcclxuIiwiLyogKiBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW1cbiAqICogTGFuZGluZyBQYWdlIFN0eWxlc2hlZXQgMS4wLjAuXG4gKiAqL1xuLyogKiBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW1cbiAqICogVmVyc2lvbjogMS4wLjBcbiAqICpcbiAqICogVGhpcyBzdHlsZXNoZWV0IGNvbnRhaW5zIHR5cG9ncmFwaHkgZGVmaW5pdGlvbiBmb3IgQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtIFBvcnRhbFxuICogKlxuICogKi9cbi8qICogUGFnZSBmb290ZXJcbiAqICovXG4ucGFnZS1mb290ZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xufVxuLnBhZ2UtZm9vdGVyIC5idG4tdGV4dCB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucGFnZS1mb290ZXItbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
    return PortalFooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'portal-footer',
                templateUrl: './portal-footer.component.html',
                styleUrls: ['./portal-footer.component.sass']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/common/portal-header/portal-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/portal/common/portal-header/portal-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PortalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHeaderComponent", function() { return PortalHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var _service_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/language.service */ "./src/app/portal/service/language.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function PortalHeaderComponent_ng_container_0_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalHeaderComponent_ng_container_0_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortalHeaderComponent_ng_container_0_div_25_Template(rf, ctx) { if (rf & 1) {
    var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Display Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalHeaderComponent_ng_container_0_div_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.useLanguage("zh"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u7E41\u9AD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalHeaderComponent_ng_container_0_div_25_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.useLanguage("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortalHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalHeaderComponent_ng_container_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.useLanguage("zh"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u7E41\u9AD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalHeaderComponent_ng_container_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.useLanguage("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ENG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalHeaderComponent_ng_container_0_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PortalHeaderComponent_ng_container_0_div_24_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PortalHeaderComponent_ng_container_0_div_25_Template, 7, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t_r46 = ctx.$implicit;
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "portal.Common.PortalHeader.class.upperHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r46("lbl.upperTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, "portal.Common.PortalHeader.class.lowerHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r46("lbl.lowerTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r46("lbl.systemHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r46("lbl.systemSubheader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.isMenuCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.isMenuCollapsed);
} }
var PortalHeaderComponent = /** @class */ (function () {
    function PortalHeaderComponent(_cookies, _changeDetector, _languageService) {
        this._cookies = _cookies;
        this._changeDetector = _changeDetector;
        this._languageService = _languageService;
    }
    PortalHeaderComponent.prototype.ngOnInit = function () { };
    PortalHeaderComponent.prototype.useLanguage = function (lang) {
        this._languageService.setLanguage(lang);
        this.isMenuCollapsed = false;
    };
    PortalHeaderComponent.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    };
    PortalHeaderComponent.ɵfac = function PortalHeaderComponent_Factory(t) { return new (t || PortalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
    PortalHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalHeaderComponent, selectors: [["portal-header"]], decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "header"], [1, "header-brand", "d-table-cell"], [1, "logo"], ["src", "./assets/images/ird_logo.png", "height", "50", "width", "50"], [1, "ird-header", "d-none", "d-sm-inline-block"], [1, "sys-header", "d-inline-block", "d-sm-none"], [1, "main"], [1, "sub"], [1, "header-menu", "d-none", "d-md-block"], ["type", "button", 1, "btn", "btn-text", "btn-float-right", 3, "click"], [1, "header-menu-collapse-toggle", "d-table-cell", "d-md-none", 3, "click"], [1, "fas", "fa-bars", "fa-2x"], ["class", "header-menu-collapse-backdrop", 3, "click", 4, "ngIf"], ["class", "header-menu-collapse", 4, "ngIf"], [1, "header-menu-collapse-backdrop", 3, "click"], [1, "header-menu-collapse"], [1, "text-center"], ["type", "button", 1, "btn", "btn-normal", "col-12", 3, "click"]], template: function PortalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PortalHeaderComponent_ng_container_0_Template, 26, 16, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common.PortalHeader")("translocoRead", "portal.Common.PortalHeader");
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoPipe"]], styles: [".header[_ngcontent-%COMP%] {\n  display: table;\n  position: fixed;\n  top: 0px;\n  z-index: 2000;\n  height: 75px;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 1px solid #CCCCCC;\n}\n@media only print {\n  .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header-brand[_ngcontent-%COMP%], .header-system[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px;\n}\n@media screen and (min-width: 576px) {\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n.ird-header[_ngcontent-%COMP%], .sys-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  font-weight: 600;\n  font-size: 0.9em;\n  color: #000000;\n}\n.ird-header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%], .sys-header[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.ird-header[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%], .sys-header[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n@media screen and (min-width: 576px) {\n  .ird-header[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%], .sys-header[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.header-menu[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  height: 75px;\n  padding-right: 20px;\n  line-height: 75px;\n  color: #aaaaaa;\n}\n.header-menu[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 70px;\n  padding: 0px 10px;\n  margin: 0px !important;\n  font-size: 0.8em;\n}\n.header-menu-collapse-toggle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 50px;\n  color: #CCCCCC;\n  vertical-align: middle;\n  cursor: pointer;\n  padding-right: 12px;\n}\n@media screen and (min-width: 576px) {\n  .header-menu-collapse-toggle[_ngcontent-%COMP%] {\n    padding-right: 20px;\n  }\n}\n.header-menu-collapse-backdrop[_ngcontent-%COMP%] {\n  background-color: #000000;\n  opacity: 0.7;\n  position: fixed;\n  top: 75px;\n  z-index: 2000;\n  height: 100%;\n  width: 100%;\n}\n.header-menu-collapse[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  width: 100%;\n  position: fixed;\n  top: 75px;\n  z-index: 2000;\n}\n.header-menu-collapse[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin-bottom: 0px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9wb3J0YWwtaGVhZGVyL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxwb3J0YWxcXGNvbW1vblxccG9ydGFsLWhlYWRlclxccG9ydGFsLWhlYWRlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9wb3J0YWwtaGVhZGVyL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbW1vblxcX2JyYnMudmFyaWFibGUuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9wb3J0YWwtaGVhZGVyL3BvcnRhbC1oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0lBQUE7QUNEQTs7Ozs7SUFBQTtBRFNBO0lBQUE7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQ1BZO0VEUVosV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUVBSjtBRkNJO0VBVEo7SUFVUSxhQUFBO0VFRU47QUFDRjtBRkZBOztFQUVJLG1CQUFBO0VBQ0Esc0JBQUE7QUVLSjtBRkpBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FFT0o7QUZOSTtFQUhKO0lBSVEsaUJBQUE7RUVTTjtBQUNGO0FGVEE7O0VBRUkscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3NCWTtBQ1ZoQjtBRlhJOztFQUNJLGdCQUFBO0FFY1I7QUZiSTs7RUFDSSxnQkFBQTtBRWdCUjtBRmZRO0VBRko7O0lBR1EsZ0JBQUE7RUVtQlY7QUFDRjtBRm5CQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUN0Q1k7RUR1Q1osbUJBQUE7RUFDQSxpQkN4Q1k7RUR5Q1osY0MvQlc7QUNxRGY7QUZyQkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FFdUJSO0FGdEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUV5Qko7QUZ4Qkk7RUFQSjtJQVFRLG1CQUFBO0VFMkJOO0FBQ0Y7QUYzQkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0M1RFk7RUQ2RFosYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FFOEJKO0FGN0JBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNDcEVZO0VEcUVaLGFBQUE7QUVnQ0o7QUYvQkk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRWlDUiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9jb21tb24vcG9ydGFsLWhlYWRlci9wb3J0YWwtaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJHZlcnNpb246IFwiMS4wLjBcIlxyXG4vKlxyXG4gKiBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW1cclxuICogTGFuZGluZyBQYWdlIFN0eWxlc2hlZXQgI3skdmVyc2lvbn0uXHJcbiAqL1xyXG5cclxuLy8gdmFyaWFibGVzXHJcbkBpbXBvcnQgYnJicy52YXJpYWJsZVxyXG5cclxuLypcclxuICogSGVhZGVyXHJcbiAqL1xyXG4uaGVhZGVyXHJcbiAgICBkaXNwbGF5OiB0YWJsZVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IDBweFxyXG4gICAgei1pbmRleDogMjAwMFxyXG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDXHJcbiAgICBAbWVkaWEgb25seSBwcmludFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuLmhlYWRlci1icmFuZCxcclxuLmhlYWRlci1zeXN0ZW1cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGxcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuLmxvZ29cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcInNtXCIpKVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbi5pcmQtaGVhZGVyLFxyXG4uc3lzLWhlYWRlclxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICBmb250LXNpemU6IDAuOWVtXHJcbiAgICBjb2xvcjogJGNvbG9yLWNvbnRlbnRcclxuICAgIC5tYWluXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbVxyXG4gICAgLnN1YlxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcInNtXCIpKVxyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtXHJcbi5oZWFkZXItbWVudVxyXG4gICAgZGlzcGxheTogYmxvY2tcclxuICAgIGZsb2F0OiByaWdodFxyXG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodFxyXG4gICAgcGFkZGluZy1yaWdodDogMjBweFxyXG4gICAgbGluZS1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0XHJcbiAgICBjb2xvcjogJGNvbG9yLWRhcmtlclxyXG4gICAgLmJ0blxyXG4gICAgICAgIGhlaWdodDogNzBweFxyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW1cclxuLmhlYWRlci1tZW51LWNvbGxhcHNlLXRvZ2dsZVxyXG4gICAgd2lkdGg6IDI1cHhcclxuICAgIGhlaWdodDogNTBweFxyXG4gICAgY29sb3I6ICNDQ0NDQ0NcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgcGFkZGluZy1yaWdodDogMTJweFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJzbVwiKSlcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbi5oZWFkZXItbWVudS1jb2xsYXBzZS1iYWNrZHJvcFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMFxyXG4gICAgb3BhY2l0eTogMC43XHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogJGhlYWRlci1oZWlnaHRcclxuICAgIHotaW5kZXg6IDIwMDBcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgd2lkdGg6IDEwMCVcclxuLmhlYWRlci1tZW51LWNvbGxhcHNlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0XHJcbiAgICB6LWluZGV4OiAyMDAwXHJcbiAgICBoNFxyXG4gICAgICAgIHBhZGRpbmc6IDEycHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHhcclxuICAgICAgICBmb250LXdlaWdodDogNjAwXHJcbiIsIi8qIFxyXG4gKiBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW1cclxuICogVmVyc2lvbjogMS4wLjBcclxuICpcclxuICogVGhpcyBzdHlsZXNoZWV0IGNvbnRhaW5zIHR5cG9ncmFwaHkgZGVmaW5pdGlvbiBmb3IgQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtIFBvcnRhbFxyXG4gKlxyXG4gKi9cclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXHJcblxyXG4kaGVhZGVyLWhlaWdodDogNzVweFxyXG4kY29tbWFuZGJhci1oZWlnaHQ6IDUycHhcclxuXHJcbiRmb250LWZhbWlseTogJ0FyaWFsJywgJ01pY3Jvc29mdCBKaGVuZ2hlaScsIFBtaW5nbGl1LCAnU2Vnb2UgVUknLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmXHJcbiRmb250LXNpemUtbm9ybWFsOiAxNXB4XHJcbiRmb250LXNpemUtbW9iaWxlOiAxNHB4XHJcblxyXG4kdGFibGUtaGVhZGVyLWNvbG9yOiAjNzA3MDcwXHJcbiR0YWJsZS1yb3ctY29sb3I6ICNkZGRkZGRcclxuXHJcbiRjb2xvci1kYXJrZXI6ICNhYWFhYWFcclxuJGNvbG9yLWRhcmtlci1hbHQ6ICNjMjU1MDJcclxuJGNvbG9yLWRhcmtlci1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItZGFyazogIzBlNmZjOVxyXG4kY29sb3ItZGFyay1hbHQ6ICMzNzYwOTJcclxuJGNvbG9yLWRhcmstZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLW5vcm1hbDogIzc2NzY3NlxyXG4kY29sb3Itbm9ybWFsLWFsdDogIzU0NTQ1NFxyXG4kY29sb3Itbm9ybWFsLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1saWdodDogI2YwZjBmMFxyXG4kY29sb3ItbGlnaHQtYWx0OiAjZGVkZWRlXHJcbiRjb2xvci1saWdodC1mb3JlOiAjMDAwMDAwXHJcblxyXG4kY29sb3ItbGlnaHRlcjogI2Y4ZjhmOFxyXG4kY29sb3ItbGlnaHRlci1hbHQ6ICNlNmU2ZTZcclxuJGNvbG9yLWxpZ2h0ZXItZm9yZTogIzAwMDAwMFxyXG5cclxuJGNvbG9yLWluZm86ICMzNzYwOTJcclxuJGNvbG9yLWluZm8tYWx0OiAjYzI1NTAyXHJcbiRjb2xvci1pbmZvLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1lcnJvcjogI2M2MDAwMFxyXG4kY29sb3ItZXJyb3ItYWx0OiAjYjQwMDAwXHJcbiRjb2xvci1lcnJvci1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itc3VjY2VzczogIzI3ODQwMFxyXG4kY29sb3Itc3VjY2Vzcy1hbHQ6ICMxNTcyMDBcclxuJGNvbG9yLXN1Y2Nlc3MtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLXdhcm5pbmc6ICNmZmUxMWZcclxuJGNvbG9yLXdhcm5pbmctYWx0OiAjZWRjZjBkXHJcbiRjb2xvci13YXJuaW5nLWZvcmU6ICM2MDUzMDBcclxuXHJcbiRjb2xvci1wb3NpdGl2ZTogI2QwNmMwYVxyXG4kY29sb3ItcG9zaXRpdmUtYWx0OiAjYjA0MzAwXHJcbiRjb2xvci1wb3NpdGl2ZS1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItY29udGVudDogIzAwMDAwMFxyXG4kY29sb3ItY29udGVudC1hbHQ6ICMwMDAwMDBcclxuJGNvbG9yLWxpbms6ICMwZTZmYzlcclxuXHJcbiRjb2xvci1mb3JtLWNvbnRyb2wtYm9yZGVyOiAjY2NjY2NjXHJcbiIsIi8qICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXG4gKiAqIExhbmRpbmcgUGFnZSBTdHlsZXNoZWV0IDEuMC4wLlxuICogKi9cbi8qICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXG4gKiAqIFZlcnNpb246IDEuMC4wXG4gKiAqXG4gKiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcbiAqICpcbiAqICovXG4vKiAqIEhlYWRlclxuICogKi9cbi5oZWFkZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMjAwMDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XG59XG5AbWVkaWEgb25seSBwcmludCB7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmhlYWRlci1icmFuZCxcbi5oZWFkZXItc3lzdGVtIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuXG4uaXJkLWhlYWRlcixcbi5zeXMtaGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5pcmQtaGVhZGVyIC5tYWluLFxuLnN5cy1oZWFkZXIgLm1haW4ge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmlyZC1oZWFkZXIgLnN1Yixcbi5zeXMtaGVhZGVyIC5zdWIge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlyZC1oZWFkZXIgLnN1Yixcbi5zeXMtaGVhZGVyIC5zdWIge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbn1cblxuLmhlYWRlci1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogNzVweDtcbiAgY29sb3I6ICNhYWFhYWE7XG59XG4uaGVhZGVyLW1lbnUgLmJ0biB7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5oZWFkZXItbWVudS1jb2xsYXBzZS10b2dnbGUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogI0NDQ0NDQztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlci1tZW51LWNvbGxhcHNlLXRvZ2dsZSB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuXG4uaGVhZGVyLW1lbnUtY29sbGFwc2UtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3NXB4O1xuICB6LWluZGV4OiAyMDAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLW1lbnUtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDc1cHg7XG4gIHotaW5kZXg6IDIwMDA7XG59XG4uaGVhZGVyLW1lbnUtY29sbGFwc2UgaDQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"] });
    return PortalHeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'portal-header',
                templateUrl: './portal-header.component.html',
                styleUrls: ['./portal-header.component.sass']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _service_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/common/splash-screen/splash-screen.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/portal/common/splash-screen/splash-screen.component.ts ***!
  \************************************************************************/
/*! exports provided: SplashScreenStatus, SplashScreenButtonStyle, SplashScreenPosition, SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenStatus", function() { return SplashScreenStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenButtonStyle", function() { return SplashScreenButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPosition", function() { return SplashScreenPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");




function SplashScreenComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SplashScreenComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SplashScreenComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SplashScreenComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t_r64 = ctx.$implicit;
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r64(ctx_r62.message.label, ctx_r62.message.params));
} }
function SplashScreenComponent_div_0_div_9_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashScreenComponent_div_0_div_9_button_2_Template_button_click_0_listener() { var button_r66 = ctx.$implicit; return button_r66.action && button_r66.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-", button_r66.style, " btn-float-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transloco", button_r66.content);
} }
function SplashScreenComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SplashScreenComponent_div_0_div_9_button_2_Template, 1, 4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r63.buttons);
} }
function SplashScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SplashScreenComponent_div_0_div_3_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SplashScreenComponent_div_0_div_4_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SplashScreenComponent_div_0_div_5_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SplashScreenComponent_div_0_ng_container_8_Template, 3, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SplashScreenComponent_div_0_div_9_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("splash-screen ", ctx_r58.position, " am-fade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.status === ctx_r58.SplashScreenStatus.Error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.status === ctx_r58.SplashScreenStatus.Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.status === ctx_r58.SplashScreenStatus.Informative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", ctx_r58.message.scopeName)("translocoRead", ctx_r58.message.scopeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.buttons.length > 0);
} }
var SplashScreenStatus;
(function (SplashScreenStatus) {
    SplashScreenStatus["Error"] = "error";
    SplashScreenStatus["Informative"] = "info";
    SplashScreenStatus["Loading"] = "loading";
})(SplashScreenStatus || (SplashScreenStatus = {}));
var SplashScreenButtonStyle;
(function (SplashScreenButtonStyle) {
    SplashScreenButtonStyle["Normal"] = "normal";
    SplashScreenButtonStyle["Positive"] = "positive";
})(SplashScreenButtonStyle || (SplashScreenButtonStyle = {}));
var SplashScreenPosition;
(function (SplashScreenPosition) {
    SplashScreenPosition["Fixed"] = "fixed";
    SplashScreenPosition["Absolute"] = "absolute";
})(SplashScreenPosition || (SplashScreenPosition = {}));
var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent() {
        this.SplashScreenStatus = SplashScreenStatus;
        this.message = {
            scopeName: '',
            label: ''
        };
        this.visibility = false;
        this.status = SplashScreenStatus.Loading;
        this.buttons = [];
    }
    SplashScreenComponent.prototype.ngOnInit = function () { };
    SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(); };
    SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["splash-screen"]], inputs: { position: "position", message: "message", visibility: "visibility", status: "status", buttons: "buttons" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], [4, "transloco", "translocoScope", "translocoRead"], [1, "fa", "fa-exclamation-triangle", "fa-4x"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-4x"], [1, "fa", "fa-info-circle", "fa-4x"], [1, "separation"], ["type", "button", "ng-disabled", "btn.disabled", "ng-hide", "btn.hide", 3, "class", "transloco", "click", 4, "ngFor", "ngForOf"], ["type", "button", "ng-disabled", "btn.disabled", "ng-hide", "btn.hide", 3, "transloco", "click"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SplashScreenComponent_div_0_Template, 10, 9, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibility);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".splash-screen[_ngcontent-%COMP%] {\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 999;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.splash-screen.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.splash-screen.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.splash-screen[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.splash-screen[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  color: #000000;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9zcGxhc2gtc2NyZWVuL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbW1vblxcX2JyYnMudGhlbWUuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9zcGxhc2gtc2NyZWVuL0M6XFxVc2Vyc1xcbGthY2hcXERvY3VtZW50c1xcR2l0UmVwb1xcYnJicy1wb3J0YWwtdWlcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxwb3J0YWxcXGNvbW1vblxcc3BsYXNoLXNjcmVlblxcc3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcG9ydGFsL2NvbW1vbi9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBQUE7QUNLQTtJQUFBO0FBR0E7RUFDSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7QUNFUjtBRERJO0VBQ0ksa0JBQUE7QUNHUjtBREZJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSVI7QURIUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRDhCSTtFQzdCSixzQkFBQTtBQ0taIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL2NvbW1vbi9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb246IDEuMC4wXHJcbiAqXHJcbiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcclxuICpcclxuICovXHJcblxyXG4kc2NyZWVuLW1pbi13aWR0aDogODE1cHhcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA3NXB4XHJcbiRjb21tYW5kYmFyLWhlaWdodDogNTJweFxyXG5cclxuJGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnTWljcm9zb2Z0IEpoZW5naGVpJywgUG1pbmdsaXUsICdTZWdvZSBVSScsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWZcclxuJGZvbnQtc2l6ZS1ub3JtYWw6IDE1cHhcclxuXHJcbiRjb2xvci1kYXJrZXI6ICNhYWFhYWFcclxuJGNvbG9yLWRhcmtlci1hbHQ6ICNjMjU1MDJcclxuJGNvbG9yLWRhcmtlci1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItZGFyazogIzBlNmZjOVxyXG4kY29sb3ItZGFyay1hbHQ6ICMzNzYwOTJcclxuJGNvbG9yLWRhcmstZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLW5vcm1hbDogIzc2NzY3NlxyXG4kY29sb3Itbm9ybWFsLWFsdDogIzU0NTQ1NFxyXG4kY29sb3Itbm9ybWFsLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1saWdodDogI2YwZjBmMFxyXG4kY29sb3ItbGlnaHQtYWx0OiAjZGVkZWRlXHJcbiRjb2xvci1saWdodC1mb3JlOiAjMDAwMDAwXHJcblxyXG4kY29sb3ItbGlnaHRlcjogI2Y4ZjhmOFxyXG4kY29sb3ItbGlnaHRlci1hbHQ6ICNlNmU2ZTZcclxuJGNvbG9yLWxpZ2h0ZXItZm9yZTogIzAwMDAwMFxyXG5cclxuJGNvbG9yLWluZm86ICMzNzYwOTJcclxuJGNvbG9yLWluZm8tYWx0OiAjYzI1NTAyXHJcbiRjb2xvci1pbmZvLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1lcnJvcjogI2M2MDAwMFxyXG4kY29sb3ItZXJyb3ItYWx0OiAjYjQwMDAwXHJcbiRjb2xvci1lcnJvci1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itc3VjY2VzczogIzI3ODQwMFxyXG4kY29sb3Itc3VjY2Vzcy1hbHQ6ICMxNTcyMDBcclxuJGNvbG9yLXN1Y2Nlc3MtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLXdhcm5pbmc6ICNmZmUxMWZcclxuJGNvbG9yLXdhcm5pbmctYWx0OiAjZWRjZjBkXHJcbiRjb2xvci13YXJuaW5nLWZvcmU6ICM2MDUzMDBcclxuXHJcbiRjb2xvci1wb3NpdGl2ZTogI2QwNmMwYVxyXG4kY29sb3ItcG9zaXRpdmUtYWx0OiAjYjA0MzAwXHJcbiRjb2xvci1wb3NpdGl2ZS1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3ItY29udGVudDogIzAwMDAwMFxyXG4kY29sb3ItY29udGVudC1hbHQ6ICMwMDAwMDBcclxuJGNvbG9yLWxpbms6ICMwZTZmYzlcclxuXHJcbiRjb2xvci1mb3JtLWNvbnRyb2wtYm9yZGVyOiAjY2NjY2NjXHJcbiIsIkBpbXBvcnQgbWl4aW5zL2J1dHRvbnNcclxuXHJcbi8vIHZhcmlhYmxlc1xyXG5AaW1wb3J0IGJyYnMudGhlbWVcclxuXHJcbi8qXHJcbiAqIFNwbGFzaCBzY3JlZW5cclxuICovXHJcbi5zcGxhc2gtc2NyZWVuXHJcbiAgICB0b3A6IDBweFxyXG4gICAgYm90dG9tOiAwcHhcclxuICAgIGxlZnQ6IDBweFxyXG4gICAgcmlnaHQ6IDBweFxyXG4gICAgei1pbmRleDogOTk5XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSlcclxuICAgICYuZml4ZWRcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgICYuYWJzb2x1dGVcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgID5kaXZcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICAgICAgPmRpdlxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWNvbnRlbnRcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSIsIi8qICogQnVzaW5lc3MgUmVnaXN0cmF0aW9uIEJvb2tpbmcgU3lzdGVtXG4gKiAqIFZlcnNpb246IDEuMC4wXG4gKiAqXG4gKiAqIFRoaXMgc3R5bGVzaGVldCBjb250YWlucyB0eXBvZ3JhcGh5IGRlZmluaXRpb24gZm9yIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbSBQb3J0YWxcbiAqICpcbiAqICovXG4vKiAqIFNwbGFzaCBzY3JlZW5cbiAqICovXG4uc3BsYXNoLXNjcmVlbiB7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cbi5zcGxhc2gtc2NyZWVuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLnNwbGFzaC1zY3JlZW4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc3BsYXNoLXNjcmVlbiA+IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNwbGFzaC1zY3JlZW4gPiBkaXYgPiBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"] });
    return SplashScreenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'splash-screen',
                templateUrl: './splash-screen.component.html',
                styleUrls: ['./splash-screen.component.sass']
            }]
    }], function () { return []; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], visibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/common/timeslot/timeslot.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portal/common/timeslot/timeslot.component.ts ***!
  \**************************************************************/
/*! exports provided: TimeslotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeslotComponent", function() { return TimeslotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_BookingStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/BookingStatus */ "./src/app/portal/model/BookingStatus.ts");
/* harmony import */ var _model_Meridiem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Meridiem */ "./src/app/portal/model/Meridiem.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/schedule/schedule.service */ "./src/app/portal/service/schedule/schedule.service.ts");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");








function TimeslotComponent_ng_container_0_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r69("lbl.full"));
} }
var _c0 = function (a0, a1, a2) { return { "available": a0, "full": a1, "selected": a2 }; };
function TimeslotComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeslotComponent_ng_container_0_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); var timeslot_r72 = ctx.$implicit; var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.onAppointmentTimeslotSelected(timeslot_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeslotComponent_ng_container_0_div_6_span_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var timeslot_r72 = ctx.$implicit;
    var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, timeslot_r72.status === ctx_r70.BookingStatus.Available, timeslot_r72.status === ctx_r70.BookingStatus.Full, timeslot_r72.status === ctx_r70.BookingStatus.Selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r70.getFormattedTime(timeslot_r72.startTime), " - ", ctx_r70.getFormattedTime(timeslot_r72.endTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timeslot_r72.status === ctx_r70.BookingStatus.Full);
} }
function TimeslotComponent_ng_container_0_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var t1_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r69("lbl.full"));
} }
function TimeslotComponent_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeslotComponent_ng_container_0_div_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); var timeslot_r77 = ctx.$implicit; var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.onAppointmentTimeslotSelected(timeslot_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeslotComponent_ng_container_0_div_12_span_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var timeslot_r77 = ctx.$implicit;
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, timeslot_r77.status === ctx_r71.BookingStatus.Available, timeslot_r77.status === ctx_r71.BookingStatus.Full, timeslot_r77.status === ctx_r71.BookingStatus.Selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r71.getFormattedTime(timeslot_r77.startTime), " - ", ctx_r71.getFormattedTime(timeslot_r77.endTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timeslot_r77.status === ctx_r71.BookingStatus.Full);
} }
function TimeslotComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimeslotComponent_ng_container_0_div_6_Template, 4, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TimeslotComponent_ng_container_0_div_12_Template, 4, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var t1_r69 = ctx.$implicit;
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r69("lbl.am"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.amTimeslots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t1_r69("lbl.pm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.pmTimeslots);
} }
var TimeslotComponent = /** @class */ (function () {
    function TimeslotComponent(_scheduleService) {
        var _this = this;
        this._scheduleService = _scheduleService;
        this.scopeName = 'portal.common.timeslot';
        this.BookingStatus = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_1__["BookingStatus"];
        this.Meridiem = _model_Meridiem__WEBPACK_IMPORTED_MODULE_2__["Meridiem"];
        this.amTimeslots = [];
        this.pmTimeslots = [];
        this.loadTimeslotStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadTimeslotCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _scheduleService.schedulesUpdated.subscribe(function () {
            _this.refreshTimeslots();
        });
    }
    TimeslotComponent.prototype.ngOnInit = function () {
        this.refreshTimeslots();
    };
    TimeslotComponent.prototype.onAppointmentTimeslotSelected = function (selectedTimeslot) {
        var _this = this;
        if (selectedTimeslot.status === this.BookingStatus.Available) {
            this.loadTimeslotStarted.emit();
            this._scheduleService.acquireTimeSlot({
                appointmentDate: this._scheduleService.selectedSchedule.appointmentDate,
                slotId: selectedTimeslot.slotId
            }).subscribe({
                next: function () {
                    _this.loadTimeslotCompleted.emit(_shared_constant__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE_SUCCESS"]);
                },
                error: function (errorCode) {
                    _this.loadTimeslotCompleted.emit(errorCode);
                }
            });
        }
    };
    TimeslotComponent.prototype.getFormattedTime = function (timeValue) {
        if (timeValue > 1200) {
            timeValue -= 1200;
        }
        var formattedTime = timeValue.toString().length === 4 ? timeValue.toString() : '0' + timeValue;
        return formattedTime.substring(0, 2) + ':' + formattedTime.substring(2, 4);
    };
    TimeslotComponent.prototype.refreshTimeslots = function () {
        var _this = this;
        this.amTimeslots.length = 0;
        this.pmTimeslots.length = 0;
        this._scheduleService.timeSlots.filter(function (x) { return x.startTime < 1200; }).forEach(function (x) { return _this.amTimeslots.push(x); });
        this._scheduleService.timeSlots.filter(function (x) { return x.startTime >= 1200; }).forEach(function (x) { return _this.pmTimeslots.push(x); });
    };
    TimeslotComponent.ɵfac = function TimeslotComponent_Factory(t) { return new (t || TimeslotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"])); };
    TimeslotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeslotComponent, selectors: [["app-timeslot"]], outputs: { loadTimeslotStarted: "loadTimeslotStarted", loadTimeslotCompleted: "loadTimeslotCompleted" }, decls: 1, vars: 2, consts: [[4, "transloco", "translocoScope", "translocoRead"], [1, "timeslot-container"], [1, "row", "timeslot-header"], [1, "timeslot-cell"], ["class", "row timeslot-body", 4, "ngFor", "ngForOf"], [1, "row", "timeslot-body"], [1, "timeslot-cell", 3, "ngClass", "click"], ["class", "full-label", 4, "ngIf"], [1, "full-label"]], template: function TimeslotComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimeslotComponent_ng_container_0_Template, 13, 4, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translocoScope", "portal.Common.TimeSlot")("translocoRead", "portal.Common.TimeSlot");
        } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".timeslot-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0px 15px;\n  width: 50%;\n  vertical-align: top;\n}\n@media screen and (min-width: 576px) {\n  .timeslot-container[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.timeslot-cell[_ngcontent-%COMP%] {\n  background: #E7E7E9;\n  padding-left: 5px;\n  padding-right: 5px;\n  vertical-align: middle;\n  border: 2px solid #fff;\n  width: 100%;\n}\n.timeslot-header[_ngcontent-%COMP%]    > .timeslot-cell[_ngcontent-%COMP%] {\n  background: #8A8A8A;\n  color: #fff;\n  height: 40px;\n  line-height: 40px;\n}\n.timeslot-body[_ngcontent-%COMP%]    > .timeslot-cell[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n}\n.timeslot-cell.available[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #007bff;\n  background: #ffffff;\n  border: 1px solid #007bff;\n  height: 46px !important;\n  width: calc(100% - 4px) !important;\n  margin: 2px;\n}\n.timeslot-cell.available[_ngcontent-%COMP%]:hover {\n  color: #d06c0a;\n  border: 1px solid #d06c0a;\n}\n.timeslot-cell.full[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #c83d3d;\n}\n.timeslot-cell.selected[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #d06c0a;\n  color: #fff;\n}\n.full-label[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL2NvbW1vbi90aW1lc2xvdC9DOlxcVXNlcnNcXGxrYWNoXFxEb2N1bWVudHNcXEdpdFJlcG9cXGJyYnMtcG9ydGFsLXVpXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb25cXF9icmJzLnZhcmlhYmxlLnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9jb21tb24vdGltZXNsb3QvQzpcXFVzZXJzXFxsa2FjaFxcRG9jdW1lbnRzXFxHaXRSZXBvXFxicmJzLXBvcnRhbC11aVxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHBvcnRhbFxcY29tbW9uXFx0aW1lc2xvdFxcdGltZXNsb3QuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BvcnRhbC9jb21tb24vdGltZXNsb3QvdGltZXNsb3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBQUE7QUNHQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNJRjtBREhFO0VBTEY7SUFNSSxZQUFBO0VDTUY7QUFDRjtBRExBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNRRjtBRFBBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVUY7QURUQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1lGO0FEVkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ2FKO0FEWkk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNjTjtBRGJFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDZUo7QURkRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNnQko7QURmQTtFQUNFLFlBQUE7QUNrQkYiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvY29tbW9uL3RpbWVzbG90L3RpbWVzbG90LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uOiAxLjAuMFxyXG4gKlxyXG4gKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXHJcbiAqXHJcbiAqL1xyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6ICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA3NXB4XHJcbiRjb21tYW5kYmFyLWhlaWdodDogNTJweFxyXG5cclxuJGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnTWljcm9zb2Z0IEpoZW5naGVpJywgUG1pbmdsaXUsICdTZWdvZSBVSScsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWZcclxuJGZvbnQtc2l6ZS1ub3JtYWw6IDE1cHhcclxuJGZvbnQtc2l6ZS1tb2JpbGU6IDE0cHhcclxuXHJcbiR0YWJsZS1oZWFkZXItY29sb3I6ICM3MDcwNzBcclxuJHRhYmxlLXJvdy1jb2xvcjogI2RkZGRkZFxyXG5cclxuJGNvbG9yLWRhcmtlcjogI2FhYWFhYVxyXG4kY29sb3ItZGFya2VyLWFsdDogI2MyNTUwMlxyXG4kY29sb3ItZGFya2VyLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1kYXJrOiAjMGU2ZmM5XHJcbiRjb2xvci1kYXJrLWFsdDogIzM3NjA5MlxyXG4kY29sb3ItZGFyay1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itbm9ybWFsOiAjNzY3Njc2XHJcbiRjb2xvci1ub3JtYWwtYWx0OiAjNTQ1NDU0XHJcbiRjb2xvci1ub3JtYWwtZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWxpZ2h0OiAjZjBmMGYwXHJcbiRjb2xvci1saWdodC1hbHQ6ICNkZWRlZGVcclxuJGNvbG9yLWxpZ2h0LWZvcmU6ICMwMDAwMDBcclxuXHJcbiRjb2xvci1saWdodGVyOiAjZjhmOGY4XHJcbiRjb2xvci1saWdodGVyLWFsdDogI2U2ZTZlNlxyXG4kY29sb3ItbGlnaHRlci1mb3JlOiAjMDAwMDAwXHJcblxyXG4kY29sb3ItaW5mbzogIzM3NjA5MlxyXG4kY29sb3ItaW5mby1hbHQ6ICNjMjU1MDJcclxuJGNvbG9yLWluZm8tZm9yZTogI2ZmZmZmZlxyXG5cclxuJGNvbG9yLWVycm9yOiAjYzYwMDAwXHJcbiRjb2xvci1lcnJvci1hbHQ6ICNiNDAwMDBcclxuJGNvbG9yLWVycm9yLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1zdWNjZXNzOiAjMjc4NDAwXHJcbiRjb2xvci1zdWNjZXNzLWFsdDogIzE1NzIwMFxyXG4kY29sb3Itc3VjY2Vzcy1mb3JlOiAjZmZmZmZmXHJcblxyXG4kY29sb3Itd2FybmluZzogI2ZmZTExZlxyXG4kY29sb3Itd2FybmluZy1hbHQ6ICNlZGNmMGRcclxuJGNvbG9yLXdhcm5pbmctZm9yZTogIzYwNTMwMFxyXG5cclxuJGNvbG9yLXBvc2l0aXZlOiAjZDA2YzBhXHJcbiRjb2xvci1wb3NpdGl2ZS1hbHQ6ICNiMDQzMDBcclxuJGNvbG9yLXBvc2l0aXZlLWZvcmU6ICNmZmZmZmZcclxuXHJcbiRjb2xvci1jb250ZW50OiAjMDAwMDAwXHJcbiRjb2xvci1jb250ZW50LWFsdDogIzAwMDAwMFxyXG4kY29sb3ItbGluazogIzBlNmZjOVxyXG5cclxuJGNvbG9yLWZvcm0tY29udHJvbC1ib3JkZXI6ICNjY2NjY2NcclxuIiwiXHJcbkBpbXBvcnQgYnJicy52YXJpYWJsZVxyXG5cclxuLnRpbWVzbG90LWNvbnRhaW5lclxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4XHJcbiAgd2lkdGg6IDUwJVxyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3BcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcInNtXCIpKVxyXG4gICAgd2lkdGg6IDE1MHB4XHJcblxyXG4udGltZXNsb3QtY2VsbFxyXG4gIGJhY2tncm91bmQ6ICNFN0U3RTlcclxuICBwYWRkaW5nLWxlZnQ6IDVweFxyXG4gIHBhZGRpbmctcmlnaHQ6IDVweFxyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmXHJcbiAgd2lkdGg6IDEwMCVcclxuLnRpbWVzbG90LWhlYWRlciA+IC50aW1lc2xvdC1jZWxsXHJcbiAgYmFja2dyb3VuZDogIzhBOEE4QVxyXG4gIGNvbG9yOiAjZmZmXHJcbiAgaGVpZ2h0OiA0MHB4XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHhcclxuLnRpbWVzbG90LWJvZHkgPiAudGltZXNsb3QtY2VsbFxyXG4gIGhlaWdodDogNTBweFxyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4XHJcbi50aW1lc2xvdC1jZWxsXHJcbiAgJi5hdmFpbGFibGVcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgY29sb3I6ICMwMDdiZmZcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmZcclxuICAgIGhlaWdodDogNDZweCAhaW1wb3J0YW50XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNHB4KSAhaW1wb3J0YW50XHJcbiAgICBtYXJnaW46IDJweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICBjb2xvcjogI2QwNmMwYVxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDA2YzBhXHJcbiAgJi5mdWxsXHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcbiAgICBjb2xvcjogI2M4M2QzZFxyXG4gICYuc2VsZWN0ZWRcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYmFja2dyb3VuZDogI2QwNmMwYVxyXG4gICAgY29sb3I6ICNmZmZcclxuLmZ1bGwtbGFiZWxcclxuICBmbG9hdDogcmlnaHQiLCIvKiAqIEJ1c2luZXNzIFJlZ2lzdHJhdGlvbiBCb29raW5nIFN5c3RlbVxuICogKiBWZXJzaW9uOiAxLjAuMFxuICogKlxuICogKiBUaGlzIHN0eWxlc2hlZXQgY29udGFpbnMgdHlwb2dyYXBoeSBkZWZpbml0aW9uIGZvciBCdXNpbmVzcyBSZWdpc3RyYXRpb24gQm9va2luZyBTeXN0ZW0gUG9ydGFsXG4gKiAqXG4gKiAqL1xuLnRpbWVzbG90LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAudGltZXNsb3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cblxuLnRpbWVzbG90LWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjRTdFN0U5O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVzbG90LWhlYWRlciA+IC50aW1lc2xvdC1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzhBOEE4QTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi50aW1lc2xvdC1ib2R5ID4gLnRpbWVzbG90LWNlbGwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4udGltZXNsb3QtY2VsbC5hdmFpbGFibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAycHg7XG59XG4udGltZXNsb3QtY2VsbC5hdmFpbGFibGU6aG92ZXIge1xuICBjb2xvcjogI2QwNmMwYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwNmMwYTtcbn1cbi50aW1lc2xvdC1jZWxsLmZ1bGwge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBjb2xvcjogI2M4M2QzZDtcbn1cbi50aW1lc2xvdC1jZWxsLnNlbGVjdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZDA2YzBhO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZ1bGwtbGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"] });
    return TimeslotComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeslotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeslot',
                templateUrl: './timeslot.component.html',
                styleUrls: ['./timeslot.component.sass']
            }]
    }], function () { return [{ type: _service_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"] }]; }, { loadTimeslotStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadTimeslotCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/heartbeat/heartbeat.module.ts":
/*!******************************************************!*\
  !*** ./src/app/portal/heartbeat/heartbeat.module.ts ***!
  \******************************************************/
/*! exports provided: HeartbeatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartbeatModule", function() { return HeartbeatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/portal-common.module */ "./src/app/portal/common/portal-common.module.ts");
/* harmony import */ var _heartbeat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heartbeat.service */ "./src/app/portal/heartbeat/heartbeat.service.ts");




var HeartbeatModule = /** @class */ (function () {
    function HeartbeatModule() {
    }
    HeartbeatModule.forRoot = function (config) {
        return {
            ngModule: HeartbeatModule,
            providers: [
                { provide: _heartbeat_service__WEBPACK_IMPORTED_MODULE_2__["HeartbeatServiceConfig"], useValue: config }
            ]
        };
    };
    HeartbeatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeartbeatModule });
    HeartbeatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeartbeatModule_Factory(t) { return new (t || HeartbeatModule)(); }, providers: [_heartbeat_service__WEBPACK_IMPORTED_MODULE_2__["HeartbeatService"]], imports: [[
                _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"]
            ]] });
    return HeartbeatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeartbeatModule, { imports: [_common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeartbeatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _common_portal_common_module__WEBPACK_IMPORTED_MODULE_1__["PortalCommonModule"]
                ],
                providers: [_heartbeat_service__WEBPACK_IMPORTED_MODULE_2__["HeartbeatService"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portal/heartbeat/heartbeat.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/portal/heartbeat/heartbeat.service.ts ***!
  \*******************************************************/
/*! exports provided: HeartbeatServiceConfig, HeartbeatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartbeatServiceConfig", function() { return HeartbeatServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartbeatService", function() { return HeartbeatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm5/ng-idle-keepalive.js");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm5/ng-idle-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_config_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-config/core */ "./node_modules/@ngx-config/core/__ivy_ngcc__/fesm5/ngx-config-core.js");
/* harmony import */ var _service_alert_box_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/alert-box.service */ "./src/app/portal/service/alert-box.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_portal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/portal.service */ "./src/app/portal/service/portal.service.ts");











var HeartbeatServiceConfig = /** @class */ (function () {
    function HeartbeatServiceConfig() {
        this.idleTimeout = 0;
        this.timeoutPeriod = 0;
        this.interrupts = [];
        this.keepaliveInterval = 0;
    }
    return HeartbeatServiceConfig;
}());

var HeartbeatService = /** @class */ (function () {
    function HeartbeatService(_keepalive, _idle, _httpClient, _systemConfig, _alertBoxService, _router, _portalService, config) {
        var _this = this;
        this._keepalive = _keepalive;
        this._idle = _idle;
        this._httpClient = _httpClient;
        this._systemConfig = _systemConfig;
        this._alertBoxService = _alertBoxService;
        this._router = _router;
        this._portalService = _portalService;
        this.config = config;
        this._state = {
            started: false,
            timeout: {
                alertBoxRef: null,
                countdown: 0
            }
        };
        if (config) {
            this._config = config;
        }
        else {
            this._config = new HeartbeatServiceConfig();
        }
        _idle.setIdle(this._config.idleTimeout);
        _idle.setTimeout(this._config.timeoutPeriod);
        _idle.setInterrupts(this._config.interrupts);
        _keepalive.interval(this._config.keepaliveInterval);
        _keepalive.onPing.subscribe(function () { _this.sendHeartbeat(); });
        _idle.onIdleStart.subscribe(function () { console.log('idle started'); }); // TODO: remove this line
        _idle.onIdleEnd.subscribe(function () {
            console.log('idle ended');
            // add a little deplay so that the alert box will not be 
            // hidden before it has been shown
            setTimeout(function () {
                var _a;
                (_a = _this._state.timeout.alertBoxRef) === null || _a === void 0 ? void 0 : _a.hide();
                _this._state.timeout.alertBoxRef = null;
            }, 500);
        });
        _idle.onTimeoutWarning.subscribe(function (countdown) {
            _this.onTimeoutStart(countdown);
        });
        _idle.onTimeout.subscribe(function () {
            _this.onTimeout();
        });
    }
    HeartbeatService.prototype.start = function () {
        if (!this._state.started) {
            this._idle.watch();
            this._state.started = true;
        }
    };
    HeartbeatService.prototype.stop = function () {
        this._idle.stop();
        this.resetState();
    };
    HeartbeatService.prototype.register = function (componentFactoryResolver) {
        this._componentFactoryResolver = componentFactoryResolver;
    };
    HeartbeatService.prototype.resetState = function () {
        this._state.started = false;
        this._state.timeout.alertBoxRef = null;
        this._state.timeout.countdown = 0;
    };
    HeartbeatService.prototype.goToTimeoutPage = function () {
        this._router.navigate(['/landing/timeout']);
    };
    HeartbeatService.prototype.onTimeoutStart = function (countdown) {
        var _a;
        this._state.timeout.countdown = countdown;
        // hide the last alert box if present
        (_a = this._state.timeout.alertBoxRef) === null || _a === void 0 ? void 0 : _a.hide();
        this._state.timeout.alertBoxRef = this._alertBoxService.show(this._componentFactoryResolver, {
            style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_1__["AlertBoxStyle"].Warning,
            buttons: [],
            message: {
                scopeName: 'portal.Heartbeat',
                label: 'lbl.timeoutCountDown',
                params: { countdown: this._state.timeout.countdown }
            }
        });
    };
    HeartbeatService.prototype.onTimeout = function () {
        var _this = this;
        var _a;
        console.log('timeout!');
        (_a = this._state.timeout.alertBoxRef) === null || _a === void 0 ? void 0 : _a.hide();
        this.resetState();
        this._portalService
            .terminateUserSession()
            .subscribe({
            next: function () {
                _this.promptTimeoutErrorMessage();
            },
            error: function () {
                // even the call returned with error, user session on client side will be discarded
                // i.e. JWT in session storage removed
                _this.promptTimeoutErrorMessage();
            }
        });
    };
    HeartbeatService.prototype.promptTimeoutErrorMessage = function () {
        var _this = this;
        this._alertBoxService.show(this._componentFactoryResolver, {
            style: _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_1__["AlertBoxStyle"].Error,
            buttons: [
                {
                    label: 'close',
                    action: function () {
                        _this.goToTimeoutPage();
                    }
                }
            ],
            message: {
                scopeName: 'portal.Heartbeat',
                label: 'lbl.timeout',
                params: { countdown: this._state.timeout.countdown }
            }
        });
    };
    HeartbeatService.prototype.sendHeartbeat = function () {
        var _this = this;
        console.log('send heartbeat');
        this._httpClient.post(this._systemConfig.getSettings('system.hostApi') + '/services/PortalManagement/Portal/sendHeartbeat', null, {
            headers: _shared_constant__WEBPACK_IMPORTED_MODULE_2__["HEADERS_AJAX_JSON_REQUEST"]
        }).subscribe({
            next: function (response) {
                if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE_SUCCESS"]) {
                    console.log('heartbeat - 0000');
                }
                else {
                    console.log('heartbeat - result code error');
                    _this.goToTimeoutPage();
                }
            },
            error: function (error) {
                console.log('heartbeat - http error');
                _this.goToTimeoutPage();
            }
        });
    };
    HeartbeatService.ɵfac = function HeartbeatService_Factory(t) { return new (t || HeartbeatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["Keepalive"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_4__["Idle"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_config_core__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alert_box_service__WEBPACK_IMPORTED_MODULE_7__["AlertBoxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_portal_service__WEBPACK_IMPORTED_MODULE_9__["PortalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HeartbeatServiceConfig, 8)); };
    HeartbeatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeartbeatService, factory: HeartbeatService.ɵfac, providedIn: 'root' });
    return HeartbeatService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeartbeatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["Keepalive"] }, { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_4__["Idle"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _ngx_config_core__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _service_alert_box_service__WEBPACK_IMPORTED_MODULE_7__["AlertBoxService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _service_portal_service__WEBPACK_IMPORTED_MODULE_9__["PortalService"] }, { type: HeartbeatServiceConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/interceptor/backend.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/portal/interceptor/backend.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: BackendHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendHttpInterceptor", function() { return BackendHttpInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm5/ngx-webstorage-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BookingStatus */ "./src/app/portal/model/BookingStatus.ts");
/* harmony import */ var _model_IdType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/IdType */ "./src/app/portal/model/IdType.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/constant */ "./src/app/portal/shared/constant.ts");










var BackendHttpInterceptor = /** @class */ (function () {
    function BackendHttpInterceptor(_sessionStorage) {
        this._sessionStorage = _sessionStorage;
        this.WAIT_TIME = 2000;
        this.timeSlots = [{ slotId: 1, startTime: 900, endTime: 1000, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 2, startTime: 1000, endTime: 1100, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available },
            { slotId: 3, startTime: 1100, endTime: 1200, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available },
            { slotId: 4, startTime: 1200, endTime: 1300, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 5, startTime: 1300, endTime: 1400, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available },
            { slotId: 6, startTime: 1330, endTime: 1430, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available },
            { slotId: 7, startTime: 1430, endTime: 1530, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 8, startTime: 1530, endTime: 1630, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available }];
        this.timeSlots2 = [{ slotId: 1, startTime: 900, endTime: 1000, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 2, startTime: 1000, endTime: 1100, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 3, startTime: 1100, endTime: 1200, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available },
            { slotId: 4, startTime: 1200, endTime: 1300, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 5, startTime: 1430, endTime: 1530, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full },
            { slotId: 6, startTime: 1530, endTime: 1630, status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available }];
        this.schedules = [{ appointmentDate: new Date(2020, 3, 26).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Holiday, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 3, 27).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Unavailable, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 3, 28).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Unavailable, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 3, 29).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Unavailable, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 3, 30).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 1).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 2).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Holiday, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 3).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Holiday, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 4).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 5).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 6).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Available, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 7).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Unavailable, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 8).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Unavailable, timeSlots: [], numberOfCases: 2 },
            { appointmentDate: new Date(2020, 4, 9).getTime(), status: _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Holiday, timeSlots: [], numberOfCases: 2 }];
    }
    BackendHttpInterceptor.prototype.intercept = function (request, next) {
        if (request.method === 'POST') {
            if (request.url.endsWith('/services/PortalManagement/Portal/sendHeartbeat')) {
                return this.sendHeartbeat(request);
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Schedule/getBookingPeriod')) {
                return this.handleGetBookingPeriod();
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Schedule/getSchedule')) {
                return this.handleGetSchedule(request);
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Schedule/acquireTimeSlot')) {
                return this.handleAcquireTimeSlot(request);
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Appointment/enquiry')) {
                return this.handleEnquiryAppointment();
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Appointment/cancel')) {
                return this.handleCancelAppointment();
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Submission/enroll')) {
                return this.handleEnrollSubmission();
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Submission/submit')) {
                return this.handleSubmitNotification();
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Registration/enroll')) {
                return this.handleEnrollRegistration();
            }
            else if (request.url.endsWith('/services/AppointmentManagement/Registration/submit')) {
                return this.handleSubmitRegistration();
            }
            else if (request.url.endsWith('/services/PortalManagement/Portal/getCaptcha')) {
                return this.handleGetCaptcha();
            }
            else if (request.url.endsWith('/services/PortalManagement/Portal/healthCheck')) {
                return this.handleHealthCheck();
            }
            else if (request.url.endsWith('/services/PortalManagement/Portal/terminateUserSession')) {
                return this.terminateUserSession(request);
            }
        }
        return next.handle(request);
    };
    BackendHttpInterceptor.prototype.sendHeartbeat = function (request) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000' } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.prototype.handleGetBookingPeriod = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            setTimeout(function () {
                //if (Math.floor(Math.random() * 10) % 2 === 0) {
                if (true) {
                    observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000', bookingPeriod: 5 } }));
                }
                else {}
                observer.complete();
            }, _this.WAIT_TIME);
        });
    };
    BackendHttpInterceptor.prototype.handleGetSchedule = function (request) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            setTimeout(function () {
                var e_1, _a;
                var schedulesCopy = JSON.parse(JSON.stringify(_this.schedules));
                var resultCode = _shared_constant__WEBPACK_IMPORTED_MODULE_7__["RESULT_CODE_SUCCESS"];
                try {
                    for (var schedulesCopy_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(schedulesCopy), schedulesCopy_1_1 = schedulesCopy_1.next(); !schedulesCopy_1_1.done; schedulesCopy_1_1 = schedulesCopy_1.next()) {
                        var schedule = schedulesCopy_1_1.value;
                        if (request.body.appointmentDate) {
                            if (schedule.appointmentDate === request.body.appointmentDate) {
                                //TODO: testing
                                if (new Date(2020, 4, 6).getTime() === request.body.appointmentDate) {
                                    schedule.timeSlots = JSON.parse(JSON.stringify(_this.timeSlots2));
                                }
                                else if (new Date(2020, 4, 1).getTime() === request.body.appointmentDate) {
                                    schedule.status = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full;
                                    schedule.timeSlots = [];
                                    resultCode = '0027';
                                }
                                else {
                                    schedule.timeSlots = JSON.parse(JSON.stringify(_this.timeSlots));
                                }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (schedulesCopy_1_1 && !schedulesCopy_1_1.done && (_a = schedulesCopy_1.return)) _a.call(schedulesCopy_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200, body: {
                        resultCode: resultCode,
                        schedules: schedulesCopy
                    }
                }));
                observer.complete();
            }, _this.WAIT_TIME);
        });
    };
    BackendHttpInterceptor.prototype.handleAcquireTimeSlot = function (request) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            setTimeout(function () {
                var e_2, _a, e_3, _b, e_4, _c;
                if (new Date(2020, 4, 4).getTime() === request.body.appointmentDate) {
                    var schedulesCopy = JSON.parse(JSON.stringify(_this.schedules));
                    try {
                        for (var schedulesCopy_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(schedulesCopy), schedulesCopy_2_1 = schedulesCopy_2.next(); !schedulesCopy_2_1.done; schedulesCopy_2_1 = schedulesCopy_2.next()) {
                            var schedule = schedulesCopy_2_1.value;
                            if (schedule.appointmentDate === request.body.appointmentDate) {
                                //TODO: testing
                                if (new Date(2020, 4, 6).getTime() === request.body.appointmentDate) {
                                    schedule.timeSlots = JSON.parse(JSON.stringify(_this.timeSlots2));
                                }
                                else {
                                    schedule.timeSlots = JSON.parse(JSON.stringify(_this.timeSlots));
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (schedulesCopy_2_1 && !schedulesCopy_2_1.done && (_a = schedulesCopy_2.return)) _a.call(schedulesCopy_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    // have available day and available timeslot
                    observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                        status: 200, body: {
                            resultCode: '0000',
                            schedules: schedulesCopy
                        }
                    }));
                }
                else if (new Date(2020, 4, 5).getTime() === request.body.appointmentDate) {
                    var schedulesCopy = JSON.parse(JSON.stringify(_this.schedules));
                    try {
                        // The selected appointment must be within the booking period.
                        for (var schedulesCopy_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(schedulesCopy), schedulesCopy_3_1 = schedulesCopy_3.next(); !schedulesCopy_3_1.done; schedulesCopy_3_1 = schedulesCopy_3.next()) {
                            var schedule = schedulesCopy_3_1.value;
                            // if appointmentDate is 2020-05-05, mark its as full
                            if (schedule.appointmentDate === request.body.appointmentDate) {
                                schedule.status = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full;
                                schedule.timeSlots = JSON.parse(JSON.stringify(_this.timeSlots));
                                schedule.timeSlots.forEach(function (x) { return x.status = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full; });
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (schedulesCopy_3_1 && !schedulesCopy_3_1.done && (_b = schedulesCopy_3.return)) _b.call(schedulesCopy_3);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                        status: 200, body: {
                            resultCode: '0027',
                            schedules: schedulesCopy
                        }
                    }));
                }
                else if (new Date(2020, 4, 6).getTime() === request.body.appointmentDate) {
                    var schedulesCopy = JSON.parse(JSON.stringify(_this.schedules));
                    try {
                        // The selected time slot must have vacancy for booking.
                        for (var schedulesCopy_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(schedulesCopy), schedulesCopy_4_1 = schedulesCopy_4.next(); !schedulesCopy_4_1.done; schedulesCopy_4_1 = schedulesCopy_4.next()) {
                            var schedule = schedulesCopy_4_1.value;
                            // if appointmentDate is 2020-05-06, mark its timeslot as full
                            if (schedule.appointmentDate === request.body.appointmentDate) {
                                schedule.timeSlots = JSON.parse(JSON.stringify(_this.timeSlots2));
                                schedule.timeSlots.forEach(function (timeslot) {
                                    if (timeslot.slotId === request.body.slotId) {
                                        timeslot.status = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_5__["BookingStatus"].Full;
                                    }
                                });
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (schedulesCopy_4_1 && !schedulesCopy_4_1.done && (_c = schedulesCopy_4.return)) _c.call(schedulesCopy_4);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                        status: 200, body: {
                            resultCode: '0028',
                            schedules: schedulesCopy
                        }
                    }));
                }
                observer.complete();
            }, _this.WAIT_TIME);
        });
    };
    BackendHttpInterceptor.prototype.handleEnquiryAppointment = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: {
                    resultCode: '0000',
                    userToken: '',
                    appointment: {
                        trn: '',
                        qrCode: '',
                        serviceType: 1,
                        applicant: {
                            idType: _model_IdType__WEBPACK_IMPORTED_MODULE_6__["IdType"].HKIC,
                            id: '1',
                            surname: '1'
                        },
                        appointmentDate: 1590854400000,
                        startTime: 930,
                        endTime: 1030,
                        locationEn: '',
                        locationZh: '',
                        registrations: [],
                        notifications: []
                    }
                } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.prototype.handleCancelAppointment = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: {
                    resultCode: '0000',
                    appointment: {
                        trn: '',
                        qrCode: '',
                        serviceType: 1,
                        applicant: {
                            idType: _model_IdType__WEBPACK_IMPORTED_MODULE_6__["IdType"].HKIC,
                            id: '1',
                            surname: '1'
                        },
                        appointmentDate: 1590854400000,
                        startTime: 930,
                        endTime: 1030,
                        locationEn: '',
                        locationZh: '',
                        registrations: [],
                        notifications: []
                    }
                } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.prototype.handleEnrollRegistration = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            setTimeout(function () {
                var schedulesCopy = JSON.parse(JSON.stringify(_this.schedules));
                observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000', userToken: 'xxxx.xxxx.xxxx', schedules: schedulesCopy } }));
                observer.complete();
            }, _this.WAIT_TIME);
        });
    };
    BackendHttpInterceptor.prototype.handleSubmitRegistration = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000',
                    appointment: {
                        trn: 'XXXX XXXX XXXX YYYY',
                        qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAF8ElEQVR4Xu3dwZLbMAwDUOf/PzqdHtuoM28NRnZS7JmiKICgKNnxPo7jeB43+Hs+z4fxeDxeVrDyt7JbLV1jmZ53Bw2/kTqP9GCECvJqymngNZbpeQfh/KerEr6ApoRvSD0FuQrPyHhReAK8hpKUQt2bdR26r+vapuPTeVUIJXzR8CUgl/AFelX4cWgFSpJvhXMVXoW//5RWhd9c4Uljc/c9bUd8SYJrSdd1UEkv4ZkiSzhehWp2q10CfNJkJfPq2qrwDacDJaOEV+HLY9mOrfPWe/gOAFSld3+q9hUlvYR7OpbwxfP1JIGqcEw+zTy1w2nH98gSjsgrkWqH05bw4zhO36UnpVCJ1HOuHnE0MRJ/Ojax03Uozrfu0vUZrybLtL+ESCWohA+f4ZW0JFl0jh2VtAoPEighsgrH15QVZC2FiT8dm9jpOjSBSOE6qdpNA6CL1aOVllbtHXS9ip/ane7SdQK1UwAS4K8am+z1ip/alfAFUtPVoYQPP6bcUZaT6lDCS/jyxkv3fy3fmmi3/qlRstdrqb7KLiEyGVvC8anadGIkpCVjS3gJT/Ln/NhpBd3d33mkspFV+P+m8OeOdjFLyj9G65FJj2/a3SYVY3D5satHCX/FcPp0ELM06KCED98T3L1glvASPlg/3uCqe3gG6tu7dG12kmXoHDvK7fT+P+7v3Z/tUjJK+PoXqiU8eMRZhR9HS3pSWjY0fFV4Fc4/slhup3/v4brnTpdHzeTpm7HkRm46lgRTxY9eYlRnSXVM5tCxeqTbAnzwenSUaFX4K3wlfDgbkwxNxlbhiy69e/h1X2zaUlnk4kUDSfbSJNF0Xq0OSS+yY6xitVxvCX/9bwo7SEvmKOFBj6H7ekLQ9NgSXsKX7763pONV6LQip/29XeHTt1FJ86QN5I45dDtQgpK16XpPPzzZEdx0oiUEKaAac3Ky0IpBvx5VZyV8/ZWkEo4ZNK2+aUVO+6vC8V9RJJVlOqkSf19BuC5C7a5SVUJkEnOyHWAhPf/GS9J5lnClx99zU4+jXboSqXaJWqYTUtWXxKxzaAU6ffGSBJIAn4CXzKuAaj+h/hKcq/DhX4UqGUmS6hxJAlFJTzJ5x1jN7mm76a1puirRS4yaZZrJJXydZpos43ZXPA+fTpZp5ao/JSNZr87BdiVc6X21U5BL+AKBBLzzlGUjk5h17Ljd2deUd+z1yWKVyuke46qYtXM//UOEEu63YNp9J0lawhG9KhwvLKrwKnz5q8arOlQU+NfEfJuSvqOJuTu5O5Je53h701bC99y0lfAFAlc1aEqGdvPJOqrw4BJIq1cJD04Cul/f6RTxcYRrwN9Chq5DO2P1p0kaVRa5Wi3h3ngl5Jbwi/ZXJa0KV6Ru3kHrMkq4IlXCGanxo9qdP5CvzUlix8ijoZ6Rp/sinffW30tPiFRlII9spsCX8A0N2lV7rmZLEp8mWhWubKCdAl+FV+H8nRY9ry+TSt5axeSOzJI9d4eqNL5puwjUlYhKuH2nbZpI9VfCgzN8sm8qQdN2JbyERzlAPyaMZsDBqoykYanC8WvKyBmb6YWKOlR/es7VJlDnTdahCa6x0BsvGrDaaXDT/kp4Fb7MqSpcpYZ2VfgaqKQCKaYt6UHXryCjDvimTRtc+gKEOtNFqL/ETmNRglRpOu8OO8WPFJ4AoIEkdgpoCcemrYRrSl1np4Kpwi96R346NUr4AtGW9C8p6UrktKqSq1qNRZWr/r6ipJdwpbsKd6TQMmlwk3tzDO/189nTJUT97bBTUBK7Eo5dcAlfp5niokn6FXt40jwlD0q0BGt8SSyaGCV8UYGUoBKODyK0q1a7qwgq4SV8/DNgmswt6cP/Fku77+l9+BLCtQNUOy3VapeAomN1bao09Te9bVDTlgSngCpQVylIMdB1qL8SHnTVSbIoQSV8gZSWarVLqoiOLeGKQAnnd9UU0qRSfdwvT5KSqUAp8Imddv3JHMvq9Wm/Hi3hWQpU4Rl+p0dX4cNP1ZLjzGkWfzCwhJfwH6TLedNfjp2UH6IXCYsAAAAASUVORK5CYII=',
                        serviceType: 1,
                        applicant: {
                            idType: _model_IdType__WEBPACK_IMPORTED_MODULE_6__["IdType"].HKIC,
                            id: 'AB1239',
                            surname: '大A'
                        },
                        appointmentDate: 1590854400000,
                        startTime: 930,
                        endTime: 1030,
                        locationEn: 'Counter Nos. 9-12, 4/F, Revenue Tower',
                        locationZh: '稅務大樓4樓9-12號櫃檯',
                        registrations: [{ seqNo: 1, businessName: '123' }, { seqNo: 2, businessName: 'ABC' }]
                    } } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.prototype.handleEnrollSubmission = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000', userToken: 'xxxx.xxxx.xxxx', schedules: _this.schedules } }));
                observer.complete();
            }, _this.WAIT_TIME);
        });
    };
    BackendHttpInterceptor.prototype.handleSubmitNotification = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000',
                    appointment: {
                        trn: 'XXXX XXXX XXXX YYYY',
                        qrCode: '',
                        serviceType: 2,
                        applicant: {
                            idType: _model_IdType__WEBPACK_IMPORTED_MODULE_6__["IdType"].HKIC,
                            id: 'AB1239',
                            surname: '大A'
                        },
                        appointmentDate: 1590854400000,
                        startTime: 930,
                        endTime: 1030,
                        locationEn: 'Counter Nos. 9-12, 4/F, Revenue Tower',
                        locationZh: '稅務大樓4樓9-12號櫃檯',
                        notifications: []
                    } } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.prototype.handleGetCaptcha = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            setTimeout(function () {
                //switch (Math.floor(Math.random() * 10) % 3) {
                switch (3 % 3) {
                    case 0:
                        observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                            status: 200, body: {
                                resultCode: '0000',
                                captchaImageUri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAS2klEQVR42u2df3Bb1ZXHv+e+J8kWju0YJzUmY4c0ww8PDRDcwHYhQIeydAhMZul2Wn50F0qbsLPMlM2wzA6lWQiBZShlWaYlpPzolrZbaAng7NCOJ1AILZMNhAY3OEC9jpMGY2THyIqtH0/v3bN/yJKenp703rNlSTa6M4mtj3Wf3rv3nnO/99wfAmqplmqplmqplmqpluZZEp+i56p2NusHc/ogYfrnlaFMbEFakwAgbSpKeriGnCETZWJ2ja2aWU5SHSpW2lxMWirV/N7Z3KRdg5krNq8rzY0lCpsLefHRbt1YufsLMQ+ZK4uTNlYkvbq2VlLUE0B+MAQIAgydAX0YOvTsta2fUQ5WCddcSgZysDppyWjHMu9fjSAahGwHqA1A69X+htYuVlvBSpCJA2AcNwxEtvPE2DEYYwBGBKvD/RyPhpAsZ99eqAuoVuap4lxX5iryN6wSgVXr0LSmRZXnAbQSjOUAmkG2Jh8HcBTAgCr9/a/JqX2DiL/xtBEZKlPrdeqfq5F5sriitd8KUbfB13hBJ3xf7yTfGiJaAXAw/7KMIkwCGAFj4DUZe6Zfajuel5OhOXY3wqZQqp15srhCF5X3BJa2LJO09SShrCegFaBsf8k8fWXT5V0wZkSikG+PC/2BbcnIrjeNhD5HLRjzzPJm7SqxEqLhRrX50m5R9wAIK7OX4awRmQ3MBWMQCDz9EwA4zsDjm5PHHt4jEwNuLKqD1JVl7B/jACYl65GjVShOctxlPYT4RwRbvqH6/+FjUb8JhLYcrwcGiNy4RveMubc5eWzTtZzo/7PDA/UGTv7Y7WcwALJg14yhEXCEiffGkhP/+wMYHyTYGBzkZGTUWVTMqrJmZHE3wdeyXj15k0/RbiLQ0lx3RyVoyGxzSwzJvOtj/ZM7/17G9xR70N5Au2HNa3e9XMY2ReGBMTQAfVHoe/YZsT8clmL3i3x8ZAJyzsWJ4mBtaYeGu32Lb/Up4jsEOjGnIKgElpVTILmMCB2twt9Rx/Ldt1gfsZSimH7N16uL/s3N9fJ/zoIRKSC0+0jp7qTAX58lAuevEGrzaT5f/5tGImlT8DQL5rri0iVLd6ktX+5U6h8ioCnPYPPqhGyEiFsGmw4RQielo134Txjk5L6P2Ji0vIkA0PXqos02eWHPCvEZMwLRIhCvbBe+Cz4L/0WXov4jhTF0EEm21Lw037dLxl4qDo0AfU9ZfPZ5Sv1TRNSWvVXOLTarOIGNECnC8sVJHlPqiM68VNQf/1DG3zoEmTBdiQHQdWrj5gJ5bVi6DyWASs4CAnRKk1D+rlsNnD4FeTjKODYBmTRVQLoEpEvGbiP7ACC+TGrLOUK9FUQdOeXO+a4/hxFlrdEFM9dr6jq2TAWJm58UgW67eJ5DXkvbYZuOvuSsDqBrNirN//Vjpf0b51KgsZSB5oJ/6ICCbtF0qSr8X7TGNInIYm1WZukanBjM1ynK2j5QmzZdhsWqxfdLF3mtZm7juueEdUHVH/gXdfFtF1LdsgLxYDfMVcWJTvK1rxKBKwG0MZtaFSO/w7Yy5vxaKsIy/zOD4cRw2Xql/vy88JWrvCmW2z2VhTUuJvGdjWrT1rWi7kxLMEPYxIOF05DAtuIWA7ic0AVBX2SGIHNrdSMYbdxHMZa5PqWdWlHmV4WxAdaJXnd5p9uMpQspD2tYQspX/0lt3nKuCJxqE5USLljximskteHzvhO/RMxttoaVblXg3BtMM7v3FWFpa2BTCyjGOkld+13lxFXITuq6zss5D0TlZUT+ZlLW36u2Pna+qOsy37/lpyzmJovNxzUDuBjTSgwgWMUJ5QU5Ur/6T2pDoG2pqyG3MRVF/MhRyHgiR0wQ5QsMMwOhmYkvBnAg07+5zEs2bqLcjICL7/a1bP1Xbfyb+zg+Dncz984Vt04JtjG4i4jsR0BEeVGINFtyxZdw8o3X2I6YrGzy3fcx+O8PI/Z/Q27FSZo1dAr1nM8pfvVPhqZVuTgpxK663bd40yN6eOvrMjbpVZzYVtxV4oQuAgXTQjrVarnAzSCHBdrb0LR6FZh5ujKR+d3KWNeh1NdNZ0916ExmO7dnxBCdpHacRf6lf4I2DECC2VVesKmvM49JK8CaIG7aKOoPCRl7/DUPUzoF+ziCOCMzumWLo3QtTqwWWoh5Fifpz2sGZ2Km80Gc5DEibl0iAjd0iODZJREnTLwCAChda57EiZvKym0mXsXJdOffCKBtXokTW8Ei1lzva7l5rahv8SJOCnV+jYyMo8yPixeLnGRe50t/O2Yucm/RD/gJ8Fdx5MQtEwy57nThuzgIcrOirpirpLqUNdmPvIpGTkwVZK4oO5Ztfa4jJ2aFK0CZPno+ipNsaTO1Xa0s+norKS2zipwwOE6ZAqIiU3lUIGxFea7RjuVPl9k0kwKMwZIZ+kzyFvzcCjICLtvoa1ptsTav4gRhu1hHNvRl9ZWc7wbc9nFsN7fHbpiG1BKCaXHiJS9nZ+2rhzV0I3D9rMQJgIFMY2Cn6TqnkJZDynRE5l6AHBlAYQJC5pbpPq/TIoAKMaKvbqPmpRaLc+8qicRByihJkx4ju/A+24b8vYgTc0dEOVM+RRgjDKbhvKJwkde8SKnKmKr4fOtnLE52GlP9DERyh2921mVtxTwLceKpgeqHWR/qk9p4Xot007iJ0tqr6lgzK1degnrHxUK2kZMX9OOhK/zBAwC+UFyc5LOx37yMZGgMbtaZJEKjSHz0cW4nau0HbRcj8eQQkvveQVzznDfNqDpZEymnX6jUL/+dERv0HmRmhCHpFQj+AluDy8SWCGRu3DKy7x0c33/AXf/GEmwYBcQEFWaMMLF8JcdzuM2bEQSU7cCrizUYAqtgYABFFsTausoj0KP3GGO/Y/ARz+JESnAymfqnaeCkln1tZbqRjat5ECdD0Hfdo4c/sMrmeS9OUp1dI5jPmZE4ASAli37Jyi4GS6/iJK14meCKeRQn0bARf9Tu3heAOAEA/xJSVnQKVWAma04OsxHabyR3EuiIN3HCmcAAuWTeGij3/MqI7Eeh7V7zXJyAILoUf8tapb65WC9TsOKOIoFtcuzVftZ6pwe7LiMnZIlCOjMP0Y+hbfrEw2/aRRbmeeQkhzEaIdE6kyAzAMjDrIdHoT3E4AH3kRM2WZQ75jJyEgfRI/tkos+mw14IkZMsYwQBNBaLnKgOFSq3Jic+8Kvqt/5K1O0E0OIcObFuo3LLLJP7uUyLMD9+vzb608OsR23uVQ4Zyb9BSRILgNqWk7oBhNXIzECUT7AwIcip5SOe15zkrHfYrB974171xDu7lbrNMG/4KFCB6V0uTNm+sRhzEBPaGBs92/SJH77FiXFrhaVffFsP9cL99mfHzYT3U/Or5/iCj4CwzrwiOndr2JwxdbrBFByIK05RxPTPwzLx/o2kJqaE2pWaxCy8G4Yys885U0UFWbHGGGbj+Uf1iS2vy9hBy0OwzYN5YdZBaA57E9pkm1COd8J3CREa8sQE2QiMkjEc75Nabx9r7xcKALuuOB2cHJSJdxOkjHYKXxdALW7ECblgBSIdOoBn70qO37GH4+8jf+8ZzYKxjQXmsERqAKStVeo/R8BpZY2mABN9rPX2sdbv1VWaXYgEICKA3AkZ2a1P/CLIykC3EngQxKutkRPkzZg7M5tIR5hZPLRZH3tyHyeGUfpTDfK6AzsmJI0IQwywYpQ1mkLMOqWmrApGTpQi4oRMrTDjjRNg7WWODp1p+H/CCukNRKcQUJdtBOYl5ubZ3mIsVWkMhKIsXz6kqxvv1z/5730cm0D+fjhZImZ+bctGoRtBwnmnCf9Fuc6M7LeHlYgx0UfvyMSLfawdKuQqXYkTu9Z5O45prZq4d4OvsWc5+a/tJN8FYD4VhBYv4gQMDURHiOR7u/XE0weR+O0OORWB/QJRlJChgGDJsHPhC66juhMZJMosTuIAJouJE6ezvIpVphiD1Lcmw/tXicB7Z1FgJcDnX6c2fh7AqSB0pLYcc0OuOCEd4HFmHAFh4B1OvNtnaG+TkHuf1qfGChS2nAPmrC6FWEaK0mUb6ZhDcUJAhEAhz9M6RdynbYH0yUS8D4kDAA4Msf5rAO0EtDLQ/E2c0HiSvz6oACpJI/4r/fhkP5JhBsYAjBzm5NgRNjQYJeu/3J7UU3TI0Eqi7mq1YS2ANeWe6mnmZOgzMjoyk3FcnjhB8bXsGf66jEWQmoSVAMSfkYA/oaip8RnLURgymuu25RxW0IzFyffVJVe1Q7kDTI1lntaJvyr1oe+zrhUTJ46Rk/TvvYGTj2eWcecNuNg6NaGBEPV2UI1lq0Q+i08PEdzGbQqy9MCewXGAZOadmQKkNgKWZ8NR5YucMCMywfQaHFZ5uRYnDG6wH3/ZRE5Sz99SoshJ3s6g2bJsoyh7RMSRRSFD77G2t4iwcgwyW9pCtUzrlIBV8bTOGIzdz8nJMTisOZnFOcUVmdYpHavOaR1JRE85WZvjtI7VbVZ4WqeErGqndd74nja231LunhbE2h3p60EKmI/GcMO8L4idDSuvX3bNokcN/f5hNnSLxXlbc5I3Zss0YOvCVzu36eYcrSxj0w5X4rlnues8qoMR8MJdxvgeh+GKK4vLec1kv0moFLthKOfvZWKoIsYY3G3Eng6zDNuE3oRXi8sZz6VltXlzI1uPPkkzy7kfbll2EDrXzHIKRGXZpCZjv3xZj+yZPnVPwsWxh06qMu87Bsg0DEgvjs1jxDnDBWfmMKCfC8Y27rsCjJn2vsT6U3+EESkS+HY9ABfOfrasa06sTDKgEahuBnmrRpxozH09xuSm7UZkEB4PG52X4oSBMMAvgRGfx+IkdMSY3Lw9d40oFrQ4IUaUmJ4HsGeeipOxhBHY+oIR6bERIgtanMiDrA3slrFnAA7NM3ES0nW+f7v+yU963c8fLhxxMsqGdoi0HZKwJ3WP80KchBKG/75Hjej23yA8CYcZ+IUoTgAAP09Ohj4r6x66QAmsAmF5NYsTjfnAX4zJO583hnt6S3AS+ryNnKTTgCF2xxg7qlicxMF4daec+tbNRuSF3tl/0cU8j5xMp18ghMeNTx4GY6j6xAmPSIO39xhTGx7TJ/a6FCKfgsjJ9MPtlNGjTPJBALJKxIkO8Bu7Zey2rfr4lieMiQHMbnHTQoucZB9uc3K8B8Ar1SBOpBRb9mry2keSE8/+HvHxWIq7FSKuxMm8ndaxduJHZPLoeDLxMJhGKj2t8xElo/+B0MgEpG5q/NJmusYtW3jiJH2fw5DyCY7saeDkDhBplRQnJ5Oy6bu+lss7hCJQ+m/hWhjixOQdxIesjR+UsWfA+KCy4oSWnkH+224W9auX2Xuwmjgx3avsB3C3EXurn7UXGBytoDgRBHSfLYK3LCf/Mo9C5NMlTtIPexh6dEwYjxEwUOHIiV+Q729v9rVccxKUYE2cFBAn5kq8JzE+PGQk7gSgVXLNCTGCS0hsfjKwZP1n4ENNnNi79RzXvl8/9hIDvVUQOalTIO67g9rPrImTAuLEzH4EyB5j8kEQDVfBtM6yNl9iy4VU31ETJzbixMr+x5h6G8Q/A0FWelqnCcqlG9XGW9ZSoKEmTuy3T2XYMOuT25ITzwH8dqWndYgQXELKdRtF41fOgU+tiRP7TlwAkElAHjL0t4/p8ikwhyu++JXQ1qr67zhFCVzms9+fVxMnafBHJOSPZLhnlI1XMX2gXEXXnAArNqhNt12lNJxaEyc24sTMXuf40YOcfApMoSpZc3LxBrXp9ivU+mBNnNiIEzN7zpjcNQrjpSpaEPu1G5SGG6+oiZPCfR0AeZC1aEyRW8E0WQlxYsP8i9h36yq16bKaOHFgN8VCgxL6Zpi2JFdSsBDRikuUhi23qM3dwdR7auKkEPtD8tizDPy+enbr8NlXKsFbrxGLO+ohnA4X+HSJEzP7T5ah3TL2BIBQlSySVcG0br1ovKEVSkNNnBRgE5Da60bsFYB7U6wKFskSGv1K8tsb1UWX18RJEfaWTIz06FPPgHmwktEUC2vrFnUP3KUuXlYTJwVYFCz/YsjfRiXtYKZ4RaMpZkLUcb4IPn0Hmtpq4qTA6Twv4rj+Uxn+cRTyQMWjKWZGvGaJz3d7B6nNNXFiz8QOOTUwyvzDatpeTEzBM4T/a7cozV/phFpXEyf2Z5PhMT38axDvrqbtxQS0nSUCt/xzYPGaVlI8VdyCFifmCt3H8aiSVO8DEK2W7cXTqesM+O7clXd4eSq53q0zfZzhjL7br9SJgLFR6GGbioAHlnl9HX/4xl3cejuAi1DgK+4qxYbUlrVIhn45k3ISRX4WYnavizEnL1BqVs7PmpN7L2ZxsphYcfgQWaTfLNaXlqsQ7M7grGYmZ2JtogArZkUzsTo3llxKhnnGHEeGxSxQFLAat7wQ8zIGKyVz/MaPKmGeLa6WaqmWaqmWaqmWaqms6f8BbRrZVvak6ToAAAAASUVORK5CYII=',
                                sessionId: '1234567890'
                            }
                        }));
                        break;
                    case 1:
                        observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                            status: 200, body: {
                                resultCode: '9002',
                                captchaImageUri: '',
                                sessionId: ''
                            }
                        }));
                        break;
                    case 2:
                        observer.error(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]({
                            status: 404
                        }));
                        break;
                }
                observer.complete();
            }, _this.WAIT_TIME);
        });
    };
    BackendHttpInterceptor.prototype.handleHealthCheck = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: {
                    resultCode: '0000',
                    announcement: [],
                    maintenance: []
                } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.prototype.terminateUserSession = function (request) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { resultCode: '0000' } }));
            observer.complete();
        });
    };
    BackendHttpInterceptor.ɵfac = function BackendHttpInterceptor_Factory(t) { return new (t || BackendHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])); };
    BackendHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BackendHttpInterceptor, factory: BackendHttpInterceptor.ɵfac });
    return BackendHttpInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BackendHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/interceptor/jwt.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/portal/interceptor/jwt.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constant */ "./src/app/portal/shared/constant.ts");





var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(_sessionStorage) {
        this._sessionStorage = _sessionStorage;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var token = this._sessionStorage.get(_shared_constant__WEBPACK_IMPORTED_MODULE_2__["SESSION_DATA_KEY_JWT"]);
        if (token !== null) {
            var headers = request.headers.set('Authorization', "Bearer " + token);
            request = request.clone({ headers: headers });
        }
        return next.handle(request);
    };
    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"])); };
    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
    return JwtInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/model/BookingStatus.ts":
/*!***********************************************!*\
  !*** ./src/app/portal/model/BookingStatus.ts ***!
  \***********************************************/
/*! exports provided: BookingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingStatus", function() { return BookingStatus; });
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["Available"] = "A";
    BookingStatus["Full"] = "F";
    BookingStatus["Selected"] = "S";
    BookingStatus["Holiday"] = "H";
    BookingStatus["Reserverd"] = "R";
    BookingStatus["Unavailable"] = "U";
})(BookingStatus || (BookingStatus = {}));


/***/ }),

/***/ "./src/app/portal/model/IdType.ts":
/*!****************************************!*\
  !*** ./src/app/portal/model/IdType.ts ***!
  \****************************************/
/*! exports provided: IdType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdType", function() { return IdType; });
var IdType;
(function (IdType) {
    IdType["HKIC"] = "H";
    IdType["Passport"] = "P";
})(IdType || (IdType = {}));


/***/ }),

/***/ "./src/app/portal/model/Meridiem.ts":
/*!******************************************!*\
  !*** ./src/app/portal/model/Meridiem.ts ***!
  \******************************************/
/*! exports provided: Meridiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meridiem", function() { return Meridiem; });
var Meridiem;
(function (Meridiem) {
    Meridiem["AM"] = "A";
    Meridiem["PM"] = "P";
})(Meridiem || (Meridiem = {}));


/***/ }),

/***/ "./src/app/portal/service/alert-box.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/portal/service/alert-box.service.ts ***!
  \*****************************************************/
/*! exports provided: AlertBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBoxService", function() { return AlertBoxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/alert-box/alert-box.component */ "./src/app/portal/common/alert-box/alert-box.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");




var AlertBoxService = /** @class */ (function () {
    function AlertBoxService(_bsModalService) {
        this._bsModalService = _bsModalService;
    }
    AlertBoxService.prototype.show = function (componentFactoryResolver, config) {
        var modalOption = {
            keyboard: false,
            initialState: {
                style: config.style,
                buttons: config.buttons,
                message: undefined
            }
        };
        modalOption.initialState.message = config.message;
        return this._bsModalService.show(componentFactoryResolver.resolveComponentFactory(_common_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_1__["AlertBoxComponent"]).componentType, modalOption);
    };
    AlertBoxService.ɵfac = function AlertBoxService_Factory(t) { return new (t || AlertBoxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
    AlertBoxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertBoxService, factory: AlertBoxService.ɵfac, providedIn: 'root' });
    return AlertBoxService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertBoxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/service/coalescing-component-factory-resolver.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/portal/service/coalescing-component-factory-resolver.service.ts ***!
  \*********************************************************************************/
/*! exports provided: CoalescingComponentFactoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoalescingComponentFactoryResolver", function() { return CoalescingComponentFactoryResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



/**
 * Reference: https://github.com/angular/angular/issues/14324#issuecomment-481898762
 */
var CoalescingComponentFactoryResolver = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoalescingComponentFactoryResolver, _super);
    function CoalescingComponentFactoryResolver(rootResolver) {
        var _this = _super.call(this) || this;
        _this.rootResolver = rootResolver;
        _this.inCall = false;
        _this.resolvers = new Map();
        _this.resolveComponentFactory = function (component) {
            // Prevents cyclic calls.
            if (_this.inCall) {
                return null;
            }
            _this.inCall = true;
            try {
                var result = _this.resolveInternal(component);
                return result;
            }
            finally {
                _this.inCall = false;
            }
        };
        _this.resolveInternal = function (component) {
            var e_1, _a;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(_this.resolvers.entries())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_c.value, 2), resolver = _d[0], fn = _d[1];
                    try {
                        var factory = fn.call(resolver, component);
                        if (factory) {
                            return factory;
                        }
                    }
                    catch (_e) { }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return _this.rootResolve.call(_this.rootResolver, component);
        };
        return _this;
    }
    CoalescingComponentFactoryResolver.prototype.init = function () {
        this.rootResolve = this.rootResolver.resolveComponentFactory;
        this.rootResolver.resolveComponentFactory = this.resolveComponentFactory;
    };
    CoalescingComponentFactoryResolver.prototype.registerResolver = function (resolver) {
        var original = resolver.resolveComponentFactory;
        this.resolvers.set(resolver, original);
    };
    CoalescingComponentFactoryResolver.ɵfac = function CoalescingComponentFactoryResolver_Factory(t) { return new (t || CoalescingComponentFactoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
    CoalescingComponentFactoryResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoalescingComponentFactoryResolver, factory: CoalescingComponentFactoryResolver.ɵfac });
    return CoalescingComponentFactoryResolver;
}(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoalescingComponentFactoryResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/service/language.service.ts":
/*!****************************************************!*\
  !*** ./src/app/portal/service/language.service.ts ***!
  \****************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");



var DEFAULT_LANGUAGE = 'en';
var LANGUAGE_COOKIE_KEY = 'portal.common.preferedLanguage;';
var LanguageService = /** @class */ (function () {
    function LanguageService(_cookieService) {
        this._cookieService = _cookieService;
    }
    LanguageService.prototype.initialize = function () {
        var lang = this._cookieService.get(LANGUAGE_COOKIE_KEY);
        if (!lang) {
            lang = DEFAULT_LANGUAGE;
        }
        this._language = lang;
    };
    LanguageService.prototype.register = function (translate) {
        this._translate = translate;
        this._translate.setAvailableLangs(['en', 'zh']);
        this._translate.setActiveLang(this._language);
    };
    LanguageService.prototype.setLanguage = function (lang) {
        this._translate.setActiveLang(lang);
        this._cookieService.set(LANGUAGE_COOKIE_KEY, lang);
    };
    LanguageService.prototype.getLanguage = function () {
        return this._language;
    };
    LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
    LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
    return LanguageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/service/portal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/portal/service/portal.service.ts ***!
  \**************************************************/
/*! exports provided: PortalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalService", function() { return PortalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm5/ngx-webstorage-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _ngx_config_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-config/core */ "./node_modules/@ngx-config/core/__ivy_ngcc__/fesm5/ngx-config-core.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");











var PortalService = /** @class */ (function () {
    function PortalService(_title, _systemConfig, _translate, _sessionStorage, _httpClient) {
        this._title = _title;
        this._systemConfig = _systemConfig;
        this._translate = _translate;
        this._sessionStorage = _sessionStorage;
        this._httpClient = _httpClient;
        this._isTermsAccepted = false;
    }
    PortalService.prototype.setPageTitle = function (title) {
        var _this = this;
        this._translate.events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e.type === 'translationLoadSuccess'; })).subscribe(function (eventArg) {
            _this._title.setTitle(_this._translate.translate(title));
        });
        this._translate.langChanges$.subscribe(function (_) {
            _this._title.setTitle(_this._translate.translate(title));
        });
    };
    PortalService.prototype.reg = function (browserName, userAgent) {
        var re = browserName + '(\\d+)\.(\\d)';
        var reg = new RegExp(re, 'g');
        var version = reg.exec(userAgent);
        return version[1] + '.' + version[2];
    };
    PortalService.prototype.getBrowserInfo = function () {
        var userAgent = window.navigator.userAgent;
        var browserName = '';
        var browserVersion = '';
        if (userAgent.indexOf('rv:') != -1 && userAgent.indexOf('Trident/') != -1) {
            browserName = 'Internet Explorer';
            browserVersion = this.reg('rv:', userAgent);
        }
        else if (userAgent.indexOf('Firefox/') != -1 && userAgent.indexOf('SeaMonkey/') == -1) {
            browserName = 'Firefox';
            browserVersion = this.reg('Firefox/', userAgent);
        }
        else if (userAgent.indexOf('Version/') != -1 || userAgent.indexOf('Safari/') != -1 && (userAgent.indexOf('Chrome/') == -1 && userAgent.indexOf('Chromium/') == -1)) {
            browserName = 'Safari';
        }
        else if (userAgent.indexOf('Chrome/') != -1 && userAgent.indexOf('Chromium/') == -1) {
            browserName = 'Chrome';
            browserVersion = this.reg('Chrome/', userAgent);
        }
        else if (userAgent.indexOf('CriOS/') != -1) {
            browserName = 'Chrome';
            browserVersion = this.reg('CriOS/', userAgent);
        }
        return [browserName, browserVersion];
    };
    PortalService.prototype.getCaptcha = function () {
        var _this = this;
        var browserInfo = this.getBrowserInfo();
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/PortalManagement/Portal/getCaptcha', {
                browserName: browserInfo[0],
                browserVersion: browserInfo[1]
            }, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_4__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE_SUCCESS"]) {
                        var captcha = {
                            sessionId: response.sessionId,
                            image: response.captchaImageUri
                        };
                        observer.next(captcha);
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    PortalService.prototype.healthCheck = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/PortalManagement/Portal/healthCheck', {}, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_4__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE_SUCCESS"]) {
                        observer.next({ announment: response.announcement, maintenance: response.maintenance });
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    PortalService.prototype.terminateUserSession = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/PortalManagement/Portal/terminateUserSession', null, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_4__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE_SUCCESS"]) {
                        // remove JWT from session storage after session terminated
                        _this._sessionStorage.remove(_shared_constant__WEBPACK_IMPORTED_MODULE_4__["SESSION_DATA_KEY_JWT"]);
                        observer.next();
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (errorResponse) {
                    observer.error(errorResponse.status);
                }
            });
        });
        return observable;
    };
    PortalService.ɵfac = function PortalService_Factory(t) { return new (t || PortalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_config_core__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__["TranslocoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
    PortalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortalService, factory: PortalService.ɵfac, providedIn: 'root' });
    return PortalService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: _ngx_config_core__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__["TranslocoService"] }, { type: ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/service/schedule/schedule.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/portal/service/schedule/schedule.service.ts ***!
  \*************************************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_BookingStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/BookingStatus */ "./src/app/portal/model/BookingStatus.ts");
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constant */ "./src/app/portal/shared/constant.ts");
/* harmony import */ var _ngx_config_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-config/core */ "./node_modules/@ngx-config/core/__ivy_ngcc__/fesm5/ngx-config-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");







var RESULT_CODE_DATE_NO_LONGER_AVAILABLE = '0027';
var RESULT_CODE_TIMESLOT_NO_LONGER_AVAILABLE = '0028';
var ScheduleService = /** @class */ (function () {
    function ScheduleService(_systemConfig, _httpClient) {
        this._systemConfig = _systemConfig;
        this._httpClient = _httpClient;
        this.schedules = [];
        this.timeSlots = [];
        this.schedulesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeslotsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedSchedule = null;
        this.selectedTimeslot = null;
    }
    ScheduleService.prototype.reset = function () {
        this.schedules.length = 0;
        this.timeSlots.length = 0;
        this.selectedSchedule = null;
        this.selectedTimeslot = null;
        this.schedulesUpdated.emit();
        this.timeslotsUpdated.emit();
    };
    ScheduleService.prototype.getBookingPeriod = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/AppointmentManagement/Schedule/getBookingPeriod', {}, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_3__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE_SUCCESS"]) {
                        observer.next(response.bookingPeriod);
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    ScheduleService.prototype.setSchedules = function (schedules) {
        var _this = this;
        this.schedules.length = 0;
        schedules.forEach(function (x) { return _this.schedules.push(x); });
        this.schedulesUpdated.emit();
    };
    ScheduleService.prototype.getSchedules = function (request) {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/AppointmentManagement/Schedule/getSchedule', request, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_3__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    var _a, _b, _c, _d, _e;
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE_SUCCESS"]) {
                        // clear previous selected schedule and timeslot when the user selected another appointment date
                        if ((request === null || request === void 0 ? void 0 : request.appointmentDate) != ((_a = _this.selectedSchedule) === null || _a === void 0 ? void 0 : _a.appointmentDate)) {
                            _this.selectedSchedule = null;
                            _this.selectedTimeslot = null;
                            // update the booking status with latest selected schedule and timeslot
                            _this.updateBookingStatus(response.schedules, request.appointmentDate, null);
                        }
                        else {
                            // update the booking status with latest selected schedule and timeslot
                            _this.updateBookingStatus(response.schedules, (_b = _this.selectedSchedule) === null || _b === void 0 ? void 0 : _b.appointmentDate, (_c = _this.selectedTimeslot) === null || _c === void 0 ? void 0 : _c.slotId);
                        }
                        observer.next();
                    }
                    else if (response.resultCode === RESULT_CODE_DATE_NO_LONGER_AVAILABLE) {
                        // update the booking status with previous selected schedule and timeslot
                        _this.updateBookingStatus(response.schedules, (_d = _this.selectedSchedule) === null || _d === void 0 ? void 0 : _d.appointmentDate, (_e = _this.selectedTimeslot) === null || _e === void 0 ? void 0 : _e.slotId);
                        observer.error(response.resultCode);
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    ScheduleService.prototype.acquireTimeSlot = function (request) {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._httpClient.post(_this._systemConfig.getSettings('system.hostApi') + '/services/AppointmentManagement/Schedule/acquireTimeSlot', request, {
                headers: _shared_constant__WEBPACK_IMPORTED_MODULE_3__["HEADERS_AJAX_JSON_REQUEST"]
            }).subscribe({
                next: function (response) {
                    var _a, _b;
                    if (response.resultCode === _shared_constant__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE_SUCCESS"]) {
                        // update the booking status with latest selected schedule and timeslot
                        _this.updateBookingStatus(response.schedules, request.appointmentDate, request.slotId);
                        observer.next();
                    }
                    else if (response.resultCode === RESULT_CODE_DATE_NO_LONGER_AVAILABLE || response.resultCode === RESULT_CODE_TIMESLOT_NO_LONGER_AVAILABLE) {
                        // update the booking status with previous selected schedule and timeslot
                        _this.updateBookingStatus(response.schedules, (_a = _this.selectedSchedule) === null || _a === void 0 ? void 0 : _a.appointmentDate, (_b = _this.selectedTimeslot) === null || _b === void 0 ? void 0 : _b.slotId);
                        observer.error(response.resultCode);
                    }
                    else {
                        observer.error(response.resultCode);
                    }
                },
                error: function (error) {
                    observer.error('' + error.status);
                }
            });
        });
        return observable;
    };
    ScheduleService.prototype.updateBookingStatus = function (latestSchedule, selectedAppointmentDate, selectedTimeslotId) {
        var _this = this;
        this.schedules.length = 0;
        latestSchedule.forEach(function (x) {
            // mark the schedule with date = requested date as "Selected"
            // for other schedules, status reset automatically when schedules updated
            if (selectedAppointmentDate && x.appointmentDate === selectedAppointmentDate) {
                _this.selectedSchedule = x;
                x.status = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].Selected;
                // update time slots only when the seleted schedule contains an updated time slot list
                if (x.timeSlots.length > 0) {
                    _this.timeSlots.length = 0;
                    // update time slots
                    x.timeSlots.forEach(function (y) {
                        // mark the timeslot with slotId = requested slotId as "Selected"
                        // for other timeSlots, status reset automatically when timeSlots updated
                        if (selectedTimeslotId && selectedTimeslotId === y.slotId) {
                            _this.selectedTimeslot = y;
                            y.status = _model_BookingStatus__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].Selected;
                        }
                        _this.timeSlots.push(y);
                    });
                    _this.timeslotsUpdated.emit();
                }
            }
            _this.schedules.push(x);
        });
        this.schedulesUpdated.emit();
    };
    ScheduleService.ɵfac = function ScheduleService_Factory(t) { return new (t || ScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_config_core__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
    ScheduleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScheduleService, factory: ScheduleService.ɵfac });
    return ScheduleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngx_config_core__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/shared/constant.ts":
/*!*******************************************!*\
  !*** ./src/app/portal/shared/constant.ts ***!
  \*******************************************/
/*! exports provided: SESSION_DATA_KEY_JWT, XSRF_TOKEN_COOKIE_KEY, RESULT_CODE_200, RESULT_CODE_SUCCESS, HEADERS_AJAX_JSON_REQUEST, HEADERS_AJAX_FORM_REQUEST, HEADERS_AJAX_JPEG_REQUEST, HTTP_AJAX_REQUEST_OPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_DATA_KEY_JWT", function() { return SESSION_DATA_KEY_JWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRF_TOKEN_COOKIE_KEY", function() { return XSRF_TOKEN_COOKIE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT_CODE_200", function() { return RESULT_CODE_200; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT_CODE_SUCCESS", function() { return RESULT_CODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS_AJAX_JSON_REQUEST", function() { return HEADERS_AJAX_JSON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS_AJAX_FORM_REQUEST", function() { return HEADERS_AJAX_FORM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS_AJAX_JPEG_REQUEST", function() { return HEADERS_AJAX_JPEG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_AJAX_REQUEST_OPTION", function() { return HTTP_AJAX_REQUEST_OPTION; });
var SESSION_DATA_KEY_JWT = 'brbs.jwt';
var XSRF_TOKEN_COOKIE_KEY = 'XSRF-TOKEN';
var RESULT_CODE_200 = '200';
var RESULT_CODE_SUCCESS = '0000';
var HEADERS_AJAX_JSON_REQUEST = {
    'Content-Type': 'application/json',
    'X-Ajax-call': 'true'
};
var HEADERS_AJAX_FORM_REQUEST = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Ajax-call': 'true'
};
var HEADERS_AJAX_JPEG_REQUEST = {
    'Content-Type': 'Content-Type: image/gif',
    'X-Ajax-call': 'true'
};
var HTTP_AJAX_REQUEST_OPTION = {
    headers: HEADERS_AJAX_JSON_REQUEST
};


/***/ }),

/***/ "./src/app/transloco-root.module.ts":
/*!******************************************!*\
  !*** ./src/app/transloco-root.module.ts ***!
  \******************************************/
/*! exports provided: TranslocoHttpLoader, CustomHandler, TranslocoRootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslocoHttpLoader", function() { return TranslocoHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHandler", function() { return CustomHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslocoRootModule", function() { return TranslocoRootModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm5/ngneat-transloco.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _portal_service_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portal/service/language.service */ "./src/app/portal/service/language.service.ts");








var TranslocoHttpLoader = /** @class */ (function () {
    function TranslocoHttpLoader(_httpClient, _baseHref) {
        this._httpClient = _httpClient;
        this._baseHref = _baseHref;
    }
    TranslocoHttpLoader.prototype.getTranslation = function (lang) {
        console.log(this._baseHref);
        return this._httpClient.get(window.location.origin + "/" + this._baseHref + "/assets/i18n/" + lang + ".json");
    };
    TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) { return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"])); };
    TranslocoHttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TranslocoHttpLoader, factory: TranslocoHttpLoader.ɵfac, providedIn: 'root' });
    return TranslocoHttpLoader;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslocoHttpLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"]]
            }] }]; }, null); })();
var CustomHandler = /** @class */ (function () {
    function CustomHandler(_translate) {
        this._translate = _translate;
    }
    CustomHandler.prototype.handle = function (key, config) {
        if (key.indexOf('.ErrorMsg.') > 0) {
            var lang = this._translate.getLanguage();
            var errorCode = key.split('.').pop();
            if (lang === 'en') {
                return "System busy [E-5" + errorCode + "]";
            }
            else {
                return "\u7CFB\u7D71\u7E41\u5FD9 [E-5" + errorCode + "]";
            }
        }
        else {
            return key;
        }
    };
    CustomHandler.ɵfac = function CustomHandler_Factory(t) { return new (t || CustomHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_portal_service_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"])); };
    CustomHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomHandler, factory: CustomHandler.ɵfac, providedIn: 'root' });
    return CustomHandler;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _portal_service_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }]; }, null); })();
var TranslocoRootModule = /** @class */ (function () {
    function TranslocoRootModule() {
    }
    TranslocoRootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TranslocoRootModule });
    TranslocoRootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TranslocoRootModule_Factory(t) { return new (t || TranslocoRootModule)(); }, providers: [
            {
                provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_CONFIG"],
                useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["translocoConfig"])({
                    availableLangs: ['en', 'zh'],
                    defaultLang: 'en',
                    fallbackLang: 'en',
                    reRenderOnLangChange: true,
                    prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                })
            },
            { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_LOADER"], useClass: TranslocoHttpLoader },
            { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_LOADING_TEMPLATE"], useValue: ' ' },
            { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_MISSING_HANDLER"], useClass: CustomHandler },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
                useFactory: function (s) { return s.getBaseHrefFromDOM(); },
                deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["PlatformLocation"]]
            }
        ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]],
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"]] });
    return TranslocoRootModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TranslocoRootModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]], exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslocoRootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]],
                exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoModule"]],
                providers: [
                    {
                        provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_CONFIG"],
                        useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["translocoConfig"])({
                            availableLangs: ['en', 'zh'],
                            defaultLang: 'en',
                            fallbackLang: 'en',
                            reRenderOnLangChange: true,
                            prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                        })
                    },
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_LOADER"], useClass: TranslocoHttpLoader },
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_LOADING_TEMPLATE"], useValue: ' ' },
                    { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TRANSLOCO_MISSING_HANDLER"], useClass: CustomHandler },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
                        useFactory: function (s) { return s.getBaseHrefFromDOM(); },
                        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["PlatformLocation"]]
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm5/compiler.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lkach\Documents\GitRepo\brbs-portal-ui\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map