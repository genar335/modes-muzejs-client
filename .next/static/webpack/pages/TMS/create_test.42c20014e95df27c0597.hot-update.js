webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys()));\n\n    if (didMountRef.current) {\n      console.log(\"component mounted\");\n    } else {\n      console.log(\"componenet updated\");\n    }\n  }, [props.currentPages]);\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // setActivePage(getAllPages(), 0, props);\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n    }\n  });\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    containerClass: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Carousel,\n    itemClass: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Item,\n    responsive: _constants__WEBPACK_IMPORTED_MODULE_4__[\"responsive\"],\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 29\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 28\n      }\n    }),\n    showDots: true,\n    ssr: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      },\n      className: \"\".concat(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 19\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 19\n      }\n    }, page + 1)));\n  }))));\n};\n\n_s(PagesController, \"LI7ShJVDHMJYIM91FCksZOKqRCE=\");\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkaWRNb3VudFJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjb21wU3R5bGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJwYWdlc0FycmF5IiwiZ2V0QWxsUGFnZXMiLCJzZXRBY3RpdmVQYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUGFnZSIsImxlbmd0aCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiU2VsZWN0ZWQiLCJXcmFwcGVyIiwiQkdDb250YWluZXIiLCJDYXJvdXNlbCIsIkl0ZW0iLCJyZXNwb25zaXZlIiwibWFwIiwicGFnZSIsIlN0cmluZyIsImZyb20iLCJmb3JFYWNoIiwiaW5kZXgiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFJbEI7QUFBQTs7QUFBQSxrQkFDa0NDLHNEQUFRLDhGQUN6Q0MsS0FBSyxDQUFDRixLQUFLLENBQUNHLFlBQVAsQ0FBTCxDQUEw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QUFDLE1BSlA7QUFLRSxTQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsS0FBQyxFQUFDLGlCQURKO0FBRUUsVUFBTSxFQUFDLFNBRlQ7QUFHRSxvQkFBYSxHQUhmO0FBSUUsc0JBQWUsT0FKakI7QUFLRSx1QkFBZ0IsT0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBRFk7QUFBQSxDQUFkOztNQUFNQSxLO0FBa0JTdkIsOEVBQWY7O0FBRUEsU0FBU2dDLFdBQVQsR0FBdUI7QUFDckIsU0FBTzdCLEtBQUssQ0FBQytDLElBQU4sQ0FBV2hCLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NkLDBFQUFTLENBQUNlLElBQTFDLENBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVNILGFBQVQsQ0FDRUYsVUFERixFQUVFSCxpQkFGRixFQUdFM0IsS0FIRixFQVFFO0FBQ0FVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0FtQixZQUFVLENBQUNvQixPQUFYLENBQW1CLFVBQUNILElBQUQsRUFBT0ksS0FBUCxFQUFpQjtBQUNsQ0EsU0FBSyxLQUFLeEIsaUJBQVYsR0FDSW9CLElBQUksQ0FBQ1QsU0FBTCxDQUFlQyxHQUFmLENBQW1CbkIsMEVBQVMsQ0FBQ29CLFFBQTdCLENBREosR0FFSU8sSUFBSSxDQUFDVCxTQUFMLENBQWVjLE1BQWYsQ0FBc0JoQywwRUFBUyxDQUFDb0IsUUFBaEMsQ0FGSjtBQUdELEdBSkQ7QUFLQXhDLE9BQUssQ0FBQ2dDLGFBQU4sQ0FBb0JMLGlCQUFwQjtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL1BhZ2VzQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQYWdlc0NvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IFtwYWdlc0Ftb3VudCwgc2V0UGFnZXNBbW91bnRdID0gdXNlU3RhdGU8QXJyYXk8bnVtYmVyPj4oW1xuICAgIC4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzQW1vdW50KFsuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKV0pO1xuICAgIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBtb3VudGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVuZXQgdXBkYXRlZFwiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5jdXJyZW50UGFnZXNdKTtcblxuICBjb25zdCBkaWRNb3VudFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhclJpZ2h0QXJyb3d9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21MZWZ0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyTGVmdEFycm93fT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PixcbiAgICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBhIHBhZ2VcIiwgZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBjb25zdCBwYWdlc0FycmF5ID0gZ2V0QWxsUGFnZXMoKTtcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VzQXJyYXksIGluZGV4T2ZBY3RpdmVQYWdlLCBwcm9wcyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXRBY3RpdmVQYWdlKGdldEFsbFBhZ2VzKCksIDAsIHByb3BzKTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKS5sZW5ndGggPD0gMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpPy5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkJHQ29udGFpbmVyfT5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M9e2NvbXBTdHlsZS5DYXJvdXNlbH1cbiAgICAgICAgICBpdGVtQ2xhc3M9e2NvbXBTdHlsZS5JdGVtfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PEN1c3RvbVJpZ2h0QXJyb3cgLz59XG4gICAgICAgICAgY3VzdG9tTGVmdEFycm93PXs8Q3VzdG9tTGVmdEFycm93IC8+fVxuICAgICAgICAgIHNob3dEb3RzXG4gICAgICAgICAgc3NyXG4gICAgICAgID5cbiAgICAgICAgICB7cGFnZXNBbW91bnQubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICAgIGlkPXtTdHJpbmcocGFnZSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVBhZ2VDbGljayhlLCBwYWdlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NvbXBTdHlsZS5QYWdlfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhZ2UgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBBcnJvdyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTVcIlxuICAgIGhlaWdodD1cIjI2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE1IDI2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yIDI0TDEzIDEzTDIgMlwiXG4gICAgICBzdHJva2U9XCIjMkY0ODU4XCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRyb2xsZXI7XG5cbmZ1bmN0aW9uIGdldEFsbFBhZ2VzKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKSk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVBhZ2UoXG4gIHBhZ2VzQXJyYXk6IEVsZW1lbnRbXSxcbiAgaW5kZXhPZkFjdGl2ZVBhZ2U6IG51bWJlcixcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gICAgc2V0QWN0aXZlUGFnZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG4gIH1cbikge1xuICBjb25zb2xlLmxvZyhcInNldHRpbmcgdGhlIGdyZWVuIGJvcmRlclwiKTtcbiAgcGFnZXNBcnJheS5mb3JFYWNoKChwYWdlLCBpbmRleCkgPT4ge1xuICAgIGluZGV4ID09PSBpbmRleE9mQWN0aXZlUGFnZVxuICAgICAgPyBwYWdlLmNsYXNzTGlzdC5hZGQoY29tcFN0eWxlLlNlbGVjdGVkKVxuICAgICAgOiBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoY29tcFN0eWxlLlNlbGVjdGVkKTtcbiAgfSk7XG4gIHByb3BzLnNldEFjdGl2ZVBhZ2UoaW5kZXhPZkFjdGl2ZVBhZ2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})