webpackHotUpdate_N_E("pages/client/test",{

/***/ "./pages/client/test.tsx":
/*!*******************************!*\
  !*** ./pages/client/test.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! interactjs */ \"./node_modules/interactjs/dist/interact.min.js\");\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/test.module.scss */ \"./pages/styles/test.module.scss\");\n/* harmony import */ var _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_OptionTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/OptionTop */ \"./components/OptionTop.tsx\");\n/* harmony import */ var _components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/OptionBottom */ \"./components/OptionBottom.tsx\");\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/pages/client/test.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Test(props) {\n  _s();\n\n  //testing out queries\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      testid = _router$query.testid,\n      lang = _router$query.lang; //API\n\n  /**\n   * if router.query.lang === {lang}\n   * \n   * wrap different returns in conditionals to render the tests within one page\n   * TODO components: \n   * \n   */\n\n  var dropZone = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  if (dropZone.current && document.getElementById(\"answer\")) {\n    var _document$getElementB, _document$getElementB2;\n\n    console.log((_document$getElementB = document.getElementById(\"answer\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.className);\n    interactjs__WEBPACK_IMPORTED_MODULE_2___default()(dropZone.current).dropzone({\n      overlap: \"center\",\n      accept: (_document$getElementB2 = document.getElementById(\"answer\")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.className,\n      ondrop: function ondrop(event) {\n        alert(event.relatedTarget.id + ' was dropped into ' + event.target.id);\n      }\n    });\n  }\n\n  return __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(_components_OptionTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropzoneDiv,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }), __jsx(_components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, __jsx(_components_OptionTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropzoneDiv,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  }), __jsx(_components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.qnaContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(_components_OptionTop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropzoneDiv,\n    ref: dropZone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }), __jsx(_components_OptionBottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(Test, \"tZlr4JXhLpbgHYj3KlKJXJA/QoY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\n\nvar _c;\n\n$RefreshReg$(_c, \"Test\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L3Rlc3QudHN4P2M1MDEiXSwibmFtZXMiOlsiVGVzdCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ0ZXN0aWQiLCJsYW5nIiwiZHJvcFpvbmUiLCJ1c2VSZWYiLCJjdXJyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJpbnRlcmFjdCIsImRyb3B6b25lIiwib3ZlcmxhcCIsImFjY2VwdCIsIm9uZHJvcCIsImV2ZW50IiwiYWxlcnQiLCJyZWxhdGVkVGFyZ2V0IiwiaWQiLCJ0YXJnZXQiLCJzdHlsZXMiLCJwYWdlQ29udGFpbmVyIiwiTU1sb2dvIiwidGVzdENvbnRhaW5lciIsInFuYUNvbnRhaW5lciIsImRyb3B6b25lRGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQTBCO0FBQUE7O0FBRXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhzQixzQkFJSUQsTUFBTSxDQUFDRSxLQUpYO0FBQUEsTUFJZEMsTUFKYyxpQkFJZEEsTUFKYztBQUFBLE1BSUxDLElBSkssaUJBSUxBLElBSkssRUFLdEI7O0FBRUE7Ozs7Ozs7O0FBUUEsTUFBTUMsUUFBUSxHQUFJQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBRUEsTUFBR0QsUUFBUSxDQUFDRSxPQUFULElBQW9CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBdkIsRUFBMEQ7QUFBQTs7QUFDdERDLFdBQU8sQ0FBQ0MsR0FBUiwwQkFBWUgsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQVosMERBQVksc0JBQW1DRyxTQUEvQztBQUNBQyxxREFBUSxDQUFDUixRQUFRLENBQUNFLE9BQVYsQ0FBUixDQUNLTyxRQURMLENBQ2M7QUFDTkMsYUFBTyxFQUFFLFFBREg7QUFFTkMsWUFBTSw0QkFBRVIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQUYsMkRBQUUsdUJBQW1DRyxTQUZyQztBQUdOSyxZQUFNLEVBQUUsZ0JBQVVDLEtBQVYsRUFBaUI7QUFDckJDLGFBQUssQ0FBQ0QsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxFQUFwQixHQUNBLG9CQURBLEdBRUFILEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxFQUZkLENBQUw7QUFHSDtBQVBLLEtBRGQ7QUFVSDs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFFRSwrREFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBd0YsT0FBRyxFQUFDLE1BQTVGO0FBQW1HLE1BQUUsRUFBRUQsK0RBQU0sQ0FBQ0UsTUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBTUk7QUFBSyxhQUFTLEVBQUVGLCtEQUFNLENBQUNHLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ0ksWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBTkosRUFXSTtBQUFLLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ0ksWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFdBQXZCO0FBQW9DLE9BQUcsRUFBRXZCLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBWEosQ0FOSixDQURKO0FBMEJIOztHQXpEUVAsSTtVQUdVRyxxRDs7O0tBSFZILEk7QUEyRE1BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2xpZW50L3Rlc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGludGVyYWN0IGZyb20gJ2ludGVyYWN0anMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBPcHRpb25Ub3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvT3B0aW9uVG9wXCI7XG5pbXBvcnQgT3B0aW9uQm90dG9tIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL09wdGlvbkJvdHRvbVwiO1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSBcIkBpbnRlcmFjdGpzL3R5cGVzXCI7XG5pbXBvcnQgUUFDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1FBQ2FyZFwiO1xuXG5mdW5jdGlvbiBUZXN0KHByb3BzOiBhbnkpIHtcblxuICAgIC8vdGVzdGluZyBvdXQgcXVlcmllc1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyB0ZXN0aWQgLCBsYW5nIH0gPSByb3V0ZXIucXVlcnlcbiAgICAvL0FQSVxuXG4gICAgLyoqXG4gICAgICogaWYgcm91dGVyLnF1ZXJ5LmxhbmcgPT09IHtsYW5nfVxuICAgICAqIFxuICAgICAqIHdyYXAgZGlmZmVyZW50IHJldHVybnMgaW4gY29uZGl0aW9uYWxzIHRvIHJlbmRlciB0aGUgdGVzdHMgd2l0aGluIG9uZSBwYWdlXG4gICAgICogVE9ETyBjb21wb25lbnRzOiBcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIGNvbnN0IGRyb3Bab25lID0gIHVzZVJlZihudWxsKVxuXG4gICAgaWYoZHJvcFpvbmUuY3VycmVudCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlclwiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlclwiKT8uY2xhc3NOYW1lKVxuICAgICAgICBpbnRlcmFjdChkcm9wWm9uZS5jdXJyZW50IGFzIHVua25vd24gYXMgVGFyZ2V0KVxuICAgICAgICAgICAgLmRyb3B6b25lKHtcbiAgICAgICAgICAgICAgICBvdmVybGFwOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXJcIik/LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBvbmRyb3A6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChldmVudC5yZWxhdGVkVGFyZ2V0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICArICcgd2FzIGRyb3BwZWQgaW50byAnXG4gICAgICAgICAgICAgICAgICAgICAgICArIGV2ZW50LnRhcmdldC5pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZmFzaGlvbm11c2V1bXJpZ2EubHYvYml0cml4L3RlbXBsYXRlcy9tYWluX3RlbXBsYXRlL2ltZy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiBpZD17c3R5bGVzLk1NbG9nb30+PC9pbWc+XG4gICAgICAgICAgICB7Lyo8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnRlc3QgaWQ6IHt0ZXN0aWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnTEk3N0IGxhbmd1YWdlOiB7bGFuZ308L3A+XG4gICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVzdENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xbmFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uVG9wIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmVEaXZ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQm90dG9tIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xbmFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uVG9wIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmVEaXZ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQm90dG9tIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xbmFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uVG9wIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcHpvbmVEaXZ9IHJlZj17ZHJvcFpvbmV9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQm90dG9tIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/client/test.tsx\n");

/***/ })

})