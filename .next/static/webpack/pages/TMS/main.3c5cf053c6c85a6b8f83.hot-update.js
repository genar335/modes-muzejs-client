webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var viewportCss = {\n    overflow: \"hidden\"\n  };\n  var containerCss = {\n    display: \"flex\"\n  };\n  var slideCss = {\n    position: \"relative\" // minWidth: \"100%\",\n\n  };\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"])({\n    loop: false,\n    slidesToScroll: 2,\n    draggable: false\n  }),\n      _useEmblaCarousel2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      emblaRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    return embla && embla.scrollPrev();\n  }, [embla]);\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    return embla && embla.scrollNext();\n  }, [embla]);\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: viewportCss,\n    ref: emblaRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: containerCss,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      index: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      } // className={`${compStyle.Page}`}\n      ,\n      style: slideCss,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 19\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 21\n      }\n    }, page + 1)));\n  }))), __jsx(\"button\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n    onClick: scrollNext,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, Arrow()), __jsx(\"button\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n    onClick: scrollPrev,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, Arrow())));\n};\n\n_s(PagesController, \"5WvT3VJU1r3R2mV+IYeP46r09+A=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"]];\n});\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInZpZXdwb3J0Q3NzIiwib3ZlcmZsb3ciLCJjb250YWluZXJDc3MiLCJkaXNwbGF5Iiwic2xpZGVDc3MiLCJwb3NpdGlvbiIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2xpZGVzVG9TY3JvbGwiLCJkcmFnZ2FibGUiLCJlbWJsYVJlZiIsImVtYmxhIiwic2Nyb2xsUHJldiIsInVzZUNhbGxiYWNrIiwic2Nyb2xsTmV4dCIsIldyYXBwZXIiLCJCR0NvbnRhaW5lciIsIm1hcCIsInBhZ2UiLCJTdHJpbmciLCJmcm9tIiwiZm9yRWFjaCIsImluZGV4IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUE7QUFBQSxJQVBGLENBRFk7QUFBQSxDQUFkOztNQUFNQSxLO0FBa0JTNUIsOEVBQWY7O0FBRUEsU0FBU3VDLFdBQVQsR0FBdUI7QUFDckIsU0FBT3BDLEtBQUssQ0FBQzBELElBQU4sQ0FBV3BELFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLDBFQUFTLENBQUNDLElBQTFDLENBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVM0QixhQUFULENBQ0VGLFVBREYsRUFFRUwsaUJBRkYsRUFHRWhDLEtBSEYsRUFRRTtBQUNBO0FBQ0FxQyxZQUFVLENBQUN3QixPQUFYLENBQW1CLFVBQUNILElBQUQsRUFBT0ksS0FBUCxFQUFpQjtBQUNsQ0EsU0FBSyxLQUFLOUIsaUJBQVYsR0FDSTBCLElBQUksQ0FBQzVDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQkwsMEVBQVMsQ0FBQ00sUUFBN0IsQ0FESixHQUVJMEMsSUFBSSxDQUFDNUMsU0FBTCxDQUFlaUQsTUFBZixDQUFzQnJELDBFQUFTLENBQUNNLFFBQWhDLENBRko7QUFHRCxHQUpEO0FBS0FoQixPQUFLLENBQUN1QyxhQUFOLENBQW9CUCxpQkFBcEI7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZXNDb250cm9sbGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW1ibGFDYXJvdXNlbCwgeyB1c2VFbWJsYUNhcm91c2VsIH0gZnJvbSBcImVtYmxhLWNhcm91c2VsL3JlYWN0XCI7XG5pbXBvcnQgeyByZXNwb25zaXZlIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuLy8gaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IGNvbXBTdHlsZSBmcm9tIFwiLi9zdHlsZXMvUGFnZXNDb250cm9sbGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBfX0RpcmVjdGl2ZUxvY2F0aW9uIH0gZnJvbSBcImdyYXBocWxcIjtcblxuY29uc3QgUGFnZXNDb250cm9sbGVyID0gKHByb3BzOiB7XG4gIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgc2V0QWN0aXZlUGFnZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIGN1cnJlbnRQYWdlczogbnVtYmVyO1xufSkgPT4ge1xuICBjb25zdCBbcGFnZXNBbW91bnQsIHNldFBhZ2VzQW1vdW50XSA9IHVzZVN0YXRlPEFycmF5PG51bWJlcj4+KFtcbiAgICAuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKSxcbiAgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlc0Ftb3VudChbLi4uQXJyYXkocHJvcHMuY3VycmVudFBhZ2VzKS5rZXlzKCldKTtcbiAgICAvLyBpZiAoZGlkTW91bnRSZWYuY3VycmVudCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgbW91bnRlZFwiKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJjb21wb25lbmV0IHVwZGF0ZWRcIik7XG4gICAgLy8gfVxuICB9LCBbcHJvcHMuY3VycmVudFBhZ2VzXSk7XG4gIC8vKiBFZmZlY3QgZm9yIHNldHRpbmcgdGhlIGJvcmRlciB0byB0aGUgZmlyc3QgcGFnZSB3aGVuIHRoZXJlIGFyZSBubyBvdGhlciBwYWdlcy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb21wU3R5bGUuUGFnZSkubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiMFwiKT8uY2xhc3NMaXN0LmFkZChjb21wU3R5bGUuU2VsZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZGlkTW91bnRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBDdXN0b21SaWdodEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICAvLyBvbk1vdmUgbWVhbnMgaWYgZHJhZ2dpbmcgb3Igc3dpcGluZyBpbiBwcm9ncmVzcy5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJSaWdodEFycm93fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tTGVmdEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhckxlZnRBcnJvd30+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAoXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4sXG4gICAgaW5kZXhPZkFjdGl2ZVBhZ2U6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgb24gYSBwYWdlXCIsIGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgY29uc3QgcGFnZXNBcnJheSA9IGdldEFsbFBhZ2VzKCk7XG4gICAgc2V0QWN0aXZlUGFnZShwYWdlc0FycmF5LCBpbmRleE9mQWN0aXZlUGFnZSwgcHJvcHMpO1xuICB9O1xuXG4gIGNvbnN0IHZpZXdwb3J0Q3NzID0ge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9O1xuICBjb25zdCBjb250YWluZXJDc3MgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH07XG4gIGNvbnN0IHNsaWRlQ3NzID0ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgLy8gbWluV2lkdGg6IFwiMTAwJVwiLFxuICB9O1xuXG4gIGNvbnN0IFtlbWJsYVJlZiwgZW1ibGFdID0gdXNlRW1ibGFDYXJvdXNlbCh7XG4gICAgbG9vcDogZmFsc2UsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3Qgc2Nyb2xsUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IGVtYmxhICYmIGVtYmxhLnNjcm9sbFByZXYoKSwgW2VtYmxhXSk7XG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxOZXh0KCksIFtlbWJsYV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZS5XcmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuQkdDb250YWluZXJ9PlxuICAgICAgICB7LyogPENhcm91c2VsXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M9e2NvbXBTdHlsZS5DYXJvdXNlbH1cbiAgICAgICAgICBpdGVtQ2xhc3M9e2NvbXBTdHlsZS5JdGVtfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PEN1c3RvbVJpZ2h0QXJyb3cgLz59XG4gICAgICAgICAgY3VzdG9tTGVmdEFycm93PXs8Q3VzdG9tTGVmdEFycm93IC8+fVxuICAgICAgICAgIHNob3dEb3RzXG4gICAgICAgICAgLy8gc3NyXG4gICAgICAgID4gKi99XG5cbiAgICAgICAgPGRpdiBzdHlsZT17dmlld3BvcnRDc3N9IHJlZj17ZW1ibGFSZWZ9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNzc30+XG4gICAgICAgICAgICB7cGFnZXNBbW91bnQubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICBpZD17U3RyaW5nKHBhZ2UpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVBhZ2VDbGljayhlLCBwYWdlKX1cbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17YCR7Y29tcFN0eWxlLlBhZ2V9YH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzbGlkZUNzc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rk1Mb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgey8qIDwvQ2Fyb3VzZWw+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJSaWdodEFycm93fSBvbkNsaWNrPXtzY3JvbGxOZXh0fT5cbiAgICAgICAgICB7QXJyb3coKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyTGVmdEFycm93fSBvbkNsaWNrPXtzY3JvbGxQcmV2fT5cbiAgICAgICAgICB7QXJyb3coKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFycm93ID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNVwiXG4gICAgaGVpZ2h0PVwiMjZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTUgMjZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIgMjRMMTMgMTNMMiAyXCJcbiAgICAgIHN0cm9rZT1cIiMyRjQ4NThcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udHJvbGxlcjtcblxuZnVuY3Rpb24gZ2V0QWxsUGFnZXMoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29tcFN0eWxlLlBhZ2UpKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUGFnZShcbiAgcGFnZXNBcnJheTogRWxlbWVudFtdLFxuICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyLFxuICBwcm9wczoge1xuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbiAgfVxuKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZyB0aGUgZ3JlZW4gYm9yZGVyXCIpO1xuICBwYWdlc0FycmF5LmZvckVhY2goKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgaW5kZXggPT09IGluZGV4T2ZBY3RpdmVQYWdlXG4gICAgICA/IHBhZ2UuY2xhc3NMaXN0LmFkZChjb21wU3R5bGUuU2VsZWN0ZWQpXG4gICAgICA6IHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShjb21wU3R5bGUuU2VsZWN0ZWQpO1xuICB9KTtcbiAgcHJvcHMuc2V0QWN0aXZlUGFnZShpbmRleE9mQWN0aXZlUGFnZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})