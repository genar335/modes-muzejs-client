webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      editEnabled = _useState4[0],\n      setEditEnabled = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if ((currentLang && testType) != undefined) {\n      console.log(\"in an if\");\n      setEditEnabled(true);\n    } else {\n      setEditEnabled(false);\n    }\n\n    console.log(\"outside of if\");\n    console.log(currentLang, testType);\n  }, [currentLang, testType]);\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    disabled: !editEnabled,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"Add page +\"), __jsx(\"input\", {\n    disabled: !editEnabled,\n    type: \"number\",\n    name: \"pageCount\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentLang: setCurrentLang(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"4Ql6slzQQhhpN4RoCT5hJQdoCG8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJjdXJyZW50TGFuZyIsInNldEN1cnJlbnRMYW5nIiwiaGFuZGxlQ2xpY2siLCJ0eXBlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ0ZXN0VHlwZSIsInNldFRlc3RUeXBlIiwiaGFuZGxlVHlwZUNoYW5nZSIsImNob3NlblR5cGUiLCJlZGl0RW5hYmxlZCIsInNldEVkaXRFbmFibGVkIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlRlc3RUeXBlU2VsZWN0Iiwic2VsZWN0ZWQiLCJQYWdlQ29udHJvbGxlciIsIlRlc3ROYW1pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFRO0FBQ3RDQyxTQUFLLEVBQUUsQ0FEK0I7QUFFdENDLE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQUZrQztBQU10Q0csTUFBRSxFQUFFO0FBQ0ZELFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBTmtDO0FBVXRDSSxNQUFFLEVBQUU7QUFDRkYsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FWa0M7QUFjdENLLFFBQUksRUFBRTtBQWRnQyxHQUFSLENBRFg7QUFBQSxNQUNkQyxJQURjO0FBQUEsTUFDUkMsT0FEUTs7QUFBQSxtQkFrQmlCUixzREFBUSxFQWxCekI7QUFBQSxNQWtCZFMsV0Fs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QWhCSixFQWtCRTtBQUFLLGFBQVMsRUFBRUcsc0VBQU0sQ0FBQ00sVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxlQUFXLEVBQUVyQixjQUFjLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixFQTZCRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FERjtBQWlDRDs7R0EzRlFYLFc7O0FBNkZNQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9jcmVhdGVfdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBJVGVzdCwgVExhbmdPcHRpb24sIFRUZXN0VHlwZXMgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBQaG90b01hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9NYW5hZ2VyXCI7XG5pbXBvcnQgVGVzdE5hbWVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3ROYW1lclwiO1xuaW1wb3J0IFRlc3RQcmV2aWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlX3Rlc3QoKSB7XG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlPElUZXN0Pih7XG4gICAgcGFnZXM6IDEsXG4gICAgZW46IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBsdjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIHJ1OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgdHlwZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgW2N1cnJlbnRMYW5nLCBzZXRDdXJyZW50TGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbj4oKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0VGVzdCh7XG4gICAgICBydToge1xuICAgICAgICBuYW1lOiBcImlteWFcIixcbiAgICAgICAgcGFnZXM6IHRlc3QucnUucGFnZXMsXG4gICAgICB9LFxuICAgICAgbHY6IHRlc3QubHYsXG4gICAgICBlbjogdGVzdC5lbixcbiAgICAgIHBhZ2VzOiB0ZXN0LnBhZ2VzLFxuICAgICAgdHlwZTogXCJUUFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIHR5cGUgVFR5cGVPcHRpb25zID0ge1xuICAgIHZhbHVlOiBcIlRUXCIgfCBcIlRQXCIgfCBcIlBQXCI7XG4gICAgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIHwgXCJUZXh0IOKAkyBQaG90b1wiIHwgXCJQaG90byDigJMgUGhvdG9cIjtcbiAgfTtcbiAgY29uc3QgdHlwZU9wdGlvbnM6IEFycmF5PFRUeXBlT3B0aW9ucz4gPSBbXG4gICAgeyB2YWx1ZTogXCJUVFwiLCBsYWJlbDogXCJUZXh0IOKAkyBUZXh0XCIgfSxcbiAgICB7IHZhbHVlOiBcIlRQXCIsIGxhYmVsOiBcIlRleHQg4oCTIFBob3RvXCIgfSxcbiAgICB7IHZhbHVlOiBcIlBQXCIsIGxhYmVsOiBcIlBob3RvIOKAkyBQaG90b1wiIH0sXG4gIF07XG5cbiAgY29uc3QgW3Rlc3RUeXBlLCBzZXRUZXN0VHlwZV0gPSB1c2VTdGF0ZTxUVGVzdFR5cGVzPigpO1xuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKGNob3NlblR5cGU6IFRUZXN0VHlwZXMpOiB2b2lkID0+XG4gICAgc2V0VGVzdFR5cGUoY2hvc2VuVHlwZSk7XG5cbiAgY29uc3QgW2VkaXRFbmFibGVkLCBzZXRFZGl0RW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKChjdXJyZW50TGFuZyAmJiB0ZXN0VHlwZSkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluIGFuIGlmXCIpO1xuICAgICAgc2V0RWRpdEVuYWJsZWQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVkaXRFbmFibGVkKGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJvdXRzaWRlIG9mIGlmXCIpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRMYW5nLCB0ZXN0VHlwZSk7XG4gIH0sIFtjdXJyZW50TGFuZywgdGVzdFR5cGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3JlYXRlVGVzdENvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlfT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e3R5cGVPcHRpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlU2VsZWN0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQ6IGFueSk6IHZvaWQgPT4gaGFuZGxlVHlwZUNoYW5nZShzZWxlY3RlZC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFnZUNvbnRyb2xsZXJ9PlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshZWRpdEVuYWJsZWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICBBZGQgcGFnZSArXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9eyFlZGl0RW5hYmxlZH0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwYWdlQ291bnRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7dGVzdFR5cGUgPT09ICgoXCJUVFwiIGFzIHVua25vd24pIGFzIFRUZXN0VHlwZXMpIHx8XG4gICAgICB0ZXN0VHlwZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IChcbiAgICAgICAgPFBob3RvTWFuYWdlciAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICAgIDxUZXN0TmFtZXIgY3VycmVudExhbmc9e3NldEN1cnJlbnRMYW5nKCl9IC8+XG4gICAgICAgIHsvKiA8U2VsZWN0XG4gICAgICAgICAgLy8gVE9ETzogTmVlZCB0byBmaWd1cmUgb3V0IHR5cGVzIGZvciB0aGUgQHNlbGVjdGVkIHBhcmFtZXRlclxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQ6IGFueSk6IHZvaWQgPT5cbiAgICAgICAgICAgIGhhbmRsZUxhbmdDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUgfHwgXCJcIilcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9ucz17bGFuZ3VhZ2VPcHRpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxnU2VsZWN0fVxuICAgICAgICAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPFRlc3RQcmV2aWV3IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZV90ZXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})