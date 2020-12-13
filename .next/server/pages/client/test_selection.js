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

/***/ "./components/TestCardClient.tsx":
/*!***************************************!*\
  !*** ./components/TestCardClient.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TestCardClient.module.scss */ \"./components/styles/TestCardClient.module.scss\");\n/* harmony import */ var _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/TestCardClient.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst TestCardClient = props => {\n  return __jsx(\"div\", {\n    className: _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.testCardContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.testName,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, props.title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCardClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RDYXJkQ2xpZW50LnRzeD83OWRjIl0sIm5hbWVzIjpbIlRlc3RDYXJkQ2xpZW50IiwicHJvcHMiLCJzdHlsZXMiLCJ0ZXN0Q2FyZENvbnRhaW5lciIsInRlc3ROYW1lIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBSUMsS0FBRCxJQUFnQjtBQUVuQyxTQUNJO0FBQUssYUFBUyxFQUFFQyx5RUFBTSxDQUFDQyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRCx5RUFBTSxDQUFDRSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSCxLQUFLLENBQUNJLEtBQXZDLENBREosQ0FESjtBQUtILENBUEQ7O0FBU2VMLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0Q2FyZENsaWVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdENhcmRDbGllbnQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgVGVzdENhcmRDbGllbnQgPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlc3RDYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0TmFtZX0+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmRDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestCardClient.tsx\n");

/***/ }),

/***/ "./components/styles/TestCardClient.module.scss":
/*!******************************************************!*\
  !*** ./components/styles/TestCardClient.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"testCardContainer\": \"TestCardClient_testCardContainer__23e3c\",\n\t\"testName\": \"TestCardClient_testName__169HJ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9UZXN0Q2FyZENsaWVudC5tb2R1bGUuc2Nzcz9jNWMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy9UZXN0Q2FyZENsaWVudC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlc3RDYXJkQ29udGFpbmVyXCI6IFwiVGVzdENhcmRDbGllbnRfdGVzdENhcmRDb250YWluZXJfXzIzZTNjXCIsXG5cdFwidGVzdE5hbWVcIjogXCJUZXN0Q2FyZENsaWVudF90ZXN0TmFtZV9fMTY5SEpcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/TestCardClient.module.scss\n");

/***/ }),

/***/ "./pages/client/test_selection.tsx":
/*!*****************************************!*\
  !*** ./pages/client/test_selection.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TestCardClient */ \"./components/TestCardClient.tsx\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/test_selection.module.scss */ \"./pages/styles/test_selection.module.scss\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/client/test_selection.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction test_selection(props) {\n  const {\n    0: testObjs,\n    1: setTestObjs\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]); //array with test objects\n  //! @insoemnia, you do not really need to store the url in the state, since you do not really change it.\n\n  const {\n    0: url,\n    1: setUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"http://localhost:4000/tests/getTest?active=true\"); //?dev url of active tests?\n\n  const getActiveTests = url => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => {\n      console.log(res);\n      setTestObjs(res.data);\n    }).catch(error => alert(error));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    getActiveTests(url);\n  }); //TODO: direct to the chosen test\n\n  return __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"test1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"test2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"test3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"test4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"test5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test_selection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvdGVzdF9zZWxlY3Rpb24udHN4PzkxNGQiXSwibmFtZXMiOlsidGVzdF9zZWxlY3Rpb24iLCJwcm9wcyIsInRlc3RPYmpzIiwic2V0VGVzdE9ianMiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsImdldEFjdGl2ZVRlc3RzIiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJwYWdlQ29udGFpbmVyIiwiTU1sb2dvIiwiZ2FsbGVyeUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQW9DO0FBQ2xDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBRGtDLENBQ1k7QUFDOUM7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCRixzREFBUSxDQUM1QixpREFENEIsQ0FBOUIsQ0FIa0MsQ0FLL0I7O0FBRUgsUUFBTUcsY0FBYyxHQUFJRixHQUFELElBQWlCO0FBQ3RDRyxnREFBSyxDQUFDQyxHQUFOLENBQVVKLEdBQVYsRUFDR0ssSUFESCxDQUNTQyxHQUFELElBQVM7QUFDYkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVIsaUJBQVcsQ0FBQ1EsR0FBRyxDQUFDRyxJQUFMLENBQVg7QUFDRCxLQUpILEVBS0dDLEtBTEgsQ0FLVUMsS0FBRCxJQUFXQyxLQUFLLENBQUNELEtBQUQsQ0FMekI7QUFNRCxHQVBEOztBQVNBRSx5REFBUyxDQUFDLE1BQU07QUFDZFgsa0JBQWMsQ0FBQ0YsR0FBRCxDQUFkO0FBQ0QsR0FGUSxDQUFULENBaEJrQyxDQW9CbEM7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRWMseUVBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLDhFQUROO0FBRUUsT0FBRyxFQUFDLE1BRk47QUFHRSxNQUFFLEVBQUVELHlFQUFNLENBQUNFLE1BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVGLHlFQUFNLENBQUNHLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFnQixTQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxrRUFBRDtBQUFnQixTQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxrRUFBRDtBQUFnQixTQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxrRUFBRDtBQUFnQixTQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxrRUFBRDtBQUFnQixTQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBTkYsQ0FERjtBQWdCRDs7QUFFY3RCLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2xpZW50L3Rlc3Rfc2VsZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGVzdENhcmRDbGllbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdENhcmRDbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90ZXN0X3NlbGVjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5mdW5jdGlvbiB0ZXN0X3NlbGVjdGlvbihwcm9wczogYW55KSB7XG4gIGNvbnN0IFt0ZXN0T2Jqcywgc2V0VGVzdE9ianNdID0gdXNlU3RhdGUoW10pOyAvL2FycmF5IHdpdGggdGVzdCBvYmplY3RzXG4gIC8vISBAaW5zb2VtbmlhLCB5b3UgZG8gbm90IHJlYWxseSBuZWVkIHRvIHN0b3JlIHRoZSB1cmwgaW4gdGhlIHN0YXRlLCBzaW5jZSB5b3UgZG8gbm90IHJlYWxseSBjaGFuZ2UgaXQuXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC90ZXN0cy9nZXRUZXN0P2FjdGl2ZT10cnVlXCJcbiAgKTsgLy8/ZGV2IHVybCBvZiBhY3RpdmUgdGVzdHM/XG5cbiAgY29uc3QgZ2V0QWN0aXZlVGVzdHMgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICBBeGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBzZXRUZXN0T2JqcyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFjdGl2ZVRlc3RzKHVybCk7XG4gIH0pO1xuXG4gIC8vVE9ETzogZGlyZWN0IHRvIHRoZSBjaG9zZW4gdGVzdFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFzaGlvbm11c2V1bXJpZ2EubHYvYml0cml4L3RlbXBsYXRlcy9tYWluX3RlbXBsYXRlL2ltZy9sb2dvLnBuZ1wiXG4gICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICBpZD17c3R5bGVzLk1NbG9nb31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnlDb250YWluZXJ9PlxuICAgICAgICA8VGVzdENhcmRDbGllbnQgdGl0bGU9XCJ0ZXN0MVwiIC8+XG4gICAgICAgIDxUZXN0Q2FyZENsaWVudCB0aXRsZT1cInRlc3QyXCIgLz5cbiAgICAgICAgPFRlc3RDYXJkQ2xpZW50IHRpdGxlPVwidGVzdDNcIiAvPlxuICAgICAgICA8VGVzdENhcmRDbGllbnQgdGl0bGU9XCJ0ZXN0NFwiIC8+XG4gICAgICAgIDxUZXN0Q2FyZENsaWVudCB0aXRsZT1cInRlc3Q1XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0X3NlbGVjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/client/test_selection.tsx\n");

/***/ }),

/***/ "./pages/styles/test_selection.module.scss":
/*!*************************************************!*\
  !*** ./pages/styles/test_selection.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"pageContainer\": \"test_selection_pageContainer__2_LRP\",\n\t\"MMlogo\": \"test_selection_MMlogo__vg7Qd\",\n\t\"galleryContainer\": \"test_selection_galleryContainer__1bpWO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMvdGVzdF9zZWxlY3Rpb24ubW9kdWxlLnNjc3M/ZTliMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9zdHlsZXMvdGVzdF9zZWxlY3Rpb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYWdlQ29udGFpbmVyXCI6IFwidGVzdF9zZWxlY3Rpb25fcGFnZUNvbnRhaW5lcl9fMl9MUlBcIixcblx0XCJNTWxvZ29cIjogXCJ0ZXN0X3NlbGVjdGlvbl9NTWxvZ29fX3ZnN1FkXCIsXG5cdFwiZ2FsbGVyeUNvbnRhaW5lclwiOiBcInRlc3Rfc2VsZWN0aW9uX2dhbGxlcnlDb250YWluZXJfXzFicFdPXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/styles/test_selection.module.scss\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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