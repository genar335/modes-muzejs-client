webpackHotUpdate_N_E("pages/client/success",{

/***/ "./components/EmailForm.tsx":
/*!**********************************!*\
  !*** ./components/EmailForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/EmailForm.module.scss */ \"./components/styles/EmailForm.module.scss\");\n/* harmony import */ var _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GAssets/closeButton.svg */ \"./GAssets/closeButton.svg\");\n/* harmony import */ var _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/EmailForm.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction EmailForm(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var handleEmailChange = function handleEmailChange(event) {\n    console.log(event.target);\n    console.log(event.target.value);\n    setEmail(event.target.value);\n    console.log('---');\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    console.log(email);\n    props.showHideModal(false);\n  };\n\n  var closeModal = function closeModal() {\n    props.showHideModal(false);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"close\",\n    id: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.closeButton,\n    onClick: closeModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Share your results\"), __jsx(\"div\", {\n    className: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.formContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"Your Email Address:\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"email\",\n    name: \"email\",\n    onChange: handleEmailChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(EmailForm, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n\n_c = EmailForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbEZvcm0udHN4PzQwZjgiXSwibmFtZXMiOlsiRW1haWxGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVFbWFpbENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzaG93SGlkZU1vZGFsIiwiY2xvc2VNb2RhbCIsInN0eWxlcyIsIm1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdXR0b24iLCJmb3JtQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUErQjtBQUFBOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBSTNCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUN0Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csTUFBbEI7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUF6QjtBQUNBTixZQUFRLENBQUNFLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFkLENBQVI7QUFDQUgsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNILEdBTEQ7O0FBT0EsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0wsS0FBRCxFQUFnQjtBQUNqQ0EsU0FBSyxDQUFDTSxjQUFOO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0FGLFNBQUssQ0FBQ1ksYUFBTixDQUFvQixLQUFwQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQmIsU0FBSyxDQUFDWSxhQUFOLENBQW9CLEtBQXBCO0FBQ0gsR0FGRDs7QUFJQSxTQUNJO0FBQUssYUFBUyxFQUFFRSxvRUFBTSxDQUFDQyxjQUF2QjtBQUF1QyxZQUFRLEVBQUVMLFlBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRU0sK0RBQVY7QUFBdUIsT0FBRyxFQUFDLE9BQTNCO0FBQW1DLE1BQUUsRUFBRUYsb0VBQU0sQ0FBQ0UsV0FBOUM7QUFBMkQsV0FBTyxFQUFFSCxVQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUVDLG9FQUFNLENBQUNHLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsT0FBdEI7QUFBOEIsUUFBSSxFQUFDLE9BQW5DO0FBQTJDLFlBQVEsRUFBRWIsaUJBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBSEosQ0FESjtBQWFIOztHQWxDUUwsUzs7S0FBQUEsUztBQW9DTUEsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0VtYWlsRm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9FbWFpbEZvcm0ubW9kdWxlLnNjc3NcIlxuaW1wb3J0IGNsb3NlQnV0dG9uIGZyb20gXCIuLi9HQXNzZXRzL2Nsb3NlQnV0dG9uLnN2Z1wiXG5cbmZ1bmN0aW9uIEVtYWlsRm9ybShwcm9wczogYW55KSB7XG5cbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwpO1xuICAgICAgICBwcm9wcy5zaG93SGlkZU1vZGFsKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5zaG93SGlkZU1vZGFsKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2Nsb3NlQnV0dG9ufSBhbHQ9XCJjbG9zZVwiIGlkPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PjwvaW1nPlxuICAgICAgICAgICAgPGgyPlNoYXJlIHlvdXIgcmVzdWx0czwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbCBBZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbEZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EmailForm.tsx\n");

/***/ })

})