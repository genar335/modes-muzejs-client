module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/client/test_selection.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/client/test_selection.tsx":
/*!*****************************************!*\
  !*** ./pages/client/test_selection.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/test_selection.module.scss */ \"./pages/styles/test_selection.module.scss\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/pages/client/test_selection.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Test_Selection(props) {\n  /**\n   * get active tests (Axios)\n   * \n   */\n  //TODO: direct to the chosen test\n  return __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test_Selection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvdGVzdF9zZWxlY3Rpb24udHN4PzkxNGQiXSwibmFtZXMiOlsiVGVzdF9TZWxlY3Rpb24iLCJwcm9wcyIsInN0eWxlcyIsInBhZ2VDb250YWluZXIiLCJNTWxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQW9DO0FBRWhDOzs7O0FBS0E7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFFQyx5RUFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBd0YsT0FBRyxFQUFDLE1BQTVGO0FBQW1HLE1BQUUsRUFBRUQseUVBQU0sQ0FBQ0UsTUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSDs7QUFFY0osNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jbGllbnQvdGVzdF9zZWxlY3Rpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90ZXN0X3NlbGVjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiBUZXN0X1NlbGVjdGlvbihwcm9wczogYW55KSB7XG5cbiAgICAvKipcbiAgICAgKiBnZXQgYWN0aXZlIHRlc3RzIChBeGlvcylcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIC8vVE9ETzogZGlyZWN0IHRvIHRoZSBjaG9zZW4gdGVzdFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5mYXNoaW9ubXVzZXVtcmlnYS5sdi9iaXRyaXgvdGVtcGxhdGVzL21haW5fdGVtcGxhdGUvaW1nL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIGlkPXtzdHlsZXMuTU1sb2dvfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdF9TZWxlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/client/test_selection.tsx\n");

/***/ }),

/***/ "./pages/styles/test_selection.module.scss":
/*!*************************************************!*\
  !*** ./pages/styles/test_selection.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"pageContainer\": \"test_selection_pageContainer__2_LRP\",\n\t\"MMlogo\": \"test_selection_MMlogo__vg7Qd\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMvdGVzdF9zZWxlY3Rpb24ubW9kdWxlLnNjc3M/ZTliMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvc3R5bGVzL3Rlc3Rfc2VsZWN0aW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnZUNvbnRhaW5lclwiOiBcInRlc3Rfc2VsZWN0aW9uX3BhZ2VDb250YWluZXJfXzJfTFJQXCIsXG5cdFwiTU1sb2dvXCI6IFwidGVzdF9zZWxlY3Rpb25fTU1sb2dvX192ZzdRZFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles/test_selection.module.scss\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });