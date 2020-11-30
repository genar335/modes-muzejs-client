webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/TestCard.tsx":
/*!*********************************!*\
  !*** ./components/TestCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GAssets/create_icon_big.png */ \"./GAssets/create_icon_big.png\");\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestCard.module.scss */ \"./components/styles/TestCard.module.scss\");\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/index.js\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar TestCard = function TestCard(props) {\n  _s();\n\n  var CardStyle = {\n    background: \"rgb(\".concat(props.colour, \")\")\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.active),\n      isActive = _useState[0],\n      setIsActive = _useState[1];\n\n  var changeTestState = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(testID, isActive) {\n      var changedTest, responseFromServer;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"tests/toggleTestActiveState\"), {\n                testID: testID,\n                isActive: isActive\n              });\n\n            case 3:\n              responseFromServer = _context.sent;\n              changedTest = responseFromServer.data;\n              console.log(changedTest);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function changeTestState(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  console.log(props);\n\n  var handleActiveChange = function handleActiveChange() {\n    setIsActive(!isActive);\n    console.log(isActive, \"after the state change\");\n    changeTestState(props._id, !isActive);\n    props.mainTestFetcher(); // props.parentComponentTestFetcher();\n  };\n\n  return __jsx(\"div\", {\n    key: props.iterator,\n    id: props._id,\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestCard,\n    style: CardStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onChange: handleActiveChange,\n    checked: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Edit icon\",\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LookingGlass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, \"Test title\"), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"Test id: \", props._id), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, \"Main question of test\"));\n};\n\n_s(TestCard, \"9xbITl6yubb84TaGyXQDGsWHuTA=\");\n\n_c = TestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3g/NTc0ZiJdLCJuYW1lcyI6WyJUZXN0Q2FyZCIsInByb3BzIiwiQ2FyZFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG91ciIsInVzZVN0YXRlIiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImNoYW5nZVRlc3RTdGF0ZSIsInRlc3RJRCIsIkF4aW9zIiwicG9zdCIsImRldlVSTCIsInJlc3BvbnNlRnJvbVNlcnZlciIsImNoYW5nZWRUZXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUFjdGl2ZUNoYW5nZSIsIl9pZCIsIm1haW5UZXN0RmV0Y2hlciIsIml0ZXJhdG9yIiwic3R5bGVzIiwiZWRpdEljb24iLCJMb29raW5nR2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFPWDtBQUFBOztBQUNKLE1BQU1DLFNBQWlCLEdBQUc7QUFDeEJDLGNBQVUsZ0JBQVNGLEtBQUssQ0FBQ0csTUFBZjtBQURjLEdBQTFCOztBQURJLGtCQUs0QkMsc0RBQVEsQ0FBVUosS0FBSyxDQUFDSyxNQUFoQixDQUxwQztBQUFBLE1BS0dDLFFBTEg7QUFBQSxNQUthQyxXQUxiOztBQU9KLE1BQU1DLGVBQWU7QUFBQSxnTUFBRyxpQkFBT0MsTUFBUCxFQUF1QkgsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdhSSw0Q0FBSyxDQUFDQyxJQUFOLFdBQzVCQyxpREFENEIsa0NBRS9CO0FBQ0VILHNCQUFNLEVBQU5BLE1BREY7QUFFRUgsd0JBQVEsRUFBUkE7QUFGRixlQUYrQixDQUhiOztBQUFBO0FBR2RPLGdDQUhjO0FBVXBCQyx5QkFBVyxHQUFHRCxrQkFBa0IsQ0FBQ0UsSUFBakM7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaO0FBWG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYXBCRSxxQkFBTyxDQUFDRSxLQUFSOztBQWJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmVixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQWdCQVEsU0FBTyxDQUFDQyxHQUFSLENBQVlqQixLQUFaOztBQUNBLE1BQU1tQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JaLGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVlYLFFBQVosRUFBc0Isd0JBQXRCO0FBQ0FFLG1CQUFlLENBQUNSLEtBQUssQ0FBQ29CLEdBQVAsRUFBWSxDQUFDZCxRQUFiLENBQWY7QUFDQU4sU0FBSyxDQUFDcUIsZUFBTixHQUorQixDQUsvQjtBQUNELEdBTkQ7O0FBUUEsU0FDRTtBQUNFLE9BQUcsRUFBRXJCLEtBQUssQ0FBQ3NCLFFBRGI7QUFFRSxNQUFFLEVBQUV0QixLQUFLLENBQUNvQixHQUZaO0FBR0UsYUFBUyxFQUFFRyxtRUFBTSxDQUFDeEIsUUFIcEI7QUFJRSxTQUFLLEVBQUVFLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsbURBQUQ7QUFBUSxZQUFRLEVBQUVrQixrQkFBbEI7QUFBc0MsV0FBTyxFQUFFYixRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFLLE9BQUcsRUFBRWtCLG1FQUFWO0FBQW9CLE9BQUcsRUFBQyxXQUF4QjtBQUFvQyxhQUFTLEVBQUVELG1FQUFNLENBQUNFLFlBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFjekIsS0FBSyxDQUFDb0IsR0FBcEIsQ0FURixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBVkYsQ0FERjtBQWNELENBckREOztHQUFNckIsUTs7S0FBQUEsUTtBQXVEU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi9HQXNzZXRzL2NyZWF0ZV9pY29uX2JpZy5wbmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1Rlc3RDYXJkLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGRldlVSTCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcblxuY29uc3QgVGVzdENhcmQgPSAocHJvcHM6IHtcbiAgaXRlcmF0b3I6IG51bWJlcjtcbiAgY29sb3VyOiBzdHJpbmc7XG4gIF9pZDogc3RyaW5nO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIHBhcmVudENvbXBvbmVudFRlc3RGZXRjaGVyOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBtYWluVGVzdEZldGNoZXI6ICgpID0+IFByb21pc2U8dm9pZD47XG59KSA9PiB7XG4gIGNvbnN0IENhcmRTdHlsZTogT2JqZWN0ID0ge1xuICAgIGJhY2tncm91bmQ6IGByZ2IoJHtwcm9wcy5jb2xvdXJ9KWAsXG4gIH07XG5cbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihwcm9wcy5hY3RpdmUpO1xuXG4gIGNvbnN0IGNoYW5nZVRlc3RTdGF0ZSA9IGFzeW5jICh0ZXN0SUQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pID0+IHtcbiAgICBsZXQgY2hhbmdlZFRlc3Q6IElUZXN0O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZUZyb21TZXJ2ZXIgPSBhd2FpdCBBeGlvcy5wb3N0KFxuICAgICAgICBgJHtkZXZVUkx9dGVzdHMvdG9nZ2xlVGVzdEFjdGl2ZVN0YXRlYCxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3RJRCxcbiAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNoYW5nZWRUZXN0ID0gcmVzcG9uc2VGcm9tU2VydmVyLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhjaGFuZ2VkVGVzdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBoYW5kbGVBY3RpdmVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SXNBY3RpdmUoIWlzQWN0aXZlKTtcbiAgICBjb25zb2xlLmxvZyhpc0FjdGl2ZSwgXCJhZnRlciB0aGUgc3RhdGUgY2hhbmdlXCIpO1xuICAgIGNoYW5nZVRlc3RTdGF0ZShwcm9wcy5faWQsICFpc0FjdGl2ZSk7XG4gICAgcHJvcHMubWFpblRlc3RGZXRjaGVyKCk7XG4gICAgLy8gcHJvcHMucGFyZW50Q29tcG9uZW50VGVzdEZldGNoZXIoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17cHJvcHMuaXRlcmF0b3J9XG4gICAgICBpZD17cHJvcHMuX2lkfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdENhcmR9XG4gICAgICBzdHlsZT17Q2FyZFN0eWxlfVxuICAgID5cbiAgICAgIDxTd2l0Y2ggb25DaGFuZ2U9e2hhbmRsZUFjdGl2ZUNoYW5nZX0gY2hlY2tlZD17aXNBY3RpdmV9IC8+XG4gICAgICA8aW1nIHNyYz17ZWRpdEljb259IGFsdD1cIkVkaXQgaWNvblwiIGNsYXNzTmFtZT17c3R5bGVzLkxvb2tpbmdHbGFzc30gLz5cbiAgICAgIDxoMT5UZXN0IHRpdGxlPC9oMT5cbiAgICAgIDxoMj5UZXN0IGlkOiB7cHJvcHMuX2lkfTwvaDI+XG4gICAgICA8c3Bhbj5NYWluIHF1ZXN0aW9uIG9mIHRlc3Q8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestCard.tsx\n");

/***/ })

})