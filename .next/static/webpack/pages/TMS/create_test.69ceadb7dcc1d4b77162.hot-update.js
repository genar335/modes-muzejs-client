webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PhotoManager.tsx":
/*!*************************************!*\
  !*** ./components/PhotoManager.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PhotoManager.module.scss */ \"./components/styles/PhotoManager.module.scss\");\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GAssets/upload_data.svg */ \"./GAssets/upload_data.svg\");\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PhotoManager.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nvar PhotoManager = function PhotoManager(props) {\n  _s();\n\n  function readUploadedIMG(_x) {\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  function _readUploadedIMG() {\n    _readUploadedIMG = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(inputFile) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem parsing input file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(inputFile);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var file, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              file = event.target.files[0];\n              _context.prev = 1;\n              _context.next = 4;\n              return readUploadedIMG(file);\n\n            case 4:\n              fileContents = _context.sent;\n              console.log(fileContents);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.warn(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleUpload(_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      upIMGs = _useState[0],\n      setUpIMGs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  function handleFileInput(_x3) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event) {\n      var tmp, fileIndex, _fileInput$current$fi, fileContents;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              tmp = [];\n\n              if (!(fileInput.current !== null && fileInput.current.files !== null)) {\n                _context3.next = 19;\n                break;\n              }\n\n              fileIndex = 0;\n\n            case 4:\n              if (!(fileIndex < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length))) {\n                _context3.next = 18;\n                break;\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return readUploadedIMG(fileInput.current.files[fileIndex]);\n\n            case 8:\n              fileContents = _context3.sent;\n              tmp.push(fileContents); // setUploadedImg(fileContents);\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              alert(_context3.t0);\n\n            case 15:\n              fileIndex++;\n              _context3.next = 4;\n              break;\n\n            case 18:\n              setUpIMGs(tmp);\n\n            case 19:\n              console.log(upIMGs);\n              axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"http://localhost:4000/tests/testIMG\", upIMGs).then(function (response) {\n                console.log(response.data);\n                setRecievedIMGLocation(response.data);\n              })[\"catch\"](function (error) {\n                console.log(error);\n              });\n\n            case 21:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var CustomRightArrow = function CustomRightArrow(_ref2) {\n    var _onClick = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref3) {\n    var _onClick2 = _ref3.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.PhotosContainer, \" \").concat(!props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Contents,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerIconContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, \"Uploaded photos\"), __jsx(\"label\", {\n    htmlFor: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    alt: \"Upload\",\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.uploadIcon,\n    onClick: function onClick(e) {\n      return console.log(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.IMGPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    name: \"testio\",\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, \"Placeholder for image upload\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    ssr: true,\n    containerClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Carousel,\n    itemClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Item,\n    responsive: _constants__WEBPACK_IMPORTED_MODULE_8__[\"responsive\"],\n    showDots: true,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 33\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 32\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }, recievedIMGLocations.map(function (image, index) {\n    return __jsx(\"div\", {\n      id: \"imageDiv_\".concat(index),\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      key: index,\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tmpIMG,\n      src: recievedIMGLocations[index],\n      alt: \"Oops\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 19\n      }\n    }), __jsx(\"img\", {\n      key: index + 1,\n      className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n      src: recievedIMGLocations[index + 1],\n      alt: \"Oops\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 19\n      }\n    }));\n  }))))));\n};\n\n_s(PhotoManager, \"USZjpV/SRJxxk/qrJrApu1Ffirw=\");\n\n_c = PhotoManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoManager);\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PhotoManager\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4PzE1NDkiXSwibmFtZXMiOlsiUGhvdG9NYW5hZ2VyIiwicHJvcHMiLCJyZWFkVXBsb2FkZWRJTUciLCJpbnB1dEZpbGUiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJ1cElNR3MiLCJzZXRVcElNR3MiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJoYW5kbGVGaWxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInRtcCIsImZpbGVJbnB1dCIsImN1cnJlbnQiLCJmaWxlSW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwiYWxlcnQiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJ1c2VSZWYiLCJDdXN0b21SaWdodEFycm93Iiwib25DbGljayIsInJlc3QiLCJvbk1vdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwiZGV2aWNlVHlwZSIsInN0eWxpc2giLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJQaG90b3NDb250YWluZXIiLCJkaXNwbGF5ZWQiLCJ1bmRlZmluZWQiLCJIaWRkZW4iLCJDb250ZW50cyIsImhlYWRlckljb25Db250YWluZXIiLCJ1cGxvYWRJY29uIiwiZSIsIklNR1ByZXZpZXciLCJDYXJvdXNlbCIsIkl0ZW0iLCJyZXNwb25zaXZlIiwibWFw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LCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob3RvTWFuYWdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc3R5bGlzaCBmcm9tIFwiLi9zdHlsZXMvUGhvdG9NYW5hZ2VyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgdXBsb2FkSWNvbiBmcm9tIFwiLi4vR0Fzc2V0cy91cGxvYWRfZGF0YS5zdmdcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHJlc3BvbnNpdmUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcImNvbnNvbGVcIjtcblxuY29uc3QgUGhvdG9NYW5hZ2VyID0gKHByb3BzOiB7IGRpc3BsYXllZDogYm9vbGVhbiB9KSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlYWRVcGxvYWRlZElNRyhpbnB1dEZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCB0bXBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0bXBGaWxlUmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHRtcEZpbGVSZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oXCJQcm9ibGVtIHBhcnNpbmcgaW5wdXQgZmlsZS5cIikpO1xuICAgICAgfTtcblxuICAgICAgdG1wRmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodG1wRmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHRtcEZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dEZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKGV2ZW50OiB7IHRhcmdldDogeyBmaWxlczogYW55W10gfSB9KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgcmVhZFVwbG9hZGVkSU1HKGZpbGUpO1xuICAgICAgY29uc29sZS5sb2coZmlsZUNvbnRlbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3VwSU1Hcywgc2V0VXBJTUdzXSA9IHVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcblxuICBjb25zdCBbcmVjaWV2ZWRJTUdMb2NhdGlvbnMsIHNldFJlY2lldmVkSU1HTG9jYXRpb25dID0gdXNlU3RhdGU8XG4gICAgQXJyYXk8c3RyaW5nPlxuICA+KFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlSW5wdXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdG1wID0gW107XG4gICAgaWYgKGZpbGVJbnB1dC5jdXJyZW50ICE9PSBudWxsICYmIGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgZmlsZUluZGV4ID0gMDtcbiAgICAgICAgZmlsZUluZGV4IDwgZmlsZUlucHV0LmN1cnJlbnQuZmlsZXM/Lmxlbmd0aDtcbiAgICAgICAgZmlsZUluZGV4KytcbiAgICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRVcGxvYWRlZElNRyhcbiAgICAgICAgICAgIGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzW2ZpbGVJbmRleF1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRtcC5wdXNoKGZpbGVDb250ZW50cyk7XG4gICAgICAgICAgLy8gc2V0VXBsb2FkZWRJbWcoZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFVwSU1Hcyh0bXApO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1cElNR3MpO1xuICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvdGVzdHMvdGVzdElNR1wiLCB1cElNR3MpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldFJlY2lldmVkSU1HTG9jYXRpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgQ3VzdG9tUmlnaHRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgLy8gb25Nb3ZlIG1lYW5zIGlmIGRyYWdnaW5nIG9yIHN3aXBpbmcgaW4gcHJvZ3Jlc3MuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsaXNoLmNhclJpZ2h0QXJyb3d9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21MZWZ0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0gY2xhc3NOYW1lPXtzdHlsaXNoLmNhckxlZnRBcnJvd30+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGlzaC5QaG90b3NDb250YWluZXJ9ICR7XG4gICAgICAgICFwcm9wcy5kaXNwbGF5ZWQgPyB1bmRlZmluZWQgOiBzdHlsaXNoLkhpZGRlblxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guQ29udGVudHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGlzaC5oZWFkZXJJY29uQ29udGFpbmVyfT5cbiAgICAgICAgICA8aDM+VXBsb2FkZWQgcGhvdG9zPC9oMz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob3RvVXBsb2FkXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwicGhvdG9VcGxvYWRcIiAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VwbG9hZEljb259XG4gICAgICAgICAgICAgIGFsdD1cIlVwbG9hZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGlzaC51cGxvYWRJY29ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29uc29sZS5sb2coZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGlzaC5JTUdQcmV2aWV3fT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRmlsZUlucHV0fT5cbiAgICAgICAgICAgIDxsYWJlbD5VcGxvYWQgaW1hZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXN0aW9cIlxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICByZWY9e2ZpbGVJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgIDxwPlBsYWNlaG9sZGVyIGZvciBpbWFnZSB1cGxvYWQ8L3A+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgc3NyXG4gICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtzdHlsaXNoLkNhcm91c2VsfVxuICAgICAgICAgICAgICBpdGVtQ2xhc3M9e3N0eWxpc2guSXRlbX1cbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgc2hvd0RvdHNcbiAgICAgICAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PEN1c3RvbVJpZ2h0QXJyb3cgLz59XG4gICAgICAgICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PEN1c3RvbUxlZnRBcnJvdyAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3JlY2lldmVkSU1HTG9jYXRpb25zLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YGltYWdlRGl2XyR7aW5kZXh9YH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGlzaC50bXBJTUd9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVjaWV2ZWRJTUdMb2NhdGlvbnNbaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJPb3BzXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50bXBJTUd9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVjaWV2ZWRJTUdMb2NhdGlvbnNbaW5kZXggKyAxXX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiT29wc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9NYW5hZ2VyO1xuY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE1XCJcbiAgICBoZWlnaHQ9XCIyNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNSAyNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMiAyNEwxMyAxM0wyIDJcIlxuICAgICAgc3Ryb2tlPVwiIzJGNDg1OFwiXG4gICAgICBzdHJva2Utd2lkdGg9XCIzXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PhotoManager.tsx\n");

/***/ })

})