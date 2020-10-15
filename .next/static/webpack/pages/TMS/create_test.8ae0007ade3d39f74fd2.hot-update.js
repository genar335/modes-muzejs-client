webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./pages/TMS/create_test.tsx":
/*!***********************************!*\
  !*** ./pages/TMS/create_test.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PhotoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PhotoManager */ \"./components/PhotoManager.tsx\");\n/* harmony import */ var _components_TestPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TestPreview */ \"./components/TestPreview.tsx\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/create_test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar create_test = function create_test() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: \"TT\",\n    pages: 1,\n    en: {\n      name: '',\n      pages: [[{}]]\n    }\n  }),\n      test = _useState[0],\n      setTest = _useState[1];\n\n  return __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.CreateTestContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestType,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"select\", {\n    name: \"type-selector\",\n    id: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    disabled: true,\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"Test type\"), __jsx(\"option\", {\n    value: \"photo-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"Photo \\u2013 Text\"), __jsx(\"option\", {\n    value: \"photo-photo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Photo \\u2013 Photo\"), __jsx(\"option\", {\n    value: \"text-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Text \\u2013 Text\"))), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.PageController,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Add page\"), __jsx(\"input\", {\n    type: \"number\",\n    name: \"pageCount\",\n    id: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(_components_PhotoManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"TestName\",\n    placeholder: \"Test name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"select\", {\n    name: \"Lang-selector\",\n    className: _styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.lgSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    disabled: true,\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Language\"), __jsx(\"option\", {\n    value: \"ru\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \"RU\"), __jsx(\"option\", {\n    value: \"en\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \"EN\"), __jsx(\"option\", {\n    value: \"lv\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"LV\"))), __jsx(_components_TestPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(create_test, \"ZYuMD1zjTwxLfpmyQjwmS7NKec8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create_test);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVE1TL2NyZWF0ZV90ZXN0LnRzeD9mZDhmIl0sIm5hbWVzIjpbImNyZWF0ZV90ZXN0IiwidXNlU3RhdGUiLCJ0eXBlIiwicGFnZXMiLCJlbiIsIm5hbWUiLCJ0ZXN0Iiwic2V0VGVzdCIsInN0eWxlcyIsIkNyZWF0ZVRlc3RDb250YWluZXIiLCJUZXN0VHlwZSIsIlBhZ2VDb250cm9sbGVyIiwiVGVzdE5hbWluZyIsImxnU2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQVE7QUFDdENDLFFBQUksRUFBRSxJQURnQztBQUV0Q0MsU0FBSyxFQUFFLENBRitCO0FBR3RDQyxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFLEVBREo7QUFFRkYsV0FBSyxFQUFFLENBQ0wsQ0FBQyxFQUFELENBREs7QUFGTDtBQUhrQyxHQUFSLENBRFI7QUFBQSxNQUNqQkcsSUFEaUI7QUFBQSxNQUNYQyxPQURXOztBQWF4QixTQUNFO0FBQUssYUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxtQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCxzRUFBTSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsZUFBYjtBQUE2QixNQUFFLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBaUIsWUFBUSxNQUF6QjtBQUEwQixZQUFRLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJRTtBQUFRLFNBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsRUFLRTtBQUFRLFNBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEYsRUFNRTtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTkYsQ0FERixDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUVGLHNFQUFNLENBQUNHLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsV0FBMUI7QUFBc0MsTUFBRSxFQUFDLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVhGLEVBZUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBSyxhQUFTLEVBQUVILHNFQUFNLENBQUNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxVQUF4QjtBQUFtQyxlQUFXLEVBQUMsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsZUFBYjtBQUE2QixhQUFTLEVBQUVKLHNFQUFNLENBQUNLLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQWlCLFlBQVEsTUFBekI7QUFBMEIsWUFBUSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBSUU7QUFBUSxTQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkYsRUFLRTtBQUFRLFNBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMRixFQU1FO0FBQVEsU0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU5GLENBRkYsQ0FoQkYsRUEyQkUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBREY7QUErQkQsQ0E1Q0Q7O0dBQU1iLFc7O0FBOENTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9jcmVhdGVfdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaG90b01hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9NYW5hZ2VyXCI7XG5pbXBvcnQgVGVzdFByZXZpZXcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdFByZXZpZXdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBjcmVhdGVfdGVzdCA9ICgpID0+IHtcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGU8SVRlc3Q+KHtcbiAgICB0eXBlOiBcIlRUXCIsXG4gICAgcGFnZXM6IDEsXG4gICAgZW46IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcGFnZXM6IFtcbiAgICAgICAgW3tcbiAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgIF1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3JlYXRlVGVzdENvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RUeXBlfT5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwidHlwZS1zZWxlY3RvclwiIGlkPVwiXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgVGVzdCB0eXBlXG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBob3RvLXRleHRcIj5QaG90byDigJMgVGV4dDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaG90by1waG90b1wiPlBob3RvIOKAkyBQaG90bzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0LXRleHRcIj5UZXh0IOKAkyBUZXh0PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2VDb250cm9sbGVyfT5cbiAgICAgICAgPGJ1dHRvbj5BZGQgcGFnZTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwYWdlQ291bnRcIiBpZD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQaG90b01hbmFnZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJUZXN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiVGVzdCBuYW1lXCIgLz5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiTGFuZy1zZWxlY3RvclwiIGNsYXNzTmFtZT17c3R5bGVzLmxnU2VsZWN0fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICBMYW5ndWFnZVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJydVwiPlJVPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCI+RU48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibHZcIj5MVjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRlc3RQcmV2aWV3IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVfdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TMS/create_test.tsx\n");

/***/ })

})