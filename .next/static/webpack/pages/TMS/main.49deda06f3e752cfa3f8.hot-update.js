webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  console.log(props.cardContents);\n  console.log(\"Test for page contents\", props.pageContents);\n\n  var textPreviewer = function textPreviewer(text) {\n    console.log(\"Hello from text preview\");\n\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_4__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 90) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRef);\n    props.togglePhotoManager(false, \"\".concat(props.cardType, \"_\").concat(props.iterator));\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" ? props.q_a_TextEntry(props.cardType, props.iterator) : __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, \"Hello\")), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? textPreviewer(props.qna[props.cardType]) : __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.SelectedIMGPreview,\n    src: props.pageContents || \"\" // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(QACard, \"VMeQN19rWGYcXw0vt7Ce3nvM2F8=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXJkQ29udGVudHMiLCJwYWdlQ29udGVudHMiLCJ0ZXh0UHJldmlld2VyIiwidGV4dCIsIm1hdGNoIiwiVVJMQ2hlY2tGb3JMb2NhbEhvc3QiLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJ0b2dnbGVQaG90b01hbmFnZXIiLCJjYXJkVHlwZSIsIml0ZXJhdG9yIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImlucHV0RW5hYmxlciIsImN1cnJlbnRMYW5nIiwiTmFtZUZvcm0iLCJxX2FfVGV4dEVudHJ5IiwiZSIsIlNhdmVCdG4iLCJRQURlc2NyaXB0aW9uIiwicW5hIiwiU2VsZWN0ZWRJTUdQcmV2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQWNUO0FBQUE7O0FBQ0osTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURJLGtCQUV3QkMsc0RBQVEsQ0FBQyxLQUFELENBRmhDO0FBQUEsTUFFR0MsTUFGSDtBQUFBLE1BRVdDLFNBRlg7O0FBR0pDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFLLENBQUNPLFlBQWxCO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdC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RUUsV0FBTyxFQUFFLGlCQUFDRixDQUFELEVBQU87QUFDZHBDLFdBQUssQ0FBQ08sWUFBTixLQUF1QixLQUF2QixHQUNJWSxtQkFBbUIsRUFEdkIsR0FFSWYsU0FBUyxDQUFDLElBQUQsQ0FGYjtBQUdELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHSixLQUFLLENBQUNPLFlBQU4sS0FBdUIsTUFBdkIsR0FDQ0UsYUFBYSxDQUFDVCxLQUFLLENBQUN1QyxHQUFOLENBQVV2QyxLQUFLLENBQUNzQixRQUFoQixDQUFELENBRGQsR0FHQztBQUNFLE1BQUUsWUFBS3RCLEtBQUssQ0FBQ3NCLFFBQVgsY0FBdUJ0QixLQUFLLENBQUN1QixRQUE3QixDQURKLENBRUU7QUFGRjtBQUdFLGFBQVMsRUFBRVQsc0VBQVUsQ0FBQzBCLGtCQUh4QjtBQUlFLE9BQUcsRUFBRXhDLEtBQUssQ0FBQ1EsWUFBTixJQUFzQixFQUo3QixDQUtFO0FBTEY7QUFNRSxPQUFHLEVBQUMsVUFOTjtBQU9FLE9BQUcsRUFBRVMsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FoQ0YsQ0FERjtBQXlERCxDQXRHRDs7R0FBTWxCLE07O0tBQUFBLE07QUF1R1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RQUNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVFuQSwgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMsIFNhdmVCdG4gfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcbmltcG9ydCB7IFVSTENoZWNrLCBVUkxDaGVja0ZvckxvY2FsSG9zdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBRQUNhcmQgPSAocHJvcHM6IHtcbiAgY2FyZFR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCI7XG4gIGNhcmRDb250ZW50czogXCJpbWdcIiB8IFwidGV4dFwiO1xuICAvLyBzYXZlRGF0YTogKGRhdGEpID0+IHZvaWQ7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIHNldFNlbGVjdGVkTGFuZ3VhZ2U6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoKSA9PiB2b2lkO1xuICBxbmE6IElRbkE7XG4gIHRlc3RUeXBlOiBhbnk7XG4gIHFfYV9UZXh0RW50cnk6ICh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudDtcbiAgdG9nZ2xlUGhvdG9NYW5hZ2VyOiAodG9nZ2xlOiBib29sZWFuKSA9PiB2b2lkO1xuICBzZXRDdXJyZW50Q2FyZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248dW5kZWZpbmVkPj47XG4gIHBhZ2VDb250ZW50czogc3RyaW5nO1xuICBjdXJyZW50TGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXTtcbn0pID0+IHtcbiAgY29uc3QgY2hhckxpbWl0ID0gOTA7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKHByb3BzLmNhcmRDb250ZW50cyk7XG4gIGNvbnNvbGUubG9nKFwiVGVzdCBmb3IgcGFnZSBjb250ZW50c1wiLCBwcm9wcy5wYWdlQ29udGVudHMpO1xuXG4gIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIHRleHQgcHJldmlld1wiKTtcbiAgICBpZiAodGV4dC5tYXRjaChVUkxDaGVja0ZvckxvY2FsSG9zdCkgIT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gdGhlcmUgZnJvbSBVUkwgY2hlY2tlclwiKTtcbiAgICAgIHJldHVybiBcIlRoZXJlIHdhcyBhbiBpbWFnZSBiZWZvcmVcIjtcbiAgICB9XG4gICAgaWYgKHRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLmVtcHR5VGV4dH0+VDwvZGl2PjtcbiAgICBpZiAodGV4dC5sZW5ndGggPiBjaGFyTGltaXQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIDkwKSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBRQUNhcmRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIllheXl5XCIpO1xuICAvLyB9LCBbUUFDYXJkUmVmLmN1cnJlbnRdKTtcblxuICBjb25zdCBoYW5kbGVDYXJkUmVmZXJlbmNlID0gKCkgPT4ge1xuICAgIHByb3BzLnNldEN1cnJlbnRDYXJkKFFBQ2FyZFJlZik7XG4gICAgcHJvcHMudG9nZ2xlUGhvdG9NYW5hZ2VyKGZhbHNlLCBgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzW3Byb3BzLmNhcmRUeXBlXX1gfT5cbiAgICAgIDxkaXZcbiAgICAgICAgLy8gcmVmPXtRQUNhcmRSZWZ9XG4gICAgICAgIGlkPXtgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1gfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30gJHtcbiAgICAgICAgICAhaXNPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMoXG4gICAgICAgICAgICAgIHByb3BzLnNldFNlbGVjdGVkTGFuZ3VhZ2UsXG4gICAgICAgICAgICAgIHByb3BzLmlucHV0RW5hYmxlcixcbiAgICAgICAgICAgICAgcHJvcHMuY3VycmVudExhbmdcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiID8gKFxuICAgICAgICAgICAgICAgIHByb3BzLnFfYV9UZXh0RW50cnkocHJvcHMuY2FyZFR5cGUsIHByb3BzLml0ZXJhdG9yKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwPkhlbGxvPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5TYXZlQnRufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7U2F2ZUJ0bigpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RQURlc2NyaXB0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIHByb3BzLmNhcmRDb250ZW50cyA9PT0gXCJpbWdcIlxuICAgICAgICAgICAgPyBoYW5kbGVDYXJkUmVmZXJlbmNlKClcbiAgICAgICAgICAgIDogc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2FyZENvbnRlbnRzID09PSBcInRleHRcIiA/IChcbiAgICAgICAgICB0ZXh0UHJldmlld2VyKHByb3BzLnFuYVtwcm9wcy5jYXJkVHlwZV0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgaWQ9e2Ake3Byb3BzLmNhcmRUeXBlfV8ke3Byb3BzLml0ZXJhdG9yfWB9XG4gICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IGNvbnNvbGUubG9nKFwiWUF5eXlcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuU2VsZWN0ZWRJTUdQcmV2aWV3fVxuICAgICAgICAgICAgc3JjPXtwcm9wcy5wYWdlQ29udGVudHMgfHwgXCJcIn1cbiAgICAgICAgICAgIC8vIHNyYz17cHJvcHMucGFnZUNvbnRlbnRzLm1hdGNoKFVSTENoZWNrKSA/IHByb3BzLnBhZ2VDb250ZW50cyA6IFwiXCJ9XG4gICAgICAgICAgICBhbHQ9XCJObyBpbWFnZVwiXG4gICAgICAgICAgICByZWY9e1FBQ2FyZFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUUFDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})