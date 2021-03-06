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

/***/ "./src/app/Question.ts":
/*!*****************************!*\
  !*** ./src/app/Question.ts ***!
  \*****************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
class Question {
    constructor(content, date, time, moduleCode) {
        this.content = content;
        this.date = date;
        this.time = time;
        this.moduleCode = moduleCode;
        this.answerList = [];
        this._id = '';
    }
}


/***/ }),

/***/ "./src/app/adminAccount.ts":
/*!*********************************!*\
  !*** ./src/app/adminAccount.ts ***!
  \*********************************/
/*! exports provided: AdminAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccount", function() { return AdminAccount; });
class AdminAccount {
    constructor(accountName, password) {
        this.accountName = accountName;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/answer.ts":
/*!***************************!*\
  !*** ./src/app/answer.ts ***!
  \***************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
class Answer {
    constructor(content, date, time, questionId) {
        this.content = content;
        this.date = date;
        this.time = time;
        this.questionId = questionId;
        this._id = '';
    }
}


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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/latest-posts/latest-posts.component */ "./src/app/components/latest-posts/latest-posts.component.ts");
/* harmony import */ var _components_my_modules_my_modules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-modules/my-modules.component */ "./src/app/components/my-modules/my-modules.component.ts");
/* harmony import */ var _components_module_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/module/module.component */ "./src/app/components/module/module.component.ts");
/* harmony import */ var _components_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/module-list/module-list.component */ "./src/app/components/module-list/module-list.component.ts");
/* harmony import */ var _components_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post-review/post-review.component */ "./src/app/components/post-review/post-review.component.ts");
/* harmony import */ var _components_module_subcomponents_module_description_module_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/module-subcomponents/module-description/module-description.component */ "./src/app/components/module-subcomponents/module-description/module-description.component.ts");
/* harmony import */ var _components_module_subcomponents_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/module-subcomponents/question-list/question-list.component */ "./src/app/components/module-subcomponents/question-list/question-list.component.ts");
/* harmony import */ var _components_module_subcomponents_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/module-subcomponents/review-list/review-list.component */ "./src/app/components/module-subcomponents/review-list/review-list.component.ts");
/* harmony import */ var _components_admin_account_login_admin_account_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin-account-login/admin-account-login.component */ "./src/app/components/admin-account-login/admin-account-login.component.ts");
/* harmony import */ var _components_admin_account_create_admin_account_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-account-create/admin-account-create.component */ "./src/app/components/admin-account-create/admin-account-create.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
















const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'ModuleList', component: _components_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_6__["ModuleListComponent"] },
    { path: 'PostReview', component: _components_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_7__["PostReviewComponent"] },
    { path: 'LatestPosts', component: _components_latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_3__["LatestPostsComponent"] },
    { path: 'Module', component: _components_module_module_component__WEBPACK_IMPORTED_MODULE_5__["ModuleComponent"], children: [
            { path: 'Description', component: _components_module_subcomponents_module_description_module_description_component__WEBPACK_IMPORTED_MODULE_8__["ModuleDescriptionComponent"] },
            { path: 'QuestionList', component: _components_module_subcomponents_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_9__["QuestionListComponent"] },
            { path: 'ReviewList', component: _components_module_subcomponents_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_10__["ReviewListComponent"] },
        ] },
    { path: 'MyModules', component: _components_my_modules_my_modules_component__WEBPACK_IMPORTED_MODULE_4__["MyModulesComponent"] },
    { path: 'AdminAccountLogin', component: _components_admin_account_login_admin_account_login_component__WEBPACK_IMPORTED_MODULE_11__["AdminAccountLoginComponent"] },
    { path: 'AdminAccountCreate', component: _components_admin_account_create_admin_account_create_component__WEBPACK_IMPORTED_MODULE_12__["AdminAccountCreateComponent"] },
    { path: 'Report', component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"] },
    { path: 'Module', redirectTo: 'Module/Description' },
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
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'nusmods';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n    min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/latest-posts/latest-posts.component */ "./src/app/components/latest-posts/latest-posts.component.ts");
/* harmony import */ var _components_data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/data-collected/data-collected.component */ "./src/app/components/data-collected/data-collected.component.ts");
/* harmony import */ var _components_my_modules_my_modules_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/my-modules/my-modules.component */ "./src/app/components/my-modules/my-modules.component.ts");
/* harmony import */ var _components_module_module_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/module/module.component */ "./src/app/components/module/module.component.ts");
/* harmony import */ var _components_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/module-list/module-list.component */ "./src/app/components/module-list/module-list.component.ts");
/* harmony import */ var _components_module_list_subcomponents_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/module-list-subcomponents/main-board/main-board.component */ "./src/app/components/module-list-subcomponents/main-board/main-board.component.ts");
/* harmony import */ var _components_module_list_subcomponents_refinement_list_refinement_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/module-list-subcomponents/refinement-list/refinement-list.component */ "./src/app/components/module-list-subcomponents/refinement-list/refinement-list.component.ts");
/* harmony import */ var _components_module_list_subcomponents_refinement_table_refinement_table_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/module-list-subcomponents/refinement-table/refinement-table.component */ "./src/app/components/module-list-subcomponents/refinement-table/refinement-table.component.ts");
/* harmony import */ var _components_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/post-review/post-review.component */ "./src/app/components/post-review/post-review.component.ts");
/* harmony import */ var _components_post_review_subcomponents_extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/post-review-subcomponents/extra-info/extra-info.component */ "./src/app/components/post-review-subcomponents/extra-info/extra-info.component.ts");
/* harmony import */ var _components_post_review_subcomponents_module_info_module_info_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/post-review-subcomponents/module-info/module-info.component */ "./src/app/components/post-review-subcomponents/module-info/module-info.component.ts");
/* harmony import */ var _components_post_review_subcomponents_review_and_ratings_review_and_ratings_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/post-review-subcomponents/review-and-ratings/review-and-ratings.component */ "./src/app/components/post-review-subcomponents/review-and-ratings/review-and-ratings.component.ts");
/* harmony import */ var _components_module_subcomponents_module_description_module_description_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/module-subcomponents/module-description/module-description.component */ "./src/app/components/module-subcomponents/module-description/module-description.component.ts");
/* harmony import */ var _components_module_subcomponents_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/module-subcomponents/question-list/question-list.component */ "./src/app/components/module-subcomponents/question-list/question-list.component.ts");
/* harmony import */ var _components_module_subcomponents_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/module-subcomponents/review-list/review-list.component */ "./src/app/components/module-subcomponents/review-list/review-list.component.ts");
/* harmony import */ var _components_admin_account_login_admin_account_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/admin-account-login/admin-account-login.component */ "./src/app/components/admin-account-login/admin-account-login.component.ts");
/* harmony import */ var _components_admin_account_create_admin_account_create_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/admin-account-create/admin-account-create.component */ "./src/app/components/admin-account-create/admin-account-create.component.ts");
/* harmony import */ var _components_post_review_subcomponents_select_header_image_select_header_image_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/post-review-subcomponents/select-header-image/select-header-image.component */ "./src/app/components/post-review-subcomponents/select-header-image/select-header-image.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["NoopAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
        _components_latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_27__["LatestPostsComponent"],
        _components_data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_28__["DataCollectedComponent"],
        _components_my_modules_my_modules_component__WEBPACK_IMPORTED_MODULE_29__["MyModulesComponent"],
        _components_module_module_component__WEBPACK_IMPORTED_MODULE_30__["ModuleComponent"],
        _components_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_31__["ModuleListComponent"],
        _components_module_list_subcomponents_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_32__["MainBoardComponent"],
        _components_module_list_subcomponents_refinement_list_refinement_list_component__WEBPACK_IMPORTED_MODULE_33__["RefinementListComponent"],
        _components_module_list_subcomponents_refinement_table_refinement_table_component__WEBPACK_IMPORTED_MODULE_34__["RefinementTableComponent"],
        _components_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_35__["PostReviewComponent"],
        _components_post_review_subcomponents_extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_36__["ExtraInfoComponent"],
        _components_post_review_subcomponents_module_info_module_info_component__WEBPACK_IMPORTED_MODULE_37__["ModuleInfoComponent"],
        _components_post_review_subcomponents_review_and_ratings_review_and_ratings_component__WEBPACK_IMPORTED_MODULE_38__["ReviewAndRatingsComponent"],
        _components_module_subcomponents_module_description_module_description_component__WEBPACK_IMPORTED_MODULE_39__["ModuleDescriptionComponent"],
        _components_module_subcomponents_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_40__["QuestionListComponent"],
        _components_module_subcomponents_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_41__["ReviewListComponent"],
        _components_admin_account_login_admin_account_login_component__WEBPACK_IMPORTED_MODULE_42__["AdminAccountLoginComponent"],
        _components_admin_account_create_admin_account_create_component__WEBPACK_IMPORTED_MODULE_43__["AdminAccountCreateComponent"],
        _components_post_review_subcomponents_select_header_image_select_header_image_component__WEBPACK_IMPORTED_MODULE_44__["SelectHeaderImageComponent"],
        _components_report_report_component__WEBPACK_IMPORTED_MODULE_45__["ReportComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["NoopAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                    _components_latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_27__["LatestPostsComponent"],
                    _components_data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_28__["DataCollectedComponent"],
                    _components_my_modules_my_modules_component__WEBPACK_IMPORTED_MODULE_29__["MyModulesComponent"],
                    _components_module_module_component__WEBPACK_IMPORTED_MODULE_30__["ModuleComponent"],
                    _components_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_31__["ModuleListComponent"],
                    _components_module_list_subcomponents_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_32__["MainBoardComponent"],
                    _components_module_list_subcomponents_refinement_list_refinement_list_component__WEBPACK_IMPORTED_MODULE_33__["RefinementListComponent"],
                    _components_module_list_subcomponents_refinement_table_refinement_table_component__WEBPACK_IMPORTED_MODULE_34__["RefinementTableComponent"],
                    _components_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_35__["PostReviewComponent"],
                    _components_post_review_subcomponents_extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_36__["ExtraInfoComponent"],
                    _components_post_review_subcomponents_module_info_module_info_component__WEBPACK_IMPORTED_MODULE_37__["ModuleInfoComponent"],
                    _components_post_review_subcomponents_review_and_ratings_review_and_ratings_component__WEBPACK_IMPORTED_MODULE_38__["ReviewAndRatingsComponent"],
                    _components_module_subcomponents_module_description_module_description_component__WEBPACK_IMPORTED_MODULE_39__["ModuleDescriptionComponent"],
                    _components_module_subcomponents_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_40__["QuestionListComponent"],
                    _components_module_subcomponents_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_41__["ReviewListComponent"],
                    _components_admin_account_login_admin_account_login_component__WEBPACK_IMPORTED_MODULE_42__["AdminAccountLoginComponent"],
                    _components_admin_account_create_admin_account_create_component__WEBPACK_IMPORTED_MODULE_43__["AdminAccountCreateComponent"],
                    _components_post_review_subcomponents_select_header_image_select_header_image_component__WEBPACK_IMPORTED_MODULE_44__["SelectHeaderImageComponent"],
                    _components_report_report_component__WEBPACK_IMPORTED_MODULE_45__["ReportComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["NoopAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/averageRatings.ts":
/*!***********************************!*\
  !*** ./src/app/averageRatings.ts ***!
  \***********************************/
/*! exports provided: AverageRatings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageRatings", function() { return AverageRatings; });
class AverageRatings {
    constructor(averageGeneral, averageDifficulty, averageWorkload, averageRecommend) {
        this.averageGeneral = averageGeneral;
        this.averageDifficulty = averageDifficulty;
        this.averageWorkload = averageWorkload;
        this.averageRecommend = averageRecommend;
    }
}
AverageRatings.emptyAverageRatings = new AverageRatings('0', '0', '0', '0');


/***/ }),

/***/ "./src/app/components/admin-account-create/admin-account-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-account-create/admin-account-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminAccountCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountCreateComponent", function() { return AdminAccountCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_adminAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/adminAccount */ "./src/app/adminAccount.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin-account.service */ "./src/app/services/admin-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function AdminAccountCreateComponent_mat_card_0_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid accountName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountCreateComponent_mat_card_0_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountCreateComponent_mat_card_0_mat_hint_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The account name already exists!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountCreateComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminAccountCreateComponent_mat_card_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.newAdminAccount.accountName = $event; })("input", function AdminAccountCreateComponent_mat_card_0_Template_input_input_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showErrorMessage = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminAccountCreateComponent_mat_card_0_mat_error_11_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " minLength: 3; maxLength: 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminAccountCreateComponent_mat_card_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newAdminAccount.password = $event; })("input", function AdminAccountCreateComponent_mat_card_0_Template_input_input_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showErrorMessage = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminAccountCreateComponent_mat_card_0_mat_error_18_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " minLength: 4; maxLength: 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminAccountCreateComponent_mat_card_0_mat_hint_21_Template, 2, 0, "mat-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountCreateComponent_mat_card_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.accountNameFormControl)("ngModel", ctx_r0.newAdminAccount.accountName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.accountNameFormControl.hasError("required") || ctx_r0.accountNameFormControl.hasError("minLength") || ctx_r0.accountNameFormControl.hasError("maxLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newAdminAccount.password)("formControl", ctx_r0.passwordFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.passwordFormControl.hasError("required") || ctx_r0.passwordFormControl.hasError("minLength") || ctx_r0.passwordFormControl.hasError("maxLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.showSpinner ? "block" : "none");
} }
function AdminAccountCreateComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please login first!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountCreateComponent_mat_card_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goAdminAccountLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminAccountCreateComponent {
    constructor(adminAccountService, route, snackBar) {
        this.adminAccountService = adminAccountService;
        this.route = route;
        this.snackBar = snackBar;
        this.isSuccessfulLogin = false;
        this.showErrorMessage = false;
        this.newAdminAccount = new src_app_adminAccount__WEBPACK_IMPORTED_MODULE_1__["AdminAccount"]('', '');
        this.showSpinner = false;
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11),
        ]);
        this.accountNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
        ]);
    }
    ngOnInit() {
        if (this.adminAccountService.getAdminAccount()) {
            this.isSuccessfulLogin = true;
        }
    }
    goAdminAccountLogin() {
        this.route.navigate(['/AdminAccountLogin']);
    }
    register() {
        this.adminAccountService.getAdminAccountList().subscribe((adminAccountList) => {
            if (adminAccountList.map((adminAccount) => adminAccount.accountName).includes(this.newAdminAccount.accountName)) {
                this.showErrorMessage = true;
            }
            else if (this.newAdminAccount.accountName.length > 2 && this.newAdminAccount.accountName.length < 21 &&
                this.newAdminAccount.password.length > 3 && this.newAdminAccount.password.length < 12) {
                this.adminAccountService.createAccount(this.newAdminAccount).subscribe((adminAccount) => {
                    this.route.navigate(['/AdminAccountLogin']);
                    this.snackBar.open('Admin account ' + this.newAdminAccount.accountName + " is successfully registered!", '', {
                        duration: 2000
                    });
                });
            }
        });
    }
}
AdminAccountCreateComponent.ɵfac = function AdminAccountCreateComponent_Factory(t) { return new (t || AdminAccountCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_3__["AdminAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
AdminAccountCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminAccountCreateComponent, selectors: [["app-admin-account-create"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["cellspacing", "0"], [1, "full-width"], ["matInput", "", "placeholder", "AccountName", "name", "accountName", "required", "", 3, "formControl", "ngModel", "ngModelChange", "input"], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "password", "required", "", 3, "ngModel", "formControl", "ngModelChange", "input"], ["style", "color: red; margin-left: 12%;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "color", "red", "margin-left", "12%"]], template: function AdminAccountCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminAccountCreateComponent_mat_card_0_Template, 26, 9, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminAccountCreateComponent_mat_card_1_Template, 7, 0, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessfulLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessfulLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n    width: 30%;\n    margin: 10% auto 0;\n}\n\n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1hY2NvdW50LWNyZWF0ZS9hZG1pbi1hY2NvdW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1hY2NvdW50LWNyZWF0ZS9hZG1pbi1hY2NvdW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDEwJSBhdXRvIDA7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAccountCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-account-create',
                templateUrl: './admin-account-create.component.html',
                styleUrls: ['./admin-account-create.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_3__["AdminAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin-account-login/admin-account-login.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin-account-login/admin-account-login.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminAccountLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountLoginComponent", function() { return AdminAccountLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report */ "./src/app/report.ts");
/* harmony import */ var src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin-account.service */ "./src/app/services/admin-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_post_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_services_report_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/report-list.service */ "./src/app/services/report-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



















function AdminAccountLoginComponent_mat_card_0_mat_hint_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The account name or password is incorrect!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminAccountLoginComponent_mat_card_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.accountName = $event; })("input", function AdminAccountLoginComponent_mat_card_0_Template_input_input_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showErrorMessage = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminAccountLoginComponent_mat_card_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.password = $event; })("input", function AdminAccountLoginComponent_mat_card_0_Template_input_input_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showErrorMessage = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminAccountLoginComponent_mat_card_0_mat_hint_15_Template, 2, 0, "mat-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_mat_card_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.accountName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.showSpinner ? "block" : "none");
} }
function AdminAccountLoginComponent_div_1_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.deleteReport(ctx_r14.report._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No more reports! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The post does not exist! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminAccountLoginComponent_div_1_mat_card_26_mat_card_74_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AdminAccountLoginComponent_div_1_mat_card_26_mat_card_74_Template_mat_card_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.hoverOnShareBox = true; })("mouseleave", function AdminAccountLoginComponent_div_1_mat_card_26_mat_card_74_Template_mat_card_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.hoverOnShareBox = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copy & Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_mat_card_26_mat_card_74_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.onCopyPost(ctx_r41.post, _r37.innerHTML); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " content_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 13, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["            ", ctx_r36.post.moduleInfo.moduleCode, " - ", ctx_r36.post.moduleInfo.title, " taken by ", ctx_r36.userName, "\n            under ", ctx_r36.post.moduleInfo.prof, ", ", ctx_r36.post.moduleInfo.acadYear, " / ", ctx_r36.post.moduleInfo.semester, ":\n                ", ctx_r36.post.reviewAndRatings.review, "\n            general: ", ctx_r36.post.reviewAndRatings.general, " / 10 (10 for most satisfied)         difficulty: ", ctx_r36.post.reviewAndRatings.difficulty, " / 10 (10 for most difficult)\n            workload: ", ctx_r36.post.reviewAndRatings.workload, " / 10 (10 for heaviest workload)    recommend: ", ctx_r36.post.reviewAndRatings.recommend, " / 10 (10 for most willing to recommend)\n                            "]);
} }
const _c0 = function (a0) { return { "blue-color": a0 }; };
function AdminAccountLoginComponent_div_1_mat_card_26_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_mat_card_26_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.goModule(ctx_r42.post.moduleInfo.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_mat_card_26_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.deletePost(ctx_r44.report._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_32_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_33_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_34_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_35_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_36_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_40_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_41_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_42_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_43_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_44_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_48_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_49_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_50_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_51_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_52_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_56_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_57_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_58_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_59_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AdminAccountLoginComponent_div_1_mat_card_26_mat_icon_60_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_mat_card_26_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.onClickLikePost(ctx_r45.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_mat_card_26_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.onClickDislikePost(ctx_r46.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AdminAccountLoginComponent_div_1_mat_card_26_Template_button_mouseover_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.hoverOnShareBtn = true; })("mouseleave", function AdminAccountLoginComponent_div_1_mat_card_26_Template_button_mouseleave_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.mouseLeaveShareBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AdminAccountLoginComponent_div_1_mat_card_26_mat_card_74_Template, 10, 11, "mat-card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r12.post.headerImage + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r12.post.moduleInfo.moduleCode, " - ", ctx_r12.post.moduleInfo.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Under Prof ", ctx_r12.post.moduleInfo.prof, ", ", ctx_r12.post.moduleInfo.acadYear, " / ", ctx_r12.post.moduleInfo.semester, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r12.post.date, " - ", ctx_r12.post.time, " by ", ctx_r12.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("                            ", ctx_r12.post.reviewAndRatings.review, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Expected Grade: ", ctx_r12.post.extraInfo.gradeExpected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade Obtained: ", ctx_r12.post.extraInfo.gradeObtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" general: ", ctx_r12.post.reviewAndRatings.general, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.general < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.general > 2 && ctx_r12.post.reviewAndRatings.general < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.general > 4 && ctx_r12.post.reviewAndRatings.general < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.general > 6 && ctx_r12.post.reviewAndRatings.general < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.general > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" difficulty: ", ctx_r12.post.reviewAndRatings.difficulty, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.difficulty > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.difficulty > 6 && ctx_r12.post.reviewAndRatings.difficulty < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.difficulty > 4 && ctx_r12.post.reviewAndRatings.difficulty < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.difficulty > 2 && ctx_r12.post.reviewAndRatings.difficulty < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.difficulty < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" workload: ", ctx_r12.post.reviewAndRatings.workload, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.workload > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.workload > 6 && ctx_r12.post.reviewAndRatings.workload < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.workload > 4 && ctx_r12.post.reviewAndRatings.workload < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.workload > 2 && ctx_r12.post.reviewAndRatings.workload < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.workload < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" recommend: ", ctx_r12.post.reviewAndRatings.recommend, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.recommend < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.recommend > 2 && ctx_r12.post.reviewAndRatings.recommend < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.recommend > 4 && ctx_r12.post.reviewAndRatings.recommend < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.recommend > 6 && ctx_r12.post.reviewAndRatings.recommend < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.post.reviewAndRatings.recommend > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx_r12.ifLike(ctx_r12.post._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.post.numOfLikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx_r12.ifDislike(ctx_r12.post._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.post.numOfDislikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.post.numOfShares, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.hoverOnShareBtn || ctx_r12.hoverOnShareBox);
} }
function AdminAccountLoginComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.report.content, " ");
} }
function AdminAccountLoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What an admin stuff can do:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n                1.Delete a review post, a question, and an answer;\n                2.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.goAdminAccountCreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create another admin account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ";\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAccountLoginComponent_div_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminAccountLoginComponent_div_1_button_23_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminAccountLoginComponent_div_1_mat_card_24_Template, 2, 0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminAccountLoginComponent_div_1_mat_card_25_Template, 2, 0, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminAccountLoginComponent_div_1_mat_card_26_Template, 75, 47, "mat-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminAccountLoginComponent_div_1_div_27_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-paginator", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AdminAccountLoginComponent_div_1_Template_mat_paginator_page_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r1.accountName, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reportList[ctx_r1.pageIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.reportList[ctx_r1.pageIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reportList[ctx_r1.pageIndex] && !ctx_r1.post);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reportList[ctx_r1.pageIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.report.date, " - ", ctx_r1.report.time, " by Anonymous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.reportList.length)("pageIndex", ctx_r1.pageIndex);
} }
class AdminAccountLoginComponent {
    constructor(adminAccountService, route, postListService, activatedRoute, snackBar, reportListService) {
        this.adminAccountService = adminAccountService;
        this.route = route;
        this.postListService = postListService;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.reportListService = reportListService;
        this.password = '';
        this.accountName = '';
        this.showSpinner = false;
        this.showErrorMessage = false;
        this.isSuccessfulLogin = false;
        this.reportList = [];
        this.report = new src_app_report__WEBPACK_IMPORTED_MODULE_1__["Report"]('', '', '', '');
        this.pageIndex = 0;
        this.postListLike = [];
        this.postListDislike = [];
        this.userName = 'Anonymous';
        this.hoverOnShareBtn = false;
        this.hoverOnShareBox = false;
    }
    ngOnInit() {
        this.updatePostListLikeAndDislike();
        if (this.adminAccountService.getAdminAccount()) {
            this.isSuccessfulLogin = true;
            this.accountName = this.adminAccountService.getAdminAccount().accountName;
        }
        this.reportListService.getReportList().subscribe((reportList) => {
            this.reportList = reportList;
            this.updateReportShown();
        });
    }
    login() {
        this.showSpinner = true;
        this.adminAccountService.login(this.accountName, this.password).subscribe((isSuccessful) => {
            this.showSpinner = false;
            if (isSuccessful) {
                this.isSuccessfulLogin = true;
            }
            else {
                this.showErrorMessage = true;
            }
        });
    }
    logout() {
        this.adminAccountService.logout();
        this.isSuccessfulLogin = false;
        this.password = '';
    }
    goAdminAccountCreate() {
        this.route.navigate(['/AdminAccountCreate']);
    }
    deleteReport(reportId) {
        this.reportListService.deleteReport(reportId).subscribe((report) => {
            this.reportList = this.reportList.filter((report) => {
                return report._id != reportId;
            });
            if (this.post) {
                this.postListService.deleteReport(this.post._id);
            }
            this.updateReportShown();
            this.snackBar.open('Report successfully deleted!', '', {
                duration: 2000
            });
        });
    }
    deletePost(reportId) {
        this.postListService.getPostList().subscribe((postList) => {
            this.postListService.deletePost(this.post._id).subscribe((reviewPost) => {
                this.deleteReport(reportId);
            });
        });
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    updatePostListLikeAndDislike() {
        this.postListLike = this.postListService.getPostListLike();
        this.postListDislike = this.postListService.getPostListDislike();
    }
    onClickLikePost(post) {
        var postId = post._id;
        if (this.postListDislike.includes(postId)) {
            post.numOfDislikes--;
            post.numOfLikes++;
            this.postListService.cancelDislikePost(postId).subscribe((post_1) => {
                this.postListService.likePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListLike.includes(postId)) {
            post.numOfLikes++;
            this.postListService.likePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfLikes--;
            this.postListService.cancelLikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onClickDislikePost(post) {
        var postId = post._id;
        if (this.postListLike.includes(postId)) {
            post.numOfLikes--;
            post.numOfDislikes++;
            this.postListService.cancelLikePost(postId).subscribe((post_1) => {
                this.postListService.dislikePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListDislike.includes(postId)) {
            post.numOfDislikes++;
            this.postListService.dislikePost(postId).subscribe((post_2) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfDislikes--;
            this.postListService.cancelDislikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onCopyPost(post, copyContent) {
        post.numOfShares++;
        const oInput = document.createElement('textarea');
        var postId = post._id;
        oInput.value = copyContent + '\n@ModuleReviewsSharing';
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand('Copy');
        oInput.style.display = 'none';
        this.snackBar.open('Review post copied!', '', {
            duration: 2000,
        });
        this.postListService.sharePost(postId).subscribe((post_1) => {
        });
    }
    ifLike(postId) {
        return this.postListLike.includes(postId);
    }
    ifDislike(postId) {
        return this.postListDislike.includes(postId);
    }
    mouseLeaveShareBtn() {
        setTimeout(() => this.hoverOnShareBtn = false, 200);
    }
    updateReportShown() {
        if (this.reportList[this.pageIndex]) {
            this.report = this.reportList[this.pageIndex];
            this.postListService.getPostById(this.reportList[this.pageIndex].postId).subscribe((post) => {
                this.post = post;
            });
        }
        else {
            this.post = undefined;
        }
    }
    onPageChange(event) {
        this.pageIndex = event.pageIndex;
        this.updateReportShown();
    }
}
AdminAccountLoginComponent.ɵfac = function AdminAccountLoginComponent_Factory(t) { return new (t || AdminAccountLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_2__["AdminAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_report_list_service__WEBPACK_IMPORTED_MODULE_6__["ReportListService"])); };
AdminAccountLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminAccountLoginComponent, selectors: [["app-admin-account-login"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "successful-login-container", 4, "ngIf"], [1, "container"], ["cellspacing", "0"], [1, "full-width"], ["matInput", "", "placeholder", "AccountName", "name", "accountName", "required", "", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange", "input"], ["style", "color: red; margin-left: 12%;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "color", "red", "margin-left", "12%"], [1, "successful-login-container"], [1, "left-panel"], [1, "successful-login-card"], [1, "mat-body"], ["routerLink", "/AdminAccountCreate", 3, "click"], [1, "right-panel"], [1, "mat-h1"], [1, "delete-report-btn-wrapper"], ["mat-icon-button", "", "class", "icon-btn delete-report-btn", "matTooltip", "delete report", 3, "click", 4, "ngIf"], ["class", "no-reports mat-h1", 4, "ngIf"], ["class", "post-does-not-exist mat-h1", 4, "ngIf"], [4, "ngIf"], ["class", "report-content", 4, "ngIf"], [1, "report-footer", "mat-hint"], ["pageSize", "1", "showFirstLastButtons", "true", "hidePageSize", "true", 3, "length", "pageIndex", "page"], ["mat-icon-button", "", "matTooltip", "delete report", 1, "icon-btn", "delete-report-btn", 3, "click"], [1, "no-reports", "mat-h1"], [1, "post-does-not-exist", "mat-h1"], [1, "flex-container"], ["mat-card-avatar", "", 1, "header-image"], [1, "header"], [1, "mat-caption"], [1, "view-btn"], ["mat-icon-button", "", "matTooltip", "view", 3, "click"], [1, "icon-btn"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click"], [1, "review"], [1, "extra-info", "mat-caption"], [1, "flex-container", "ratings"], ["matTooltip", "10 for most satisfied"], [1, "icon"], ["matTooltip", "10 for most difficult"], ["matTooltip", "10 for heaviest workload"], ["matTooltip", "10 for most willing to recommend"], [1, "btns"], ["mat-icon-button", "", "matTooltip", "like", 3, "click"], [1, "icon-btn", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "dislike", 3, "click"], ["mat-icon-button", "", "matTooltip", "share", 3, "mouseover", "mouseleave"], ["class", "share-box", 3, "mouseover", "mouseleave", 4, "ngIf"], [1, "share-box", 3, "mouseover", "mouseleave"], ["mat-icon-button", "", "matTooltip", "copy review post", 1, "copy-btn", 3, "click"], ["copyContent", ""], [1, "report-content"]], template: function AdminAccountLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminAccountLoginComponent_mat_card_0_Template, 20, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminAccountLoginComponent_div_1_Template, 31, 10, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessfulLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessfulLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n    width: 30%;\n    margin: 10% auto 0;\n}\n\n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n\n.successful-login-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.successful-login-card[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10rem auto;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n    width: 35%;\n    height: 725px;\n    border-right: 1px solid whitesmoke;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n    width: 65%;\n    padding: 1rem 2rem;\n}\n\n.review[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.no-reports[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 2rem auto;\n}\n\n.delete-report-btn-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.ratings[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n.ratings[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 25%;\n    text-align: center;\n}\n\n.btns[_ngcontent-%COMP%] {\n    width: 30%;\n    text-align: right;\n}\n\n.btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 0 10px;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n    color: #4050b5;\n}\n\n.share-box[_ngcontent-%COMP%] {\n    width: 700px;\n    position: absolute;\n    left: 20%;\n    z-index: 1;\n    text-align: left;\n}\n\n.copy-btn[_ngcontent-%COMP%] {\n    float: right;\n}\n\npre[_ngcontent-%COMP%] {\n\n    white-space: pre-wrap; \n    \n    white-space: -moz-pre-wrap; \n    \n    white-space: -pre-wrap; \n    \n    white-space: -o-pre-wrap; \n    \n    word-wrap: break-word; \n    \n    }\n\n.header-image[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n\n.report-content[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 5rem;\n    background-color: whitesmoke;\n    border-radius: 5px;\n    border: solid #8e8e8e 1px;\n    margin-top: 1rem;\n    padding: 5px;\n}\n\n.report-footer[_ngcontent-%COMP%] {\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1hY2NvdW50LWxvZ2luL2FkbWluLWFjY291bnQtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUJBQXFCLEVBQUUsUUFBUTs7SUFFL0IsMEJBQTBCLEVBQUUsb0JBQW9COztJQUVoRCxzQkFBc0IsRUFBRSxXQUFXOztJQUVuQyx3QkFBd0IsRUFBRSxTQUFTOztJQUVuQyxxQkFBcUIsRUFBRSx1QkFBdUI7O0lBRTlDOztBQUVKO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tYWNjb3VudC1sb2dpbi9hZG1pbi1hY2NvdW50LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdWNjZXNzZnVsLWxvZ2luLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1Y2Nlc3NmdWwtbG9naW4tY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDEwcmVtIGF1dG87XG59XG5cbi5sZWZ0LXBhbmVsIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIGhlaWdodDogNzI1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLnJldmlldyB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubm8tcmVwb3J0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuXG4uZGVsZXRlLXJlcG9ydC1idG4td3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmlldy1idG4ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmF0aW5ncyB7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLnJhdGluZ3MgPiBkaXYge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRucyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ0bnMgPiBidXR0b24ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uYmx1ZS1jb2xvciB7XG4gICAgY29sb3I6ICM0MDUwYjU7XG59XG5cbi5zaGFyZS1ib3gge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvcHktYnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbnByZSB7XG5cbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qY3NzLTMqL1xuICAgIFxuICAgIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyAvKk1vemlsbGEsc2luY2UxOTk5Ki9cbiAgICBcbiAgICB3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAvKk9wZXJhNC02Ki9cbiAgICBcbiAgICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7IC8qT3BlcmE3Ki9cbiAgICBcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qSW50ZXJuZXRFeHBsb3JlcjUuNSsqL1xuICAgIFxuICAgIH1cblxuLmhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnJlcG9ydC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzhlOGU4ZSAxcHg7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yZXBvcnQtZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAccountLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-account-login',
                templateUrl: './admin-account-login.component.html',
                styleUrls: ['./admin-account-login.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_2__["AdminAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_post_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_services_report_list_service__WEBPACK_IMPORTED_MODULE_6__["ReportListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/data-collected/data-collected.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/data-collected/data-collected.component.ts ***!
  \***********************************************************************/
/*! exports provided: DataCollectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCollectedComponent", function() { return DataCollectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");






class DataCollectedComponent {
    constructor(searchService, postListService) {
        this.searchService = searchService;
        this.postListService = postListService;
        this.numberOfModules = 0;
        this.numberOfReviews = 0;
    }
    ngOnInit() {
        this.searchService.getFullModuleList().subscribe((moduleList) => {
            this.numberOfModules = moduleList.length;
        });
        this.postListService.getPostList().subscribe((postList) => {
            this.numberOfReviews = postList.length;
        });
    }
}
DataCollectedComponent.ɵfac = function DataCollectedComponent_Factory(t) { return new (t || DataCollectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_2__["PostListService"])); };
DataCollectedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataCollectedComponent, selectors: [["app-data-collected"]], decls: 9, vars: 2, consts: [[1, "data-collected"]], template: function DataCollectedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of modules: ", ctx.numberOfModules, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of reviews: ", ctx.numberOfReviews, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["mat-card[_ngcontent-%COMP%] {\n    height: 130px;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n    padding-top: 10px;\n}\n\n.data-collected[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXRhLWNvbGxlY3RlZC9kYXRhLWNvbGxlY3RlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhdGEtY29sbGVjdGVkL2RhdGEtY29sbGVjdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5kYXRhLWNvbGxlY3RlZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataCollectedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-collected',
                templateUrl: './data-collected.component.html',
                styleUrls: ['./data-collected.component.css']
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_2__["PostListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["color", "primary"], [1, "mat-caption"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Made By Cao Peng & Li Zhuoran, June 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["div[_ngcontent-%COMP%] {\n    margin: 2rem auto 0;\n    text-align: center;\n    padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");







class HeaderComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goHome() {
        this.route.navigate(['/']);
    }
    goModuleList() {
        this.route.navigate(['/ModuleList']);
    }
    goPostReviews() {
        this.route.navigate(['/PostReview']);
    }
    goLatestPosts() {
        var navigationExtras = {
            queryParams: {
                pageIndex: 0
            }
        };
        this.route.navigate(['/LatestPosts'], navigationExtras);
    }
    goMyModules() {
        this.route.navigate(['/MyModules']);
    }
    goAdminAccountLogin() {
        this.route.navigate(['/AdminAccountLogin']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 0, consts: [["color", "primary"], [1, "nusmods"], ["mat-button", ""], [1, "mat-h1", 3, "click"], [1, "btns"], [1, "mat-h3", 3, "click"], [1, "my-modules-and-admin-login"], ["mat-raised-button", "", 3, "click"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "admin account login", 1, "icon-button"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_7_listener() { return ctx.goModuleList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Module List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_10_listener() { return ctx.goPostReviews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Post Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_13_listener() { return ctx.goLatestPosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_16_listener() { return ctx.goMyModules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() { return ctx.goAdminAccountLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " admin_panel_settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]], styles: [".nusmods[_ngcontent-%COMP%] {\n    width: 13%;\n    text-align: left;\n}\n\n.btns[_ngcontent-%COMP%] {\n    width: 30%;\n    display: flex;\n}\n\n.btn[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n\n.my-modules-and-admin-login[_ngcontent-%COMP%] {\n    width: 57%;\n    text-align: right;\n    margin-right: 20px;\n}\n\n.my-modules-and-admin-login[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 0 10px;\n}\n\ntool-bar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udXNtb2RzIHtcbiAgICB3aWR0aDogMTMlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5idG5zIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4gPiBidXR0b24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubXktbW9kdWxlcy1hbmQtYWRtaW4tbG9naW4ge1xuICAgIHdpZHRoOiA1NyU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubXktbW9kdWxlcy1hbmQtYWRtaW4tbG9naW4gPiBidXR0b24ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG50b29sLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _refinementList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../refinementList */ "./src/app/refinementList.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");













function HomeComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r2.searchInput = ""; return ctx_r2.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_11_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const module_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.select(module_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r5.moduleCode, " - ", module_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", module_r5.faculty, " - ", module_r5.department, " - ", module_r5.moduleCredit, "MCs ");
} }
function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_11_mat_option_1_Template, 6, 5, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goModuleList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.moduleListShown);
} }
class HomeComponent {
    constructor(route, searchService) {
        this.route = route;
        this.searchService = searchService;
        this.searchInput = '';
        this.moduleListShown = [];
        this.inputStatus = false;
    }
    ngOnInit() {
        this.search();
    }
    select(module) {
        this.selectedModule = module;
        this.goModule(module.moduleCode);
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    search() {
        this.searchService.search(this.searchInput, _refinementList__WEBPACK_IMPORTED_MODULE_1__["RefinementList"].emptyRefinementList).subscribe((searchResult) => {
            this.moduleListShown = searchResult.slice(0, 10);
        });
    }
    goModuleList() {
        var navigationExtras = {
            queryParams: {
                searchInput: this.searchInput
            }
        };
        this.route.navigate(['/ModuleList'], navigationExtras);
    }
    goModuleListWithNoInput() {
        this.route.navigate(['/ModuleList']);
    }
    goPostReviews() {
        this.route.navigate(['/PostReview']);
    }
    goLatestPosts() {
        var navigationExtras = {
            queryParams: {
                pageIndex: 0
            }
        };
        this.route.navigate(['/LatestPosts'], navigationExtras);
    }
    inputStatusOn() {
        this.inputStatus = true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 19, vars: 3, consts: [[1, "headline", "mat-display-1"], [1, "mat-caption"], [1, "search-box"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Module code or title", 3, "ngModel", "input", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["class", "scrollable-container", "cdkScrollable", "", 4, "ngIf"], [1, "flex-container"], ["mat-button", "", 1, "colored-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "icon-btn"], ["cdkScrollable", "", 1, "scrollable-container"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 1, "more-btn", 3, "click"], [3, "click"], [1, "module-info"], [1, "mat-h4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ModuleReviewsSharing@NUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reviews | ratings | recommend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_9_listener() { ctx.search(); return ctx.inputStatusOn(); })("ngModelChange", function HomeComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_button_10_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() { return ctx.goModuleListWithNoInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Module List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.goPostReviews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Post Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_17_listener() { return ctx.goLatestPosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputStatus);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkScrollable"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["*[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.headline[_ngcontent-%COMP%] {\n    margin: 6rem 0 1rem;\n}\n\n.search-box[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    position: relative;\n    right: 11px;\n    top: 18px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 55%;\n    text-align: left;\n    margin: 10px;\n    margin-bottom: 0;\n}\n\ninput[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.scrollable-container[_ngcontent-%COMP%] {\n    width: 55%;\n    height: 200px;\n    overflow: auto;\n    border: 1px solid #ccc;\n    border-top: none;\n    margin: 0 auto;\n}\n\nmat-option[_ngcontent-%COMP%]:hover {\n    color: #4050b5;\n}\n\n.module-info[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    padding-top: 20px;\n}\n\n.module-info[_ngcontent-%COMP%]    > .mat-caption[_ngcontent-%COMP%] {\n    text-align: right;\n    width: 40%;\n}\n\n.module-info[_ngcontent-%COMP%]    > .mat-h4[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 60%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 50%;\n    margin: 5rem auto;\n}\n\n.flex-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    width: 33.3%;\n    border-radius: 0;\n}\n\n.colored-btn[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkbGluZSB7XG4gICAgbWFyZ2luOiA2cmVtIDAgMXJlbTtcbn1cblxuLnNlYXJjaC1ib3gge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxMXB4O1xuICAgIHRvcDogMThweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA1NSU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zY3JvbGxhYmxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxubWF0LW9wdGlvbjpob3ZlciB7XG4gICAgY29sb3I6ICM0MDUwYjU7XG59XG5cbi5tb2R1bGUtaW5mbyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5tb2R1bGUtaW5mbyA+IC5tYXQtY2FwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLm1vZHVsZS1pbmZvID4gLm1hdC1oNCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcbn1cblxuLmZsZXgtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMzMuMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmNvbG9yZWQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubW9yZS1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/latest-posts/latest-posts.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/latest-posts/latest-posts.component.ts ***!
  \*******************************************************************/
/*! exports provided: LatestPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestPostsComponent", function() { return LatestPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin-account.service */ "./src/app/services/admin-account.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-collected/data-collected.component */ "./src/app/components/data-collected/data-collected.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");














function LatestPostsComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No reviews yet! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestPostsComponent_mat_card_5_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.goReport(post_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " priority_high ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestPostsComponent_mat_card_5_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.delete(post_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_icon_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LatestPostsComponent_mat_card_5_mat_card_74_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function LatestPostsComponent_mat_card_5_mat_card_74_Template_mat_card_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r35.hoverOnShareBox[key_r3] = true); })("mouseleave", function LatestPostsComponent_mat_card_5_mat_card_74_Template_mat_card_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r38.hoverOnShareBox[key_r3] = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copy & Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestPostsComponent_mat_card_5_mat_card_74_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onCopyPost(post_r2, _r34.innerHTML); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " content_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 18, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["", post_r2.moduleInfo.moduleCode, " - ", post_r2.moduleInfo.title, " taken by ", ctx_r27.userName, "\nunder ", post_r2.moduleInfo.prof, ", ", post_r2.moduleInfo.acadYear, " / ", post_r2.moduleInfo.semester, ":\n", post_r2.reviewAndRatings.review, "\ngeneral: ", post_r2.reviewAndRatings.general, " / 10 (10 for most satisfied)         difficulty: ", post_r2.reviewAndRatings.difficulty, " / 10 (10 for most difficult)\nworkload: ", post_r2.reviewAndRatings.workload, " / 10 (10 for heaviest workload)    recommend: ", post_r2.reviewAndRatings.recommend, " / 10 (10 for most willing to recommend)\n                        "]);
} }
const _c0 = function (a0) { return { "blue-color": a0 }; };
function LatestPostsComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestPostsComponent_mat_card_5_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const post_r2 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.goModule(post_r2.moduleInfo.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LatestPostsComponent_mat_card_5_button_12_Template, 3, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LatestPostsComponent_mat_card_5_button_13_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LatestPostsComponent_mat_card_5_button_14_Template, 3, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LatestPostsComponent_mat_card_5_mat_icon_32_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LatestPostsComponent_mat_card_5_mat_icon_33_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LatestPostsComponent_mat_card_5_mat_icon_34_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LatestPostsComponent_mat_card_5_mat_icon_35_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LatestPostsComponent_mat_card_5_mat_icon_36_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, LatestPostsComponent_mat_card_5_mat_icon_40_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, LatestPostsComponent_mat_card_5_mat_icon_41_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LatestPostsComponent_mat_card_5_mat_icon_42_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, LatestPostsComponent_mat_card_5_mat_icon_43_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, LatestPostsComponent_mat_card_5_mat_icon_44_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, LatestPostsComponent_mat_card_5_mat_icon_48_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, LatestPostsComponent_mat_card_5_mat_icon_49_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, LatestPostsComponent_mat_card_5_mat_icon_50_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LatestPostsComponent_mat_card_5_mat_icon_51_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LatestPostsComponent_mat_card_5_mat_icon_52_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, LatestPostsComponent_mat_card_5_mat_icon_56_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, LatestPostsComponent_mat_card_5_mat_icon_57_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, LatestPostsComponent_mat_card_5_mat_icon_58_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, LatestPostsComponent_mat_card_5_mat_icon_59_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, LatestPostsComponent_mat_card_5_mat_icon_60_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestPostsComponent_mat_card_5_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const post_r2 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onClickLikePost(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestPostsComponent_mat_card_5_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const post_r2 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onClickDislikePost(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function LatestPostsComponent_mat_card_5_Template_button_mouseover_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const key_r3 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r47.hoverOnShareBtn[key_r3] = true); })("mouseleave", function LatestPostsComponent_mat_card_5_Template_button_mouseleave_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const key_r3 = ctx.index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.mouseLeaveShareBtn(key_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, LatestPostsComponent_mat_card_5_mat_card_74_Template, 10, 11, "mat-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const key_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + post_r2.headerImage + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", post_r2.moduleInfo.moduleCode, " - ", post_r2.moduleInfo.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Under Prof ", post_r2.moduleInfo.prof, ", ", post_r2.moduleInfo.acadYear, " / ", post_r2.moduleInfo.semester, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reportList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reportList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSuccessfulLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", post_r2.date, " - ", post_r2.time, " by ", ctx_r1.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("                        ", post_r2.reviewAndRatings.review, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Expected Grade: ", post_r2.extraInfo.gradeExpected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade Obtained: ", post_r2.extraInfo.gradeObtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" general: ", post_r2.reviewAndRatings.general, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.general < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.general > 2 && post_r2.reviewAndRatings.general < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.general > 4 && post_r2.reviewAndRatings.general < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.general > 6 && post_r2.reviewAndRatings.general < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.general > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" difficulty: ", post_r2.reviewAndRatings.difficulty, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.difficulty > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.difficulty > 6 && post_r2.reviewAndRatings.difficulty < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.difficulty > 4 && post_r2.reviewAndRatings.difficulty < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.difficulty > 2 && post_r2.reviewAndRatings.difficulty < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.difficulty < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" workload: ", post_r2.reviewAndRatings.workload, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.workload > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.workload > 6 && post_r2.reviewAndRatings.workload < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.workload > 4 && post_r2.reviewAndRatings.workload < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.workload > 2 && post_r2.reviewAndRatings.workload < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.workload < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" recommend: ", post_r2.reviewAndRatings.recommend, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.recommend < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.recommend > 2 && post_r2.reviewAndRatings.recommend < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.recommend > 4 && post_r2.reviewAndRatings.recommend < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.recommend > 6 && post_r2.reviewAndRatings.recommend < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2.reviewAndRatings.recommend > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx_r1.ifLike(post_r2._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2.numOfLikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx_r1.ifDislike(post_r2._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2.numOfDislikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2.numOfShares, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hoverOnShareBtn[key_r3] || ctx_r1.hoverOnShareBox[key_r3]);
} }
class LatestPostsComponent {
    constructor(postListService, route, snackBar, adminAccountService, activatedRoute) {
        this.postListService = postListService;
        this.route = route;
        this.snackBar = snackBar;
        this.adminAccountService = adminAccountService;
        this.activatedRoute = activatedRoute;
        this.postList = [];
        this.postListShown = [];
        this.userName = "Anonymous";
        this.postListLike = [];
        this.postListDislike = [];
        this.isSuccessfulLogin = false;
        this.pageIndex = 0;
    }
    ngOnInit() {
        this.resetHoverOn();
        this.activatedRoute.queryParams.subscribe((data) => {
            if (data.pageIndex) {
                this.pageIndex = data.pageIndex;
            }
            var start = this.pageIndex * 5;
            this.postListService.getPostList().subscribe((postList) => {
                this.postList = postList.reverse();
                this.postListShown = postList.slice(start, start + 5);
            });
        });
        this.updatePostListLikeAndDislike();
        if (this.adminAccountService.getAdminAccount()) {
            this.isSuccessfulLogin = true;
        }
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    goReport(postId) {
        var navigationExtras = {
            queryParams: {
                postId: postId
            }
        };
        this.route.navigate(['/Report'], navigationExtras);
    }
    resetHoverOn() {
        this.hoverOnShareBtn = [false, false, false, false, false];
        this.hoverOnShareBox = [false, false, false, false, false];
    }
    updatePostListShown(event) {
        var navigationExtras = {
            queryParams: {
                pageIndex: event.pageIndex
            }
        };
        this.route.navigate(['/LatestPosts'], navigationExtras);
    }
    delete(postId) {
        this.postListService.getPostList().subscribe((postList) => {
            this.postListService.deletePost(postId).subscribe((reviewPost) => {
                this.postList = this.postList.filter((reviewPost) => {
                    return reviewPost._id != postId;
                });
                var start = this.pageIndex * 5;
                this.postListShown = this.postList.slice(start, start + 5);
            });
        });
    }
    updatePostListLikeAndDislike() {
        this.postListLike = this.postListService.getPostListLike();
        this.postListDislike = this.postListService.getPostListDislike();
    }
    onClickLikePost(post) {
        var postId = post._id;
        if (this.postListDislike.includes(postId)) {
            post.numOfDislikes--;
            post.numOfLikes++;
            this.postListService.cancelDislikePost(postId).subscribe((post_1) => {
                this.postListService.likePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListLike.includes(postId)) {
            post.numOfLikes++;
            this.postListService.likePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfLikes--;
            this.postListService.cancelLikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onClickDislikePost(post) {
        var postId = post._id;
        if (this.postListLike.includes(postId)) {
            post.numOfLikes--;
            post.numOfDislikes++;
            this.postListService.cancelLikePost(postId).subscribe((post_1) => {
                this.postListService.dislikePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListDislike.includes(postId)) {
            post.numOfDislikes++;
            this.postListService.dislikePost(postId).subscribe((post_2) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfDislikes--;
            this.postListService.cancelDislikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onCopyPost(post, copyContent) {
        post.numOfShares++;
        const oInput = document.createElement('textarea');
        var postId = post._id;
        oInput.value = copyContent + '\n@ModuleReviewsSharing';
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand('Copy');
        oInput.style.display = 'none';
        this.snackBar.open('Review post copied!', '', {
            duration: 2000,
        });
        this.postListService.sharePost(postId).subscribe((post_1) => {
        });
    }
    ifLike(postId) {
        return this.postListLike.includes(postId);
    }
    ifDislike(postId) {
        return this.postListDislike.includes(postId);
    }
    mouseLeaveShareBtn(key) {
        setTimeout(() => this.hoverOnShareBtn[key] = false, 200);
    }
}
LatestPostsComponent.ɵfac = function LatestPostsComponent_Factory(t) { return new (t || LatestPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_1__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_4__["AdminAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LatestPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestPostsComponent, selectors: [["app-latest-posts"]], decls: 9, vars: 4, consts: [[1, "flex-container"], [1, "left-panel"], [1, "mat-display-1"], ["class", "no-reviews-yet mat-h1", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["pageSize", "5", "showFirstLastButtons", "true", "hidePageSize", "true", 3, "length", "pageIndex", "page"], [1, "right-panel"], [1, "no-reviews-yet", "mat-h1"], ["mat-card-avatar", "", 1, "header-image"], [1, "header"], [1, "mat-caption"], [1, "view-btn"], ["mat-icon-button", "", "matTooltip", "view", 3, "click"], [1, "icon-btn"], ["mat-icon-button", "", "matTooltip", "report", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Errors were reported in this post!", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click", 4, "ngIf"], [1, "review"], [1, "mat-body"], [1, "extra-info", "mat-caption"], [1, "flex-container", "ratings"], ["matTooltip", "10 for most satisfied"], [1, "icon"], [4, "ngIf"], ["matTooltip", "10 for most difficult"], ["matTooltip", "10 for heaviest workload"], ["matTooltip", "10 for most willing to recommend"], [1, "btns"], ["mat-icon-button", "", "matTooltip", "like", 3, "click"], [1, "icon-btn", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "dislike", 3, "click"], ["mat-icon-button", "", "matTooltip", "share", 3, "mouseover", "mouseleave"], ["class", "share-box", 3, "mouseover", "mouseleave", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "report", 3, "click"], ["mat-icon-button", "", "matTooltip", "Errors were reported in this post!"], [2, "color", "red"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click"], [1, "share-box", 3, "mouseover", "mouseleave"], ["mat-icon-button", "", "matTooltip", "copy review post", 1, "copy-btn", 3, "click"], ["copyContent", ""]], template: function LatestPostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LatestPostsComponent_mat_card_4_Template, 4, 0, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LatestPostsComponent_mat_card_5_Template, 75, 50, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function LatestPostsComponent_Template_mat_paginator_page_6_listener($event) { return ctx.updatePostListShown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-data-collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postListShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.postList.length)("pageIndex", ctx.pageIndex);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_7__["DataCollectedComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["main[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 2rem auto;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n.mat-display-1[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    width: 25%;\n}\n\n.review[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.no-reviews-yet[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.no-reviews-yet[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n    margin: 0 10px;\n}\n\n.left-panel[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.ratings[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n.ratings[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 25%;\n    text-align: center;\n}\n\n.btns[_ngcontent-%COMP%] {\n    width: 30%;\n    text-align: right;\n}\n\n.btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 0 10px;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n    color: #4050b5;\n}\n\n.share-box[_ngcontent-%COMP%] {\n    width: 700px;\n    position: absolute;\n    left: 40%;\n    z-index: 1;\n    text-align: left;\n}\n\n.copy-btn[_ngcontent-%COMP%] {\n    float: right;\n}\n\npre[_ngcontent-%COMP%] {\n\n    white-space: pre-wrap; \n    \n    white-space: -moz-pre-wrap; \n    \n    white-space: -pre-wrap; \n    \n    white-space: -o-pre-wrap; \n    \n    word-wrap: break-word; \n    \n    }\n\n.header-image[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXRlc3QtcG9zdHMvbGF0ZXN0LXBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHFCQUFxQixFQUFFLFFBQVE7O0lBRS9CLDBCQUEwQixFQUFFLG9CQUFvQjs7SUFFaEQsc0JBQXNCLEVBQUUsV0FBVzs7SUFFbkMsd0JBQXdCLEVBQUUsU0FBUzs7SUFFbkMscUJBQXFCLEVBQUUsdUJBQXVCOztJQUU5Qzs7QUFFSjtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF0ZXN0LXBvc3RzL2xhdGVzdC1wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbn1cblxuLmxlZnQtcGFuZWwge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5tYXQtZGlzcGxheS0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4ucmV2aWV3IHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5uby1yZXZpZXdzLXlldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tcmV2aWV3cy15ZXQgPiBtYXQtaWNvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5sZWZ0LXBhbmVsID4gbWF0LWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnZpZXctYnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnJhdGluZ3Mge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5yYXRpbmdzID4gZGl2IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bnMge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idG5zID4gYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmJsdWUtY29sb3Ige1xuICAgIGNvbG9yOiAjNDA1MGI1O1xufVxuXG4uc2hhcmUtYm94IHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb3B5LWJ0biB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5wcmUge1xuXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKmNzcy0zKi9cbiAgICBcbiAgICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDsgLypNb3ppbGxhLHNpbmNlMTk5OSovXG4gICAgXG4gICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgLypPcGVyYTQtNiovXG4gICAgXG4gICAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyAvKk9wZXJhNyovXG4gICAgXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKkludGVybmV0RXhwbG9yZXI1LjUrKi9cbiAgICBcbiAgICB9XG5cbi5oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestPostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latest-posts',
                templateUrl: './latest-posts.component.html',
                styleUrls: ['./latest-posts.component.css']
            }]
    }], function () { return [{ type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_1__["PostListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_4__["AdminAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/module-list-subcomponents/main-board/main-board.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/module-list-subcomponents/main-board/main-board.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MainBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBoardComponent", function() { return MainBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _refinementList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../refinementList */ "./src/app/refinementList.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _refinement_list_refinement_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../refinement-list/refinement-list.component */ "./src/app/components/module-list-subcomponents/refinement-list/refinement-list.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");





















function MainBoardComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.searchInput = ""; return ctx_r4.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainBoardComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_div_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const module_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goModule(module_r6.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_div_32_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const module_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.goPostReviews(module_r6.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r6.moduleCode, " - ", module_r6.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", module_r6.faculty, " - ", module_r6.department, " - ", module_r6.moduleCredit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r6.numOfReviews);
} }
function MainBoardComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Already at the bottom! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainBoardComponent {
    constructor(searchService, route, postListService) {
        this.searchService = searchService;
        this.route = route;
        this.postListService = postListService;
        this.refinementList = new _refinementList__WEBPACK_IMPORTED_MODULE_1__["RefinementList"]([], [], [], []);
        this.selectorList = ['Faculty', 'Department', 'ModuleCredit', 'Level'];
        this.searchInput = '';
        this.prof = '';
        this.acadYear = '';
        this.filteredModuleList = [];
        this.moduleListShown = [];
        this.sortOption = 'moduleCode';
        this.showSpinner = false;
    }
    ngOnInit() {
        if (this.searchInputFromFather) {
            this.searchInput = this.searchInputFromFather;
        }
        this.showSpinner = true;
        this.search();
    }
    sortFilteredModuleList() {
        this.filteredModuleList.sort(this.getSortMethod(this.sortOption));
        this.moduleListShown = this.filteredModuleList.slice(0, 15);
        this.updateNumOfReviews();
    }
    getSortMethod(key) {
        if (key == 'moduleCredit') {
            return (a, b) => {
                return parseInt(a[key]) > parseInt(b[key]) ? 1 : -1;
            };
        }
        else {
            return (a, b) => {
                return a[key] > b[key] ? 1 : -1;
            };
        }
    }
    updateNumOfReviews() {
        var arrOfCountRes = [];
        this.moduleListShown.forEach((module) => {
            arrOfCountRes.push(this.postListService.countPostList(module.moduleCode));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(arrOfCountRes).subscribe((listOfNumOfReviews) => {
            this.moduleListShown.forEach((module, index) => {
                module.numOfReviews = listOfNumOfReviews[index];
            });
        });
    }
    goPostReviews(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/PostReview'], navigationExtras);
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    updateRefinementList(refinementList) {
        this.refinementList = refinementList;
        this.search();
    }
    search() {
        this.searchService.search(this.searchInput, this.refinementList).subscribe((searchResult) => {
            this.showSpinner = false;
            this.filteredModuleList = searchResult;
            this.moduleListShown = this.filteredModuleList.slice(0, 15);
            this.filteredModuleList.forEach((module) => {
                module.numOfReviews = 0;
            });
            this.updateNumOfReviews();
            this.sortFilteredModuleList();
        });
    }
    reverseFilteredModuleList() {
        this.filteredModuleList = this.filteredModuleList.reverse();
        this.moduleListShown = this.filteredModuleList.slice(0, 15);
        this.updateNumOfReviews();
    }
    updateModuleListShown(event) {
        var start = event.pageIndex * 15;
        this.moduleListShown = this.filteredModuleList.slice(start, start + 15);
    }
}
MainBoardComponent.ɵfac = function MainBoardComponent_Factory(t) { return new (t || MainBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_5__["PostListService"])); };
MainBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBoardComponent, selectors: [["app-main-board"]], inputs: { searchInputFromFather: ["searchInput", "searchInputFromFather"] }, decls: 36, vars: 9, consts: [[1, "main-board"], [3, "sendRefinementList"], [1, "header"], [1, "search-box"], ["type", "text", "matInput", "", "placeholder", "CS2100", 1, "mat-h3", 3, "ngModel", "ngModelChange", "input"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "search-result"], [1, "flex-container"], [1, "number-of-modules-found"], [1, "sort-options"], ["name", "sortOption", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "moduleCode"], ["value", "title"], ["value", "moduleCredit"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "reverse", 1, "icon-btn"], [1, "module-list"], ["class", "flex-container", 4, "ngFor", "ngForOf"], ["class", "bottom", 4, "ngIf"], ["pageSize", "15", "showFirstLastButtons", "true", "hidePageSize", "true", 3, "length", "page"], ["paginator", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-button", "", 1, "module-btn", 3, "click"], [1, "mat-caption"], [1, "review-action", "flex-container"], ["matTooltip", "number of reviews", 1, "number-of-reviews"], ["mat-icon-button", "", "matTooltip", "add reviews", 1, "add-btn", 3, "click"], [1, "icon-btn"], [1, "bottom"]], template: function MainBoardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-refinement-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendRefinementList", function MainBoardComponent_Template_app_refinement_list_sendRefinementList_1_listener($event) { return ctx.updateRefinementList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Module Code or Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainBoardComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchInput = $event; })("input", function MainBoardComponent_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); ctx.search(); return _r3.firstPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainBoardComponent_button_10_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainBoardComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.sortOption = $event; })("selectionChange", function MainBoardComponent_Template_mat_select_selectionChange_20_listener() { return ctx.sortFilteredModuleList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " module code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " module title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " module credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_button_click_27_listener() { return ctx.reverseFilteredModuleList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainBoardComponent_div_32_Template, 14, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainBoardComponent_div_33_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-paginator", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MainBoardComponent_Template_mat_paginator_page_34_listener($event) { return ctx.updateModuleListShown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.filteredModuleList.length, " Modules Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showSpinner ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moduleListShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleListShown.length < 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.filteredModuleList.length);
    } }, directives: [_refinement_list_refinement_list_component__WEBPACK_IMPORTED_MODULE_6__["RefinementListComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"]], styles: [".main-board[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.search-box[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n\n.search-box[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n    width: 40%;\n}\n\n.search-box[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n    width: 5%;\n    margin-top: 20px;\n}\n\n.search-among-modules-with-reviews[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 10px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.input[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 0 10px;\n}\n\n.module-btn[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n    color: #4050b5;\n  }\n\n.module-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    padding: 0 10px;\n    border-radius: 0;\n  }\n\n.module-list[_ngcontent-%COMP%] {\n    margin: 10px auto;\n  }\n\n.search-result[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 1rem auto 0;\n    min-height: 540px;\n  }\n\n.add-btn[_ngcontent-%COMP%] {\n    margin: 0 1rem;\n  }\n\n.number-of-reviews[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n.review-action[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n\n.no-modules-found[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    text-align: center;\n  }\n\n.no-modules-found[_ngcontent-%COMP%] {\n    text-align: center;\n    color: red;\n  }\n\n.bottom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.number-of-modules-found[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 20px;\n}\n\n.sort-options[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: right;\n}\n\n.sort-options[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 150px;\n  margin: 0 10px;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtbGlzdC1zdWJjb21wb25lbnRzL21haW4tYm9hcmQvbWFpbi1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUdFO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7O0FBR0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZHVsZS1saXN0LXN1YmNvbXBvbmVudHMvbWFpbi1ib2FyZC9tYWluLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNlYXJjaC1ib3ggPiBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLnNlYXJjaC1ib3ggPiBtYXQtaWNvbiB7XG4gICAgd2lkdGg6IDUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZWFyY2gtYW1vbmctbW9kdWxlcy13aXRoLXJldmlld3Mge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuICBcbiAgLm1vZHVsZS1idG46aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjNDA1MGI1O1xuICB9XG4gIFxuICBcbiAgLm1vZHVsZS1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIC5tb2R1bGUtbGlzdCB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xuICAgIG1pbi1oZWlnaHQ6IDU0MHB4O1xuICB9XG4gIFxuICAuYWRkLWJ0biB7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cbiAgXG4gIC5udW1iZXItb2YtcmV2aWV3cyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLnJldmlldy1hY3Rpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLm5vLW1vZHVsZXMtZm91bmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm5vLW1vZHVsZXMtZm91bmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbi5ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5udW1iZXItb2YtbW9kdWxlcy1mb3VuZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc29ydC1vcHRpb25zIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zb3J0LW9wdGlvbnMgPiBtYXQtZm9ybS1maWVsZCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-board',
                templateUrl: './main-board.component.html',
                styleUrls: ['./main-board.component.css']
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_5__["PostListService"] }]; }, { searchInputFromFather: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['searchInput']
        }] }); })();


/***/ }),

/***/ "./src/app/components/module-list-subcomponents/refinement-list/refinement-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/module-list-subcomponents/refinement-list/refinement-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RefinementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinementListComponent", function() { return RefinementListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_refinementList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/refinementList */ "./src/app/refinementList.ts");
/* harmony import */ var _services_refinement_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refinement-list.service */ "./src/app/services/refinement-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function RefinementListComponent_div_0_div_1_span_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefinementListComponent_div_0_div_1_span_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const refinement_r5 = ctx.$implicit; const selector_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.deleteRefinement(selector_r2, refinement_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const refinement_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", refinement_r5, " ");
} }
function RefinementListComponent_div_0_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefinementListComponent_div_0_div_1_span_1_button_3_Template, 4, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selector_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", selector_r2, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.refinementList[selector_r2]);
} }
function RefinementListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefinementListComponent_div_0_div_1_span_1_Template, 4, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.refinementList[selector_r2].length > 0);
} }
function RefinementListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefinementListComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectorList);
} }
class RefinementListComponent {
    constructor(refinementListService) {
        this.refinementListService = refinementListService;
        this.refinementList = new src_app_refinementList__WEBPACK_IMPORTED_MODULE_1__["RefinementList"]([], [], [], []);
        this.selectorList = ['Faculty', 'Department', 'ModuleCredit', 'Level'];
        this.sendRefinementList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.refinementListService.getRefinementList().subscribe((refinementList) => {
            this.refinementList = refinementList;
            this.sendRefinementList.emit(this.refinementList);
        });
    }
    deleteRefinement(selector, refinement) {
        this.refinementListService.deleteRefinement(selector, refinement);
    }
}
RefinementListComponent.ɵfac = function RefinementListComponent_Factory(t) { return new (t || RefinementListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_refinement_list_service__WEBPACK_IMPORTED_MODULE_2__["RefinementListService"])); };
RefinementListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefinementListComponent, selectors: [["app-refinement-list"]], outputs: { sendRefinementList: "sendRefinementList" }, decls: 1, vars: 1, consts: [["class", "refinement-list", 4, "ngIf"], [1, "refinement-list"], ["class", "refinement-container", 4, "ngFor", "ngForOf"], [1, "refinement-container"], [4, "ngIf"], [1, "mat-h3"], ["mat-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"]], template: function RefinementListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RefinementListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.refinementList.isEmpty());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".refinement-list[_ngcontent-%COMP%] {\n    background-color: #e1e1e1;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.refinment-container[_ngcontent-%COMP%] {\n    display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtbGlzdC1zdWJjb21wb25lbnRzL3JlZmluZW1lbnQtbGlzdC9yZWZpbmVtZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZHVsZS1saXN0LXN1YmNvbXBvbmVudHMvcmVmaW5lbWVudC1saXN0L3JlZmluZW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmluZW1lbnQtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnJlZmlubWVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefinementListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refinement-list',
                templateUrl: './refinement-list.component.html',
                styleUrls: ['./refinement-list.component.css']
            }]
    }], function () { return [{ type: _services_refinement_list_service__WEBPACK_IMPORTED_MODULE_2__["RefinementListService"] }]; }, { sendRefinementList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/module-list-subcomponents/refinement-table/refinement-table.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/module-list-subcomponents/refinement-table/refinement-table.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RefinementTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinementTableComponent", function() { return RefinementTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_refinement_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/refinement-list.service */ "./src/app/services/refinement-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");







function RefinementTableComponent_div_2_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefinementTableComponent_div_2_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const condition_r8 = ctx.$implicit; const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addRefinement(selector_r1, condition_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", condition_r8, " ");
} }
function RefinementTableComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefinementTableComponent_div_2_div_3_button_1_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.conditionList[selector_r1]);
} }
function RefinementTableComponent_div_2_div_4_div_1_span_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefinementTableComponent_div_2_div_4_div_1_span_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const refinement_r17 = ctx.$implicit; const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.addRefinement(selector_r1, refinement_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const refinement_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", refinement_r17, " ");
} }
function RefinementTableComponent_div_2_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefinementTableComponent_div_2_div_4_div_1_span_1_button_4_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const initial_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", initial_r14, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.fullList[selector_r1][initial_r14]);
} }
function RefinementTableComponent_div_2_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefinementTableComponent_div_2_div_4_div_1_span_1_Template, 5, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const initial_r14 = ctx.$implicit;
    const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.fullList[selector_r1][initial_r14]);
} }
function RefinementTableComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefinementTableComponent_div_2_div_4_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.initialList);
} }
function RefinementTableComponent_div_2_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefinementTableComponent_div_2_div_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.showMore(selector_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefinementTableComponent_div_2_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefinementTableComponent_div_2_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.showLess(selector_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefinementTableComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefinementTableComponent_div_2_div_5_button_1_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefinementTableComponent_div_2_div_5_button_2_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selector_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.more[selector_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.more[selector_r1]);
} }
function RefinementTableComponent_div_2_mat_divider_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function RefinementTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefinementTableComponent_div_2_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefinementTableComponent_div_2_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefinementTableComponent_div_2_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefinementTableComponent_div_2_mat_divider_6_Template, 1, 0, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    const key_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selector_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.more[selector_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.more[selector_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selector_r1 == "Faculty" || selector_r1 == "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r2 != ctx_r0.selectorList.length - 1);
} }
class RefinementTableComponent {
    constructor(refinementListService) {
        this.refinementListService = refinementListService;
        this.selectorList = ['Faculty', 'Department', 'ModuleCredit', 'Level'];
        this.facultyList = {
            'A': ['Arts and Social Science'],
            'C': ['Computing', 'Cont and Lifelong Education'],
            'D': ['Dentistry', 'Design and Environment', 'Duke-NUS Medical School'],
            'E': ['Engineering'],
            'I': ['Institute of Systems Science'],
            'L': ['LKY School of Public Policy',
                'Logistics Inst-Asia Pac'],
            'M': ['Multi Disciplinary Programme'],
            'N': ['NUS',
                'NUS Business School',
                'NUS Graduate Sch for Int Science and Engineering'],
            'R': ['Residential College',
                'Risk Management Institute',],
            'S': ['Science',
                'SSH School of Public Health',],
            'T': ['Temasek Defence Sys. Institute',],
            'U': ['University Scholars Programme',],
            'Y': ['Yale-NUS College',
                'Yong Loo Lin Sch of Medicine',
                'YST Conservatory of Music']
        };
        this.more = {
            Faculty: false,
            Department: false
        };
        this.conditionList = {
            'Department': [
                'Accounting',
                'Architecture',
                'Chemistry',
                'Civil and Environmental Engineering',
                'Computer Science',
                'Mathematics',
                'Mechanical Engineering',
                'Pharmacy',
            ],
            'Faculty': [
                'Arts and Social Science',
                'NUS Business School',
                'Computing',
                'Dentistry',
                'Engineering',
                'Law',
                'Science',
            ],
            'ModuleCredit': [
                '0-3 MC', '4 MC', '5-8 MC', 'More than 8 MC'
            ],
            'Level': [
                '1000', '2000', '3000', '4000', '5000', '6000'
            ]
        };
        this.initialList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.departmentList = {
            'A': ['Accounting',
                'Alice Lee Center for Nursing Studies',
                'Analytics and Operations',
                'Anatomy',
                'Architecture',],
            'B': ['Biochemistry',
                'Biological Sciences',
                'Biomedical Engineering',
                'BIZ Dean\'s Office',
                'Building'],
            'C': ['Center for Engl Lang Comms',
                'Center for Quantum Technologies',
                'Centre for Language Studies',
                'Chemical and Biomolecular Engineering',
                'Chemistry',
                'Chinese Studies',
                'Chua Thian Poh Comm Leader Center',
                'Civil & Environmental Engineering',
                'College of Alice and Peter Tan',
                'Communications and New Media',
                'Computer Science',
                'Computing and Engineering Programme',],
            'D': ['Division of Graduate Dental Studies',
                'Division of Graduate Medical Studies',
                'Duke-NUS Dean\'s Office'],
            'E': ['Economics',
                'Electrical and Computer Engineering',
                'Engineering Science Programme',
                'English Language and Literature',],
            'F': [
                'FASS Dean\'s Office/Office of Programmes',
                'Finance',
                'FoD Dean\'s Office',
                'FoE Dean\'s Office',
                'FoL Dean\'s Office',
                'Food Science and Technology',
                'FoS Dean\'s Office',
            ],
            'G': ['Geography'],
            'H': [
                'History',
            ],
            'I': ['Industrial Design',
                'Industrial Systems Engineering and Management',
                'Information Systems and Analytics',
                'Institute of Systems Science'],
            'J': ['Japanese Studies'],
            'L': ['LKYSPP Dean\'s Office',
                'Logistics Inst - Asia Pac'],
            'M': ['Malay Studies',
                'Management and Organisation',
                'Marketing',
                'Materials Science and Engineering',
                'Mathematics',
                'Mechanical Engineering',
                'Mechanobiology Institute (MBI)',
                'Microbiology and Immunology'],
            'N': ['NGS Dean\'s Office',
                'NUS Entrepreneurship Centre',
                'NUS Medicine Dean\'s Office'],
            'O': ['Office of Sr Dy Pres and Provost'],
            'P': ['Pathology',
                'Pharmacology',
                'Pharmacy',
                'Philosophy',
                'Physics',
                'Physiology',
                'Political Science',
                'Psychology'],
            'R': ['Real Estate',
                'Residential College 4',
                'Risk Management Institute'],
            'S': ['SCALE Dean\'s Office',
                'SDE Dean\'s Office',
                'SoC Dean\'s Office',
                'Social Work',
                'Sociology',
                'South Asian Studies',
                'Southeast Asian Studies',
                'SSH School of Public Health Dean\'s Office',
                'Statistics and Applied Probability',
                'Strategy and Policy'],
            'T': [
                'Temasek Defence Systems Inst',
                'Tembusu College'
            ],
            'U': ['University Scholars Programme'],
            'Y': ['Yale-NUS College',
                'YSTCM Dean\'s Office'],
        };
        this.fullList = {
            Faculty: this.facultyList,
            Department: this.departmentList
        };
        this.sendMore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendCloseDrawer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addRefinement(selector, refinement) {
        this.refinementListService.addRefinement(selector, refinement);
    }
    showMore(selector) {
        this.more[selector] = true;
        this.sendMore.emit(this.more);
    }
    showLess(selector) {
        this.more[selector] = false;
        this.sendMore.emit(this.more);
    }
    closeDrawer() {
        this.sendCloseDrawer.emit();
        this.resetMore();
    }
    resetMore() {
        this.more = {
            'Department': false,
            'Faculty': false
        };
        this.sendMore.emit(this.more);
    }
}
RefinementTableComponent.ɵfac = function RefinementTableComponent_Factory(t) { return new (t || RefinementTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_refinement_list_service__WEBPACK_IMPORTED_MODULE_1__["RefinementListService"])); };
RefinementTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefinementTableComponent, selectors: [["app-refinement-table"]], outputs: { sendMore: "sendMore", sendCloseDrawer: "sendCloseDrawer" }, decls: 7, vars: 1, consts: [[1, "flex-container"], ["class", "selector-container", 4, "ngFor", "ngForOf"], [1, "btn-container"], ["mat-button", "", 1, "back-btn", 3, "click"], [1, "selector-container"], [1, "mat-h1"], [4, "ngIf"], ["class", "more-btn", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [4, "ngFor", "ngForOf"], [1, "mat-h3"], [1, "more-btn"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"]], template: function RefinementTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefinementTableComponent_div_2_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefinementTableComponent_Template_button_click_4_listener() { return ctx.closeDrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectorList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]], styles: [".selector-container[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n    text-align: right;\n    margin: 5px;\n}\n\n.mat-h1[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.mat-h3[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: 5px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n    color: #4050b5;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 164px;\n}\n\n.back-btn[_ngcontent-%COMP%]{\n    position: absolute;\n    height: 725px;\n    margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtbGlzdC1zdWJjb21wb25lbnRzL3JlZmluZW1lbnQtdGFibGUvcmVmaW5lbWVudC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtbGlzdC1zdWJjb21wb25lbnRzL3JlZmluZW1lbnQtdGFibGUvcmVmaW5lbWVudC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vcmUtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLm1hdC1oMSB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWF0LWgzIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICM0MDUwYjU7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE2NHB4O1xufVxuXG4uYmFjay1idG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNzI1cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefinementTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refinement-table',
                templateUrl: './refinement-table.component.html',
                styleUrls: ['./refinement-table.component.css']
            }]
    }], function () { return [{ type: _services_refinement_list_service__WEBPACK_IMPORTED_MODULE_1__["RefinementListService"] }]; }, { sendMore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sendCloseDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/module-list/module-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/module-list/module-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _module_list_subcomponents_refinement_table_refinement_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module-list-subcomponents/refinement-table/refinement-table.component */ "./src/app/components/module-list-subcomponents/refinement-table/refinement-table.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _module_list_subcomponents_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module-list-subcomponents/main-board/main-board.component */ "./src/app/components/module-list-subcomponents/main-board/main-board.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function ModuleListComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleListComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModuleListComponent {
    constructor(route) {
        this.route = route;
        this.widthOfDrawer = '40%';
        this.widthOfMain = '100%';
        this.hasBackdrop = false;
        this.status = {
            opened: false,
            more: {
                'Faculty': false,
                'Department': false
            }
        };
        this.searchInput = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            if (data) {
                this.searchInput = data.searchInput;
            }
        });
    }
    updateOpened() {
        this.status.opened = !this.status.opened;
        this.updateWidthOfMain();
    }
    updateMore(more) {
        this.status.more = more;
        this.updateWidthOfDrawer(more);
    }
    updateWidthOfDrawer(more) {
        if (more['Department']) {
            this.widthOfDrawer = '70%';
            this.hasBackdrop = true;
        }
        else if (more['Faculty']) {
            this.widthOfDrawer = '45%';
            this.hasBackdrop = true;
        }
        else {
            this.widthOfDrawer = '40%';
            this.hasBackdrop = false;
        }
    }
    updateWidthOfMain() {
        if (this.status.opened) {
            this.widthOfMain = '60%';
        }
        else {
            this.widthOfMain = '100%';
        }
    }
}
ModuleListComponent.ɵfac = function ModuleListComponent_Factory(t) { return new (t || ModuleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ModuleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleListComponent, selectors: [["app-module-list"]], decls: 9, vars: 7, consts: [[3, "hasBackdrop"], ["mode", "push", 3, "openedChange"], ["drawer", ""], [3, "sendMore", "sendCloseDrawer"], ["RefinementTable", ""], ["mat-button", "", "class", "forward-btn", 3, "click", 4, "ngIf"], [3, "searchInput"], ["mat-button", "", 1, "forward-btn", 3, "click"]], template: function ModuleListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function ModuleListComponent_Template_mat_drawer_openedChange_1_listener() { return ctx.updateOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-refinement-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendMore", function ModuleListComponent_Template_app_refinement_table_sendMore_3_listener($event) { return ctx.updateMore($event); })("sendCloseDrawer", function ModuleListComponent_Template_app_refinement_table_sendCloseDrawer_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModuleListComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-main-board", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", ctx.hasBackdrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthOfDrawer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthOfMain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchInput", ctx.searchInput);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _module_list_subcomponents_refinement_table_refinement_table_component__WEBPACK_IMPORTED_MODULE_3__["RefinementTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _module_list_subcomponents_main_board_main_board_component__WEBPACK_IMPORTED_MODULE_5__["MainBoardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n}\n\n.forward-btn[_ngcontent-%COMP%] {\n    height: 725px;\n}\n\nmain[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtbGlzdC9tb2R1bGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtbGlzdC9tb2R1bGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvcndhcmQtYnRuIHtcbiAgICBoZWlnaHQ6IDcyNXB4O1xufVxuXG5tYWluID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-module-list',
                templateUrl: './module-list.component.html',
                styleUrls: ['./module-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/module-subcomponents/module-description/module-description.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/module-subcomponents/module-description/module-description.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ModuleDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleDescriptionComponent", function() { return ModuleDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module */ "./src/app/module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");







class ModuleDescriptionComponent {
    constructor(activatedRoute, http, searchService) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.searchService = searchService;
        this.module = new src_app_module__WEBPACK_IMPORTED_MODULE_1__["Module"]('', '', '', '', '', '', 0);
        this.description = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data) => {
            this.searchService.getModule(data.moduleCode).subscribe((module) => {
                this.module = module;
                this.description = this.module.description;
                document.getElementsByTagName('a')[0].
                    setAttribute('href', 'https://nusmods.com/modules/' + this.module.moduleCode + '/' + this.module.title);
            });
        });
    }
}
ModuleDescriptionComponent.ɵfac = function ModuleDescriptionComponent_Factory(t) { return new (t || ModuleDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"])); };
ModuleDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleDescriptionComponent, selectors: [["app-module-description"]], decls: 8, vars: 1, consts: [[1, "mat-body"], [1, "mat-caption"], [1, "https://nusmods.com/modules?sem[0]=1&sem[1]=2&sem[2]=3&sem[3]=4"]], template: function ModuleDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "For more official information, please go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NUSMods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"]], styles: [".mat-caption[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtc3ViY29tcG9uZW50cy9tb2R1bGUtZGVzY3JpcHRpb24vbW9kdWxlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtc3ViY29tcG9uZW50cy9tb2R1bGUtZGVzY3JpcHRpb24vbW9kdWxlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWNhcmQge1xuICAgIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-module-description',
                templateUrl: './module-description.component.html',
                styleUrls: ['./module-description.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/module-subcomponents/question-list/question-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/module-subcomponents/question-list/question-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/answer */ "./src/app/answer.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Question */ "./src/app/Question.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_question_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/question-list.service */ "./src/app/services/question-list.service.ts");
/* harmony import */ var src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/admin-account.service */ "./src/app/services/admin-account.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");


















function QuestionListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clearly state your question and keep it short.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionListComponent_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.questionEntered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.resetQuestionForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); ctx_r7.onSubmitAQuestion(); return _r3.firstPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.questionEntered);
} }
function QuestionListComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No questions yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionListComponent_mat_card_9_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_mat_card_9_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const question_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteQuestion(question_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionListComponent_mat_card_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No answers yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionListComponent_mat_card_9_li_13_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_mat_card_9_li_13_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const answer_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const question_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.deleteAnswer(question_r8, answer_r18._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionListComponent_mat_card_9_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuestionListComponent_mat_card_9_li_13_button_5_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r18 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", answer_r18.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isSuccessfulLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", answer_r18.date, " - ", answer_r18.time, " by ", ctx_r12.userName, " ");
} }
function QuestionListComponent_mat_card_9_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clearly state your answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionListComponent_mat_card_9_div_14_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.answerEntered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_mat_card_9_div_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.resetAnswerForm(key_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_mat_card_9_div_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const question_r8 = ctx_r29.$implicit; const key_r9 = ctx_r29.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onSubmitAnAnswer(question_r8, key_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.answerEntered);
} }
function QuestionListComponent_mat_card_9_mat_card_actions_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_mat_card_9_mat_card_actions_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.showAnswerForm(key_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I have an answer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionListComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "question_answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionListComponent_mat_card_9_button_7_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionListComponent_mat_card_9_div_11_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuestionListComponent_mat_card_9_li_13_Template, 8, 5, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuestionListComponent_mat_card_9_div_14_Template, 10, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuestionListComponent_mat_card_9_mat_card_actions_15_Template, 3, 0, "mat-card-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r8 = ctx.$implicit;
    const key_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r8.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isSuccessfulLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", question_r8.date, " - ", question_r8.time, " by ", ctx_r2.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r8.answerList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r8.answerList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ifPostAnAnswer[key_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.ifPostAnAnswer[key_r9]);
} }
class QuestionListComponent {
    constructor(activatedRoute, http, questionListService, adminAccountService) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.questionListService = questionListService;
        this.adminAccountService = adminAccountService;
        this.moduleCode = '';
        this.questionList = [];
        this.questionListShown = [];
        this.questionEntered = '';
        this.answerEntered = '';
        this.ifPostAnAnswer = [];
        this.ifAskAQuestion = false;
        this.userName = 'Anonymous';
        this.isSuccessfulLogin = false;
        this.pageIndex = 0;
    }
    ngOnInit() {
        if (this.adminAccountService.getAdminAccount()) {
            this.isSuccessfulLogin = true;
        }
        this.ifPostAnAnswer = this.questionList.map((question) => false);
        this.activatedRoute.queryParams.subscribe((data) => {
            this.moduleCode = data.moduleCode;
            this.updateQuestionList();
        });
    }
    updateQuestionList() {
        this.questionListService.getQuestionListOfModule(this.moduleCode).subscribe((quesitonList) => {
            this.questionList = quesitonList;
            this.questionListShown = this.questionList.slice(0, 3);
        });
    }
    showQuestionForm() {
        this.ifAskAQuestion = true;
    }
    showAnswerForm(key) {
        this.ifPostAnAnswer[key] = true;
    }
    updateQuestionListShown(event) {
        this.pageIndex = event.pageIndex;
        var start = 3 * this.pageIndex;
        this.questionListShown = this.questionList.slice(start, start + 3);
    }
    onSubmitAnAnswer(question, key) {
        var ans = new src_app_answer__WEBPACK_IMPORTED_MODULE_1__["Answer"](this.answerEntered, new Date().toLocaleDateString(), new Date().toLocaleTimeString().slice(0, 8), question._id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.http.post('/answers', ans, httpOptions).subscribe((answer) => {
            question.answerList.push(answer);
            this.resetAnswerForm(key);
        });
    }
    deleteAnswer(question, answerId) {
        this.http.delete('/answers/delete/' + answerId).subscribe((answer) => {
            question.answerList = question.answerList.filter((ans) => {
                return ans._id != answerId;
            });
        });
    }
    deleteQuestion(questionId) {
        this.questionListService.deleteQuestion(questionId).subscribe((question) => {
            this.questionListService.getQuestionListOfModule(this.moduleCode).subscribe((quesitonList) => {
                this.questionList = quesitonList;
                var start = this.pageIndex * 3;
                this.questionListShown = this.questionList.slice(start, start + 3);
            });
        });
    }
    onSubmitAQuestion() {
        var question = new src_app_Question__WEBPACK_IMPORTED_MODULE_3__["Question"](this.questionEntered, new Date().toLocaleDateString(), new Date().toLocaleTimeString().slice(0, 8), this.moduleCode);
        this.questionListService.addQuestion(question).subscribe((question) => {
            this.updateQuestionList();
            this.ifPostAnAnswer.unshift(false);
            this.resetQuestionForm();
        });
    }
    resetAnswerForm(key) {
        this.ifPostAnAnswer[key] = false;
        this.answerEntered = '';
    }
    resetQuestionForm() {
        this.ifAskAQuestion = false;
        this.questionEntered = '';
    }
}
QuestionListComponent.ɵfac = function QuestionListComponent_Factory(t) { return new (t || QuestionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_list_service__WEBPACK_IMPORTED_MODULE_5__["QuestionListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_6__["AdminAccountService"])); };
QuestionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionListComponent, selectors: [["app-question-list"]], decls: 12, vars: 5, consts: [[1, "subheader"], [1, "mat-body"], [1, "add-questions-btn"], ["mat-icon-button", "", "matTooltip", "ask a question", 3, "click"], [1, "icon-btn"], ["class", "form", 4, "ngIf"], ["class", "no-questions-yet mat-h1", 4, "ngIf"], ["class", "question-container", 4, "ngFor", "ngForOf"], ["pageSize", "3", "showFirstLastButtons", "true", "hidePageSize", "true", 3, "length", "page"], ["paginator", ""], [1, "form"], ["appearance", "outline"], ["type", "text", "matInput", "", "name", "questionEntered", "minlength", "3", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "no-questions-yet", "mat-h1"], [1, "mat-h3"], [1, "no-questions-icon"], [1, "question-container"], [1, "flex-container"], [1, "header"], [1, "delete-btn"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click", 4, "ngIf"], ["class", "no-answers-yet mat-h1", 4, "ngIf"], ["class", "answer-container", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click"], [1, "no-answers-yet", "mat-h1"], [1, "no-answers-icon"], [1, "answer-container"], [1, "answer-caption", "mat-caption"], ["type", "text", "matInput", "", "name", "answerEntered", "minlength", "3", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "matTooltip", "post an answer", 3, "click"]], template: function QuestionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_Template_button_click_4_listener() { return ctx.showQuestionForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionListComponent_div_7_Template, 10, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuestionListComponent_mat_card_8_Template, 6, 0, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionListComponent_mat_card_9_Template, 16, 9, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function QuestionListComponent_Template_mat_paginator_page_10_listener($event) { return ctx.updateQuestionListShown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" number of questions: ", ctx.questionList.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifAskAQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionListShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.questionList.length);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardActions"]], styles: [".no-questions-yet[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.no-questions-icon[_ngcontent-%COMP%], .no-answers-icon[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.subheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 50%;\n}\n\n.add-questions-btn[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.answer-container[_ngcontent-%COMP%] {\n    border-top: 1px whitesmoke solid;\n    padding: 10px;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.form-actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 5px 10px;\n}\n\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10px 0;\n    border: 1px grey solid;\n    background-color: whitesmoke;\n    border-radius: 5px;\n    text-align: center;\n    padding: 10px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n    text-align: left;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%] {\n    padding-left: 30px;\n}\n\n.answer-caption[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.header[_ngcontent-%COMP%] {\n    width: 80%;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtc3ViY29tcG9uZW50cy9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kdWxlLXN1YmNvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tcXVlc3Rpb25zLXlldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tcXVlc3Rpb25zLWljb24sIC5uby1hbnN3ZXJzLWljb24ge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnN1YmhlYWRlciA+IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5hZGQtcXVlc3Rpb25zLWJ0biB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFuc3dlci1jb250YWluZXIge1xuICAgIGJvcmRlci10b3A6IDFweCB3aGl0ZXNtb2tlIHNvbGlkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5tYXQtY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb3JtLWFjdGlvbnMgPiBidXR0b24ge1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uYW5zd2VyLWNhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-list',
                templateUrl: './question-list.component.html',
                styleUrls: ['./question-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_question_list_service__WEBPACK_IMPORTED_MODULE_5__["QuestionListService"] }, { type: src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_6__["AdminAccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/module-subcomponents/review-list/review-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/module-subcomponents/review-list/review-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module */ "./src/app/module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/admin-account.service */ "./src/app/services/admin-account.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");















function ReviewListComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No reviews yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_mat_card_8_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.goReport(review_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " priority_high ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_mat_card_8_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.delete(review_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_icon_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewListComponent_mat_card_8_mat_card_71_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ReviewListComponent_mat_card_8_mat_card_71_Template_mat_card_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r35.hoverOnShareBox[key_r3] = true); })("mouseleave", function ReviewListComponent_mat_card_8_mat_card_71_Template_mat_card_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r38.hoverOnShareBox[key_r3] = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copy & Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_mat_card_8_mat_card_71_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onCopyPost(review_r2, _r34.innerHTML); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " content_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["", review_r2.moduleInfo.moduleCode, " - ", review_r2.moduleInfo.title, " taken by ", ctx_r27.userName, "\nunder ", review_r2.moduleInfo.prof, ", ", review_r2.moduleInfo.acadYear, " / ", review_r2.moduleInfo.semester, ":\n", review_r2.reviewAndRatings.review, "\ngeneral: ", review_r2.reviewAndRatings.general, " / 10 (10 for most satisfied)       difficulty: ", review_r2.reviewAndRatings.difficulty, " / 10 (10 for most difficult)\nworkload: ", review_r2.reviewAndRatings.workload, " / 10 (10 for heaviest workload)  recommend: ", review_r2.reviewAndRatings.recommend, " / 10 (10 for most willing to recommend)\n                        "]);
} }
const _c0 = function (a0) { return { "blue-color": a0 }; };
function ReviewListComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReviewListComponent_mat_card_8_button_9_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReviewListComponent_mat_card_8_button_10_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReviewListComponent_mat_card_8_button_11_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReviewListComponent_mat_card_8_mat_icon_29_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReviewListComponent_mat_card_8_mat_icon_30_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReviewListComponent_mat_card_8_mat_icon_31_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReviewListComponent_mat_card_8_mat_icon_32_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ReviewListComponent_mat_card_8_mat_icon_33_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ReviewListComponent_mat_card_8_mat_icon_37_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReviewListComponent_mat_card_8_mat_icon_38_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReviewListComponent_mat_card_8_mat_icon_39_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReviewListComponent_mat_card_8_mat_icon_40_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReviewListComponent_mat_card_8_mat_icon_41_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReviewListComponent_mat_card_8_mat_icon_45_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ReviewListComponent_mat_card_8_mat_icon_46_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ReviewListComponent_mat_card_8_mat_icon_47_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ReviewListComponent_mat_card_8_mat_icon_48_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ReviewListComponent_mat_card_8_mat_icon_49_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ReviewListComponent_mat_card_8_mat_icon_53_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ReviewListComponent_mat_card_8_mat_icon_54_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ReviewListComponent_mat_card_8_mat_icon_55_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ReviewListComponent_mat_card_8_mat_icon_56_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ReviewListComponent_mat_card_8_mat_icon_57_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_mat_card_8_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const review_r2 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onClickLikePost(review_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_mat_card_8_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const review_r2 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onClickDislikePost(review_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ReviewListComponent_mat_card_8_Template_button_mouseover_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const key_r3 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r46.hoverOnShareBtn[key_r3] = true); })("mouseleave", function ReviewListComponent_mat_card_8_Template_button_mouseleave_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const key_r3 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.mouseLeaveShareBtn(key_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ReviewListComponent_mat_card_8_mat_card_71_Template, 10, 11, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const key_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + review_r2.headerImage + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Under Prof ", review_r2.moduleInfo.prof, ", ", review_r2.moduleInfo.acadYear, " / ", review_r2.moduleInfo.semester, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reportList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reportList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSuccessfulLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", review_r2.date, " - ", review_r2.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("                ", review_r2.reviewAndRatings.review, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Expected Grade: ", review_r2.extraInfo.gradeExpected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade Obtained: ", review_r2.extraInfo.gradeObtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" general: ", review_r2.reviewAndRatings.general, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.general < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.general > 2 && review_r2.reviewAndRatings.general < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.general > 4 && review_r2.reviewAndRatings.general < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.general > 6 && review_r2.reviewAndRatings.general < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.general > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" difficulty: ", review_r2.reviewAndRatings.difficulty, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.difficulty > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.difficulty > 6 && review_r2.reviewAndRatings.difficulty < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.difficulty > 4 && review_r2.reviewAndRatings.difficulty < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.difficulty > 2 && review_r2.reviewAndRatings.difficulty < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.difficulty < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" workload: ", review_r2.reviewAndRatings.workload, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.workload > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.workload > 6 && review_r2.reviewAndRatings.workload < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.workload > 4 && review_r2.reviewAndRatings.workload < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.workload > 2 && review_r2.reviewAndRatings.workload < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.workload < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" recommend: ", review_r2.reviewAndRatings.recommend, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.recommend < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.recommend > 2 && review_r2.reviewAndRatings.recommend < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.recommend > 4 && review_r2.reviewAndRatings.recommend < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.recommend > 6 && review_r2.reviewAndRatings.recommend < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r2.reviewAndRatings.recommend > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx_r1.ifLike(review_r2._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r2.numOfLikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx_r1.ifDislike(review_r2._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r2.numOfDislikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r2.numOfShares, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hoverOnShareBtn[key_r3] || ctx_r1.hoverOnShareBox[key_r3]);
} }
class ReviewListComponent {
    constructor(route, activatedRoute, searchService, postListService, snackBar, adminAccountService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.postListService = postListService;
        this.snackBar = snackBar;
        this.adminAccountService = adminAccountService;
        this.module = new _module__WEBPACK_IMPORTED_MODULE_1__["Module"]('', '', '', '', '', '', 0);
        this.reviewList = [];
        this.reviewListShown = [];
        this.userName = 'Anonymous';
        this.postListLike = [];
        this.postListDislike = [];
        this.isSuccessfulLogin = false;
        this.pageIndex = 0;
    }
    ngOnInit() {
        this.updatePostListLikeAndDislike();
        this.resetHoverOn();
        if (this.adminAccountService.getAdminAccount()) {
            this.isSuccessfulLogin = true;
        }
        this.activatedRoute.queryParams.subscribe((data) => {
            this.searchService.getModule(data.moduleCode).subscribe((module) => {
                this.module = module;
            });
            this.postListService.getPostListOfModule(data.moduleCode).subscribe((reviewList) => {
                this.reviewList = reviewList.reverse();
                this.reviewListShown = this.reviewList.slice(0, 5);
            });
        });
    }
    addReviews() {
        var navigationExtras = {
            queryParams: {
                moduleCode: this.module.moduleCode
            }
        };
        this.route.navigate(['/PostReview'], navigationExtras);
    }
    delete(postId) {
        this.postListService.getPostList().subscribe((postList) => {
            this.postListService.deletePost(postId).subscribe((postReview) => {
                this.reviewList = this.reviewList.filter((review) => {
                    return review._id != postId;
                });
                var start = this.pageIndex * 5;
                this.reviewListShown = this.reviewList.slice(start, start + 5);
            });
        });
    }
    updateReviewListShown(event) {
        this.pageIndex = event.pageIndex;
        var start = this.pageIndex * 5;
        this.reviewListShown = this.reviewList.slice(start, start + 5);
    }
    updatePostListLikeAndDislike() {
        this.postListLike = this.postListService.getPostListLike();
        this.postListDislike = this.postListService.getPostListDislike();
    }
    onClickLikePost(post) {
        var postId = post._id;
        if (this.postListDislike.includes(postId)) {
            post.numOfDislikes--;
            post.numOfLikes++;
            this.postListService.cancelDislikePost(postId).subscribe((post_1) => {
                this.postListService.likePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListLike.includes(postId)) {
            post.numOfLikes++;
            this.postListService.likePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfLikes--;
            this.postListService.cancelLikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
                console.log(this.postListLike);
            });
        }
    }
    onClickDislikePost(post) {
        var postId = post._id;
        if (this.postListLike.includes(postId)) {
            post.numOfLikes--;
            post.numOfDislikes++;
            this.postListService.cancelLikePost(postId).subscribe((post_1) => {
                this.postListService.dislikePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListDislike.includes(postId)) {
            post.numOfDislikes++;
            this.postListService.dislikePost(postId).subscribe((post_2) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfDislikes--;
            this.postListService.cancelDislikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onCopyPost(post, copyContent) {
        post.numOfShares++;
        const oInput = document.createElement('textarea');
        var postId = post._id;
        oInput.value = copyContent;
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand('Copy');
        oInput.style.display = 'none';
        this.snackBar.open('Review post copied!', '', {
            duration: 2000,
        });
        this.postListService.sharePost(postId).subscribe((post_1) => {
        });
    }
    ifLike(postId) {
        return this.postListLike.includes(postId);
    }
    ifDislike(postId) {
        return this.postListDislike.includes(postId);
    }
    resetHoverOn() {
        this.hoverOnShareBtn = [false, false, false, false, false];
        this.hoverOnShareBox = [false, false, false, false, false];
    }
    mouseLeaveShareBtn(key) {
        setTimeout(() => this.hoverOnShareBtn[key] = false, 200);
    }
    goReport(postId) {
        var navigationExtras = {
            queryParams: {
                postId: postId
            }
        };
        this.route.navigate(['/Report'], navigationExtras);
    }
}
ReviewListComponent.ɵfac = function ReviewListComponent_Factory(t) { return new (t || ReviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_6__["AdminAccountService"])); };
ReviewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewListComponent, selectors: [["app-review-list"]], decls: 10, vars: 4, consts: [[1, "subheader"], [1, "mat-body"], [1, "add-reviews-btn"], ["mat-icon-button", "", "matTooltip", "add reviews", 3, "click"], [1, "icon-btn"], ["class", "no-reviews-yet mat-h1", 4, "ngIf"], ["class", "review-container", 4, "ngFor", "ngForOf"], ["pageSize", "5", "showFirstLastButtons", "true", "hidePageSize", "true", 3, "length", "page"], [1, "no-reviews-yet", "mat-h1"], [1, "mat-h3"], [1, "no-reviews-icon"], [1, "review-container"], ["mat-card-avatar", "", 1, "header-image"], [1, "flex-container"], [1, "user-name"], [1, "mat-caption"], [1, "header-actions"], ["mat-icon-button", "", "matTooltip", "report", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Errors were reported in this post!", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click", 4, "ngIf"], [1, "review"], [1, "extra-info", "mat-caption"], [1, "flex-container", "ratings"], ["matTooltip", "10 for most satisfied"], [1, "icon"], [4, "ngIf"], ["matTooltip", "10 for most difficult"], ["matTooltip", "10 for heaviest workload"], ["matTooltip", "10 for most willing to recommend"], [1, "btns"], ["mat-icon-button", "", "matTooltip", "like", 3, "click"], [1, "icon-btn", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "dislike", 3, "click"], ["mat-icon-button", "", "matTooltip", "share", 3, "mouseover", "mouseleave"], ["class", "share-box", 3, "mouseover", "mouseleave", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "report", 3, "click"], ["mat-icon-button", "", "matTooltip", "Errors were reported in this post!"], [2, "color", "red"], ["mat-icon-button", "", "matTooltip", "delete", 3, "click"], [1, "share-box", 3, "mouseover", "mouseleave"], ["mat-icon-button", "", "matTooltip", "copy review review", 1, "copy-btn", 3, "click"], ["copyContent", ""]], template: function ReviewListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_Template_button_click_4_listener() { return ctx.addReviews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReviewListComponent_mat_card_7_Template, 6, 0, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReviewListComponent_mat_card_8_Template, 72, 48, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ReviewListComponent_Template_mat_paginator_page_9_listener($event) { return ctx.updateReviewListShown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" number of reviews: ", ctx.reviewList.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewListShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.reviewList.length);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: [".no-reviews-yet[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.no-reviews-icon[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.subheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 50%;\n}\n\n.add-reviews-btn[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.review[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding-top: 10px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.ratings[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 25%;\n    text-align: center;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.btns[_ngcontent-%COMP%] {\n    width: 30%;\n    text-align: right;\n}\n\n.btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 10px 10px 0;\n}\n\n.ratings[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-top: 10px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n\n.review-container[_ngcontent-%COMP%] {\n    margin: 10px auto;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n    color: #4050b5;\n}\n\n.share-box[_ngcontent-%COMP%] {\n    width: 700px;\n    position: absolute;\n    left: 40%;\n    z-index: 1;\n    text-align: left;\n}\n\n.copy-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 1rem;\n}\n\n.user-name[_ngcontent-%COMP%] {\n    width: 80%;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: right;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n    width: 160%;\n}\n\npre[_ngcontent-%COMP%] {\n\n    white-space: pre-wrap; \n    \n    white-space: -moz-pre-wrap; \n    \n    white-space: -pre-wrap; \n    \n    white-space: -o-pre-wrap; \n    \n    word-wrap: break-word; \n    \n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtc3ViY29tcG9uZW50cy9yZXZpZXctbGlzdC9yZXZpZXctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLHFCQUFxQixFQUFFLFFBQVE7O0lBRS9CLDBCQUEwQixFQUFFLG9CQUFvQjs7SUFFaEQsc0JBQXNCLEVBQUUsV0FBVzs7SUFFbkMsd0JBQXdCLEVBQUUsU0FBUzs7SUFFbkMscUJBQXFCLEVBQUUsdUJBQXVCOztJQUU5QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kdWxlLXN1YmNvbXBvbmVudHMvcmV2aWV3LWxpc3QvcmV2aWV3LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1yZXZpZXdzLXlldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tcmV2aWV3cy1pY29uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5zdWJoZWFkZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uYWRkLXJldmlld3MtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJldmlldyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yYXRpbmdzID4gZGl2IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0bnMge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idG5zID4gYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwO1xufVxuXG4ucmF0aW5ncyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuICBcbi5yZXZpZXctY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmJsdWUtY29sb3Ige1xuICAgIGNvbG9yOiAjNDA1MGI1O1xufVxuXG4uc2hhcmUtYm94IHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb3B5LWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxcmVtO1xufVxuXG4udXNlci1uYW1lIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgICB3aWR0aDogMTYwJTtcbn1cblxucHJlIHtcblxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLypjc3MtMyovXG4gICAgXG4gICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qTW96aWxsYSxzaW5jZTE5OTkqL1xuICAgIFxuICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7IC8qT3BlcmE0LTYqL1xuICAgIFxuICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgLypPcGVyYTcqL1xuICAgIFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLypJbnRlcm5ldEV4cGxvcmVyNS41KyovXG4gICAgXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-list',
                templateUrl: './review-list.component.html',
                styleUrls: ['./review-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_services_admin_account_service__WEBPACK_IMPORTED_MODULE_6__["AdminAccountService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/module/module.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/module/module.component.ts ***!
  \*******************************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module */ "./src/app/module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_my_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/my-modules.service */ "./src/app/services/my-modules.service.ts");
/* harmony import */ var _services_module_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/module-list.service */ "./src/app/services/module-list.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _services_average_ratings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/average-ratings.service */ "./src/app/services/average-ratings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















function ModuleComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addToMyModules(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteFromMyModules(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleComponent_div_39_Template_mat_option_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const module_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goModule(module_r7.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", module_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r7.moduleCode, " - ", module_r7.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", module_r7.faculty, " - ", module_r7.department, " - ", module_r7.moduleCredit, " MCs ");
} }
const _c0 = function (a1) { return { "navigation-btn": "true", "active-btn": a1 }; };
class ModuleComponent {
    constructor(route, activatedRoute, searchService, myModuleService, moduleListService, snackBar, postListService, averageRatingsService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.myModuleService = myModuleService;
        this.moduleListService = moduleListService;
        this.snackBar = snackBar;
        this.postListService = postListService;
        this.averageRatingsService = averageRatingsService;
        this.module = new src_app_module__WEBPACK_IMPORTED_MODULE_1__["Module"]('', '', '', '', '', '', 0);
        this.reviewListShown = [];
        this.reviewList = [];
        this.userName = 'Anonymous';
        this.activeBtn = 'Reviews';
        this.averageRatings = {
            averageGeneral: 0,
            averageDifficulty: 0,
            averageWorkload: 0,
            averageRecommend: 0,
        };
        this.moreModuleList = [];
        this.myModuleList = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data) => {
            this.searchService.getModule(data.moduleCode).subscribe((module) => {
                this.module = module;
                this.postListService.countPostList(module.moduleCode).subscribe((numOfReviews) => {
                    this.module.numOfReviews = numOfReviews;
                });
            });
            this.postListService.getPostListOfModule(data.moduleCode).subscribe((postList) => {
                this.reviewList = postList;
                this.averageRatings = this.averageRatingsService.getAverageRatingsByReviewList(this.reviewList);
                this.reviewListShown = this.reviewList.slice(0, 5);
            });
            this.searchService.getMoreModuleList(data.moduleCode).subscribe((moreModuleList) => {
                this.moreModuleList = moreModuleList;
            });
            this.updateMyModuleList();
        });
    }
    updateMyModuleList() {
        this.myModuleList = this.myModuleService.getMyModuleList();
    }
    addToMyModules() {
        this.myModuleService.addModule(this.module);
        this.updateMyModuleList();
        this.snackBar.open('Successfully added to my modules!', 'Close', {
            verticalPosition: 'top',
            duration: 2000
        });
    }
    deleteFromMyModules() {
        this.myModuleService.deleteModule(this.module.moduleCode);
        this.updateMyModuleList();
        this.snackBar.open('Successfully deleted from my modules!', 'Close', {
            verticalPosition: 'top',
            duration: 2000
        });
    }
    isMyModule(moduleCode) {
        return this.myModuleList.map((module) => module.moduleCode).includes(moduleCode);
    }
    addReviews() {
        var navigationExtras = {
            queryParams: {
                moduleCode: this.module.moduleCode
            }
        };
        this.route.navigate(['/PostReview'], navigationExtras);
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    updateReviewListShown(event) {
        var start = event.pageIndex * 5;
        this.reviewListShown = this.reviewList.slice(start, start + 5);
    }
    loadReviewList() {
        var navigationExtras = {
            queryParams: {
                moduleCode: this.module.moduleCode
            }
        };
        this.activeBtn = 'Reviews';
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    loadDescription() {
        var navigationExtras = {
            queryParams: {
                moduleCode: this.module.moduleCode
            }
        };
        this.activeBtn = 'Description';
        this.route.navigate(['/Module/Description'], navigationExtras);
    }
    loadQuestionList() {
        var navigationExtras = {
            queryParams: {
                moduleCode: this.module.moduleCode
            }
        };
        this.activeBtn = 'Questions';
        this.route.navigate(['/Module/QuestionList'], navigationExtras);
    }
    isReviewsActive() {
        return location.pathname.includes('ReviewList');
    }
    isQuestionsActive() {
        return location.pathname.includes('QuestionList');
    }
    isDescriptionActive() {
        return location.pathname.includes('Description');
    }
}
ModuleComponent.ɵfac = function ModuleComponent_Factory(t) { return new (t || ModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_my_modules_service__WEBPACK_IMPORTED_MODULE_4__["MyModulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_module_list_service__WEBPACK_IMPORTED_MODULE_5__["ModuleListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_7__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_average_ratings_service__WEBPACK_IMPORTED_MODULE_8__["AverageRatingsService"])); };
ModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleComponent, selectors: [["app-module"]], decls: 40, vars: 19, consts: [[1, "left-panel"], [1, "mat-display-1"], ["mat-icon-button", "", "matTooltip", "add to My Modules", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "delete from My Modules", "color", "primary", 3, "click", 4, "ngIf"], [1, "flex-container"], ["mat-button", "", 3, "ngClass", "click"], [1, "right-panel"], ["matTooltip", "10 for most satisfied", 1, "average-rating"], ["matTooltip", "10 for most difficult", 1, "average-rating"], ["matTooltip", "10 for heaviest workload", 1, "average-rating"], ["matTooltip", "10 for most willing to recommend", 1, "average-rating"], [1, "mat-hint"], [1, "more-module-list-container"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltip", "add to My Modules", 3, "click"], [1, "icon-btn"], ["mat-icon-button", "", "matTooltip", "delete from My Modules", "color", "primary", 3, "click"], [1, "more-module-option", 3, "matTooltip", "click"], [1, "module-title"], [1, "module-info"]], template: function ModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModuleComponent_button_4_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModuleComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleComponent_Template_button_click_8_listener() { return ctx.loadReviewList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleComponent_Template_button_click_10_listener() { return ctx.loadQuestionList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleComponent_Template_button_click_12_listener() { return ctx.loadDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Average Ratings: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " To see more: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ModuleComponent_div_39_Template, 6, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.module.moduleCode, " - ", ctx.module.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMyModule(ctx.module.moduleCode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMyModule(ctx.module.moduleCode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isReviewsActive()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isQuestionsActive()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isDescriptionActive()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" general: ", ctx.averageRatings.averageGeneral, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" difficulty: ", ctx.averageRatings.averageDifficulty, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" workload: ", ctx.averageRatings.averageWorkload, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" recommend: ", ctx.averageRatings.averageRecommend, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" number of reviews: ", ctx.module.numOfReviews, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moreModuleList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: ["main[_ngcontent-%COMP%] {\n    width: 80%;\n    display: flex;\n    margin: 2rem auto;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n.mat-display-1[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    text-align: center;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    width: 25%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.navigation-btn[_ngcontent-%COMP%] {\n    width: 33.3%;\n    border-radius: 0;\n    background-color: whitesmoke;\n}\n\n.navigation-btn[_ngcontent-%COMP%]:hover {\n    color: #4050b5;\n}\n\n.active-btn[_ngcontent-%COMP%], .active-btn[_ngcontent-%COMP%]:hover {\n    background-color: #4050b5;\n    color: white;\n}\n\n.average-rating[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 10px 5px;\n}\n\n.right-panel[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10px auto;\n}\n\n.more-module-option[_ngcontent-%COMP%] {\n    height: 45px;\n    padding: 0;\n}\n\n.more-module-option[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n    color: #4050b5;\n}\n\n.more-module-list-container[_ngcontent-%COMP%] {\n    padding-top: 10px;\n}\n\n.module-title[_ngcontent-%COMP%] {\n    height: 15px;\n    font-size: 14px;\n}\n\n.module-info[_ngcontent-%COMP%] {\n    font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUvbW9kdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZHVsZS9tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbn1cblxuLmxlZnQtcGFuZWwge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5tYXQtZGlzcGxheS0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmF2aWdhdGlvbi1idG4ge1xuICAgIHdpZHRoOiAzMy4zJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5uYXZpZ2F0aW9uLWJ0bjpob3ZlciB7XG4gICAgY29sb3I6ICM0MDUwYjU7XG59XG5cbi5hY3RpdmUtYnRuLCAuYWN0aXZlLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTBiNTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hdmVyYWdlLXJhdGluZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDEwcHggNXB4O1xufVxuXG4ucmlnaHQtcGFuZWwgPiBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5tb3JlLW1vZHVsZS1vcHRpb24ge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubW9yZS1tb2R1bGUtb3B0aW9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzQwNTBiNTtcbn1cblxuLm1vcmUtbW9kdWxlLWxpc3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1vZHVsZS10aXRsZSB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1vZHVsZS1pbmZvIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-module',
                templateUrl: './module.component.html',
                styleUrls: ['./module.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _services_my_modules_service__WEBPACK_IMPORTED_MODULE_4__["MyModulesService"] }, { type: _services_module_list_service__WEBPACK_IMPORTED_MODULE_5__["ModuleListService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_7__["PostListService"] }, { type: _services_average_ratings_service__WEBPACK_IMPORTED_MODULE_8__["AverageRatingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/my-modules/my-modules.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-modules/my-modules.component.ts ***!
  \***************************************************************/
/*! exports provided: MyModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesComponent", function() { return MyModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_averageRatings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/averageRatings */ "./src/app/averageRatings.ts");
/* harmony import */ var _services_my_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/my-modules.service */ "./src/app/services/my-modules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _services_average_ratings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/average-ratings.service */ "./src/app/services/average-ratings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function MyModulesComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Average Ratings: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyModulesComponent_mat_card_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const module_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goModule(module_r2.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyModulesComponent_mat_card_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const module_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteModule(module_r2.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r2 = ctx.$implicit;
    const key_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", module_r2.moduleCode, " - ", module_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", module_r2.faculty, " - ", module_r2.department, " - ", module_r2.moduleCredit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" general: ", ctx_r0.listOfAverageRatings[key_r3].averageGeneral, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" difficulty: ", ctx_r0.listOfAverageRatings[key_r3].averageDifficulty, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" workload: ", ctx_r0.listOfAverageRatings[key_r3].averageWorkload, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" recommend: ", ctx_r0.listOfAverageRatings[key_r3].averageRecommend, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" number of reviews: ", ctx_r0.listOfNumOfReviews[key_r3], " ");
} }
function MyModulesComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No modules added yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyModulesComponent_mat_card_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goModuleList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Go to add my modules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyModulesComponent {
    constructor(myModulesService, route, snackBar, postListService, averageRatingsService) {
        this.myModulesService = myModulesService;
        this.route = route;
        this.snackBar = snackBar;
        this.postListService = postListService;
        this.averageRatingsService = averageRatingsService;
        this.myModuleList = [];
        this.listOfAverageRatings = [];
        this.listOfNumOfReviews = [];
    }
    ngOnInit() {
        this.myModuleList = this.myModulesService.getMyModuleList();
        this.myModuleList.forEach((module) => {
            this.listOfNumOfReviews.push(0);
            this.listOfAverageRatings.push(src_app_averageRatings__WEBPACK_IMPORTED_MODULE_1__["AverageRatings"].emptyAverageRatings);
        });
        this.myModuleList.forEach((module, index) => {
            this.postListService.countPostList(module.moduleCode).subscribe((numOfReviews) => {
                this.listOfNumOfReviews[index] = numOfReviews;
            });
        });
        this.myModuleList.forEach((module, index) => {
            this.averageRatingsService.getAverageRatingsByModuleCode(module.moduleCode).subscribe((averageRatings) => {
                this.listOfAverageRatings[index] = averageRatings;
            });
        });
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    deleteModule(moduleCode) {
        this.myModulesService.deleteModule(moduleCode);
        this.myModuleList = this.myModulesService.getMyModuleList();
        this.snackBar.open('Successfully deleted from my modules!', 'Close', {
            verticalPosition: 'top',
            duration: 1000
        });
    }
    goModuleList() {
        this.route.navigate(['ModuleList']);
    }
}
MyModulesComponent.ɵfac = function MyModulesComponent_Factory(t) { return new (t || MyModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_my_modules_service__WEBPACK_IMPORTED_MODULE_2__["MyModulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_5__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_average_ratings_service__WEBPACK_IMPORTED_MODULE_6__["AverageRatingsService"])); };
MyModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyModulesComponent, selectors: [["app-my-modules"]], decls: 3, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["class", "no-modules-added-yet", 4, "ngIf"], [1, "average-ratings-container"], ["matTooltip", "10 for most satisfied", 1, "average-rating"], ["matTooltip", "10 for most difficult", 1, "average-rating"], ["matTooltip", "10 for heaviest workload", 1, "average-rating"], ["matTooltip", "10 for most willing to recommend", 1, "average-rating"], [1, "mat-caption"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "view", 1, "icon-btn"], ["matTooltip", "delete", 1, "icon-btn"], [1, "no-modules-added-yet"], [1, "mat-h1"], ["mat-button", "", "color", "primary", 3, "click"]], template: function MyModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyModulesComponent_mat_card_1_Template, 26, 10, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyModulesComponent_mat_card_2_Template, 9, 0, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myModuleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myModuleList.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["main[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n    width: 25%;\n    height: 250px;\n    margin: 30px;\n}\n\nmain[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.no-modules-added-yet[_ngcontent-%COMP%]    > mat-card-content[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    text-align: center;\n}\n\n.no-modules-added-yet[_ngcontent-%COMP%]    > mat-card-actions[_ngcontent-%COMP%] {\n    margin-top: 90px;\n    text-align: right;\n}\n\nmat-card-content[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.average-ratings-container[_ngcontent-%COMP%] {\n    width: 80%;\n    display: flex;\n    margin: 10px auto;\n}\n\n.average-rating[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1tb2R1bGVzL215LW1vZHVsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktbW9kdWxlcy9teS1tb2R1bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluID4gbWF0LWNhcmQge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW46IDMwcHg7XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uby1tb2R1bGVzLWFkZGVkLXlldCA+IG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tbW9kdWxlcy1hZGRlZC15ZXQgPiBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5tYXQtY2FyZC1jb250ZW50ID4gbWF0LWljb24ge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmF2ZXJhZ2UtcmF0aW5ncy1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmF2ZXJhZ2UtcmF0aW5nIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-modules',
                templateUrl: './my-modules.component.html',
                styleUrls: ['./my-modules.component.css']
            }]
    }], function () { return [{ type: _services_my_modules_service__WEBPACK_IMPORTED_MODULE_2__["MyModulesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_5__["PostListService"] }, { type: _services_average_ratings_service__WEBPACK_IMPORTED_MODULE_6__["AverageRatingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post-review-subcomponents/extra-info/extra-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/post-review-subcomponents/extra-info/extra-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExtraInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraInfoComponent", function() { return ExtraInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_extraInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/extraInfo */ "./src/app/extraInfo.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");







class ExtraInfoComponent {
    constructor() {
        this.extraInfo = new src_app_extraInfo__WEBPACK_IMPORTED_MODULE_1__["ExtraInfo"]('', '');
    }
    ngOnInit() {
    }
}
ExtraInfoComponent.ɵfac = function ExtraInfoComponent_Factory(t) { return new (t || ExtraInfoComponent)(); };
ExtraInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtraInfoComponent, selectors: [["app-extra-info"]], decls: 59, vars: 2, consts: [[1, "mat-h1"], [1, "mat-hint"], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], ["value", "A+"], ["value", "A"], ["value", "A-"], ["value", "B+"], ["value", "B"], ["value", "B-"], ["value", "C+"], ["value", "C"], ["value", "D+"], ["value", "D"], ["value", "F"], ["value", "Dropped"]], template: function ExtraInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Extra Info:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(All your information will remain anonymous)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Grade expected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExtraInfoComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.extraInfo.gradeExpected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "C+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "D+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Grade obtained");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExtraInfoComponent_Template_mat_select_ngModelChange_34_listener($event) { return ctx.extraInfo.gradeObtained = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "C+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "D+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Dropped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.extraInfo.gradeExpected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.extraInfo.gradeObtained);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: [".mat-h1[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    margin: 10px;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXJldmlldy1zdWJjb21wb25lbnRzL2V4dHJhLWluZm8vZXh0cmEtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1yZXZpZXctc3ViY29tcG9uZW50cy9leHRyYS1pbmZvL2V4dHJhLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaDEge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogNTAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtraInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-extra-info',
                templateUrl: './extra-info.component.html',
                styleUrls: ['./extra-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/post-review-subcomponents/module-info/module-info.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/post-review-subcomponents/module-info/module-info.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ModuleInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleInfoComponent", function() { return ModuleInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _refinementList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../refinementList */ "./src/app/refinementList.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");















function ModuleInfoComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleInfoComponent_mat_option_9_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const module_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(module_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r2.moduleCode, " - ", module_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", module_r2.faculty, " - ", module_r2.department, " - ", module_r2.moduleCredit, "MCs ");
} }
class ModuleInfoComponent {
    constructor(searchService, route, http) {
        this.searchService = searchService;
        this.route = route;
        this.http = http;
        this.prof = '';
        this.acadYear = '2019-2020';
        this.semester = 'Semester 1';
        this.moduleListShown = [];
        this.searchInput = '';
    }
    ngOnInit() {
        this.searchService.search(this.searchInput, _refinementList__WEBPACK_IMPORTED_MODULE_2__["RefinementList"].emptyRefinementList).subscribe((searchResult) => {
            this.moduleListShown = searchResult.slice(0, 10);
        });
        this.searchInput = this.moduleCode;
    }
    select(module) {
        this.selectedModule = module;
        this.searchInput = module.moduleCode;
    }
    goModuleList() {
        var navigationExtras = {
            queryParams: {
                searchInput: this.searchInput
            }
        };
        this.route.navigate(['./ModuleList'], navigationExtras);
    }
    search() {
        this.searchService.search(this.searchInput, _refinementList__WEBPACK_IMPORTED_MODULE_2__["RefinementList"].emptyRefinementList).subscribe((searchResult) => {
            this.moduleListShown = searchResult.slice(0, 20);
        });
        this.selectedModule = undefined;
    }
    getModule() {
        if (this.selectedModule) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.selectedModule);
        }
        else {
            return this.searchService.getModule(this.searchInput);
        }
    }
}
ModuleInfoComponent.ɵfac = function ModuleInfoComponent_Factory(t) { return new (t || ModuleInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ModuleInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleInfoComponent, selectors: [["app-module-info"]], inputs: { moduleCode: "moduleCode" }, decls: 38, vars: 6, consts: [[1, "mat-h1"], ["appearance", "outline", 1, "module-code"], ["matInput", "", 3, "matAutocomplete", "ngModel", "ngModelChange", "input"], ["auto", "matAutocomplete"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 1, "more-btn", 3, "click"], ["appearance", "fill", 1, "prof"], ["type", "text", "name", "prof", "placeholder", "Tan Eng Chye", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "acad-year"], [3, "ngModel", "ngModelChange"], ["value", "2019-2020"], ["value", "2018-2019"], ["value", "2017-2018"], ["appearance", "fill", 1, "semester"], ["value", "Semester 1"], ["value", "Semester 2"], ["value", "Special Term 1"], ["value", "Special Term 2"], [3, "click"], [1, "module-info"], [1, "mat-h4"], [1, "mat-caption"]], template: function ModuleInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Module Info:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Module Code or Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModuleInfoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchInput = $event; })("input", function ModuleInfoComponent_Template_input_input_6_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModuleInfoComponent_mat_option_9_Template, 6, 5, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleInfoComponent_Template_button_click_10_listener() { return ctx.goModuleList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModuleInfoComponent_Template_input_ngModelChange_15_listener($event) { return ctx.prof = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "AcadYear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModuleInfoComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.acadYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "19 - 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "18 - 19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "17 - 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Semester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModuleInfoComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.semester = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Semester 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Semester 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Special Term 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Special Term 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0)("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moduleListShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prof);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acadYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.semester);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: [".module-code[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.prof[_ngcontent-%COMP%] {\n    width: 40%;\n    margin-right: 60%;\n}\n\n.mat-h1[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.module-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.module-info[_ngcontent-%COMP%]    > .mat-h4[_ngcontent-%COMP%] {\n    width: 60%;\n}\n\n.module-info[_ngcontent-%COMP%]    > .mat-caption[_ngcontent-%COMP%] {\n    width: 40%;\n    text-align: right;\n}\n\nmat-option[_ngcontent-%COMP%]:hover {\n    color: #4050b5;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.semester[_ngcontent-%COMP%] {\n    margin: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXJldmlldy1zdWJjb21wb25lbnRzL21vZHVsZS1pbmZvL21vZHVsZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1yZXZpZXctc3ViY29tcG9uZW50cy9tb2R1bGUtaW5mby9tb2R1bGUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZS1jb2RlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2Yge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XG59XG5cbi5tYXQtaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5tb2R1bGUtaW5mbyA+IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubW9kdWxlLWluZm8gPiAubWF0LWg0IHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4ubW9kdWxlLWluZm8gPiAubWF0LWNhcHRpb24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbm1hdC1vcHRpb246aG92ZXIge1xuICAgIGNvbG9yOiAjNDA1MGI1O1xufVxuXG4ubW9yZS1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VtZXN0ZXIge1xuICAgIG1hcmdpbjogMCAxcmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-module-info',
                templateUrl: './module-info.component.html',
                styleUrls: ['./module-info.component.css']
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, { moduleCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/post-review-subcomponents/review-and-ratings/review-and-ratings.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/post-review-subcomponents/review-and-ratings/review-and-ratings.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ReviewAndRatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAndRatingsComponent", function() { return ReviewAndRatingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_reviewAndRatings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reviewAndRatings */ "./src/app/reviewAndRatings.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function ReviewAndRatingsComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewAndRatingsComponent_mat_icon_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReviewAndRatingsComponent {
    constructor() {
        this.reviewAndRatings = new src_app_reviewAndRatings__WEBPACK_IMPORTED_MODULE_1__["ReviewAndRatings"]('\nWorkload and Difficulty:\nProf and Teaching method:\nOther complaints and commendations:\n', 5, 5, 5, 5);
    }
    ngOnInit() {
    }
}
ReviewAndRatingsComponent.ɵfac = function ReviewAndRatingsComponent_Factory(t) { return new (t || ReviewAndRatingsComponent)(); };
ReviewAndRatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewAndRatingsComponent, selectors: [["app-review-and-ratings"]], decls: 51, vars: 29, consts: [[1, "mat-h1"], [1, "slider-box"], [1, "mat-body-1"], [1, "mat-caption"], ["max", "10", "min", "1", "thumbLabel", "true", "step", "1", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["appearance", "fill", 1, "review"], ["name", "review", "rows", "20", "placeholder", "Any other things you want to share about this module", "matInput", "", 3, "ngModel", "ngModelChange"]], template: function ReviewAndRatingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Review and Ratings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "(10 for most satisfied)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewAndRatingsComponent_Template_mat_slider_ngModelChange_8_listener($event) { return ctx.reviewAndRatings.general = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReviewAndRatingsComponent_mat_icon_9_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReviewAndRatingsComponent_mat_icon_10_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReviewAndRatingsComponent_mat_icon_11_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReviewAndRatingsComponent_mat_icon_12_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReviewAndRatingsComponent_mat_icon_13_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(10 for most difficult)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewAndRatingsComponent_Template_mat_slider_ngModelChange_19_listener($event) { return ctx.reviewAndRatings.difficulty = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReviewAndRatingsComponent_mat_icon_20_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReviewAndRatingsComponent_mat_icon_21_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReviewAndRatingsComponent_mat_icon_22_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReviewAndRatingsComponent_mat_icon_23_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReviewAndRatingsComponent_mat_icon_24_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "(10 for heaviest workload)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewAndRatingsComponent_Template_mat_slider_ngModelChange_30_listener($event) { return ctx.reviewAndRatings.workload = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReviewAndRatingsComponent_mat_icon_31_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReviewAndRatingsComponent_mat_icon_32_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ReviewAndRatingsComponent_mat_icon_33_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ReviewAndRatingsComponent_mat_icon_34_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReviewAndRatingsComponent_mat_icon_35_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "(10 for most willing to recommend)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewAndRatingsComponent_Template_mat_slider_ngModelChange_41_listener($event) { return ctx.reviewAndRatings.recommend = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ReviewAndRatingsComponent_mat_icon_42_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ReviewAndRatingsComponent_mat_icon_43_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ReviewAndRatingsComponent_mat_icon_44_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReviewAndRatingsComponent_mat_icon_45_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ReviewAndRatingsComponent_mat_icon_46_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewAndRatingsComponent_Template_textarea_ngModelChange_50_listener($event) { return ctx.reviewAndRatings.review = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("general: ", ctx.reviewAndRatings.general, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reviewAndRatings.general);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.general < 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.general == 3 || ctx.reviewAndRatings.general == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.general == 5 || ctx.reviewAndRatings.general == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.general == 7 || ctx.reviewAndRatings.general == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.general > 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("difficulty: ", ctx.reviewAndRatings.difficulty, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reviewAndRatings.difficulty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.difficulty > 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.difficulty == 7 || ctx.reviewAndRatings.difficulty == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.difficulty == 5 || ctx.reviewAndRatings.difficulty == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.difficulty == 3 || ctx.reviewAndRatings.difficulty == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.difficulty < 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("workload: ", ctx.reviewAndRatings.workload, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reviewAndRatings.workload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.workload > 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.workload == 7 || ctx.reviewAndRatings.workload == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.workload == 5 || ctx.reviewAndRatings.workload == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.workload == 3 || ctx.reviewAndRatings.workload == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.workload < 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("recommend: ", ctx.reviewAndRatings.recommend, " / 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reviewAndRatings.recommend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.recommend < 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.recommend == 3 || ctx.reviewAndRatings.recommend == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.recommend == 5 || ctx.reviewAndRatings.recommend == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.recommend == 7 || ctx.reviewAndRatings.recommend == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewAndRatings.recommend > 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reviewAndRatings.review);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".mat-h1[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n    width: 60%;\n}\n\n.review[_ngcontent-%COMP%] {\n    width: 80%;\n}\n\n.slider-box[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXJldmlldy1zdWJjb21wb25lbnRzL3Jldmlldy1hbmQtcmF0aW5ncy9yZXZpZXctYW5kLXJhdGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QtcmV2aWV3LXN1YmNvbXBvbmVudHMvcmV2aWV3LWFuZC1yYXRpbmdzL3Jldmlldy1hbmQtcmF0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oMSB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4ucmV2aWV3IHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uc2xpZGVyLWJveCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewAndRatingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-and-ratings',
                templateUrl: './review-and-ratings.component.html',
                styleUrls: ['./review-and-ratings.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/post-review-subcomponents/select-header-image/select-header-image.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/post-review-subcomponents/select-header-image/select-header-image.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SelectHeaderImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectHeaderImageComponent", function() { return SelectHeaderImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "selected-header-image": a0 }; };
function SelectHeaderImageComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectHeaderImageComponent_li_4_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pictureUrl_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectImage(pictureUrl_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureUrl_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pictureUrl_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.selectedHeaderImage == pictureUrl_r1));
} }
class SelectHeaderImageComponent {
    constructor() {
        this.pictureUrlList = [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595419668375&di=ac012aaac7cf0dbe4f5ab7f1bbb46ec1&imgtype=0&src=http%3A%2F%2Fwww.petmrs.com%2Fuploads%2Fallimg%2F140804%2F3-140P4164156.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3069956775,2485973497&fm=15&gp=0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595419247440&di=2433556b58d8ec2827761fa3b1e531d6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181206%2F8a216edd6e7f4be199c154d3fcb8041c.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594804315629&di=c6a60eeb5e72af674d14ea669b81f074&imgtype=0&src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F32671%2FIx4d5bWEZxQ5euqcljDfwKaE3F7GUbbEgWlYwrRJ.jpeg'
        ];
        this.selectedHeaderImage = this.pictureUrlList[0];
    }
    ngOnInit() {
    }
    selectImage(url) {
        this.selectedHeaderImage = url;
    }
}
SelectHeaderImageComponent.ɵfac = function SelectHeaderImageComponent_Factory(t) { return new (t || SelectHeaderImageComponent)(); };
SelectHeaderImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectHeaderImageComponent, selectors: [["app-select-header-image"]], decls: 5, vars: 1, consts: [[1, "mat-h1"], [4, "ngFor", "ngForOf"], ["alt", "header image", 3, "src", "ngClass", "click"]], template: function SelectHeaderImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Header Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectHeaderImageComponent_li_4_Template, 2, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pictureUrlList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".mat-h1[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    display: flex;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin: 10px;\n    width: 20%;\n    text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 80%;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n    border: 5px solid #4050b5;\n}\n\n.selected-header-image[_ngcontent-%COMP%] {\n    border: 5px solid #4050b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXJldmlldy1zdWJjb21wb25lbnRzL3NlbGVjdC1oZWFkZXItaW1hZ2Uvc2VsZWN0LWhlYWRlci1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1yZXZpZXctc3ViY29tcG9uZW50cy9zZWxlY3QtaGVhZGVyLWltYWdlL3NlbGVjdC1oZWFkZXItaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaDEge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxudWwgPiBsaSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbmltZzpob3ZlciB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzQwNTBiNTtcbn1cblxuLnNlbGVjdGVkLWhlYWRlci1pbWFnZSB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzQwNTBiNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectHeaderImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-header-image',
                templateUrl: './select-header-image.component.html',
                styleUrls: ['./select-header-image.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/post-review/post-review.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-review/post-review.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReviewComponent", function() { return PostReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_reviewPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reviewPost */ "./src/app/reviewPost.ts");
/* harmony import */ var _moduleInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../moduleInfo */ "./src/app/moduleInfo.ts");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _post_review_subcomponents_module_info_module_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-review-subcomponents/module-info/module-info.component */ "./src/app/components/post-review-subcomponents/module-info/module-info.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _post_review_subcomponents_review_and_ratings_review_and_ratings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-review-subcomponents/review-and-ratings/review-and-ratings.component */ "./src/app/components/post-review-subcomponents/review-and-ratings/review-and-ratings.component.ts");
/* harmony import */ var _post_review_subcomponents_extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-review-subcomponents/extra-info/extra-info.component */ "./src/app/components/post-review-subcomponents/extra-info/extra-info.component.ts");
/* harmony import */ var _post_review_subcomponents_select_header_image_select_header_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-review-subcomponents/select-header-image/select-header-image.component */ "./src/app/components/post-review-subcomponents/select-header-image/select-header-image.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data-collected/data-collected.component */ "./src/app/components/data-collected/data-collected.component.ts");
















const _c0 = ["ModuleInfo"];
const _c1 = ["ExtraInfo"];
const _c2 = ["ReviewAndRatings"];
const _c3 = ["HeaderImage"];
class PostReviewComponent {
    constructor(postListService, route, activatedRoute, searchService, snackBar) {
        this.postListService = postListService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.snackBar = snackBar;
        this.moduleCode = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(data => {
            if (data.moduleCode) {
                this.moduleCode = data.moduleCode;
            }
        });
    }
    onSubmit() {
        this.ModuleInfo.getModule().subscribe((module) => {
            if (module) {
                var moduleInfo = new _moduleInfo__WEBPACK_IMPORTED_MODULE_2__["ModuleInfo"](module.moduleCode, module.title, this.ModuleInfo.prof, this.ModuleInfo.acadYear, this.ModuleInfo.semester);
                this.reviewPost = new src_app_reviewPost__WEBPACK_IMPORTED_MODULE_1__["ReviewPost"](moduleInfo, this.ReviewAndRatings.reviewAndRatings, this.ExtraInfo.extraInfo, this.HeaderImage.selectedHeaderImage, new Date().toLocaleDateString(), new Date().toTimeString().slice(0, 8));
                this.postListService.getPostList().subscribe((postList) => {
                    this.postListService.addPost(this.reviewPost).subscribe((post) => {
                        var navigationExtras = {
                            queryParams: {
                                pageIndex: 0
                            }
                        };
                        this.route.navigate(['/LatestPosts'], navigationExtras);
                    });
                });
            }
            else {
                this.snackBar.open('Please choose a valid module!', 'Close', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            }
        });
    }
}
PostReviewComponent.ɵfac = function PostReviewComponent_Factory(t) { return new (t || PostReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
PostReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostReviewComponent, selectors: [["app-post-review"]], viewQuery: function PostReviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ModuleInfo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ExtraInfo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ReviewAndRatings = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.HeaderImage = _t.first);
    } }, decls: 17, vars: 1, consts: [[1, "left-panel"], [3, "moduleCode"], ["ModuleInfo", ""], ["ReviewAndRatings", ""], ["ExtraInfo", ""], ["HeaderImage", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], [1, "right-panel"]], template: function PostReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-module-info", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-review-and-ratings", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-extra-info", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-select-header-image", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostReviewComponent_Template_button_click_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-data-collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleCode", ctx.moduleCode);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _post_review_subcomponents_module_info_module_info_component__WEBPACK_IMPORTED_MODULE_8__["ModuleInfoComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _post_review_subcomponents_review_and_ratings_review_and_ratings_component__WEBPACK_IMPORTED_MODULE_10__["ReviewAndRatingsComponent"], _post_review_subcomponents_extra_info_extra_info_component__WEBPACK_IMPORTED_MODULE_11__["ExtraInfoComponent"], _post_review_subcomponents_select_header_image_select_header_image_component__WEBPACK_IMPORTED_MODULE_12__["SelectHeaderImageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _data_collected_data_collected_component__WEBPACK_IMPORTED_MODULE_14__["DataCollectedComponent"]], styles: ["main[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 2rem auto 4rem;\n    display: flex;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-right: 2rem;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n    width: 20%;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXJldmlldy9wb3N0LXJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1yZXZpZXcvcG9zdC1yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAycmVtIGF1dG8gNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5yaWdodC1wYW5lbCB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-review',
                templateUrl: './post-review.component.html',
                styleUrls: ['./post-review.component.css']
            }]
    }], function () { return [{ type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { ModuleInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ModuleInfo']
        }], ExtraInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ExtraInfo']
        }], ReviewAndRatings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ReviewAndRatings']
        }], HeaderImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['HeaderImage']
        }] }); })();


/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report */ "./src/app/report.ts");
/* harmony import */ var src_app_services_post_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post-list.service */ "./src/app/services/post-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_services_report_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/report-list.service */ "./src/app/services/report-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















function ReportComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, the review is not found! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_dissatisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_icon_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment_very_satisfied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_card_4_mat_card_71_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ReportComponent_mat_card_4_mat_card_71_Template_mat_card_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.hoverOnShareBox = true; })("mouseleave", function ReportComponent_mat_card_4_mat_card_71_Template_mat_card_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.hoverOnShareBox = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copy & Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_card_4_mat_card_71_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.onCopyPost(ctx_r29.post, _r25.innerHTML); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " content_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 15, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["    ", ctx_r24.post.moduleInfo.moduleCode, " - ", ctx_r24.post.moduleInfo.title, " taken by ", ctx_r24.userName, "\n    under ", ctx_r24.post.moduleInfo.prof, ", ", ctx_r24.post.moduleInfo.acadYear, " / ", ctx_r24.post.moduleInfo.semester, ":\n    ", ctx_r24.post.reviewAndRatings.review, "\n    general: ", ctx_r24.post.reviewAndRatings.general, " / 10 (10 for most satisfied)         difficulty: ", ctx_r24.post.reviewAndRatings.difficulty, " / 10 (10 for most difficult)\n    workload: ", ctx_r24.post.reviewAndRatings.workload, " / 10 (10 for heaviest workload)    recommend: ", ctx_r24.post.reviewAndRatings.recommend, " / 10 (10 for most willing to recommend)\n                    "]);
} }
const _c0 = function (a0) { return { "blue-color": a0 }; };
function ReportComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_card_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.goModule(ctx_r30.post.moduleInfo.moduleCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReportComponent_mat_card_4_mat_icon_29_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReportComponent_mat_card_4_mat_icon_30_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReportComponent_mat_card_4_mat_icon_31_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReportComponent_mat_card_4_mat_icon_32_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ReportComponent_mat_card_4_mat_icon_33_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ReportComponent_mat_card_4_mat_icon_37_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReportComponent_mat_card_4_mat_icon_38_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReportComponent_mat_card_4_mat_icon_39_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReportComponent_mat_card_4_mat_icon_40_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReportComponent_mat_card_4_mat_icon_41_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReportComponent_mat_card_4_mat_icon_45_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ReportComponent_mat_card_4_mat_icon_46_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ReportComponent_mat_card_4_mat_icon_47_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ReportComponent_mat_card_4_mat_icon_48_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ReportComponent_mat_card_4_mat_icon_49_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ReportComponent_mat_card_4_mat_icon_53_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ReportComponent_mat_card_4_mat_icon_54_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ReportComponent_mat_card_4_mat_icon_55_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ReportComponent_mat_card_4_mat_icon_56_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ReportComponent_mat_card_4_mat_icon_57_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_card_4_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onClickLikePost(ctx_r32.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_card_4_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onClickDislikePost(ctx_r33.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ReportComponent_mat_card_4_Template_button_mouseover_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.hoverOnShareBtn = true; })("mouseleave", function ReportComponent_mat_card_4_Template_button_mouseleave_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.mouseLeaveShareBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ReportComponent_mat_card_4_mat_card_71_Template, 10, 11, "mat-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.post.headerImage + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.post.moduleInfo.moduleCode, " - ", ctx_r1.post.moduleInfo.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Under Prof ", ctx_r1.post.moduleInfo.prof, ", ", ctx_r1.post.moduleInfo.acadYear, " / ", ctx_r1.post.moduleInfo.semester, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r1.post.date, " - ", ctx_r1.post.time, " by ", ctx_r1.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("                    ", ctx_r1.post.reviewAndRatings.review, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Expected Grade: ", ctx_r1.post.extraInfo.gradeExpected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade Obtained: ", ctx_r1.post.extraInfo.gradeObtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" general: ", ctx_r1.post.reviewAndRatings.general, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.general < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.general > 2 && ctx_r1.post.reviewAndRatings.general < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.general > 4 && ctx_r1.post.reviewAndRatings.general < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.general > 6 && ctx_r1.post.reviewAndRatings.general < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.general > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" difficulty: ", ctx_r1.post.reviewAndRatings.difficulty, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.difficulty > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.difficulty > 6 && ctx_r1.post.reviewAndRatings.difficulty < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.difficulty > 4 && ctx_r1.post.reviewAndRatings.difficulty < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.difficulty > 2 && ctx_r1.post.reviewAndRatings.difficulty < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.difficulty < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" workload: ", ctx_r1.post.reviewAndRatings.workload, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.workload > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.workload > 6 && ctx_r1.post.reviewAndRatings.workload < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.workload > 4 && ctx_r1.post.reviewAndRatings.workload < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.workload > 2 && ctx_r1.post.reviewAndRatings.workload < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.workload < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" recommend: ", ctx_r1.post.reviewAndRatings.recommend, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.recommend < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.recommend > 2 && ctx_r1.post.reviewAndRatings.recommend < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.recommend > 4 && ctx_r1.post.reviewAndRatings.recommend < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.recommend > 6 && ctx_r1.post.reviewAndRatings.recommend < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post.reviewAndRatings.recommend > 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx_r1.ifLike(ctx_r1.post._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.post.numOfLikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx_r1.ifDislike(ctx_r1.post._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.post.numOfDislikes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.post.numOfShares, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hoverOnShareBtn || ctx_r1.hoverOnShareBox);
} }
function ReportComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_mat_form_field_5_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.content);
} }
function ReportComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onSubmitReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReportComponent {
    constructor(postListService, activatedRoute, route, snackBar, reportListService) {
        this.postListService = postListService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.snackBar = snackBar;
        this.reportListService = reportListService;
        this.postId = '';
        this.isNotFound = false;
        this.hoverOnShareBtn = false;
        this.hoverOnShareBox = false;
        this.userName = 'Anonymous';
        this.postListLike = [];
        this.postListDislike = [];
        this.content = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((data) => {
            this.postId = data.postId;
            this.postListService.getPostById(this.postId).subscribe((post) => {
                this.post = post;
            });
            this.updatePostListLikeAndDislike();
            if (!this.post) {
                this.isNotFound = true;
            }
        });
    }
    onSubmitReport() {
        var newReport = new src_app_report__WEBPACK_IMPORTED_MODULE_1__["Report"](this.content, new Date().toLocaleDateString(), new Date().toTimeString().slice(0, 8), this.postId);
        this.postListService.addReport(newReport);
        this.reportListService.submitReport(newReport).subscribe((report) => {
            this.route.navigate(['/LatestPosts']);
            this.snackBar.open('Thank you for your report! We\'ll deal with it as soon as possible.', '', {
                duration: 2000
            });
        });
    }
    goModule(moduleCode) {
        var navigationExtras = {
            queryParams: {
                moduleCode: moduleCode
            }
        };
        this.route.navigate(['/Module/ReviewList'], navigationExtras);
    }
    goReport(postId) {
        var navigationExtras = {
            queryParams: {
                postId: postId
            }
        };
        this.route.navigate(['/Report'], navigationExtras);
    }
    updatePostListLikeAndDislike() {
        this.postListLike = this.postListService.getPostListLike();
        this.postListDislike = this.postListService.getPostListDislike();
    }
    onClickLikePost(post) {
        var postId = post._id;
        if (this.postListDislike.includes(postId)) {
            post.numOfDislikes--;
            post.numOfLikes++;
            this.postListService.cancelDislikePost(postId).subscribe((post_1) => {
                this.postListService.likePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListLike.includes(postId)) {
            post.numOfLikes++;
            this.postListService.likePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfLikes--;
            this.postListService.cancelLikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onClickDislikePost(post) {
        var postId = post._id;
        if (this.postListLike.includes(postId)) {
            post.numOfLikes--;
            post.numOfDislikes++;
            this.postListService.cancelLikePost(postId).subscribe((post_1) => {
                this.postListService.dislikePost(postId).subscribe((post_2) => {
                    this.updatePostListLikeAndDislike();
                });
            });
        }
        else if (!this.postListDislike.includes(postId)) {
            post.numOfDislikes++;
            this.postListService.dislikePost(postId).subscribe((post_2) => {
                this.updatePostListLikeAndDislike();
            });
        }
        else {
            post.numOfDislikes--;
            this.postListService.cancelDislikePost(postId).subscribe((post) => {
                this.updatePostListLikeAndDislike();
            });
        }
    }
    onCopyPost(post, copyContent) {
        post.numOfShares++;
        const oInput = document.createElement('textarea');
        var postId = post._id;
        oInput.value = copyContent + '\n@ModuleReviewsSharing';
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand('Copy');
        oInput.style.display = 'none';
        this.snackBar.open('Review post copied!', '', {
            duration: 2000,
        });
        this.postListService.sharePost(postId).subscribe((post_1) => {
        });
    }
    ifLike(postId) {
        return this.postListLike.includes(postId);
    }
    ifDislike(postId) {
        return this.postListDislike.includes(postId);
    }
    mouseLeaveShareBtn() {
        setTimeout(() => this.hoverOnShareBtn = false, 200);
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_list_service__WEBPACK_IMPORTED_MODULE_2__["PostListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_report_list_service__WEBPACK_IMPORTED_MODULE_5__["ReportListService"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 7, vars: 4, consts: [[1, "main-wrapper"], [1, "mat-display-1"], ["class", "not-found mat-h1", 4, "ngIf"], [4, "ngIf"], ["class", "report", "appearance", "fill", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "submit-btn", 3, "click", 4, "ngIf"], [1, "not-found", "mat-h1"], [1, "flex-container"], ["mat-card-avatar", "", 1, "header-image"], [1, "header"], [1, "mat-caption"], [1, "view-btn"], ["mat-icon-button", "", "matTooltip", "view", 3, "click"], [1, "icon-btn"], [1, "review"], [1, "mat-body"], [1, "extra-info", "mat-caption"], [1, "flex-container", "ratings"], ["matTooltip", "10 for most satisfied"], [1, "icon"], ["matTooltip", "10 for most difficult"], ["matTooltip", "10 for heaviest workload"], ["matTooltip", "10 for most willing to recommend"], [1, "btns"], ["mat-icon-button", "", "matTooltip", "like", 3, "click"], [1, "icon-btn", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "dislike", 3, "click"], ["mat-icon-button", "", "matTooltip", "share", 3, "mouseover", "mouseleave"], ["class", "share-box", 3, "mouseover", "mouseleave", 4, "ngIf"], [1, "share-box", 3, "mouseover", "mouseleave"], ["mat-icon-button", "", "matTooltip", "copy review post", 1, "copy-btn", 3, "click"], ["copyContent", ""], ["appearance", "fill", 1, "report"], ["name", "report", "rows", "10", "matInput", "", "placeholder", "E.g.The post is irrelevant. / There are certain dirty words. / There are some errors. ", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportComponent_mat_card_3_Template, 4, 0, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportComponent_mat_card_4_Template, 72, 47, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportComponent_mat_form_field_5_Template, 2, 1, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNotFound);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n    width: 60%;\n}\n\n.mat-display-1[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n.review[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.not-found[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 2rem auto;\n}\n\n.not-found[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n    margin: 0 10px;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.ratings[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n.ratings[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 25%;\n    text-align: center;\n}\n\n.btns[_ngcontent-%COMP%] {\n    width: 30%;\n    text-align: right;\n}\n\n.btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 0 10px;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n    color: #4050b5;\n}\n\n.share-box[_ngcontent-%COMP%] {\n    width: 700px;\n    position: absolute;\n    left: 40%;\n    z-index: 1;\n    text-align: left;\n}\n\n.copy-btn[_ngcontent-%COMP%] {\n    float: right;\n}\n\npre[_ngcontent-%COMP%] {\n\n    white-space: pre-wrap; \n    \n    white-space: -moz-pre-wrap; \n    \n    white-space: -pre-wrap; \n    \n    white-space: -o-pre-wrap; \n    \n    word-wrap: break-word; \n    \n    }\n\n.header-image[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n\n.report[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUJBQXFCLEVBQUUsUUFBUTs7SUFFL0IsMEJBQTBCLEVBQUUsb0JBQW9COztJQUVoRCxzQkFBc0IsRUFBRSxXQUFXOztJQUVuQyx3QkFBd0IsRUFBRSxTQUFTOztJQUVuQyxxQkFBcUIsRUFBRSx1QkFBdUI7O0lBRTlDOztBQUVKO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB3aWR0aDogNjAlO1xufVxuXG4ubWF0LWRpc3BsYXktMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnJldmlldyB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubm90LWZvdW5kIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG59XG5cbi5ub3QtZm91bmQgPiBtYXQtaWNvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi52aWV3LWJ0biB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yYXRpbmdzIHtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4ucmF0aW5ncyA+IGRpdiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG5zIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRucyA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5ibHVlLWNvbG9yIHtcbiAgICBjb2xvcjogIzQwNTBiNTtcbn1cblxuLnNoYXJlLWJveCB7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgei1pbmRleDogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29weS1idG4ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxucHJlIHtcblxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLypjc3MtMyovXG4gICAgXG4gICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qTW96aWxsYSxzaW5jZTE5OTkqL1xuICAgIFxuICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7IC8qT3BlcmE0LTYqL1xuICAgIFxuICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgLypPcGVyYTcqL1xuICAgIFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLypJbnRlcm5ldEV4cGxvcmVyNS41KyovXG4gICAgXG4gICAgfVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucmVwb3J0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.css']
            }]
    }], function () { return [{ type: src_app_services_post_list_service__WEBPACK_IMPORTED_MODULE_2__["PostListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: src_app_services_report_list_service__WEBPACK_IMPORTED_MODULE_5__["ReportListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/extraInfo.ts":
/*!******************************!*\
  !*** ./src/app/extraInfo.ts ***!
  \******************************/
/*! exports provided: ExtraInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraInfo", function() { return ExtraInfo; });
class ExtraInfo {
    constructor(gradeExpected, gradeObtained) {
        this.gradeExpected = gradeExpected;
        this.gradeObtained = gradeObtained;
    }
}


/***/ }),

/***/ "./src/app/module.ts":
/*!***************************!*\
  !*** ./src/app/module.ts ***!
  \***************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
class Module {
    constructor(moduleCode, title, moduleCredit, department, faculty, description, numOfReviews) {
        this.moduleCode = moduleCode;
        this.title = title;
        this.moduleCredit = moduleCredit;
        this.department = department;
        this.faculty = faculty;
        this.description = description;
        this.numOfReviews = numOfReviews;
    }
}


/***/ }),

/***/ "./src/app/moduleInfo.ts":
/*!*******************************!*\
  !*** ./src/app/moduleInfo.ts ***!
  \*******************************/
/*! exports provided: ModuleInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleInfo", function() { return ModuleInfo; });
class ModuleInfo {
    constructor(moduleCode, title, prof, acadYear, semester) {
        this.moduleCode = moduleCode;
        this.title = title;
        this.prof = prof;
        this.acadYear = acadYear;
        this.semester = semester;
    }
}


/***/ }),

/***/ "./src/app/refinementList.ts":
/*!***********************************!*\
  !*** ./src/app/refinementList.ts ***!
  \***********************************/
/*! exports provided: RefinementList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinementList", function() { return RefinementList; });
class RefinementList {
    constructor(Faculty, Department, ModuleCredit, Level) {
        this.Faculty = Faculty;
        this.Department = Department;
        this.ModuleCredit = ModuleCredit;
        this.Level = Level;
    }
    isEmpty() {
        return this.Faculty.length == 0
            && this.Department.length == 0
            && this.ModuleCredit.length == 0
            && this.Level.length == 0;
    }
}
RefinementList.emptyRefinementList = new RefinementList([], [], [], []);


/***/ }),

/***/ "./src/app/report.ts":
/*!***************************!*\
  !*** ./src/app/report.ts ***!
  \***************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
class Report {
    constructor(content, date, time, postId) {
        this.content = content;
        this.date = date;
        this.time = time;
        this.postId = postId;
        this._id = '';
    }
}


/***/ }),

/***/ "./src/app/reviewAndRatings.ts":
/*!*************************************!*\
  !*** ./src/app/reviewAndRatings.ts ***!
  \*************************************/
/*! exports provided: ReviewAndRatings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAndRatings", function() { return ReviewAndRatings; });
class ReviewAndRatings {
    constructor(review, general, difficulty, workload, recommend) {
        this.review = review;
        this.general = general;
        this.difficulty = difficulty;
        this.workload = workload;
        this.recommend = recommend;
    }
}


/***/ }),

/***/ "./src/app/reviewPost.ts":
/*!*******************************!*\
  !*** ./src/app/reviewPost.ts ***!
  \*******************************/
/*! exports provided: ReviewPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPost", function() { return ReviewPost; });
class ReviewPost {
    constructor(moduleInfo, reviewAndRatings, extraInfo, headerImage, date, time) {
        this.moduleInfo = moduleInfo;
        this.reviewAndRatings = reviewAndRatings;
        this.extraInfo = extraInfo;
        this.headerImage = headerImage;
        this.date = date;
        this.time = time;
        this.numOfDislikes = 0;
        this.numOfLikes = 0;
        this.numOfShares = 0;
        this._id = '';
        this.reportList = [];
    }
}


/***/ }),

/***/ "./src/app/services/admin-account.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/admin-account.service.ts ***!
  \***************************************************/
/*! exports provided: AdminAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountService", function() { return AdminAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class AdminAccountService {
    constructor(http) {
        this.http = http;
        this.cachedAdminAccountList = [];
    }
    getAdminAccount() {
        return this.adminAccount;
    }
    getAdminAccountList() {
        if (this.cachedAdminAccountList.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.cachedAdminAccountList);
        }
        else {
            return this.http.get('/adminAccounts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((adminAccountList) => {
                this.cachedAdminAccountList = adminAccountList;
                return adminAccountList;
            }));
        }
    }
    login(accountName, password) {
        return this.getAdminAccountList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((adminAccountList) => {
            var filteredAdminAccountList = adminAccountList.filter((adminAccount) => {
                return adminAccount.accountName == accountName && adminAccount.password == password;
            });
            if (filteredAdminAccountList.length == 1) {
                this.adminAccount = filteredAdminAccountList[0];
            }
            return filteredAdminAccountList.length == 1;
        }));
    }
    logout() {
        this.adminAccount = undefined;
    }
    createAccount(adminAccount) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post('/adminAccounts/create', adminAccount, httpOptions);
    }
}
AdminAccountService.ɵfac = function AdminAccountService_Factory(t) { return new (t || AdminAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminAccountService, factory: AdminAccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/average-ratings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/average-ratings.service.ts ***!
  \*****************************************************/
/*! exports provided: AverageRatingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageRatingsService", function() { return AverageRatingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _averageRatings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../averageRatings */ "./src/app/averageRatings.ts");
/* harmony import */ var _post_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-list.service */ "./src/app/services/post-list.service.ts");





class AverageRatingsService {
    constructor(postListService) {
        this.postListService = postListService;
    }
    getAverageRatingsByReviewList(reviewList) {
        var averageRatings = new _averageRatings__WEBPACK_IMPORTED_MODULE_2__["AverageRatings"]('0', '0', '0', '0');
        var general = 0;
        var difficulty = 0;
        var workload = 0;
        var recommend = 0;
        if (reviewList.length > 0) {
            reviewList.forEach((review) => {
                general = general + review.reviewAndRatings.recommend;
                difficulty = difficulty + review.reviewAndRatings.difficulty;
                workload = workload + review.reviewAndRatings.workload;
                recommend = recommend + review.reviewAndRatings.general;
            });
            averageRatings.averageRecommend = (recommend / reviewList.length).toFixed(2);
            averageRatings.averageDifficulty = (difficulty / reviewList.length).toFixed(2);
            averageRatings.averageWorkload = (workload / reviewList.length).toFixed(2);
            averageRatings.averageGeneral = (general / reviewList.length).toFixed(2);
        }
        return averageRatings;
    }
    getAverageRatingsByModuleCode(moduleCode) {
        return this.postListService.getPostListOfModule(moduleCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((reviewList) => {
            return this.getAverageRatingsByReviewList(reviewList);
        }));
    }
}
AverageRatingsService.ɵfac = function AverageRatingsService_Factory(t) { return new (t || AverageRatingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"])); };
AverageRatingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AverageRatingsService, factory: AverageRatingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AverageRatingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/module-list.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/module-list.service.ts ***!
  \*************************************************/
/*! exports provided: ModuleListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListService", function() { return ModuleListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post-list.service */ "./src/app/services/post-list.service.ts");





class ModuleListService {
    constructor(http, postListService) {
        this.http = http;
        this.postListService = postListService;
        this.cachedModuleList = [];
    }
    updateLocalStorage() {
        this.http.get('/modules').subscribe((moduleList) => {
            localStorage.setItem('moduleList', JSON.stringify(moduleList));
            this.cachedModuleList = moduleList;
        });
    }
    getModuleList() {
        if (this.cachedModuleList.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cachedModuleList);
        }
        else if (localStorage.getItem('moduleList')) {
            this.cachedModuleList = JSON.parse(localStorage.getItem('moduleList'));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cachedModuleList);
        }
        else {
            this.updateLocalStorage();
            return this.http.get('/modules');
        }
    }
}
ModuleListService.ɵfac = function ModuleListService_Factory(t) { return new (t || ModuleListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"])); };
ModuleListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModuleListService, factory: ModuleListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/my-modules.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/my-modules.service.ts ***!
  \************************************************/
/*! exports provided: MyModulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesService", function() { return MyModulesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.service */ "./src/app/services/search.service.ts");



class MyModulesService {
    constructor(searchService) {
        this.searchService = searchService;
        this.myModuleList = [];
    }
    getMyModuleList() {
        if (this.myModuleList.length == 0) {
            if (localStorage.getItem('myModuleList')) {
                this.myModuleList = JSON.parse(localStorage.getItem('myModuleList'));
            }
            else {
                this.updateLocalStorage();
            }
        }
        return this.myModuleList;
    }
    addModule(module) {
        this.myModuleList.push(module);
        this.updateLocalStorage();
    }
    deleteModule(moduleCode) {
        this.myModuleList = this.myModuleList.filter((module) => {
            return module.moduleCode != moduleCode;
        });
        this.updateLocalStorage();
    }
    updateLocalStorage() {
        localStorage.setItem('myModuleList', JSON.stringify(this.myModuleList));
    }
}
MyModulesService.ɵfac = function MyModulesService_Factory(t) { return new (t || MyModulesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"])); };
MyModulesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyModulesService, factory: MyModulesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyModulesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/post-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/post-list.service.ts ***!
  \***********************************************/
/*! exports provided: PostListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListService", function() { return PostListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class PostListService {
    constructor(http) {
        this.http = http;
        this.cachedPostList = [];
    }
    getPostList() {
        if (this.cachedPostList.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(JSON.stringify(this.cachedPostList)));
        }
        else {
            return this.http.get('/posts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((postList) => {
                this.cachedPostList = postList;
                return JSON.parse(JSON.stringify(this.cachedPostList));
            }));
        }
    }
    getPostById(postId) {
        return this.getPostList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((postList) => {
            return postList.filter((post) => post._id == postId)[0];
        }));
    }
    likePost(postId) {
        this.getPostList().subscribe((reviewList) => {
            this.cachedPostList.filter((reviewPost) => reviewPost._id == postId)[0].numOfLikes++;
        });
        var postListLike = this.getPostListLike();
        postListLike.push(postId);
        localStorage.setItem('postListLike', JSON.stringify(postListLike));
        return this.http.put('/posts/like/' + postId, null);
    }
    cancelLikePost(postId) {
        this.getPostList().subscribe((reviewList) => {
            this.cachedPostList.filter((reviewPost) => reviewPost._id == postId)[0].numOfLikes--;
        });
        localStorage.setItem('postListLike', JSON.stringify(this.getPostListLike().filter((id) => id != postId)));
        return this.http.put('/posts/like/cancel/' + postId, null);
    }
    dislikePost(postId) {
        this.getPostList().subscribe((reviewList) => {
            this.cachedPostList.filter((reviewPost) => reviewPost._id == postId)[0].numOfDislikes++;
        });
        var postListDislike = this.getPostListDislike();
        postListDislike.push(postId);
        localStorage.setItem('postListDislike', JSON.stringify(postListDislike));
        return this.http.put('/posts/dislike/' + postId, null);
    }
    cancelDislikePost(postId) {
        this.getPostList().subscribe((reviewList) => {
            this.cachedPostList.filter((reviewPost) => reviewPost._id == postId)[0].numOfDislikes--;
        });
        localStorage.setItem('postListDislike', JSON.stringify(this.getPostListDislike().filter((id) => id != postId)));
        return this.http.put('/posts/dislike/cancel/' + postId, null);
    }
    sharePost(postId) {
        this.getPostList().subscribe((reviewList) => {
            this.cachedPostList.filter((reviewPost) => reviewPost._id == postId)[0].numOfShares++;
        });
        return this.http.put('/posts/share/' + postId, null);
    }
    getPostListLike() {
        if (!localStorage.getItem('postListLike')) {
            localStorage.setItem('postListLike', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('postListLike'));
    }
    getPostListDislike() {
        if (!localStorage.getItem('postListDislike')) {
            localStorage.setItem('postListDislike', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('postListDislike'));
    }
    countNumOfPosts() {
        return this.http.get('/posts/count');
    }
    deletePost(postId) {
        this.cachedPostList = this.cachedPostList.filter((post) => {
            return post._id != postId;
        });
        return this.http.delete('posts/delete/' + postId);
    }
    addPost(post) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post('/posts', post, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((reviewPost) => {
            reviewPost.reportList = [];
            this.cachedPostList.push(reviewPost);
            return reviewPost;
        }));
    }
    countPostList(moduleCode) {
        return this.http.get('/posts/' + moduleCode + '/count');
    }
    getPostListOfModule(moduleCode) {
        return this.http.get('/posts/' + moduleCode);
    }
    addReport(report) {
        this.getPostList().subscribe((postList) => {
            var post = this.cachedPostList.find((reviewPost) => reviewPost._id == report.postId);
            if (post) {
                post.reportList.push(report);
            }
        });
    }
    deleteReport(postId) {
        this.getPostList().subscribe((postList) => {
            var post = this.cachedPostList.find((reviewPost) => reviewPost._id == postId);
            if (post) {
                post.reportList = [];
            }
        });
    }
}
PostListService.ɵfac = function PostListService_Factory(t) { return new (t || PostListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostListService, factory: PostListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/question-list.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/question-list.service.ts ***!
  \***************************************************/
/*! exports provided: QuestionListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListService", function() { return QuestionListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class QuestionListService {
    constructor(http) {
        this.http = http;
    }
    getQuestionListOfModule(moduleCode) {
        return this.http.get('/questions/' + moduleCode);
    }
    countNumOfQuestions() {
        return this.http.get('/questions/count');
    }
    addQuestion(question) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('/questions', question, httpOptions);
    }
    deleteQuestion(questionId) {
        return this.http.delete('/questions/delete/' + questionId);
    }
}
QuestionListService.ɵfac = function QuestionListService_Factory(t) { return new (t || QuestionListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuestionListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionListService, factory: QuestionListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/refinement-list.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/refinement-list.service.ts ***!
  \*****************************************************/
/*! exports provided: RefinementListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinementListService", function() { return RefinementListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _refinementList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../refinementList */ "./src/app/refinementList.ts");




class RefinementListService {
    constructor() {
        this.refinementList = new _refinementList__WEBPACK_IMPORTED_MODULE_2__["RefinementList"]([], [], ['4 MC'], []);
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.refinementList);
    }
    addRefinement(selector, refinement) {
        if (!this.includes(selector, refinement)) {
            this.refinementList[selector].push(refinement);
            this.subject.next(this.refinementList);
        }
    }
    getRefinementList() {
        return this.subject;
    }
    deleteRefinement(selector, refinement) {
        this.refinementList[selector].splice(this.refinementList[selector].indexOf(refinement), 1);
        this.subject.next(this.refinementList);
    }
    includes(selector, refinement) {
        return this.refinementList[selector].includes(refinement);
    }
}
RefinementListService.ɵfac = function RefinementListService_Factory(t) { return new (t || RefinementListService)(); };
RefinementListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefinementListService, factory: RefinementListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefinementListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/report-list.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/report-list.service.ts ***!
  \*************************************************/
/*! exports provided: ReportListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListService", function() { return ReportListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ReportListService {
    constructor(http) {
        this.http = http;
    }
    getReportList() {
        return this.http.get('/reports');
    }
    deleteReport(reportId) {
        return this.http.delete('/reports/delete/' + reportId);
    }
    submitReport(report) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post('/reports', report, httpOptions);
    }
}
ReportListService.ɵfac = function ReportListService_Factory(t) { return new (t || ReportListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReportListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportListService, factory: ReportListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _module_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-list.service */ "./src/app/services/module-list.service.ts");
/* harmony import */ var _services_post_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post-list.service */ "./src/app/services/post-list.service.ts");





class SearchService {
    constructor(moduleListService, postListService) {
        this.moduleListService = moduleListService;
        this.postListService = postListService;
        this.belongsToFaculty = (module, facultyList) => {
            var flag = false;
            for (let i = 0; i < facultyList.length; i++) {
                if (module.faculty == facultyList[i]) {
                    flag = true;
                    break;
                }
            }
            return facultyList.length == 0 || flag;
        };
    }
    belongsToDepartment(module, departmentList) {
        var flag = false;
        for (let i = 0; i < departmentList.length; i++) {
            if (module.department == departmentList[i]) {
                flag = true;
                break;
            }
        }
        return departmentList.length == 0 || flag;
    }
    belongsToLevel(module, levelList) {
        var flag = false;
        for (let i = 0; i < levelList.length; i++) {
            let level = levelList[i].charAt(0);
            let levelOfModule = module.moduleCode.replace(/^[A-Z]+/, '').charAt(0);
            if (level == levelOfModule) {
                flag = true;
                break;
            }
        }
        return levelList.length == 0 || flag;
    }
    hasModuleCredit(module, moduleCreditList) {
        var flag = false;
        for (let i = 0; i < moduleCreditList.length; i++) {
            let moduleCredit = parseInt(module.moduleCredit);
            switch (moduleCreditList[i]) {
                case '0-3 MC':
                    flag = moduleCredit < 4;
                    break;
                case '4 MC':
                    flag = moduleCredit == 4;
                    break;
                case '5-8 MC':
                    flag = moduleCredit < 9 && moduleCredit > 4;
                    break;
                case 'More than 8 MC':
                    flag = moduleCredit > 8;
                    break;
            }
            if (flag)
                break;
        }
        return moduleCreditList.length == 0 || flag;
    }
    getFullModuleList() {
        return this.moduleListService.getModuleList();
    }
    search(searchInput, refinementList) {
        return this.getFullModuleList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((moduleList) => {
            if (refinementList.isEmpty()) {
                return moduleList;
            }
            else {
                return moduleList.filter((module) => {
                    return this.belongsToFaculty(module, refinementList.Faculty) &&
                        this.belongsToDepartment(module, refinementList.Department) &&
                        this.hasModuleCredit(module, refinementList.ModuleCredit) &&
                        this.belongsToLevel(module, refinementList.Level);
                });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((moduleList) => {
            if (searchInput == '') {
                return moduleList;
            }
            else {
                let uppercaseSearchInput = searchInput.toUpperCase();
                return moduleList.filter((module) => {
                    let uppercaseModuleTitle = module.title.toUpperCase();
                    return uppercaseModuleTitle.search(uppercaseSearchInput) != -1 || module.moduleCode.search(uppercaseSearchInput) != -1;
                });
            }
        }));
    }
    getModule(moduleCode) {
        return this.getFullModuleList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((moduleList) => {
            let moduleFound;
            for (var i = 0; i < moduleList.length; i++) {
                if (moduleList[i].moduleCode == moduleCode) {
                    moduleFound = moduleList[i];
                    break;
                }
            }
            return moduleFound;
        }));
    }
    getMoreModuleList(moduleCode) {
        return this.getFullModuleList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((moduleList) => {
            let index = moduleList.map((module) => {
                return module.moduleCode;
            }).findIndex((item) => item == moduleCode);
            let start = index - 5 < 0
                ? 0
                : index + 5 > moduleList.length - 1
                    ? moduleList.length - 11
                    : index - 5;
            return moduleList.slice(start, start + 11).filter((module) => module.moduleCode != moduleCode);
        }));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_module_list_service__WEBPACK_IMPORTED_MODULE_2__["ModuleListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _module_list_service__WEBPACK_IMPORTED_MODULE_2__["ModuleListService"] }, { type: _services_post_list_service__WEBPACK_IMPORTED_MODULE_3__["PostListService"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! /Users/pengcao/Desktop/myVim/mean_stack/nusmods/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map