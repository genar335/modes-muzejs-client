webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleLangChange = function handleLangChange(chosenLang) {\n    setCurrentLang(chosenLang);\n  };\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var languageOptions = [{\n    value: \"ru\",\n    label: \"RU\"\n  }, {\n    value: \"en\",\n    label: \"EN\"\n  }, {\n    value: \"lv\",\n    label: \"LV\"\n  }];\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      editEnabled = _useState4[0],\n      setEditEnabled = _useState4[1];\n\n  var editingEnabler = function editingEnabler(currentLang, testType) {\n    alert(\"Yay\");\n    setEditEnabled(true);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if ((currentLang && testType) != undefined) {\n      console.log(\"in an if\");\n      editingEnabler(currentLang.value, testType.type);\n    } else {\n      setEditEnabled(false);\n    }\n\n    console.log(\"outside of if\");\n    console.log(currentLang, testType);\n  }, [currentLang, testType]);\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, \"Add page\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  })), __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"TestName\",\n    placeholder: \"Test name\",\n    disabled: !editEnabled,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // TODO: Need to figure out types for the @selected parameter\n  , {\n    onChange: function onChange(selected) {\n      return handleLangChange(selected.value || \"\");\n    },\n    options: languageOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.lgSelect,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"4Ql6slzQQhhpN4RoCT5hJQdoCG8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJjdXJyZW50TGFuZyIsInNldEN1cnJlbnRMYW5nIiwiaGFuZGxlTGFuZ0NoYW5nZSIsImNob3NlbkxhbmciLCJoYW5kbGVDbGljayIsImxhbmd1YWdlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ0eXBlT3B0aW9ucyIsInRlc3RUeXBlIiwic2V0VGVzdFR5cGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiY2hvc2VuVHlwZSIsImVkaXRFbmFibGVkIiwic2V0RWRpdEVuYWJsZWQiLCJlZGl0aW5nRW5hYmxlciIsImFsZXJ0IiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlRlc3RUeXBlU2VsZWN0Iiwic2VsZWN0ZWQiLCJQYWdlQ29udHJvbGxlciIsIlRlc3ROYW1pbmciLCJsZ1NlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQVE7QUFDdENDLFNBQUssRUFBRSxDQUQrQjtBQUV0Q0MsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBRmtDO0FBTXRDRyxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FOa0M7QUFVdENJLE1BQUUsRUFBRTtBQUNGRixVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQVZrQztBQWN0Q0ssUUFBSSxFQUFFO0FBZGdDLEdBQVIs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O0FBQUE7QUFBQSxJQTdCRixDQURGO0FBaUNEOztHQTFHUXRDLFc7O0FBNEdNQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9jcmVhdGVfdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBJVGVzdCwgVExhbmdPcHRpb24sIFRUZXN0VHlwZXMgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBQaG90b01hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9NYW5hZ2VyXCI7XG5pbXBvcnQgVGVzdFByZXZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdFByZXZpZXdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfdGVzdCgpIHtcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGU8SVRlc3Q+KHtcbiAgICBwYWdlczogMSxcbiAgICBlbjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIGx2OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgcnU6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBbY3VycmVudExhbmcsIHNldEN1cnJlbnRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uPigpO1xuICBjb25zdCBoYW5kbGVMYW5nQ2hhbmdlID0gKGNob3Nlbkxhbmc6IFRMYW5nT3B0aW9uKSA9PiB7XG4gICAgc2V0Q3VycmVudExhbmcoY2hvc2VuTGFuZyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0VGVzdCh7XG4gICAgICBydToge1xuICAgICAgICBuYW1lOiBcImlteWFcIixcbiAgICAgICAgcGFnZXM6IHRlc3QucnUucGFnZXMsXG4gICAgICB9LFxuICAgICAgbHY6IHRlc3QubHYsXG4gICAgICBlbjogdGVzdC5lbixcbiAgICAgIHBhZ2VzOiB0ZXN0LnBhZ2VzLFxuICAgICAgdHlwZTogXCJUUFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxhbmd1YWdlT3B0aW9uczogQXJyYXk8VExhbmdPcHRpb24+ID0gW1xuICAgIHsgdmFsdWU6IFwicnVcIiwgbGFiZWw6IFwiUlVcIiB9LFxuICAgIHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9LFxuICAgIHsgdmFsdWU6IFwibHZcIiwgbGFiZWw6IFwiTFZcIiB9LFxuICBdO1xuXG4gIHR5cGUgVFR5cGVPcHRpb25zID0ge1xuICAgIHZhbHVlOiBcIlRUXCIgfCBcIlRQXCIgfCBcIlBQXCI7XG4gICAgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIHwgXCJUZXh0IOKAkyBQaG90b1wiIHwgXCJQaG90byDigJMgUGhvdG9cIjtcbiAgfTtcbiAgY29uc3QgdHlwZU9wdGlvbnM6IEFycmF5PFRUeXBlT3B0aW9ucz4gPSBbXG4gICAgeyB2YWx1ZTogXCJUVFwiLCBsYWJlbDogXCJUZXh0IOKAkyBUZXh0XCIgfSxcbiAgICB7IHZhbHVlOiBcIlRQXCIsIGxhYmVsOiBcIlRleHQg4oCTIFBob3RvXCIgfSxcbiAgICB7IHZhbHVlOiBcIlBQXCIsIGxhYmVsOiBcIlBob3RvIOKAkyBQaG90b1wiIH0sXG4gIF07XG5cbiAgY29uc3QgW3Rlc3RUeXBlLCBzZXRUZXN0VHlwZV0gPSB1c2VTdGF0ZTxUVGVzdFR5cGVzPigpO1xuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKGNob3NlblR5cGU6IFRUZXN0VHlwZXMpOiB2b2lkID0+XG4gICAgc2V0VGVzdFR5cGUoY2hvc2VuVHlwZSk7XG5cbiAgY29uc3QgW2VkaXRFbmFibGVkLCBzZXRFZGl0RW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGVkaXRpbmdFbmFibGVyID0gKGN1cnJlbnRMYW5nOiBzdHJpbmcsIHRlc3RUeXBlOiBzdHJpbmcpID0+IHtcbiAgICBhbGVydChcIllheVwiKTtcbiAgICBzZXRFZGl0RW5hYmxlZCh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgoY3VycmVudExhbmcgJiYgdGVzdFR5cGUpICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coXCJpbiBhbiBpZlwiKTtcbiAgICAgIGVkaXRpbmdFbmFibGVyKGN1cnJlbnRMYW5nIS52YWx1ZSwgdGVzdFR5cGUhLnR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFZGl0RW5hYmxlZChmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwib3V0c2lkZSBvZiBpZlwiKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TGFuZywgdGVzdFR5cGUpO1xuICB9LCBbY3VycmVudExhbmcsIHRlc3RUeXBlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNyZWF0ZVRlc3RDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXt0eXBlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZVNlbGVjdH1cbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+IGhhbmRsZVR5cGVDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2VDb250cm9sbGVyfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+QWRkIHBhZ2U8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicGFnZUNvdW50XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBob3RvTWFuYWdlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJUZXN0TmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZXN0IG5hbWVcIlxuICAgICAgICAgIGRpc2FibGVkPXshZWRpdEVuYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdHlwZXMgZm9yIHRoZSBAc2VsZWN0ZWQgcGFyYW1ldGVyXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZDogYW55KTogdm9pZCA9PlxuICAgICAgICAgICAgaGFuZGxlTGFuZ0NoYW5nZShzZWxlY3RlZC52YWx1ZSB8fCBcIlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zPXtsYW5ndWFnZU9wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGdTZWxlY3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUZXN0UHJldmlldyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVfdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})