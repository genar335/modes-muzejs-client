webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  console.log(props.cardContents);\n\n  var textPreviewer = function textPreviewer(text) {\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 90) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      uploadedImg = _useState2[0],\n      setUploadedImg = _useState2[1];\n\n  function handleFileInput(event) {\n    event.preventDefault();\n\n    if (fileInput.current !== null) {\n      var reader = new FileReader();\n      console.log(fileInput.current.files[0]);\n      reader.readAsDataURL(fileInput.current.files[0]);\n      var readFile;\n\n      reader.onload = function () {\n        return setUploadedImg.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uploadedImg).concat([reader.result]));\n      };\n\n      return __jsx(\"img\", {\n        src: readFile,\n        alt: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 14\n        }\n      });\n    }\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: String(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_4__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_4__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" ? props.q_a_TextEntry(props.cardType, props.iterator) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 19\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, \"Placeholder for image upload\"), __jsx(\"img\", {\n    src: uploadedImg,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }))))))), __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.QADescription,\n    onClick: function onClick(e) {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? textPreviewer(props.qna[props.cardType]) : __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(QACard, \"yDjzpaepvSHyu2tI0pUBTGQx02U=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXJkQ29udGVudHMiLCJ0ZXh0UHJldmlld2VyIiwidGV4dCIsImxlbmd0aCIsImNvbXBTdHlsZXMiLCJlbXB0eVRleHQiLCJzbGljZSIsInVwbG9hZGVkSW1nIiwic2V0VXBsb2FkZWRJbWciLCJoYW5kbGVGaWxlSW5wdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZUlucHV0IiwiY3VycmVudCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJyZWFkRmlsZSIsIm9ubG9hZCIsInJlc3VsdCIsInVzZVJlZiIsImNhcmRUeXBlIiwiU3RyaW5nIiwiaXRlcmF0b3IiLCJhZGRDb21wU3R5bGVzIiwiTW9kYWxDb250YWluZXJCRyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaW5wdXRFbmFibGVyIiwiTmFtZUZvcm0iLCJxX2FfVGV4dEVudHJ5IiwiUUFEZXNjcmlwdGlvbiIsImUiLCJxbmEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBVVQ7QUFBQTs7QUFDSixNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBREksa0JBRXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEM7QUFBQSxNQUVHQyxNQUZIO0FBQUEsTUFFV0MsU0FGWDs7QUFHSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQUssQ0FBQ08sWUFBbEI7O0FBQ0EsTUFBTUMsYUFB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QUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFNLEVBQUMsU0FBMUI7QUFBb0MsT0FBRyxFQUFFRyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUpGLEVBS0U7QUFBSyxPQUFHLEVBQUVMLFdBQVY7QUFBdUIsT0FBRyxFQUFDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBSkosQ0FGRixDQUZGLENBTkYsQ0FERixFQTZCRTtBQUFHLGFBQVMsRUFBRUgsc0VBQVUsQ0FBQ2dDLGFBQXpCO0FBQXdDLFdBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU94QyxTQUFTLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osS0FBSyxDQUFDTyxZQUFOLEtBQXVCLE1BQXZCLEdBQ0NDLGFBQWEsQ0FBQ1IsS0FBSyxDQUFDNkMsR0FBTixDQUFVN0MsS0FBSyxDQUFDNkIsUUFBaEIsQ0FBRCxDQURkLEdBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLENBN0JGLENBREY7QUF1Q0QsQ0EzRUQ7O0dBQU05QixNOztLQUFBQSxNO0FBNEVTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUUFDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElRbkEsIFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5pbXBvcnQgeyByZWFkIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xuXG5jb25zdCBRQUNhcmQgPSAocHJvcHM6IHtcbiAgY2FyZFR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCI7XG4gIGNhcmRDb250ZW50czogXCJpbWdcIiB8IFwidGV4dFwiO1xuICAvLyBzYXZlRGF0YTogKGRhdGEpID0+IHZvaWQ7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIHNldFNlbGVjdGVkTGFuZ3VhZ2U6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoKSA9PiB2b2lkO1xuICBxbmE6IElRbkE7XG4gIHRlc3RUeXBlOiBhbnk7XG4gIHFfYV9UZXh0RW50cnk6ICh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudDtcbn0pID0+IHtcbiAgY29uc3QgY2hhckxpbWl0ID0gOTA7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKHByb3BzLmNhcmRDb250ZW50cyk7XG4gIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLmVtcHR5VGV4dH0+VDwvZGl2PjtcbiAgICBpZiAodGV4dC5sZW5ndGggPiBjaGFyTGltaXQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIDkwKSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbdXBsb2FkZWRJbWcsIHNldFVwbG9hZGVkSW1nXSA9IHVzZVN0YXRlKFtdKTtcbiAgZnVuY3Rpb24gaGFuZGxlRmlsZUlucHV0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZpbGVJbnB1dC5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgY29uc29sZS5sb2coZmlsZUlucHV0LmN1cnJlbnQuZmlsZXMhWzBdKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzIVswXSk7XG4gICAgICBsZXQgcmVhZEZpbGU7XG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gc2V0VXBsb2FkZWRJbWcoLi4udXBsb2FkZWRJbWcsIHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmV0dXJuIDxpbWcgc3JjPXtyZWFkRmlsZX0gYWx0PVwiXCIgLz47XG4gICAgfVxuICB9XG4gIGNvbnN0IGZpbGVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlc1twcm9wcy5jYXJkVHlwZV19YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtTdHJpbmcocHJvcHMuaXRlcmF0b3IpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30gJHtcbiAgICAgICAgICAhaXNPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMocHJvcHMuc2V0U2VsZWN0ZWRMYW5ndWFnZSwgcHJvcHMuaW5wdXRFbmFibGVyKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgPyAoXG4gICAgICAgICAgICAgICAgcHJvcHMucV9hX1RleHRFbnRyeShwcm9wcy5jYXJkVHlwZSwgcHJvcHMuaXRlcmF0b3IpXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGaWxlSW5wdXR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIHJlZj17ZmlsZUlucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGxhY2Vob2xkZXIgZm9yIGltYWdlIHVwbG9hZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VwbG9hZGVkSW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUUFEZXNjcmlwdGlvbn0gb25DbGljaz17KGUpID0+IHNldElzT3Blbih0cnVlKX0+XG4gICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiID8gKFxuICAgICAgICAgIHRleHRQcmV2aWV3ZXIocHJvcHMucW5hW3Byb3BzLmNhcmRUeXBlXSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD4rPC9wPlxuICAgICAgICApfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFFBQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})