webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender); // function handleTextAreaQuestionChange(\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) {\n  //   // let tmpArray =\n  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n  //   //     .QnAPairs;\n  //   // console.log(\"tmp\", tmpArray);\n  //   // tmpArray.forEach((ele) => console.log(ele));\n  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;\n  //   // console.log(tmpArray);\n  //   // console.log(tmpArray[props.activePage]);\n  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);\n  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =\n  //     event.currentTarget.value;\n  //   // console.log(tmpArray);\n  //   props.saveChanges({\n  //     ...props.currentTestState,\n  //     [props.currentLanguage!]: {\n  //       ...props.currentTestState[props.currentLanguage!],\n  //       pages: tmpArray,\n  //     },\n  //   });\n  // }\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }\n    }, qna.question);\n  }\n\n  function imgQuestion(iterator, handleQuestionChange, qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function imgAnswer(iterator, handleQuestionChange, qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.QnAPairs.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 7\n        }\n      }, props.testType === \"TT\" ? textQuestion() : null, props.testType === \"PP\" || props.testType === \"PT\" ? imgQuestion : null, props.testType === \"TT\" || props.testType === \"PT\" ? textAnswer : null, props.testType === \"PP\" ? imgAnswer : null);\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nfunction textAnswer(iterator, qna) {\n  return __jsx(\"textarea\", {\n    id: String(iterator) // onChange={handleAnswerChange}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 5\n    }\n  }, qna.answer);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsInRleHRRdWVzdGlvbiIsIml0ZXJhdG9yIiwicW5hIiwiU3RyaW5nIiwiaGFuZGxlUXVlc3Rpb25DaGFuZ2UiLCJjb21wU3R5bGVzIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsImltZ1F1ZXN0aW9uIiwiaW1nQW5zd2VyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInBhZ2VCb2R5IiwiUW5BUGFpcnMiLCJtYXAiLCJxbmFQYWlyIiwidGVzdFR5cGUiLCJ0ZXh0QW5zd2VyIiwic3R5bGVzIiwiYWN0aXZlUGFnZSIsIlRlc3RCR0NvbnRhaW5lciIsInRUeXBlV2FybmluZyIsIkFuc3dlciIsImFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQU9kO0FBQ0pDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLFlBQWxCLEVBREksQ0FHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQVNDLFlBQVQsQ0FDRUMsUUFERixFQUVFO0FBQ0FDLEtBSEYsRUFJRTtBQUNBLFdBQ0U7QUFDRSxRQUFFLEVBQUVDLE1BQU0sQ0FBQ0YsUUFBRCxDQURaO0FBRUUsY0FBUSxFQUFFRyxvQkFGWjtBQUdFLGVBQVMsRUFBRUMsc0VBQVUsQ0FBQ0MsUUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHSixHQUFHLENBQUNLLFFBTFAsQ0FERjtBQVNEOztBQUVELFdBQVNDLFdBQVQsQ0FDRVAsUUFERixFQUVFRyxvQkFGRixFQUtFRixHQUxGLEVBTUU7QUFDQSxXQUNFO0FBQUssUUFBRSxFQUFFQyxNQUFNLENBQUNGLFFBQUQsQ0FBZjtBQUEyQixlQUFTLEVBQUVJLHNFQUFVLENBQUNDLFFBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREY7QUFLRDs7QUFDRCxXQUFTRyxTQUFULENBQ0VSLFFBREYsRUFFRUcsb0JBRkYsRUFLRUYsR0FMRixFQU1FO0FBQ0EsV0FDRTtBQUFLLFFBQUUsRUFBRUMsTUFBTSxDQUFDRixRQUFELENBQWY7QUFBMkIsZUFBUyxFQUFFSSxzRUFBVSxDQUFDQyxRQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGO0FBS0Q7O0FBRUQsTUFBTUYsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUMzQk0sS0FEMkIsRUFFeEI7QUFDSGIsV0FBTyxDQUFDQyxHQUFSLFdBQWVZLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsRUFBbkMsUUFBMENGLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkUsS0FBOUQ7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FDZmxCLEtBQUssQ0FBQ0csWUFBTixDQUFtQmdCLFFBQW5CLENBQTRCQyxHQUE1QixDQUFnQyxVQUFDZCxHQUFELEVBQVlELFFBQVo7QUFBQSxhQUM5QjtBQUFLLFdBQUcsRUFBRUEsUUFBVjtBQUFvQixVQUFFLEVBQUVFLE1BQU0sQ0FBQ0YsUUFBRCxDQUE5QjtBQUEwQyxpQkFBUyxFQUFFSSxzRUFBVSxDQUFDWSxPQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUdyQixLQUFLLENBQUNzQixRQUFOLEtBQW1CLElBQW5CLEdBQTBCbEIsWUFBWSxFQUF0QyxHQUEyQyxJQUY5QyxFQUdHSixLQUFLLENBQUNzQixRQUFOLEtBQW1CLElBQW5CLElBQTJCdEIsS0FBSyxDQUFDc0IsUUFBTixLQUFtQixJQUE5QyxHQUNHVixXQURILEdBRUcsSUFMTixFQU9HWixLQUFLLENBQUNzQixRQUFOLEtBQW1CLElBQW5CLElBQTJCdEIsS0FBSyxDQUFDc0IsUUFBTixLQUFtQixJQUE5QyxHQUFxREMsVUFBckQsR0FBa0UsSUFQckUsRUFRR3ZCLEtBQUssQ0FBQ3NCLFFBQU4sS0FBbUIsSUFBbkIsR0FBMEJULFNBQTFCLEdBQXNDLElBUnpDLENBRDhCO0FBQUEsS0FBaEMsQ0FEZTtBQUFBLEdBQWpCOztBQWNBYixPQUFLLENBQUNzQixRQUFOLEtBQW1CLEVBQW5CLEdBQ0lyQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBREosR0FFSUQsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ3NCLFFBQWxCLENBRko7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFRSw0RUFBTSxDQUFDekIsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0MsS0FBSyxDQUFDeUIsVUFBTixHQUFtQixDQUE5QixDQURGLEVBR0U7QUFBSyxhQUFTLFlBQUtoQixzRUFBVSxDQUFDaUIsZUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRWpCLHNFQUFVLENBQUNTLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xCLEtBQUssQ0FBQ3NCLFFBQU4sS0FBbUIsRUFBbkIsR0FDQztBQUFLLGFBQVMsRUFBRWIsc0VBQVUsQ0FBQ2tCLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREQsR0FLQ1QsUUFBUSxFQU5aLENBRkYsQ0FIRixDQURGO0FBbUJELENBdkhEOztLQUFNbkIsVztBQXlIU0EsMEVBQWY7O0FBQ0EsU0FBU3dCLFVBQVQsQ0FBb0JsQixRQUFwQixFQUFzQ0MsR0FBdEMsRUFBaUQ7QUFDL0MsU0FDRTtBQUNFLE1BQUUsRUFBRUMsTUFBTSxDQUFDRixRQUFELENBRFosQ0FFRTtBQUZGO0FBR0UsYUFBUyxFQUFFSSxzRUFBVSxDQUFDbUIsTUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHdEIsR0FBRyxDQUFDdUIsTUFMUCxDQURGO0FBU0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBUZXN0UHJldmlldyA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSB8IHVuZGVmaW5lZDtcbiAgLy8gY3VycmVudFRlc3RTdGF0ZTogSVRlc3Q7XG4gIHBhZ2VUb1JlbmRlcjogYW55O1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHRlc3Q6IElUZXN0KSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2UoXG4gIC8vICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gIC8vICkge1xuICAvLyAgIC8vIGxldCB0bXBBcnJheSA9XG4gIC8vICAgLy8gICBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzW3Byb3BzLmFjdGl2ZVBhZ2VdXG4gIC8vICAgLy8gICAgIC5RbkFQYWlycztcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcInRtcFwiLCB0bXBBcnJheSk7XG4gIC8vICAgLy8gdG1wQXJyYXkuZm9yRWFjaCgoZWxlKSA9PiBjb25zb2xlLmxvZyhlbGUpKTtcbiAgLy8gICBjb25zdCB0bXBBcnJheSA9IHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXM7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXkpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5W3Byb3BzLmFjdGl2ZVBhZ2VdKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheVtwcm9wcy5hY3RpdmVQYWdlXS5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSk7XG4gIC8vICAgdG1wQXJyYXlbcHJvcHMuYWN0aXZlUGFnZV0uUW5BUGFpcnNbZXZlbnQuY3VycmVudFRhcmdldC5pZF0ucXVlc3Rpb24gPVxuICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheSk7XG4gIC8vICAgcHJvcHMuc2F2ZUNoYW5nZXMoe1xuICAvLyAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZSxcbiAgLy8gICAgIFtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXToge1xuICAvLyAgICAgICAuLi5wcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLFxuICAvLyAgICAgICBwYWdlczogdG1wQXJyYXksXG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9XG4gIGZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVlc3Rpb25DaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn1cbiAgICAgID5cbiAgICAgICAge3FuYS5xdWVzdGlvbn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ1F1ZXN0aW9uKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nQW5zd2VyKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbkNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7ZXZlbnQuY3VycmVudFRhcmdldC5pZH06YCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5RbkFQYWlycy5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICB7LyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL31cbiAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCIgPyB0ZXh0UXVlc3Rpb24oKSA6IG51bGx9XG4gICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJQUFwiIHx8IHByb3BzLnRlc3RUeXBlID09PSBcIlBUXCJcbiAgICAgICAgICA/IGltZ1F1ZXN0aW9uXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7LyogRm9yIGFuc3dlciByZW5kZXJpbmcgKi99XG4gICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiIHx8IHByb3BzLnRlc3RUeXBlID09PSBcIlBUXCIgPyB0ZXh0QW5zd2VyIDogbnVsbH1cbiAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlBQXCIgPyBpbWdBbnN3ZXIgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgcHJvcHMudGVzdFR5cGUgPT09IFwiXCJcbiAgICA/IGNvbnNvbGUubG9nKFwibm8gdGVzdCB0eXBlXCIpXG4gICAgOiBjb25zb2xlLmxvZyhwcm9wcy50ZXN0VHlwZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RQcmV2aWV3fT5cbiAgICAgIDxoMz5QYWdlOiB7cHJvcHMuYWN0aXZlUGFnZSArIDF9PC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXMuVGVzdEJHQ29udGFpbmVyfWB9PlxuICAgICAgICA8Rk1Mb2dvIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnBhZ2VCb2R5fT5cbiAgICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy50VHlwZVdhcm5pbmd9PlxuICAgICAgICAgICAgICA8aDE+UGxlYXNlIGNob29zZSBhIHRlc3QgdHlwZTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgcGFnZUJvZHkoKVxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIHtwYWdlQm9keSgpfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RQcmV2aWV3O1xuZnVuY3Rpb24gdGV4dEFuc3dlcihpdGVyYXRvcjogbnVtYmVyLCBxbmE6IElRbkEpIHtcbiAgcmV0dXJuIChcbiAgICA8dGV4dGFyZWFcbiAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUFuc3dlckNoYW5nZX1cbiAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5BbnN3ZXJ9XG4gICAgPlxuICAgICAge3FuYS5hbnN3ZXJ9XG4gICAgPC90ZXh0YXJlYT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})