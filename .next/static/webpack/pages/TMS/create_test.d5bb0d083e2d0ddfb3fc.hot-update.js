webpackHotUpdate_N_E("pages/TMS/create_test",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/styles/PhotoManager.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/styles/PhotoManager.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/next/node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".PhotoManager_PhotosContainer__2wWkl {\\n  display: grid;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background: rgba(224, 188, 163, 0.6);\\n  align-content: center;\\n  justify-items: center;\\n  width: 100vw;\\n  height: 100vh;\\n  -webkit-transition: opacity 0.3s linear, z-index 0.3s step-start;\\n  transition: opacity 0.3s linear, z-index 0.3s step-start;\\n  opacity: 1;\\n  visibility: visible;\\n  z-index: 10;\\n}\\n.PhotoManager_PhotosContainer__2wWkl.PhotoManager_Hidden__19uT2 {\\n  opacity: 0;\\n  z-index: -10;\\n  -webkit-transition: opacity 0.3s linear, z-index 0.3s step-end;\\n  transition: opacity 0.3s linear, z-index 0.3s step-end;\\n}\\n.PhotoManager_PhotosContainer__2wWkl .PhotoManager_Contents__3hDF0 {\\n  width: 60vw;\\n  height: 70vh;\\n  background-color: whitesmoke;\\n  border-radius: 14px;\\n  -moz-box-sizing: border-box;\\n       box-sizing: border-box;\\n  padding: 4rem 6rem;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n  -moz-box-pack: center;\\n       justify-content: center;\\n}\\n.PhotoManager_PhotosContainer__2wWkl .PhotoManager_Contents__3hDF0 .PhotoManager_headerIconContainer__vvgWc {\\n  width: 100%;\\n  display: -moz-box;\\n  display: flex;\\n  align-self: flex-start;\\n  -moz-box-orient: horizontal;\\n  -moz-box-direction: normal;\\n       flex-direction: row;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.PhotoManager_PhotosContainer__2wWkl .PhotoManager_Contents__3hDF0 .PhotoManager_headerIconContainer__vvgWc label {\\n  width: 10%;\\n}\\n.PhotoManager_PhotosContainer__2wWkl .PhotoManager_Contents__3hDF0 .PhotoManager_headerIconContainer__vvgWc label input[type=file] {\\n  display: none;\\n}\\n.PhotoManager_PhotosContainer__2wWkl .PhotoManager_Contents__3hDF0 .PhotoManager_headerIconContainer__vvgWc label .PhotoManager_uploadIcon__1FKQf {\\n  width: 2.5rem;\\n  background-color: #beab9b;\\n  border: solid #beab9b;\\n  border-radius: 50%;\\n  justify-self: flex-start;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/styles/PhotoManager.module.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,aAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;EACA,qBAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,gEAAA;EAAA,wDAAA;EAGA,UAAA;EACA,mBAAA;EACA,WAAA;AAJF;AAME;EACE,UAAA;EACA,YAAA;EACA,8DAAA;EAAA,sDAAA;AAJJ;AAOE;EACE,WAAA;EACA,YAAA;EACA,4BAAA;EACA,mBAAA;EACA,2BAAA;OAAA,sBAAA;EACA,kBAAA;EACA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,qBAAA;OAAA,uBAAA;AALJ;AAOI;EACE,WAAA;EACA,iBAAA;EAAA,aAAA;EACA,sBAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,sBAAA;OAAA,8BAAA;EACA,sBAAA;OAAA,mBAAA;AALN;AAOM;EACE,UAAA;AALR;AAMQ;EACE,aAAA;AAJV;AAMQ;EACE,aAAA;EACA,yBApDE;EAqDF,qBAAA;EACA,kBAAA;EACA,wBAAA;AAJV\",\"file\":\"PhotoManager.module.scss\",\"sourcesContent\":[\"$bg-colour: rgb(190 171 155);\\n$transitionDuration: 0.3s;\\n\\n.PhotosContainer {\\n  display: grid;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background: rgba(224, 188, 163, 0.6);\\n  align-content: center;\\n  justify-items: center;\\n  width: 100vw;\\n  height: 100vh;\\n  transition: opacity $transitionDuration linear,\\n    z-index $transitionDuration step-start;\\n\\n  opacity: 1;\\n  visibility: visible;\\n  z-index: 10;\\n\\n  &.Hidden {\\n    opacity: 0;\\n    z-index: -10;\\n    transition: opacity $transitionDuration linear,\\n      z-index $transitionDuration step-end;\\n  }\\n  .Contents {\\n    width: 60vw;\\n    height: 70vh;\\n    background-color: whitesmoke;\\n    border-radius: 14px;\\n    box-sizing: border-box;\\n    padding: 4rem 6rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n\\n    .headerIconContainer {\\n      width: 100%;\\n      display: flex;\\n      align-self: flex-start;\\n      flex-direction: row;\\n      justify-content: space-between;\\n      align-items: center;\\n\\n      label {\\n        width: 10%;\\n        input[type=\\\"file\\\"] {\\n          display: none;\\n        }\\n        .uploadIcon {\\n          width: 2.5rem;\\n          background-color: $bg-colour;\\n          border: solid $bg-colour;\\n          border-radius: 50%;\\n          justify-self: flex-start;\\n        }\\n      }\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"PhotosContainer\": \"PhotoManager_PhotosContainer__2wWkl\",\n\t\"Hidden\": \"PhotoManager_Hidden__19uT2\",\n\t\"Contents\": \"PhotoManager_Contents__3hDF0\",\n\t\"headerIconContainer\": \"PhotoManager_headerIconContainer__vvgWc\",\n\t\"uploadIcon\": \"PhotoManager_uploadIcon__1FKQf\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvUGhvdG9NYW5hZ2VyLm1vZHVsZS5zY3NzPzkzMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0SUFBcUU7QUFDL0c7QUFDQTtBQUNBLGNBQWMsUUFBUyx5Q0FBeUMsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVkseUNBQXlDLDBCQUEwQiwwQkFBMEIsaUJBQWlCLGtCQUFrQixxRUFBcUUsNkRBQTZELGVBQWUsd0JBQXdCLGdCQUFnQixHQUFHLG1FQUFtRSxlQUFlLGlCQUFpQixtRUFBbUUsMkRBQTJELEdBQUcsc0VBQXNFLGdCQUFnQixpQkFBaUIsaUNBQWlDLHdCQUF3QixnQ0FBZ0MsZ0NBQWdDLHVCQUF1QixzQkFBc0Isa0JBQWtCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLDBCQUEwQixpQ0FBaUMsR0FBRywrR0FBK0csZ0JBQWdCLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdDQUFnQywrQkFBK0IsNkJBQTZCLDJCQUEyQix3Q0FBd0MsMkJBQTJCLDZCQUE2QixHQUFHLHFIQUFxSCxlQUFlLEdBQUcsc0lBQXNJLGtCQUFrQixHQUFHLHFKQUFxSixrQkFBa0IsOEJBQThCLDBCQUEwQix1QkFBdUIsNkJBQTZCLEdBQUcsT0FBTyw2S0FBNkssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLHdGQUF3Riw0QkFBNEIsc0JBQXNCLGtCQUFrQix1QkFBdUIsV0FBVyxZQUFZLHlDQUF5QywwQkFBMEIsMEJBQTBCLGlCQUFpQixrQkFBa0IsZ0dBQWdHLGlCQUFpQix3QkFBd0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtHQUFrRyxLQUFLLGVBQWUsa0JBQWtCLG1CQUFtQixtQ0FBbUMsMEJBQTBCLDZCQUE2Qix5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsOEJBQThCLG9CQUFvQixzQkFBc0IsK0JBQStCLDRCQUE0Qix1Q0FBdUMsNEJBQTRCLGlCQUFpQixxQkFBcUIsZ0NBQWdDLDBCQUEwQixXQUFXLHVCQUF1QiwwQkFBMEIseUNBQXlDLHFDQUFxQywrQkFBK0IscUNBQXFDLFdBQVcsU0FBUyxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3JzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvc3R5bGVzL1Bob3RvTWFuYWdlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QaG90b01hbmFnZXJfUGhvdG9zQ29udGFpbmVyX18yd1drbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAxODgsIDE2MywgMC42KTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHotaW5kZXggMC4zcyBzdGVwLXN0YXJ0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgei1pbmRleCAwLjNzIHN0ZXAtc3RhcnQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4uUGhvdG9NYW5hZ2VyX1Bob3Rvc0NvbnRhaW5lcl9fMndXa2wuUGhvdG9NYW5hZ2VyX0hpZGRlbl9fMTl1VDIge1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IC0xMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgei1pbmRleCAwLjNzIHN0ZXAtZW5kO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgei1pbmRleCAwLjNzIHN0ZXAtZW5kO1xcbn1cXG4uUGhvdG9NYW5hZ2VyX1Bob3Rvc0NvbnRhaW5lcl9fMndXa2wgLlBob3RvTWFuYWdlcl9Db250ZW50c19fM2hERjAge1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDRyZW0gNnJlbTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5QaG90b01hbmFnZXJfUGhvdG9zQ29udGFpbmVyX18yd1drbCAuUGhvdG9NYW5hZ2VyX0NvbnRlbnRzX18zaERGMCAuUGhvdG9NYW5hZ2VyX2hlYWRlckljb25Db250YWluZXJfX3Z2Z1djIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLlBob3RvTWFuYWdlcl9QaG90b3NDb250YWluZXJfXzJ3V2tsIC5QaG90b01hbmFnZXJfQ29udGVudHNfXzNoREYwIC5QaG90b01hbmFnZXJfaGVhZGVySWNvbkNvbnRhaW5lcl9fdnZnV2MgbGFiZWwge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuLlBob3RvTWFuYWdlcl9QaG90b3NDb250YWluZXJfXzJ3V2tsIC5QaG90b01hbmFnZXJfQ29udGVudHNfXzNoREYwIC5QaG90b01hbmFnZXJfaGVhZGVySWNvbkNvbnRhaW5lcl9fdnZnV2MgbGFiZWwgaW5wdXRbdHlwZT1maWxlXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uUGhvdG9NYW5hZ2VyX1Bob3Rvc0NvbnRhaW5lcl9fMndXa2wgLlBob3RvTWFuYWdlcl9Db250ZW50c19fM2hERjAgLlBob3RvTWFuYWdlcl9oZWFkZXJJY29uQ29udGFpbmVyX192dmdXYyBsYWJlbCAuUGhvdG9NYW5hZ2VyX3VwbG9hZEljb25fXzFGS1FmIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVhYjliO1xcbiAgYm9yZGVyOiBzb2xpZCAjYmVhYjliO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMveWJlcmZveDIyOC9Eb2N1bWVudHMvaXRsZW1vbmFkZS9mLW11c2V1bS90ZWNoL0NTL21vZGVzLW11emVqcy1jbGllbnQvY29tcG9uZW50cy9zdHlsZXMvUGhvdG9NYW5hZ2VyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdFQUFBO0VBQUEsd0RBQUE7RUFHQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSkY7QUFNRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOERBQUE7RUFBQSxzREFBQTtBQUpKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtPQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0FBTEo7QUFPSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQUEsMEJBQUE7T0FBQSxtQkFBQTtFQUNBLHNCQUFBO09BQUEsOEJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0FBTE47QUFPTTtFQUNFLFVBQUE7QUFMUjtBQU1RO0VBQ0UsYUFBQTtBQUpWO0FBTVE7RUFDRSxhQUFBO0VBQ0EseUJBcERFO0VBcURGLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpWXCIsXCJmaWxlXCI6XCJQaG90b01hbmFnZXIubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJnLWNvbG91cjogcmdiKDE5MCAxNzEgMTU1KTtcXG4kdHJhbnNpdGlvbkR1cmF0aW9uOiAwLjNzO1xcblxcbi5QaG90b3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMTg4LCAxNjMsIDAuNik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdHJhbnNpdGlvbkR1cmF0aW9uIGxpbmVhcixcXG4gICAgei1pbmRleCAkdHJhbnNpdGlvbkR1cmF0aW9uIHN0ZXAtc3RhcnQ7XFxuXFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgJi5IaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAtMTA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zaXRpb25EdXJhdGlvbiBsaW5lYXIsXFxuICAgICAgei1pbmRleCAkdHJhbnNpdGlvbkR1cmF0aW9uIHN0ZXAtZW5kO1xcbiAgfVxcbiAgLkNvbnRlbnRzIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNHJlbSA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLmhlYWRlckljb25Db250YWluZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICBpbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnVwbG9hZEljb24ge1xcbiAgICAgICAgICB3aWR0aDogMi41cmVtO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3VyO1xcbiAgICAgICAgICBib3JkZXI6IHNvbGlkICRiZy1jb2xvdXI7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJQaG90b3NDb250YWluZXJcIjogXCJQaG90b01hbmFnZXJfUGhvdG9zQ29udGFpbmVyX18yd1drbFwiLFxuXHRcIkhpZGRlblwiOiBcIlBob3RvTWFuYWdlcl9IaWRkZW5fXzE5dVQyXCIsXG5cdFwiQ29udGVudHNcIjogXCJQaG90b01hbmFnZXJfQ29udGVudHNfXzNoREYwXCIsXG5cdFwiaGVhZGVySWNvbkNvbnRhaW5lclwiOiBcIlBob3RvTWFuYWdlcl9oZWFkZXJJY29uQ29udGFpbmVyX192dmdXY1wiLFxuXHRcInVwbG9hZEljb25cIjogXCJQaG90b01hbmFnZXJfdXBsb2FkSWNvbl9fMUZLUWZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/styles/PhotoManager.module.scss\n");

/***/ })

})