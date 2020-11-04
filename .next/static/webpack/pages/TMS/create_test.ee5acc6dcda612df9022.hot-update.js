webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  console.log(props.cardContents);\n\n  var textPreviewer = function textPreviewer(text) {\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 90) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  function fileReading(file) {\n    var Reader = new FileReader();\n    Reader.onload = handleFile;\n    Reader.readAsDataURL(file);\n  }\n\n  function handleFile(e) {\n    setUploadedImg(e.current.result);\n  }\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      uploadedImg = _useState2[0],\n      setUploadedImg = _useState2[1];\n\n  function handleFileInput(_x) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n\n              if (fileInput.current !== null) {\n                fileReading(event.target.files[0]);\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: String(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" ? props.q_a_TextEntry(props.cardType, props.iterator) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 19\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 21\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }, \"Placeholder for image upload\"), __jsx(\"img\", {\n    src: uploadedImg,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 21\n    }\n  }))))))), __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QADescription,\n    onClick: function onClick(e) {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? textPreviewer(props.qna[props.cardType]) : __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(QACard, \"yDjzpaepvSHyu2tI0pUBTGQx02U=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXJkQ29udGVudHMiLCJ0ZXh0UHJldmlld2VyIiwidGV4dCIsImxlbmd0aCIsImNvbXBTdHlsZXMiLCJlbXB0eVRleHQiLCJzbGljZSIsImZpbGVSZWFkaW5nIiwiZmlsZSIsIlJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJoYW5kbGVGaWxlIiwicmVhZEFzRGF0YVVSTCIsImUiLCJzZXRVcGxvYWRlZEltZyIsImN1cnJlbnQiLCJyZXN1bHQiLCJ1cGxvYWRlZEltZyIsImhhbmRsZUZpbGVJbnB1dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWxlSW5wdXQiLCJ0YXJnZXQiLCJmaWxlcyIsInVzZVJlZiIsImNhcmRUeXBlIiwiU3RyaW5nIiwiaXRlcmF0b3IiLCJhZGRDb21wU3R5bGVzIiwiTW9kYWxDb250YWluZXJCRyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaW5wdXRFbmFibGVyIiwiTmFtZUZvcm0iLCJxX2FfVGV4dEVudHJ5IiwiUUFEZXNjcmlwdGlvbiIsInFuYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFVVDtBQUFBOztBQUNKLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFESSxrQkFFd0JDLHNEQUFRLENBQUMsS0FBRCxDQUZoQztBQUFBLE1BRUdDLE1BRkg7QUFBQSxNQUVXQyxTQUZYOztBQUdKQyxTQUFPLENBQUNDLEdBQVIsQ0FB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QTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFVBQU0sRUFBQyxTQUExQjtBQUFvQyxPQUFHLEVBQUVHLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBSkYsRUFLRTtBQUFLLE9BQUcsRUFBRUosV0FBVjtBQUF1QixPQUFHLEVBQUMsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FKSixDQUZGLENBRkYsQ0FORixDQURGLEVBNkJFO0FBQUcsYUFBUyxFQUFFZCxzRUFBVSxDQUFDb0MsYUFBekI7QUFBd0MsV0FBTyxFQUFFLGlCQUFDMUIsQ0FBRDtBQUFBLGFBQU9qQixTQUFTLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osS0FBSyxDQUFDTyxZQUFOLEtBQXVCLE1BQXZCLEdBQ0NDLGFBQWEsQ0FBQ1IsS0FBSyxDQUFDZ0QsR0FBTixDQUFVaEQsS0FBSyxDQUFDaUMsUUFBaEIsQ0FBRCxDQURkLEdBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLENBN0JGLENBREY7QUF1Q0QsQ0FoRkQ7O0dBQU1sQyxNOztLQUFBQSxNO0FBaUZTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUUFDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElRbkEsIFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdFByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBhZGRDb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IGNsb3NlQnRuLCBDcmVhdGVMYW5nU3dpdGNoZXJzIH0gZnJvbSBcIi4vVGVzdE5hbWVyXCI7XG5pbXBvcnQgeyByZWFkIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xuXG5jb25zdCBRQUNhcmQgPSAocHJvcHM6IHtcbiAgY2FyZFR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCI7XG4gIGNhcmRDb250ZW50czogXCJpbWdcIiB8IFwidGV4dFwiO1xuICAvLyBzYXZlRGF0YTogKGRhdGEpID0+IHZvaWQ7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIHNldFNlbGVjdGVkTGFuZ3VhZ2U6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoKSA9PiB2b2lkO1xuICBxbmE6IElRbkE7XG4gIHRlc3RUeXBlOiBhbnk7XG4gIHFfYV9UZXh0RW50cnk6ICh0eXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiLCBpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudDtcbn0pID0+IHtcbiAgY29uc3QgY2hhckxpbWl0ID0gOTA7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKHByb3BzLmNhcmRDb250ZW50cyk7XG4gIGNvbnN0IHRleHRQcmV2aWV3ZXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLmVtcHR5VGV4dH0+VDwvZGl2PjtcbiAgICBpZiAodGV4dC5sZW5ndGggPiBjaGFyTGltaXQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIDkwKSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBmaWxlUmVhZGluZyhmaWxlKSB7XG4gICAgY29uc3QgUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBSZWFkZXIub25sb2FkID0gaGFuZGxlRmlsZVxuICAgIFJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShlKSB7XG4gICAgc2V0VXBsb2FkZWRJbWcoZS5jdXJyZW50LnJlc3VsdClcbiAgfVxuXG4gIGNvbnN0IFt1cGxvYWRlZEltZywgc2V0VXBsb2FkZWRJbWddID0gdXNlU3RhdGUoW10pO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlSW5wdXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZmlsZUlucHV0LmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGZpbGVSZWFkaW5nKGV2ZW50LnRhcmdldC5maWxlc1swXSlcbiAgICAgIFxuICAgIH1cbiAgfVxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXNbcHJvcHMuY2FyZFR5cGVdfWB9PlxuICAgICAgPGRpdlxuICAgICAgICBpZD17U3RyaW5nKHByb3BzLml0ZXJhdG9yKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgIWlzT3BlbiA/IGFkZENvbXBTdHlsZXMuSGlkZGVuIDogbnVsbFxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgIHtjbG9zZUJ0bihzZXRJc09wZW4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgIHtDcmVhdGVMYW5nU3dpdGNoZXJzKHByb3BzLnNldFNlbGVjdGVkTGFuZ3VhZ2UsIHByb3BzLmlucHV0RW5hYmxlcil9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiID8gKFxuICAgICAgICAgICAgICAgIHByb3BzLnFfYV9UZXh0RW50cnkocHJvcHMuY2FyZFR5cGUsIHByb3BzLml0ZXJhdG9yKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRmlsZUlucHV0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBpbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiByZWY9e2ZpbGVJbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBsYWNlaG9sZGVyIGZvciBpbWFnZSB1cGxvYWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cGxvYWRlZEltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlFBRGVzY3JpcHRpb259IG9uQ2xpY2s9eyhlKSA9PiBzZXRJc09wZW4odHJ1ZSl9PlxuICAgICAgICB7cHJvcHMuY2FyZENvbnRlbnRzID09PSBcInRleHRcIiA/IChcbiAgICAgICAgICB0ZXh0UHJldmlld2VyKHByb3BzLnFuYVtwcm9wcy5jYXJkVHlwZV0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+KzwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBRQUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})