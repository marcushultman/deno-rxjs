function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/services/sidebar.service */
    "./src/app/main/services/sidebar.service.ts");
    /* harmony import */


    var _main_components_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main/components/toolbar/toolbar.service */
    "./src/app/main/components/toolbar/toolbar.service.ts");
    /* harmony import */


    var _main_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/components/progress-bar/progress-bar.service */
    "./src/app/main/components/progress-bar/progress-bar.service.ts");
    /* harmony import */


    var _main_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main/components/progress-bar/progress-bar.component */
    "./src/app/main/components/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _main_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/components/toolbar/toolbar.component */
    "./src/app/main/components/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/components/menu-item/menu-item.component */
    "./src/app/main/components/menu-item/menu-item.component.ts");

    function AppComponent_menu_item_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "menu-item", 4);
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(sidebarService, toolbarService, progressBar) {
        _classCallCheck(this, AppComponent);

        this.sidebarService = sidebarService;
        this.toolbarService = toolbarService;
        this.progressBar = progressBar;
        this.sidebarItems = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.progressBar.show();
          this.toolbarService.getNavigation().subscribe({
            next: function next(data) {
              _this.sidebarItems = data.SideBar;
            },
            error: function error(data) {
              console.error(data);
            },
            complete: function complete() {
              _this.progressBar.hide();
            }
          });
          this.sidebarService.toggle.subscribe({
            next: function next(value) {
              if (_this.sidebar) {
                _this.sidebar.toggle();
              }
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_components_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["ProgressBarService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["rxjs"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebar = _t.first);
        }
      },
      decls: 9,
      vars: 1,
      consts: [["hasBackdrop", "false"], ["mode", "side"], ["sidebar", ""], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxjs-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_menu_item_6_Template, 1, 1, "menu-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
        }
      },
      directives: [_main_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["ProgressBarComponent"], _main_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _main_components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_10__["MenuItemComponent"]],
      styles: ["mat-drawer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 100vw;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  min-width: 260px;\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHhhbXBwXFxodGRvY3NcXGRlbm9iclxccnhqcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbn1cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcbi5tYXQtZHJhd2VyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDAgNnB4IHJnYmEoMCwwLDAsLjEpO1xyXG59XHJcbiIsIm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDI2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm94LXNoYWRvdzogNnB4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rxjs',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
        }, {
          type: _main_components_toolbar_toolbar_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarService"]
        }, {
          type: _main_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["ProgressBarService"]
        }];
      }, {
        sidebar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main/pages/pages.module */
    "./src/app/main/pages/pages.module.ts");
    /* harmony import */


    var _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/components/toolbar/toolbar.module */
    "./src/app/main/components/toolbar/toolbar.module.ts");
    /* harmony import */


    var _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/components/progress-bar/progress-bar.module */
    "./src/app/main/components/progress-bar/progress-bar.module.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/services/sidebar.service */
    "./src/app/main/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main/components/menu-item/menu-item.module */
    "./src/app/main/components/menu-item/menu-item.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([], {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }), _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"], _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__["MenuItemModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"], _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__["MenuItemModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([], {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
          }), _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"], _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__["MenuItemModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]],
          providers: [_main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/menu-item/menu-item.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main/components/menu-item/menu-item.component.ts ***!
    \******************************************************************/

  /*! exports provided: MenuItemComponent */

  /***/
  function srcAppMainComponentsMenuItemMenuItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function () {
      return MenuItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/sidebar.service */
    "./src/app/main/services/sidebar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function MenuItemComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0.expanded ? "expanded" : "collapsed");
      }
    }

    function MenuItemComponent_div_5_menu_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "menu-item", 8);
      }

      if (rf & 2) {
        var child_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", child_r3)("depth", ctx_r2.depth + 1);
      }
    }

    function MenuItemComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemComponent_div_5_menu_item_1_Template, 1, 2, "menu-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.item.children);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "padding-left": a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "active": a0,
        "expanded": a1
      };
    };

    var MenuItemComponent = /*#__PURE__*/function () {
      function MenuItemComponent(router, sideBarService) {
        _classCallCheck(this, MenuItemComponent);

        this.router = router;
        this.sideBarService = sideBarService;
        this.ariaExpanded = this.expanded;

        if (this.depth === undefined) {
          this.depth = 0;
        }
      }

      _createClass(MenuItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onItemSelected",
        value: function onItemSelected(item) {
          if (!item.children || !item.children.length) {
            this.router.navigate([item.url]);
            this.sideBarService.toggleSidebar();
          }

          if (item.children && item.children.length) {
            this.expanded = !this.expanded;
          }
        }
      }]);

      return MenuItemComponent;
    }();

    MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) {
      return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]));
    };

    MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuItemComponent,
      selectors: [["menu-item"]],
      hostVars: 1,
      hostBindings: function MenuItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.ariaExpanded);
        }
      },
      inputs: {
        item: "item",
        depth: "depth"
      },
      decls: 6,
      vars: 10,
      consts: [[1, "menu-item"], ["mat-list-item", "", 1, "menu-list-item", 3, "ngStyle", "ngClass", "click"], [1, "item-text"], ["fxFlex", "", 4, "ngIf"], [4, "ngIf"], ["fxFlex", ""], [1, "transition-more"], [3, "item", "depth", 4, "ngFor", "ngForOf"], [3, "item", "depth"]],
      template: function MenuItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemComponent_Template_a_click_1_listener() {
            return ctx.onItemSelected(ctx.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuItemComponent_span_4_Template, 4, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuItemComponent_div_5_Template, 2, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.depth * 12 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx.item.url ? ctx.router.isActive(ctx.item.url, true) : false, ctx.expanded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.children && ctx.item.children.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], MenuItemComponent],
      styles: [".menu-item[_ngcontent-%COMP%] {\n  padding: 4px 8px 0 8px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 2px;\n  padding: 5px;\n  display: flex;\n  width: auto;\n  text-transform: uppercase;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ececec !important;\n  color: #d81b60;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-top: 2px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .routeIcon[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.menu-item[_ngcontent-%COMP%]   .transition-more[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21lbnUtaXRlbS9DOlxceGFtcHBcXGh0ZG9jc1xcZGVub2JyXFxyeGpzL3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRzXFxtZW51LWl0ZW1cXG1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFTQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ05KO0FETEk7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNPTjtBRExJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ09SO0FEREk7RUFDRSxrQkFBQTtBQ0dOO0FEQUU7RUFDSSxvQkFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1pdGVtIHtcclxuICBwYWRkaW5nOiA0cHggOHB4IDAgOHB4O1xyXG4gIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNkODFiNjA7XHJcbiAgICB9XHJcbiAgICAuaXRlbS10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC5yb3V0ZUljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc2l0aW9uLW1vcmUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbn1cclxuIiwiLm1lbnUtaXRlbSB7XG4gIHBhZGRpbmc6IDRweCA4cHggMCA4cHg7XG59XG4ubWVudS1pdGVtIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tZW51LWl0ZW0gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNkODFiNjA7XG59XG4ubWVudS1pdGVtIGEgLml0ZW0tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLm1lbnUtaXRlbSBhIC5yb3V0ZUljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4ubWVudS1pdGVtIC50cmFuc2l0aW9uLW1vcmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'rotate(0deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'rotate(180deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)',
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'menu-item',
          templateUrl: './menu-item.component.html',
          styleUrls: ['./menu-item.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'rotate(180deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)',
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]
        }];
      }, {
        ariaExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-expanded']
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        depth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/components/menu-item/menu-item.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/components/menu-item/menu-item.module.ts ***!
    \***************************************************************/

  /*! exports provided: MenuItemModule */

  /***/
  function srcAppMainComponentsMenuItemMenuItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItemModule", function () {
      return MenuItemModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu-item.component */
    "./src/app/main/components/menu-item/menu-item.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var MenuItemModule = function MenuItemModule() {
      _classCallCheck(this, MenuItemModule);
    };

    MenuItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuItemModule
    });
    MenuItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MenuItemModule_Factory(t) {
        return new (t || MenuItemModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuItemModule, {
        declarations: [_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
        exports: [_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuItemComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
          exports: [_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuItemComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/progress-bar/progress-bar.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/main/components/progress-bar/progress-bar.component.ts ***!
    \************************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppMainComponentsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _progress_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./progress-bar.service */
    "./src/app/main/components/progress-bar/progress-bar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function ProgressBarComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 1);
      }
    }

    var ProgressBarComponent = /*#__PURE__*/function () {
      function ProgressBarComponent(progressBarService) {
        _classCallCheck(this, ProgressBarComponent);

        this.progressBarService = progressBarService;
        this.progressBar = false;
      }

      _createClass(ProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.progressBarService.progressBar.subscribe({
            next: function next(data) {
              _this2.progressBar = data;
            }
          });
        }
      }]);

      return ProgressBarComponent;
    }();

    ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
      return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"]));
    };

    ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBarComponent,
      selectors: [["progress-bar"]],
      decls: 1,
      vars: 1,
      consts: [["class", "progress-bar", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "progress-bar"]],
      template: function ProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressBarComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progressBar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]],
      styles: ["mat-progress-bar[_ngcontent-%COMP%] {\n  z-index: 99999;\n  top: 0;\n  width: 100vw;\n  position: absolute;\n}\nmat-progress-bar[_ngcontent-%COMP%]     .mat-progress-bar-fill::after {\n  background-color: #610ba2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9DOlxceGFtcHBcXGh0ZG9jc1xcZGVub2JyXFxyeGpzL3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRzXFxwcm9ncmVzcy1iYXJcXHByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSx5QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjEwYmEyO1xyXG4gICAgfVxyXG59IiwibWF0LXByb2dyZXNzLWJhciB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxubWF0LXByb2dyZXNzLWJhciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjEwYmEyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'progress-bar',
          templateUrl: './progress-bar.component.html',
          styleUrls: ['./progress-bar.component.scss']
        }]
      }], function () {
        return [{
          type: _progress_bar_service__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/progress-bar/progress-bar.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main/components/progress-bar/progress-bar.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ProgressBarModule */

  /***/
  function srcAppMainComponentsProgressBarProgressBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return ProgressBarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progress-bar.service */
    "./src/app/main/components/progress-bar/progress-bar.service.ts");
    /* harmony import */


    var _progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./progress-bar.component */
    "./src/app/main/components/progress-bar/progress-bar.component.ts");

    var ProgressBarModule = function ProgressBarModule() {
      _classCallCheck(this, ProgressBarModule);
    };

    ProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProgressBarModule
    });
    ProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProgressBarModule_Factory(t) {
        return new (t || ProgressBarModule)();
      },
      providers: [_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressBarModule, {
        declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"]],
        exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"]],
          providers: [_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"]],
          exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/progress-bar/progress-bar.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/components/progress-bar/progress-bar.service.ts ***!
    \**********************************************************************/

  /*! exports provided: ProgressBarService */

  /***/
  function srcAppMainComponentsProgressBarProgressBarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarService", function () {
      return ProgressBarService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressBarService = /*#__PURE__*/function () {
      function ProgressBarService() {
        _classCallCheck(this, ProgressBarService);

        this.progressBarSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.progressBar = this.progressBarSource.asObservable();
      }

      _createClass(ProgressBarService, [{
        key: "show",
        value: function show() {
          this.progressBarSource.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.progressBarSource.next(false);
        }
      }]);

      return ProgressBarService;
    }();

    ProgressBarService.ɵfac = function ProgressBarService_Factory(t) {
      return new (t || ProgressBarService)();
    };

    ProgressBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProgressBarService,
      factory: ProgressBarService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/toolbar/toolbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main/components/toolbar/toolbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppMainComponentsToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toolbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toolbar.service */
    "./src/app/main/components/toolbar/toolbar.service.ts");
    /* harmony import */


    var _progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../progress-bar/progress-bar.service */
    "./src/app/main/components/progress-bar/progress-bar.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/sidebar.service */
    "./src/app/main/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ToolbarComponent_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_mat_icon_2_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.menuToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ToolbarComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var navItem_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, navItem_r4.link));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navItem_r4.text);
      }
    }

    var _c1 = function _c1() {
      return ["index"];
    };

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent(toolbarService, progressBar, matStackBar, sideBarService) {
        _classCallCheck(this, ToolbarComponent);

        this.toolbarService = toolbarService;
        this.progressBar = progressBar;
        this.matStackBar = matStackBar;
        this.sideBarService = sideBarService;
        this.menuView = false;
        this.navigationList = [];
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.progressBar.show();
          this.toolbarService.getNavigation().subscribe({
            next: function next(data) {
              _this3.navigationList = data.NavBar;
            },
            error: function error(data) {
              console.error(data);
            },
            complete: function complete() {
              _this3.progressBar.hide();
            }
          });
          this.sideBarService.sidebar.subscribe({
            next: function next(data) {
              _this3.menuView = data;
            }
          });
        }
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.sideBarService.toggleSidebar();
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toolbar_service__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["ProgressBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]));
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["rxjs-toolbar"]],
      decls: 10,
      vars: 4,
      consts: [["color", "black-full"], ["class", "menu-icon", 3, "click", 4, "ngIf"], [3, "routerLink"], ["src", "assets/images/logo.png", 1, "logo"], [1, "navigation"], ["routerLinkActive", "active-link", 3, "routerLink", 4, "ngFor", "ngForOf"], ["fxFlex", "1 1 auto"], ["href", "https://github.com/DenoBRComunitty/rxjs", "target", "_blank"], ["src", "assets/images/github.svg"], [1, "menu-icon", 3, "click"], ["routerLinkActive", "active-link", 3, "routerLink"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_mat_icon_2_Template, 2, 0, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_a_6_Template, 2, 4, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigationList);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]],
      styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 16px;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%] {\n  padding: 0 16px 0 0;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  \n  padding: 20px;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n  vertical-align: sub;\n  padding-top: 5px;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  padding: 0 0 3px 15px;\n}\n@media screen and (min-width: 801px) {\n  .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: initial;\n  }\n}\n@media screen and (max-width: 800px) {\n  .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7.5px 16px;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: all 0.15s;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  text-decoration: none;\n  background-color: #1b1b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Rvb2xiYXIvQzpcXHhhbXBwXFxodGRvY3NcXGRlbm9iclxccnhqcy9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0FDQ0o7QURDSTtFQUNFLDJCQUFBO0VBQTZCLGVBQUE7RUFDN0IseUJBQUE7RUFBMkIsV0FBQTtFQUNELG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLDJCQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CO2lFQUFBO0VBRW5CLGFBQUE7QUNPTjtBRE5NO0VBQ0UsZUFBQTtBQ1FSO0FESk07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ01SO0FETFE7RUFDRSxZQUFBO0FDT1Y7QURISTtFQUNFLHFCQUFBO0FDS047QURKTTtFQUZGO0lBR0ksZ0JBQUE7RUNPTjtBQUNGO0FETk07RUFMRjtJQU1JLGFBQUE7RUNTTjtBQUNGO0FEUk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNVUjtBRFJRO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNVViIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgLm1hdC10b29sYmFyLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAmLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDAgM3B4IDE1cHg7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgcGFkZGluZzogNy41cHggMTZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgMjcsIDI3LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm1hdC10b29sYmFyIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyB7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDA7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubWVudS1pY29uIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubWVudS1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgYSBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyBhIGltZy5sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgLm5hdmlnYXRpb24ge1xuICBwYWRkaW5nOiAwIDAgM3B4IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xuICAubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IC5uYXZpZ2F0aW9uIGEge1xuICBwYWRkaW5nOiA3LjVweCAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubmF2aWdhdGlvbiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rxjs-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.scss']
        }]
      }], function () {
        return [{
          type: _toolbar_service__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"]
        }, {
          type: _progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["ProgressBarService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/toolbar/toolbar.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/main/components/toolbar/toolbar.module.ts ***!
    \***********************************************************/

  /*! exports provided: ToolbarModule */

  /***/
  function srcAppMainComponentsToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
      return ToolbarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toolbar.component */
    "./src/app/main/components/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _toolbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./toolbar.service */
    "./src/app/main/components/toolbar/toolbar.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ToolbarModule = function ToolbarModule() {
      _classCallCheck(this, ToolbarModule);
    };

    ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToolbarModule
    });
    ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToolbarModule_Factory(t) {
        return new (t || ToolbarModule)();
      },
      providers: [_toolbar_service__WEBPACK_IMPORTED_MODULE_7__["ToolbarService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarModule, {
        declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          providers: [_toolbar_service__WEBPACK_IMPORTED_MODULE_7__["ToolbarService"]],
          exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/components/toolbar/toolbar.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/components/toolbar/toolbar.service.ts ***!
    \************************************************************/

  /*! exports provided: ToolbarService */

  /***/
  function srcAppMainComponentsToolbarToolbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarService", function () {
      return ToolbarService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ToolbarService = /*#__PURE__*/function () {
      function ToolbarService(http) {
        _classCallCheck(this, ToolbarService);

        this.http = http;
      }

      _createClass(ToolbarService, [{
        key: "getNavigation",
        value: function getNavigation() {
          var _this4 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            _this4.http.get('content/navigation.json').subscribe({
              next: function next(data) {
                subscriber.next(JSON.parse(JSON.stringify(data)));
              },
              error: function error(data) {
                subscriber.error(data);
              },
              complete: function complete() {
                subscriber.complete();
              }
            });
          });
        }
      }]);

      return ToolbarService;
    }();

    ToolbarService.ɵfac = function ToolbarService_Factory(t) {
      return new (t || ToolbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToolbarService,
      factory: ToolbarService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToolbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/pages/pages.module.ts":
  /*!********************************************!*\
    !*** ./src/app/main/pages/pages.module.ts ***!
    \********************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppMainPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | main-module */
        "main-module").then(__webpack_require__.bind(null,
        /*! ./main.module */
        "./src/app/main/pages/main.module.ts")).then(function (m) {
          return m.MainModule;
        });
      }
    }, {
      path: 'guide',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | docs-docs-module */
        "docs-docs-module").then(__webpack_require__.bind(null,
        /*! ./docs/docs.module */
        "./src/app/main/pages/docs/docs.module.ts")).then(function (m) {
          return m.DocsModule;
        });
      }
    }, {
      path: '**',
      redirectTo: '404'
    }];

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/services/sidebar.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/services/sidebar.service.ts ***!
    \**************************************************/

  /*! exports provided: SidebarService */

  /***/
  function srcAppMainServicesSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return SidebarService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarService = /*#__PURE__*/function () {
      function SidebarService() {
        _classCallCheck(this, SidebarService);

        this.sidebarSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.sidebar = this.sidebarSource.asObservable();
        this.toggleSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.toggleValue = false;
        this.toggle = this.toggleSource.asObservable();
      }

      _createClass(SidebarService, [{
        key: "show",
        value: function show() {
          this.sidebarSource.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.sidebarSource.next(false);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.toggleValue = !this.toggleValue;
          this.toggleSource.next(this.toggleValue);
        }
      }]);

      return SidebarService;
    }();

    SidebarService.ɵfac = function SidebarService_Factory(t) {
      return new (t || SidebarService)();
    };

    SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SidebarService,
      factory: SidebarService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
    // import 'zone.js/dist/zone-error.ts';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/compiler */
    "./node_modules/@angular/compiler/fesm2015/compiler.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\denobr\rxjs\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map