webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./pages/TMS/main.tsx":
/*!****************************!*\
  !*** ./pages/TMS/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ActiveTests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ActiveTests */ \"./components/ActiveTests.tsx\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Gallery */ \"./components/Gallery.tsx\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/main.module.scss */ \"./pages/styles/main.module.scss\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nvar main = function main() {\n  _s();\n\n  var getTestsByActive = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(isTestActive) {\n      var tests;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://localhost:4000/tests/getTest?active=\".concat(isTestActive));\n\n            case 2:\n              tests = _context.sent;\n              console.log(tests);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getTestsByActive(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    getTestsByActive(false);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MainContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(_components_ActiveTests__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(main, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL21haW4udHN4P2Q1OWQiXSwibmFtZXMiOlsibWFpbiIsImdldFRlc3RzQnlBY3RpdmUiLCJpc1Rlc3RBY3RpdmUiLCJBeGlvcyIsImdldCIsInRlc3RzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInN0eWxlcyIsIk1haW5Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHLGlCQUFPQyxZQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0hDLDRDQUFLLENBQUNDLEdBQU4sc0RBQzRCRixZQUQ1QixFQURHOztBQUFBO0FBQ2pCRyxtQkFEaUI7QUFJdkJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFKdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFPQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2RQLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRVEsK0RBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBbEJEOztHQUFNVixJOztBQW9CU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UTVMvbWFpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWN0aXZlVGVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWN0aXZlVGVzdHNcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dhbGxlcnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9tYWluLm1vZHVsZS5zY3NzXCI7XG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBnZXRUZXN0c0J5QWN0aXZlID0gYXN5bmMgKGlzVGVzdEFjdGl2ZTogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHRlc3RzID0gYXdhaXQgQXhpb3MuZ2V0KFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC90ZXN0cy9nZXRUZXN0P2FjdGl2ZT0ke2lzVGVzdEFjdGl2ZX1gXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyh0ZXN0cyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUZXN0c0J5QWN0aXZlKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluQ29udGFpbmVyfT5cbiAgICAgIDxBY3RpdmVUZXN0cyAvPlxuICAgICAgPEdhbGxlcnkgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TMS/main.tsx\n");

/***/ })

})