webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Array(props.currentPages).keys())); // if (didMountRef.current) {\n    //   console.log(\"component mounted\");\n    // } else {\n    //   console.log(\"componenet updated\");\n    // }\n  }, [props.currentPages]); //* Effect for setting the border to the first page when there are no other pages.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page).length <= 1) {\n      var _document$getElementB;\n\n      (_document$getElementB = document.getElementById(\"0\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n    }\n  });\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = getAllPages();\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  var sliderSettings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1\n  };\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, sliderSettings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      },\n      className: \"\".concat(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 19\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 19\n      }\n    }, page + 1)));\n  }))));\n};\n\n_s(PagesController, \"U9bT/WsDdA59AS98jJq4W07yTTI=\");\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction getAllPages() {\n  return Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Page));\n}\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  // console.log(\"setting the green border\");\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiY3VycmVudFBhZ2VzIiwia2V5cyIsInBhZ2VzQW1vdW50Iiwic2V0UGFnZXNBbW91bnQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wU3R5bGUiLCJQYWdlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJTZWxlY3RlZCIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwiQ3VzdG9tUmlnaHRBcnJvdyIsIm9uQ2xpY2siLCJyZXN0Iiwib25Nb3ZlIiwiY2Fyb3VzZWxTdGF0ZSIsImN1cnJlbnRTbGlkZSIsImRldmljZVR5cGUiLCJjYXJSaWdodEFycm93IiwiQXJyb3ciLCJDdXN0b21MZWZ0QXJyb3ciLCJjYXJMZWZ0QXJyb3ciLCJoYW5kbGVQYWdlQ2xpY2siLCJlIiwiaW5kZXhPZkFjdGl2ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImdldEFsbFBhZ2VzIiwic2V0QWN0aXZlUGFnZSIsInNsaWRlclNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIldyYXBwZXIiLCJCR0NvbnRhaW5lciIsIm1hcCIsInBhZ2UiLCJTdHJpbmciLCJmcm9tIiwiZm9yRWFjaCIsImluZGV4IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FHQTs7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFJbEI7QUFBQTs7QUFBQSxrQkFDa0NDLHNEQUFRLDhGQUN6Q0MsS0FBSyxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FEWTtBQUFBLENBQWQ7O01BQU1BLEs7QUFrQlM1Qiw4RUFBZjs7QUFFQSxTQUFTdUMsV0FBVCxHQUF1QjtBQUNyQixTQUFPcEMsS0FBSyxDQUFDaUQsSUFBTixDQUFXM0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQ0MsMEVBQVMsQ0FBQ0MsSUFBMUMsQ0FBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBUzRCLGFBQVQsQ0FDRUYsVUFERixFQUVFTCxpQkFGRixFQUdFaEMsS0FIRixFQVFFO0FBQ0E7QUFDQXFDLFlBQVUsQ0FBQ2UsT0FBWCxDQUFtQixVQUFDSCxJQUFELEVBQU9JLEtBQVAsRUFBaUI7QUFDbENBLFNBQUssS0FBS3JCLGlCQUFWLEdBQ0lpQixJQUFJLENBQUNuQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUJMLDBFQUFTLENBQUNNLFFBQTdCLENBREosR0FFSWlDLElBQUksQ0FBQ25DLFNBQUwsQ0FBZXdDLE1BQWYsQ0FBc0I1QywwRUFBUyxDQUFDTSxRQUFoQyxDQUZKO0FBR0QsR0FKRDtBQUtBaEIsT0FBSyxDQUFDdUMsYUFBTixDQUFvQlAsaUJBQXBCO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL1BhZ2VzQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQYWdlc0NvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgY3VycmVudFBhZ2VzOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IFtwYWdlc0Ftb3VudCwgc2V0UGFnZXNBbW91bnRdID0gdXNlU3RhdGU8QXJyYXk8bnVtYmVyPj4oW1xuICAgIC4uLkFycmF5KHByb3BzLmN1cnJlbnRQYWdlcykua2V5cygpLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzQW1vdW50KFsuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKV0pO1xuICAgIC8vIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBtb3VudGVkXCIpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVuZXQgdXBkYXRlZFwiKTtcbiAgICAvLyB9XG4gIH0sIFtwcm9wcy5jdXJyZW50UGFnZXNdKTtcbiAgLy8qIEVmZmVjdCBmb3Igc2V0dGluZyB0aGUgYm9yZGVyIHRvIHRoZSBmaXJzdCBwYWdlIHdoZW4gdGhlcmUgYXJlIG5vIG90aGVyIHBhZ2VzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKS5sZW5ndGggPD0gMSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIwXCIpPy5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkaWRNb3VudFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IEN1c3RvbVJpZ2h0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIC8vIG9uTW92ZSBtZWFucyBpZiBkcmFnZ2luZyBvciBzd2lwaW5nIGluIHByb2dyZXNzLlxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhclJpZ2h0QXJyb3d9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDdXN0b21MZWZ0QXJyb3cgPSAoeyBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSwgZGV2aWNlVHlwZSB9LFxuICAgIH0gPSByZXN0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0gY2xhc3NOYW1lPXtjb21wU3R5bGUuY2FyTGVmdEFycm93fT5cbiAgICAgICAge0Fycm93KCl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PixcbiAgICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBhIHBhZ2VcIiwgZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBjb25zdCBwYWdlc0FycmF5ID0gZ2V0QWxsUGFnZXMoKTtcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VzQXJyYXksIGluZGV4T2ZBY3RpdmVQYWdlLCBwcm9wcyk7XG4gIH07XG5cbiAgY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkJHQ29udGFpbmVyfT5cbiAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtjb21wU3R5bGUuQ2Fyb3VzZWx9XG4gICAgICAgICAgaXRlbUNsYXNzPXtjb21wU3R5bGUuSXRlbX1cbiAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9ezxDdXN0b21SaWdodEFycm93IC8+fVxuICAgICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PEN1c3RvbUxlZnRBcnJvdyAvPn1cbiAgICAgICAgICBzaG93RG90c1xuICAgICAgICAgIC8vIHNzclxuICAgICAgICA+ICovfVxuICAgICAgICA8U2xpZGVyIHsuLi5zbGlkZXJTZXR0aW5nc30+XG4gICAgICAgICAge3BhZ2VzQW1vdW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgICBpZD17U3RyaW5nKHBhZ2UpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVQYWdlQ2xpY2soZSwgcGFnZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21wU3R5bGUuUGFnZX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIHsvKiA8L0Nhcm91c2VsPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE1XCJcbiAgICBoZWlnaHQ9XCIyNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNSAyNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMiAyNEwxMyAxM0wyIDJcIlxuICAgICAgc3Ryb2tlPVwiIzJGNDg1OFwiXG4gICAgICBzdHJva2Utd2lkdGg9XCIzXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250cm9sbGVyO1xuXG5mdW5jdGlvbiBnZXRBbGxQYWdlcygpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb21wU3R5bGUuUGFnZSkpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQYWdlKFxuICBwYWdlc0FycmF5OiBFbGVtZW50W10sXG4gIGluZGV4T2ZBY3RpdmVQYWdlOiBudW1iZXIsXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICAgIHNldEFjdGl2ZVBhZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGN1cnJlbnRQYWdlczogbnVtYmVyO1xuICB9XG4pIHtcbiAgLy8gY29uc29sZS5sb2coXCJzZXR0aW5nIHRoZSBncmVlbiBib3JkZXJcIik7XG4gIHBhZ2VzQXJyYXkuZm9yRWFjaCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICBpbmRleCA9PT0gaW5kZXhPZkFjdGl2ZVBhZ2VcbiAgICAgID8gcGFnZS5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZClcbiAgICAgIDogcGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gIH0pO1xuICBwcm9wcy5zZXRBY3RpdmVQYWdlKGluZGV4T2ZBY3RpdmVQYWdlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})