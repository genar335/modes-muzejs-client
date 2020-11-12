webpackHotUpdate_N_E("pages/client/test",{

/***/ "./components/OptionBottom.tsx":
/*!*************************************!*\
  !*** ./components/OptionBottom.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ \"./node_modules/interactjs/dist/interact.min.js\");\n/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GAssets/tests/BottomFrame.svg */ \"./GAssets/tests/BottomFrame.svg\");\n/* harmony import */ var _GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/OptionBottom.module.scss */ \"./components/styles/OptionBottom.module.scss\");\n/* harmony import */ var _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/OptionBottom.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar OptionBottom = function OptionBottom(props) {\n  _s();\n\n  var draggable = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // console.log(draggable.current.classList.value)\n\n  if (draggable.current.classList.value) {\n    interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.drag').draggable({\n      onmove: function onmove(event) {\n        console.log('qweqwe');\n        var target = event.target;\n        var dataX = target.getAttribute('data-x');\n        var dataY = target.getAttribute('data-y');\n        var initialX = parseFloat(dataX) || 0;\n        var initialY = parseFloat(dataY) || 0;\n        var deltaX = event.dx;\n        var deltaY = event.dy;\n        var newX = initialX + deltaX;\n        var newY = initialY + deltaY;\n        target.style.transform = \"translate(\".concat(newX, \"px, \").concat(newY, \"px)\");\n        target.setAttribute('data-x', newX);\n        target.setAttribute('data-y', newY);\n      }\n    });\n  }\n\n  return __jsx(\"div\", {\n    className: \"drag\",\n    ref: draggable,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_tests_BottomFrame_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"bottom frame\",\n    id: _styles_OptionBottom_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bottomFrame,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(OptionBottom, \"f/p//Ug0/usxh0FWabDuvzIGL2c=\");\n\n_c = OptionBottom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OptionBottom);\n\nvar _c;\n\n$RefreshReg$(_c, \"OptionBottom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcHRpb25Cb3R0b20udHN4Pzk5MGEiXSwibmFtZXMiOlsiT3B0aW9uQm90dG9tIiwicHJvcHMiLCJkcmFnZ2FibGUiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidmFsdWUiLCJpbnRlcmFjdCIsIm9ubW92ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImRhdGFYIiwiZ2V0QXR0cmlidXRlIiwiZGF0YVkiLCJpbml0aWFsWCIsInBhcnNlRmxvYXQiLCJpbml0aWFsWSIsImRlbHRhWCIsImR4IiwiZGVsdGFZIiwiZHkiLCJuZXdYIiwibmV3WSIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0QXR0cmlidXRlIiwiYm90dG9tRnJhbWUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFnQjtBQUFBOztBQUNqQyxNQUFNQyxTQUFTLEdBQUlDLG9EQUFNLENBQUMsSUFBRCxDQUF6QixDQURpQyxDQUdqQzs7QUFDQSxNQUFJRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCQyxLQUFoQyxFQUF1QztBQUd2Q0MscURBQVEsQ0FBQyxPQUFELENBQVIsQ0FDS0wsU0FETCxDQUNlO0FBQ1BNLFlBQU0sRUFBRSxnQkFBU0MsS0FBVCxFQUFxQjtBQUN6QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLFlBQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFyQjtBQUVBLFlBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxZQUFQLENBQW9CLFFBQXBCLENBQWQ7QUFDQSxZQUFNQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixRQUFwQixDQUFkO0FBQ0EsWUFBTUUsUUFBUSxHQUFHQyxVQUFVLENBQUNKLEtBQUQsQ0FBVixJQUFxQixDQUF0QztBQUNBLFlBQU1LLFFBQVEsR0FBR0QsVUFBVSxDQUFDRixLQUFELENBQVYsSUFBcUIsQ0FBdEM7QUFFQSxZQUFNSSxNQUFNLEdBQUdWLEtBQUssQ0FBQ1csRUFBckI7QUFDQSxZQUFNQyxNQUFNLEdBQUdaLEtBQUssQ0FBQ2EsRUFBckI7QUFFQSxZQUFNQyxJQUFJLEdBQUdQLFFBQVEsR0FBR0csTUFBeEI7QUFDQSxZQUFNSyxJQUFJLEdBQUdOLFFBQVEsR0FBR0csTUFBeEI7QUFFQVQsY0FBTSxDQUNEYSxLQURMLENBRUtDLFNBRkwsdUJBRThCSCxJQUY5QixpQkFFeUNDLElBRnpDO0FBSUFaLGNBQU0sQ0FBQ2UsWUFBUCxDQUFvQixRQUFwQixFQUE4QkosSUFBOUI7QUFDQVgsY0FBTSxDQUFDZSxZQUFQLENBQW9CLFFBQXBCLEVBQThCSCxJQUE5QjtBQUNIO0FBdEJNLEtBRGY7QUF5QkM7O0FBQ0QsU0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLE9BQUcsRUFBRXRCLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRTBCLHFFQUFWO0FBQXVCLE9BQUcsRUFBQyxjQUEzQjtBQUEwQyxNQUFFLEVBQUVDLHVFQUFNLENBQUNELFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBTUgsQ0F2Q0Q7O0dBQU01QixZOztLQUFBQSxZO0FBeUNTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvT3B0aW9uQm90dG9tLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbnRlcmFjdCBmcm9tICdpbnRlcmFjdGpzJztcbmltcG9ydCBib3R0b21GcmFtZSBmcm9tIFwiLi4vR0Fzc2V0cy90ZXN0cy9Cb3R0b21GcmFtZS5zdmdcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvT3B0aW9uQm90dG9tLm1vZHVsZS5zY3NzXCJcblxuY29uc3QgT3B0aW9uQm90dG9tID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSAgdXNlUmVmKG51bGwpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhkcmFnZ2FibGUuY3VycmVudC5jbGFzc0xpc3QudmFsdWUpXG4gICAgaWYgKGRyYWdnYWJsZS5jdXJyZW50LmNsYXNzTGlzdC52YWx1ZSkge1xuXG4gICAgXG4gICAgaW50ZXJhY3QoJy5kcmFnJylcbiAgICAgICAgLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICBvbm1vdmU6IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncXdlcXdlJylcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVggPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhWSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxYID0gcGFyc2VGbG9hdChkYXRhWCkgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsWSA9IHBhcnNlRmxvYXQoZGF0YVkpIHx8IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVggPSBldmVudC5keDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBldmVudC5keTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ggPSBpbml0aWFsWCArIGRlbHRhWDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdZID0gaW5pdGlhbFkgKyBkZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bmV3WH1weCwgJHtuZXdZfXB4KWA7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBuZXdYKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBuZXdZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJhZycgcmVmPXtkcmFnZ2FibGV9ID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtib3R0b21GcmFtZX0gYWx0PVwiYm90dG9tIGZyYW1lXCIgaWQ9e3N0eWxlcy5ib3R0b21GcmFtZX0+PC9pbWc+XG4gICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5mYXNoaW9uPC9wPiovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OptionBottom.tsx\n");

/***/ })

})