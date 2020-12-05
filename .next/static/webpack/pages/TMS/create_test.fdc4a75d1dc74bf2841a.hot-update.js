webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // console.log(props.cardContents);\n  // console.log(\"Test for page contents\", props.pageContents);\n\n\n  var textPreviewer = function textPreviewer(text) {\n    // console.log(\"Hello from text preview\");\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_4__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 70) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRef);\n    props.togglePhotoManager(false, \"\".concat(props.cardType, \"_\").concat(props.iterator));\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" && props.q_a_TextEntry(props.cardType, props.iterator)), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textInACard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna[props.cardType])) : __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator, \"_page-\").concat(props.pageNumber) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.SelectedIMGPreview,\n    src: props.pageContents || \"\" // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(QACard, \"VMeQN19rWGYcXw0vt7Ce3nvM2F8=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibWF0Y2giLCJVUkxDaGVja0ZvckxvY2FsSG9zdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJ0b2dnbGVQaG90b01hbmFnZXIiLCJjYXJkVHlwZSIsIml0ZXJhdG9yIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImlucHV0RW5hYmxlciIsImN1cnJlbnRMYW5nIiwiTmFtZUZvcm0iLCJjYXJkQ29udGVudHMiLCJxX2FfVGV4dEVudHJ5IiwiZSIsIlNhdmVCdG4iLCJRQURlc2NyaXB0aW9uIiwidGV4dEluQUNhcmQiLCJxbmEiLCJwYWdlTnVtYmVyIiwiU2VsZWN0ZWRJTUdQcmV2aWV3IiwicGFnZUNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQWVUO0FBQUE7O0FBQ0osTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURJLGtCQUV3QkMsc0RBQVEsQ0FBQyxLQUFELENBRmhDO0FBQUEsTUFFR0MsTUFGSDtBQUFBLE1BRVdDLFNBRlgsaUJBR0o7QUFDQTs7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixD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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHSixLQUFLLENBQUNpQyxZQUFOLEtBQXVCLE1BQXZCLEdBQ0M7QUFBRyxhQUFTLEVBQUVyQixzRUFBVSxDQUFDMEIsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakMsYUFBYSxDQUFDTCxLQUFLLENBQUN1QyxHQUFOLENBQVV2QyxLQUFLLENBQUNvQixRQUFoQixDQUFELENBRGhCLENBREQsR0FLQztBQUNFLE1BQUUsWUFBS3BCLEtBQUssQ0FBQ29CLFFBQVgsY0FBdUJwQixLQUFLLENBQUNxQixRQUE3QixtQkFBOENyQixLQUFLLENBQUN3QyxVQUFwRCxDQURKLENBRUU7QUFGRjtBQUdFLGFBQVMsRUFBRTVCLHNFQUFVLENBQUM2QixrQkFIeEI7QUFJRSxPQUFHLEVBQUV6QyxLQUFLLENBQUMwQyxZQUFOLElBQXNCLEVBSjdCLENBS0U7QUFMRjtBQU1FLE9BQUcsRUFBQyxVQU5OO0FBT0UsT0FBRyxFQUFFM0IsU0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosQ0E3QkYsQ0FERjtBQXdERCxDQXRHRDs7R0FBTWhCLE07O0tBQUFBLE07QUF1R1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RQUNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVFuQSwgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMsIFNhdmVCdG4gfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcbmltcG9ydCB7IFVSTENoZWNrLCBVUkxDaGVja0ZvckxvY2FsSG9zdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBRQUNhcmQgPSAocHJvcHM6IHtcbiAgY2FyZFR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCI7XG4gIGNhcmRDb250ZW50czogXCJpbWdcIiB8IFwidGV4dFwiO1xuICAvLyBzYXZlRGF0YTogKGRhdGEpID0+IHZvaWQ7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIHNldFNlbGVjdGVkTGFuZ3VhZ2U6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoKSA9PiB2b2lkO1xuICBxbmE6IElRbkE7XG4gIHRlc3RUeXBlOiBhbnk7XG4gIHFfYV9UZXh0RW50cnk6ICh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudDtcbiAgdG9nZ2xlUGhvdG9NYW5hZ2VyOiAodG9nZ2xlOiBib29sZWFuLCBjYXJkSUQ6IHN0cmluZykgPT4gdm9pZDtcbiAgc2V0Q3VycmVudENhcmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHVuZGVmaW5lZD4+O1xuICBwYWdlQ29udGVudHM6IHN0cmluZztcbiAgY3VycmVudExhbmc6IFRMYW5nT3B0aW9uW1widmFsdWVcIl07XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3QgY2hhckxpbWl0ID0gOTA7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLmNhcmRDb250ZW50cyk7XG4gIC8vIGNvbnNvbGUubG9nKFwiVGVzdCBmb3IgcGFnZSBjb250ZW50c1wiLCBwcm9wcy5wYWdlQ29udGVudHMpO1xuXG4gIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIHRleHQgcHJldmlld1wiKTtcbiAgICBpZiAodGV4dC5tYXRjaChVUkxDaGVja0ZvckxvY2FsSG9zdCkgIT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gdGhlcmUgZnJvbSBVUkwgY2hlY2tlclwiKTtcbiAgICAgIHJldHVybiBcIlRoZXJlIHdhcyBhbiBpbWFnZSBiZWZvcmVcIjtcbiAgICB9XG4gICAgaWYgKHRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLmVtcHR5VGV4dH0+VDwvZGl2PjtcbiAgICBpZiAodGV4dC5sZW5ndGggPiBjaGFyTGltaXQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIDcwKSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBRQUNhcmRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIllheXl5XCIpO1xuICAvLyB9LCBbUUFDYXJkUmVmLmN1cnJlbnRdKTtcblxuICBjb25zdCBoYW5kbGVDYXJkUmVmZXJlbmNlID0gKCkgPT4ge1xuICAgIHByb3BzLnNldEN1cnJlbnRDYXJkKFFBQ2FyZFJlZik7XG4gICAgcHJvcHMudG9nZ2xlUGhvdG9NYW5hZ2VyKGZhbHNlLCBgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGVzW3Byb3BzLmNhcmRUeXBlXX1gfT5cbiAgICAgIDxkaXZcbiAgICAgICAgLy8gcmVmPXtRQUNhcmRSZWZ9XG4gICAgICAgIGlkPXtgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1gfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30gJHtcbiAgICAgICAgICAhaXNPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMoXG4gICAgICAgICAgICAgIHByb3BzLnNldFNlbGVjdGVkTGFuZ3VhZ2UsXG4gICAgICAgICAgICAgIHByb3BzLmlucHV0RW5hYmxlcixcbiAgICAgICAgICAgICAgcHJvcHMuY3VycmVudExhbmdcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiICYmXG4gICAgICAgICAgICAgICAgcHJvcHMucV9hX1RleHRFbnRyeShwcm9wcy5jYXJkVHlwZSwgcHJvcHMuaXRlcmF0b3IpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5TYXZlQnRufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7U2F2ZUJ0bigpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RQURlc2NyaXB0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIHByb3BzLmNhcmRDb250ZW50cyA9PT0gXCJpbWdcIlxuICAgICAgICAgICAgPyBoYW5kbGVDYXJkUmVmZXJlbmNlKClcbiAgICAgICAgICAgIDogc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2FyZENvbnRlbnRzID09PSBcInRleHRcIiA/IChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NvbXBTdHlsZXMudGV4dEluQUNhcmR9PlxuICAgICAgICAgICAge3RleHRQcmV2aWV3ZXIocHJvcHMucW5hW3Byb3BzLmNhcmRUeXBlXSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGlkPXtgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1fcGFnZS0ke3Byb3BzLnBhZ2VOdW1iZXJ9YH1cbiAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gY29uc29sZS5sb2coXCJZQXl5eVwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5TZWxlY3RlZElNR1ByZXZpZXd9XG4gICAgICAgICAgICBzcmM9e3Byb3BzLnBhZ2VDb250ZW50cyB8fCBcIlwifVxuICAgICAgICAgICAgLy8gc3JjPXtwcm9wcy5wYWdlQ29udGVudHMubWF0Y2goVVJMQ2hlY2spID8gcHJvcHMucGFnZUNvbnRlbnRzIDogXCJcIn1cbiAgICAgICAgICAgIGFsdD1cIk5vIGltYWdlXCJcbiAgICAgICAgICAgIHJlZj17UUFDYXJkUmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBRQUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})