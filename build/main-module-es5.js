function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-module"], {
  /***/
  "./src/app/main/pages/main.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/main/pages/main.module.ts ***!
    \*******************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppMainPagesMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/index/index.component */
    "./src/app/main/pages/main/index/index.component.ts");
    /* harmony import */


    var _components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/toolbar/toolbar.module */
    "./src/app/main/components/toolbar/toolbar.module.ts");
    /* harmony import */


    var _main_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/not-found/not-found.component */
    "./src/app/main/pages/main/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var routes = [{
      path: '',
      children: [{
        path: '',
        component: _main_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
      }]
    }, {
      path: 'index',
      children: [{
        path: '',
        component: _main_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
      }]
    }, {
      path: '404',
      children: [{
        path: '',
        component: _main_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }]
    }];

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainModule
    });
    MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainModule_Factory(t) {
        return new (t || MainModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__["ToolbarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, {
        declarations: [_main_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _main_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__["ToolbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _main_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__["ToolbarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/pages/main/index/index.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/pages/main/index/index.component.ts ***!
    \**********************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppMainPagesMainIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IndexComponent = function IndexComponent() {
      _classCallCheck(this, IndexComponent);

      this.title = 'RxJS Deno';
    };

    IndexComponent.ɵfac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)();
    };

    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 1,
      vars: 0,
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "index");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFnZXMvbWFpbi9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-index',
          templateUrl: './index.component.html',
          styleUrls: ['./index.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/pages/main/not-found/not-found.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main/pages/main/not-found/not-found.component.ts ***!
    \******************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppMainPagesMainNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 7,
      vars: 0,
      consts: [["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column wrap", "fxLayoutAlign.lt-md", "space-around center", "fxLayoutAlign.gt-sm", "space-evenly center", 1, "not-found"], ["src", "assets/images/logo.svg", "width", "300", "height", "300"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We're sorry. The page you are looking for cannot be found.We're sorry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]],
      styles: [".not-found[_ngcontent-%COMP%] {\n  margin-left: 30vh;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 600;\n  color: #d81b60;\n  text-transform: uppercase;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wYWdlcy9tYWluL25vdC1mb3VuZC9DOlxceGFtcHBcXGh0ZG9jc1xcZGVub2JyXFxyeGpzL3NyY1xcYXBwXFxtYWluXFxwYWdlc1xcbWFpblxcbm90LWZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcGFnZXMvbWFpbi9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFnZXMvbWFpbi9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzB2aDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNkODFiNjA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxufSIsIi5ub3QtZm91bmQge1xuICBtYXJnaW4tbGVmdDogMzB2aDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZDgxYjYwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDhweCAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=main-module-es5.js.map