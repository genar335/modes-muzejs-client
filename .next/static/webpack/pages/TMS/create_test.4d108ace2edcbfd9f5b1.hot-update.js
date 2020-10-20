webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isNameEntryEnabled = _useState2[0],\n      setIsNameEntryEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([[\"\", \"ru\"], [\"\", \"en\"], [\"\", \"lv\"]]),\n      currentNames = _useState4[0],\n      setCurrentNames = _useState4[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n    console.log(langButtons);\n  });\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {};\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    console.log(nameInput);\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n    console.log(event.currentTarget.nodeValue);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    disabled: isNameEntryEnables,\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NextLang,\n    type: \"submit\",\n    value: \"->\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"9hdoZ3ffQXC5N3X3NSCJxEQkbLY=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzTmFtZUVudHJ5RW5hYmxlZCIsInNldElzTmFtZUVudHJ5RW5hYmxlZCIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImN1cnJlbnROYW1lcyIsInNldEN1cnJlbnROYW1lcyIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMYW5nQnRuQ2xpY2siLCJidG4iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29tcFN0eWxlcyIsIkJ1dHRvblByZXNzZWQiLCJyZW1vdmUiLCJoYW5kbGVBcnJvd0NsaWNrIiwiaGFuZGxlTmFtZUNoYW5nZSIsIm5hbWVJbnB1dCIsImhhbmRsZU5hbWVFbnRyeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJub2RlVmFsdWUiLCJzdHlsZXMiLCJUZXN0TmFtaW5nIiwiTW9kYWxDb250YWluZXJCRyIsIk1vZGFsQ29udGFpbmVyIiwiQ2xvc2VCVE4iLCJNb2RhbCIsIkxhbmdTZWxlY3QiLCJMYW5nQnV0dG9uIiwiTmFtZUZvcm0iLCJpc05hbWVFbnRyeUVuYWJsZXMiLCJlIiwidmFsdWUiLCJUTmFtZUlucHV0IiwiTmV4dExhbmciLCJNb2RhbE9wZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQjtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFVLEtBQVYsQ0FERTtBQUFBLE1B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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFDRSxhQUFTLEVBQUV0QixvRUFBVSxDQUFDdUIsUUFEeEI7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFNBQUssRUFBQyxJQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQXhCRixDQVJGLENBREYsQ0FESyxHQXNETDtBQUFLLGFBQVMsRUFBRXZCLG9FQUFVLENBQUN3QixXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTWhELFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkYsQ0F2REosQ0FERjtBQStERCxDQTNHRDs7R0FBTUosUzs7S0FBQUEsUztBQTZHU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3ROYW1lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBUTGFuZ09wdGlvbiB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRlc3ROYW1lciA9IChjdXJyZW50TGFuZzogYW55KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpc05hbWVFbnRyeUVuYWJsZWQsIHNldElzTmFtZUVudHJ5RW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbltcInZhbHVlXCJdPigpO1xuICBjb25zdCBbY3VycmVudE5hbWVzLCBzZXRDdXJyZW50TmFtZXNdID0gdXNlU3RhdGU8XG4gICAgQXJyYXk8W3N0cmluZywgVExhbmdPcHRpb25bXCJ2YWx1ZVwiXV0+XG4gID4oW1xuICAgIFtcIlwiLCBcInJ1XCJdLFxuICAgIFtcIlwiLCBcImVuXCJdLFxuICAgIFtcIlwiLCBcImx2XCJdLFxuICBdKTtcblxuICBjb25zdCB0ZXN0TGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXVtdID0gW1wicnVcIiwgXCJsdlwiLCBcImVuXCJdO1xuXG4gIGxldCBsYW5nQnV0dG9uczogQXJyYXk8SFRNTEVsZW1lbnQgfCBudWxsPiA9IFtdO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxhbmdCdXR0b25zID0gdGVzdExhbmcubWFwKChsYW5nOiBzdHJpbmcpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhbmcpKTtcbiAgICBjb25zb2xlLmxvZyhsYW5nQnV0dG9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmdCdG5DbGljayA9IChcbiAgICBidG46IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKGJ0bi5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBsYW5nQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24/LmlkID09IGJ0bi5jdXJyZW50VGFyZ2V0LmlkKSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5hZGQoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5yZW1vdmUoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZExhbmcoYnRuLmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFycm93Q2xpY2sgPSAoYnRuKTogdm9pZCA9PiB7fTtcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChuYW1lSW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5hbWVJbnB1dCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmFtZUVudHJ5ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudE5hbWVzKTtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0Lm5vZGVWYWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkNsb3NlQlROfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDwnZa3XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nU2VsZWN0fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cInJ1XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwibHZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTEFUXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFTkdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOYW1lRW50cnl9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNOYW1lRW50cnlFbmFibGVzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmFtZUNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5UTmFtZUlucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmV4dExhbmd9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiLT5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsT3BlbmVyfT5cbiAgICAgICAgICA8c3Bhbj5UZXN0IG5hbWU8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pis8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdE5hbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})