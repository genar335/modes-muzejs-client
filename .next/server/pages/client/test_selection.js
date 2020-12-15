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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ \"store\");\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/TestCardClient.module.scss */ \"./components/styles/TestCardClient.module.scss\");\n/* harmony import */ var _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/components/TestCardClient.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst TestCardClient = props => {\n  const url = `/client/languages?testid=${props.testData._id}`;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleClick = e => {\n    //e.preventDefault();\n    store__WEBPACK_IMPORTED_MODULE_2___default.a.set(\"theTest\", props.testData);\n    router.push(url);\n  }; // `/client/languages?testid=${props.testData._id}`\n\n\n  return __jsx(\"div\", {\n    className: _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testCardContainer,\n    onClick: handleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_TestCardClient_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testName,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, props.title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestCardClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rlc3RDYXJkQ2xpZW50LnRzeD83OWRjIl0sIm5hbWVzIjpbIlRlc3RDYXJkQ2xpZW50IiwicHJvcHMiLCJ1cmwiLCJ0ZXN0RGF0YSIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInN0b3JlIiwic2V0IiwicHVzaCIsInN0eWxlcyIsInRlc3RDYXJkQ29udGFpbmVyIiwidGVzdE5hbWUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUlDLEtBQUQsSUFHakI7QUFFRixRQUFNQyxHQUFHLEdBQUksNEJBQTJCRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FBSSxFQUEzRDtBQUNBLFFBQU1DLE1BQWtCLEdBQUdDLDZEQUFTLEVBQXBDOztBQUVBLFFBQU1DLFdBQVcsR0FBSUMsQ0FBRCxJQUFZO0FBQzVCO0FBQ0FDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxTQUFWLEVBQXFCVCxLQUFLLENBQUNFLFFBQTNCO0FBQ0FFLFVBQU0sQ0FBQ00sSUFBUCxDQUFZVCxHQUFaO0FBQ0QsR0FKSCxDQUxFLENBV0Y7OztBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUVVLHlFQUFNLENBQUNDLGlCQUF2QjtBQUEwQyxXQUFPLEVBQUVOLFdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBRUsseUVBQU0sQ0FBQ0UsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ2IsS0FBSyxDQUFDYyxLQUF2QyxDQURKLENBREo7QUFLSCxDQXBCRDs7QUFzQmVmLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXN0Q2FyZENsaWVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvVGVzdENhcmRDbGllbnQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgVGVzdENhcmRDbGllbnQgPSAocHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHRlc3REYXRhOiBJVGVzdFxufSkgPT4ge1xuXG4gICAgY29uc3QgdXJsID0gYC9jbGllbnQvbGFuZ3VhZ2VzP3Rlc3RpZD0ke3Byb3BzLnRlc3REYXRhLl9pZH1gO1xuICAgIGNvbnN0IHJvdXRlcjogTmV4dFJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdG9yZS5zZXQoXCJ0aGVUZXN0XCIsIHByb3BzLnRlc3REYXRhKVxuICAgICAgICByb3V0ZXIucHVzaCh1cmwpO1xuICAgICAgfVxuXG4gICAgLy8gYC9jbGllbnQvbGFuZ3VhZ2VzP3Rlc3RpZD0ke3Byb3BzLnRlc3REYXRhLl9pZH1gXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlc3RDYXJkQ29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGVzdE5hbWV9Pntwcm9wcy50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RDYXJkQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TestCardClient.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TestCardClient */ \"./components/TestCardClient.tsx\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/test_selection.module.scss */ \"./pages/styles/test_selection.module.scss\");\n/* harmony import */ var _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/daniel/Documents/GitHub/modes-muzejs-client/pages/client/test_selection.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction test_selection(props) {\n  const {\n    0: testObjs,\n    1: setTestObjs\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]); //array with test objects\n\n  const url = \"http://localhost:4000/tests/getTest?active=true\";\n\n  const getActiveTests = url => {\n    try {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => {\n        console.log(res);\n        setTestObjs(res.data);\n      }).catch(error => alert(error));\n    } catch (e) {\n      alert(e);\n      return [];\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    getActiveTests(url);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_test_selection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, testObjs.map(test => __jsx(_components_TestCardClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: test.ru.name,\n    testData: test,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test_selection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvdGVzdF9zZWxlY3Rpb24udHN4PzkxNGQiXSwibmFtZXMiOlsidGVzdF9zZWxlY3Rpb24iLCJwcm9wcyIsInRlc3RPYmpzIiwic2V0VGVzdE9ianMiLCJ1c2VTdGF0ZSIsInVybCIsImdldEFjdGl2ZVRlc3RzIiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwicGFnZUNvbnRhaW5lciIsIk1NbG9nbyIsImdhbGxlcnlDb250YWluZXIiLCJtYXAiLCJ0ZXN0IiwicnUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBb0M7QUFDbEMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEMsQ0FEa0MsQ0FDWTs7QUFDOUMsUUFBTUMsR0FBRyxHQUFHLGlEQUFaOztBQUVBLFFBQU1DLGNBQWMsR0FBSUQsR0FBRCxJQUFpQjtBQUN0QyxRQUFJO0FBQ0ZFLGtEQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixFQUNHSSxJQURILENBQ1NDLEdBQUQsSUFBUztBQUNiQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBUCxtQkFBVyxDQUFDTyxHQUFHLENBQUNHLElBQUwsQ0FBWDtBQUNELE9BSkgsRUFLR0MsS0FMSCxDQUtVQyxLQUFELElBQVdDLEtBQUssQ0FBQ0QsS0FBRCxDQUx6QjtBQU1ELEtBUEQsQ0FPRSxPQUFPRSxDQUFQLEVBQVU7QUFDUkQsV0FBSyxDQUFDQyxDQUFELENBQUw7QUFDQSxhQUFPLEVBQVA7QUFDSDtBQUNGLEdBWkQ7O0FBY0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkWixrQkFBYyxDQUFDRCxHQUFELENBQWQ7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRWMseUVBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLDhFQUROO0FBRUUsT0FBRyxFQUFDLE1BRk47QUFHRSxNQUFFLEVBQUVELHlFQUFNLENBQUNFLE1BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVGLHlFQUFNLENBQUNHLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwQixRQUFRLENBQUNxQixHQUFULENBQWNDLElBQUQsSUFDVixNQUFDLGtFQUFEO0FBQ0ksU0FBSyxFQUFFQSxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFEbkI7QUFFSSxZQUFRLEVBQUVGLElBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILENBREgsQ0FORixDQURGO0FBZ0JEOztBQUVjeEIsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jbGllbnQvdGVzdF9zZWxlY3Rpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXN0Q2FyZENsaWVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXN0Q2FyZENsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Rlc3Rfc2VsZWN0aW9uLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi8uLi9AdHlwZXMvdGVzdFwiO1xuXG5mdW5jdGlvbiB0ZXN0X3NlbGVjdGlvbihwcm9wczogYW55KSB7XG4gIGNvbnN0IFt0ZXN0T2Jqcywgc2V0VGVzdE9ianNdID0gdXNlU3RhdGUoW10pOyAvL2FycmF5IHdpdGggdGVzdCBvYmplY3RzXG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL2dldFRlc3Q/YWN0aXZlPXRydWVcIlxuXG4gIGNvbnN0IGdldEFjdGl2ZVRlc3RzID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIEF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIHNldFRlc3RPYmpzKHJlcy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFsZXJ0KGUpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBY3RpdmVUZXN0cyh1cmwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250YWluZXJ9PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCJodHRwczovL3d3dy5mYXNoaW9ubXVzZXVtcmlnYS5sdi9iaXRyaXgvdGVtcGxhdGVzL21haW5fdGVtcGxhdGUvaW1nL2xvZ28ucG5nXCJcbiAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIGlkPXtzdHlsZXMuTU1sb2dvfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeUNvbnRhaW5lcn0+XG4gICAgICAgIHt0ZXN0T2Jqcy5tYXAoKHRlc3Q6IElUZXN0KSA9PiBcbiAgICAgICAgICAgIDxUZXN0Q2FyZENsaWVudFxuICAgICAgICAgICAgICAgIHRpdGxlPXt0ZXN0LnJ1Lm5hbWV9XG4gICAgICAgICAgICAgICAgdGVzdERhdGE9e3Rlc3R9Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0X3NlbGVjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/client/test_selection.tsx\n");

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