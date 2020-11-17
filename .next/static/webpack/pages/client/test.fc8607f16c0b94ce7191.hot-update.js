webpackHotUpdate_N_E("pages/client/test",{

/***/ "./pages/client/test.tsx":
/*!*******************************!*\
  !*** ./pages/client/test.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interactjs */ \"./node_modules/interactjs/dist/interact.min.js\");\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/test.module.scss */ \"./pages/styles/test.module.scss\");\n/* harmony import */ var _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_OptionTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/OptionTop */ \"./components/OptionTop.tsx\");\n/* harmony import */ var _components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/OptionBottom */ \"./components/OptionBottom.tsx\");\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/pages/client/test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Test(props) {\n  _s();\n\n  //testing out queries\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      testid = _router$query.testid,\n      lang = _router$query.lang; //API\n\n  /**\n   * if router.query.lang === {lang}\n   * \n   * wrap different returns in conditionals to render the tests within one page\n   * TODO components: \n   * \n   */\n\n  var dropZone = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  interactjs__WEBPACK_IMPORTED_MODULE_2___default()(dropZone.current).dropzone({\n    overlap: 'center'\n  }).accept(document.getElementById(\"answer\"));\n  return __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, __jsx(_components_OptionTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropzoneDiv,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }), __jsx(_components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, __jsx(_components_OptionTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropzoneDiv,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }), __jsx(_components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(_components_OptionTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropzoneDiv,\n    ref: dropZone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }), __jsx(_components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(Test, \"tZlr4JXhLpbgHYj3KlKJXJA/QoY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\n\nvar _c;\n\n$RefreshReg$(_c, \"Test\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L3Rlc3QudHN4P2M1MDEiXSwibmFtZXMiOlsiVGVzdCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ0ZXN0aWQiLCJsYW5nIiwiZHJvcFpvbmUiLCJ1c2VSZWYiLCJpbnRlcmFjdCIsImN1cnJlbnQiLCJkcm9wem9uZSIsIm92ZXJsYXAiLCJhY2NlcHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGVzIiwicGFnZUNvbnRhaW5lciIsIk1NbG9nbyIsInRlc3RDb250YWluZXIiLCJxbmFDb250YWluZXIiLCJkcm9wem9uZURpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUEwQjtBQUFBOztBQUV0QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFIc0Isc0JBSUlELE1BQU0sQ0FBQ0UsS0FKWDtBQUFBLE1BSWRDLE1BSmMsaUJBSWRBLE1BSmM7QUFBQSxNQUlMQyxJQUpLLGlCQUlMQSxJQUpLLEVBS3RCOztBQUVBOzs7Ozs7OztBQVFBLE1BQU1DLFFBQVEsR0FBSUMsb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUFDLG1EQUFRLENBQUNGLFFBQVEsQ0FBQ0csT0FBVixDQUFSLENBQ0tDLFFBREwsQ0FDYztBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQURkLEVBRUtDLE1BRkwsQ0FFWUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBRlo7QUFLQSxTQUNJO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBd0YsT0FBRyxFQUFDLE1BQTVGO0FBQW1HLE1BQUUsRUFBRUQsK0RBQU0sQ0FBQ0UsTUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBTUk7QUFBSyxhQUFTLEVBQUVGLCtEQUFNLENBQUNHLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ0ksWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBTkosRUFXSTtBQUFLLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ0ksWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFdBQXZCO0FBQW9DLE9BQUcsRUFBRWQsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FYSixDQU5KLENBREo7QUEwQkg7O0dBaERRUCxJO1VBR1VHLHFEOzs7S0FIVkgsSTtBQWtETUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jbGllbnQvdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgaW50ZXJhY3QgZnJvbSAnaW50ZXJhY3Rqcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE9wdGlvblRvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9PcHRpb25Ub3BcIjtcbmltcG9ydCBPcHRpb25Cb3R0b20gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvT3B0aW9uQm90dG9tXCI7XG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tIFwiQGludGVyYWN0anMvdHlwZXNcIjtcblxuZnVuY3Rpb24gVGVzdChwcm9wczogYW55KSB7XG5cbiAgICAvL3Rlc3Rpbmcgb3V0IHF1ZXJpZXNcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgdGVzdGlkICwgbGFuZyB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgLy9BUElcblxuICAgIC8qKlxuICAgICAqIGlmIHJvdXRlci5xdWVyeS5sYW5nID09PSB7bGFuZ31cbiAgICAgKiBcbiAgICAgKiB3cmFwIGRpZmZlcmVudCByZXR1cm5zIGluIGNvbmRpdGlvbmFscyB0byByZW5kZXIgdGhlIHRlc3RzIHdpdGhpbiBvbmUgcGFnZVxuICAgICAqIFRPRE8gY29tcG9uZW50czogXG4gICAgICogXG4gICAgICovXG5cbiAgICBjb25zdCBkcm9wWm9uZSA9ICB1c2VSZWYobnVsbClcblxuICAgIGludGVyYWN0KGRyb3Bab25lLmN1cnJlbnQgYXMgdW5rbm93biBhcyBUYXJnZXQpXG4gICAgICAgIC5kcm9wem9uZSh7IG92ZXJsYXA6ICdjZW50ZXInIH0pXG4gICAgICAgIC5hY2NlcHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXJcIikpXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZmFzaGlvbm11c2V1bXJpZ2EubHYvYml0cml4L3RlbXBsYXRlcy9tYWluX3RlbXBsYXRlL2ltZy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiBpZD17c3R5bGVzLk1NbG9nb30+PC9pbWc+XG4gICAgICAgICAgICB7Lyo8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnRlc3QgaWQ6IHt0ZXN0aWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnTEk3N0IGxhbmd1YWdlOiB7bGFuZ308L3A+XG4gICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVzdENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xbmFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uVG9wIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmVEaXZ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQm90dG9tIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xbmFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uVG9wIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmVEaXZ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQm90dG9tIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xbmFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uVG9wIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmVEaXZ9IHJlZj17ZHJvcFpvbmV9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQm90dG9tIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/client/test.tsx\n");

/***/ })

})