webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data;\n    console.log(tmp[qid][whatToSave]);\n    console.log(\"from save new data\", tmp);\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }\n    }, qna.question);\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 7\n        }\n      }, props.testType === \"TT\" ? textQuestion(iterator, qna) : null, props.testType === \"PP\" || props.testType === \"PT\" ? imgQuestion(iterator, qna) : null, props.testType === \"TT\" || props.testType === \"PT\" ? textAnswer(iterator, qna) : null, props.testType === \"PP\" ? imgAnswer(iterator, qna) : null);\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsIm1hcCIsImVsZSIsInF1ZXN0aW9uIiwidG1wIiwic2F2ZU5ld0RhdGEiLCJxaWQiLCJkYXRhIiwid2hhdFRvU2F2ZSIsInNhdmVDaGFuZ2VzIiwiaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwidW5kZWZpbmVkIiwidGV4dFF1ZXN0aW9uIiwiaXRlcmF0b3IiLCJxbmEiLCJTdHJpbmciLCJoYW5kbGVRdWVzdGlvbkNoYW5nZSIsImNvbXBTdHlsZXMiLCJRdWVzdGlvbiIsImltZ1F1ZXN0aW9uIiwiaGFuZGxlQW5zd2VyQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImlkIiwidmFsdWUiLCJ0ZXh0QW5zd2VyIiwiZSIsIkFuc3dlciIsImFuc3dlciIsImltZ0Fuc3dlciIsInBhZ2VCb2R5IiwicW5hUGFpciIsInRlc3RUeXBlIiwic3R5bGVzIiwiYWN0aXZlUGFnZSIsIlRlc3RCR0NvbnRhaW5lciIsInRUeXBlV2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQU9kO0FBQ0pDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLFlBQWxCO0FBQ0FILE9BQUssQ0FBQ0csWUFBTixDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsR0FBRDtBQUFBLFdBQVNKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFHLENBQUNDLFFBQWhCLENBQVQ7QUFBQSxHQUF2QjtBQUVBLE1BQUlDLEdBQUcsR0FBR1AsS0FBSyxDQUFDRyxZQUFoQjs7QUFFQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNsQkMsR0FEa0IsRUFFbEJDLElBRmtCLEVBR2xCQyxVQUhrQixFQUlmO0FBQ0hKLE9BQUcsQ0FBQ0UsR0FBRCxDQUFILENBQVNFLFVBQVQsSUFBdUJELElBQXZCO0FBQ0FULFdBQU8sQ0FBQ0MsR0FBUixDQUFZSyxHQUFHLENBQUNFLEdBQUQsQ0FBSCxDQUFTRSxVQUFULENBQVo7QUFDQVYsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NLLEdBQWxDO0FBQ0FQLFNBQUssQ0FBQ1ksV0FBTixDQUFrQkwsR0FBbEI7QUFDRCxHQVREOztBQVdBLE1BQU1NLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FDN0JDLEtBRDZCLEVBRTFCO0FBQ0hBLFNBQUssQ0FBQ0MsR0FBTixLQUFjLE9BQWQsR0FBd0JkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosQ0FBeEIsR0FBZ0RjLFNBQWhEO0FBQ0QsR0FKRDs7QUFNQSxXQUFTQyxZQUFULENBQ0VDLFFBREYsRUFFRTtBQUNBQyxLQUhGLEVBSUU7QUFDQSxXQUNFO0FBQ0U7QUFDQSxRQUFFLEVBQUVDLE1BQU0sQ0FBQ0YsUUFBRCxDQUZaO0FBR0UsY0FBUSxFQUFFRyxvQkFIWjtBQUlFLGVBQVMsRUFBRUMsc0VBQVUsQ0FBQ0MsUUFKeEI7QUFLRSxnQkFBVSxFQUFFVixzQkFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dNLEdBQUcsQ0FBQ2IsUUFQUCxDQURGO0FBV0Q7O0FBQ0QsV0FBU2tCLFdBQVQsQ0FDRU4sUUFERixFQUVFO0FBQ0E7QUFDQTtBQUNBQyxLQUxGLEVBTUU7QUFDQSxXQUNFO0FBQUssUUFBRSxFQUFFQyxNQUFNLENBQUNGLFFBQUQsQ0FBZjtBQUEyQixlQUFTLEVBQUVJLHNFQUFVLENBQUNDLFFBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREY7QUFLRDs7QUFFRCxNQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQ3pCWCxLQUR5QixFQUV0QjtBQUNITixlQUFXLENBQUNNLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkMsRUFBckIsRUFBeUJiLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkUsS0FBN0MsRUFBb0QsUUFBcEQsQ0FBWDtBQUNELEdBSkQ7O0FBTUEsV0FBU0MsVUFBVCxDQUFvQlgsUUFBcEIsRUFBc0NDLEdBQXRDLEVBQWlEO0FBQy9DO0FBRUE7QUFDQTtBQUNBO0FBRUEsV0FDRTtBQUNFO0FBQ0EsUUFBRSxFQUFFQyxNQUFNLENBQUNGLFFBQUQsQ0FGWjtBQUdFLGNBQVEsRUFBRSxrQkFBQ1ksQ0FBRCxFQUFPO0FBQ2ZMLDBCQUFrQixDQUFDSyxDQUFELENBQWxCLENBRGUsQ0FFZjtBQUNELE9BTkg7QUFPRSxlQUFTLEVBQUVSLHNFQUFVLENBQUNTLE1BUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTR1osR0FBRyxDQUFDYSxNQVRQLENBREY7QUFhRDs7QUFFRCxXQUFTQyxTQUFULENBQ0VmLFFBREYsRUFFRTtBQUNBO0FBQ0E7QUFDQUMsS0FMRixFQU1FO0FBQ0EsV0FDRTtBQUFLLFFBQUUsRUFBRUMsTUFBTSxDQUFDRixRQUFELENBQWY7QUFBMkIsZUFBUyxFQUFFSSxzRUFBVSxDQUFDQyxRQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGO0FBS0Q7O0FBRUQsTUFBTUYsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUMzQlAsS0FEMkIsRUFFeEI7QUFDSGIsV0FBTyxDQUFDQyxHQUFSLFdBQWVZLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkMsRUFBbkMsUUFBMENiLEtBQUssQ0FBQ1ksYUFBTixDQUFvQkUsS0FBOUQ7QUFDQXBCLGVBQVcsQ0FBQ00sS0FBSyxDQUFDWSxhQUFOLENBQW9CQyxFQUFyQixFQUF5QmIsS0FBSyxDQUFDWSxhQUFOLENBQW9CRSxLQUE3QyxFQUFvRCxVQUFwRCxDQUFYO0FBQ0QsR0FMRDs7QUFPQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQ2ZsQyxLQUFLLENBQUNHLFlBQU4sQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNlLEdBQUQsRUFBWUQsUUFBWjtBQUFBLGFBQ3JCO0FBQUssV0FBRyxFQUFFQSxRQUFWO0FBQW9CLFVBQUUsRUFBRUUsTUFBTSxDQUFDRixRQUFELENBQTlCO0FBQTBDLGlCQUFTLEVBQUVJLHNFQUFVLENBQUNhLE9BQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFR25DLEtBQUssQ0FBQ29DLFFBQU4sS0FBbUIsSUFBbkIsR0FBMEJuQixZQUFZLENBQUNDLFFBQUQsRUFBV0MsR0FBWCxDQUF0QyxHQUF3RCxJQUYzRCxFQUdHbkIsS0FBSyxDQUFDb0MsUUFBTixLQUFtQixJQUFuQixJQUEyQnBDLEtBQUssQ0FBQ29DLFFBQU4sS0FBbUIsSUFBOUMsR0FDR1osV0FBVyxDQUFDTixRQUFELEVBQVdDLEdBQVgsQ0FEZCxHQUVHLElBTE4sRUFPR25CLEtBQUssQ0FBQ29DLFFBQU4sS0FBbUIsSUFBbkIsSUFBMkJwQyxLQUFLLENBQUNvQyxRQUFOLEtBQW1CLElBQTlDLEdBQ0dQLFVBQVUsQ0FBQ1gsUUFBRCxFQUFXQyxHQUFYLENBRGIsR0FFRyxJQVROLEVBVUduQixLQUFLLENBQUNvQyxRQUFOLEtBQW1CLElBQW5CLEdBQTBCSCxTQUFTLENBQUNmLFFBQUQsRUFBV0MsR0FBWCxDQUFuQyxHQUFxRCxJQVZ4RCxDQURxQjtBQUFBLEtBQXZCLENBRGU7QUFBQSxHQUFqQjs7QUFnQkFuQixPQUFLLENBQUNvQyxRQUFOLEtBQW1CLEVBQW5CLEdBQ0luQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBREosR0FFSUQsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ29DLFFBQWxCLENBRko7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw0RUFBTSxDQUFDdEMsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0MsS0FBSyxDQUFDc0MsVUFBTixHQUFtQixDQUE5QixDQURGLEVBR0U7QUFBSyxhQUFTLFlBQUtoQixzRUFBVSxDQUFDaUIsZUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRWpCLHNFQUFVLENBQUNZLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xDLEtBQUssQ0FBQ29DLFFBQU4sS0FBbUIsRUFBbkIsR0FDQztBQUFLLGFBQVMsRUFBRWQsc0VBQVUsQ0FBQ2tCLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREQsR0FLQ04sUUFBUSxFQU5aLENBRkYsQ0FIRixDQURGO0FBbUJELENBckpEOztLQUFNbkMsVztBQXVKU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb250YWluZXJDU1MgfSBmcm9tIFwicmVhY3Qtc2VsZWN0L3NyYy9jb21wb25lbnRzL2NvbnRhaW5lcnNcIjtcbmltcG9ydCB7XG4gIElMYW5nU3BlY2lmaWNCb2R5LFxuICBJUW5BLFxuICBJUW5BUGFpcnMsXG4gIElUZXN0LFxuICBUTGFuZ09wdGlvbixcbiAgVFRlc3RUeXBlcyxcbn0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IElRbkFbXTtcbiAgdGVzdFR5cGU6IElUZXN0W1widHlwZVwiXTtcbiAgc2F2ZUNoYW5nZXM6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzLnBhZ2VUb1JlbmRlcik7XG4gIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKGVsZSkgPT4gY29uc29sZS5sb2coZWxlLnF1ZXN0aW9uKSk7XG5cbiAgbGV0IHRtcCA9IHByb3BzLnBhZ2VUb1JlbmRlcjtcblxuICBjb25zdCBzYXZlTmV3RGF0YSA9IChcbiAgICBxaWQ6IG51bWJlcixcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgd2hhdFRvU2F2ZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIlxuICApID0+IHtcbiAgICB0bXBbcWlkXVt3aGF0VG9TYXZlXSA9IGRhdGE7XG4gICAgY29uc29sZS5sb2codG1wW3FpZF1bd2hhdFRvU2F2ZV0pO1xuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBzYXZlIG5ldyBkYXRhXCIsIHRtcCk7XG4gICAgcHJvcHMuc2F2ZUNoYW5nZXModG1wKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbktleVByZXNzID0gKFxuICAgIGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiID8gY29uc29sZS5sb2coXCJFZm50ZXJcIikgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gdGV4dFF1ZXN0aW9uKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtcIkVudGVyIHlvdXIgdGV4dFwifVxuICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXN0aW9uQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259XG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZVF1ZXN0aW9uS2V5UHJlc3N9XG4gICAgICA+XG4gICAgICAgIHtxbmEucXVlc3Rpb259XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nUXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwiYW5zd2VyXCIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRBbnN3ZXIoaXRlcmF0b3I6IG51bWJlciwgcW5hOiBJUW5BKSB7XG4gICAgLy8gY29uc3QgW2N1clZhbHVlLCBzZXRDdXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjdXJWYWx1ZSk7XG4gICAgLy8gfSwgW2N1clZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUFuc3dlckNoYW5nZShlKTtcbiAgICAgICAgICAvLyBzZXRDdXJWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgICAgPlxuICAgICAgICB7cW5hLmFuc3dlcn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0Fuc3dlcihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgICAvLyApID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8c3Bhbj7vvIs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25DaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke2V2ZW50LmN1cnJlbnRUYXJnZXQuaWR9OmAsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwicXVlc3Rpb25cIik7XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICB7LyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL31cbiAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCIgPyB0ZXh0UXVlc3Rpb24oaXRlcmF0b3IsIHFuYSkgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyBpbWdRdWVzdGlvbihpdGVyYXRvciwgcW5hKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgey8qIEZvciBhbnN3ZXIgcmVuZGVyaW5nICovfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiVFRcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyB0ZXh0QW5zd2VyKGl0ZXJhdG9yLCBxbmEpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiA/IGltZ0Fuc3dlcihpdGVyYXRvciwgcW5hKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRUeXBlV2FybmluZ30+XG4gICAgICAgICAgICAgIDxoMT5QbGVhc2UgY2hvb3NlIGEgdGVzdCB0eXBlPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwYWdlQm9keSgpXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Lyoge3BhZ2VCb2R5KCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})