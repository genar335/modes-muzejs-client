webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender); // function handleTextAreaQuestionChange(\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) {\n  //   // let tmpArray =\n  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n  //   //     .QnAPairs;\n  //   // console.log(\"tmp\", tmpArray);\n  //   // tmpArray.forEach((ele) => console.log(ele));\n  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;\n  //   // console.log(tmpArray);\n  //   // console.log(tmpArray[props.activePage]);\n  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);\n  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =\n  //     event.currentTarget.value;\n  //   // console.log(tmpArray);\n  //   props.saveChanges({\n  //     ...props.currentTestState,\n  //     [props.currentLanguage!]: {\n  //       ...props.currentTestState[props.currentLanguage!],\n  //       pages: tmpArray,\n  //     },\n  //   });\n  // }\n\n  function questionRenderController(currentItem, currentPair) {\n    switch (props.testType) {\n      case \"TT\":\n        return;\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.QnAPairs.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }\n      }, textQuestion(iterator, handleQuestionChange, qna), textAnswer(iterator, qna));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nfunction textAnswer(iterator, qna) {\n  return __jsx(\"textarea\", {\n    id: String(iterator) // onChange={handleAnswerChange}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }\n  }, qna.answer);\n}\n\nfunction textQuestion(iterator, handleQuestionChange, qna) {\n  return __jsx(\"textarea\", {\n    id: String(iterator),\n    onChange: handleQuestionChange,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, qna.question);\n}\n\nfunction imgQuestion(iterator, handleQuestionChange, qna) {\n  return __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsInF1ZXN0aW9uUmVuZGVyQ29udHJvbGxlciIsImN1cnJlbnRJdGVtIiwiY3VycmVudFBhaXIiLCJ0ZXN0VHlwZSIsImhhbmRsZVF1ZXN0aW9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInBhZ2VCb2R5IiwiUW5BUGFpcnMiLCJtYXAiLCJxbmEiLCJpdGVyYXRvciIsIlN0cmluZyIsImNvbXBTdHlsZXMiLCJxbmFQYWlyIiwidGV4dFF1ZXN0aW9uIiwidGV4dEFuc3dlciIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJUZXN0QkdDb250YWluZXIiLCJ0VHlwZVdhcm5pbmciLCJBbnN3ZXIiLCJhbnN3ZXIiLCJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiaW1nUXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFPZDtBQUNKQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxZQUFsQixFQURJLENBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFTQyx3QkFBVCxDQUFrQ0MsV0FBbEMsRUFBdURDLFdBQXZELEVBQTBFO0FBQ3hFLFlBQVFOLEtBQUssQ0FBQ08sUUFBZDtBQUNFLFdBQUssSUFBTDtBQUNFO0FBQ0E7O0FBRUY7QUFDRTtBQU5KO0FBUUQ7O0FBRUQsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBUZXN0UHJldmlldyA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSB8IHVuZGVmaW5lZDtcbiAgLy8gY3VycmVudFRlc3RTdGF0ZTogSVRlc3Q7XG4gIHBhZ2VUb1JlbmRlcjogYW55O1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHRlc3Q6IElUZXN0KSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2UoXG4gIC8vICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gIC8vICkge1xuICAvLyAgIC8vIGxldCB0bXBBcnJheSA9XG4gIC8vICAgLy8gICBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzW3Byb3BzLmFjdGl2ZVBhZ2VdXG4gIC8vICAgLy8gICAgIC5RbkFQYWlycztcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcInRtcFwiLCB0bXBBcnJheSk7XG4gIC8vICAgLy8gdG1wQXJyYXkuZm9yRWFjaCgoZWxlKSA9PiBjb25zb2xlLmxvZyhlbGUpKTtcbiAgLy8gICBjb25zdCB0bXBBcnJheSA9IHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXM7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXkpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5W3Byb3BzLmFjdGl2ZVBhZ2VdKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheVtwcm9wcy5hY3RpdmVQYWdlXS5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSk7XG4gIC8vICAgdG1wQXJyYXlbcHJvcHMuYWN0aXZlUGFnZV0uUW5BUGFpcnNbZXZlbnQuY3VycmVudFRhcmdldC5pZF0ucXVlc3Rpb24gPVxuICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheSk7XG4gIC8vICAgcHJvcHMuc2F2ZUNoYW5nZXMoe1xuICAvLyAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZSxcbiAgLy8gICAgIFtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXToge1xuICAvLyAgICAgICAuLi5wcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLFxuICAvLyAgICAgICBwYWdlczogdG1wQXJyYXksXG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gcXVlc3Rpb25SZW5kZXJDb250cm9sbGVyKGN1cnJlbnRJdGVtOiBudW1iZXIsIGN1cnJlbnRQYWlyOiBJUW5BKSB7XG4gICAgc3dpdGNoIChwcm9wcy50ZXN0VHlwZSkge1xuICAgICAgY2FzZSBcIlRUXCI6XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtldmVudC5jdXJyZW50VGFyZ2V0LmlkfTpgLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+XG4gICAgcHJvcHMucGFnZVRvUmVuZGVyLlFuQVBhaXJzLm1hcCgocW5hOiBJUW5BLCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICA8ZGl2IGtleT17aXRlcmF0b3J9IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn0+XG4gICAgICAgIHt0ZXh0UXVlc3Rpb24oaXRlcmF0b3IsIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlLCBxbmEpfVxuICAgICAgICB7dGV4dEFuc3dlcihpdGVyYXRvciwgcW5hKX1cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gIHByb3BzLnRlc3RUeXBlID09PSBcIlwiXG4gICAgPyBjb25zb2xlLmxvZyhcIm5vIHRlc3QgdHlwZVwiKVxuICAgIDogY29uc29sZS5sb2cocHJvcHMudGVzdFR5cGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0UHJldmlld30+XG4gICAgICA8aDM+UGFnZToge3Byb3BzLmFjdGl2ZVBhZ2UgKyAxfTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzLlRlc3RCR0NvbnRhaW5lcn1gfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5wYWdlQm9keX0+XG4gICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMudFR5cGVXYXJuaW5nfT5cbiAgICAgICAgICAgICAgPGgxPlBsZWFzZSBjaG9vc2UgYSB0ZXN0IHR5cGU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHBhZ2VCb2R5KClcbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB7cGFnZUJvZHkoKX0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbmZ1bmN0aW9uIHRleHRBbnN3ZXIoaXRlcmF0b3I6IG51bWJlciwgcW5hOiBJUW5BKSB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVBbnN3ZXJDaGFuZ2V9XG4gICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgID5cbiAgICAgIHtxbmEuYW5zd2VyfVxuICAgIDwvdGV4dGFyZWE+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgaXRlcmF0b3I6IG51bWJlcixcbiAgaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQsXG4gIHFuYTogSVFuQVxuKSB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVzdGlvbkNoYW5nZX1cbiAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn1cbiAgICA+XG4gICAgICB7cW5hLnF1ZXN0aW9ufVxuICAgIDwvdGV4dGFyZWE+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGltZ1F1ZXN0aW9uKFxuICBpdGVyYXRvcjogbnVtYmVyLFxuICBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZCxcbiAgcW5hOiBJUW5BXG4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICA8c3Bhbj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})