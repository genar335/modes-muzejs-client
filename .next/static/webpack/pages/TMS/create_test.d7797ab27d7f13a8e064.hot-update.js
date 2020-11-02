webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState2[0],\n      setSelectedLang = _useState2[1];\n\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    console.log(\"hello from a new beginninf\", type);\n    console.log(\"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]));\n    return __jsx(\"input\", {\n      className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]),\n      type: \"text\",\n      name: \"qaTextEntry\",\n      id: String(id),\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 15\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler)))));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Uh0F0rW/deuF+Uo2Os0S4H/LVf0=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RlZExhbmciLCJzZXRTZWxlY3RlZExhbmciLCJjb25zb2xlIiwibG9nIiwicGFnZVRvUmVuZGVyIiwibWFwIiwiZWxlIiwicXVlc3Rpb24iLCJ0bXAiLCJzYXZlTmV3RGF0YSIsInFpZCIsImRhdGEiLCJ3aGF0VG9TYXZlIiwic2F2ZUNoYW5nZXMiLCJoYW5kbGVRdWVzdGlvbktleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJ1bmRlZmluZWQiLCJ0ZXh0UXVlc3Rpb24iLCJpdGVyYXRvciIsInFuYSIsIlN0cmluZyIsImhhbmRsZVF1ZXN0aW9uQ2hhbmdlIiwiY29tcFN0eWxlcyIsIlF1ZXN0aW9uIiwiaW1nUXVlc3Rpb24iLCJoYW5kbGVBbnN3ZXJDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInRleHRBbnN3ZXIiLCJlIiwiQW5zd2VyIiwiYW5zd2VyIiwiaW1nQW5zd2VyIiwicV9hX1RleHRFbnRyeSIsInR5cGUiLCJwYWdlQm9keSIsInFuYVBhaXIiLCJNb2RhbENvbnRhaW5lckJHIiwiYWRkQ29tcFN0eWxlcyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaW5wdXRFbmFibGVyIiwidGVzdFR5cGUiLCJzdHlsZXMiLCJhY3RpdmVQYWdlIiwiVGVzdEJHQ29udGFpbmVyIiwidFR5cGVXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFPZDtBQUFBOztB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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUU1QixzRUFBVSxDQUFDYyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d6QyxLQUFLLENBQUNvRCxRQUFOLEtBQW1CLEVBQW5CLEdBQ0M7QUFBSyxhQUFTLEVBQUV6QixzRUFBVSxDQUFDNkIsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FERCxHQUtDZixRQUFRLEVBTlosQ0FGRixDQUhGLENBREY7QUFtQkQsQ0FwTEQ7O0dBQU0xQyxXOztLQUFBQSxXO0FBc0xTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdFByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbnRhaW5lckNTUyB9IGZyb20gXCJyZWFjdC1zZWxlY3Qvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyc1wiO1xuaW1wb3J0IHtcbiAgSUxhbmdTcGVjaWZpY0JvZHksXG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMgfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IElRbkFbXTtcbiAgdGVzdFR5cGU6IElUZXN0W1widHlwZVwiXTtcbiAgc2F2ZUNoYW5nZXM6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbltcInZhbHVlXCJdPihcInJ1XCIpO1xuXG4gIGNvbnNvbGUubG9nKHByb3BzLnBhZ2VUb1JlbmRlcik7XG4gIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKGVsZSkgPT4gY29uc29sZS5sb2coZWxlLnF1ZXN0aW9uKSk7XG5cbiAgbGV0IHRtcCA9IHByb3BzLnBhZ2VUb1JlbmRlcjtcblxuICBjb25zdCBzYXZlTmV3RGF0YSA9IChcbiAgICBxaWQ6IG51bWJlcixcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgd2hhdFRvU2F2ZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIlxuICApID0+IHtcbiAgICB0bXBbcWlkXVt3aGF0VG9TYXZlXSA9IGRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codG1wW3FpZF1bd2hhdFRvU2F2ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBzYXZlIG5ldyBkYXRhXCIsIHRtcCk7XG4gICAgcHJvcHMuc2F2ZUNoYW5nZXModG1wKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbktleVByZXNzID0gKFxuICAgIGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiID8gY29uc29sZS5sb2coXCJFZm50ZXJcIikgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gdGV4dFF1ZXN0aW9uKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtcIkVudGVyIHlvdXIgdGV4dFwifVxuICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXN0aW9uQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259XG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZVF1ZXN0aW9uS2V5UHJlc3N9XG4gICAgICA+XG4gICAgICAgIHsvKiB7cW5hLnF1ZXN0aW9ufSAqL31cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBpbWdRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICAgLy8gKSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufT5cbiAgICAgICAgPHNwYW4+77yLPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFuc3dlckNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2F2ZU5ld0RhdGEoZXZlbnQuY3VycmVudFRhcmdldC5pZCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSwgXCJhbnN3ZXJcIik7XG4gIH07XG5cbiAgZnVuY3Rpb24gdGV4dEFuc3dlcihpdGVyYXRvcjogbnVtYmVyLCBxbmE6IElRbkEpIHtcbiAgICAvLyBjb25zdCBbY3VyVmFsdWUsIHNldEN1clZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGN1clZhbHVlKTtcbiAgICAvLyB9LCBbY3VyVmFsdWVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtcIkVudGVyIHlvdXIgdGV4dFwifVxuICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgaGFuZGxlQW5zd2VyQ2hhbmdlKGUpO1xuICAgICAgICAgIC8vIHNldEN1clZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5BbnN3ZXJ9XG4gICAgICA+XG4gICAgICAgIHtxbmEuYW5zd2VyfVxuICAgICAgPC90ZXh0YXJlYT5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nQW5zd2VyKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAvLyAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBxX2FfVGV4dEVudHJ5KHR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCIsIGlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIGZyb20gYSBuZXcgYmVnaW5uaW5mXCIsIHR5cGUpO1xuICAgIGNvbnNvbGUubG9nKGAke2NvbXBTdHlsZXNbdHlwZV19YCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXNbdHlwZV19YH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwicWFUZXh0RW50cnlcIlxuICAgICAgICBpZD17U3RyaW5nKGlkKX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzYXZlTmV3RGF0YShpZCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCB0eXBlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtldmVudC5jdXJyZW50VGFyZ2V0LmlkfTpgLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICBzYXZlTmV3RGF0YShldmVudC5jdXJyZW50VGFyZ2V0LmlkLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCBcInF1ZXN0aW9uXCIpO1xuICB9O1xuXG4gIGNvbnN0IHBhZ2VCb2R5ID0gKCkgPT5cbiAgICBwcm9wcy5wYWdlVG9SZW5kZXIubWFwKChxbmE6IElRbkEsIGl0ZXJhdG9yOiBudW1iZXIpID0+IChcbiAgICAgIDxkaXYga2V5PXtpdGVyYXRvcn0gaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5xbmFQYWlyfT5cbiAgICAgICAgey8qIEZvciBxdWVzdGlvbiByZW5kZXJpbmcgKi99XG4gICAgICAgIHsvKiB7cHJvcHMudGVzdFR5cGUgPT09IFwiVFRcIiA/IHFfYV9UZXh0RW50cnkoXCJxdWVzdGlvblwiLCBpdGVyYXRvcikgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyBpbWdRdWVzdGlvbihpdGVyYXRvciwgcW5hKVxuICAgICAgICAgIDogbnVsbH0gKi99XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgICAgey8qIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiIHx8IHByb3BzLnRlc3RUeXBlID09PSBcIlBUXCJcbiAgICAgICAgICA/IHFfYV9UZXh0RW50cnkoXCJhbnN3ZXJcIiwgaXRlcmF0b3IpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiA/IGltZ0Fuc3dlcihpdGVyYXRvciwgcW5hKSA6IG51bGx9ICovfVxuICAgICAgICB7XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhzZXRTZWxlY3RlZExhbmd1YWdlLCBpbnB1dEVuYWJsZXIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRUeXBlV2FybmluZ30+XG4gICAgICAgICAgICAgIDxoMT5QbGVhc2UgY2hvb3NlIGEgdGVzdCB0eXBlPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwYWdlQm9keSgpXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Lyoge3BhZ2VCb2R5KCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})