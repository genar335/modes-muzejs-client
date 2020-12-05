webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _QACard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QACard */ \"./components/QACard.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isQOpen = _useState[0],\n      setisQOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isAOpen = _useState2[0],\n      setisAOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {}; // console.log(props.pageToRender);\n  // props.pageToRender.map((ele) => console.log(ele.question));\n\n\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    // console.log(\"from data saving\", qid);\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  var textEntryCountLimit = 180;\n\n  function q_a_TextEntry(type, id) {\n    // console.log(\"id\", id);\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"textarea\", {\n      autoFocus: true,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputForQandA // type=\"text\"\n      ,\n      name: \"qaTextEntry\",\n      id: String(id),\n      value: props.pageToRender[id][type],\n      maxLength: textEntryCountLimit,\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }\n    }), __jsx(\"p\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputQnACounter,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }\n    }, \"Character count: \", props.pageToRender[id][type].length, \" /\", \" \", textEntryCountLimit));\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    // console.log(`${event.currentTarget.id}:`, event.currentTarget.value);\n    saveNewData(Number(event.currentTarget.id), event.currentTarget.value, \"question\");\n  };\n\n  var handleModalOpening = function handleModalOpening(event) {\n    if (event.currentTarget.classList.contains(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question)) {\n      var tmpModalsArray = Array.from(document.getElementsByClassName(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG));\n      tmpModalsArray.forEach(function (modal) {\n        if (modal.id !== event.currentTarget.id) {\n          modal.classList.add(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HideModal);\n        } else {\n          modal.classList.remove(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HideModal);\n        }\n      }); // console.log(tmpModalsArray);\n\n      setisQOpen(true);\n    }\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, qnaIterator) {\n      return __jsx(\"div\", {\n        key: qnaIterator,\n        id: String(qnaIterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 7\n        }\n      }, __jsx(_QACard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        setCurrentCard: props.setCurrentCard,\n        cardType: \"question\",\n        cardContents: props.testType === \"PP\" ? \"img\" : \"text\",\n        iterator: qnaIterator,\n        setSelectedLanguage: setSelectedLanguage,\n        inputEnabler: inputEnabler,\n        qna: qna,\n        testType: props.testType,\n        q_a_TextEntry: q_a_TextEntry,\n        togglePhotoManager: props.togglePhotoManager,\n        currentLang: props.currentLanguage,\n        pageContents: props.pageToRender[qnaIterator][\"question\"],\n        pageNumber: props.activePage,\n        saveIMG: saveNewData,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 9\n        }\n      }), __jsx(_QACard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        setCurrentCard: props.setCurrentCard,\n        cardType: \"answer\",\n        cardContents: props.testType === \"TT\" ? \"text\" : \"img\",\n        iterator: qnaIterator,\n        setSelectedLanguage: setSelectedLanguage,\n        inputEnabler: inputEnabler,\n        qna: qna,\n        testType: props.testType,\n        q_a_TextEntry: q_a_TextEntry,\n        togglePhotoManager: props.togglePhotoManager,\n        currentLang: props.currentLanguage,\n        pageContents: props.pageToRender[qnaIterator][\"answer\"],\n        pageNumber: props.activePage,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 9\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Qx3nyvlWQFOKRZdBKNWWScfqKHA=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc1FPcGVuIiwic2V0aXNRT3BlbiIsImlzQU9wZW4iLCJzZXRpc0FPcGVuIiwic2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImNob29zZUxhbmd1YWdlIiwic2V0Q3VycmVudExhbmciLCJpbnB1dEVuYWJsZXIiLCJ0bXAiLCJwYWdlVG9SZW5kZXIiLCJzYXZlTmV3RGF0YSIsInFpZCIsImRhdGEiLCJ3aGF0VG9TYXZlIiwic2F2ZUNoYW5nZXMiLCJoYW5kbGVRdWVzdGlvbktleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwidGV4dEVudHJ5Q291bnRMaW1pdCIsInFfYV9UZXh0RW50cnkiLCJ0eXBlIiwiaWQiLCJjb21wU3R5bGVzIiwidGV4dElucHV0Rm9yUWFuZEEiLCJTdHJpbmciLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwidGV4dElucHV0UW5BQ291bnRlciIsImxlbmd0aCIsImhhbmRsZVF1ZXN0aW9uQ2hhbmdlIiwiTnVtYmVyIiwiaGFuZGxlTW9kYWxPcGVuaW5nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJxdWVzdGlvbiIsInRtcE1vZGFsc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJmb3JFYWNoIiwibW9kYWwiLCJhZGQiLCJIaWRlTW9kYWwiLCJyZW1vdmUiLCJwYWdlQm9keSIsIm1hcCIsInFuYSIsInFuYUl0ZXJhdG9yIiwicW5hUGFpciIsInNldEN1cnJlbnRDYXJkIiwidGVzdFR5cGUiLCJ0b2dnbGVQaG90b01hbmFnZXIiLCJjdXJyZW50TGFuZ3VhZ2UiLCJhY3RpdmVQYWdlIiwic3R5bGVzIiwiVGVzdEJHQ29udGFpbmVyIiwidFR5cGVXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFVZDtBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxLQUFELENBRGxDO0FBQUEsTUFDR0MsT0FESDtBQUFBLE1BQ1lDLFVBRFo7O0FBQUEsbUJBRTBCRixzREFBUSxDQUFDLEtBQUQsQ0FGbEM7QUFBQSxNQUVHRyxPQUZIO0FBQUEsTUFFWUMsVUFGWjs7QUFBQSxtQkFHb0NKLHNEQUFRLENBQXVCLElBQXZCLENBSDVDO0FBQUEsTUFHR0ssWUFISDtBQUFBLE1BR2lCQyxlQUhqQjs7QUFJSixNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLGNBQUQsRUFBZ0Q7QUFDMUVGLG1CQUFlLENBQUNFLGNBQUQsQ0FBZjtBQUNBVCxTQUFLLENBQUNVLGNBQU4sQ0FBcUJELGNBQXJCO0FBQ0QsR0FIRDs7QUFJQSxNQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNLENBQUUsQ0FBN0IsQ0FSSSxDQVVKO0FBQ0E7OztBQUVBLE1BQUlDLEdBQUcsR0FBR1osS0FBSyxDQUFDYSxZQUFoQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNsQkMsR0FEa0IsRUFFbEJDLElBRmtCLEVBR2xCQyxVQUhrQixFQUlmO0FBQ0g7QUFDQUwsT0FBRyxDQUFDRyxHQUFELENBQUgsQ0FBU0UsVUFBVCxJQUF1QkQsSUFBdkIsQ0FGRyxDQUdIO0FBQ0E7O0FBQ0FoQixTQUFLLENBQUNrQixXQUFOLENBQWtCTixHQUFsQjtBQUNELEdBVkQ7O0FBWUEsTUFBTU8sc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUM3QkMsS0FENkIsRUFFMUI7QUFDSEEsU0FBSyxDQUFDQyxHQUFOLEtBQWMs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VSxFQUFFMUQsS0FBSyxDQUFDZ0UsVUFicEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXRCRixDQURxQjtBQUFBLEtBQXZCLENBRGU7QUFBQSxHQUFqQjs7QUEwQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQ2xFLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVdDLEtBQUssQ0FBQ2dFLFVBQU4sR0FBbUIsQ0FBOUIsQ0FERixFQUdFO0FBQUssYUFBUyxZQUFLbkMsc0VBQVUsQ0FBQ3FDLGVBQWhCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVyQyxzRUFBVSxDQUFDMEIsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdkQsS0FBSyxDQUFDNkQsUUFBTixLQUFtQixFQUFuQixHQUNDO0FBQUssYUFBUyxFQUFFaEMsc0VBQVUsQ0FBQ3NDLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREQsR0FLQ1osUUFBUSxFQU5aLENBRkYsQ0FIRixDQURGO0FBa0JELENBN0pEOztHQUFNeEQsVzs7S0FBQUEsVztBQStKU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJTGFuZ1NwZWNpZmljQm9keSxcbiAgSVFuQSxcbiAgSVFuQVBhaXJzLFxuICBJVGVzdCxcbiAgVExhbmdPcHRpb24sXG4gIFRUZXN0VHlwZXMsXG59IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYWRkQ29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBjbG9zZUJ0biwgQ3JlYXRlTGFuZ1N3aXRjaGVycywgU2F2ZUJ0biB9IGZyb20gXCIuL1Rlc3ROYW1lclwiO1xuaW1wb3J0IFFBQ2FyZCBmcm9tIFwiLi9RQUNhcmRcIjtcblxuY29uc3QgVGVzdFByZXZpZXcgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBjdXJyZW50TGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0gfCB1bmRlZmluZWQ7XG4gIC8vIGN1cnJlbnRUZXN0U3RhdGU6IElUZXN0O1xuICBwYWdlVG9SZW5kZXI6IElRbkFbXTtcbiAgc2V0Q3VycmVudExhbmc6IChsYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICB0ZXN0VHlwZTogSVRlc3RbXCJ0eXBlXCJdO1xuICBzYXZlQ2hhbmdlczogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbiAgdG9nZ2xlUGhvdG9NYW5hZ2VyOiAodG9nZ2xlOiBib29sZWFuLCBjYXJkSUQ6IHN0cmluZykgPT4gdm9pZDtcbiAgc2V0Q3VycmVudENhcmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHVuZGVmaW5lZD4+O1xufSkgPT4ge1xuICBjb25zdCBbaXNRT3Blbiwgc2V0aXNRT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0FPcGVuLCBzZXRpc0FPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uW1widmFsdWVcIl0+KFwicnVcIik7XG4gIGNvbnN0IHNldFNlbGVjdGVkTGFuZ3VhZ2UgPSAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pOiB2b2lkID0+IHtcbiAgICBzZXRTZWxlY3RlZExhbmcoY2hvb3NlTGFuZ3VhZ2UpO1xuICAgIHByb3BzLnNldEN1cnJlbnRMYW5nKGNob29zZUxhbmd1YWdlKTtcbiAgfTtcbiAgY29uc3QgaW5wdXRFbmFibGVyID0gKCkgPT4ge307XG5cbiAgLy8gY29uc29sZS5sb2cocHJvcHMucGFnZVRvUmVuZGVyKTtcbiAgLy8gcHJvcHMucGFnZVRvUmVuZGVyLm1hcCgoZWxlKSA9PiBjb25zb2xlLmxvZyhlbGUucXVlc3Rpb24pKTtcblxuICBsZXQgdG1wID0gcHJvcHMucGFnZVRvUmVuZGVyO1xuXG4gIGNvbnN0IHNhdmVOZXdEYXRhID0gKFxuICAgIHFpZDogbnVtYmVyLFxuICAgIGRhdGE6IHN0cmluZyxcbiAgICB3aGF0VG9TYXZlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiXG4gICkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBkYXRhIHNhdmluZ1wiLCBxaWQpO1xuICAgIHRtcFtxaWRdW3doYXRUb1NhdmVdID0gZGF0YTtcbiAgICAvLyBjb25zb2xlLmxvZyh0bXBbcWlkXVt3aGF0VG9TYXZlXSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmcm9tIHNhdmUgbmV3IGRhdGFcIiwgdG1wKTtcbiAgICBwcm9wcy5zYXZlQ2hhbmdlcyh0bXApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVF1ZXN0aW9uS2V5UHJlc3MgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgPyBjb25zb2xlLmxvZyhcIkVmbnRlclwiKSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBjb25zdCB0ZXh0RW50cnlDb3VudExpbWl0OiBudW1iZXIgPSAxODA7XG5cbiAgZnVuY3Rpb24gcV9hX1RleHRFbnRyeSh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJpZFwiLCBpZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy50ZXh0SW5wdXRGb3JRYW5kQX1cbiAgICAgICAgICAvLyB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInFhVGV4dEVudHJ5XCJcbiAgICAgICAgICBpZD17U3RyaW5nKGlkKX1cbiAgICAgICAgICB2YWx1ZT17cHJvcHMucGFnZVRvUmVuZGVyW2lkXVt0eXBlXX1cbiAgICAgICAgICBtYXhMZW5ndGg9e3RleHRFbnRyeUNvdW50TGltaXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzYXZlTmV3RGF0YShpZCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCB0eXBlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRleHRJbnB1dFFuQUNvdW50ZXJ9PlxuICAgICAgICAgIENoYXJhY3RlciBjb3VudDoge3Byb3BzLnBhZ2VUb1JlbmRlcltpZF1bdHlwZV0ubGVuZ3RofSAve1wiIFwifVxuICAgICAgICAgIHt0ZXh0RW50cnlDb3VudExpbWl0fVxuICAgICAgICA8L3A+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25DaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGAke2V2ZW50LmN1cnJlbnRUYXJnZXQuaWR9OmAsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIHNhdmVOZXdEYXRhKFxuICAgICAgTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpLFxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIFwicXVlc3Rpb25cIlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxPcGVuaW5nID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNvbXBTdHlsZXMucXVlc3Rpb24pKSB7XG4gICAgICBsZXQgdG1wTW9kYWxzQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGFkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCRylcbiAgICAgICk7XG4gICAgICB0bXBNb2RhbHNBcnJheS5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICAgICAgICBpZiAobW9kYWwuaWQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZXMuSGlkZU1vZGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNvbXBTdHlsZXMuSGlkZU1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0bXBNb2RhbHNBcnJheSk7XG4gICAgICBzZXRpc1FPcGVuKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+XG4gICAgcHJvcHMucGFnZVRvUmVuZGVyLm1hcCgocW5hOiBJUW5BLCBxbmFJdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17cW5hSXRlcmF0b3J9XG4gICAgICAgIGlkPXtTdHJpbmcocW5hSXRlcmF0b3IpfVxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn1cbiAgICAgID5cbiAgICAgICAgPFFBQ2FyZFxuICAgICAgICAgIHNldEN1cnJlbnRDYXJkPXtwcm9wcy5zZXRDdXJyZW50Q2FyZH1cbiAgICAgICAgICBjYXJkVHlwZT1cInF1ZXN0aW9uXCJcbiAgICAgICAgICBjYXJkQ29udGVudHM9e3Byb3BzLnRlc3RUeXBlID09PSBcIlBQXCIgPyBcImltZ1wiIDogXCJ0ZXh0XCJ9XG4gICAgICAgICAgaXRlcmF0b3I9e3FuYUl0ZXJhdG9yfVxuICAgICAgICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2U9e3NldFNlbGVjdGVkTGFuZ3VhZ2V9XG4gICAgICAgICAgaW5wdXRFbmFibGVyPXtpbnB1dEVuYWJsZXJ9XG4gICAgICAgICAgcW5hPXtxbmF9XG4gICAgICAgICAgdGVzdFR5cGU9e3Byb3BzLnRlc3RUeXBlfVxuICAgICAgICAgIHFfYV9UZXh0RW50cnk9e3FfYV9UZXh0RW50cnl9XG4gICAgICAgICAgdG9nZ2xlUGhvdG9NYW5hZ2VyPXtwcm9wcy50b2dnbGVQaG90b01hbmFnZXJ9XG4gICAgICAgICAgY3VycmVudExhbmc9e3Byb3BzLmN1cnJlbnRMYW5ndWFnZX1cbiAgICAgICAgICBwYWdlQ29udGVudHM9e3Byb3BzLnBhZ2VUb1JlbmRlcltxbmFJdGVyYXRvcl1bXCJxdWVzdGlvblwiXX1cbiAgICAgICAgICBwYWdlTnVtYmVyPXtwcm9wcy5hY3RpdmVQYWdlfVxuICAgICAgICAgIHNhdmVJTUc9e3NhdmVOZXdEYXRhfVxuICAgICAgICAvPlxuICAgICAgICB7LyogRm9yIGFuc3dlciByZW5kZXJpbmcgKi99XG4gICAgICAgIDxRQUNhcmRcbiAgICAgICAgICBzZXRDdXJyZW50Q2FyZD17cHJvcHMuc2V0Q3VycmVudENhcmR9XG4gICAgICAgICAgY2FyZFR5cGU9XCJhbnN3ZXJcIlxuICAgICAgICAgIGNhcmRDb250ZW50cz17cHJvcHMudGVzdFR5cGUgPT09IFwiVFRcIiA/IFwidGV4dFwiIDogXCJpbWdcIn1cbiAgICAgICAgICBpdGVyYXRvcj17cW5hSXRlcmF0b3J9XG4gICAgICAgICAgc2V0U2VsZWN0ZWRMYW5ndWFnZT17c2V0U2VsZWN0ZWRMYW5ndWFnZX1cbiAgICAgICAgICBpbnB1dEVuYWJsZXI9e2lucHV0RW5hYmxlcn1cbiAgICAgICAgICBxbmE9e3FuYX1cbiAgICAgICAgICB0ZXN0VHlwZT17cHJvcHMudGVzdFR5cGV9XG4gICAgICAgICAgcV9hX1RleHRFbnRyeT17cV9hX1RleHRFbnRyeX1cbiAgICAgICAgICB0b2dnbGVQaG90b01hbmFnZXI9e3Byb3BzLnRvZ2dsZVBob3RvTWFuYWdlcn1cbiAgICAgICAgICBjdXJyZW50TGFuZz17cHJvcHMuY3VycmVudExhbmd1YWdlIX1cbiAgICAgICAgICBwYWdlQ29udGVudHM9e3Byb3BzLnBhZ2VUb1JlbmRlcltxbmFJdGVyYXRvcl1bXCJhbnN3ZXJcIl19XG4gICAgICAgICAgcGFnZU51bWJlcj17cHJvcHMuYWN0aXZlUGFnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0UHJldmlld30+XG4gICAgICA8aDM+UGFnZToge3Byb3BzLmFjdGl2ZVBhZ2UgKyAxfTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzLlRlc3RCR0NvbnRhaW5lcn1gfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5wYWdlQm9keX0+XG4gICAgICAgICAge3Byb3BzLnRlc3RUeXBlID09PSBcIlwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMudFR5cGVXYXJuaW5nfT5cbiAgICAgICAgICAgICAgPGgxPlBsZWFzZSBjaG9vc2UgYSB0ZXN0IHR5cGU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHBhZ2VCb2R5KClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})