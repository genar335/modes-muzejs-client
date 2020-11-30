webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./pages/TMS/main.tsx":
/*!****************************!*\
  !*** ./pages/TMS/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ActiveTests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ActiveTests */ \"./components/ActiveTests.tsx\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/constants */ \"./components/constants.ts\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Gallery */ \"./components/Gallery.tsx\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/main.module.scss */ \"./pages/styles/main.module.scss\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\nvar main = function main() {\n  _s();\n\n  var getTestsByActive = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(isTestActive) {\n      var _tests;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"http://localhost:4000/tests/getTest?active=\".concat(isTestActive));\n\n            case 3:\n              _tests = _context.sent;\n              return _context.abrupt(\"return\", _tests.data);\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n              return _context.abrupt(\"return\", []);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function getTestsByActive(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    activeTests: [],\n    inActiveTests: []\n  }),\n      tests = _useState[0],\n      setTests = _useState[1];\n\n  var getAllTests = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var serverResponse, data, tmpactiveTests, tmpinActiveTests;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(_components_constants__WEBPACK_IMPORTED_MODULE_6__[\"devURL\"], \"tests/allTests\"));\n\n            case 2:\n              serverResponse = _context2.sent;\n              data = serverResponse.data;\n              console.log(\"Main test fethcer\");\n              tmpactiveTests = [];\n              tmpinActiveTests = [];\n              filterTests(tmpactiveTests, tmpinActiveTests, data);\n              setTests({\n                activeTests: tmpactiveTests,\n                inActiveTests: tmpinActiveTests\n              });\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getAllTests() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var filterTests = function filterTests(activeTests, inActiveTests, arrToFilter) {\n    arrToFilter.forEach(function (test) {\n      if (test.active !== undefined) {\n        test.active ? activeTests.push(test) : inActiveTests.push(test);\n      }\n    });\n  };\n\n  var toggleTest = function toggleTest(testID, isActive) {\n    console.log(\"toggling test\", isActive);\n    var tmpActive = tests.activeTests;\n    var tmpInactive = tests.inActiveTests;\n    var combinedTests = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tests.activeTests), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tests.inActiveTests)); // console.log(combinedTests, \"before changing the toggle\");\n\n    if (isActive) {\n      tmpActive.map(function (test) {\n        if (test._id !== testID) return test;else {\n          tmpInactive.push(test);\n        }\n      });\n    } else {\n      tmpInactive.map(function (test) {\n        if (test._id !== testID) return test;else {\n          tmpActive.push(test);\n        }\n      });\n    } // combinedTests.forEach((test: ITest) => {\n    //   if (test._id === testID) {\n    //     console.log(\"Match\", test._id);\n    //     if (combinedTests.indexOf(test) < tmpActive.length) {\n    //       tmpActive.splice(tmpActive.indexOf(test), 1);\n    //       tmpInactive.push(test);\n    //     } else {\n    //       tmpInactive.splice(tmpInactive.indexOf(test), 1);\n    //       tmpActive.push(test);\n    //     }\n    //   }\n    // });\n    // console.log(\"after changing toggle\", combinedTests);\n\n\n    setTests({\n      activeTests: tmpActive,\n      inActiveTests: tmpInactive\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    getAllTests();\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.MainContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(_components_ActiveTests__WEBPACK_IMPORTED_MODULE_5__[\"default\"] // getActiveTests={getTestsByActive}\n  , {\n    activeTests: tests,\n    updateTheTests: toggleTest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_7__[\"default\"] // getInactiveTests={getTestsByActive}\n  , {\n    testsToRender: tests,\n    updateTheTests: toggleTest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(main, \"j9kwJWOsAQKAWHLvlzWHxhG8FD4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL21haW4udHN4P2Q1OWQiXSwibmFtZXMiOlsibWFpbiIsImdldFRlc3RzQnlBY3RpdmUiLCJpc1Rlc3RBY3RpdmUiLCJBeGlvcyIsImdldCIsInRlc3RzIiwiZGF0YSIsImFsZXJ0IiwidXNlU3RhdGUiLCJhY3RpdmVUZXN0cyIsImluQWN0aXZlVGVzdHMiLCJzZXRUZXN0cyIsImdldEFsbFRlc3RzIiwiZGV2VVJMIiwic2VydmVyUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidG1wYWN0aXZlVGVzdHMiLCJ0bXBpbkFjdGl2ZVRlc3RzIiwiZmlsdGVyVGVzdHMiLCJhcnJUb0ZpbHRlciIsImZvckVhY2giLCJ0ZXN0IiwiYWN0aXZlIiwidW5kZWZpbmVkIiwicHVzaCIsInRvZ2dsZVRlc3QiLCJ0ZXN0SUQiLCJpc0FjdGl2ZSIsInRtcEFjdGl2ZSIsInRtcEluYWN0aXZlIiwiY29tYmluZWRUZXN0cyIsIm1hcCIsIl9pZCIsInVzZUVmZmVjdCIsInN0eWxlcyIsIk1haW5Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUcsaUJBQU9DLFlBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFREMsNENBQUssQ0FBQ0MsR0FBTixzREFDNEJGLFlBRDVCLEVBRkM7O0FBQUE7QUFFZkcsb0JBRmU7QUFBQSwrQ0FLZEEsTUFBSyxDQUFDQyxJQUxROztBQUFBO0FBQUE7QUFBQTtBQU9yQkMsbUJBQUssYUFBTDtBQVBxQiwrQ0FRZCxFQVJjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCTixnQkFBZ0I7QUFBQTtBQUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFELENBQ0U7QUFERjtBQUVFLGVBQVcsRUFBRS9CLEtBRmY7QUFHRSxrQkFBYyxFQUFFcUIsVUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQywyREFBRCxDQUNFO0FBREY7QUFFRSxpQkFBYSxFQUFFckIsS0FGakI7QUFHRSxrQkFBYyxFQUFFcUIsVUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREY7QUFjRCxDQXRHRDs7R0FBTTFCLEk7O0FBd0dTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9tYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi8uLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IEFjdGl2ZVRlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FjdGl2ZVRlc3RzXCI7XG5pbXBvcnQgeyBkZXZVUkwgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb25zdGFudHNcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dhbGxlcnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9tYWluLm1vZHVsZS5zY3NzXCI7XG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBnZXRUZXN0c0J5QWN0aXZlID0gYXN5bmMgKGlzVGVzdEFjdGl2ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRlc3RzID0gYXdhaXQgQXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL2dldFRlc3Q/YWN0aXZlPSR7aXNUZXN0QWN0aXZlfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGVzdHMuZGF0YSBhcyBJVGVzdFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFt0ZXN0cywgc2V0VGVzdHNdID0gdXNlU3RhdGU8e1xuICAgIGFjdGl2ZVRlc3RzOiBJVGVzdFtdO1xuICAgIGluQWN0aXZlVGVzdHM6IElUZXN0W107XG4gIH0+KHtcbiAgICBhY3RpdmVUZXN0czogW10sXG4gICAgaW5BY3RpdmVUZXN0czogW10sXG4gIH0pO1xuXG4gIGNvbnN0IGdldEFsbFRlc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgQXhpb3MuZ2V0KGAke2RldlVSTH10ZXN0cy9hbGxUZXN0c2ApO1xuICAgIGNvbnN0IGRhdGEgPSBzZXJ2ZXJSZXNwb25zZS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKFwiTWFpbiB0ZXN0IGZldGhjZXJcIik7XG4gICAgbGV0IHRtcGFjdGl2ZVRlc3RzOiBBcnJheTxJVGVzdD4gPSBbXTtcbiAgICBsZXQgdG1waW5BY3RpdmVUZXN0czogQXJyYXk8SVRlc3Q+ID0gW107XG4gICAgZmlsdGVyVGVzdHModG1wYWN0aXZlVGVzdHMsIHRtcGluQWN0aXZlVGVzdHMsIGRhdGEpO1xuICAgIHNldFRlc3RzKHtcbiAgICAgIGFjdGl2ZVRlc3RzOiB0bXBhY3RpdmVUZXN0cyxcbiAgICAgIGluQWN0aXZlVGVzdHM6IHRtcGluQWN0aXZlVGVzdHMsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyVGVzdHMgPSAoXG4gICAgYWN0aXZlVGVzdHM6IElUZXN0W10sXG4gICAgaW5BY3RpdmVUZXN0czogSVRlc3RbXSxcbiAgICBhcnJUb0ZpbHRlcjogSVRlc3RbXVxuICApID0+IHtcbiAgICBhcnJUb0ZpbHRlci5mb3JFYWNoKCh0ZXN0OiBJVGVzdCkgPT4ge1xuICAgICAgaWYgKHRlc3QuYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVzdC5hY3RpdmUgPyBhY3RpdmVUZXN0cy5wdXNoKHRlc3QpIDogaW5BY3RpdmVUZXN0cy5wdXNoKHRlc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVRlc3QgPSAodGVzdElEOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ0b2dnbGluZyB0ZXN0XCIsIGlzQWN0aXZlKTtcbiAgICBsZXQgdG1wQWN0aXZlID0gdGVzdHMuYWN0aXZlVGVzdHM7XG4gICAgbGV0IHRtcEluYWN0aXZlID0gdGVzdHMuaW5BY3RpdmVUZXN0cztcbiAgICBsZXQgY29tYmluZWRUZXN0cyA9IFsuLi50ZXN0cy5hY3RpdmVUZXN0cywgLi4udGVzdHMuaW5BY3RpdmVUZXN0c107XG4gICAgLy8gY29uc29sZS5sb2coY29tYmluZWRUZXN0cywgXCJiZWZvcmUgY2hhbmdpbmcgdGhlIHRvZ2dsZVwiKTtcbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHRtcEFjdGl2ZS5tYXAoKHRlc3Q6IElUZXN0KSA9PiB7XG4gICAgICAgIGlmICh0ZXN0Ll9pZCAhPT0gdGVzdElEKSByZXR1cm4gdGVzdFxuICAgICAgICBlbHNlIHt0bXBJbmFjdGl2ZS5wdXNoKHRlc3QpfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wSW5hY3RpdmUubWFwKCh0ZXN0OiBJVGVzdCkgPT4ge1xuICAgICAgICBpZiAodGVzdC5faWQgIT09IHRlc3RJRCkgcmV0dXJuIHRlc3RcbiAgICAgICAgZWxzZSB7dG1wQWN0aXZlLnB1c2godGVzdCl9XG4gICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIC8vIGNvbWJpbmVkVGVzdHMuZm9yRWFjaCgodGVzdDogSVRlc3QpID0+IHtcbiAgICAvLyAgIGlmICh0ZXN0Ll9pZCA9PT0gdGVzdElEKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTWF0Y2hcIiwgdGVzdC5faWQpO1xuICAgIC8vICAgICBpZiAoY29tYmluZWRUZXN0cy5pbmRleE9mKHRlc3QpIDwgdG1wQWN0aXZlLmxlbmd0aCkge1xuICAgIC8vICAgICAgIHRtcEFjdGl2ZS5zcGxpY2UodG1wQWN0aXZlLmluZGV4T2YodGVzdCksIDEpO1xuICAgIC8vICAgICAgIHRtcEluYWN0aXZlLnB1c2godGVzdCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdG1wSW5hY3RpdmUuc3BsaWNlKHRtcEluYWN0aXZlLmluZGV4T2YodGVzdCksIDEpO1xuICAgIC8vICAgICAgIHRtcEFjdGl2ZS5wdXNoKHRlc3QpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJhZnRlciBjaGFuZ2luZyB0b2dnbGVcIiwgY29tYmluZWRUZXN0cyk7XG4gICAgc2V0VGVzdHMoe1xuICAgICAgYWN0aXZlVGVzdHM6IHRtcEFjdGl2ZSxcbiAgICAgIGluQWN0aXZlVGVzdHM6IHRtcEluYWN0aXZlLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWxsVGVzdHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluQ29udGFpbmVyfT5cbiAgICAgIDxBY3RpdmVUZXN0c1xuICAgICAgICAvLyBnZXRBY3RpdmVUZXN0cz17Z2V0VGVzdHNCeUFjdGl2ZX1cbiAgICAgICAgYWN0aXZlVGVzdHM9e3Rlc3RzfVxuICAgICAgICB1cGRhdGVUaGVUZXN0cz17dG9nZ2xlVGVzdH1cbiAgICAgIC8+XG4gICAgICA8R2FsbGVyeVxuICAgICAgICAvLyBnZXRJbmFjdGl2ZVRlc3RzPXtnZXRUZXN0c0J5QWN0aXZlfVxuICAgICAgICB0ZXN0c1RvUmVuZGVyPXt0ZXN0c31cbiAgICAgICAgdXBkYXRlVGhlVGVzdHM9e3RvZ2dsZVRlc3R9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/main.tsx\n");

/***/ })

})