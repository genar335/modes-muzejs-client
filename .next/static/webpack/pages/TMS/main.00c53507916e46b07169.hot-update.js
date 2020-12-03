webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/TestCard.tsx":
/*!*********************************!*\
  !*** ./components/TestCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GAssets/create_icon_big.png */ \"./GAssets/create_icon_big.png\");\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestCard.module.scss */ \"./components/styles/TestCard.module.scss\");\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/index.js\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar TestCard = function TestCard(props) {\n  _s();\n\n  var CardStyle = {\n    background: \"rgb(\".concat(props.colour, \")\")\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  var forwardToTestEdit = function forwardToTestEdit(testID) {\n    router.push(\"/TMS/create_test?testToEdit=\".concat(testID));\n  }; // console.log(props, \"card props\");\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.active),\n      isTestActive = _useState[0],\n      setIsTestActive = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setIsTestActive(props.active);\n  }, []); // const [switchIsActive, setSwichIsActive] = useState<boolean>(props.active);\n\n  var changeTestState = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(testID, isActive) {\n      var changedTest, responseFromServer;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"tests/toggleTestActiveState\"), {\n                testID: testID,\n                isActive: isActive\n              });\n\n            case 3:\n              responseFromServer = _context.sent;\n              changedTest = responseFromServer.data; // setSwichIsActive(!switchIsActive);\n              // setIsTestActive(changedTest.active);\n\n              console.log(changedTest, \"recieved a response\");\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function changeTestState(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleActiveChange = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return changeTestState(props._id, !isTestActive);\n\n            case 2:\n              console.log(\"Calling all tests\");\n              setTimeout(function () {\n                props.updateTests(props._id);\n              }, 10);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleActiveChange() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleEditIconClick = function handleEditIconClick() {\n    alert(\"Sending you to edit a test\");\n    forwardToTestEdit(props._id);\n  };\n\n  var handleDeleteIconClick = function handleDeleteIconClick() {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"/tests/deleteTestByID?testToDelete=\").concat(props._id))[\"catch\"](function (error) {\n      return alert(error);\n    }).then(function (response) {\n      console.log(\"Success\");\n      props.fetchAllTests();\n    });\n  };\n\n  return __jsx(\"div\", {\n    key: props._id,\n    id: props._id,\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestCard,\n    style: CardStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onChange: handleActiveChange,\n    checked: isTestActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }), __jsx(\"img\", {\n    onClick: handleEditIconClick,\n    src: _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Edit icon\",\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LookingGlass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    onClick: handleActiveChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, \"Test title in ru: \", props.nameInRu), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, \"Test id: \", props._id), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, \"Main question of test\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, \"\\u2421\"));\n};\n\n_s(TestCard, \"voe/bT3xYXjkDubvcU32hN0z8pE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = TestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3g/NTc0ZiJdLCJuYW1lcyI6WyJUZXN0Q2FyZCIsInByb3BzIiwiQ2FyZFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG91ciIsInJvdXRlciIsInVzZVJvdXRlciIsImZvcndhcmRUb1Rlc3RFZGl0IiwidGVzdElEIiwicHVzaCIsInVzZVN0YXRlIiwiYWN0aXZlIiwiaXNUZXN0QWN0aXZlIiwic2V0SXNUZXN0QWN0aXZlIiwidXNlRWZmZWN0IiwiY2hhbmdlVGVzdFN0YXRlIiwiaXNBY3RpdmUiLCJBeGlvcyIsInBvc3QiLCJkZXZVUkwiLCJyZXNwb25zZUZyb21TZXJ2ZXIiLCJjaGFuZ2VkVGVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVBY3RpdmVDaGFuZ2UiLCJfaWQiLCJzZXRUaW1lb3V0IiwidXBkYXRlVGVzdHMiLCJoYW5kbGVFZGl0SWNvbkNsaWNrIiwiYWxlcnQiLCJoYW5kbGVEZWxldGVJY29uQ2xpY2siLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJmZXRjaEFsbFRlc3RzIiwic3R5bGVzIiwiZWRpdEljb24iLCJMb29raW5nR2xhc3MiLCJuYW1lSW5SdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFVWDtBQUFBOztBQUNKLE1BQU1DLFNBQWlCLEdBQUc7QUFDeEJDLGNBQVUsZ0JBQVNGLEtBQUssQ0FBQ0csTUFBZjtBQURjLEdBQTFCO0FBSUEsTUFBTUMsTUFBa0IsR0FBR0MsNkRBQVMsRUFBcEM7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQW9CO0FBQzVDSCxVQUFNLENBQUNJLElBQVAsdUNBQTJDRCxNQUEzQztBQUNELEdB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LEVBZ0JFO0FBQUksV0FBTyxFQUFFYixrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFvRHpCLEtBQUssQ0FBQ3VDLFFBQTFELENBaEJGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWN2QyxLQUFLLENBQUMwQixHQUFwQixDQWpCRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWxCRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGLENBREY7QUF1QkQsQ0E3RkQ7O0dBQU0zQixRO1VBZXVCTSxxRDs7O0tBZnZCTixRO0FBK0ZTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdENhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vR0Fzc2V0cy9jcmVhdGVfaWNvbl9iaWcucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0Q2FyZC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XG5pbXBvcnQgQXhpb3MsIHsgQXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZGV2VVJMIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFRlc3RDYXJkID0gKHByb3BzOiB7XG4gIGl0ZXJhdG9yOiBudW1iZXI7XG4gIGNvbG91cjogc3RyaW5nO1xuICBfaWQ6IHN0cmluZztcbiAgbmFtZUluUnU6IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xuICAvLyBwYXJlbnRDb21wb25lbnRUZXN0RmV0Y2hlcjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLy8gbWFpblRlc3RGZXRjaGVyOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICB1cGRhdGVUZXN0czogKHRlc3RJRDogc3RyaW5nKSA9PiB2b2lkO1xuICBmZXRjaEFsbFRlc3RzOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufSkgPT4ge1xuICBjb25zdCBDYXJkU3R5bGU6IE9iamVjdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiBgcmdiKCR7cHJvcHMuY29sb3VyfSlgLFxuICB9O1xuXG4gIGNvbnN0IHJvdXRlcjogTmV4dFJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBmb3J3YXJkVG9UZXN0RWRpdCA9ICh0ZXN0SUQ6IHN0cmluZykgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvVE1TL2NyZWF0ZV90ZXN0P3Rlc3RUb0VkaXQ9JHt0ZXN0SUR9YCk7XG4gIH07XG5cbiAgLy8gY29uc29sZS5sb2cocHJvcHMsIFwiY2FyZCBwcm9wc1wiKTtcbiAgY29uc3QgW2lzVGVzdEFjdGl2ZSwgc2V0SXNUZXN0QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLmFjdGl2ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNUZXN0QWN0aXZlKHByb3BzLmFjdGl2ZSk7XG4gIH0sIFtdKTtcblxuICAvLyBjb25zdCBbc3dpdGNoSXNBY3RpdmUsIHNldFN3aWNoSXNBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4ocHJvcHMuYWN0aXZlKTtcblxuICBjb25zdCBjaGFuZ2VUZXN0U3RhdGUgPSBhc3luYyAodGVzdElEOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSA9PiB7XG4gICAgbGV0IGNoYW5nZWRUZXN0OiBJVGVzdDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2VGcm9tU2VydmVyID0gYXdhaXQgQXhpb3MucG9zdChcbiAgICAgICAgYCR7ZGV2VVJMfXRlc3RzL3RvZ2dsZVRlc3RBY3RpdmVTdGF0ZWAsXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0SUQsXG4gICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjaGFuZ2VkVGVzdCA9IHJlc3BvbnNlRnJvbVNlcnZlci5kYXRhO1xuICAgICAgLy8gc2V0U3dpY2hJc0FjdGl2ZSghc3dpdGNoSXNBY3RpdmUpO1xuICAgICAgLy8gc2V0SXNUZXN0QWN0aXZlKGNoYW5nZWRUZXN0LmFjdGl2ZSk7XG4gICAgICBjb25zb2xlLmxvZyhjaGFuZ2VkVGVzdCwgXCJyZWNpZXZlZCBhIHJlc3BvbnNlXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWN0aXZlQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIHNldFN3aWNoSXNBY3RpdmUoIXN3aXRjaElzQWN0aXZlKTtcbiAgICBhd2FpdCBjaGFuZ2VUZXN0U3RhdGUocHJvcHMuX2lkLCAhaXNUZXN0QWN0aXZlKTtcbiAgICBjb25zb2xlLmxvZyhcIkNhbGxpbmcgYWxsIHRlc3RzXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJvcHMudXBkYXRlVGVzdHMocHJvcHMuX2lkKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRWRpdEljb25DbGljayA9ICgpID0+IHtcbiAgICBhbGVydChcIlNlbmRpbmcgeW91IHRvIGVkaXQgYSB0ZXN0XCIpO1xuICAgIGZvcndhcmRUb1Rlc3RFZGl0KHByb3BzLl9pZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlSWNvbkNsaWNrID0gKCkgPT4ge1xuICAgIEF4aW9zLmdldChgJHtkZXZVUkx9L3Rlc3RzL2RlbGV0ZVRlc3RCeUlEP3Rlc3RUb0RlbGV0ZT0ke3Byb3BzLl9pZH1gKVxuICAgICAgLmNhdGNoKChlcnJvcjogQXhpb3NFcnJvcikgPT4gYWxlcnQoZXJyb3IpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgcHJvcHMuZmV0Y2hBbGxUZXN0cygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e3Byb3BzLl9pZH1cbiAgICAgIGlkPXtwcm9wcy5faWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5UZXN0Q2FyZH1cbiAgICAgIHN0eWxlPXtDYXJkU3R5bGV9XG4gICAgPlxuICAgICAgPFN3aXRjaCBvbkNoYW5nZT17aGFuZGxlQWN0aXZlQ2hhbmdlfSBjaGVja2VkPXtpc1Rlc3RBY3RpdmV9IC8+XG4gICAgICB7LyogXG4gICAgICAvLyEgTmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byB0aW1lIHRoZSBzd2l0Y2hcbiAgICAgICovfVxuICAgICAgPGltZ1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVFZGl0SWNvbkNsaWNrfVxuICAgICAgICBzcmM9e2VkaXRJY29ufVxuICAgICAgICBhbHQ9XCJFZGl0IGljb25cIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Mb29raW5nR2xhc3N9XG4gICAgICAvPlxuICAgICAgPGgxIG9uQ2xpY2s9e2hhbmRsZUFjdGl2ZUNoYW5nZX0+VGVzdCB0aXRsZSBpbiBydToge3Byb3BzLm5hbWVJblJ1fTwvaDE+XG4gICAgICA8aDI+VGVzdCBpZDoge3Byb3BzLl9pZH08L2gyPlxuICAgICAgPHNwYW4+TWFpbiBxdWVzdGlvbiBvZiB0ZXN0PC9zcGFuPlxuICAgICAgPHNwYW4+4pChPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestCard.tsx\n");

/***/ })

})