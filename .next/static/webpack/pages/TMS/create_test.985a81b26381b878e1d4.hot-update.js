webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/styles/PhotoManager.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/styles/PhotoManager.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/next/node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".PhotoManager_PhotosContainer__2wWkl {\\n  margin: 0 1rem;\\n  display: grid;\\n  position: relative;\\n  grid-template-columns: repeat(4, auto);\\n  grid-template-rows: auto;\\n  grid-row-gap: 1.5rem;\\n  row-gap: 1.5rem;\\n  grid-column-gap: 0.1rem;\\n  -webkit-column-gap: 0.1rem;\\n     -moz-column-gap: 0.1rem;\\n          column-gap: 0.1rem;\\n  justify-items: center;\\n  width: 100%;\\n  -webkit-transition: opacity 0.3s linear, z-index 0.3s step-start;\\n  transition: opacity 0.3s linear, z-index 0.3s step-start;\\n  opacity: 1;\\n  visibility: visible;\\n  z-index: 10;\\n}\\n.PhotoManager_PhotosContainer__2wWkl.PhotoManager_Hidden__19uT2 {\\n  opacity: 0;\\n  z-index: -10;\\n  -webkit-transition: opacity 0.3s linear, z-index 0.3s step-end;\\n  transition: opacity 0.3s linear, z-index 0.3s step-end;\\n}\\n\\n.PhotoManager_headerIconContainer__vvgWc {\\n  width: 90%;\\n  display: -moz-box;\\n  display: flex;\\n  margin: 0.5rem;\\n  -moz-box-orient: horizontal;\\n  -moz-box-direction: normal;\\n       flex-direction: row;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.PhotoManager_headerIconContainer__vvgWc label {\\n  width: 10%;\\n}\\n.PhotoManager_headerIconContainer__vvgWc label input[type=file] {\\n  display: none;\\n}\\n.PhotoManager_headerIconContainer__vvgWc label .PhotoManager_uploadIcon__1FKQf {\\n  width: 2.5rem;\\n  background-color: #beab9b;\\n  border: solid #beab9b;\\n  border-radius: 50%;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/styles/PhotoManager.module.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,cAAA;EACA,aAAA;EACA,kBAAA;EACA,sCAAA;EACA,wBAAA;EACA,oBAAA;EAAA,eAAA;EACA,uBAAA;EAAA,0BAAA;KAAA,uBAAA;UAAA,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,gEAAA;EAAA,wDAAA;EAGA,UAAA;EACA,mBAAA;EACA,WAAA;AAJF;AAME;EACE,UAAA;EACA,YAAA;EACA,8DAAA;EAAA,sDAAA;AAJJ;;AASA;EACE,UAAA;EACA,iBAAA;EAAA,aAAA;EACA,cAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,sBAAA;OAAA,8BAAA;EACA,sBAAA;OAAA,mBAAA;AANF;AAQE;EACE,UAAA;AANJ;AAOI;EACE,aAAA;AALN;AAOI;EACE,aAAA;EACA,yBA3CM;EA4CN,qBAAA;EACA,kBAAA;AALN\",\"file\":\"PhotoManager.module.scss\",\"sourcesContent\":[\"$bg-colour: rgb(190 171 155);\\n$transitionDuration: 0.3s;\\n\\n.PhotosContainer {\\n  margin: 0 1rem;\\n  display: grid;\\n  position: relative;\\n  grid-template-columns: repeat(4, auto);\\n  grid-template-rows: auto;\\n  row-gap: 1.5rem;\\n  column-gap: 0.1rem;\\n  justify-items: center;\\n  width: 100%;\\n  transition: opacity $transitionDuration linear,\\n    z-index $transitionDuration step-start;\\n\\n  opacity: 1;\\n  visibility: visible;\\n  z-index: 10;\\n\\n  &.Hidden {\\n    opacity: 0;\\n    z-index: -10;\\n    transition: opacity $transitionDuration linear,\\n      z-index $transitionDuration step-end;\\n  }\\n}\\n\\n.headerIconContainer {\\n  width: 90%;\\n  display: flex;\\n  margin: 0.5rem;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n\\n  label {\\n    width: 10%;\\n    input[type=\\\"file\\\"] {\\n      display: none;\\n    }\\n    .uploadIcon {\\n      width: 2.5rem;\\n      background-color: $bg-colour;\\n      border: solid $bg-colour;\\n      border-radius: 50%;\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"PhotosContainer\": \"PhotoManager_PhotosContainer__2wWkl\",\n\t\"Hidden\": \"PhotoManager_Hidden__19uT2\",\n\t\"headerIconContainer\": \"PhotoManager_headerIconContainer__vvgWc\",\n\t\"uploadIcon\": \"PhotoManager_uploadIcon__1FKQf\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvUGhvdG9NYW5hZ2VyLm1vZHVsZS5zY3NzPzkzMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0SUFBcUU7QUFDL0c7QUFDQTtBQUNBLGNBQWMsUUFBUyx5Q0FBeUMsbUJBQW1CLGtCQUFrQix1QkFBdUIsMkNBQTJDLDZCQUE2Qix5QkFBeUIsb0JBQW9CLDRCQUE0QiwrQkFBK0IsK0JBQStCLCtCQUErQiwwQkFBMEIsZ0JBQWdCLHFFQUFxRSw2REFBNkQsZUFBZSx3QkFBd0IsZ0JBQWdCLEdBQUcsbUVBQW1FLGVBQWUsaUJBQWlCLG1FQUFtRSwyREFBMkQsR0FBRyw4Q0FBOEMsZUFBZSxzQkFBc0Isa0JBQWtCLG1CQUFtQixnQ0FBZ0MsK0JBQStCLDZCQUE2QiwyQkFBMkIsd0NBQXdDLDJCQUEyQiw2QkFBNkIsR0FBRyxrREFBa0QsZUFBZSxHQUFHLG1FQUFtRSxrQkFBa0IsR0FBRyxrRkFBa0Ysa0JBQWtCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEdBQUcsT0FBTyw2S0FBNkssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyx3RkFBd0YsNEJBQTRCLHNCQUFzQixtQkFBbUIsa0JBQWtCLHVCQUF1QiwyQ0FBMkMsNkJBQTZCLG9CQUFvQix1QkFBdUIsMEJBQTBCLGdCQUFnQixnR0FBZ0csaUJBQWlCLHdCQUF3QixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixtQkFBbUIsa0dBQWtHLEtBQUssR0FBRywwQkFBMEIsZUFBZSxrQkFBa0IsbUJBQW1CLHdCQUF3QixtQ0FBbUMsd0JBQXdCLGFBQWEsaUJBQWlCLDRCQUE0QixzQkFBc0IsT0FBTyxtQkFBbUIsc0JBQXNCLHFDQUFxQyxpQ0FBaUMsMkJBQTJCLE9BQU8sS0FBSyxHQUFHLEtBQUs7QUFDaHBHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvc3R5bGVzL1Bob3RvTWFuYWdlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QaG90b01hbmFnZXJfUGhvdG9zQ29udGFpbmVyX18yd1drbCB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMS41cmVtO1xcbiAgcm93LWdhcDogMS41cmVtO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjFyZW07XFxuICAtd2Via2l0LWNvbHVtbi1nYXA6IDAuMXJlbTtcXG4gICAgIC1tb3otY29sdW1uLWdhcDogMC4xcmVtO1xcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAwLjFyZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgei1pbmRleCAwLjNzIHN0ZXAtc3RhcnQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCB6LWluZGV4IDAuM3Mgc3RlcC1zdGFydDtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5QaG90b01hbmFnZXJfUGhvdG9zQ29udGFpbmVyX18yd1drbC5QaG90b01hbmFnZXJfSGlkZGVuX18xOXVUMiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogLTEwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCB6LWluZGV4IDAuM3Mgc3RlcC1lbmQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCB6LWluZGV4IDAuM3Mgc3RlcC1lbmQ7XFxufVxcblxcbi5QaG90b01hbmFnZXJfaGVhZGVySWNvbkNvbnRhaW5lcl9fdnZnV2Mge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uUGhvdG9NYW5hZ2VyX2hlYWRlckljb25Db250YWluZXJfX3Z2Z1djIGxhYmVsIHtcXG4gIHdpZHRoOiAxMCU7XFxufVxcbi5QaG90b01hbmFnZXJfaGVhZGVySWNvbkNvbnRhaW5lcl9fdnZnV2MgbGFiZWwgaW5wdXRbdHlwZT1maWxlXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uUGhvdG9NYW5hZ2VyX2hlYWRlckljb25Db250YWluZXJfX3Z2Z1djIGxhYmVsIC5QaG90b01hbmFnZXJfdXBsb2FkSWNvbl9fMUZLUWYge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWFiOWI7XFxuICBib3JkZXI6IHNvbGlkICNiZWFiOWI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy95YmVyZm94MjI4L0RvY3VtZW50cy9pdGxlbW9uYWRlL2YtbXVzZXVtL3RlY2gvQ1MvbW9kZXMtbXV6ZWpzLWNsaWVudC9jb21wb25lbnRzL3N0eWxlcy9QaG90b01hbmFnZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQUEsZUFBQTtFQUNBLHVCQUFBO0VBQUEsMEJBQUE7S0FBQSx1QkFBQTtVQUFBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0VBQUE7RUFBQSx3REFBQTtFQUdBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFKRjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSw4REFBQTtFQUFBLHNEQUFBO0FBSko7O0FBU0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQUEsMEJBQUE7T0FBQSxtQkFBQTtFQUNBLHNCQUFBO09BQUEsOEJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0FBTkY7QUFRRTtFQUNFLFVBQUE7QUFOSjtBQU9JO0VBQ0UsYUFBQTtBQUxOO0FBT0k7RUFDRSxhQUFBO0VBQ0EseUJBM0NNO0VBNENOLHFCQUFBO0VBQ0Esa0JBQUE7QUFMTlwiLFwiZmlsZVwiOlwiUGhvdG9NYW5hZ2VyLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRiZy1jb2xvdXI6IHJnYigxOTAgMTcxIDE1NSk7XFxuJHRyYW5zaXRpb25EdXJhdGlvbjogMC4zcztcXG5cXG4uUGhvdG9zQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMS41cmVtO1xcbiAgY29sdW1uLWdhcDogMC4xcmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc2l0aW9uRHVyYXRpb24gbGluZWFyLFxcbiAgICB6LWluZGV4ICR0cmFuc2l0aW9uRHVyYXRpb24gc3RlcC1zdGFydDtcXG5cXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgei1pbmRleDogMTA7XFxuXFxuICAmLkhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IC0xMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdHJhbnNpdGlvbkR1cmF0aW9uIGxpbmVhcixcXG4gICAgICB6LWluZGV4ICR0cmFuc2l0aW9uRHVyYXRpb24gc3RlcC1lbmQ7XFxuICB9XFxufVxcblxcbi5oZWFkZXJJY29uQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGxhYmVsIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC51cGxvYWRJY29uIHtcXG4gICAgICB3aWR0aDogMi41cmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvdXI7XFxuICAgICAgYm9yZGVyOiBzb2xpZCAkYmctY29sb3VyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJQaG90b3NDb250YWluZXJcIjogXCJQaG90b01hbmFnZXJfUGhvdG9zQ29udGFpbmVyX18yd1drbFwiLFxuXHRcIkhpZGRlblwiOiBcIlBob3RvTWFuYWdlcl9IaWRkZW5fXzE5dVQyXCIsXG5cdFwiaGVhZGVySWNvbkNvbnRhaW5lclwiOiBcIlBob3RvTWFuYWdlcl9oZWFkZXJJY29uQ29udGFpbmVyX192dmdXY1wiLFxuXHRcInVwbG9hZEljb25cIjogXCJQaG90b01hbmFnZXJfdXBsb2FkSWNvbl9fMUZLUWZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/styles/PhotoManager.module.scss\n");

/***/ })

})