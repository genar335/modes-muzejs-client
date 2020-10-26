webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/LangBtnController.tsx":
/*!******************************************!*\
  !*** ./components/LangBtnController.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LanguageBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageBtn */ \"./components/LanguageBtn.tsx\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LangBtnController.module.scss */ \"./components/styles/LangBtnController.module.scss\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/LangBtnController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LangBtnController = function LangBtnController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      flatBtns = _useState[0],\n      setFlatBtns = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      activeBtnPosition = _useState2[0],\n      setActiveBtnPosition = _useState2[1];\n\n  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(function () {\n    return {};\n  }, {})[1]; // * Creates an array with values corresponding to parsed buttons activated value.\n  // * Happens on first render\n\n  if (flatBtns.length !== props.BtnArray.length) {\n    var tmp = props.BtnArray.map(function (btn) {\n      if (btn === props.active) {\n        return true;\n      } else {\n        return false;\n      }\n    });\n    setActiveBtnPosition(tmp.indexOf(true));\n    setFlatBtns(tmp);\n  }\n\n  var activeBtnPositionSetter = function activeBtnPositionSetter(id) {\n    setFlatBtns(flatBtns.map(function (btn, index) {\n      return index === id ? btn = true : btn = false;\n    }));\n    setActiveBtnPosition(id);\n    forceUpdate();\n  };\n\n  function activeBtnSwitcher() {\n    var tmp = flatBtns;\n    tmp.unshift(tmp[tmp.length - 1]);\n    tmp.pop(); // tmp.pop();\n    // if (tmp.indexOf(true) === tmp.length || tmp.indexOf(true) === -1) {\n    //   tmp.unshift(true);\n    // } else {\n    //   tmp.unshift(false);\n    // }\n\n    setFlatBtns(tmp);\n    activeBtnPositionSetter(flatBtns.indexOf(true));\n    props.langSelector(props.BtnArray[flatBtns.indexOf(true)]);\n    forceUpdate();\n  } // * Grabbing arrow in the modal which selects next element.\n  // * Assings a click listener to the grabbed element.\n\n\n  var arrowBtn;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _arrowBtn;\n\n    arrowBtn = document.getElementById(\"arrowButton\");\n    (_arrowBtn = arrowBtn) === null || _arrowBtn === void 0 ? void 0 : _arrowBtn.firstChild.addEventListener(\"click\", handleArrowClick);\n    return function () {\n      var _arrowBtn2;\n\n      return (_arrowBtn2 = arrowBtn) === null || _arrowBtn2 === void 0 ? void 0 : _arrowBtn2.removeEventListener(\"click\", handleArrowClick);\n    };\n  });\n\n  var handleArrowClick = function handleArrowClick() {\n    activeBtnSwitcher();\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, props.BtnArray.map(function (button, key) {\n    return __jsx(_LanguageBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      btnID: button,\n      btnText: button.toUpperCase(),\n      key: key,\n      langSelect: props.langSelector,\n      inputEnabler: props.inputEnabler,\n      setActiveBtn: activeBtnPositionSetter,\n      pressed: flatBtns[key],\n      accessKey: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_s(LangBtnController, \"eLg3zwL2hy7smFPBDGSw1UOcGlg=\");\n\n_c = LangBtnController;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangBtnController);\n\nvar _c;\n\n$RefreshReg$(_c, \"LangBtnController\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5nQnRuQ29udHJvbGxlci50c3g/MDBmZiJdLCJuYW1lcyI6WyJMYW5nQnRuQ29udHJvbGxlciIsInByb3BzIiwidXNlU3RhdGUiLCJmbGF0QnRucyIsInNldEZsYXRCdG5zIiwiYWN0aXZlQnRuUG9zaXRpb24iLCJzZXRBY3RpdmVCdG5Qb3NpdGlvbiIsImZvcmNlVXBkYXRlIiwiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwibGVuZ3RoIiwiQnRuQXJyYXkiLCJ0bXAiLCJtYXAiLCJidG4iLCJhY3RpdmUiLCJpbmRleE9mIiwiYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIiLCJpZCIsImluZGV4IiwiYWN0aXZlQnRuU3dpdGNoZXIiLCJ1bnNoaWZ0IiwicG9wIiwibGFuZ1NlbGVjdG9yIiwiYXJyb3dCdG4iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlyc3RDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVBcnJvd0NsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXBTdHlsZSIsIkxhbmdTZWxlY3QiLCJidXR0b24iLCJrZXkiLCJ0b1VwcGVyQ2FzZSIsImlucHV0RW5hYmxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBV3BCO0FBQUE7O0FBQUEsa0JBQzRCQyxzREFBUSxDQUFpQixFQUFqQixDQURwQztBQUFBLE1BQ0dDLFFBREg7QUFBQSxNQUNhQyxXQURiOztBQUFBLG1CQUU4Q0Ysc0RBQVEsRUFGdEQ7QUFBQSxNQUVHRyxpQkFGSDtBQUFBLE1BRXNCQyxvQkFGdEI7O0FBSUosTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FBakIsRUFBNkIsRUFBN0IsRUFBaUMsQ0FBakMs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TUFEa0I7QUFBQSxHQUFuQixDQURILENBREY7QUFnQkQsQ0F2RkQ7O0dBQU1uQyxpQjs7S0FBQUEsaUI7QUF5RlNBLGdGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYW5nQnRuQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBMYW5ndWFnZUJ0biBmcm9tIFwiLi9MYW5ndWFnZUJ0blwiO1xuaW1wb3J0IGNvbXBTdHlsZSBmcm9tIFwiLi9zdHlsZXMvTGFuZ0J0bkNvbnRyb2xsZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTGFuZ0J0bkNvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgLyoqXG4gICAqIEBCdG5BcnJheSBhcnJheSBjb250YWlubmcgYnV0dG9uIG5hbWVzXG4gICAqL1xuICBCdG5BcnJheTogQXJyYXk8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBhY3RpdmUgRGV0ZXJtaW5lcyB3aGljaCBidXR0b24gd2lsbCBhcHBlYXIgaGlnaGxpZ2h0ZWQgaW4gdGhlIGJlZ2lubmluZy5cbiAgICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuICBsYW5nU2VsZWN0b3I6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoYm9vbDogYm9vbGVhbikgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgW2ZsYXRCdG5zLCBzZXRGbGF0QnRuc10gPSB1c2VTdGF0ZTxBcnJheTxib29sZWFuPj4oW10pO1xuICBjb25zdCBbYWN0aXZlQnRuUG9zaXRpb24sIHNldEFjdGl2ZUJ0blBvc2l0aW9uXSA9IHVzZVN0YXRlPE51bWJlcj4oKTtcblxuICBjb25zdCBmb3JjZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZHVjZXIoKCkgPT4gKHt9KSwge30pWzFdIGFzICgpID0+IHZvaWQ7XG5cbiAgLy8gKiBDcmVhdGVzIGFuIGFycmF5IHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gcGFyc2VkIGJ1dHRvbnMgYWN0aXZhdGVkIHZhbHVlLlxuICAvLyAqIEhhcHBlbnMgb24gZmlyc3QgcmVuZGVyXG4gIGlmIChmbGF0QnRucy5sZW5ndGggIT09IHByb3BzLkJ0bkFycmF5Lmxlbmd0aCkge1xuICAgIGNvbnN0IHRtcDogYm9vbGVhbltdID0gcHJvcHMuQnRuQXJyYXkubWFwKChidG46IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGJ0biA9PT0gcHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEFjdGl2ZUJ0blBvc2l0aW9uKHRtcC5pbmRleE9mKHRydWUpKTtcbiAgICBzZXRGbGF0QnRucyh0bXApO1xuICB9XG5cbiAgY29uc3QgYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEZsYXRCdG5zKFxuICAgICAgZmxhdEJ0bnMubWFwKChidG4sIGluZGV4KSA9PlxuICAgICAgICBpbmRleCA9PT0gaWQgPyAoYnRuID0gdHJ1ZSkgOiAoYnRuID0gZmFsc2UpXG4gICAgICApXG4gICAgKTtcbiAgICBzZXRBY3RpdmVCdG5Qb3NpdGlvbihpZCk7XG4gICAgZm9yY2VVcGRhdGUoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhY3RpdmVCdG5Td2l0Y2hlcigpIHtcbiAgICBsZXQgdG1wID0gZmxhdEJ0bnM7XG4gICAgdG1wLnVuc2hpZnQodG1wW3RtcC5sZW5ndGggLSAxXSk7XG4gICAgdG1wLnBvcCgpO1xuICAgIC8vIHRtcC5wb3AoKTtcbiAgICAvLyBpZiAodG1wLmluZGV4T2YodHJ1ZSkgPT09IHRtcC5sZW5ndGggfHwgdG1wLmluZGV4T2YodHJ1ZSkgPT09IC0xKSB7XG4gICAgLy8gICB0bXAudW5zaGlmdCh0cnVlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdG1wLnVuc2hpZnQoZmFsc2UpO1xuICAgIC8vIH1cbiAgICBzZXRGbGF0QnRucyh0bXApO1xuICAgIGFjdGl2ZUJ0blBvc2l0aW9uU2V0dGVyKGZsYXRCdG5zLmluZGV4T2YodHJ1ZSkpO1xuICAgIHByb3BzLmxhbmdTZWxlY3RvcihcbiAgICAgIHByb3BzLkJ0bkFycmF5W2ZsYXRCdG5zLmluZGV4T2YodHJ1ZSldIGFzIFRMYW5nT3B0aW9uW1widmFsdWVcIl1cbiAgICApO1xuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICAvLyAqIEdyYWJiaW5nIGFycm93IGluIHRoZSBtb2RhbCB3aGljaCBzZWxlY3RzIG5leHQgZWxlbWVudC5cbiAgLy8gKiBBc3NpbmdzIGEgY2xpY2sgbGlzdGVuZXIgdG8gdGhlIGdyYWJiZWQgZWxlbWVudC5cbiAgbGV0IGFycm93QnRuOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXJyb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFycm93QnV0dG9uXCIpO1xuICAgIGFycm93QnRuPy5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBcnJvd0NsaWNrKTtcbiAgICByZXR1cm4gKCkgPT4gYXJyb3dCdG4/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBcnJvd0NsaWNrKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQXJyb3dDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBhY3RpdmVCdG5Td2l0Y2hlcigpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuTGFuZ1NlbGVjdH0+XG4gICAgICB7cHJvcHMuQnRuQXJyYXkubWFwKChidXR0b246IHN0cmluZywga2V5OiBudW1iZXIpID0+IChcbiAgICAgICAgPExhbmd1YWdlQnRuXG4gICAgICAgICAgYnRuSUQ9e2J1dHRvbn1cbiAgICAgICAgICBidG5UZXh0PXtidXR0b24udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICBsYW5nU2VsZWN0PXtwcm9wcy5sYW5nU2VsZWN0b3J9XG4gICAgICAgICAgaW5wdXRFbmFibGVyPXtwcm9wcy5pbnB1dEVuYWJsZXJ9XG4gICAgICAgICAgc2V0QWN0aXZlQnRuPXthY3RpdmVCdG5Qb3NpdGlvblNldHRlcn1cbiAgICAgICAgICBwcmVzc2VkPXtmbGF0QnRuc1trZXldfVxuICAgICAgICAgIGFjY2Vzc0tleT17a2V5fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5nQnRuQ29udHJvbGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LangBtnController.tsx\n");

/***/ })

})