webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/TestCard.tsx":
/*!*********************************!*\
  !*** ./components/TestCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GAssets/create_icon_big.png */ \"./GAssets/create_icon_big.png\");\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestCard.module.scss */ \"./components/styles/TestCard.module.scss\");\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/index.js\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar TestCard = function TestCard(props) {\n  _s();\n\n  var CardStyle = {\n    background: \"rgb(\".concat(props.colour, \")\")\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.active),\n      isActive = _useState[0],\n      setIsActive = _useState[1];\n\n  var changeTestState = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(testID, isActive) {\n      var changedTest;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"tests/toggleTestActiveState\"), {\n                testID: testID,\n                isActive: isActive\n              });\n\n            case 3:\n              changedTest = _context.sent;\n              console.log(changedTest);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function changeTestState(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  console.log(props);\n\n  var handleActiveChange = function handleActiveChange() {\n    setIsActive(!isActive);\n    console.log(isActive, \"after the state change\");\n    changeTestState(props._id, !isActive);\n  };\n\n  return __jsx(\"div\", {\n    key: props.iterator,\n    id: props._id,\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestCard,\n    style: CardStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onChange: handleActiveChange,\n    checked: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Edit icon\",\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LookingGlass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, \"Test title\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"Main question of test\"));\n};\n\n_s(TestCard, \"9xbITl6yubb84TaGyXQDGsWHuTA=\");\n\n_c = TestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3g/NTc0ZiJdLCJuYW1lcyI6WyJUZXN0Q2FyZCIsInByb3BzIiwiQ2FyZFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG91ciIsInVzZVN0YXRlIiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZVRlc3RTdGF0ZSIsInRlc3RJRCIsIkF4aW9zIiwicG9zdCIsImRldlVSTCIsImNoYW5nZWRUZXN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlQWN0aXZlQ2hhbmdlIiwiX2lkIiwiaXRlcmF0b3IiLCJzdHlsZXMiLCJlZGl0SWNvbiIsIkxvb2tpbmdHbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUtYO0FBQUE7O0FBQ0osTUFBTUMsU0FBaUIsR0FBRztBQUN4QkMsY0FBVSxnQkFBU0YsS0FBSyxDQUFDRyxNQUFmO0FBRGMsR0FBMUI7O0FBREksa0JBSzRCQyxzREFBUSxDQUFVSixLQUFLLENBQUNLLE1BQWhCLENBTHBDO0FBQUEsTUFLR0MsUUFMSDtBQUFBLE1BS2FDLFdBTGI7O0FBT0osTUFBTUMsZUFBZTtBQUFBLGdNQUFHLGlCQUFPQyxNQUFQLEVBQXVCSCxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1JLDRDQUFLLENBQUNDLElBQU4sV0FDckJDLGlEQURxQixrQ0FFeEI7QUFDRUgsc0JBQU0sRUFBTkEsTUFERjtBQUVFSCx3QkFBUSxFQUFSQTtBQUZGLGVBRndCLENBRk47O0FBQUE7QUFFZE8seUJBRmM7QUFTcEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQVRvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdwQkMscUJBQU8sQ0FBQ0UsS0FBUjs7QUFYb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZlIsZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFjQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlmLEtBQVo7O0FBQ0EsTUFBTWlCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQlYsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBWixFQUFzQix3QkFBdEI7QUFDQUUsbUJBQWUsQ0FBQ1IsS0FBSyxDQUFDa0IsR0FBUCxFQUFZLENBQUNaLFFBQWIsQ0FBZjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUNFLE9BQUcsRUFBRU4sS0FBSyxDQUFDbUIsUUFEYjtBQUVFLE1BQUUsRUFBRW5CLEtBQUssQ0FBQ2tCLEdBRlo7QUFHRSxhQUFTLEVBQUVFLG1FQUFNLENBQUNyQixRQUhwQjtBQUlFLFNBQUssRUFBRUUsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxtREFBRDtBQUFRLFlBQVEsRUFBRWdCLGtCQUFsQjtBQUFzQyxXQUFPLEVBQUVYLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUssT0FBRyxFQUFFZSxtRUFBVjtBQUFvQixPQUFHLEVBQUMsV0FBeEI7QUFBb0MsYUFBUyxFQUFFRCxtRUFBTSxDQUFDRSxZQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFURixDQURGO0FBYUQsQ0E5Q0Q7O0dBQU12QixROztLQUFBQSxRO0FBZ0RTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdENhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL0dBc3NldHMvY3JlYXRlX2ljb25fYmlnLnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdENhcmQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZGV2VVJMIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRlc3RDYXJkID0gKHByb3BzOiB7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIGNvbG91cjogc3RyaW5nO1xuICBfaWQ6IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCBDYXJkU3R5bGU6IE9iamVjdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiBgcmdiKCR7cHJvcHMuY29sb3VyfSlgLFxuICB9O1xuXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4ocHJvcHMuYWN0aXZlKTtcblxuICBjb25zdCBjaGFuZ2VUZXN0U3RhdGUgPSBhc3luYyAodGVzdElEOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNoYW5nZWRUZXN0ID0gYXdhaXQgQXhpb3MucG9zdChcbiAgICAgICAgYCR7ZGV2VVJMfXRlc3RzL3RvZ2dsZVRlc3RBY3RpdmVTdGF0ZWAsXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0SUQsXG4gICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhjaGFuZ2VkVGVzdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBoYW5kbGVBY3RpdmVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SXNBY3RpdmUoIWlzQWN0aXZlKTtcbiAgICBjb25zb2xlLmxvZyhpc0FjdGl2ZSwgXCJhZnRlciB0aGUgc3RhdGUgY2hhbmdlXCIpO1xuICAgIGNoYW5nZVRlc3RTdGF0ZShwcm9wcy5faWQsICFpc0FjdGl2ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e3Byb3BzLml0ZXJhdG9yfVxuICAgICAgaWQ9e3Byb3BzLl9pZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlRlc3RDYXJkfVxuICAgICAgc3R5bGU9e0NhcmRTdHlsZX1cbiAgICA+XG4gICAgICA8U3dpdGNoIG9uQ2hhbmdlPXtoYW5kbGVBY3RpdmVDaGFuZ2V9IGNoZWNrZWQ9e2lzQWN0aXZlfSAvPlxuICAgICAgPGltZyBzcmM9e2VkaXRJY29ufSBhbHQ9XCJFZGl0IGljb25cIiBjbGFzc05hbWU9e3N0eWxlcy5Mb29raW5nR2xhc3N9IC8+XG4gICAgICA8aDE+VGVzdCB0aXRsZTwvaDE+XG4gICAgICA8c3Bhbj5NYWluIHF1ZXN0aW9uIG9mIHRlc3Q8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestCard.tsx\n");

/***/ })

})