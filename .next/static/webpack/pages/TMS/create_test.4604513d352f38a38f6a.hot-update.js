webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var textPreviewer = function textPreviewer(text) {\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 90) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: String(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, props.testType === \"TT\" ? props.q_a_TextEntry(props.cardType, props.iterator) : null)))), __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.QADescription,\n    onClick: function onClick(e) {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, textPreviewer(props.qna[props.cardType])));\n};\n\n_s(QACard, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibGVuZ3RoIiwiY29tcFN0eWxlcyIsImVtcHR5VGV4dCIsInNsaWNlIiwiY2FyZFR5cGUiLCJTdHJpbmciLCJpdGVyYXRvciIsImFkZENvbXBTdHlsZXMiLCJNb2RhbENvbnRhaW5lckJHIiwiSGlkZGVuIiwiTW9kYWxDb250YWluZXIiLCJjbG9zZUJ0biIsIk1vZGFsIiwiQ3JlYXRlTGFuZ1N3aXRjaGVycyIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJpbnB1dEVuYWJsZXIiLCJOYW1lRm9ybSIsInRlc3RUeXBlIiwicV9hX1RleHRFbnRyeSIsIlFBRGVzY3JpcHRpb24iLCJlIiwicW5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQVVUO0FBQUE7O0FBQ0osTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURJLGtCQUV3QkMsc0RBQVEsQ0FBQyxLQUFELENBRmhDO0FBQUEsTUFFR0MsTUFGSDtBQUFBLE1BRVdDLFNBRlg7O0FBR0osTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQWtCO0FBQ3RDLFFBQUlBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLENBQWxCLEVBQXFCLE9BQU87QUFBSyxlQUFTLEVBQUVDLHNFQUFVLENBQUNDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDs7QUFDckIsUUFBSUgsSUFBSSxDQUFDQyxNQUFMLEdBQWNOLFNBQWxCLEVBQTZCO0FBQzNCLGFBQU9LLElBQUksQ0FBQ0ksS0FBTCxDQUFXLENBQVgsRUFBYyxFQUFkLElBQW9CLEtBQTNCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0osSUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFRQSxTQUNFO0FBQUssYUFBUyxZQUFLRSxzRUFBVSxDQUFDUixLQUFLLENBQUNXLFFBQVAsQ0FBZixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE1BQUUsRUFBRUMsTUFBTSxDQUFDWixLQUFLLENBQUNhLFFBQVAsQ0FEWjtBQUVFLGFBQVMsWUFBS0Msb0VBQWEsQ0FBQ0MsZ0JBQW5CLGNBQ1AsQ0FBQ1osTUFBRCxHQUFVVyxvRUFBYSxDQUFDRSxNQUF4QixHQUFpQyxJQUQxQixDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBRUYsb0VBQWEsQ0FBQ0csY0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywyREFBUSxDQUFDZCxTQUFELENBRFgsRUFFRTtBQUFLLGFBQVMsRUFBRVUsb0VBQWEsQ0FBQ0ssS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxzRUFBbUIsQ0FBQ3BCLEtBQUssQ0FBQ3FCLG1CQUFQLEVBQTRCckIsS0FBSyxDQUFDc0IsWUFBbEMsQ0FEdEIsRUFFRTtBQUFLLGFBQVMsRUFBRVIsb0VBQWEsQ0FBQ1MsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdkIsS0FBSyxDQUFDd0IsUUFBTixLQUFtQixJQUFuQixHQUNHeEIsS0FBSyxDQUFDeUIsYUFBTixDQUFvQnpCLEtBQUssQ0FBQ1csUUFBMUIsRUFBb0NYLEtBQUssQ0FBQ2EsUUFBMUMsQ0FESCxHQUVHLElBSE4sQ0FGRixDQUZGLENBTkYsQ0FERixFQW1CRTtBQUFHLGFBQVMsRUFBRUwsc0VBQVUsQ0FBQ2tCLGFBQXpCO0FBQXdDLFdBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU92QixTQUFTLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsYUFBYSxDQUFDTCxLQUFLLENBQUM0QixHQUFOLENBQVU1QixLQUFLLENBQUNXLFFBQWhCLENBQUQsQ0FEaEIsQ0FuQkYsQ0FERjtBQXlCRCxDQTlDRDs7R0FBTVosTTs7S0FBQUEsTTtBQStDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1FBQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElRbkEsIFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5pbXBvcnQgeyBBbnlUeHRSZWNvcmQgfSBmcm9tIFwiZG5zXCI7XG5jb25zdCBRQUNhcmQgPSAocHJvcHM6IHtcbiAgY2FyZFR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCI7XG4gIGNhcmRDb250ZW50czogXCJpbWdcIiB8IFwidGV4dFwiO1xuICAvLyBzYXZlRGF0YTogKGRhdGEpID0+IHZvaWQ7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIHNldFNlbGVjdGVkTGFuZ3VhZ2U6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoKSA9PiB2b2lkO1xuICBxbmE6IElRbkE7XG4gIHRlc3RUeXBlOiBhbnk7XG4gIHFfYV9UZXh0RW50cnk6ICh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudDtcbn0pID0+IHtcbiAgY29uc3QgY2hhckxpbWl0ID0gOTA7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLmVtcHR5VGV4dH0+VDwvZGl2PjtcbiAgICBpZiAodGV4dC5sZW5ndGggPiBjaGFyTGltaXQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIDkwKSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlc1twcm9wcy5jYXJkVHlwZV19YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtTdHJpbmcocHJvcHMuaXRlcmF0b3IpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30gJHtcbiAgICAgICAgICAhaXNPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMocHJvcHMuc2V0U2VsZWN0ZWRMYW5ndWFnZSwgcHJvcHMuaW5wdXRFbmFibGVyKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCJcbiAgICAgICAgICAgICAgICA/IHByb3BzLnFfYV9UZXh0RW50cnkocHJvcHMuY2FyZFR5cGUsIHByb3BzLml0ZXJhdG9yKVxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlFBRGVzY3JpcHRpb259IG9uQ2xpY2s9eyhlKSA9PiBzZXRJc09wZW4odHJ1ZSl9PlxuICAgICAgICB7dGV4dFByZXZpZXdlcihwcm9wcy5xbmFbcHJvcHMuY2FyZFR5cGVdKX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBRQUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})