webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isQOpen = _useState[0],\n      setisQOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isAOpen = _useState2[0],\n      setisAOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {};\n\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    console.log(\"from data saving\", qid);\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    console.log(\"hello from a new beginninf\", type);\n    console.log(\"id\", id);\n    return __jsx(\"textarea\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputForQandA // type=\"text\"\n      ,\n      name: \"qaTextEntry\",\n      id: String(id),\n      value: props.pageToRender[id][type],\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var textPreviewer = function textPreviewer(text) {\n    return text.slice(0, 90) + \"...\";\n  };\n\n  var handleModalOpening = function handleModalOpening(event) {\n    if (event.currentTarget.classList.contains(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question)) {\n      var tmpModalsArray = Array.from(document.getElementsByClassName(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG));\n      tmpModalsArray.forEach(function (modal) {\n        modal.classList.add(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HideModal);\n      });\n      console.log(tmpModalsArray);\n      setisQOpen(true);\n    }\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 173,\n          columnNumber: 7\n        }\n      },\n      /* For question rendering */\n      __jsx(\"div\", {\n        id: String(iterator),\n        className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isQOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 176,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setisQOpen), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 184,\n          columnNumber: 15\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 186,\n          columnNumber: 17\n        }\n      }, props.testType === \"TT\" ? q_a_TextEntry(\"question\", iterator) : null)))), __jsx(\"span\", {\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question,\n        onClick: handleModalOpening,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 195,\n          columnNumber: 9\n        }\n      }, textPreviewer(qna.question)), __jsx(\"div\", {\n        id: String(iterator),\n        className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isAOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 203,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 209,\n          columnNumber: 11\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setisAOpen), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 13\n        }\n      }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n        className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 213,\n          columnNumber: 15\n        }\n      }, props.testType === \"TT\" ? q_a_TextEntry(\"answer\", iterator) : null)))), __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.answer,\n        onClick: function onClick(e) {\n          return setisAOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 221,\n          columnNumber: 9\n        }\n      }, textPreviewer(qna.answer)));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 232,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 235,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 239,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Qx3nyvlWQFOKRZdBKNWWScfqKHA=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc1FPcGVuIiwic2V0aXNRT3BlbiIsImlzQU9wZW4iLCJzZXRpc0FPcGVuIiwic2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImNob29zZUxhbmd1YWdlIiwic2V0Q3VycmVudExhbmciLCJpbnB1dEVuYWJsZXIiLCJjb25zb2xlIiwibG9nIiwicGFnZVRvUmVuZGVyIiwibWFwIiwiZWxlIiwicXVlc3Rpb24iLCJ0bXAiLCJzYXZlTmV3RGF0YSIsInFpZCIsImRhdGEiLCJ3aGF0VG9TYXZlIiwic2F2ZUNoYW5nZXMiLCJoYW5kbGVRdWVzdGlvbktleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJ1bmRlZmluZWQiLCJ0ZXh0UXVlc3Rpb24iLCJpdGVyYXRvciIsInFuYSIsIlN0cmluZyIsImhhbmRsZVF1ZXN0aW9uQ2hhbmdlIiwiY29tcFN0eWxlcyIsIlF1ZXN0aW9uIiwiaW1nUXVlc3Rpb24iLCJoYW5kbGVBbnN3ZXJDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInRleHRBbnN3ZXIiLCJlIiwiQW5zd2VyIiwiYW5zd2VyIiwiaW1nQW5zd2VyIiwicV9hX1RleHRFbnRyeSIsInR5cGUiLCJ0ZXh0SW5wdXRGb3JRYW5kQSIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0Iiwic2xpY2UiLCJoYW5kbGVNb2RhbE9wZW5pbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRtcE1vZGFsc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJmb3JFYWNoIiwibW9kYWwiLCJhZGQiLCJIaWRlTW9kYWwiLCJwYWdlQm9keSIsInFuYVBhaXIiLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwiTmFtZUZvcm0iLCJ0ZXN0VHlwZSIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJUZXN0QkdDb250YWluZXIiLCJ0VHlwZVdhcm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQVFkO0FBQUE7O0FBQUEsa0JBQzBCQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEM7QUFBQSxNQUNHQyxPQURIO0FBQUEsTUFDWUMsVUFEWjs7QUFBQSxtQkFFMEJGLHNEQUFRLENBQUMsS0FBRCxDQUZsQztBQUFBLE1BRUdHLE9BRkg7QUFBQSxNQUVZQyxVQUZaOztBQUFBLG1CQUdvQ0osc0RBQVEsQ0FBdUIsSUFBdkIsQ0FINUM7QUFBQSxNQUdHSyxZQUhIO0FBQUEsTUFHaUJDLGVBSGpCOztBQUlKLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsY0FBRCxFQUFnRDtBQUMxRUYsbUJBQWUsQ0FBQ0UsY0FBRCxDQUFmO0FBQ0FULFNBQUssQ0FBQ1UsY0FBTixDQUFxQkQsY0FBckI7QUFDRCxHQUhEOztBQUlBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FBRSxDQUE3Qjs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ2MsWUFBbEI7QUFDQWQsT0FBSyxDQUFDYyxZQUFOLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxHQUFEO0FBQUEsV0FBU0osT0FBTyxDQUFDQyxHQUFSLENBQVlHLEdBQUcsQ0FBQ0MsUUFBaEIsQ0FBVDtBQUFBLEdBQXZCO0FBRUEsTUFBSUMsR0FBRyxHQUFHbEIsS0FBSyxDQUFDYyxZQUFoQjs7QUFFQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNsQkMsR0FE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QUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSUxhbmdTcGVjaWZpY0JvZHksXG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMgfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IElRbkFbXTtcbiAgc2V0Q3VycmVudExhbmc6IChsYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgW2lzUU9wZW4sIHNldGlzUU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNBT3Blbiwgc2V0aXNBT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbltcInZhbHVlXCJdPihcInJ1XCIpO1xuICBjb25zdCBzZXRTZWxlY3RlZExhbmd1YWdlID0gKGNob29zZUxhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKTogdm9pZCA9PiB7XG4gICAgc2V0U2VsZWN0ZWRMYW5nKGNob29zZUxhbmd1YWdlKTtcbiAgICBwcm9wcy5zZXRDdXJyZW50TGFuZyhjaG9vc2VMYW5ndWFnZSk7XG4gIH07XG4gIGNvbnN0IGlucHV0RW5hYmxlciA9ICgpID0+IHt9O1xuXG4gIGNvbnNvbGUubG9nKHByb3BzLnBhZ2VUb1JlbmRlcik7XG4gIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKGVsZSkgPT4gY29uc29sZS5sb2coZWxlLnF1ZXN0aW9uKSk7XG5cbiAgbGV0IHRtcCA9IHByb3BzLnBhZ2VUb1JlbmRlcjtcblxuICBjb25zdCBzYXZlTmV3RGF0YSA9IChcbiAgICBxaWQ6IG51bWJlcixcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgd2hhdFRvU2F2ZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZyb20gZGF0YSBzYXZpbmdcIiwgcWlkKTtcbiAgICB0bXBbcWlkXVt3aGF0VG9TYXZlXSA9IGRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codG1wW3FpZF1bd2hhdFRvU2F2ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBzYXZlIG5ldyBkYXRhXCIsIHRtcCk7XG4gICAgcHJvcHMuc2F2ZUNoYW5nZXModG1wKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbktleVByZXNzID0gKFxuICAgIGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiID8gY29uc29sZS5sb2coXCJFZm50ZXJcIikgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gdGV4dFF1ZXN0aW9uKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtcIkVudGVyIHlvdXIgdGV4dFwifVxuICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXN0aW9uQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259XG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZVF1ZXN0aW9uS2V5UHJlc3N9XG4gICAgICA+XG4gICAgICAgIHsvKiB7cW5hLnF1ZXN0aW9ufSAqL31cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBpbWdRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICAgLy8gKSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufT5cbiAgICAgICAgPHNwYW4+77yLPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFuc3dlckNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2F2ZU5ld0RhdGEoZXZlbnQuY3VycmVudFRhcmdldC5pZCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSwgXCJhbnN3ZXJcIik7XG4gIH07XG5cbiAgZnVuY3Rpb24gdGV4dEFuc3dlcihpdGVyYXRvcjogbnVtYmVyLCBxbmE6IElRbkEpIHtcbiAgICAvLyBjb25zdCBbY3VyVmFsdWUsIHNldEN1clZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGN1clZhbHVlKTtcbiAgICAvLyB9LCBbY3VyVmFsdWVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtcIkVudGVyIHlvdXIgdGV4dFwifVxuICAgICAgICBpZD17U3RyaW5nKGl0ZXJhdG9yKX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgaGFuZGxlQW5zd2VyQ2hhbmdlKGUpO1xuICAgICAgICAgIC8vIHNldEN1clZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5BbnN3ZXJ9XG4gICAgICA+XG4gICAgICAgIHtxbmEuYW5zd2VyfVxuICAgICAgPC90ZXh0YXJlYT5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nQW5zd2VyKFxuICAgIGl0ZXJhdG9yOiBudW1iZXIsXG4gICAgLy8gaGFuZGxlUXVlc3Rpb25DaGFuZ2U6IChcbiAgICAvLyAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBxX2FfVGV4dEVudHJ5KHR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCIsIGlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIGZyb20gYSBuZXcgYmVnaW5uaW5mXCIsIHR5cGUpO1xuICAgIGNvbnNvbGUubG9nKFwiaWRcIiwgaWQpO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRleHRJbnB1dEZvclFhbmRBfVxuICAgICAgICAvLyB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJxYVRleHRFbnRyeVwiXG4gICAgICAgIGlkPXtTdHJpbmcoaWQpfVxuICAgICAgICB2YWx1ZT17cHJvcHMucGFnZVRvUmVuZGVyW2lkXVt0eXBlXX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzYXZlTmV3RGF0YShpZCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCB0eXBlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtldmVudC5jdXJyZW50VGFyZ2V0LmlkfTpgLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICBzYXZlTmV3RGF0YShldmVudC5jdXJyZW50VGFyZ2V0LmlkLCBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCBcInF1ZXN0aW9uXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgOTApICsgXCIuLi5cIjtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb2RhbE9wZW5pbmcgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY29tcFN0eWxlcy5xdWVzdGlvbikpIHtcbiAgICAgIGxldCB0bXBNb2RhbHNBcnJheSA9IEFycmF5LmZyb20oXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHKVxuICAgICAgKTtcbiAgICAgIHRtcE1vZGFsc0FycmF5LmZvckVhY2goKG1vZGFsKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoY29tcFN0eWxlcy5IaWRlTW9kYWwpXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codG1wTW9kYWxzQXJyYXkpO1xuICAgICAgc2V0aXNRT3Blbih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PlxuICAgIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKHFuYTogSVFuQSwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZXJhdG9yfSBpZD17U3RyaW5nKGl0ZXJhdG9yKX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9PlxuICAgICAgICB7XG4gICAgICAgICAgLyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgICAgICFpc1FPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtjbG9zZUJ0bihzZXRpc1FPcGVuKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICAgIHtDcmVhdGVMYW5nU3dpdGNoZXJzKHNldFNlbGVjdGVkTGFuZ3VhZ2UsIGlucHV0RW5hYmxlcil9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlRUXCJcbiAgICAgICAgICAgICAgICAgICAgPyBxX2FfVGV4dEVudHJ5KFwicXVlc3Rpb25cIiwgaXRlcmF0b3IpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8c3BhblxuICAgICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5xdWVzdGlvbn1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbE9wZW5pbmd9XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dFByZXZpZXdlcihxbmEucXVlc3Rpb24pfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPXtTdHJpbmcoaXRlcmF0b3IpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfSAke1xuICAgICAgICAgICAgIWlzQU9wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIHtjbG9zZUJ0bihzZXRpc0FPcGVuKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMoc2V0U2VsZWN0ZWRMYW5ndWFnZSwgaW5wdXRFbmFibGVyKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiXG4gICAgICAgICAgICAgICAgICA/IHFfYV9UZXh0RW50cnkoXCJhbnN3ZXJcIiwgaXRlcmF0b3IpXG4gICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuYW5zd2VyfSBvbkNsaWNrPXsoZSkgPT4gc2V0aXNBT3Blbih0cnVlKX0+XG4gICAgICAgICAge3RleHRQcmV2aWV3ZXIocW5hLmFuc3dlcil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gIHByb3BzLnRlc3RUeXBlID09PSBcIlwiXG4gICAgPyBjb25zb2xlLmxvZyhcIm5vIHRlc3QgdHlwZVwiKVxuICAgIDogY29uc29sZS5sb2cocHJvcHMudGVzdFR5cGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0UHJldmlld30+XG4gICAgICA8aDM+UGFnZToge3Byb3BzLmFjdGl2ZVBhZ2UgKyAxfTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzLlRlc3RCR0NvbnRhaW5lcn1gfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5wYWdlQm9keX0+XG4gICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMudFR5cGVXYXJuaW5nfT5cbiAgICAgICAgICAgICAgPGgxPlBsZWFzZSBjaG9vc2UgYSB0ZXN0IHR5cGU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHBhZ2VCb2R5KClcbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB7cGFnZUJvZHkoKX0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})