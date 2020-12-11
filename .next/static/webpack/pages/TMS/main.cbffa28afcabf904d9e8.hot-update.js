webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var viewportCss = {\n    overflow: \"hidden\"\n  };\n  var containerCss = {\n    display: \"flex\"\n  };\n  var slideCss = {\n    position: \"relative\" // minWidth: \"100%\",\n\n  };\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"])({\n    loop: false,\n    slidesToScroll: 2,\n    draggable: false\n  }),\n      _useEmblaCarousel2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      emblaRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    return embla && embla.scrollPrev();\n  }, [embla]);\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    return embla && embla.scrollNext();\n  }, [embla]);\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: viewportCss,\n    ref: emblaRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: containerCss,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      index: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      } // className={`${compStyle.Page}`}\n      ,\n      style: slideCss,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 19\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 21\n      }\n    }, page + 1)));\n  }))), __jsx(\"button\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BtnNext,\n    onClick: scrollNext,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, Arrow()), __jsx(\"button\", {\n    onClick: scrollPrev,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, Arrow())));\n};\n\n_s(PagesController, \"5WvT3VJU1r3R2mV+IYeP46r09+A=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"]];\n});\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInZpZXdwb3J0Q3NzIiwib3ZlcmZsb3ciLCJjb250YWluZXJDc3MiLCJkaXNwbGF5Iiwic2xpZGVDc3MiLCJwb3NpdGlvbiIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2xpZGVzVG9TY3JvbGwiLCJkcmFnZ2FibGUiLCJlbWJsYVJlZiIsImVtYmxhIiwic2Nyb2xsUHJldiIsInVzZUNhbGxiYWNrIiwic2Nyb2xsTmV4dCIsIldyYXBwZXIiLCJCR0NvbnRhaW5lciIsIm1hcCIsInBhZ2UiLCJTdHJpbmciLCJCdG5OZXh0IiwiZnJvbSIsImZvckVhY2giLCJpbmRleCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBRUE7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBSWxCO0FBQUE7O0FBQUEsa0JBQ2tDQyxzREFBUSw4RkFDekNDLEtBQUssQ0FBQ0YsS0FBSyxDQUFDRyxZQUFQLENBQUwsQ0FBMEJDLElBQTFCLEVBRHlDLEVBRDFDO0FBQUEsTUFDR0MsV0FESDtBQUFBLE1BQ2dCQyxjQURoQjs7QUFLSkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGtCQUFjLENBQUMsNkZBQUlKLEtBQUssQ0FBQ0YsS0FBSyxDQUFDRyxZQUFQLENBQUwsQ0FBMEJDLElBQTFCLEVBQUwsRUFBZCxDQURjLENBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBUFEsRUFPTixDQUFDSixLQUFLLENBQUNHLFlBQVAsQ0FQTSxDQUFULENBTEksQ0FhSjs7QUFDQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQ0MsMEVBQVMsQ0FBQ0MsSUFBMUMsRUFBZ0RDLE1BQWhELElBQTBELENBQTlELEVBQWlFO0FBQUE7O0FBQy9ELCtCQUFBSixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsR0FBeEIsaUZBQThCQyxTQUE5QixDQUF3Q0MsR0FBeEMsQ0FBNENMLDBFQUFTLENBQUNNLFFBQXREO0FBQ0Q7QUFDRixHQUpRLENBQVQ7QUFNQSxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBMEI7QUFBQSxRQUF2QkMsUUFBdUIsUUFBdkJBLE9BQXVCO0FBQUEsUUFBWEMsSUFBVzs7QUFBQSxRQUUvQ0MsTUFGK0MsR0FJN0NELElBSjZDLENBRS9DQyxNQUYrQztBQUFBLDhCQUk3Q0QsSUFKNkMsQ0FHL0NFLGFBSCtDO0FBQUEsUUFHOUJDLFlBSDhCLHVCQUc5QkEsWUFIOEI7QUFBQSxRQUdoQkMsVUFIZ0IsdUJBR2hCQSxVQUhnQixFQUtqRDs7QUFDQSxXQUNFO0FBQVEsZUFBUyxFQUFFZiwwRUFBUyxDQUFDZ0IsYUFBN0I7QUFBNEMsYUFBTyxFQUFFO0FBQUEsZUFBTU4sUUFBTyxFQUFiO0FBQUEsT0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTyxLQUFLLEVBRFIsQ0FERjtBQUtELEdBWEQ7O0FBYUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUEwQjtBQUFBLFFBQXZCUixTQUF1QixTQUF2QkEsT0FBdUI7QUFBQSxRQUFYQyxJQUFXOztBQUFBLFFBRTlDQyxNQUY4QyxHQUk1Q0QsSUFKNEMsQ0FFOUNDLE1BRjhDO0FBQUEsK0JBSTVDRCxJQUo0QyxDQUc5Q0UsYUFIOEM7QUFBQSxRQUc3QkMsWUFINkIsd0JBRzdCQSxZQUg2QjtBQUFBLFFBR2ZDLFVBSGUsd0JBR2ZBLFVBSGU7QUFLaEQsV0FDRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1MLFNBQU8sRUFBYjtBQUFBLE9BQWpCO0FBQWtDLGVBQVMsRUFBRVYsMEVBQVMsQ0FBQ21CLFlBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0YsS0FBSyxFQURSLENBREY7QUFLRCxHQVZEOztBQVlBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FDdEJDLENBRHNCLEVBRXRCQyxpQkFGc0IsRUFHbkI7QUFDSEMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNILENBQUMsQ0FBQ0ksYUFBRixDQUFnQkMsRUFBakQ7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLFdBQVcsRUFBOUI7QUFDQUMsaUJBQWEsQ0FBQ0YsVUFBRCxFQUFhTCxpQkFBYixFQUFnQ2hDLEtBQWhDLENBQWI7QUFDRCxHQVBEOztBQVNBLE1BQU13QyxXQUFXLEdBQUc7QUFDbEJDLFlBQVEsRUFBRTtBQURRLEdBQXBCO0FBR0EsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxXQUFPLEVBQUU7QUFEVSxHQUFyQjtBQUdBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxZQUFRLEVBQUUsVUFESyxDQUVmOztBQUZlLEdBQWpCOztBQTlESSwwQkFtRXNCQyw2RUFBZ0IsQ0FBQztBQUN6Q0MsUUFBSSxFQUFFLEtBRG1DO0FBRXpDQyxrQkFBYyxFQUFFLENBRnlCO0FBR3pDQyxhQUFTLEVBQUU7QUFIOEIsR0FBRCxDQW5FdEM7QUFBQTtBQUFBLE1BbUVHQyxRQW5FSDtBQUFBLE1BbUVhQyxLQW5FYjs7QUF5RUosTUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDO0FBQUEsV0FBTUYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLFVBQU4sRUFBZjtBQUFBLEdBQUQsRUFBb0MsQ0FBQ0QsS0FBRCxDQUFwQyxDQUE5QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0QseURBQVcsQ0FBQztBQUFBLFdBQU1GLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxVQUFOLEVBQWY7QUFBQSxHQUFELEVBQW9DLENBQUNILEtBQUQsQ0FBcEMsQ0FBOUI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFekMsMEVBQVMsQ0FBQzZDLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRTdDLDBFQUFTLENBQUM4QyxXQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBSyxTQUFLLEVBQUVoQixXQUFaO0FBQXlCLE9BQUcsRUFBRVUsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFUixZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JDLFdBQVcsQ0FBQ29ELEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLFdBQ0U7QUFDRSxTQUFHLEVBQUVBLElBRFA7QUFFRSxXQUFLLEVBQUVBLElBRlQ7QUFHRSxRQUFFLEVBQUVDLE1BQU0sQ0FBQ0QsSUFBRCxDQUhaO0FBSUUsYUFBTyxFQUFFLGlCQUFDM0IsQ0FBRDtBQUFBLGVBQU9ELGVBQWUsQ0FBQ0MsQ0FBRCxFQUFJMkIsSUFBSixDQUF0QjtBQUFBLE9BSlgsQ0FLRTtBQUxGO0FBTUUsV0FBSyxFQUFFZCxRQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9jLElBQUksR0FBRyxDQUFkLENBRkYsQ0FSRixDQURGO0FBZUQsR0FoQkEsQ0FESCxDQURGLENBWEYsRUFpQ0U7QUFBUSxhQUFTLEVBQUVoRCwwRUFBUyxDQUFDa0QsT0FBN0I7QUFBc0MsV0FBTyxFQUFFTixVQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0czQixLQUFLLEVBRFIsQ0FqQ0YsRUFvQ0U7QUFBUSxXQUFPLEVBQUV5QixVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCekIsS0FBSyxFQUFuQyxDQXBDRixDQURGLENBREY7QUEwQ0QsQ0ExSEQ7O0dBQU01QixlO1VBdUVzQitDLHFFOzs7S0F2RXRCL0MsZTs7QUE0SE4sSUFBTTRCLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FDWjtBQUNFLFNBQUssRUFBQyxJQURSO0FBRUUsVUFBTSxFQUFDLElBRlQ7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsU0FBSyxFQUFDLDRCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUNFLEtBQUMsRUFBQyxpQkFESjtBQUVFLFVBQU0sRUFBQyxTQUZUO0FBR0Usb0JBQWEsR0FIZjtBQUlFLHNCQUFlLE9BSmpCO0FBS0UsdUJBQWdCLE9BTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURZO0FBQUEsQ0FBZDs7TUFBTUEsSztBQWtCUzVCLDhFQUFmOztBQUVBLFNBQVN1QyxXQUFULEdBQXVCO0FBQ3JCLFNBQU9wQyxLQUFLLENBQUMyRCxJQUFOLENBQVdyRCxRQUFRLENBQUNDLHNCQUFULENBQWdDQywwRUFBUyxDQUFDQyxJQUExQyxDQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTNEIsYUFBVCxDQUNFRixVQURGLEVBRUVMLGlCQUZGLEVBR0VoQyxLQUhGLEVBUUU7QUFDQTtBQUNBcUMsWUFBVSxDQUFDeUIsT0FBWCxDQUFtQixVQUFDSixJQUFELEVBQU9LLEtBQVAsRUFBaUI7QUFDbENBLFNBQUssS0FBSy9CLGlCQUFWLEdBQ0kwQixJQUFJLENBQUM1QyxTQUFMLENBQWVDLEdBQWYsQ0FBbUJMLDBFQUFTLENBQUNNLFFBQTdCLENBREosR0FFSTBDLElBQUksQ0FBQzVDLFNBQUwsQ0FBZWtELE1BQWYsQ0FBc0J0RCwwRUFBUyxDQUFDTSxRQUFoQyxDQUZKO0FBR0QsR0FKRDtBQUtBaEIsT0FBSyxDQUFDdUMsYUFBTixDQUFvQlAsaUJBQXBCO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGVtYmxhQ2Fyb3VzZWwsIHsgdXNlRW1ibGFDYXJvdXNlbCB9IGZyb20gXCJlbWJsYS1jYXJvdXNlbC9yZWFjdFwiO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL1BhZ2VzQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgX19EaXJlY3RpdmVMb2NhdGlvbiB9IGZyb20gXCJncmFwaHFsXCI7XG5cbmNvbnN0IFBhZ2VzQ29udHJvbGxlciA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIHNldEFjdGl2ZVBhZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3QgW3BhZ2VzQW1vdW50LCBzZXRQYWdlc0Ftb3VudF0gPSB1c2VTdGF0ZTxBcnJheTxudW1iZXI+PihbXG4gICAgLi4uQXJyYXkocHJvcHMuY3VycmVudFBhZ2VzKS5rZXlzKCksXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZXNBbW91bnQoWy4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpXSk7XG4gICAgLy8gaWYgKGRpZE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IG1vdW50ZWRcIik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW5ldCB1cGRhdGVkXCIpO1xuICAgIC8vIH1cbiAgfSwgW3Byb3BzLmN1cnJlbnRQYWdlc10pO1xuICAvLyogRWZmZWN0IGZvciBzZXR0aW5nIHRoZSBib3JkZXIgdG8gdGhlIGZpcnN0IHBhZ2Ugd2hlbiB0aGVyZSBhcmUgbm8gb3RoZXIgcGFnZXMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29tcFN0eWxlLlBhZ2UpLmxlbmd0aCA8PSAxKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjBcIik/LmNsYXNzTGlzdC5hZGQoY29tcFN0eWxlLlNlbGVjdGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRpZE1vdW50UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgQ3VzdG9tUmlnaHRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgLy8gb25Nb3ZlIG1lYW5zIGlmIGRyYWdnaW5nIG9yIHN3aXBpbmcgaW4gcHJvZ3Jlc3MuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyUmlnaHRBcnJvd30gb25DbGljaz17KCkgPT4gb25DbGljaygpfT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEN1c3RvbUxlZnRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljaygpfSBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJMZWZ0QXJyb3d9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGFnZUNsaWNrID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+LFxuICAgIGluZGV4T2ZBY3RpdmVQYWdlOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkIG9uIGEgcGFnZVwiLCBlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIGNvbnN0IHBhZ2VzQXJyYXkgPSBnZXRBbGxQYWdlcygpO1xuICAgIHNldEFjdGl2ZVBhZ2UocGFnZXNBcnJheSwgaW5kZXhPZkFjdGl2ZVBhZ2UsIHByb3BzKTtcbiAgfTtcblxuICBjb25zdCB2aWV3cG9ydENzcyA9IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgfTtcbiAgY29uc3QgY29udGFpbmVyQ3NzID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9O1xuICBjb25zdCBzbGlkZUNzcyA9IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIC8vIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgfTtcblxuICBjb25zdCBbZW1ibGFSZWYsIGVtYmxhXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxQcmV2KCksIFtlbWJsYV0pO1xuICBjb25zdCBzY3JvbGxOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4gZW1ibGEgJiYgZW1ibGEuc2Nyb2xsTmV4dCgpLCBbZW1ibGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkJHQ29udGFpbmVyfT5cbiAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtjb21wU3R5bGUuQ2Fyb3VzZWx9XG4gICAgICAgICAgaXRlbUNsYXNzPXtjb21wU3R5bGUuSXRlbX1cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PEN1c3RvbUxlZnRBcnJvdyAvPn1cbiAgICAgICAgICBzaG93RG90c1xuICAgICAgICAgIC8vIHNzclxuICAgICAgICA+ICovfVxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3ZpZXdwb3J0Q3NzfSByZWY9e2VtYmxhUmVmfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDc3N9PlxuICAgICAgICAgICAge3BhZ2VzQW1vdW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtwYWdlfVxuICAgICAgICAgICAgICAgICAgaWQ9e1N0cmluZyhwYWdlKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVQYWdlQ2xpY2soZSwgcGFnZSl9XG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZS5QYWdlfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17c2xpZGVDc3N9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHsvKiA8L0Nhcm91c2VsPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjb21wU3R5bGUuQnRuTmV4dH0gb25DbGljaz17c2Nyb2xsTmV4dH0+XG4gICAgICAgICAge0Fycm93KCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFByZXZ9PntBcnJvdygpfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBBcnJvdyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTVcIlxuICAgIGhlaWdodD1cIjI2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE1IDI2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yIDI0TDEzIDEzTDIgMlwiXG4gICAgICBzdHJva2U9XCIjMkY0ODU4XCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRyb2xsZXI7XG5cbmZ1bmN0aW9uIGdldEFsbFBhZ2VzKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKSk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2UoXG4gIHBhZ2VzQXJyYXk6IEVsZW1lbnRbXSxcbiAgaW5kZXhPZkFjdGl2ZVBhZ2U6IG51bWJlcixcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gICAgc2V0QWN0aXZlUGFnZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG4gIH1cbikge1xuICAvLyBjb25zb2xlLmxvZyhcInNldHRpbmcgdGhlIGdyZWVuIGJvcmRlclwiKTtcbiAgcGFnZXNBcnJheS5mb3JFYWNoKChwYWdlLCBpbmRleCkgPT4ge1xuICAgIGluZGV4ID09PSBpbmRleE9mQWN0aXZlUGFnZVxuICAgICAgPyBwYWdlLmNsYXNzTGlzdC5hZGQoY29tcFN0eWxlLlNlbGVjdGVkKVxuICAgICAgOiBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoY29tcFN0eWxlLlNlbGVjdGVkKTtcbiAgfSk7XG4gIHByb3BzLnNldEFjdGl2ZVBhZ2UoaW5kZXhPZkFjdGl2ZVBhZ2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})