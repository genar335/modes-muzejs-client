webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var createTestToRender = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return props.getActiveTests(false);\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createTestToRender() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      recievedTests = _useState[0],\n      setRecievedTests = _useState[1];\n\n  var getTests = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var fetchedTests;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return props.getActiveTests(true);\n\n            case 2:\n              fetchedTests = _context2.sent;\n              setRecievedTests(fetchedTests);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getTests() {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // useEffect(() => {\n  //   getTests();\n  //   console.log(recievedTests);\n  // }, []);\n\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    responsive: responsive,\n    ssr: true,\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Carousel,\n    showDots: true,\n    dotListClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.customDotListStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick),\n  /* recievedTests */\n  props.activeTest ?\n  /* recievedTests */\n  props.activeTest.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      iterator: iterator,\n      colour: \"white\",\n      _id: test._id || \"NA\",\n      active: test.active,\n      parentComponentTestFetcher: getTests,\n      mainTestFetcher: props.updateTheTests,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 19\n      }\n    });\n  }) : null));\n};\n\n_s(ActiveTests, \"zA8ibd8pAAQB3JwYa6MAte0ghMo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwiY3JlYXRlVGVzdFRvUmVuZGVyIiwiZ2V0QWN0aXZlVGVzdHMiLCJ1c2VTdGF0ZSIsInJlY2lldmVkVGVzdHMiLCJzZXRSZWNpZXZlZFRlc3RzIiwiZ2V0VGVzdHMiLCJmZXRjaGVkVGVzdHMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQWRkVGVzdENsaWNrIiwiYWxlcnQiLCJwdXNoIiwic3R5bGVzIiwiQWN0aXZlVGVzdHNDb250YWluZXIiLCJDYXJvdXNlbCIsImN1c3RvbURvdExpc3RTdHlsZSIsImFkZEFUZXN0IiwiYWN0aXZlVGVzdCIsIm1hcCIsInRlc3QiLCJpdGVyYXRvciIsIl9pZCIsImFjdGl2ZSIsInVwZGF0ZVRoZVRlc3RzIiwiQWRkVGVzdENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUlkO0FBQUE7O0FBQ0osTUFBTUMsa0JBQWtCO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1pELEtBQUssQ0FBQ0UsY0FBTixDQUFxQixLQUFyQixDQURZOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEJELGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFESSxrQkFLc0NFLHNEQUFRLEVBTDlDO0FBQUEsTUFLR0MsYUFMSDtBQUFBLE1BS2tCQyxnQkFMbEI7O0FBTUos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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLENBREY7QUFTRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWN0aXZlVGVzdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBUZXN0Q2FyZCBmcm9tIFwiLi9UZXN0Q2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvQWN0aXZlVGVzdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGJyb3duIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFjdGl2ZVRlc3RzID0gKHByb3BzOiB7XG4gIGdldEFjdGl2ZVRlc3RzOiAoYWN0aXZlOiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG4gIGFjdGl2ZVRlc3Q6IElUZXN0W107XG4gIHVwZGF0ZVRoZVRlc3RzOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufSkgPT4ge1xuICBjb25zdCBjcmVhdGVUZXN0VG9SZW5kZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHByb3BzLmdldEFjdGl2ZVRlc3RzKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBbcmVjaWV2ZWRUZXN0cywgc2V0UmVjaWV2ZWRUZXN0c10gPSB1c2VTdGF0ZTxJVGVzdFtdPigpO1xuICBjb25zdCBnZXRUZXN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyB0cnkge1xuICAgIC8vICAgY29uc3QgclRlc3RzID0gYXdhaXQgQXhpb3MuZ2V0KFxuICAgIC8vICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL2dldFRlc3Q/YWN0aXZlPSR7ZmFsc2V9YFxuICAgIC8vICAgKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJUZXN0cy5kYXRhKTtcbiAgICAvLyAgIHNldFJlY2lldmVkVGVzdHMoclRlc3RzLmRhdGEpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBhbGVydChlcnJvcik7XG4gICAgLy8gfVxuICAgIGNvbnN0IGZldGNoZWRUZXN0czogSVRlc3RbXSA9IGF3YWl0IHByb3BzLmdldEFjdGl2ZVRlc3RzKHRydWUpO1xuICAgIHNldFJlY2lldmVkVGVzdHMoZmV0Y2hlZFRlc3RzKTtcbiAgfTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRUZXN0cygpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlY2lldmVkVGVzdHMpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgIGl0ZW1zOiA1LFxuICAgIH0sXG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDQsXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDIsXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDEsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVBZGRUZXN0Q2xpY2sgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUZXN0IGFkZGl0aW9uIHNob3VsZCBiZSBoYXBwZW5pbmcgcmlnaHQgYWJvdXQgbm93LlwiKTtcbiAgICByb3V0ZXIucHVzaChgL1RNUy9jcmVhdGVfdGVzdGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BY3RpdmVUZXN0c0NvbnRhaW5lcn0+XG4gICAgICA8aDE+QWN0aXZlIHRlc3RzPC9oMT5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBzc3I9e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsfVxuICAgICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgICAgZG90TGlzdENsYXNzPXtzdHlsZXMuY3VzdG9tRG90TGlzdFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7YWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrKX1cbiAgICAgICAge1xuICAgICAgICAgIC8qIHJlY2lldmVkVGVzdHMgKi8gcHJvcHMuYWN0aXZlVGVzdFxuICAgICAgICAgICAgPyAvKiByZWNpZXZlZFRlc3RzICovIHByb3BzLmFjdGl2ZVRlc3QubWFwKFxuICAgICAgICAgICAgICAgICh0ZXN0OiBJVGVzdCwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRlc3RDYXJkXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yPXtpdGVyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3Rlc3QuX2lkIHx8IFwiTkFcIn1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0ZXN0LmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50VGVzdEZldGNoZXI9e2dldFRlc3RzfVxuICAgICAgICAgICAgICAgICAgICBtYWluVGVzdEZldGNoZXI9e3Byb3BzLnVwZGF0ZVRoZVRlc3RzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlVGVzdHM7XG5mdW5jdGlvbiBhZGRBVGVzdChoYW5kbGVBZGRUZXN0Q2xpY2s6ICgpID0+IHZvaWQpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUZXN0Q2xpY2t9XG4gICAgICBpZD1cIkFkZFRlc3RcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQWRkVGVzdENhcmR9XG4gICAgPlxuICAgICAgPHNwYW4+Kzwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})