webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender); // function handleTextAreaQuestionChange(\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) {\n  //   // let tmpArray =\n  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n  //   //     .QnAPairs;\n  //   // console.log(\"tmp\", tmpArray);\n  //   // tmpArray.forEach((ele) => console.log(ele));\n  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;\n  //   // console.log(tmpArray);\n  //   // console.log(tmpArray[props.activePage]);\n  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);\n  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =\n  //     event.currentTarget.value;\n  //   // console.log(tmpArray);\n  //   props.saveChanges({\n  //     ...props.currentTestState,\n  //     [props.currentLanguage!]: {\n  //       ...props.currentTestState[props.currentLanguage!],\n  //       pages: tmpArray,\n  //     },\n  //   });\n  // }\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }\n    }, qna.question);\n  }\n\n  function imgQuestion(iterator, handleQuestionChange, qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function imgAnswer(iterator, handleQuestionChange, qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function questionRenderController(currentItem, currentPair) {\n    switch (props.testType) {\n      case \"TT\":\n        return __jsx(\"div\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 11\n          }\n        }, textQuestion(currentItem, currentPair));\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.QnAPairs.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 7\n        }\n      }, questionRenderController(iterator, qna));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nfunction textAnswer(iterator, qna) {\n  return __jsx(\"textarea\", {\n    id: String(iterator) // onChange={handleAnswerChange}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 5\n    }\n  }, qna.answer);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsInRleHRRdWVzdGlvbiIsIml0ZXJhdG9yIiwicW5hIiwiU3RyaW5nIiwiaGFuZGxlUXVlc3Rpb25DaGFuZ2UiLCJjb21wU3R5bGVzIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsImltZ1F1ZXN0aW9uIiwiaW1nQW5zd2VyIiwicXVlc3Rpb25SZW5kZXJDb250cm9sbGVyIiwiY3VycmVudEl0ZW0iLCJjdXJyZW50UGFpciIsInRlc3RUeXBlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInBhZ2VCb2R5IiwiUW5BUGFpcnMiLCJtYXAiLCJxbmFQYWlyIiwic3R5bGVzIiwiYWN0aXZlUGFnZSIsIlRlc3RCR0NvbnRhaW5lciIsInRUeXBlV2FybmluZyIsInRleHRBbnN3ZXIiLCJBbnN3ZXIiLCJhbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFPZDtBQUNKQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxZQUFsQixFQURJLENBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxXQUFTQyxZQUFULENBQ0VDLFFBREYsRUFFRTtBQUNBQyxLQUhGLEVBSUU7QUFDQSxXQUNFO0FBQ0UsUUFBRSxFQUFFQyxNQUFNLENBQUNGLFFBQUQsQ0FEWjtBQUVFLGNBQVEsRUFBRUcsb0JBRlo7QUFHRSxlQUFTLEVBQUVDLHNFQUFVLENBQUNDLFFBSHhC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QTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREQsR0FLQ1AsUUFBUSxFQU5aLENBRkYsQ0FIRixDQURGO0FBbUJELENBaElEOztLQUFNdkIsVztBQWtJU0EsMEVBQWY7O0FBQ0EsU0FBUytCLFVBQVQsQ0FBb0J6QixRQUFwQixFQUFzQ0MsR0FBdEMsRUFBaUQ7QUFDL0MsU0FDRTtBQUNFLE1BQUUsRUFBRUMsTUFBTSxDQUFDRixRQUFELENBRFosQ0FFRTtBQUZGO0FBR0UsYUFBUyxFQUFFSSxzRUFBVSxDQUFDc0IsTUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHekIsR0FBRyxDQUFDMEIsTUFMUCxDQURGO0FBU0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBUZXN0UHJldmlldyA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSB8IHVuZGVmaW5lZDtcbiAgLy8gY3VycmVudFRlc3RTdGF0ZTogSVRlc3Q7XG4gIHBhZ2VUb1JlbmRlcjogYW55O1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHRlc3Q6IElUZXN0KSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2UoXG4gIC8vICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gIC8vICkge1xuICAvLyAgIC8vIGxldCB0bXBBcnJheSA9XG4gIC8vICAgLy8gICBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzW3Byb3BzLmFjdGl2ZVBhZ2VdXG4gIC8vICAgLy8gICAgIC5RbkFQYWlycztcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcInRtcFwiLCB0bXBBcnJheSk7XG4gIC8vICAgLy8gdG1wQXJyYXkuZm9yRWFjaCgoZWxlKSA9PiBjb25zb2xlLmxvZyhlbGUpKTtcbiAgLy8gICBjb25zdCB0bXBBcnJheSA9IHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXM7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXkpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5W3Byb3BzLmFjdGl2ZVBhZ2VdKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheVtwcm9wcy5hY3RpdmVQYWdlXS5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSk7XG4gIC8vICAgdG1wQXJyYXlbcHJvcHMuYWN0aXZlUGFnZV0uUW5BUGFpcnNbZXZlbnQuY3VycmVudFRhcmdldC5pZF0ucXVlc3Rpb24gPVxuICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheSk7XG4gIC8vICAgcHJvcHMuc2F2ZUNoYW5nZXMoe1xuICAvLyAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZSxcbiAgLy8gICAgIFtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXToge1xuICAvLyAgICAgICAuLi5wcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLFxuICAvLyAgICAgICBwYWdlczogdG1wQXJyYXksXG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9XG4gIGZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVlc3Rpb25DaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn1cbiAgICAgID5cbiAgICAgICAge3FuYS5xdWVzdGlvbn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ1F1ZXN0aW9uKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nQW5zd2VyKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWVzdGlvblJlbmRlckNvbnRyb2xsZXIoY3VycmVudEl0ZW06IG51bWJlciwgY3VycmVudFBhaXI6IElRbkEpIHtcbiAgICBzd2l0Y2ggKHByb3BzLnRlc3RUeXBlKSB7XG4gICAgICBjYXNlIFwiVFRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RleHRRdWVzdGlvbihjdXJyZW50SXRlbSwgY3VycmVudFBhaXIpfVxuICAgICAgICAgICAge31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtldmVudC5jdXJyZW50VGFyZ2V0LmlkfTpgLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+XG4gICAgcHJvcHMucGFnZVRvUmVuZGVyLlFuQVBhaXJzLm1hcCgocW5hOiBJUW5BLCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICA8ZGl2IGtleT17aXRlcmF0b3J9IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn0+XG4gICAgICAgIHtxdWVzdGlvblJlbmRlckNvbnRyb2xsZXIoaXRlcmF0b3IsIHFuYSl9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRUeXBlV2FybmluZ30+XG4gICAgICAgICAgICAgIDxoMT5QbGVhc2UgY2hvb3NlIGEgdGVzdCB0eXBlPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwYWdlQm9keSgpXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Lyoge3BhZ2VCb2R5KCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG5mdW5jdGlvbiB0ZXh0QW5zd2VyKGl0ZXJhdG9yOiBudW1iZXIsIHFuYTogSVFuQSkge1xuICByZXR1cm4gKFxuICAgIDx0ZXh0YXJlYVxuICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQW5zd2VyQ2hhbmdlfVxuICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkFuc3dlcn1cbiAgICA+XG4gICAgICB7cW5hLmFuc3dlcn1cbiAgICA8L3RleHRhcmVhPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})