webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isQOpen = _useState[0],\n      setisQOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState2[0],\n      setSelectedLang = _useState2[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {};\n\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    console.log(\"hello from a new beginninf\", type);\n    console.log(\"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]));\n    return __jsx(\"input\", {\n      className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]),\n      type: \"text\",\n      name: \"qaTextEntry\",\n      id: String(id),\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 7\n        }\n      },\n      /* For question rendering */\n      __jsx(\"div\", {\n        className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isQOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setisQOpen), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 15\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 17\n        }\n      }, props.testType === \"TT\" ? q_a_TextEntry(\"question\", iterator) : null)))), \" \", __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question,\n        onClick: function onClick(e) {\n          return setisQOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 178,\n          columnNumber: 9\n        }\n      }, qna.question), __jsx(\"div\", {\n        className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isQOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 187,\n          columnNumber: 11\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setisQOpen), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 189,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 191,\n          columnNumber: 15\n        }\n      }, props.testType === \"TT\" ? q_a_TextEntry(\"answer\", iterator) : null)))), __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.answer,\n        onClick: function onClick(e) {\n          return setisQOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 199,\n          columnNumber: 9\n        }\n      }, qna.answer));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"3wa8LMQZE1mVt7u85kohvZXZwKs=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc1FPcGVuIiwic2V0aXNRT3BlbiIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJjaG9vc2VMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5nIiwiaW5wdXRFbmFibGVyIiwiY29uc29sZSIsImxvZyIsInBhZ2VUb1JlbmRlciIsIm1hcCIsImVsZSIsInF1ZXN0aW9uIiwidG1wIiwic2F2ZU5ld0RhdGEiLCJxaWQiLCJkYXRhIiwid2hhdFRvU2F2ZSIsInNhdmVDaGFuZ2VzIiwiaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwidW5kZWZpbmVkIiwidGV4dFF1ZXN0aW9uIiwiaXRlcmF0b3IiLCJxbmEiLCJTdHJpbmciLCJoYW5kbGVRdWVzdGlvbkNoYW5nZSIsImNvbXBTdHlsZXMiLCJRdWVzdGlvbiIsImltZ1F1ZXN0aW9uIiwiaGFuZGxlQW5zd2VyQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImlkIiwidmFsdWUiLCJ0ZXh0QW5zd2VyIiwiZSIsIkFuc3dlciIsImFuc3dlciIsImltZ0Fuc3dlciIsInFfYV9UZXh0RW50cnkiLCJ0eXBlIiwicGFnZUJvZHkiLCJxbmFQYWlyIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwiTmFtZUZvcm0iLCJ0ZXN0VHlwZSIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJUZXN0QkdDb250YWluZXIiLCJ0VHlwZVdhcm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFB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cUI7QUFBQSxLQUF2QixDQURlO0FBQUEsR0FBakI7O0FBdURBekMsT0FBSyxDQUFDdUQsUUFBTixLQUFtQixFQUFuQixHQUNJN0MsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQURKLEdBRUlELE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFLLENBQUN1RCxRQUFsQixDQUZKO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQ3pELFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVdDLEtBQUssQ0FBQ3lELFVBQU4sR0FBbUIsQ0FBOUIsQ0FERixFQUdFO0FBQUssYUFBUyxZQUFLMUIsc0VBQVUsQ0FBQzJCLGVBQWhCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUUzQixzRUFBVSxDQUFDYyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c3QyxLQUFLLENBQUN1RCxRQUFOLEtBQW1CLEVBQW5CLEdBQ0M7QUFBSyxhQUFTLEVBQUV4QixzRUFBVSxDQUFDNEIsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FERCxHQUtDZCxRQUFRLEVBTlosQ0FGRixDQUhGLENBREY7QUFtQkQsQ0FuTkQ7O0dBQU05QyxXOztLQUFBQSxXO0FBcU5TQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdFByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbnRhaW5lckNTUyB9IGZyb20gXCJyZWFjdC1zZWxlY3Qvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyc1wiO1xuaW1wb3J0IHtcbiAgSUxhbmdTcGVjaWZpY0JvZHksXG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMgfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IElRbkFbXTtcbiAgc2V0Q3VycmVudExhbmc6IChsYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgW2lzUU9wZW4sIHNldGlzUU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb25bXCJ2YWx1ZVwiXT4oXCJydVwiKTtcbiAgY29uc3Qgc2V0U2VsZWN0ZWRMYW5ndWFnZSA9IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSk6IHZvaWQgPT4ge1xuICAgIHNldFNlbGVjdGVkTGFuZyhjaG9vc2VMYW5ndWFnZSk7XG4gICAgcHJvcHMuc2V0Q3VycmVudExhbmcoY2hvb3NlTGFuZ3VhZ2UpO1xuICB9O1xuICBjb25zdCBpbnB1dEVuYWJsZXIgPSAoKSA9PiB7fTtcblxuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuICBwcm9wcy5wYWdlVG9SZW5kZXIubWFwKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZS5xdWVzdGlvbikpO1xuXG4gIGxldCB0bXAgPSBwcm9wcy5wYWdlVG9SZW5kZXI7XG5cbiAgY29uc3Qgc2F2ZU5ld0RhdGEgPSAoXG4gICAgcWlkOiBudW1iZXIsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIHdoYXRUb1NhdmU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCJcbiAgKSA9PiB7XG4gICAgdG1wW3FpZF1bd2hhdFRvU2F2ZV0gPSBkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKHRtcFtxaWRdW3doYXRUb1NhdmVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gc2F2ZSBuZXcgZGF0YVwiLCB0bXApO1xuICAgIHByb3BzLnNhdmVDaGFuZ2VzKHRtcCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyA9IChcbiAgICBldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiA/IGNvbnNvbGUubG9nKFwiRWZudGVyXCIpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVzdGlvbkNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVRdWVzdGlvbktleVByZXNzfVxuICAgICAgPlxuICAgICAgICB7Lyoge3FuYS5xdWVzdGlvbn0gKi99XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nUXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwiYW5zd2VyXCIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRBbnN3ZXIoaXRlcmF0b3I6IG51bWJlciwgcW5hOiBJUW5BKSB7XG4gICAgLy8gY29uc3QgW2N1clZhbHVlLCBzZXRDdXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjdXJWYWx1ZSk7XG4gICAgLy8gfSwgW2N1clZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUFuc3dlckNoYW5nZShlKTtcbiAgICAgICAgICAvLyBzZXRDdXJWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgICAgPlxuICAgICAgICB7cW5hLmFuc3dlcn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0Fuc3dlcihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgICAvLyApID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8c3Bhbj7vvIs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcV9hX1RleHRFbnRyeSh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGEgbmV3IGJlZ2lubmluZlwiLCB0eXBlKTtcbiAgICBjb25zb2xlLmxvZyhgJHtjb21wU3R5bGVzW3R5cGVdfWApO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzW3R5cGVdfWB9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInFhVGV4dEVudHJ5XCJcbiAgICAgICAgaWQ9e1N0cmluZyhpZCl9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2F2ZU5ld0RhdGEoaWQsIGUuY3VycmVudFRhcmdldC52YWx1ZSwgdHlwZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbkNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7ZXZlbnQuY3VycmVudFRhcmdldC5pZH06YCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgc2F2ZU5ld0RhdGEoZXZlbnQuY3VycmVudFRhcmdldC5pZCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSwgXCJxdWVzdGlvblwiKTtcbiAgfTtcblxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+XG4gICAgcHJvcHMucGFnZVRvUmVuZGVyLm1hcCgocW5hOiBJUW5BLCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICA8ZGl2IGtleT17aXRlcmF0b3J9IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn0+XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgICAgey8qIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiIHx8IHByb3BzLnRlc3RUeXBlID09PSBcIlBUXCJcbiAgICAgICAgICA/IHFfYV9UZXh0RW50cnkoXCJhbnN3ZXJcIiwgaXRlcmF0b3IpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiA/IGltZ0Fuc3dlcihpdGVyYXRvciwgcW5hKSA6IG51bGx9ICovfVxuICAgICAgICB7XG4gICAgICAgICAgLyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfSAke1xuICAgICAgICAgICAgICAhaXNRT3BlbiA/IGFkZENvbXBTdHlsZXMuSGlkZGVuIDogbnVsbFxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICB7Y2xvc2VCdG4oc2V0aXNRT3Blbil9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhzZXRTZWxlY3RlZExhbmd1YWdlLCBpbnB1dEVuYWJsZXIpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcV9hX1RleHRFbnRyeShcInF1ZXN0aW9uXCIsIGl0ZXJhdG9yKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH17XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5xdWVzdGlvbn0gb25DbGljaz17KGUpID0+IHNldGlzUU9wZW4odHJ1ZSl9PlxuICAgICAgICAgIHtxbmEucXVlc3Rpb259XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgey8qIEZvciBhbnN3ZXIgcmVuZGVyaW5nICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgICAhaXNRT3BlbiA/IGFkZENvbXBTdHlsZXMuSGlkZGVuIDogbnVsbFxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAge2Nsb3NlQnRuKHNldGlzUU9wZW4pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhzZXRTZWxlY3RlZExhbmd1YWdlLCBpbnB1dEVuYWJsZXIpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCJcbiAgICAgICAgICAgICAgICAgID8gcV9hX1RleHRFbnRyeShcImFuc3dlclwiLCBpdGVyYXRvcilcbiAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5hbnN3ZXJ9IG9uQ2xpY2s9eyhlKSA9PiBzZXRpc1FPcGVuKHRydWUpfT5cbiAgICAgICAgICB7cW5hLmFuc3dlcn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgcHJvcHMudGVzdFR5cGUgPT09IFwiXCJcbiAgICA/IGNvbnNvbGUubG9nKFwibm8gdGVzdCB0eXBlXCIpXG4gICAgOiBjb25zb2xlLmxvZyhwcm9wcy50ZXN0VHlwZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RQcmV2aWV3fT5cbiAgICAgIDxoMz5QYWdlOiB7cHJvcHMuYWN0aXZlUGFnZSArIDF9PC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXMuVGVzdEJHQ29udGFpbmVyfWB9PlxuICAgICAgICA8Rk1Mb2dvIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnBhZ2VCb2R5fT5cbiAgICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy50VHlwZVdhcm5pbmd9PlxuICAgICAgICAgICAgICA8aDE+UGxlYXNlIGNob29zZSBhIHRlc3QgdHlwZTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgcGFnZUJvZHkoKVxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIHtwYWdlQm9keSgpfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RQcmV2aWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})