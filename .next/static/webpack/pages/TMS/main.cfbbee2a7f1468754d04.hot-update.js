webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import Carousel from \"react-multi-carousel\";\n// import Slider from \"react-slick\";\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var sliderSettings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 3,\n    slidesToScroll: 1\n  };\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__[\"CarouselProvider\"], {\n    naturalSlideHeight: 100,\n    naturalSlideWidth: 100,\n    totalSlides: 3,\n    orientation: \"horizontal\",\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Carousel,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__[\"Slider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__[\"Slide\"], {\n      key: page,\n      index: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      },\n      className: \"\".concat(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Page),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 19\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 21\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }\n    }, page + 1)));\n  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__[\"ButtonBack\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, \"Back\"), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__[\"ButtonNext\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n};\n\n_s(PagesController, \"U9bT/WsDdA59AS98jJq4W07yTTI=\");\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInNsaWRlclNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIldyYXBwZXIiLCJCR0NvbnRhaW5lciIsIkNhcm91c2VsIiwibWFwIiwicGFnZSIsIlN0cmluZyIsImZyb20iLCJmb3JFYWNoIiwiaW5kZXgiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTs7QUFDQTtDQVNBOztBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUlsQjtBQUFBOztBQUFBLGtCQUNrQ0Msc0RBQVEs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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbi8vIGltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQge1xuICBDYXJvdXNlbFByb3ZpZGVyLFxuICBTbGlkZXIsXG4gIFNsaWRlLFxuICBCdXR0b25CYWNrLFxuICBCdXR0b25OZXh0LFxufSBmcm9tIFwicHVyZS1yZWFjdC1jYXJvdXNlbFwiO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL1BhZ2VzQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQYWdlc0NvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IFtwYWdlc0Ftb3VudCwgc2V0UGFnZXNBbW91bnRdID0gdXNlU3RhdGU8QXJyYXk8bnVtYmVyPj4oW1xuICAgIC4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzQW1vdW50KFsuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKV0pO1xuICAgIC8vIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBtb3VudGVkXCIpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVuZXQgdXBkYXRlZFwiKTtcbiAgICAvLyB9XG4gIH0sIFtwcm9wcy5jdXJyZW50UGFnZXNdKTtcbiAgLy8qIEVmZmVjdCBmb3Igc2V0dGluZyB0aGUgYm9yZGVyIHRvIHRoZSBmaXJzdCBwYWdlIHdoZW4gdGhlcmUgYXJlIG5vIG90aGVyIHBhZ2VzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKS5sZW5ndGggPD0gMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpPy5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkaWRNb3VudFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhclJpZ2h0QXJyb3d9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21MZWZ0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyTGVmdEFycm93fT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PixcbiAgICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBhIHBhZ2VcIiwgZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBjb25zdCBwYWdlc0FycmF5ID0gZ2V0QWxsUGFnZXMoKTtcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VzQXJyYXksIGluZGV4T2ZBY3RpdmVQYWdlLCBwcm9wcyk7XG4gIH07XG5cbiAgY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkJHQ29udGFpbmVyfT5cbiAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtjb21wU3R5bGUuQ2Fyb3VzZWx9XG4gICAgICAgICAgaXRlbUNsYXNzPXtjb21wU3R5bGUuSXRlbX1cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PEN1c3RvbUxlZnRBcnJvdyAvPn1cbiAgICAgICAgICBzaG93RG90c1xuICAgICAgICAgIC8vIHNzclxuICAgICAgICA+ICovfVxuICAgICAgICA8Q2Fyb3VzZWxQcm92aWRlclxuICAgICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MTAwfVxuICAgICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsxMDB9XG4gICAgICAgICAgdG90YWxTbGlkZXM9ezN9XG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZS5DYXJvdXNlbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxTbGlkZXI+XG4gICAgICAgICAgICB7cGFnZXNBbW91bnQubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNsaWRlXG4gICAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICBpbmRleD17cGFnZX1cbiAgICAgICAgICAgICAgICAgIGlkPXtTdHJpbmcocGFnZSl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGUuUGFnZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhZ2UgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgICA8QnV0dG9uQmFjaz5CYWNrPC9CdXR0b25CYWNrPlxuICAgICAgICAgIDxCdXR0b25OZXh0Pk5leHQ8L0J1dHRvbk5leHQ+XG4gICAgICAgIDwvQ2Fyb3VzZWxQcm92aWRlcj5cbiAgICAgICAgey8qIDwvQ2Fyb3VzZWw+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBBcnJvdyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTVcIlxuICAgIGhlaWdodD1cIjI2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE1IDI2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yIDI0TDEzIDEzTDIgMlwiXG4gICAgICBzdHJva2U9XCIjMkY0ODU4XCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRyb2xsZXI7XG5cbmZ1bmN0aW9uIGdldEFsbFBhZ2VzKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKSk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2UoXG4gIHBhZ2VzQXJyYXk6IEVsZW1lbnRbXSxcbiAgaW5kZXhPZkFjdGl2ZVBhZ2U6IG51bWJlcixcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gICAgc2V0QWN0aXZlUGFnZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG4gIH1cbikge1xuICAvLyBjb25zb2xlLmxvZyhcInNldHRpbmcgdGhlIGdyZWVuIGJvcmRlclwiKTtcbiAgcGFnZXNBcnJheS5mb3JFYWNoKChwYWdlLCBpbmRleCkgPT4ge1xuICAgIGluZGV4ID09PSBpbmRleE9mQWN0aXZlUGFnZVxuICAgICAgPyBwYWdlLmNsYXNzTGlzdC5hZGQoY29tcFN0eWxlLlNlbGVjdGVkKVxuICAgICAgOiBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoY29tcFN0eWxlLlNlbGVjdGVkKTtcbiAgfSk7XG4gIHByb3BzLnNldEFjdGl2ZVBhZ2UoaW5kZXhPZkFjdGl2ZVBhZ2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})