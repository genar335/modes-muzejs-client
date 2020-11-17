webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PhotoManager.tsx":
/*!*************************************!*\
  !*** ./components/PhotoManager.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PhotoManager.module.scss */ \"./components/styles/PhotoManager.module.scss\");\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GAssets/upload_data.svg */ \"./GAssets/upload_data.svg\");\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PhotoManager.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar PhotoManager = function PhotoManager(props) {\n  _s();\n\n  function readUploadedIMG(_x) {\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  function _readUploadedIMG() {\n    _readUploadedIMG = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(inputFile) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem parsing input file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(inputFile);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var file, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              file = event.target.files[0];\n              _context.prev = 1;\n              _context.next = 4;\n              return readUploadedIMG(file);\n\n            case 4:\n              fileContents = _context.sent;\n              console.log(fileContents);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.warn(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleUpload(_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      upIMGs = _useState[0],\n      setUpIMGs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  function handleFileInput(_x3) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event) {\n      var tmp, fileIndex, _fileInput$current$fi, fileContents;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              tmp = [];\n\n              if (!(fileInput.current !== null && fileInput.current.files !== null)) {\n                _context3.next = 19;\n                break;\n              }\n\n              fileIndex = 0;\n\n            case 4:\n              if (!(fileIndex < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length))) {\n                _context3.next = 18;\n                break;\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return readUploadedIMG(fileInput.current.files[fileIndex]);\n\n            case 8:\n              fileContents = _context3.sent;\n              tmp.push(fileContents); // setUploadedImg(fileContents);\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              alert(_context3.t0);\n\n            case 15:\n              fileIndex++;\n              _context3.next = 4;\n              break;\n\n            case 18:\n              setUpIMGs(tmp);\n\n            case 19:\n              axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:4000/tests/testIMG\", upIMGs).then(function (response) {\n                console.log(response.data);\n                setRecievedIMGLocation(response.data);\n              })[\"catch\"](function (error) {\n                console.log(error);\n              });\n\n            case 20:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var CustomRightArrow = function CustomRightArrow(_ref2) {\n    var _onClick = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref3) {\n    var _onClick2 = _ref3.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  function renderSelectedImages(recievedIMGLocations) {\n    var renderedImagesArray = [];\n    console.log(renderedImagesArray.length);\n\n    if (recievedIMGLocations.length !== 0) {\n      for (var i = 0; i < 10; i = +2) {\n        console.log(renderedImagesArray);\n        renderedImagesArray.push(__jsx(\"div\", {\n          className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imgContainer,\n          key: i,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 11\n          }\n        }, __jsx(\"img\", {\n          key: i,\n          className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n          src: recievedIMGLocations[i],\n          alt: \"Here be the image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }\n        }), __jsx(\"img\", {\n          src: recievedIMGLocations[i + 1],\n          alt: \"here be the second one\",\n          className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }\n        })));\n      }\n\n      console.log(renderedImagesArray);\n      return renderedImagesArray.map(function (el) {\n        return el;\n      });\n    } // return recievedIMGLocations.map((image, index) => (\n    //   <div\n    //     className={stylish.imgContainer}\n    //     id={`imageDiv_${index}`}\n    //     key={index}\n    //   >\n    //     <img\n    //       key={index}\n    //       className={stylish.tmpIMG}\n    //       src={recievedIMGLocations[index]}\n    //       alt=\"Oops\"\n    //     />\n    //   </div>\n    // ));\n\n  }\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PhotosContainer, \" \").concat(props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Contents,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerIconContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  }, \"Uploaded photos\"), __jsx(\"label\", {\n    htmlFor: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"Upload\",\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadIcon,\n    onClick: function onClick(e) {\n      return console.log(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.IMGPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    name: \"testio\",\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 13\n    }\n  }, \"Placeholder for image upload\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    ssr: true,\n    containerClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    itemClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Item,\n    responsive: _constants__WEBPACK_IMPORTED_MODULE_7__[\"responsive\"],\n    showDots: true,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 33\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 32\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }\n  }, recievedIMGLocations.length !== 0 ? renderSelectedImages(recievedIMGLocations) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null))))));\n};\n\n_s(PhotoManager, \"USZjpV/SRJxxk/qrJrApu1Ffirw=\");\n\n_c = PhotoManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoManager);\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PhotoManager\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4PzE1NDkiXSwibmFtZXMiOlsiUGhvdG9NYW5hZ2VyIiwicHJvcHMiLCJyZWFkVXBsb2FkZWRJTUciLCJpbnB1dEZpbGUiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJ1cElNR3MiLCJzZXRVcElNR3MiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJoYW5kbGVGaWxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInRtcCIsImZpbGVJbnB1dCIsImN1cnJlbnQiLCJmaWxlSW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwiYWxlcnQiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJ1c2VSZWYiLCJDdXN0b21SaWdodEFycm93Iiwib25DbGljayIsInJlc3QiLCJvbk1vdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwiZGV2aWNlVHlwZSIsInN0eWxpc2giLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJyZW5kZXJTZWxlY3RlZEltYWdlcyIsInJlbmRlcmVkSW1hZ2VzQXJyYXkiLCJpIiwiaW1nQ29udGFpbmVyIiwidG1wSU1HIiwibWFwIiwiZWwiLCJQaG90b3NDb250YWluZXIiLCJkaXNwbGF5ZWQiLCJ1bmRlZmluZWQiLCJIaWRkZW4iLCJDb250ZW50cyIsImhlYWRlckljb25Db250YWluZXIiLCJ1cGxvYWRJY29uIiwiZSIsIklNR1ByZXZpZXciLCJDYXJvdXNlbCIsIkl0ZW0iLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBbUM7QUFBQTs7QUFBQSxXQUN2Q0MsZUFEdUM7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ3RELGtCQUErQkMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLDJCQURSLEdBQ3dCLElBQUlDLFVBQUosRUFEeEI7QUFBQSxnREFHUyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDSiw2QkFBYSxDQUFDSyxPQUFkLEdBQXdCLFlBQU07QUFDNUJMLCtCQUFhLENBQUNNLEtBQWQ7QUFDQUYsd0JBQU0sQ0FBQyxJQUFJRyxZQUFKLENBQWlCLDZCQUFqQixDQUFELENBQU47QUFDRCxpQkFIRDs7QUFLQVAsNkJBQWEsQ0FBQ1EsTUFBZCxHQUF1QixZQUFNO0FBQzNCTCx5QkFBTyxDQUFDSCxhQUFhLENBQUNTLE1BQWYsQ0FBUDtBQUNELGlCQUZEOztBQUdBVCw2QkFBYSxDQUFDVSxhQUFkLENBQTRCWCxTQUE1QjtBQUNELGVBVk0sQ0FIVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURzRDtBQUFBO0FBQUE7O0FBaUJ0RCxNQUFNWSxZQUFZO0FBQUEsZ01BQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGtCQURhLEdBQ05ELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBRE07QUFBQTtBQUFBO0FBQUEscUJBR1VqQixlQUFlLENBQUNlLElBQUQsQ0FIekI7O0FBQUE7QUFHWEcsMEJBSFc7QUFJakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBWjtBQUppQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1qQkMscUJBQU8sQ0FBQ0UsSUFBUixDQUFhLFlBQUVDLE9BQWY7O0FBTmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpULFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBakJzRCxrQkEyQjFCVSxzREFBUSxDQUFhLEVBQWIsQ0EzQmtCO0FBQUEsTUEyQi9DQyxNQTNCK0M7QUFBQSxNQTJCdkNDLFNBM0J1Qzs7QUFBQSxtQkE2QkNGLHNEQUFRLENBRTdELEVBRjZELENBN0JUO0FBQUEsTUE2Qi9DRyxvQkE3QitDO0FBQUEsTUE2QnpCQyxzQkE3QnlCOztBQUFBLFdBaUN2Q0MsZUFqQ3VDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQWlDdEQsa0JBQStCZCxLQUEvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNlLGNBQU47QUFDSUMsaUJBRk4sR0FFWSxFQUZaOztBQUFBLG9CQUdNQyxTQUFTLENBQUNDLE9BQVYsS0FBc0IsSUFBdEIsSUFBOEJELFNBQVMsQ0FBQ0MsT0FBVixDQUFrQmYsS0FBbEIsS0FBNEIsSUFIaEU7QUFBQTtBQUFBO0FBQUE7O0FBS1VnQix1QkFMVixHQUtzQixDQUx0Qjs7QUFBQTtBQUFBLG9CQU1NQSxTQUFTLDZCQUFHRixTQUFTLENBQUNDLE9BQVYsQ0FBa0JmLEtBQXJCLDBEQUFHLHNCQUF5QmlCLE1BQTVCLENBTmY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQVVtQ2xDLGVBQWUsQ0FDeEMrQixTQUFTLENBQUNDLE9BQVYsQ0FBa0JmLEtBQWxCLENBQXdCZ0IsU0FBeEIsQ0FEd0MsQ0FWbEQ7O0FBQUE7QUFVY2YsMEJBVmQ7QUFhUVksaUJBQUcsQ0FBQ0ssSUFBSixDQUFTakIsWUFBVCxFQWJSLENBY1E7O0FBZFI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQlFrQixtQkFBSyxjQUFMOztBQWhCUjtBQU9NSCx1QkFBUyxFQVBmO0FBQUE7QUFBQTs7QUFBQTtBQW1CSVIsdUJBQVMsQ0FBQ0ssR0FBRCxDQUFUOztBQW5CSjtBQXFCRU8sMERBQUssQ0FBQ0MsSUFBTixDQUFXLHFDQUFYLEVBQWtEZCxNQUFsRCxFQUNHZSxJQURILENBQ1EsVUFBVUMsUUFBVixFQUFvQjtBQUN4QnJCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWW9CLFFBQVEsQ0FBQ0MsSUFBckI7QUFDQWQsc0NBQXNCLENBQUNhLFFBQVEsQ0FBQ0MsSUFBVixDQUF0QjtBQUNELGVBSkgsV0FLUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCdkIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsS0FBWjtBQUNELGVBUEg7O0FBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakNzRDtBQUFBO0FBQUE7O0FBK0R0RCxNQUFNWCxTQUFTLEdBQUdZLG9EQUFNLENBQW1CLElBQW5CLENBQXhCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsUUFBMEI7QUFBQSxRQUF2QkMsUUFBdUIsU0FBdkJBLE9BQXVCO0FBQUEsUUFBWEMsSUFBVzs7QUFBQSxRQUUvQ0MsTUFGK0MsR0FJN0NELElBSjZDLENBRS9DQyxNQUYrQztBQUFBLDhCQUk3Q0QsSUFKNkMsQ0FHL0NFLGFBSCtDO0FBQUEsUUFHOUJDLFlBSDhCLHVCQUc5QkEsWUFIOEI7QUFBQSxRQUdoQkMsVUFIZ0IsdUJBR2hCQSxVQUhnQixFQUtqRDs7QUFDQSxXQUNFO0FBQVEsZUFBUyxFQUFFQyx1RUFBTyxDQUFDQyxhQUEzQjtBQUEwQyxhQUFPLEVBQUU7QUFBQSxlQUFNUCxRQUFPLEVBQWI7QUFBQSxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dRLEtBQUssRUFEUixDQURGO0FBS0QsR0FYRDs7QUFhQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQTBCO0FBQUEsUUFBdkJULFNBQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFFBQVhDLElBQVc7O0FBQUEsUUFFOUNDLE1BRjhDLEdBSTVDRCxJQUo0QyxDQUU5Q0MsTUFGOEM7QUFBQSwrQkFJNUNELElBSjRDLENBRzlDRSxhQUg4QztBQUFBLFFBRzdCQyxZQUg2Qix3QkFHN0JBLFlBSDZCO0FBQUEsUUFHZkMsVUFIZSx3QkFHZkEsVUFIZTtBQUtoRCxXQUNFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUwsU0FBTyxFQUFiO0FBQUEsT0FBakI7QUFBa0MsZUFBUyxFQUFFTSx1RUFBTyxDQUFDSSxZQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dGLEtBQUssRUFEUixDQURGO0FBS0QsR0FWRDs7QUFZQSxXQUFTRyxvQkFBVCxDQUE4QjlCLG9CQUE5QixFQUFtRTtBQUNqRSxRQUFJK0IsbUJBQW1CLEdBQUcsRUFBMUI7QUFDQXRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZcUMsbUJBQW1CLENBQUN2QixNQUFoQzs7QUFDQSxRQUFJUixvQkFBb0IsQ0FBQ1EsTUFBckIsS0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckMsV0FBSyxJQUFJd0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxHQUFHLENBQUMsQ0FBN0IsRUFBZ0M7QUFDOUJ2QyxlQUFPLENBQUNDLEdBQVIsQ0FBWXFDLG1CQUFaO0FBQ0FBLDJCQUFtQixDQUFDdEIsSUFBcEIsQ0FDRTtBQUFLLG1CQUFTLEVBQUVnQix1RUFBTyxDQUFDUSxZQUF4QjtBQUFzQyxhQUFHLEVBQUVELENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUNFLGFBQUcsRUFBRUEsQ0FEUDtBQUVFLG1CQUFTLEVBQUVQLHVFQUFPLENBQUNTLE1BRnJCO0FBR0UsYUFBRyxFQUFFbEMsb0JBQW9CLENBQUNnQyxDQUFELENBSDNCO0FBSUUsYUFBRyxFQUFDLG1CQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQU9FO0FBQ0UsYUFBRyxFQUFFaEMsb0JBQW9CLENBQUNnQyxDQUFDLEdBQUcsQ0FBTCxDQUQzQjtBQUVFLGFBQUcsRUFBQyx3QkFGTjtBQUdFLG1CQUFTLEVBQUVQLHVFQUFPLENBQUNTLE1BSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFQRixDQURGO0FBZUQ7O0FBQ0R6QyxhQUFPLENBQUNDLEdBQVIsQ0FBWXFDLG1CQUFaO0FBQ0EsYUFBT0EsbUJBQW1CLENBQUNJLEdBQXBCLENBQXdCLFVBQUNDLEVBQUQ7QUFBQSxlQUFRQSxFQUFSO0FBQUEsT0FBeEIsQ0FBUDtBQUNELEtBeEJnRSxDQXlCakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRDs7QUFFRCxTQUNFO0FBQ0UsYUFBUyxZQUFLWCx1RUFBTyxDQUFDWSxlQUFiLGNBQ1BoRSxLQUFLLENBQUNpRSxTQUFOLEdBQWtCQyxTQUFsQixHQUE4QmQsdUVBQU8sQ0FBQ2UsTUFEL0IsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUVmLHVFQUFPLENBQUNnQixRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVoQix1RUFBTyxDQUFDaUIsbUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBTyxXQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxPQUFHLEVBQUVDLCtEQURQO0FBRUUsT0FBRyxFQUFDLFFBRk47QUFHRSxhQUFTLEVBQUVsQix1RUFBTyxDQUFDa0IsVUFIckI7QUFJRSxXQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxhQUFPbkQsT0FBTyxDQUFDQyxHQUFSLENBQVlrRCxDQUFaLENBQVA7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBRW5CLHVFQUFPLENBQUNvQixVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxZQUFRLEVBQUUzQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFlBQVEsTUFIVjtBQUlFLFVBQU0sRUFBQyxTQUpUO0FBS0UsT0FBRyxFQUFFRyxTQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBVkYsRUFXRSxNQUFDLDJEQUFEO0FBQ0UsT0FBRyxNQURMO0FBRUUsa0JBQWMsRUFBRW9CLHVFQUFPLENBQUNxQixRQUYxQjtBQUdFLGFBQVMsRUFBRXJCLHVFQUFPLENBQUNzQixJQUhyQjtBQUlFLGNBQVUsRUFBRUMscURBSmQ7QUFLRSxZQUFRLE1BTFY7QUFNRSxvQkFBZ0IsRUFBRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOcEI7QUFPRSxtQkFBZSxFQUFFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR2hELG9CQUFvQixDQUFDUSxNQUFyQixLQUFnQyxDQUFoQyxHQUNDc0Isb0JBQW9CLENBQUM5QixvQkFBRCxDQURyQixHQUdDLGtFQVpKLENBWEYsQ0FERixDQWJGLENBTEYsQ0FERjtBQW1ERCxDQXRMRDs7R0FBTTVCLFk7O0tBQUFBLFk7QUF3TFNBLDJFQUFmOztBQUNBLElBQU11RCxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFDRSxTQUFLLEVBQUMsSUFEUjtBQUVFLFVBQU0sRUFBQyxJQUZUO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFJRSxRQUFJLEVBQUMsTUFKUDtBQUtFLFNBQUssRUFBQyw0QkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxLQUFDLEVBQUMsaUJBREo7QUFFRSxVQUFNLEVBQUMsU0FGVDtBQUdFLG9CQUFhLEdBSGY7QUFJRSxzQkFBZSxPQUpqQjtBQUtFLHVCQUFnQixPQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FEWTtBQUFBLENBQWQ7O01BQU1BLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob3RvTWFuYWdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZXMvc3R5bGVzL2NyZWF0ZV90ZXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc3R5bGlzaCBmcm9tIFwiLi9zdHlsZXMvUGhvdG9NYW5hZ2VyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgdXBsb2FkSWNvbiBmcm9tIFwiLi4vR0Fzc2V0cy91cGxvYWRfZGF0YS5zdmdcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHJlc3BvbnNpdmUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcImNvbnNvbGVcIjtcblxuY29uc3QgUGhvdG9NYW5hZ2VyID0gKHByb3BzOiB7IGRpc3BsYXllZDogYm9vbGVhbiB9KSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlYWRVcGxvYWRlZElNRyhpbnB1dEZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCB0bXBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0bXBGaWxlUmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHRtcEZpbGVSZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oXCJQcm9ibGVtIHBhcnNpbmcgaW5wdXQgZmlsZS5cIikpO1xuICAgICAgfTtcblxuICAgICAgdG1wRmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodG1wRmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHRtcEZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dEZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKGV2ZW50OiB7IHRhcmdldDogeyBmaWxlczogYW55W10gfSB9KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgcmVhZFVwbG9hZGVkSU1HKGZpbGUpO1xuICAgICAgY29uc29sZS5sb2coZmlsZUNvbnRlbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3VwSU1Hcywgc2V0VXBJTUdzXSA9IHVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcblxuICBjb25zdCBbcmVjaWV2ZWRJTUdMb2NhdGlvbnMsIHNldFJlY2lldmVkSU1HTG9jYXRpb25dID0gdXNlU3RhdGU8XG4gICAgQXJyYXk8c3RyaW5nPlxuICA+KFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlSW5wdXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdG1wID0gW107XG4gICAgaWYgKGZpbGVJbnB1dC5jdXJyZW50ICE9PSBudWxsICYmIGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgZmlsZUluZGV4ID0gMDtcbiAgICAgICAgZmlsZUluZGV4IDwgZmlsZUlucHV0LmN1cnJlbnQuZmlsZXM/Lmxlbmd0aDtcbiAgICAgICAgZmlsZUluZGV4KytcbiAgICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRVcGxvYWRlZElNRyhcbiAgICAgICAgICAgIGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzW2ZpbGVJbmRleF1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRtcC5wdXNoKGZpbGVDb250ZW50cyk7XG4gICAgICAgICAgLy8gc2V0VXBsb2FkZWRJbWcoZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFVwSU1Hcyh0bXApO1xuICAgIH1cbiAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL3Rlc3RJTUdcIiwgdXBJTUdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRSZWNpZXZlZElNR0xvY2F0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGlzaC5jYXJSaWdodEFycm93fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tTGVmdEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17c3R5bGlzaC5jYXJMZWZ0QXJyb3d9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWRJbWFnZXMocmVjaWV2ZWRJTUdMb2NhdGlvbnM6IHN0cmluZ1tdKTogYW55IHtcbiAgICBsZXQgcmVuZGVyZWRJbWFnZXNBcnJheSA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkSW1hZ2VzQXJyYXkubGVuZ3RoKTtcbiAgICBpZiAocmVjaWV2ZWRJTUdMb2NhdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpID0gKzIpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVuZGVyZWRJbWFnZXNBcnJheSk7XG4gICAgICAgIHJlbmRlcmVkSW1hZ2VzQXJyYXkucHVzaChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGlzaC5pbWdDb250YWluZXJ9IGtleT17aX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLnRtcElNR31cbiAgICAgICAgICAgICAgc3JjPXtyZWNpZXZlZElNR0xvY2F0aW9uc1tpXX1cbiAgICAgICAgICAgICAgYWx0PVwiSGVyZSBiZSB0aGUgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtyZWNpZXZlZElNR0xvY2F0aW9uc1tpICsgMV19XG4gICAgICAgICAgICAgIGFsdD1cImhlcmUgYmUgdGhlIHNlY29uZCBvbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudG1wSU1HfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkSW1hZ2VzQXJyYXkpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkSW1hZ2VzQXJyYXkubWFwKChlbCkgPT4gZWwpO1xuICAgIH1cbiAgICAvLyByZXR1cm4gcmVjaWV2ZWRJTUdMb2NhdGlvbnMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAvLyAgIDxkaXZcbiAgICAvLyAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLmltZ0NvbnRhaW5lcn1cbiAgICAvLyAgICAgaWQ9e2BpbWFnZURpdl8ke2luZGV4fWB9XG4gICAgLy8gICAgIGtleT17aW5kZXh9XG4gICAgLy8gICA+XG4gICAgLy8gICAgIDxpbWdcbiAgICAvLyAgICAgICBrZXk9e2luZGV4fVxuICAgIC8vICAgICAgIGNsYXNzTmFtZT17c3R5bGlzaC50bXBJTUd9XG4gICAgLy8gICAgICAgc3JjPXtyZWNpZXZlZElNR0xvY2F0aW9uc1tpbmRleF19XG4gICAgLy8gICAgICAgYWx0PVwiT29wc1wiXG4gICAgLy8gICAgIC8+XG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyApKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsaXNoLlBob3Rvc0NvbnRhaW5lcn0gJHtcbiAgICAgICAgcHJvcHMuZGlzcGxheWVkID8gdW5kZWZpbmVkIDogc3R5bGlzaC5IaWRkZW5cbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsaXNoLkNvbnRlbnRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guaGVhZGVySWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgzPlVwbG9hZGVkIHBob3RvczwvaDM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG90b1VwbG9hZFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBob3RvVXBsb2FkXCIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cGxvYWRJY29ufVxuICAgICAgICAgICAgICBhbHQ9XCJVcGxvYWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudXBsb2FkSWNvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guSU1HUHJldmlld30+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZpbGVJbnB1dH0+XG4gICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwidGVzdGlvXCJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8cD5QbGFjZWhvbGRlciBmb3IgaW1hZ2UgdXBsb2FkPC9wPlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgIHNzclxuICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz17c3R5bGlzaC5DYXJvdXNlbH1cbiAgICAgICAgICAgICAgaXRlbUNsYXNzPXtzdHlsaXNoLkl0ZW19XG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgIHNob3dEb3RzXG4gICAgICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxDdXN0b21MZWZ0QXJyb3cgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyZWNpZXZlZElNR0xvY2F0aW9ucy5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgICAgcmVuZGVyU2VsZWN0ZWRJbWFnZXMocmVjaWV2ZWRJTUdMb2NhdGlvbnMpXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9NYW5hZ2VyO1xuY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE1XCJcbiAgICBoZWlnaHQ9XCIyNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNSAyNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMiAyNEwxMyAxM0wyIDJcIlxuICAgICAgc3Ryb2tlPVwiIzJGNDg1OFwiXG4gICAgICBzdHJva2Utd2lkdGg9XCIzXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PhotoManager.tsx\n");

/***/ })

})