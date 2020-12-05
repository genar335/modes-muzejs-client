webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // console.log(props.cardContents);\n  // console.log(\"Test for page contents\", props.pageContents);\n\n\n  var textPreviewer = function textPreviewer(text) {\n    // console.log(\"Hello from text preview\");\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_6__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 65) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRefIMG = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRefIMG); // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);\n  }; //! Image upload portion\n  // const [recievedIMGLocations, setRecievedIMGLocation] = useState<\n  //   Array<string>\n  // >([]);\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      readIMG = _useState2[0],\n      setReadIMG = _useState2[1];\n\n  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var readAnImage = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageToBeRead) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem occured when reading the file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(imageToBeRead);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function readAnImage(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleFileinput = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n      var _fileInputRef$current;\n\n      var tmp, chosenFile, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmp = [];\n              event.preventDefault();\n              console.log(fileInputRef.current.files[0]);\n\n              if (!(((_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.files) !== null)) {\n                _context2.next = 13;\n                break;\n              }\n\n              chosenFile = fileInputRef.current.files[0];\n\n              if (!fileInputRef.current) {\n                _context2.next = 11;\n                break;\n              }\n\n              _context2.next = 8;\n              return readAnImage(chosenFile);\n\n            case 8:\n              fileContents = _context2.sent;\n              setReadIMG(fileContents); // console.log(fileContents);\n              // tmp.push(fileContents);\n\n              props.saveIMG(props.iterator, fileContents, props.cardType); // console.log(QACardRefIMG.current.src, \"OI\");\n              // } catch (error) {\n              //   alert(\n              //     \"There was an error reading the file. Please try again, or choose a differenet file\"\n              //   );\n              // }\n\n            case 11:\n              _context2.next = 14;\n              break;\n\n            case 13:\n              alert(\"No file has been chosen.\");\n\n            case 14:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleFileinput(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var _fileInputRef$current2;\n\n    console.log(\"Input has \", (_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 ? void 0 : _fileInputRef$current2.files);\n  }, [fileInputRef.current]);\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" && props.q_a_TextEntry(props.cardType, props.iterator)), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInACard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna[props.cardType])) : __jsx(\"form\", {\n    onSubmit: handleFileinput,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.IMGForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator, \"_page-\").concat(props.pageNumber) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SelectedIMGPreview,\n    src: props.pageContents // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRefIMG // onClick={(e) => fileInputRef.current.click()}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FileChooser,\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInputRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Upload the image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(QACard, \"XX/Dmwq9Yd3JAqZbIN1DBfeWGJU=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibWF0Y2giLCJVUkxDaGVja0ZvckxvY2FsSG9zdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWZJTUciLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJyZWFkSU1HIiwic2V0UmVhZElNRyIsImZpbGVJbnB1dFJlZiIsInJlYWRBbkltYWdlIiwiaW1hZ2VUb0JlUmVhZCIsInRtcEZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmVycm9yIiwiYWJvcnQiLCJET01FeGNlcHRpb24iLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaGFuZGxlRmlsZWlucHV0IiwiZXZlbnQiLCJ0bXAiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJmaWxlcyIsImNob3NlbkZpbGUiLCJmaWxlQ29udGVudHMiLCJzYXZlSU1HIiwiaXRlcmF0b3IiLCJjYXJkVHlwZSIsImFsZXJ0IiwidXNlRWZmZWN0IiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImlucHV0RW5hYmxlciIsImN1cnJlbnRMYW5nIiwiTmFtZUZvcm0iLCJjYXJkQ29udGVudHMiLCJxX2FfVGV4dEVudHJ5IiwiZSIsIlNhdmVCdG4iLCJRQURlc2NyaXB0aW9uIiwidGV4dEluQUNhcmQiLCJxbmEiLCJJTUdGb3JtIiwicGFnZU51bWJlciIsIlNlbGVjdGVkSU1HUHJldmlldyIsInBhZ2VDb250ZW50cyIsIkZpbGVDaG9vc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQW9CVDtBQUFBOztBQUNKLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFESSxrQkFFd0JDLHNEQUFRLENBQUMsS0FBRCxDQUZoQztBQUFBLE1BRUdDLE1BRkg7QUFBQSxNQUVXQyxTQUZYLGlCQUdKO0FBQ0E7OztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFrQjtBQUN0QztBQUNBLFFBQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQywrREFBWCxNQUFxQyxJQUF6QyxFQUErQztBQUM3Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVksOEJBQVo7QUFDQSxhQUFPLDJCQUFQO0FBQ0Q7O0FBQ0QsUUFBSUosSUFBSSxDQUFDSyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUIsT0FBTztBQUFLLGVBQVMsRUFBRUMsc0VBQVUsQ0FBQ0MsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQOztBQUNyQixRQUFJUCxJQUFJLENBQUNLLE1BQUwsR0FBY1YsU0FBbEIsRUFBNkI7QUFDM0IsYUFBT0ssSUFBSSxDQUFDUSxLQUFMLENBQVcsQ0FBWCxFQUFjLEVBQWQsSUFBb0IsS0FBM0I7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPUixJQUFQO0FBQ0Q7QUFDRixHQVpEOztBQWNBLE1BQU1TLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCLENBcEJJLENBc0JKO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaENqQixTQUFLLENBQUNrQixjQUFOLENBQXFCSCxZQUFyQixFQURnQyxDQUVo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Y29tcG9uZW50cy9RQUNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVFuQSwgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGFkZENvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3ROYW1lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY2xvc2VCdG4sIENyZWF0ZUxhbmdTd2l0Y2hlcnMsIFNhdmVCdG4gfSBmcm9tIFwiLi9UZXN0TmFtZXJcIjtcbmltcG9ydCB7IFVSTENoZWNrLCBVUkxDaGVja0ZvckxvY2FsSG9zdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBzZW5kVGhlRGF0YVRvVGhlU2VydmVyIH0gZnJvbSBcIi4vUGhvdG9NYW5hZ2VyXCI7XG5cbmNvbnN0IFFBQ2FyZCA9IChwcm9wczoge1xuICBjYXJkVHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIjtcbiAgY2FyZENvbnRlbnRzOiBcImltZ1wiIHwgXCJ0ZXh0XCI7XG4gIC8vIHNhdmVEYXRhOiAoZGF0YSkgPT4gdm9pZDtcbiAgaXRlcmF0b3I6IG51bWJlcjtcbiAgc2V0U2VsZWN0ZWRMYW5ndWFnZTogKGNob29zZUxhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICBpbnB1dEVuYWJsZXI6ICgpID0+IHZvaWQ7XG4gIHFuYTogSVFuQTtcbiAgdGVzdFR5cGU6IGFueTtcbiAgcV9hX1RleHRFbnRyeTogKHR5cGU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCIsIGlkOiBudW1iZXIpID0+IEpTWC5FbGVtZW50O1xuICB0b2dnbGVQaG90b01hbmFnZXI6ICh0b2dnbGU6IGJvb2xlYW4sIGNhcmRJRDogc3RyaW5nKSA9PiB2b2lkO1xuICBzZXRDdXJyZW50Q2FyZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248dW5kZWZpbmVkPj47XG4gIHBhZ2VDb250ZW50czogc3RyaW5nO1xuICBjdXJyZW50TGFuZzogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXTtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBzYXZlSU1HOiAoXG4gICAgcWlkOiBudW1iZXIsXG4gICAgZGF0YTogc3RyaW5nLFxuICAgIHdoYXRUb1NhdmU6IFwiYW5zd2VyXCIgfCBcInF1ZXN0aW9uXCJcbiAgKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBjaGFyTGltaXQgPSA5MDtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuY2FyZENvbnRlbnRzKTtcbiAgLy8gY29uc29sZS5sb2coXCJUZXN0IGZvciBwYWdlIGNvbnRlbnRzXCIsIHByb3BzLnBhZ2VDb250ZW50cyk7XG5cbiAgY29uc3QgdGV4dFByZXZpZXdlciA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gdGV4dCBwcmV2aWV3XCIpO1xuICAgIGlmICh0ZXh0Lm1hdGNoKFVSTENoZWNrRm9yTG9jYWxIb3N0KSAhPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coXCJIZWxsbyB0aGVyZSBmcm9tIFVSTCBjaGVja2VyXCIpO1xuICAgICAgcmV0dXJuIFwiVGhlcmUgd2FzIGFuIGltYWdlIGJlZm9yZVwiO1xuICAgIH1cbiAgICBpZiAodGV4dC5sZW5ndGggPCAxKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuZW1wdHlUZXh0fT5UPC9kaXY+O1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGNoYXJMaW1pdCkge1xuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgNjUpICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFFBQ2FyZFJlZklNRyA9IHVzZVJlZihudWxsKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiWWF5eXlcIik7XG4gIC8vIH0sIFtRQUNhcmRSZWYuY3VycmVudF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNhcmRSZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgcHJvcHMuc2V0Q3VycmVudENhcmQoUUFDYXJkUmVmSU1HKTtcbiAgICAvLyBwcm9wcy50b2dnbGVQaG90b01hbmFnZXIoZmFsc2UsIGAke3Byb3BzLmNhcmRUeXBlfV8ke3Byb3BzLml0ZXJhdG9yfWApO1xuICB9O1xuXG4gIC8vISBJbWFnZSB1cGxvYWQgcG9ydGlvblxuXG4gIC8vIGNvbnN0IFtyZWNpZXZlZElNR0xvY2F0aW9ucywgc2V0UmVjaWV2ZWRJTUdMb2NhdGlvbl0gPSB1c2VTdGF0ZTxcbiAgLy8gICBBcnJheTxzdHJpbmc+XG4gIC8vID4oW10pO1xuICBjb25zdCBbcmVhZElNRywgc2V0UmVhZElNR10gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCByZWFkQW5JbWFnZSA9IGFzeW5jIChpbWFnZVRvQmVSZWFkOiBCbG9iKSA9PiB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBvY2N1cmVkIHdoZW4gcmVhZGluZyB0aGUgZmlsZS5cIikpO1xuICAgICAgfTtcblxuICAgICAgdG1wRmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodG1wRmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHRtcEZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZVRvQmVSZWFkKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlaW5wdXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZmlsZUlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF0pO1xuICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudD8uZmlsZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNob3NlbkZpbGU6IEZpbGUgPSBmaWxlSW5wdXRSZWYhLmN1cnJlbnQhLmZpbGVzWzBdO1xuICAgICAgaWYgKGZpbGVJbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50czogc3RyaW5nID0gKGF3YWl0IHJlYWRBbkltYWdlKGNob3NlbkZpbGUpKSBhcyBzdHJpbmc7XG4gICAgICAgIHNldFJlYWRJTUcoZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgLy8gdG1wLnB1c2goZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgcHJvcHMuc2F2ZUlNRyhwcm9wcy5pdGVyYXRvciwgZmlsZUNvbnRlbnRzLCBwcm9wcy5jYXJkVHlwZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFFBQ2FyZFJlZklNRy5jdXJyZW50LnNyYywgXCJPSVwiKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gICBhbGVydChcbiAgICAgICAgLy8gICAgIFwiVGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgdGhlIGZpbGUuIFBsZWFzZSB0cnkgYWdhaW4sIG9yIGNob29zZSBhIGRpZmZlcmVuZXQgZmlsZVwiXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIk5vIGZpbGUgaGFzIGJlZW4gY2hvc2VuLlwiKTtcbiAgICB9XG4gICAgLy8gc2VuZFRoZURhdGFUb1RoZVNlcnZlcih0bXAsIHNldFJlY2lldmVkSU1HTG9jYXRpb24pO1xuXG4gICAgLy8gdG1wLnBvcCgpO1xuICAgIC8vIHNldFJlY2lldmVkSU1HTG9jYXRpb24oW10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJJbnB1dCBoYXMgXCIsIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5maWxlcyk7XG4gIH0sIFtmaWxlSW5wdXRSZWYuY3VycmVudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXNbcHJvcHMuY2FyZFR5cGVdfWB9PlxuICAgICAgPGRpdlxuICAgICAgICAvLyByZWY9e1FBQ2FyZFJlZn1cbiAgICAgICAgaWQ9e2Ake3Byb3BzLmNhcmRUeXBlfV8ke3Byb3BzLml0ZXJhdG9yfWB9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfSAke1xuICAgICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICB7Y2xvc2VCdG4oc2V0SXNPcGVuKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbH0+XG4gICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhcbiAgICAgICAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRMYW5ndWFnZSxcbiAgICAgICAgICAgICAgcHJvcHMuaW5wdXRFbmFibGVyLFxuICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50TGFuZ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgJiZcbiAgICAgICAgICAgICAgICBwcm9wcy5xX2FfVGV4dEVudHJ5KHByb3BzLmNhcmRUeXBlLCBwcm9wcy5pdGVyYXRvcil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLlNhdmVCdG59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtTYXZlQnRuKCl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlFBRGVzY3JpcHRpb259XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRlbnRzID09PSBcImltZ1wiXG4gICAgICAgICAgICA/IGhhbmRsZUNhcmRSZWZlcmVuY2UoKVxuICAgICAgICAgICAgOiBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y29tcFN0eWxlcy50ZXh0SW5BQ2FyZH0+XG4gICAgICAgICAgICB7dGV4dFByZXZpZXdlcihwcm9wcy5xbmFbcHJvcHMuY2FyZFR5cGVdKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZpbGVpbnB1dH0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLklNR0Zvcm19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBpZD17YCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9X3BhZ2UtJHtwcm9wcy5wYWdlTnVtYmVyfWB9XG4gICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gY29uc29sZS5sb2coXCJZQXl5eVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlNlbGVjdGVkSU1HUHJldmlld31cbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5wYWdlQ29udGVudHN9XG4gICAgICAgICAgICAgIC8vIHNyYz17cHJvcHMucGFnZUNvbnRlbnRzLm1hdGNoKFVSTENoZWNrKSA/IHByb3BzLnBhZ2VDb250ZW50cyA6IFwiXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIk5vIGltYWdlXCJcbiAgICAgICAgICAgICAgcmVmPXtRQUNhcmRSZWZJTUd9XG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuRmlsZUNob29zZXJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQgdGhlIGltYWdlXCIgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBRQUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})