webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var _PhotoManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PhotoManager */ \"./components/PhotoManager.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // console.log(props.cardContents);\n  // console.log(\"Test for page contents\", props.pageContents);\n\n\n  var textPreviewer = function textPreviewer(text) {\n    // console.log(\"Hello from text preview\");\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_6__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 65) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRefIMG = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRefIMG); // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);\n  }; //! Image upload portion\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var readAnImage = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageToBeRead) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem occured when reading the file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(imageToBeRead);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function readAnImage(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleFileinput = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n      var _fileInputRef$current;\n\n      var tmp, chosenFile, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmp = [];\n              event.preventDefault();\n              console.log(fileInputRef.current.files[0]);\n\n              if (!(((_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.files) !== null)) {\n                _context2.next = 21;\n                break;\n              }\n\n              chosenFile = fileInputRef.current.files[0];\n\n              if (!fileInputRef.current) {\n                _context2.next = 19;\n                break;\n              }\n\n              _context2.prev = 6;\n              _context2.next = 9;\n              return readAnImage(chosenFile);\n\n            case 9:\n              fileContents = _context2.sent;\n              console.log(fileContents);\n              QACardRefIMG.current.src !== null && (QACardRefIMG.current.src = fileContents);\n              console.log(QACardRefIMG.current.src);\n              tmp.push(fileContents);\n              _context2.next = 19;\n              break;\n\n            case 16:\n              _context2.prev = 16;\n              _context2.t0 = _context2[\"catch\"](6);\n              alert(\"There was an error reading the file. Please try again, or choose a differenet file\");\n\n            case 19:\n              _context2.next = 22;\n              break;\n\n            case 21:\n              alert(\"No file has been chosen.\");\n\n            case 22:\n              Object(_PhotoManager__WEBPACK_IMPORTED_MODULE_7__[\"sendTheDataToTheServer\"])(tmp, setRecievedIMGLocation);\n\n              if (QACardRefIMG.current.src !== null) {\n                QACardRefIMG.current.src = recievedIMGLocations[0];\n              }\n\n              tmp.pop();\n\n            case 25:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[6, 16]]);\n    }));\n\n    return function handleFileinput(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var _fileInputRef$current2;\n\n    console.log(\"Input has \", (_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 ? void 0 : _fileInputRef$current2.files);\n  }, [fileInputRef.current]);\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" && props.q_a_TextEntry(props.cardType, props.iterator)), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInACard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna[props.cardType])) : __jsx(\"form\", {\n    onSubmit: handleFileinput,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.IMGForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FileChooser,\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInputRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Upload the image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator, \"_page-\").concat(props.pageNumber) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SelectedIMGPreview,\n    src: props.pageContents || \"\" // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRefIMG,\n    onClick: function onClick(e) {\n      return fileInputRef.current.click();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(QACard, \"Fgd0NPTgra6mgmTh4rMsS1C5LPo=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibWF0Y2giLCJVUkxDaGVja0ZvckxvY2FsSG9zdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWZJTUciLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJmaWxlSW5wdXRSZWYiLCJyZWFkQW5JbWFnZSIsImltYWdlVG9CZVJlYWQiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUZpbGVpbnB1dCIsImV2ZW50IiwidG1wIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZmlsZXMiLCJjaG9zZW5GaWxlIiwiZmlsZUNvbnRlbnRzIiwic3JjIiwicHVzaCIsImFsZXJ0Iiwic2VuZFRoZURhdGFUb1RoZVNlcnZlciIsInBvcCIsInVzZUVmZmVjdCIsImNhcmRUeXBlIiwiaXRlcmF0b3IiLCJhZGRDb21wU3R5bGVzIiwiTW9kYWxDb250YWluZXJCRyIsIkhpZGRlbiIsIk1vZGFsQ29udGFpbmVyIiwiY2xvc2VCdG4iLCJNb2RhbCIsIkNyZWF0ZUxhbmdTd2l0Y2hlcnMiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaW5wdXRFbmFibGVyIiwiY3VycmVudExhbmciLCJOYW1lRm9ybSIsImNhcmRDb250ZW50cyIsInFfYV9UZXh0RW50cnkiLCJlIiwiU2F2ZUJ0biIsIlFBRGVzY3JpcHRpb24iLCJ0ZXh0SW5BQ2FyZCIsInFuYSIsIklNR0Zvcm0iLCJGaWxlQ2hvb3NlciIsInBhZ2VOdW1iZXIiLCJTZWxlY3RlZElNR1ByZXZpZXciLCJwYWdlQ29udGVudHMiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFlVDtBQUFBOztBQUNKLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFESSxrQkFFd0JDLHNEQUFRLENBQUMsS0FBRCxDQUZoQztBQUFBLE1BRUdDLE1BRkg7QUFBQSxNQUVXQyxTQUZYLGlCQUdKO0FBQ0E7OztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFrQjtBQUN0QztBQUNBLFFBQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQywrREFBWCxNQUFxQyxJQUF6QyxFQUErQztBQUM3Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVksOEJBQVo7QUFDQSxhQUFPLDJCQUFQO0FBQ0Q7O0FBQ0QsUUFBSUosSUFBSSxDQUFDSyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUIsT0FBTztBQUFLLGVBQVMsRUFBRUMsc0VBQVUsQ0FBQ0MsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQOztBQUNyQixRQUFJUCxJQUFJLENBQUNLLE1BQUwsR0FBY1YsU0FBbEIsRUFBNkI7QUFDM0IsYUFBT0ssSUFBSSxDQUFDUSxLQUFMLENBQVcsQ0FBWCxFQUFjLEVBQWQsSUFBb0IsS0FBM0I7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPUixJQUFQO0FBQ0Q7QUFDRixHQVpEOztBQWNBLE1BQU1TLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCLENBcEJJLENBc0JKO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxtQkFBbUIs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QyxrQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFDRSxNQUFFLFlBQUtyQixLQUFLLENBQUNpRCxRQUFYLGNBQXVCakQsS0FBSyxDQUFDa0QsUUFBN0IsbUJBQThDbEQsS0FBSyxDQUFDdUUsVUFBcEQsQ0FESixDQUVFO0FBRkY7QUFHRSxhQUFTLEVBQUUzRCxzRUFBVSxDQUFDNEQsa0JBSHhCO0FBSUUsT0FBRyxFQUFFeEUsS0FBSyxDQUFDeUUsWUFBTixJQUFzQixFQUo3QixDQUtFO0FBTEY7QUFNRSxPQUFHLEVBQUMsVUFOTjtBQU9FLE9BQUcsRUFBRTFELFlBUFA7QUFRRSxXQUFPLEVBQUUsaUJBQUNpRCxDQUFEO0FBQUEsYUFBTzNDLFlBQVksQ0FBQ2tCLE9BQWIsQ0FBcUJtQyxLQUFyQixFQUFQO0FBQUEsS0FSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FiSixDQTdCRixDQURGO0FBa0VELENBMUtEOztHQUFNM0UsTTs7S0FBQUEsTTtBQTJLU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1FBQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJUW5BLCBUTGFuZ09wdGlvbiB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYWRkQ29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBjbG9zZUJ0biwgQ3JlYXRlTGFuZ1N3aXRjaGVycywgU2F2ZUJ0biB9IGZyb20gXCIuL1Rlc3ROYW1lclwiO1xuaW1wb3J0IHsgVVJMQ2hlY2ssIFVSTENoZWNrRm9yTG9jYWxIb3N0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHNlbmRUaGVEYXRhVG9UaGVTZXJ2ZXIgfSBmcm9tIFwiLi9QaG90b01hbmFnZXJcIjtcblxuY29uc3QgUUFDYXJkID0gKHByb3BzOiB7XG4gIGNhcmRUeXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiO1xuICBjYXJkQ29udGVudHM6IFwiaW1nXCIgfCBcInRleHRcIjtcbiAgLy8gc2F2ZURhdGE6IChkYXRhKSA9PiB2b2lkO1xuICBpdGVyYXRvcjogbnVtYmVyO1xuICBzZXRTZWxlY3RlZExhbmd1YWdlOiAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQ7XG4gIGlucHV0RW5hYmxlcjogKCkgPT4gdm9pZDtcbiAgcW5hOiBJUW5BO1xuICB0ZXN0VHlwZTogYW55O1xuICBxX2FfVGV4dEVudHJ5OiAodHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIiwgaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQ7XG4gIHRvZ2dsZVBob3RvTWFuYWdlcjogKHRvZ2dsZTogYm9vbGVhbiwgY2FyZElEOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldEN1cnJlbnRDYXJkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx1bmRlZmluZWQ+PjtcbiAgcGFnZUNvbnRlbnRzOiBzdHJpbmc7XG4gIGN1cnJlbnRMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdO1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IGNoYXJMaW1pdCA9IDkwO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5jYXJkQ29udGVudHMpO1xuICAvLyBjb25zb2xlLmxvZyhcIlRlc3QgZm9yIHBhZ2UgY29udGVudHNcIiwgcHJvcHMucGFnZUNvbnRlbnRzKTtcblxuICBjb25zdCB0ZXh0UHJldmlld2VyID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSB0ZXh0IHByZXZpZXdcIik7XG4gICAgaWYgKHRleHQubWF0Y2goVVJMQ2hlY2tGb3JMb2NhbEhvc3QpICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIHRoZXJlIGZyb20gVVJMIGNoZWNrZXJcIik7XG4gICAgICByZXR1cm4gXCJUaGVyZSB3YXMgYW4gaW1hZ2UgYmVmb3JlXCI7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA8IDEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5lbXB0eVRleHR9PlQ8L2Rpdj47XG4gICAgaWYgKHRleHQubGVuZ3RoID4gY2hhckxpbWl0KSB7XG4gICAgICByZXR1cm4gdGV4dC5zbGljZSgwLCA2NSkgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUUFDYXJkUmVmSU1HID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJZYXl5eVwiKTtcbiAgLy8gfSwgW1FBQ2FyZFJlZi5jdXJyZW50XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2FyZFJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRDdXJyZW50Q2FyZChRQUNhcmRSZWZJTUcpO1xuICAgIC8vIHByb3BzLnRvZ2dsZVBob3RvTWFuYWdlcihmYWxzZSwgYCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9YCk7XG4gIH07XG5cbiAgLy8hIEltYWdlIHVwbG9hZCBwb3J0aW9uXG5cbiAgY29uc3QgW3JlY2lldmVkSU1HTG9jYXRpb25zLCBzZXRSZWNpZXZlZElNR0xvY2F0aW9uXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHN0cmluZz5cbiAgPihbXSk7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCByZWFkQW5JbWFnZSA9IGFzeW5jIChpbWFnZVRvQmVSZWFkOiBCbG9iKSA9PiB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBvY2N1cmVkIHdoZW4gcmVhZGluZyB0aGUgZmlsZS5cIikpO1xuICAgICAgfTtcblxuICAgICAgdG1wRmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodG1wRmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHRtcEZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZVRvQmVSZWFkKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlaW5wdXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZmlsZUlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF0pO1xuICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudD8uZmlsZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNob3NlbkZpbGU6IEZpbGUgPSBmaWxlSW5wdXRSZWYuY3VycmVudC5maWxlc1swXTtcbiAgICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRBbkltYWdlKGNob3NlbkZpbGUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVDb250ZW50cyk7XG4gICAgICAgICAgUUFDYXJkUmVmSU1HLmN1cnJlbnQuc3JjICE9PSBudWxsICYmXG4gICAgICAgICAgICAoUUFDYXJkUmVmSU1HIS5jdXJyZW50IS5zcmMgPSBmaWxlQ29udGVudHMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFFBQ2FyZFJlZklNRy5jdXJyZW50LnNyYyk7XG4gICAgICAgICAgdG1wLnB1c2goZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgIFwiVGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgdGhlIGZpbGUuIFBsZWFzZSB0cnkgYWdhaW4sIG9yIGNob29zZSBhIGRpZmZlcmVuZXQgZmlsZVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIk5vIGZpbGUgaGFzIGJlZW4gY2hvc2VuLlwiKTtcbiAgICB9XG4gICAgc2VuZFRoZURhdGFUb1RoZVNlcnZlcih0bXAsIHNldFJlY2lldmVkSU1HTG9jYXRpb24pO1xuICAgIGlmIChRQUNhcmRSZWZJTUcuY3VycmVudC5zcmMgIT09IG51bGwpIHtcbiAgICAgIFFBQ2FyZFJlZklNRyEuY3VycmVudCEuc3JjID0gcmVjaWV2ZWRJTUdMb2NhdGlvbnNbMF07XG4gICAgfVxuXG4gICAgdG1wLnBvcCgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJJbnB1dCBoYXMgXCIsIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5maWxlcyk7XG4gIH0sIFtmaWxlSW5wdXRSZWYuY3VycmVudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZXNbcHJvcHMuY2FyZFR5cGVdfWB9PlxuICAgICAgPGRpdlxuICAgICAgICAvLyByZWY9e1FBQ2FyZFJlZn1cbiAgICAgICAgaWQ9e2Ake3Byb3BzLmNhcmRUeXBlfV8ke3Byb3BzLml0ZXJhdG9yfWB9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YWRkQ29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfSAke1xuICAgICAgICAgICFpc09wZW4gPyBhZGRDb21wU3R5bGVzLkhpZGRlbiA6IG51bGxcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICB7Y2xvc2VCdG4oc2V0SXNPcGVuKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkQ29tcFN0eWxlcy5Nb2RhbH0+XG4gICAgICAgICAgICB7Q3JlYXRlTGFuZ1N3aXRjaGVycyhcbiAgICAgICAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRMYW5ndWFnZSxcbiAgICAgICAgICAgICAgcHJvcHMuaW5wdXRFbmFibGVyLFxuICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50TGFuZ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgJiZcbiAgICAgICAgICAgICAgICBwcm9wcy5xX2FfVGV4dEVudHJ5KHByb3BzLmNhcmRUeXBlLCBwcm9wcy5pdGVyYXRvcil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLlNhdmVCdG59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtTYXZlQnRuKCl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlFBRGVzY3JpcHRpb259XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRlbnRzID09PSBcImltZ1wiXG4gICAgICAgICAgICA/IGhhbmRsZUNhcmRSZWZlcmVuY2UoKVxuICAgICAgICAgICAgOiBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jYXJkQ29udGVudHMgPT09IFwidGV4dFwiID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y29tcFN0eWxlcy50ZXh0SW5BQ2FyZH0+XG4gICAgICAgICAgICB7dGV4dFByZXZpZXdlcihwcm9wcy5xbmFbcHJvcHMuY2FyZFR5cGVdKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZpbGVpbnB1dH0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLklNR0Zvcm19PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5GaWxlQ2hvb3Nlcn1cbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCB0aGUgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBpZD17YCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9X3BhZ2UtJHtwcm9wcy5wYWdlTnVtYmVyfWB9XG4gICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gY29uc29sZS5sb2coXCJZQXl5eVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlNlbGVjdGVkSU1HUHJldmlld31cbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5wYWdlQ29udGVudHMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLy8gc3JjPXtwcm9wcy5wYWdlQ29udGVudHMubWF0Y2goVVJMQ2hlY2spID8gcHJvcHMucGFnZUNvbnRlbnRzIDogXCJcIn1cbiAgICAgICAgICAgICAgYWx0PVwiTm8gaW1hZ2VcIlxuICAgICAgICAgICAgICByZWY9e1FBQ2FyZFJlZklNR31cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFFBQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})