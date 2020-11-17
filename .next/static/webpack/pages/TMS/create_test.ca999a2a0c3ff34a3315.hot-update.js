webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PhotoManager.tsx":
/*!*************************************!*\
  !*** ./components/PhotoManager.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PhotoManager.module.scss */ \"./components/styles/PhotoManager.module.scss\");\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GAssets/upload_data.svg */ \"./GAssets/upload_data.svg\");\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PhotoManager.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar PhotoManager = function PhotoManager(props) {\n  _s();\n\n  function readUploadedIMG(_x) {\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  function _readUploadedIMG() {\n    _readUploadedIMG = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(inputFile) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem parsing input file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(inputFile);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var file, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              file = event.target.files[0];\n              _context.prev = 1;\n              _context.next = 4;\n              return readUploadedIMG(file);\n\n            case 4:\n              fileContents = _context.sent;\n              console.log(fileContents);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.warn(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleUpload(_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      upIMGs = _useState[0],\n      setUpIMGs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  function handleFileInput(_x3) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event) {\n      var tmp, fileIndex, _fileInput$current$fi, fileContents;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              tmp = [];\n\n              if (!(fileInput.current !== null && fileInput.current.files !== null)) {\n                _context3.next = 19;\n                break;\n              }\n\n              fileIndex = 0;\n\n            case 4:\n              if (!(fileIndex < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length))) {\n                _context3.next = 18;\n                break;\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return readUploadedIMG(fileInput.current.files[fileIndex]);\n\n            case 8:\n              fileContents = _context3.sent;\n              tmp.push(fileContents); // setUploadedImg(fileContents);\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              alert(_context3.t0);\n\n            case 15:\n              fileIndex++;\n              _context3.next = 4;\n              break;\n\n            case 18:\n              setUpIMGs(tmp);\n\n            case 19:\n              console.log(upIMGs);\n              axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:4000/tests/testIMG\", upIMGs).then(function (response) {\n                console.log(response.data);\n                setRecievedIMGLocation(response.data);\n              })[\"catch\"](function (error) {\n                console.log(error);\n              });\n\n            case 21:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var CustomRightArrow = function CustomRightArrow(_ref2) {\n    var _onClick = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref3) {\n    var _onClick2 = _ref3.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PhotosContainer, \" \").concat(!props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Contents,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerIconContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, \"Uploaded photos\"), __jsx(\"label\", {\n    htmlFor: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"Upload\",\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadIcon,\n    onClick: function onClick(e) {\n      return console.log(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.IMGPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    name: \"testio\",\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, \"Placeholder for image upload\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    ssr: true,\n    containerClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    itemClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Item,\n    responsive: _constants__WEBPACK_IMPORTED_MODULE_7__[\"responsive\"],\n    showDots: true,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 33\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 32\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }, recievedIMGLocations.map(function (image, index) {\n    return __jsx(\"div\", {\n      id: \"imageDiv_\".concat(index),\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      key: index,\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n      src: recievedIMGLocations[index],\n      alt: \"Oops\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 19\n      }\n    }), __jsx(\"img\", {\n      key: index + 1,\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n      src: recievedIMGLocations[index + 1],\n      alt: \"Oops\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 19\n      }\n    }));\n  }))))));\n};\n\n_s(PhotoManager, \"USZjpV/SRJxxk/qrJrApu1Ffirw=\");\n\n_c = PhotoManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoManager);\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PhotoManager\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4PzE1NDkiXSwibmFtZXMiOlsiUGhvdG9NYW5hZ2VyIiwicHJvcHMiLCJyZWFkVXBsb2FkZWRJTUciLCJpbnB1dEZpbGUiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJ1cElNR3MiLCJzZXRVcElNR3MiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJoYW5kbGVGaWxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInRtcCIsImZpbGVJbnB1dCIsImN1cnJlbnQiLCJmaWxlSW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwiYWxlcnQiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJ1c2VSZWYiLCJDdXN0b21SaWdodEFycm93Iiwib25DbGljayIsInJlc3QiLCJvbk1vdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwiZGV2aWNlVHlwZSIsInN0eWxpc2giLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJQaG90b3NDb250YWluZXIiLCJkaXNwbGF5ZWQiLCJ1bmRlZmluZWQiLCJIaWRkZW4iLCJDb250ZW50cyIsImhlYWRlckljb25Db250YWluZXIiLCJ1cGxvYWRJY29uIiwiZSIsIklNR1ByZXZpZXciLCJDYXJvdXNlbCIsIkl0ZW0iLCJyZXNwb25zaXZlIiwibWFw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cG9uZW50cy9QaG90b01hbmFnZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxpc2ggZnJvbSBcIi4vc3R5bGVzL1Bob3RvTWFuYWdlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHVwbG9hZEljb24gZnJvbSBcIi4uL0dBc3NldHMvdXBsb2FkX2RhdGEuc3ZnXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgeyByZXNwb25zaXZlIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5cbmNvbnN0IFBob3RvTWFuYWdlciA9IChwcm9wczogeyBkaXNwbGF5ZWQ6IGJvb2xlYW4gfSkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiByZWFkVXBsb2FkZWRJTUcoaW5wdXRGaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBwYXJzaW5nIGlucHV0IGZpbGUuXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIHRtcEZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRtcEZpbGVSZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICB0bXBGaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXRGaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jIChldmVudDogeyB0YXJnZXQ6IHsgZmlsZXM6IGFueVtdIH0gfSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRVcGxvYWRlZElNRyhmaWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVDb250ZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFt1cElNR3MsIHNldFVwSU1Hc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG5cbiAgY29uc3QgW3JlY2lldmVkSU1HTG9jYXRpb25zLCBzZXRSZWNpZXZlZElNR0xvY2F0aW9uXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHN0cmluZz5cbiAgPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmlsZUlucHV0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGlmIChmaWxlSW5wdXQuY3VycmVudCAhPT0gbnVsbCAmJiBmaWxlSW5wdXQuY3VycmVudC5maWxlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGZpbGVJbmRleCA9IDA7XG4gICAgICAgIGZpbGVJbmRleCA8IGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzPy5sZW5ndGg7XG4gICAgICAgIGZpbGVJbmRleCsrXG4gICAgICApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCByZWFkVXBsb2FkZWRJTUcoXG4gICAgICAgICAgICBmaWxlSW5wdXQuY3VycmVudC5maWxlc1tmaWxlSW5kZXhdXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0bXAucHVzaChmaWxlQ29udGVudHMpO1xuICAgICAgICAgIC8vIHNldFVwbG9hZGVkSW1nKGZpbGVDb250ZW50cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRVcElNR3ModG1wKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXBJTUdzKTtcbiAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL3Rlc3RJTUdcIiwgdXBJTUdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRSZWNpZXZlZElNR0xvY2F0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGlzaC5jYXJSaWdodEFycm93fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tTGVmdEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17c3R5bGlzaC5jYXJMZWZ0QXJyb3d9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxpc2guUGhvdG9zQ29udGFpbmVyfSAke1xuICAgICAgICAhcHJvcHMuZGlzcGxheWVkID8gdW5kZWZpbmVkIDogc3R5bGlzaC5IaWRkZW5cbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsaXNoLkNvbnRlbnRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guaGVhZGVySWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgzPlVwbG9hZGVkIHBob3RvczwvaDM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG90b1VwbG9hZFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBob3RvVXBsb2FkXCIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cGxvYWRJY29ufVxuICAgICAgICAgICAgICBhbHQ9XCJVcGxvYWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudXBsb2FkSWNvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guSU1HUHJldmlld30+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZpbGVJbnB1dH0+XG4gICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwidGVzdGlvXCJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8cD5QbGFjZWhvbGRlciBmb3IgaW1hZ2UgdXBsb2FkPC9wPlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgIHNzclxuICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz17c3R5bGlzaC5DYXJvdXNlbH1cbiAgICAgICAgICAgICAgaXRlbUNsYXNzPXtzdHlsaXNoLkl0ZW19XG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgIHNob3dEb3RzXG4gICAgICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxDdXN0b21MZWZ0QXJyb3cgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyZWNpZXZlZElNR0xvY2F0aW9ucy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BpbWFnZURpdl8ke2luZGV4fWB9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudG1wSU1HfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlY2lldmVkSU1HTG9jYXRpb25zW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiT29wc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLnRtcElNR31cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZWNpZXZlZElNR0xvY2F0aW9uc1tpbmRleCArIDFdfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJPb3BzXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG90b01hbmFnZXI7XG5jb25zdCBBcnJvdyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTVcIlxuICAgIGhlaWdodD1cIjI2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE1IDI2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yIDI0TDEzIDEzTDIgMlwiXG4gICAgICBzdHJva2U9XCIjMkY0ODU4XCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PhotoManager.tsx\n");

/***/ })

})