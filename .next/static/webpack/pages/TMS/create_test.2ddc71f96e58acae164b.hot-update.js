webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/LangBtnController.tsx":
/*!******************************************!*\
  !*** ./components/LangBtnController.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LanguageBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageBtn */ \"./components/LanguageBtn.tsx\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LangBtnController.module.scss */ \"./components/styles/LangBtnController.module.scss\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/LangBtnController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LangBtnController = function LangBtnController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      flatBtns = _useState[0],\n      setFlatBtns = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      activeBtnPosition = _useState2[0],\n      setActiveBtnPosition = _useState2[1];\n\n  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(function () {\n    return {};\n  }, {})[1]; // * Creates an array with values corresponding to parsed buttons activated value.\n  // * Happens on first render\n\n  if (flatBtns.length !== props.BtnArray.length) {\n    var tmp = props.BtnArray.map(function (btn) {\n      if (btn === props.active) {\n        return true;\n      } else {\n        return false;\n      }\n    });\n    setActiveBtnPosition(tmp.indexOf(true));\n    setFlatBtns(tmp);\n  }\n\n  var activeBtnPositionSetter = function activeBtnPositionSetter(id) {\n    setFlatBtns(flatBtns.map(function (btn, index) {\n      return index === id ? btn = true : btn = false;\n    }));\n    setActiveBtnPosition(id);\n    forceUpdate();\n  };\n\n  function activeBtnSwitcher() {\n    var tmp = flatBtns;\n    tmp.unshift(tmp[tmp.length - 1]);\n    tmp.pop(); // tmp.pop();\n    // if (tmp.indexOf(true) === tmp.length || tmp.indexOf(true) === -1) {\n    //   tmp.unshift(true);\n    // } else {\n    //   tmp.unshift(false);\n    // }\n\n    setFlatBtns(tmp);\n    activeBtnPositionSetter(flatBtns.indexOf(true));\n    props.langSelector(props.BtnArray[flatBtns.indexOf(true)]);\n    forceUpdate();\n  } // * Grabbing arrow in the modal which selects next element.\n  // * Assings a click listener to the grabbed element.\n\n\n  var arrowBtn;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _arrowBtn, _arrowBtn2, _arrowBtn3;\n\n    arrowBtn = document.getElementById(\"arrowButton\");\n    console.log((_arrowBtn = arrowBtn) === null || _arrowBtn === void 0 ? void 0 : _arrowBtn.firstChild.tagName);\n    ((_arrowBtn2 = arrowBtn) === null || _arrowBtn2 === void 0 ? void 0 : _arrowBtn2.firstChild.tagName) == \"svg\" ? (_arrowBtn3 = arrowBtn) === null || _arrowBtn3 === void 0 ? void 0 : _arrowBtn3.addEventListener(\"click\", handleArrowClick) : null;\n    return function () {\n      var _arrowBtn4;\n\n      return (_arrowBtn4 = arrowBtn) === null || _arrowBtn4 === void 0 ? void 0 : _arrowBtn4.removeEventListener(\"click\", handleArrowClick);\n    };\n  });\n\n  var handleArrowClick = function handleArrowClick() {\n    activeBtnSwitcher();\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, props.BtnArray.map(function (button, key) {\n    return __jsx(_LanguageBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      btnID: button,\n      btnText: button.toUpperCase(),\n      key: key,\n      langSelect: props.langSelector,\n      inputEnabler: props.inputEnabler,\n      setActiveBtn: activeBtnPositionSetter,\n      pressed: flatBtns[key],\n      accessKey: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_s(LangBtnController, \"eLg3zwL2hy7smFPBDGSw1UOcGlg=\");\n\n_c = LangBtnController;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangBtnController);\n\nvar _c;\n\n$RefreshReg$(_c, \"LangBtnController\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5nQnRuQ29udHJvbGxlci50c3g/MDBmZiJdLCJuYW1lcyI6WyJMYW5nQnRuQ29udHJvbGxlciIsInByb3BzIiwidXNlU3RhdGUiLCJmbGF0QnRucyIsInNldEZsYXRCdG5zIiwiYWN0aXZlQnRuUG9zaXRpb24iLCJzZXRBY3RpdmVCdG5Qb3NpdGlvbiIsImZvcmNlVXBkYXRlIiwiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwibGVuZ3RoIiwiQnRuQXJyYXkiLCJ0bXAiLCJtYXAiLCJidG4iLCJhY3RpdmUiLCJpbmRleE9mIiwiYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIiLCJpZCIsImluZGV4IiwiYWN0aXZlQnRuU3dpdGNoZXIiLCJ1bnNoaWZ0IiwicG9wIiwibGFuZ1NlbGVjdG9yIiwiYXJyb3dCdG4iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpcnN0Q2hpbGQiLCJ0YWdOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUFycm93Q2xpY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29tcFN0eWxlIiwiTGFuZ1NlbGVjdCIsImJ1dHRvbiIsImtleSIsInRvVXBwZXJDYXNlIiwiaW5wdXRFbmFibGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFXcEI7QUFBQTs7QUFBQSxrQkFDNEJDLHNEQUFRLENBQWlCLEVBQWpCLENBRHBDO0FBQUEsTUFDR0MsUUFESDtBQUFBLE1BQ2FDLFdBRGI7O0FBQUEsbUJBRThDRixzREFBUSxFQUZ0RDtBQUFBLE1BRUdHLGlCQUZIO0FBQUEsTUFFc0JDLG9CQUZ0Qjs7QUFJSixNQUFNQyxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUI7QUFBQSxXQUFPLEVBQVA7QUFBQSxHQUFq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RUFBRXRCLEtBQUssQ0FBQ3VDLFlBTHRCO0FBTUUsa0JBQVksRUFBRXZCLHVCQU5oQjtBQU9FLGFBQU8sRUFBRWQsUUFBUSxDQUFDbUMsR0FBRCxDQVBuQjtBQVFFLGVBQVMsRUFBRUEsR0FSYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtCO0FBQUEsR0FBbkIsQ0FESCxDQURGO0FBZ0JELENBMUZEOztHQUFNdEMsaUI7O0tBQUFBLGlCO0FBNEZTQSxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGFuZ0J0bkNvbnRyb2xsZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgTGFuZ3VhZ2VCdG4gZnJvbSBcIi4vTGFuZ3VhZ2VCdG5cIjtcbmltcG9ydCBjb21wU3R5bGUgZnJvbSBcIi4vc3R5bGVzL0xhbmdCdG5Db250cm9sbGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IExhbmdCdG5Db250cm9sbGVyID0gKHByb3BzOiB7XG4gIC8qKlxuICAgKiBAQnRuQXJyYXkgYXJyYXkgY29udGFpbm5nIGJ1dHRvbiBuYW1lc1xuICAgKi9cbiAgQnRuQXJyYXk6IEFycmF5PHN0cmluZz47XG4gIC8qKlxuICAgKiBAYWN0aXZlIERldGVybWluZXMgd2hpY2ggYnV0dG9uIHdpbGwgYXBwZWFyIGhpZ2hsaWdodGVkIGluIHRoZSBiZWdpbm5pbmcuXG4gICAqL1xuICBhY3RpdmU6IHN0cmluZztcbiAgbGFuZ1NlbGVjdG9yOiAoY2hvb3NlTGFuZ3VhZ2U6IFRMYW5nT3B0aW9uW1widmFsdWVcIl0pID0+IHZvaWQ7XG4gIGlucHV0RW5hYmxlcjogKGJvb2w6IGJvb2xlYW4pID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IFtmbGF0QnRucywgc2V0RmxhdEJ0bnNdID0gdXNlU3RhdGU8QXJyYXk8Ym9vbGVhbj4+KFtdKTtcbiAgY29uc3QgW2FjdGl2ZUJ0blBvc2l0aW9uLCBzZXRBY3RpdmVCdG5Qb3NpdGlvbl0gPSB1c2VTdGF0ZTxOdW1iZXI+KCk7XG5cbiAgY29uc3QgZm9yY2VVcGRhdGUgPSBSZWFjdC51c2VSZWR1Y2VyKCgpID0+ICh7fSksIHt9KVsxXSBhcyAoKSA9PiB2b2lkO1xuXG4gIC8vICogQ3JlYXRlcyBhbiBhcnJheSB3aXRoIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHBhcnNlZCBidXR0b25zIGFjdGl2YXRlZCB2YWx1ZS5cbiAgLy8gKiBIYXBwZW5zIG9uIGZpcnN0IHJlbmRlclxuICBpZiAoZmxhdEJ0bnMubGVuZ3RoICE9PSBwcm9wcy5CdG5BcnJheS5sZW5ndGgpIHtcbiAgICBjb25zdCB0bXA6IGJvb2xlYW5bXSA9IHByb3BzLkJ0bkFycmF5Lm1hcCgoYnRuOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChidG4gPT09IHByb3BzLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBY3RpdmVCdG5Qb3NpdGlvbih0bXAuaW5kZXhPZih0cnVlKSk7XG4gICAgc2V0RmxhdEJ0bnModG1wKTtcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZUJ0blBvc2l0aW9uU2V0dGVyID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRGbGF0QnRucyhcbiAgICAgIGZsYXRCdG5zLm1hcCgoYnRuLCBpbmRleCkgPT5cbiAgICAgICAgaW5kZXggPT09IGlkID8gKGJ0biA9IHRydWUpIDogKGJ0biA9IGZhbHNlKVxuICAgICAgKVxuICAgICk7XG4gICAgc2V0QWN0aXZlQnRuUG9zaXRpb24oaWQpO1xuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWN0aXZlQnRuU3dpdGNoZXIoKSB7XG4gICAgbGV0IHRtcCA9IGZsYXRCdG5zO1xuICAgIHRtcC51bnNoaWZ0KHRtcFt0bXAubGVuZ3RoIC0gMV0pO1xuICAgIHRtcC5wb3AoKTtcbiAgICAvLyB0bXAucG9wKCk7XG4gICAgLy8gaWYgKHRtcC5pbmRleE9mKHRydWUpID09PSB0bXAubGVuZ3RoIHx8IHRtcC5pbmRleE9mKHRydWUpID09PSAtMSkge1xuICAgIC8vICAgdG1wLnVuc2hpZnQodHJ1ZSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRtcC51bnNoaWZ0KGZhbHNlKTtcbiAgICAvLyB9XG4gICAgc2V0RmxhdEJ0bnModG1wKTtcbiAgICBhY3RpdmVCdG5Qb3NpdGlvblNldHRlcihmbGF0QnRucy5pbmRleE9mKHRydWUpKTtcbiAgICBwcm9wcy5sYW5nU2VsZWN0b3IoXG4gICAgICBwcm9wcy5CdG5BcnJheVtmbGF0QnRucy5pbmRleE9mKHRydWUpXSBhcyBUTGFuZ09wdGlvbltcInZhbHVlXCJdXG4gICAgKTtcbiAgICBmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgLy8gKiBHcmFiYmluZyBhcnJvdyBpbiB0aGUgbW9kYWwgd2hpY2ggc2VsZWN0cyBuZXh0IGVsZW1lbnQuXG4gIC8vICogQXNzaW5ncyBhIGNsaWNrIGxpc3RlbmVyIHRvIHRoZSBncmFiYmVkIGVsZW1lbnQuXG4gIGxldCBhcnJvd0J0bjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFycm93QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcnJvd0J1dHRvblwiKTtcbiAgICBjb25zb2xlLmxvZyhhcnJvd0J0bj8uZmlyc3RDaGlsZC50YWdOYW1lKTtcbiAgICBhcnJvd0J0bj8uZmlyc3RDaGlsZC50YWdOYW1lID09IFwic3ZnXCJcbiAgICAgID8gYXJyb3dCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBcnJvd0NsaWNrKVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiAoKSA9PiBhcnJvd0J0bj8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUFycm93Q2xpY2spO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVBcnJvd0NsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIGFjdGl2ZUJ0blN3aXRjaGVyKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZS5MYW5nU2VsZWN0fT5cbiAgICAgIHtwcm9wcy5CdG5BcnJheS5tYXAoKGJ1dHRvbjogc3RyaW5nLCBrZXk6IG51bWJlcikgPT4gKFxuICAgICAgICA8TGFuZ3VhZ2VCdG5cbiAgICAgICAgICBidG5JRD17YnV0dG9ufVxuICAgICAgICAgIGJ0blRleHQ9e2J1dHRvbi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIGxhbmdTZWxlY3Q9e3Byb3BzLmxhbmdTZWxlY3Rvcn1cbiAgICAgICAgICBpbnB1dEVuYWJsZXI9e3Byb3BzLmlucHV0RW5hYmxlcn1cbiAgICAgICAgICBzZXRBY3RpdmVCdG49e2FjdGl2ZUJ0blBvc2l0aW9uU2V0dGVyfVxuICAgICAgICAgIHByZXNzZWQ9e2ZsYXRCdG5zW2tleV19XG4gICAgICAgICAgYWNjZXNzS2V5PXtrZXl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmdCdG5Db250cm9sbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LangBtnController.tsx\n");

/***/ })

})