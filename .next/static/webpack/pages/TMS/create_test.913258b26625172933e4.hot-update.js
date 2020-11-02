webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var textPreviewer = function textPreviewer(text) {\n    return text.slice(0, 90) + \"...\";\n  };\n\n  return __jsx(\"div\", {\n    className: \"tmpContainer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: String(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, props.testType === \"TT\" ? q_a_TextEntry(\"answer\", props.iterator) : null)))), __jsx(\"span\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.answer,\n    onClick: function onClick(e) {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna.answer)));\n};\n\n_s(QACard, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0Iiwic2xpY2UiLCJTdHJpbmciLCJpdGVyYXRvciIsImFkZENvbXBTdHlsZXMiLCJNb2RhbENvbnRhaW5lckJHIiwiSGlkZGVuIiwiTW9kYWxDb250YWluZXIiLCJjbG9zZUJ0biIsIk1vZGFsIiwiQ3JlYXRlTGFuZ1N3aXRjaGVycyIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJpbnB1dEVuYWJsZXIiLCJOYW1lRm9ybSIsInRlc3RUeXBlIiwicV9hX1RleHRFbnRyeSIsImNvbXBTdHlsZXMiLCJhbnN3ZXIiLCJlIiwicW5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQVNUO0FBQUE7O0FBQUEsa0JBQzBCQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEM7QUFBQSxNQUNLQyxNQURMO0FBQUEsTUFDYUMsU0FEYjs7QUFFRixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBa0I7QUFDdEMsV0FBT0EsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBWCxFQUFjLEVBQWQsSUFBb0IsS0FBM0I7QUFDRCxHQUZEOztBQUdBLFNBQ0E7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ007QUFDRSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDUSxRQUFQLENBRFo7QUFFRSxhQUFTLFlBQUtDLG9FQUFhLENBQUNDLGdCQUFuQixjQUNQLENBQUNSLE1BQUQsR0FBVU8sb0VBQWEsQ0FBQ0UsTUFBeEIsR0FBaUMsSUFEMUIsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBSyxhQUFTLEVBQUVGLG9FQUFhLENBQUNHLGNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsMkRBQVEsQ0FBQ1YsU0FBRCxDQURYLEVBRUU7QUFBSyxhQUFTLEVBQUVNLG9FQUFhLENBQUNLLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msc0VBQW1CLENBQUNmLEtBQUssQ0FBQ2dCLG1CQUFQLEVBQTRCaEIsS0FBSyxDQUFDaUIsWUFBbEMsQ0FEdEIsRUFFRTtBQUFLLGFBQVMsRUFBRVIsb0VBQWEsQ0FBQ1MsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbEIsS0FBSyxDQUFDbUIsUUFBTixLQUFtQixJQUFuQixHQUNHQyxhQUFhLENBQUMsUUFBRCxFQUFXcEIsS0FBSyxDQUFDUSxRQUFqQixDQURoQixHQUVHLElBSE4sQ0FGRixDQUZGLENBTkYsQ0FETixFQW1CTTtBQUFNLGFBQVMsRUFBRWEsc0VBQVUsQ0FBQ0MsTUFBNUI7QUFBb0MsV0FBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsYUFBT3BCLFNBQVMsQ0FBQyxJQUFELENBQWhCO0FBQUEsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxhQUFhLENBQUNKLEtBQUssQ0FBQ3dCLEdBQU4sQ0FBVUYsTUFBWCxDQURoQixDQW5CTixDQURBO0FBeUJILENBdkNEOztHQUFNdkIsTTs7S0FBQUEsTTtBQXdDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1FBQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElRbkEsIFRMYW5nT3B0aW9uIH0gZnJvbSAnLi4vQHR5cGVzL3Rlc3QnXG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2NzcydcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5pbXBvcnQgeyBBbnlUeHRSZWNvcmQgfSBmcm9tICdkbnMnO1xuY29uc3QgUUFDYXJkID0gKHByb3BzOiB7XG4gICAgY2FyZFR5cGU6ICdhbnN3ZXInIHwgJ3F1ZXN0aW9uJztcbiAgICBjYXJkQ29udGVudHM6ICdpbWcnIHwgJ3RleHQnO1xuICAgIC8vIHNhdmVEYXRhOiAoZGF0YSkgPT4gdm9pZDtcbiAgICBpdGVyYXRvcjogbnVtYmVyO1xuICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2U6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgICBpbnB1dEVuYWJsZXI6ICgpID0+IHZvaWQ7XG4gICAgcW5hOiBJUW5BO1xuICAgIHRlc3RUeXBlOiBhbnk7XG59KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdGV4dC5zbGljZSgwLCA5MCkgKyBcIi4uLlwiO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRtcENvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPXtTdHJpbmcocHJvcHMuaXRlcmF0b3IpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhwcm9wcy5zZXRTZWxlY3RlZExhbmd1YWdlLCBwcm9wcy5pbnB1dEVuYWJsZXIpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcV9hX1RleHRFbnRyeShcImFuc3dlclwiLCBwcm9wcy5pdGVyYXRvcilcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5hbnN3ZXJ9IG9uQ2xpY2s9eyhlKSA9PiBzZXRJc09wZW4odHJ1ZSl9PlxuICAgICAgICAgICAge3RleHRQcmV2aWV3ZXIocHJvcHMucW5hLmFuc3dlcil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBRQUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})