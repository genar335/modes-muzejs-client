webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var saveTest = function saveTest(test) {\n    return setTest(test);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      editEnabled = _useState4[0],\n      setEditEnabled = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if ((currentLang && testType) != undefined) {\n      console.log(\"in an if\");\n      setEditEnabled(true);\n    } else {\n      setEditEnabled(false);\n    }\n\n    console.log(\"outside of if\");\n    console.log(currentLang, testType);\n  }, [currentLang, testType]);\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    disabled: !editEnabled,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, \"Add page +\"), __jsx(\"input\", {\n    disabled: !editEnabled,\n    type: \"number\",\n    name: \"pageCount\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  })), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentLang: currentLang,\n    saveTest: saveTest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"4Ql6slzQQhhpN4RoCT5hJQdoCG8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJzYXZlVGVzdCIsImN1cnJlbnRMYW5nIiwic2V0Q3VycmVudExhbmciLCJoYW5kbGVDbGljayIsInR5cGVPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInRlc3RUeXBlIiwic2V0VGVzdFR5cGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiY2hvc2VuVHlwZSIsImVkaXRFbmFibGVkIiwic2V0RWRpdEVuYWJsZWQiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiQ3JlYXRlVGVzdENvbnRhaW5lciIsIlRlc3RUeXBlIiwiVGVzdFR5cGVTZWxlY3QiLCJzZWxlY3RlZCIsIlBhZ2VDb250cm9sbGVyIiwiVGVzdE5hbWluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQVE7QUFDdENDLFNBQUssRUFBRSxDQUQrQjtBQUV0Q0MsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBRmtDO0FBTXRDRyxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FOa0M7QUFVdENJLE1BQUUsRUFBRTtBQUNGRixVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQVZrQztBQWN0Q0ssUUFBSSxFQUFFO0FBZGdDLEdBQVIsQ0FEWDtBQUFBLE1BQ2RDLElBRGM7QUFBQSxNQUNSQyxPQURROztBQWlCckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFB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Y0dKLFFBQVEsS0FBTyxJQUFmLElBQ0RBLFFBQVEsS0FBS08sU0FEWixHQUN3QixJQUR4QixHQUVDLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixFQWtCRTtBQUFLLGFBQVMsRUFBRUcsc0VBQU0sQ0FBQ00sVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxlQUFXLEVBQUV0QixXQUF4QjtBQUFxQyxZQUFRLEVBQUVELFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixFQTZCRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FERjtBQWlDRDs7R0E1RlFWLFc7O0FBOEZNQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9jcmVhdGVfdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBJVGVzdCwgVExhbmdPcHRpb24sIFRUZXN0VHlwZXMgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBQaG90b01hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9NYW5hZ2VyXCI7XG5pbXBvcnQgVGVzdE5hbWVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3ROYW1lclwiO1xuaW1wb3J0IFRlc3RQcmV2aWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlX3Rlc3QoKSB7XG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlPElUZXN0Pih7XG4gICAgcGFnZXM6IDEsXG4gICAgZW46IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBsdjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIHJ1OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgdHlwZTogXCJcIixcbiAgfSk7XG4gIGNvbnN0IHNhdmVUZXN0ID0gKHRlc3Q6IElUZXN0KSA9PiBzZXRUZXN0KHRlc3QpO1xuXG4gIGNvbnN0IFtjdXJyZW50TGFuZywgc2V0Q3VycmVudExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb24+KCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRlc3Qoe1xuICAgICAgcnU6IHtcbiAgICAgICAgbmFtZTogXCJpbXlhXCIsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnJ1LnBhZ2VzLFxuICAgICAgfSxcbiAgICAgIGx2OiB0ZXN0Lmx2LFxuICAgICAgZW46IHRlc3QuZW4sXG4gICAgICBwYWdlczogdGVzdC5wYWdlcyxcbiAgICAgIHR5cGU6IFwiVFBcIixcbiAgICB9KTtcbiAgfTtcblxuICB0eXBlIFRUeXBlT3B0aW9ucyA9IHtcbiAgICB2YWx1ZTogXCJUVFwiIHwgXCJUUFwiIHwgXCJQUFwiO1xuICAgIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB8IFwiVGV4dCDigJMgUGhvdG9cIiB8IFwiUGhvdG8g4oCTIFBob3RvXCI7XG4gIH07XG4gIGNvbnN0IHR5cGVPcHRpb25zOiBBcnJheTxUVHlwZU9wdGlvbnM+ID0gW1xuICAgIHsgdmFsdWU6IFwiVFRcIiwgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIH0sXG4gICAgeyB2YWx1ZTogXCJUUFwiLCBsYWJlbDogXCJUZXh0IOKAkyBQaG90b1wiIH0sXG4gICAgeyB2YWx1ZTogXCJQUFwiLCBsYWJlbDogXCJQaG90byDigJMgUGhvdG9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IFt0ZXN0VHlwZSwgc2V0VGVzdFR5cGVdID0gdXNlU3RhdGU8VFRlc3RUeXBlcz4oKTtcbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChjaG9zZW5UeXBlOiBUVGVzdFR5cGVzKTogdm9pZCA9PlxuICAgIHNldFRlc3RUeXBlKGNob3NlblR5cGUpO1xuXG4gIGNvbnN0IFtlZGl0RW5hYmxlZCwgc2V0RWRpdEVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgoY3VycmVudExhbmcgJiYgdGVzdFR5cGUpICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coXCJpbiBhbiBpZlwiKTtcbiAgICAgIHNldEVkaXRFbmFibGVkKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFZGl0RW5hYmxlZChmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwib3V0c2lkZSBvZiBpZlwiKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TGFuZywgdGVzdFR5cGUpO1xuICB9LCBbY3VycmVudExhbmcsIHRlc3RUeXBlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNyZWF0ZVRlc3RDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXt0eXBlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZVNlbGVjdH1cbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+IGhhbmRsZVR5cGVDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2VDb250cm9sbGVyfT5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWVkaXRFbmFibGVkfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgQWRkIHBhZ2UgK1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGRpc2FibGVkPXshZWRpdEVuYWJsZWR9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicGFnZUNvdW50XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3Rlc3RUeXBlID09PSAoKFwiVFRcIiBhcyB1bmtub3duKSBhcyBUVGVzdFR5cGVzKSB8fFxuICAgICAgdGVzdFR5cGUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiAoXG4gICAgICAgIDxQaG90b01hbmFnZXIgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3ROYW1pbmd9PlxuICAgICAgICA8VGVzdE5hbWVyIGN1cnJlbnRMYW5nPXtjdXJyZW50TGFuZ30gc2F2ZVRlc3Q9e3NhdmVUZXN0fSAvPlxuICAgICAgICB7LyogPFNlbGVjdFxuICAgICAgICAgIC8vIFRPRE86IE5lZWQgdG8gZmlndXJlIG91dCB0eXBlcyBmb3IgdGhlIEBzZWxlY3RlZCBwYXJhbWV0ZXJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+XG4gICAgICAgICAgICBoYW5kbGVMYW5nQ2hhbmdlKHNlbGVjdGVkLnZhbHVlIHx8IFwiXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbnM9e2xhbmd1YWdlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sZ1NlbGVjdH1cbiAgICAgICAgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUZXN0UHJldmlldyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVfdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})