webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var viewportCss = {\n    overflow: 'hidden'\n  };\n  var containerCss = {\n    display: 'flex'\n  };\n  var slideCss = {\n    position: 'relative',\n    minWidth: '100%'\n  };\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      index: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      } // className={`${compStyle.Page}`}\n      ,\n      style: slideCss,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 15\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }\n    }, page + 1)));\n  })));\n};\n\n_s(PagesController, \"U9bT/WsDdA59AS98jJq4W07yTTI=\");\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInZpZXdwb3J0Q3NzIiwib3ZlcmZsb3ciLCJjb250YWluZXJDc3MiLCJkaXNwbGF5Iiwic2xpZGVDc3MiLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwiV3JhcHBlciIsIkJHQ29udGFpbmVyIiwibWFwIiwicGFnZSIsIlN0cmluZyIsImZyb20iLCJmb3JFYWNoIiwiaW5kZXgiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUVBOztBQUdBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUlsQjtBQUFBOztBQUFBLGtCQUNrQ0Msc0RBQVEsOEZBQ3pDQyxLQUFLLENB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QUEsSUFQRixDQURZO0FBQUEsQ0FBZDs7TUFBTUEsSztBQWtCUzVCLDhFQUFmOztBQUVBLFNBQVN1QyxXQUFULEdBQXVCO0FBQ3JCLFNBQU9wQyxLQUFLLENBQUNrRCxJQUFOLENBQVc1QyxRQUFRLENBQUNDLHNCQUFULENBQWdDQywwRUFBUyxDQUFDQyxJQUExQyxDQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTNEIsYUFBVCxDQUNFRixVQURGLEVBRUVMLGlCQUZGLEVBR0VoQyxLQUhGLEVBUUU7QUFDQTtBQUNBcUMsWUFBVSxDQUFDZ0IsT0FBWCxDQUFtQixVQUFDSCxJQUFELEVBQU9JLEtBQVAsRUFBaUI7QUFDbENBLFNBQUssS0FBS3RCLGlCQUFWLEdBQ0lrQixJQUFJLENBQUNwQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUJMLDBFQUFTLENBQUNNLFFBQTdCLENBREosR0FFSWtDLElBQUksQ0FBQ3BDLFNBQUwsQ0FBZXlDLE1BQWYsQ0FBc0I3QywwRUFBUyxDQUFDTSxRQUFoQyxDQUZKO0FBR0QsR0FKRDtBQUtBaEIsT0FBSyxDQUFDdUMsYUFBTixDQUFvQlAsaUJBQXBCO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW1ibGFDYXJvdXNlbCBmcm9tIFwiZW1ibGEtY2Fyb3VzZWwvcmVhY3RcIjtcbmltcG9ydCB7IHJlc3BvbnNpdmUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG4vLyBpbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgY29tcFN0eWxlIGZyb20gXCIuL3N0eWxlcy9QYWdlc0NvbnRyb2xsZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IF9fRGlyZWN0aXZlTG9jYXRpb24gfSBmcm9tIFwiZ3JhcGhxbFwiO1xuXG5jb25zdCBQYWdlc0NvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IFtwYWdlc0Ftb3VudCwgc2V0UGFnZXNBbW91bnRdID0gdXNlU3RhdGU8QXJyYXk8bnVtYmVyPj4oW1xuICAgIC4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzQW1vdW50KFsuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKV0pO1xuICAgIC8vIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBtb3VudGVkXCIpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVuZXQgdXBkYXRlZFwiKTtcbiAgICAvLyB9XG4gIH0sIFtwcm9wcy5jdXJyZW50UGFnZXNdKTtcbiAgLy8qIEVmZmVjdCBmb3Igc2V0dGluZyB0aGUgYm9yZGVyIHRvIHRoZSBmaXJzdCBwYWdlIHdoZW4gdGhlcmUgYXJlIG5vIG90aGVyIHBhZ2VzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKS5sZW5ndGggPD0gMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpPy5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkaWRNb3VudFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhclJpZ2h0QXJyb3d9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21MZWZ0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyTGVmdEFycm93fT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PixcbiAgICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBhIHBhZ2VcIiwgZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBjb25zdCBwYWdlc0FycmF5ID0gZ2V0QWxsUGFnZXMoKTtcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VzQXJyYXksIGluZGV4T2ZBY3RpdmVQYWdlLCBwcm9wcyk7XG4gIH07XG5cbiAgY29uc3Qgdmlld3BvcnRDc3MgPSB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9XG4gIGNvbnN0IGNvbnRhaW5lckNzcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH1cbiAgY29uc3Qgc2xpZGVDc3MgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZS5XcmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuQkdDb250YWluZXJ9PlxuICAgICAgICB7LyogPENhcm91c2VsXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M9e2NvbXBTdHlsZS5DYXJvdXNlbH1cbiAgICAgICAgICBpdGVtQ2xhc3M9e2NvbXBTdHlsZS5JdGVtfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PEN1c3RvbVJpZ2h0QXJyb3cgLz59XG4gICAgICAgICAgY3VzdG9tTGVmdEFycm93PXs8Q3VzdG9tTGVmdEFycm93IC8+fVxuICAgICAgICAgIHNob3dEb3RzXG4gICAgICAgICAgLy8gc3NyXG4gICAgICAgID4gKi99XG5cbiAgICAgICAge3BhZ2VzQW1vdW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgaW5kZXg9e3BhZ2V9XG4gICAgICAgICAgICAgIGlkPXtTdHJpbmcocGFnZSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVQYWdlQ2xpY2soZSwgcGFnZSl9XG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlLlBhZ2V9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3NsaWRlQ3NzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICB7LyogPC9DYXJvdXNlbD4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFycm93ID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNVwiXG4gICAgaGVpZ2h0PVwiMjZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTUgMjZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIgMjRMMTMgMTNMMiAyXCJcbiAgICAgIHN0cm9rZT1cIiMyRjQ4NThcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udHJvbGxlcjtcblxuZnVuY3Rpb24gZ2V0QWxsUGFnZXMoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29tcFN0eWxlLlBhZ2UpKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUGFnZShcbiAgcGFnZXNBcnJheTogRWxlbWVudFtdLFxuICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyLFxuICBwcm9wczoge1xuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbiAgfVxuKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZyB0aGUgZ3JlZW4gYm9yZGVyXCIpO1xuICBwYWdlc0FycmF5LmZvckVhY2goKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgaW5kZXggPT09IGluZGV4T2ZBY3RpdmVQYWdlXG4gICAgICA/IHBhZ2UuY2xhc3NMaXN0LmFkZChjb21wU3R5bGUuU2VsZWN0ZWQpXG4gICAgICA6IHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjb21wU3R5bGUuU2VsZWN0ZWQpO1xuICB9KTtcbiAgcHJvcHMuc2V0QWN0aXZlUGFnZShpbmRleE9mQWN0aXZlUGFnZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})