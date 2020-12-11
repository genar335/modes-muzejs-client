webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var viewportCss = {\n    overflow: \"hidden\",\n    justifyContent: \"center\"\n  };\n  var containerCss = {\n    display: \"flex\"\n  };\n  var slideCss = {\n    position: \"relative\",\n    // minWidth: \"100%\",\n    background: \"rgb(4, 10, 23)\"\n  };\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"])({\n    loop: false,\n    slidesToScroll: 2,\n    draggable: false\n  }),\n      _useEmblaCarousel2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      emblaRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    return embla && embla.scrollPrev();\n  }, [embla]);\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    return embla && embla.scrollNext();\n  }, [embla]);\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BtnPrev,\n    onClick: scrollPrev,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, Arrow()), __jsx(\"div\", {\n    style: viewportCss,\n    ref: emblaRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: containerCss,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      index: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      } // className={`${compStyle.Page}`}\n      ,\n      style: slideCss,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 19\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 21\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 21\n      }\n    }, page + 1)));\n  }))), __jsx(\"button\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BtnNext,\n    onClick: scrollNext,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, Arrow())));\n};\n\n_s(PagesController, \"5WvT3VJU1r3R2mV+IYeP46r09+A=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"]];\n});\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInZpZXdwb3J0Q3NzIiwib3ZlcmZsb3ciLCJqdXN0aWZ5Q29udGVudCIsImNvbnRhaW5lckNzcyIsImRpc3BsYXkiLCJzbGlkZUNzcyIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2xpZGVzVG9TY3JvbGwiLCJkcmFnZ2FibGUiLCJlbWJsYVJlZiIsImVtYmxhIiwic2Nyb2xsUHJldiIsInVzZUNhbGxiYWNrIiwic2Nyb2xsTmV4dCIsIldyYXBwZXIiLCJCR0NvbnRhaW5lciIsIkJ0blByZXYiLCJtYXAiLCJwYWdlIiwiU3RyaW5nIiwiQnRuTmV4dCIsImZyb20iLCJmb3JFYWNoIiwi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QyxTQUZUO0FBR0Usb0JBQWEsR0FIZjtBQUlFLHNCQUFlLE9BSmpCO0FBS0UsdUJBQWdCLE9BTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURZO0FBQUEsQ0FBZDs7TUFBTUEsSztBQWtCUzVCLDhFQUFmOztBQUVBLFNBQVN1QyxXQUFULEdBQXVCO0FBQ3JCLFNBQU9wQyxLQUFLLENBQUM4RCxJQUFOLENBQVd4RCxRQUFRLENBQUNDLHNCQUFULENBQWdDQywwRUFBUyxDQUFDQyxJQUExQyxDQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTNEIsYUFBVCxDQUNFRixVQURGLEVBRUVMLGlCQUZGLEVBR0VoQyxLQUhGLEVBUUU7QUFDQTtBQUNBcUMsWUFBVSxDQUFDNEIsT0FBWCxDQUFtQixVQUFDSixJQUFELEVBQU9LLEtBQVAsRUFBaUI7QUFDbENBLFNBQUssS0FBS2xDLGlCQUFWLEdBQ0k2QixJQUFJLENBQUMvQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUJMLDBFQUFTLENBQUNNLFFBQTdCLENBREosR0FFSTZDLElBQUksQ0FBQy9DLFNBQUwsQ0FBZXFELE1BQWYsQ0FBc0J6RCwwRUFBUyxDQUFDTSxRQUFoQyxDQUZKO0FBR0QsR0FKRDtBQUtBaEIsT0FBSyxDQUFDdUMsYUFBTixDQUFvQlAsaUJBQXBCO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGVtYmxhQ2Fyb3VzZWwsIHsgdXNlRW1ibGFDYXJvdXNlbCB9IGZyb20gXCJlbWJsYS1jYXJvdXNlbC9yZWFjdFwiO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL1BhZ2VzQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgX19EaXJlY3RpdmVMb2NhdGlvbiB9IGZyb20gXCJncmFwaHFsXCI7XG5cbmNvbnN0IFBhZ2VzQ29udHJvbGxlciA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIHNldEFjdGl2ZVBhZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3QgW3BhZ2VzQW1vdW50LCBzZXRQYWdlc0Ftb3VudF0gPSB1c2VTdGF0ZTxBcnJheTxudW1iZXI+PihbXG4gICAgLi4uQXJyYXkocHJvcHMuY3VycmVudFBhZ2VzKS5rZXlzKCksXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZXNBbW91bnQoWy4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpXSk7XG4gICAgLy8gaWYgKGRpZE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IG1vdW50ZWRcIik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW5ldCB1cGRhdGVkXCIpO1xuICAgIC8vIH1cbiAgfSwgW3Byb3BzLmN1cnJlbnRQYWdlc10pO1xuICAvLyogRWZmZWN0IGZvciBzZXR0aW5nIHRoZSBib3JkZXIgdG8gdGhlIGZpcnN0IHBhZ2Ugd2hlbiB0aGVyZSBhcmUgbm8gb3RoZXIgcGFnZXMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29tcFN0eWxlLlBhZ2UpLmxlbmd0aCA8PSAxKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjBcIik/LmNsYXNzTGlzdC5hZGQoY29tcFN0eWxlLlNlbGVjdGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRpZE1vdW50UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgQ3VzdG9tUmlnaHRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgLy8gb25Nb3ZlIG1lYW5zIGlmIGRyYWdnaW5nIG9yIHN3aXBpbmcgaW4gcHJvZ3Jlc3MuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyUmlnaHRBcnJvd30gb25DbGljaz17KCkgPT4gb25DbGljaygpfT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEN1c3RvbUxlZnRBcnJvdyA9ICh7IG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gICAgfSA9IHJlc3Q7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljaygpfSBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJMZWZ0QXJyb3d9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGFnZUNsaWNrID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+LFxuICAgIGluZGV4T2ZBY3RpdmVQYWdlOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkIG9uIGEgcGFnZVwiLCBlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIGNvbnN0IHBhZ2VzQXJyYXkgPSBnZXRBbGxQYWdlcygpO1xuICAgIHNldEFjdGl2ZVBhZ2UocGFnZXNBcnJheSwgaW5kZXhPZkFjdGl2ZVBhZ2UsIHByb3BzKTtcbiAgfTtcblxuICBjb25zdCB2aWV3cG9ydENzcyA9IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfTtcbiAgY29uc3QgY29udGFpbmVyQ3NzID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9O1xuICBjb25zdCBzbGlkZUNzcyA9IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIC8vIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kOiBcInJnYig0LCAxMCwgMjMpXCIsXG4gIH07XG5cbiAgY29uc3QgW2VtYmxhUmVmLCBlbWJsYV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICBsb29wOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBzY3JvbGxQcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4gZW1ibGEgJiYgZW1ibGEuc2Nyb2xsUHJldigpLCBbZW1ibGFdKTtcbiAgY29uc3Qgc2Nyb2xsTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IGVtYmxhICYmIGVtYmxhLnNjcm9sbE5leHQoKSwgW2VtYmxhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLldyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZS5CR0NvbnRhaW5lcn0+XG4gICAgICAgIHsvKiA8Q2Fyb3VzZWxcbiAgICAgICAgICBjb250YWluZXJDbGFzcz17Y29tcFN0eWxlLkNhcm91c2VsfVxuICAgICAgICAgIGl0ZW1DbGFzcz17Y29tcFN0eWxlLkl0ZW19XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICBjdXN0b21SaWdodEFycm93PXs8Q3VzdG9tUmlnaHRBcnJvdyAvPn1cbiAgICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxDdXN0b21MZWZ0QXJyb3cgLz59XG4gICAgICAgICAgc2hvd0RvdHNcbiAgICAgICAgICAvLyBzc3JcbiAgICAgICAgPiAqL31cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLkJ0blByZXZ9IG9uQ2xpY2s9e3Njcm9sbFByZXZ9PlxuICAgICAgICAgIHtBcnJvdygpfVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt2aWV3cG9ydENzc30gcmVmPXtlbWJsYVJlZn0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQ3NzfT5cbiAgICAgICAgICAgIHtwYWdlc0Ftb3VudC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICBpbmRleD17cGFnZX1cbiAgICAgICAgICAgICAgICAgIGlkPXtTdHJpbmcocGFnZSl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2UpfVxuICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtgJHtjb21wU3R5bGUuUGFnZX1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3NsaWRlQ3NzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhZ2UgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7LyogPC9DYXJvdXNlbD4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLkJ0bk5leHR9IG9uQ2xpY2s9e3Njcm9sbE5leHR9PlxuICAgICAgICAgIHtBcnJvdygpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE1XCJcbiAgICBoZWlnaHQ9XCIyNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNSAyNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMiAyNEwxMyAxM0wyIDJcIlxuICAgICAgc3Ryb2tlPVwiIzJGNDg1OFwiXG4gICAgICBzdHJva2Utd2lkdGg9XCIzXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250cm9sbGVyO1xuXG5mdW5jdGlvbiBnZXRBbGxQYWdlcygpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb21wU3R5bGUuUGFnZSkpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQYWdlKFxuICBwYWdlc0FycmF5OiBFbGVtZW50W10sXG4gIGluZGV4T2ZBY3RpdmVQYWdlOiBudW1iZXIsXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICAgIHNldEFjdGl2ZVBhZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGN1cnJlbnRQYWdlczogbnVtYmVyO1xuICB9XG4pIHtcbiAgLy8gY29uc29sZS5sb2coXCJzZXR0aW5nIHRoZSBncmVlbiBib3JkZXJcIik7XG4gIHBhZ2VzQXJyYXkuZm9yRWFjaCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICBpbmRleCA9PT0gaW5kZXhPZkFjdGl2ZVBhZ2VcbiAgICAgID8gcGFnZS5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZClcbiAgICAgIDogcGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gIH0pO1xuICBwcm9wcy5zZXRBY3RpdmVQYWdlKGluZGV4T2ZBY3RpdmVQYWdlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})