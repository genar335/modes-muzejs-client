webpackHotUpdate_N_E("pages/client/test",{

/***/ "./components/OptionBottom.tsx":
/*!*************************************!*\
  !*** ./components/OptionBottom.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ \"./node_modules/interactjs/dist/interact.min.js\");\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GAssets/tests/BottomFrame.svg */ \"./GAssets/tests/BottomFrame.svg\");\n/* harmony import */ var _GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/OptionBottom.module.scss */ \"./components/styles/OptionBottom.module.scss\");\n/* harmony import */ var _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/OptionBottom.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar OptionBottom = function OptionBottom(props) {\n  _s();\n\n  var draggable = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  if (draggable.current) {\n    interactjs__WEBPACK_IMPORTED_MODULE_1___default()(draggable.current).draggable({\n      onmove: function onmove(event) {\n        console.log('qweqwe');\n        var target = event.target;\n        var dataX = target.getAttribute('data-x');\n        var dataY = target.getAttribute('data-y');\n        var initialX = parseFloat(dataX) || 0;\n        var initialY = parseFloat(dataY) || 0;\n        var deltaX = event.dx;\n        var deltaY = event.dy;\n        var newX = initialX + deltaX;\n        var newY = initialY + deltaY;\n        target.style.transform = \"translate(\".concat(newX, \"px, \").concat(newY, \"px)\");\n        target.setAttribute('data-x', newX);\n        target.setAttribute('data-y', newY);\n      }\n    });\n  }\n\n  return __jsx(\"div\", {\n    className: _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.optionContainer,\n    ref: draggable,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"bottom frame\",\n    id: _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bottomFrame,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(OptionBottom, \"f/p//Ug0/usxh0FWabDuvzIGL2c=\");\n\n_c = OptionBottom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OptionBottom);\n\nvar _c;\n\n$RefreshReg$(_c, \"OptionBottom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcHRpb25Cb3R0b20udHN4Pzk5MGEiXSwibmFtZXMiOlsiT3B0aW9uQm90dG9tIiwicHJvcHMiLCJkcmFnZ2FibGUiLCJ1c2VSZWYiLCJjdXJyZW50IiwiaW50ZXJhY3QiLCJvbm1vdmUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJkYXRhWCIsImdldEF0dHJpYnV0ZSIsImRhdGFZIiwiaW5pdGlhbFgiLCJwYXJzZUZsb2F0IiwiaW5pdGlhbFkiLCJkZWx0YVgiLCJkeCIsImRlbHRhWSIsImR5IiwibmV3WCIsIm5ld1kiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNldEF0dHJpYnV0ZSIsInN0eWxlcyIsIm9wdGlvbkNvbnRhaW5lciIsImJvdHRvbUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFDakMsTUFBTUMsU0FBUyxHQUFJQyxvREFBTSxDQUFDLElBQUQsQ0FBekI7O0FBRUEsTUFBSUQsU0FBUyxDQUFDRSxPQUFkLEVBQXVCO0FBQ3ZCQyxxREFBUSxDQUFDSCxTQUFTLENBQUNFLE9BQVgsQ0FBUixDQUNLRixTQURMLENBQ2U7QUFDUEksWUFBTSxFQUFFLGdCQUFTQyxLQUFULEVBQXFCO0FBQ3pCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsWUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQXJCO0FBRUEsWUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBZDtBQUNBLFlBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDRSxZQUFQLENBQW9CLFFBQXBCLENBQWQ7QUFDQSxZQUFNRSxRQUFRLEdBQUdDLFVBQVUsQ0FBQ0osS0FBRCxDQUFWLElBQXFCLENBQXRDO0FBQ0EsWUFBTUssUUFBUSxHQUFHRCxVQUFVLENBQUNGLEtBQUQsQ0FBVixJQUFxQixDQUF0QztBQUVBLFlBQU1JLE1BQU0sR0FBR1YsS0FBSyxDQUFDVyxFQUFyQjtBQUNBLFlBQU1DLE1BQU0sR0FBR1osS0FBSyxDQUFDYSxFQUFyQjtBQUVBLFlBQU1DLElBQUksR0FBR1AsUUFBUSxHQUFHRyxNQUF4QjtBQUNBLFlBQU1LLElBQUksR0FBR04sUUFBUSxHQUFHRyxNQUF4QjtBQUVBVCxjQUFNLENBQ0RhLEtBREwsQ0FFS0MsU0FGTCx1QkFFOEJILElBRjlCLGlCQUV5Q0MsSUFGekM7QUFJQVosY0FBTSxDQUFDZSxZQUFQLENBQW9CLFFBQXBCLEVBQThCSixJQUE5QjtBQUNBWCxjQUFNLENBQUNlLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJILElBQTlCO0FBQ0g7QUF0Qk0sS0FEZjtBQXlCQzs7QUFDRCxTQUNJO0FBQUssYUFBUyxFQUFFSSx1RUFBTSxDQUFDQyxlQUF2QjtBQUF3QyxPQUFHLEVBQUV6QixTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUUwQixxRUFBVjtBQUF1QixPQUFHLEVBQUMsY0FBM0I7QUFBMEMsTUFBRSxFQUFFRix1RUFBTSxDQUFDRSxXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQU1ILENBcENEOztHQUFNNUIsWTs7S0FBQUEsWTtBQXNDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL09wdGlvbkJvdHRvbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW50ZXJhY3QgZnJvbSAnaW50ZXJhY3Rqcyc7XG5pbXBvcnQgYm90dG9tRnJhbWUgZnJvbSBcIi4uL0dBc3NldHMvdGVzdHMvQm90dG9tRnJhbWUuc3ZnXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL09wdGlvbkJvdHRvbS5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tIFwiQGludGVyYWN0anMvdHlwZXNcIjtcblxuY29uc3QgT3B0aW9uQm90dG9tID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSAgdXNlUmVmKG51bGwpXG5cbiAgICBpZiAoZHJhZ2dhYmxlLmN1cnJlbnQpIHtcbiAgICBpbnRlcmFjdChkcmFnZ2FibGUuY3VycmVudCBhcyB1bmtub3duIGFzIFRhcmdldClcbiAgICAgICAgLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICBvbm1vdmU6IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncXdlcXdlJylcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVggPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhWSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxYID0gcGFyc2VGbG9hdChkYXRhWCkgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsWSA9IHBhcnNlRmxvYXQoZGF0YVkpIHx8IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVggPSBldmVudC5keDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBldmVudC5keTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ggPSBpbml0aWFsWCArIGRlbHRhWDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdZID0gaW5pdGlhbFkgKyBkZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bmV3WH1weCwgJHtuZXdZfXB4KWA7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBuZXdYKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBuZXdZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbkNvbnRhaW5lcn0gcmVmPXtkcmFnZ2FibGV9ID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtib3R0b21GcmFtZX0gYWx0PVwiYm90dG9tIGZyYW1lXCIgaWQ9e3N0eWxlcy5ib3R0b21GcmFtZX0+PC9pbWc+XG4gICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5mYXNoaW9uPC9wPiovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OptionBottom.tsx\n");

/***/ })

})