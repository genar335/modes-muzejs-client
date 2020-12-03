webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/TestCard.tsx":
/*!*********************************!*\
  !*** ./components/TestCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GAssets/create_icon_big.png */ \"./GAssets/create_icon_big.png\");\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestCard.module.scss */ \"./components/styles/TestCard.module.scss\");\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/index.js\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar TestCard = function TestCard(props) {\n  _s();\n\n  var CardStyle = {\n    background: \"rgb(\".concat(props.colour, \")\")\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.active),\n      isTestActive = _useState[0],\n      setIsTestActive = _useState[1]; // const [switchIsActive, setSwichIsActive] = useState<boolean>(props.active);\n\n\n  var changeTestState = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(testID, isActive) {\n      var changedTest, responseFromServer;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"tests/toggleTestActiveState\"), {\n                testID: testID,\n                isActive: isActive\n              });\n\n            case 3:\n              responseFromServer = _context.sent;\n              changedTest = responseFromServer.data; // setSwichIsActive(!switchIsActive);\n\n              console.log(changedTest, \"recieved a response\");\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function changeTestState(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleActiveChange = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return changeTestState(props._id, !isTestActive);\n\n            case 2:\n              console.log(\"Calling all tests\");\n              setTimeout(function () {\n                props.updateTests(props._id);\n              }, 1000);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleActiveChange() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    key: props._id,\n    id: props._id,\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestCard,\n    style: CardStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onChange: handleActiveChange,\n    checked: isTestActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }), __jsx(\"img\", {\n    src: _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Edit icon\",\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LookingGlass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    onClick: handleActiveChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Test title in ru: \", props.nameInRu), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"Test id: \", props._id), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \"Main question of test\"));\n};\n\n_s(TestCard, \"rM/OfM0LlsEDj20JDTBgzMoTI/0=\");\n\n_c = TestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3g/NTc0ZiJdLCJuYW1lcyI6WyJUZXN0Q2FyZCIsInByb3BzIiwiQ2FyZFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG91ciIsInVzZVN0YXRlIiwiYWN0aXZlIiwiaXNUZXN0QWN0aXZlIiwic2V0SXNUZXN0QWN0aXZlIiwiY2hhbmdlVGVzdFN0YXRlIiwidGVzdElEIiwiaXNBY3RpdmUiLCJBeGlvcyIsInBvc3QiLCJkZXZVUkwiLCJyZXNwb25zZUZyb21TZXJ2ZXIiLCJjaGFuZ2VkVGVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVBY3RpdmVDaGFuZ2UiLCJfaWQiLCJzZXRUaW1lb3V0IiwidXBkYXRlVGVzdHMiLCJzdHlsZXMiLCJlZGl0SWNvbiIsIkxvb2tpbmdHbGFzcyIsIm5hbWVJblJ1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBU1g7QUFBQTs7QUFDSixNQUFNQyxTQUFpQixHQUFHO0FBQ3hCQyxjQUFVLGdCQUFTRixLQUFLLENBQUNHLE1BQWY7QUFEYyxHQUExQjs7QUFESSxrQkFLb0NDLHNEQUFRLENBQVVKLEtBQUssQ0FBQ0ssTUFBaEIsQ0FMNUM7QUFBQSxNQUtHQyxZQUxIO0FBQUEsTUFLaUJDLGVBTGpCLGlCQU1KOzs7QUFFQSxNQUFNQyxlQUFlO0FBQUEsZ01BQUcsaUJBQU9DLE1BQVAsRUFBdUJDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHYUMsNENBQUssQ0FBQ0MsSUFBTixXQUM1QkMsaURBRDRCLGtDQUUvQjtBQUNFSixzQkFBTSxFQUFOQSxNQURGO0FBRUVDLHdCQUFRLEVBQVJBO0FBRkYsZUFGK0IsQ0FIYjs7QUFBQTtBQUdkSSxnQ0FIYztBQVVwQkMseUJBQVcsR0FBR0Qsa0JBQWtCLENBQUNFLElBQWpDLENBVm9CLENBV3BCOztBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILFdBQVosRUFBeUIscUJBQXpCO0FBWm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY3BCRSxxQkFBTyxDQUFDRSxLQUFSOztBQWRvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmWCxlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQWtCQSxNQUFNWSxrQkFBa0I7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFbkJaLGVBQWUsQ0FBQ1IsS0FBSyxDQUFDcUIsR0FBUCxFQUFZLENBQUNmLFlBQWIsQ0FGSTs7QUFBQTtBQUd6QlcscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FJLHdCQUFVLENBQUMsWUFBTTtBQUNmdEIscUJBQUssQ0FBQ3VCLFdBQU4sQ0FBa0J2QixLQUFLLENBQUNxQixHQUF4QjtBQUNELGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBSnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWxCRCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBU0EsU0FDRTtBQUNFLE9BQUcsRUFBRXBCLEtBQUssQ0FBQ3FCLEdBRGI7QUFFRSxNQUFFLEVBQUVyQixLQUFLLENBQUNxQixHQUZaO0FBR0UsYUFBUyxFQUFFRyxtRUFBTSxDQUFDekIsUUFIcEI7QUFJRSxTQUFLLEVBQUVFLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsbURBQUQ7QUFBUSxZQUFRLEVBQUVtQixrQkFBbEI7QUFBc0MsV0FBTyxFQUFFZCxZQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFVRTtBQUFLLE9BQUcsRUFBRW1CLG1FQUFWO0FBQW9CLE9BQUcsRUFBQyxXQUF4QjtBQUFvQyxhQUFTLEVBQUVELG1FQUFNLENBQUNFLFlBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQUksV0FBTyxFQUFFTixrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFvRHBCLEtBQUssQ0FBQzJCLFFBQTFELENBWEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFjM0IsS0FBSyxDQUFDcUIsR0FBcEIsQ0FaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBYkYsQ0FERjtBQWlCRCxDQTdERDs7R0FBTXRCLFE7O0tBQUFBLFE7QUErRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vR0Fzc2V0cy9jcmVhdGVfaWNvbl9iaWcucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0Q2FyZC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBkZXZVUkwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5cbmNvbnN0IFRlc3RDYXJkID0gKHByb3BzOiB7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIGNvbG91cjogc3RyaW5nO1xuICBfaWQ6IHN0cmluZztcbiAgbmFtZUluUnU6IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xuICAvLyBwYXJlbnRDb21wb25lbnRUZXN0RmV0Y2hlcjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLy8gbWFpblRlc3RGZXRjaGVyOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICB1cGRhdGVUZXN0czogKHRlc3RJRDogc3RyaW5nKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBDYXJkU3R5bGU6IE9iamVjdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiBgcmdiKCR7cHJvcHMuY29sb3VyfSlgLFxuICB9O1xuXG4gIGNvbnN0IFtpc1Rlc3RBY3RpdmUsIHNldElzVGVzdEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihwcm9wcy5hY3RpdmUpO1xuICAvLyBjb25zdCBbc3dpdGNoSXNBY3RpdmUsIHNldFN3aWNoSXNBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4ocHJvcHMuYWN0aXZlKTtcblxuICBjb25zdCBjaGFuZ2VUZXN0U3RhdGUgPSBhc3luYyAodGVzdElEOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSA9PiB7XG4gICAgbGV0IGNoYW5nZWRUZXN0OiBJVGVzdDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2VGcm9tU2VydmVyID0gYXdhaXQgQXhpb3MucG9zdChcbiAgICAgICAgYCR7ZGV2VVJMfXRlc3RzL3RvZ2dsZVRlc3RBY3RpdmVTdGF0ZWAsXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0SUQsXG4gICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjaGFuZ2VkVGVzdCA9IHJlc3BvbnNlRnJvbVNlcnZlci5kYXRhO1xuICAgICAgLy8gc2V0U3dpY2hJc0FjdGl2ZSghc3dpdGNoSXNBY3RpdmUpO1xuICAgICAgY29uc29sZS5sb2coY2hhbmdlZFRlc3QsIFwicmVjaWV2ZWQgYSByZXNwb25zZVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjdGl2ZUNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpO1xuICAgIGF3YWl0IGNoYW5nZVRlc3RTdGF0ZShwcm9wcy5faWQsICFpc1Rlc3RBY3RpdmUpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBhbGwgdGVzdHNcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwcm9wcy51cGRhdGVUZXN0cyhwcm9wcy5faWQpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtwcm9wcy5faWR9XG4gICAgICBpZD17cHJvcHMuX2lkfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdENhcmR9XG4gICAgICBzdHlsZT17Q2FyZFN0eWxlfVxuICAgID5cbiAgICAgIDxTd2l0Y2ggb25DaGFuZ2U9e2hhbmRsZUFjdGl2ZUNoYW5nZX0gY2hlY2tlZD17aXNUZXN0QWN0aXZlfSAvPlxuICAgICAgey8qIFxuICAgICAgLy8hIE5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gdGltZSB0aGUgc3dpdGNoXG4gICAgICAqL31cbiAgICAgIDxpbWcgc3JjPXtlZGl0SWNvbn0gYWx0PVwiRWRpdCBpY29uXCIgY2xhc3NOYW1lPXtzdHlsZXMuTG9va2luZ0dsYXNzfSAvPlxuICAgICAgPGgxIG9uQ2xpY2s9e2hhbmRsZUFjdGl2ZUNoYW5nZX0+VGVzdCB0aXRsZSBpbiBydToge3Byb3BzLm5hbWVJblJ1fTwvaDE+XG4gICAgICA8aDI+VGVzdCBpZDoge3Byb3BzLl9pZH08L2gyPlxuICAgICAgPHNwYW4+TWFpbiBxdWVzdGlvbiBvZiB0ZXN0PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestCard.tsx\n");

/***/ })

})