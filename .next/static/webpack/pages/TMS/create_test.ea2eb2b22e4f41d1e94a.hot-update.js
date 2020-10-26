webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PagesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PagesController */ \"./components/PagesController.tsx\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _this = this;\n\n  // const [currentPages, setCurrentPages] = useState<number>(1);\n  var tmpPages = 0;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  var saveTest = function saveTest(test) {\n    return setTest(test);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      currentLang = _useState2[0],\n      setCurrentLang = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      testType = _useState3[0],\n      setTestType = _useState3[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  }; // const [editEnabled, setEditEnabled] = useState<boolean>(false);\n  // useEffect(() => {\n  //   if ((currentLang && testType) != undefined) {\n  //     console.log(\"in an if\");\n  //     setEditEnabled(true);\n  //   } else {\n  //     setEditEnabled(false);\n  //   }\n  //   console.log(\"outside of if\");\n  //   console.log(currentLang, testType);\n  // }, [currentLang, testType]);\n\n\n  var handleNumberInputChange = function handleNumberInputChange(event) {\n    console.log(event.currentTarget.value);\n\n    if (Number(event.currentTarget.value) >= 1 && event.currentTarget.value != undefined && Number(event.currentTarget.value) < 50) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: Number(event.currentTarget.value)\n      }));\n    }\n  };\n\n  var removePage = function removePage(event) {\n    if (test.pages !== 1) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages - 1\n      }));\n    }\n  };\n\n  var addPage = function addPage(event) {\n    if (test.pages < 50) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages + 1\n      }));\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.AddPageCont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, \"Pages:\"), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: removePage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"-\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pagesNumber\",\n    id: \"pagesNumberIndicator\",\n    placeholder: test.pages.toString() // value={currentPages}\n    ,\n    onChange: handleNumberInputChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: addPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"+\")), function () {\n    return __jsx(_components_PagesController__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      currentPages: test.pages,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 11\n      }\n    });\n  }), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentLang: currentLang,\n    saveTest: saveTest,\n    currentStateOfTest: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"BFe/6Sh3YYqvN2pocz7rjVWts3Q=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidG1wUGFnZXMiLCJ1c2VTdGF0ZSIsInBhZ2VzIiwiZW4iLCJuYW1lIiwibHYiLCJydSIsInR5cGUiLCJ0ZXN0Iiwic2V0VGVzdCIsInNhdmVUZXN0IiwiY3VycmVudExhbmciLCJzZXRDdXJyZW50TGFuZyIsImhhbmRsZUNsaWNrIiwidHlwZU9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwidGVzdFR5cGUiLCJzZXRUZXN0VHlwZSIsImhhbmRsZVR5cGVDaGFuZ2UiLCJjaG9zZW5UeXBlIiwiaGFuZGxlTnVtYmVySW5wdXRDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiTnVtYmVyIiwidW5kZWZpbmVkIiwicmVtb3ZlUGFnZSIsImFkZFBhZ2UiLCJzdHlsZXMiLCJDcmVhdGVUZXN0Q29udGFpbmVyIiwiVGVzdFR5cGUiLCJUZXN0VHlwZVNlbGVjdCIsInNlbGVjdGVkIiwiUGFnZUNvbnRyb2xsZXIiLCJBZGRQYWdlQ29udCIsIkNoYW5nZVBhZ2VzQnRuIiwidG9TdHJpbmciLCJUZXN0TmFtaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUNyQjtBQUNBLE1BQUlDLFFBQWdCLEdBQUcsQ0FBdkI7O0FBRnFCLGtCQUdHQyxzREFBUSxDQUFRO0FBQ3RDQyxTQUFLLEVBQUUsQ0FEK0I7QUFFdENDLE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQUZrQztBQU10Q0csTUFBRSxFQUFFO0FBQ0ZELFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBTmtDO0FBVXRDSSxNQUFFLEVB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STtBQUFBLFdBQ0EsTUFBQyxtRUFBRDtBQUFpQixrQkFBWSxFQUFFckIsSUFBSSxDQUFDTixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREE7QUFBQSxHQWxCSixDQVJGLEVBNkJHZSxRQUFRLEtBQU8sSUFBZixJQUNEQSxRQUFRLEtBQUtVLFNBRFosR0FDd0IsSUFEeEIsR0FFQyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkosRUFpQ0U7QUFBSyxhQUFTLEVBQUVHLHNFQUFNLENBQUNTLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsZUFBVyxFQUFFNUIsV0FEZjtBQUVFLFlBQVEsRUFBRUQsUUFGWjtBQUdFLHNCQUFrQixFQUFFRixJQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FqQ0YsRUF3Q0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENGLENBREY7QUE0Q0Q7O0dBOUlRVCxXOztBQWdKTUEsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UTVMvY3JlYXRlX3Rlc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgSVRlc3QsIFRMYW5nT3B0aW9uLCBUVGVzdFR5cGVzIH0gZnJvbSBcIi4uLy4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgUGFnZXNDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlclwiO1xuaW1wb3J0IFBob3RvTWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QaG90b01hbmFnZXJcIjtcbmltcG9ydCBUZXN0TmFtZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdE5hbWVyXCI7XG5pbXBvcnQgVGVzdFByZXZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdFByZXZpZXdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfdGVzdCgpIHtcbiAgLy8gY29uc3QgW2N1cnJlbnRQYWdlcywgc2V0Q3VycmVudFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGxldCB0bXBQYWdlczogbnVtYmVyID0gMDtcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGU8SVRlc3Q+KHtcbiAgICBwYWdlczogMSxcbiAgICBlbjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIGx2OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgcnU6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcbiAgY29uc3Qgc2F2ZVRlc3QgPSAodGVzdDogSVRlc3QpOiB2b2lkID0+IHNldFRlc3QodGVzdCk7XG4gIGNvbnN0IFtjdXJyZW50TGFuZywgc2V0Q3VycmVudExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb24+KCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRlc3Qoe1xuICAgICAgcnU6IHtcbiAgICAgICAgbmFtZTogXCJpbXlhXCIsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnJ1LnBhZ2VzLFxuICAgICAgfSxcbiAgICAgIGx2OiB0ZXN0Lmx2LFxuICAgICAgZW46IHRlc3QuZW4sXG4gICAgICBwYWdlczogdGVzdC5wYWdlcyxcbiAgICAgIHR5cGU6IFwiVFBcIixcbiAgICB9KTtcbiAgfTtcblxuICB0eXBlIFRUeXBlT3B0aW9ucyA9IHtcbiAgICB2YWx1ZTogXCJUVFwiIHwgXCJUUFwiIHwgXCJQUFwiO1xuICAgIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB8IFwiVGV4dCDigJMgUGhvdG9cIiB8IFwiUGhvdG8g4oCTIFBob3RvXCI7XG4gIH07XG4gIGNvbnN0IHR5cGVPcHRpb25zOiBBcnJheTxUVHlwZU9wdGlvbnM+ID0gW1xuICAgIHsgdmFsdWU6IFwiVFRcIiwgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIH0sXG4gICAgeyB2YWx1ZTogXCJUUFwiLCBsYWJlbDogXCJUZXh0IOKAkyBQaG90b1wiIH0sXG4gICAgeyB2YWx1ZTogXCJQUFwiLCBsYWJlbDogXCJQaG90byDigJMgUGhvdG9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IFt0ZXN0VHlwZSwgc2V0VGVzdFR5cGVdID0gdXNlU3RhdGU8VFRlc3RUeXBlcz4oKTtcbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChjaG9zZW5UeXBlOiBUVGVzdFR5cGVzKTogdm9pZCA9PlxuICAgIHNldFRlc3RUeXBlKGNob3NlblR5cGUpO1xuXG4gIC8vIGNvbnN0IFtlZGl0RW5hYmxlZCwgc2V0RWRpdEVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICgoY3VycmVudExhbmcgJiYgdGVzdFR5cGUpICE9IHVuZGVmaW5lZCkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJpbiBhbiBpZlwiKTtcbiAgLy8gICAgIHNldEVkaXRFbmFibGVkKHRydWUpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRFZGl0RW5hYmxlZChmYWxzZSk7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUubG9nKFwib3V0c2lkZSBvZiBpZlwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50TGFuZywgdGVzdFR5cGUpO1xuICAvLyB9LCBbY3VycmVudExhbmcsIHRlc3RUeXBlXSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtYmVySW5wdXRDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSA+PSAxICYmXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpIDwgNTBcbiAgICApIHtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIGlmICh0ZXN0LnBhZ2VzICE9PSAxKSB7XG4gICAgICBzZXRUZXN0KHtcbiAgICAgICAgLi4udGVzdCxcbiAgICAgICAgcGFnZXM6IHRlc3QucGFnZXMgLSAxLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIGlmICh0ZXN0LnBhZ2VzIDwgNTApIHtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogdGVzdC5wYWdlcyArIDEsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNyZWF0ZVRlc3RDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXt0eXBlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZVNlbGVjdH1cbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+IGhhbmRsZVR5cGVDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2VDb250cm9sbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BZGRQYWdlQ29udH0+XG4gICAgICAgICAgPHNwYW4+UGFnZXM6PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlUGFnZXNCdG59IG9uQ2xpY2s9e3JlbW92ZVBhZ2V9PlxuICAgICAgICAgICAgLVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicGFnZXNOdW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwYWdlc051bWJlckluZGljYXRvclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGVzdC5wYWdlcy50b1N0cmluZygpfVxuICAgICAgICAgICAgLy8gdmFsdWU9e2N1cnJlbnRQYWdlc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1iZXJJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlUGFnZXNCdG59IG9uQ2xpY2s9e2FkZFBhZ2V9PlxuICAgICAgICAgICAgK1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyAoKSA9PiBcbiAgICAgICAgICA8UGFnZXNDb250cm9sbGVyIGN1cnJlbnRQYWdlcz17dGVzdC5wYWdlc30gLz59XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0ZXN0VHlwZSA9PT0gKChcIlRUXCIgYXMgdW5rbm93bikgYXMgVFRlc3RUeXBlcykgfHxcbiAgICAgIHRlc3RUeXBlID09PSB1bmRlZmluZWQgPyBudWxsIDogKFxuICAgICAgICA8UGhvdG9NYW5hZ2VyIC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgICAgPFRlc3ROYW1lclxuICAgICAgICAgIGN1cnJlbnRMYW5nPXtjdXJyZW50TGFuZ31cbiAgICAgICAgICBzYXZlVGVzdD17c2F2ZVRlc3R9XG4gICAgICAgICAgY3VycmVudFN0YXRlT2ZUZXN0PXt0ZXN0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8VGVzdFByZXZpZXcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlX3Rlc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})