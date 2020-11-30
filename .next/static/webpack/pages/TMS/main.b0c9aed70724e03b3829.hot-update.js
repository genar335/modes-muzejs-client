webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/TestCard.tsx":
/*!*********************************!*\
  !*** ./components/TestCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GAssets/create_icon_big.png */ \"./GAssets/create_icon_big.png\");\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestCard.module.scss */ \"./components/styles/TestCard.module.scss\");\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar TestCard = function TestCard(props) {\n  _s();\n\n  var CardStyle = {\n    background: \"rgb(\".concat(props.colour, \")\")\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.active),\n      isActive = _useState[0],\n      setIsActive = _useState[1];\n\n  var changeTestState = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(testID, isActive) {\n      var changedTest, responseFromServer;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"devURL\"], \"tests/toggleTestActiveState\"), {\n                testID: testID,\n                isActive: isActive\n              });\n\n            case 3:\n              responseFromServer = _context.sent;\n              changedTest = responseFromServer.data;\n              console.log(changedTest);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function changeTestState(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // console.log(props);\n\n\n  var handleActiveChange = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return changeTestState(props._id, !isActive);\n\n            case 2:\n              setIsActive(!isActive);\n              console.log(\"Calling all tests\"); // props.mainTestFetcher();\n              // props.parentComponentTestFetcher();\n\n              setTimeout(function () {\n                return props.updateTests(props._id);\n              }, 2000);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleActiveChange() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    key: props._id,\n    id: props._id,\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestCard,\n    style: CardStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Edit icon\",\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LookingGlass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    onClick: handleActiveChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"Test title in ru: \", props.nameInRu), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, \"Test id: \", props._id), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Main question of test\"));\n};\n\n_s(TestCard, \"9xbITl6yubb84TaGyXQDGsWHuTA=\");\n\n_c = TestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3g/NTc0ZiJdLCJuYW1lcyI6WyJUZXN0Q2FyZCIsInByb3BzIiwiQ2FyZFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG91ciIsInVzZVN0YXRlIiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZVRlc3RTdGF0ZSIsInRlc3RJRCIsIkF4aW9zIiwicG9zdCIsImRldlVSTCIsInJlc3BvbnNlRnJvbVNlcnZlciIsImNoYW5nZWRUZXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUFjdGl2ZUNoYW5nZSIsIl9pZCIsInNldFRpbWVvdXQiLCJ1cGRhdGVUZXN0cyIsInN0eWxlcyIsImVkaXRJY29uIiwiTG9va2luZ0dsYXNzIiwibmFtZUluUnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQVNYO0FBQUE7O0FBQ0osTUFBTUMsU0FBaUIsR0FBRztBQUN4QkMsY0FBVSxnQkFBU0YsS0FBSyxDQUFDRyxNQUFmO0FBRGMsR0FBMUI7O0FBREksa0JBSzRCQyxzREFBUSxDQUFVSixLQUFLLENBQUNLLE1BQWhCLENBTHBDO0FBQUEsTUFLR0MsUUFMSDtBQUFBLE1BS2FDLFdBTGI7O0FBT0osTUFBTUMsZUFBZTtBQUFBLGdNQUFHLGlCQUFPQyxNQUFQLEVBQXVCSCxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR2FJLDRDQUFLLENBQUNDLElBQU4sV0FDNUJDLGlEQUQ0QixrQ0FFL0I7QUFDRUgsc0JBQU0sRUFBTkEsTUFERjtBQUVFSCx3QkFBUSxFQUFSQTtBQUZGLGVBRitCLENBSGI7O0FBQUE7QUFHZE8sZ0NBSGM7QUFVcEJDLHlCQUFXLEdBQUdELGtCQUFrQixDQUFDRSxJQUFqQztBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7QUFYb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhcEJFLHFCQUFPLENBQUNFLEtBQVI7O0FBYm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZWLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckIsQ0FQSSxDQXVCSjs7O0FBQ0EsTUFBTVcsa0JBQWtCO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ25CWCxlQUFlLENBQUNSLEtBQUssQ0FBQ29CLEdBQVAsRUFBWSxDQUFDZCxRQUFiLENBREk7O0FBQUE7QUFFekJDLHlCQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0FVLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUh5QixDQUl6QjtBQUNBOztBQUNBSSx3QkFBVSxDQUFDO0FBQUEsdUJBQU1yQixLQUFLLENBQUNzQixXQUFOLENBQWtCdEIsS0FBSyxDQUFDb0IsR0FBeEIsQ0FBTjtBQUFBLGVBQUQsRUFBcUMsSUFBckMsQ0FBVjs7QUFOeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEJELGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFTQSxTQUNFO0FBQ0UsT0FBRyxFQUFFbkIsS0FBSyxDQUFDb0IsR0FEYjtBQUVFLE1BQUUsRUFBRXBCLEtBQUssQ0FBQ29CLEdBRlo7QUFHRSxhQUFTLEVBQUVHLG1FQUFNLENBQUN4QixRQUhwQjtBQUlFLFNBQUssRUFBRUUsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUU7QUFBSyxPQUFHLEVBQUV1QixtRUFBVjtBQUFvQixPQUFHLEVBQUMsV0FBeEI7QUFBb0MsYUFBUyxFQUFFRCxtRUFBTSxDQUFDRSxZQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFJLFdBQU8sRUFBRU4sa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBb0RuQixLQUFLLENBQUMwQixRQUExRCxDQVhGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYzFCLEtBQUssQ0FBQ29CLEdBQXBCLENBWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWJGLENBREY7QUFpQkQsQ0EzREQ7O0dBQU1yQixROztLQUFBQSxRO0FBNkRTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdENhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL0dBc3NldHMvY3JlYXRlX2ljb25fYmlnLnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdENhcmQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZGV2VVJMIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuXG5jb25zdCBUZXN0Q2FyZCA9IChwcm9wczoge1xuICBpdGVyYXRvcjogbnVtYmVyO1xuICBjb2xvdXI6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIG5hbWVJblJ1OiBzdHJpbmc7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgLy8gcGFyZW50Q29tcG9uZW50VGVzdEZldGNoZXI6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIC8vIG1haW5UZXN0RmV0Y2hlcjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgdXBkYXRlVGVzdHM6ICh0ZXN0SUQ6IHN0cmluZykgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgQ2FyZFN0eWxlOiBPYmplY3QgPSB7XG4gICAgYmFja2dyb3VuZDogYHJnYigke3Byb3BzLmNvbG91cn0pYCxcbiAgfTtcblxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLmFjdGl2ZSk7XG5cbiAgY29uc3QgY2hhbmdlVGVzdFN0YXRlID0gYXN5bmMgKHRlc3RJRDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbikgPT4ge1xuICAgIGxldCBjaGFuZ2VkVGVzdDogSVRlc3Q7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRnJvbVNlcnZlciA9IGF3YWl0IEF4aW9zLnBvc3QoXG4gICAgICAgIGAke2RldlVSTH10ZXN0cy90b2dnbGVUZXN0QWN0aXZlU3RhdGVgLFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdElELFxuICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY2hhbmdlZFRlc3QgPSByZXNwb25zZUZyb21TZXJ2ZXIuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGNoYW5nZWRUZXN0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuICAvLyBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGNvbnN0IGhhbmRsZUFjdGl2ZUNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBjaGFuZ2VUZXN0U3RhdGUocHJvcHMuX2lkLCAhaXNBY3RpdmUpO1xuICAgIHNldElzQWN0aXZlKCFpc0FjdGl2ZSk7XG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIGFsbCB0ZXN0c1wiKTtcbiAgICAvLyBwcm9wcy5tYWluVGVzdEZldGNoZXIoKTtcbiAgICAvLyBwcm9wcy5wYXJlbnRDb21wb25lbnRUZXN0RmV0Y2hlcigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcHJvcHMudXBkYXRlVGVzdHMocHJvcHMuX2lkKSwgMjAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e3Byb3BzLl9pZH1cbiAgICAgIGlkPXtwcm9wcy5faWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0Q2FyZH1cbiAgICAgIHN0eWxlPXtDYXJkU3R5bGV9XG4gICAgPlxuICAgICAgey8qIDxTd2l0Y2ggb25DaGFuZ2U9e2hhbmRsZUFjdGl2ZUNoYW5nZX0gY2hlY2tlZD17aXNBY3RpdmV9IC8+ICovfVxuICAgICAgey8qIFxuICAgICAgLy8hIE5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gdGltZSB0aGUgc3dpdGNoXG4gICAgICAqL31cbiAgICAgIDxpbWcgc3JjPXtlZGl0SWNvbn0gYWx0PVwiRWRpdCBpY29uXCIgY2xhc3NOYW1lPXtzdHlsZXMuTG9va2luZ0dsYXNzfSAvPlxuICAgICAgPGgxIG9uQ2xpY2s9e2hhbmRsZUFjdGl2ZUNoYW5nZX0+VGVzdCB0aXRsZSBpbiBydToge3Byb3BzLm5hbWVJblJ1fTwvaDE+XG4gICAgICA8aDI+VGVzdCBpZDoge3Byb3BzLl9pZH08L2gyPlxuICAgICAgPHNwYW4+TWFpbiBxdWVzdGlvbiBvZiB0ZXN0PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestCard.tsx\n");

/***/ })

})