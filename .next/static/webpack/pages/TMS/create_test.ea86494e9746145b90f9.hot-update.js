webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _QACard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QACard */ \"./components/QACard.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isQOpen = _useState[0],\n      setisQOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isAOpen = _useState2[0],\n      setisAOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"ru\"),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var setSelectedLanguage = function setSelectedLanguage(chooseLanguage) {\n    setSelectedLang(chooseLanguage);\n    props.setCurrentLang(chooseLanguage);\n  };\n\n  var inputEnabler = function inputEnabler() {}; // console.log(props.pageToRender);\n  // props.pageToRender.map((ele) => console.log(ele.question));\n\n\n  var tmp = props.pageToRender;\n\n  var saveNewData = function saveNewData(qid, data, whatToSave) {\n    // console.log(\"from data saving\", qid);\n    tmp[qid][whatToSave] = data; // console.log(tmp[qid][whatToSave]);\n    // console.log(\"from save new data\", tmp);\n\n    props.saveChanges(tmp);\n  };\n\n  var handleQuestionKeyPress = function handleQuestionKeyPress(event) {\n    event.key === \"Enter\" ? console.log(\"Efnter\") : undefined;\n  };\n\n  function q_a_TextEntry(type, id) {\n    // console.log(\"id\", id);\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"textarea\", {\n      autoFocus: true,\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputForQandA // type=\"text\"\n      ,\n      name: \"qaTextEntry\",\n      id: String(id),\n      value: props.pageToRender[id][type],\n      onChange: function onChange(e) {\n        return saveNewData(id, e.currentTarget.value, type);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }\n    }), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }\n    }, \"Character count: \", props.pageToRender[id][type].length));\n  }\n\n  var handleQuestionChange = function handleQuestionChange(event) {\n    // console.log(`${event.currentTarget.id}:`, event.currentTarget.value);\n    saveNewData(Number(event.currentTarget.id), event.currentTarget.value, \"question\");\n  };\n\n  var handleModalOpening = function handleModalOpening(event) {\n    if (event.currentTarget.classList.contains(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.question)) {\n      var tmpModalsArray = Array.from(document.getElementsByClassName(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG));\n      tmpModalsArray.forEach(function (modal) {\n        if (modal.id !== event.currentTarget.id) {\n          modal.classList.add(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HideModal);\n        } else {\n          modal.classList.remove(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HideModal);\n        }\n      }); // console.log(tmpModalsArray);\n\n      setisQOpen(true);\n    }\n  };\n\n  var pageBody = function pageBody() {\n    return props.pageToRender.map(function (qna, iterator) {\n      return __jsx(\"div\", {\n        key: iterator,\n        id: String(iterator),\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaPair,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 7\n        }\n      }, __jsx(_QACard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        setCurrentCard: props.setCurrentCard,\n        cardType: \"question\",\n        cardContents: props.testType === \"PP\" ? \"img\" : \"text\",\n        iterator: iterator,\n        setSelectedLanguage: setSelectedLanguage,\n        inputEnabler: inputEnabler,\n        qna: qna,\n        testType: props.testType,\n        q_a_TextEntry: q_a_TextEntry,\n        togglePhotoManager: props.togglePhotoManager,\n        currentLang: props.currentLanguage,\n        pageContents: props.pageToRender[iterator][\"question\"],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 9\n        }\n      }), __jsx(_QACard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        setCurrentCard: props.setCurrentCard,\n        cardType: \"answer\",\n        cardContents: props.testType === \"TT\" ? \"text\" : \"img\",\n        iterator: iterator,\n        setSelectedLanguage: setSelectedLanguage,\n        inputEnabler: inputEnabler,\n        qna: qna,\n        testType: props.testType,\n        q_a_TextEntry: q_a_TextEntry,\n        togglePhotoManager: props.togglePhotoManager,\n        currentLang: props.currentLanguage,\n        pageContents: props.pageToRender[iterator][\"answer\"],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 9\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestBGContainer),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageBody,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, props.testType === \"\" ? __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tTypeWarning,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 15\n    }\n  }, \"Please choose a test type\")) : pageBody())));\n};\n\n_s(TestPreview, \"Qx3nyvlWQFOKRZdBKNWWScfqKHA=\");\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJpc1FPcGVuIiwic2V0aXNRT3BlbiIsImlzQU9wZW4iLCJzZXRpc0FPcGVuIiwic2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5nIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImNob29zZUxhbmd1YWdlIiwic2V0Q3VycmVudExhbmciLCJpbnB1dEVuYWJsZXIiLCJ0bXAiLCJwYWdlVG9SZW5kZXIiLCJzYXZlTmV3RGF0YSIsInFpZCIsImRhdGEiLCJ3aGF0VG9TYXZlIiwic2F2ZUNoYW5nZXMiLCJoYW5kbGVRdWVzdGlvbktleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwicV9hX1RleHRFbnRyeSIsInR5cGUiLCJpZCIsImNvbXBTdHlsZXMiLCJ0ZXh0SW5wdXRGb3JRYW5kQSIsIlN0cmluZyIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJoYW5kbGVRdWVzdGlvbkNoYW5nZSIsIk51bWJlciIsImhhbmRsZU1vZGFsT3BlbmluZyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicXVlc3Rpb24iLCJ0bXBNb2RhbHNBcnJheSIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZENvbXBTdHlsZXMiLCJNb2RhbENvbnRhaW5lckJHIiwiZm9yRWFjaCIsIm1vZGFsIiwiYWRkIiwiSGlkZU1vZGFsIiwicmVtb3ZlIiwicGFnZUJvZHkiLCJtYXAiLCJxbmEiLCJpdGVyYXRvciIsInFuYVBhaXIiLCJzZXRDdXJyZW50Q2FyZCIsInRlc3RUeXBlIiwidG9nZ2xlUGhvdG9NYW5hZ2VyIiwiY3VycmVudExhbmd1YWdlIiwic3R5bGVzIiwiYWN0aXZlUGFnZSIsIlRlc3RCR0NvbnRhaW5l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QixDQUE5QixDQURGLEVBR0U7QUFBSyxhQUFTLFlBQUtuQyxzRUFBVSxDQUFDb0MsZUFBaEIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRXBDLHNFQUFVLENBQUN5QixRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dyRCxLQUFLLENBQUMyRCxRQUFOLEtBQW1CLEVBQW5CLEdBQ0M7QUFBSyxhQUFTLEVBQUUvQixzRUFBVSxDQUFDcUMsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FERCxHQUtDWixRQUFRLEVBTlosQ0FGRixDQUhGLENBREY7QUFrQkQsQ0FoSkQ7O0dBQU10RCxXOztLQUFBQSxXO0FBa0pTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdFByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIElMYW5nU3BlY2lmaWNCb2R5LFxuICBJUW5BLFxuICBJUW5BUGFpcnMsXG4gIElUZXN0LFxuICBUTGFuZ09wdGlvbixcbiAgVFRlc3RUeXBlcyxcbn0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5pbXBvcnQgUUFDYXJkIGZyb20gXCIuL1FBQ2FyZFwiO1xuXG5jb25zdCBUZXN0UHJldmlldyA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSB8IHVuZGVmaW5lZDtcbiAgLy8gY3VycmVudFRlc3RTdGF0ZTogSVRlc3Q7XG4gIHBhZ2VUb1JlbmRlcjogSVFuQVtdO1xuICBzZXRDdXJyZW50TGFuZzogKGxhbmc6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQ7XG4gIHRlc3RUeXBlOiBJVGVzdFtcInR5cGVcIl07XG4gIHNhdmVDaGFuZ2VzOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICB0b2dnbGVQaG90b01hbmFnZXI6ICh0b2dnbGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNldEN1cnJlbnRDYXJkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx1bmRlZmluZWQ+Pjtcbn0pID0+IHtcbiAgY29uc3QgW2lzUU9wZW4sIHNldGlzUU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNBT3Blbiwgc2V0aXNBT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbltcInZhbHVlXCJdPihcInJ1XCIpO1xuICBjb25zdCBzZXRTZWxlY3RlZExhbmd1YWdlID0gKGNob29zZUxhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKTogdm9pZCA9PiB7XG4gICAgc2V0U2VsZWN0ZWRMYW5nKGNob29zZUxhbmd1YWdlKTtcbiAgICBwcm9wcy5zZXRDdXJyZW50TGFuZyhjaG9vc2VMYW5ndWFnZSk7XG4gIH07XG4gIGNvbnN0IGlucHV0RW5hYmxlciA9ICgpID0+IHt9O1xuXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLnBhZ2VUb1JlbmRlcik7XG4gIC8vIHByb3BzLnBhZ2VUb1JlbmRlci5tYXAoKGVsZSkgPT4gY29uc29sZS5sb2coZWxlLnF1ZXN0aW9uKSk7XG5cbiAgbGV0IHRtcCA9IHByb3BzLnBhZ2VUb1JlbmRlcjtcblxuICBjb25zdCBzYXZlTmV3RGF0YSA9IChcbiAgICBxaWQ6IG51bWJlcixcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgd2hhdFRvU2F2ZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIlxuICApID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gZGF0YSBzYXZpbmdcIiwgcWlkKTtcbiAgICB0bXBbcWlkXVt3aGF0VG9TYXZlXSA9IGRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codG1wW3FpZF1bd2hhdFRvU2F2ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBzYXZlIG5ldyBkYXRhXCIsIHRtcCk7XG4gICAgcHJvcHMuc2F2ZUNoYW5nZXModG1wKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVRdWVzdGlvbktleVByZXNzID0gKFxuICAgIGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiID8gY29uc29sZS5sb2coXCJFZm50ZXJcIikgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gcV9hX1RleHRFbnRyeSh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJpZFwiLCBpZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy50ZXh0SW5wdXRGb3JRYW5kQX1cbiAgICAgICAgICAvLyB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInFhVGV4dEVudHJ5XCJcbiAgICAgICAgICBpZD17U3RyaW5nKGlkKX1cbiAgICAgICAgICB2YWx1ZT17cHJvcHMucGFnZVRvUmVuZGVyW2lkXVt0eXBlXX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNhdmVOZXdEYXRhKGlkLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUsIHR5cGUpfVxuICAgICAgICAvPlxuICAgICAgICA8cD5DaGFyYWN0ZXIgY291bnQ6IHtwcm9wcy5wYWdlVG9SZW5kZXJbaWRdW3R5cGVdLmxlbmd0aH08L3A+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUXVlc3Rpb25DaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGAke2V2ZW50LmN1cnJlbnRUYXJnZXQuaWR9OmAsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIHNhdmVOZXdEYXRhKFxuICAgICAgTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpLFxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIFwicXVlc3Rpb25cIlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxPcGVuaW5nID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNvbXBTdHlsZXMucXVlc3Rpb24pKSB7XG4gICAgICBsZXQgdG1wTW9kYWxzQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGFkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCRylcbiAgICAgICk7XG4gICAgICB0bXBNb2RhbHNBcnJheS5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICAgICAgICBpZiAobW9kYWwuaWQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZXMuSGlkZU1vZGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNvbXBTdHlsZXMuSGlkZU1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0bXBNb2RhbHNBcnJheSk7XG4gICAgICBzZXRpc1FPcGVuKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwYWdlQm9keSA9ICgpID0+XG4gICAgcHJvcHMucGFnZVRvUmVuZGVyLm1hcCgocW5hOiBJUW5BLCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICA8ZGl2IGtleT17aXRlcmF0b3J9IGlkPXtTdHJpbmcoaXRlcmF0b3IpfSBjbGFzc05hbWU9e2NvbXBTdHlsZXMucW5hUGFpcn0+XG4gICAgICAgIDxRQUNhcmRcbiAgICAgICAgICBzZXRDdXJyZW50Q2FyZD17cHJvcHMuc2V0Q3VycmVudENhcmR9XG4gICAgICAgICAgY2FyZFR5cGU9XCJxdWVzdGlvblwiXG4gICAgICAgICAgY2FyZENvbnRlbnRzPXtwcm9wcy50ZXN0VHlwZSA9PT0gXCJQUFwiID8gXCJpbWdcIiA6IFwidGV4dFwifVxuICAgICAgICAgIGl0ZXJhdG9yPXtpdGVyYXRvcn1cbiAgICAgICAgICBzZXRTZWxlY3RlZExhbmd1YWdlPXtzZXRTZWxlY3RlZExhbmd1YWdlfVxuICAgICAgICAgIGlucHV0RW5hYmxlcj17aW5wdXRFbmFibGVyfVxuICAgICAgICAgIHFuYT17cW5hfVxuICAgICAgICAgIHRlc3RUeXBlPXtwcm9wcy50ZXN0VHlwZX1cbiAgICAgICAgICBxX2FfVGV4dEVudHJ5PXtxX2FfVGV4dEVudHJ5fVxuICAgICAgICAgIHRvZ2dsZVBob3RvTWFuYWdlcj17cHJvcHMudG9nZ2xlUGhvdG9NYW5hZ2VyfVxuICAgICAgICAgIGN1cnJlbnRMYW5nPXtwcm9wcy5jdXJyZW50TGFuZ3VhZ2V9XG4gICAgICAgICAgcGFnZUNvbnRlbnRzPXtwcm9wcy5wYWdlVG9SZW5kZXJbaXRlcmF0b3JdW1wicXVlc3Rpb25cIl19XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBGb3IgYW5zd2VyIHJlbmRlcmluZyAqL31cbiAgICAgICAgPFFBQ2FyZFxuICAgICAgICAgIHNldEN1cnJlbnRDYXJkPXtwcm9wcy5zZXRDdXJyZW50Q2FyZH1cbiAgICAgICAgICBjYXJkVHlwZT1cImFuc3dlclwiXG4gICAgICAgICAgY2FyZENvbnRlbnRzPXtwcm9wcy50ZXN0VHlwZSA9PT0gXCJUVFwiID8gXCJ0ZXh0XCIgOiBcImltZ1wifVxuICAgICAgICAgIGl0ZXJhdG9yPXtpdGVyYXRvcn1cbiAgICAgICAgICBzZXRTZWxlY3RlZExhbmd1YWdlPXtzZXRTZWxlY3RlZExhbmd1YWdlfVxuICAgICAgICAgIGlucHV0RW5hYmxlcj17aW5wdXRFbmFibGVyfVxuICAgICAgICAgIHFuYT17cW5hfVxuICAgICAgICAgIHRlc3RUeXBlPXtwcm9wcy50ZXN0VHlwZX1cbiAgICAgICAgICBxX2FfVGV4dEVudHJ5PXtxX2FfVGV4dEVudHJ5fVxuICAgICAgICAgIHRvZ2dsZVBob3RvTWFuYWdlcj17cHJvcHMudG9nZ2xlUGhvdG9NYW5hZ2VyfVxuICAgICAgICAgIGN1cnJlbnRMYW5nPXtwcm9wcy5jdXJyZW50TGFuZ3VhZ2V9XG4gICAgICAgICAgcGFnZUNvbnRlbnRzPXtwcm9wcy5wYWdlVG9SZW5kZXJbaXRlcmF0b3JdW1wiYW5zd2VyXCJdfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3RQcmV2aWV3fT5cbiAgICAgIDxoMz5QYWdlOiB7cHJvcHMuYWN0aXZlUGFnZSArIDF9PC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXMuVGVzdEJHQ29udGFpbmVyfWB9PlxuICAgICAgICA8Rk1Mb2dvIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnBhZ2VCb2R5fT5cbiAgICAgICAgICB7cHJvcHMudGVzdFR5cGUgPT09IFwiXCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy50VHlwZVdhcm5pbmd9PlxuICAgICAgICAgICAgICA8aDE+UGxlYXNlIGNob29zZSBhIHRlc3QgdHlwZTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgcGFnZUJvZHkoKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0UHJldmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})