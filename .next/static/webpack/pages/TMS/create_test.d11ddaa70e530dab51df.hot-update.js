webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleLangChange = function handleLangChange(chosenLang) {\n    setCurrentLang(chosenLang);\n  };\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var languageOptions = [{\n    value: \"ru\",\n    label: \"RU\"\n  }, {\n    value: \"en\",\n    label: \"EN\"\n  }, {\n    value: \"lv\",\n    label: \"LV\"\n  }];\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, \"Add page\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  })), __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"TestName\",\n    placeholder: \"Test name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // TODO: Need to figure out types for the @selected parameter\n  , {\n    onChange: function onChange(selected) {\n      return handleLangChange(selected.value || \"\");\n    },\n    options: languageOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.lgSelect,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"34XDQ1CTS8mVixFqlAe+4i0ztvQ=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJjdXJyZW50TGFuZyIsInNldEN1cnJlbnRMYW5nIiwiaGFuZGxlTGFuZ0NoYW5nZSIsImNob3NlbkxhbmciLCJoYW5kbGVDbGljayIsImxhbmd1YWdlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ0eXBlT3B0aW9ucyIsInRlc3RUeXBlIiwic2V0VGVzdFR5cGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiY2hvc2VuVHlwZSIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlRlc3RUeXBlU2VsZWN0Iiwic2VsZWN0ZWQiLCJQYWdlQ29udHJvbGxlciIsIlRlc3ROYW1pbmciLCJsZ1NlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQVE7QUFDdENDLFNBQUssRUFBRSxDQUQrQjtBQUV0Q0MsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBRmtDO0FBTXRDRyxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FOa0M7QUFVdENJLE1BQUUsRUFBRTtBQUNGRixVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQVZrQztBQWN0Q0ssUUFBSSxFQUFFO0FBZGdDLEdBQVIsQ0FEWDtBQUFBLE1BQ2RDLElBRGM7QUFBQSxNQUNSQyxPQURROztBQUFBLG1CQWlCaUJSLHNEQUFRLENBQVMsRUFBVCxDQWpCekI7QUFBQSxNQWlCZFMsV0FqQmM7QUFB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WUFBUSxFQUFFLGtCQUFDRixRQUFEO0FBQUEsYUFDUmYsZ0JBQWdCLENBQUNlLFFBQVEsQ0FBQ1gsS0FBVCxJQUFrQixFQUFuQixDQURSO0FBQUEsS0FGWjtBQUtFLFdBQU8sRUFBRUQsZUFMWDtBQU1FLGFBQVMsRUFBRVEsc0VBQU0sQ0FBQ08sUUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBYkYsRUF3QkUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJGLENBREY7QUE0QkQ7O0dBbkZROUIsVzs7QUFxRk1BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBJVGVzdCwgVExhbmdPcHRpb24sIFRUZXN0VHlwZXMgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBQaG90b01hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9NYW5hZ2VyXCI7XG5pbXBvcnQgVGVzdFByZXZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdFByZXZpZXdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfdGVzdCgpIHtcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGU8SVRlc3Q+KHtcbiAgICBwYWdlczogMSxcbiAgICBlbjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIGx2OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgcnU6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2N1cnJlbnRMYW5nLCBzZXRDdXJyZW50TGFuZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBoYW5kbGVMYW5nQ2hhbmdlID0gKGNob3Nlbkxhbmc6IHN0cmluZykgPT4ge1xuICAgIHNldEN1cnJlbnRMYW5nKGNob3NlbkxhbmcpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRlc3Qoe1xuICAgICAgcnU6IHtcbiAgICAgICAgbmFtZTogXCJpbXlhXCIsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnJ1LnBhZ2VzLFxuICAgICAgfSxcbiAgICAgIGx2OiB0ZXN0Lmx2LFxuICAgICAgZW46IHRlc3QuZW4sXG4gICAgICBwYWdlczogdGVzdC5wYWdlcyxcbiAgICAgIHR5cGU6IFwiVFBcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsYW5ndWFnZU9wdGlvbnM6IEFycmF5PFRMYW5nT3B0aW9uPiA9IFtcbiAgICB7IHZhbHVlOiBcInJ1XCIsIGxhYmVsOiBcIlJVXCIgfSxcbiAgICB7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVOXCIgfSxcbiAgICB7IHZhbHVlOiBcImx2XCIsIGxhYmVsOiBcIkxWXCIgfSxcbiAgXTtcblxuICB0eXBlIFRUeXBlT3B0aW9ucyA9IHtcbiAgICB2YWx1ZTogXCJUVFwiIHwgXCJUUFwiIHwgXCJQUFwiO1xuICAgIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB8IFwiVGV4dCDigJMgUGhvdG9cIiB8IFwiUGhvdG8g4oCTIFBob3RvXCI7XG4gIH07XG4gIGNvbnN0IHR5cGVPcHRpb25zOiBBcnJheTxUVHlwZU9wdGlvbnM+ID0gW1xuICAgIHsgdmFsdWU6IFwiVFRcIiwgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIH0sXG4gICAgeyB2YWx1ZTogXCJUUFwiLCBsYWJlbDogXCJUZXh0IOKAkyBQaG90b1wiIH0sXG4gICAgeyB2YWx1ZTogXCJQUFwiLCBsYWJlbDogXCJQaG90byDigJMgUGhvdG9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IFt0ZXN0VHlwZSwgc2V0VGVzdFR5cGVdID0gdXNlU3RhdGU8VFRlc3RUeXBlcz4oKTtcbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChjaG9zZW5UeXBlOiBUVGVzdFR5cGVzKTogdm9pZCA9PlxuICAgIHNldFRlc3RUeXBlKGNob3NlblR5cGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DcmVhdGVUZXN0Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFR5cGV9PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFR5cGVTZWxlY3R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZDogYW55KTogdm9pZCA9PiBoYW5kbGVUeXBlQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5QYWdlQ29udHJvbGxlcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkFkZCBwYWdlPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInBhZ2VDb3VudFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQaG90b01hbmFnZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJUZXN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiVGVzdCBuYW1lXCIgLz5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIC8vIFRPRE86IE5lZWQgdG8gZmlndXJlIG91dCB0eXBlcyBmb3IgdGhlIEBzZWxlY3RlZCBwYXJhbWV0ZXJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+XG4gICAgICAgICAgICBoYW5kbGVMYW5nQ2hhbmdlKHNlbGVjdGVkLnZhbHVlIHx8IFwiXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbnM9e2xhbmd1YWdlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sZ1NlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRlc3RQcmV2aWV3IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZV90ZXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})