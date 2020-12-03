webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./components/TestCard.tsx":
/*!*********************************!*\
  !*** ./components/TestCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GAssets/create_icon_big.png */ \"./GAssets/create_icon_big.png\");\n/* harmony import */ var _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/TestCard.module.scss */ \"./components/styles/TestCard.module.scss\");\n/* harmony import */ var _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/index.js\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar TestCard = function TestCard(props) {\n  _s();\n\n  var CardStyle = {\n    background: \"rgb(\".concat(props.colour, \")\")\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  var forwardToTestEdit = function forwardToTestEdit(testID) {\n    router.push(\"/TMS/create_test?testToEdit=\".concat(testID));\n  }; // console.log(props, \"card props\");\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.active),\n      isTestActive = _useState[0],\n      setIsTestActive = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setIsTestActive(props.active);\n  }, []); // const [switchIsActive, setSwichIsActive] = useState<boolean>(props.active);\n\n  var changeTestState = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(testID, isActive) {\n      var changedTest, responseFromServer;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"tests/toggleTestActiveState\"), {\n                testID: testID,\n                isActive: isActive\n              });\n\n            case 3:\n              responseFromServer = _context.sent;\n              changedTest = responseFromServer.data; // setSwichIsActive(!switchIsActive);\n              // setIsTestActive(changedTest.active);\n\n              console.log(changedTest, \"recieved a response\");\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function changeTestState(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleActiveChange = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return changeTestState(props._id, !isTestActive);\n\n            case 2:\n              console.log(\"Calling all tests\");\n              setTimeout(function () {\n                props.updateTests(props._id);\n              }, 10);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleActiveChange() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleEditIconClick = function handleEditIconClick() {\n    alert(\"Sending you to edit a test\");\n    forwardToTestEdit(props._id);\n  };\n\n  var handleDeleteIconClick = function handleDeleteIconClick() {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_7__[\"devURL\"], \"/tests/deleteTestByID?testToDelete=\").concat(props._id))[\"catch\"](function (error) {\n      return alert(error);\n    }).then(function (response) {\n      console.log(\"Success\");\n      props.fetchAllTests();\n    });\n  };\n\n  return __jsx(\"div\", {\n    key: props._id,\n    id: props._id,\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TestCard,\n    style: CardStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    onChange: handleActiveChange,\n    checked: isTestActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }), __jsx(\"img\", {\n    onClick: handleEditIconClick,\n    src: _GAssets_create_icon_big_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Edit icon\",\n    className: _styles_TestCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LookingGlass,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    onClick: handleActiveChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, \"Test title in ru: \", props.nameInRu), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, \"Test id: \", props._id), __jsx(\"span\", {\n    onClick: handleDeleteIconClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, \"Main question of test\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, \"\\u2421\"));\n};\n\n_s(TestCard, \"voe/bT3xYXjkDubvcU32hN0z8pE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = TestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0Q2FyZC50c3g/NTc0ZiJdLCJuYW1lcyI6WyJUZXN0Q2FyZCIsInByb3BzIiwiQ2FyZFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG91ciIsInJvdXRlciIsInVzZVJvdXRlciIsImZvcndhcmRUb1Rlc3RFZGl0IiwidGVzdElEIiwicHVzaCIsInVzZVN0YXRlIiwiYWN0aXZlIiwiaXNUZXN0QWN0aXZlIiwic2V0SXNUZXN0QWN0aXZlIiwidXNlRWZmZWN0IiwiY2hhbmdlVGVzdFN0YXRlIiwiaXNBY3RpdmUiLCJBeGlvcyIsInBvc3QiLCJkZXZVUkwiLCJyZXNwb25zZUZyb21TZXJ2ZXIiLCJjaGFuZ2VkVGVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVBY3RpdmVDaGFuZ2UiLCJfaWQiLCJzZXRUaW1lb3V0IiwidXBkYXRlVGVzdHMiLCJoYW5kbGVFZGl0SWNvbkNsaWNrIiwiYWxlcnQiLCJoYW5kbGVEZWxldGVJY29uQ2xpY2siLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJmZXRjaEFsbFRlc3RzIiwic3R5bGVzIiwiZWRpdEljb24iLCJMb29raW5nR2xhc3MiLCJuYW1lSW5SdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFVWDtBQUFBOztBQUNKLE1BQU1DLFNBQWlCLEdBQUc7QUFDeEJDLGNBQVUsZ0JBQVNGLEtBQUssQ0FBQ0csTUFBZjtBQURjLEdBQTFCO0FBSUEsTUFBTUMsTUFBa0IsR0FBR0MsNkRBQVMsRUFBcEM7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQW9CO0FBQzVDSCxVQUFNLENBQUNJLElBQVAsdUNBQTJDRCxNQUEzQztBQUNELEdB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LEVBZ0JFO0FBQUksV0FBTyxFQUFFYixrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFvRHpCLEtBQUssQ0FBQ3VDLFFBQTFELENBaEJGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWN2QyxLQUFLLENBQUMwQixHQUFwQixDQWpCRixFQWtCRTtBQUFNLFdBQU8sRUFBRUsscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFsQkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixDQURGO0FBdUJELENBN0ZEOztHQUFNaEMsUTtVQWV1Qk0scUQ7OztLQWZ2Qk4sUTtBQStGU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL0dBc3NldHMvY3JlYXRlX2ljb25fYmlnLnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdENhcmQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xuaW1wb3J0IEF4aW9zLCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGRldlVSTCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBUZXN0Q2FyZCA9IChwcm9wczoge1xuICBpdGVyYXRvcjogbnVtYmVyO1xuICBjb2xvdXI6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIG5hbWVJblJ1OiBzdHJpbmc7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgLy8gcGFyZW50Q29tcG9uZW50VGVzdEZldGNoZXI6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIC8vIG1haW5UZXN0RmV0Y2hlcjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgdXBkYXRlVGVzdHM6ICh0ZXN0SUQ6IHN0cmluZykgPT4gdm9pZDtcbiAgZmV0Y2hBbGxUZXN0czogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn0pID0+IHtcbiAgY29uc3QgQ2FyZFN0eWxlOiBPYmplY3QgPSB7XG4gICAgYmFja2dyb3VuZDogYHJnYigke3Byb3BzLmNvbG91cn0pYCxcbiAgfTtcblxuICBjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZm9yd2FyZFRvVGVzdEVkaXQgPSAodGVzdElEOiBzdHJpbmcpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL1RNUy9jcmVhdGVfdGVzdD90ZXN0VG9FZGl0PSR7dGVzdElEfWApO1xuICB9O1xuXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLCBcImNhcmQgcHJvcHNcIik7XG4gIGNvbnN0IFtpc1Rlc3RBY3RpdmUsIHNldElzVGVzdEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihwcm9wcy5hY3RpdmUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzVGVzdEFjdGl2ZShwcm9wcy5hY3RpdmUpO1xuICB9LCBbXSk7XG5cbiAgLy8gY29uc3QgW3N3aXRjaElzQWN0aXZlLCBzZXRTd2ljaElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLmFjdGl2ZSk7XG5cbiAgY29uc3QgY2hhbmdlVGVzdFN0YXRlID0gYXN5bmMgKHRlc3RJRDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbikgPT4ge1xuICAgIGxldCBjaGFuZ2VkVGVzdDogSVRlc3Q7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRnJvbVNlcnZlciA9IGF3YWl0IEF4aW9zLnBvc3QoXG4gICAgICAgIGAke2RldlVSTH10ZXN0cy90b2dnbGVUZXN0QWN0aXZlU3RhdGVgLFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdElELFxuICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY2hhbmdlZFRlc3QgPSByZXNwb25zZUZyb21TZXJ2ZXIuZGF0YTtcbiAgICAgIC8vIHNldFN3aWNoSXNBY3RpdmUoIXN3aXRjaElzQWN0aXZlKTtcbiAgICAgIC8vIHNldElzVGVzdEFjdGl2ZShjaGFuZ2VkVGVzdC5hY3RpdmUpO1xuICAgICAgY29uc29sZS5sb2coY2hhbmdlZFRlc3QsIFwicmVjaWV2ZWQgYSByZXNwb25zZVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjdGl2ZUNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBzZXRTd2ljaElzQWN0aXZlKCFzd2l0Y2hJc0FjdGl2ZSk7XG4gICAgYXdhaXQgY2hhbmdlVGVzdFN0YXRlKHByb3BzLl9pZCwgIWlzVGVzdEFjdGl2ZSk7XG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIGFsbCB0ZXN0c1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHByb3BzLnVwZGF0ZVRlc3RzKHByb3BzLl9pZCk7XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXRJY29uQ2xpY2sgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJTZW5kaW5nIHlvdSB0byBlZGl0IGEgdGVzdFwiKTtcbiAgICBmb3J3YXJkVG9UZXN0RWRpdChwcm9wcy5faWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUljb25DbGljayA9ICgpID0+IHtcbiAgICBBeGlvcy5nZXQoYCR7ZGV2VVJMfS90ZXN0cy9kZWxldGVUZXN0QnlJRD90ZXN0VG9EZWxldGU9JHtwcm9wcy5faWR9YClcbiAgICAgIC5jYXRjaCgoZXJyb3I6IEF4aW9zRXJyb3IpID0+IGFsZXJ0KGVycm9yKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XG4gICAgICAgIHByb3BzLmZldGNoQWxsVGVzdHMoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtwcm9wcy5faWR9XG4gICAgICBpZD17cHJvcHMuX2lkfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdENhcmR9XG4gICAgICBzdHlsZT17Q2FyZFN0eWxlfVxuICAgID5cbiAgICAgIDxTd2l0Y2ggb25DaGFuZ2U9e2hhbmRsZUFjdGl2ZUNoYW5nZX0gY2hlY2tlZD17aXNUZXN0QWN0aXZlfSAvPlxuICAgICAgey8qIFxuICAgICAgLy8hIE5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gdGltZSB0aGUgc3dpdGNoXG4gICAgICAqL31cbiAgICAgIDxpbWdcbiAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdEljb25DbGlja31cbiAgICAgICAgc3JjPXtlZGl0SWNvbn1cbiAgICAgICAgYWx0PVwiRWRpdCBpY29uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTG9va2luZ0dsYXNzfVxuICAgICAgLz5cbiAgICAgIDxoMSBvbkNsaWNrPXtoYW5kbGVBY3RpdmVDaGFuZ2V9PlRlc3QgdGl0bGUgaW4gcnU6IHtwcm9wcy5uYW1lSW5SdX08L2gxPlxuICAgICAgPGgyPlRlc3QgaWQ6IHtwcm9wcy5faWR9PC9oMj5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUljb25DbGlja30+TWFpbiBxdWVzdGlvbiBvZiB0ZXN0PC9zcGFuPlxuICAgICAgPHNwYW4+4pChPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestCard.tsx\n");

/***/ })

})