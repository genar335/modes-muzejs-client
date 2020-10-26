webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(props.currentPages).keys()));\n\n    if (didMountRef.current) {\n      console.log(\"component mounted\");\n    } else {\n      console.log(\"componenet updated\");\n    }\n  }, [props.currentPages]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {});\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    containerClass: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Carousel,\n    itemClass: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Item,\n    responsive: responsive,\n    showDots: true,\n    ssr: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Page,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, page + 1));\n  })));\n};\n\n_s(PagesController, \"U9bT/WsDdA59AS98jJq4W07yTTI=\");\n\n_c = PagesController;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nvar _c;\n\n$RefreshReg$(_c, \"PagesController\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwidXNlU3RhdGUiLCJBcnJheSIsImN1cnJlbnRQYWdlcyIsImtleXMiLCJwYWdlc0Ftb3VudCIsInNldFBhZ2VzQW1vdW50IiwidXNlRWZmZWN0IiwiZGlkTW91bnRSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVzZVJlZiIsImNvbXBTdHlsZSIsIkJHQ29udGFpbmVyIiwiQ2Fyb3VzZWwiLCJJdGVtIiwibWFwIiwicGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQXFDO0FBQUE7O0FBQzNELE1BQU1DLFVBQVUsR0FBRztBQUNqQkMscUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FGSztBQUdqQkMsV0FBSyxFQUFFO0FBSFUsS0FERjtBQU1qQkMsV0FBTyxFQUFFO0FBQ1BKLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BREw7QUFFUEMsV0FBSyxFQUFFO0FBRkEsS0FOUTtBQVVqQkUsVUFBTSxFQUFFO0FBQ05MLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRE47QUFFTkMsV0FBSyxFQUFFO0FBRkQsS0FWUztBQWNqQkcsVUFBTSxFQUFFO0FBQ05OLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLEdBQVA7QUFBWUMsV0FBRyxFQUFFO0FBQWpCLE9BRE47QUFFTkMsV0FBSyxFQUFFO0FBRkQ7QUFkUyxHQUFuQjs7QUFEMkQsa0JBcUJyQkksc0RBQVEsOEZBQ3pDQyxLQUFLLENBQUNYLEtBQUssQ0FBQ1ksWUFBUCxDQUFMLENBQTBCQyxJQUExQixFQUR5QyxFQXJCYTtBQUFBLE1BcUJwREMsV0FyQm9EO0FBQUEsTUFxQnZDQyxjQXJCdUM7O0FBeUIzREMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGtCQUFjLENBQUMsNkZBQUlKLEtBQUssQ0FBQ1gsS0FBSyxDQUFDWSxZQUFQLENBQUwsQ0FBMEJDLElBQTFCLEVBQUwsRUFBZDs7QUFDQSxRQUFJSSxXQUFXLENBQUNDLE9BQWhCLEVBQXlCO0FBQ3ZCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNELEtBRkQsTUFFTztBQUNMRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUNwQixLQUFLLENBQUNZLFlBQVAsQ0FQTSxDQUFUO0FBU0FJLHlEQUFTLENBQUMsWUFBTSxDQUFFLENBQVQsQ0FBVDtBQUVBLE1BQU1DLFdBQVcsR0FBR0ksb0RBQU0sRUFBMUI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFQywwRUFBUyxDQUFDQyxXQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLGtCQUFjLEVBQUVELDBFQUFTLENBQUNFLFFBRDVCO0FBRUUsYUFBUyxFQUFFRiwwRUFBUyxDQUFDRyxJQUZ2QjtBQUdFLGNBQVUsRUFBRXhCLFVBSGQ7QUFJRSxZQUFRLE1BSlY7QUFLRSxPQUFHLE1BTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HYSxXQUFXLENBQUNZLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLFdBQ0U7QUFBSyxlQUFTLEVBQUVMLDBFQUFTLENBQUNNLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9ELElBQUksR0FBRyxDQUFkLENBREYsQ0FERjtBQUtELEdBTkEsQ0FQSCxDQURGLENBREY7QUFtQkQsQ0F6REQ7O0dBQU01QixlOztLQUFBQSxlO0FBMkRTQSw4RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZXNDb250cm9sbGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL1BhZ2VzQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQYWdlc0NvbnRyb2xsZXIgPSAocHJvcHM6IHsgY3VycmVudFBhZ2VzOiBudW1iZXIgfSkgPT4ge1xuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxuICAgICAgaXRlbXM6IDUsXG4gICAgfSxcbiAgICBkZXNrdG9wOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICBpdGVtczogMyxcbiAgICB9LFxuICAgIHRhYmxldDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICBpdGVtczogMixcbiAgICB9LFxuICAgIG1vYmlsZToge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICBpdGVtczogMSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFtwYWdlc0Ftb3VudCwgc2V0UGFnZXNBbW91bnRdID0gdXNlU3RhdGU8QXJyYXk8bnVtYmVyPj4oW1xuICAgIC4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzQW1vdW50KFsuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKV0pO1xuICAgIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBtb3VudGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVuZXQgdXBkYXRlZFwiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5jdXJyZW50UGFnZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xuXG4gIGNvbnN0IGRpZE1vdW50UmVmID0gdXNlUmVmKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkJHQ29udGFpbmVyfT5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBjb250YWluZXJDbGFzcz17Y29tcFN0eWxlLkNhcm91c2VsfVxuICAgICAgICBpdGVtQ2xhc3M9e2NvbXBTdHlsZS5JdGVtfVxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBzaG93RG90c1xuICAgICAgICBzc3JcbiAgICAgID5cbiAgICAgICAge3BhZ2VzQW1vdW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLlBhZ2V9PlxuICAgICAgICAgICAgICA8c3Bhbj57cGFnZSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250cm9sbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})