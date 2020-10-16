webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleLangChange = function handleLangChange(chosenLang) {\n    setCurrentLang(chosenLang);\n  };\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var languageOptions = [{\n    value: \"ru\",\n    label: \"RU\"\n  }, {\n    value: \"en\",\n    label: \"EN\"\n  }, {\n    value: \"lv\",\n    label: \"LV\"\n  }];\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      editEnabled = _useState4[0],\n      setEditEnabled = _useState4[1];\n\n  var editingEnabler = function editingEnabler(currentLang, testType) {\n    setEditEnabled(true);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if ((currentLang && testType) != undefined) {\n      console.log(\"in an if\");\n      setEditEnabled(true);\n    } else {\n      setEditEnabled(false);\n    }\n\n    console.log(\"outside of if\");\n    console.log(currentLang, testType);\n  }, [currentLang, testType]);\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"Add page\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  })), __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"TestName\",\n    placeholder: \"Test name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // TODO: Need to figure out types for the @selected parameter\n  , {\n    onChange: function onChange(selected) {\n      return handleLangChange(selected.value || \"\");\n    },\n    options: languageOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.lgSelect,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"4Ql6slzQQhhpN4RoCT5hJQdoCG8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJjdXJyZW50TGFuZyIsInNldEN1cnJlbnRMYW5nIiwiaGFuZGxlTGFuZ0NoYW5nZSIsImNob3NlbkxhbmciLCJoYW5kbGVDbGljayIsImxhbmd1YWdlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ0eXBlT3B0aW9ucyIsInRlc3RUeXBlIiwic2V0VGVzdFR5cGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiY2hvc2VuVHlwZSIsImVkaXRFbmFibGVkIiwic2V0RWRpdEVuYWJsZWQiLCJlZGl0aW5nRW5hYmxlciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJDcmVhdGVUZXN0Q29udGFpbmVyIiwiVGVzdFR5cGUiLCJUZXN0VHlwZVNlbGVjdCIsInNlbGVjdGVkIiwiUGFnZUNvbnRyb2xsZXIiLCJUZXN0TmFtaW5nIiwibGdTZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFRO0FBQ3RDQyxTQUFLLEVBQUUsQ0FEK0I7QUFFdENDLE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQUZrQztBQU10Q0csTUFBRSxFQUFFO0FBQ0ZELFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBTmtDO0FBVXRDSSxNQUFFLEVBQUU7QUFDRkYsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FWa0M7QUFjdENLLFFBQUksRUFBRTtBQWRnQyxHQUFSLENBRFg7QUFB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCB7IElUZXN0LCBUTGFuZ09wdGlvbiwgVFRlc3RUeXBlcyB9IGZyb20gXCIuLi8uLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IFBob3RvTWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QaG90b01hbmFnZXJcIjtcbmltcG9ydCBUZXN0UHJldmlldyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXN0UHJldmlld1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZV90ZXN0KCkge1xuICBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSB1c2VTdGF0ZTxJVGVzdD4oe1xuICAgIHBhZ2VzOiAxLFxuICAgIGVuOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgbHY6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBydToge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIHR5cGU6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtjdXJyZW50TGFuZywgc2V0Q3VycmVudExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb24+KCk7XG4gIGNvbnN0IGhhbmRsZUxhbmdDaGFuZ2UgPSAoY2hvc2VuTGFuZzogVExhbmdPcHRpb24pID0+IHtcbiAgICBzZXRDdXJyZW50TGFuZyhjaG9zZW5MYW5nKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRUZXN0KHtcbiAgICAgIHJ1OiB7XG4gICAgICAgIG5hbWU6IFwiaW15YVwiLFxuICAgICAgICBwYWdlczogdGVzdC5ydS5wYWdlcyxcbiAgICAgIH0sXG4gICAgICBsdjogdGVzdC5sdixcbiAgICAgIGVuOiB0ZXN0LmVuLFxuICAgICAgcGFnZXM6IHRlc3QucGFnZXMsXG4gICAgICB0eXBlOiBcIlRQXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbGFuZ3VhZ2VPcHRpb25zOiBBcnJheTxUTGFuZ09wdGlvbj4gPSBbXG4gICAgeyB2YWx1ZTogXCJydVwiLCBsYWJlbDogXCJSVVwiIH0sXG4gICAgeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0sXG4gICAgeyB2YWx1ZTogXCJsdlwiLCBsYWJlbDogXCJMVlwiIH0sXG4gIF07XG5cbiAgdHlwZSBUVHlwZU9wdGlvbnMgPSB7XG4gICAgdmFsdWU6IFwiVFRcIiB8IFwiVFBcIiB8IFwiUFBcIjtcbiAgICBsYWJlbDogXCJUZXh0IOKAkyBUZXh0XCIgfCBcIlRleHQg4oCTIFBob3RvXCIgfCBcIlBob3RvIOKAkyBQaG90b1wiO1xuICB9O1xuICBjb25zdCB0eXBlT3B0aW9uczogQXJyYXk8VFR5cGVPcHRpb25zPiA9IFtcbiAgICB7IHZhbHVlOiBcIlRUXCIsIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB9LFxuICAgIHsgdmFsdWU6IFwiVFBcIiwgbGFiZWw6IFwiVGV4dCDigJMgUGhvdG9cIiB9LFxuICAgIHsgdmFsdWU6IFwiUFBcIiwgbGFiZWw6IFwiUGhvdG8g4oCTIFBob3RvXCIgfSxcbiAgXTtcblxuICBjb25zdCBbdGVzdFR5cGUsIHNldFRlc3RUeXBlXSA9IHVzZVN0YXRlPFRUZXN0VHlwZXM+KCk7XG4gIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAoY2hvc2VuVHlwZTogVFRlc3RUeXBlcyk6IHZvaWQgPT5cbiAgICBzZXRUZXN0VHlwZShjaG9zZW5UeXBlKTtcblxuICBjb25zdCBbZWRpdEVuYWJsZWQsIHNldEVkaXRFbmFibGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgZWRpdGluZ0VuYWJsZXIgPSAoY3VycmVudExhbmc6IHN0cmluZywgdGVzdFR5cGU6IHN0cmluZykgPT4ge1xuICAgIHNldEVkaXRFbmFibGVkKHRydWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKChjdXJyZW50TGFuZyAmJiB0ZXN0VHlwZSkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluIGFuIGlmXCIpO1xuICAgICAgc2V0RWRpdEVuYWJsZWQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVkaXRFbmFibGVkKGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJvdXRzaWRlIG9mIGlmXCIpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRMYW5nLCB0ZXN0VHlwZSk7XG4gIH0sIFtjdXJyZW50TGFuZywgdGVzdFR5cGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3JlYXRlVGVzdENvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlfT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e3R5cGVPcHRpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlU2VsZWN0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQ6IGFueSk6IHZvaWQgPT4gaGFuZGxlVHlwZUNoYW5nZShzZWxlY3RlZC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFnZUNvbnRyb2xsZXJ9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5BZGQgcGFnZTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwYWdlQ291bnRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGhvdG9NYW5hZ2VyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3ROYW1pbmd9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiVGVzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIlRlc3QgbmFtZVwiIC8+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdHlwZXMgZm9yIHRoZSBAc2VsZWN0ZWQgcGFyYW1ldGVyXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZDogYW55KTogdm9pZCA9PlxuICAgICAgICAgICAgaGFuZGxlTGFuZ0NoYW5nZShzZWxlY3RlZC52YWx1ZSB8fCBcIlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zPXtsYW5ndWFnZU9wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGdTZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUZXN0UHJldmlldyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVfdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})