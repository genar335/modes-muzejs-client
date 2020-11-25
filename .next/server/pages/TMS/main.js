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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/TMS/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GAssets/search_big.png":
/*!********************************!*\
  !*** ./GAssets/search_big.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABR0lEQVR4Ae3VAUQDYRiH8XA4HEIYhjBAOIQQBsABAoQDhBAOYTgMEIYBwhDCEMJhCCGEIcAwhCEMwzC8PXgjL3Hn++6K7uEHO+N/5+5ur62t4SL0kaoEPTRejCm2EAtzpAhQawHGkJLe0KtzTAExPvCICQps7HHE8N4t5JsXHMEW4toMe0cH3uqbMXmJ+yPGGqIm8NYMou5RthSidjiEc12I2qLjcDIDOHcOUQWqdgVRMzg3gKghqnYKUQs4lzsO6pqnzeR2yR9Qtdi8KJ1LHM8wM0+oc6F5yZ1V/O8ColJ4aWQ+BQco0w1ErRDCSx1zlV7RxU9FsB/hC3gtwQ6iNhgi1uMhjnGJJcScQC2lZlQZK4gaw3snmJcYskaGwPw+Qi0luMPSjHhChn189ew2yn9RO6od1cCo9C+NmiLArxchR4D/UVvbJ0/xvmJ6b7wKAAAAAElFTkSuQmCC\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9HQXNzZXRzL3NlYXJjaF9iaWcucG5nPzZmNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDIiwiZmlsZSI6Ii4vR0Fzc2V0cy9zZWFyY2hfYmlnLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFCUjBsRVFWUjRBZTNWQVVRRFlSaUg4WEE0SEVJWWhqQkFPSVFRQnNBQkFvUURoQkFPWVRnTUVJWUJ3aERDRU1KaENDR0VJY0F3aENFTXd6QzhQWGdqTDNIbisrNks3dUVITytOLzUrNXVyNjJ0NFNMMGthb0VQVFJlakNtMkVBdHpwQWhRYXdIR2tKTGUwS3R6VEFFeFB2Q0lDUXBzN0hIRThONHQ1SnNYSE1FVzR0b01lMGNIM3VxYk1YbUoreVBHR3FJbThOWU1vdTVSdGhTaWRqaUVjMTJJMnFMamNESURPSGNPVVFXcWRnVlJNemczZ0tnaHFuWUtVUXM0bHpzTzZwcW56ZVIyeVI5UXRkaThLSjFMSE04d00wK29jNkY1eVoxVi9POENvbEo0YVdRK0JRY28wdzFFclJEQ1N4MXpsVjdSeFU5RnNCL2hDM2d0d1E2aU5oZ2kxdU1oam5HSkpjU2NRQzJsWmxRWks0Z2F3M3NubUpjWXNrYUd3UHcrUWkwbHVNUFNqSGhDaG4xODlldzJ5bjlSTzZvZDFjQ285QytObWlMQXJ4Y2hSNEQvVVZ2YkowL3h2bUo2Yjd3S0FBQUFBRWxGVGtTdVFtQ0NcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./GAssets/search_big.png\n");

/***/ }),

/***/ "./components/ActiveTests.tsx":
/*!************************************!*\
  !*** ./components/ActiveTests.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"react-multi-carousel\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ActiveTests.module.scss */ \"./components/styles/ActiveTests.module.scss\");\n/* harmony import */ var _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/ActiveTests.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst ActiveTests = props => {\n  const createTestToRender = async () => {\n    return await props.getActiveTests(false);\n  };\n\n  const {\n    0: recievedTests,\n    1: setRecievedTests\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  const getTests = async () => {\n    // try {\n    //   const rTests = await Axios.get(\n    //     `http://localhost:4000/tests/getTest?active=${false}`\n    //   );\n    //   console.log(rTests.data);\n    //   setRecievedTests(rTests.data);\n    // } catch (error) {\n    //   alert(error);\n    // }\n    const fetchedTests = await props.getActiveTests(true);\n    setRecievedTests(fetchedTests);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getTests();\n    console.log(recievedTests);\n  }, []);\n  const responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 4\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1\n    }\n  };\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const handleAddTestClick = () => {\n    alert(\"Test addition should be happening right about now.\");\n    router.push(`/TMS/create_test`);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ActiveTestsContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"Active tests\"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    responsive: responsive,\n    ssr: true,\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Carousel,\n    showDots: true,\n    dotListClass: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.customDotListStyle,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, addATest(handleAddTestClick), recievedTests ? recievedTests.map((test, iterator) => __jsx(\"div\", {\n    key: iterator,\n    id: test._id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, test.en.name))) : null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveTests);\n\nfunction addATest(handleAddTestClick) {\n  return __jsx(\"div\", {\n    onClick: handleAddTestClick,\n    id: \"AddTest\",\n    className: _styles_ActiveTests_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.AddTestCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, \"+\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGl2ZVRlc3RzLnRzeD9lZmVlIl0sIm5hbWVzIjpbIkFjdGl2ZVRlc3RzIiwicHJvcHMiLCJjcmVhdGVUZXN0VG9SZW5kZXIiLCJnZXRBY3RpdmVUZXN0cyIsInJlY2lldmVkVGVzdHMiLCJzZXRSZWNpZXZlZFRlc3RzIiwidXNlU3RhdGUiLCJnZXRUZXN0cyIsImZldGNoZWRUZXN0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQWRkVGVzdENsaWNrIiwiYWxlcnQiLCJwdXNoIiwic3R5bGVzIiwiQWN0aXZlVGVzdHNDb250YWluZXIiLCJDYXJvdXNlbCIsImN1c3RvbURvdExpc3RTdHlsZSIsImFkZEFUZXN0IiwibWFwIiwidGVzdCIsIml0ZXJhdG9yIiwiX2lkIiwiZW4iLCJuYW1lIiwiQWRkVGVzdENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBS0EsTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBRWQ7QUFDSixRQUFNQyxrQkFBa0IsR0FBRyxZQUFZO0FBQ3JDLFdBQU8sTUFBTUQsS0FBSyxDQUFDRSxjQUFOLENBQXFCLEtBQXJCLENBQWI7QUFDRCxHQUZEOztBQUlBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxFQUFsRDs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxZQUFxQixHQUFHLE1BQU1QLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixJQUFyQixDQUFwQztBQUNBRSxvQkFBZ0IsQ0FBQ0csWUFBRCxDQUFoQjtBQUNELEdBWkQ7O0FBYUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixZQUFRO0FBQ1JHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxhQUFaO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFFBQU1RLFVBQVUsR0FBRztBQUNqQkMscUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FGSztBQUdqQkMsV0FBSyxFQUFFO0FBSFUsS0FERjtBQU1qQkMsV0FBTyxFQUFFO0FBQ1BKLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BREw7QUFFUEMsV0FBSyxFQUFFO0FBRkEsS0FOUTtBQVVqQkUsVUFBTSxFQUFFO0FBQ05MLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRE47QUFFTkMsV0FBSyxFQUFFO0FBRkQsS0FWUztBQWNqQkcsVUFBTSxFQUFFO0FBQ05OLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLEdBQVA7QUFBWUMsV0FBRyxFQUFFO0FBQWpCLE9BRE47QUFFTkMsV0FBSyxFQUFFO0FBRkQ7QUFkUyxHQUFuQjtBQW9CQSxRQUFNSSxNQUFrQixHQUFHQyw2REFBUyxFQUFwQzs7QUFFQSxRQUFNQyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CQyxTQUFLLENBQUMsb0RBQUQsQ0FBTDtBQUNBSCxVQUFNLENBQUNJLElBQVAsQ0FBYSxrQkFBYjtBQUNELEdBSEQ7O0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsc0VBQU0sQ0FBQ0Msb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQywyREFBRDtBQUNFLGNBQVUsRUFBRWYsVUFEZDtBQUVFLE9BQUcsRUFBRSxJQUZQO0FBR0UsYUFBUyxFQUFFYyxzRUFBTSxDQUFDRSxRQUhwQjtBQUlFLFlBQVEsRUFBRSxJQUpaO0FBS0UsZ0JBQVksRUFBRUYsc0VBQU0sQ0FBQ0csa0JBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0MsUUFBUSxDQUFDUCxrQkFBRCxDQVBYLEVBUUduQixhQUFhLEdBQ1ZBLGFBQWEsQ0FBQzJCLEdBQWQsQ0FBa0IsQ0FBQ0MsSUFBRCxFQUFjQyxRQUFkLEtBQ2hCO0FBQUssT0FBRyxFQUFFQSxRQUFWO0FBQW9CLE1BQUUsRUFBRUQsSUFBSSxDQUFDRSxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixJQUFJLENBQUNHLEVBQUwsQ0FBUUMsSUFBYixDQURGLENBREYsQ0FEVSxHQU1WLElBZE4sQ0FGRixDQURGO0FBcUJELENBMUVEOztBQTRFZXBDLDBFQUFmOztBQUNBLFNBQVM4QixRQUFULENBQWtCUCxrQkFBbEIsRUFBa0Q7QUFDaEQsU0FDRTtBQUNFLFdBQU8sRUFBRUEsa0JBRFg7QUFFRSxNQUFFLEVBQUMsU0FGTDtBQUdFLGFBQVMsRUFBRUcsc0VBQU0sQ0FBQ1csV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRixDQURGO0FBU0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjdGl2ZVRlc3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgVGVzdENhcmQgZnJvbSBcIi4vVGVzdENhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0FjdGl2ZVRlc3RzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBicm93biB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBJVGVzdCB9IGZyb20gXCIuLi9AdHlwZXMvdGVzdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBY3RpdmVUZXN0cyA9IChwcm9wczoge1xuICBnZXRBY3RpdmVUZXN0czogKGFjdGl2ZTogYm9vbGVhbikgPT4gUHJvbWlzZTxhbnk+O1xufSkgPT4ge1xuICBjb25zdCBjcmVhdGVUZXN0VG9SZW5kZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHByb3BzLmdldEFjdGl2ZVRlc3RzKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBbcmVjaWV2ZWRUZXN0cywgc2V0UmVjaWV2ZWRUZXN0c10gPSB1c2VTdGF0ZTxJVGVzdFtdPigpO1xuICBjb25zdCBnZXRUZXN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyB0cnkge1xuICAgIC8vICAgY29uc3QgclRlc3RzID0gYXdhaXQgQXhpb3MuZ2V0KFxuICAgIC8vICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL2dldFRlc3Q/YWN0aXZlPSR7ZmFsc2V9YFxuICAgIC8vICAgKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJUZXN0cy5kYXRhKTtcbiAgICAvLyAgIHNldFJlY2lldmVkVGVzdHMoclRlc3RzLmRhdGEpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBhbGVydChlcnJvcik7XG4gICAgLy8gfVxuICAgIGNvbnN0IGZldGNoZWRUZXN0czogSVRlc3RbXSA9IGF3YWl0IHByb3BzLmdldEFjdGl2ZVRlc3RzKHRydWUpO1xuICAgIHNldFJlY2lldmVkVGVzdHMoZmV0Y2hlZFRlc3RzKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUZXN0cygpO1xuICAgIGNvbnNvbGUubG9nKHJlY2lldmVkVGVzdHMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgIGl0ZW1zOiA1LFxuICAgIH0sXG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDQsXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDIsXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDEsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVBZGRUZXN0Q2xpY2sgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUZXN0IGFkZGl0aW9uIHNob3VsZCBiZSBoYXBwZW5pbmcgcmlnaHQgYWJvdXQgbm93LlwiKTtcbiAgICByb3V0ZXIucHVzaChgL1RNUy9jcmVhdGVfdGVzdGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BY3RpdmVUZXN0c0NvbnRhaW5lcn0+XG4gICAgICA8aDE+QWN0aXZlIHRlc3RzPC9oMT5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBzc3I9e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsfVxuICAgICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgICAgZG90TGlzdENsYXNzPXtzdHlsZXMuY3VzdG9tRG90TGlzdFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7YWRkQVRlc3QoaGFuZGxlQWRkVGVzdENsaWNrKX1cbiAgICAgICAge3JlY2lldmVkVGVzdHNcbiAgICAgICAgICA/IHJlY2lldmVkVGVzdHMubWFwKCh0ZXN0OiBJVGVzdCwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlcmF0b3J9IGlkPXt0ZXN0Ll9pZH0+XG4gICAgICAgICAgICAgICAgPGgxPnt0ZXN0LmVuLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVUZXN0cztcbmZ1bmN0aW9uIGFkZEFUZXN0KGhhbmRsZUFkZFRlc3RDbGljazogKCkgPT4gdm9pZCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFRlc3RDbGlja31cbiAgICAgIGlkPVwiQWRkVGVzdFwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5BZGRUZXN0Q2FyZH1cbiAgICA+XG4gICAgICA8c3Bhbj4rPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ActiveTests.tsx\n");

/***/ }),

/***/ "./components/Gallery.tsx":
/*!********************************!*\
  !*** ./components/Gallery.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GAssets/search_big.png */ \"./GAssets/search_big.png\");\n/* harmony import */ var _GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Gallery.module.scss */ \"./components/styles/Gallery.module.scss\");\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/Gallery.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Gallery = props => {\n  const {\n    0: recievedTests,\n    1: setRecievedTests\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  const getTests = async () => {\n    const fetchedTests = await props.getInactiveTests(false);\n    setRecievedTests(fetchedTests);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getTests();\n    console.log(recievedTests);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Gallery,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Test gallery\"), __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SearchAndFilter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SearchContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"search\",\n    name: \"testSearch\",\n    id: \"testSearch\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: _GAssets_search_big_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    alt: \"Looking glass icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }))), __jsx(\"select\", {\n    name: \"testTypeSelector\",\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.FilterContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Type1\"), __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"Type2\"), __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"Type3\"), __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Type4\"), __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Type5\"))), __jsx(\"div\", {\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tCardContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, recievedTests !== undefined ? recievedTests.map((test, iterator) => __jsx(\"div\", {\n    key: iterator,\n    className: _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tCardContainer,\n    id: test._id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, test.en.name), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, test.en.pages[0].QnAPairs[0].question))) : null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbGxlcnkudHN4Pzg0ODciXSwibmFtZXMiOlsiR2FsbGVyeSIsInByb3BzIiwicmVjaWV2ZWRUZXN0cyIsInNldFJlY2lldmVkVGVzdHMiLCJ1c2VTdGF0ZSIsImdldFRlc3RzIiwiZmV0Y2hlZFRlc3RzIiwiZ2V0SW5hY3RpdmVUZXN0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJTZWFyY2hBbmRGaWx0ZXIiLCJTZWFyY2hDb250YWluZXIiLCJzZWFyY2hJY29uIiwiRmlsdGVyQ29udGFpbmVyIiwidENhcmRDb250YWluZXIiLCJ1bmRlZmluZWQiLCJtYXAiLCJ0ZXN0IiwiaXRlcmF0b3IiLCJfaWQiLCJlbiIsIm5hbWUiLCJwYWdlcyIsIlFuQVBhaXJzIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFJQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFFVjtBQUNKLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxFQUFsRDs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsWUFBWTtBQUMzQixVQUFNQyxZQUFxQixHQUFHLE1BQU1MLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsS0FBdkIsQ0FBcEM7QUFDQUosb0JBQWdCLENBQUNHLFlBQUQsQ0FBaEI7QUFDRCxHQUhEOztBQUtBRSx5REFBUyxDQUFDLE1BQU07QUFDZEgsWUFBUTtBQUNSSSxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsYUFBWjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFUyxrRUFBTSxDQUFDWCxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssYUFBUyxFQUFFVyxrRUFBTSxDQUFDQyxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUVELGtFQUFNLENBQUNFLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxZQUExQjtBQUF1QyxNQUFFLEVBQUMsWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQyw4REFBVjtBQUFzQixPQUFHLEVBQUMsb0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBRkYsRUFTRTtBQUFRLFFBQUksRUFBQyxrQkFBYjtBQUFnQyxhQUFTLEVBQUVILGtFQUFNLENBQUNJLGVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0U7QUFBUSxTQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFJRTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLENBVEYsQ0FGRixFQW9CRTtBQUFLLGFBQVMsRUFBRUosa0VBQU0sQ0FBQ0ssY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxhQUFhLEtBQUtlLFNBQWxCLEdBQ0dmLGFBQWEsQ0FBQ2dCLEdBQWQsQ0FBa0IsQ0FBQ0MsSUFBRCxFQUFjQyxRQUFkLEtBQ2hCO0FBQ0UsT0FBRyxFQUFFQSxRQURQO0FBRUUsYUFBUyxFQUFFVCxrRUFBTSxDQUFDSyxjQUZwQjtBQUdFLE1BQUUsRUFBRUcsSUFBSSxDQUFDRSxHQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtGLElBQUksQ0FBQ0csRUFBTCxDQUFRQyxJQUFiLENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlKLElBQUksQ0FBQ0csRUFBTCxDQUFRRSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJDLFFBQWpDLENBTkYsQ0FERixDQURILEdBV0csSUFaTixDQXBCRixDQURGO0FBcUNELENBbkREOztBQXFEZTFCLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HYWxsZXJ5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGVzdENhcmQgZnJvbSBcIi4vVGVzdENhcmRcIjtcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gXCIuLi9HQXNzZXRzL3NlYXJjaF9iaWcucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB3aGl0ZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSVRlc3QgfSBmcm9tIFwiLi4vQHR5cGVzL3Rlc3RcIjtcblxuY29uc3QgR2FsbGVyeSA9IChwcm9wczoge1xuICBnZXRJbmFjdGl2ZVRlc3RzOiAoYWN0aXZlOiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG59KSA9PiB7XG4gIGNvbnN0IFtyZWNpZXZlZFRlc3RzLCBzZXRSZWNpZXZlZFRlc3RzXSA9IHVzZVN0YXRlPElUZXN0W10+KCk7XG4gIGNvbnN0IGdldFRlc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoZWRUZXN0czogSVRlc3RbXSA9IGF3YWl0IHByb3BzLmdldEluYWN0aXZlVGVzdHMoZmFsc2UpO1xuICAgIHNldFJlY2lldmVkVGVzdHMoZmV0Y2hlZFRlc3RzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRlc3RzKCk7XG4gICAgY29uc29sZS5sb2cocmVjaWV2ZWRUZXN0cyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2FsbGVyeX0+XG4gICAgICA8aDE+VGVzdCBnYWxsZXJ5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoQW5kRmlsdGVyfT5cbiAgICAgICAgey8qIC8vKiBTZWFyY2ggQmFyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaENvbnRhaW5lcn0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwidGVzdFNlYXJjaFwiIGlkPVwidGVzdFNlYXJjaFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzZWFyY2hJY29ufSBhbHQ9XCJMb29raW5nIGdsYXNzIGljb25cIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC8vKiBUZXN0IHR5cGUgZmlsdGVyICovfVxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0ZXN0VHlwZVNlbGVjdG9yXCIgY2xhc3NOYW1lPXtzdHlsZXMuRmlsdGVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VHlwZTU8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiAvLyogVGVzdCBHYWxsZXJ5ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50Q2FyZENvbnRhaW5lcn0+XG4gICAgICAgIHtyZWNpZXZlZFRlc3RzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHJlY2lldmVkVGVzdHMubWFwKCh0ZXN0OiBJVGVzdCwgaXRlcmF0b3I6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVyYXRvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50Q2FyZENvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICBpZD17dGVzdC5faWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDE+e3Rlc3QuZW4ubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPnt0ZXN0LmVuLnBhZ2VzWzBdLlFuQVBhaXJzWzBdLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gallery.tsx\n");

/***/ }),

/***/ "./components/styles/ActiveTests.module.scss":
/*!***************************************************!*\
  !*** ./components/styles/ActiveTests.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ActiveTestsContainer\": \"ActiveTests_ActiveTestsContainer__3BP8O\",\n\t\"Carousel\": \"ActiveTests_Carousel__2oB-r\",\n\t\"customDotListStyle\": \"ActiveTests_customDotListStyle__1ggrc\",\n\t\"AddTestCard\": \"ActiveTests_AddTestCard__Kue9a\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9BY3RpdmVUZXN0cy5tb2R1bGUuc2Nzcz9hZmZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdHlsZXMvQWN0aXZlVGVzdHMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBY3RpdmVUZXN0c0NvbnRhaW5lclwiOiBcIkFjdGl2ZVRlc3RzX0FjdGl2ZVRlc3RzQ29udGFpbmVyX18zQlA4T1wiLFxuXHRcIkNhcm91c2VsXCI6IFwiQWN0aXZlVGVzdHNfQ2Fyb3VzZWxfXzJvQi1yXCIsXG5cdFwiY3VzdG9tRG90TGlzdFN0eWxlXCI6IFwiQWN0aXZlVGVzdHNfY3VzdG9tRG90TGlzdFN0eWxlX18xZ2dyY1wiLFxuXHRcIkFkZFRlc3RDYXJkXCI6IFwiQWN0aXZlVGVzdHNfQWRkVGVzdENhcmRfX0t1ZTlhXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles/ActiveTests.module.scss\n");

/***/ }),

/***/ "./components/styles/Gallery.module.scss":
/*!***********************************************!*\
  !*** ./components/styles/Gallery.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Gallery\": \"Gallery_Gallery__3Ah15\",\n\t\"SearchAndFilter\": \"Gallery_SearchAndFilter__3JcDu\",\n\t\"SearchContainer\": \"Gallery_SearchContainer__aMCT8\",\n\t\"FilterContainer\": \"Gallery_FilterContainer__3Cb91\",\n\t\"tCardContainer\": \"Gallery_tCardContainer__3hQ5e\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5zY3NzP2E0NTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL0dhbGxlcnkubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJHYWxsZXJ5XCI6IFwiR2FsbGVyeV9HYWxsZXJ5X18zQWgxNVwiLFxuXHRcIlNlYXJjaEFuZEZpbHRlclwiOiBcIkdhbGxlcnlfU2VhcmNoQW5kRmlsdGVyX18zSmNEdVwiLFxuXHRcIlNlYXJjaENvbnRhaW5lclwiOiBcIkdhbGxlcnlfU2VhcmNoQ29udGFpbmVyX19hTUNUOFwiLFxuXHRcIkZpbHRlckNvbnRhaW5lclwiOiBcIkdhbGxlcnlfRmlsdGVyQ29udGFpbmVyX18zQ2I5MVwiLFxuXHRcInRDYXJkQ29udGFpbmVyXCI6IFwiR2FsbGVyeV90Q2FyZENvbnRhaW5lcl9fM2hRNWVcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Gallery.module.scss\n");

/***/ }),

/***/ "./pages/TMS/main.tsx":
/*!****************************!*\
  !*** ./pages/TMS/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ActiveTests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ActiveTests */ \"./components/ActiveTests.tsx\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Gallery */ \"./components/Gallery.tsx\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.module.scss */ \"./pages/styles/main.module.scss\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/pages/TMS/main.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nconst main = () => {\n  const getTestsByActive = async isTestActive => {\n    try {\n      const tests = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://localhost:4000/tests/getTest?active=${isTestActive}`);\n      return tests.data;\n    } catch (error) {\n      alert(error);\n      return [];\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_components_ActiveTests__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    getActiveTests: getTestsByActive,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    getInactiveTests: getTestsByActive,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9UTVMvbWFpbi50c3g/ZDU5ZCJdLCJuYW1lcyI6WyJtYWluIiwiZ2V0VGVzdHNCeUFjdGl2ZSIsImlzVGVzdEFjdGl2ZSIsInRlc3RzIiwiQXhpb3MiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsInN0eWxlcyIsIk1haW5Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxnQkFBZ0IsR0FBRyxNQUFPQyxZQUFQLElBQStDO0FBQ3RFLFFBQUk7QUFDRixZQUFNQyxLQUFLLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNqQiw4Q0FBNkNILFlBQWEsRUFEekMsQ0FBcEI7QUFHQSxhQUFPQyxLQUFLLENBQUNHLElBQWI7QUFDRCxLQUxELENBS0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLFdBQUssQ0FBQ0QsS0FBRCxDQUFMO0FBQ0EsYUFBTyxFQUFQO0FBQ0Q7QUFDRixHQVZEOztBQVlBLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLCtEQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWEsa0JBQWMsRUFBRVQsZ0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkRBQUQ7QUFBUyxvQkFBZ0IsRUFBRUEsZ0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FuQkQ7O0FBcUJlRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RNUy9tYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElUZXN0IH0gZnJvbSBcIi4uLy4uL0B0eXBlcy90ZXN0XCI7XG5pbXBvcnQgQWN0aXZlVGVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWN0aXZlVGVzdHNcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dhbGxlcnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9tYWluLm1vZHVsZS5zY3NzXCI7XG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBnZXRUZXN0c0J5QWN0aXZlID0gYXN5bmMgKGlzVGVzdEFjdGl2ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRlc3RzID0gYXdhaXQgQXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3RzL2dldFRlc3Q/YWN0aXZlPSR7aXNUZXN0QWN0aXZlfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGVzdHMuZGF0YSBhcyBJVGVzdFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluQ29udGFpbmVyfT5cbiAgICAgIDxBY3RpdmVUZXN0cyBnZXRBY3RpdmVUZXN0cz17Z2V0VGVzdHNCeUFjdGl2ZX0gLz5cbiAgICAgIDxHYWxsZXJ5IGdldEluYWN0aXZlVGVzdHM9e2dldFRlc3RzQnlBY3RpdmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TMS/main.tsx\n");

/***/ }),

/***/ "./pages/styles/main.module.scss":
/*!***************************************!*\
  !*** ./pages/styles/main.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"MainContainer\": \"main_MainContainer__3V0P7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMvbWFpbi5tb2R1bGUuc2Nzcz84Y2M4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvc3R5bGVzL21haW4ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluQ29udGFpbmVyXCI6IFwibWFpbl9NYWluQ29udGFpbmVyX18zVjBQN1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles/main.module.scss\n");

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

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-multi-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiP2FiODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbXVsdGktY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-multi-carousel\n");

/***/ })

/******/ });