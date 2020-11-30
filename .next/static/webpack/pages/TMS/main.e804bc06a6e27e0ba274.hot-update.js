webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./pages/TMS/main.tsx":
/*!****************************!*\
  !*** ./pages/TMS/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ActiveTests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ActiveTests */ \"./components/ActiveTests.tsx\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/constants */ \"./components/constants.ts\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Gallery */ \"./components/Gallery.tsx\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/main.module.scss */ \"./pages/styles/main.module.scss\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar main = function main() {\n  _s();\n\n  var getTestsByActive = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(isTestActive) {\n      var _tests;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://localhost:4000/tests/getTest?active=\".concat(isTestActive));\n\n            case 3:\n              _tests = _context.sent;\n              return _context.abrupt(\"return\", _tests.data);\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n              return _context.abrupt(\"return\", []);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function getTestsByActive(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    activeTests: [],\n    inActiveTests: []\n  }),\n      tests = _useState[0],\n      setTests = _useState[1];\n\n  var getAllTests = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var serverResponse, data, tmpactiveTests, tmpinActiveTests;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"\".concat(_components_constants__WEBPACK_IMPORTED_MODULE_5__[\"devURL\"], \"tests/allTests\"));\n\n            case 2:\n              serverResponse = _context2.sent;\n              data = serverResponse.data;\n              console.log(\"Main test fethcer\");\n              tmpactiveTests = [];\n              tmpinActiveTests = [];\n              filterTests(tmpactiveTests, tmpinActiveTests, data);\n              setTests({\n                activeTests: tmpactiveTests,\n                inActiveTests: tmpinActiveTests\n              });\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getAllTests() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var filterTests = function filterTests(activeTests, inActiveTests, arrToFilter) {\n    arrToFilter.forEach(function (test) {\n      if (test.active !== undefined) {\n        test.active ? activeTests.push(test) : inActiveTests.push(test);\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    /* const allTests: any =  */\n    getAllTests();\n  });\n  return __jsx(\"div\", {\n    className: _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(_components_ActiveTests__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    getActiveTests: getTestsByActive,\n    activeTest: tests.activeTests,\n    updateTheTests: getAllTests,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    getInactiveTests: getTestsByActive,\n    testsToRender: tests.inActiveTests,\n    updateTheTest: getAllTests,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(main, \"j9kwJWOsAQKAWHLvlzWHxhG8FD4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL21haW4udHN4P2Q1OWQiXSwibmFtZXMiOlsibWFpbiIsImdldFRlc3RzQnlBY3RpdmUiLCJpc1Rlc3RBY3RpdmUiLCJBeGlvcyIsImdldCIsInRlc3RzIiwiZGF0YSIsImFsZXJ0IiwidXNlU3RhdGUiLCJhY3RpdmVUZXN0cyIsImluQWN0aXZlVGVzdHMiLCJzZXRUZXN0cyIsImdldEFsbFRlc3RzIiwiZGV2VVJMIiwic2VydmVyUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidG1wYWN0aXZlVGVzdHMiLCJ0bXBpbkFjdGl2ZVRlc3RzIiwiZmlsdGVyVGVzdHMiLCJhcnJUb0ZpbHRlciIsImZvckVhY2giLCJ0ZXN0IiwiYWN0aXZlIiwidW5kZWZpbmVkIiwicHVzaCIsInVzZUVmZmVjdCIsInN0eWxlcyIsIk1haW5Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHLGlCQUFPQyxZQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRURDLDRDQUFLLENBQUNDLEdBQU4sc0RBQzRCRixZQUQ1QixFQUZDOztBQUFBO0FBRWZHLG9CQUZlO0FBQUEsK0NBS2RBLE1BQUssQ0FBQ0MsSUFMUTs7QUFBQTtBQUFBO0FBQUE7QUFPckJDLG1CQUFLLGFBQUw7QUFQcUIsK0NBUWQsRUFSYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQk4sZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQURpQixrQkFhU08sc0RBQVEsQ0FHL0I7QUFDREMsZUFBVyxFQUFFLEVBRFo7QUFFREMsaUJBQWEsRUFBRTtBQUZkLEdBSCtCLENBYmpCO0FBQUEsTUFhVkwsS0FiVTtBQUFBLE1BYUhNLFFBYkc7O0FBcUJqQixNQUFNQyxXQUFXO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDV1QsNENBQUssQ0FBQ0MsR0FBTixXQUFhUyw0REFBYixvQkFEWDs7QUFBQTtBQUNaQyw0QkFEWTtBQUVaUixrQkFGWSxHQUVMUSxjQUFjLENBQUNSLElBRlY7QUFHbEJTLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNJQyw0QkFKYyxHQUlpQixFQUpqQjtBQUtkQyw4QkFMYyxHQUttQixFQUxuQjtBQU1sQkMseUJBQVcsQ0FBQ0YsY0FBRCxFQUFpQkMsZ0JBQWpCLEVBQW1DWixJQUFuQyxDQUFYO0FBQ0FLLHNCQUFRLENBQUM7QUFDUEYsMkJBQVcsRUFBRVEsY0FETjtBQUVQUCw2QkFBYSxFQUFFUTtBQUZSLGVBQUQsQ0FBUjs7QUFQa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWE4sV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFhQSxNQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNsQlYsV0FEa0IsRUFFbEJDLGFBRmtCLEVBR2xCVSxXQUhrQixFQUlmO0FBQ0hBLGVBQVcsQ0FBQ0MsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQWlCO0FBQ25DLFVBQUlBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkMsU0FBcEIsRUFBK0I7QUFDN0JGLFlBQUksQ0FBQ0MsTUFBTCxHQUFjZCxXQUFXLENBQUNnQixJQUFaLENBQWlCSCxJQUFqQixDQUFkLEdBQXVDWixhQUFhLENBQUNlLElBQWQsQ0FBbUJILElBQW5CLENBQXZDO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FWRDs7QUFZQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFBNkJkLGVBQVc7QUFDekMsR0FGUSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRWUsK0RBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFDRSxrQkFBYyxFQUFFM0IsZ0JBRGxCO0FBRUUsY0FBVSxFQUFFSSxLQUFLLENBQUNJLFdBRnBCO0FBR0Usa0JBQWMsRUFBRUcsV0FIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQywyREFBRDtBQUNFLG9CQUFnQixFQUFFWCxnQkFEcEI7QUFFRSxpQkFBYSxFQUFFSSxLQUFLLENBQUNLLGFBRnZCO0FBR0UsaUJBQWEsRUFBRUUsV0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREY7QUFjRCxDQWhFRDs7R0FBTVosSTs7QUFrRVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvVE1TL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uLy4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgQWN0aXZlVGVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWN0aXZlVGVzdHNcIjtcbmltcG9ydCB7IGRldlVSTCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnN0YW50c1wiO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR2FsbGVyeVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL21haW4ubW9kdWxlLnNjc3NcIjtcbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IGdldFRlc3RzQnlBY3RpdmUgPSBhc3luYyAoaXNUZXN0QWN0aXZlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdGVzdHMgPSBhd2FpdCBBeGlvcy5nZXQoXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvdGVzdHMvZ2V0VGVzdD9hY3RpdmU9JHtpc1Rlc3RBY3RpdmV9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0ZXN0cy5kYXRhIGFzIElUZXN0W107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3Rlc3RzLCBzZXRUZXN0c10gPSB1c2VTdGF0ZTx7XG4gICAgYWN0aXZlVGVzdHM6IElUZXN0W107XG4gICAgaW5BY3RpdmVUZXN0czogSVRlc3RbXTtcbiAgfT4oe1xuICAgIGFjdGl2ZVRlc3RzOiBbXSxcbiAgICBpbkFjdGl2ZVRlc3RzOiBbXSxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0QWxsVGVzdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQoYCR7ZGV2VVJMfXRlc3RzL2FsbFRlc3RzYCk7XG4gICAgY29uc3QgZGF0YSA9IHNlcnZlclJlc3BvbnNlLmRhdGE7XG4gICAgY29uc29sZS5sb2coXCJNYWluIHRlc3QgZmV0aGNlclwiKTtcbiAgICBsZXQgdG1wYWN0aXZlVGVzdHM6IEFycmF5PElUZXN0PiA9IFtdO1xuICAgIGxldCB0bXBpbkFjdGl2ZVRlc3RzOiBBcnJheTxJVGVzdD4gPSBbXTtcbiAgICBmaWx0ZXJUZXN0cyh0bXBhY3RpdmVUZXN0cywgdG1waW5BY3RpdmVUZXN0cywgZGF0YSk7XG4gICAgc2V0VGVzdHMoe1xuICAgICAgYWN0aXZlVGVzdHM6IHRtcGFjdGl2ZVRlc3RzLFxuICAgICAgaW5BY3RpdmVUZXN0czogdG1waW5BY3RpdmVUZXN0cyxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJUZXN0cyA9IChcbiAgICBhY3RpdmVUZXN0czogSVRlc3RbXSxcbiAgICBpbkFjdGl2ZVRlc3RzOiBJVGVzdFtdLFxuICAgIGFyclRvRmlsdGVyOiBJVGVzdFtdXG4gICkgPT4ge1xuICAgIGFyclRvRmlsdGVyLmZvckVhY2goKHRlc3Q6IElUZXN0KSA9PiB7XG4gICAgICBpZiAodGVzdC5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZXN0LmFjdGl2ZSA/IGFjdGl2ZVRlc3RzLnB1c2godGVzdCkgOiBpbkFjdGl2ZVRlc3RzLnB1c2godGVzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvKiBjb25zdCBhbGxUZXN0czogYW55ID0gICovIGdldEFsbFRlc3RzKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluQ29udGFpbmVyfT5cbiAgICAgIDxBY3RpdmVUZXN0c1xuICAgICAgICBnZXRBY3RpdmVUZXN0cz17Z2V0VGVzdHNCeUFjdGl2ZX1cbiAgICAgICAgYWN0aXZlVGVzdD17dGVzdHMuYWN0aXZlVGVzdHN9XG4gICAgICAgIHVwZGF0ZVRoZVRlc3RzPXtnZXRBbGxUZXN0c31cbiAgICAgIC8+XG4gICAgICA8R2FsbGVyeVxuICAgICAgICBnZXRJbmFjdGl2ZVRlc3RzPXtnZXRUZXN0c0J5QWN0aXZlfVxuICAgICAgICB0ZXN0c1RvUmVuZGVyPXt0ZXN0cy5pbkFjdGl2ZVRlc3RzfVxuICAgICAgICB1cGRhdGVUaGVUZXN0PXtnZXRBbGxUZXN0c31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TMS/main.tsx\n");

/***/ })

})