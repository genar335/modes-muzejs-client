webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  console.log(props.pageToRender); // function handleTextAreaQuestionChange(\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) {\n  //   // let tmpArray =\n  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]\n  //   //     .QnAPairs;\n  //   // console.log(\"tmp\", tmpArray);\n  //   // tmpArray.forEach((ele) => console.log(ele));\n  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;\n  //   // console.log(tmpArray);\n  //   // console.log(tmpArray[props.activePage]);\n  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);\n  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =\n  //     event.currentTarget.value;\n  //   // console.log(tmpArray);\n  //   props.saveChanges({\n  //     ...props.currentTestState,\n  //     [props.currentLanguage!]: {\n  //       ...props.currentTestState[props.currentLanguage!],\n  //       pages: tmpArray,\n  //     },\n  //   });\n  // }\n\n  function questionRenderController(currentItem, currentPair) {\n    switch (props.testType) {\n      case 'TT':\n        return;\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var pageBody = function pageBody() {// return (\n    //   <div className={compStyles.pageBody}>\n    //     {props.currentTestState[props.currentLanguage || \"ru\"].pages[\n    //       props.activePage\n    //     ].QnAPairs.map((qnaPair: IQnA, index: number) => (\n    //       <div className={compStyles.qnaPair} id={String(index)}>\n    //         <div className={compStyles.Question}>\n    //           {questionRenderController(index, qnaPair)}\n    //         </div>\n    //         <div className={compStyles.Answer}>Answer: {qnaPair.answer}</div>\n    //       </div>\n    //     ))}\n    //   </div>\n    // );\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    pageBody();\n  }, [props.currentTestState]);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }), pageBody()));\n};\n\n_s(TestPreview, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsInF1ZXN0aW9uUmVuZGVyQ29udHJvbGxlciIsImN1cnJlbnRJdGVtIiwiY3VycmVudFBhaXIiLCJ0ZXN0VHlwZSIsInBhZ2VCb2R5IiwidXNlRWZmZWN0IiwiY3VycmVudFRlc3RTdGF0ZSIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJjb21wU3R5bGVzIiwiVGVzdEJHQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQU9kO0FBQUE7O0FBQ0pDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLFlBQWxCLEVBREksQ0FHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVNDLHdCQUFULENBQWtDQyxXQUFsQyxFQUF1REMsV0FBdkQsRUFBMEU7QUFDeEUsWUFBUU4sS0FBSyxDQUFDTyxRQUFkO0FBQ0UsV0FBSyxJQUFMO0FBQ0U7QUFDQTs7QUFFRjtBQUNFO0FBTko7QUFRRDs7QUFDRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNLENBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWZEOztBQWlCQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFlBQVE7QUFDVCxHQUZRLEVBRU4sQ0FBQ1IsS0FBSyxDQUFDVSxnQkFBUCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw0RUFBTSxDQUFDWixXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFXQyxLQUFLLENBQUNZLFVBQU4sR0FBbUIsQ0FBOUIsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFQyxzRUFBVSxDQUFDQyxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR04sUUFBUSxFQUZYLENBRkYsQ0FERjtBQVNELENBMUVEOztHQUFNVCxXOztLQUFBQSxXO0FBNEVTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdFByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSVFuQSxcbiAgSVFuQVBhaXJzLFxuICBJVGVzdCxcbiAgVExhbmdPcHRpb24sXG4gIFRUZXN0VHlwZXMsXG59IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFRlc3RQcmV2aWV3ID0gKHByb3BzOiB7XG4gIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICAvLyBjdXJyZW50VGVzdFN0YXRlOiBJVGVzdDtcbiAgcGFnZVRvUmVuZGVyOiBhbnk7XG4gIHRlc3RUeXBlOiBJVGVzdFsndHlwZSddO1xuICBzYXZlQ2hhbmdlczogKHRlc3Q6IElUZXN0KSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2UoXG4gIC8vICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gIC8vICkge1xuICAvLyAgIC8vIGxldCB0bXBBcnJheSA9XG4gIC8vICAgLy8gICBwcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLnBhZ2VzW3Byb3BzLmFjdGl2ZVBhZ2VdXG4gIC8vICAgLy8gICAgIC5RbkFQYWlycztcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcInRtcFwiLCB0bXBBcnJheSk7XG4gIC8vICAgLy8gdG1wQXJyYXkuZm9yRWFjaCgoZWxlKSA9PiBjb25zb2xlLmxvZyhlbGUpKTtcbiAgLy8gICBjb25zdCB0bXBBcnJheSA9IHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXM7XG4gIC8vICAgLy8gY29uc29sZS5sb2codG1wQXJyYXkpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRtcEFycmF5W3Byb3BzLmFjdGl2ZVBhZ2VdKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheVtwcm9wcy5hY3RpdmVQYWdlXS5RbkFQYWlyc1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSk7XG4gIC8vICAgdG1wQXJyYXlbcHJvcHMuYWN0aXZlUGFnZV0uUW5BUGFpcnNbZXZlbnQuY3VycmVudFRhcmdldC5pZF0ucXVlc3Rpb24gPVxuICAvLyAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0bXBBcnJheSk7XG4gIC8vICAgcHJvcHMuc2F2ZUNoYW5nZXMoe1xuICAvLyAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZSxcbiAgLy8gICAgIFtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXToge1xuICAvLyAgICAgICAuLi5wcm9wcy5jdXJyZW50VGVzdFN0YXRlW3Byb3BzLmN1cnJlbnRMYW5ndWFnZSFdLFxuICAvLyAgICAgICBwYWdlczogdG1wQXJyYXksXG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gcXVlc3Rpb25SZW5kZXJDb250cm9sbGVyKGN1cnJlbnRJdGVtOiBudW1iZXIsIGN1cnJlbnRQYWlyOiBJUW5BKSB7XG4gICAgc3dpdGNoIChwcm9wcy50ZXN0VHlwZSkge1xuICAgICAgY2FzZSAnVFQnOlxuICAgICAgICByZXR1cm5cbiAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PiB7XG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnBhZ2VCb2R5fT5cbiAgICAvLyAgICAge3Byb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIHx8IFwicnVcIl0ucGFnZXNbXG4gICAgLy8gICAgICAgcHJvcHMuYWN0aXZlUGFnZVxuICAgIC8vICAgICBdLlFuQVBhaXJzLm1hcCgocW5hUGFpcjogSVFuQSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9IGlkPXtTdHJpbmcoaW5kZXgpfT5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufT5cbiAgICAvLyAgICAgICAgICAge3F1ZXN0aW9uUmVuZGVyQ29udHJvbGxlcihpbmRleCwgcW5hUGFpcil9XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkFuc3dlcn0+QW5zd2VyOiB7cW5hUGFpci5hbnN3ZXJ9PC9kaXY+XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgICkpfVxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBhZ2VCb2R5KCk7XG4gIH0sIFtwcm9wcy5jdXJyZW50VGVzdFN0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RQcmV2aWV3fT5cbiAgICAgIDxoMz5QYWdlOiB7cHJvcHMuYWN0aXZlUGFnZSArIDF9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlRlc3RCR0NvbnRhaW5lcn0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAge3BhZ2VCb2R5KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RQcmV2aWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})