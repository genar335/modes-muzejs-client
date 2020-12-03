webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: compStyle.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: compStyle.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var Arrow = function Arrow() {\n    return __jsx(\"svg\", {\n      width: \"15\",\n      height: \"26\",\n      viewBox: \"0 0 15 26\",\n      fill: \"none\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 5\n      }\n    }, __jsx(\"path\", {\n      d: \"M2 24L13 13L2 2\",\n      stroke: \"#2F4858\",\n      \"stroke-width\": \"3\",\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }\n    }));\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    responsive: responsive,\n    ssr: true,\n    containerClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    itemClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Item,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 27\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 26\n      }\n    }),\n    showDots: true // dotListClass={styles.customDotListStyle}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, props.activeTests.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: iterator,\n      iterator: iterator,\n      colour: \"white\",\n      _id: test._id || \"NA\",\n      active: true,\n      nameInRu: test.ru.name // parentComponentTestFetcher={getTests}\n      // mainTestFetcher={props.updateTheTests}\n      ,\n      updateTests: props.updateTheTests,\n      fetchAllTests: props.fetchAllTests,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 11\n      }\n    });\n  })));\n};\n\n_s(ActiveTests, \"hiS8qxSQ4/p4gtIvOT37RqZ02j0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUFkZFRlc3RDbGljayIsImFsZXJ0IiwicHVzaCIsIkN1c3RvbVJpZ2h0QXJyb3ciLCJvbkNsaWNrIiwicmVzdCIsIm9uTW92ZSIsImNhcm91c2VsU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJkZXZpY2VUeXBlIiwiY29tcFN0eWxlIiwiY2FyUmlnaHRBcnJvdyIsIkFycm93IiwiQ3VzdG9tTGVmdEFycm93IiwiY2FyTGVmdEFycm93Iiwic3R5bGVzIiwiQWN0aXZlVGVzdHNDb250YWluZXIiLCJDYXJvdXNlbCIsIkl0ZW0iLCJhY3RpdmVUZXN0cyIsIm1hcCIsInRlc3QiLCJpdGVyYXRvciIsIl9pZCIsInJ1IiwibmFtZSIsInVwZGF0ZVRoZVRlc3RzIiwiZmV0Y2hBbGxUZXN0cyIsImFkZEFUZXN0IiwiQWRkVGVzdENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUtkO0FBQUE7O0FBQ0osTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxxQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQUZLO0FBR2pCQyxXQUFLLEVBQUU7QUFIVSxLQURGO0FBTWpCQyxXQUFPLEVBQUU7QUFDUEosZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7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aW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBUZXN0Q2FyZCBmcm9tIFwiLi9UZXN0Q2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvQWN0aXZlVGVzdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGJyb3duIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFjdGl2ZVRlc3RzID0gKHByb3BzOiB7XG4gIC8vIGdldEFjdGl2ZVRlc3RzOiAoYWN0aXZlOiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG4gIGFjdGl2ZVRlc3RzOiBJVGVzdFtdO1xuICB1cGRhdGVUaGVUZXN0czogKHRlc3RJRDogc3RyaW5nKSA9PiB2b2lkO1xuICBmZXRjaEFsbFRlc3RzOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufSkgPT4ge1xuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxuICAgICAgaXRlbXM6IDUsXG4gICAgfSxcbiAgICBkZXNrdG9wOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICBpdGVtczogNCxcbiAgICB9LFxuICAgIHRhYmxldDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICBpdGVtczogMixcbiAgICB9LFxuICAgIG1vYmlsZToge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICBpdGVtczogMSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJvdXRlcjogTmV4dFJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRlc3RDbGljayA9ICgpID0+IHtcbiAgICBhbGVydChcIlRlc3QgYWRkaXRpb24gc2hvdWxkIGJlIGhhcHBlbmluZyByaWdodCBhYm91dCBub3cuXCIpO1xuICAgIHJvdXRlci5wdXNoKGAvVE1TL2NyZWF0ZV90ZXN0YCk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tUmlnaHRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgLy8gb25Nb3ZlIG1lYW5zIGlmIGRyYWdnaW5nIG9yIHN3aXBpbmcgaW4gcHJvZ3Jlc3MuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyUmlnaHRBcnJvd30gb25DbGljaz17KCkgPT4gb25DbGljaygpfT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEN1c3RvbUxlZnRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljaygpfSBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJMZWZ0QXJyb3d9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxNVwiXG4gICAgICBoZWlnaHQ9XCIyNlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE1IDI2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMiAyNEwxMyAxM0wyIDJcIlxuICAgICAgICBzdHJva2U9XCIjMkY0ODU4XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BY3RpdmVUZXN0c0NvbnRhaW5lcn0+XG4gICAgICA8aDE+QWN0aXZlIHRlc3RzPC9oMT5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBzc3JcbiAgICAgICAgY29udGFpbmVyQ2xhc3M9e3N0eWxlcy5DYXJvdXNlbH1cbiAgICAgICAgaXRlbUNsYXNzPXtzdHlsZXMuSXRlbX1cbiAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PEN1c3RvbVJpZ2h0QXJyb3cgLz59XG4gICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PEN1c3RvbUxlZnRBcnJvdyAvPn1cbiAgICAgICAgc2hvd0RvdHNcbiAgICAgICAgLy8gZG90TGlzdENsYXNzPXtzdHlsZXMuY3VzdG9tRG90TGlzdFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7Lyoge2FkZEFUZXN0KGhhbmRsZUFkZFRlc3RDbGljayl9ICovfVxuICAgICAgICB7cHJvcHMuYWN0aXZlVGVzdHMubWFwKCh0ZXN0OiBJVGVzdCwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxUZXN0Q2FyZFxuICAgICAgICAgICAga2V5PXtpdGVyYXRvcn1cbiAgICAgICAgICAgIGl0ZXJhdG9yPXtpdGVyYXRvcn1cbiAgICAgICAgICAgIGNvbG91cj1cIndoaXRlXCJcbiAgICAgICAgICAgIF9pZD17dGVzdC5faWQgfHwgXCJOQVwifVxuICAgICAgICAgICAgYWN0aXZlPXt0cnVlfVxuICAgICAgICAgICAgbmFtZUluUnU9e3Rlc3QucnUubmFtZX1cbiAgICAgICAgICAgIC8vIHBhcmVudENvbXBvbmVudFRlc3RGZXRjaGVyPXtnZXRUZXN0c31cbiAgICAgICAgICAgIC8vIG1haW5UZXN0RmV0Y2hlcj17cHJvcHMudXBkYXRlVGhlVGVzdHN9XG4gICAgICAgICAgICB1cGRhdGVUZXN0cz17cHJvcHMudXBkYXRlVGhlVGVzdHN9XG4gICAgICAgICAgICBmZXRjaEFsbFRlc3RzPXtwcm9wcy5mZXRjaEFsbFRlc3RzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVRlc3RzO1xuZnVuY3Rpb24gYWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrOiAoKSA9PiB2b2lkKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17aGFuZGxlQWRkVGVzdENsaWNrfVxuICAgICAgaWQ9XCJBZGRUZXN0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkFkZFRlc3RDYXJkfVxuICAgID5cbiAgICAgIDxzcGFuPis8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})