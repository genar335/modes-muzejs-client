webpackHotUpdate_N_E("pages/TMS/main",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/styles/Gallery.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/styles/Gallery.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/next/node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Gallery_Gallery__3Ah15 {\\n  width: 100vw;\\n  height: -webkit-min-content;\\n  height: -moz-min-content;\\n  height: min-content;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n  -moz-box-pack: center;\\n       justify-content: center;\\n  -moz-box-align: center;\\n       align-items: center;\\n  background: #ecddd2;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_SearchAndFilter__3JcDu {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: horizontal;\\n  -moz-box-direction: normal;\\n       flex-direction: row;\\n  -moz-box-pack: space-evenly;\\n       justify-content: space-evenly;\\n  margin: 1rem 3rem;\\n  width: 70vw;\\n  border-radius: 25px;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_SearchAndFilter__3JcDu .Gallery_SearchContainer__aMCT8 {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: horizontal;\\n  -moz-box-direction: normal;\\n       flex-direction: row;\\n  height: 4vh;\\n  width: 40%;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_SearchAndFilter__3JcDu .Gallery_SearchContainer__aMCT8 input {\\n  background: white;\\n  border: 1px solid white;\\n  border-radius: 25px;\\n  font-size: xx-large;\\n  padding-left: 2rem;\\n  width: 100%;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_SearchAndFilter__3JcDu .Gallery_SearchContainer__aMCT8 button {\\n  margin: 0 0 0 -4rem;\\n  border: none;\\n  background: rgba(0, 0, 0, 0);\\n  width: auto;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_SearchAndFilter__3JcDu .Gallery_FilterContainer__3Cb91 {\\n  border: none;\\n  border-radius: 25px;\\n  background: white;\\n  width: 40%;\\n  padding: 0rem 1rem 0 2rem;\\n  font-size: xx-large;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_SearchAndFilter__3JcDu .Gallery_FilterContainer__3Cb91::after {\\n  width: 500px;\\n}\\n.Gallery_Gallery__3Ah15 .Gallery_tCardContainer__3hQ5e {\\n  margin: 20rem 0;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: auto;\\n  grid-row-gap: 5rem;\\n  grid-column-gap: 5rem;\\n  width: 80%;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/yberfox228/Documents/itlemonade/f-museum/tech/CS/modes-muzejs-client/components/styles/Gallery.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,YAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,mBAVc;AAQhB;AAIE;EACE,iBAAA;EAAA,aAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,2BAAA;OAAA,6BAAA;EACA,iBAAA;EACA,WAAA;EAEA,mBAAA;AAHJ;AAKI;EACE,iBAAA;EAAA,aAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,WAAA;EACA,UAAA;AAHN;AAKM;EACE,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;AAHR;AAKM;EACE,mBAAA;EACA,YAAA;EACA,4BAAA;EACA,WAAA;AAHR;AAOI;EACE,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,UAAA;EACA,yBAAA;EAMA,mBAAA;AAVN;AAOM;EACE,YAAA;AALR;AAWE;EACE,eAAA;EACA,aAAA;EACA,qCAAA;EACA,wBAAA;EACA,kBAAA;EACA,qBAAA;EACA,UAAA;AATJ\",\"file\":\"Gallery.module.scss\",\"sourcesContent\":[\"$f-s-bg-colour: rgb(236 221 210);\\n\\n.Gallery {\\n  width: 100vw;\\n  height: min-content;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  // padding: 0 3rem;\\n  background: $f-s-bg-colour;\\n\\n  .SearchAndFilter {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-evenly;\\n    margin: 1rem 3rem;\\n    width: 70vw;\\n\\n    border-radius: 25px;\\n\\n    .SearchContainer {\\n      display: flex;\\n      flex-direction: row;\\n      height: 4vh;\\n      width: 40%;\\n\\n      input {\\n        background: white;\\n        border: 1px solid white;\\n        border-radius: 25px;\\n        font-size: xx-large;\\n        padding-left: 2rem;\\n        width: 100%;\\n      }\\n      button {\\n        margin: 0 0 0 -4rem;\\n        border: none;\\n        background: rgba($color: #000000, $alpha: 0);\\n        width: auto;\\n      }\\n    }\\n\\n    .FilterContainer {\\n      border: none;\\n      border-radius: 25px;\\n      background: white;\\n      width: 40%;\\n      padding: 0rem 1rem 0 2rem;\\n\\n      // ! TODO: Figure out how to style the <select>\\n      &::after {\\n        width: 500px;\\n      }\\n      font-size: xx-large;\\n    }\\n  }\\n\\n  .tCardContainer {\\n    margin: 20rem 0;\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: auto;\\n    grid-row-gap: 5rem;\\n    grid-column-gap: 5rem;\\n    width: 80%;\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"Gallery\": \"Gallery_Gallery__3Ah15\",\n\t\"SearchAndFilter\": \"Gallery_SearchAndFilter__3JcDu\",\n\t\"SearchContainer\": \"Gallery_SearchContainer__aMCT8\",\n\t\"FilterContainer\": \"Gallery_FilterContainer__3Cb91\",\n\t\"tCardContainer\": \"Gallery_tCardContainer__3hQ5e\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvR2FsbGVyeS5tb2R1bGUuc2Nzcz80ZGVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNElBQXFFO0FBQy9HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLGlCQUFpQixnQ0FBZ0MsNkJBQTZCLHdCQUF3QixzQkFBc0Isa0JBQWtCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLDBCQUEwQixpQ0FBaUMsMkJBQTJCLDZCQUE2Qix3QkFBd0IsR0FBRywyREFBMkQsc0JBQXNCLGtCQUFrQixnQ0FBZ0MsK0JBQStCLDZCQUE2QixnQ0FBZ0MsdUNBQXVDLHNCQUFzQixnQkFBZ0Isd0JBQXdCLEdBQUcsMkZBQTJGLHNCQUFzQixrQkFBa0IsZ0NBQWdDLCtCQUErQiw2QkFBNkIsZ0JBQWdCLGVBQWUsR0FBRyxpR0FBaUcsc0JBQXNCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLHVCQUF1QixnQkFBZ0IsR0FBRyxrR0FBa0csd0JBQXdCLGlCQUFpQixpQ0FBaUMsZ0JBQWdCLEdBQUcsMkZBQTJGLGlCQUFpQix3QkFBd0Isc0JBQXNCLGVBQWUsOEJBQThCLHdCQUF3QixHQUFHLGtHQUFrRyxpQkFBaUIsR0FBRywwREFBMEQsb0JBQW9CLGtCQUFrQiwwQ0FBMEMsNkJBQTZCLHVCQUF1QiwwQkFBMEIsZUFBZSxHQUFHLE9BQU8sd0tBQXdLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLHVGQUF1RixjQUFjLGlCQUFpQix3QkFBd0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHVCQUF1QiwrQkFBK0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLHdCQUF3QixrQkFBa0IsNEJBQTRCLDBCQUEwQixzQkFBc0IsNEJBQTRCLG9CQUFvQixtQkFBbUIsaUJBQWlCLDRCQUE0QixrQ0FBa0MsOEJBQThCLDhCQUE4Qiw2QkFBNkIsc0JBQXNCLFNBQVMsZ0JBQWdCLDhCQUE4Qix1QkFBdUIsdURBQXVELHNCQUFzQixTQUFTLE9BQU8sMEJBQTBCLHFCQUFxQiw0QkFBNEIsMEJBQTBCLG1CQUFtQixrQ0FBa0MsMkVBQTJFLHVCQUF1QixTQUFTLDRCQUE0QixPQUFPLEtBQUssdUJBQXVCLHNCQUFzQixvQkFBb0IsNENBQTRDLCtCQUErQix5QkFBeUIsNEJBQTRCLGlCQUFpQixLQUFLLEdBQUcsS0FBSztBQUNsdUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9jb21wb25lbnRzL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkdhbGxlcnlfR2FsbGVyeV9fM0FoMTUge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAtd2Via2l0LW1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LW1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2VjZGRkMjtcXG59XFxuLkdhbGxlcnlfR2FsbGVyeV9fM0FoMTUgLkdhbGxlcnlfU2VhcmNoQW5kRmlsdGVyX18zSmNEdSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC1tb3otYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IDFyZW0gM3JlbTtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuLkdhbGxlcnlfR2FsbGVyeV9fM0FoMTUgLkdhbGxlcnlfU2VhcmNoQW5kRmlsdGVyX18zSmNEdSAuR2FsbGVyeV9TZWFyY2hDb250YWluZXJfX2FNQ1Q4IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA0dmg7XFxuICB3aWR0aDogNDAlO1xcbn1cXG4uR2FsbGVyeV9HYWxsZXJ5X18zQWgxNSAuR2FsbGVyeV9TZWFyY2hBbmRGaWx0ZXJfXzNKY0R1IC5HYWxsZXJ5X1NlYXJjaENvbnRhaW5lcl9fYU1DVDggaW5wdXQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5HYWxsZXJ5X0dhbGxlcnlfXzNBaDE1IC5HYWxsZXJ5X1NlYXJjaEFuZEZpbHRlcl9fM0pjRHUgLkdhbGxlcnlfU2VhcmNoQ29udGFpbmVyX19hTUNUOCBidXR0b24ge1xcbiAgbWFyZ2luOiAwIDAgMCAtNHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLkdhbGxlcnlfR2FsbGVyeV9fM0FoMTUgLkdhbGxlcnlfU2VhcmNoQW5kRmlsdGVyX18zSmNEdSAuR2FsbGVyeV9GaWx0ZXJDb250YWluZXJfXzNDYjkxIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAwcmVtIDFyZW0gMCAycmVtO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuLkdhbGxlcnlfR2FsbGVyeV9fM0FoMTUgLkdhbGxlcnlfU2VhcmNoQW5kRmlsdGVyX18zSmNEdSAuR2FsbGVyeV9GaWx0ZXJDb250YWluZXJfXzNDYjkxOjphZnRlciB7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcbi5HYWxsZXJ5X0dhbGxlcnlfXzNBaDE1IC5HYWxsZXJ5X3RDYXJkQ29udGFpbmVyX18zaFE1ZSB7XFxuICBtYXJnaW46IDIwcmVtIDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogNXJlbTtcXG4gIGdyaWQtY29sdW1uLWdhcDogNXJlbTtcXG4gIHdpZHRoOiA4MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy95YmVyZm94MjI4L0RvY3VtZW50cy9pdGxlbW9uYWRlL2YtbXVzZXVtL3RlY2gvQ1MvbW9kZXMtbXV6ZWpzLWNsaWVudC9jb21wb25lbnRzL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtFQUNBLHFCQUFBO09BQUEsdUJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBRUEsbUJBVmM7QUFRaEI7QUFJRTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0VBQUEsMEJBQUE7T0FBQSxtQkFBQTtFQUNBLDJCQUFBO09BQUEsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtFQUFBLDBCQUFBO09BQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUhOO0FBS007RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS007RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFIUjtBQU9JO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFNQSxtQkFBQTtBQVZOO0FBT007RUFDRSxZQUFBO0FBTFI7QUFXRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBVEpcIixcImZpbGVcIjpcIkdhbGxlcnkubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGYtcy1iZy1jb2xvdXI6IHJnYigyMzYgMjIxIDIxMCk7XFxuXFxuLkdhbGxlcnkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLy8gcGFkZGluZzogMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogJGYtcy1iZy1jb2xvdXI7XFxuXFxuICAuU2VhcmNoQW5kRmlsdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogMXJlbSAzcmVtO1xcbiAgICB3aWR0aDogNzB2dztcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG5cXG4gICAgLlNlYXJjaENvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGhlaWdodDogNHZoO1xcbiAgICAgIHdpZHRoOiA0MCU7XFxuXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IDAgMCAwIC00cmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLkZpbHRlckNvbnRhaW5lciB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICBwYWRkaW5nOiAwcmVtIDFyZW0gMCAycmVtO1xcblxcbiAgICAgIC8vICEgVE9ETzogRmlndXJlIG91dCBob3cgdG8gc3R5bGUgdGhlIDxzZWxlY3Q+XFxuICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgIH1cXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICB9XFxuICB9XFxuXFxuICAudENhcmRDb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC1yb3ctZ2FwOiA1cmVtO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIkdhbGxlcnlcIjogXCJHYWxsZXJ5X0dhbGxlcnlfXzNBaDE1XCIsXG5cdFwiU2VhcmNoQW5kRmlsdGVyXCI6IFwiR2FsbGVyeV9TZWFyY2hBbmRGaWx0ZXJfXzNKY0R1XCIsXG5cdFwiU2VhcmNoQ29udGFpbmVyXCI6IFwiR2FsbGVyeV9TZWFyY2hDb250YWluZXJfX2FNQ1Q4XCIsXG5cdFwiRmlsdGVyQ29udGFpbmVyXCI6IFwiR2FsbGVyeV9GaWx0ZXJDb250YWluZXJfXzNDYjkxXCIsXG5cdFwidENhcmRDb250YWluZXJcIjogXCJHYWxsZXJ5X3RDYXJkQ29udGFpbmVyX18zaFE1ZVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/styles/Gallery.module.scss\n");

/***/ })

})