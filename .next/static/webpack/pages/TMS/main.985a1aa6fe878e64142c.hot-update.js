webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var createTestToRender = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return props.getActiveTests(false);\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createTestToRender() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var getTest = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return props.getActiveTests(false);\n\n              case 2:\n                return _context2.abrupt(\"return\", _context2.sent);\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getTest() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    console.log(getTest);\n  });\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    responsive: responsive,\n    ssr: true,\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    showDots: true,\n    dotListClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.customDotListStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick)));\n};\n\n_s(ActiveTests, \"WCe6dn85KDdWF7vxTiFmfhbXhdY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwiY3JlYXRlVGVzdFRvUmVuZGVyIiwiZ2V0QWN0aXZlVGVzdHMiLCJ1c2VFZmZlY3QiLCJnZXRUZXN0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNpdmUiLCJzdXBlckxhcmdlRGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVBZGRUZXN0Q2xpY2siLCJhbGVydCIsInB1c2giLCJzdHlsZXMiLCJBY3RpdmVUZXN0c0NvbnRhaW5lciIsIkNhcm91c2VsIiwiY3VzdG9tRG90TGlzdFN0eWxlIiwiYWRkQVRlc3QiLCJBZGRUZXN0Q2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBRWQ7QUFBQTs7QUFDSixNQUFNQyxrQkFBa0I7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWkQsS0FBSyxDQUFDRSxjQUFOLENBQXFCLEtBQXJCLENBRFk7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFsQkQsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEtBQXhCOztBQUlBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxPQUFPO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWtCSixLQUFLLENBQUNFLGNBQU4sQ0FBcUIsS0FBckIsQ0FBbEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQRSxPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQWI7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0QsR0FIUSxDQUFUO0FBS0EsTUFBTUcsVUFBVSxHQUFHO0FBQ2pCQyxxQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQUZLO0FBR2pCQyxXQUFLLEVBQUU7QUFIVSxLQURGO0FBTWpCQyxXQUFPLEVBQUU7QUFDUEosZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETDtBQUVQQyxXQUFLLEVBQUU7QUFGQSxLQU5RO0FBVWpCRSxVQUFNLEVBQUU7QUFDTkwsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETjtBQUVOQyxXQUFLLEVBQUU7QUFGRCxLQVZTO0FBY2pCRyxVQUFNLEVBQUU7QUFDTk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FETjtBQUVOQyxXQUFLLEVBQUU7QUFGRDtBQWRTLEdBQW5CO0FBb0JBLE1BQU1JLE1BQWtCLEdBQUdDLDZEQUFTLEVBQXBDOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQkMsU0FBSyxDQUFDLG9EQUFELENBQUw7QUFDQUgsVUFBTSxDQUFDSSxJQUFQO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLDJEQUFEO0FBQ0UsY0FBVSxFQUFFZixVQURkO0FBRUUsT0FBRyxFQUFFLElBRlA7QUFHRSxhQUFTLEVBQUVjLHNFQUFNLENBQUNFLFFBSHBCO0FBSUUsWUFBUSxFQUFFLElBSlo7QUFLRSxnQkFBWSxFQUFFRixzRUFBTSxDQUFDRyxrQkFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HQyxRQUFRLENBQUNQLGtCQUFELENBUFgsQ0FGRixDQURGO0FBY0QsQ0FyREQ7O0dBQU1uQixXO1VBZ0N1QmtCLHFEOzs7S0FoQ3ZCbEIsVztBQXVEU0EsMEVBQWY7O0FBQ0EsU0FBUzBCLFFBQVQsQ0FBa0JQLGtCQUFsQixFQUFrRDtBQUNoRCxTQUNFO0FBQ0UsV0FBTyxFQUFFQSxrQkFEWDtBQUVFLE1BQUUsRUFBQyxTQUZMO0FBR0UsYUFBUyxFQUFFRyxzRUFBTSxDQUFDSyxXQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLENBREY7QUFTRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWN0aXZlVGVzdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFRlc3RDYXJkIGZyb20gXCIuL1Rlc3RDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9BY3RpdmVUZXN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgYnJvd24gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcblxuY29uc3QgQWN0aXZlVGVzdHMgPSAocHJvcHM6IHtcbiAgZ2V0QWN0aXZlVGVzdHM6IChhY3RpdmU6IGJvb2xlYW4pID0+IFByb21pc2U8YW55Pjtcbn0pID0+IHtcbiAgY29uc3QgY3JlYXRlVGVzdFRvUmVuZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBwcm9wcy5nZXRBY3RpdmVUZXN0cyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRUZXN0ID0gYXN5bmMgKCkgPT4gYXdhaXQgcHJvcHMuZ2V0QWN0aXZlVGVzdHMoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKGdldFRlc3QpO1xuICB9KTtcblxuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxuICAgICAgaXRlbXM6IDUsXG4gICAgfSxcbiAgICBkZXNrdG9wOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICBpdGVtczogNCxcbiAgICB9LFxuICAgIHRhYmxldDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICBpdGVtczogMixcbiAgICB9LFxuICAgIG1vYmlsZToge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICBpdGVtczogMSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJvdXRlcjogTmV4dFJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRlc3RDbGljayA9ICgpID0+IHtcbiAgICBhbGVydChcIlRlc3QgYWRkaXRpb24gc2hvdWxkIGJlIGhhcHBlbmluZyByaWdodCBhYm91dCBub3cuXCIpO1xuICAgIHJvdXRlci5wdXNoKGAvVE1TL2NyZWF0ZV90ZXN0YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFjdGl2ZVRlc3RzQ29udGFpbmVyfT5cbiAgICAgIDxoMT5BY3RpdmUgdGVzdHM8L2gxPlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIHNzcj17dHJ1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWx9XG4gICAgICAgIHNob3dEb3RzPXt0cnVlfVxuICAgICAgICBkb3RMaXN0Q2xhc3M9e3N0eWxlcy5jdXN0b21Eb3RMaXN0U3R5bGV9XG4gICAgICA+XG4gICAgICAgIHthZGRBVGVzdChoYW5kbGVBZGRUZXN0Q2xpY2spfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVRlc3RzO1xuZnVuY3Rpb24gYWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrOiAoKSA9PiB2b2lkKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17aGFuZGxlQWRkVGVzdENsaWNrfVxuICAgICAgaWQ9XCJBZGRUZXN0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkFkZFRlc3RDYXJkfVxuICAgID5cbiAgICAgIDxzcGFuPis8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})