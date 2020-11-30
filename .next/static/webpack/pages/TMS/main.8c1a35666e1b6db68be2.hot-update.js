webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./pages/TMS/main.tsx":
/*!****************************!*\
  !*** ./pages/TMS/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ActiveTests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ActiveTests */ \"./components/ActiveTests.tsx\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/constants */ \"./components/constants.ts\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Gallery */ \"./components/Gallery.tsx\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/main.module.scss */ \"./pages/styles/main.module.scss\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar main = function main() {\n  _s();\n\n  var getTestsByActive = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(isTestActive) {\n      var tests;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://localhost:4000/tests/getTest?active=\".concat(isTestActive));\n\n            case 3:\n              tests = _context.sent;\n              return _context.abrupt(\"return\", tests.data);\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n              return _context.abrupt(\"return\", []);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function getTestsByActive(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getAllTests = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"\".concat(_components_constants__WEBPACK_IMPORTED_MODULE_5__[\"devURL\"], \"tests/allTests\"));\n\n            case 2:\n              _context2.next = 4;\n              return _context2.sent.data;\n\n            case 4:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getAllTests() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var allTests = getAllTests();\n    console.log(allTests.then(function (value) {\n      return console.log(value);\n    }));\n    var activeTests;\n    var inActiveTests;\n  }, []);\n\n  var toggleTestActiveState = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              try {} catch (error) {\n                console.error(error);\n              }\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function toggleTestActiveState() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    className: _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_components_ActiveTests__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    getActiveTests: getTestsByActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    getInactiveTests: getTestsByActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(main, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL21haW4udHN4P2Q1OWQiXSwibmFtZXMiOlsibWFpbiIsImdldFRlc3RzQnlBY3RpdmUiLCJpc1Rlc3RBY3RpdmUiLCJBeGlvcyIsImdldCIsInRlc3RzIiwiZGF0YSIsImFsZXJ0IiwiZ2V0QWxsVGVzdHMiLCJkZXZVUkwiLCJ1c2VFZmZlY3QiLCJhbGxUZXN0cyIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwidmFsdWUiLCJhY3RpdmVUZXN0cyIsImluQWN0aXZlVGVzdHMiLCJ0b2dnbGVUZXN0QWN0aXZlU3RhdGUiLCJlcnJvciIsInN0eWxlcyIsIk1haW5Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHLGlCQUFPQyxZQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFREMsNENBQUssQ0FBQ0MsR0FBTixzREFDNEJGLFlBRDVCLEVBRkM7O0FBQUE7QUFFZkcsbUJBRmU7QUFBQSwrQ0FLZEEsS0FBSyxDQUFDQyxJQUxROztBQUFBO0FBQUE7QUFBQTtBQU9yQkMsbUJBQUssYUFBTDtBQVBxQiwrQ0FRZCxFQVJjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCTixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBWUEsTUFBTU8sV0FBVztBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNFTCw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFLLDREQUFiLG9CQURGOztBQUFBO0FBQUE7QUFBQSxvQ0FDd0NILElBRHhDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEUsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFJQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHSCxXQUFXLEVBQTVCO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQVQsQ0FBYyxVQUFDQyxLQUFEO0FBQUEsYUFBZ0JILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaLENBQWhCO0FBQUEsS0FBZCxDQUFaO0FBQ0EsUUFBSUMsV0FBSjtBQUNBLFFBQUlDLGFBQUo7QUFFRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU1DLHFCQUFxQjtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUIsa0JBQUksQ0FDSCxDQURELENBQ0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RQLHVCQUFPLENBQUNPLEtBQVIsQ0FBY0EsS0FBZDtBQUNEOztBQUoyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFyQkQscUJBQXFCO0FBQUE7QUFBQTtBQUFBLEtBQTNCOztBQU9BLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLCtEQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWEsa0JBQWMsRUFBRXBCLGdCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJEQUFEO0FBQVMsb0JBQWdCLEVBQUVBLGdCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBdENEOztHQUFNRCxJOztBQXdDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UTVMvbWFpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi8uLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IEFjdGl2ZVRlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FjdGl2ZVRlc3RzXCI7XG5pbXBvcnQgeyBkZXZVUkwgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb25zdGFudHNcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dhbGxlcnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9tYWluLm1vZHVsZS5zY3NzXCI7XG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBnZXRUZXN0c0J5QWN0aXZlID0gYXN5bmMgKGlzVGVzdEFjdGl2ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRlc3RzID0gYXdhaXQgQXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL2dldFRlc3Q/YWN0aXZlPSR7aXNUZXN0QWN0aXZlfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGVzdHMuZGF0YSBhcyBJVGVzdFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEFsbFRlc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCAoYXdhaXQgQXhpb3MuZ2V0KGAke2RldlVSTH10ZXN0cy9hbGxUZXN0c2ApKS5kYXRhO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYWxsVGVzdHMgPSBnZXRBbGxUZXN0cygpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRlc3RzLnRoZW4oKHZhbHVlOiBhbnkpID0+IGNvbnNvbGUubG9nKHZhbHVlKSkpO1xuICAgIGxldCBhY3RpdmVUZXN0czogQXJyYXk8SVRlc3Q+O1xuICAgIGxldCBpbkFjdGl2ZVRlc3RzOiBBcnJheTxJVGVzdD47XG4gICAgXG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVUZXN0QWN0aXZlU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluQ29udGFpbmVyfT5cbiAgICAgIDxBY3RpdmVUZXN0cyBnZXRBY3RpdmVUZXN0cz17Z2V0VGVzdHNCeUFjdGl2ZX0gLz5cbiAgICAgIDxHYWxsZXJ5IGdldEluYWN0aXZlVGVzdHM9e2dldFRlc3RzQnlBY3RpdmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TMS/main.tsx\n");

/***/ })

})