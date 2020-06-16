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
                _this.sidebar.toggle(value);
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
      styles: ["mat-drawer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 100%;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 0 auto;\n  width: 100%;\n  overflow: hidden;\n  margin-top: 64px;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  min-width: 260px;\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n\n.mat-drawer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-left: calc(calc(260px / 2) - calc(64px / 2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHhhbXBwXFxodGRvY3NcXGRlbm9iclxccnhqcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0NBQUE7QUNHSjs7QURGSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogNjRweDtcbn1cbi5tYXQtZHJhd2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2NHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoY2FsYygyNjBweCAvIDIpIC0gY2FsYyg2NHB4IC8gMikpO1xuICAgIH1cbn1cbiIsIm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDY0cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWF0LWRyYXdlciAubG9nbyB7XG4gIHdpZHRoOiA2NHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKDI2MHB4IC8gMikgLSBjYWxjKDY0cHggLyAyKSk7XG59Il19 */"]
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
    /* harmony import */


    var _main_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./main/services/navigation.service */
    "./src/app/main/services/navigation.service.ts");

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
      providers: [_main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"], _main_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([], {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }), _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"], _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__["MenuItemModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"], _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__["MenuItemModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([], {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
          }), _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"], _main_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _main_components_menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_12__["MenuItemModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]],
          providers: [_main_services_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"], _main_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]],
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
        active: a0,
        expanded: a1
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
      styles: [".menu-item[_ngcontent-%COMP%] {\n  padding: 4px 8px 0 8px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 2px;\n  padding: 5px;\n  display: flex;\n  width: auto;\n  text-transform: uppercase;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ececec !important;\n  color: #d81b60;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-top: 2px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .routeIcon[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.menu-item[_ngcontent-%COMP%]   .transition-more[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21lbnUtaXRlbS9DOlxceGFtcHBcXGh0ZG9jc1xcZGVub2JyXFxyeGpzL3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRzXFxtZW51LWl0ZW1cXG1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFTQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ05SO0FETFE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUNPWjtBRExRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ09aO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FEQUk7RUFDSSxvQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1pdGVtIHtcbiAgICBwYWRkaW5nOiA0cHggOHB4IDAgOHB4O1xuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2Q4MWI2MDtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbS10ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAucm91dGVJY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudHJhbnNpdGlvbi1tb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgfVxufVxuIiwiLm1lbnUtaXRlbSB7XG4gIHBhZGRpbmc6IDRweCA4cHggMCA4cHg7XG59XG4ubWVudS1pdGVtIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tZW51LWl0ZW0gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNkODFiNjA7XG59XG4ubWVudS1pdGVtIGEgLml0ZW0tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLm1lbnUtaXRlbSBhIC5yb3V0ZUljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4ubWVudS1pdGVtIC50cmFuc2l0aW9uLW1vcmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn0iXX0= */"],
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
      styles: ["mat-progress-bar[_ngcontent-%COMP%] {\n  z-index: 99999;\n  top: 0;\n  width: 100vw;\n  position: absolute;\n}\nmat-progress-bar[_ngcontent-%COMP%]     .mat-progress-bar-fill::after {\n  background-color: #610ba2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9DOlxceGFtcHBcXGh0ZG9jc1xcZGVub2JyXFxyeGpzL3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRzXFxwcm9ncmVzcy1iYXJcXHByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSx5QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTBiYTI7XG4gICAgfVxufVxuIiwibWF0LXByb2dyZXNzLWJhciB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxubWF0LXByb2dyZXNzLWJhciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjEwYmEyO1xufSJdfQ== */"]
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toolbar.service */
    "./src/app/main/components/toolbar/toolbar.service.ts");
    /* harmony import */


    var _progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../progress-bar/progress-bar.service */
    "./src/app/main/components/progress-bar/progress-bar.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/sidebar.service */
    "./src/app/main/services/sidebar.service.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/app/main/services/navigation.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ToolbarComponent_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_mat_icon_2_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.menuToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);
      }
    }

    function ToolbarComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var navItem_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.go(navItem_r4.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var navItem_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navItem_r4.text);
      }
    }

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent(toolbarService, progressBar, matStackBar, sideBarService, navigationService) {
        _classCallCheck(this, ToolbarComponent);

        this.toolbarService = toolbarService;
        this.progressBar = progressBar;
        this.matStackBar = matStackBar;
        this.sideBarService = sideBarService;
        this.navigationService = navigationService;
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
      }, {
        key: "go",
        value: function go(routename) {
          this.sideBarService.toggleSidebar(false);
          this.navigationService.navigate(routename);
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]));
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["rxjs-toolbar"]],
      decls: 18,
      vars: 2,
      consts: [["color", "sub-black"], ["class", "menu-icon", 3, "click", 4, "ngIf"], [3, "click"], ["src", "assets/images/logo.png", 1, "logo"], [1, "navigation"], ["routerLinkActive", "active-link", 3, "click", 4, "ngFor", "ngForOf"], ["fxFlex", "1 1 auto"], ["href", "https://deno.land/x/rxjs", "target", "_blank", 1, "icon"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "viewBox", "0 0 1024.000000 1024.000000", "preserveAspectRatio", "xMidYMid meet"], ["transform", "translate(0.000000,1024.000000) scale(0.100000,-0.100000)", "fill", "#ffffff", "stroke", "none"], ["d", "M4720 9174 c-19 -2 -80 -9 -135 -14 -782 -82 -1552 -413 -2180 -939\n            -116 -96 -380 -360 -476 -476 -520 -621 -824 -1318 -936 -2143 -25 -183 -25\n            -801 0 -984 112 -825 416 -1522 936 -2143 96 -116 360 -380 476 -476 621 -520\n            1318 -824 2143 -936 183 -25 801 -25 984 0 825 112 1522 416 2143 936 116 96\n            380 360 476 476 520 621 824 1318 936 2143 25 183 25 801 0 984 -112 825 -416\n            1522 -936 2143 -96 116 -360 380 -476 476 -619 518 -1323 826 -2137 935 -88\n            12 -216 17 -453 19 -181 2 -346 1 -365 -1z m50 -432 c0 -117 8 -371 19 -612 6\n            -118 13 -287 16 -375 11 -312 44 -1131 49 -1204 l5 -73 -45 5 c-25 2 -48 8\n            -52 11 -3 4 -10 73 -14 154 -18 356 -77 1737 -83 1939 l-6 222 28 4 c15 2 40\n            5 56 6 l27 1 0 -78z m957 24 c1 -1 4 -303 7 -671 4 -369 9 -700 12 -736 3 -37\n            2 -69 -3 -71 -4 -3 -29 -3 -54 0 l-46 4 -7 291 c-4 161 -9 339 -11 397 -8 177\n            -15 778 -9 793 4 11 15 12 57 5 29 -6 53 -11 54 -12z m-2313 -335 c6 -9 53\n            -560 111 -1281 19 -245 38 -469 41 -497 5 -51 4 -53 -28 -73 -18 -11 -36 -20\n            -40 -20 -3 0 -9 26 -12 58 -14 130 -68 758 -106 1212 -22 267 -42 506 -45 532\n            -5 44 -4 48 22 62 32 17 50 20 57 7z m2753 -201 c28 -10 31 -15 37 -72 10\n            -100 7 -578 -4 -578 -29 0 -89 34 -94 53 -3 12 -6 154 -6 315 0 325 -4 306 67\n            282z m-1847 -47 c0 -27 7 -176 15 -333 8 -157 17 -356 21 -442 7 -174 9 -168\n            -58 -172 -33 -1 -33 -1 -35 49 -2 28 -7 115 -13 195 -5 80 -17 253 -25 385 -8\n            132 -18 263 -21 291 -6 50 -5 52 22 62 16 6 44 11 62 11 32 1 32 1 32 -46z\n            m2774 -137 l34 -14 7 -134 c3 -73 5 -231 3 -350 l-3 -218 -42 21 -42 20 -3\n            332 c-2 183 -1 338 1 345 4 15 4 15 45 -2z m-1826 -131 c6 -6 20 -491 21 -737\n            l1 -148 -47 7 c-27 3 -49 6 -50 7 -3 2 -33 743 -33 815 l0 74 51 -6 c29 -4 54\n            -9 57 -12z m2303 -71 c12 -14 14 -233 17 -1441 3 -1387 3 -1423 -15 -1423 -11\n            0 -26 6 -35 13 -15 11 -17 132 -22 1317 -4 718 -9 1370 -12 1449 l-6 144 29\n            -21 c17 -12 36 -29 44 -38z m-897 -205 c5 -4 10 -61 11 -126 5 -221 6 -1576 1\n            -1580 -2 -2 -20 3 -40 11 l-36 15 0 851 0 850 28 -6 c15 -4 31 -10 36 -15z\n            m-2760 -56 c3 -27 8 -88 11 -138 3 -49 10 -161 16 -248 12 -176 10 -187 -47\n            -187 -30 0 -34 3 -38 33 -10 59 -45 551 -40 559 5 7 57 25 81 27 6 1 14 -20\n            17 -46z m-1654 -255 c11 -106 33 -328 49 -493 17 -165 31 -305 31 -311 0 -12\n            -77 -50 -85 -42 -5 5 -105 890 -105 930 0 24 77 125 87 114 3 -2 13 -91 23\n            -198z m3921 -105 l29 -17 1 -216 c1 -118 3 -250 3 -293 2 -90 -9 -105 -63 -86\n            l-31 11 0 86 c0 48 -3 187 -7 310 l-6 222 23 0 c12 0 35 -8 51 -17z m-3482\n            -388 c18 -192 47 -516 66 -720 l34 -370 -39 -39 -38 -39 -7 79 c-4 44 -24 248\n            -45 454 -21 206 -51 505 -66 664 l-28 288 39 36 c35 33 39 34 46 16 4 -10 21\n            -176 38 -369z m-749 -121 c22 -197 80 -721 130 -1164 50 -443 97 -870 106\n            -950 8 -80 22 -201 30 -270 14 -117 14 -125 -2 -137 -24 -18 -34 -16 -34 5 0\n            9 -9 85 -20 167 -18 137 -48 369 -115 890 -14 105 -41 314 -60 465 -20 151\n            -49 376 -65 500 -16 124 -43 336 -60 473 -18 136 -29 257 -26 270 7 27 66 121\n            72 115 2 -3 22 -166 44 -364z m-306 -431 c15 -120 43 -339 62 -488 19 -148 43\n            -333 54 -410 l19 -140 -21 -18 c-12 -10 -24 -14 -28 -10 -4 4 -12 44 -18 88\n            -6 44 -43 301 -83 570 l-71 490 23 68 c12 37 25 67 28 67 4 0 19 -98 35 -217z\n            m5490 131 c14 -14 16 -76 16 -535 l0 -519 -28 0 c-61 0 -60 -15 -64 553 l-3\n            517 32 0 c17 0 39 -7 47 -16z m-2189 -179 c226 -34 423 -97 618 -197 126 -65\n            186 -110 326 -244 208 -199 336 -373 456 -619 175 -358 243 -675 329 -1525 39\n            -381 90 -1072 101 -1355 3 -82 10 -217 16 -300 11 -176 24 -152 -131 -227\n            -215 -104 -422 -176 -695 -243 -334 -82 -550 -108 -880 -109 l-240 -1 2 115\n            c0 63 6 210 12 325 30 557 24 1260 -15 1650 -22 224 -65 496 -89 556 -5 13 18\n            24 117 58 181 63 338 142 362 181 43 74 -34 180 -132 180 -17 0 -68 -18 -115\n            -39 -224 -103 -673 -224 -932 -251 -179 -19 -457 -8 -650 27 -105 19 -293 90\n            -450 171 -181 94 -292 219 -325 367 -18 80 -13 240 10 330 25 99 95 243 159\n            327 285 375 873 700 1476 814 192 36 464 40 670 9z m3085 -31 c36 -15 40 -19\n            40 -53 2 -273 -4 -897 -9 -923 -1 -9 -53 -10 -75 -2 -14 5 -16 59 -16 500 0\n            316 4 494 10 494 5 0 28 -7 50 -16z m437 -549 l36 -15 -7 -828 c-8 -1055 -9\n            -1086 -47 -1177 -62 -149 -59 -179 -53 475 2 327 7 658 9 735 2 77 4 294 5\n            483 0 228 3 342 10 342 6 0 27 -7 47 -15z m-6014 -249 c6 -81 4 -89 -25 -153\n            l-32 -68 -12 100 c-19 160 -19 167 19 191 17 12 35 20 38 18 3 -2 9 -42 12\n            -88z m-618 -603 c9 -82 79 -626 115 -893 54 -413 58 -472 34 -447 -3 3 -26\n            142 -50 309 -156 1078 -155 1071 -142 1079 27 18 36 8 43 -48z m720 -458 c6\n            -25 35 -296 35 -329 0 -28 -36 -54 -52 -38 -5 5 -18 90 -28 188 -11 99 -22\n            202 -25 229 l-6 50 35 -40 c20 -22 38 -49 41 -60z m807 -377 c11 -10 18 -50\n            27 -158 15 -195 17 -180 -24 -180 -42 0 -41 -3 -55 173 -14 179 -14 177 13\n            177 13 0 30 -6 39 -12z m792 -15 c2 -10 7 -70 11 -133 3 -63 12 -205 20 -315\n            28 -404 29 -455 12 -455 -19 0 -21 15 -43 300 -8 118 -23 304 -33 413 -9 109\n            -15 200 -12 202 11 12 40 3 45 -12z m-1880 -192 c6 -9 44 -329 91 -766 14\n            -132 28 -259 31 -283 l5 -43 -25 16 c-19 13 -26 26 -26 49 0 63 -43 478 -76\n            732 -19 144 -34 271 -34 283 0 21 24 29 34 12z m5771 -418 l-7 -418 -25 -37\n            c-57 -84 -54 -100 -51 368 l2 429 37 38 c20 20 40 37 44 37 3 0 3 -188 0 -417z\n            m-925 -663 c5 -581 4 -626 -12 -644 -10 -11 -19 -18 -22 -15 -7 8 -17 1275 -9\n            1282 4 4 14 6 23 5 13 -3 16 -74 20 -628z m-3266 398 c7 -62 32 -359 42 -499\n            6 -94 6 -97 -16 -104 -12 -4 -26 -3 -30 2 -7 7 -29 229 -56 571 l-7 82 31 0\n            c29 0 31 -2 36 -52z m-786 -350 c7 -7 12 -32 12 -57 0 -26 12 -161 25 -301 38\n            -383 41 -435 24 -425 -26 15 -49 38 -44 44 2 4 -2 54 -10 111 -7 58 -16 152\n            -20 210 -4 58 -13 164 -21 235 -19 175 -18 195 4 195 10 0 23 -5 30 -12z m473\n            -673 c3 -22 9 -104 13 -182 7 -150 4 -161 -37 -130 -12 9 -20 47 -32 161 -21\n            206 -22 198 17 194 29 -3 33 -7 39 -43z"], ["d", "M3184 5756 c-104 -45 -112 -186 -14 -236 71 -36 143 -19 180 43 70\n            114 -44 246 -166 193z"], ["d", "M3862 5660 c-96 -59 -96 -201 0 -260 95 -57 218 18 218 132 0 110\n            -126 184 -218 128z"], ["href", "https://github.com/DenoBRComunitty/rxjs", "target", "_blank", 1, "icon"], ["src", "assets/images/github.svg"], [1, "menu-icon", 3, "click"], ["routerLinkActive", "active-link", 3, "click"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_mat_icon_2_Template, 2, 1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_a_click_3_listener() {
            return ctx.go("/index");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_a_6_Template, 2, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "metadata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Created by potrace 1.15, written by Peter Selinger 2001-2017 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigationList);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"]],
      styles: [".mat-sub-black[_ngcontent-%COMP%] {\n  background-color: #0a1014;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9999999;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%] {\n  padding: 0 16px 0 0;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  \n  padding: 20px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: sub;\n  padding-top: 5px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 31.5px;\n  width: 31.5px;\n  vertical-align: sub;\n  padding-top: 5px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  vertical-align: sub;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  padding: 0 0 3px 15px;\n}\n\n@media screen and (min-width: 801px) {\n  .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: initial;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7.5px 16px;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: all 0.15s;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  text-decoration: none;\n  background-color: #1b1b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Rvb2xiYXIvQzpcXHhhbXBwXFxodGRvY3NcXGRlbm9iclxccnhqcy9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBREFRO0VBQ0ksMkJBQUE7RUFBNkIsZUFBQTtFQUM3Qix5QkFBQTtFQUEyQixXQUFBO0VBQ0QsbUJBQUE7RUFDMUIsc0JBQUE7RUFBd0IsNEJBQUE7RUFDeEIscUJBQUE7RUFBdUIsMkJBQUE7RUFDdkIsaUJBQUE7RUFBbUI7MkRBQUE7RUFFbkIsYUFBQTtBQ1FaOztBRFBZO0VBQ0ksZUFBQTtBQ1NoQjs7QURMWTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPaEI7O0FETFk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPaEI7O0FESlE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDTVo7O0FESlE7RUFDSSxxQkFBQTtBQ01aOztBRExZO0VBRko7SUFHUSxnQkFBQTtFQ1FkO0FBQ0Y7O0FEUFk7RUFMSjtJQU1RLGFBQUE7RUNVZDtBQUNGOztBRFRZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDV2hCOztBRFRnQjtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDV3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3ViLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExMDE0O1xufVxuLm1hdC10b29sYmFyIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAubWF0LXRvb2xiYXItcm93IHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMDtcblxuICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYS5pY29uIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxLjVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzEuNXB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAzcHggMTVweDtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDcuNXB4IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNywgMjcsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5tYXQtc3ViLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTAxNDtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyB7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDA7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubWVudS1pY29uIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubWVudS1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgYS5pY29uIHN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyBhLmljb24gaW1nIHtcbiAgaGVpZ2h0OiAzMS41cHg7XG4gIHdpZHRoOiAzMS41cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubG9nbyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn1cbi5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IC5uYXZpZ2F0aW9uIHtcbiAgcGFkZGluZzogMCAwIDNweCAxNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcbiAgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IC5uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyAubmF2aWdhdGlvbiBhIHtcbiAgcGFkZGluZzogNy41cHggMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgLm5hdmlnYXRpb24gYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xufSJdfQ== */"],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rxjs-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.scss'],
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
          type: _toolbar_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"]
        }, {
          type: _progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]
        }, {
          type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
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
  "./src/app/main/services/navigation.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/main/services/navigation.service.ts ***!
    \*****************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppMainServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sidebar.service */
    "./src/app/main/services/sidebar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(sidebarService, router, location) {
        _classCallCheck(this, NavigationService);

        this.sidebarService = sidebarService;
        this.router = router;
        this.location = location;
      }

      _createClass(NavigationService, [{
        key: "navigate",
        value: function navigate(route) {
          this.router.navigate(['/' + route]);
          this.sidebarService.toggleSidebar(false);
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
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
        this.lastToggleValue = false;
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
        value: function toggleSidebar(value) {
          var toggleValue = typeof value !== 'undefined' ? value : !this.toggleValue;

          if (this.toggleValue !== toggleValue) {
            this.toggleValue = toggleValue;
            this.toggleSource.next(this.toggleValue);
          }
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

    console.log("%c\n _____            _  _____\n|  __ \\          | |/ ____|\n| |__) |__  __   | | (___\n|  _  / \\ \\/ /   | |\\___ \\\n| | \\ \\  >  < |__| |____) |\n|_|  \\_\\/_/\\_\\____/|_____/\nA reactive programming library for Deno\n\n", 'font-family:monospace');
    console.log("%c\n     _                  _\n    | |                | |\n  __| | ___ _ __   ___ | |__  _ __\n / _' |/ _ \\ '_ \\ / _ \\| '_ \\| '__|\n| (_| |  __/ | | | (_) | |_) | |\n \\__,_|\\___|_| |_|\\___/|_.__/|_|\n Comunidade DenoBR denobr.com\n\n", 'font-family:monospace');
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