webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PagesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PagesController */ \"./components/PagesController.tsx\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  // const [currentPages, setCurrentPages] = useState<number>(1);\n  var tmpPages = 0;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    pages: currentPages,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var saveTest = function saveTest(test) {\n    return setTest(test);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  }; // const [editEnabled, setEditEnabled] = useState<boolean>(false);\n  // useEffect(() => {\n  //   if ((currentLang && testType) != undefined) {\n  //     console.log(\"in an if\");\n  //     setEditEnabled(true);\n  //   } else {\n  //     setEditEnabled(false);\n  //   }\n  //   console.log(\"outside of if\");\n  //   console.log(currentLang, testType);\n  // }, [currentLang, testType]);\n\n\n  var handleNumberInputChange = function handleNumberInputChange(event) {\n    console.log(event.currentTarget.value);\n\n    if (Number(event.currentTarget.value) >= 1 && event.currentTarget.value != undefined && Number(event.currentTarget.value) < 50) {\n      setCurrentPages(Number(event.currentTarget.value));\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: Number(event.currentTarget.value)\n      }));\n    }\n  };\n\n  var removePage = function removePage(event) {\n    if (currentPages !== 1) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages - 1\n      }));\n    }\n  };\n\n  var addPage = function addPage(event) {\n    if (currentPages < 50) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages + 1\n      }));\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.AddPageCont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Pages:\"), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: removePage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, \"-\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pagesNumber\",\n    id: \"pagesNumberIndicator\",\n    placeholder: currentPages.toString() // value={currentPages}\n    ,\n    onChange: handleNumberInputChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: addPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, \"+\")), __jsx(_components_PagesController__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentPages: currentPages,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  })), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentLang: currentLang,\n    saveTest: saveTest,\n    currentStateOfTest: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"+VLkfS4YalwUbCe7Xj0RNzZXi4U=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidG1wUGFnZXMiLCJ1c2VTdGF0ZSIsInBhZ2VzIiwiY3VycmVudFBhZ2VzIiwiZW4iLCJuYW1lIiwibHYiLCJydSIsInR5cGUiLCJ0ZXN0Iiwic2V0VGVzdCIsInNhdmVUZXN0IiwiY3VycmVudExhbmciLCJzZXRDdXJyZW50TGFuZyIsImhhbmRsZUNsaWNrIiwidHlwZU9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwidGVzdFR5cGUiLCJzZXRUZXN0VHlwZSIsImhhbmRsZVR5cGVDaGFuZ2UiLCJjaG9zZW5UeXBlIiwiaGFuZGxlTnVtYmVySW5wdXRDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiTnVtYmVyIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudFBhZ2VzIiwicmVtb3ZlUGFnZSIsImFkZFBhZ2UiLCJzdHlsZXMiLCJDcmVhdGVUZXN0Q29udGFpbmVyIiwiVGVzdFR5cGUiLCJUZXN0VHlwZVNlbGVjdCIsInNlbGVjdGVkIiwiUGFnZUNvbnRyb2xsZXIiLCJBZGRQYWdlQ29udCIsIkNoYW5nZVBhZ2VzQnRuIiwidG9TdHJpbmciLCJUZXN0TmFtaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQjtBQUNBLE1BQUlDLFFBQWdCLEdBQUcsQ0FBdkI7O0FBRnFCLGtCQUdHQyxzREFBUSxDQUFRO0FBQ3RDQyxTQUFLLEVBQUVDLFlBRCtCO0FBRXRDQyxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFLEVBREo7QUFFRkgsV0FBSyxFQUFFO0FBRkwsS0FGa0M7QUFNdENJLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUUsRUFESjtBQUVGSCxXQUFLLEVB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MEMsV0FBTyxFQUFFUixPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYkYsQ0FERixFQWtCRSxNQUFDLG1FQUFEO0FBQWlCLGdCQUFZLEVBQUU1QixZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBUkYsRUE0QkdlLFFBQVEsS0FBTyxJQUFmLElBQ0RBLFFBQVEsS0FBS1UsU0FEWixHQUN3QixJQUR4QixHQUVDLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCSixFQWdDRTtBQUFLLGFBQVMsRUFBRUksc0VBQU0sQ0FBQ1MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxlQUFXLEVBQUU3QixXQURmO0FBRUUsWUFBUSxFQUFFRCxRQUZaO0FBR0Usc0JBQWtCLEVBQUVGLElBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhDRixFQXVDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q0YsQ0FERjtBQTJDRDs7R0E5SVFWLFc7O0FBZ0pNQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9jcmVhdGVfdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBJVGVzdCwgVExhbmdPcHRpb24sIFRUZXN0VHlwZXMgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBQYWdlc0NvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZXNDb250cm9sbGVyXCI7XG5pbXBvcnQgUGhvdG9NYW5hZ2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bob3RvTWFuYWdlclwiO1xuaW1wb3J0IFRlc3ROYW1lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXN0TmFtZXJcIjtcbmltcG9ydCBUZXN0UHJldmlldyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXN0UHJldmlld1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZV90ZXN0KCkge1xuICAvLyBjb25zdCBbY3VycmVudFBhZ2VzLCBzZXRDdXJyZW50UGFnZXNdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgbGV0IHRtcFBhZ2VzOiBudW1iZXIgPSAwO1xuICBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSB1c2VTdGF0ZTxJVGVzdD4oe1xuICAgIHBhZ2VzOiBjdXJyZW50UGFnZXMsXG4gICAgZW46IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBsdjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIHJ1OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgdHlwZTogXCJcIixcbiAgfSk7XG4gIGNvbnN0IHNhdmVUZXN0ID0gKHRlc3Q6IElUZXN0KTogdm9pZCA9PiBzZXRUZXN0KHRlc3QpO1xuICBjb25zdCBbY3VycmVudExhbmcsIHNldEN1cnJlbnRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uPigpO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRUZXN0KHtcbiAgICAgIHJ1OiB7XG4gICAgICAgIG5hbWU6IFwiaW15YVwiLFxuICAgICAgICBwYWdlczogdGVzdC5ydS5wYWdlcyxcbiAgICAgIH0sXG4gICAgICBsdjogdGVzdC5sdixcbiAgICAgIGVuOiB0ZXN0LmVuLFxuICAgICAgcGFnZXM6IHRlc3QucGFnZXMsXG4gICAgICB0eXBlOiBcIlRQXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgdHlwZSBUVHlwZU9wdGlvbnMgPSB7XG4gICAgdmFsdWU6IFwiVFRcIiB8IFwiVFBcIiB8IFwiUFBcIjtcbiAgICBsYWJlbDogXCJUZXh0IOKAkyBUZXh0XCIgfCBcIlRleHQg4oCTIFBob3RvXCIgfCBcIlBob3RvIOKAkyBQaG90b1wiO1xuICB9O1xuICBjb25zdCB0eXBlT3B0aW9uczogQXJyYXk8VFR5cGVPcHRpb25zPiA9IFtcbiAgICB7IHZhbHVlOiBcIlRUXCIsIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB9LFxuICAgIHsgdmFsdWU6IFwiVFBcIiwgbGFiZWw6IFwiVGV4dCDigJMgUGhvdG9cIiB9LFxuICAgIHsgdmFsdWU6IFwiUFBcIiwgbGFiZWw6IFwiUGhvdG8g4oCTIFBob3RvXCIgfSxcbiAgXTtcblxuICBjb25zdCBbdGVzdFR5cGUsIHNldFRlc3RUeXBlXSA9IHVzZVN0YXRlPFRUZXN0VHlwZXM+KCk7XG4gIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAoY2hvc2VuVHlwZTogVFRlc3RUeXBlcyk6IHZvaWQgPT5cbiAgICBzZXRUZXN0VHlwZShjaG9zZW5UeXBlKTtcblxuICAvLyBjb25zdCBbZWRpdEVuYWJsZWQsIHNldEVkaXRFbmFibGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoKGN1cnJlbnRMYW5nICYmIHRlc3RUeXBlKSAhPSB1bmRlZmluZWQpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiaW4gYW4gaWZcIik7XG4gIC8vICAgICBzZXRFZGl0RW5hYmxlZCh0cnVlKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgc2V0RWRpdEVuYWJsZWQoZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLmxvZyhcIm91dHNpZGUgb2YgaWZcIik7XG4gIC8vICAgY29uc29sZS5sb2coY3VycmVudExhbmcsIHRlc3RUeXBlKTtcbiAgLy8gfSwgW2N1cnJlbnRMYW5nLCB0ZXN0VHlwZV0pO1xuXG4gIGNvbnN0IGhhbmRsZU51bWJlcklucHV0Q2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoXG4gICAgICBOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkgPj0gMSAmJlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSAhPSB1bmRlZmluZWQgJiZcbiAgICAgIE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSA8IDUwXG4gICAgKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZXMoTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpKTtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIGlmIChjdXJyZW50UGFnZXMgIT09IDEpIHtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogdGVzdC5wYWdlcyAtIDEsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkUGFnZSA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlcyA8IDUwKSB7XG4gICAgICBzZXRUZXN0KHtcbiAgICAgICAgLi4udGVzdCxcbiAgICAgICAgcGFnZXM6IHRlc3QucGFnZXMgKyAxLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DcmVhdGVUZXN0Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFR5cGV9PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFR5cGVTZWxlY3R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZDogYW55KTogdm9pZCA9PiBoYW5kbGVUeXBlQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5QYWdlQ29udHJvbGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWRkUGFnZUNvbnR9PlxuICAgICAgICAgIDxzcGFuPlBhZ2VzOjwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkNoYW5nZVBhZ2VzQnRufSBvbkNsaWNrPXtyZW1vdmVQYWdlfT5cbiAgICAgICAgICAgIC1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBhZ2VzTnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwicGFnZXNOdW1iZXJJbmRpY2F0b3JcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2N1cnJlbnRQYWdlcy50b1N0cmluZygpfVxuICAgICAgICAgICAgLy8gdmFsdWU9e2N1cnJlbnRQYWdlc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1iZXJJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlUGFnZXNCdG59IG9uQ2xpY2s9e2FkZFBhZ2V9PlxuICAgICAgICAgICAgK1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBhZ2VzQ29udHJvbGxlciBjdXJyZW50UGFnZXM9e2N1cnJlbnRQYWdlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3Rlc3RUeXBlID09PSAoKFwiVFRcIiBhcyB1bmtub3duKSBhcyBUVGVzdFR5cGVzKSB8fFxuICAgICAgdGVzdFR5cGUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiAoXG4gICAgICAgIDxQaG90b01hbmFnZXIgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3ROYW1pbmd9PlxuICAgICAgICA8VGVzdE5hbWVyXG4gICAgICAgICAgY3VycmVudExhbmc9e2N1cnJlbnRMYW5nfVxuICAgICAgICAgIHNhdmVUZXN0PXtzYXZlVGVzdH1cbiAgICAgICAgICBjdXJyZW50U3RhdGVPZlRlc3Q9e3Rlc3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUZXN0UHJldmlldyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVfdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})