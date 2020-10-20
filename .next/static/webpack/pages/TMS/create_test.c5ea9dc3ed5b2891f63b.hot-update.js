webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isNameEntryEnabled = _useState2[0],\n      setIsNameEntryEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([[\"\", \"ru\"], [\"\", \"en\"], [\"\", \"lv\"]]),\n      currentNames = _useState4[0],\n      setCurrentNames = _useState4[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n    console.log(langButtons);\n  });\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    setIsNameEntryEnabled(true);\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {};\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    console.log(nameInput);\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n    console.log(isNameEntryEnabled);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    disabled: isNameEntryEnabled,\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NextLang,\n    type: \"submit\",\n    value: \"->\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"9hdoZ3ffQXC5N3X3NSCJxEQkbLY=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzTmFtZUVudHJ5RW5hYmxlZCIsInNldElzTmFtZUVudHJ5RW5hYmxlZCIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImN1cnJlbnROYW1lcyIsInNldEN1cnJlbnROYW1lcyIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMYW5nQnRuQ2xpY2siLCJidG4iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29tcFN0eWxlcyIsIkJ1dHRvblByZXNzZWQiLCJyZW1vdmUiLCJoYW5kbGVBcnJvd0NsaWNrIiwiaGFuZGxlTmFtZUNoYW5nZSIsIm5hbWVJbnB1dCIsImhhbmRsZU5hbWVFbnRyeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJUZXN0TmFtaW5nIiwiTW9kYWxDb250YWluZXJCRyIsIk1vZGFsQ29udGFpbmVyIiwiQ2xvc2VCVE4iLCJNb2RhbCIsIkxhbmdTZWxlY3QiLCJMYW5nQnV0dG9uIiwiTmFtZUZvcm0iLCJlIiwidmFsdWUiLCJUTmFtZUlucHV0IiwiTmV4dExhbmciLCJNb2RhbE9wZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQjtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEtBQUQsQ0FERTtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxTQUR1Qjs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBVSxLQUFWLENBRnRCO0FBQUEsTUFFL0JHLGtCQUYrQjtBQUFBLE1BRVhDLHFCQUZXOztBQUFBLG1CQUdFSixzREFBUSxFQUhWO0FBQUEsTUFHL0JLLFlBSCtCO0FBQUEsTUFHakJDLGVBSGlCOztBQUFBLG1CQUlFTixzREFBUSxDQUU5QyxDQUNBLENBQUMsRUFBRCxFQUFLLElBQUwsQ0FEQSxFQUVBLENBQUMsRUFBRCxFQUFLLElBQUwsQ0FGQSxFQUdBLENBQUMsRUFBRCxFQUFLLElBQUwsQ0FIQSxDQUY4QyxDQUpWO0FBQUEsTUFJL0JPLFlBSitCO0FBQUEsTUFJakJDLGVBSmlCOztBQVl0QyxNQUFNQyxRQUFnQyxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQXpDO0FBRUEsTUFBSUMsV0FBc0MsR0FBRyxFQUE3QztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZUFBVyxHQUFHRCxRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsYUFBa0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsSUFBeEIsQ0FBbEI7QUFBQSxLQUFiLENBQWQ7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlQLFdBQVo7QUFDRCxHQUhRLENBQVQ7O0FBS0EsTUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUN6QkMsR0FEeUIsRUFFaEI7QUFDVGYseUJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBRyxDQUFDQyxhQUFKLENBQWtCQyxFQUE5QjtBQUNBWCxlQUFXLENBQUNZLE9BQVosQ0FBb0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzlCLFVBQUksQ0FBQUEsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVGLEVBQVIsS0FBY0YsR0FBRyxDQUFDQyxhQUFKLENBQWtCQyxFQUFwQyxFQUF3QztBQUFBOztBQUN0Q0UsY0FBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixpQ0FBQUEsTUFBTSxDQUFFQyxTQUFSLHdFQUFtQkMsR0FBbkIsQ0FBdUJDLG9FQUFVLENBQUNDLGFBQWxDO0FBQ0QsT0FGRCxNQUVPO0FBQUE7O0FBQ0xKLGNBQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sa0NBQUFBLE1BQU0sQ0FBRUMsU0FBUiwwRUFBbUJJLE1BQW5CLENBQTBCRixvRUFBVSxDQUFDQyxhQUFyQztBQUNEO0FBQ0YsS0FORDtBQU9BckIsbUJBQWUsQ0FBQ2EsR0FBRyxDQUFDQyxhQUFKLENBQWtCQyxFQUFuQixDQUFmO0FBQ0QsR0FiRDs7QUFlQSxNQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNWLEdBQUQsRUFBZSxDQUFFLENBQTFDOztBQUNBLE1BQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsU0FBRCxFQUF1QjtBQUM5Q2YsV0FBTyxDQUFDQyxHQUFSLENBQVljLFNBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFtRDtBQUN6RUEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FsQixXQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWjtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBWWQsa0JBQVo7QUFDRCxHQUpEOztBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVnQyw0RUFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0duQyxNQUFNLEdBQ0w7QUFBSyxhQUFTLEVBQUV5QixvRUFBVSxDQUFDVyxnQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFWCxvRUFBVSxDQUFDWSxjQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUVaLG9FQUFVLENBQUNhLFFBRHhCO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTXJDLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFRRTtBQUFLLGFBQVMsRUFBRXdCLG9FQUFVLENBQUNjLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWQsb0VBQVUsQ0FBQ2UsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsV0FBTyxFQUFFdkIsa0JBRFg7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLGFBQVMsRUFBRVEsb0VBQVUsQ0FBQ2dCLFVBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQVFFO0FBQ0UsV0FBTyxFQUFFeEIsa0JBRFg7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLGFBQVMsRUFBRVEsb0VBQVUsQ0FBQ2dCLFVBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSRixFQWVFO0FBQ0UsV0FBTyxFQUFFeEIsa0JBRFg7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLGFBQVMsRUFBRVEsb0VBQVUsQ0FBQ2dCLFVBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FmRixDQURGLEVBd0JFO0FBQU0sWUFBUSxFQUFFVixlQUFoQjtBQUFpQyxhQUFTLEVBQUVOLG9FQUFVLENBQUNpQixRQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUV4QyxrQkFEWjtBQUVFLFlBQVEsRUFBRSxrQkFBQ3lDLENBQUQ7QUFBQSxhQUNSZCxnQkFBZ0IsQ0FBQ2MsQ0FBQyxDQUFDeEIsYUFBRixDQUFnQnlCLEtBQWpCLENBRFI7QUFBQSxLQUZaO0FBS0UsUUFBSSxFQUFDLE1BTFA7QUFNRSxlQUFXLEVBQUMsVUFOZDtBQU9FLGFBQVMsRUFBRW5CLG9FQUFVLENBQUNvQixVQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUNFLGFBQVMsRUFBRXBCLG9FQUFVLENBQUNxQixRQUR4QjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsU0FBSyxFQUFDLElBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBeEJGLENBUkYsQ0FERixDQURLLEdBc0RMO0FBQUssYUFBUyxFQUFFckIsb0VBQVUsQ0FBQ3NCLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNOUMsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixDQXZESixDQURGO0FBK0RELENBNUdEOztHQUFNSixTOztLQUFBQSxTO0FBOEdTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdE5hbWVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVGVzdE5hbWVyID0gKGN1cnJlbnRMYW5nOiBhbnkpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTmFtZUVudHJ5RW5hYmxlZCwgc2V0SXNOYW1lRW50cnlFbmFibGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uW1widmFsdWVcIl0+KCk7XG4gIGNvbnN0IFtjdXJyZW50TmFtZXMsIHNldEN1cnJlbnROYW1lc10gPSB1c2VTdGF0ZTxcbiAgICBBcnJheTxbc3RyaW5nLCBUTGFuZ09wdGlvbltcInZhbHVlXCJdXT5cbiAgPihbXG4gICAgW1wiXCIsIFwicnVcIl0sXG4gICAgW1wiXCIsIFwiZW5cIl0sXG4gICAgW1wiXCIsIFwibHZcIl0sXG4gIF0pO1xuXG4gIGNvbnN0IHRlc3RMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdW10gPSBbXCJydVwiLCBcImx2XCIsIFwiZW5cIl07XG5cbiAgbGV0IGxhbmdCdXR0b25zOiBBcnJheTxIVE1MRWxlbWVudCB8IG51bGw+ID0gW107XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGFuZ0J1dHRvbnMgPSB0ZXN0TGFuZy5tYXAoKGxhbmc6IHN0cmluZykgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFuZykpO1xuICAgIGNvbnNvbGUubG9nKGxhbmdCdXR0b25zKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZ0J0bkNsaWNrID0gKFxuICAgIGJ0bjogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCA9PiB7XG4gICAgc2V0SXNOYW1lRW50cnlFbmFibGVkKHRydWUpO1xuICAgIGNvbnNvbGUubG9nKGJ0bi5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBsYW5nQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24/LmlkID09IGJ0bi5jdXJyZW50VGFyZ2V0LmlkKSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5hZGQoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5yZW1vdmUoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZExhbmcoYnRuLmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFycm93Q2xpY2sgPSAoYnRuKTogdm9pZCA9PiB7fTtcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChuYW1lSW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5hbWVJbnB1dCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmFtZUVudHJ5ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudE5hbWVzKTtcbiAgICBjb25zb2xlLmxvZyhpc05hbWVFbnRyeUVuYWJsZWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICB7aXNPcGVuID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5DbG9zZUJUTn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg8J2Wt1xuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ1NlbGVjdH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJydVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cImx2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExBVFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRU5HXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmFtZUVudHJ5fSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTmFtZUVudHJ5RW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU5hbWVDaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuVE5hbWVJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk5leHRMYW5nfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIi0+XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbE9wZW5lcn0+XG4gICAgICAgICAgPHNwYW4+VGVzdCBuYW1lPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfT4rPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3ROYW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})