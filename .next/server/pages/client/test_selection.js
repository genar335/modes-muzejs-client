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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ \"store\");\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestCardClient.module.scss */ \"./components/styles/TestCardClient.module.scss\");\n/* harmony import */ var _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/TestCardClient.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst TestCardClient = props => {\n  const url = `/client/languages?testid=${props.testData._id}`;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleClick = e => {\n    e.preventDefault();\n    store__WEBPACK_IMPORTED_MODULE_2___default.a.set(props.testData._id, props.testData);\n    router.push(url);\n  }; // `/client/languages?testid=${props.testData._id}`\n\n\n  return __jsx(\"div\", {\n    className: _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testCardContainer,\n    onClick: handleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testName,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, props.title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCardClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RDYXJkQ2xpZW50LnRzeD83OWRjIl0sIm5hbWVzIjpbIlRlc3RDYXJkQ2xpZW50IiwicHJvcHMiLCJ1cmwiLCJ0ZXN0RGF0YSIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcmUiLCJzZXQiLCJwdXNoIiwic3R5bGVzIiwidGVzdENhcmRDb250YWluZXIiLCJ0ZXN0TmFtZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBSUMsS0FBRCxJQUdqQjtBQUVGLFFBQU1DLEdBQUcsR0FBSSw0QkFBMkJELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxHQUFJLEVBQTNEO0FBQ0EsUUFBTUMsTUFBa0IsR0FBR0MsNkRBQVMsRUFBcEM7O0FBRUEsUUFBTUMsV0FBVyxHQUFJQyxDQUFELElBQVk7QUFDNUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxnREFBSyxDQUFDQyxHQUFOLENBQVVWLEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxHQUF6QixFQUErQkgsS0FBSyxDQUFDRSxRQUFyQztBQUNBRSxVQUFNLENBQUNPLElBQVAsQ0FBWVYsR0FBWjtBQUNELEdBSkgsQ0FMRSxDQVdGOzs7QUFDQSxTQUNJO0FBQUssYUFBUyxFQUFFVyx5RUFBTSxDQUFDQyxpQkFBdkI7QUFBMEMsV0FBTyxFQUFFUCxXQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVNLHlFQUFNLENBQUNFLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNkLEtBQUssQ0FBQ2UsS0FBdkMsQ0FESixDQURKO0FBS0gsQ0FwQkQ7O0FBc0JlaEIsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rlc3RDYXJkQ2xpZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9UZXN0Q2FyZENsaWVudC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBUZXN0Q2FyZENsaWVudCA9IChwcm9wczoge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgdGVzdERhdGE6IElUZXN0XG59KSA9PiB7XG5cbiAgICBjb25zdCB1cmwgPSBgL2NsaWVudC9sYW5ndWFnZXM/dGVzdGlkPSR7cHJvcHMudGVzdERhdGEuX2lkfWA7XG4gICAgY29uc3Qgcm91dGVyOiBOZXh0Um91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdG9yZS5zZXQocHJvcHMudGVzdERhdGEuX2lkISwgcHJvcHMudGVzdERhdGEpXG4gICAgICAgIHJvdXRlci5wdXNoKHVybCk7XG4gICAgICB9XG5cbiAgICAvLyBgL2NsaWVudC9sYW5ndWFnZXM/dGVzdGlkPSR7cHJvcHMudGVzdERhdGEuX2lkfWBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVzdENhcmRDb250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0TmFtZX0+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmRDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TestCardClient.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TestCardClient */ \"./components/TestCardClient.tsx\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/test_selection.module.scss */ \"./pages/styles/test_selection.module.scss\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/pages/client/test_selection.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction test_selection(props) {\n  const {\n    0: testObjs,\n    1: setTestObjs\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]); //array with test objects\n\n  const url = \"http://localhost:4000/tests/getTest?active=true\";\n\n  const getActiveTests = url => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => {\n      console.log(res);\n      setTestObjs(res.data);\n    }).catch(error => alert(error));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    getActiveTests(url);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, testObjs.map(test => __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: test.ru.name,\n    testData: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test_selection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvdGVzdF9zZWxlY3Rpb24udHN4PzkxNGQiXSwibmFtZXMiOlsidGVzdF9zZWxlY3Rpb24iLCJwcm9wcyIsInRlc3RPYmpzIiwic2V0VGVzdE9ianMiLCJ1c2VTdGF0ZSIsInVybCIsImdldEFjdGl2ZVRlc3RzIiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJwYWdlQ29udGFpbmVyIiwiTU1sb2dvIiwiZ2FsbGVyeUNvbnRhaW5lciIsIm1hcCIsInRlc3QiLCJydSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUFvQztBQUNsQyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QyxDQURrQyxDQUNZOztBQUM5QyxRQUFNQyxHQUFHLEdBQUcsaURBQVo7O0FBRUEsUUFBTUMsY0FBYyxHQUFJRCxHQUFELElBQWlCO0FBQ3RDRSxnREFBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsRUFDR0ksSUFESCxDQUNTQyxHQUFELElBQVM7QUFDYkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVAsaUJBQVcsQ0FBQ08sR0FBRyxDQUFDRyxJQUFMLENBQVg7QUFDRCxLQUpILEVBS0dDLEtBTEgsQ0FLVUMsS0FBRCxJQUFXQyxLQUFLLENBQUNELEtBQUQsQ0FMekI7QUFNRCxHQVBEOztBQVNBRSx5REFBUyxDQUFDLE1BQU07QUFDZFgsa0JBQWMsQ0FBQ0QsR0FBRCxDQUFkO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUVhLHlFQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyw4RUFETjtBQUVFLE9BQUcsRUFBQyxNQUZOO0FBR0UsTUFBRSxFQUFFRCx5RUFBTSxDQUFDRSxNQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUssYUFBUyxFQUFFRix5RUFBTSxDQUFDRyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbkIsUUFBUSxDQUFDb0IsR0FBVCxDQUFjQyxJQUFELElBQ1YsTUFBQyxrRUFBRDtBQUNJLFNBQUssRUFBRUEsSUFBSSxDQUFDQyxFQUFMLENBQVFDLElBRG5CO0FBRUksWUFBUSxFQUFFRixJQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxDQURILENBTkYsQ0FERjtBQWdCRDs7QUFFY3ZCLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2xpZW50L3Rlc3Rfc2VsZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGVzdENhcmRDbGllbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdENhcmRDbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90ZXN0X3NlbGVjdGlvbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3Rlc3RcIjtcblxuZnVuY3Rpb24gdGVzdF9zZWxlY3Rpb24ocHJvcHM6IGFueSkge1xuICBjb25zdCBbdGVzdE9ianMsIHNldFRlc3RPYmpzXSA9IHVzZVN0YXRlKFtdKTsgLy9hcnJheSB3aXRoIHRlc3Qgb2JqZWN0c1xuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC90ZXN0cy9nZXRUZXN0P2FjdGl2ZT10cnVlXCJcblxuICBjb25zdCBnZXRBY3RpdmVUZXN0cyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIEF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNldFRlc3RPYmpzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvcikpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWN0aXZlVGVzdHModXJsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFzaGlvbm11c2V1bXJpZ2EubHYvYml0cml4L3RlbXBsYXRlcy9tYWluX3RlbXBsYXRlL2ltZy9sb2dvLnBuZ1wiXG4gICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICBpZD17c3R5bGVzLk1NbG9nb31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnlDb250YWluZXJ9PlxuICAgICAgICB7dGVzdE9ianMubWFwKCh0ZXN0OiBJVGVzdCkgPT4gXG4gICAgICAgICAgICA8VGVzdENhcmRDbGllbnRcbiAgICAgICAgICAgICAgICB0aXRsZT17dGVzdC5ydS5uYW1lfVxuICAgICAgICAgICAgICAgIHRlc3REYXRhPXt0ZXN0fS8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVzdF9zZWxlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/client/test_selection.tsx\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "store":
/*!************************!*\
  !*** external "store" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZVwiP2VjMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store\n");

/***/ })

/******/ });