webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender); // function handleTextAreaQuestionChange(\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) {\n  //   // let tmpArray =\n  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n  //   //     .QnAPairs;\n  //   // console.log(\"tmp\", tmpArray);\n  //   // tmpArray.forEach((ele) => console.log(ele));\n  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;\n  //   // console.log(tmpArray);\n  //   // console.log(tmpArray[props.activePage]);\n  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);\n  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =\n  //     event.currentTarget.value;\n  //   // console.log(tmpArray);\n  //   props.saveChanges({\n  //     ...props.currentTestState,\n  //     [props.currentLanguage!]: {\n  //       ...props.currentTestState[props.currentLanguage!],\n  //       pages: tmpArray,\n  //     },\n  //   });\n  // }\n\n  function questionRenderController(currentItem, currentPair) {\n    switch (props.testType) {\n      case \"TT\":\n        return;\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.QnAPairs.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }\n      }, __jsx(\"textarea\", {\n        id: String(iterator),\n        onChange: handleQuestionChange,\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, qna.question), __jsx(\"textarea\", {\n        id: String(iterator) // onChange={handleAnswerChange}\n        ,\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 9\n        }\n      }, qna.answer));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 34\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  })) : null, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }, pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsInF1ZXN0aW9uUmVuZGVyQ29udHJvbGxlciIsImN1cnJlbnRJdGVtIiwiY3VycmVudFBhaXIiLCJ0ZXN0VHlwZSIsImhhbmRsZVF1ZXN0aW9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInBhZ2VCb2R5IiwiUW5BUGFpcnMiLCJtYXAiLCJxbmEiLCJpdGVyYXRvciIsIlN0cmluZyIsImNvbXBTdHlsZXMiLCJxbmFQYWlyIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsIkFuc3dlciIsImFuc3dlciIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJUZXN0QkdDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFPZDtBQUNKQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxZQUFsQixFQURJLENBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFTQyx3QkFBVCxDQUFrQ0MsV0FBbEMsRUFBdURDLFdBQXZELEVBQTBFO0FBQ3hFLFlBQVFOLEtBQUssQ0FBQ08sUUFBZDtBQUNFLFdBQUssSUFBTDtBQUNFO0FBQ0E7O0FBRUY7QUFDRTtBQU5KO0FBUUQ7O0FBRUQsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUMzQkMsS0FEMkIsRUFFeEI7QUFDSFIsV0FBTyxDQUFDQyxHQUFSLFdBQWVPLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsRUFBbkMsUUFBMENGLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkUsS0FBOUQ7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FDZmIsS0FBSyxDQUFDRyxZQUFOLENBQW1CVyxRQUFuQixDQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFZQyxRQUFaO0FBQUEsYUFDOUI7QUFBSyxXQUFHLEVBQUVBLFFBQVY7QUFBb0IsVUFBRSxFQUFFQyxNQUFNLENBQUNELFFBQUQsQ0FBOUI7QUFBMEMsaUJBQVMsRUFBRUUsc0VBQVUsQ0FBQ0MsT0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsVUFBRSxFQUFFRixNQUFNLENBQUNELFFBQUQsQ0FEWjtBQUVFLGdCQUFRLEVBQUVULG9CQUZaO0FBR0UsaUJBQVMsRUFBRVcsc0VBQVUsQ0FBQ0UsUUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHTCxHQUFHLENBQUNNLFFBTFAsQ0FERixFQVFFO0FBQ0UsVUFBRSxFQUFFSixNQUFNLENBQUNELFFBQUQsQ0FEWixDQUVFO0FBRkY7QUFHRSxpQkFBUyxFQUFFRSxzRUFBVSxDQUFDSSxNQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0dQLEdBQUcsQ0FBQ1EsTUFMUCxDQVJGLENBRDhCO0FBQUEsS0FBaEMsQ0FEZTtBQUFBLEdBQWpCOztBQW9CQXhCLE9BQUssQ0FBQ08sUUFBTixLQUFtQixFQUFuQixHQUNJTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBREosR0FFSUQsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ08sUUFBbEIsQ0FGSjtBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUVrQiw0RUFBTSxDQUFDMUIsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0MsS0FBSyxDQUFDMEIsVUFBTixHQUFtQixDQUE5QixDQURGLEVBR0U7QUFBSyxhQUFTLFlBQUtQLHNFQUFVLENBQUNRLGVBQWhCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHM0IsS0FBSyxDQUFDTyxRQUFOLEtBQW1CLEVBQW5CLEdBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUR1QixDQUF4QixHQUdRLElBSlgsRUFLRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFFWSxzRUFBVSxDQUFDTixRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDQSxRQUFRLEVBQTlDLENBTkYsQ0FIRixDQURGO0FBY0QsQ0F6RkQ7O0tBQU1kLFc7QUEyRlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJUW5BLFxuICBJUW5BUGFpcnMsXG4gIElUZXN0LFxuICBUTGFuZ09wdGlvbixcbiAgVFRlc3RUeXBlcyxcbn0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IGFueTtcbiAgdGVzdFR5cGU6IElUZXN0W1widHlwZVwiXTtcbiAgc2F2ZUNoYW5nZXM6ICh0ZXN0OiBJVGVzdCkgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMucGFnZVRvUmVuZGVyKTtcblxuICAvLyBmdW5jdGlvbiBoYW5kbGVUZXh0QXJlYVF1ZXN0aW9uQ2hhbmdlKFxuICAvLyAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAvLyApIHtcbiAgLy8gICAvLyBsZXQgdG1wQXJyYXkgPVxuICAvLyAgIC8vICAgcHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXS5wYWdlc1twcm9wcy5hY3RpdmVQYWdlXVxuICAvLyAgIC8vICAgICAuUW5BUGFpcnM7XG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJ0bXBcIiwgdG1wQXJyYXkpO1xuICAvLyAgIC8vIHRtcEFycmF5LmZvckVhY2goKGVsZSkgPT4gY29uc29sZS5sb2coZWxlKSk7XG4gIC8vICAgY29uc3QgdG1wQXJyYXkgPSBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5KTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheVtwcm9wcy5hY3RpdmVQYWdlXSk7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXlbcHJvcHMuYWN0aXZlUGFnZV0uUW5BUGFpcnNbZXZlbnQuY3VycmVudFRhcmdldC5pZF0pO1xuICAvLyAgIHRtcEFycmF5W3Byb3BzLmFjdGl2ZVBhZ2VdLlFuQVBhaXJzW2V2ZW50LmN1cnJlbnRUYXJnZXQuaWRdLnF1ZXN0aW9uID1cbiAgLy8gICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXkpO1xuICAvLyAgIHByb3BzLnNhdmVDaGFuZ2VzKHtcbiAgLy8gICAgIC4uLnByb3BzLmN1cnJlbnRUZXN0U3RhdGUsXG4gIC8vICAgICBbcHJvcHMuY3VycmVudExhbmd1YWdlIV06IHtcbiAgLy8gICAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXSxcbiAgLy8gICAgICAgcGFnZXM6IHRtcEFycmF5LFxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uUmVuZGVyQ29udHJvbGxlcihjdXJyZW50SXRlbTogbnVtYmVyLCBjdXJyZW50UGFpcjogSVFuQSkge1xuICAgIHN3aXRjaCAocHJvcHMudGVzdFR5cGUpIHtcbiAgICAgIGNhc2UgXCJUVFwiOlxuICAgICAgICByZXR1cm47XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbkNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7ZXZlbnQuY3VycmVudFRhcmdldC5pZH06YCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5RbkFQYWlycy5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVlc3Rpb25DaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge3FuYS5xdWVzdGlvbn1cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUFuc3dlckNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgICAgICA+XG4gICAgICAgICAge3FuYS5hbnN3ZXJ9XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IDxkaXY+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PiA6IG51bGx9XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PntwYWdlQm9keSgpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})