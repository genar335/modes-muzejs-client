webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  console.log(props.cardContents);\n\n  var textPreviewer = function textPreviewer(text) {\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 90) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  function fileReading(file) {\n    var Reader = new FileReader();\n    Reader.onload = handleFile;\n    Reader.readAsDataURL(file);\n  }\n\n  function handleFile(e) {\n    console.log(e.target.result.name);\n    setUploadedImg(e.target.result);\n  }\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      uploadedImg = _useState2[0],\n      setUploadedImg = _useState2[1];\n\n  function handleFileInput(_x) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var i, _fileInput$current$fi;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n\n              if (fileInput.current !== null) {\n                for (i = 0; i < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length); i++) {\n                  fileReading(fileInput.current.files[i]);\n                }\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: String(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" ? props.q_a_TextEntry(props.cardType, props.iterator) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }, \"Placeholder for image upload\"), __jsx(\"img\", {\n    src: uploadedImg,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }))))))), __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QADescription,\n    onClick: function onClick(e) {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? textPreviewer(props.qna[props.cardType]) : __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(QACard, \"RHxPmEDCBgMWEPznHNkXItaYhms=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXJkQ29udGVudHMiLCJ0ZXh0UHJldmlld2VyIiwidGV4dCIsImxlbmd0aCIsImNvbXBTdHlsZXMiLCJlbXB0eVRleHQiLCJzbGljZSIsImZpbGVSZWFkaW5nIiwiZmlsZSIsIlJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJoYW5kbGVGaWxlIiwicmVhZEFzRGF0YVVSTCIsImUiLCJ0YXJnZXQiLCJyZXN1bHQiLCJuYW1lIiwic2V0VXBsb2FkZWRJbWciLCJ1cGxvYWRlZEltZyIsImhhbmRsZUZpbGVJbnB1dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWxlSW5wdXQiLCJjdXJyZW50IiwiaSIsImZpbGVzIiwidXNlUmVmIiwiY2FyZFR5cGUiLCJTdHJpbmciLCJpdGVyYXRvciIsImFkZENvbXBTdHlsZXMiLCJNb2RhbENvbnRhaW5lckJHIiwiSGlkZGVuIiwiTW9kYWxDb250YWluZXIiLCJjbG9zZUJ0biIsIk1vZGFsIiwiQ3JlYXRlTGFuZ1N3aXRjaGVycyIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJpbnB1dEVuYWJsZXIiLCJOYW1lRm9ybSIsInFfYV9UZXh0RW50cnkiLCJRQURlc2NyaXB0aW9uIiwicW5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQVVUO0FBQUE7O0FBQ0osTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURJLGtCQUV3QkMsc0RBQVEsQ0FBQyxLQUFELENBRmhDO0FBQUEsTUFFR0MsTUFGSDtBQUFBLE1BRVdDLFNBRlg7O0FBR0pDLFNBQU8sQ0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkosQ0FsQ0YsQ0FERjtBQTRDRCxDQXZGRDs7R0FBTXBDLE07O0tBQUFBLE07QUF3RlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RQUNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVFuQSwgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMgfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcbmltcG9ydCB7IHJlYWQgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XG5cbmNvbnN0IFFBQ2FyZCA9IChwcm9wczoge1xuICBjYXJkVHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIjtcbiAgY2FyZENvbnRlbnRzOiBcImltZ1wiIHwgXCJ0ZXh0XCI7XG4gIC8vIHNhdmVEYXRhOiAoZGF0YSkgPT4gdm9pZDtcbiAgaXRlcmF0b3I6IG51bWJlcjtcbiAgc2V0U2VsZWN0ZWRMYW5ndWFnZTogKGNob29zZUxhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICBpbnB1dEVuYWJsZXI6ICgpID0+IHZvaWQ7XG4gIHFuYTogSVFuQTtcbiAgdGVzdFR5cGU6IGFueTtcbiAgcV9hX1RleHRFbnRyeTogKHR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCIsIGlkOiBudW1iZXIpID0+IEpTWC5FbGVtZW50O1xufSkgPT4ge1xuICBjb25zdCBjaGFyTGltaXQgPSA5MDtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2cocHJvcHMuY2FyZENvbnRlbnRzKTtcbiAgY29uc3QgdGV4dFByZXZpZXdlciA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGV4dC5sZW5ndGggPCAxKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuZW1wdHlUZXh0fT5UPC9kaXY+O1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGNoYXJMaW1pdCkge1xuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgOTApICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkaW5nKGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIFJlYWRlci5vbmxvYWQgPSBoYW5kbGVGaWxlO1xuICAgIFJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUoZTogUHJvZ3Jlc3NFdmVudDxGaWxlUmVhZGVyPikge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0IS5yZXN1bHQhLm5hbWUpO1xuICAgIHNldFVwbG9hZGVkSW1nKGUudGFyZ2V0IS5yZXN1bHQpO1xuICB9XG5cbiAgY29uc3QgW3VwbG9hZGVkSW1nLCBzZXRVcGxvYWRlZEltZ10gPSB1c2VTdGF0ZTxCbG9iPigpO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlSW5wdXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZmlsZUlucHV0LmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUlucHV0LmN1cnJlbnQuZmlsZXM/Lmxlbmd0aDsgaSsrKVxuICAgICAgICBmaWxlUmVhZGluZyhmaWxlSW5wdXQuY3VycmVudCEuZmlsZXNbaV0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlc1twcm9wcy5jYXJkVHlwZV19YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtTdHJpbmcocHJvcHMuaXRlcmF0b3IpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30gJHtcbiAgICAgICAgICAhaXNPcGVuID8gYWRkQ29tcFN0eWxlcy5IaWRkZW4gOiBudWxsXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAge2Nsb3NlQnRuKHNldElzT3Blbil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAge0NyZWF0ZUxhbmdTd2l0Y2hlcnMocHJvcHMuc2V0U2VsZWN0ZWRMYW5ndWFnZSwgcHJvcHMuaW5wdXRFbmFibGVyKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgPyAoXG4gICAgICAgICAgICAgICAgcHJvcHMucV9hX1RleHRFbnRyeShwcm9wcy5jYXJkVHlwZSwgcHJvcHMuaXRlcmF0b3IpXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGaWxlSW5wdXR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QbGFjZWhvbGRlciBmb3IgaW1hZ2UgdXBsb2FkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXBsb2FkZWRJbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5RQURlc2NyaXB0aW9ufSBvbkNsaWNrPXsoZSkgPT4gc2V0SXNPcGVuKHRydWUpfT5cbiAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgPyAoXG4gICAgICAgICAgdGV4dFByZXZpZXdlcihwcm9wcy5xbmFbcHJvcHMuY2FyZFR5cGVdKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPis8L3A+XG4gICAgICAgICl9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUUFDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})