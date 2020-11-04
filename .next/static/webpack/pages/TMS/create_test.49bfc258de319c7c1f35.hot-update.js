webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PhotoManager.tsx":
/*!*************************************!*\
  !*** ./components/PhotoManager.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PhotoManager.module.scss */ \"./components/styles/PhotoManager.module.scss\");\n/* harmony import */ var _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GAssets/upload_data.svg */ \"./GAssets/upload_data.svg\");\n/* harmony import */ var _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PhotoManager.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar PhotoManager = function PhotoManager(props) {\n  _s();\n\n  function readUploadedIMG(_x) {\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  function _readUploadedIMG() {\n    _readUploadedIMG = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(inputFile) {\n      var tmpFileReader;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              tmpFileReader = new FileReader();\n              return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                tmpFileReader.onerror = function () {\n                  tmpFileReader.abort();\n                  reject(new DOMException(\"Problem parsing input file.\"));\n                };\n\n                tmpFileReader.onload = function () {\n                  resolve(tmpFileReader.result);\n                };\n\n                tmpFileReader.readAsDataURL(inputFile);\n              }));\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _readUploadedIMG.apply(this, arguments);\n  }\n\n  var handleUpload = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var file, fileContents;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              file = event.target.files[0];\n              _context.prev = 1;\n              _context.next = 4;\n              return readUploadedIMG(file);\n\n            case 4:\n              fileContents = _context.sent;\n              console.log(fileContents);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.warn(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleUpload(_x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      uploadedImg = _useState[0],\n      setUploadedImg = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      upIMGs = _useState2[0],\n      setUpIMGs = _useState2[1];\n\n  function handleFileInput(_x3) {\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  function _handleFileInput() {\n    _handleFileInput = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {\n      var tmp, fileIndex, _fileInput$current$fi, fileContents;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              tmp = [];\n\n              if (!(fileInput.current !== null && fileInput.current.files !== null)) {\n                _context3.next = 19;\n                break;\n              }\n\n              fileIndex = 0;\n\n            case 4:\n              if (!(fileIndex < ((_fileInput$current$fi = fileInput.current.files) === null || _fileInput$current$fi === void 0 ? void 0 : _fileInput$current$fi.length))) {\n                _context3.next = 18;\n                break;\n              }\n\n              _context3.prev = 5;\n              _context3.next = 8;\n              return readUploadedIMG(fileInput.current.files[fileIndex]);\n\n            case 8:\n              fileContents = _context3.sent;\n              tmp.push(fileContents); // setUploadedImg(fileContents);\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](5);\n              alert(_context3.t0);\n\n            case 15:\n              fileIndex++;\n              _context3.next = 4;\n              break;\n\n            case 18:\n              setUpIMGs(tmp);\n\n            case 19:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[5, 12]]);\n    }));\n    return _handleFileInput.apply(this, arguments);\n  }\n\n  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  return __jsx(\"div\", {\n    className: \"\".concat(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.PhotoManager, \" \").concat(props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.PhotosContainer, \" \").concat(props.displayed ? undefined : _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Hidden),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerIconContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Uploaded photos\"), __jsx(\"label\", {\n    htmlFor: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"photoUpload\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_upload_data_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"Upload\",\n    className: _styles_PhotoManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadIcon,\n    onClick: function onClick(e) {\n      return console.log(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleFileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, \"Upload image\"), __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    accept: \"image/*\",\n    ref: fileInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  }, \"Placeholder for image upload\"), upIMGs.map(function (image) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: image,\n      alt: \"Oops\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 19\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 19\n      }\n    }, \"image\"));\n  }))))));\n};\n\n_s(PhotoManager, \"iEZx89oVDyrYcqObh+VEAX9hzig=\");\n\n_c = PhotoManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoManager);\n\nvar _c;\n\n$RefreshReg$(_c, \"PhotoManager\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4PzE1NDkiXSwibmFtZXMiOlsiUGhvdG9NYW5hZ2VyIiwicHJvcHMiLCJyZWFkVXBsb2FkZWRJTUciLCJpbnB1dEZpbGUiLCJ0bXBGaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImFib3J0IiwiRE9NRXhjZXB0aW9uIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJ1cGxvYWRlZEltZyIsInNldFVwbG9hZGVkSW1nIiwidXBJTUdzIiwic2V0VXBJTUdzIiwiaGFuZGxlRmlsZUlucHV0IiwicHJldmVudERlZmF1bHQiLCJ0bXAiLCJmaWxlSW5wdXQiLCJjdXJyZW50IiwiZmlsZUluZGV4IiwibGVuZ3RoIiwicHVzaCIsImFsZXJ0IiwidXNlUmVmIiwic3R5bGVzIiwiZGlzcGxheWVkIiwidW5kZWZpbmVkIiwic3R5bGlzaCIsIkhpZGRlbiIsIlBob3Rvc0NvbnRhaW5lciIsImhlYWRlckljb25Db250YWluZXIiLCJ1cGxvYWRJY29uIiwiZSIsIm1hcCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBbUM7QUFBQTs7QUFBQSxXQUN2Q0MsZUFEdUM7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ3RELGtCQUErQkMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLDJCQURSLEdBQ3dCLElBQUlDLFVBQUosRUFEeEI7QUFBQSxnREFHUyxJQUFJQyxP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LFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUpGLEVBS0dMLE1BQU0sQ0FBQ3FCLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsV0FDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBaUIsU0FBRyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixDQURVO0FBQUEsR0FBWCxDQUxILENBREYsQ0FiRixDQUxGLENBTEYsQ0FERjtBQTBDRCxDQWhHRDs7R0FBTWxELFk7O0tBQUFBLFk7QUFrR1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QaG90b01hbmFnZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHN0eWxpc2ggZnJvbSBcIi4vc3R5bGVzL1Bob3RvTWFuYWdlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHVwbG9hZEljb24gZnJvbSBcIi4uL0dBc3NldHMvdXBsb2FkX2RhdGEuc3ZnXCI7XG5cbmNvbnN0IFBob3RvTWFuYWdlciA9IChwcm9wczogeyBkaXNwbGF5ZWQ6IGJvb2xlYW4gfSkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiByZWFkVXBsb2FkZWRJTUcoaW5wdXRGaWxlKSB7XG4gICAgY29uc3QgdG1wRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdG1wRmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICB0bXBGaWxlUmVhZGVyLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFwiUHJvYmxlbSBwYXJzaW5nIGlucHV0IGZpbGUuXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIHRtcEZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRtcEZpbGVSZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICB0bXBGaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXRGaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgcmVhZFVwbG9hZGVkSU1HKGZpbGUpO1xuICAgICAgY29uc29sZS5sb2coZmlsZUNvbnRlbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3VwbG9hZGVkSW1nLCBzZXRVcGxvYWRlZEltZ10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXBJTUdzLCBzZXRVcElNR3NdID0gdXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlSW5wdXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdG1wID0gW107XG4gICAgaWYgKGZpbGVJbnB1dC5jdXJyZW50ICE9PSBudWxsICYmIGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgZmlsZUluZGV4ID0gMDtcbiAgICAgICAgZmlsZUluZGV4IDwgZmlsZUlucHV0LmN1cnJlbnQuZmlsZXM/Lmxlbmd0aDtcbiAgICAgICAgZmlsZUluZGV4KytcbiAgICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IHJlYWRVcGxvYWRlZElNRyhcbiAgICAgICAgICAgIGZpbGVJbnB1dC5jdXJyZW50LmZpbGVzW2ZpbGVJbmRleF1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRtcC5wdXNoKGZpbGVDb250ZW50cyk7XG4gICAgICAgICAgLy8gc2V0VXBsb2FkZWRJbWcoZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFVwSU1Hcyh0bXApO1xuICAgIH1cbiAgfVxuICBjb25zdCBmaWxlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5QaG90b01hbmFnZXJ9ICR7XG4gICAgICAgIHByb3BzLmRpc3BsYXllZCA/IHVuZGVmaW5lZCA6IHN0eWxpc2guSGlkZGVuXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGlzaC5QaG90b3NDb250YWluZXJ9ICR7XG4gICAgICAgICAgcHJvcHMuZGlzcGxheWVkID8gdW5kZWZpbmVkIDogc3R5bGlzaC5IaWRkZW5cbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxpc2guaGVhZGVySWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDM+VXBsb2FkZWQgcGhvdG9zPC9oMz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvdG9VcGxvYWRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBob3RvVXBsb2FkXCIgLz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXBsb2FkSWNvbn1cbiAgICAgICAgICAgICAgICBhbHQ9XCJVcGxvYWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGlzaC51cGxvYWRJY29ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGaWxlSW5wdXR9PlxuICAgICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgYWNjZXB0PVwiaW1hZ2UvKlwiIHJlZj17ZmlsZUlucHV0fSAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgPHA+UGxhY2Vob2xkZXIgZm9yIGltYWdlIHVwbG9hZDwvcD5cbiAgICAgICAgICAgICAge3VwSU1Hcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiT29wc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8cD5pbWFnZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG90b01hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PhotoManager.tsx\n");

/***/ })

})