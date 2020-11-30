webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    responsive: responsive,\n    ssr: true,\n    containerClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Carousel,\n    showDots: true // dotListClass={styles.customDotListStyle}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick), props.activeTests ? props.activeTests.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: iterator,\n      iterator: iterator,\n      colour: \"white\",\n      _id: test._id || \"NA\",\n      active: test.active,\n      nameInRu: test.ru.name // parentComponentTestFetcher={getTests}\n      // mainTestFetcher={props.updateTheTests}\n      ,\n      updateTests: props.updateTheTests,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 15\n      }\n    });\n  }) : null));\n};\n\n_s(ActiveTests, \"hiS8qxSQ4/p4gtIvOT37RqZ02j0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUFkZFRlc3RDbGljayIsImFsZXJ0IiwicHVzaCIsInN0eWxlcyIsIkFjdGl2ZVRlc3RzQ29udGFpbmVyIiwiQ2Fyb3VzZWwiLCJhZGRBVGVzdCIsImFjdGl2ZVRlc3RzIiwibWFwIiwidGVzdCIsIml0ZXJhdG9yIiwiX2lkIiwiYWN0aXZlIiwicnUiLCJuYW1lIiwidXBkYXRlVGhlVGVzdHMiLCJBZGRUZXN0Q2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBSWQ7QUFBQTs7QUFDSixNQUFNQyxVQUFVLEdBQUc7QUFDakJDLHFCQUFpQixFQUFFO0FBQ2pCO0FBQ0FDLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRks7QUFHakJDLFdBQUssRUFBRTtBQUhVLEtBREY7QUFNakJDLFdBQU8sRUFBRTtBQUNQSixnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQURMO0FBRVBDLFdBQUssRUFBRTtBQUZBLEtBTlE7QUFVakJFLFVBQU0sRUFBRTtBQUNOTCxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQUROO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBVlM7QUFjakJHLFVBQU0sRUFBRTtBQUNOTixnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxHQUFQO0FBQVlDLFdBQUcsRUFBRTtBQUFqQixPQUROO0FBRU5DLFdBQUssRUFBRTtBQUZEO0FBZFMsR0FBbkI7QUFvQkEsTUFBTUksTUFBa0IsR0FBR0MsNkRBQVMsRUFBcEM7O0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CQyxTQUFLLENBQUMsb0RBQUQsQ0FBTDtBQUNBSCxVQUFNLENBQUNJLElBQVA7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHNFQUFNLENBQUNDLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsMkRBQUQ7QUFDRSxjQUFVLEVBQUVmLFVBRGQ7QUFFRSxPQUFHLE1BRkw7QUFHRSxrQkFBYyxFQUFFYyxzRUFBTSxDQUFDRSxRQUh6QjtBQUlFLFlBQVEsTUFKVixDQUtFO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HQyxRQUFRLENBQUNOLGtCQUFELENBUFgsRUFRR1osS0FBSyxDQUFDbUIsV0FBTixHQUNHbkIsS0FBSyxDQUFDbUIsV0FBTixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFjQyxRQUFkO0FBQUEsV0FDcEIsTUFBQyxpREFBRDtBQUNFLFNBQUcsRUFBRUEsUUFEUDtBQUVFLGNBQVEsRUFBRUEsUUFGWjtBQUdFLFlBQU0sRUFBQyxPQUhUO0FBSUUsU0FBRyxFQUFFRCxJQUFJLENBQUNFLEdBQUwsSUFBWSxJQUpuQjtBQUtFLFlBQU0sRUFBRUYsSUFBSSxDQUFDRyxNQUxmO0FBTUUsY0FBUSxFQUFFSCxJQUFJLENBQUNJLEVBQUwsQ0FBUUMsSUFOcEIsQ0FPRTtBQUNBO0FBUkY7QUFTRSxpQkFBVyxFQUFFMUIsS0FBSyxDQUFDMkIsY0FUckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURvQjtBQUFBLEdBQXRCLENBREgsR0FjRyxJQXRCTixDQUZGLENBREY7QUE2QkQsQ0E3REQ7O0dBQU01QixXO1VBeUJ1QlkscUQ7OztLQXpCdkJaLFc7QUErRFNBLDBFQUFmOztBQUNBLFNBQVNtQixRQUFULENBQWtCTixrQkFBbEIsRUFBa0Q7QUFDaEQsU0FDRTtBQUNFLFdBQU8sRUFBRUEsa0JBRFg7QUFFRSxNQUFFLEVBQUMsU0FGTDtBQUdFLGFBQVMsRUFBRUcsc0VBQU0sQ0FBQ2EsV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRixDQURGO0FBU0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjdGl2ZVRlc3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgVGVzdENhcmQgZnJvbSBcIi4vVGVzdENhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0FjdGl2ZVRlc3RzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBicm93biB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBY3RpdmVUZXN0cyA9IChwcm9wczoge1xuICAvLyBnZXRBY3RpdmVUZXN0czogKGFjdGl2ZTogYm9vbGVhbikgPT4gUHJvbWlzZTxhbnk+O1xuICBhY3RpdmVUZXN0czogSVRlc3RbXTtcbiAgdXBkYXRlVGhlVGVzdHM6ICh0ZXN0SUQ6IHN0cmluZykgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgIGl0ZW1zOiA1LFxuICAgIH0sXG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDQsXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDIsXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDEsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVBZGRUZXN0Q2xpY2sgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUZXN0IGFkZGl0aW9uIHNob3VsZCBiZSBoYXBwZW5pbmcgcmlnaHQgYWJvdXQgbm93LlwiKTtcbiAgICByb3V0ZXIucHVzaChgL1RNUy9jcmVhdGVfdGVzdGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BY3RpdmVUZXN0c0NvbnRhaW5lcn0+XG4gICAgICA8aDE+QWN0aXZlIHRlc3RzPC9oMT5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBzc3JcbiAgICAgICAgY29udGFpbmVyQ2xhc3M9e3N0eWxlcy5DYXJvdXNlbH1cbiAgICAgICAgc2hvd0RvdHNcbiAgICAgICAgLy8gZG90TGlzdENsYXNzPXtzdHlsZXMuY3VzdG9tRG90TGlzdFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7YWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrKX1cbiAgICAgICAge3Byb3BzLmFjdGl2ZVRlc3RzXG4gICAgICAgICAgPyBwcm9wcy5hY3RpdmVUZXN0cy5tYXAoKHRlc3Q6IElUZXN0LCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXN0Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aXRlcmF0b3J9XG4gICAgICAgICAgICAgICAgaXRlcmF0b3I9e2l0ZXJhdG9yfVxuICAgICAgICAgICAgICAgIGNvbG91cj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBfaWQ9e3Rlc3QuX2lkIHx8IFwiTkFcIn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Rlc3QuYWN0aXZlfVxuICAgICAgICAgICAgICAgIG5hbWVJblJ1PXt0ZXN0LnJ1Lm5hbWV9XG4gICAgICAgICAgICAgICAgLy8gcGFyZW50Q29tcG9uZW50VGVzdEZldGNoZXI9e2dldFRlc3RzfVxuICAgICAgICAgICAgICAgIC8vIG1haW5UZXN0RmV0Y2hlcj17cHJvcHMudXBkYXRlVGhlVGVzdHN9XG4gICAgICAgICAgICAgICAgdXBkYXRlVGVzdHM9e3Byb3BzLnVwZGF0ZVRoZVRlc3RzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlVGVzdHM7XG5mdW5jdGlvbiBhZGRBVGVzdChoYW5kbGVBZGRUZXN0Q2xpY2s6ICgpID0+IHZvaWQpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUZXN0Q2xpY2t9XG4gICAgICBpZD1cIkFkZFRlc3RcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQWRkVGVzdENhcmR9XG4gICAgPlxuICAgICAgPHNwYW4+Kzwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})