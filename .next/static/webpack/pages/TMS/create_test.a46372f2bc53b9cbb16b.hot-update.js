webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PhotoManager.tsx":
/*!*************************************!*\
  !*** ./components/PhotoManager.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PhotoManager.module.scss */ \"./components/styles/PhotoManager.module.scss\");\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GAssets/upload_data.svg */ \"./GAssets/upload_data.svg\");\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PhotoManager.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar PhotoManager = function PhotoManager(props) {\n  _s();\n\n  function readUploadedIMG(_x) {\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  function _readUploadedIMG() {\n    _readUploadedIMG = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(inputFile) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem parsing input file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(inputFile);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var file, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              file = event.target.files[0];\n              _context.prev = 1;\n              _context.next = 4;\n              return readUploadedIMG(file);\n\n            case 4:\n              fileContents = _context.sent;\n              console.log(fileContents);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.warn(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleUpload(_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      upIMGs = _useState[0],\n      setUpIMGs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recievedIMGLocations = _useState2[0],\n      setRecievedIMGLocation = _useState2[1];\n\n  function handleFileInput(_x3) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event) {\n      var tmp, fileIndex, _fileInput$current$fi, fileContents;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              tmp = [];\n\n              if (!(fileInput.current !== null && fileInput.current.files !== null)) {\n                _context3.next = 19;\n                break;\n              }\n\n              fileIndex = 0;\n\n            case 4:\n              if (!(fileIndex < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length))) {\n                _context3.next = 18;\n                break;\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return readUploadedIMG(fileInput.current.files[fileIndex]);\n\n            case 8:\n              fileContents = _context3.sent;\n              tmp.push(fileContents); // setUploadedImg(fileContents);\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              alert(_context3.t0);\n\n            case 15:\n              fileIndex++;\n              _context3.next = 4;\n              break;\n\n            case 18:\n              setUpIMGs(tmp);\n\n            case 19:\n              console.log(upIMGs);\n              axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:4000/tests/testIMG\", upIMGs).then(function (response) {\n                console.log(response.data);\n                setRecievedIMGLocation(response.data);\n              })[\"catch\"](function (error) {\n                console.log(error);\n              });\n\n            case 21:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var CustomRightArrow = function CustomRightArrow(_ref2) {\n    var _onClick = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref3) {\n    var _onClick2 = _ref3.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  function renderSelectedImages(recievedIMGLocations) {\n    var renderedImagesArray = [];\n\n    for (var i = 0; i < recievedIMGLocations.length; i = +2) {\n      console.log(renderedImagesArray[i]);\n      renderedImagesArray.push(__jsx(\"div\", {\n        className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imgContainer,\n        key: i,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 9\n        }\n      }, __jsx(\"img\", {\n        key: i,\n        className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n        src: recievedIMGLocations[i],\n        alt: \"Here be the image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }\n      }), __jsx(\"img\", {\n        src: recievedIMGLocations[i],\n        alt: \"here be the second one\",\n        className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tmpIMG,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }\n      })));\n    }\n\n    console.log(renderedImagesArray);\n    return renderedImagesArray.map(function (el) {\n      return el;\n    }); // return recievedIMGLocations.map((image, index) => (\n    //   <div\n    //     className={stylish.imgContainer}\n    //     id={`imageDiv_${index}`}\n    //     key={index}\n    //   >\n    //     <img\n    //       key={index}\n    //       className={stylish.tmpIMG}\n    //       src={recievedIMGLocations[index]}\n    //       alt=\"Oops\"\n    //     />\n    //   </div>\n    // ));\n  }\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PhotosContainer, \" \").concat(!props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Contents,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerIconContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 11\n    }\n  }, \"Uploaded photos\"), __jsx(\"label\", {\n    htmlFor: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"Upload\",\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadIcon,\n    onClick: function onClick(e) {\n      return console.log(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.IMGPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    name: \"testio\",\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 13\n    }\n  }, \"Placeholder for image upload\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    ssr: true,\n    containerClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    itemClass: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Item,\n    responsive: _constants__WEBPACK_IMPORTED_MODULE_7__[\"responsive\"],\n    showDots: true,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 33\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 32\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 13\n    }\n  }, renderSelectedImages(recievedIMGLocations))))));\n};\n\n_s(PhotoManager, \"USZjpV/SRJxxk/qrJrApu1Ffirw=\");\n\n_c = PhotoManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoManager);\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PhotoManager\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4PzE1NDkiXSwibmFtZXMiOlsiUGhvdG9NYW5hZ2VyIiwicHJvcHMiLCJyZWFkVXBsb2FkZWRJTUciLCJpbnB1dEZpbGUiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJ1cElNR3MiLCJzZXRVcElNR3MiLCJyZWNpZXZlZElNR0xvY2F0aW9ucyIsInNldFJlY2lldmVkSU1HTG9jYXRpb24iLCJoYW5kbGVGaWxlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInRtcCIsImZpbGVJbnB1dCIsImN1cnJlbnQiLCJmaWxlSW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwiYWxlcnQiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJ1c2VSZWYiLCJDdXN0b21SaWdodEFycm93Iiwib25DbGljayIsInJlc3QiLCJvbk1vdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwiZGV2aWNlVHlwZSIsInN0eWxpc2giLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJyZW5kZXJTZWxlY3RlZEltYWdlcyIsInJlbmRlcmVkSW1hZ2VzQXJyYXkiLCJpIiwiaW1nQ29udGFpbmVyIiwidG1wSU1HIiwibWFwIiwiZWwiLCJQaG90b3NDb250YWluZXIiLCJkaXNwbGF5ZWQiLCJ1bmRlZmluZWQiLCJIaWRkZW4iLCJDb250ZW50cyIsImhlYWRlckljb25Db250YWluZXIiLCJ1cGxvYWRJY29uIiwiZSIsIklNR1ByZXZpZXciLCJDYXJvdXNlbCIsIkl0ZW0iLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBbUM7QUFBQTs7QUFBQSxXQUN2Q0MsZUFEdUM7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ3RELGtCQUErQkMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLDJCQURSLEdBQ3dCLElBQUlDLFVBQUosRUFEeEI7QUFBQSxnREFHUyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDSiw2QkFBYSxDQUFDSyxPQUFkLEdBQXdCLFlBQU07QUFDNUJMLCtCQUFhLENBQUNNLEtBQWQ7QUFDQUYsd0JBQU0sQ0FBQyxJQUFJRyxZQUFKLENBQWlCLDZCQUFqQixDQUFELENBQU47QUFDRCxpQkFIRDs7QUFLQVAsNkJBQWEsQ0FBQ1EsTUFBZCxHQUF1QixZQUFNO0FBQzNCTCx5QkFBTyxDQUFDSCxhQUFhLENBQUNTLE1BQWYsQ0FBUDtBQUNELGlCQUZEOztBQUdBVCw2QkFBYSxDQUFDVSxhQUFkLENBQTRCWCxTQUE1QjtBQUNELGVBVk0sQ0FIVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURzRDtBQUFBO0FBQUE7O0FBaUJ0RCxNQUFNWSxZQUFZO0FBQUEsZ01BQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGtCQURhLEdBQ05ELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBRE07QUFBQTtBQUFBO0FBQUEscUJBR1VqQixlQUFlLENBQUNlLElBQUQsQ0FIekI7O0FBQUE7QUFHWEcsMEJBSFc7QUFJakJDLHFCQUFPLENBQUND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QW9CLENBQUM5QixvQkFBRCxDQVR2QixDQVhGLENBREYsQ0FiRixDQUxGLENBREY7QUErQ0QsQ0FoTEQ7O0dBQU01QixZOztLQUFBQSxZO0FBa0xTQSwyRUFBZjs7QUFDQSxJQUFNdUQsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUNaO0FBQ0UsU0FBSyxFQUFDLElBRFI7QUFFRSxVQUFNLEVBQUMsSUFGVDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxTQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsS0FBQyxFQUFDLGlCQURKO0FBRUUsVUFBTSxFQUFDLFNBRlQ7QUFHRSxvQkFBYSxHQUhmO0FBSUUsc0JBQWUsT0FKakI7QUFLRSx1QkFBZ0IsT0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBRFk7QUFBQSxDQUFkOztNQUFNQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxpc2ggZnJvbSBcIi4vc3R5bGVzL1Bob3RvTWFuYWdlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHVwbG9hZEljb24gZnJvbSBcIi4uL0dBc3NldHMvdXBsb2FkX2RhdGEuc3ZnXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgeyByZXNwb25zaXZlIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5cbmNvbnN0IFBob3RvTWFuYWdlciA9IChwcm9wczogeyBkaXNwbGF5ZWQ6IGJvb2xlYW4gfSkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiByZWFkVXBsb2FkZWRJTUcoaW5wdXRGaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBwYXJzaW5nIGlucHV0IGZpbGUuXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIHRtcEZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRtcEZpbGVSZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICB0bXBGaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXRGaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jIChldmVudDogeyB0YXJnZXQ6IHsgZmlsZXM6IGFueVtdIH0gfSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRVcGxvYWRlZElNRyhmaWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVDb250ZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFt1cElNR3MsIHNldFVwSU1Hc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG5cbiAgY29uc3QgW3JlY2lldmVkSU1HTG9jYXRpb25zLCBzZXRSZWNpZXZlZElNR0xvY2F0aW9uXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHN0cmluZz5cbiAgPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmlsZUlucHV0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGlmIChmaWxlSW5wdXQuY3VycmVudCAhPT0gbnVsbCAmJiBmaWxlSW5wdXQuY3VycmVudC5maWxlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGZpbGVJbmRleCA9IDA7XG4gICAgICAgIGZpbGVJbmRleCA8IGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzPy5sZW5ndGg7XG4gICAgICAgIGZpbGVJbmRleCsrXG4gICAgICApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCByZWFkVXBsb2FkZWRJTUcoXG4gICAgICAgICAgICBmaWxlSW5wdXQuY3VycmVudC5maWxlc1tmaWxlSW5kZXhdXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0bXAucHVzaChmaWxlQ29udGVudHMpO1xuICAgICAgICAgIC8vIHNldFVwbG9hZGVkSW1nKGZpbGVDb250ZW50cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRVcElNR3ModG1wKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXBJTUdzKTtcbiAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL3Rlc3RJTUdcIiwgdXBJTUdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRSZWNpZXZlZElNR0xvY2F0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgY29uc3QgZmlsZUlucHV0ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGlzaC5jYXJSaWdodEFycm93fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tTGVmdEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17c3R5bGlzaC5jYXJMZWZ0QXJyb3d9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWRJbWFnZXMocmVjaWV2ZWRJTUdMb2NhdGlvbnM6IHN0cmluZ1tdKTogYW55IHtcbiAgICBsZXQgcmVuZGVyZWRJbWFnZXNBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjaWV2ZWRJTUdMb2NhdGlvbnMubGVuZ3RoOyBpID0gKzIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkSW1hZ2VzQXJyYXlbaV0pO1xuICAgICAgcmVuZGVyZWRJbWFnZXNBcnJheS5wdXNoKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGlzaC5pbWdDb250YWluZXJ9IGtleT17aX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLnRtcElNR31cbiAgICAgICAgICAgIHNyYz17cmVjaWV2ZWRJTUdMb2NhdGlvbnNbaV19XG4gICAgICAgICAgICBhbHQ9XCJIZXJlIGJlIHRoZSBpbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3JlY2lldmVkSU1HTG9jYXRpb25zW2ldfVxuICAgICAgICAgICAgYWx0PVwiaGVyZSBiZSB0aGUgc2Vjb25kIG9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudG1wSU1HfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVuZGVyZWRJbWFnZXNBcnJheSk7XG4gICAgcmV0dXJuIHJlbmRlcmVkSW1hZ2VzQXJyYXkubWFwKChlbCkgPT4gZWwpO1xuICAgIC8vIHJldHVybiByZWNpZXZlZElNR0xvY2F0aW9ucy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgIC8vICAgPGRpdlxuICAgIC8vICAgICBjbGFzc05hbWU9e3N0eWxpc2guaW1nQ29udGFpbmVyfVxuICAgIC8vICAgICBpZD17YGltYWdlRGl2XyR7aW5kZXh9YH1cbiAgICAvLyAgICAga2V5PXtpbmRleH1cbiAgICAvLyAgID5cbiAgICAvLyAgICAgPGltZ1xuICAgIC8vICAgICAgIGtleT17aW5kZXh9XG4gICAgLy8gICAgICAgY2xhc3NOYW1lPXtzdHlsaXNoLnRtcElNR31cbiAgICAvLyAgICAgICBzcmM9e3JlY2lldmVkSU1HTG9jYXRpb25zW2luZGV4XX1cbiAgICAvLyAgICAgICBhbHQ9XCJPb3BzXCJcbiAgICAvLyAgICAgLz5cbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vICkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxpc2guUGhvdG9zQ29udGFpbmVyfSAke1xuICAgICAgICAhcHJvcHMuZGlzcGxheWVkID8gdW5kZWZpbmVkIDogc3R5bGlzaC5IaWRkZW5cbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsaXNoLkNvbnRlbnRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guaGVhZGVySWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgzPlVwbG9hZGVkIHBob3RvczwvaDM+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG90b1VwbG9hZFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBob3RvVXBsb2FkXCIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cGxvYWRJY29ufVxuICAgICAgICAgICAgICBhbHQ9XCJVcGxvYWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpc2gudXBsb2FkSWNvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guSU1HUHJldmlld30+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZpbGVJbnB1dH0+XG4gICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwidGVzdGlvXCJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8cD5QbGFjZWhvbGRlciBmb3IgaW1hZ2UgdXBsb2FkPC9wPlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgIHNzclxuICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz17c3R5bGlzaC5DYXJvdXNlbH1cbiAgICAgICAgICAgICAgaXRlbUNsYXNzPXtzdHlsaXNoLkl0ZW19XG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgIHNob3dEb3RzXG4gICAgICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxDdXN0b21MZWZ0QXJyb3cgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyZW5kZXJTZWxlY3RlZEltYWdlcyhyZWNpZXZlZElNR0xvY2F0aW9ucyl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvTWFuYWdlcjtcbmNvbnN0IEFycm93ID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNVwiXG4gICAgaGVpZ2h0PVwiMjZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTUgMjZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIgMjRMMTMgMTNMMiAyXCJcbiAgICAgIHN0cm9rZT1cIiMyRjQ4NThcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PhotoManager.tsx\n");

/***/ })

})