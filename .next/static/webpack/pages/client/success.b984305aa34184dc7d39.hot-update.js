webpackHotUpdate_N_E("pages/client/success",{

/***/ "./components/EmailForm.tsx":
/*!**********************************!*\
  !*** ./components/EmailForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/EmailForm.module.scss */ \"./components/styles/EmailForm.module.scss\");\n/* harmony import */ var _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GAssets/closeButton.svg */ \"./GAssets/closeButton.svg\");\n/* harmony import */ var _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/EmailForm.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction EmailForm(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var handleEmailChange = function handleEmailChange(event) {\n    console.log(event.target);\n    console.log(event.target.value);\n    setEmail(event.target.value);\n    console.log('---');\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    console.log(email);\n    props.hideModal(false);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"close\",\n    id: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.closeButton,\n    onClick: props.hideModal(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"Share your results\"), __jsx(\"div\", {\n    className: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.formContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, \"Your Email Address:\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"email\",\n    name: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(EmailForm, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n\n_c = EmailForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbEZvcm0udHN4PzQwZjgiXSwibmFtZXMiOlsiRW1haWxGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVFbWFpbENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoaWRlTW9kYWwiLCJzdHlsZXMiLCJtb2RhbENvbnRhaW5lciIsImNsb3NlQnV0dG9uIiwiZm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBK0I7QUFBQTs7QUFBQSxrQkFFREMsc0RBQVEsQ0FBQyxFQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUkzQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBZ0I7QUFDdENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE1BQWxCO0FBQ0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBekI7QUFDQU4sWUFBUSxDQUFDRSxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBZCxDQUFSO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDSCxHQUxEOztBQU9BLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLEtBQUQsRUFBZ0I7QUFDakNBLFNBQUssQ0FBQ00sY0FBTjtBQUNBTCxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNBRixTQUFLLENBQUNZLFNBQU4sQ0FBZ0IsS0FBaEI7QUFDSCxHQUpEOztBQU1BLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLG9FQUFNLENBQUNDLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsK0RBQVY7QUFBdUIsT0FBRyxFQUFDLE9BQTNCO0FBQW1DLE1BQUUsRUFBRUYsb0VBQU0sQ0FBQ0UsV0FBOUM7QUFBMkQsV0FBTyxFQUFFZixLQUFLLENBQUNZLFNBQU4sRUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSixFQUdJO0FBQUssYUFBUyxFQUFFQyxvRUFBTSxDQUFDRyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLE9BQXRCO0FBQThCLFFBQUksRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixDQUhKLENBREo7QUFhSDs7R0E5QlFqQixTOztLQUFBQSxTO0FBZ0NNQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRW1haWxGb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0VtYWlsRm9ybS5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgY2xvc2VCdXR0b24gZnJvbSBcIi4uL0dBc3NldHMvY2xvc2VCdXR0b24uc3ZnXCJcblxuZnVuY3Rpb24gRW1haWxGb3JtKHByb3BzOiBhbnkpIHtcblxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0nKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gICAgICAgIHByb3BzLmhpZGVNb2RhbChmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjbG9zZUJ1dHRvbn0gYWx0PVwiY2xvc2VcIiBpZD17c3R5bGVzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXtwcm9wcy5oaWRlTW9kYWwoKX0+PC9pbWc+XG4gICAgICAgICAgICA8aDI+U2hhcmUgeW91ciByZXN1bHRzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsIEFkZHJlc3M6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbEZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EmailForm.tsx\n");

/***/ })

})