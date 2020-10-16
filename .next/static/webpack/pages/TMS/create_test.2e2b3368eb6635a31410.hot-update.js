webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleLangChange = function handleLangChange(chosenLang) {\n    setCurrentLang(chosenLang);\n  };\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var languageOptions = [{\n    value: \"ru\",\n    label: \"RU\"\n  }, {\n    value: \"en\",\n    label: \"EN\"\n  }, {\n    value: \"lv\",\n    label: \"LV\"\n  }];\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      editEnabled = _useState4[0],\n      setEditEnabled = _useState4[1];\n\n  var editingEnabler = function editingEnabler(currentLang, testType) {\n    alert(\"Yay\");\n    setEditEnabled(true);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if ((currentLang && testType) != undefined) {\n      console.log(\"in an if\");\n      editingEnabler(currentLang.value, testType.type);\n    } else {\n      setEditEnabled(false);\n    }\n\n    console.log(\"outside of if\");\n    console.log(currentLang, testType);\n  }, [currentLang, testType]);\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, \"Add page\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  })), __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"TestName\",\n    placeholder: \"Test name\",\n    disabled: editEnabled,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // TODO: Need to figure out types for the @selected parameter\n  , {\n    onChange: function onChange(selected) {\n      return handleLangChange(selected.value || \"\");\n    },\n    options: languageOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.lgSelect,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"4Ql6slzQQhhpN4RoCT5hJQdoCG8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJjdXJyZW50TGFuZyIsInNldEN1cnJlbnRMYW5nIiwiaGFuZGxlTGFuZ0NoYW5nZSIsImNob3NlbkxhbmciLCJoYW5kbGVDbGljayIsImxhbmd1YWdlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ0eXBlT3B0aW9ucyIsInRlc3RUeXBlIiwic2V0VGVzdFR5cGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiY2hvc2VuVHlwZSIsImVkaXRFbmFibGVkIiwic2V0RWRpdEVuYWJsZWQiLCJlZGl0aW5nRW5hYmxlciIsImFsZXJ0IiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlRlc3RUeXBlU2VsZWN0Iiwic2VsZWN0ZWQiLCJQYWdlQ29udHJvbGxlciIsIlRlc3ROYW1pbmciLCJsZ1NlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQVE7QUFDdENDLFNBQUssRUFBRSxDQUQrQjtBQUV0Q0MsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBRmtDO0FBTXRDRyxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FOa0M7QUFVdENJLE1BQUUsRUFBRTtBQUNGRixVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQVZrQztBQWN0Q0ssUUFBSSxFQUFFO0FBZGdDLEdBQVIs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O0FBQUEsSUE3QkYsQ0FERjtBQWlDRDs7R0ExR1F0QyxXOztBQTRHTUEsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UTVMvY3JlYXRlX3Rlc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgSVRlc3QsIFRMYW5nT3B0aW9uLCBUVGVzdFR5cGVzIH0gZnJvbSBcIi4uLy4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgUGhvdG9NYW5hZ2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bob3RvTWFuYWdlclwiO1xuaW1wb3J0IFRlc3RQcmV2aWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlX3Rlc3QoKSB7XG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlPElUZXN0Pih7XG4gICAgcGFnZXM6IDEsXG4gICAgZW46IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBsdjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIHJ1OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgdHlwZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgW2N1cnJlbnRMYW5nLCBzZXRDdXJyZW50TGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbj4oKTtcbiAgY29uc3QgaGFuZGxlTGFuZ0NoYW5nZSA9IChjaG9zZW5MYW5nOiBUTGFuZ09wdGlvbikgPT4ge1xuICAgIHNldEN1cnJlbnRMYW5nKGNob3NlbkxhbmcpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRlc3Qoe1xuICAgICAgcnU6IHtcbiAgICAgICAgbmFtZTogXCJpbXlhXCIsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnJ1LnBhZ2VzLFxuICAgICAgfSxcbiAgICAgIGx2OiB0ZXN0Lmx2LFxuICAgICAgZW46IHRlc3QuZW4sXG4gICAgICBwYWdlczogdGVzdC5wYWdlcyxcbiAgICAgIHR5cGU6IFwiVFBcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsYW5ndWFnZU9wdGlvbnM6IEFycmF5PFRMYW5nT3B0aW9uPiA9IFtcbiAgICB7IHZhbHVlOiBcInJ1XCIsIGxhYmVsOiBcIlJVXCIgfSxcbiAgICB7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVOXCIgfSxcbiAgICB7IHZhbHVlOiBcImx2XCIsIGxhYmVsOiBcIkxWXCIgfSxcbiAgXTtcblxuICB0eXBlIFRUeXBlT3B0aW9ucyA9IHtcbiAgICB2YWx1ZTogXCJUVFwiIHwgXCJUUFwiIHwgXCJQUFwiO1xuICAgIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB8IFwiVGV4dCDigJMgUGhvdG9cIiB8IFwiUGhvdG8g4oCTIFBob3RvXCI7XG4gIH07XG4gIGNvbnN0IHR5cGVPcHRpb25zOiBBcnJheTxUVHlwZU9wdGlvbnM+ID0gW1xuICAgIHsgdmFsdWU6IFwiVFRcIiwgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIH0sXG4gICAgeyB2YWx1ZTogXCJUUFwiLCBsYWJlbDogXCJUZXh0IOKAkyBQaG90b1wiIH0sXG4gICAgeyB2YWx1ZTogXCJQUFwiLCBsYWJlbDogXCJQaG90byDigJMgUGhvdG9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IFt0ZXN0VHlwZSwgc2V0VGVzdFR5cGVdID0gdXNlU3RhdGU8VFRlc3RUeXBlcz4oKTtcbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChjaG9zZW5UeXBlOiBUVGVzdFR5cGVzKTogdm9pZCA9PlxuICAgIHNldFRlc3RUeXBlKGNob3NlblR5cGUpO1xuXG4gIGNvbnN0IFtlZGl0RW5hYmxlZCwgc2V0RWRpdEVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBlZGl0aW5nRW5hYmxlciA9IChjdXJyZW50TGFuZzogc3RyaW5nLCB0ZXN0VHlwZTogc3RyaW5nKSA9PiB7XG4gICAgYWxlcnQoXCJZYXlcIik7XG4gICAgc2V0RWRpdEVuYWJsZWQodHJ1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoKGN1cnJlbnRMYW5nICYmIHRlc3RUeXBlKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW4gYW4gaWZcIik7XG4gICAgICBlZGl0aW5nRW5hYmxlcihjdXJyZW50TGFuZyEudmFsdWUsIHRlc3RUeXBlIS50eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RWRpdEVuYWJsZWQoZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIm91dHNpZGUgb2YgaWZcIik7XG4gICAgY29uc29sZS5sb2coY3VycmVudExhbmcsIHRlc3RUeXBlKTtcbiAgfSwgW2N1cnJlbnRMYW5nLCB0ZXN0VHlwZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DcmVhdGVUZXN0Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFR5cGV9PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFR5cGVTZWxlY3R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZDogYW55KTogdm9pZCA9PiBoYW5kbGVUeXBlQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5QYWdlQ29udHJvbGxlcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkFkZCBwYWdlPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInBhZ2VDb3VudFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQaG90b01hbmFnZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiVGVzdE5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVzdCBuYW1lXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdHlwZXMgZm9yIHRoZSBAc2VsZWN0ZWQgcGFyYW1ldGVyXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZDogYW55KTogdm9pZCA9PlxuICAgICAgICAgICAgaGFuZGxlTGFuZ0NoYW5nZShzZWxlY3RlZC52YWx1ZSB8fCBcIlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zPXtsYW5ndWFnZU9wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGdTZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUZXN0UHJldmlldyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVfdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})