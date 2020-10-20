webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar TestNamer = function TestNamer(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return [document.getElementById(lang)];\n    });\n    console.log(langButtons);\n  });\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    var _btn$target;\n\n    console.log((_btn$target = btn.target) === null || _btn$target === void 0 ? void 0 : _btn$target.id);\n    langButtons.forEach(function (button) {\n      var _button$, _btn$target2;\n\n      console.log(button[1]);\n\n      if (((_button$ = button[0]) === null || _button$ === void 0 ? void 0 : _button$.id) == ((_btn$target2 = btn.target) === null || _btn$target2 === void 0 ? void 0 : _btn$target2.id)) {\n        var _button$2, _button$2$classList;\n\n        (_button$2 = button[0]) === null || _button$2 === void 0 ? void 0 : (_button$2$classList = _button$2.classList) === null || _button$2$classList === void 0 ? void 0 : _button$2$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n        button[1] = true;\n      } else {\n        var _button$3, _button$3$classList;\n\n        (_button$3 = button[0]) === null || _button$3 === void 0 ? void 0 : (_button$3$classList = _button$3.classList) === null || _button$3$classList === void 0 ? void 0 : _button$3$classList.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonPressed);\n        button[1] = false;\n      }\n    });\n    props.currentLang(btn.target.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {};\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }), __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NextLang,\n    onClick: handleArrowClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, \"\\u2192\")))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMYW5nQnRuQ2xpY2siLCJidG4iLCJ0YXJnZXQiLCJpZCIsImZvckVhY2giLCJidXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb21wU3R5bGVzIiwiQnV0dG9uUHJlc3NlZCIsInJlbW92ZSIsImN1cnJlbnRMYW5nIiwiaGFuZGxlQXJyb3dDbGljayIsInN0eWxlcyIsIlRlc3ROYW1pbmciLCJNb2RhbENvbnRhaW5lckJHIiwiTW9kYWxDb250YWluZXIiLCJDbG9zZUJUTiIsIk1vZGFsIiwiTGFuZ1NlbGVjdCIsIkxhbmdCdXR0b24iLCJUTmFtZUlucHV0IiwiTmV4dExhbmciLCJNb2RhbE9wZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFnQjtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFVLEtBQVYsQ0FESjtBQUFBLE1BQ3pCQyxNQUR5QjtBQUFBLE1BQ2pCQyxTQURpQjs7QUFHaEMsTUFBTUMsUUFBZ0MsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUF6QztBQUVBLE1BQUlDLFdBQWlELEdBQUcsRUFBeEQ7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGVBQVcsR0FBR0QsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFrQjtBQUMzQyxhQUFPLENBQUNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsSUFBeEIs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJGLEVBNkJFO0FBQ0UsYUFBUyxFQUFFYixvRUFBVSxDQUFDYyxRQUR4QjtBQUVFLFdBQU8sRUFBRVYsZ0JBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRixDQVJGLENBREYsQ0FESyxHQWlETDtBQUFLLGFBQVMsRUFBRUosb0VBQVUsQ0FBQ2UsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1qQyxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLENBbERKLENBREY7QUEwREQsQ0EzRkQ7O0dBQU1KLFM7O0tBQUFBLFM7QUE2RlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZXN0TmFtZXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHRlc3RMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdW10gPSBbXCJydVwiLCBcImx2XCIsIFwiZW5cIl07XG5cbiAgbGV0IGxhbmdCdXR0b25zOiBBcnJheTxbSFRNTEVsZW1lbnQgfCBudWxsLCBib29sZWFuXT4gPSBbXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxhbmdCdXR0b25zID0gdGVzdExhbmcubWFwKChsYW5nOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFuZyksIF07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cobGFuZ0J1dHRvbnMpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVMYW5nQnRuQ2xpY2sgPSAoXG4gICAgYnRuOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhidG4udGFyZ2V0Py5pZCk7XG4gICAgbGFuZ0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhidXR0b25bMV0pO1xuICAgICAgaWYgKGJ1dHRvblswXT8uaWQgPT0gYnRuLnRhcmdldD8uaWQpIHtcbiAgICAgICAgYnV0dG9uWzBdPy5jbGFzc0xpc3Q/LmFkZChjb21wU3R5bGVzLkJ1dHRvblByZXNzZWQpO1xuICAgICAgICBidXR0b25bMV0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uWzBdPy5jbGFzc0xpc3Q/LnJlbW92ZShjb21wU3R5bGVzLkJ1dHRvblByZXNzZWQpO1xuICAgICAgICBidXR0b25bMV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9wcy5jdXJyZW50TGFuZyhidG4udGFyZ2V0LmlkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcnJvd0NsaWNrID0gKGJ0bikgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3ROYW1pbmd9PlxuICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQ2xvc2VCVE59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIPCdlrdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdTZWxlY3R9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwicnVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUlVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJsdlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMQVRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cImVuXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVOR1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5UTmFtZUlucHV0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk5leHRMYW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFycm93Q2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmcmFycjtcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbE9wZW5lcn0+XG4gICAgICAgICAgPHNwYW4+VGVzdCBuYW1lPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfT4rPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3ROYW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})