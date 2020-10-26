webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PagesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PagesController */ \"./components/PagesController.tsx\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      currentPages = _useState[0],\n      setCurrentPages = _useState[1];\n\n  var tmpPages = 0;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    pages: currentPages,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState2[0],\n      setTest = _useState2[1];\n\n  var saveTest = function saveTest(test) {\n    return setTest(test);\n  };\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      currentLang = _useState3[0],\n      setCurrentLang = _useState3[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      testType = _useState4[0],\n      setTestType = _useState4[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  }; // const [editEnabled, setEditEnabled] = useState<boolean>(false);\n  // useEffect(() => {\n  //   if ((currentLang && testType) != undefined) {\n  //     console.log(\"in an if\");\n  //     setEditEnabled(true);\n  //   } else {\n  //     setEditEnabled(false);\n  //   }\n  //   console.log(\"outside of if\");\n  //   console.log(currentLang, testType);\n  // }, [currentLang, testType]);\n\n\n  var handleNumberInputChange = function handleNumberInputChange(event) {\n    console.log(event.currentTarget.value);\n\n    if (Number(event.currentTarget.value) >= 1 && event.currentTarget.value != undefined && Number(event.currentTarget.value) < 50) {\n      setCurrentPages(Number(event.currentTarget.value));\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: Number(event.currentTarget.value)\n      }));\n    }\n  };\n\n  var removePage = function removePage(event) {\n    if (currentPages !== 1) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages - 1\n      }));\n    }\n  };\n\n  var addPage = function addPage(event) {\n    if (currentPages < 50) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages + 1\n      }));\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.CreateTestContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.AddPageCont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Pages:\"), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: removePage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, \"-\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pagesNumber\",\n    id: \"pagesNumberIndicator\",\n    placeholder: currentPages.toString() // value={currentPages}\n    ,\n    onChange: handleNumberInputChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: addPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, \"+\")), __jsx(_components_PagesController__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentPages: currentPages,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  })), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentLang: currentLang,\n    saveTest: saveTest,\n    currentStateOfTest: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"8CCYj6yOuGgN+GNSHimYMwhB3vw=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZXMiLCJzZXRDdXJyZW50UGFnZXMiLCJ0bXBQYWdlcyIsInBhZ2VzIiwiZW4iLCJuYW1lIiwibHYiLCJydSIsInR5cGUiLCJ0ZXN0Iiwic2V0VGVzdCIsInNhdmVUZXN0IiwiY3VycmVudExhbmciLCJzZXRDdXJyZW50TGFuZyIsImhhbmRsZUNsaWNrIiwidHlwZU9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwidGVzdFR5cGUiLCJzZXRUZXN0VHlwZSIsImhhbmRsZVR5cGVDaGFuZ2UiLCJjaG9zZW5UeXBlIiwiaGFuZGxlTnVtYmVySW5wdXRDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiTnVtYmVyIiwidW5kZWZpbmVkIiwicmVtb3ZlUGFnZSIsImFkZFBhZ2UiLCJzdHlsZXMiLCJDcmVhdGVUZXN0Q29udGFpbmVyIiwiVGVzdFR5cGUiLCJUZXN0VHlwZVNlbGVjdCIsInNlbGVjdGVkIiwiUGFnZUNvbnRyb2xsZXIiLCJBZGRQYWdlQ29udCIsIkNoYW5nZVBhZ2VzQnRuIiwidG9TdHJpbmciLCJUZXN0TmFtaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBUyxDQUFULENBRDNCO0FBQUEsTUFDZEMsWUFEYztBQUFBLE1BQ0FDLGVBREE7O0FBRXJCLE1BQUlDLFFBQWdCLEdBQUcsQ0FBdkI7O0FBRnFCLG1CQUdHSCxzREFBUSxDQUFRO0FBQ3RDSSxTQUFLLEVBQUVILFlBRCtCO0FBRXRDSSxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFF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QUFBO0FBQUE7QUFBQSxJQUxGLEVBYUU7QUFBUSxhQUFTLEVBQUVTLHNFQUFNLENBQUNPLGNBQTFCO0FBQTBDLFdBQU8sRUFBRVIsT0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWJGLENBREYsRUFrQkUsTUFBQyxtRUFBRDtBQUFpQixnQkFBWSxFQUFFOUIsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQVJGLEVBNEJHa0IsUUFBUSxLQUFPLElBQWYsSUFDREEsUUFBUSxLQUFLVSxTQURaLEdBQ3dCLElBRHhCLEdBRUMsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJKLEVBZ0NFO0FBQUssYUFBUyxFQUFFRyxzRUFBTSxDQUFDUyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLGVBQVcsRUFBRTVCLFdBRGY7QUFFRSxZQUFRLEVBQUVELFFBRlo7QUFHRSxzQkFBa0IsRUFBRUYsSUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaENGLEVBdUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixDQURGO0FBMkNEOztHQTlJUVgsVzs7QUFnSk1BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCB7IElUZXN0LCBUTGFuZ09wdGlvbiwgVFRlc3RUeXBlcyB9IGZyb20gXCIuLi8uLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IFBhZ2VzQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXJcIjtcbmltcG9ydCBQaG90b01hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9NYW5hZ2VyXCI7XG5pbXBvcnQgVGVzdE5hbWVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3ROYW1lclwiO1xuaW1wb3J0IFRlc3RQcmV2aWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlX3Rlc3QoKSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZXMsIHNldEN1cnJlbnRQYWdlc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBsZXQgdG1wUGFnZXM6IG51bWJlciA9IDA7XG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlPElUZXN0Pih7XG4gICAgcGFnZXM6IGN1cnJlbnRQYWdlcyxcbiAgICBlbjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIGx2OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgcnU6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcbiAgY29uc3Qgc2F2ZVRlc3QgPSAodGVzdDogSVRlc3QpOiB2b2lkID0+IHNldFRlc3QodGVzdCk7XG4gIGNvbnN0IFtjdXJyZW50TGFuZywgc2V0Q3VycmVudExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb24+KCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRlc3Qoe1xuICAgICAgcnU6IHtcbiAgICAgICAgbmFtZTogXCJpbXlhXCIsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnJ1LnBhZ2VzLFxuICAgICAgfSxcbiAgICAgIGx2OiB0ZXN0Lmx2LFxuICAgICAgZW46IHRlc3QuZW4sXG4gICAgICBwYWdlczogdGVzdC5wYWdlcyxcbiAgICAgIHR5cGU6IFwiVFBcIixcbiAgICB9KTtcbiAgfTtcblxuICB0eXBlIFRUeXBlT3B0aW9ucyA9IHtcbiAgICB2YWx1ZTogXCJUVFwiIHwgXCJUUFwiIHwgXCJQUFwiO1xuICAgIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB8IFwiVGV4dCDigJMgUGhvdG9cIiB8IFwiUGhvdG8g4oCTIFBob3RvXCI7XG4gIH07XG4gIGNvbnN0IHR5cGVPcHRpb25zOiBBcnJheTxUVHlwZU9wdGlvbnM+ID0gW1xuICAgIHsgdmFsdWU6IFwiVFRcIiwgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIH0sXG4gICAgeyB2YWx1ZTogXCJUUFwiLCBsYWJlbDogXCJUZXh0IOKAkyBQaG90b1wiIH0sXG4gICAgeyB2YWx1ZTogXCJQUFwiLCBsYWJlbDogXCJQaG90byDigJMgUGhvdG9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IFt0ZXN0VHlwZSwgc2V0VGVzdFR5cGVdID0gdXNlU3RhdGU8VFRlc3RUeXBlcz4oKTtcbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChjaG9zZW5UeXBlOiBUVGVzdFR5cGVzKTogdm9pZCA9PlxuICAgIHNldFRlc3RUeXBlKGNob3NlblR5cGUpO1xuXG4gIC8vIGNvbnN0IFtlZGl0RW5hYmxlZCwgc2V0RWRpdEVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICgoY3VycmVudExhbmcgJiYgdGVzdFR5cGUpICE9IHVuZGVmaW5lZCkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJpbiBhbiBpZlwiKTtcbiAgLy8gICAgIHNldEVkaXRFbmFibGVkKHRydWUpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRFZGl0RW5hYmxlZChmYWxzZSk7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUubG9nKFwib3V0c2lkZSBvZiBpZlwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50TGFuZywgdGVzdFR5cGUpO1xuICAvLyB9LCBbY3VycmVudExhbmcsIHRlc3RUeXBlXSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtYmVySW5wdXRDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSA+PSAxICYmXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpIDwgNTBcbiAgICApIHtcbiAgICAgIHNldEN1cnJlbnRQYWdlcyhOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkpO1xuICAgICAgc2V0VGVzdCh7XG4gICAgICAgIC4uLnRlc3QsXG4gICAgICAgIHBhZ2VzOiBOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSksXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGFnZSA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlcyAhPT0gMSkge1xuICAgICAgc2V0VGVzdCh7XG4gICAgICAgIC4uLnRlc3QsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnBhZ2VzIC0gMSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQYWdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApOiB2b2lkID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2VzIDwgNTApIHtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogdGVzdC5wYWdlcyArIDEsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNyZWF0ZVRlc3RDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXt0eXBlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZVNlbGVjdH1cbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+IGhhbmRsZVR5cGVDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2VDb250cm9sbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BZGRQYWdlQ29udH0+XG4gICAgICAgICAgPHNwYW4+UGFnZXM6PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlUGFnZXNCdG59IG9uQ2xpY2s9e3JlbW92ZVBhZ2V9PlxuICAgICAgICAgICAgLVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicGFnZXNOdW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwYWdlc051bWJlckluZGljYXRvclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17Y3VycmVudFBhZ2VzLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAvLyB2YWx1ZT17Y3VycmVudFBhZ2VzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU51bWJlcklucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5DaGFuZ2VQYWdlc0J0bn0gb25DbGljaz17YWRkUGFnZX0+XG4gICAgICAgICAgICArXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFnZXNDb250cm9sbGVyIGN1cnJlbnRQYWdlcz17Y3VycmVudFBhZ2VzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7dGVzdFR5cGUgPT09ICgoXCJUVFwiIGFzIHVua25vd24pIGFzIFRUZXN0VHlwZXMpIHx8XG4gICAgICB0ZXN0VHlwZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IChcbiAgICAgICAgPFBob3RvTWFuYWdlciAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICAgIDxUZXN0TmFtZXJcbiAgICAgICAgICBjdXJyZW50TGFuZz17Y3VycmVudExhbmd9XG4gICAgICAgICAgc2F2ZVRlc3Q9e3NhdmVUZXN0fVxuICAgICAgICAgIGN1cnJlbnRTdGF0ZU9mVGVzdD17dGVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRlc3RQcmV2aWV3IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZV90ZXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})