webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  function handleTextAreaQuestionChange(event) {\n    console.log(event.currentTarget.value);\n    console.log(props.currentTestState[props.currentLanguage].pages[props.activePage].QnAPairs[event.currentTarget.id].question);\n    var tmpArray = props.currentTestState[props.currentLanguage].pages;\n    tmpArray.forEach(function (page) {\n      console.log(\"123\", page.QnAPairs[event.currentTarget.id]);\n    });\n    console.log(\"TMP\", tmpArray);\n    props.saveChanges(_objectSpread(_objectSpread({}, props.currentTestState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props.currentLanguage, _objectSpread({}, props.currentTestState[props.currentLanguage]))));\n  }\n\n  function questionRenderController(currentItem) {\n    switch (props.currentTestState.type) {\n      case \"TT\":\n        return __jsx(\"textarea\", {\n          id: String(currentItem),\n          onChange: handleTextAreaQuestionChange,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 11\n          }\n        }, \" \");\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var pageBody = function pageBody() {\n    return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.pageBody,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }\n    }, props.currentTestState[props.currentLanguage || \"ru\"].pages[props.activePage].QnAPairs.map(function (qnaPair, index) {\n      return __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.qnaPair,\n        id: String(index),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Question,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }\n      }, questionRenderController(index)), __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Answer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }\n      }, \"Answer: \", qnaPair.answer));\n    }));\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestBGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), pageBody()));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiaGFuZGxlVGV4dEFyZWFRdWVzdGlvbkNoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUZXN0U3RhdGUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJwYWdlcyIsImFjdGl2ZVBhZ2UiLCJRbkFQYWlycyIsImlkIiwicXVlc3Rpb24iLCJ0bXBBcnJheSIsImZvckVhY2giLCJwYWdlIiwic2F2ZUNoYW5nZXMiLCJxdWVzdGlvblJlbmRlckNvbnRyb2xsZXIiLCJjdXJyZW50SXRlbSIsInR5cGUiLCJTdHJpbmciLCJwYWdlQm9keSIsImNvbXBTdHlsZXMiLCJtYXAiLCJxbmFQYWlyIiwiaW5kZXgiLCJRdWVzdGlvbiIsIkFuc3dlciIsImFuc3dlciIsInN0eWxlcyIsIlRlc3RCR0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBS2Q7QUFDSixXQUFTQyw0QkFBVCxDQUNFQyxLQURGLEVBRUU7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csYUFBTixDQUFvQkMsS0FBaEM7QUFDQUgsV0FBTyxDQUFDQyxHQUFSLENBQ0VKLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUJQLEtBQUssQ0FBQ1EsZUFBN0IsRUFBK0NDLEtBQS9DLENBQXFEVCxLQUFLLENBQUNVLFVBQTNELEVBQ0dDLFFBREgsQ0FDWVQsS0FBSyxDQUFDRyxhQUFOLENBQW9CTyxFQURoQyxFQUNvQ0MsUUFGdEM7QUFJQSxRQUFJQyxRQUFRLEdBQUdkLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUJQLEtBQUssQ0FBQ1EsZUFBN0IsRUFBK0NDLEtBQTlEO0FBRUFLLFlBQVEsQ0FBQ0MsT0FBVCxDQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekJiLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJZLElBQUksQ0FBQ0wsUUFBTCxDQUFjVCxLQUFLLENBQUNHLGFBQU4sQ0FBb0JPLEVBQWxDLENBQW5CO0FBQ0QsS0FGRDtBQUlBVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CVSxRQUFuQjtBQUNBZCxTQUFLLENBQUNpQixXQUFOLGlDQUNLakIsS0FBSyxDQUFDTyxnQkFEWCxxR0FFR1AsS0FBSyxDQUFDUSxlQUZULG9CQUdPUixLQUFLLENBQUNPLGdCQUFOLENBQXVCUCxLQUFLLENBQUNRLGVBQTdCLENBSFA7QUFNRDs7QUFFRCxXQUFTVSx3QkFBVCxDQUFrQ0MsV0FBbEMsRUFBdUQ7QUFDckQsWUFBUW5CLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUJhLElBQS9CO0FBQ0UsV0FBSyxJQUFMO0FBQ0UsZUFDRTtBQUNFLFlBQUUsRUFBRUMsTUFBTSxDQUFDRixXQUFELENBRFo7QUFFRSxrQkFBUSxFQUFFbEIsNEJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlHLEdBSkgsQ0FERjtBQVFBOztBQUVGO0FBQ0U7QUFiSjtBQWVEOztBQUNELE1BQU1xQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFdBQ0U7QUFBSyxlQUFTLEVBQUVDLHNFQUFVLENBQUNELFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3RCLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUJQLEtBQUssQ0FBQ1EsZUFBTixJQUF5QixJQUFoRCxFQUFzREMsS0FBdEQsQ0FDQ1QsS0FBSyxDQUFDVSxVQURQLEVBRUNDLFFBRkQsQ0FFVWEsR0FGVixDQUVjLFVBQUNDLE9BQUQsRUFBZ0JDLEtBQWhCO0FBQUEsYUFDYjtBQUFLLGlCQUFTLEVBQUVILHNFQUFVLENBQUNFLE9BQTNCO0FBQW9DLFVBQUUsRUFBRUosTUFBTSxDQUFDSyxLQUFELENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUVILHNFQUFVLENBQUNJLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1Qsd0JBQXdCLENBQUNRLEtBQUQsQ0FEM0IsQ0FERixFQUlFO0FBQUssaUJBQVMsRUFBRUgsc0VBQVUsQ0FBQ0ssTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNENILE9BQU8sQ0FBQ0ksTUFBcEQsQ0FKRixDQURhO0FBQUEsS0FGZCxDQURILENBREY7QUFjRCxHQWZEOztBQWlCQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw0RUFBTSxDQUFDL0IsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0MsS0FBSyxDQUFDVSxVQUFOLEdBQW1CLENBQTlCLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBRWEsc0VBQVUsQ0FBQ1EsZUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdULFFBQVEsRUFGWCxDQUZGLENBREY7QUFTRCxDQXhFRDs7S0FBTXZCLFc7QUEwRVNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJUW5BLFxuICBJUW5BUGFpcnMsXG4gIElUZXN0LFxuICBUTGFuZ09wdGlvbixcbiAgVFRlc3RUeXBlcyxcbn0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBzYXZlQ2hhbmdlczogKHRlc3Q6IElUZXN0KSA9PiB2b2lkO1xufSkgPT4ge1xuICBmdW5jdGlvbiBoYW5kbGVUZXh0QXJlYVF1ZXN0aW9uQ2hhbmdlKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXNbcHJvcHMuYWN0aXZlUGFnZV1cbiAgICAgICAgLlFuQVBhaXJzW2V2ZW50LmN1cnJlbnRUYXJnZXQuaWRdLnF1ZXN0aW9uXG4gICAgKTtcbiAgICBsZXQgdG1wQXJyYXkgPSBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzO1xuXG4gICAgdG1wQXJyYXkuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCIxMjNcIiwgcGFnZS5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlRNUFwiLCB0bXBBcnJheSk7XG4gICAgcHJvcHMuc2F2ZUNoYW5nZXMoe1xuICAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZSxcbiAgICAgIFtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXToge1xuICAgICAgICAuLi5wcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uUmVuZGVyQ29udHJvbGxlcihjdXJyZW50SXRlbTogbnVtYmVyKSB7XG4gICAgc3dpdGNoIChwcm9wcy5jdXJyZW50VGVzdFN0YXRlLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJUVFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9e1N0cmluZyhjdXJyZW50SXRlbSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dEFyZWFRdWVzdGlvbkNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICB7cHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UgfHwgXCJydVwiXS5wYWdlc1tcbiAgICAgICAgICBwcm9wcy5hY3RpdmVQYWdlXG4gICAgICAgIF0uUW5BUGFpcnMubWFwKChxbmFQYWlyOiBJUW5BLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn0gaWQ9e1N0cmluZyhpbmRleCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICAgICAgICB7cXVlc3Rpb25SZW5kZXJDb250cm9sbGVyKGluZGV4KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfT5BbnN3ZXI6IHtxbmFQYWlyLmFuc3dlcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0UHJldmlld30+XG4gICAgICA8aDM+UGFnZToge3Byb3BzLmFjdGl2ZVBhZ2UgKyAxfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9PlxuICAgICAgICA8Rk1Mb2dvIC8+XG4gICAgICAgIHtwYWdlQm9keSgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})