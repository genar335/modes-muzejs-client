webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var _PhotoManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PhotoManager */ \"./components/PhotoManager.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // console.log(props.cardContents);\n  // console.log(\"Test for page contents\", props.pageContents);\n\n\n  var textPreviewer = function textPreviewer(text) {\n    // console.log(\"Hello from text preview\");\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_6__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 65) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRefIMG = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRefIMG); // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);\n  }; //! Image upload portion\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var readAnImage = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageToBeRead) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem occured when reading the file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(imageToBeRead);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function readAnImage(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleFileinput = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n      var _fileInputRef$current;\n\n      var tmp, chosenFile, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmp = [];\n              event.preventDefault();\n              console.log(fileInputRef.current.files[0]);\n\n              if (!(((_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.files) !== null)) {\n                _context2.next = 20;\n                break;\n              }\n\n              chosenFile = fileInputRef.current.files[0];\n\n              if (!fileInputRef.current) {\n                _context2.next = 18;\n                break;\n              }\n\n              _context2.prev = 6;\n              _context2.next = 9;\n              return readAnImage(chosenFile);\n\n            case 9:\n              fileContents = _context2.sent;\n              console.log(fileContents); // QACardRefIMG.current?.src = fileContents;\n\n              console.log(QACardRefIMG.current.src);\n              tmp.push(fileContents);\n              _context2.next = 18;\n              break;\n\n            case 15:\n              _context2.prev = 15;\n              _context2.t0 = _context2[\"catch\"](6);\n              alert(\"There was an error reading the file. Please try again, or choose a differenet file\");\n\n            case 18:\n              _context2.next = 21;\n              break;\n\n            case 20:\n              alert(\"No file has been chosen.\");\n\n            case 21:\n              Object(_PhotoManager__WEBPACK_IMPORTED_MODULE_7__[\"sendTheDataToTheServer\"])(tmp, setRecievedIMGLocation);\n\n            case 22:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[6, 15]]);\n    }));\n\n    return function handleFileinput(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" && props.q_a_TextEntry(props.cardType, props.iterator)), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInACard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna[props.cardType])) : __jsx(\"form\", {\n    onSubmit: handleFileinput,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.IMGForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInputRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Upload the image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator, \"_page-\").concat(props.pageNumber) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SelectedIMGPreview,\n    src: props.pageContents || recievedIMGLocations[0] // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRefIMG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(QACard, \"4Gy74aGGl59wC3SRfcZGzgdoG4s=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibWF0Y2giLCJVUkxDaGVja0ZvckxvY2FsSG9zdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWZJTUciLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJmaWxlSW5wdXRSZWYiLCJyZWFkQW5JbWFnZSIsImltYWdlVG9CZVJlYWQiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUZpbGVpbnB1dCIsImV2ZW50IiwidG1wIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZmlsZXMiLCJjaG9zZW5GaWxlIiwiZmlsZUNvbnRlbnRzIiwic3JjIiwicHVzaCIsImFsZXJ0Iiwic2VuZFRoZURhdGFUb1RoZVNlcnZlciIsImNhcmRUeXBlIiwiaXRlcmF0b3IiLCJhZGRDb21wU3R5bGVzIiwiTW9kYWxDb250YWluZXJCRyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaW5wdXRFbmFibGVyIiwiY3VycmVudExhbmciLCJOYW1lRm9ybSIsImNhcmRDb250ZW50cyIsInFfYV9UZXh0RW50cnkiLCJlIiwiU2F2ZUJ0biIsIlFBRGVzY3JpcHRpb24iLCJ0ZXh0SW5BQ2FyZCIsInFuYSIsIklNR0Zvcm0iLCJwYWdlTnVtYmVyIiwiU2VsZWN0ZWRJTUdQcmV2aWV3IiwicGFnZUNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQWVUO0FBQUE7O0FBQ0osTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURJLGtCQUV3QkMsc0RBQVEsQ0FBQyxLQUFELENBRmhDO0FBQUEsTUFFR0MsTUFGSDtBQUFBLE1BRVdDLFNBRlgsaUJBR0o7QUFDQTs7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQWtCO0FBQ3RDO0FBQ0EsUUFBSUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLCtEQUFYLE1BQXFDLElBQXpDLEVBQStDO0FBQzdDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLGFBQU8sMkJBQVA7QUFDRDs7QUFDRCxRQUFJSixJQUFJLENBQUNLLE1BQUwsR0FBYyxDQUFsQixFQUFxQixPQUFPO0FBQUssZUFBUyxFQUFFQyxzRUFBVSxDQUFDQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7O0FBQ3JCLFFBQUlQLElBQUksQ0FBQ0ssTUFBTCxHQUFjVixTQUFsQixFQUE2QjtBQUMzQixhQUFPSyxJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLEVBQWMsRUFBZCxJQUFvQixLQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9SLElBQVA7QUFDRDtBQUNGLEdBWkQ7O0FBY0EsTUFBTVMsWUFBWSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBM0IsQ0FwQkksQ0FzQko7QUFDQTtBQUNBOztBQUVBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ2pCLFNBQUssQ0FB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QUM0RCxZQUFOLEtBQXVCLE1BQXZCLEdBQ0M7QUFBRyxhQUFTLEVBQUVoRCxzRUFBVSxDQUFDcUQsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHNUQsYUFBYSxDQUFDTCxLQUFLLENBQUNrRSxHQUFOLENBQVVsRSxLQUFLLENBQUMrQyxRQUFoQixDQUFELENBRGhCLENBREQsR0FLQztBQUFNLFlBQVEsRUFBRVosZUFBaEI7QUFBaUMsYUFBUyxFQUFFdkIsc0VBQVUsQ0FBQ3VELE9BQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFVBQU0sRUFBQyxTQUExQjtBQUFvQyxPQUFHLEVBQUU5QyxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxrQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFDRSxNQUFFLFlBQUtyQixLQUFLLENBQUMrQyxRQUFYLGNBQXVCL0MsS0FBSyxDQUFDZ0QsUUFBN0IsbUJBQThDaEQsS0FBSyxDQUFDb0UsVUFBcEQsQ0FESixDQUVFO0FBRkY7QUFHRSxhQUFTLEVBQUV4RCxzRUFBVSxDQUFDeUQsa0JBSHhCO0FBSUUsT0FBRyxFQUFFckUsS0FBSyxDQUFDc0UsWUFBTixJQUFzQm5ELG9CQUFvQixDQUFDLENBQUQsQ0FKakQsQ0FLRTtBQUxGO0FBTUUsT0FBRyxFQUFDLFVBTk47QUFPRSxPQUFHLEVBQUVKLFlBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBYkosQ0E3QkYsQ0FERjtBQTRERCxDQTFKRDs7R0FBTWhCLE07O0tBQUFBLE07QUEySlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RQUNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVFuQSwgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMsIFNhdmVCdG4gfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcbmltcG9ydCB7IFVSTENoZWNrLCBVUkxDaGVja0ZvckxvY2FsSG9zdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBzZW5kVGhlRGF0YVRvVGhlU2VydmVyIH0gZnJvbSBcIi4vUGhvdG9NYW5hZ2VyXCI7XG5cbmNvbnN0IFFBQ2FyZCA9IChwcm9wczoge1xuICBjYXJkVHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIjtcbiAgY2FyZENvbnRlbnRzOiBcImltZ1wiIHwgXCJ0ZXh0XCI7XG4gIC8vIHNhdmVEYXRhOiAoZGF0YSkgPT4gdm9pZDtcbiAgaXRlcmF0b3I6IG51bWJlcjtcbiAgc2V0U2VsZWN0ZWRMYW5ndWFnZTogKGNob29zZUxhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICBpbnB1dEVuYWJsZXI6ICgpID0+IHZvaWQ7XG4gIHFuYTogSVFuQTtcbiAgdGVzdFR5cGU6IGFueTtcbiAgcV9hX1RleHRFbnRyeTogKHR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCIsIGlkOiBudW1iZXIpID0+IEpTWC5FbGVtZW50O1xuICB0b2dnbGVQaG90b01hbmFnZXI6ICh0b2dnbGU6IGJvb2xlYW4sIGNhcmRJRDogc3RyaW5nKSA9PiB2b2lkO1xuICBzZXRDdXJyZW50Q2FyZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248dW5kZWZpbmVkPj47XG4gIHBhZ2VDb250ZW50czogc3RyaW5nO1xuICBjdXJyZW50TGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXTtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xufSkgPT4ge1xuICBjb25zdCBjaGFyTGltaXQgPSA5MDtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuY2FyZENvbnRlbnRzKTtcbiAgLy8gY29uc29sZS5sb2coXCJUZXN0IGZvciBwYWdlIGNvbnRlbnRzXCIsIHByb3BzLnBhZ2VDb250ZW50cyk7XG5cbiAgY29uc3QgdGV4dFByZXZpZXdlciA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gdGV4dCBwcmV2aWV3XCIpO1xuICAgIGlmICh0ZXh0Lm1hdGNoKFVSTENoZWNrRm9yTG9jYWxIb3N0KSAhPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coXCJIZWxsbyB0aGVyZSBmcm9tIFVSTCBjaGVja2VyXCIpO1xuICAgICAgcmV0dXJuIFwiVGhlcmUgd2FzIGFuIGltYWdlIGJlZm9yZVwiO1xuICAgIH1cbiAgICBpZiAodGV4dC5sZW5ndGggPCAxKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuZW1wdHlUZXh0fT5UPC9kaXY+O1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGNoYXJMaW1pdCkge1xuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgNjUpICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFFBQ2FyZFJlZklNRyA9IHVzZVJlZihudWxsKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiWWF5eXlcIik7XG4gIC8vIH0sIFtRQUNhcmRSZWYuY3VycmVudF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNhcmRSZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgcHJvcHMuc2V0Q3VycmVudENhcmQoUUFDYXJkUmVmSU1HKTtcbiAgICAvLyBwcm9wcy50b2dnbGVQaG90b01hbmFnZXIoZmFsc2UsIGAke3Byb3BzLmNhcmRUeXBlfV8ke3Byb3BzLml0ZXJhdG9yfWApO1xuICB9O1xuXG4gIC8vISBJbWFnZSB1cGxvYWQgcG9ydGlvblxuXG4gIGNvbnN0IFtyZWNpZXZlZElNR0xvY2F0aW9ucywgc2V0UmVjaWV2ZWRJTUdMb2NhdGlvbl0gPSB1c2VTdGF0ZTxcbiAgICBBcnJheTxzdHJpbmc+XG4gID4oW10pO1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgcmVhZEFuSW1hZ2UgPSBhc3luYyAoaW1hZ2VUb0JlUmVhZDogQmxvYikgPT4ge1xuICAgIGNvbnN0IHRtcEZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRtcEZpbGVSZWFkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgdG1wRmlsZVJlYWRlci5hYm9ydCgpO1xuICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbihcIlByb2JsZW0gb2NjdXJlZCB3aGVuIHJlYWRpbmcgdGhlIGZpbGUuXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIHRtcEZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRtcEZpbGVSZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICB0bXBGaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1hZ2VUb0JlUmVhZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZWlucHV0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGxldCB0bXAgPSBbXTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGZpbGVJbnB1dFJlZi5jdXJyZW50LmZpbGVzWzBdKTtcbiAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmZpbGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjaG9zZW5GaWxlOiBGaWxlID0gZmlsZUlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF07XG4gICAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCByZWFkQW5JbWFnZShjaG9zZW5GaWxlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlQ29udGVudHMpO1xuICAgICAgICAgIC8vIFFBQ2FyZFJlZklNRy5jdXJyZW50Py5zcmMgPSBmaWxlQ29udGVudHM7XG4gICAgICAgICAgY29uc29sZS5sb2coUUFDYXJkUmVmSU1HLmN1cnJlbnQuc3JjKTtcbiAgICAgICAgICB0bXAucHVzaChmaWxlQ29udGVudHMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgXCJUaGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyB0aGUgZmlsZS4gUGxlYXNlIHRyeSBhZ2Fpbiwgb3IgY2hvb3NlIGEgZGlmZmVyZW5ldCBmaWxlXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiTm8gZmlsZSBoYXMgYmVlbiBjaG9zZW4uXCIpO1xuICAgIH1cbiAgICBzZW5kVGhlRGF0YVRvVGhlU2VydmVyKHRtcCwgc2V0UmVjaWV2ZWRJTUdMb2NhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlc1twcm9wcy5jYXJkVHlwZV19YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIC8vIHJlZj17UUFDYXJkUmVmfVxuICAgICAgICBpZD17YCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgIWlzT3BlbiA/IGFkZENvbXBTdHlsZXMuSGlkZGVuIDogbnVsbFxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgIHtjbG9zZUJ0bihzZXRJc09wZW4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgIHtDcmVhdGVMYW5nU3dpdGNoZXJzKFxuICAgICAgICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZExhbmd1YWdlLFxuICAgICAgICAgICAgICBwcm9wcy5pbnB1dEVuYWJsZXIsXG4gICAgICAgICAgICAgIHByb3BzLmN1cnJlbnRMYW5nXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICB7cHJvcHMuY2FyZENvbnRlbnRzID09PSBcInRleHRcIiAmJlxuICAgICAgICAgICAgICAgIHByb3BzLnFfYV9UZXh0RW50cnkocHJvcHMuY2FyZFR5cGUsIHByb3BzLml0ZXJhdG9yKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuU2F2ZUJ0bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1NhdmVCdG4oKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUUFEZXNjcmlwdGlvbn1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBwcm9wcy5jYXJkQ29udGVudHMgPT09IFwiaW1nXCJcbiAgICAgICAgICAgID8gaGFuZGxlQ2FyZFJlZmVyZW5jZSgpXG4gICAgICAgICAgICA6IHNldElzT3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRleHRJbkFDYXJkfT5cbiAgICAgICAgICAgIHt0ZXh0UHJldmlld2VyKHByb3BzLnFuYVtwcm9wcy5jYXJkVHlwZV0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRmlsZWlucHV0fSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuSU1HRm9ybX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgcmVmPXtmaWxlSW5wdXRSZWZ9IC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIHRoZSBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGlkPXtgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1fcGFnZS0ke3Byb3BzLnBhZ2VOdW1iZXJ9YH1cbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiBjb25zb2xlLmxvZyhcIllBeXl5XCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuU2VsZWN0ZWRJTUdQcmV2aWV3fVxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLnBhZ2VDb250ZW50cyB8fCByZWNpZXZlZElNR0xvY2F0aW9uc1swXX1cbiAgICAgICAgICAgICAgLy8gc3JjPXtwcm9wcy5wYWdlQ29udGVudHMubWF0Y2goVVJMQ2hlY2spID8gcHJvcHMucGFnZUNvbnRlbnRzIDogXCJcIn1cbiAgICAgICAgICAgICAgYWx0PVwiTm8gaW1hZ2VcIlxuICAgICAgICAgICAgICByZWY9e1FBQ2FyZFJlZklNR31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUUFDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})