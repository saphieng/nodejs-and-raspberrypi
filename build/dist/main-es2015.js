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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'controller-ui Hello world';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/__ivy_ngcc__/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBSpinningPreloader"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModulesPro"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBRootModules"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModulesPro"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
                ],
                providers: [ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBSpinningPreloader"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comms/comms.service.ts":
/*!****************************************!*\
  !*** ./src/app/comms/comms.service.ts ***!
  \****************************************/
/*! exports provided: CommsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommsService", function() { return CommsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class CommsService {
    constructor() {
        this.connectionSocket = null;
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    connect(ipAndPort) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.connectionSocket = yield Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__["webSocket"])(`ws://${ipAndPort}`);
                this.connectionSocket.asObservable().subscribe((newMesage) => {
                    if (newMesage) {
                        console.log(`data rx: ${JSON.stringify(newMesage)}`);
                        this.messages.next(newMesage);
                    }
                });
                resolve();
            }
            catch (err) {
                reject(err);
            }
        }));
    }
    send(message) {
        return new Promise((resolve, reject) => {
            try {
                this.connectionSocket.next((message));
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
    disconnect() {
        if (this.connectionSocket) {
            this.connectionSocket.unsubscribe();
        }
    }
}
CommsService.ɵfac = function CommsService_Factory(t) { return new (t || CommsService)(); };
CommsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommsService, factory: CommsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/__ivy_ngcc__/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBRootModules"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comms_comms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../comms/comms.service */ "./src/app/comms/comms.service.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/__ivy_ngcc__/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function HomeComponent_mdb_card_text_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mdb-card-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.receivedData, " ");
} }
class HomeComponent {
    constructor(comms) {
        this.comms = comms;
        this.commandAndData = null;
        this.receivedData = null;
    }
    ngOnInit() {
        this.comms.messages.subscribe((newMessage) => {
            if (newMessage) {
                this.receivedData = `${newMessage.Command}: ${newMessage.Data}`;
            }
        });
    }
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newCommand = this.commandAndData.split(" ")[0];
            const newData = this.commandAndData.substr(this.commandAndData.indexOf(" ") + 1);
            //special command to start websocket connection
            if (newCommand === "connect") {
                yield this.comms.connect(newData).catch(err => { this.receivedData = err; });
            }
            else { //send everything else to websockets
                const newMessage = { Command: newCommand, Data: newData };
                console.log(`tx: ${JSON.stringify(newMessage)}`);
                this.comms.send(newMessage).catch(err => { this.receivedData = err; });
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_comms_comms_service__WEBPACK_IMPORTED_MODULE_2__["CommsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 22, vars: 2, consts: [[1, "view", 2, "background-color", "#37474F", "background-size", "cover"], [1, "mask", "align-items-center"], [1, "container", 2, "padding-top", "1rem"], ["mdbInput", "", "type", "text", "placeholder", "Enter string to send", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mdbBtn", "", "type", "button", "color", "primary", "block", "true", "mdbWavesEffect", "", 3, "click"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Send To Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " This is an example of how you can send a string to the controller. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.commandAndData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Response From Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_mdb_card_text_21_Template, 2, 1, "mdb-card-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.commandAndData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.receivedData);
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbCardTitleComponent"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbCardTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n@media (max-width: 740px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n}\n@media (min-width: 800px) and (max-width: 850px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n}\n.btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n.top-nav-collapse[_ngcontent-%COMP%] {\n  background-color: #424f95 !important;\n}\n.navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n    background: #424f95 !important;\n  }\n}\n.btn-white[_ngcontent-%COMP%] {\n  color: black !important;\n}\nh6[_ngcontent-%COMP%] {\n  line-height: 1.7;\n}\n.rgba-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n}\n.view.mask[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL0M6XFxVc2Vyc1xcY2F0Y2hcXERvY3VtZW50c1xcR2l0SHViXFxub2RlanMtZW1iZWRkZWQtYm9pbGVyXFx1aS9zcmNcXGFwcFxcaG9tZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQUE7QUFFQTs7OztFQUlFLGlCQUFBO0FDQUY7QURHQTtFQUNFOzs7O0lBSUUsY0FBQTtFQ0FGO0FBQ0Y7QURFQTtFQUNFOzs7O0lBSUUsYUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLG9DQUFBO0FDREY7QURJQTtFQUNFLGtDQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UsOEJBQUE7RUNERjtBQUNGO0FESUE7RUFDRSx1QkFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtBQ0ZGO0FES0E7RUFLRSwyRkFBQTtFQUNBLGdHQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFJlcXVpcmVkIGZvciBmdWxsIGJhY2tncm91bmQgaW1hZ2UgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmhlYWRlcixcclxuLnZpZXcge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICBodG1sLFxyXG4gIGJvZHksXHJcbiAgaGVhZGVyLFxyXG4gIC52aWV3IHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIGh0bWwsXHJcbiAgYm9keSxcclxuICBoZWFkZXIsXHJcbiAgLnZpZXcge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4gLmZhIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG4udG9wLW5hdi1jb2xsYXBzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNGY5NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDI0Zjk1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXdoaXRlIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi5yZ2JhLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCA0NWRlZywgZnJvbShyZ2JhKDQyLCAyNywgMTYxLCAwLjcpKSwgdG8ocmdiYSgyOSwgMjEwLCAxNzcsIDAuNykpKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byA0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpXHJcbn1cclxuXHJcbi52aWV3Lm1hc2sge1xyXG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0iLCIvKiBSZXF1aXJlZCBmb3IgZnVsbCBiYWNrZ3JvdW5kIGltYWdlICovXG5odG1sLFxuYm9keSxcbmhlYWRlcixcbi52aWV3IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xuICBodG1sLFxuYm9keSxcbmhlYWRlcixcbi52aWV3IHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxufVxuLmJ0biAuZmEge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udG9wLW5hdi1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjRmOTUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XG4gICAgYmFja2dyb3VuZDogIzQyNGY5NSAhaW1wb3J0YW50O1xuICB9XG59XG4uYnRuLXdoaXRlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLnJnYmEtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDQ1ZGVnLCBmcm9tKHJnYmEoNDIsIDI3LCAxNjEsIDAuNykpLCB0byhyZ2JhKDI5LCAyMTAsIDE3NywgMC43KSkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG59XG5cbi52aWV3Lm1hc2sge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _comms_comms_service__WEBPACK_IMPORTED_MODULE_2__["CommsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/__ivy_ngcc__/fesm2015/ng-uikit-pro-standard.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 3, vars: 0, consts: [["SideClass", "navbar navbar-expand-lg navbar-dark special-color-dark"], ["src", "../../../assets/saphi -logo-navbar.png", "height", "30", "alt", "", 2, "padding-right", "1rem"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/__ivy_ngcc__/fesm2015/ng-uikit-pro-standard.js");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBRootModules"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot()
                ],
                exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\catch\Documents\GitHub\nodejs-embedded-boiler\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map