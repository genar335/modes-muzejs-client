webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/QACard.tsx":
/*!*******************************!*\
  !*** ./components/QACard.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TestNamer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestNamer */ \"./components/TestNamer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/QACard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar QACard = function QACard(props) {\n  _s();\n\n  var charLimit = 90;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1]; // console.log(props.cardContents);\n  // console.log(\"Test for page contents\", props.pageContents);\n\n\n  var textPreviewer = function textPreviewer(text) {\n    // console.log(\"Hello from text preview\");\n    if (text.match(_constants__WEBPACK_IMPORTED_MODULE_6__[\"URLCheckForLocalHost\"]) !== null) {\n      console.log(\"Hello there from URL checker\");\n      return \"There was an image before\";\n    }\n\n    if (text.length < 1) return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 33\n      }\n    }, \"T\");\n\n    if (text.length > charLimit) {\n      return text.slice(0, 65) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  var QACardRefIMG = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null); // useEffect(() => {\n  //   console.log(\"Yayyy\");\n  // }, [QACardRef.current]);\n\n  var handleCardReference = function handleCardReference() {\n    props.setCurrentCard(QACardRefIMG); // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);\n  }; //! Image upload portion\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  var fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var readAnImage = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageToBeRead) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem occured when reading the file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(imageToBeRead);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function readAnImage(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleFileinput = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n      var _fileInputRef$current;\n\n      var tmp, chosenFile, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmp = [];\n              event.preventDefault();\n              console.log(fileInputRef.current.files[0]);\n\n              if (!(((_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.files) !== null)) {\n                _context2.next = 18;\n                break;\n              }\n\n              chosenFile = fileInputRef.current.files[0];\n\n              if (!fileInputRef.current) {\n                _context2.next = 16;\n                break;\n              }\n\n              _context2.prev = 6;\n              _context2.next = 9;\n              return readAnImage(chosenFile);\n\n            case 9:\n              fileContents = _context2.sent;\n              console.log(fileContents); // tmp.push(fileContents);\n\n              _context2.next = 16;\n              break;\n\n            case 13:\n              _context2.prev = 13;\n              _context2.t0 = _context2[\"catch\"](6);\n              alert(\"There was an error reading the file. Please try again, or choose a differenet file\");\n\n            case 16:\n              _context2.next = 19;\n              break;\n\n            case 18:\n              alert(\"No file has been chosen.\");\n\n            case 19:\n              // sendTheDataToTheServer(tmp, setRecievedIMGLocation);\n              if (QACardRefIMG.current.src !== null) {\n                QACardRefIMG.current.src = recievedIMGLocations[0];\n              } // tmp.pop();\n              // setRecievedIMGLocation([]);\n\n\n            case 20:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[6, 13]]);\n    }));\n\n    return function handleFileinput(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var _fileInputRef$current2;\n\n    console.log(\"Input has \", (_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 ? void 0 : _fileInputRef$current2.files);\n  }, [fileInputRef.current]);\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[props.cardType]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    // ref={QACardRef}\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator),\n    className: \"\".concat(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainerBG, \" \").concat(!isOpen ? _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden : null),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"closeBtn\"])(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"CreateLangSwitchers\"])(props.setSelectedLanguage, props.inputEnabler, props.currentLang), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }, props.cardContents === \"text\" && props.q_a_TextEntry(props.cardType, props.iterator)), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return setIsOpen(!isOpen);\n    },\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SaveBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, Object(_TestNamer__WEBPACK_IMPORTED_MODULE_5__[\"SaveBtn\"])())))), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QADescription,\n    onClick: function onClick(e) {\n      props.cardContents === \"img\" ? handleCardReference() : setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, props.cardContents === \"text\" ? __jsx(\"p\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInACard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 11\n    }\n  }, textPreviewer(props.qna[props.cardType])) : __jsx(\"form\", {\n    onSubmit: handleFileinput,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.IMGForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FileChooser,\n    type: \"file\",\n    accept: \"image/*\",\n    ref: fileInputRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Upload the image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    id: \"\".concat(props.cardType, \"_\").concat(props.iterator, \"_page-\").concat(props.pageNumber) // onChange={(e) => console.log(\"YAyyy\")}\n    ,\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SelectedIMGPreview,\n    src: props.pageContents || \"\" // src={props.pageContents.match(URLCheck) ? props.pageContents : \"\"}\n    ,\n    alt: \"No image\",\n    ref: QACardRefIMG,\n    onClick: function onClick(e) {\n      return fileInputRef.current.click();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(QACard, \"Fgd0NPTgra6mgmTh4rMsS1C5LPo=\");\n\n_c = QACard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QACard);\n\nvar _c;\n\n$RefreshReg$(_c, \"QACard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RQUNhcmQudHN4P2NiYmEiXSwibmFtZXMiOlsiUUFDYXJkIiwicHJvcHMiLCJjaGFyTGltaXQiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRleHRQcmV2aWV3ZXIiLCJ0ZXh0IiwibWF0Y2giLCJVUkxDaGVja0ZvckxvY2FsSG9zdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjb21wU3R5bGVzIiwiZW1wdHlUZXh0Iiwic2xpY2UiLCJRQUNhcmRSZWZJTUciLCJ1c2VSZWYiLCJoYW5kbGVDYXJkUmVmZXJlbmNlIiwic2V0Q3VycmVudENhcmQiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJmaWxlSW5wdXRSZWYiLCJyZWFkQW5JbWFnZSIsImltYWdlVG9CZVJlYWQiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUZpbGVpbnB1dCIsImV2ZW50IiwidG1wIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZmlsZXMiLCJjaG9zZW5GaWxlIiwiZmlsZUNvbnRlbnRzIiwiYWxlcnQiLCJzcmMiLCJ1c2VFZmZlY3QiLCJjYXJkVHlwZSIsIml0ZXJhdG9yIiwiYWRkQ29tcFN0eWxlcyIsIk1vZGFsQ29udGFpbmVyQkciLCJIaWRkZW4iLCJNb2RhbENvbnRhaW5lciIsImNsb3NlQnRuIiwiTW9kYWwiLCJDcmVhdGVMYW5nU3dpdGNoZXJzIiwic2V0U2VsZWN0ZWRMYW5ndWFnZSIsImlucHV0RW5hYmxlciIsImN1cnJlbnRMYW5nIiwiTmFtZUZvcm0iLCJjYXJkQ29udGVudHMiLCJxX2FfVGV4dEVudHJ5IiwiZSIsIlNhdmVCdG4iLCJRQURlc2NyaXB0aW9uIiwidGV4dEluQUNhcmQiLCJxbmEiLCJJTUdGb3JtIiwiRmlsZUNob29zZXIiLCJwYWdlTnVtYmVyIiwiU2VsZWN0ZWRJTUdQcmV2aWV3IiwicGFnZUNvbnRlbnRzIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBZVQ7QUFBQTs7QUFDSixNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBREksa0JBRXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEM7QUFBQSxNQUVHQyxNQUZIO0FBQUEsTUFFV0MsU0FGWCxpQkFHSjtBQUNBOzs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBa0I7QUFDdEM7QUFDQSxRQUFJQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsK0RBQVgsTUFBcUMsSUFBekMsRUFBK0M7QUFDN0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0EsYUFBTywyQkFBUDtBQUNEOztBQUNELFFBQUlKLElBQUksQ0FBQ0ssTUFBTCxHQUFjLENBQWxCLEVBQXFCLE9BQU87QUFBSyxlQUFTLEVBQUVDLHNFQUFVLENBQUNDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDs7QUFDckIsUUFBSVAsSUFBSSxDQUFDSyxNQUFMLEdBQWNWLFNBQWxCLEVBQTZCO0FBQzNCLGFBQU9LLElBQUksQ0FBQ1EsS0FBTCxDQUFXLENBQVgsRUFBYyxFQUFkLElBQW9CLEtBQTNCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT1IsSUFBUDtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxNQUFNUyxZQUFZLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUEzQixDQXBCSSxDQXNCSjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDakIsU0FBSyxDQUFDa0Is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TjtBQU9FLE9BQUcsRUFBRXZELFlBUFA7QUFRRSxXQUFPLEVBQUUsaUJBQUM4QyxDQUFEO0FBQUEsYUFBT3hDLFlBQVksQ0FBQ2tCLE9BQWIsQ0FBcUJnQyxLQUFyQixFQUFQO0FBQUEsS0FSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FiSixDQTdCRixDQURGO0FBa0VELENBeEtEOztHQUFNeEUsTTs7S0FBQUEsTTtBQXlLU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1FBQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJUW5BLCBUTGFuZ09wdGlvbiB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IGNvbXBTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYWRkQ29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBjbG9zZUJ0biwgQ3JlYXRlTGFuZ1N3aXRjaGVycywgU2F2ZUJ0biB9IGZyb20gXCIuL1Rlc3ROYW1lclwiO1xuaW1wb3J0IHsgVVJMQ2hlY2ssIFVSTENoZWNrRm9yTG9jYWxIb3N0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHNlbmRUaGVEYXRhVG9UaGVTZXJ2ZXIgfSBmcm9tIFwiLi9QaG90b01hbmFnZXJcIjtcblxuY29uc3QgUUFDYXJkID0gKHByb3BzOiB7XG4gIGNhcmRUeXBlOiBcImFuc3dlclwiIHwgXCJxdWVzdGlvblwiO1xuICBjYXJkQ29udGVudHM6IFwiaW1nXCIgfCBcInRleHRcIjtcbiAgLy8gc2F2ZURhdGE6IChkYXRhKSA9PiB2b2lkO1xuICBpdGVyYXRvcjogbnVtYmVyO1xuICBzZXRTZWxlY3RlZExhbmd1YWdlOiAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQ7XG4gIGlucHV0RW5hYmxlcjogKCkgPT4gdm9pZDtcbiAgcW5hOiBJUW5BO1xuICB0ZXN0VHlwZTogYW55O1xuICBxX2FfVGV4dEVudHJ5OiAodHlwZTogXCJhbnN3ZXJcIiB8IFwicXVlc3Rpb25cIiwgaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQ7XG4gIHRvZ2dsZVBob3RvTWFuYWdlcjogKHRvZ2dsZTogYm9vbGVhbiwgY2FyZElEOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldEN1cnJlbnRDYXJkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx1bmRlZmluZWQ+PjtcbiAgcGFnZUNvbnRlbnRzOiBzdHJpbmc7XG4gIGN1cnJlbnRMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdO1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IGNoYXJMaW1pdCA9IDkwO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5jYXJkQ29udGVudHMpO1xuICAvLyBjb25zb2xlLmxvZyhcIlRlc3QgZm9yIHBhZ2UgY29udGVudHNcIiwgcHJvcHMucGFnZUNvbnRlbnRzKTtcblxuICBjb25zdCB0ZXh0UHJldmlld2VyID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSB0ZXh0IHByZXZpZXdcIik7XG4gICAgaWYgKHRleHQubWF0Y2goVVJMQ2hlY2tGb3JMb2NhbEhvc3QpICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIHRoZXJlIGZyb20gVVJMIGNoZWNrZXJcIik7XG4gICAgICByZXR1cm4gXCJUaGVyZSB3YXMgYW4gaW1hZ2UgYmVmb3JlXCI7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA8IDEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5lbXB0eVRleHR9PlQ8L2Rpdj47XG4gICAgaWYgKHRleHQubGVuZ3RoID4gY2hhckxpbWl0KSB7XG4gICAgICByZXR1cm4gdGV4dC5zbGljZSgwLCA2NSkgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUUFDYXJkUmVmSU1HID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJZYXl5eVwiKTtcbiAgLy8gfSwgW1FBQ2FyZFJlZi5jdXJyZW50XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2FyZFJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRDdXJyZW50Q2FyZChRQUNhcmRSZWZJTUcpO1xuICAgIC8vIHByb3BzLnRvZ2dsZVBob3RvTWFuYWdlcihmYWxzZSwgYCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9YCk7XG4gIH07XG5cbiAgLy8hIEltYWdlIHVwbG9hZCBwb3J0aW9uXG5cbiAgY29uc3QgW3JlY2lldmVkSU1HTG9jYXRpb25zLCBzZXRSZWNpZXZlZElNR0xvY2F0aW9uXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHN0cmluZz5cbiAgPihbXSk7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCByZWFkQW5JbWFnZSA9IGFzeW5jIChpbWFnZVRvQmVSZWFkOiBCbG9iKSA9PiB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBvY2N1cmVkIHdoZW4gcmVhZGluZyB0aGUgZmlsZS5cIikpO1xuICAgICAgfTtcblxuICAgICAgdG1wRmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodG1wRmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHRtcEZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZVRvQmVSZWFkKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlaW5wdXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZmlsZUlucHV0UmVmLmN1cnJlbnQuZmlsZXNbMF0pO1xuICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudD8uZmlsZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNob3NlbkZpbGU6IEZpbGUgPSBmaWxlSW5wdXRSZWYhLmN1cnJlbnQhLmZpbGVzWzBdO1xuICAgICAgaWYgKGZpbGVJbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgcmVhZEFuSW1hZ2UoY2hvc2VuRmlsZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgICAvLyB0bXAucHVzaChmaWxlQ29udGVudHMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgXCJUaGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyB0aGUgZmlsZS4gUGxlYXNlIHRyeSBhZ2Fpbiwgb3IgY2hvb3NlIGEgZGlmZmVyZW5ldCBmaWxlXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiTm8gZmlsZSBoYXMgYmVlbiBjaG9zZW4uXCIpO1xuICAgIH1cbiAgICAvLyBzZW5kVGhlRGF0YVRvVGhlU2VydmVyKHRtcCwgc2V0UmVjaWV2ZWRJTUdMb2NhdGlvbik7XG4gICAgaWYgKFFBQ2FyZFJlZklNRy5jdXJyZW50LnNyYyAhPT0gbnVsbCkge1xuICAgICAgUUFDYXJkUmVmSU1HIS5jdXJyZW50IS5zcmMgPSByZWNpZXZlZElNR0xvY2F0aW9uc1swXTtcbiAgICB9XG5cbiAgICAvLyB0bXAucG9wKCk7XG4gICAgLy8gc2V0UmVjaWV2ZWRJTUdMb2NhdGlvbihbXSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIklucHV0IGhhcyBcIiwgZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmZpbGVzKTtcbiAgfSwgW2ZpbGVJbnB1dFJlZi5jdXJyZW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlc1twcm9wcy5jYXJkVHlwZV19YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIC8vIHJlZj17UUFDYXJkUmVmfVxuICAgICAgICBpZD17YCR7cHJvcHMuY2FyZFR5cGV9XyR7cHJvcHMuaXRlcmF0b3J9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHthZGRDb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9ICR7XG4gICAgICAgICAgIWlzT3BlbiA/IGFkZENvbXBTdHlsZXMuSGlkZGVuIDogbnVsbFxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgIHtjbG9zZUJ0bihzZXRJc09wZW4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRDb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgIHtDcmVhdGVMYW5nU3dpdGNoZXJzKFxuICAgICAgICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZExhbmd1YWdlLFxuICAgICAgICAgICAgICBwcm9wcy5pbnB1dEVuYWJsZXIsXG4gICAgICAgICAgICAgIHByb3BzLmN1cnJlbnRMYW5nXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICB7cHJvcHMuY2FyZENvbnRlbnRzID09PSBcInRleHRcIiAmJlxuICAgICAgICAgICAgICAgIHByb3BzLnFfYV9UZXh0RW50cnkocHJvcHMuY2FyZFR5cGUsIHByb3BzLml0ZXJhdG9yKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2FkZENvbXBTdHlsZXMuU2F2ZUJ0bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1NhdmVCdG4oKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuUUFEZXNjcmlwdGlvbn1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBwcm9wcy5jYXJkQ29udGVudHMgPT09IFwiaW1nXCJcbiAgICAgICAgICAgID8gaGFuZGxlQ2FyZFJlZmVyZW5jZSgpXG4gICAgICAgICAgICA6IHNldElzT3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNhcmRDb250ZW50cyA9PT0gXCJ0ZXh0XCIgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnRleHRJbkFDYXJkfT5cbiAgICAgICAgICAgIHt0ZXh0UHJldmlld2VyKHByb3BzLnFuYVtwcm9wcy5jYXJkVHlwZV0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRmlsZWlucHV0fSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuSU1HRm9ybX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkZpbGVDaG9vc2VyfVxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIHRoZSBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGlkPXtgJHtwcm9wcy5jYXJkVHlwZX1fJHtwcm9wcy5pdGVyYXRvcn1fcGFnZS0ke3Byb3BzLnBhZ2VOdW1iZXJ9YH1cbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiBjb25zb2xlLmxvZyhcIllBeXl5XCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuU2VsZWN0ZWRJTUdQcmV2aWV3fVxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLnBhZ2VDb250ZW50cyB8fCBcIlwifVxuICAgICAgICAgICAgICAvLyBzcmM9e3Byb3BzLnBhZ2VDb250ZW50cy5tYXRjaChVUkxDaGVjaykgPyBwcm9wcy5wYWdlQ29udGVudHMgOiBcIlwifVxuICAgICAgICAgICAgICBhbHQ9XCJObyBpbWFnZVwiXG4gICAgICAgICAgICAgIHJlZj17UUFDYXJkUmVmSU1HfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUUFDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QACard.tsx\n");

/***/ })

})