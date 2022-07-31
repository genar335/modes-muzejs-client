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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/client/languages.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/client/languages.tsx":
/*!************************************!*\
  !*** ./pages/client/languages.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/languages.module.scss */ \"./pages/styles/languages.module.scss\");\n/* harmony import */ var _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store */ \"store\");\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/yberfox/Documents/personal-projects/modes-muzejs-client/pages/client/languages.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Languages(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    testid\n  } = router.query;\n  const btnStyle = {\n    height: \"100%\",\n    width: \"100%\",\n    border: \"none\",\n    background: \"none\"\n  };\n  const pStyle = {\n    margin: \"0\",\n    fontFamily: `\"Montserrat\", sans-serif`\n  };\n  return __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pageContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png\",\n    alt: \"logo\",\n    id: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MMlogo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangSelectContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LangHeaders,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"L\\u016Bdzu, izv\\u0113leties savu valodu!\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u0432\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u044F\\u0437\\u044B\\u043A!\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"Please, choose your language!\")), __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.langLinkContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LinksContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    style: btnStyle,\n    onClick: () => {\n      store__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"activeLang\", \"lv\");\n      router.push(`/client/test?testid=${testid}&lang=lv`);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    style: pStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, \"Latvie\\u0161u\"))), __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LinksContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    style: btnStyle,\n    onClick: () => {\n      store__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"activeLang\", \"ru\");\n      router.push(`/client/test?testid=${testid}&lang=ru`);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    style: pStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"\\u0420\\u0443\\u0441\\u0441\\u043A\\u0438\\u0439\"))), __jsx(\"div\", {\n    className: _styles_languages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.LinksContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    style: btnStyle,\n    onClick: () => {\n      store__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"activeLang\", \"en\");\n      router.push(`/client/test?testid=${testid}&lang=en`);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    style: pStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"English\"))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Languages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvbGFuZ3VhZ2VzLnRzeD8zZjFkIl0sIm5hbWVzIjpbIkxhbmd1YWdlcyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGVzdGlkIiwicXVlcnkiLCJidG5TdHlsZSIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBTdHlsZSIsIm1hcmdpbiIsImZvbnRGYW1pbHkiLCJzdHlsZXMiLCJwYWdlQ29udGFpbmVyIiwiTU1sb2dvIiwiTGFuZ1NlbGVjdENvbnRhaW5lciIsIkxhbmdIZWFkZXJzIiwibGFuZ0xpbmtDb250YWluZXIiLCJMaW5rc0NvbnRhaW5lciIsInN0b3JlIiwic2V0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBYUYsTUFBTSxDQUFDRyxLQUExQjtBQUVBLFFBQU1DLFFBQTZCLEdBQUc7QUFDcENDLFVBQU0sRUFBRSxNQUQ0QjtBQUVwQ0MsU0FBSyxFQUFFLE1BRjZCO0FBR3BDQyxVQUFNLEVBQUUsTUFINEI7QUFJcENDLGNBQVUsRUFBRTtBQUp3QixHQUF0QztBQU9BLFFBQU1DLE1BQTJCLEdBQUc7QUFDbENDLFVBQU0sRUFBRSxHQUQwQjtBQUVsQ0MsY0FBVSxFQUFHO0FBRnFCLEdBQXBDO0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsb0VBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLDhFQUROO0FBRUUsT0FBRyxFQUFDLE1BRk47QUFHRSxNQUFFLEVBQUVELG9FQUFNLENBQUNFLE1BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVGLG9FQUFNLENBQUNHLG1CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVILG9FQUFNLENBQUNJLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBSEYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFFSixvRUFBTSxDQUFDSyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxvRUFBTSxDQUFDTSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUVkLFFBRFQ7QUFFRSxXQUFPLEVBQUUsTUFBTTtBQUNiZSxrREFBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF3QixJQUF4QjtBQUNBcEIsWUFBTSxDQUFDcUIsSUFBUCxDQUFhLHVCQUFzQm5CLE1BQU8sVUFBMUM7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFHLFNBQUssRUFBRU8sTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLENBREYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFFRyxvRUFBTSxDQUFDTSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUVkLFFBRFQ7QUFFRSxXQUFPLEVBQUUsTUFBTTtBQUNiZSxrREFBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF3QixJQUF4QjtBQUNBcEIsWUFBTSxDQUFDcUIsSUFBUCxDQUFhLHVCQUFzQm5CLE1BQU8sVUFBMUM7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFHLFNBQUssRUFBRU8sTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQVBGLENBREYsQ0FiRixFQXdCRTtBQUFLLGFBQVMsRUFBRUcsb0VBQU0sQ0FBQ00sY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFZCxRQURUO0FBRUUsV0FBTyxFQUFFLE1BQU07QUFDYmUsa0RBQUssQ0FBQ0MsR0FBTixDQUFVLFlBQVYsRUFBd0IsSUFBeEI7QUFDQXBCLFlBQU0sQ0FBQ3FCLElBQVAsQ0FBYSx1QkFBc0JuQixNQUFPLFVBQTFDO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBRyxTQUFLLEVBQUVPLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLENBREYsQ0F4QkYsQ0FORixDQU5GLENBREY7QUFvREQ7O0FBRWNYLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2xpZW50L2xhbmd1YWdlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9sYW5ndWFnZXMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmVcIjtcblxuZnVuY3Rpb24gTGFuZ3VhZ2VzKHByb3BzOiBhbnkpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdGVzdGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgYnRuU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcbiAgfTtcblxuICBjb25zdCBwU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgbWFyZ2luOiBcIjBcIixcbiAgICBmb250RmFtaWx5OiBgXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWZgLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFzaGlvbm11c2V1bXJpZ2EubHYvYml0cml4L3RlbXBsYXRlcy9tYWluX3RlbXBsYXRlL2ltZy9sb2dvLnBuZ1wiXG4gICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICBpZD17c3R5bGVzLk1NbG9nb31cbiAgICAgID48L2ltZz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGFuZ1NlbGVjdENvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGFuZ0hlYWRlcnN9PlxuICAgICAgICAgIDxwPkzFq2R6dSwgaXp2xJNsZXRpZXMgc2F2dSB2YWxvZHUhPC9wPlxuICAgICAgICAgIDxwPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstGL0LHQtdGA0LjRgtC1INGP0LfRi9C6ITwvcD5cbiAgICAgICAgICA8cD5QbGVhc2UsIGNob29zZSB5b3VyIGxhbmd1YWdlITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ0xpbmtDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGlua3NDb250YWluZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17YnRuU3R5bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQoXCJhY3RpdmVMYW5nXCIsIFwibHZcIik7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9jbGllbnQvdGVzdD90ZXN0aWQ9JHt0ZXN0aWR9Jmxhbmc9bHZgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qICAgICBocmVmPXtgL2NsaWVudC90ZXN0P3Rlc3RpZD0ke3Rlc3RpZH0mbGFuZz1sdmB9PiAqL31cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3BTdHlsZX0+TGF0dmllxaF1PC9wPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5MaW5rc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXtidG5TdHlsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldChcImFjdGl2ZUxhbmdcIiwgXCJydVwiKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2NsaWVudC90ZXN0P3Rlc3RpZD0ke3Rlc3RpZH0mbGFuZz1ydWApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBzdHlsZT17cFN0eWxlfT7QoNGD0YHRgdC60LjQuTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGlua3NDb250YWluZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17YnRuU3R5bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQoXCJhY3RpdmVMYW5nXCIsIFwiZW5cIik7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9jbGllbnQvdGVzdD90ZXN0aWQ9JHt0ZXN0aWR9Jmxhbmc9ZW5gKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3BTdHlsZX0+RW5nbGlzaDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/client/languages.tsx\n");

/***/ }),

/***/ "./pages/styles/languages.module.scss":
/*!********************************************!*\
  !*** ./pages/styles/languages.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"pageContainer\": \"languages_pageContainer__1gNLa\",\n\t\"MMlogo\": \"languages_MMlogo__3QeII\",\n\t\"LangSelectContainer\": \"languages_LangSelectContainer__1KSap\",\n\t\"LangHeaders\": \"languages_LangHeaders__26PuY\",\n\t\"langLinkContainer\": \"languages_langLinkContainer__1nbtj\",\n\t\"LinksContainer\": \"languages_LinksContainer__3NaS5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMvbGFuZ3VhZ2VzLm1vZHVsZS5zY3NzPzRkZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvc3R5bGVzL2xhbmd1YWdlcy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhZ2VDb250YWluZXJcIjogXCJsYW5ndWFnZXNfcGFnZUNvbnRhaW5lcl9fMWdOTGFcIixcblx0XCJNTWxvZ29cIjogXCJsYW5ndWFnZXNfTU1sb2dvX18zUWVJSVwiLFxuXHRcIkxhbmdTZWxlY3RDb250YWluZXJcIjogXCJsYW5ndWFnZXNfTGFuZ1NlbGVjdENvbnRhaW5lcl9fMUtTYXBcIixcblx0XCJMYW5nSGVhZGVyc1wiOiBcImxhbmd1YWdlc19MYW5nSGVhZGVyc19fMjZQdVlcIixcblx0XCJsYW5nTGlua0NvbnRhaW5lclwiOiBcImxhbmd1YWdlc19sYW5nTGlua0NvbnRhaW5lcl9fMW5idGpcIixcblx0XCJMaW5rc0NvbnRhaW5lclwiOiBcImxhbmd1YWdlc19MaW5rc0NvbnRhaW5lcl9fM05hUzVcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/styles/languages.module.scss\n");

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