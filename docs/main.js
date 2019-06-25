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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-icon {\n  width: 40px;\n  margin-right: 10px;\n}\n\n.header-fill {\n  flex: 1;\n}\n\n.battery-level-indicator mat-icon {\n  margin-right: -4px;\n  vertical-align: text-bottom;\n}\n\n.battery-level-indicator {\n  padding-right: 12px;\n}\n\nmat-card {\n  margin-bottom: 10px;\n}\n\n.connection-options {\n  margin-top: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlci1maWxsIHtcbiAgZmxleDogMTtcbn1cblxuLmJhdHRlcnktbGV2ZWwtaW5kaWNhdG9yIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi5iYXR0ZXJ5LWxldmVsLWluZGljYXRvciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbm5lY3Rpb24tb3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <img src=\"assets/brain.svg\" alt=\"Brain icon\" class=\"app-icon\" />\n  Portable EEG with MUSE headband\n  <span class=\"header-fill\"></span>\n  <span [hidden]=\"!(batteryLevel|async)\" class=\"battery-level-indicator\">\n    <mat-icon>battery_std</mat-icon>{{batteryLevel|async|number:\"1.0-0\"}}%\n  </span>\n  <mat-icon *ngIf=\"connected\" (click)=\"disconnect()\" title=\"Disconnect\">bluetooth_connected</mat-icon>\n</mat-toolbar>\n<section>\n  <mat-card *ngIf=\"!connected\">\n    <button *ngIf=\"!connecting\" mat-raised-button color=\"primary\" (click)=\"connect()\">\n      <mat-icon>bluetooth</mat-icon>\n      Connect\n    </button>\n    <div *ngIf=\"connecting\">\n      Connecting...\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n  </mat-card>\n  <mat-card *ngIf=\"data\">\n    <mat-card-content>\n      <app-time-series [data]=\"data\"></app-time-series>\n    </mat-card-content>\n  </mat-card>\n  <mat-card *ngIf=\"connected\">\n    <app-headset-info [controlResponses]=\"controlResponses\"></app-headset-info>\n  </mat-card>\n</section>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var muse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! muse-js */ "./node_modules/muse-js/dist/muse.js");
/* harmony import */ var muse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(muse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(cd, snackBar) {
        this.cd = cd;
        this.snackBar = snackBar;
        this.connecting = false;
        this.connected = false;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.muse = new muse_js__WEBPACK_IMPORTED_MODULE_3__["MuseClient"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.muse.connectionStatus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy))
            .subscribe(function (status) {
            _this.connected = status;
            _this.data = null;
            _this.batteryLevel = null;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
    };
    AppComponent.prototype.connect = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connecting = true;
                        this.snackBar.dismiss();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4 /*yield*/, this.muse.connect()];
                    case 2:
                        _a.sent();
                        this.controlResponses = this.muse.controlResponses;
                        return [4 /*yield*/, this.muse.start()];
                    case 3:
                        _a.sent();
                        this.data = this.muse.eegReadings.pipe(muse_js__WEBPACK_IMPORTED_MODULE_3__["zipSamples"], Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.cd.detectChanges(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
                        this.batteryLevel = this.muse.telemetryData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (t) { return t.batteryLevel; }));
                        return [4 /*yield*/, this.muse.deviceInfo()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        err_1 = _a.sent();
                        this.snackBar.open('Connection failed: ' + err_1.toString(), 'Dismiss');
                        return [3 /*break*/, 7];
                    case 6:
                        this.connecting = false;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.disconnect = function () {
        this.muse.disconnect();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _time_series_time_series_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-series/time-series.component */ "./src/app/time-series/time-series.component.ts");
/* harmony import */ var _shared_chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/chart.service */ "./src/app/shared/chart.service.ts");
/* harmony import */ var _headset_info_headset_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./headset-info/headset-info.component */ "./src/app/headset-info/headset-info.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _time_series_time_series_component__WEBPACK_IMPORTED_MODULE_7__["TimeSeriesComponent"],
                _headset_info_headset_info_component__WEBPACK_IMPORTED_MODULE_9__["HeadsetInfoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            ],
            providers: [
                _shared_chart_service__WEBPACK_IMPORTED_MODULE_8__["ChartService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/headset-info/headset-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/headset-info/headset-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRzZXQtaW5mby9oZWFkc2V0LWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/headset-info/headset-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/headset-info/headset-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Headset Info</h2>\n<ul>\n  <li>Name: <strong>{{headsetName|async}}</strong></li>\n  <li>Firmware version: {{firmwareVersion|async}}</li>\n  <li>Hardware version: {{hardwareVersion|async}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/headset-info/headset-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/headset-info/headset-info.component.ts ***!
  \********************************************************/
/*! exports provided: HeadsetInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadsetInfoComponent", function() { return HeadsetInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HeadsetInfoComponent = /** @class */ (function () {
    function HeadsetInfoComponent() {
    }
    HeadsetInfoComponent.prototype.ngOnInit = function () {
    };
    HeadsetInfoComponent.prototype.ngOnChanges = function () {
        if (this.controlResponses) {
            var cr = this.controlResponses;
            this.headsetName = cr.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.hn; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean));
            this.firmwareVersion = cr.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.fw; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean));
            this.hardwareVersion = cr.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.hw; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], HeadsetInfoComponent.prototype, "controlResponses", void 0);
    HeadsetInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headset-info',
            template: __webpack_require__(/*! ./headset-info.component.html */ "./src/app/headset-info/headset-info.component.html"),
            styles: [__webpack_require__(/*! ./headset-info.component.css */ "./src/app/headset-info/headset-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadsetInfoComponent);
    return HeadsetInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/bandpass.filter.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/bandpass.filter.ts ***!
  \*******************************************/
/*! exports provided: bandpass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bandpass", function() { return bandpass; });
/* harmony import */ var fili__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fili */ "./node_modules/fili/dist/fili.min.js");
/* harmony import */ var fili__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fili__WEBPACK_IMPORTED_MODULE_0__);

function bandpass(samplingFreq, lowFreq, highFreq) {
    var firCalculator = new fili__WEBPACK_IMPORTED_MODULE_0__["FirCoeffs"]();
    var Coefficients = firCalculator.bandpass({
        order: 101,
        Fs: samplingFreq,
        F2: lowFreq,
        F1: highFreq,
    });
    var filter = new fili__WEBPACK_IMPORTED_MODULE_0__["FirFilter"](Coefficients);
    return function (value) { return filter.singleStep(value); };
}


/***/ }),

/***/ "./src/app/shared/chart.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/chart.service.ts ***!
  \*****************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartService = /** @class */ (function () {
    function ChartService() {
    }
    ChartService.prototype.getChartSmoothieDefaults = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return Object.assign({
            responsive: true,
            millisPerPixel: 6,
            grid: {
                millisPerLine: 200,
                lineWidth: 1,
                fillStyle: 'transparent',
                strokeStyle: 'rgb(230, 230, 230)',
                sharpLines: true,
                verticalSections: 0,
                borderVisible: false
            },
            labels: {
                disabled: true
            }
        }, overrides);
    };
    ChartService.prototype.getColors = function () {
        return [
            { borderColor: 'rgba(112,185,252,1)', backgroundColor: 'rgba(112,185,252,1)' },
            { borderColor: 'rgba(116,150,161,1)', backgroundColor: 'rgba(116,150,161,1)' },
            { borderColor: 'rgba(162,86,178,1)', backgroundColor: 'rgba(162,86,178,1)' },
            { borderColor: 'rgba(144,132,246,1)', backgroundColor: 'rgba(144,132,246,1)' },
            { borderColor: 'rgba(138,219,229,1)', backgroundColor: 'rgba(138,219,229,1)' },
            { borderColor: 'rgba(207,181,59, 1)', backgroundColor: 'rgba(207,181,59, 1)' },
            { borderColor: 'rgba(148,159,177,1)', backgroundColor: 'rgba(148,159,177,1)' },
            { borderColor: 'rgba(77,83,96,1)', backgroundColor: 'rgba(77,83,96,1)' }
        ];
    };
    ChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "./src/app/time-series/time-series.component.css":
/*!*******************************************************!*\
  !*** ./src/app/time-series/time-series.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n:host {\n  display: flex;\n  position: relative;\n  font-family: Roboto, sans-serif;\n}\n\n.time-series {\n  width: 100%; \n  display: flex;\n  flex-direction: column;\n}\n\n.time-series-channel {\n  display: flex;\n  flex-direction: column;\n  width: 100%; \n  position: relative;\n  height: calc(100vh / 2.5); max-height: 250px;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #dddddd;\n}\n\n.time-series-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #f2f2f2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  border-right: 1px solid #dddddd;\n}\n\n.time-series-number {\n  height: 16px;\n  width: 28px;\n  font-size: 13px;\n  font-weight: 300;\n  border-radius: 50%;\n  padding: 4px;\n  display: flex;\n  line-height: 18px;\n  justify-content: center;\n  color: white;\n}\n\n.time-series-canvas {\n  display: flex;\n  width: 100%; \n  height: calc(100vh / 2.5); max-height: 250px;\n  background: none;\n}\n\n.time-series-amplitude {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 12px;\n  color: #f2f2f2;\n  background: #f2f2f2;\n  padding: 3px 6px;\n  border-radius: 9px;\n}\n\n.graph-settings {\n  margin-top: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1zZXJpZXMvdGltZS1zZXJpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFFLGlCQUFpQjtFQUM1Qyx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUIsRUFBRSxpQkFBaUI7RUFDNUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90aW1lLXNlcmllcy90aW1lLXNlcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn1cblxuLnRpbWUtc2VyaWVzIHtcbiAgd2lkdGg6IDEwMCU7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGltZS1zZXJpZXMtY2hhbm5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlOyBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLyAyLjUpOyBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi50aW1lLXNlcmllcy1jb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4udGltZS1zZXJpZXMtbnVtYmVyIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMjhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aW1lLXNlcmllcy1jYW52YXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTsgXG4gIGhlaWdodDogY2FsYygxMDB2aCAvIDIuNSk7IG1heC1oZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udGltZS1zZXJpZXMtYW1wbGl0dWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbi5ncmFwaC1zZXR0aW5ncyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/time-series/time-series.component.html":
/*!********************************************************!*\
  !*** ./src/app/time-series/time-series.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"time-series\" [ngClass]=\"{ 'loading': !amplitudes }\">\n    <article class=\"time-series-channel\" *ngFor=\"let canvas of canvases, let i = index\">\n        <aside class=\"time-series-control\">\n            <div class=\"time-series-number\"\n                [ngStyle]=\"{ 'background': colors[i].borderColor }\">\n                {{ channelNames[i] }}\n            </div>\n        </aside>\n        <canvas class=\"time-series-canvas\"></canvas>\n        <aside class=\"time-series-amplitude\"\n            [ngStyle]=\"{ 'background': colors[i].borderColor }\">\n            {{ uVrms[i].toFixed(1) }} &micro;Vrms\n        </aside>\n    </article>\n\n    <div class=\"graph-settings\">\n      <mat-checkbox [(ngModel)]=\"filter\">Notch filter (60 Hz)</mat-checkbox>\n    </div>\n\n    <div class=\"graph-settings\">\n      <div>Amplitude Scale : <mat-slider [(ngModel)]=\"amplitudeScale\" min=\"10\" max=\"150\" step=\"10\"></mat-slider> {{amplitudeScale}}</div>\n      <div>Time Scale : <mat-slider [(ngModel)]=\"timeScale\" min=\"2\" max=\"8\" step=\"1\"></mat-slider> {{timeScale}}</div>\n      bandpass: low 1 Hz, high 40 Hz.\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/time-series/time-series.component.ts":
/*!******************************************************!*\
  !*** ./src/app/time-series/time-series.component.ts ***!
  \******************************************************/
/*! exports provided: TimeSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSeriesComponent", function() { return TimeSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var smoothie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smoothie */ "./node_modules/smoothie/smoothie.js");
/* harmony import */ var smoothie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_bandpass_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/bandpass.filter */ "./src/app/shared/bandpass.filter.ts");
/* harmony import */ var _shared_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/chart.service */ "./src/app/shared/chart.service.ts");







var samplingFrequency = 256;
var TimeSeriesComponent = /** @class */ (function () {
    function TimeSeriesComponent(view, chartService) {
        this.view = view;
        this.chartService = chartService;
        this.filter = true;
        this.channels = 2;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.channelNames = ['L', 'R'];
        this.amplitudes = [];
        this.uVrms = [0, 0];
        this.uMeans = [0, 0];
        this.options = this.chartService.getChartSmoothieDefaults({
            millisPerPixel: 5,
            maxValue: 120,
            minValue: -120
        });
        this.colors = this.chartService.getColors();
        this.HighPass = 40;
        this.LowPass = 1;
    }
    Object.defineProperty(TimeSeriesComponent.prototype, "amplitudeScale", {
        get: function () {
            return this.canvases[0].options.maxValue;
        },
        set: function (value) {
            for (var _i = 0, _a = this.canvases; _i < _a.length; _i++) {
                var canvas = _a[_i];
                canvas.options.maxValue = value;
                canvas.options.minValue = -value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSeriesComponent.prototype, "timeScale", {
        get: function () {
            return this.canvases[0].options.millisPerPixel;
        },
        set: function (value) {
            for (var _i = 0, _a = this.canvases; _i < _a.length; _i++) {
                var canvas = _a[_i];
                canvas.options.millisPerPixel = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TimeSeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvases = Array(this.channels)
            .fill(0)
            .map(function () { return new smoothie__WEBPACK_IMPORTED_MODULE_3__["SmoothieChart"](_this.options); });
        this.lines = Array(this.channels)
            .fill(0)
            .map(function () { return new smoothie__WEBPACK_IMPORTED_MODULE_3__["TimeSeries"](); });
        this.addTimeSeries();
        this.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (sampleSet) {
            var _a = sampleSet.data, electrode0 = _a[0], electrode1 = _a[1], electrode2 = _a[2], electrode3 = _a[3];
            sampleSet.data.push(electrode1 - electrode0);
            sampleSet.data.push(electrode2 - electrode3);
            return sampleSet.data
                .slice(5, 7)
                .map(function (value, electrode) { return ({
                timestamp: sampleSet.timestamp,
                value: value,
                electrode: electrode
            }); });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(function (sampleSet) { return sampleSet.electrode; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (group) {
            var bandpassFilter = Object(_shared_bandpass_filter__WEBPACK_IMPORTED_MODULE_5__["bandpass"])(samplingFrequency, _this.LowPass, _this.HighPass);
            var conditionalFilter = function (value) {
                return _this.filter ? bandpassFilter(value) : value;
            };
            return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (sample) { return !isNaN(sample.value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (sample) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, sample, { value: conditionalFilter(sample.value) })); }));
        }))
            .subscribe(function (sample) {
            _this.draw(sample.timestamp, sample.value, sample.electrode);
        });
    };
    TimeSeriesComponent.prototype.ngAfterViewInit = function () {
        var channels = this.view.nativeElement.querySelectorAll("canvas");
        this.canvases.forEach(function (canvas, index) {
            canvas.streamTo(channels[index]);
        });
    };
    TimeSeriesComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
    };
    TimeSeriesComponent.prototype.addTimeSeries = function () {
        var _this = this;
        this.lines.forEach(function (line, index) {
            _this.canvases[index].addTimeSeries(line, {
                lineWidth: 1,
                strokeStyle: _this.colors[index].borderColor
            });
        });
    };
    TimeSeriesComponent.prototype.draw = function (timestamp, amplitude, index) {
        this.uMeans[index] = 0.995 * this.uMeans[index] + 0.005 * amplitude;
        this.uVrms[index] = Math.sqrt(0.995 * Math.pow(this.uVrms[index], 2) +
            0.005 * Math.pow((amplitude - this.uMeans[index]), 2));
        this.lines[index].append(timestamp, amplitude);
        this.amplitudes[index] = amplitude.toFixed(2);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TimeSeriesComponent.prototype, "data", void 0);
    TimeSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-time-series",
            template: __webpack_require__(/*! ./time-series.component.html */ "./src/app/time-series/time-series.component.html"),
            styles: [__webpack_require__(/*! ./time-series.component.css */ "./src/app/time-series/time-series.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _shared_chart_service__WEBPACK_IMPORTED_MODULE_6__["ChartService"]])
    ], TimeSeriesComponent);
    return TimeSeriesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\t2473\muse-bedside\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map