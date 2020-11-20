webpackHotUpdate_N_E("pages/client/success",{

/***/ "./pages/client/success.tsx":
/*!**********************************!*\
  !*** ./pages/client/success.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_success_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/success.module.scss */ \"./pages/styles/success.module.scss\");\n/* harmony import */ var _styles_success_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_success_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/EmailForm */ \"./components/EmailForm.tsx\");\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/pages/client/success.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Success() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isVisible = _useState[0],\n      setIsVisible = _useState[1];\n\n  var openModal = function openModal() {\n    setIsVisible(true);\n  };\n\n  var toggleModalVisibility = function toggleModalVisibility(newValue) {\n    setIsVisible(newValue);\n    console.log(isVisible);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_success_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_success_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/client/languages\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Done\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: openModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, \"Share Your Results\"), __jsx(_components_EmailForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: isVisible,\n    showHideModal: toggleModalVisibility,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(Success, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n\n_c = Success;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Success);\n\nvar _c;\n\n$RefreshReg$(_c, \"Success\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L3N1Y2Nlc3MudHN4PzdhMTgiXSwibmFtZXMiOlsiU3VjY2VzcyIsInVzZVN0YXRlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwib3Blbk1vZGFsIiwidG9nZ2xlTW9kYWxWaXNpYmlsaXR5IiwibmV3VmFsdWUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicGFnZUNvbnRhaW5lciIsIk1NbG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUVlQyxzREFBUSxDQUFDLEtBQUQsQ0FGdkI7QUFBQSxNQUVaQyxTQUZZO0FBQUEsTUFFREMsWUFGQzs7QUFJbkIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsUUFBRCxFQUFtQjtBQUM3Q0gsZ0JBQVksQ0FBQ0csUUFBRCxDQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBQ0gsR0FIRDs7QUFLSSxTQUNJO0FBQUssYUFBUyxFQUFFTyxrRUFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBd0YsT0FBRyxFQUFDLE1BQTVGO0FBQW1HLE1BQUUsRUFBRUQsa0VBQU0sQ0FBQ0UsTUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFHSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRVAsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFISixFQUlJLE1BQUMsNkRBQUQ7QUFDSSxRQUFJLEVBQUVGLFNBRFY7QUFFSSxpQkFBYSxFQUFFRyxxQkFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREo7QUFXSDs7R0F4QlFMLE87O0tBQUFBLE87QUEwQk1BLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2xpZW50L3N1Y2Nlc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N1Y2Nlc3MubW9kdWxlLnNjc3NcIlxuaW1wb3J0IEVtYWlsRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FbWFpbEZvcm1cIlxuXG5mdW5jdGlvbiBTdWNjZXNzKCkge1xuXG5jb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKHRydWUpO1xufVxuXG5jb25zdCB0b2dnbGVNb2RhbFZpc2liaWxpdHkgPSAobmV3VmFsdWU6IGFueSkgPT4ge1xuICAgIHNldElzVmlzaWJsZShuZXdWYWx1ZSk7XG4gICAgY29uc29sZS5sb2coaXNWaXNpYmxlKTtcbn1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZmFzaGlvbm11c2V1bXJpZ2EubHYvYml0cml4L3RlbXBsYXRlcy9tYWluX3RlbXBsYXRlL2ltZy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiBpZD17c3R5bGVzLk1NbG9nb30vPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jbGllbnQvbGFuZ3VhZ2VzXCI+RG9uZTwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Nb2RhbH0+U2hhcmUgWW91ciBSZXN1bHRzPC9idXR0b24+XG4gICAgICAgICAgICA8RW1haWxGb3JtIFxuICAgICAgICAgICAgICAgIHNob3c9e2lzVmlzaWJsZX1cbiAgICAgICAgICAgICAgICBzaG93SGlkZU1vZGFsPXt0b2dnbGVNb2RhbFZpc2liaWxpdHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/client/success.tsx\n");

/***/ })

})