webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    __jsx(\"input\", {\n      type: \"text\",\n      name: \"qaTextEntry\",\n      id: String(id),\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 5\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 7\n        }\n      }, props.testType === \"TT\" ?\n      /* textQuestion(iterator, qna) */\n      q_a_TextEntry(\"question\", iterator) : null, props.testType === \"PP\" || props.testType === \"PT\" ? imgQuestion(iterator, qna) : null, props.testType === \"TT\" || props.testType === \"PT\" ? textAnswer(iterator, qna) : null, props.testType === \"PP\" ? imgAnswer(iterator, qna) : null);\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsIm1hcCIsImVsZSIsInF1ZXN0aW9uIiwidG1wIiwic2F2ZU5ld0RhdGEiLCJxaWQiLCJkYXRhIiwid2hhdFRvU2F2ZSIsInNhdmVDaGFuZ2VzIiwiaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwidW5kZWZpbmVkIiwidGV4dFF1ZXN0aW9uIiwiaXRlcmF0b3IiLCJxbmEiLCJTdHJpbmciLCJoYW5kbGVRdWVzdGlvbkNoYW5nZSIsImNvbXBTdHlsZXMiLCJRdWVzdGlvbiIsImltZ1F1ZXN0aW9uIiwiaGFuZGxlQW5zd2VyQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImlkIiwidmFsdWUiLCJ0ZXh0QW5zd2VyIiwiZSIsIkFuc3dlciIsImFuc3dlciIsImltZ0Fuc3dlciIsInFfYV9UZXh0RW50cnkiLCJ0eXBlIiwicGFnZUJvZHkiLCJxbmFQYWlyIiwidGVzdFR5cGUiLCJzdHlsZXMiLCJhY3RpdmVQYWdlIiwiVGVzdEJHQ29udGFpbmVyIiwidFR5cGVXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBT2Q7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csWUFBbEI7QUFDQUgsT0FBSyxDQUFDRyxZQUFOLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxHQUFEO0FBQUEsV0FBU0osT0FBTyxDQUFDQyxHQUFSLENBQVlHLEdBQUcsQ0FBQ0MsUUFBaEIsQ0FBVDtBQUFBLEdBQXZCO0FBRUEsTUFBSUMsR0FBRyxHQUFHUCxLQUFLLENBQUNHLFlBQWhCOztBQUVBLE1BQU1LLFdBQVcsR0FBRyxT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QUFuQyxHQUFxRCxJQWZ4RCxDQURxQjtBQUFBLEtBQXZCLENBRGU7QUFBQSxHQUFqQjs7QUFxQkFuQixPQUFLLENBQUNzQyxRQUFOLEtBQW1CLEVBQW5CLEdBQ0lyQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBREosR0FFSUQsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ3NDLFFBQWxCLENBRko7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw0RUFBTSxDQUFDeEMsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0MsS0FBSyxDQUFDd0MsVUFBTixHQUFtQixDQUE5QixDQURGLEVBR0U7QUFBSyxhQUFTLFlBQUtsQixzRUFBVSxDQUFDbUIsZUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRW5CLHNFQUFVLENBQUNjLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3BDLEtBQUssQ0FBQ3NDLFFBQU4sS0FBbUIsRUFBbkIsR0FDQztBQUFLLGFBQVMsRUFBRWhCLHNFQUFVLENBQUNvQixZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixDQURELEdBS0NOLFFBQVEsRUFOWixDQUZGLENBSEYsQ0FERjtBQW1CRCxDQW5LRDs7S0FBTXJDLFc7QUFxS1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29udGFpbmVyQ1NTIH0gZnJvbSBcInJlYWN0LXNlbGVjdC9zcmMvY29tcG9uZW50cy9jb250YWluZXJzXCI7XG5pbXBvcnQge1xuICBJTGFuZ1NwZWNpZmljQm9keSxcbiAgSVFuQSxcbiAgSVFuQVBhaXJzLFxuICBJVGVzdCxcbiAgVExhbmdPcHRpb24sXG4gIFRUZXN0VHlwZXMsXG59IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFRlc3RQcmV2aWV3ID0gKHByb3BzOiB7XG4gIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICAvLyBjdXJyZW50VGVzdFN0YXRlOiBJVGVzdDtcbiAgcGFnZVRvUmVuZGVyOiBJUW5BW107XG4gIHRlc3RUeXBlOiBJVGVzdFtcInR5cGVcIl07XG4gIHNhdmVDaGFuZ2VzOiAocGFnZTogYW55KSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuICBwcm9wcy5wYWdlVG9SZW5kZXIubWFwKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZS5xdWVzdGlvbikpO1xuXG4gIGxldCB0bXAgPSBwcm9wcy5wYWdlVG9SZW5kZXI7XG5cbiAgY29uc3Qgc2F2ZU5ld0RhdGEgPSAoXG4gICAgcWlkOiBudW1iZXIsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIHdoYXRUb1NhdmU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCJcbiAgKSA9PiB7XG4gICAgdG1wW3FpZF1bd2hhdFRvU2F2ZV0gPSBkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKHRtcFtxaWRdW3doYXRUb1NhdmVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gc2F2ZSBuZXcgZGF0YVwiLCB0bXApO1xuICAgIHByb3BzLnNhdmVDaGFuZ2VzKHRtcCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyA9IChcbiAgICBldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiA/IGNvbnNvbGUubG9nKFwiRWZudGVyXCIpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVzdGlvbkNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVRdWVzdGlvbktleVByZXNzfVxuICAgICAgPlxuICAgICAgICB7Lyoge3FuYS5xdWVzdGlvbn0gKi99XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nUXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwiYW5zd2VyXCIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRBbnN3ZXIoaXRlcmF0b3I6IG51bWJlciwgcW5hOiBJUW5BKSB7XG4gICAgLy8gY29uc3QgW2N1clZhbHVlLCBzZXRDdXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjdXJWYWx1ZSk7XG4gICAgLy8gfSwgW2N1clZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUFuc3dlckNoYW5nZShlKTtcbiAgICAgICAgICAvLyBzZXRDdXJWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgICAgPlxuICAgICAgICB7cW5hLmFuc3dlcn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0Fuc3dlcihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgICAvLyApID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8c3Bhbj7vvIs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcV9hX1RleHRFbnRyeSh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSB7XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBuYW1lPVwicWFUZXh0RW50cnlcIlxuICAgICAgaWQ9e1N0cmluZyhpZCl9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IHNhdmVOZXdEYXRhKGlkLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUsIHR5cGUpfVxuICAgIC8+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25DaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke2V2ZW50LmN1cnJlbnRUYXJnZXQuaWR9OmAsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwicXVlc3Rpb25cIik7XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICB7LyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL31cbiAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCJcbiAgICAgICAgICA/IC8qIHRleHRRdWVzdGlvbihpdGVyYXRvciwgcW5hKSAqLyBxX2FfVGV4dEVudHJ5KFxuICAgICAgICAgICAgICBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgIGl0ZXJhdG9yXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyBpbWdRdWVzdGlvbihpdGVyYXRvciwgcW5hKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgey8qIEZvciBhbnN3ZXIgcmVuZGVyaW5nICovfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiVFRcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyB0ZXh0QW5zd2VyKGl0ZXJhdG9yLCBxbmEpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiA/IGltZ0Fuc3dlcihpdGVyYXRvciwgcW5hKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRUeXBlV2FybmluZ30+XG4gICAgICAgICAgICAgIDxoMT5QbGVhc2UgY2hvb3NlIGEgdGVzdCB0eXBlPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwYWdlQm9keSgpXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Lyoge3BhZ2VCb2R5KCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})