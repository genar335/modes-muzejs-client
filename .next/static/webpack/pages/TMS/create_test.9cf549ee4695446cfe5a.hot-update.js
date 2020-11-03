webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/PagesController.tsx":
/*!****************************************!*\
  !*** ./components/PagesController.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PagesController.module.scss */ \"./components/styles/PagesController.module.scss\");\n/* harmony import */ var _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/PagesController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\n\n\nvar PagesController = function PagesController(props) {\n  _s();\n\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys())),\n      pagesAmount = _useState[0],\n      setPagesAmount = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPagesAmount(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array(props.currentPages).keys()));\n\n    if (didMountRef.current) {\n      console.log(\"component mounted\");\n    } else {\n      console.log(\"componenet updated\");\n    }\n  }, [props.currentPages]);\n  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var CustomRightArrow = function CustomRightArrow(_ref) {\n    var _onClick = _ref.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState = rest.carouselState,\n        currentSlide = _rest$carouselState.currentSlide,\n        deviceType = _rest$carouselState.deviceType; // onMove means if dragging or swiping in progress.\n\n    return __jsx(\"button\", {\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.carRightArrow,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var CustomLeftArrow = function CustomLeftArrow(_ref2) {\n    var _onClick2 = _ref2.onClick,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, [\"onClick\"]);\n\n    var onMove = rest.onMove,\n        _rest$carouselState2 = rest.carouselState,\n        currentSlide = _rest$carouselState2.currentSlide,\n        deviceType = _rest$carouselState2.deviceType;\n    return __jsx(\"button\", {\n      onClick: function onClick() {\n        return _onClick2();\n      },\n      className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.carLeftArrow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }\n    }, Arrow());\n  };\n\n  var handlePageClick = function handlePageClick(e, indexOfActivePage) {\n    console.log(\"clicked on a page\", e.currentTarget.id);\n    var pagesArray = Array.from(document.getElementsByClassName(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Page));\n    setActivePage(pagesArray, indexOfActivePage, props);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.BGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    containerClass: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Carousel,\n    itemClass: _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Item,\n    responsive: responsive,\n    customRightArrow: __jsx(CustomRightArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 29\n      }\n    }),\n    customLeftArrow: __jsx(CustomLeftArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 28\n      }\n    }),\n    showDots: true,\n    ssr: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, pagesAmount.map(function (page) {\n    return __jsx(\"div\", {\n      key: page,\n      id: String(page),\n      onClick: function onClick(e) {\n        return handlePageClick(e, page);\n      },\n      className: \"compStyle.Page \".concat(index === props.activePage ? _styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Selected : undefined),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }\n    }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 19\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 19\n      }\n    }, page + 1)));\n  }))));\n};\n\n_s(PagesController, \"WwFUyZlYzLlJZmxH77Z6d0HluTY=\");\n\n_c = PagesController;\n\nvar Arrow = function Arrow() {\n  return __jsx(\"svg\", {\n    width: \"15\",\n    height: \"26\",\n    viewBox: \"0 0 15 26\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 3\n    }\n  }, __jsx(\"path\", {\n    d: \"M2 24L13 13L2 2\",\n    stroke: \"#2F4858\",\n    \"stroke-width\": \"3\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Arrow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesController);\n\nfunction setActivePage(pagesArray, indexOfActivePage, props) {\n  pagesArray.forEach(function (page, index) {\n    index === indexOfActivePage ? page.classList.add(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Selected) : page.classList.remove(_styles_PagesController_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Selected);\n  });\n  props.setActivePage(indexOfActivePage);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PagesController\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlc0NvbnRyb2xsZXIudHN4PzM0NDUiXSwibmFtZXMiOlsiUGFnZXNDb250cm9sbGVyIiwicHJvcHMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwidXNlU3RhdGUiLCJBcnJheSIsImN1cnJlbnRQYWdlcyIsImtleXMiLCJwYWdlc0Ftb3VudCIsInNldFBhZ2VzQW1vdW50IiwidXNlRWZmZWN0IiwiZGlkTW91bnRSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVzZVJlZiIsIkN1c3RvbVJpZ2h0QXJyb3ciLCJvbkNsaWNrIiwicmVzdCIsIm9uTW92ZSIsImNhcm91c2VsU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJkZXZpY2VUeXBlIiwiY29tcFN0eWxlIiwiY2FyUmlnaHRBcnJvdyIsIkFycm93IiwiQ3VzdG9tTGVmdEFycm93IiwiY2FyTGVmdEFycm93IiwiaGFuZGxlUGFnZUNsaWNrIiwiZSIsImluZGV4T2ZBY3RpdmVQYWdlIiwiY3VycmVudFRhcmdldCIsImlkIiwicGFnZXNBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJQYWdlIiwic2V0QWN0aXZlUGFnZSIsIldyYXBwZXIiLCJCR0NvbnRhaW5lciIsIkNhcm91c2VsIiwiSXRlbSIsIm1hcCIsInBhZ2UiLCJTdHJpbmciLCJpbmRleCIsImFjdGl2ZVBhZ2UiLCJTZWxlY3RlZCIsInVuZGVmaW5lZCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFJbEI7QUFBQTs7QUFD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ZixDQUFzQjlCLDBFQUFTLENBQUN5QixRQUFoQyxDQUZKO0FBR0QsR0FKRDtBQUtBdEQsT0FBSyxDQUFDNEMsYUFBTixDQUFvQlIsaUJBQXBCO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgRk1Mb2dvIGZyb20gXCIuL0ZNbG9nb1wiO1xuLy8gaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IGNvbXBTdHlsZSBmcm9tIFwiLi9zdHlsZXMvUGFnZXNDb250cm9sbGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFBhZ2VzQ29udHJvbGxlciA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIHNldEFjdGl2ZVBhZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgIGl0ZW1zOiA1LFxuICAgIH0sXG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDMsXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDIsXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDEsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBbcGFnZXNBbW91bnQsIHNldFBhZ2VzQW1vdW50XSA9IHVzZVN0YXRlPEFycmF5PG51bWJlcj4+KFtcbiAgICAuLi5BcnJheShwcm9wcy5jdXJyZW50UGFnZXMpLmtleXMoKSxcbiAgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlc0Ftb3VudChbLi4uQXJyYXkocHJvcHMuY3VycmVudFBhZ2VzKS5rZXlzKCldKTtcbiAgICBpZiAoZGlkTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgbW91bnRlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbmV0IHVwZGF0ZWRcIik7XG4gICAgfVxuICB9LCBbcHJvcHMuY3VycmVudFBhZ2VzXSk7XG5cbiAgY29uc3QgZGlkTW91bnRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBDdXN0b21SaWdodEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICAvLyBvbk1vdmUgbWVhbnMgaWYgZHJhZ2dpbmcgb3Igc3dpcGluZyBpbiBwcm9ncmVzcy5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBTdHlsZS5jYXJSaWdodEFycm93fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuICAgICAgICB7QXJyb3coKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ3VzdG9tTGVmdEFycm93ID0gKHsgb25DbGljaywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcbiAgICB9ID0gcmVzdDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17Y29tcFN0eWxlLmNhckxlZnRBcnJvd30+XG4gICAgICAgIHtBcnJvdygpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAoXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4sXG4gICAgaW5kZXhPZkFjdGl2ZVBhZ2U6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgb24gYSBwYWdlXCIsIGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgY29uc3QgcGFnZXNBcnJheSA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbXBTdHlsZS5QYWdlKVxuICAgICk7XG4gICAgc2V0QWN0aXZlUGFnZShwYWdlc0FycmF5LCBpbmRleE9mQWN0aXZlUGFnZSwgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZS5XcmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuQkdDb250YWluZXJ9PlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBjb250YWluZXJDbGFzcz17Y29tcFN0eWxlLkNhcm91c2VsfVxuICAgICAgICAgIGl0ZW1DbGFzcz17Y29tcFN0eWxlLkl0ZW19XG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICBjdXN0b21SaWdodEFycm93PXs8Q3VzdG9tUmlnaHRBcnJvdyAvPn1cbiAgICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxDdXN0b21MZWZ0QXJyb3cgLz59XG4gICAgICAgICAgc2hvd0RvdHNcbiAgICAgICAgICBzc3JcbiAgICAgICAgPlxuICAgICAgICAgIHtwYWdlc0Ftb3VudC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgaWQ9e1N0cmluZyhwYWdlKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbXBTdHlsZS5QYWdlICR7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gcHJvcHMuYWN0aXZlUGFnZSA/IGNvbXBTdHlsZS5TZWxlY3RlZCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGTUxvZ28gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQXJyb3cgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE1XCJcbiAgICBoZWlnaHQ9XCIyNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNSAyNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMiAyNEwxMyAxM0wyIDJcIlxuICAgICAgc3Ryb2tlPVwiIzJGNDg1OFwiXG4gICAgICBzdHJva2Utd2lkdGg9XCIzXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250cm9sbGVyO1xuZnVuY3Rpb24gc2V0QWN0aXZlUGFnZShcbiAgcGFnZXNBcnJheTogRWxlbWVudFtdLFxuICBpbmRleE9mQWN0aXZlUGFnZTogbnVtYmVyLFxuICBwcm9wczoge1xuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICBzZXRBY3RpdmVQYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBjdXJyZW50UGFnZXM6IG51bWJlcjtcbiAgfVxuKSB7XG4gIHBhZ2VzQXJyYXkuZm9yRWFjaCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICBpbmRleCA9PT0gaW5kZXhPZkFjdGl2ZVBhZ2VcbiAgICAgID8gcGFnZS5jbGFzc0xpc3QuYWRkKGNvbXBTdHlsZS5TZWxlY3RlZClcbiAgICAgIDogcGFnZS5jbGFzc0xpc3QucmVtb3ZlKGNvbXBTdHlsZS5TZWxlY3RlZCk7XG4gIH0pO1xuICBwcm9wcy5zZXRBY3RpdmVQYWdlKGluZGV4T2ZBY3RpdmVQYWdlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PagesController.tsx\n");

/***/ })

})