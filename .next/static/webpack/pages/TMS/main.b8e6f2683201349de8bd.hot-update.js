webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/Gallery.tsx":
/*!********************************!*\
  !*** ./components/Gallery.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestCard */ \"./components/TestCard.tsx\");\n/* harmony import */ var _GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GAssets/search_big.png */ \"./GAssets/search_big.png\");\n/* harmony import */ var _GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Gallery.module.scss */ \"./components/styles/Gallery.module.scss\");\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/Gallery.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Gallery = function Gallery(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      recievedTests = _useState[0],\n      setRecievedTests = _useState[1]; // const getTests = async () => {\n  //   const fetchedTests: ITest[] = await props.getInactiveTests(false);\n  //   setRecievedTests(fetchedTests);\n  // };\n\n\n  return __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Gallery,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Test gallery\"), __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SearchAndFilter,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SearchContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"search\",\n    name: \"testSearch\",\n    id: \"testSearch\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"Looking glass icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }))), __jsx(\"select\", {\n    name: \"testTypeSelector\",\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FilterContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Type1\"), __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"Type2\"), __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Type3\"), __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Type4\"), __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"Type5\"))), __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tCardContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, props.testsToRender ? props.testsToRender.map(function (test, iterator) {\n    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: iterator,\n      colour: \"brown\",\n      iterator: iterator,\n      _id: test._id || \"NA\",\n      active: false,\n      nameInRu: test.ru.name // parentComponentTestFetcher={getTests}\n      // mainTestFetcher={props.updateTheTest}\n      ,\n      updateTests: props.updateTheTests,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    });\n  }) : null));\n};\n\n_s(Gallery, \"/iSet/ib18xS7DQpcrC9SLiXFtk=\");\n\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LnRzeD84NDg3Il0sIm5hbWVzIjpbIkdhbGxlcnkiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVjaWV2ZWRUZXN0cyIsInNldFJlY2lldmVkVGVzdHMiLCJzdHlsZXMiLCJTZWFyY2hBbmRGaWx0ZXIiLCJTZWFyY2hDb250YWluZXIiLCJzZWFyY2hJY29uIiwiRmlsdGVyQ29udGFpbmVyIiwidENhcmRDb250YWluZXIiLCJ0ZXN0c1RvUmVuZGVyIiwibWFwIiwidGVzdCIsIml0ZXJhdG9yIiwiX2lkIiwicnUiLCJuYW1lIiwidXBkYXRlVGhlVGVzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBSVY7QUFBQTs7QUFBQSxrQkFDc0NDLHNEQUFRLEVBRDlDO0FBQUEsTUFDR0MsYUFESDtBQUFBLE1BQ2tCQyxnQkFEbEIsaUJBRUo7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGtFQUFNLENBQUNMLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVLLGtFQUFNLENBQUNDLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLFlBQTFCO0FBQXVDLE1BQUUsRUFBQyxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLDhEQUFWO0FBQXNCLE9BQUcsRUFBQyxvQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FGRixFQVNFO0FBQVEsUUFBSSxFQUFDLGtCQUFiO0FBQWdDLGFBQVMsRUFBRUgsa0VBQU0sQ0FBQ0ksZUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBUSxTQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFHRTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0U7QUFBUSxTQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsQ0FURixDQUZGLEVBb0JFO0FBQUssYUFBUyxFQUFFSixrRUFBTSxDQUFDSyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dULEtBQUssQ0FBQ1UsYUFBTixHQUNHVixLQUFLLENBQUNVLGFBQU4sQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQsRUFBY0MsUUFBZDtBQUFBLFdBQ3RCLE1BQUMsaURBQUQ7QUFDRSxTQUFHLEVBQUVBLFFBRFA7QUFFRSxZQUFNLEVBQUMsT0FGVDtBQUdFLGNBQVEsRUFBRUEsUUFIWjtBQUlFLFNBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUFMLElBQVksSUFKbkI7QUFLRSxZQUFNLEVBQUUsS0FMVjtBQU1FLGNBQVEsRUFBRUYsSUFBSSxDQUFDRyxFQUFMLENBQVFDLElBTnBCLENBT0U7QUFDQTtBQVJGO0FBU0UsaUJBQVcsRUFBRWhCLEtBQUssQ0FBQ2lCLGNBVHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEc0I7QUFBQSxHQUF4QixDQURILEdBY0csSUFmTixDQXBCRixDQURGO0FBd0NELENBbkREOztHQUFNbEIsTzs7S0FBQUEsTztBQXFEU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXN0Q2FyZCBmcm9tIFwiLi9UZXN0Q2FyZFwiO1xuaW1wb3J0IHNlYXJjaEljb24gZnJvbSBcIi4uL0dBc3NldHMvc2VhcmNoX2JpZy5wbmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0dhbGxlcnkubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHdoaXRlIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuXG5jb25zdCBHYWxsZXJ5ID0gKHByb3BzOiB7XG4gIC8vIGdldEluYWN0aXZlVGVzdHM6IChhY3RpdmU6IGJvb2xlYW4pID0+IFByb21pc2U8YW55PjtcbiAgdGVzdHNUb1JlbmRlcjogSVRlc3RbXTtcbiAgdXBkYXRlVGhlVGVzdHM6ICh0ZXN0SUQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IFtyZWNpZXZlZFRlc3RzLCBzZXRSZWNpZXZlZFRlc3RzXSA9IHVzZVN0YXRlPElUZXN0W10+KCk7XG4gIC8vIGNvbnN0IGdldFRlc3RzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZldGNoZWRUZXN0czogSVRlc3RbXSA9IGF3YWl0IHByb3BzLmdldEluYWN0aXZlVGVzdHMoZmFsc2UpO1xuICAvLyAgIHNldFJlY2lldmVkVGVzdHMoZmV0Y2hlZFRlc3RzKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2FsbGVyeX0+XG4gICAgICA8aDE+VGVzdCBnYWxsZXJ5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoQW5kRmlsdGVyfT5cbiAgICAgICAgey8qIC8vKiBTZWFyY2ggQmFyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaENvbnRhaW5lcn0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwidGVzdFNlYXJjaFwiIGlkPVwidGVzdFNlYXJjaFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzZWFyY2hJY29ufSBhbHQ9XCJMb29raW5nIGdsYXNzIGljb25cIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC8vKiBUZXN0IHR5cGUgZmlsdGVyICovfVxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0ZXN0VHlwZVNlbGVjdG9yXCIgY2xhc3NOYW1lPXtzdHlsZXMuRmlsdGVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTU8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiAvLyogVGVzdCBHYWxsZXJ5ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50Q2FyZENvbnRhaW5lcn0+XG4gICAgICAgIHtwcm9wcy50ZXN0c1RvUmVuZGVyXG4gICAgICAgICAgPyBwcm9wcy50ZXN0c1RvUmVuZGVyLm1hcCgodGVzdDogSVRlc3QsIGl0ZXJhdG9yOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPFRlc3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpdGVyYXRvcn1cbiAgICAgICAgICAgICAgICBjb2xvdXI9XCJicm93blwiXG4gICAgICAgICAgICAgICAgaXRlcmF0b3I9e2l0ZXJhdG9yfVxuICAgICAgICAgICAgICAgIF9pZD17dGVzdC5faWQgfHwgXCJOQVwifVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgbmFtZUluUnU9e3Rlc3QucnUubmFtZX1cbiAgICAgICAgICAgICAgICAvLyBwYXJlbnRDb21wb25lbnRUZXN0RmV0Y2hlcj17Z2V0VGVzdHN9XG4gICAgICAgICAgICAgICAgLy8gbWFpblRlc3RGZXRjaGVyPXtwcm9wcy51cGRhdGVUaGVUZXN0fVxuICAgICAgICAgICAgICAgIHVwZGF0ZVRlc3RzPXtwcm9wcy51cGRhdGVUaGVUZXN0c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Gallery.tsx\n");

/***/ })

})