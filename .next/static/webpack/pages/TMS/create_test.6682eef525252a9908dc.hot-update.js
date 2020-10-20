webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      selectedLang = _useState2[0],\n      setSelectedLang = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([[\"\", \"ru\"], [\"\", \"en\"], [\"\", \"lv\"]]),\n      currentNames = _useState3[0],\n      setCurrentNames = _useState3[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n    console.log(langButtons);\n  });\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {};\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    console.log(nameInput);\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n    console.log(event.currentTarget.nodeValue);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NextLang,\n    type: \"submit\",\n    value: \"->\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"YVdtV5Xl8sk8Yaa56GlivEYCk2I=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImN1cnJlbnROYW1lcyIsInNldEN1cnJlbnROYW1lcyIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMYW5nQnRuQ2xpY2siLCJidG4iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29tcFN0eWxlcyIsIkJ1dHRvblByZXNzZWQiLCJyZW1vdmUiLCJoYW5kbGVBcnJvd0NsaWNrIiwiaGFuZGxlTmFtZUNoYW5nZSIsIm5hbWVJbnB1dCIsImhhbmRsZU5hbWVFbnRyeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJub2RlVmFsdWUiLCJzdHlsZXMiLCJUZXN0TmFtaW5nIiwiTW9kYWxDb250YWluZXJCRyIsIk1vZGFsQ29udGFpbmVyIiwiQ2xvc2VCVE4iLCJNb2RhbCIsIkxhbmdTZWxlY3QiLCJMYW5nQnV0dG9uIiwiTmFtZUZvcm0iLCJlIiwidmFsdWUiLCJUTmFtZUlucHV0IiwiTmV4dExhbmciLCJNb2RhbE9wZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQjtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFVLEtBQVYsQ0FERTtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxTQUR1Qjs7QUFBQSxtQkFFRUYsc0RBQVEsRUFGVjtBQUFBLE1BRS9CRyxZ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Q0FSRixDQURGLENBREssR0FxREw7QUFBSyxhQUFTLEVBQUV0QixvRUFBVSxDQUFDdUIsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU03QyxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLENBdERKLENBREY7QUE4REQsQ0F6R0Q7O0dBQU1KLFM7O0tBQUFBLFM7QUEyR1NBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZXN0TmFtZXIgPSAoY3VycmVudExhbmc6IGFueSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb25bXCJ2YWx1ZVwiXT4oKTtcbiAgY29uc3QgW2N1cnJlbnROYW1lcywgc2V0Q3VycmVudE5hbWVzXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PFtzdHJpbmcsIFRMYW5nT3B0aW9uW1widmFsdWVcIl1dPlxuICA+KFtcbiAgICBbXCJcIiwgXCJydVwiXSxcbiAgICBbXCJcIiwgXCJlblwiXSxcbiAgICBbXCJcIiwgXCJsdlwiXSxcbiAgXSk7XG5cbiAgY29uc3QgdGVzdExhbmc6IFRMYW5nT3B0aW9uW1widmFsdWVcIl1bXSA9IFtcInJ1XCIsIFwibHZcIiwgXCJlblwiXTtcblxuICBsZXQgbGFuZ0J1dHRvbnM6IEFycmF5PEhUTUxFbGVtZW50IHwgbnVsbD4gPSBbXTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsYW5nQnV0dG9ucyA9IHRlc3RMYW5nLm1hcCgobGFuZzogc3RyaW5nKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYW5nKSk7XG4gICAgY29uc29sZS5sb2cobGFuZ0J1dHRvbnMpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVMYW5nQnRuQ2xpY2sgPSAoXG4gICAgYnRuOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhidG4uY3VycmVudFRhcmdldC5pZCk7XG4gICAgbGFuZ0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uPy5pZCA9PSBidG4uY3VycmVudFRhcmdldC5pZCkge1xuICAgICAgICBidXR0b24/LmNsYXNzTGlzdD8uYWRkKGNvbXBTdHlsZXMuQnV0dG9uUHJlc3NlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24/LmNsYXNzTGlzdD8ucmVtb3ZlKGNvbXBTdHlsZXMuQnV0dG9uUHJlc3NlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0U2VsZWN0ZWRMYW5nKGJ0bi5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcnJvd0NsaWNrID0gKGJ0bik6IHZvaWQgPT4ge307XG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAobmFtZUlucHV0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYW1lSW5wdXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5hbWVFbnRyeSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnROYW1lcyk7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5ub2RlVmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICB7aXNPcGVuID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5DbG9zZUJUTn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg8J2Wt1xuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ1NlbGVjdH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJydVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cImx2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExBVFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRU5HXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmFtZUVudHJ5fSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmFtZUNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5UTmFtZUlucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmV4dExhbmd9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiLT5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsT3BlbmVyfT5cbiAgICAgICAgICA8c3Bhbj5UZXN0IG5hbWU8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pis8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdE5hbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})