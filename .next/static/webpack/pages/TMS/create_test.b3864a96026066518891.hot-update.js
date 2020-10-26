webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/LangBtnController.tsx":
/*!******************************************!*\
  !*** ./components/LangBtnController.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LanguageBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageBtn */ \"./components/LanguageBtn.tsx\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LangBtnController.module.scss */ \"./components/styles/LangBtnController.module.scss\");\n/* harmony import */ var _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/LangBtnController.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LangBtnController = function LangBtnController(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      flatBtns = _useState[0],\n      setFlatBtns = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      activeBtnPosition = _useState2[0],\n      setActiveBtnPosition = _useState2[1];\n\n  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(function () {\n    return {};\n  }, {})[1]; // * Creates an array with values corresponding to parsed buttons activated value.\n  // * Happens on first render\n\n  if (flatBtns.length !== props.BtnArray.length) {\n    var tmp = props.BtnArray.map(function (btn) {\n      if (btn === props.active) {\n        return true;\n      } else {\n        return false;\n      }\n    });\n    setActiveBtnPosition(tmp.indexOf(true));\n    setFlatBtns(tmp);\n  }\n\n  var activeBtnPositionSetter = function activeBtnPositionSetter(id) {\n    setFlatBtns(flatBtns.map(function (btn, index) {\n      return index === id ? btn = true : btn = false;\n    }));\n    setActiveBtnPosition(id);\n    forceUpdate();\n  };\n\n  function activeBtnSwitcher() {\n    var tmp = flatBtns;\n    tmp.unshift(tmp[tmp.length - 1]);\n    tmp.pop(); // tmp.pop();\n    // if (tmp.indexOf(true) === tmp.length || tmp.indexOf(true) === -1) {\n    //   tmp.unshift(true);\n    // } else {\n    //   tmp.unshift(false);\n    // }\n\n    setFlatBtns(tmp);\n    activeBtnPositionSetter(flatBtns.indexOf(true));\n    props.langSelector(props.BtnArray[flatBtns.indexOf(true)]);\n    forceUpdate();\n  } // * Grabbing arrow in the modal which selects next element.\n  // * Assings a click listener to the grabbed element.\n\n\n  var arrowBtn;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _arrowBtn, _arrowBtn2;\n\n    arrowBtn = document.getElementById(\"arrowButton\");\n    console.log((_arrowBtn = arrowBtn) === null || _arrowBtn === void 0 ? void 0 : _arrowBtn.firstChild.id);\n\n    if (((_arrowBtn2 = arrowBtn) === null || _arrowBtn2 === void 0 ? void 0 : _arrowBtn2.firstChild.id) == \"arrowBtn\") {\n      var _arrowBtn3;\n\n      (_arrowBtn3 = arrowBtn) === null || _arrowBtn3 === void 0 ? void 0 : _arrowBtn3.addEventListener(\"click\", handleArrowClick);\n    } else {\n      console.log(\"false has happened\");\n      props.isControllerOpen(false); // return undefined;\n    }\n\n    return function () {\n      var _arrowBtn4;\n\n      return (_arrowBtn4 = arrowBtn) === null || _arrowBtn4 === void 0 ? void 0 : _arrowBtn4.removeEventListener(\"click\", handleArrowClick);\n    };\n  });\n\n  var handleArrowClick = function handleArrowClick() {\n    activeBtnSwitcher();\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_LangBtnController_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, props.BtnArray.map(function (button, key) {\n    return __jsx(_LanguageBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      btnID: button,\n      btnText: button.toUpperCase(),\n      key: key,\n      langSelect: props.langSelector,\n      inputEnabler: props.inputEnabler,\n      setActiveBtn: activeBtnPositionSetter,\n      pressed: flatBtns[key],\n      accessKey: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_s(LangBtnController, \"eLg3zwL2hy7smFPBDGSw1UOcGlg=\");\n\n_c = LangBtnController;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangBtnController);\n\nvar _c;\n\n$RefreshReg$(_c, \"LangBtnController\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5nQnRuQ29udHJvbGxlci50c3g/MDBmZiJdLCJuYW1lcyI6WyJMYW5nQnRuQ29udHJvbGxlciIsInByb3BzIiwidXNlU3RhdGUiLCJmbGF0QnRucyIsInNldEZsYXRCdG5zIiwiYWN0aXZlQnRuUG9zaXRpb24iLCJzZXRBY3RpdmVCdG5Qb3NpdGlvbiIsImZvcmNlVXBkYXRlIiwiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwibGVuZ3RoIiwiQnRuQXJyYXkiLCJ0bXAiLCJtYXAiLCJidG4iLCJhY3RpdmUiLCJpbmRleE9mIiwiYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIiLCJpZCIsImluZGV4IiwiYWN0aXZlQnRuU3dpdGNoZXIiLCJ1bnNoaWZ0IiwicG9wIiwibGFuZ1NlbGVjdG9yIiwiYXJyb3dCdG4iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImZpcnN0Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQXJyb3dDbGljayIsImlzQ29udHJvbGxlck9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29tcFN0eWxlIiwiTGFuZ1NlbGVjdCIsImJ1dHRvbiIsImtleSIsInRvVXBwZXJDYXNlIiwiaW5wdXRFbmFibGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFhcEI7QUFBQTs7QUFBQSxrQkFDNEJDLHNEQUFRLENBQWlCLEVBQWpCLENBRHBDO0FBQUEsTUFDR0MsUUFESDtBQUFBLE1BQ2FDLFdBRGI7O0FBQUEsbUJBRThDRixzREFBUSxFQUZ0RDtBQUFBLE1BRUdHLGlCQUZIO0FBQUEsTUFFc0JDLG9CQUZ0Qjs7QUFJSixNQUFNQyxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUI7QUFBQSxXQUFPLEVBQVA7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SyxFQUFFRCxNQURUO0FBRUUsYUFBTyxFQUFFQSxNQUFNLENBQUNFLFdBQVAsRUFGWDtBQUdFLFNBQUcsRUFBRUQsR0FIUDtBQUlFLGdCQUFVLEVBQUVyQyxLQUFLLENBQUNzQixZQUpwQjtBQUtFLGtCQUFZLEVBQUV0QixLQUFLLENBQUN1QyxZQUx0QjtBQU1FLGtCQUFZLEVBQUV2Qix1QkFOaEI7QUFPRSxhQUFPLEVBQUVkLFFBQVEsQ0FBQ21DLEdBQUQsQ0FQbkI7QUFRRSxlQUFTLEVBQUVBLEdBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURrQjtBQUFBLEdBQW5CLENBREgsQ0FERjtBQWdCRCxDQWhHRDs7R0FBTXRDLGlCOztLQUFBQSxpQjtBQWtHU0EsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmdCdG5Db250cm9sbGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUTGFuZ09wdGlvbiB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IExhbmd1YWdlQnRuIGZyb20gXCIuL0xhbmd1YWdlQnRuXCI7XG5pbXBvcnQgY29tcFN0eWxlIGZyb20gXCIuL3N0eWxlcy9MYW5nQnRuQ29udHJvbGxlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMYW5nQnRuQ29udHJvbGxlciA9IChwcm9wczoge1xuICAvKipcbiAgICogQEJ0bkFycmF5IGFycmF5IGNvbnRhaW5uZyBidXR0b24gbmFtZXNcbiAgICovXG4gIEJ0bkFycmF5OiBBcnJheTxzdHJpbmc+O1xuICAvKipcbiAgICogQGFjdGl2ZSBEZXRlcm1pbmVzIHdoaWNoIGJ1dHRvbiB3aWxsIGFwcGVhciBoaWdobGlnaHRlZCBpbiB0aGUgYmVnaW5uaW5nLlxuICAgKi9cbiAgYWN0aXZlOiBzdHJpbmc7XG4gIGxhbmdTZWxlY3RvcjogKGNob29zZUxhbmd1YWdlOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdKSA9PiB2b2lkO1xuICBpbnB1dEVuYWJsZXI6IChib29sOiBib29sZWFuKSA9PiB2b2lkO1xuICBzYXZlTmFtZXM6ICgpID0+IHZvaWQ7XG4gIGlzQ29udHJvbGxlck9wZW46IChib29sOiBib29sZWFuKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBbZmxhdEJ0bnMsIHNldEZsYXRCdG5zXSA9IHVzZVN0YXRlPEFycmF5PGJvb2xlYW4+PihbXSk7XG4gIGNvbnN0IFthY3RpdmVCdG5Qb3NpdGlvbiwgc2V0QWN0aXZlQnRuUG9zaXRpb25dID0gdXNlU3RhdGU8TnVtYmVyPigpO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gUmVhY3QudXNlUmVkdWNlcigoKSA9PiAoe30pLCB7fSlbMV0gYXMgKCkgPT4gdm9pZDtcblxuICAvLyAqIENyZWF0ZXMgYW4gYXJyYXkgd2l0aCB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byBwYXJzZWQgYnV0dG9ucyBhY3RpdmF0ZWQgdmFsdWUuXG4gIC8vICogSGFwcGVucyBvbiBmaXJzdCByZW5kZXJcbiAgaWYgKGZsYXRCdG5zLmxlbmd0aCAhPT0gcHJvcHMuQnRuQXJyYXkubGVuZ3RoKSB7XG4gICAgY29uc3QgdG1wOiBib29sZWFuW10gPSBwcm9wcy5CdG5BcnJheS5tYXAoKGJ0bjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoYnRuID09PSBwcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0QWN0aXZlQnRuUG9zaXRpb24odG1wLmluZGV4T2YodHJ1ZSkpO1xuICAgIHNldEZsYXRCdG5zKHRtcCk7XG4gIH1cblxuICBjb25zdCBhY3RpdmVCdG5Qb3NpdGlvblNldHRlciA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0RmxhdEJ0bnMoXG4gICAgICBmbGF0QnRucy5tYXAoKGJ0biwgaW5kZXgpID0+XG4gICAgICAgIGluZGV4ID09PSBpZCA/IChidG4gPSB0cnVlKSA6IChidG4gPSBmYWxzZSlcbiAgICAgIClcbiAgICApO1xuICAgIHNldEFjdGl2ZUJ0blBvc2l0aW9uKGlkKTtcbiAgICBmb3JjZVVwZGF0ZSgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFjdGl2ZUJ0blN3aXRjaGVyKCkge1xuICAgIGxldCB0bXAgPSBmbGF0QnRucztcbiAgICB0bXAudW5zaGlmdCh0bXBbdG1wLmxlbmd0aCAtIDFdKTtcbiAgICB0bXAucG9wKCk7XG4gICAgLy8gdG1wLnBvcCgpO1xuICAgIC8vIGlmICh0bXAuaW5kZXhPZih0cnVlKSA9PT0gdG1wLmxlbmd0aCB8fCB0bXAuaW5kZXhPZih0cnVlKSA9PT0gLTEpIHtcbiAgICAvLyAgIHRtcC51bnNoaWZ0KHRydWUpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0bXAudW5zaGlmdChmYWxzZSk7XG4gICAgLy8gfVxuICAgIHNldEZsYXRCdG5zKHRtcCk7XG4gICAgYWN0aXZlQnRuUG9zaXRpb25TZXR0ZXIoZmxhdEJ0bnMuaW5kZXhPZih0cnVlKSk7XG4gICAgcHJvcHMubGFuZ1NlbGVjdG9yKFxuICAgICAgcHJvcHMuQnRuQXJyYXlbZmxhdEJ0bnMuaW5kZXhPZih0cnVlKV0gYXMgVExhbmdPcHRpb25bXCJ2YWx1ZVwiXVxuICAgICk7XG4gICAgZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIC8vICogR3JhYmJpbmcgYXJyb3cgaW4gdGhlIG1vZGFsIHdoaWNoIHNlbGVjdHMgbmV4dCBlbGVtZW50LlxuICAvLyAqIEFzc2luZ3MgYSBjbGljayBsaXN0ZW5lciB0byB0aGUgZ3JhYmJlZCBlbGVtZW50LlxuICBsZXQgYXJyb3dCdG46IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJyb3dCdXR0b25cIik7XG4gICAgY29uc29sZS5sb2coYXJyb3dCdG4/LmZpcnN0Q2hpbGQuaWQpO1xuICAgIGlmIChhcnJvd0J0bj8uZmlyc3RDaGlsZC5pZCA9PSBcImFycm93QnRuXCIpIHtcbiAgICAgIGFycm93QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQXJyb3dDbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2UgaGFzIGhhcHBlbmVkXCIpO1xuICAgICAgcHJvcHMuaXNDb250cm9sbGVyT3BlbihmYWxzZSk7XG4gICAgICAvLyByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gYXJyb3dCdG4/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBcnJvd0NsaWNrKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQXJyb3dDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBhY3RpdmVCdG5Td2l0Y2hlcigpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGUuTGFuZ1NlbGVjdH0+XG4gICAgICB7cHJvcHMuQnRuQXJyYXkubWFwKChidXR0b246IHN0cmluZywga2V5OiBudW1iZXIpID0+IChcbiAgICAgICAgPExhbmd1YWdlQnRuXG4gICAgICAgICAgYnRuSUQ9e2J1dHRvbn1cbiAgICAgICAgICBidG5UZXh0PXtidXR0b24udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICBsYW5nU2VsZWN0PXtwcm9wcy5sYW5nU2VsZWN0b3J9XG4gICAgICAgICAgaW5wdXRFbmFibGVyPXtwcm9wcy5pbnB1dEVuYWJsZXJ9XG4gICAgICAgICAgc2V0QWN0aXZlQnRuPXthY3RpdmVCdG5Qb3NpdGlvblNldHRlcn1cbiAgICAgICAgICBwcmVzc2VkPXtmbGF0QnRuc1trZXldfVxuICAgICAgICAgIGFjY2Vzc0tleT17a2V5fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5nQnRuQ29udHJvbGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LangBtnController.tsx\n");

/***/ })

})