webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    responsive: responsive,\n    ssr: true,\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Carousel,\n    showDots: true,\n    dotListClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.customDotListStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick),\n  /* recievedTests */\n  props.activeTest ?\n  /* recievedTests */\n  props.activeTest.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      iterator: iterator,\n      colour: \"white\",\n      _id: test._id || \"NA\",\n      active: test.active,\n      parentComponentTestFetcher: getTests,\n      mainTestFetcher: props.updateTheTests,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 19\n      }\n    });\n  }) : null));\n};\n\n_s(ActiveTests, \"hiS8qxSQ4/p4gtIvOT37RqZ02j0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUFkZFRlc3RDbGljayIsImFsZXJ0IiwicHVzaCIsInN0eWxlcyIsIkFjdGl2ZVRlc3RzQ29udGFpbmVyIiwiQ2Fyb3VzZWwiLCJjdXN0b21Eb3RMaXN0U3R5bGUiLCJhZGRBVGVzdCIsImFjdGl2ZVRlc3QiLCJtYXAiLCJ0ZXN0IiwiaXRlcmF0b3IiLCJfaWQiLCJhY3RpdmUiLCJnZXRUZXN0cyIsInVwZGF0ZVRoZVRlc3RzIiwiQWRkVGVzdENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUlkO0FBQUE7O0FBQ0osTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxxQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQUZLO0FBR2pCQyxXQUFLLEVBQUU7QUFIVSxLQURGO0FBTWpCQyxXQUFPLEVBQUU7QUFDUEosZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETDtBQUVQQyxXQUFLLEVBQUU7QUFGQSxLQU5RO0FBVWpCRSxVQUFNLEVBQUU7QUFDTkwsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETjtBQUVOQyxXQUFLLEVBQUU7QUFGRCxLQVZTO0FBY2pCRyxVQUFNLEVBQUU7QUFDTk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FETjtBQUVOQyxXQUFLLEVBQUU7QUFGRDtBQWRTLEdBQW5CO0FBb0JBLE1BQU1JLE1BQWtCLEdBQUdDLDZEQUFTLEVBQXBDOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQkMsU0FBSyxDQUFDLG9EQUFELENBQUw7QUFDQUgsVUFBTSxDQUFDSSxJQUFQO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLDJEQUFEO0FBQ0UsY0FBVSxFQUFFZixVQURkO0FBRUUsT0FBRyxFQUFFLElBRlA7QUFHRSxhQUFTLEVBQUVjLHNFQUFNLENBQUNFLFFBSHBCO0FBSUUsWUFBUSxFQUFFLElBSlo7QUFLRSxnQkFBWSxFQUFFRixzRUFBTSxDQUFDRyxrQkFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HQyxRQUFRLENBQUNQLGtCQUFELENBUFg7QUFTSTtBQUFvQlosT0FBSyxDQUFDb0IsVUFBTjtBQUNoQjtBQUFvQnBCLE9BQUssQ0FBQ29CLFVBQU4sQ0FBaUJDLEdBQWpCLENBQ2xCLFVBQUNDLElBQUQsRUFBY0MsUUFBZDtBQUFBLFdBQ0UsTUFBQyxpREFBRDtBQUNFLGNBQVEsRUFBRUEsUUFEWjtBQUVFLFlBQU0sRUFBQyxPQUZUO0FBR0UsU0FBRyxFQUFFRCxJQUFJLENBQUNFLEdBQUwsSUFBWSxJQUhuQjtBQUlFLFlBQU0sRUFBRUYsSUFBSSxDQUFDRyxNQUpmO0FBS0UsZ0NBQTBCLEVBQUVDLFFBTDlCO0FBTUUscUJBQWUsRUFBRTFCLEtBQUssQ0FBQzJCLGNBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUFBLEdBRGtCLENBREosR0FhaEIsSUF0QlIsQ0FGRixDQURGO0FBOEJELENBOUREOztHQUFNNUIsVztVQXlCdUJZLHFEOzs7S0F6QnZCWixXO0FBZ0VTQSwwRUFBZjs7QUFDQSxTQUFTb0IsUUFBVCxDQUFrQlAsa0JBQWxCLEVBQWtEO0FBQ2hELFNBQ0U7QUFDRSxXQUFPLEVBQUVBLGtCQURYO0FBRUUsTUFBRSxFQUFDLFNBRkw7QUFHRSxhQUFTLEVBQUVHLHNFQUFNLENBQUNhLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEYsQ0FERjtBQVNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFRlc3RDYXJkIGZyb20gXCIuL1Rlc3RDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9BY3RpdmVUZXN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgYnJvd24gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQWN0aXZlVGVzdHMgPSAocHJvcHM6IHtcbiAgZ2V0QWN0aXZlVGVzdHM6IChhY3RpdmU6IGJvb2xlYW4pID0+IFByb21pc2U8YW55PjtcbiAgYWN0aXZlVGVzdDogSVRlc3RbXTtcbiAgLy8gdXBkYXRlVGhlVGVzdHM6ICgpID0+IFByb21pc2U8dm9pZD47XG59KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgICBpdGVtczogNSxcbiAgICB9LFxuICAgIGRlc2t0b3A6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgIGl0ZW1zOiA0LFxuICAgIH0sXG4gICAgdGFibGV0OiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcbiAgICAgIGl0ZW1zOiAyLFxuICAgIH0sXG4gICAgbW9iaWxlOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgIGl0ZW1zOiAxLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgcm91dGVyOiBOZXh0Um91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVGVzdENsaWNrID0gKCkgPT4ge1xuICAgIGFsZXJ0KFwiVGVzdCBhZGRpdGlvbiBzaG91bGQgYmUgaGFwcGVuaW5nIHJpZ2h0IGFib3V0IG5vdy5cIik7XG4gICAgcm91dGVyLnB1c2goYC9UTVMvY3JlYXRlX3Rlc3RgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWN0aXZlVGVzdHNDb250YWluZXJ9PlxuICAgICAgPGgxPkFjdGl2ZSB0ZXN0czwvaDE+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgc3NyPXt0cnVlfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbH1cbiAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgIGRvdExpc3RDbGFzcz17c3R5bGVzLmN1c3RvbURvdExpc3RTdHlsZX1cbiAgICAgID5cbiAgICAgICAge2FkZEFUZXN0KGhhbmRsZUFkZFRlc3RDbGljayl9XG4gICAgICAgIHtcbiAgICAgICAgICAvKiByZWNpZXZlZFRlc3RzICovIHByb3BzLmFjdGl2ZVRlc3RcbiAgICAgICAgICAgID8gLyogcmVjaWV2ZWRUZXN0cyAqLyBwcm9wcy5hY3RpdmVUZXN0Lm1hcChcbiAgICAgICAgICAgICAgICAodGVzdDogSVRlc3QsIGl0ZXJhdG9yOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUZXN0Q2FyZFxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcj17aXRlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgIGNvbG91cj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgX2lkPXt0ZXN0Ll9pZCB8fCBcIk5BXCJ9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGVzdC5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbXBvbmVudFRlc3RGZXRjaGVyPXtnZXRUZXN0c31cbiAgICAgICAgICAgICAgICAgICAgbWFpblRlc3RGZXRjaGVyPXtwcm9wcy51cGRhdGVUaGVUZXN0c31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVRlc3RzO1xuZnVuY3Rpb24gYWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrOiAoKSA9PiB2b2lkKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17aGFuZGxlQWRkVGVzdENsaWNrfVxuICAgICAgaWQ9XCJBZGRUZXN0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkFkZFRlc3RDYXJkfVxuICAgID5cbiAgICAgIDxzcGFuPis8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})