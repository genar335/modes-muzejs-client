webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isQOpen = _useState[0],\n      setisQOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isAOpen = _useState2[0],\n      setisAOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {};\n\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    console.log(\"hello from a new beginninf\", type);\n    console.log(\"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]));\n    return __jsx(\"textarea\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputForQandA // type=\"text\"\n      ,\n      name: \"qaTextEntry\",\n      id: String(id),\n      value: props.pageToRender[id][type],\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 7\n        }\n      },\n      /* For question rendering */\n      __jsx(\"div\", {\n        className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isQOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setisQOpen), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 15\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 17\n        }\n      }, props.testType === \"TT\" ? q_a_TextEntry(\"question\", iterator) : null)))), __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question,\n        onClick: function onClick(e) {\n          return setisQOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 180,\n          columnNumber: 9\n        }\n      }, qna.question), __jsx(\"div\", {\n        className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isAOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 184,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 189,\n          columnNumber: 11\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setisAOpen), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 191,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 15\n        }\n      }, props.testType === \"TT\" ? q_a_TextEntry(\"answer\", iterator) : null)))), __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.answer,\n        onClick: function onClick(e) {\n          return setisAOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 201,\n          columnNumber: 9\n        }\n      }, qna.answer));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Qx3nyvlWQFOKRZdBKNWWScfqKHA=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc1FPcGVuIiwic2V0aXNRT3BlbiIsImlzQU9wZW4iLCJzZXRpc0FPcGVuIiwic2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImNob29zZUxhbmd1YWdlIiwic2V0Q3VycmVudExhbmciLCJpbnB1dEVuYWJsZXIiLCJjb25zb2xlIiwibG9nIiwicGFnZVRvUmVuZGVyIiwibWFwIiwiZWxlIiwicXVlc3Rpb24iLCJ0bXAiLCJzYXZlTmV3RGF0YSIsInFpZCIsImRhdGEiLCJ3aGF0VG9TYXZlIiwic2F2ZUNoYW5nZXMiLCJoYW5kbGVRdWVzdGlvbktleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJ1bmRlZmluZWQiLCJ0ZXh0UXVlc3Rpb24iLCJpdGVyYXRvciIsInFuYSIsIlN0cmluZyIsImhhbmRsZVF1ZXN0aW9uQ2hhbmdlIiwiY29tcFN0eWxlcyIsIlF1ZXN0aW9uIiwiaW1nUXVlc3Rpb24iLCJoYW5kbGVBbnN3ZXJDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInRleHRBbnN3ZXIiLCJlIiwiQW5zd2VyIiwiYW5zd2VyIiwiaW1nQW5zd2VyIiwicV9hX1RleHRFbnRyeSIsInR5cGUiLCJ0ZXh0SW5wdXRGb3JRYW5kQSIsInBhZ2VCb2R5IiwicW5hUGFpciIsImFkZENvbXBTdHlsZXMiLCJNb2RhbENvbnRhaW5lckJHIiwiSGlkZGVuIiwiTW9kYWxDb250YWluZXIiLCJjbG9zZUJ0biIsIk1vZGFsIiwiQ3JlYXRlTGFuZ1N3aXRjaGVycyIsIk5hbWVGb3JtIiwidGVzdFR5cGUiLCJzdHlsZXMiLCJhY3RpdmVQYWdlIiwiVGVzdEJHQ29udGFpbmVyIiwidFR5cGVXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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VztBQXVOU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb250YWluZXJDU1MgfSBmcm9tIFwicmVhY3Qtc2VsZWN0L3NyYy9jb21wb25lbnRzL2NvbnRhaW5lcnNcIjtcbmltcG9ydCB7XG4gIElMYW5nU3BlY2lmaWNCb2R5LFxuICBJUW5BLFxuICBJUW5BUGFpcnMsXG4gIElUZXN0LFxuICBUTGFuZ09wdGlvbixcbiAgVFRlc3RUeXBlcyxcbn0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5cbmNvbnN0IFRlc3RQcmV2aWV3ID0gKHByb3BzOiB7XG4gIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICAvLyBjdXJyZW50VGVzdFN0YXRlOiBJVGVzdDtcbiAgcGFnZVRvUmVuZGVyOiBJUW5BW107XG4gIHNldEN1cnJlbnRMYW5nOiAobGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgdGVzdFR5cGU6IElUZXN0W1widHlwZVwiXTtcbiAgc2F2ZUNoYW5nZXM6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IFtpc1FPcGVuLCBzZXRpc1FPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQU9wZW4sIHNldGlzQU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb25bXCJ2YWx1ZVwiXT4oXCJydVwiKTtcbiAgY29uc3Qgc2V0U2VsZWN0ZWRMYW5ndWFnZSA9IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSk6IHZvaWQgPT4ge1xuICAgIHNldFNlbGVjdGVkTGFuZyhjaG9vc2VMYW5ndWFnZSk7XG4gICAgcHJvcHMuc2V0Q3VycmVudExhbmcoY2hvb3NlTGFuZ3VhZ2UpO1xuICB9O1xuICBjb25zdCBpbnB1dEVuYWJsZXIgPSAoKSA9PiB7fTtcblxuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuICBwcm9wcy5wYWdlVG9SZW5kZXIubWFwKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZS5xdWVzdGlvbikpO1xuXG4gIGxldCB0bXAgPSBwcm9wcy5wYWdlVG9SZW5kZXI7XG5cbiAgY29uc3Qgc2F2ZU5ld0RhdGEgPSAoXG4gICAgcWlkOiBudW1iZXIsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIHdoYXRUb1NhdmU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCJcbiAgKSA9PiB7XG4gICAgdG1wW3FpZF1bd2hhdFRvU2F2ZV0gPSBkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKHRtcFtxaWRdW3doYXRUb1NhdmVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gc2F2ZSBuZXcgZGF0YVwiLCB0bXApO1xuICAgIHByb3BzLnNhdmVDaGFuZ2VzKHRtcCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyA9IChcbiAgICBldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiA/IGNvbnNvbGUubG9nKFwiRWZudGVyXCIpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVzdGlvbkNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVRdWVzdGlvbktleVByZXNzfVxuICAgICAgPlxuICAgICAgICB7Lyoge3FuYS5xdWVzdGlvbn0gKi99XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nUXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwiYW5zd2VyXCIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRBbnN3ZXIoaXRlcmF0b3I6IG51bWJlciwgcW5hOiBJUW5BKSB7XG4gICAgLy8gY29uc3QgW2N1clZhbHVlLCBzZXRDdXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjdXJWYWx1ZSk7XG4gICAgLy8gfSwgW2N1clZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUFuc3dlckNoYW5nZShlKTtcbiAgICAgICAgICAvLyBzZXRDdXJWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgICAgPlxuICAgICAgICB7cW5hLmFuc3dlcn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0Fuc3dlcihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgICAvLyApID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8c3Bhbj7vvIs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcV9hX1RleHRFbnRyeSh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGEgbmV3IGJlZ2lubmluZlwiLCB0eXBlKTtcbiAgICBjb25zb2xlLmxvZyhgJHtjb21wU3R5bGVzW3R5cGVdfWApO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRleHRJbnB1dEZvclFhbmRBfVxuICAgICAgICAvLyB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJxYVRleHRFbnRyeVwiXG4gICAgICAgIGlkPXtTdHJpbmcoaWQpfVxuICAgICAgICB2YWx1ZT17cHJvcHMucGFnZVRvUmVuZGVyW2lkXVt0eXBlXX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzYXZlTmV3RGF0YShpZCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCB0eXBlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtldmVudC5jdXJyZW50VGFyZ2V0LmlkfTpgLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICBzYXZlTmV3RGF0YShldmVudC5jdXJyZW50VGFyZ2V0LmlkLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCBcInF1ZXN0aW9uXCIpO1xuICB9O1xuXG4gIGNvbnN0IHBhZ2VCb2R5ID0gKCkgPT5cbiAgICBwcm9wcy5wYWdlVG9SZW5kZXIubWFwKChxbmE6IElRbkEsIGl0ZXJhdG9yOiBudW1iZXIpID0+IChcbiAgICAgIDxkaXYga2V5PXtpdGVyYXRvcn0gaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5xbmFQYWlyfT5cbiAgICAgICAgey8qIEZvciBhbnN3ZXIgcmVuZGVyaW5nICovfVxuICAgICAgICB7Lyoge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCIgfHwgcHJvcHMudGVzdFR5cGUgPT09IFwiUFRcIlxuICAgICAgICAgID8gcV9hX1RleHRFbnRyeShcImFuc3dlclwiLCBpdGVyYXRvcilcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJQUFwiID8gaW1nQW5zd2VyKGl0ZXJhdG9yLCBxbmEpIDogbnVsbH0gKi99XG4gICAgICAgIHtcbiAgICAgICAgICAvKiBGb3IgcXVlc3Rpb24gcmVuZGVyaW5nICovXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgICAgICFpc1FPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtjbG9zZUJ0bihzZXRpc1FPcGVuKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICAgIHtDcmVhdGVMYW5nU3dpdGNoZXJzKHNldFNlbGVjdGVkTGFuZ3VhZ2UsIGlucHV0RW5hYmxlcil9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCJcbiAgICAgICAgICAgICAgICAgICAgPyBxX2FfVGV4dEVudHJ5KFwicXVlc3Rpb25cIiwgaXRlcmF0b3IpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucXVlc3Rpb259IG9uQ2xpY2s9eyhlKSA9PiBzZXRpc1FPcGVuKHRydWUpfT5cbiAgICAgICAgICB7cW5hLnF1ZXN0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfSAke1xuICAgICAgICAgICAgIWlzQU9wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIHtjbG9zZUJ0bihzZXRpc0FPcGVuKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMoc2V0U2VsZWN0ZWRMYW5ndWFnZSwgaW5wdXRFbmFibGVyKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiXG4gICAgICAgICAgICAgICAgICA/IHFfYV9UZXh0RW50cnkoXCJhbnN3ZXJcIiwgaXRlcmF0b3IpXG4gICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuYW5zd2VyfSBvbkNsaWNrPXsoZSkgPT4gc2V0aXNBT3Blbih0cnVlKX0+XG4gICAgICAgICAge3FuYS5hbnN3ZXJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gIHByb3BzLnRlc3RUeXBlID09PSBcIlwiXG4gICAgPyBjb25zb2xlLmxvZyhcIm5vIHRlc3QgdHlwZVwiKVxuICAgIDogY29uc29sZS5sb2cocHJvcHMudGVzdFR5cGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0UHJldmlld30+XG4gICAgICA8aDM+UGFnZToge3Byb3BzLmFjdGl2ZVBhZ2UgKyAxfTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzLlRlc3RCR0NvbnRhaW5lcn1gfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5wYWdlQm9keX0+XG4gICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMudFR5cGVXYXJuaW5nfT5cbiAgICAgICAgICAgICAgPGgxPlBsZWFzZSBjaG9vc2UgYSB0ZXN0IHR5cGU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHBhZ2VCb2R5KClcbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB7cGFnZUJvZHkoKX0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})