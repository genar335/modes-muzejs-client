webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender); // function handleTextAreaQuestionChange(\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) {\n  //   // let tmpArray =\n  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n  //   //     .QnAPairs;\n  //   // console.log(\"tmp\", tmpArray);\n  //   // tmpArray.forEach((ele) => console.log(ele));\n  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;\n  //   // console.log(tmpArray);\n  //   // console.log(tmpArray[props.activePage]);\n  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);\n  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =\n  //     event.currentTarget.value;\n  //   // console.log(tmpArray);\n  //   props.saveChanges({\n  //     ...props.currentTestState,\n  //     [props.currentLanguage!]: {\n  //       ...props.currentTestState[props.currentLanguage!],\n  //       pages: tmpArray,\n  //     },\n  //   });\n  // }\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key == \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }\n    }, qna.question);\n  }\n\n  function textAnswer(iterator, qna) {\n    return __jsx(\"textarea\", {\n      id: String(iterator) // onChange={handleAnswerChange}\n      ,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.QnAPairs.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 7\n        }\n      }, props.testType === \"TT\" ? textQuestion(iterator, qna) : null, props.testType === \"PP\" || props.testType === \"PT\" ? imgQuestion(iterator, qna) : null, props.testType === \"TT\" || props.testType === \"PT\" ? textAnswer(iterator, qna) : null, props.testType === \"PP\" ? imgAnswer(iterator, qna) : null);\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsImhhbmRsZVF1ZXN0aW9uS2V5UHJlc3MiLCJldmVudCIsImtleSIsInVuZGVmaW5lZCIsInRleHRRdWVzdGlvbiIsIml0ZXJhdG9yIiwicW5hIiwiU3RyaW5nIiwiaGFuZGxlUXVlc3Rpb25DaGFuZ2UiLCJjb21wU3R5bGVzIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsInRleHRBbnN3ZXIiLCJBbnN3ZXIiLCJhbnN3ZXIiLCJpbWdRdWVzdGlvbiIsImltZ0Fuc3dlciIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInZhbHVlIiwicGFnZUJvZHkiLCJRbkFQYWlycyIsIm1hcCIsInFuYVBhaXIiLCJ0ZXN0VHlwZSIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJUZXN0QkdDb250YWluZXIiLCJ0VHlwZVdhcm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFPZDtBQUNKQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxZQUFsQixFQURJLENBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQzdCQyxLQUQ2QixFQUUxQjtBQUNIQSxTQUFLLENBQUNDLEdBQU4sSUFBYSxPQUFiLEdBQXVCTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLENBQXZCLEdBQStDSyxTQUEvQztBQUNELEdBSkQ7O0FBTUEsV0FBU0Ms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QW1CLEVBQW5CLEdBQ0kzQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBREosR0FFSUQsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQzRCLFFBQWxCLENBRko7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw0RUFBTSxDQUFDOUIsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0MsS0FBSyxDQUFDOEIsVUFBTixHQUFtQixDQUE5QixDQURGLEVBR0U7QUFBSyxhQUFTLFlBQUtqQixzRUFBVSxDQUFDa0IsZUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRWxCLHNFQUFVLENBQUNXLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3hCLEtBQUssQ0FBQzRCLFFBQU4sS0FBbUIsRUFBbkIsR0FDQztBQUFLLGFBQVMsRUFBRWYsc0VBQVUsQ0FBQ21CLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREQsR0FLQ1IsUUFBUSxFQU5aLENBRkYsQ0FIRixDQURGO0FBbUJELENBN0lEOztLQUFNekIsVztBQStJU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbnRhaW5lckNTUyB9IGZyb20gXCJyZWFjdC1zZWxlY3Qvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyc1wiO1xuaW1wb3J0IHtcbiAgSVFuQSxcbiAgSVFuQVBhaXJzLFxuICBJVGVzdCxcbiAgVExhbmdPcHRpb24sXG4gIFRUZXN0VHlwZXMsXG59IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFRlc3RQcmV2aWV3ID0gKHByb3BzOiB7XG4gIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICAvLyBjdXJyZW50VGVzdFN0YXRlOiBJVGVzdDtcbiAgcGFnZVRvUmVuZGVyOiBhbnk7XG4gIHRlc3RUeXBlOiBJVGVzdFtcInR5cGVcIl07XG4gIHNhdmVDaGFuZ2VzOiAodGVzdDogSVRlc3QpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzLnBhZ2VUb1JlbmRlcik7XG5cbiAgLy8gZnVuY3Rpb24gaGFuZGxlVGV4dEFyZWFRdWVzdGlvbkNoYW5nZShcbiAgLy8gICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgLy8gKSB7XG4gIC8vICAgLy8gbGV0IHRtcEFycmF5ID1cbiAgLy8gICAvLyAgIHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXNbcHJvcHMuYWN0aXZlUGFnZV1cbiAgLy8gICAvLyAgICAgLlFuQVBhaXJzO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwidG1wXCIsIHRtcEFycmF5KTtcbiAgLy8gICAvLyB0bXBBcnJheS5mb3JFYWNoKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZSkpO1xuICAvLyAgIGNvbnN0IHRtcEFycmF5ID0gcHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXS5wYWdlcztcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheSk7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXlbcHJvcHMuYWN0aXZlUGFnZV0pO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5W3Byb3BzLmFjdGl2ZVBhZ2VdLlFuQVBhaXJzW2V2ZW50LmN1cnJlbnRUYXJnZXQuaWRdKTtcbiAgLy8gICB0bXBBcnJheVtwcm9wcy5hY3RpdmVQYWdlXS5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXS5xdWVzdGlvbiA9XG4gIC8vICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5KTtcbiAgLy8gICBwcm9wcy5zYXZlQ2hhbmdlcyh7XG4gIC8vICAgICAuLi5wcm9wcy5jdXJyZW50VGVzdFN0YXRlLFxuICAvLyAgICAgW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdOiB7XG4gIC8vICAgICAgIC4uLnByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0sXG4gIC8vICAgICAgIHBhZ2VzOiB0bXBBcnJheSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbktleVByZXNzID0gKFxuICAgIGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LmtleSA9PSBcIkVudGVyXCIgPyBjb25zb2xlLmxvZyhcIkVmbnRlclwiKSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBmdW5jdGlvbiB0ZXh0UXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXN0aW9uQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259XG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZVF1ZXN0aW9uS2V5UHJlc3N9XG4gICAgICA+XG4gICAgICAgIHtxbmEucXVlc3Rpb259XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0QW5zd2VyKGl0ZXJhdG9yOiBudW1iZXIsIHFuYTogSVFuQSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVBbnN3ZXJDaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5BbnN3ZXJ9XG4gICAgICA+XG4gICAgICAgIHtxbmEuYW5zd2VyfVxuICAgICAgPC90ZXh0YXJlYT5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nUXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nQW5zd2VyKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAvLyAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbkNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7ZXZlbnQuY3VycmVudFRhcmdldC5pZH06YCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5RbkFQYWlycy5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICB7LyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL31cbiAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCIgPyB0ZXh0UXVlc3Rpb24oaXRlcmF0b3IsIHFuYSkgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyBpbWdRdWVzdGlvbihpdGVyYXRvciwgcW5hKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgey8qIEZvciBhbnN3ZXIgcmVuZGVyaW5nICovfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiVFRcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyB0ZXh0QW5zd2VyKGl0ZXJhdG9yLCBxbmEpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiA/IGltZ0Fuc3dlcihpdGVyYXRvciwgcW5hKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRUeXBlV2FybmluZ30+XG4gICAgICAgICAgICAgIDxoMT5QbGVhc2UgY2hvb3NlIGEgdGVzdCB0eXBlPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwYWdlQm9keSgpXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Lyoge3BhZ2VCb2R5KCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})