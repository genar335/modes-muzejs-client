webpackHotUpdate_N_E("pages/client/success",{

/***/ "./components/EmailForm.tsx":
/*!**********************************!*\
  !*** ./components/EmailForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/EmailForm.module.scss */ \"./components/styles/EmailForm.module.scss\");\n/* harmony import */ var _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GAssets/closeButton.svg */ \"./GAssets/closeButton.svg\");\n/* harmony import */ var _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/EmailForm.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction EmailForm(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var handleEmailChange = function handleEmailChange(event) {\n    console.log(event.target);\n    console.log(event.target.value);\n    setEmail(event.target.value);\n    console.log('---');\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    console.log(email);\n    props.hideModal(false);\n  };\n\n  var closeModal = function closeModal() {\n    props.hideModal(false);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_closeButton_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"close\",\n    id: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.closeButton,\n    onClick: closeModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Share your results\"), __jsx(\"div\", {\n    className: _styles_EmailForm_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.formContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"Your Email Address:\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"email\",\n    name: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(EmailForm, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n\n_c = EmailForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbEZvcm0udHN4PzQwZjgiXSwibmFtZXMiOlsiRW1haWxGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVFbWFpbENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoaWRlTW9kYWwiLCJjbG9zZU1vZGFsIiwic3R5bGVzIiwibW9kYWxDb250YWluZXIiLCJjbG9zZUJ1dHRvbiIsImZvcm1Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFcEJDLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFJM0IsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQWdCO0FBQ3RDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFsQjtBQUNBRixXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQXpCO0FBQ0FOLFlBQVEsQ0FBQ0UsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWQsQ0FBUjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0gsR0FMRDs7QUFPQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxLQUFELEVBQWdCO0FBQ2pDQSxTQUFLLENBQUNNLGNBQU47QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQUYsU0FBSyxDQUFDWSxTQUFOLENBQWdCLEtBQWhCO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCYixTQUFLLENBQUNZLFNBQU4sQ0FBZ0IsS0FBaEI7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUVFLG9FQUFNLENBQUNDLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsK0RBQVY7QUFBdUIsT0FBRyxFQUFDLE9BQTNCO0FBQW1DLE1BQUUsRUFBRUYsb0VBQU0sQ0FBQ0UsV0FBOUM7QUFBMkQsV0FBTyxFQUFFSCxVQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUVDLG9FQUFNLENBQUNHLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsT0FBdEI7QUFBOEIsUUFBSSxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBSEosQ0FESjtBQWFIOztHQWxDUWxCLFM7O0tBQUFBLFM7QUFvQ01BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FbWFpbEZvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvRW1haWxGb3JtLm1vZHVsZS5zY3NzXCJcbmltcG9ydCBjbG9zZUJ1dHRvbiBmcm9tIFwiLi4vR0Fzc2V0cy9jbG9zZUJ1dHRvbi5zdmdcIlxuXG5mdW5jdGlvbiBFbWFpbEZvcm0ocHJvcHM6IGFueSkge1xuXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLScpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcbiAgICAgICAgcHJvcHMuaGlkZU1vZGFsKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5oaWRlTW9kYWwoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y2xvc2VCdXR0b259IGFsdD1cImNsb3NlXCIgaWQ9e3N0eWxlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17Y2xvc2VNb2RhbH0+PC9pbWc+XG4gICAgICAgICAgICA8aDI+U2hhcmUgeW91ciByZXN1bHRzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsIEFkZHJlc3M6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbEZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EmailForm.tsx\n");

/***/ })

})