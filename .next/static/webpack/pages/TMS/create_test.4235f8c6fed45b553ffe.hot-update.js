webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isNameEntryEnabled = _useState2[0],\n      setIsNameEntryEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    ru: \"\",\n    en: \"\",\n    lv: \"\"\n  }),\n      currentNames = _useState4[0],\n      setCurrentNames = _useState4[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n  }, [langButtons]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    for (var keys in Object(currentNames)) {\n      console.log(Object(currentNames)[keys]);\n    }\n  }, [currentNames]);\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    setIsNameEntryEnabled(false);\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {\n    console.log(btn);\n  };\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    setCurrentNames(_objectSpread(_objectSpread({}, currentNames), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, selectedLang, nameInput)));\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    disabled: isNameEntryEnabled,\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NextLang,\n    type: \"submit\",\n    value: \"->\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"HQy1pKBjqRtBmUoXuq+YzkJz/QY=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzTmFtZUVudHJ5RW5hYmxlZCIsInNldElzTmFtZUVudHJ5RW5hYmxlZCIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsInJ1IiwiZW4iLCJsdiIsImN1cnJlbnROYW1lcyIsInNldEN1cnJlbnROYW1lcyIsInRlc3RMYW5nIiwibGFuZ0J1dHRvbnMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJsYW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImtleXMiLCJPYmplY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTGFuZ0J0bkNsaWNrIiwiYnRuIiwiY3VycmVudFRhcmdldCIsImlkIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBTdHlsZXMiLCJCdXR0b25QcmVzc2VkIiwicmVtb3ZlIiwiaGFuZGxlQXJyb3dDbGljayIsImhhbmRsZU5hbWVDaGFuZ2UiLCJuYW1lSW5wdXQiLCJoYW5kbGVOYW1lRW50cnkiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIiwiVGVzdE5hbWluZyIsIk1vZGFsQ29udGFpbmVyQkciLCJNb2RhbENvbnRhaW5lciIsIkNsb3NlQlROIiwiTW9kYWwiLCJMYW5nU2VsZWN0IiwiTGFuZ0J1dHRvbiIsIk5hbWVGb3JtIiwiZSIsInZhbHVlIiwiVE5hbWVJbnB1dCIsIk5leHRMYW5nIiwiTW9kYWxPcGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQjtBQUFBOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEtBQUQsQ0FERTtB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LGtCQURaO0FBRUUsWUFBUSxFQUFFLGtCQUFDOEMsQ0FBRDtBQUFBLGFBQ1JkLGdCQUFnQixDQUFDYyxDQUFDLENBQUN4QixhQUFGLENBQWdCeUIsS0FBakIsQ0FEUjtBQUFBLEtBRlo7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLGVBQVcsRUFBQyxVQU5kO0FBT0UsYUFBUyxFQUFFbkIsb0VBQVUsQ0FBQ29CLFVBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFO0FBQ0UsYUFBUyxFQUFFcEIsb0VBQVUsQ0FBQ3FCLFFBRHhCO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFLLEVBQUMsSUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0F4QkYsQ0FSRixDQURGLENBREssR0FzREw7QUFBSyxhQUFTLEVBQUVyQixvRUFBVSxDQUFDc0IsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1uRCxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLENBdkRKLENBREY7QUErREQsQ0ExSEQ7O0dBQU1KLFM7O0tBQUFBLFM7QUE0SFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmNvbnN0IFRlc3ROYW1lciA9IChjdXJyZW50TGFuZzogYW55KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc05hbWVFbnRyeUVuYWJsZWQsIHNldElzTmFtZUVudHJ5RW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uW1widmFsdWVcIl0+KCk7XG5cbiAgaW50ZXJmYWNlIElOYW1lSW5mbyB7XG4gICAgcnU6IHN0cmluZztcbiAgICBlbjogc3RyaW5nO1xuICAgIGx2OiBzdHJpbmc7XG4gIH1cblxuICBjb25zdCBbY3VycmVudE5hbWVzLCBzZXRDdXJyZW50TmFtZXNdID0gdXNlU3RhdGU8T2JqZWN0Pih7XG4gICAgcnU6IFwiXCIsXG4gICAgZW46IFwiXCIsXG4gICAgbHY6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRlc3RMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdW10gPSBbXCJydVwiLCBcImx2XCIsIFwiZW5cIl07XG5cbiAgbGV0IGxhbmdCdXR0b25zOiBBcnJheTxIVE1MRWxlbWVudCB8IG51bGw+ID0gW107XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGFuZ0J1dHRvbnMgPSB0ZXN0TGFuZy5tYXAoKGxhbmc6IHN0cmluZykgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFuZykpO1xuICB9LCBbbGFuZ0J1dHRvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5cyBpbiBPYmplY3QoY3VycmVudE5hbWVzKSkge1xuICAgICAgY29uc29sZS5sb2coT2JqZWN0KGN1cnJlbnROYW1lcylba2V5c10pO1xuICAgIH1cbiAgfSwgW2N1cnJlbnROYW1lc10pO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmdCdG5DbGljayA9IChcbiAgICBidG46IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQgPT4ge1xuICAgIHNldElzTmFtZUVudHJ5RW5hYmxlZChmYWxzZSk7XG4gICAgY29uc29sZS5sb2coYnRuLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIGxhbmdCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbj8uaWQgPT0gYnRuLmN1cnJlbnRUYXJnZXQuaWQpIHtcbiAgICAgICAgYnV0dG9uPy5jbGFzc0xpc3Q/LmFkZChjb21wU3R5bGVzLkJ1dHRvblByZXNzZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uPy5jbGFzc0xpc3Q/LnJlbW92ZShjb21wU3R5bGVzLkJ1dHRvblByZXNzZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldFNlbGVjdGVkTGFuZyhidG4uY3VycmVudFRhcmdldC5pZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXJyb3dDbGljayA9IChidG4pOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhidG4pO1xuICB9O1xuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKG5hbWVJbnB1dDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgc2V0Q3VycmVudE5hbWVzKHtcbiAgICAgIC4uLmN1cnJlbnROYW1lcyxcbiAgICAgIFtzZWxlY3RlZExhbmcgYXMgc3RyaW5nXTogbmFtZUlucHV0LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5hbWVFbnRyeSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnROYW1lcyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXN0TmFtaW5nfT5cbiAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyQkd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkNsb3NlQlROfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDwnZa3XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nU2VsZWN0fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cInJ1XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwibHZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTEFUXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFTkdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOYW1lRW50cnl9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNOYW1lRW50cnlFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmFtZUNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5UTmFtZUlucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmV4dExhbmd9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiLT5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsT3BlbmVyfT5cbiAgICAgICAgICA8c3Bhbj5UZXN0IG5hbWU8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pis8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdE5hbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})