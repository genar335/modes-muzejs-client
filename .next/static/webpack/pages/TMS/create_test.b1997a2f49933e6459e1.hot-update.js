webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState2[0],\n      setSelectedLang = _useState2[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {};\n\n  console.log(props.pageToRender);\n  props.pageToRender.map(function (ele) {\n    return console.log(ele.question);\n  });\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function textQuestion(iterator, // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,\n  qna) {\n    return __jsx(\"textarea\", {\n      defaultValue: \"Enter your text\",\n      id: String(iterator),\n      onChange: handleQuestionChange,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      onKeyPress: handleQuestionKeyPress,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    });\n  }\n\n  function imgQuestion(iterator, // handleQuestionChange: (\n  // event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  var handleAnswerChange = function handleAnswerChange(event) {\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"answer\");\n  };\n\n  function textAnswer(iterator, qna) {\n    // const [curValue, setCurValue] = useState(\"\");\n    // useEffect(() => {\n    //   console.log(curValue);\n    // }, [curValue]);\n    return __jsx(\"textarea\", {\n      // defaultValue={\"Enter your text\"}\n      id: String(iterator),\n      onChange: function onChange(e) {\n        handleAnswerChange(e); // setCurValue(e.currentTarget.value);\n      },\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Answer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }, qna.answer);\n  }\n\n  function imgAnswer(iterator, // handleQuestionChange: (\n  //   event: React.ChangeEvent<HTMLTextAreaElement>\n  // ) => void,\n  qna) {\n    return __jsx(\"div\", {\n      id: String(iterator),\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Question,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }, \"\\uFF0B\"));\n  }\n\n  function q_a_TextEntry(type, id) {\n    console.log(\"hello from a new beginninf\", type);\n    console.log(\"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]));\n    return __jsx(\"input\", {\n      className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[type]),\n      type: \"text\",\n      name: \"qaTextEntry\",\n      id: String(id),\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    console.log(\"\".concat(event.currentTarget.id, \":\"), event.currentTarget.value);\n    saveNewData(event.currentTarget.id, event.currentTarget.value, \"question\");\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 7\n        }\n      },\n      /* For question rendering */\n      QARenderer(\"question\", isOpen, setIsOpen, setSelectedLanguage, inputEnabler, props, q_a_TextEntry, iterator), \" \", __jsx(\"span\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question,\n        onClick: function onClick(e) {\n          return setIsOpen(true);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 9\n        }\n      }, qna.question), QARenderer(\"answer\", isOpen, setIsOpen, setSelectedLanguage, inputEnabler, props, q_a_TextEntry, iterator));\n    });\n  };\n\n  props.testType === \"\" ? console.log(\"no test type\") : console.log(props.testType);\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 193,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Uh0F0rW/deuF+Uo2Os0S4H/LVf0=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nfunction QARenderer(QorA, isOpen, setIsOpen, setSelectedLanguage, inputEnabler, props, q_a_TextEntry, iterator) {\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 238,\n      columnNumber: 7\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(setSelectedLanguage, inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 242,\n      columnNumber: 11\n    }\n  }, props.testType === \"TT\" ? q_a_TextEntry(QorA, iterator) : null))));\n}\n\n_c2 = QARenderer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestPreview\");\n$RefreshReg$(_c2, \"QARenderer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RlZExhbmciLCJzZXRTZWxlY3RlZExhbmciLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiY2hvb3NlTGFuZ3VhZ2UiLCJzZXRDdXJyZW50TGFuZyIsImlucHV0RW5hYmxlciIsImNvbnNvbGUiLCJsb2ciLCJwYWdlVG9SZW5kZXIiLCJtYXAiLCJlbGUiLCJxdWVzdGlvbiIsInRtcCIsInNhdmVOZXdEYXRhIiwicWlkIiwiZGF0YSIsIndoYXRUb1NhdmUiLCJzYXZlQ2hhbmdlcyIsImhhbmRsZVF1ZXN0aW9uS2V5UHJlc3MiLCJldmVudCIsImtleSIsInVuZGVmaW5lZCIsInRleHRRdWVzdGlvbiIsIml0ZXJhdG9yIiwicW5hIiwiU3RyaW5nIiwiaGFuZGxlUXVlc3Rpb25DaGFuZ2UiLCJjb21wU3R5bGVzIiwiUXVlc3Rpb24iLCJpbWdRdWVzdGlvbiIsImhhbmRsZUFuc3dlckNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInZhbHVlIiwidGV4dEFuc3dlciIsImUiLCJBbnN3ZXIiLCJhbnN3ZXIiLCJpbWdBbnN3ZXIiLCJxX2FfVGV4dEVudHJ5IiwidHlwZSIsInBhZ2VCb2R5IiwicW5hUGFpciIsIlFBUmVuZGVyZXIiLCJ0ZXN0VHlwZSIsInN0eWxlcyIsImFjdGl2ZVBhZ2UiLCJUZXN0QkdDb250YWluZXIiLCJ0VHlwZVdhcm5pbmciLCJRb3JBIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwiTmFtZUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtB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S0FLRTtBQUFLLGFBQVMsRUFBRUYsb0VBQWEsQ0FBQ0csY0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywyREFBUSxDQUFDdkQsU0FBRCxDQURYLEVBRUU7QUFBSyxhQUFTLEVBQUVtRCxvRUFBYSxDQUFDSyxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLHNFQUFtQixDQUFDdEQsbUJBQUQsRUFBc0JHLFlBQXRCLENBRHRCLEVBRUU7QUFBSyxhQUFTLEVBQUU2QyxvRUFBYSxDQUFDTyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c3RCxLQUFLLENBQUNnRCxRQUFOLEtBQW1CLElBQW5CLEdBQTBCTCxhQUFhLENBQUNVLElBQUQsRUFBTzFCLFFBQVAsQ0FBdkMsR0FBMEQsSUFEN0QsQ0FGRixDQUZGLENBTEYsQ0FERjtBQWlCRDs7TUFuQ1FvQixVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29udGFpbmVyQ1NTIH0gZnJvbSBcInJlYWN0LXNlbGVjdC9zcmMvY29tcG9uZW50cy9jb250YWluZXJzXCI7XG5pbXBvcnQge1xuICBJTGFuZ1NwZWNpZmljQm9keSxcbiAgSVFuQSxcbiAgSVFuQVBhaXJzLFxuICBJVGVzdCxcbiAgVExhbmdPcHRpb24sXG4gIFRUZXN0VHlwZXMsXG59IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYWRkQ29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBjbG9zZUJ0biwgQ3JlYXRlTGFuZ1N3aXRjaGVycyB9IGZyb20gXCIuL1Rlc3ROYW1lclwiO1xuXG5jb25zdCBUZXN0UHJldmlldyA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSB8IHVuZGVmaW5lZDtcbiAgLy8gY3VycmVudFRlc3RTdGF0ZTogSVRlc3Q7XG4gIHBhZ2VUb1JlbmRlcjogSVFuQVtdO1xuICBzZXRDdXJyZW50TGFuZzogKGxhbmc6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQ7XG4gIHRlc3RUeXBlOiBJVGVzdFtcInR5cGVcIl07XG4gIHNhdmVDaGFuZ2VzOiAocGFnZTogYW55KSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gdXNlU3RhdGU8VExhbmdPcHRpb25bXCJ2YWx1ZVwiXT4oXCJydVwiKTtcbiAgY29uc3Qgc2V0U2VsZWN0ZWRMYW5ndWFnZSA9IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSk6IHZvaWQgPT4ge1xuICAgIHNldFNlbGVjdGVkTGFuZyhjaG9vc2VMYW5ndWFnZSk7XG4gICAgcHJvcHMuc2V0Q3VycmVudExhbmcoY2hvb3NlTGFuZ3VhZ2UpO1xuICB9O1xuICBjb25zdCBpbnB1dEVuYWJsZXIgPSAoKSA9PiB7fTtcblxuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlVG9SZW5kZXIpO1xuICBwcm9wcy5wYWdlVG9SZW5kZXIubWFwKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZS5xdWVzdGlvbikpO1xuXG4gIGxldCB0bXAgPSBwcm9wcy5wYWdlVG9SZW5kZXI7XG5cbiAgY29uc3Qgc2F2ZU5ld0RhdGEgPSAoXG4gICAgcWlkOiBudW1iZXIsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIHdoYXRUb1NhdmU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCJcbiAgKSA9PiB7XG4gICAgdG1wW3FpZF1bd2hhdFRvU2F2ZV0gPSBkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKHRtcFtxaWRdW3doYXRUb1NhdmVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gc2F2ZSBuZXcgZGF0YVwiLCB0bXApO1xuICAgIHByb3BzLnNhdmVDaGFuZ2VzKHRtcCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25LZXlQcmVzcyA9IChcbiAgICBldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiA/IGNvbnNvbGUubG9nKFwiRWZudGVyXCIpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRRdWVzdGlvbihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIHFuYTogSVFuQVxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVzdGlvbkNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufVxuICAgICAgICBvbktleVByZXNzPXtoYW5kbGVRdWVzdGlvbktleVByZXNzfVxuICAgICAgPlxuICAgICAgICB7Lyoge3FuYS5xdWVzdGlvbn0gKi99XG4gICAgICA8L3RleHRhcmVhPlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaW1nUXVlc3Rpb24oXG4gICAgaXRlcmF0b3I6IG51bWJlcixcbiAgICAvLyBoYW5kbGVRdWVzdGlvbkNoYW5nZTogKFxuICAgIC8vIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgIC8vICkgPT4gdm9pZCxcbiAgICBxbmE6IElRbkFcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e1N0cmluZyhpdGVyYXRvcil9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxzcGFuPu+8izwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNhdmVOZXdEYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIFwiYW5zd2VyXCIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRleHRBbnN3ZXIoaXRlcmF0b3I6IG51bWJlciwgcW5hOiBJUW5BKSB7XG4gICAgLy8gY29uc3QgW2N1clZhbHVlLCBzZXRDdXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjdXJWYWx1ZSk7XG4gICAgLy8gfSwgW2N1clZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17XCJFbnRlciB5b3VyIHRleHRcIn1cbiAgICAgICAgaWQ9e1N0cmluZyhpdGVyYXRvcil9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUFuc3dlckNoYW5nZShlKTtcbiAgICAgICAgICAvLyBzZXRDdXJWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQW5zd2VyfVxuICAgICAgPlxuICAgICAgICB7cW5hLmFuc3dlcn1cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0Fuc3dlcihcbiAgICBpdGVyYXRvcjogbnVtYmVyLFxuICAgIC8vIGhhbmRsZVF1ZXN0aW9uQ2hhbmdlOiAoXG4gICAgLy8gICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgICAvLyApID0+IHZvaWQsXG4gICAgcW5hOiBJUW5BXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8c3Bhbj7vvIs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcV9hX1RleHRFbnRyeSh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGEgbmV3IGJlZ2lubmluZlwiLCB0eXBlKTtcbiAgICBjb25zb2xlLmxvZyhgJHtjb21wU3R5bGVzW3R5cGVdfWApO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzW3R5cGVdfWB9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInFhVGV4dEVudHJ5XCJcbiAgICAgICAgaWQ9e1N0cmluZyhpZCl9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2F2ZU5ld0RhdGEoaWQsIGUuY3VycmVudFRhcmdldC52YWx1ZSwgdHlwZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbkNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7ZXZlbnQuY3VycmVudFRhcmdldC5pZH06YCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgc2F2ZU5ld0RhdGEoZXZlbnQuY3VycmVudFRhcmdldC5pZCwgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSwgXCJxdWVzdGlvblwiKTtcbiAgfTtcblxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+XG4gICAgcHJvcHMucGFnZVRvUmVuZGVyLm1hcCgocW5hOiBJUW5BLCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICA8ZGl2IGtleT17aXRlcmF0b3J9IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn0+XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgICAgey8qIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiIHx8IHByb3BzLnRlc3RUeXBlID09PSBcIlBUXCJcbiAgICAgICAgICA/IHFfYV9UZXh0RW50cnkoXCJhbnN3ZXJcIiwgaXRlcmF0b3IpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiUFBcIiA/IGltZ0Fuc3dlcihpdGVyYXRvciwgcW5hKSA6IG51bGx9ICovfVxuICAgICAgICB7XG4gICAgICAgICAgLyogRm9yIHF1ZXN0aW9uIHJlbmRlcmluZyAqL1xuICAgICAgICAgIFFBUmVuZGVyZXIoXG4gICAgICAgICAgICBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgICBzZXRJc09wZW4sXG4gICAgICAgICAgICBzZXRTZWxlY3RlZExhbmd1YWdlLFxuICAgICAgICAgICAgaW5wdXRFbmFibGVyLFxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICBxX2FfVGV4dEVudHJ5LFxuICAgICAgICAgICAgaXRlcmF0b3JcbiAgICAgICAgICApXG4gICAgICAgIH17XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5xdWVzdGlvbn0gb25DbGljaz17KGUpID0+IHNldElzT3Blbih0cnVlKX0+XG4gICAgICAgICAge3FuYS5xdWVzdGlvbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7LyogRm9yIGFuc3dlciByZW5kZXJpbmcgKi99XG4gICAgICAgIHtRQVJlbmRlcmVyKFxuICAgICAgICAgIFwiYW5zd2VyXCIsXG4gICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgIHNldElzT3BlbixcbiAgICAgICAgICBzZXRTZWxlY3RlZExhbmd1YWdlLFxuICAgICAgICAgIGlucHV0RW5hYmxlcixcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBxX2FfVGV4dEVudHJ5LFxuICAgICAgICAgIGl0ZXJhdG9yXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcblxuICBwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIlxuICAgID8gY29uc29sZS5sb2coXCJubyB0ZXN0IHR5cGVcIilcbiAgICA6IGNvbnNvbGUubG9nKHByb3BzLnRlc3RUeXBlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlcy5UZXN0QkdDb250YWluZXJ9YH0+XG4gICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMucGFnZUJvZHl9PlxuICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRUeXBlV2FybmluZ30+XG4gICAgICAgICAgICAgIDxoMT5QbGVhc2UgY2hvb3NlIGEgdGVzdCB0eXBlPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwYWdlQm9keSgpXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Lyoge3BhZ2VCb2R5KCl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG5mdW5jdGlvbiBRQVJlbmRlcmVyKFxuICBRb3JBOiBcInF1ZXN0aW9uXCIgfCBcImFuc3dlclwiLFxuICBpc09wZW46IGJvb2xlYW4sXG4gIHNldElzT3BlbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxuICBzZXRTZWxlY3RlZExhbmd1YWdlOiAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQsXG4gIGlucHV0RW5hYmxlcjogKCkgPT4gdm9pZCxcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gICAgY3VycmVudExhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdIHwgdW5kZWZpbmVkO1xuICAgIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICAgIHBhZ2VUb1JlbmRlcjogSVFuQVtdO1xuICAgIHNldEN1cnJlbnRMYW5nOiAobGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgICB0ZXN0VHlwZTogYW55O1xuICAgIHNhdmVDaGFuZ2VzOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICB9LFxuICBxX2FfVGV4dEVudHJ5OiAodHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIiwgaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQsXG4gIGl0ZXJhdG9yOiBudW1iZXJcbik6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhzZXRTZWxlY3RlZExhbmd1YWdlLCBpbnB1dEVuYWJsZXIpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgIHtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiID8gcV9hX1RleHRFbnRyeShRb3JBLCBpdGVyYXRvcikgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})