(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _pages_validaridentidad_validaridentidad_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/validaridentidad/validaridentidad.component */ "./src/app/pages/validaridentidad/validaridentidad.component.ts");
/* harmony import */ var _pages_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mensaje/mensaje.component */ "./src/app/pages/mensaje/mensaje.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth-guard/auth-guard.service */ "./src/app/shared/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _pages_validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/validarpep/validarpep.component */ "./src/app/pages/validarpep/validarpep.component.ts");









var routes = [
    {
        path: '',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        data: { pos: 0 },
    },
    {
        path: 'inicio',
        component: _pages_validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_6__["ValidarpepComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { pos: 1 },
    },
    {
        path: 'mensaje/:tipomensaje',
        component: _pages_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_1__["MensajeComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { pos: 2 },
    },
    {
        path: 'identidad',
        component: _pages_validaridentidad_validaridentidad_component__WEBPACK_IMPORTED_MODULE_0__["ValidaridentidadComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { pos: 3 },
    },
    {
        path: '**',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                }),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
    return AppRoutingModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null);


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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(appService, authService) {
        var _this = this;
        this.appService = appService;
        this.authService = authService;
        this.appService.componentMethodCalled$.subscribe(function () {
            _this.authService.logOut();
        });
    }
    AppComponent.prototype.ngAfterContentInit = function () { };
    AppComponent.prototype.onClick = function () {
        this.appService.resetTime();
    };
    AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-focc-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); }, hostBindings: function AppComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
        } }, consts: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "focc-loader");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-focc-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event.target']]
        }] });


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            ]] });
    return AppModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);






var AppService = /** @class */ (function () {
    function AppService(router) {
        this.router = router;
        this.loggedIn = null;
        this.logTime = null;
        this.timer = null;
        this.componentMethodCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // tslint:disable-next-line: member-ordering
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    AppService.prototype.navigateTo = function (route) {
        this.router.navigate([route]);
    };
    AppService.prototype.changeLogued = function (time) {
        this.logTime = time;
        this.validateSession();
    };
    AppService.prototype.resetTime = function () {
        window.clearTimeout(this.timer);
        this.validateSession();
    };
    AppService.prototype.validateSession = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.logTime)) {
            this.loggedIn = true;
            var timeInSeconds = parseInt(this.logTime, 0) * 60000;
            this.timer = window.setTimeout(function () {
                _this.componentMethodCallSource.next();
            }, timeInSeconds);
        }
    };
    AppService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, providedIn: 'root' });
    return AppService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null);


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _form_container_form_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-container/form-container.component */ "./src/app/core/form-container/form-container.component.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
    CoreModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
    return CoreModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _form_container_form_container_component__WEBPACK_IMPORTED_MODULE_4__["FormContainerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _form_container_form_container_component__WEBPACK_IMPORTED_MODULE_4__["FormContainerComponent"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _form_container_form_container_component__WEBPACK_IMPORTED_MODULE_4__["FormContainerComponent"]],
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _form_container_form_container_component__WEBPACK_IMPORTED_MODULE_4__["FormContainerComponent"]],
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], factory: function FooterComponent_Factory(t) { return new (t || FooterComponent)(); }, consts: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, null);


/***/ }),

/***/ "./src/app/core/form-container/form-container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/form-container/form-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainerComponent", function() { return FormContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FormContainerComponent = /** @class */ (function () {
    function FormContainerComponent() {
    }
    FormContainerComponent.prototype.ngOnInit = function () { };
    FormContainerComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormContainerComponent, selectors: [["app-form-container"]], factory: function FormContainerComponent_Factory(t) { return new (t || FormContainerComponent)(); }, consts: 2, vars: 0, template: function FormContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "form-container works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9ybS1jb250YWluZXIvZm9ybS1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FormContainerComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-container',
                templateUrl: './form-container.component.html',
                styleUrls: ['./form-container.component.scss'],
            }]
    }], function () { return []; }, null);


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");




var _c0 = [1, "row", "AzulNavy"];
var _c1 = [1, "col-lg-11", "col-md-11", "col-xs-11", "text-center"];
var _c2 = ["src", "../../assets/img/logo_header.png", 1, "img-fluid", "pt-1"];
var _c3 = [1, "col-lg-1", "col-md-11", "col-xs-11"];
var _c4 = [1, "oi", "oi-menu"];
var _c5 = [1, "btn", "btn-default", "p-3", "px-4", 3, "click"];
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    HeaderComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-focc-header"]], factory: function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"])); }, consts: 7, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener($event) { return ctx.logOut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Cerrar sesi\u00F3n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: [".AzulNavy[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0 5px 5px 0 rgba(72, 89, 102, 0.1);\n  background-color: #0081ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWwuZ29tZXovRG9jdW1lbnRzL3NvdXJjZS9mb2NjLXBpZC1mcm9udGVuZC12aW5jdWxhY2lvbi9zcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BenVsTmF2eSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoNzIsIDg5LCAxMDIsIDAuMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFmZjtcbiAgfSIsIi5BenVsTmF2eSB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSg3MiwgODksIDEwMiwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFmZjtcbn0iXX0= */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-focc-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"] }]; }, null);


/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");








var _c0 = ["modal"];
var _c1 = [1, "row", "pt-5"];
var _c2 = [1, "container-principal", "col-lg-6", "offset-lg-3", "col-md-6", "offset-md-3"];
var _c3 = [1, "row"];
var _c4 = [1, "text-center", "col-12", "pt-5"];
var _c5 = ["src", "../../assets/img/fiduoccidente.png", 1, "img-fluid"];
var _c6 = [1, "text-center", "col-lg-6", "col-md-6", "col-xs-12", "pt-5"];
var _c7 = ["src", "../../assets/img/nueva-cuenta.png", 1, "img-fluid"];
var _c8 = [1, "text-center", "col-lg-6", "col-md-6", "col-xs-12"];
var _c9 = ["id", "principalTitulo", 1, "pt-5"];
var _c10 = ["id", "descripcionTitulo", 1, "pt-3"];
var _c11 = [1, "btn", "btn-primary", "btn-principal", 3, "click"];
var _c12 = ["src", "../../assets/icons/nuevo-portal-transaccional.png", 1, "img-fluid"];
var _c13 = [1, "row", "pt-5", "pb-5"];
var _c14 = [1, "text-center", "col-12"];
var _c15 = ["src", "../../assets/img/construyendo-metas.png", 1, "img-fluid"];
var _c16 = [1, "footer", "text-center"];
var _c17 = ["src", "../../assets/img/group-6.png", 1, "img-fluid"];
var _c18 = [1, "Trminos-y-condicion", 3, "click"];
var _c19 = [3, "parametrosModal"];
var _c20 = ["modal", ""];
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, loaderService) {
        this.authService = authService;
        this.loaderService = loaderService;
        this.parametrosModal = {
            titulo: 'Términos y condiciones',
            body: 
            // tslint:disable-next-line: max-line-length
            '<center><h4>Plataforma de Inversión Digital</h4> <h5>Términos y Condiciones de la herramienta</h5><i>Versión 1 – 18 de noviembre de 2019</i></br></br></center>' +
                // tslint:disable-next-line: max-line-length
                '<p><strong>1. Descripción de las partes:</strong> fuerza comercial de Fiduciaria de Occidentey/o Banco de Occidente (Usuario) y Fiduciaria de Occidente (quién es elempresario o titular de la aplicación).</p>' +
                // tslint:disable-next-line: max-line-length
                '<p><strong>2. Usuarios:</strong> Primer despliegue - MVP: Directores Comerciales de Fiduciaria deOccidente pertenecientes a la Gerencia   Preferente,   localizados   enBogotá.Los   usuarios   que   no   cumplan   con   estas   condiciones  deberán   realizar   lasvinculaciones de sus clientes por los canales físicos tradicionales.</p>' +
                '<p><strong>3. Titular de la aplicación:</strong> Fiduciaria de Occidente</p>' +
                // tslint:disable-next-line: max-line-length
                '<p><strong>4. Objeto:</strong> El uso de un software que permita la digitalización delproceso devinculación de clientes   a   Fiduciaria   de   Occidente   y   la   constitución   deinversiones en el FIC Occirenta. El uso de la herramienta será exclusivo para la fuerza comercial de Fiduciaria de Occidente y/o Banco de Occidente, de acuerdo con el orden dedespliegue descrito en el punto 2 del presente documento, y permitirávincular a clientes que cumplan con las siguientes condiciones:<p>' +
                '- Primer despliegue – MVP:' +
                '<ul><li>Persona natural</li>' +
                '<li>Mayor de edad</li>' +
                '<li>Colombiano</li>' +
                '<li>Cliente nuevo de Fiduciaria de Occidente</li>' +
                '<li>Cliente actual de Banco de Occidente</li>' +
                '<li>Enrolado en el Personal Banking de Banco de Occidente</li>' +
                '<li>Asalariados</li>' +
                // tslint:disable-next-line: max-line-length
                '<li>Que no estén catalogados como Personas Expuestas Públicamente,Personas Políticamente Expuestas o que manejen recursos públicos(PEP).</li>' +
                '<li>Que no realicen operaciones en moneda extranjera</li>' +
                '<li>Que no tengan obligaciones tributarias en el exterior</li>' +
                '<li>Que cuenten con una línea de teléfono celular</li>' +
                '<li>Las vinculaciones de clientes que no cumplan con estas condiciones deberánrealizar por los canales físicos tradicionales.</li>' +
                '</ul>' +
                '<p><strong>5. Obligaciones de las partes:</strong>' +
                '<ul>' +
                '<li><strong>Administrador</strong></li>' +
                '<ul>' +
                '<li>Disponer de canales para brindar soporte a los usuarios en el uso de laherramienta.</li>' +
                '<li>Capacitar a los usuarios en el uso de la herramienta</li>' +
                '</ul>' +
                '<li>' +
                '<strong>Usuarios</strong>' +
                '<ul>' +
                '<li>Dar un uso adecuado a la herramienta buscando el cumplimiento delobjeto para el cual fue creada.</li>' +
                '<li>Mantener la confidencialidad en el uso de la herramienta</li>' +
                '<li>No compartir la herramienta con terceros no incluidos en los Usuarios descritos en el punto 2.</li>' +
                // tslint:disable-next-line: max-line-length
                '<li>No reproducir ni distribuir la herramienta, ni tratar de acceder al códigofuente   ni   realizar   alteraciones   que   puedan   poner   en      riesgo   sufuncionamiento.</li>' +
                '</ul>' +
                '</ul>' +
                '<p><strong>6. Qué funciones NO cumple el software:</strong><br>' +
                '<ul>' +
                '<li>No permite realizar aportes a inversiones en FIC.</li>' +
                '<li>No permite realizar retiros de inversiones en FIC.</li>' +
                '<li>No permite realizar consultas de inversiones en FIC.</li>' +
                '<li>No permite realizar vinculaciones en FIC diferentes a Occirenta.</li>' +
                // tslint:disable-next-line: max-line-length
                '<li>No permite realizar vinculaciones de clientes que no cumplan con lascaracterísticas descritas en el numeral 4 del presente documento.</li>' +
                '</ul></p>' +
                '<p><strong>7. Alcance del uso del software:</strong><br><br>' +
                'El acceso a la herramienta se realizará teniendo en cuenta los siguientes aspectos:' +
                '<ul>' +
                // tslint:disable-next-line: max-line-length
                '<li>Dispositivo: computador de escritorio, computador portátil y/o tablet,todos   ellos   suministrados   por   Fiduciaria   de   Occidente   o   Banco   deOccidente; o celular personal del usuario.</li>' +
                '<li>El acceso será directamente a través de la URL www.__________' +
                // tslint:disable-next-line: max-line-length
                '<li>Conexión a través de la red (física o WiFi) de Fiduciaria de Occidente o Banco  de   Occidente, o a través  de conexiones a internet seguras,incluidas redes de datos celulares.</li>' +
                '<li>El acceso y uso de la herramienta se realizará durante las jornadaslaborales.</li>' +
                // tslint:disable-next-line: max-line-length
                '<li>Las   credenciales   de   autenticación   de   la   herramienta   son   de   usoexclusivo de cada Usuario, y serán su correo electrónico y contraseñacon las que ingresa a su sesión en el equipo de Fiduciaria de Occidente oBanco de Occidente.</li>' +
                '</ul>' +
                '<p><strong>8. CopyRight</strong><br><br>' +
                // tslint:disable-next-line: max-line-length
                '<i>El logo y las marcas de FIDUCIARIA DE OCCIDENTE S.A. que se utilizan en LAHERRAMIENTA   son   nombres   comerciales,   marcas   y   lemas   comercialesregistrados legalmente a nombre de FIDUCIARIA DE OCCIDENTE S.A.   y seencuentran protegidas bajo las leyes de la República de Colombia. Así mismo,la información, los textos, gráficas y en general el diseño de LA HERRAMIENTAson   de   propiedad   de   FIDUCIARIA   DE   OCCIDENTE   S.A.   y   se   encuentranlegalmente protegidos por el derecho de autor. En consecuencia se encuentraprohibida la reproducción o uso total y/o parcial de todos y cada uno de loselementos aquí mencionados, por lo que cualquier uso que se les dé a losmismos por parte de los usuarios, distinto a los fines de LA HERRAMIENTA,están prohibidos, y en consecuencia cualquier conducta contraria a ello, podráser judicializada directamente por FIDUCIARIA DE OCCIDENTE S.A., debiendo sies del caso los usuarios responder por los daños y perjuicios que con su actuarcontrario a la ley pueda ocasionar al FIDUCIARIA DE OCCIDENTE S.A. y/o algúntercero al respecto. El uso de marcas, derechos de autor, nombres, logos yemblemas   que   se   utilizan   de   manera   compartida   entre   FIDUCIARIA   DEOCCIDENTE S.A. y otras marcas en LA PLATAFORMA no constituye en ningúnmomento un derecho o participación de la propiedad de los mismos por partede quien no tiene la titularidad legalmente registrada sobre ellos. Así mismo,es entendido que el hecho de compartirse diferentes marcas, logos, nombres,símbolos, imágenes y/o fotografías en LA HERRAMIENTA junto con FIDUCIARIADE OCCIDENTE S.A., no le confiere a aquellas ninguna clase de derecho de usodel logo, marcas, nombres comerciales de FIDUCIARIA DE OCCIDENTE S.A., sinla autorización previa de su parte. Los usuarios deberán respetar los derechosde   autor   y   en   general   de   propiedad   intelectual,   observar   y   cumplir   lascondiciones mínimas de acceso y las reglas de seguridad de LA HERRAMIENTAconforme a lo dispuesto en los presentes términos y condiciones.</i></p>' +
                '</ul>',
            label: false,
        };
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.loaderService.toggleLoader(false);
    };
    LoginPageComponent.prototype.onLogin = function () {
        this.authService.login();
    };
    LoginPageComponent.prototype.toogleModal = function () {
        this.modal.abrirModal();
    };
    LoginPageComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-focc-login-page"]], factory: function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); }, viewQuery: function LoginPageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadViewQuery"]())) && (ctx.modal = _t.first);
        } }, consts: 26, vars: 1, template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1", _c9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "OCCIRENTA DIGITAL");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "P", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Esta herramienta te ayudar\u00E1 en la vinculaci\u00F3n de tus clientes para constituir una inversi\u00F3n en el FIC Occirenta. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", _c11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_13_listener($event) { return ctx.onLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", _c12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Ingresar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", _c13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", _c14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", _c15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", _c16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", _c17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", _c18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_22_listener($event) { return ctx.toogleModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "T\u00E9rminos y condiciones");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "app-modal", _c19, _c20);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parametrosModal", ctx.parametrosModal);
        } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]], styles: ["#principalTitulo[_ngcontent-%COMP%] {\n  font-family: SFUIText;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: -0.3px;\n  text-align: center;\n  color: #022047;\n}\n\n#descripcionTitulo[_ngcontent-%COMP%] {\n  color: #7b8fa6;\n  text-align: center;\n}\n\n.btn-principal[_ngcontent-%COMP%] {\n  background-color: #0081ff !important;\n}\n\n.Trminos-y-condicion[_ngcontent-%COMP%] {\n  font-family: SFUIDisplay;\n  font-size: 12px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.3px;\n  color: #9240fe;\n  cursor: pointer;\n}\n\n.Trminos-y-condicion[_ngcontent-%COMP%]:not([href]) {\n  color: #9240fe;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 30px;\n    width: 100%;\n    left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWwuZ29tZXovRG9jdW1lbnRzL3NvdXJjZS9mb2NjLXBpZC1mcm9udGVuZC12aW5jdWxhY2lvbi9zcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmluY2lwYWxUaXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiBTRlVJVGV4dDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDIyMDQ3O1xuICB9XG5cbiNkZXNjcmlwY2lvblRpdHVsbyB7XG4gICAgY29sb3I6ICM3YjhmYTY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAgXG5cbi5idG4tcHJpbmNpcGFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MWZmICFpbXBvcnRhbnQ7XG59IFxuXG4uVHJtaW5vcy15LWNvbmRpY2lvbiB7XG4gICAgZm9udC1mYW1pbHk6IFNGVUlEaXNwbGF5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgY29sb3I6ICM5MjQwZmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLlRybWlub3MteS1jb25kaWNpb246bm90KFtocmVmXSl7XG4gICAgY29sb3I6ICM5MjQwZmU7XG59XG5cbi5mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbn0iLCIjcHJpbmNpcGFsVGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IFNGVUlUZXh0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAyMjA0Nztcbn1cblxuI2Rlc2NyaXBjaW9uVGl0dWxvIHtcbiAgY29sb3I6ICM3YjhmYTY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MWZmICFpbXBvcnRhbnQ7XG59XG5cbi5Ucm1pbm9zLXktY29uZGljaW9uIHtcbiAgZm9udC1mYW1pbHk6IFNGVUlEaXNwbGF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGNvbG9yOiAjOTI0MGZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5Ucm1pbm9zLXktY29uZGljaW9uOm5vdChbaHJlZl0pIHtcbiAgY29sb3I6ICM5MjQwZmU7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */"] });
    return LoginPageComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-focc-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['modal', { static: false }]
        }] });


/***/ }),

/***/ "./src/app/pages/mensaje/mensaje.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/mensaje/mensaje.component.ts ***!
  \****************************************************/
/*! exports provided: MensajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeComponent", function() { return MensajeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_enums_mensajes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/enums/mensajes.enum */ "./src/app/shared/enums/mensajes.enum.ts");
/* harmony import */ var _shared_services_app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/app-settings.service */ "./src/app/shared/services/app-settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/header/header.component */ "./src/app/core/header/header.component.ts");









var _c0 = [1, "row", "pt-5"];
var _c1 = [1, "col-lg-6", "offset-lg-3", "col-md-6", "offset-md-3"];
var _c2 = [1, "row"];
var _c3 = [1, "col-12", "text-center"];
var _c4 = [3, "src"];
var _c5 = [1, "titulo-error"];
var _c6 = [1, "mensaje-error"];
var _c7 = [1, "btn", "btn-primary", "btn-cerrar", 3, "click"];
var MensajeComponent = /** @class */ (function () {
    function MensajeComponent(activatedRoute, router, appSettings) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.appSettings = appSettings;
        this.parametros = {};
        this.rutaImg = '../../../assets/img';
    }
    MensajeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appSettings.getJSON().toPromise()];
                    case 1:
                        _a.dataSettings = _b.sent();
                        if (this.activatedRoute.snapshot.paramMap.get('tipomensaje') != null) {
                            this.tipoMensaje = JSON.parse(this.activatedRoute.snapshot.paramMap.get('tipomensaje'));
                            switch (this.tipoMensaje) {
                                case _shared_enums_mensajes_enum__WEBPACK_IMPORTED_MODULE_1__["TipoMensajes"].ErrorPep:
                                    this.parametros.titulo = this.dataSettings.titulos.ERROR_PEP;
                                    this.parametros.mensaje = this.dataSettings.mensajes.ERROR_PEP;
                                    this.parametros.icono = this.rutaImg + "/" + this.dataSettings.iconos.ERROR_PEP;
                                    this.parametros.ruta = this.dataSettings.rutas.ERROR_PEP;
                                    break;
                                default:
                                    break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MensajeComponent.prototype.regresar = function () {
        this.router.navigateByUrl(this.parametros.ruta);
    };
    MensajeComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MensajeComponent, selectors: [["app-mensaje"]], factory: function MensajeComponent_Factory(t) { return new (t || MensajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["AppSettingsService"])); }, consts: 18, vars: 3, template: function MensajeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-focc-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "P", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MensajeComponent_Template_button_click_16_listener($event) { return ctx.regresar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Cerrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.parametros.icono, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.parametros.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.parametros.mensaje);
        } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], styles: [".titulo-error[_ngcontent-%COMP%] {\n    font-family: SFUIText;\n    font-size: 14px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: -0.3px;\n    text-align: center;\n    color: #022047;\n}\n\n.mensaje-error[_ngcontent-%COMP%] {\n    font-family: SFUIText;\n    font-size: 14px;\n    font-weight: 600;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.57;\n    letter-spacing: -0.6px;\n    text-align: center;\n    color: #7b8fa6;\n}\n\n.btn-cerrar[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    background-color: #0081ff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVuc2FqZS9tZW5zYWplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVuc2FqZS9tZW5zYWplLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvLWVycm9yIHtcbiAgICBmb250LWZhbWlseTogU0ZVSVRleHQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAyMjA0Nztcbn1cblxuLm1lbnNhamUtZXJyb3Ige1xuICAgIGZvbnQtZmFtaWx5OiBTRlVJVGV4dDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3YjhmYTY7XG59XG5cbi5idG4tY2VycmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFmZiAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return MensajeComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MensajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-mensaje',
                templateUrl: './mensaje.component.html',
                styleUrls: ['./mensaje.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_services_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["AppSettingsService"] }]; }, null);


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensaje/mensaje.component */ "./src/app/pages/mensaje/mensaje.component.ts");
/* harmony import */ var _shared_services_app_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/app-settings.service */ "./src/app/shared/services/app-settings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_services_parametros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/services/parametros.service */ "./src/app/shared/services/parametros.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validarpep/validarpep.component */ "./src/app/pages/validarpep/validarpep.component.ts");
/* harmony import */ var _validaridentidad_validaridentidad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validaridentidad/validaridentidad.component */ "./src/app/pages/validaridentidad/validaridentidad.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm5/ngx-mask.js");















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PagesModule });
    PagesModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, providers: [_shared_services_parametros_service__WEBPACK_IMPORTED_MODULE_3__["ParametrosService"], _shared_services_app_settings_service__WEBPACK_IMPORTED_MODULE_1__["AppSettingsService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
            ]] });
    return PagesModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
        _validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_10__["ValidarpepComponent"],
        _validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_10__["ValidarpepComponent"],
        _validaridentidad_validaridentidad_component__WEBPACK_IMPORTED_MODULE_11__["ValidaridentidadComponent"],
        _mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_0__["MensajeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
                    _validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_10__["ValidarpepComponent"],
                    _validarpep_validarpep_component__WEBPACK_IMPORTED_MODULE_10__["ValidarpepComponent"],
                    _validaridentidad_validaridentidad_component__WEBPACK_IMPORTED_MODULE_11__["ValidaridentidadComponent"],
                    _mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_0__["MensajeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
                ],
                providers: [_shared_services_parametros_service__WEBPACK_IMPORTED_MODULE_3__["ParametrosService"], _shared_services_app_settings_service__WEBPACK_IMPORTED_MODULE_1__["AppSettingsService"]],
                entryComponents: [],
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/pages/validaridentidad/validaridentidad.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/validaridentidad/validaridentidad.component.ts ***!
  \**********************************************************************/
/*! exports provided: ValidaridentidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidaridentidadComponent", function() { return ValidaridentidadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _shared_directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/longitud-input.directive */ "./src/app/shared/directives/longitud-input.directive.ts");
/* harmony import */ var _shared_directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/validar-input.directive */ "./src/app/shared/directives/validar-input.directive.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm5/ngx-mask.js");








var _c0 = ["modal"];
var _c1 = [1, "row", "pt-5"];
var _c2 = [1, "container-principal", "col-lg-6", "offset-lg-3", "col-md-6", "offset-md-3"];
var _c3 = [1, "row"];
var _c4 = [1, "col-12", "text-center"];
var _c5 = [1, "pt-4"];
var _c6 = [1, "comencemos-diligenci"];
var _c7 = [1, "col-12"];
var _c8 = [1, "titulo-pregunta"];
var _c9 = ["type", "text", "tipo-dato", "numerico", "longitud", "11", 1, "text-input"];
var _c10 = ["type", "text", "tipo-dato", "alfanumerico", "longitud", "40", 1, "text-input"];
var _c11 = ["type", "text", "prefix", "+57", "mask", " (000) 000 00 00", "placeholder", "+57 (000) 000 00 00", "longitud", "19", 1, "text-input"];
var _c12 = [1, "col-1"];
var _c13 = ["type", "checkbox", 1, "text-input", "checkbox"];
var _c14 = [1, "col-11"];
var _c15 = [3, "click"];
var _c16 = [1, "row", "pb-3"];
var _c17 = [1, "btn", "btn-primary"];
var _c18 = ["id", "mensajeMdl", "tabindex", "-1", "role", "dialog", 1, "modal"];
var _c19 = ["role", "document", 1, "modal-dialog"];
var _c20 = [1, "modal-content"];
var _c21 = [1, "modal-header"];
var _c22 = ["id", "tituloAlerta", 1, "modal-title"];
var _c23 = ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"];
var _c24 = ["aria-hidden", "true"];
var _c25 = [1, "modal-body"];
var _c26 = ["id", "mensajeAlerta"];
var _c27 = [1, "modal-footer"];
var _c28 = ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"];
var _c29 = ["modal", ""];
var ValidaridentidadComponent = /** @class */ (function () {
    function ValidaridentidadComponent() {
        this.parametrosModal = {
            titulo: 'Términos y condiciones',
            body: 'Cuerpo de politicas',
            label: false,
        };
        this.parametrosModalFirma = {
            titulo: 'Firma electronica',
            body: 'Cuerpo de firma electronica',
            label: false,
        };
    }
    ValidaridentidadComponent.prototype.ngOnInit = function () { };
    ValidaridentidadComponent.prototype.toogleModal = function () {
        this.modal.parametrosModal = this.parametrosModal;
        this.modal.abrirModal();
    };
    ValidaridentidadComponent.prototype.toogleModalFirma = function () {
        this.modal.parametrosModal = this.parametrosModalFirma;
        this.modal.abrirModal();
    };
    ValidaridentidadComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidaridentidadComponent, selectors: [["app-validaridentidad"]], factory: function ValidaridentidadComponent_Factory(t) { return new (t || ValidaridentidadComponent)(); }, viewQuery: function ValidaridentidadComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadViewQuery"]())) && (ctx.modal = _t.first);
        } }, consts: 78, vars: 0, template: function ValidaridentidadComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-focc-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A1Conozc\u00E1monos!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Comencemos diligenciando la siguiente informaci\u00F3n del cliente.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "C\u00E9dula de ciudadan\u00EDa ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", _c9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Primer Nombre ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Segundo Nombre ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Primer apellido ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Segundo Apellido ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Celular ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", _c11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", _c12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", _c13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", _c14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "7- El cliente acepta la ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", _c15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidaridentidadComponent_Template_a_click_46_listener($event) { return ctx.toogleModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "pol\u00EDtica de tratamiento y consulta de datos.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", _c12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", _c13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", _c14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "El cliente acepta ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", _c15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidaridentidadComponent_Template_a_click_54_listener($event) { return ctx.toogleModalFirma(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "El acuerdo de firma digital.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", _c16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", _c17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Continuar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", _c18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", _c19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", _c20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", _c21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", _c22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Alerta");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", _c23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", _c24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", _c25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", _c26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Mensaje.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", _c27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", _c28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cerrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-modal", null, _c29);
        } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_3__["LongitudInputDirective"], _shared_directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_4__["ValidarInputDirective"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskDirective"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]], styles: [".text-input[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40px;\n    border-radius: 4px;\n    border: solid 1px #dfe5f9;\n    background-color: #ffffff;\n  }\n\n  .titulo-pregunta[_ngcontent-%COMP%] {\n    height: auto;\n    font-family: SFUIText;\n    font-size: 14px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.9;\n    letter-spacing: -0.3px;\n    color: #7b8fa6;\n  }\n\n  .titulo-pregunta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #0081ff;\n    font-weight: bold;\n    cursor: pointer;\n  }\n\n  .comencemos-diligenci[_ngcontent-%COMP%] {\n    font-family: SFUIText;\n    font-size: 12px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.5;\n    letter-spacing: -0.3px;\n    text-align: center;\n    color: #7b8fa6;\n  }\n\n  .checkbox.text-input[_ngcontent-%COMP%]{\n    width: 22px;\n    height: 22px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmFsaWRhcmlkZW50aWRhZC92YWxpZGFyaWRlbnRpZGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhbGlkYXJpZGVudGlkYWQvdmFsaWRhcmlkZW50aWRhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RmZTVmOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnRpdHVsby1wcmVndW50YSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBTRlVJVGV4dDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuOTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgIGNvbG9yOiAjN2I4ZmE2O1xuICB9XG5cbiAgLnRpdHVsby1wcmVndW50YSBhe1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jb21lbmNlbW9zLWRpbGlnZW5jaSB7XG4gICAgZm9udC1mYW1pbHk6IFNGVUlUZXh0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjN2I4ZmE2O1xuICB9XG5cbiAgLmNoZWNrYm94LnRleHQtaW5wdXR7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICB9XG4iXX0= */"] });
    return ValidaridentidadComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidaridentidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validaridentidad',
                templateUrl: './validaridentidad.component.html',
                styleUrls: ['./validaridentidad.component.css'],
            }]
    }], function () { return []; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modal', { static: false }]
        }] });


/***/ }),

/***/ "./src/app/pages/validarpep/validarpep.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/validarpep/validarpep.component.ts ***!
  \**********************************************************/
/*! exports provided: ValidarpepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarpepComponent", function() { return ValidarpepComponent; });
/* harmony import */ var _shared_enums_mensajes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/enums/mensajes.enum */ "./src/app/shared/enums/mensajes.enum.ts");
/* harmony import */ var _shared_enums_estados_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/enums/estados.enum */ "./src/app/shared/enums/estados.enum.ts");
/* harmony import */ var _shared_services_parametros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/parametros.service */ "./src/app/shared/services/parametros.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/longitud-input.directive */ "./src/app/shared/directives/longitud-input.directive.ts");











var _c0 = [1, "row", "pt-5"];
var _c1 = [1, "container-principal", "col-lg-6", "offset-lg-3", "col-md-6", "offset-md-3"];
var _c2 = [1, "row"];
var _c3 = [1, "col-12"];
var _c4 = [1, "pt-4"];
var _c5 = ["src", "../../../assets/icons/nuevo-cliente.png"];
var _c6 = [4, "ngFor", "ngForOf"];
var _c7 = [1, "row", "pb-3"];
var _c8 = [1, "col-12", "text-center"];
var _c9 = [1, "btn", "btn-primary", 3, "disabled", "click"];
var _c10 = ["id", "mensajeMdl", "tabindex", "-1", "role", "dialog", 1, "modal"];
var _c11 = ["role", "document", 1, "modal-dialog"];
var _c12 = [1, "modal-content"];
var _c13 = [1, "modal-header"];
var _c14 = ["id", "tituloAlerta", 1, "modal-title"];
var _c15 = ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"];
var _c16 = ["aria-hidden", "true"];
var _c17 = [1, "modal-body"];
var _c18 = ["id", "mensajeAlerta"];
var _c19 = [1, "modal-footer"];
var _c20 = ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"];
var _c21 = [1, "numeroItem"];
var _c22 = [1, "titulo-pregunta"];
var _c23 = [1, "col-4", "titulo-pregunta"];
var _c24 = ["type", "text", "type", "radio", 3, "name", "change"];
var _c25 = [1, "col-4"];
function ValidarpepComponent_ng_contanier_8_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-contanier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", _c21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", _c24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ValidarpepComponent_ng_contanier_8_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); var pregunta_r4 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.validarItems(pregunta_r4.value, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u00A0\u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", _c24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ValidarpepComponent_ng_contanier_8_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); var pregunta_r4 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.validarItems(pregunta_r4.value, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00A0\u00A0\u00A0Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", _c25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var pregunta_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", i_r5 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", pregunta_r4.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", pregunta_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", pregunta_r4.value);
} }
var ValidarpepComponent = /** @class */ (function () {
    function ValidarpepComponent(router, parametrosSvc) {
        this.router = router;
        this.parametrosSvc = parametrosSvc;
        this.esReconPublico = null;
        this.esResponTributaria = null;
        this.esMonExtranjera = null;
        this.tituloAlerta = null;
        this.mensajeAlerta = null;
        this.listaPreguntas = [];
        this.listaValidaPreguntas = [];
        this.habilitarBoton = false;
    }
    ValidarpepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametrosSvc.getParametros().subscribe(function (data) {
            if (data.status === _shared_enums_estados_enum__WEBPACK_IMPORTED_MODULE_1__["EstadosRespuesta"].OK) {
                var parametrosAll = data.parameters;
                _this.listaPreguntas = parametrosAll.filter(function (x) { return x.keyParameter === 'PEP_PREGUNTA'; })[0].items;
            }
        });
    };
    ValidarpepComponent.prototype.validarItems = function (pregunta, valor) {
        var existe = this.listaValidaPreguntas.filter(function (x) { return x.pregunta === pregunta; })[0];
        if (existe != null) {
            existe.valor = valor;
        }
        else {
            this.listaValidaPreguntas.push({ pregunta: pregunta, valor: valor });
        }
        if (this.listaValidaPreguntas.length === this.listaPreguntas.length) {
            this.habilitarBoton = true;
        }
    };
    ValidarpepComponent.prototype.validarPersonaPep = function () {
        if (this.listaValidaPreguntas.filter(function (x) { return x.valor === true; }).length > 0) {
            this.router.navigateByUrl("/mensaje/" + _shared_enums_mensajes_enum__WEBPACK_IMPORTED_MODULE_0__["TipoMensajes"].ErrorPep);
        }
        else {
            this.router.navigateByUrl("/identidad");
        }
    };
    ValidarpepComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ValidarpepComponent, selectors: [["app-validarpep"]], factory: function ValidarpepComponent_Factory(t) { return new (t || ValidarpepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_parametros_service__WEBPACK_IMPORTED_MODULE_2__["ParametrosService"])); }, consts: 29, vars: 2, template: function ValidarpepComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-focc-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Tu cliente");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ValidarpepComponent_ng_contanier_8_Template, 18, 4, "ng-contanier", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", _c9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidarpepComponent_Template_button_click_12_listener($event) { return ctx.validarPersonaPep(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Continuar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", _c11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", _c12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", _c13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h5", _c14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Alerta");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", _c15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", _c16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", _c17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", _c18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Mensaje.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", _c19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", _c20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Cerrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listaPreguntas);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵselect"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.habilitarBoton);
        } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_7__["LongitudInputDirective"]], styles: [".numeroItem[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 14px;\n}\n\n.titulo-pregunta[_ngcontent-%COMP%] {\n    font-family: SFUIText;\n    font-size: 14px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: -0.3px;\n    color: #7b8fa6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmFsaWRhcnBlcC92YWxpZGFycGVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmFsaWRhcnBlcC92YWxpZGFycGVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtZXJvSXRlbXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50aXR1bG8tcHJlZ3VudGEge1xuICAgIGZvbnQtZmFtaWx5OiBTRlVJVGV4dDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgICBjb2xvcjogIzdiOGZhNjtcbn1cbiJdfQ== */"] });
    return ValidarpepComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ValidarpepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-validarpep',
                templateUrl: './validarpep.component.html',
                styleUrls: ['./validarpep.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_services_parametros_service__WEBPACK_IMPORTED_MODULE_2__["ParametrosService"] }]; }, null);


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/__ivy_ngcc__/dist/esm/src/index.js");






var _c0 = [1, "loader-bg", 3, "ngClass"];
var _c1 = [3, "options", "width", "height"];
var _c2 = function (a0) { return { in: a0 }; };
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        var _this = this;
        this.loaderService = loaderService;
        this.showLoader = false;
        this.lottieConfig = {
            path: 'assets/pid/lottie/spinner.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true,
        };
        this.loaderService.componentMethodCalled$.subscribe(function (action) {
            _this.actionLoader(action);
        });
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent.prototype.actionLoader = function (action) {
        if (action === void 0) { action = false; }
        this.showLoader = action !== false ? true : action;
    };
    LoaderComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-focc-loader"]], factory: function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); }, inputs: { options: "options" }, consts: 2, vars: 6, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lottie-animation-view", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.showLoader == true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.lottieConfig)("width", 150)("height", 200);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ng_lottie__WEBPACK_IMPORTED_MODULE_3__["LottieAnimationViewComponent"]], styles: [".loader-bg[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.in[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWwuZ29tZXovRG9jdW1lbnRzL3NvdXJjZS9mb2NjLXBpZC1mcm9udGVuZC12aW5jdWxhY2lvbi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1iZyB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmluIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAiLCIubG9hZGVyLWJnIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
    return LoaderComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-focc-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss'],
            }]
    }], function () { return [{ type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });


/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var _c0 = ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"];
var _c1 = ["role", "document", 1, "modal-dialog", "modal-dialog-centered"];
var _c2 = [1, "modal-content"];
var _c3 = [1, "modal-header"];
var _c4 = ["id", "exampleModalLongTitle", 1, "modal-title"];
var _c5 = ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"];
var _c6 = ["aria-hidden", "true"];
var _c7 = [1, "modal-body"];
var _c8 = [3, "innerHTML"];
var _c9 = [1, "modal-footer"];
var _c10 = ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"];
var _c11 = ["type", "button", 4, "ngIf"];
var _c12 = ["type", "button"];
function ModalComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.parametrosModal.label);
} }
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.parametrosModal = {};
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.abrirModal = function () {
        $('#exampleModalCenter').modal('show');
    };
    ModalComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], factory: function ModalComponent_Factory(t) { return new (t || ModalComponent)(); }, inputs: { parametrosModal: "parametrosModal" }, consts: 15, vars: 3, template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", _c9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cerrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalComponent_button_14_Template, 2, 1, "button", _c11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parametrosModal.titulo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.parametrosModal.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parametrosModal.label !== false);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".modal-body[_ngcontent-%COMP%]{\n    overflow: scroll;\n    height: 60vh;\n    font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5e1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */"] });
    return ModalComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css'],
            }]
    }], function () { return []; }, { parametrosModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['parametrosModal']
        }] });


/***/ }),

/***/ "./src/app/shared/directives/longitud-input.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/longitud-input.directive.ts ***!
  \***************************************************************/
/*! exports provided: LongitudInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongitudInputDirective", function() { return LongitudInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LongitudInputDirective = /** @class */ (function () {
    function LongitudInputDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LongitudInputDirective.prototype.onKeyUp = function (elemento) {
        var texto = elemento.value;
        elemento.value = texto.substring(0, this.longitud);
        this.ngModelChange.emit(elemento.value);
    };
    LongitudInputDirective.prototype.onBlur = function (elemento) {
        var texto = elemento.value;
        elemento.value = texto.substring(0, this.longitud);
        this.ngModelChange.emit(elemento.value);
    };
    LongitudInputDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LongitudInputDirective, selectors: [["input"]], factory: function LongitudInputDirective_Factory(t) { return new (t || LongitudInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); }, hostBindings: function LongitudInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LongitudInputDirective_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function LongitudInputDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event.target); });
        } }, inputs: { longitud: "longitud" }, outputs: { ngModelChange: "ngModelChange" } });
    return LongitudInputDirective;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongitudInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'input',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { longitud: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['longitud']
        }], ngModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event.target']]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur', ['$event.target']]
        }] });


/***/ }),

/***/ "./src/app/shared/directives/validar-input.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/validar-input.directive.ts ***!
  \**************************************************************/
/*! exports provided: ValidarInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarInputDirective", function() { return ValidarInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ValidarInputDirective = /** @class */ (function () {
    function ValidarInputDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.patronSoloNumero = /[^0-9]/g;
        this.patronAlfanumerico = /[^0-9A-Z a-zÑñáéíóúÁÉÍÓÚ]/g;
        this.patronAlfanumericoGuion = /[^0-9A-Z a-zÑñáéíóúÁÉÍÓÚ-]/g;
        this.patronAlfanumericoGuionBackSlash = /[^/ 0-9A-Z a-zÑñáéíóúÁÉÍÓÚ-]/g;
        this.patronFormato24 = /[^0-9:]/g;
        this.patronNumericoPunto = /[^0-9.]/g;
        this.patronTexto = /[^A-Z a-zÑñáéíóúÁÉÍÓÚ]/g;
        this.patronFecha = /[^0-9/]/g;
        this.patronSoloLetras = /[^A-Z a-zÑñáéíóúÁÉÍÓÚ]/g;
        this.patronEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{4,63}$/i;
        this.expresion = null;
    }
    ValidarInputDirective.prototype.onKeyUp = function (elemento) {
        elemento.value = this.getValorValidado(elemento.value);
        this.ngModelChange.emit(elemento.value);
    };
    /**
     * Evento ejecutado al quitar foco del elemento
     * @param elemento
     */
    ValidarInputDirective.prototype.onBlur = function (elemento) {
        elemento.value = this.getValorValidado(elemento.value);
        this.ngModelChange.emit(elemento.value);
    };
    ValidarInputDirective.prototype.getValorValidado = function (valorIn) {
        var valorFinal = null;
        switch (this.tipoDato) {
            case 'numerico':
                valorFinal = (valorIn + '').replace(this.patronSoloNumero, '');
                break;
            case 'alfanumerico':
                valorFinal = (valorIn + '').replace(this.patronAlfanumerico, '');
                break;
            case 'fecha':
                valorFinal = (valorIn + '').replace(this.patronFecha, '');
                break;
            case 'alfanumericoGuion':
                valorFinal = (valorIn + '').replace(this.patronAlfanumericoGuion, '');
                break;
            case 'alfanumericoGuionBackSlash':
                valorFinal = (valorIn + '').replace(this.patronAlfanumericoGuionBackSlash, '');
                break;
            case 'formato24':
                valorFinal = (valorIn + '').replace(this.patronFormato24, '');
                break;
            case 'numericoPunto':
                valorFinal = (valorIn + '').replace(this.patronNumericoPunto, '');
                break;
            case 'texto':
                valorFinal = (valorIn + '').replace(this.patronTexto, '');
                break;
            case 'parametro':
                valorFinal = (valorIn + '').replace(this.expresion, '');
                break;
            case 'numericoPuntoDuo':
                valorFinal = this.validacionDecimalesEnteros(valorIn);
                break;
            case 'soloAlfabeto':
                valorFinal = (valorIn + '').replace(this.patronSoloLetras, '');
                break;
            case 'email':
                valorFinal = (valorIn + '').replace(this.patronEmail, '');
                break;
            default:
                valorFinal = valorIn;
                break;
        }
        return valorFinal;
    };
    ValidarInputDirective.prototype.validacionDecimalesEnteros = function (Dato) {
        var valorRespuesta = null;
        var regPrimera = /^[0-9]{1,2}$/g;
        var regSegunda = /^[0-9]{1,2}[.]{1}$/g;
        var regTercera = /^[0-9]{1,2}[.]{1}[0-9]{1,2}$/g;
        if (regPrimera.test(Dato)) {
            valorRespuesta = Dato;
        }
        else if (regSegunda.test(Dato)) {
            valorRespuesta = Dato;
        }
        else if (regTercera.test(Dato)) {
            valorRespuesta = Dato;
        }
        else {
            valorRespuesta = Dato.substring(0, Dato.length - 1);
        }
        return valorRespuesta;
    };
    ValidarInputDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ValidarInputDirective, selectors: [["input", "tipo-dato", ""]], factory: function ValidarInputDirective_Factory(t) { return new (t || ValidarInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); }, hostBindings: function ValidarInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ValidarInputDirective_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ValidarInputDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event.target); });
        } }, inputs: { tipoDato: ["tipo-dato", "tipoDato"], expresion: ["regExp", "expresion"] }, outputs: { ngModelChange: "ngModelChange" } });
    return ValidarInputDirective;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidarInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'input[tipo-dato]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { tipoDato: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tipo-dato']
        }], expresion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['regExp']
        }], ngModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event.target']]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur', ['$event.target']]
        }] });


/***/ }),

/***/ "./src/app/shared/enums/estados.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/enums/estados.enum.ts ***!
  \**********************************************/
/*! exports provided: EstadosRespuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosRespuesta", function() { return EstadosRespuesta; });
var EstadosRespuesta;
(function (EstadosRespuesta) {
    EstadosRespuesta["OK"] = "OK";
})(EstadosRespuesta || (EstadosRespuesta = {}));


/***/ }),

/***/ "./src/app/shared/enums/mensajes.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/enums/mensajes.enum.ts ***!
  \***********************************************/
/*! exports provided: TipoMensajes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMensajes", function() { return TipoMensajes; });
var TipoMensajes;
(function (TipoMensajes) {
    TipoMensajes[TipoMensajes["ErrorPep"] = 0] = "ErrorPep";
})(TipoMensajes || (TipoMensajes = {}));


/***/ }),

/***/ "./src/app/shared/interceptors/session-validate.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/interceptors/session-validate.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: SessionValidateInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionValidateInterceptor", function() { return SessionValidateInterceptor; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/esm5/angular-oauth2-oidc.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");











var SessionValidateInterceptor = /** @class */ (function () {
    function SessionValidateInterceptor(oauthService, appService, loaderService) {
        this.oauthService = oauthService;
        this.appService = appService;
        this.loaderService = loaderService;
        this.claims = null;
        this.authHeader = null;
    }
    SessionValidateInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.claims = this.oauthService.getIdentityClaims();
        request = request.clone({
            setHeaders: { Authorization: "Bearer " + this.oauthService.getIdToken() },
        });
        if (!this.oauthService.hasValidIdToken() &&
            request.url.search(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authUrl) === -1) {
            this.oauthService.logoutUrl = this.oauthService.loginUrl.replace('oauth2/authorize', "logout?client_id=" + this.oauthService.clientId + "&logout_uri=" + this.oauthService.postLogoutRedirectUri);
            this.oauthService.logOut();
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (httpErrorResponse) {
            return _this.handleAuthError(request, httpErrorResponse);
        }));
    };
    SessionValidateInterceptor.prototype.handleAuthError = function (request, httpErrorResponse) {
        var _this = this;
        var response = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        if (httpErrorResponse.status === 0) {
            this.loaderService.toggleLoader(false);
        }
        var message = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])('World!'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(6000)));
        message.subscribe(function (val) {
            _this.appService.navigateTo('/');
        });
        return response;
    };
    SessionValidateInterceptor.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SessionValidateInterceptor, factory: function SessionValidateInterceptor_Factory(t) { return new (t || SessionValidateInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"])); }, providedIn: null });
    return SessionValidateInterceptor;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SessionValidateInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }]; }, null);


/***/ }),

/***/ "./src/app/shared/models/auth/auth.config.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/auth/auth.config.ts ***!
  \***************************************************/
/*! exports provided: authConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");

var authConfig = {
    issuer: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authUrl,
    strictDiscoveryDocumentValidation: false,
    redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].redirectUri,
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].clientId,
    scope: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].scope,
    responseType: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].responseType,
    customQueryParams: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].customQueryParams,
    showDebugInformation: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].showDebugInformation,
    sessionChecksEnabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].sessionChecksEnabled,
    postLogoutRedirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].postLogoutRedirectUri,
};


/***/ }),

/***/ "./src/app/shared/services/app-settings.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/app-settings.service.ts ***!
  \*********************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");




var AppSettingsService = /** @class */ (function () {
    function AppSettingsService(http) {
        this.http = http;
        this.rutaArchivo = './assets/appsettings.json';
    }
    AppSettingsService.prototype.getJSON = function () {
        return this.http.get(this.rutaArchivo);
    };
    AppSettingsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppSettingsService, factory: function AppSettingsService_Factory(t) { return new (t || AppSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, providedIn: 'root' });
    return AppSettingsService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null);


/***/ }),

/***/ "./src/app/shared/services/auth-guard/auth-guard.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/auth-guard/auth-guard.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");







var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.authService.verifySession().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (isVerified) {
            if (!isVerified) {
                _this.router.navigate(['/']);
            }
            return isVerified;
        }));
    };
    AuthGuardService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); }, providedIn: null });
    return AuthGuardService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null);


/***/ }),

/***/ "./src/app/shared/services/authentication/authentication.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/authentication/authentication.service.ts ***!
  \**************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _models_auth_auth_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/auth/auth.config */ "./src/app/shared/models/auth/auth.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");













var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(oauthService, router, loaderService) {
        this.oauthService = oauthService;
        this.router = router;
        this.loaderService = loaderService;
        this.authHeader = null;
        this.claims = null;
        this.autoCounter = 0;
        this.configureWithNewConfigApi();
    }
    AuthenticationService.prototype.login = function () {
        sessionStorage.removeItem('skipalert');
        this.oauthService.initImplicitFlow();
    };
    AuthenticationService.prototype.logOut = function () {
        this.loaderService.toggleLoader(true);
        this.handleLogout();
    };
    AuthenticationService.prototype.verifySession = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.validateAuthToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (isValidAuthToken) { return _this.getClaims(isValidAuthToken); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (claimsExists) { return _this.setManagerData(claimsExists); }));
    };
    AuthenticationService.prototype.validateAuthToken = function () {
        this.claims = this.oauthService.getIdentityClaims();
        this.autoCounter++;
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.claims) &&
            this.autoCounter > 2 &&
            !/access_token/.test(window.location.href)) {
            this.router.navigate(['/']);
        }
        this.authHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                Authorization: "Bearer " + this.oauthService.getIdToken(),
            }),
        };
        return (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.claims) &&
            !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.oauthService.getAccessToken()));
    };
    AuthenticationService.prototype.getClaims = function (isValidAuthToken) {
        var _this = this;
        if (!isValidAuthToken) {
            var uri = window.location.href;
            var result = uri.match(/customErrorFOCC-(.*?)\./);
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(result) && result.length > 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
            return this.oauthService.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (oAuthEvent) { return _this.validateAuthToken(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(_this.claims)); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(isValidAuthToken);
        }
    };
    AuthenticationService.prototype.setManagerData = function (claimsExists) {
        if (claimsExists) {
            this.currentManager = Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.currentManager)
                ? {
                    firstName: this.claims.given_name,
                    email: this.claims.email,
                }
                : this.currentManager;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
    };
    AuthenticationService.prototype.handleLogout = function () {
        this.oauthService.logoutUrl = this.oauthService.loginUrl.replace('oauth2/authorize', "logout?client_id=" + this.oauthService.clientId + "&logout_uri=" + this.oauthService.postLogoutRedirectUri);
        this.oauthService.logOut();
    };
    AuthenticationService.prototype.configureWithNewConfigApi = function () {
        this.oauthService.configure(_models_auth_auth_config__WEBPACK_IMPORTED_MODULE_2__["authConfig"]);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["JwksValidationHandler"]();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    };
    AuthenticationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"])); }, providedIn: 'root' });
    return AuthenticationService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }]; }, null);


/***/ }),

/***/ "./src/app/shared/services/loader/loader.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/loader/loader.service.ts ***!
  \**********************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.componentMethodCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // tslint:disable-next-line: member-ordering
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    LoaderService.prototype.toggleLoader = function (state) {
        this.componentMethodCallSource.next(state);
    };
    LoaderService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: function LoaderService_Factory(t) { return new (t || LoaderService)(); }, providedIn: 'root' });
    return LoaderService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null);


/***/ }),

/***/ "./src/app/shared/services/parametros.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/parametros.service.ts ***!
  \*******************************************************/
/*! exports provided: ParametrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametrosService", function() { return ParametrosService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ParametrosService = /** @class */ (function () {
    function ParametrosService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].urlApiParametros;
    }
    ParametrosService.prototype.getParametros = function () {
        return this.http.get(this.apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ParametrosService.prototype.getParametrosIndex = function (index) {
        var parametrosAll = [];
        this.http
            .get(this.apiURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError))
            .subscribe(function (datos) {
            parametrosAll = datos.parameters;
            return parametrosAll.filter(function (x) { return (x.keyParameter = index); });
        });
        return [];
    };
    ParametrosService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ParametrosService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ParametrosService, factory: function ParametrosService_Factory(t) { return new (t || ParametrosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); }, providedIn: 'root' });
    return ParametrosService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ParametrosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null);


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/__ivy_ngcc__/esm5/angular-oauth2-oidc.js");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/__ivy_ngcc__/dist/esm/src/index.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/shared/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/shared/services/authentication/authentication.service.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _interceptors_session_validate_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/session-validate.interceptor */ "./src/app/shared/interceptors/session-validate.interceptor.ts");
/* harmony import */ var _directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/validar-input.directive */ "./src/app/shared/directives/validar-input.directive.ts");
/* harmony import */ var _directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/longitud-input.directive */ "./src/app/shared/directives/longitud-input.directive.ts");
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"],
            _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_session_validate_interceptor__WEBPACK_IMPORTED_MODULE_10__["SessionValidateInterceptor"],
                multi: true,
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthModule"].forRoot(),
                ng_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieAnimationViewModule"].forRoot(),
            ]] });
    return SharedModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"],
        _directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_11__["ValidarInputDirective"],
        _directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_12__["LongitudInputDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthModule"], ng_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieAnimationViewModule"]], exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"],
        _directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_11__["ValidarInputDirective"],
        _directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_12__["LongitudInputDirective"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthModule"].forRoot(),
                    ng_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieAnimationViewModule"].forRoot(),
                ],
                declarations: [
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"],
                    _directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_11__["ValidarInputDirective"],
                    _directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_12__["LongitudInputDirective"],
                ],
                exports: [
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"],
                    _directives_validar_input_directive__WEBPACK_IMPORTED_MODULE_11__["ValidarInputDirective"],
                    _directives_longitud_input_directive__WEBPACK_IMPORTED_MODULE_12__["LongitudInputDirective"],
                ],
                providers: [
                    _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
                    _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"],
                    _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_session_validate_interceptor__WEBPACK_IMPORTED_MODULE_10__["SessionValidateInterceptor"],
                        multi: true,
                    },
                ],
                entryComponents: [],
            }]
    }], null, null);


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
    production: false,
    urlApiParametros: 'https://z3az29e3xe.execute-api.us-east-2.amazonaws.com/dev/parametros',
    backEndUrl: 'http://localhost:3000',
    // auth configuration variables
    authUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_dmQco0Y9l',
    strictDiscoveryDocumentValidation: false,
    redirectUri: 'http://localhost:4200/inicio',
    clientId: '67pl5q8qg96vegh46hcsrv94u6',
    scope: 'aws.cognito.signin.user.admin email openid',
    responseType: 'TOKEN',
    customQueryParams: { identity_provider: 'foccAzureProvider' },
    showDebugInformation: true,
    sessionChecksEnabled: false,
    postLogoutRedirectUri: 'http://localhost:4200',
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    // tslint:disable-next-line:no-console
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/manuel.gomez/Documents/source/focc-pid-frontend-vinculacion/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map