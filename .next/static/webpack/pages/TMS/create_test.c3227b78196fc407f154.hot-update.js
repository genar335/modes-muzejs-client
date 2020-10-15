webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar create_test = function create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: \"TT\",\n    pages: 1,\n    en: {\n      name: \"\",\n      pages: [{\n        QnAPairs: [{\n          question: \"\",\n          answer: \"\"\n        }]\n      }]\n    },\n    lv: {\n      name: \"\",\n      pages: []\n    },\n    ru: {\n      name: \"\",\n      pages: []\n    }\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.CreateTestContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestType,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"select\", {\n    name: \"type-selector\",\n    id: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    disabled: true,\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Test type\"), __jsx(\"option\", {\n    value: \"photo-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"Photo \\u2013 Text\"), __jsx(\"option\", {\n    value: \"photo-photo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Photo \\u2013 Photo\"), __jsx(\"option\", {\n    value: \"text-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Text \\u2013 Text\"))), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.PageController,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Add page\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    id: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  })), __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"TestName\",\n    placeholder: \"Test name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"select\", {\n    name: \"Lang-selector\",\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.lgSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    disabled: true,\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \"Language\"), __jsx(\"option\", {\n    value: \"ru\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"RU\"), __jsx(\"option\", {\n    value: \"en\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"EN\"), __jsx(\"option\", {\n    value: \"lv\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"LV\"))), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(create_test, \"Aj0X1aadOVlcXJI3q5l58FMo5R8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJ0eXBlIiwicGFnZXMiLCJlbiIsIm5hbWUiLCJRbkFQYWlycyIsInF1ZXN0aW9uIiwiYW5zd2VyIiwibHYiLCJydSIsInRlc3QiLCJzZXRUZXN0Iiwic3R5bGVzIiwiQ3JlYXRlVGVzdENvbnRhaW5lciIsIlRlc3RUeXBlIiwiUGFnZUNvbnRyb2xsZXIiLCJUZXN0TmFtaW5nIiwibGdTZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBUTtBQUN0Q0MsUUFBSSxFQUFFLElBRGdDO0FBRXRDQyxTQUFLLEVBQUUsQ0FGK0I7QUFHdENDLE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUUsQ0FBQztBQUFFRyxnQkFBUSxFQUFFLENBQUM7QUFBRUMsa0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBQUQ7QUFBWixPQUFEO0FBRkwsS0FIa0M7QUFPdENDLE1BQUUsRUFBRTtBQUNGSixVQUFJLEVBQUUsRUFESjtBQUVGRixXQUFLLEVBQUU7QUFGTCxLQVBrQztBQVd0Q08sTUFBRSxFQUFFO0FBQ0ZMLFVBQUksRUFBRSxFQURKO0FBRUZGLFdBQUssRUFBRTtBQUZMO0FBWGtDLEdBQVIsQ0FEUjtBQUFBLE1BQ2pCUSxJQURpQjtBQUFBLE1BQ1hDLE9BRFc7O0FBaUJ4QixTQUNFO0FBQUssYUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxtQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCxzRUFBTSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsZUFBYjtBQUE2QixNQUFFLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBaUIsWUFBUSxNQUF6QjtBQUEwQixZQUFRLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJRTtBQUFRLFNBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsRUFLRTtBQUFRLFNBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEYsRUFNRTtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTkYsQ0FERixDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUVGLHNFQUFNLENBQUNHLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsV0FBMUI7QUFBc0MsTUFBRSxFQUFDLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVhGLEVBZUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBSyxhQUFTLEVBQUVILHNFQUFNLENBQUNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxVQUF4QjtBQUFtQyxlQUFXLEVBQUMsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsZUFBYjtBQUE2QixhQUFTLEVBQUVKLHNFQUFNLENBQUNLLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQWlCLFlBQVEsTUFBekI7QUFBMEIsWUFBUSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBSUU7QUFBUSxTQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkYsRUFLRTtBQUFRLFNBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMRixFQU1FO0FBQVEsU0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU5GLENBRkYsQ0FoQkYsRUEyQkUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBREY7QUErQkQsQ0FoREQ7O0dBQU1sQixXOztBQWtEU0EsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UTVMvY3JlYXRlX3Rlc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGhvdG9NYW5hZ2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bob3RvTWFuYWdlclwiO1xuaW1wb3J0IFRlc3RQcmV2aWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgY3JlYXRlX3Rlc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlPElUZXN0Pih7XG4gICAgdHlwZTogXCJUVFwiLFxuICAgIHBhZ2VzOiAxLFxuICAgIGVuOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFnZXM6IFt7IFFuQVBhaXJzOiBbeyBxdWVzdGlvbjogXCJcIiwgYW5zd2VyOiBcIlwiIH1dIH1dLFxuICAgIH0sXG4gICAgbHY6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYWdlczogW10sXG4gICAgfSxcbiAgICBydToge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhZ2VzOiBbXSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNyZWF0ZVRlc3RDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0VHlwZX0+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInR5cGUtc2VsZWN0b3JcIiBpZD1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgIFRlc3QgdHlwZVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaG90by10ZXh0XCI+UGhvdG8g4oCTIFRleHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGhvdG8tcGhvdG9cIj5QaG90byDigJMgUGhvdG88L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGV4dC10ZXh0XCI+VGV4dCDigJMgVGV4dDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5QYWdlQ29udHJvbGxlcn0+XG4gICAgICAgIDxidXR0b24+QWRkIHBhZ2U8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicGFnZUNvdW50XCIgaWQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGhvdG9NYW5hZ2VyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3ROYW1pbmd9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiVGVzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIlRlc3QgbmFtZVwiIC8+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cIkxhbmctc2VsZWN0b3JcIiBjbGFzc05hbWU9e3N0eWxlcy5sZ1NlbGVjdH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgTGFuZ3VhZ2VcbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicnVcIj5SVTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiPkVOPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImx2XCI+TFY8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUZXN0UHJldmlldyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlX3Rlc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})