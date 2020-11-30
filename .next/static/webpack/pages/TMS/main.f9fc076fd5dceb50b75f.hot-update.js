webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var createTestToRender = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return props.getActiveTests(false);\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createTestToRender() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      recievedTests = _useState[0],\n      setRecievedTests = _useState[1];\n\n  var getTests = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var fetchedTests;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return props.getActiveTests(true);\n\n            case 2:\n              fetchedTests = _context2.sent;\n              setRecievedTests(fetchedTests);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getTests() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getTests();\n    console.log(recievedTests);\n  }, []);\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    responsive: responsive,\n    ssr: true,\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Carousel,\n    showDots: true,\n    dotListClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.customDotListStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick), recievedTests ? recievedTests.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      iterator: iterator,\n      colour: \"white\",\n      _id: test._id || \"NA\",\n      active: test.active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 15\n      }\n    });\n  }) : null));\n};\n\n_s(ActiveTests, \"cfAO/ozkAQSD5lF6L1aBPYXeeMk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwiY3JlYXRlVGVzdFRvUmVuZGVyIiwiZ2V0QWN0aXZlVGVzdHMiLCJ1c2VTdGF0ZSIsInJlY2lldmVkVGVzdHMiLCJzZXRSZWNpZXZlZFRlc3RzIiwiZ2V0VGVzdHMiLCJmZXRjaGVkVGVzdHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUFkZFRlc3RDbGljayIsImFsZXJ0IiwicHVzaCIsInN0eWxlcyIsIkFjdGl2ZVRlc3RzQ29udGFpbmVyIiwiQ2Fyb3VzZWwiLCJjdXN0b21Eb3RMaXN0U3R5bGUiLCJhZGRBVGVzdCIsIm1hcCIsInRlc3QiLCJpdGVyYXRvciIsIl9pZCIsImFjdGl2ZSIsIkFkZFRlc3RDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUtBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFFZDtBQUFBOztBQUNKLE1BQU1DLGtCQUFrQjtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaRCxLQUFLLENBQUNFLGNBQU4sQ0FBcUIsS0FBckIsQ0FEWTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWxCRCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBREksa0JBS3NDRSxzREFBUSxFQUw5QztBQUFBLE1BS0dDLGFBTEg7QUFBQSxNQUtrQkMsZ0JBTGxCOztBQU1KLE1B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QUxGLENBREY7QUFTRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWN0aXZlVGVzdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBUZXN0Q2FyZCBmcm9tIFwiLi9UZXN0Q2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvQWN0aXZlVGVzdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGJyb3duIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFjdGl2ZVRlc3RzID0gKHByb3BzOiB7XG4gIGdldEFjdGl2ZVRlc3RzOiAoYWN0aXZlOiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG59KSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRlc3RUb1JlbmRlciA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgcHJvcHMuZ2V0QWN0aXZlVGVzdHMoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IFtyZWNpZXZlZFRlc3RzLCBzZXRSZWNpZXZlZFRlc3RzXSA9IHVzZVN0YXRlPElUZXN0W10+KCk7XG4gIGNvbnN0IGdldFRlc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIHRyeSB7XG4gICAgLy8gICBjb25zdCByVGVzdHMgPSBhd2FpdCBBeGlvcy5nZXQoXG4gICAgLy8gICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvdGVzdHMvZ2V0VGVzdD9hY3RpdmU9JHtmYWxzZX1gXG4gICAgLy8gICApO1xuICAgIC8vICAgY29uc29sZS5sb2coclRlc3RzLmRhdGEpO1xuICAgIC8vICAgc2V0UmVjaWV2ZWRUZXN0cyhyVGVzdHMuZGF0YSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGFsZXJ0KGVycm9yKTtcbiAgICAvLyB9XG4gICAgY29uc3QgZmV0Y2hlZFRlc3RzOiBJVGVzdFtdID0gYXdhaXQgcHJvcHMuZ2V0QWN0aXZlVGVzdHModHJ1ZSk7XG4gICAgc2V0UmVjaWV2ZWRUZXN0cyhmZXRjaGVkVGVzdHMpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRlc3RzKCk7XG4gICAgY29uc29sZS5sb2cocmVjaWV2ZWRUZXN0cyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxuICAgICAgaXRlbXM6IDUsXG4gICAgfSxcbiAgICBkZXNrdG9wOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICBpdGVtczogNCxcbiAgICB9LFxuICAgIHRhYmxldDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICBpdGVtczogMixcbiAgICB9LFxuICAgIG1vYmlsZToge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICBpdGVtczogMSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJvdXRlcjogTmV4dFJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRlc3RDbGljayA9ICgpID0+IHtcbiAgICBhbGVydChcIlRlc3QgYWRkaXRpb24gc2hvdWxkIGJlIGhhcHBlbmluZyByaWdodCBhYm91dCBub3cuXCIpO1xuICAgIHJvdXRlci5wdXNoKGAvVE1TL2NyZWF0ZV90ZXN0YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFjdGl2ZVRlc3RzQ29udGFpbmVyfT5cbiAgICAgIDxoMT5BY3RpdmUgdGVzdHM8L2gxPlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIHNzcj17dHJ1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWx9XG4gICAgICAgIHNob3dEb3RzPXt0cnVlfVxuICAgICAgICBkb3RMaXN0Q2xhc3M9e3N0eWxlcy5jdXN0b21Eb3RMaXN0U3R5bGV9XG4gICAgICA+XG4gICAgICAgIHthZGRBVGVzdChoYW5kbGVBZGRUZXN0Q2xpY2spfVxuICAgICAgICB7cmVjaWV2ZWRUZXN0c1xuICAgICAgICAgID8gcmVjaWV2ZWRUZXN0cy5tYXAoKHRlc3Q6IElUZXN0LCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXN0Q2FyZFxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yPXtpdGVyYXRvcn1cbiAgICAgICAgICAgICAgICBjb2xvdXI9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgX2lkPXt0ZXN0Ll9pZCB8fCBcIk5BXCJ9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXt0ZXN0LmFjdGl2ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVRlc3RzO1xuZnVuY3Rpb24gYWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrOiAoKSA9PiB2b2lkKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17aGFuZGxlQWRkVGVzdENsaWNrfVxuICAgICAgaWQ9XCJBZGRUZXN0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkFkZFRlc3RDYXJkfVxuICAgID5cbiAgICAgIDxzcGFuPis8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})