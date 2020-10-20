webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./components/TestNamer.tsx":
/*!**********************************!*\
  !*** ./components/TestNamer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TestNamer.module.scss */ \"./components/styles/TestNamer.module.scss\");\n/* harmony import */ var _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/styles/create_test.module.scss */ \"./pages/styles/create_test.module.scss\");\n/* harmony import */ var _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestNamer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TestNamer = function TestNamer(currentLang) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isNameEntryEnabled = _useState2[0],\n      setIsNameEntryEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      selectedLang = _useState3[0],\n      setSelectedLang = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isSubmitBtnStateDone = _useState4[0],\n      setIsSubmitBtnStateDone = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    ru: \"\",\n    en: \"\",\n    lv: \"\"\n  }),\n      currentNames = _useState5[0],\n      setCurrentNames = _useState5[1];\n\n  var testLang = [\"ru\", \"lv\", \"en\"];\n  var langButtons = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    langButtons = testLang.map(function (lang) {\n      return document.getElementById(lang);\n    });\n  }, [langButtons]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    for (var keys in Object(currentNames)) {\n      if (Object(currentNames)[keys] === \"\") {\n        console.log(\"empty\");\n        return;\n      }\n    }\n  }, [currentNames]);\n\n  var handleLangBtnClick = function handleLangBtnClick(btn) {\n    setIsNameEntryEnabled(false);\n    console.log(btn.currentTarget.id);\n    langButtons.forEach(function (button) {\n      if ((button === null || button === void 0 ? void 0 : button.id) == btn.currentTarget.id) {\n        var _button$classList;\n\n        button === null || button === void 0 ? void 0 : (_button$classList = button.classList) === null || _button$classList === void 0 ? void 0 : _button$classList.add(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      } else {\n        var _button$classList2;\n\n        button === null || button === void 0 ? void 0 : (_button$classList2 = button.classList) === null || _button$classList2 === void 0 ? void 0 : _button$classList2.remove(_styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonPressed);\n      }\n    });\n    setSelectedLang(btn.currentTarget.id);\n  };\n\n  var handleArrowClick = function handleArrowClick(btn) {\n    console.log(btn);\n  };\n\n  var handleNameChange = function handleNameChange(nameInput) {\n    setCurrentNames(_objectSpread(_objectSpread({}, currentNames), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, selectedLang, nameInput)));\n  };\n\n  var handleNameEntry = function handleNameEntry(event) {\n    event.preventDefault();\n    console.log(currentNames);\n  };\n\n  return __jsx(\"div\", {\n    className: _pages_styles_create_test_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TestNaming,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, isOpen ? __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainerBG,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseBTN,\n    onClick: function onClick() {\n      return setIsOpen(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"\\uD835\\uDDB7\"), __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Modal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"ru\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, \"RUS\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"lv\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, \"LAT\"), __jsx(\"button\", {\n    onClick: handleLangBtnClick,\n    id: \"en\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 17\n    }\n  }, \"ENG\")), __jsx(\"form\", {\n    onSubmit: handleNameEntry,\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NameForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    disabled: isNameEntryEnabled,\n    onChange: function onChange(e) {\n      return handleNameChange(e.currentTarget.value);\n    },\n    type: \"text\",\n    placeholder: \"TestName\",\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TNameInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.NextLang,\n    type: \"submit\",\n    value: isSubmitBtnStateDone ? \"✔️\" : \"→\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 17\n    }\n  }))))) : __jsx(\"div\", {\n    className: _styles_TestNamer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ModalOpener,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  }, \"Test name\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setIsOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"+\")));\n};\n\n_s(TestNamer, \"K3KIkHLIy+DVGgkEV+iodUd2tmg=\");\n\n_c = TestNamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestNamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestNamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXN0TmFtZXIudHN4PzM4ZDEiXSwibmFtZXMiOlsiVGVzdE5hbWVyIiwiY3VycmVudExhbmciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzTmFtZUVudHJ5RW5hYmxlZCIsInNldElzTmFtZUVudHJ5RW5hYmxlZCIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImlzU3VibWl0QnRuU3RhdGVEb25lIiwic2V0SXNTdWJtaXRCdG5TdGF0ZURvbmUiLCJydSIsImVuIiwibHYiLCJjdXJyZW50TmFtZXMiLCJzZXRDdXJyZW50TmFtZXMiLCJ0ZXN0TGFuZyIsImxhbmdCdXR0b25zIiwidXNlRWZmZWN0IiwibWFwIiwibGFuZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJrZXlzIiwiT2JqZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxhbmdCdG5DbGljayIsImJ0biIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImZvckVhY2giLCJidXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb21wU3R5bGVzIiwiQnV0dG9uUHJlc3NlZCIsInJlbW92ZSIsImhhbmRsZUFycm93Q2xpY2siLCJoYW5kbGVOYW1lQ2hhbmdlIiwibmFtZUlucHV0IiwiaGFuZGxlTmFtZUVudHJ5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsIlRlc3ROYW1pbmciLCJNb2RhbENvbnRhaW5lckJHIiwiTW9kYWxDb250YWluZXIiLCJDbG9zZUJUTiIsIk1vZGFsIiwiTGFuZ1NlbGVjdCIsIkxhbmdCdXR0b24iLCJOYW1lRm9ybSIsImUiLCJ2YWx1ZSIsIlROYW1lSW5wdXQiLCJOZXh0TGFuZyIsIk1vZGFsT3BlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFdB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dCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tcFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdE5hbWVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlcy9zdHlsZXMvY3JlYXRlX3Rlc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFRMYW5nT3B0aW9uIH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuXG5jb25zdCBUZXN0TmFtZXIgPSAoY3VycmVudExhbmc6IGFueSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNOYW1lRW50cnlFbmFibGVkLCBzZXRJc05hbWVFbnRyeUVuYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmcsIHNldFNlbGVjdGVkTGFuZ10gPSB1c2VTdGF0ZTxUTGFuZ09wdGlvbltcInZhbHVlXCJdPigpO1xuICBjb25zdCBbaXNTdWJtaXRCdG5TdGF0ZURvbmUsIHNldElzU3VibWl0QnRuU3RhdGVEb25lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIGZhbHNlXG4gICk7XG5cbiAgaW50ZXJmYWNlIElOYW1lSW5mbyB7XG4gICAgcnU6IHN0cmluZztcbiAgICBlbjogc3RyaW5nO1xuICAgIGx2OiBzdHJpbmc7XG4gIH1cblxuICBjb25zdCBbY3VycmVudE5hbWVzLCBzZXRDdXJyZW50TmFtZXNdID0gdXNlU3RhdGU8T2JqZWN0Pih7XG4gICAgcnU6IFwiXCIsXG4gICAgZW46IFwiXCIsXG4gICAgbHY6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRlc3RMYW5nOiBUTGFuZ09wdGlvbltcInZhbHVlXCJdW10gPSBbXCJydVwiLCBcImx2XCIsIFwiZW5cIl07XG5cbiAgbGV0IGxhbmdCdXR0b25zOiBBcnJheTxIVE1MRWxlbWVudCB8IG51bGw+ID0gW107XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGFuZ0J1dHRvbnMgPSB0ZXN0TGFuZy5tYXAoKGxhbmc6IHN0cmluZykgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFuZykpO1xuICB9LCBbbGFuZ0J1dHRvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5cyBpbiBPYmplY3QoY3VycmVudE5hbWVzKSkge1xuICAgICAgaWYgKE9iamVjdChjdXJyZW50TmFtZXMpW2tleXNdID09PSBcIlwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjdXJyZW50TmFtZXNdKTtcblxuICBjb25zdCBoYW5kbGVMYW5nQnRuQ2xpY2sgPSAoXG4gICAgYnRuOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApOiB2b2lkID0+IHtcbiAgICBzZXRJc05hbWVFbnRyeUVuYWJsZWQoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKGJ0bi5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBsYW5nQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24/LmlkID09IGJ0bi5jdXJyZW50VGFyZ2V0LmlkKSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5hZGQoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0Py5yZW1vdmUoY29tcFN0eWxlcy5CdXR0b25QcmVzc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTZWxlY3RlZExhbmcoYnRuLmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFycm93Q2xpY2sgPSAoYnRuKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coYnRuKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChuYW1lSW5wdXQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHNldEN1cnJlbnROYW1lcyh7XG4gICAgICAuLi5jdXJyZW50TmFtZXMsXG4gICAgICBbc2VsZWN0ZWRMYW5nIGFzIHN0cmluZ106IG5hbWVJbnB1dCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOYW1lRW50cnkgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TmFtZXMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGVzdE5hbWluZ30+XG4gICAgICB7aXNPcGVuID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lckJHfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5DbG9zZUJUTn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg8J2Wt1xuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ1NlbGVjdH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ0J0bkNsaWNrfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJydVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTGFuZ0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYW5nQnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpZD1cImx2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29tcFN0eWxlcy5MYW5nQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExBVFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhbmdCdG5DbGlja31cbiAgICAgICAgICAgICAgICAgIGlkPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLkxhbmdCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRU5HXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmFtZUVudHJ5fSBjbGFzc05hbWU9e2NvbXBTdHlsZXMuTmFtZUZvcm19PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTmFtZUVudHJ5RW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU5hbWVDaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbXBTdHlsZXMuVE5hbWVJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb21wU3R5bGVzLk5leHRMYW5nfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXNTdWJtaXRCdG5TdGF0ZURvbmUgPyBcIuKclO+4j1wiIDogXCLihpJcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcFN0eWxlcy5Nb2RhbE9wZW5lcn0+XG4gICAgICAgICAgPHNwYW4+VGVzdCBuYW1lPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfT4rPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3ROYW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TestNamer.tsx\n");

/***/ })

})