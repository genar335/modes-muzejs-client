webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar ActiveTests = function ActiveTests(props) {\n  _s();\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleAddTestClick = function handleAddTestClick() {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(\"/TMS/create_test\");\n  };\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: compStyle.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: compStyle.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ActiveTestsContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    responsive: responsive,\n    ssr: true,\n    containerClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Carousel,\n    itemClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Item,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 27\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 26\n      }\n    }),\n    showDots: true // dotListClass={styles.customDotListStyle}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick), props.activeTests.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: iterator,\n      iterator: iterator,\n      colour: \"white\",\n      _id: test._id || \"NA\",\n      active: true,\n      nameInRu: test.ru.name // parentComponentTestFetcher={getTests}\n      // mainTestFetcher={props.updateTheTests}\n      ,\n      updateTests: props.updateTheTests,\n      fetchAllTests: props.fetchAllTests,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }\n    });\n  })));\n};\n\n_s(ActiveTests, \"hiS8qxSQ4/p4gtIvOT37RqZ02j0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ActiveTests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveTests\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3g/ZWZlZSJdLCJuYW1lcyI6WyJBY3RpdmVUZXN0cyIsInByb3BzIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUFkZFRlc3RDbGljayIsImFsZXJ0IiwicHVzaCIsIkN1c3RvbVJpZ2h0QXJyb3ciLCJvbkNsaWNrIiwicmVzdCIsIm9uTW92ZSIsImNhcm91c2VsU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJkZXZpY2VUeXBlIiwiY29tcFN0eWxlIiwiY2FyUmlnaHRBcnJvdyIsIkFycm93IiwiQ3VzdG9tTGVmdEFycm93IiwiY2FyTGVmdEFycm93Iiwic3R5bGVzIiwiQWN0aXZlVGVzdHNDb250YWluZXIiLCJDYXJvdXNlbCIsIkl0ZW0iLCJhZGRBVGVzdCIsImFjdGl2ZVRlc3RzIiwibWFwIiwidGVzdCIsIml0ZXJhdG9yIiwiX2lkIiwicnUiLCJuYW1lIiwidXBkYXRlVGhlVGVzdHMiLCJmZXRjaEFsbFRlc3RzIiwiQWRkVGVzdENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUtkO0FBQUE7O0FBQ0osTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxxQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQUZLO0FBR2pCQyxXQUFLLEVBQUU7QUFIVSxLQURGO0FBTWpCQyxXQUFPLEVBQUU7QUFDUEosZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7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QUFJRSxTQUFHLEVBQUVELElBQUksQ0FBQ0UsR0FBTCxJQUFZLElBSm5CO0FBS0UsWUFBTSxFQUFFLElBTFY7QUFNRSxjQUFRLEVBQUVGLElBQUksQ0FBQ0csRUFBTCxDQUFRQyxJQU5wQixDQU9FO0FBQ0E7QUFSRjtBQVNFLGlCQUFXLEVBQUV0QyxLQUFLLENBQUN1QyxjQVRyQjtBQVVFLG1CQUFhLEVBQUV2QyxLQUFLLENBQUN3QyxhQVZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHFCO0FBQUEsR0FBdEIsQ0FYSCxDQUZGLENBREY7QUErQkQsQ0F6RkQ7O0dBQU16QyxXO1VBMEJ1QlkscUQ7OztLQTFCdkJaLFc7QUEyRlNBLDBFQUFmOztBQUNBLFNBQVNnQyxRQUFULENBQWtCbkIsa0JBQWxCLEVBQWtEO0FBQ2hELFNBQ0U7QUFDRSxXQUFPLEVBQUVBLGtCQURYO0FBRUUsTUFBRSxFQUFDLFNBRkw7QUFHRSxhQUFTLEVBQUVlLHNFQUFNLENBQUNjLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEYsQ0FERjtBQVNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY3RpdmVUZXN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFRlc3RDYXJkIGZyb20gXCIuL1Rlc3RDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9BY3RpdmVUZXN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgYnJvd24gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQWN0aXZlVGVzdHMgPSAocHJvcHM6IHtcbiAgLy8gZ2V0QWN0aXZlVGVzdHM6IChhY3RpdmU6IGJvb2xlYW4pID0+IFByb21pc2U8YW55PjtcbiAgYWN0aXZlVGVzdHM6IElUZXN0W107XG4gIHVwZGF0ZVRoZVRlc3RzOiAodGVzdElEOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGZldGNoQWxsVGVzdHM6ICgpID0+IFByb21pc2U8dm9pZD47XG59KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgICBpdGVtczogNSxcbiAgICB9LFxuICAgIGRlc2t0b3A6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgIGl0ZW1zOiA0LFxuICAgIH0sXG4gICAgdGFibGV0OiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcbiAgICAgIGl0ZW1zOiAyLFxuICAgIH0sXG4gICAgbW9iaWxlOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgIGl0ZW1zOiAxLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgcm91dGVyOiBOZXh0Um91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVGVzdENsaWNrID0gKCkgPT4ge1xuICAgIGFsZXJ0KFwiVGVzdCBhZGRpdGlvbiBzaG91bGQgYmUgaGFwcGVuaW5nIHJpZ2h0IGFib3V0IG5vdy5cIik7XG4gICAgcm91dGVyLnB1c2goYC9UTVMvY3JlYXRlX3Rlc3RgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21SaWdodEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICAvLyBvbk1vdmUgbWVhbnMgaWYgZHJhZ2dpbmcgb3Igc3dpcGluZyBpbiBwcm9ncmVzcy5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJSaWdodEFycm93fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tTGVmdEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhckxlZnRBcnJvd30+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWN0aXZlVGVzdHNDb250YWluZXJ9PlxuICAgICAgPGgxPkFjdGl2ZSB0ZXN0czwvaDE+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgc3NyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPXtzdHlsZXMuQ2Fyb3VzZWx9XG4gICAgICAgIGl0ZW1DbGFzcz17c3R5bGVzLkl0ZW19XG4gICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxDdXN0b21MZWZ0QXJyb3cgLz59XG4gICAgICAgIHNob3dEb3RzXG4gICAgICAgIC8vIGRvdExpc3RDbGFzcz17c3R5bGVzLmN1c3RvbURvdExpc3RTdHlsZX1cbiAgICAgID5cbiAgICAgICAge2FkZEFUZXN0KGhhbmRsZUFkZFRlc3RDbGljayl9XG4gICAgICAgIHtwcm9wcy5hY3RpdmVUZXN0cy5tYXAoKHRlc3Q6IElUZXN0LCBpdGVyYXRvcjogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPFRlc3RDYXJkXG4gICAgICAgICAgICBrZXk9e2l0ZXJhdG9yfVxuICAgICAgICAgICAgaXRlcmF0b3I9e2l0ZXJhdG9yfVxuICAgICAgICAgICAgY29sb3VyPVwid2hpdGVcIlxuICAgICAgICAgICAgX2lkPXt0ZXN0Ll9pZCB8fCBcIk5BXCJ9XG4gICAgICAgICAgICBhY3RpdmU9e3RydWV9XG4gICAgICAgICAgICBuYW1lSW5SdT17dGVzdC5ydS5uYW1lfVxuICAgICAgICAgICAgLy8gcGFyZW50Q29tcG9uZW50VGVzdEZldGNoZXI9e2dldFRlc3RzfVxuICAgICAgICAgICAgLy8gbWFpblRlc3RGZXRjaGVyPXtwcm9wcy51cGRhdGVUaGVUZXN0c31cbiAgICAgICAgICAgIHVwZGF0ZVRlc3RzPXtwcm9wcy51cGRhdGVUaGVUZXN0c31cbiAgICAgICAgICAgIGZldGNoQWxsVGVzdHM9e3Byb3BzLmZldGNoQWxsVGVzdHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlVGVzdHM7XG5mdW5jdGlvbiBhZGRBVGVzdChoYW5kbGVBZGRUZXN0Q2xpY2s6ICgpID0+IHZvaWQpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUZXN0Q2xpY2t9XG4gICAgICBpZD1cIkFkZFRlc3RcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQWRkVGVzdENhcmR9XG4gICAgPlxuICAgICAgPHNwYW4+Kzwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ })

})