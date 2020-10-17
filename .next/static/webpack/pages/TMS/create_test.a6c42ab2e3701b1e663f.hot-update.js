webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      selectedLang = _useState2[0],\n      setSelectedLang = _useState2[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n    console.log(langButtons);\n  });\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    var _btn$target, _btn$target3;\n\n    console.log((_btn$target = btn.target) === null || _btn$target === void 0 ? void 0 : _btn$target.id);\n    langButtons.forEach(function (button) {\n      var _btn$target2;\n\n      if ((button === null || button === void 0 ? void 0 : button.id) == ((_btn$target2 = btn.target) === null || _btn$target2 === void 0 ? void 0 : _btn$target2.id)) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang((_btn$target3 = btn.target) === null || _btn$target3 === void 0 ? void 0 : _btn$target3.id);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }), __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NextLang // onClick={handleArrowClick}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, \"\\u2192\")))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"V6LCU8JgvSUD747nUE83cHiwwVY=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMYW5nQnRuQ2xpY2siLCJidG4iLCJ0YXJnZXQiLCJpZCIsImZvckVhY2giLCJidXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb21wU3R5bGVzIiwiQnV0dG9uUHJlc3NlZCIsInJlbW92ZSIsInN0eWxlcyIsIlRlc3ROYW1pbmciLCJNb2RhbENvbnRhaW5lckJHIiwiTW9kYWxDb250YWluZXIiLCJDbG9zZUJUTiIsIk1vZGFsIiwiTGFuZ1NlbGVjdCIsIkxhbmdCdXR0b24iLCJUTmFtZUlucHV0IiwiTmV4dExhbmciLCJNb2RhbE9wZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQjtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFVLEtBQVYsQ0FERTtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxTQUR1Qjs7QUFBQSxtQkFFRUYsc0RBQVEsRUFGVjtBQUFBLE1BRS9CRyxZQUYrQjtBQUFBLE1BRWpCQyxlQUZpQjs7QUFJdEMsTUFBTUMsUUFBZ0MsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUF6QztBQUVBLE1BQUlDLFdBQXNDLEdBQUcsRUFBN0M7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGVBQVcsR0FBR0QsUUFBUSxDQUFDRyxHQUFULENB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRixDQVJGLENBREYsQ0FESyxHQWlETDtBQUFLLGFBQVMsRUFBRVosb0VBQVUsQ0FBQ2EsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1qQyxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLENBbERKLENBREY7QUEwREQsQ0FwRkQ7O0dBQU1KLFM7O0tBQUFBLFM7QUFzRlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZXN0TmFtZXIgPSAoY3VycmVudExhbmc6IGFueSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb25bXCJ2YWx1ZVwiXT4oKTtcblxuICBjb25zdCB0ZXN0TGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXVtdID0gW1wicnVcIiwgXCJsdlwiLCBcImVuXCJdO1xuXG4gIGxldCBsYW5nQnV0dG9uczogQXJyYXk8SFRNTEVsZW1lbnQgfCBudWxsPiA9IFtdO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxhbmdCdXR0b25zID0gdGVzdExhbmcubWFwKChsYW5nOiBzdHJpbmcpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhbmcpKTtcbiAgICBjb25zb2xlLmxvZyhsYW5nQnV0dG9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmdCdG5DbGljayA9IChcbiAgICBidG46IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGJ0bi50YXJnZXQ/LmlkKTtcbiAgICBsYW5nQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24/LmlkID09IGJ0bi50YXJnZXQ/LmlkKSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5hZGQoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5yZW1vdmUoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZExhbmcoYnRuLnRhcmdldD8uaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkNsb3NlQlROfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDwnZa3XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nU2VsZWN0fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cInJ1XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwibHZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTEFUXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFTkdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuVE5hbWVJbnB1dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5OZXh0TGFuZ31cbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVBcnJvd0NsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJnJhcnI7XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWxPcGVuZXJ9PlxuICAgICAgICAgIDxzcGFuPlRlc3QgbmFtZTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+KzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0TmFtZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})