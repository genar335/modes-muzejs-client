webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isNameEntryEnabled = _useState2[0],\n      setIsNameEntryEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isSubmitBtnStateDone = _useState4[0],\n      setIsSubmitBtnStateDone = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    ru: \"\",\n    en: \"\",\n    lv: \"\"\n  }),\n      currentNames = _useState5[0],\n      setCurrentNames = _useState5[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n  }, [langButtons]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    for (var keys in Object(currentNames)) {\n      if (Object(currentNames)[keys] === \"\") {\n        console.log(\"empty\");\n        setIsSubmitBtnStateDone(false);\n        return;\n      }\n\n      setIsSubmitBtnStateDone(true);\n    }\n  }, [currentNames]);\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    setIsNameEntryEnabled(false);\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {\n    console.log(btn);\n  };\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    setCurrentNames(_objectSpread(_objectSpread({}, currentNames), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, selectedLang, nameInput)));\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, newFunction(setIsOpen), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    disabled: isNameEntryEnabled,\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NextLang,\n    type: \"submit\",\n    value: isSubmitBtnStateDone ? \"✔️\" : \"→\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"K3KIkHLIy+DVGgkEV+iodUd2tmg=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nfunction newFunction(setIsOpen) {\n  return __jsx(\"svg\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    width: \"56\",\n    height: \"56\",\n    viewBox: \"0 0 56 56\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 10\n    }\n  }, __jsx(\"circle\", {\n    cx: \"28\",\n    cy: \"28\",\n    r: \"28\",\n    fill: \"#2F4858\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 5\n    }\n  }), __jsx(\"path\", {\n    d: \"M38.5626 36.4501L30.1126 28L38.5628 19.5498C39.1458 18.9669 39.1458 18.0203 38.5626 17.4372C37.9797 16.8543 37.0332 16.8543 36.4502 17.4372L28 25.8874L19.5498 17.4372C18.9668 16.8543 18.0203 16.8543 17.4374 17.4372C16.8542 18.0203 16.8542 18.9669 17.4372 19.5498L25.8874 28L17.4374 36.4501C16.8542 37.0332 16.8542 37.9797 17.4372 38.5627C18.0203 39.1458 18.9668 39.1458 19.55 38.5627L28 30.1126L36.45 38.5627C37.0332 39.1458 37.9797 39.1458 38.5628 38.5627C39.1458 37.9797 39.1458 37.0332 38.5626 36.4501Z\",\n    fill: \"white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 5\n    }\n  }));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzTmFtZUVudHJ5RW5hYmxlZCIsInNldElzTmFtZUVudHJ5RW5hYmxlZCIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImlzU3VibWl0QnRuU3RhdGVEb25lIiwic2V0SXNTdWJtaXRCdG5TdGF0ZURvbmUiLCJydSIsImVuIiwibHYiLCJjdXJyZW50TmFtZXMiLCJzZXRDdXJyZW50TmFtZXMiLCJ0ZXN0TGFuZyIsImxhbmdCdXR0b25zIiwidXNlRWZmZWN0IiwibWFwIiwibGFuZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJrZXlzIiwiT2JqZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxhbmdCdG5DbGljayIsImJ0biIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImZvckVhY2giLCJidXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb21wU3R5bGVzIiwiQnV0dG9uUHJlc3NlZCIsInJlbW92ZSIsImhhbmRsZUFycm93Q2xpY2siLCJoYW5kbGVOYW1lQ2hhbmdlIiwibmFtZUlucHV0IiwiaGFuZGxlTmFtZUVudHJ5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsIlRlc3ROYW1pbmciLCJNb2RhbENvbnRhaW5lckJHIiwiTW9kYWxDb250YWluZXIiLCJuZXdGdW5jdGlvbiIsIk1vZGFsIiwiTGFuZ1NlbGVjdCIsIkxhbmdCdXR0b24iLCJOYW1lRm9ybSIsImUiLCJ2YWx1ZSIsIlROYW1lSW5wdXQiLCJOZXh0TGFuZyIsIk1vZGFsT3BlbmVyIiwiQ2xvc2VCVE4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpB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YUFBTXRELFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUZKO0FBR0wsU0FBSyxFQUFDLElBSEQ7QUFJTCxVQUFNLEVBQUMsSUFKRjtBQUtMLFdBQU8sRUFBQyxXQUxIO0FBTUwsUUFBSSxFQUFDLE1BTkE7QUFPTCxTQUFLLEVBQUMsNEJBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNMO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsTUFBRSxFQUFDLElBQW5CO0FBQXdCLEtBQUMsRUFBQyxJQUExQjtBQUErQixRQUFJLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRLLEVBVUw7QUFDRSxLQUFDLEVBQUMsMmZBREo7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkssQ0FBUDtBQWNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb21wU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0TmFtZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3N0eWxlcy9jcmVhdGVfdGVzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVExhbmdPcHRpb24gfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmNvbnN0IFRlc3ROYW1lciA9IChjdXJyZW50TGFuZzogYW55KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc05hbWVFbnRyeUVuYWJsZWQsIHNldElzTmFtZUVudHJ5RW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IHVzZVN0YXRlPFRMYW5nT3B0aW9uW1widmFsdWVcIl0+KCk7XG4gIGNvbnN0IFtpc1N1Ym1pdEJ0blN0YXRlRG9uZSwgc2V0SXNTdWJtaXRCdG5TdGF0ZURvbmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgZmFsc2VcbiAgKTtcblxuICBpbnRlcmZhY2UgSU5hbWVJbmZvIHtcbiAgICBydTogc3RyaW5nO1xuICAgIGVuOiBzdHJpbmc7XG4gICAgbHY6IHN0cmluZztcbiAgfVxuXG4gIGNvbnN0IFtjdXJyZW50TmFtZXMsIHNldEN1cnJlbnROYW1lc10gPSB1c2VTdGF0ZTxPYmplY3Q+KHtcbiAgICBydTogXCJcIixcbiAgICBlbjogXCJcIixcbiAgICBsdjogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgdGVzdExhbmc6IFRMYW5nT3B0aW9uW1widmFsdWVcIl1bXSA9IFtcInJ1XCIsIFwibHZcIiwgXCJlblwiXTtcblxuICBsZXQgbGFuZ0J1dHRvbnM6IEFycmF5PEhUTUxFbGVtZW50IHwgbnVsbD4gPSBbXTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsYW5nQnV0dG9ucyA9IHRlc3RMYW5nLm1hcCgobGFuZzogc3RyaW5nKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYW5nKSk7XG4gIH0sIFtsYW5nQnV0dG9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXlzIGluIE9iamVjdChjdXJyZW50TmFtZXMpKSB7XG4gICAgICBpZiAoT2JqZWN0KGN1cnJlbnROYW1lcylba2V5c10gPT09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcbiAgICAgICAgc2V0SXNTdWJtaXRCdG5TdGF0ZURvbmUoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRJc1N1Ym1pdEJ0blN0YXRlRG9uZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50TmFtZXNdKTtcblxuICBjb25zdCBoYW5kbGVMYW5nQnRuQ2xpY2sgPSAoXG4gICAgYnRuOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApOiB2b2lkID0+IHtcbiAgICBzZXRJc05hbWVFbnRyeUVuYWJsZWQoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKGJ0bi5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBsYW5nQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24/LmlkID09IGJ0bi5jdXJyZW50VGFyZ2V0LmlkKSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5hZGQoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5yZW1vdmUoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZExhbmcoYnRuLmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFycm93Q2xpY2sgPSAoYnRuKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coYnRuKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChuYW1lSW5wdXQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHNldEN1cnJlbnROYW1lcyh7XG4gICAgICAuLi5jdXJyZW50TmFtZXMsXG4gICAgICBbc2VsZWN0ZWRMYW5nIGFzIHN0cmluZ106IG5hbWVJbnB1dCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOYW1lRW50cnkgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TmFtZXMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICB7aXNPcGVuID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICB7bmV3RnVuY3Rpb24oc2V0SXNPcGVuKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nU2VsZWN0fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cInJ1XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwibHZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTEFUXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJlblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFTkdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOYW1lRW50cnl9IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5OYW1lRm9ybX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNOYW1lRW50cnlFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmFtZUNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5UTmFtZUlucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmV4dExhbmd9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc1N1Ym1pdEJ0blN0YXRlRG9uZSA/IFwi4pyU77iPXCIgOiBcIuKGklwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsT3BlbmVyfT5cbiAgICAgICAgICA8c3Bhbj5UZXN0IG5hbWU8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pis8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdE5hbWVyO1xuZnVuY3Rpb24gbmV3RnVuY3Rpb24oc2V0SXNPcGVuOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4pIHtcbiAgcmV0dXJuIDxzdmdcbiAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuQ2xvc2VCVE59XG4gICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICB3aWR0aD1cIjU2XCJcbiAgICBoZWlnaHQ9XCI1NlwiXG4gICAgdmlld0JveD1cIjAgMCA1NiA1NlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPGNpcmNsZSBjeD1cIjI4XCIgY3k9XCIyOFwiIHI9XCIyOFwiIGZpbGw9XCIjMkY0ODU4XCIgLz5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0zOC41NjI2IDM2LjQ1MDFMMzAuMTEyNiAyOEwzOC41NjI4IDE5LjU0OThDMzkuMTQ1OCAxOC45NjY5IDM5LjE0NTggMTguMDIwMyAzOC41NjI2IDE3LjQzNzJDMzcuOTc5NyAxNi44NTQzIDM3LjAzMzIgMTYuODU0MyAzNi40NTAyIDE3LjQzNzJMMjggMjUuODg3NEwxOS41NDk4IDE3LjQzNzJDMTguOTY2OCAxNi44NTQzIDE4LjAyMDMgMTYuODU0MyAxNy40Mzc0IDE3LjQzNzJDMTYuODU0MiAxOC4wMjAzIDE2Ljg1NDIgMTguOTY2OSAxNy40MzcyIDE5LjU0OThMMjUuODg3NCAyOEwxNy40Mzc0IDM2LjQ1MDFDMTYuODU0MiAzNy4wMzMyIDE2Ljg1NDIgMzcuOTc5NyAxNy40MzcyIDM4LjU2MjdDMTguMDIwMyAzOS4xNDU4IDE4Ljk2NjggMzkuMTQ1OCAxOS41NSAzOC41NjI3TDI4IDMwLjExMjZMMzYuNDUgMzguNTYyN0MzNy4wMzMyIDM5LjE0NTggMzcuOTc5NyAzOS4xNDU4IDM4LjU2MjggMzguNTYyN0MzOS4xNDU4IDM3Ljk3OTcgMzkuMTQ1OCAzNy4wMzMyIDM4LjU2MjYgMzYuNDUwMVpcIlxuICAgICAgZmlsbD1cIndoaXRlXCIgLz5cbiAgPC9zdmc+O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})