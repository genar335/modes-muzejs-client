webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState2[0],\n      setSelectedLang = _useState2[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {};\n\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    console.log(\"hello from a new beginninf\", type);\n    console.log(\"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]));\n    return __jsx(\"input\", {\n      className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]),\n      type: \"text\",\n      name: \"qaTextEntry\",\n      id: String(id),\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 7\n        }\n      },\n      /* For question rendering */\n      question(isOpen, setIsOpen, setSelectedLanguage, inputEnabler, props, q_a_TextEntry, iterator), \" \", __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question,\n        onClick: function onClick(e) {\n          return setIsOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 9\n        }\n      }, qna.question));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Uh0F0rW/deuF+Uo2Os0S4H/LVf0=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nfunction question(QorA, isOpen, setIsOpen, setSelectedLanguage, inputEnabler, props, q_a_TextEntry, iterator) {\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 7\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 11\n    }\n  }, props.testType === \"TT\" ? q_a_TextEntry(\"question\", iterator) : null))));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RlZExhbmciLCJzZXRTZWxlY3RlZExhbmciLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiY2hvb3NlTGFuZ3VhZ2UiLCJzZXRDdXJyZW50TGFuZyIsImlucHV0RW5hYmxlciIsImNvbnNvbGUiLCJsb2ciLCJwYWdlVG9SZW5kZXIiLCJtYXAiLCJlbGUiLCJxdWVzdGlvbiIsInRtcCIsInNhdmVOZXdEYXRhIiwicWlkIiwiZGF0YSIsIndoYXRUb1NhdmUiLCJzYXZlQ2hhbmdlcyIsImhhbmRsZVF1ZXN0aW9uS2V5UHJlc3MiLCJldmVudCIsImtleSIsInVuZGVmaW5lZCIsInRleHRRdWVzdGlvbiIsIml0ZXJhdG9yIiwicW5hIiwiU3RyaW5nIiwiaGFuZGxlUXVlc3Rpb25DaGFuZ2UiLCJjb21wU3R5bGVzIiwiUXVlc3Rpb24iLCJpbWdRdWVzdGlvbiIsImhhbmRsZUFuc3dlckNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInZhbHVlIiwidGV4dEFuc3dlciIsImUiLCJBbnN3ZXIiLCJhbnN3ZXIiLCJpbWdBbnN3ZXIiLCJxX2FfVGV4dEVudHJ5IiwidHlwZSIsInBhZ2VCb2R5IiwicW5hUGFpciIsInRlc3RUeXBlIiwic3R5bGVzIiwiYWN0aXZlUGFnZSIsIlRlc3RCR0NvbnRhaW5lciIsInRUeXBlV2FybmluZyIsIlFvckEiLCJhZGRDb21wU3R5bGVzIiwiTW9kYWxDb250YWluZXJCRyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJOYW1lRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0ssS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxzRUFBbUIsQ0FBQ3JELG1CQUFELEVBQXNCRyxZQUF0QixDQUR0QixFQUVFO0FBQUssYUFBUyxFQUFFNEMsb0VBQWEsQ0FBQ08sUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHNUQsS0FBSyxDQUFDK0MsUUFBTixLQUFtQixJQUFuQixHQUNHSixhQUFhLENBQUMsVUFBRCxFQUFhaEIsUUFBYixDQURoQixHQUVHLElBSE4sQ0FGRixDQUZGLENBTEYsQ0FERjtBQW1CRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdFByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbnRhaW5lckNTUyB9IGZyb20gXCJyZWFjdC1zZWxlY3Qvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyc1wiO1xuaW1wb3J0IHtcbiAgSUxhbmdTcGVjaWZpY0JvZHksXG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMgfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IElRbkFbXTtcbiAgc2V0Q3VycmVudExhbmc6IChsYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uW1widmFsdWVcIl0+KFwicnVcIik7XG4gIGNvbnN0IHNldFNlbGVjdGVkTGFuZ3VhZ2UgPSAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pOiB2b2lkID0+IHtcbiAgICBzZXRTZWxlY3RlZExhbmcoY2hvb3NlTGFuZ3VhZ2UpO1xuICAgIHByb3BzLnNldEN1cnJlbnRMYW5nKGNob29zZUxhbmd1YWdlKTtcbiAgfTtcbiAgY29uc3QgaW5wdXRFbmFibGVyID0gKCkgPT4ge307XG5cbiAgY29uc29sZS5sb2cocHJvcHMucGFnZVRvUmVuZGVyKTtcbiAgcHJvcHMucGFnZVRvUmVuZGVyLm1hcCgoZWxlKSA9PiBjb25zb2xlLmxvZyhlbGUucXVlc3Rpb24pKTtcblxuICBsZXQgdG1wID0gcHJvcHMucGFnZVRvUmVuZGVyO1xuXG4gIGNvbnN0IHNhdmVOZXdEYXRhID0gKFxuICAgIHFpZDogbnVtYmVyLFxuICAgIGRhdGE6IHN0cmluZyxcbiAgICB3aGF0VG9TYXZlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiXG4gICkgPT4ge1xuICAgIHRtcFtxaWRdW3doYXRUb1NhdmVdID0gZGF0YTtcbiAgICAvLyBjb25zb2xlLmxvZyh0bXBbcWlkXVt3aGF0VG9TYXZlXSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmcm9tIHNhdmUgbmV3IGRhdGFcIiwgdG1wKTtcbiAgICBwcm9wcy5zYXZlQ2hhbmdlcyh0bXApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uS2V5UHJlc3MgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgPyBjb25zb2xlLmxvZyhcIkVmbnRlclwiKSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBmdW5jdGlvbiB0ZXh0UXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBkZWZhdWx0VmFsdWU9e1wiRW50ZXIgeW91ciB0ZXh0XCJ9XG4gICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVlc3Rpb25DaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn1cbiAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlUXVlc3Rpb25LZXlQcmVzc31cbiAgICAgID5cbiAgICAgICAgey8qIHtxbmEucXVlc3Rpb259ICovfVxuICAgICAgPC90ZXh0YXJlYT5cbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGltZ1F1ZXN0aW9uKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAvLyBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgICAvLyApID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8c3Bhbj7vvIs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBzYXZlTmV3RGF0YShldmVudC5jdXJyZW50VGFyZ2V0LmlkLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCBcImFuc3dlclwiKTtcbiAgfTtcblxuICBmdW5jdGlvbiB0ZXh0QW5zd2VyKGl0ZXJhdG9yOiBudW1iZXIsIHFuYTogSVFuQSkge1xuICAgIC8vIGNvbnN0IFtjdXJWYWx1ZSwgc2V0Q3VyVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coY3VyVmFsdWUpO1xuICAgIC8vIH0sIFtjdXJWYWx1ZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e1wiRW50ZXIgeW91ciB0ZXh0XCJ9XG4gICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBoYW5kbGVBbnN3ZXJDaGFuZ2UoZSk7XG4gICAgICAgICAgLy8gc2V0Q3VyVmFsdWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkFuc3dlcn1cbiAgICAgID5cbiAgICAgICAge3FuYS5hbnN3ZXJ9XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdBbnN3ZXIoXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICAgLy8gKSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufT5cbiAgICAgICAgPHNwYW4+77yLPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHFfYV9UZXh0RW50cnkodHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIiwgaWQ6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gZnJvbSBhIG5ldyBiZWdpbm5pbmZcIiwgdHlwZSk7XG4gICAgY29uc29sZS5sb2coYCR7Y29tcFN0eWxlc1t0eXBlXX1gKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlc1t0eXBlXX1gfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJxYVRleHRFbnRyeVwiXG4gICAgICAgIGlkPXtTdHJpbmcoaWQpfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNhdmVOZXdEYXRhKGlkLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUsIHR5cGUpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25DaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke2V2ZW50LmN1cnJlbnRUYXJnZXQuaWR9OmAsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwicXVlc3Rpb25cIik7XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICB7LyogRm9yIGFuc3dlciByZW5kZXJpbmcgKi99XG4gICAgICAgIHsvKiB7cHJvcHMudGVzdFR5cGUgPT09IFwiVFRcIiB8fCBwcm9wcy50ZXN0VHlwZSA9PT0gXCJQVFwiXG4gICAgICAgICAgPyBxX2FfVGV4dEVudHJ5KFwiYW5zd2VyXCIsIGl0ZXJhdG9yKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlBQXCIgPyBpbWdBbnN3ZXIoaXRlcmF0b3IsIHFuYSkgOiBudWxsfSAqL31cbiAgICAgICAge1xuICAgICAgICAgIC8qIEZvciBxdWVzdGlvbiByZW5kZXJpbmcgKi9cbiAgICAgICAgICBxdWVzdGlvbihcbiAgICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICAgIHNldElzT3BlbixcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2UsXG4gICAgICAgICAgICBpbnB1dEVuYWJsZXIsXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHFfYV9UZXh0RW50cnksXG4gICAgICAgICAgICBpdGVyYXRvclxuICAgICAgICAgIClcbiAgICAgICAgfXtcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnF1ZXN0aW9ufSBvbkNsaWNrPXsoZSkgPT4gc2V0SXNPcGVuKHRydWUpfT5cbiAgICAgICAgICB7cW5hLnF1ZXN0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gIHByb3BzLnRlc3RUeXBlID09PSBcIlwiXG4gICAgPyBjb25zb2xlLmxvZyhcIm5vIHRlc3QgdHlwZVwiKVxuICAgIDogY29uc29sZS5sb2cocHJvcHMudGVzdFR5cGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0UHJldmlld30+XG4gICAgICA8aDM+UGFnZToge3Byb3BzLmFjdGl2ZVBhZ2UgKyAxfTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzLlRlc3RCR0NvbnRhaW5lcn1gfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5wYWdlQm9keX0+XG4gICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMudFR5cGVXYXJuaW5nfT5cbiAgICAgICAgICAgICAgPGgxPlBsZWFzZSBjaG9vc2UgYSB0ZXN0IHR5cGU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHBhZ2VCb2R5KClcbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB7cGFnZUJvZHkoKX0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbmZ1bmN0aW9uIHF1ZXN0aW9uKFxuICBRb3JBLFxuICBpc09wZW46IGJvb2xlYW4sXG4gIHNldElzT3BlbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxuICBzZXRTZWxlY3RlZExhbmd1YWdlOiAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQsXG4gIGlucHV0RW5hYmxlcjogKCkgPT4gdm9pZCxcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gICAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICAgIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICAgIHBhZ2VUb1JlbmRlcjogSVFuQVtdO1xuICAgIHNldEN1cnJlbnRMYW5nOiAobGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgICB0ZXN0VHlwZTogYW55O1xuICAgIHNhdmVDaGFuZ2VzOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICB9LFxuICBxX2FfVGV4dEVudHJ5OiAodHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIiwgaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQsXG4gIGl0ZXJhdG9yOiBudW1iZXJcbik6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhzZXRTZWxlY3RlZExhbmd1YWdlLCBpbnB1dEVuYWJsZXIpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiXG4gICAgICAgICAgICAgID8gcV9hX1RleHRFbnRyeShcInF1ZXN0aW9uXCIsIGl0ZXJhdG9yKVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})