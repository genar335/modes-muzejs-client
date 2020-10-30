webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  function handleTextAreaQuestionChange(event) {\n    console.log(event.currentTarget.value);\n    console.log(props.currentTestState[props.currentLanguage].pages[props.activePage].QnAPairs[event.currentTarget.id].question); // let tmpArray =\n    //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n    //     .QnAPairs;\n    // console.log(\"tmp\", tmpArray);\n    // tmpArray.forEach((ele) => console.log(ele));\n\n    var tmpArrayOfAllPages = props.currentTestState[props.currentLanguage].pages;\n    var tmpDataForCurrentPage = tmpArrayOfAllPages[props.activePage];\n    console.log(\"before change\", tmpDataForCurrentPage);\n    tmpDataForCurrentPage.QnAPairs[event.currentTarget.id].question = event.currentTarget.value;\n    console.log(\"after change\", tmpDataForCurrentPage);\n    props.saveChanges(_objectSpread(_objectSpread({}, props.currentTestState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props.currentLanguage, _objectSpread({}, props.currentTestState[props.currentLanguage]))));\n  }\n\n  function questionRenderController(currentItem) {\n    switch (props.currentTestState.type) {\n      case \"TT\":\n        return __jsx(\"textarea\", {\n          id: String(currentItem),\n          onChange: handleTextAreaQuestionChange,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }\n        }, \" \");\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var pageBody = function pageBody() {\n    return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.pageBody,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }\n    }, props.currentTestState[props.currentLanguage || \"ru\"].pages[props.activePage].QnAPairs.map(function (qnaPair, index) {\n      return __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.qnaPair,\n        id: String(index),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Question,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }\n      }, questionRenderController(index)), __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Answer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }\n      }, \"Answer: \", qnaPair.answer));\n    }));\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestBGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }), pageBody()));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiaGFuZGxlVGV4dEFyZWFRdWVzdGlvbkNoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUZXN0U3RhdGUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJwYWdlcyIsImFjdGl2ZVBhZ2UiLCJRbkFQYWlycyIsImlkIiwicXVlc3Rpb24iLCJ0bXBBcnJheU9mQWxsUGFnZXMiLCJ0bXBEYXRhRm9yQ3VycmVudFBhZ2UiLCJzYXZlQ2hhbmdlcyIsInF1ZXN0aW9uUmVuZGVyQ29udHJvbGxlciIsImN1cnJlbnRJdGVtIiwidHlwZSIsIlN0cmluZyIsInBhZ2VCb2R5IiwiY29tcFN0eWxlcyIsIm1hcCIsInFuYVBhaXIiLCJpbmRleCIsIlF1ZXN0aW9uIiwiQW5zd2VyIiwiYW5zd2VyIiwic3R5bGVzIiwiVGVzdEJHQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFLZDtBQUNKLFdBQVNDLDRCQUFULENBQ0VDLEtBREYsRUFFRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxLQUFoQztBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FDRUosS0FBSyxDQUFDTyxnQkFBTixDQUF1QlAsS0FBSyxDQUFDUSxlQUE3QixFQUErQ0MsS0FBL0MsQ0FBcURULEtBQUssQ0FBQ1UsVUFBM0QsRUFDR0MsUUFESCxDQUNZVCxLQUFLLENBQUNHLGFBQU4sQ0FBb0JPLEVBRGhDLEVBQ29DQyxRQUZ0QyxFQUZBLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFJQyxrQkFBa0IsR0FDcEJkLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUJQLEtBQUssQ0FBQ1EsZUFBN0IsRUFBK0NDLEtBRGpEO0FBRUEsUUFBSU0scUJBQXFCLEdBQUdELGtCQUFrQixDQUFDZCxLQUFLLENBQUNVLFVBQVAsQ0FBOUM7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlcscUJBQTdCO0FBQ0FBLHlCQUFxQixDQUFDSixRQUF0QixDQUErQlQsS0FBSyxDQUFDRyxhQUFOLENBQW9CTyxFQUFuRCxFQUF1REMsUUFBdkQsR0FDRVgsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxLQUR0QjtBQUVBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCVyxxQkFBNUI7QUFFQWYsU0FBSyxDQUFDZ0IsV0FBTixpQ0FDS2hCLEtBQUssQ0FBQ08sZ0JBRFgscUdBRUdQLEtBQUssQ0FBQ1EsZUFGVCxvQkFHT1IsS0FBSyxDQUFDTyxnQkFBTixDQUF1QlAsS0FBSyxDQUFDUSxlQUE3QixDQUhQO0FBTUQ7O0FBRUQsV0FBU1Msd0JBQVQsQ0FBa0NDLFdBQWxDLEVBQXVEO0FBQ3JELFlBQVFsQixLQUFLLENBQUNPLGdCQUFOLENBQXVCWSxJQUEvQjtBQUNFLFdBQUssSUFBTDtBQUNFLGVBQ0U7QUFDRSxZQUFFLEVBQUVDLE1BQU0sQ0FBQ0YsV0FBRCxDQURaO0FBRUUsa0JBQVEsRUFBRWpCLDRCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRyxHQUpILENBREY7QUFRQTs7QUFFRjtBQUNFO0FBYko7QUFlRDs7QUFDRCxNQUFNb0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixXQUNFO0FBQUssZUFBUyxFQUFFQyxzRUFBVSxDQUFDRCxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dyQixLQUFLLENBQUNPLGdCQUFOLENBQXVCUCxLQUFLLENBQUNRLGVBQU4sSUFBeUIsSUFBaEQsRUFBc0RDLEtBQXRELENBQ0NULEtBQUssQ0FBQ1UsVUFEUCxFQUVDQyxRQUZELENBRVVZLEdBRlYsQ0FFYyxVQUFDQyxPQUFELEVBQWdCQyxLQUFoQjtBQUFBLGFBQ2I7QUFBSyxpQkFBUyxFQUFFSCxzRUFBVSxDQUFDRSxPQUEzQjtBQUFvQyxVQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssS0FBRCxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFSCxzRUFBVSxDQUFDSSxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dULHdCQUF3QixDQUFDUSxLQUFELENBRDNCLENBREYsRUFJRTtBQUFLLGlCQUFTLEVBQUVILHNFQUFVLENBQUNLLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTRDSCxPQUFPLENBQUNJLE1BQXBELENBSkYsQ0FEYTtBQUFBLEtBRmQsQ0FESCxDQURGO0FBY0QsR0FmRDs7QUFpQkEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQzlCLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVdDLEtBQUssQ0FBQ1UsVUFBTixHQUFtQixDQUE5QixDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVZLHNFQUFVLENBQUNRLGVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHVCxRQUFRLEVBRlgsQ0FGRixDQURGO0FBU0QsQ0EvRUQ7O0tBQU10QixXO0FBaUZTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdFByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSVFuQSxcbiAgSVFuQVBhaXJzLFxuICBJVGVzdCxcbiAgVExhbmdPcHRpb24sXG4gIFRUZXN0VHlwZXMsXG59IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFRlc3RQcmV2aWV3ID0gKHByb3BzOiB7XG4gIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICBjdXJyZW50VGVzdFN0YXRlOiBJVGVzdDtcbiAgc2F2ZUNoYW5nZXM6ICh0ZXN0OiBJVGVzdCkgPT4gdm9pZDtcbn0pID0+IHtcbiAgZnVuY3Rpb24gaGFuZGxlVGV4dEFyZWFRdWVzdGlvbkNoYW5nZShcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzW3Byb3BzLmFjdGl2ZVBhZ2VdXG4gICAgICAgIC5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXS5xdWVzdGlvblxuICAgICk7XG4gICAgLy8gbGV0IHRtcEFycmF5ID1cbiAgICAvLyAgIHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXNbcHJvcHMuYWN0aXZlUGFnZV1cbiAgICAvLyAgICAgLlFuQVBhaXJzO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidG1wXCIsIHRtcEFycmF5KTtcbiAgICAvLyB0bXBBcnJheS5mb3JFYWNoKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZSkpO1xuXG4gICAgbGV0IHRtcEFycmF5T2ZBbGxQYWdlcyA9XG4gICAgICBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzO1xuICAgIGxldCB0bXBEYXRhRm9yQ3VycmVudFBhZ2UgPSB0bXBBcnJheU9mQWxsUGFnZXNbcHJvcHMuYWN0aXZlUGFnZV07XG4gICAgY29uc29sZS5sb2coXCJiZWZvcmUgY2hhbmdlXCIsIHRtcERhdGFGb3JDdXJyZW50UGFnZSk7XG4gICAgdG1wRGF0YUZvckN1cnJlbnRQYWdlLlFuQVBhaXJzW2V2ZW50LmN1cnJlbnRUYXJnZXQuaWRdLnF1ZXN0aW9uID1cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJhZnRlciBjaGFuZ2VcIiwgdG1wRGF0YUZvckN1cnJlbnRQYWdlKTtcblxuICAgIHByb3BzLnNhdmVDaGFuZ2VzKHtcbiAgICAgIC4uLnByb3BzLmN1cnJlbnRUZXN0U3RhdGUsXG4gICAgICBbcHJvcHMuY3VycmVudExhbmd1YWdlIV06IHtcbiAgICAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWVzdGlvblJlbmRlckNvbnRyb2xsZXIoY3VycmVudEl0ZW06IG51bWJlcikge1xuICAgIHN3aXRjaCAocHJvcHMuY3VycmVudFRlc3RTdGF0ZS50eXBlKSB7XG4gICAgICBjYXNlIFwiVFRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPXtTdHJpbmcoY3VycmVudEl0ZW0pfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnBhZ2VCb2R5fT5cbiAgICAgICAge3Byb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIHx8IFwicnVcIl0ucGFnZXNbXG4gICAgICAgICAgcHJvcHMuYWN0aXZlUGFnZVxuICAgICAgICBdLlFuQVBhaXJzLm1hcCgocW5hUGFpcjogSVFuQSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9IGlkPXtTdHJpbmcoaW5kZXgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufT5cbiAgICAgICAgICAgICAge3F1ZXN0aW9uUmVuZGVyQ29udHJvbGxlcihpbmRleCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkFuc3dlcn0+QW5zd2VyOiB7cW5hUGFpci5hbnN3ZXJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuVGVzdEJHQ29udGFpbmVyfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICB7cGFnZUJvZHkoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})