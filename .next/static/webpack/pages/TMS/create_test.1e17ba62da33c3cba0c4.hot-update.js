webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isNameEntryEnabled = _useState2[0],\n      setIsNameEntryEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\n  /* <INameInfo> */\n  {\n    ru: \"\",\n    en: \"\",\n    lv: \"\"\n  }),\n      currentNames = _useState4[0],\n      setCurrentNames = _useState4[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n  }, [langButtons]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(currentNames.keys);\n  }, [currentNames]);\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    setIsNameEntryEnabled(false);\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {\n    console.log(btn);\n  };\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    setCurrentNames(_objectSpread(_objectSpread({}, currentNames), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, selectedLang, nameInput)));\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    disabled: isNameEntryEnabled,\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NextLang,\n    type: \"submit\",\n    value: \"->\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"1pIlUKZ2r2NLY88MGwLHs7L8n24=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzTmFtZUVudHJ5RW5hYmxlZCIsInNldElzTmFtZUVudHJ5RW5hYmxlZCIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsInJ1IiwiZW4iLCJsdiIsImN1cnJlbnROYW1lcyIsInNldEN1cnJlbnROYW1lcyIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJrZXlzIiwiaGFuZGxlTGFuZ0J0bkNsaWNrIiwiYnRuIiwiY3VycmVudFRhcmdldCIsImlkIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBTdHlsZXMiLCJCdXR0b25QcmVzc2VkIiwicmVtb3ZlIiwiaGFuZGxlQXJyb3dDbGljayIsImhhbmRsZU5hbWVDaGFuZ2UiLCJuYW1lSW5wdXQiLCJoYW5kbGVOYW1lRW50cnkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIiwiVGVzdE5hbWluZyIsIk1vZGFsQ29udGFpbmVyQkciLCJNb2RhbENvbnRhaW5lciIsIkNsb3NlQlROIiwiTW9kYWwiLCJMYW5nU2VsZWN0IiwiTGFuZ0J1dHRvbiIsIk5hbWVGb3JtIiwiZSIsInZhbHVlIiwiVE5hbWVJbnB1dCIsIk5leHRMYW5nIiwiTW9kYWxPcGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQjtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEtBQUQsQ0FERTtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxTQUR1Qjs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBVSxJQUFWLENBRnRCO0FBQUEsTUFFL0JHLGtCQUYrQjtBQUFBLE1BRVhDLHFCQUZXOztBQUFBLG1CQUdFSixzREFBUSxFQUhWO0FBQUEsTUFHL0JLLFlBSCtCO0FBQUEsTUFHakJDLGVBSGlCOztBQUFBLG1CQVdFTixzREFBUTtBQUM5QztBQUFrQjtBQUNoQk8sTUFBRSxFQUFFLEVBRFk7QUFFaEJDLE1BQUUsRUFBRSxFQUZZO0FBR2hCQyxNQUFFLEVBQUU7QUFIWSxHQUQ0QixDQVhWO0FBQUEsTUFXL0JDLFlBWCtCO0FBQUEsTUFXakJDLGVBWGlCOztBQW1CdEMsTUFBTUMsUUFBZ0MsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUF6QztBQUVBLE1BQUlDLFdBQXNDLEdBQUcsRUFBN0M7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGVBQVcsR0FBR0QsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQWtCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JGLElBQXhCLENBQWxCO0FBQUEsS0FBYixDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUNILFdBQUQsQ0FGTSxDQUFUO0FBSUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkSyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWSxDQUFDVyxJQUF6QjtBQUNELEdBRlEsRUFFTixDQUFDWCxZQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNWSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQ3pCQyxHQUR5QixFQUVoQjtBQUNUbkIseUJBQXFCLENBQUMsS0FBRCxDQUFyQjtBQUNBZSxXQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBRyxDQUFDQyxhQUFKLENBQWtCQyxFQUE5QjtBQUNBWixlQUFXLENBQUNhLE9BQVosQ0FBb0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzlCLFVBQUksQ0FBQUEsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVGLEVBQVIsS0FBY0YsR0FBRyxDQUFDQyxhQUFKLENBQWtCQyxFQUFwQyxFQUF3QztBQUFBOztBQUN0Q0UsY0FBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixpQ0FBQUEsTUFBTSxDQUFFQyxTQUFSLHdFQUFtQkMsR0FBbkIsQ0FBdUJDLG9FQUFVLENBQUNDLGFBQWxDO0FBQ0QsT0FGRCxNQUVPO0FBQUE7O0FBQ0xKLGNBQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sa0NBQUFBLE1BQU0sQ0FBRUMsU0FBUiwwRUFBbUJJLE1BQW5CLENBQTBCRixvRUFBVSxDQUFDQyxhQUFyQztBQUNEO0FBQ0YsS0FORDtBQU9BekIsbUJBQWUsQ0FBQ2lCLEdBQUcsQ0FBQ0MsYUFBSixDQUFrQkMsRUFBbkIsQ0FBZjtBQUNELEdBYkQ7O0FBZUEsTUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDVixHQUFELEVBQWU7QUFDdENKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFaO0FBQ0QsR0FGRDs7QUFHQSxNQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFNBQUQsRUFBNkI7QUFDcER4QixtQkFBZSxpQ0FDVkQsWUFEVSxxR0FFWkwsWUFGWSxFQUVhOEIsU0FGYixHQUFmO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBbUQ7QUFDekVBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBbkIsV0FBTyxDQUFDQyxHQUFSLENBQVlWLFlBQVo7QUFDRCxHQUhEOztBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUU2Qiw0RUFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d2QyxNQUFNLEdBQ0w7QUFBSyxhQUFTLEVBQUU2QixvRUFBVSxDQUFDVyxnQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFWCxvRUFBVSxDQUFDWSxjQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUVaLG9FQUFVLENBQUNhLFFBRHhCO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTXpDLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFRRTtBQUFLLGFBQVMsRUFBRTRCLG9FQUFVLENBQUNjLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWQsb0VBQVUsQ0FBQ2UsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsV0FBTyxFQUFFdkIsa0JBRFg7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLGFBQVMsRUFBRVEsb0VBQVUsQ0FBQ2dCLFVBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQVFFO0FBQ0UsV0FBTyxFQUFFeEIsa0JBRFg7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLGFBQVMsRUFBRVEsb0VBQVUsQ0FBQ2dCLFVBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSRixFQWVFO0FBQ0UsV0FBTyxFQUFFeEIsa0JBRFg7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLGFBQVMsRUFBRVEsb0VBQVUsQ0FBQ2dCLFVBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FmRixDQURGLEVBd0JFO0FBQU0sWUFBUSxFQUFFVixlQUFoQjtBQUFpQyxhQUFTLEVBQUVOLG9FQUFVLENBQUNpQixRQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUU1QyxrQkFEWjtBQUVFLFlBQVEsRUFBRSxrQkFBQzZDLENBQUQ7QUFBQSxhQUNSZCxnQkFBZ0IsQ0FBQ2MsQ0FBQyxDQUFDeEIsYUFBRixDQUFnQnlCLEtBQWpCLENBRFI7QUFBQSxLQUZaO0FBS0UsUUFBSSxFQUFDLE1BTFA7QUFNRSxlQUFXLEVBQUMsVUFOZDtBQU9FLGFBQVMsRUFBRW5CLG9FQUFVLENBQUNvQixVQVB4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUNFLGFBQVMsRUFBRXBCLG9FQUFVLENBQUNxQixRQUR4QjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsU0FBSyxFQUFDLElBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBeEJGLENBUkYsQ0FERixDQURLLEdBc0RMO0FBQUssYUFBUyxFQUFFckIsb0VBQVUsQ0FBQ3NCLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNbEQsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixDQXZESixDQURGO0FBK0RELENBMUhEOztHQUFNSixTOztLQUFBQSxTO0FBNEhTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdE5hbWVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuXG5jb25zdCBUZXN0TmFtZXIgPSAoY3VycmVudExhbmc6IGFueSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNOYW1lRW50cnlFbmFibGVkLCBzZXRJc05hbWVFbnRyeUVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbltcInZhbHVlXCJdPigpO1xuXG4gIGludGVyZmFjZSBJTmFtZUluZm8ge1xuICAgIHJ1OiBzdHJpbmc7XG4gICAgZW46IHN0cmluZztcbiAgICBsdjogc3RyaW5nO1xuICB9XG5cbiAgY29uc3QgW2N1cnJlbnROYW1lcywgc2V0Q3VycmVudE5hbWVzXSA9IHVzZVN0YXRlKFxuICAgIC8qIDxJTmFtZUluZm8+ICovIHtcbiAgICAgIHJ1OiBcIlwiLFxuICAgICAgZW46IFwiXCIsXG4gICAgICBsdjogXCJcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgdGVzdExhbmc6IFRMYW5nT3B0aW9uW1widmFsdWVcIl1bXSA9IFtcInJ1XCIsIFwibHZcIiwgXCJlblwiXTtcblxuICBsZXQgbGFuZ0J1dHRvbnM6IEFycmF5PEhUTUxFbGVtZW50IHwgbnVsbD4gPSBbXTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsYW5nQnV0dG9ucyA9IHRlc3RMYW5nLm1hcCgobGFuZzogc3RyaW5nKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYW5nKSk7XG4gIH0sIFtsYW5nQnV0dG9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudE5hbWVzLmtleXMpO1xuICB9LCBbY3VycmVudE5hbWVzXSk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZ0J0bkNsaWNrID0gKFxuICAgIGJ0bjogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCA9PiB7XG4gICAgc2V0SXNOYW1lRW50cnlFbmFibGVkKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhidG4uY3VycmVudFRhcmdldC5pZCk7XG4gICAgbGFuZ0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uPy5pZCA9PSBidG4uY3VycmVudFRhcmdldC5pZCkge1xuICAgICAgICBidXR0b24/LmNsYXNzTGlzdD8uYWRkKGNvbXBTdHlsZXMuQnV0dG9uUHJlc3NlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24/LmNsYXNzTGlzdD8ucmVtb3ZlKGNvbXBTdHlsZXMuQnV0dG9uUHJlc3NlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0U2VsZWN0ZWRMYW5nKGJ0bi5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcnJvd0NsaWNrID0gKGJ0bik6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKGJ0bik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAobmFtZUlucHV0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBzZXRDdXJyZW50TmFtZXMoe1xuICAgICAgLi4uY3VycmVudE5hbWVzLFxuICAgICAgW3NlbGVjdGVkTGFuZyBhcyBzdHJpbmddOiBuYW1lSW5wdXQsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmFtZUVudHJ5ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudE5hbWVzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRlc3ROYW1pbmd9PlxuICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWxDb250YWluZXJCR30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQ2xvc2VCVE59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIPCdlrdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdTZWxlY3R9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwicnVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUlVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJsdlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMQVRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cImVuXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVOR1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5hbWVFbnRyeX0gY2xhc3NOYW1lPXtjb21wU3R5bGVzLk5hbWVGb3JtfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc05hbWVFbnRyeUVuYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOYW1lQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLlROYW1lSW5wdXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5OZXh0TGFuZ31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCItPlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWxPcGVuZXJ9PlxuICAgICAgICAgIDxzcGFuPlRlc3QgbmFtZTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+KzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0TmFtZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})