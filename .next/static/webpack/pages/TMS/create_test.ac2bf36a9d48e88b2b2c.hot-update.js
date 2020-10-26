webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PagesController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PagesController */ \"./components/PagesController.tsx\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      currentPages = _useState[0],\n      setCurrentPages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    pages: currentPages,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState2[0],\n      setTest = _useState2[1];\n\n  var saveTest = function saveTest(test) {\n    return setTest(test);\n  };\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      currentLang = _useState3[0],\n      setCurrentLang = _useState3[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      testType = _useState4[0],\n      setTestType = _useState4[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  }; // const [editEnabled, setEditEnabled] = useState<boolean>(false);\n  // useEffect(() => {\n  //   if ((currentLang && testType) != undefined) {\n  //     console.log(\"in an if\");\n  //     setEditEnabled(true);\n  //   } else {\n  //     setEditEnabled(false);\n  //   }\n  //   console.log(\"outside of if\");\n  //   console.log(currentLang, testType);\n  // }, [currentLang, testType]);\n\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.AddPageCont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.AddPageBtn,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Add page +\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.NumberOfPagesToAdd,\n    onChange: e,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  })), __jsx(_components_PagesController__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    currentPages: test.pages,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  })), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    currentLang: currentLang,\n    saveTest: saveTest,\n    currentStateOfTest: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"8CCYj6yOuGgN+GNSHimYMwhB3vw=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZXMiLCJzZXRDdXJyZW50UGFnZXMiLCJwYWdlcyIsImVuIiwibmFtZSIsImx2IiwicnUiLCJ0eXBlIiwidGVzdCIsInNldFRlc3QiLCJzYXZlVGVzdCIsImN1cnJlbnRMYW5nIiwic2V0Q3VycmVudExhbmciLCJoYW5kbGVDbGljayIsInR5cGVPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInRlc3RUeXBlIiwic2V0VGVzdFR5cGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiY2hvc2VuVHlwZSIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlRlc3RUeXBlU2VsZWN0Iiwic2VsZWN0ZWQiLCJQYWdlQ29udHJvbGxlciIsIkFkZFBhZ2VDb250IiwiQWRkUGFnZUJ0biIsIk51bWJlck9mUGFnZXNUb0FkZCIsImUiLCJ1bmRlZmluZWQiLCJUZXN0TmFtaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQVMsQ0FBVCxDQUQzQjtBQUFBLE1BQ2RDLFlBRGM7QUFBQSxNQUNBQyxlQURBOztBQUFBLG1CQUdHRixzREFBUSxDQUFRO0FBQ3RDRyxTQUFLLEVBQUVGLFlBRCtCO0FBRXRDRyxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FGa0M7QUFNdENHLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQU5rQztBQVV0Q0ksTUFBRSxFQUFFO0FBQ0ZGLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtB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ZixJQUNEQSxRQUFRLEtBQUtjLFNBRFosR0FDd0IsSUFEeEIsR0FFQyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkosRUEwQkU7QUFBSyxhQUFTLEVBQUVWLHNFQUFNLENBQUNXLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsZUFBVyxFQUFFckIsV0FEZjtBQUVFLFlBQVEsRUFBRUQsUUFGWjtBQUdFLHNCQUFrQixFQUFFRixJQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0ExQkYsRUFpQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLENBREY7QUFxQ0Q7O0dBakdRVixXOztBQW1HTUEsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UTVMvY3JlYXRlX3Rlc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgSVRlc3QsIFRMYW5nT3B0aW9uLCBUVGVzdFR5cGVzIH0gZnJvbSBcIi4uLy4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgUGFnZXNDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlclwiO1xuaW1wb3J0IFBob3RvTWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QaG90b01hbmFnZXJcIjtcbmltcG9ydCBUZXN0TmFtZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdE5hbWVyXCI7XG5pbXBvcnQgVGVzdFByZXZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdFByZXZpZXdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfdGVzdCgpIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlcywgc2V0Q3VycmVudFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGU8SVRlc3Q+KHtcbiAgICBwYWdlczogY3VycmVudFBhZ2VzLFxuICAgIGVuOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgbHY6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBydToge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIHR5cGU6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBzYXZlVGVzdCA9ICh0ZXN0OiBJVGVzdCk6IHZvaWQgPT4gc2V0VGVzdCh0ZXN0KTtcbiAgY29uc3QgW2N1cnJlbnRMYW5nLCBzZXRDdXJyZW50TGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbj4oKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0VGVzdCh7XG4gICAgICBydToge1xuICAgICAgICBuYW1lOiBcImlteWFcIixcbiAgICAgICAgcGFnZXM6IHRlc3QucnUucGFnZXMsXG4gICAgICB9LFxuICAgICAgbHY6IHRlc3QubHYsXG4gICAgICBlbjogdGVzdC5lbixcbiAgICAgIHBhZ2VzOiB0ZXN0LnBhZ2VzLFxuICAgICAgdHlwZTogXCJUUFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIHR5cGUgVFR5cGVPcHRpb25zID0ge1xuICAgIHZhbHVlOiBcIlRUXCIgfCBcIlRQXCIgfCBcIlBQXCI7XG4gICAgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIHwgXCJUZXh0IOKAkyBQaG90b1wiIHwgXCJQaG90byDigJMgUGhvdG9cIjtcbiAgfTtcbiAgY29uc3QgdHlwZU9wdGlvbnM6IEFycmF5PFRUeXBlT3B0aW9ucz4gPSBbXG4gICAgeyB2YWx1ZTogXCJUVFwiLCBsYWJlbDogXCJUZXh0IOKAkyBUZXh0XCIgfSxcbiAgICB7IHZhbHVlOiBcIlRQXCIsIGxhYmVsOiBcIlRleHQg4oCTIFBob3RvXCIgfSxcbiAgICB7IHZhbHVlOiBcIlBQXCIsIGxhYmVsOiBcIlBob3RvIOKAkyBQaG90b1wiIH0sXG4gIF07XG5cbiAgY29uc3QgW3Rlc3RUeXBlLCBzZXRUZXN0VHlwZV0gPSB1c2VTdGF0ZTxUVGVzdFR5cGVzPigpO1xuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKGNob3NlblR5cGU6IFRUZXN0VHlwZXMpOiB2b2lkID0+XG4gICAgc2V0VGVzdFR5cGUoY2hvc2VuVHlwZSk7XG5cbiAgLy8gY29uc3QgW2VkaXRFbmFibGVkLCBzZXRFZGl0RW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKChjdXJyZW50TGFuZyAmJiB0ZXN0VHlwZSkgIT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcImluIGFuIGlmXCIpO1xuICAvLyAgICAgc2V0RWRpdEVuYWJsZWQodHJ1ZSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHNldEVkaXRFbmFibGVkKGZhbHNlKTtcbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5sb2coXCJvdXRzaWRlIG9mIGlmXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKGN1cnJlbnRMYW5nLCB0ZXN0VHlwZSk7XG4gIC8vIH0sIFtjdXJyZW50TGFuZywgdGVzdFR5cGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3JlYXRlVGVzdENvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlfT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e3R5cGVPcHRpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlU2VsZWN0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQ6IGFueSk6IHZvaWQgPT4gaGFuZGxlVHlwZUNoYW5nZShzZWxlY3RlZC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFnZUNvbnRyb2xsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFkZFBhZ2VDb250fT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkFkZFBhZ2VCdG59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIEFkZCBwYWdlICtcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBhZ2VDb3VudFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5OdW1iZXJPZlBhZ2VzVG9BZGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBhZ2VzQ29udHJvbGxlciBjdXJyZW50UGFnZXM9e3Rlc3QucGFnZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0ZXN0VHlwZSA9PT0gKChcIlRUXCIgYXMgdW5rbm93bikgYXMgVFRlc3RUeXBlcykgfHxcbiAgICAgIHRlc3RUeXBlID09PSB1bmRlZmluZWQgPyBudWxsIDogKFxuICAgICAgICA8UGhvdG9NYW5hZ2VyIC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgICAgPFRlc3ROYW1lclxuICAgICAgICAgIGN1cnJlbnRMYW5nPXtjdXJyZW50TGFuZ31cbiAgICAgICAgICBzYXZlVGVzdD17c2F2ZVRlc3R9XG4gICAgICAgICAgY3VycmVudFN0YXRlT2ZUZXN0PXt0ZXN0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8VGVzdFByZXZpZXcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlX3Rlc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})