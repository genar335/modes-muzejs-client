webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/LangBtnController.tsx":
/*!******************************************!*\
  !*** ./components/LangBtnController.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LanguageBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageBtn */ \"./components/LanguageBtn.tsx\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LangBtnController.module.scss */ \"./components/styles/LangBtnController.module.scss\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/LangBtnController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LangBtnController = function LangBtnController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      flatBtns = _useState[0],\n      setFlatBtns = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      activeBtnPosition = _useState2[0],\n      setActiveBtnPosition = _useState2[1];\n\n  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(function () {\n    return {};\n  }, {})[1]; // * Creates an array with values corresponding to parsed buttons activated value.\n  // * Happens on first render\n\n  if (flatBtns.length !== props.BtnArray.length) {\n    var tmp = props.BtnArray.map(function (btn) {\n      if (btn === props.active) {\n        return true;\n      } else {\n        return false;\n      }\n    });\n    setActiveBtnPosition(tmp.indexOf(true));\n    setFlatBtns(tmp);\n  }\n\n  var activeBtnPositionSetter = function activeBtnPositionSetter(id) {\n    setFlatBtns(flatBtns.map(function (btn, index) {\n      return index === id ? btn = true : btn = false;\n    }));\n    setActiveBtnPosition(id);\n    forceUpdate();\n  };\n\n  function activeBtnSwitcher() {\n    var tmp = flatBtns;\n    tmp.unshift(tmp[tmp.length - 1]);\n    tmp.pop(); // tmp.pop();\n    // if (tmp.indexOf(true) === tmp.length || tmp.indexOf(true) === -1) {\n    //   tmp.unshift(true);\n    // } else {\n    //   tmp.unshift(false);\n    // }\n\n    setFlatBtns(tmp);\n    activeBtnPositionSetter(flatBtns.indexOf(true));\n    props.langSelector(props.BtnArray[flatBtns.indexOf(true)]);\n    forceUpdate();\n  } // * Grabbing arrow in the modal which selects next element.\n  // * Assings a click listener to the grabbed element.\n\n\n  var arrowBtn;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _arrowBtn, _arrowBtn2, _arrowBtn3;\n\n    arrowBtn = document.getElementById(\"arrowButton\");\n    console.log((_arrowBtn = arrowBtn) === null || _arrowBtn === void 0 ? void 0 : _arrowBtn.firstChild.id);\n    !((_arrowBtn2 = arrowBtn) === null || _arrowBtn2 === void 0 ? void 0 : _arrowBtn2.firstChild.id) == \"saveBtn\" ? (_arrowBtn3 = arrowBtn) === null || _arrowBtn3 === void 0 ? void 0 : _arrowBtn3.addEventListener(\"click\", handleArrowClick) : console.log(\"test\");\n    return function () {\n      var _arrowBtn4;\n\n      return (_arrowBtn4 = arrowBtn) === null || _arrowBtn4 === void 0 ? void 0 : _arrowBtn4.removeEventListener(\"click\", handleArrowClick);\n    };\n  });\n\n  var handleArrowClick = function handleArrowClick() {\n    activeBtnSwitcher();\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, props.BtnArray.map(function (button, key) {\n    return __jsx(_LanguageBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      btnID: button,\n      btnText: button.toUpperCase(),\n      key: key,\n      langSelect: props.langSelector,\n      inputEnabler: props.inputEnabler,\n      setActiveBtn: activeBtnPositionSetter,\n      pressed: flatBtns[key],\n      accessKey: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_s(LangBtnController, \"eLg3zwL2hy7smFPBDGSw1UOcGlg=\");\n\n_c = LangBtnController;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangBtnController);\n\nvar _c;\n\n$RefreshReg$(_c, \"LangBtnController\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5nQnRuQ29udHJvbGxlci50c3g/MDBmZiJdLCJuYW1lcyI6WyJMYW5nQnRuQ29udHJvbGxlciIsInByb3BzIiwidXNlU3RhdGUiLCJmbGF0QnRucyIsInNldEZsYXRCdG5zIiwiYWN0aXZlQnRuUG9zaXRpb24iLCJzZXRBY3RpdmVCdG5Qb3NpdGlvbiIsImZvcmNlVXBkYXRlIiwiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwibGVuZ3RoIiwiQnRuQXJyYXkiLCJ0bXAiLCJtYXAiLCJidG4iLCJhY3RpdmUiLCJpbmRleE9mIiwiYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIiLCJpZCIsImluZGV4IiwiYWN0aXZlQnRuU3dpdGNoZXIiLCJ1bnNoaWZ0IiwicG9wIiwibGFuZ1NlbGVjdG9yIiwiYXJyb3dCdG4iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpcnN0Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQXJyb3dDbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wU3R5bGUiLCJMYW5nU2VsZWN0IiwiYnV0dG9uIiwia2V5IiwidG9VcHBlckNhc2UiLCJpbnB1dEVuYWJsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQVdwQjtBQUFBOztBQUFBLGtCQUM0QkMsc0RBQVEsQ0FBaUIsRUFBakIsQ0FEcEM7QUFBQSxNQUNHQyxRQURIO0FBQUEsTUFDYUMsV0FEYjs7QUFBQSxtQkFFOENGLHNEQUFRLEVBRnREO0FBQUEsTUFFR0csaUJBRkg7QUFBQSxNQUVzQkMsb0JBRnRCOztBQUlKLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQjtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBQWpCLEVBQTZCLEVB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WUFKcEI7QUFLRSxrQkFBWSxFQUFFdEIsS0FBSyxDQUFDc0MsWUFMdEI7QUFNRSxrQkFBWSxFQUFFdEIsdUJBTmhCO0FBT0UsYUFBTyxFQUFFZCxRQUFRLENBQUNrQyxHQUFELENBUG5CO0FBUUUsZUFBUyxFQUFFQSxHQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEa0I7QUFBQSxHQUFuQixDQURILENBREY7QUFnQkQsQ0ExRkQ7O0dBQU1yQyxpQjs7S0FBQUEsaUI7QUE0RlNBLGdGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYW5nQnRuQ29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCBMYW5ndWFnZUJ0biBmcm9tIFwiLi9MYW5ndWFnZUJ0blwiO1xuaW1wb3J0IGNvbXBTdHlsZSBmcm9tIFwiLi9zdHlsZXMvTGFuZ0J0bkNvbnRyb2xsZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTGFuZ0J0bkNvbnRyb2xsZXIgPSAocHJvcHM6IHtcbiAgLyoqXG4gICAqIEBCdG5BcnJheSBhcnJheSBjb250YWlubmcgYnV0dG9uIG5hbWVzXG4gICAqL1xuICBCdG5BcnJheTogQXJyYXk8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBhY3RpdmUgRGV0ZXJtaW5lcyB3aGljaCBidXR0b24gd2lsbCBhcHBlYXIgaGlnaGxpZ2h0ZWQgaW4gdGhlIGJlZ2lubmluZy5cbiAgICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuICBsYW5nU2VsZWN0b3I6IChjaG9vc2VMYW5ndWFnZTogVExhbmdPcHRpb25bXCJ2YWx1ZVwiXSkgPT4gdm9pZDtcbiAgaW5wdXRFbmFibGVyOiAoYm9vbDogYm9vbGVhbikgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgW2ZsYXRCdG5zLCBzZXRGbGF0QnRuc10gPSB1c2VTdGF0ZTxBcnJheTxib29sZWFuPj4oW10pO1xuICBjb25zdCBbYWN0aXZlQnRuUG9zaXRpb24sIHNldEFjdGl2ZUJ0blBvc2l0aW9uXSA9IHVzZVN0YXRlPE51bWJlcj4oKTtcblxuICBjb25zdCBmb3JjZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZHVjZXIoKCkgPT4gKHt9KSwge30pWzFdIGFzICgpID0+IHZvaWQ7XG5cbiAgLy8gKiBDcmVhdGVzIGFuIGFycmF5IHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gcGFyc2VkIGJ1dHRvbnMgYWN0aXZhdGVkIHZhbHVlLlxuICAvLyAqIEhhcHBlbnMgb24gZmlyc3QgcmVuZGVyXG4gIGlmIChmbGF0QnRucy5sZW5ndGggIT09IHByb3BzLkJ0bkFycmF5Lmxlbmd0aCkge1xuICAgIGNvbnN0IHRtcDogYm9vbGVhbltdID0gcHJvcHMuQnRuQXJyYXkubWFwKChidG46IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGJ0biA9PT0gcHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEFjdGl2ZUJ0blBvc2l0aW9uKHRtcC5pbmRleE9mKHRydWUpKTtcbiAgICBzZXRGbGF0QnRucyh0bXApO1xuICB9XG5cbiAgY29uc3QgYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldEZsYXRCdG5zKFxuICAgICAgZmxhdEJ0bnMubWFwKChidG4sIGluZGV4KSA9PlxuICAgICAgICBpbmRleCA9PT0gaWQgPyAoYnRuID0gdHJ1ZSkgOiAoYnRuID0gZmFsc2UpXG4gICAgICApXG4gICAgKTtcbiAgICBzZXRBY3RpdmVCdG5Qb3NpdGlvbihpZCk7XG4gICAgZm9yY2VVcGRhdGUoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhY3RpdmVCdG5Td2l0Y2hlcigpIHtcbiAgICBsZXQgdG1wID0gZmxhdEJ0bnM7XG4gICAgdG1wLnVuc2hpZnQodG1wW3RtcC5sZW5ndGggLSAxXSk7XG4gICAgdG1wLnBvcCgpO1xuICAgIC8vIHRtcC5wb3AoKTtcbiAgICAvLyBpZiAodG1wLmluZGV4T2YodHJ1ZSkgPT09IHRtcC5sZW5ndGggfHwgdG1wLmluZGV4T2YodHJ1ZSkgPT09IC0xKSB7XG4gICAgLy8gICB0bXAudW5zaGlmdCh0cnVlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdG1wLnVuc2hpZnQoZmFsc2UpO1xuICAgIC8vIH1cbiAgICBzZXRGbGF0QnRucyh0bXApO1xuICAgIGFjdGl2ZUJ0blBvc2l0aW9uU2V0dGVyKGZsYXRCdG5zLmluZGV4T2YodHJ1ZSkpO1xuICAgIHByb3BzLmxhbmdTZWxlY3RvcihcbiAgICAgIHByb3BzLkJ0bkFycmF5W2ZsYXRCdG5zLmluZGV4T2YodHJ1ZSldIGFzIFRMYW5nT3B0aW9uW1widmFsdWVcIl1cbiAgICApO1xuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICAvLyAqIEdyYWJiaW5nIGFycm93IGluIHRoZSBtb2RhbCB3aGljaCBzZWxlY3RzIG5leHQgZWxlbWVudC5cbiAgLy8gKiBBc3NpbmdzIGEgY2xpY2sgbGlzdGVuZXIgdG8gdGhlIGdyYWJiZWQgZWxlbWVudC5cbiAgbGV0IGFycm93QnRuOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXJyb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFycm93QnV0dG9uXCIpO1xuICAgIGNvbnNvbGUubG9nKGFycm93QnRuPy5maXJzdENoaWxkLmlkKTtcbiAgICAhYXJyb3dCdG4/LmZpcnN0Q2hpbGQuaWQgPT0gXCJzYXZlQnRuXCJcbiAgICAgID8gYXJyb3dCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBcnJvd0NsaWNrKVxuICAgICAgOiBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgcmV0dXJuICgpID0+IGFycm93QnRuPy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQXJyb3dDbGljayk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUFycm93Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgYWN0aXZlQnRuU3dpdGNoZXIoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlLkxhbmdTZWxlY3R9PlxuICAgICAge3Byb3BzLkJ0bkFycmF5Lm1hcCgoYnV0dG9uOiBzdHJpbmcsIGtleTogbnVtYmVyKSA9PiAoXG4gICAgICAgIDxMYW5ndWFnZUJ0blxuICAgICAgICAgIGJ0bklEPXtidXR0b259XG4gICAgICAgICAgYnRuVGV4dD17YnV0dG9uLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgbGFuZ1NlbGVjdD17cHJvcHMubGFuZ1NlbGVjdG9yfVxuICAgICAgICAgIGlucHV0RW5hYmxlcj17cHJvcHMuaW5wdXRFbmFibGVyfVxuICAgICAgICAgIHNldEFjdGl2ZUJ0bj17YWN0aXZlQnRuUG9zaXRpb25TZXR0ZXJ9XG4gICAgICAgICAgcHJlc3NlZD17ZmxhdEJ0bnNba2V5XX1cbiAgICAgICAgICBhY2Nlc3NLZXk9e2tleX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ0J0bkNvbnRyb2xsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LangBtnController.tsx\n");

/***/ })

})