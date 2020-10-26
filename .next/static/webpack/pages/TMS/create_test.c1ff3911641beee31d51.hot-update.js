webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_PagesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PagesController */ \"./components/PagesController.tsx\");\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction create_test() {\n  _s();\n\n  // const [currentPages, setCurrentPages] = useState<number>(1);\n  var tmpPages = 0;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      pagesRendered = _useState[0],\n      setPagesRendered = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: []\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    },\n    type: \"\"\n  }),\n      test = _useState2[0],\n      setTest = _useState2[1];\n\n  var saveTest = function saveTest(test) {\n    return setTest(test);\n  };\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      currentLang = _useState3[0],\n      setCurrentLang = _useState3[1];\n\n  var handleClick = function handleClick() {\n    setTest({\n      ru: {\n        name: \"imya\",\n        pages: test.ru.pages\n      },\n      lv: test.lv,\n      en: test.en,\n      pages: test.pages,\n      type: \"TP\"\n    });\n  };\n\n  var typeOptions = [{\n    value: \"TT\",\n    label: \"Text – Text\"\n  }, {\n    value: \"TP\",\n    label: \"Text – Photo\"\n  }, {\n    value: \"PP\",\n    label: \"Photo – Photo\"\n  }];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      testType = _useState4[0],\n      setTestType = _useState4[1];\n\n  var handleTypeChange = function handleTypeChange(chosenType) {\n    return setTestType(chosenType);\n  }; // const [editEnabled, setEditEnabled] = useState<boolean>(false);\n  // useEffect(() => {\n  //   if ((currentLang && testType) != undefined) {\n  //     console.log(\"in an if\");\n  //     setEditEnabled(true);\n  //   } else {\n  //     setEditEnabled(false);\n  //   }\n  //   console.log(\"outside of if\");\n  //   console.log(currentLang, testType);\n  // }, [currentLang, testType]);\n\n\n  var handleNumberInputChange = function handleNumberInputChange(event) {\n    console.log(event.currentTarget.value);\n\n    if (Number(event.currentTarget.value) >= 1 && event.currentTarget.value != undefined && Number(event.currentTarget.value) < 50) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: Number(event.currentTarget.value)\n      }));\n    }\n  };\n\n  var removePage = function removePage(event) {\n    if (test.pages !== 1) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages - 1\n      }));\n    }\n  };\n\n  var addPage = function addPage(event) {\n    if (test.pages < 50) {\n      setTest(_objectSpread(_objectSpread({}, test), {}, {\n        pages: test.pages + 1\n      }));\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(test.pages);\n\n    if (didMountRef.current) {\n      setPagesRendered(true);\n    } else {\n      setPagesRendered(true);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.CreateTestContainer,\n    ref: didMountRef,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestType,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: typeOptions,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestTypeSelect,\n    onChange: function onChange(selected) {\n      return handleTypeChange(selected.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.PageController,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.AddPageCont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"Pages:\"), __jsx(\"button\", {\n    disabled: pagesRendered,\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: removePage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, \"-\"), __jsx(\"input\", {\n    disabled: pagesRendered,\n    type: \"number\",\n    name: \"pagesNumber\",\n    id: \"pagesNumberIndicator\",\n    placeholder: test.pages.toString() // value={currentPages}\n    ,\n    onChange: handleNumberInputChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ChangePagesBtn,\n    onClick: addPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  }, \"+\")), __jsx(_components_PagesController__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentPages: test.pages,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  })), testType === \"TT\" || testType === undefined ? null : __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TestNaming,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentLang: currentLang,\n    saveTest: saveTest,\n    currentStateOfTest: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  })), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(create_test, \"7YXIAoXbUTZKzFruIte0Ng9kLGI=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidG1wUGFnZXMiLCJ1c2VTdGF0ZSIsInBhZ2VzUmVuZGVyZWQiLCJzZXRQYWdlc1JlbmRlcmVkIiwicGFnZXMiLCJlbiIsIm5hbWUiLCJsdiIsInJ1IiwidHlwZSIsInRlc3QiLCJzZXRUZXN0Iiwic2F2ZVRlc3QiLCJjdXJyZW50TGFuZyIsInNldEN1cnJlbnRMYW5nIiwiaGFuZGxlQ2xpY2siLCJ0eXBlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ0ZXN0VHlwZSIsInNldFRlc3RUeXBlIiwiaGFuZGxlVHlwZUNoYW5nZSIsImNob3NlblR5cGUiLCJoYW5kbGVOdW1iZXJJbnB1dENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJyZW1vdmVQYWdlIiwiYWRkUGFnZSIsInVzZUVmZmVjdCIsImRpZE1vdW50UmVmIiwiY3VycmVudCIsInVzZVJlZiIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlRlc3RUeXBlU2VsZWN0Iiwic2VsZWN0ZWQiLCJQYWdlQ29udHJvbGxlciIsIkFkZFBhZ2VDb250IiwiQ2hhbmdlUGFnZXNCdG4iLCJ0b1N0cmluZyIsIlRlc3ROYW1pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQ3JCO0FBQ0EsTUFBSUMsUUFBZ0IsR0FBRyxDQUF2Qjs7QUFGcUIsa0JBR3FCQyxzREFBUSxFQUg3QjtBQUFBLE1BR2RDLGFBSGM7QUFBQSxNQUdDQyxnQkFIRDs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBUTtBQUN0Q0csU0FBSyxFQUFFLENBRCtCO0FBRXRDQyxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFO0FBRkwsS0FGa0M7QUFNdENHLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQU5rQztBQVV0Q0ksTUFBRSxFQUFFO0FBQ0ZGLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMLEtBVmtDO0FBY3RDSyxRQUFJLEVBQUU7QUFkZ0MsR0FBUixDQUpYO0FBQUEsTUFJZEMsSUFKYztBQUFBLE1BSVJDLE9BSlE7O0FBb0JyQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixJQUFEO0FBQUEsV0FBdUJDLE9BQU8sQ0FBQ0QsSUFBRCxDQUE5QjtBQUFBLEdBQWpCOztBQXBCcUIsbUJBcUJpQlQsc0RBQVEsRUFyQnpCO0FBQUEsTUFxQmRZLFdBckJjO0FBQUEsTUFxQkRDLGNBckJDOztBQXNCckIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkosV0FBTyxDQUFDO0FBQ05ILFFBQUUsRUFBRTtBQUNGRixZQUFJLEVBQUUsTUFESjtBQUVGRixhQUFLLEVBQUVNLElBQUksQ0FBQ0YsRUFBTCxDQUFRSjtBQUZiLE9BREU7QUFLTkcsUUFBRSxFQUFFRyxJQUFJLENBQUNILEVBTEg7QUFNTkYsUUFBRSxFQUFFSyxJQUFJLENBQUNMLEVBTkg7QUFPTkQsV0FBSyxFQUFFTSxJQUFJLENBQUNOLEtBUE47QUFRTkssVUFBSSxFQUFFO0FBUkEsS0FBRCxDQUFQO0FBVUQsR0FYRDs7QUFpQkEsTUFBTU8sV0FBZ0MsR0FBRyxDQUN2QztBQUFFQyxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FEdUMsRUFFdkM7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBRnVDLEVBR3ZDO0FBQUVELFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUh1QyxDQUF6Qzs7QUF2Q3FCLG1CQTZDV2pCLHNEQUFRLEVBN0NuQjtBQUFBLE1BNkNka0IsUUE3Q2M7QUFBQSxNQTZDSkMsV0E3Q0k7O0FBOENyQixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQ7QUFBQSxXQUN2QkYsV0FBVyxDQUFDRSxVQUFELENBRFk7QUFBQSxHQUF6QixDQTlDcUIsQ0FpRHJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FDOUJDLEtBRDhCLEVBRTNCO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLGFBQU4sQ0FBb0JWLEtBQWhDOztBQUNBLFFBQ0VXLE1BQU0sQ0FBQ0osS0FBSyxDQUFDRyxhQUFOLENBQW9CVixLQUFyQixDQUFOLElBQXFDLENBQXJDLElBQ0FPLEtBQUssQ0FBQ0csYUFBTixDQUFvQlYsS0FBcEIsSUFBNkJZLFNBRDdCLElBRUFELE1BQU0sQ0FBQ0osS0FBSyxDQUFDRyxhQUFOLENBQW9CVixLQUFyQixDQUFOLEdBQW9DLEVBSHRDLEVBSUU7QUFDQU4sYUFBTyxpQ0FDRkQsSUFERTtBQUVMTixhQUFLLEVBQUV3QixNQUFNLENBQUNKLEtBQUssQ0FBQ0csYUFBTixDQUFvQlYsS0FBckI7QUFGUixTQUFQO0FBSUQ7QUFDRixHQWREOztBQWdCQSxNQUFNYSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNqQk4sS0FEaUIsRUFFUjtBQUNULFFBQUlkLElBQUksQ0FBQ04sS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCTyxhQUFPLGlDQUNGRCxJQURFO0FBRUxOLGFBQUssRUFBRU0sSUFBSSxDQUFDTixLQUFMLEdBQWE7QUFGZixTQUFQO0FBSUQ7QUFDRixHQVREOztBQVdBLE1BQU0yQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUNkUCxLQURjLEVBRUw7QUFDVCxRQUFJZCxJQUFJLENBQUNOLEtBQUwsR0FBYSxFQUFqQixFQUFxQjtBQUNuQk8sYUFBTyxpQ0FDRkQsSUFERTtBQUVMTixhQUFLLEVBQUVNLElBQUksQ0FBQ04sS0FBTCxHQUFhO0FBRmYsU0FBUDtBQUlEO0FBQ0YsR0FURDs7QUFXQTRCLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxXQUFPLENBQUNDLEdBQVIsQ0FBWWhCLElBQUksQ0FBQ04sS0FBakI7O0FBQ0EsUUFBSTZCLFdBQVcsQ0FBQ0MsT0FBaEIsRUFBeUI7QUFDdkIvQixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLHNCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEdBUFEsQ0FBVDtBQVNBLE1BQU04QixXQUFXLEdBQUdFLG9EQUFNLEVBQTFCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsc0VBQU0sQ0FBQ0MsbUJBQXZCO0FBQTRDLE9BQUcsRUFBRUosV0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRyxzRUFBTSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFdBQU8sRUFBRXRCLFdBRFg7QUFFRSxhQUFTLEVBQUVvQixzRUFBTSxDQUFDRyxjQUZwQjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0MsUUFBRDtBQUFBLGFBQXlCbkIsZ0JBQWdCLENBQUNtQixRQUFRLENBQUN2QixLQUFWLENBQXpDO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFFbUIsc0VBQU0sQ0FBQ0ssY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxzRUFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFDRSxZQUFRLEVBQUV4QyxhQURaO0FBRUUsYUFBUyxFQUFFa0Msc0VBQU0sQ0FBQ08sY0FGcEI7QUFHRSxXQUFPLEVBQUViLFVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLEVBU0U7QUFDRSxZQUFRLEVBQUU1QixhQURaO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFJLEVBQUMsYUFIUDtBQUlFLE1BQUUsRUFBQyxzQkFKTDtBQUtFLGVBQVcsRUFBRVEsSUFBSSxDQUFDTixLQUFMLENBQVd3QyxRQUFYLEVBTGYsQ0FNRTtBQU5GO0FBT0UsWUFBUSxFQUFFckIsdUJBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBa0JFO0FBQVEsYUFBUyxFQUFFYSxzRUFBTSxDQUFDTyxjQUExQjtBQUEwQyxXQUFPLEVBQUVaLE9BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FsQkYsQ0FERixFQXVCRSxNQUFDLG1FQUFEO0FBQWlCLGdCQUFZLEVBQUVyQixJQUFJLENBQUNOLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsQ0FSRixFQWlDR2UsUUFBUSxLQUFPLElBQWYsSUFDREEsUUFBUSxLQUFLVSxTQURaLEdBQ3dCLElBRHhCLEdBRUMsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNKLEVBcUNFO0FBQUssYUFBUyxFQUFFTyxzRUFBTSxDQUFDUyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLGVBQVcsRUFBRWhDLFdBRGY7QUFFRSxZQUFRLEVBQUVELFFBRlo7QUFHRSxzQkFBa0IsRUFBRUYsSUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBckNGLEVBNENFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDRixDQURGO0FBZ0REOztHQTlKUVgsVzs7QUFnS01BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgSVRlc3QsIFRMYW5nT3B0aW9uLCBUVGVzdFR5cGVzIH0gZnJvbSBcIi4uLy4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgUGFnZXNDb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlclwiO1xuaW1wb3J0IFBob3RvTWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QaG90b01hbmFnZXJcIjtcbmltcG9ydCBUZXN0TmFtZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdE5hbWVyXCI7XG5pbXBvcnQgVGVzdFByZXZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdFByZXZpZXdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfdGVzdCgpIHtcbiAgLy8gY29uc3QgW2N1cnJlbnRQYWdlcywgc2V0Q3VycmVudFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGxldCB0bXBQYWdlczogbnVtYmVyID0gMDtcbiAgY29uc3QgW3BhZ2VzUmVuZGVyZWQsIHNldFBhZ2VzUmVuZGVyZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKTtcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGU8SVRlc3Q+KHtcbiAgICBwYWdlczogMSxcbiAgICBlbjoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICAgIGx2OiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFtdLFxuICAgIH0sXG4gICAgcnU6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcbiAgY29uc3Qgc2F2ZVRlc3QgPSAodGVzdDogSVRlc3QpOiB2b2lkID0+IHNldFRlc3QodGVzdCk7XG4gIGNvbnN0IFtjdXJyZW50TGFuZywgc2V0Q3VycmVudExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb24+KCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRlc3Qoe1xuICAgICAgcnU6IHtcbiAgICAgICAgbmFtZTogXCJpbXlhXCIsXG4gICAgICAgIHBhZ2VzOiB0ZXN0LnJ1LnBhZ2VzLFxuICAgICAgfSxcbiAgICAgIGx2OiB0ZXN0Lmx2LFxuICAgICAgZW46IHRlc3QuZW4sXG4gICAgICBwYWdlczogdGVzdC5wYWdlcyxcbiAgICAgIHR5cGU6IFwiVFBcIixcbiAgICB9KTtcbiAgfTtcblxuICB0eXBlIFRUeXBlT3B0aW9ucyA9IHtcbiAgICB2YWx1ZTogXCJUVFwiIHwgXCJUUFwiIHwgXCJQUFwiO1xuICAgIGxhYmVsOiBcIlRleHQg4oCTIFRleHRcIiB8IFwiVGV4dCDigJMgUGhvdG9cIiB8IFwiUGhvdG8g4oCTIFBob3RvXCI7XG4gIH07XG4gIGNvbnN0IHR5cGVPcHRpb25zOiBBcnJheTxUVHlwZU9wdGlvbnM+ID0gW1xuICAgIHsgdmFsdWU6IFwiVFRcIiwgbGFiZWw6IFwiVGV4dCDigJMgVGV4dFwiIH0sXG4gICAgeyB2YWx1ZTogXCJUUFwiLCBsYWJlbDogXCJUZXh0IOKAkyBQaG90b1wiIH0sXG4gICAgeyB2YWx1ZTogXCJQUFwiLCBsYWJlbDogXCJQaG90byDigJMgUGhvdG9cIiB9LFxuICBdO1xuXG4gIGNvbnN0IFt0ZXN0VHlwZSwgc2V0VGVzdFR5cGVdID0gdXNlU3RhdGU8VFRlc3RUeXBlcz4oKTtcbiAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChjaG9zZW5UeXBlOiBUVGVzdFR5cGVzKTogdm9pZCA9PlxuICAgIHNldFRlc3RUeXBlKGNob3NlblR5cGUpO1xuXG4gIC8vIGNvbnN0IFtlZGl0RW5hYmxlZCwgc2V0RWRpdEVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICgoY3VycmVudExhbmcgJiYgdGVzdFR5cGUpICE9IHVuZGVmaW5lZCkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJpbiBhbiBpZlwiKTtcbiAgLy8gICAgIHNldEVkaXRFbmFibGVkKHRydWUpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRFZGl0RW5hYmxlZChmYWxzZSk7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUubG9nKFwib3V0c2lkZSBvZiBpZlwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50TGFuZywgdGVzdFR5cGUpO1xuICAvLyB9LCBbY3VycmVudExhbmcsIHRlc3RUeXBlXSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtYmVySW5wdXRDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSA+PSAxICYmXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpIDwgNTBcbiAgICApIHtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIGlmICh0ZXN0LnBhZ2VzICE9PSAxKSB7XG4gICAgICBzZXRUZXN0KHtcbiAgICAgICAgLi4udGVzdCxcbiAgICAgICAgcGFnZXM6IHRlc3QucGFnZXMgLSAxLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIGlmICh0ZXN0LnBhZ2VzIDwgNTApIHtcbiAgICAgIHNldFRlc3Qoe1xuICAgICAgICAuLi50ZXN0LFxuICAgICAgICBwYWdlczogdGVzdC5wYWdlcyArIDEsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0ZXN0LnBhZ2VzKTtcbiAgICBpZiAoZGlkTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgc2V0UGFnZXNSZW5kZXJlZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UGFnZXNSZW5kZXJlZCh0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRpZE1vdW50UmVmID0gdXNlUmVmKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNyZWF0ZVRlc3RDb250YWluZXJ9IHJlZj17ZGlkTW91bnRSZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXt0eXBlT3B0aW9uc31cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZVNlbGVjdH1cbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkOiBhbnkpOiB2b2lkID0+IGhhbmRsZVR5cGVDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2VDb250cm9sbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BZGRQYWdlQ29udH0+XG4gICAgICAgICAgPHNwYW4+UGFnZXM6PC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlc1JlbmRlcmVkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlUGFnZXNCdG59XG4gICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVQYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlc1JlbmRlcmVkfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicGFnZXNOdW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwYWdlc051bWJlckluZGljYXRvclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGVzdC5wYWdlcy50b1N0cmluZygpfVxuICAgICAgICAgICAgLy8gdmFsdWU9e2N1cnJlbnRQYWdlc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1iZXJJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlUGFnZXNCdG59IG9uQ2xpY2s9e2FkZFBhZ2V9PlxuICAgICAgICAgICAgK1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBhZ2VzQ29udHJvbGxlciBjdXJyZW50UGFnZXM9e3Rlc3QucGFnZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0ZXN0VHlwZSA9PT0gKChcIlRUXCIgYXMgdW5rbm93bikgYXMgVFRlc3RUeXBlcykgfHxcbiAgICAgIHRlc3RUeXBlID09PSB1bmRlZmluZWQgPyBudWxsIDogKFxuICAgICAgICA8UGhvdG9NYW5hZ2VyIC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgICAgPFRlc3ROYW1lclxuICAgICAgICAgIGN1cnJlbnRMYW5nPXtjdXJyZW50TGFuZ31cbiAgICAgICAgICBzYXZlVGVzdD17c2F2ZVRlc3R9XG4gICAgICAgICAgY3VycmVudFN0YXRlT2ZUZXN0PXt0ZXN0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8VGVzdFByZXZpZXcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlX3Rlc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})