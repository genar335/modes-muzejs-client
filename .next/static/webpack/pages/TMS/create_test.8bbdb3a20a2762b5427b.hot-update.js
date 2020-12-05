webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // console.log(props.cardContents);\n  // console.log(\"Test for page contents\", props.pageContents);\n\n\n  var textPreviewer = function textPreviewer(text) {\n    // console.log(\"Hello from text preview\");\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_4__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 65) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRef); // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);\n  }; //! Image upload portion\n\n\n  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var handleFileinput = function handleFileinput(event) {\n    event.preventDefault();\n\n    if (fileInputRef.current) {\n      fileInputRef.current;\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" && props.q_a_TextEntry(props.cardType, props.iterator)), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_3__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textInACard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna[props.cardType])) : __jsx(\"form\", {\n    onSubmit: handleFileinput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInputRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator, \"_page-\").concat(props.pageNumber) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.SelectedIMGPreview,\n    src: props.pageContents || \"\" // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(QACard, \"GM68oj9AWkhSkH2lxdr+hsvl67E=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibWF0Y2giLCJVUkxDaGVja0ZvckxvY2FsSG9zdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVGaWxlaW5wdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNhcmRUeXBlIiwiaXRlcmF0b3IiLCJhZGRDb21wU3R5bGVzIiwiTW9kYWxDb250YWluZXJCRyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaW5wdXRFbmFibGVyIiwiY3VycmVudExhbmciLCJOYW1lRm9ybSIsImNhcmRDb250ZW50cyIsInFfYV9UZXh0RW50cnkiLCJlIiwiU2F2ZUJ0biIsIlFBRGVzY3JpcHRpb24iLCJ0ZXh0SW5BQ2FyZCIsInFuYSIsInBhZ2VOdW1iZXIiLCJTZWxlY3RlZElNR1ByZXZpZXciLCJwYWdlQ29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBZVQ7QUFBQTs7QUFDSixNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBREksa0JBRXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEM7QUFBQSxNQUVHQyxNQUZIO0FBQUEsTUFFV0MsU0FGWCxpQkFHSjtBQUNBOzs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBa0I7QUFDdEM7QUFDQSxRQUFJQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsK0RBQVgsTUFBcUMsSUFBekMsRUFBK0M7QUFDN0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0EsYUFBTywyQkFBUDtBQUNEOztBQUNELFFBQUlKLElBQUksQ0FBQ0ssTUFBTCxHQUFjLENBQWxCLEVBQXFCLE9BQU87QUFBSyxlQUFTLEVBQUVDLHNFQUFVLENBQUNDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDs7QUFDckIsUUFBSVAsSUFBSSxDQUFDSyxNQUFMLEdBQWNWLFNBQWxCLEVBQTZCO0FBQzNCLGFBQU9LLElBQUksQ0FBQ1EsS0FBTCxDQUFXLENBQVgsRUFBYyxFQUFkLElBQW9CLEtBQTNCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT1IsSUFBUDtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxNQUFNUyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QixDQXBCSSxDQXNCSjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDakIsU0FBSyxDQUFDa0IsY0FBTixDQUFxQkgsU0FBckIsRUFEZ0MsQ0FFaEM7QUFDRCxHQUhELENBMUJJLENBK0JKOzs7QUFDQSxNQUFNSSxZQUFZLEdBQUdILG9EQUFNLENBQUMsSUFBRCxDQUEzQjs7QUFDQSxNQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBNkM7QUFDbkVBLFNBQUssQ0FBQ0MsY0FBTjs7QUFDQSxRQUFJSCxZQUFZLENBQUNJLE9BQWpCLEVBQTBCO0FBQ3hCSixrQkFBWSxDQUFDSSxPQUFiO0FBQ0Q7QUFDRixHQUxEOztBQU9BLFNBQ0U7QUFBSyxhQUFTLFlBQUtYLHNFQUFVLENBQUNaLEtBQUssQ0FBQ3dCLFFBQVAsQ0FBZixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFO0FBQ0EsTUFBRSxZQUFLeEIsS0FBSyxDQUFDd0IsUUFBWCxjQUF1QnhCLEtBQUssQ0FBQ3lCLFFBQTdCLENBRko7QUFHRSxhQUFTLFlBQUtDLG9FQUFhLENBQUNDLGdCQUFuQixjQUNQLENBQUN4QixNQUFELEdBQVV1QixvRUFBYSxDQUFDRSxNQUF4QixHQUFpQyxJQUQxQixDQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFLLGFBQVMsRUFBRUYsb0VBQWEsQ0FBQ0csY0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywyREFBUSxDQUFDMUIsU0FBRCxDQURYLEVBRUU7QUFBSyxhQUFTLEVBQUVzQixvRUFBYSxDQUFDSyxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLHNFQUFtQixDQUNsQmhDLEtBQUssQ0FBQ2lDLG1CQURZLEVBRWxCakMsS0FBSyxDQUFDa0MsWUFGWSxFQUdsQmxDLEtBQUssQ0FBQ21DLFdBSFksQ0FEdEIsRUFNRTtBQUFLLGFBQVMsRUFBRVQsb0VBQWEsQ0FBQ1UsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHcEMsS0FBSyxDQUFDcUMsWUFBTixLQUF1QixNQUF2QixJQUNDckMsS0FBSyxDQUFDc0MsYUFBTixDQUFvQnRDLEtBQUssQ0FBQ3dCLFFBQTFCLEVBQW9DeEIsS0FBSyxDQUFDeUIsUUFBMUMsQ0FGSixDQU5GLEVBVUU7QUFDRSxXQUFPLEVBQUUsaUJBQUNjLENBQUQ7QUFBQSxhQUFPbkMsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBaEI7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFFdUIsb0VBQWEsQ0FBQ2MsT0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHQSwwREFBTyxFQUpWLENBVkYsQ0FGRixDQVBGLENBREYsRUE2QkU7QUFDRSxhQUFTLEVBQUU1QixzRUFBVSxDQUFDNkIsYUFEeEI7QUFFRSxXQUFPLEVBQUUsaUJBQUNGLENBQUQsRUFBTztBQUNkdkMsV0FBSyxDQUFDcUMsWUFBTixLQUF1QixLQUF2QixHQUNJcEIsbUJBQW1CLEVBRHZCLEdBRUliLFNBQVMsQ0FBQyxJQUFELENBRmI7QUFHRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR0osS0FBSyxDQUFDcUMsWUFBTixLQUF1QixNQUF2QixHQUNDO0FBQUcsYUFBUyxFQUFFekIsc0VBQVUsQ0FBQzhCLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JDLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDMkMsR0FBTixDQUFVM0MsS0FBSyxDQUFDd0IsUUFBaEIsQ0FBRCxDQURoQixDQURELEdBS0M7QUFBTSxZQUFRLEVBQUVKLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFVBQU0sRUFBQyxTQUExQjtBQUFvQyxPQUFHLEVBQUVELFlBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsTUFBRSxZQUFLbkIsS0FBSyxDQUFDd0IsUUFBWCxjQUF1QnhCLEtBQUssQ0FBQ3lCLFFBQTdCLG1CQUE4Q3pCLEtBQUssQ0FBQzRDLFVBQXBELENBREosQ0FFRTtBQUZGO0FBR0UsYUFBUyxFQUFFaEMsc0VBQVUsQ0FBQ2lDLGtCQUh4QjtBQUlFLE9BQUcsRUFBRTdDLEtBQUssQ0FBQzhDLFlBQU4sSUFBc0IsRUFKN0IsQ0FLRTtBQUxGO0FBTUUsT0FBRyxFQUFDLFVBTk47QUFPRSxPQUFHLEVBQUUvQixTQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWJKLENBN0JGLENBREY7QUEyREQsQ0FsSEQ7O0dBQU1oQixNOztLQUFBQSxNO0FBbUhTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUUFDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElRbkEsIFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzLCBTYXZlQnRuIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5pbXBvcnQgeyBVUkxDaGVjaywgVVJMQ2hlY2tGb3JMb2NhbEhvc3QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgUUFDYXJkID0gKHByb3BzOiB7XG4gIGNhcmRUeXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiO1xuICBjYXJkQ29udGVudHM6IFwiaW1nXCIgfCBcInRleHRcIjtcbiAgLy8gc2F2ZURhdGE6IChkYXRhKSA9PiB2b2lkO1xuICBpdGVyYXRvcjogbnVtYmVyO1xuICBzZXRTZWxlY3RlZExhbmd1YWdlOiAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQ7XG4gIGlucHV0RW5hYmxlcjogKCkgPT4gdm9pZDtcbiAgcW5hOiBJUW5BO1xuICB0ZXN0VHlwZTogYW55O1xuICBxX2FfVGV4dEVudHJ5OiAodHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIiwgaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQ7XG4gIHRvZ2dsZVBob3RvTWFuYWdlcjogKHRvZ2dsZTogYm9vbGVhbiwgY2FyZElEOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldEN1cnJlbnRDYXJkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx1bmRlZmluZWQ+PjtcbiAgcGFnZUNvbnRlbnRzOiBzdHJpbmc7XG4gIGN1cnJlbnRMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdO1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IGNoYXJMaW1pdCA9IDkwO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5jYXJkQ29udGVudHMpO1xuICAvLyBjb25zb2xlLmxvZyhcIlRlc3QgZm9yIHBhZ2UgY29udGVudHNcIiwgcHJvcHMucGFnZUNvbnRlbnRzKTtcblxuICBjb25zdCB0ZXh0UHJldmlld2VyID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSB0ZXh0IHByZXZpZXdcIik7XG4gICAgaWYgKHRleHQubWF0Y2goVVJMQ2hlY2tGb3JMb2NhbEhvc3QpICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIHRoZXJlIGZyb20gVVJMIGNoZWNrZXJcIik7XG4gICAgICByZXR1cm4gXCJUaGVyZSB3YXMgYW4gaW1hZ2UgYmVmb3JlXCI7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA8IDEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5lbXB0eVRleHR9PlQ8L2Rpdj47XG4gICAgaWYgKHRleHQubGVuZ3RoID4gY2hhckxpbWl0KSB7XG4gICAgICByZXR1cm4gdGV4dC5zbGljZSgwLCA2NSkgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUUFDYXJkUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJZYXl5eVwiKTtcbiAgLy8gfSwgW1FBQ2FyZFJlZi5jdXJyZW50XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2FyZFJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRDdXJyZW50Q2FyZChRQUNhcmRSZWYpO1xuICAgIC8vIHByb3BzLnRvZ2dsZVBob3RvTWFuYWdlcihmYWxzZSwgYCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9YCk7XG4gIH07XG5cbiAgLy8hIEltYWdlIHVwbG9hZCBwb3J0aW9uXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBoYW5kbGVGaWxlaW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXNbcHJvcHMuY2FyZFR5cGVdfWB9PlxuICAgICAgPGRpdlxuICAgICAgICAvLyByZWY9e1FBQ2FyZFJlZn1cbiAgICAgICAgaWQ9e2Ake3Byb3BzLmNhcmRUeXBlfV8ke3Byb3BzLml0ZXJhdG9yfWB9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfSAke1xuICAgICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICB7Y2xvc2VCdG4oc2V0SXNPcGVuKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbH0+XG4gICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhcbiAgICAgICAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRMYW5ndWFnZSxcbiAgICAgICAgICAgICAgcHJvcHMuaW5wdXRFbmFibGVyLFxuICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50TGFuZ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgJiZcbiAgICAgICAgICAgICAgICBwcm9wcy5xX2FfVGV4dEVudHJ5KHByb3BzLmNhcmRUeXBlLCBwcm9wcy5pdGVyYXRvcil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLlNhdmVCdG59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtTYXZlQnRuKCl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlFBRGVzY3JpcHRpb259XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRlbnRzID09PSBcImltZ1wiXG4gICAgICAgICAgICA/IGhhbmRsZUNhcmRSZWZlcmVuY2UoKVxuICAgICAgICAgICAgOiBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y29tcFN0eWxlcy50ZXh0SW5BQ2FyZH0+XG4gICAgICAgICAgICB7dGV4dFByZXZpZXdlcihwcm9wcy5xbmFbcHJvcHMuY2FyZFR5cGVdKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZpbGVpbnB1dH0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgcmVmPXtmaWxlSW5wdXRSZWZ9IC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGlkPXtgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1fcGFnZS0ke3Byb3BzLnBhZ2VOdW1iZXJ9YH1cbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiBjb25zb2xlLmxvZyhcIllBeXl5XCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuU2VsZWN0ZWRJTUdQcmV2aWV3fVxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLnBhZ2VDb250ZW50cyB8fCBcIlwifVxuICAgICAgICAgICAgICAvLyBzcmM9e3Byb3BzLnBhZ2VDb250ZW50cy5tYXRjaChVUkxDaGVjaykgPyBwcm9wcy5wYWdlQ29udGVudHMgOiBcIlwifVxuICAgICAgICAgICAgICBhbHQ9XCJObyBpbWFnZVwiXG4gICAgICAgICAgICAgIHJlZj17UUFDYXJkUmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBRQUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})