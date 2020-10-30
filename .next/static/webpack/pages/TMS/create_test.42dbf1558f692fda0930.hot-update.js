webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestPreview.tsx":
/*!************************************!*\
  !*** ./components/TestPreview.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FMlogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FMlogo */ \"./components/FMlogo.tsx\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestPreview.module.scss */ \"./components/styles/TestPreview.module.scss\");\n/* harmony import */ var _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestPreview.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestPreview = function TestPreview(props) {\n  function handleTextAreaQuestionChange(event) {\n    console.log(event.currentTarget.value);\n    console.log(props.currentTestState[props.currentLanguage].pages[props.activePage].QnAPairs[event.currentTarget.id].question);\n    var tmpArray = props.currentTestState[props.currentLanguage].pages;\n    tmpArray = tmpArray.map(function (page, index) {});\n    console.log(\"TMP\", tmpArray);\n    props.saveChanges(_objectSpread(_objectSpread({}, props.currentTestState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props.currentLanguage, _objectSpread({}, props.currentTestState[props.currentLanguage]))));\n  }\n\n  function questionRenderController(currentItem) {\n    switch (props.currentTestState.type) {\n      case \"TT\":\n        return __jsx(\"textarea\", {\n          id: String(currentItem),\n          onChange: handleTextAreaQuestionChange,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 11\n          }\n        }, \" \");\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  var pageBody = function pageBody() {\n    return __jsx(\"div\", {\n      className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.pageBody,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }\n    }, props.currentTestState[props.currentLanguage || \"ru\"].pages[props.activePage].QnAPairs.map(function (qnaPair, index) {\n      return __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.qnaPair,\n        id: String(index),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Question,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }\n      }, questionRenderController(index)), __jsx(\"div\", {\n        className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Answer,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }\n      }, \"Answer: \", qnaPair.answer));\n    }));\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TestPreview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, \"Page: \", props.activePage + 1), __jsx(\"div\", {\n    className: _styles_TestPreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestBGContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_FMlogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), pageBody()));\n};\n\n_c = TestPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0UHJldmlldy50c3g/MzgxMCJdLCJuYW1lcyI6WyJUZXN0UHJldmlldyIsInByb3BzIiwiaGFuZGxlVGV4dEFyZWFRdWVzdGlvbkNoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUZXN0U3RhdGUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJwYWdlcyIsImFjdGl2ZVBhZ2UiLCJRbkFQYWlycyIsImlkIiwicXVlc3Rpb24iLCJ0bXBBcnJheSIsIm1hcCIsInBhZ2UiLCJpbmRleCIsInNhdmVDaGFuZ2VzIiwicXVlc3Rpb25SZW5kZXJDb250cm9sbGVyIiwiY3VycmVudEl0ZW0iLCJ0eXBlIiwiU3RyaW5nIiwicGFnZUJvZHkiLCJjb21wU3R5bGVzIiwicW5hUGFpciIsIlF1ZXN0aW9uIiwiQW5zd2VyIiwiYW5zd2VyIiwic3R5bGVzIiwiVGVzdEJHQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFLZDtBQUNKLFdBQVNDLDRCQUFULENBQ0VDLEtBREYsRUFFRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxLQUFoQztBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FDRUosS0FBSyxDQUFDTyxnQkFBTixDQUF1QlAsS0FBSyxDQUFDUSxlQUE3QixFQUErQ0MsS0FBL0MsQ0FBcURULEtBQUssQ0FBQ1UsVUFBM0QsRUFDR0MsUUFESCxDQUNZVCxLQUFLLENBQUNHLGFBQU4sQ0FBb0JPLEVBRGhDLEVBQ29DQyxRQUZ0QztBQUlBLFFBQUlDLFFBQVEsR0FBR2QsS0FBSyxDQUFDTyxnQkFBTixDQUF1QlAsS0FBSyxDQUFDUSxlQUE3QixFQUErQ0MsS0FBOUQ7QUFFQUssWUFBUSxHQUFHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUIsQ0FFeEMsQ0FGVSxDQUFYO0FBSUFkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJVLFFBQW5CO0FBQ0FkLFNBQUssQ0FBQ2tCLFdBQU4saUNBQ0tsQixLQUFLLENBQUNPLGdCQURYLHFHQUVHUCxLQUFLLENBQUNRLGVBRlQsb0JBR09SLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUJQLEtBQUssQ0FBQ1EsZUFBN0IsQ0FIUDtBQU1EOztBQUVELFdBQVNXLHdCQUFULENBQWtDQyxXQUFsQyxFQUF1RDtBQUNyRCxZQUFRcEIsS0FBSyxDQUFDTyxnQkFBTixDQUF1QmMsSUFBL0I7QUFDRSxXQUFLLElBQUw7QUFDRSxlQUNFO0FBQ0UsWUFBRSxFQUFFQyxNQUFNLENBQUNGLFdBQUQsQ0FEWjtBQUVFLGtCQUFRLEVBQUVuQiw0QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUcsR0FKSCxDQURGO0FBUUE7O0FBRUY7QUFDRTtBQWJKO0FBZUQ7O0FBQ0QsTUFBTXNCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsV0FDRTtBQUFLLGVBQVMsRUFBRUMsc0VBQVUsQ0FBQ0QsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHdkIsS0FBSyxDQUFDTyxnQkFBTixDQUF1QlAsS0FBSyxDQUFDUSxlQUFOLElBQXlCLElBQWhELEVBQXNEQyxLQUF0RCxDQUNDVCxLQUFLLENBQUNVLFVBRFAsRUFFQ0MsUUFGRCxDQUVVSSxHQUZWLENBRWMsVUFBQ1UsT0FBRCxFQUFnQlIsS0FBaEI7QUFBQSxhQUNiO0FBQUssaUJBQVMsRUFBRU8sc0VBQVUsQ0FBQ0MsT0FBM0I7QUFBb0MsVUFBRSxFQUFFSCxNQUFNLENBQUNMLEtBQUQsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRU8sc0VBQVUsQ0FBQ0UsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHUCx3QkFBd0IsQ0FBQ0YsS0FBRCxDQUQzQixDQURGLEVBSUU7QUFBSyxpQkFBUyxFQUFFTyxzRUFBVSxDQUFDRyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE0Q0YsT0FBTyxDQUFDRyxNQUFwRCxDQUpGLENBRGE7QUFBQSxLQUZkLENBREgsQ0FERjtBQWNELEdBZkQ7O0FBaUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDRFQUFNLENBQUM5QixXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFXQyxLQUFLLENBQUNVLFVBQU4sR0FBbUIsQ0FBOUIsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFYyxzRUFBVSxDQUFDTSxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR1AsUUFBUSxFQUZYLENBRkYsQ0FERjtBQVNELENBeEVEOztLQUFNeEIsVztBQTBFU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIElRbkEsXG4gIElRbkFQYWlycyxcbiAgSVRlc3QsXG4gIFRMYW5nT3B0aW9uLFxuICBUVGVzdFR5cGVzLFxufSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEZNTG9nbyBmcm9tIFwiLi9GTWxvZ29cIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0UHJldmlldy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBUZXN0UHJldmlldyA9IChwcm9wczoge1xuICBhY3RpdmVQYWdlOiBudW1iZXI7XG4gIGN1cnJlbnRMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSB8IHVuZGVmaW5lZDtcbiAgY3VycmVudFRlc3RTdGF0ZTogSVRlc3Q7XG4gIHNhdmVDaGFuZ2VzOiAodGVzdDogSVRlc3QpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGZ1bmN0aW9uIGhhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2UoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgcHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXS5wYWdlc1twcm9wcy5hY3RpdmVQYWdlXVxuICAgICAgICAuUW5BUGFpcnNbZXZlbnQuY3VycmVudFRhcmdldC5pZF0ucXVlc3Rpb25cbiAgICApO1xuICAgIGxldCB0bXBBcnJheSA9IHByb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIV0ucGFnZXM7XG5cbiAgICB0bXBBcnJheSA9IHRtcEFycmF5Lm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgIFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJUTVBcIiwgdG1wQXJyYXkpO1xuICAgIHByb3BzLnNhdmVDaGFuZ2VzKHtcbiAgICAgIC4uLnByb3BzLmN1cnJlbnRUZXN0U3RhdGUsXG4gICAgICBbcHJvcHMuY3VycmVudExhbmd1YWdlIV06IHtcbiAgICAgICAgLi4ucHJvcHMuY3VycmVudFRlc3RTdGF0ZVtwcm9wcy5jdXJyZW50TGFuZ3VhZ2UhXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWVzdGlvblJlbmRlckNvbnRyb2xsZXIoY3VycmVudEl0ZW06IG51bWJlcikge1xuICAgIHN3aXRjaCAocHJvcHMuY3VycmVudFRlc3RTdGF0ZS50eXBlKSB7XG4gICAgICBjYXNlIFwiVFRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPXtTdHJpbmcoY3VycmVudEl0ZW0pfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRleHRBcmVhUXVlc3Rpb25DaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFnZUJvZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnBhZ2VCb2R5fT5cbiAgICAgICAge3Byb3BzLmN1cnJlbnRUZXN0U3RhdGVbcHJvcHMuY3VycmVudExhbmd1YWdlIHx8IFwicnVcIl0ucGFnZXNbXG4gICAgICAgICAgcHJvcHMuYWN0aXZlUGFnZVxuICAgICAgICBdLlFuQVBhaXJzLm1hcCgocW5hUGFpcjogSVFuQSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLnFuYVBhaXJ9IGlkPXtTdHJpbmcoaW5kZXgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlF1ZXN0aW9ufT5cbiAgICAgICAgICAgICAge3F1ZXN0aW9uUmVuZGVyQ29udHJvbGxlcihpbmRleCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkFuc3dlcn0+QW5zd2VyOiB7cW5hUGFpci5hbnN3ZXJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdFByZXZpZXd9PlxuICAgICAgPGgzPlBhZ2U6IHtwcm9wcy5hY3RpdmVQYWdlICsgMX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuVGVzdEJHQ29udGFpbmVyfT5cbiAgICAgICAgPEZNTG9nbyAvPlxuICAgICAgICB7cGFnZUJvZHkoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestPreview.tsx\n");

/***/ })

})