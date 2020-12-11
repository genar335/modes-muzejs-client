webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var viewportCss = {\n    overflow: \"hidden\"\n  };\n  var containerCss = {\n    display: \"flex\"\n  };\n  var slideCss = {\n    position: \"relative\",\n    minWidth: \"100%\"\n  };\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"])({\n    loop: false,\n    slidesToScroll: 3,\n    draggable: false\n  }),\n      _useEmblaCarousel2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      emblaRef = _useEmblaCarousel2[0],\n      emblaApi = _useEmblaCarousel2[1];\n\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: viewportCss,\n    ref: emblaRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: containerCss,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      index: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      } // className={`${compStyle.Page}`}\n      ,\n      style: slideCss,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 19\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 21\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 21\n      }\n    }, page + 1)));\n  })))));\n};\n\n_s(PagesController, \"oxtPc/007/rqbbjCiO3XWHcIEHM=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"]];\n});\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInZpZXdwb3J0Q3NzIiwib3ZlcmZsb3ciLCJjb250YWluZXJDc3MiLCJkaXNwbGF5Iiwic2xpZGVDc3MiLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwidXNlRW1ibGFDYXJvdXNlbCIsImxvb3AiLCJzbGlkZXNUb1Njcm9sbCIsImRyYWdnYWJsZSIsImVtYmxhUmVmIiwiZW1ibGFBcGkiLCJXcmFwcGVyIiwiQkdDb250YWluZXIiLCJtYXAiLCJwYWdlIiwiU3RyaW5nIiwiZnJvbSIsImZvckVhY2giLCJpbmRleCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBRUE7O0FBR0Es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QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZXNDb250cm9sbGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBlbWJsYUNhcm91c2VsLCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tIFwiZW1ibGEtY2Fyb3VzZWwvcmVhY3RcIjtcbmltcG9ydCB7IHJlc3BvbnNpdmUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBGTUxvZ28gZnJvbSBcIi4vRk1sb2dvXCI7XG4vLyBpbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgY29tcFN0eWxlIGZyb20gXCIuL3N0eWxlcy9QYWdlc0NvbnRyb2xsZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IF9fRGlyZWN0aXZlTG9jYXRpb24gfSBmcm9tIFwiZ3JhcGhxbFwiO1xuXG5jb25zdCBQYWdlc0NvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IFtwYWdlc0Ftb3VudCwgc2V0UGFnZXNBbW91bnRdID0gdXNlU3RhdGU8QXJyYXk8bnVtYmVyPj4oW1xuICAgIC4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzQW1vdW50KFsuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKV0pO1xuICAgIC8vIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBtb3VudGVkXCIpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVuZXQgdXBkYXRlZFwiKTtcbiAgICAvLyB9XG4gIH0sIFtwcm9wcy5jdXJyZW50UGFnZXNdKTtcbiAgLy8qIEVmZmVjdCBmb3Igc2V0dGluZyB0aGUgYm9yZGVyIHRvIHRoZSBmaXJzdCBwYWdlIHdoZW4gdGhlcmUgYXJlIG5vIG90aGVyIHBhZ2VzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKS5sZW5ndGggPD0gMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpPy5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkaWRNb3VudFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhclJpZ2h0QXJyb3d9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21MZWZ0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyTGVmdEFycm93fT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PixcbiAgICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBhIHBhZ2VcIiwgZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBjb25zdCBwYWdlc0FycmF5ID0gZ2V0QWxsUGFnZXMoKTtcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VzQXJyYXksIGluZGV4T2ZBY3RpdmVQYWdlLCBwcm9wcyk7XG4gIH07XG5cbiAgY29uc3Qgdmlld3BvcnRDc3MgPSB7XG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIH07XG4gIGNvbnN0IGNvbnRhaW5lckNzcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgfTtcbiAgY29uc3Qgc2xpZGVDc3MgPSB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBtaW5XaWR0aDogXCIxMDAlXCIsXG4gIH07XG5cbiAgY29uc3QgW2VtYmxhUmVmLCBlbWJsYUFwaV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICBsb29wOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkJHQ29udGFpbmVyfT5cbiAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtjb21wU3R5bGUuQ2Fyb3VzZWx9XG4gICAgICAgICAgaXRlbUNsYXNzPXtjb21wU3R5bGUuSXRlbX1cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PEN1c3RvbUxlZnRBcnJvdyAvPn1cbiAgICAgICAgICBzaG93RG90c1xuICAgICAgICAgIC8vIHNzclxuICAgICAgICA+ICovfVxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3ZpZXdwb3J0Q3NzfSByZWY9e2VtYmxhUmVmfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDc3N9PlxuICAgICAgICAgICAge3BhZ2VzQW1vdW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtwYWdlfVxuICAgICAgICAgICAgICAgICAgaWQ9e1N0cmluZyhwYWdlKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVQYWdlQ2xpY2soZSwgcGFnZSl9XG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZS5QYWdlfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17c2xpZGVDc3N9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHsvKiA8L0Nhcm91c2VsPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFycm93ID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNVwiXG4gICAgaGVpZ2h0PVwiMjZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTUgMjZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIgMjRMMTMgMTNMMiAyXCJcbiAgICAgIHN0cm9rZT1cIiMyRjQ4NThcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udHJvbGxlcjtcblxuZnVuY3Rpb24gZ2V0QWxsUGFnZXMoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29tcFN0eWxlLlBhZ2UpKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUGFnZShcbiAgcGFnZXNBcnJheTogRWxlbWVudFtdLFxuICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyLFxuICBwcm9wczoge1xuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbiAgfVxuKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZyB0aGUgZ3JlZW4gYm9yZGVyXCIpO1xuICBwYWdlc0FycmF5LmZvckVhY2goKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgaW5kZXggPT09IGluZGV4T2ZBY3RpdmVQYWdlXG4gICAgICA/IHBhZ2UuY2xhc3NMaXN0LmFkZChjb21wU3R5bGUuU2VsZWN0ZWQpXG4gICAgICA6IHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjb21wU3R5bGUuU2VsZWN0ZWQpO1xuICB9KTtcbiAgcHJvcHMuc2V0QWN0aXZlUGFnZShpbmRleE9mQWN0aXZlUGFnZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})