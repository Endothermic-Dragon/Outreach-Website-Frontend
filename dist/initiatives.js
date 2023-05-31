/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./flask_build/scripts/menu.js":
/*!*************************************!*\
  !*** ./flask_build/scripts/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _not_jquery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-jquery.js */ \"./flask_build/scripts/not-jquery.js\");\n/* harmony import */ var _not_jquery_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__);\n(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".menu-bars\").on(\"click\",()=>{(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".menu-bars\").classList.toggle(\"open\");(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".sidebar\").classList.toggle(\"open\")});(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".sidebar\").on(\"mouseenter\",()=>(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".sidebar-shadow\").classList.add(\"open\"));(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".sidebar\").on(\"mouseleave\",()=>(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_0__.$)(\".sidebar-shadow\").classList.remove(\"open\"));\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/menu.js?");

/***/ }),

/***/ "./flask_build/scripts/not-jquery.js":
/*!*******************************************!*\
  !*** ./flask_build/scripts/not-jquery.js ***!
  \*******************************************/
/***/ ((module) => {

eval("var $=tag=>{var res=[...document.querySelectorAll(tag)];res.forEach(el=>el.on=(e,func)=>el.addEventListener(e,e=>func(e,el)));res.length==1?(res=res[0],res.length=1):(res.onAll=(e,func)=>res.map(el=>el.on(e,func)),res.on=()=>{throw new TypeError(\"Cannot add event listener on multiple elements using \\\"on\\\". \"+\"Use \\\"onAll\\\" to add to multiple elements, or select one element.\")});return res};module.exports={\"$\":$,\"abcd\":()=>{return\"abcdef\"}};\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/not-jquery.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/module.exports=function(cssWithMappingToString){var list=[];// return the list of modules as css string\nlist.toString=function(){return this.map(function(item){var content=\"\";var needLayer=typeof item[5]!==\"undefined\";if(item[4]){content+=\"@supports (\".concat(item[4],\") {\")}if(item[2]){content+=\"@media \".concat(item[2],\" {\")}if(needLayer){content+=\"@layer\".concat(item[5].length>0?\" \".concat(item[5]):\"\",\" {\")}content+=cssWithMappingToString(item);if(needLayer){content+=\"}\"}if(item[2]){content+=\"}\"}if(item[4]){content+=\"}\"}return content}).join(\"\")};// import a list of modules into the list\nlist.i=function(modules,media,dedupe,supports,layer){if(typeof modules===\"string\"){modules=[[null,modules,undefined]]}var alreadyImportedModules={},k,id,_k,item;if(dedupe){for(k=0;k<this.length;k++){id=this[k][0];if(id!=null){alreadyImportedModules[id]=true}}}for(_k=0;_k<modules.length;_k++){item=[].concat(modules[_k]);if(dedupe&&alreadyImportedModules[item[0]]){continue}if(typeof layer!==\"undefined\"){if(typeof item[5]===\"undefined\"){item[5]=layer}else{item[1]=\"@layer\".concat(item[5].length>0?\" \".concat(item[5]):\"\",\" {\").concat(item[1],\"}\");item[5]=layer}}if(media){if(!item[2]){item[2]=media}else{item[1]=\"@media \".concat(item[2],\" {\").concat(item[1],\"}\");item[2]=media}}if(supports){if(!item[4]){item[4]=\"\".concat(supports)}else{item[1]=\"@supports (\".concat(item[4],\") {\").concat(item[1],\"}\");item[4]=supports}}list.push(item)}};return list};\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports=function(i){return i[1]};\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/initiatives.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/initiatives.scss ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.sidebar > div:nth-child(2) {\\n  background-color: rgb(175, 0, 0);\\n  transition: background-color 300ms ease-in-out;\\n}\\n\\nbody {\\n  font-family: Arial, sans-serif;\\n  background-color: #fff;\\n  color: #000;\\n}\\n\\n#initHeader {\\n  background-color: #ccc; /* Set the background color to grey */\\n  height: 150px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\n#initHeader h1 {\\n  color: red;\\n  font-size: 48px;\\n}\\n\\n#initContent .block .block-content {\\n  display: flex;\\n  flex-direction: row;\\n}\\n#initContent .block .block-content > .block-middle {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-size: 0 0;\\n  width: 40%;\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n}\\n#initContent .block .block-content > .block-middle > p .icon {\\n  height: 13px;\\n  width: auto;\\n  margin-right: 5px;\\n  vertical-align: text-top;\\n}\\n#initContent .block .block-content > .block-middle > .name {\\n  font-size: 24px;\\n  color: black;\\n  font-weight: bold;\\n  margin-bottom: 10px;\\n}\\n#initContent .block .block-content > .block-middle > .description {\\n  font-size: 13px;\\n  color: #707070;\\n  margin-bottom: 6px;\\n}\\n#initContent .block .block-content > .block-middle > .people, #initContent .block .block-content > .block-middle .hours, #initContent .block .block-content > .block-middle .leads {\\n  font-size: 14px;\\n  margin-bottom: 6px;\\n}\\n#initContent .block .block-content > .block-right {\\n  width: 30%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#initContent .block .block-content > .block-right > img {\\n  width: 90%;\\n  height: auto;\\n}\\n#initContent .block .block-content > .block-left {\\n  width: 30%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#initContent .block .block-content > .block-left > img {\\n  width: 90%;\\n  height: auto;\\n}\\n\\n#initContent .block .divider {\\n  margin: 15px auto 15px auto;\\n  width: 75%;\\n  border: 1px dashed #707070;\\n}\\n\\n@media only screen and (max-width: 900px) {\\n  #initContent .block .block-content {\\n    flex-direction: row-reverse;\\n  }\\n  #initContent .block .block-content > .block-middle {\\n    width: 50%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  #initContent .block .block-content > .block-right {\\n    width: 50%;\\n  }\\n  #initContent .block .block-content .block-left {\\n    width: 0% !important;\\n  }\\n  #initContent .block .block-content .block-left > img {\\n    display: none;\\n  }\\n}\\n@media only screen and (max-width: 700px) {\\n  #initContent .block .block-content .block-middle > .name {\\n    font-size: 20px;\\n  }\\n  #initContent .block .block-content .block-middle > .description {\\n    font-size: 12px;\\n  }\\n  #initContent .block .block-content .block-middle > .people, #initContent .block .block-content .block-middle .hours, #initContent .block .block-content .block-middle .leads {\\n    font-size: 13px;\\n  }\\n}\\n@media only screen and (max-width: 500px) {\\n  #initContent .block .block-content {\\n    height: auto;\\n  }\\n  #initContent .block .block-content > .block-middle {\\n    background-size: cover;\\n    width: 100%;\\n    padding: 15px;\\n  }\\n  #initContent .block .block-content > .block-middle > p {\\n    color: white !important;\\n  }\\n  #initContent .block .block-content > .block-middle > p > .icon {\\n    -webkit-filter: invert(100%);\\n            filter: invert(100%);\\n  }\\n  #initContent .block .block-content .block-left, .block-right {\\n    width: 0% !important;\\n  }\\n  #initContent .block .block-content .block-left > img, .block-right > img {\\n    display: none;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/initiatives.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/menu.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/menu.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\n  margin: 0;\\n  padding: 0;\\n  min-height: 100vh;\\n}\\n\\nbody {\\n  --header-height: 70px;\\n  --sidebar-width: 70px;\\n  display: grid;\\n  grid-template: [header-top] \\\"header header\\\" var(--header-height) [header-bottom] \\\"sidebar container\\\" auto [page-bottom]/70px auto;\\n  overflow: hidden;\\n}\\n@media only screen and (max-height: 550px) {\\n  body {\\n    --header-height: 60px;\\n  }\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  body {\\n    display: block;\\n    overflow-y: auto;\\n  }\\n}\\n\\n/* ----- Headers and sidebars ----- */\\n.sidebar {\\n  grid-area: sidebar;\\n  background-color: red;\\n  width: 70px;\\n  transition: width 200ms ease-in-out;\\n  overflow: hidden;\\n  cursor: default;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  z-index: 1;\\n}\\n.sidebar:hover {\\n  width: 250px;\\n}\\n.sidebar:hover .label {\\n  opacity: 1;\\n}\\n.sidebar > div {\\n  width: 250px;\\n  height: 70px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  transition: background-color 300ms ease-in-out;\\n  cursor: pointer;\\n}\\n.sidebar > div:hover {\\n  background-color: rgb(255, 100, 100);\\n}\\n.sidebar .icon {\\n  width: 70px;\\n  height: 70px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.sidebar .icon img {\\n  display: block;\\n  width: 45px;\\n  -webkit-filter: invert(1);\\n          filter: invert(1);\\n}\\n.sidebar .label {\\n  width: 167.5px;\\n  height: 50px;\\n  line-height: 47.5px;\\n  font-family: Oswald;\\n  color: white;\\n  font-size: 28px;\\n  transition: opacity 200ms ease-in;\\n  padding-left: 5px;\\n  box-sizing: border-box;\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .sidebar {\\n    width: auto;\\n    position: fixed;\\n    top: var(--header-height);\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n    background-color: rgb(50, 50, 50);\\n    pointer-events: none;\\n    opacity: 0;\\n    transition: opacity 200ms ease-in;\\n  }\\n  .sidebar:hover {\\n    width: auto;\\n  }\\n  .sidebar.open {\\n    opacity: 1;\\n    pointer-events: all;\\n    transition: opacity 200ms ease-out;\\n  }\\n  .sidebar > div {\\n    width: auto;\\n    justify-content: center;\\n  }\\n  .sidebar .icon {\\n    margin-right: 12.5px;\\n  }\\n}\\n\\n.sidebar-shadow {\\n  position: fixed;\\n  top: var(--header-height);\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  opacity: 0;\\n  pointer-events: none;\\n  background-color: black;\\n  transition: opacity 200ms ease-in-out;\\n}\\n.sidebar-shadow.open {\\n  opacity: 0.6;\\n  pointer-events: all;\\n}\\n\\n.header {\\n  grid-area: header;\\n  background-color: black;\\n  color: white;\\n  display: flex;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .header {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    height: var(--header-height);\\n  }\\n}\\n\\n.menu-bars {\\n  display: none;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .menu-bars {\\n    display: block;\\n    flex: 0 0 var(--header-height);\\n    padding: 0 15px;\\n    box-sizing: border-box;\\n    background-color: red;\\n    opacity: 1;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 8px;\\n    justify-content: center;\\n    align-items: center;\\n    pointer-events: all;\\n    cursor: pointer;\\n  }\\n}\\n.menu-bars div {\\n  width: calc(var(--header-height) - 30px);\\n  height: 4px;\\n  background-color: white;\\n  pointer-events: none;\\n  transition: width 200ms ease-out, transform 300ms ease-out;\\n}\\n.menu-bars.open > :first-child, .menu-bars.open > :last-child {\\n  width: 0;\\n}\\n.menu-bars .menu-bar-middle {\\n  background-color: transparent;\\n}\\n.menu-bars .menu-bar-middle div {\\n  position: absolute;\\n  transform-origin: center;\\n}\\n.menu-bars.open .menu-bar-middle div:first-child {\\n  transform: rotate(45deg) scaleX(1.4);\\n}\\n.menu-bars.open .menu-bar-middle div:last-child {\\n  transform: rotate(-45deg) scaleX(1.4);\\n}\\n\\n.header-pad-left {\\n  flex: 1 1 0px;\\n}\\n\\n.header-container {\\n  display: flex;\\n  flex: 0 0 350px;\\n  align-items: center;\\n  font-size: 30px;\\n  font-family: Oswald;\\n  text-align: center;\\n  line-height: 30px;\\n  justify-content: center;\\n}\\n.header-container img {\\n  height: calc(var(--header-height) - 20px);\\n  display: block;\\n  margin-right: 10px;\\n}\\n@media only screen and (max-width: 450px) {\\n  .header-container {\\n    font-size: 24px;\\n    flex: 0 0 300px;\\n  }\\n}\\n\\n.header-pad-right {\\n  flex: 1 1 0px;\\n}\\n\\n/* ----- Content Frame ----- */\\n.container {\\n  grid-area: container;\\n  background-color: white;\\n  padding: 40px 60px;\\n  overflow-y: auto;\\n  box-sizing: border-box;\\n  height: calc(100vh - var(--header-height));\\n}\\n@media only screen and (max-width: 925px) {\\n  .container {\\n    padding: 15px;\\n  }\\n}\\n@media (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .container {\\n    overflow: visible;\\n    height: 100vh;\\n    padding-top: calc(var(--header-height) + 15px);\\n    box-sizing: border-box;\\n  }\\n}\\n\\n.content {\\n  margin: 0 auto;\\n  width: 1200px;\\n  height: 1200px;\\n}\\n@media only screen and (max-width: 1450px) and (min-width: 1101px) {\\n  .content {\\n    width: 900px;\\n  }\\n}\\n@media only screen and (max-width: 1100px) and (min-width: 901px) {\\n  .content {\\n    width: 700px;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .content {\\n    width: 100%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/menu.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./flask_build/styles/initiatives.scss":
/*!*********************************************!*\
  !*** ./flask_build/styles/initiatives.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initiatives_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./initiatives.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/initiatives.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initiatives_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initiatives_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initiatives_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initiatives_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/initiatives.scss?");

/***/ }),

/***/ "./flask_build/styles/menu.scss":
/*!**************************************!*\
  !*** ./flask_build/styles/menu.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/menu.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/menu.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./flask_build/styles/initiatives.scss");
/******/ 	__webpack_require__("./flask_build/scripts/menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./flask_build/styles/menu.scss");
/******/ 	
/******/ })()
;