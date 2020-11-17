webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PhotoManager.tsx":
/*!*************************************!*\
  !*** ./components/PhotoManager.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PhotoManager.module.scss */ \"./components/styles/PhotoManager.module.scss\");\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GAssets/upload_data.svg */ \"./GAssets/upload_data.svg\");\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PhotoManager.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar PhotoManager = function PhotoManager(props) {\n  _s();\n\n  function readUploadedIMG(_x) {\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  function _readUploadedIMG() {\n    _readUploadedIMG = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(inputFile) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem parsing input file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(inputFile);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var file, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              file = event.target.files[0];\n              _context.prev = 1;\n              _context.next = 4;\n              return readUploadedIMG(file);\n\n            case 4:\n              fileContents = _context.sent;\n              console.log(fileContents);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.warn(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleUpload(_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      upIMGs = _useState[0],\n      setUpIMGs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  function handleFileInput(_x3) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event) {\n      var tmp, fileIndex, _fileInput$current$fi, fileContents;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              tmp = [];\n\n              if (!(fileInput.current !== null && fileInput.current.files !== null)) {\n                _context3.next = 19;\n                break;\n              }\n\n              fileIndex = 0;\n\n            case 4:\n              if (!(fileIndex < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length))) {\n                _context3.next = 18;\n                break;\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return readUploadedIMG(fileInput.current.files[fileIndex]);\n\n            case 8:\n              fileContents = _context3.sent;\n              tmp.push(fileContents); // setUploadedImg(fileContents);\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              alert(_context3.t0);\n\n            case 15:\n              fileIndex++;\n              _context3.next = 4;\n              break;\n\n            case 18:\n              setUpIMGs(tmp);\n\n            case 19:\n              axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:4000/tests/testIMG\", upIMGs).then(function (response) {\n                console.log(response.data);\n                setRecievedIMGLocation(response.data);\n              })[\"catch\"](function (error) {\n                console.log(error);\n              });\n\n            case 20:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var CustomRightArrow = function CustomRightArrow(_ref2) {\n    var _onClick = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref3) {\n    var _onClick2 = _ref3.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  function renderSelectedImages(recievedIMGLocations) {\n    var renderedImagesArray = [];\n    console.log(renderedImagesArray.length);\n\n    if (recievedIMGLocations.length !== 0) {\n      for (var i = 0; i < 10; i += 2) {\n        console.log(renderedImagesArray);\n        renderedImagesArray.push(__jsx(\"div\", {\n          className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imgContainer,\n          key: i,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 11\n          }\n        }, __jsx(\"img\", {\n          key: i,\n          className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n          src: recievedIMGLocations[i],\n          alt: \"Here be the image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }\n        }), __jsx(\"img\", {\n          src: recievedIMGLocations[i + 1],\n          alt: \"here be the second one\",\n          className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }\n        })));\n      }\n\n      console.log(renderedImagesArray);\n      return renderedImagesArray.map(function (el) {\n        return el;\n      });\n    } // return recievedIMGLocations.map((image, index) => (\n    //   <div\n    //     className={stylish.imgContainer}\n    //     id={`imageDiv_${index}`}\n    //     key={index}\n    //   >\n    //     <img\n    //       key={index}\n    //       className={stylish.tmpIMG}\n    //       src={recievedIMGLocations[index]}\n    //       alt=\"Oops\"\n    //     />\n    //   </div>\n    // ));\n\n  }\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PhotosContainer, \" \").concat(props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Contents,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerIconContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  }, \"Uploaded photos\"), __jsx(\"label\", {\n    htmlFor: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"Upload\",\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadIcon,\n    onClick: function onClick(e) {\n      return console.log(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.IMGPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    name: \"testio\",\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 13\n    }\n  }, \"Placeholder for image upload\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    ssr: true,\n    containerClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    itemClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Item,\n    responsive: _constants__WEBPACK_IMPORTED_MODULE_7__[\"responsive\"],\n    showDots: true,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 33\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 32\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }\n  }, recievedIMGLocations.length !== 0 ? renderSelectedImages(recievedIMGLocations) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null))))));\n};\n\n_s(PhotoManager, \"USZjpV/SRJxxk/qrJrApu1Ffirw=\");\n\n_c = PhotoManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoManager);\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PhotoManager\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4PzE1NDkiXSwibmFtZXMiOlsiUGhvdG9NYW5hZ2VyIiwicHJvcHMiLCJyZWFkVXBsb2FkZWRJTUciLCJpbnB1dEZpbGUiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJ1cElNR3MiLCJzZXRVcElNR3MiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJoYW5kbGVGaWxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInRtcCIsImZpbGVJbnB1dCIsImN1cnJlbnQiLCJmaWxlSW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwiYWxlcnQiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJ1c2VSZWYiLCJDdXN0b21SaWdodEFycm93Iiwib25DbGljayIsInJlc3QiLCJvbk1vdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwiZGV2aWNlVHlwZSIsInN0eWxpc2giLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJyZW5kZXJTZWxlY3RlZEltYWdlcyIsInJlbmRlcmVkSW1hZ2VzQXJyYXkiLCJpIiwiaW1nQ29udGFpbmVyIiwidG1wSU1HIiwibWFwIiwiZWwiLCJQaG90b3NDb250YWluZXIiLCJkaXNwbGF5ZWQiLCJ1bmRlZmluZWQiLCJIaWRkZW4iLCJDb250ZW50cyIsImhlYWRlckljb25Db250YWluZXIiLCJ1cGxvYWRJY29uIiwiZSIsIklNR1ByZXZpZXciLCJDYXJvdXNlbCIsIkl0ZW0iLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBbUM7QUFBQTs7QUFBQSxXQUN2Q0MsZUFEdUM7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ3RELGtCQUErQkMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLDJCQURSLEdBQ3dCLElBQUlDLFVBQUosRUFEeEI7QUFBQSxnREFHUyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDSiw2QkFBYSxDQUFDSyxPQUFkLEdBQXdCLFlBQU07QUFDNUJMLCtCQUFhLENBQUNNLEtBQWQ7QUFDQUYsd0JBQU0sQ0FBQyxJQUFJRyxZQUFKLENBQWlCLDZCQUFqQixDQUFELENBQU47QUFDRCxpQkFIRDs7QUFLQVAsNkJBQWEsQ0FBQ1EsTUFBZCxHQUF1QixZQUFNO0FBQzNCTCx5QkFBTyxDQUFDSCxhQUFhLENBQUNTLE1BQWYsQ0FBUDtBQUNELGlCQUZEOztBQUdBVCw2QkFBYSxDQUFDVSxhQUFkLENBQTRCWCxTQUE1QjtBQUNELGVBVk0sQ0FIVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURzRDtBQUFBO0FBQUE7O0FBaUJ0RCxNQUFNWSxZQUFZO0FBQUEsZ01BQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGtCQURhLEdBQ05ELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBRE07QUFBQTtBQUFBO0FBQUEscUJBR1VqQixlQUFlLENBQUNlLElBQUQsQ0FIekI7O0FBQUE7QUFHWEcsMEJBSFc7QUFJakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBWjtBQUppQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1qQkMscUJBQU8sQ0FBQ0UsSUFBUixDQUFhLFlBQUVDLE9BQWY7O0FBTmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpULFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBakJzRCxrQkEyQjFCVSxzREFBUSxDQUFhLEVBQWIsQ0EzQmtCO0FBQUEsTUEyQi9DQyxNQTNCK0M7QUFBQSxNQTJCdkNDLFNBM0J1Qzs7QUFBQSxtQkE2QkNGLHNEQUFRLENBRTdELEVBRjZELENBN0JUO0FBQUEsTUE2Qi9DRyxvQkE3QitDO0FBQUEsTUE2QnpCQyxzQkE3QnlCOztBQUFBLFdBaUN2Q0MsZUFqQ3VDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQWlDdEQsa0JBQStCZCxLQUEvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNlLGNBQU47QUFDSUMsaUJBRk4sR0FFWSxFQUZaOztBQUFBLG9CQUdNQyxTQUFTLENBQUNDLE9BQVYsS0FBc0IsSUFBdEIsSUFBOEJELFNBQVMsQ0FBQ0MsT0FBVixDQUFrQmYsS0FBbEIsS0FBNEIsSUFIaEU7QUFBQTtBQUFBO0FBQUE7O0FBS1VnQix1QkFMVixHQUtzQixDQUx0Qjs7QUFBQTtBQUFBLG9CQU1NQSxTQUFTLDZCQUFHRixTQUFTLENBQUNDLE9BQVYsQ0FBa0JmLEtBQXJCLDBEQUFHLHNCQUF5QmlCLE1BQTVCLENBTmY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQVVtQ2xDLGVBQWUsQ0FDeEMrQixTQUFTLENBQUNDLE9BQVYsQ0FBa0JmLEtBQWxCLENBQXdCZ0IsU0FBeEIsQ0FEd0MsQ0FWbEQ7O0FBQUE7QUFVY2YsMEJBVmQ7QUFhUVksaUJBQUcsQ0FBQ0ssSUFBSixDQUFTakIsWUFBVCxFQWJSLENBY1E7O0FBZFI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQlFrQixtQkFBSyxjQUFMOztBQWhCUjtBQU9NSCx1QkFBUyxFQVBmO0FBQUE7QUFBQTs7QUFBQTtBQW1CSVIsdUJBQVMsQ0FBQ0ssR0FBRCxDQUFUOztBQW5CSjtBQXFCRU8sMERBQUssQ0FBQ0MsSUFBTixDQUFXLHFDQUFYLEVBQWtEZCxNQUFsRCxFQUNHZSxJQURILENBQ1EsVUFBVUMsUUFBVixFQUFvQjtBQUN4QnJCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWW9CLFFBQVEsQ0FBQ0MsSUFBckI7QUFDQWQsc0NBQXNCLENBQUNhLFFBQVEsQ0FBQ0MsSUFBVixDQUF0QjtBQUNELGVBSkgsV0FLUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCdkIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsS0FBWjtBQUNELGVBUEg7O0FBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakNzRDtBQUFBO0FBQUE7O0FBK0R0RCxNQUFNWCxTQUFTLEdBQUdZLG9EQUFNLENBQW1CLElBQW5CLENBQXhCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsUUFBMEI7QUFBQSxRQUF2QkMsUUFBdUIsU0FBdkJBLE9BQXVCO0FBQUEsUUFBWEMsSUFBVzs7QUFBQSxRQUUvQ0MsTUFGK0MsR0FJN0NELElBSjZDLENBRS9DQyxNQUYrQztBQUFBLDhCQUk3Q0QsSUFKNkMsQ0FHL0NFLGFBSCtDO0FBQUEsUUFHOUJDLFlBSDhCLHVCQUc5QkEsWUFIOEI7QUFBQSxRQUdoQkMsVUFIZ0IsdUJBR2hCQSxVQUhnQixFQUtqRDs7QUFDQSxXQUNFO0FBQVEsZUFBUyxFQUFFQyx1RUFBTyxDQUFDQyxhQUEzQjtBQUEwQyxhQUFPLEVBQUU7QUFBQSxlQUFNUCxRQUFPLEVBQWI7QUFBQSxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dRLEtBQUssRUFEUixDQURGO0FBS0QsR0FYRDs7QUFhQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQTBCO0FBQUEsUUFBdkJULFNBQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFFBQVhDLElBQVc7O0FBQUEsUUFFOUNDLE1BRjhDLEdBSTVDRCxJQUo0QyxDQUU5Q0MsTUFGOEM7QUFBQSwrQkFJNUNELElBSjRDLENBRzlDRSxhQUg4QztBQUFBLFFBRzdCQyxZQUg2Qix3QkFHN0JBLFlBSDZCO0FBQUEsUUFHZkMsVUFIZSx3QkFHZkEsVUFIZTtBQUtoRCxXQUNFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUwsU0FBTyxFQUFiO0FBQUEsT0FBakI7QUFBa0MsZUFBUyxFQUFFTSx1RUFBTyxDQUFDSSxZQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dGLEtBQUssRUFEUixDQURGO0FBS0QsR0FWRDs7QUFZQSxXQUFTRyxvQkFBVCxDQUE4QjlCLG9CQUE5QixFQUFtRTtBQUNqRSxRQUFJK0IsbUJBQW1CLEdBQUcsRUFBMUI7QUFDQXRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZcUMsbUJBQW1CLENBQUN2QixNQUFoQzs7QUFDQSxRQUFJUixvQkFBb0IsQ0FBQ1EsTUFBckIsS0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckMsV0FBSyxJQUFJd0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxJQUFJLENBQTdCLEVBQWdDO0FBQzlCdkMsZUFBTyxDQUFDQyxHQUFSLENBQVlxQyxtQkFBWjtBQUNBQSwyQkFBbUIsQ0FBQ3RCLElBQXBCLENBQ0U7QUFBSyxtQkFBUyxFQUFFZ0IsdUVBQU8sQ0FBQ1EsWUFBeEI7QUFBc0MsYUFBRyxFQUFFRCxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFDRSxhQUFHLEVBQUVBLENBRFA7QUFFRSxtQkFBUyxFQUFFUCx1RUFBTyxDQUFDUyxNQUZyQjtBQUdFLGFBQUcsRUFBRWxDLG9CQUFvQixDQUFDZ0MsQ0FBRCxDQUgzQjtBQUlFLGFBQUcsRUFBQyxtQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFPRTtBQUNFLGFBQUcsRUFBRWhDLG9CQUFvQixDQUFDZ0MsQ0FBQyxHQUFHLENBQUwsQ0FEM0I7QUFFRSxhQUFHLEVBQUMsd0JBRk47QUFHRSxtQkFBUyxFQUFFUCx1RUFBTyxDQUFDUyxNQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUEYsQ0FERjtBQWVEOztBQUNEekMsYUFBTyxDQUFDQyxHQUFSLENBQVlxQyxtQkFBWjtBQUNBLGFBQU9BLG1CQUFtQixDQUFDSSxHQUFwQixDQUF3QixVQUFDQyxFQUFEO0FBQUEsZUFBUUEsRUFBUjtBQUFBLE9BQXhCLENBQVA7QUFDRCxLQXhCZ0UsQ0F5QmpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Q7O0FBRUQsU0FDRTtBQUNFLGFBQVMsWUFBS1gsdUVBQU8sQ0FBQ1ksZUFBYixjQUNQaEUsS0FBSyxDQUFDaUUsU0FBTixHQUFrQkMsU0FBbEIsR0FBOEJkLHVFQUFPLENBQUNlLE1BRC9CLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFFZix1RUFBTyxDQUFDZ0IsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFaEIsdUVBQU8sQ0FBQ2lCLG1CQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQU8sV0FBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsT0FBRyxFQUFFQywrREFEUDtBQUVFLE9BQUcsRUFBQyxRQUZOO0FBR0UsYUFBUyxFQUFFbEIsdUVBQU8sQ0FBQ2tCLFVBSHJCO0FBSUUsV0FBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsYUFBT25ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0QsQ0FBWixDQUFQO0FBQUEsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixDQURGLEVBYUU7QUFBSyxhQUFTLEVBQUVuQix1RUFBTyxDQUFDb0IsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFM0MsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFRLE1BSFY7QUFJRSxVQUFNLEVBQUMsU0FKVDtBQUtFLE9BQUcsRUFBRUcsU0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQVZGLEVBV0UsTUFBQywyREFBRDtBQUNFLE9BQUcsTUFETDtBQUVFLGtCQUFjLEVBQUVvQix1RUFBTyxDQUFDcUIsUUFGMUI7QUFHRSxhQUFTLEVBQUVyQix1RUFBTyxDQUFDc0IsSUFIckI7QUFJRSxjQUFVLEVBQUVDLHFEQUpkO0FBS0UsWUFBUSxNQUxWO0FBTUUsb0JBQWdCLEVBQUUsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTnBCO0FBT0UsbUJBQWUsRUFBRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0doRCxvQkFBb0IsQ0FBQ1EsTUFBckIsS0FBZ0MsQ0FBaEMsR0FDQ3NCLG9CQUFvQixDQUFDOUIsb0JBQUQsQ0FEckIsR0FHQyxrRUFaSixDQVhGLENBREYsQ0FiRixDQUxGLENBREY7QUFtREQsQ0F0TEQ7O0dBQU01QixZOztLQUFBQSxZO0FBd0xTQSwyRUFBZjs7QUFDQSxJQUFNdUQsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUNaO0FBQ0UsU0FBSyxFQUFDLElBRFI7QUFFRSxVQUFNLEVBQUMsSUFGVDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxTQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsS0FBQyxFQUFDLGlCQURKO0FBRUUsVUFBTSxFQUFDLFNBRlQ7QUFHRSxvQkFBYSxHQUhmO0FBSUUsc0JBQWUsT0FKakI7QUFLRSx1QkFBZ0IsT0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBRFk7QUFBQSxDQUFkOztNQUFNQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxpc2ggZnJvbSBcIi4vc3R5bGVzL1Bob3RvTWFuYWdlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHVwbG9hZEljb24gZnJvbSBcIi4uL0dBc3NldHMvdXBsb2FkX2RhdGEuc3ZnXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgeyByZXNwb25zaXZlIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5cbmNvbnN0IFBob3RvTWFuYWdlciA9IChwcm9wczogeyBkaXNwbGF5ZWQ6IGJvb2xlYW4gfSkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiByZWFkVXBsb2FkZWRJTUcoaW5wdXRGaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBwYXJzaW5nIGlucHV0IGZpbGUuXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIHRtcEZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRtcEZpbGVSZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICB0bXBGaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXRGaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jIChldmVudDogeyB0YXJnZXQ6IHsgZmlsZXM6IGFueVtdIH0gfSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRVcGxvYWRlZElNRyhmaWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVDb250ZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFt1cElNR3MsIHNldFVwSU1Hc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG5cbiAgY29uc3QgW3JlY2lldmVkSU1HTG9jYXRpb25zLCBzZXRSZWNpZXZlZElNR0xvY2F0aW9uXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHN0cmluZz5cbiAgPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmlsZUlucHV0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGlmIChmaWxlSW5wdXQuY3VycmVudCAhPT0gbnVsbCAmJiBmaWxlSW5wdXQuY3VycmVudC5maWxlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGZpbGVJbmRleCA9IDA7XG4gICAgICAgIGZpbGVJbmRleCA8IGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzPy5sZW5ndGg7XG4gICAgICAgIGZpbGVJbmRleCsrXG4gICAgICApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCByZWFkVXBsb2FkZWRJTUcoXG4gICAgICAgICAgICBmaWxlSW5wdXQuY3VycmVudC5maWxlc1tmaWxlSW5kZXhdXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0bXAucHVzaChmaWxlQ29udGVudHMpO1xuICAgICAgICAgIC8vIHNldFVwbG9hZGVkSW1nKGZpbGVDb250ZW50cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRVcElNR3ModG1wKTtcbiAgICB9XG4gICAgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC90ZXN0cy90ZXN0SU1HXCIsIHVwSU1HcylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UmVjaWV2ZWRJTUdMb2NhdGlvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG4gIGNvbnN0IGZpbGVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBDdXN0b21SaWdodEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICAvLyBvbk1vdmUgbWVhbnMgaWYgZHJhZ2dpbmcgb3Igc3dpcGluZyBpbiBwcm9ncmVzcy5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxpc2guY2FyUmlnaHRBcnJvd30gb25DbGljaz17KCkgPT4gb25DbGljaygpfT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEN1c3RvbUxlZnRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljaygpfSBjbGFzc05hbWU9e3N0eWxpc2guY2FyTGVmdEFycm93fT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbmRlclNlbGVjdGVkSW1hZ2VzKHJlY2lldmVkSU1HTG9jYXRpb25zOiBzdHJpbmdbXSk6IGFueSB7XG4gICAgbGV0IHJlbmRlcmVkSW1hZ2VzQXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEltYWdlc0FycmF5Lmxlbmd0aCk7XG4gICAgaWYgKHJlY2lldmVkSU1HTG9jYXRpb25zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkSW1hZ2VzQXJyYXkpO1xuICAgICAgICByZW5kZXJlZEltYWdlc0FycmF5LnB1c2goXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guaW1nQ29udGFpbmVyfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGlzaC50bXBJTUd9XG4gICAgICAgICAgICAgIHNyYz17cmVjaWV2ZWRJTUdMb2NhdGlvbnNbaV19XG4gICAgICAgICAgICAgIGFsdD1cIkhlcmUgYmUgdGhlIGltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cmVjaWV2ZWRJTUdMb2NhdGlvbnNbaSArIDFdfVxuICAgICAgICAgICAgICBhbHQ9XCJoZXJlIGJlIHRoZSBzZWNvbmQgb25lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLnRtcElNR31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhyZW5kZXJlZEltYWdlc0FycmF5KTtcbiAgICAgIHJldHVybiByZW5kZXJlZEltYWdlc0FycmF5Lm1hcCgoZWwpID0+IGVsKTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHJlY2lldmVkSU1HTG9jYXRpb25zLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgLy8gICA8ZGl2XG4gICAgLy8gICAgIGNsYXNzTmFtZT17c3R5bGlzaC5pbWdDb250YWluZXJ9XG4gICAgLy8gICAgIGlkPXtgaW1hZ2VEaXZfJHtpbmRleH1gfVxuICAgIC8vICAgICBrZXk9e2luZGV4fVxuICAgIC8vICAgPlxuICAgIC8vICAgICA8aW1nXG4gICAgLy8gICAgICAga2V5PXtpbmRleH1cbiAgICAvLyAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudG1wSU1HfVxuICAgIC8vICAgICAgIHNyYz17cmVjaWV2ZWRJTUdMb2NhdGlvbnNbaW5kZXhdfVxuICAgIC8vICAgICAgIGFsdD1cIk9vcHNcIlxuICAgIC8vICAgICAvPlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGlzaC5QaG90b3NDb250YWluZXJ9ICR7XG4gICAgICAgIHByb3BzLmRpc3BsYXllZCA/IHVuZGVmaW5lZCA6IHN0eWxpc2guSGlkZGVuXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGlzaC5Db250ZW50c30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsaXNoLmhlYWRlckljb25Db250YWluZXJ9PlxuICAgICAgICAgIDxoMz5VcGxvYWRlZCBwaG90b3M8L2gzPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvdG9VcGxvYWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJwaG90b1VwbG9hZFwiIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXBsb2FkSWNvbn1cbiAgICAgICAgICAgICAgYWx0PVwiVXBsb2FkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLnVwbG9hZEljb259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsaXNoLklNR1ByZXZpZXd9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGaWxlSW5wdXR9PlxuICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBpbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInRlc3Rpb1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgPHA+UGxhY2Vob2xkZXIgZm9yIGltYWdlIHVwbG9hZDwvcD5cbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICBzc3JcbiAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9e3N0eWxpc2guQ2Fyb3VzZWx9XG4gICAgICAgICAgICAgIGl0ZW1DbGFzcz17c3R5bGlzaC5JdGVtfVxuICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICBzaG93RG90c1xuICAgICAgICAgICAgICBjdXN0b21SaWdodEFycm93PXs8Q3VzdG9tUmlnaHRBcnJvdyAvPn1cbiAgICAgICAgICAgICAgY3VzdG9tTGVmdEFycm93PXs8Q3VzdG9tTGVmdEFycm93IC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cmVjaWV2ZWRJTUdMb2NhdGlvbnMubGVuZ3RoICE9PSAwID8gKFxuICAgICAgICAgICAgICAgIHJlbmRlclNlbGVjdGVkSW1hZ2VzKHJlY2lldmVkSU1HTG9jYXRpb25zKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvTWFuYWdlcjtcbmNvbnN0IEFycm93ID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNVwiXG4gICAgaGVpZ2h0PVwiMjZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTUgMjZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIgMjRMMTMgMTNMMiAyXCJcbiAgICAgIHN0cm9rZT1cIiMyRjQ4NThcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PhotoManager.tsx\n");

/***/ })

})