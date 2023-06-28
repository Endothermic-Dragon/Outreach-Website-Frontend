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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _not_jquery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-jquery.js */ \"./flask_build/scripts/not-jquery.js\");\n/* harmony import */ var _not_jquery_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__);\nvar backend=\"https://lgekbtt7fm5x27wxschu4rge4e0idlwo.lambda-url.us-east-1.on.aws/\";(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".menu-bars\").on(\"click\",()=>{(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".menu-bars\").classList.toggle(\"open\");(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sidebar\").classList.toggle(\"open\")});(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sidebar\").on(\"mouseenter\",()=>(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sidebar-shadow\").classList.add(\"open\"));(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sidebar\").on(\"mouseleave\",()=>(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sidebar-shadow\").classList.remove(\"open\"));// Sign in\nfunction signIn(){var client=google.accounts.oauth2.initCodeClient({client_id:\"672955273389-bc25j23ds73qgp7ukroaloutv2a22qjv.apps.googleusercontent.com\",scope:\"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile\",ux_mode:\"popup\",callback:response=>{fetch(backend+\"./auth\",{method:\"POST\",headers:{credentials:\"include\",\"Content-Type\":\"application/json\"},body:JSON.stringify({code:response.code})}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(res){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function(_context){while(1)switch(_context.prev=_context.next){case 0:console.log(res);_context.t0=console;_context.next=4;return res.json();case 4:_context.t1=_context.sent;_context.t0.log.call(_context.t0,_context.t1);case 6:case\"end\":return _context.stop()}},_callee)}));return function(){return _ref.apply(this,arguments)}}())}});client.requestCode()}fetch(backend+\"./auth\",{credentials:\"include\",headers:{\"Content-Type\":\"application/json\"}}).then(/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(res){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function(_context2){while(1)switch(_context2.prev=_context2.next){case 0:console.log(res);if(!(res.status!=200)){_context2.next=5;break}(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sign-in\").classList.remove(\"disabled\");(0,_not_jquery_js__WEBPACK_IMPORTED_MODULE_2__.$)(\".sign-in\").addEventListener(\"click\",signIn);return _context2.abrupt(\"return\");case 5:_context2.t0=console;_context2.next=8;return res.json();case 8:_context2.t1=_context2.sent;_context2.t0.log.call(_context2.t0,_context2.t1);case 10:case\"end\":return _context2.stop()}},_callee2)}));return function(){return _ref2.apply(this,arguments)}}());fetch(\"https://lgekbtt7fm5x27wxschu4rge4e0idlwo.lambda-url.us-east-1.on.aws/initiatives\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"}}).then(/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(data){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function(_context3){while(1)switch(_context3.prev=_context3.next){case 0:console.log(data);_context3.t0=console;_context3.next=4;return data.json();case 4:_context3.t1=_context3.sent;_context3.t0.log.call(_context3.t0,_context3.t1);case 6:case\"end\":return _context3.stop()}},_callee3)}));return function(){return _ref3.apply(this,arguments)}}(),err=>console.log(err));\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/menu.js?");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/menu.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./flask_build/styles/menu.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  min-height: 100vh;\\n}\\n\\nbody {\\n  --header-height: 70px;\\n  --sidebar-width: 70px;\\n  display: grid;\\n  grid-template: [header-top] \\\"header header\\\" var(--header-height) [header-bottom] \\\"sidebar container\\\" auto [page-bottom]/70px auto;\\n  overflow: hidden;\\n}\\n@media only screen and (max-height: 550px) {\\n  body {\\n    --header-height: 60px;\\n  }\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  body {\\n    display: block;\\n    overflow-y: auto;\\n  }\\n}\\n\\n/* ----- Headers and sidebars ----- */\\n.sidebar {\\n  grid-area: sidebar;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: red;\\n  width: 70px;\\n  transition: width 200ms ease-in-out;\\n  overflow: hidden;\\n  cursor: default;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  z-index: 1;\\n}\\n.sidebar:hover {\\n  width: 250px;\\n}\\n.sidebar:hover .label {\\n  opacity: 1;\\n}\\n.sidebar > div {\\n  width: 250px;\\n  height: 70px;\\n  display: flex;\\n  align-items: center;\\n  transition: background-color 300ms ease-in-out;\\n  cursor: pointer;\\n}\\n.sidebar > div:hover {\\n  background-color: rgb(255, 100, 100);\\n}\\n.sidebar div.filler {\\n  flex: 1 1 0;\\n  cursor: default;\\n  pointer-events: none;\\n}\\n.sidebar div.sign-in {\\n  background-color: #202124;\\n}\\n.sidebar div.sign-in:not(.disabled):hover {\\n  background-color: #3c4043;\\n}\\n.sidebar div.sign-in.disabled {\\n  cursor: default;\\n}\\n.sidebar div.sign-in.disabled img,\\n.sidebar div.sign-in.disabled .label {\\n  opacity: 0.5;\\n}\\n.sidebar .icon {\\n  width: 70px;\\n  height: 70px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.sidebar .icon img {\\n  display: block;\\n  width: 40px;\\n}\\n.sidebar .icon img.dark {\\n  -webkit-filter: invert(1);\\n          filter: invert(1);\\n}\\n.sidebar .label {\\n  width: 167.5px;\\n  height: 50px;\\n  line-height: 47.5px;\\n  font-family: Oswald;\\n  color: white;\\n  font-size: 28px;\\n  transition: opacity 200ms ease-in;\\n  padding-left: 5px;\\n  box-sizing: border-box;\\n}\\n.sidebar > div:first-child {\\n  background-color: rgb(175, 0, 0);\\n  transition: background-color 300ms ease-in-out;\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .sidebar {\\n    width: auto;\\n    position: fixed;\\n    top: var(--header-height);\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n    background-color: rgb(50, 50, 50);\\n    pointer-events: none;\\n    opacity: 0;\\n    transition: opacity 200ms ease-in;\\n  }\\n  .sidebar:hover {\\n    width: auto;\\n  }\\n  .sidebar.open {\\n    opacity: 1;\\n    pointer-events: all;\\n    transition: opacity 200ms ease-out;\\n  }\\n  .sidebar > div {\\n    width: auto;\\n    justify-content: center;\\n  }\\n  .sidebar .icon {\\n    margin-right: 12.5px;\\n  }\\n}\\n\\n.sidebar-shadow {\\n  position: fixed;\\n  top: var(--header-height);\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  opacity: 0;\\n  pointer-events: none;\\n  background-color: black;\\n  transition: opacity 200ms ease-in-out;\\n}\\n.sidebar-shadow.open {\\n  opacity: 0.6;\\n  pointer-events: all;\\n}\\n\\n.header {\\n  grid-area: header;\\n  background-color: black;\\n  color: white;\\n  display: flex;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .header {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    height: var(--header-height);\\n  }\\n}\\n\\n.menu-bars {\\n  display: none;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n@media only screen and (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .menu-bars {\\n    display: block;\\n    flex: 0 0 var(--header-height);\\n    padding: 0 15px;\\n    box-sizing: border-box;\\n    background-color: red;\\n    opacity: 1;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 8px;\\n    justify-content: center;\\n    align-items: center;\\n    pointer-events: all;\\n    cursor: pointer;\\n  }\\n}\\n.menu-bars div {\\n  width: calc(var(--header-height) - 30px);\\n  height: 4px;\\n  background-color: white;\\n  pointer-events: none;\\n  transition: width 200ms ease-out, transform 300ms ease-out;\\n}\\n.menu-bars.open > :first-child, .menu-bars.open > :last-child {\\n  width: 0;\\n}\\n.menu-bars .menu-bar-middle {\\n  background-color: transparent;\\n}\\n.menu-bars .menu-bar-middle div {\\n  position: absolute;\\n  transform-origin: center;\\n}\\n.menu-bars.open .menu-bar-middle div:first-child {\\n  transform: rotate(45deg) scaleX(1.4);\\n}\\n.menu-bars.open .menu-bar-middle div:last-child {\\n  transform: rotate(-45deg) scaleX(1.4);\\n}\\n\\n.header-pad-left {\\n  flex: 1 1 0px;\\n}\\n\\n.header-container {\\n  display: flex;\\n  flex: 0 0 350px;\\n  align-items: center;\\n  font-size: 30px;\\n  font-family: Oswald;\\n  text-align: center;\\n  line-height: 30px;\\n  justify-content: center;\\n}\\n.header-container img {\\n  height: calc(var(--header-height) - 20px);\\n  display: block;\\n  margin-right: 10px;\\n}\\n@media only screen and (max-width: 450px) {\\n  .header-container {\\n    font-size: 24px;\\n    flex: 0 0 300px;\\n  }\\n}\\n\\n.header-pad-right {\\n  flex: 1 1 0px;\\n}\\n\\n/* ----- Content Frame ----- */\\n.container {\\n  grid-area: container;\\n  background-color: white;\\n  padding: 40px 60px;\\n  overflow-y: auto;\\n  box-sizing: border-box;\\n  height: calc(100vh - var(--header-height));\\n}\\n@media only screen and (max-width: 925px) {\\n  .container {\\n    padding: 15px;\\n  }\\n}\\n@media (max-width: 700px), only screen and (hover: none), only screen and (pointer: coarse) {\\n  .container {\\n    overflow: visible;\\n    height: 100vh;\\n    padding-top: calc(var(--header-height) + 15px);\\n    box-sizing: border-box;\\n  }\\n}\\n\\n.content {\\n  margin: 0 auto;\\n  width: 1200px;\\n  height: 1200px;\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n@media only screen and (max-width: 1450px) and (min-width: 1101px) {\\n  .content {\\n    width: 900px;\\n  }\\n}\\n@media only screen and (max-width: 1100px) and (min-width: 901px) {\\n  .content {\\n    width: 700px;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .content {\\n    width: 100%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/menu.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof=(__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);function _regeneratorRuntime(){\"use strict\";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */module.exports=_regeneratorRuntime=function(){return exports},module.exports.__esModule=true,module.exports[\"default\"]=module.exports;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol=\"function\"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||\"@@iterator\",asyncIteratorSymbol=$Symbol.asyncIterator||\"@@asyncIterator\",toStringTagSymbol=$Symbol.toStringTag||\"@@toStringTag\";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},\"\")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,\"_invoke\",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:\"normal\",arg:fn.call(obj,arg)}}catch(err){return{type:\"throw\",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){[\"next\",\"throw\",\"return\"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg)})})}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg),result,value;if(\"throw\"!==record.type){result=record.arg,value=result.value;return value&&\"object\"==_typeof(value)&&hasOwn.call(value,\"__await\")?PromiseImpl.resolve(value.__await).then(function(value){invoke(\"next\",value,resolve,reject)},function(err){invoke(\"throw\",err,resolve,reject)}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result)},function(error){return invoke(\"throw\",error,resolve,reject)})}reject(record.arg)}var previousPromise;defineProperty(this,\"_invoke\",{value:function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject)})}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state=\"suspendedStart\";return function(method,arg){var delegate,delegateResult,record;if(\"executing\"===state)throw new Error(\"Generator is already running\");if(\"completed\"===state){if(\"throw\"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){delegate=context.delegate;if(delegate){delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if(\"next\"===context.method)context.sent=context._sent=context.arg;else if(\"throw\"===context.method){if(\"suspendedStart\"===state)throw state=\"completed\",context.arg;context.dispatchException(context.arg)}else\"return\"===context.method&&context.abrupt(\"return\",context.arg);state=\"executing\";record=tryCatch(innerFn,self,context);if(\"normal\"===record.type){if(state=context.done?\"completed\":\"suspendedYield\",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}\"throw\"===record.type&&(state=\"completed\",context.method=\"throw\",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,\"throw\"===methodName&&delegate.iterator[\"return\"]&&(context.method=\"return\",context.arg=undefined,maybeInvokeDelegate(delegate,context),\"throw\"===context.method)||\"return\"!==methodName&&(context.method=\"throw\",context.arg=new TypeError(\"The iterator does not provide a '\"+methodName+\"' method\")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if(\"throw\"===record.type)return context.method=\"throw\",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,\"return\"!==context.method&&(context.method=\"next\",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method=\"throw\",context.arg=new TypeError(\"iterator result is not an object\"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type=\"normal\",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:\"root\"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){var iteratorMethod,i,next;if(iterable){iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if(\"function\"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,\"constructor\",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,\"constructor\",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,\"GeneratorFunction\"),exports.isGeneratorFunction=function(genFun){var ctor=\"function\"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||\"GeneratorFunction\"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,\"GeneratorFunction\")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,\"Generator\"),define(Gp,iteratorSymbol,function(){return this}),define(Gp,\"toString\",function(){return\"[object Generator]\"}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){var key;for(;keys.length;){key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method=\"next\",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)\"t\"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if(\"throw\"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this,i,entry,record,hasCatch,hasFinally;function handle(loc,caught){return record.type=\"throw\",record.arg=exception,context.next=loc,caught&&(context.method=\"next\",context.arg=undefined),!!caught}for(i=this.tryEntries.length-1;i>=0;--i){entry=this.tryEntries[i],record=entry.completion;if(\"root\"===entry.tryLoc)return handle(\"end\");if(entry.tryLoc<=this.prev){hasCatch=hasOwn.call(entry,\"catchLoc\"),hasFinally=hasOwn.call(entry,\"finallyLoc\");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error(\"try statement without catch or finally\");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(i=this.tryEntries.length-1;i>=0;--i){entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,\"finallyLoc\")&&this.prev<entry.finallyLoc){finallyEntry=entry;break}}finallyEntry&&(\"break\"===type||\"continue\"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{},i,entry,finallyEntry;return record.type=type,record.arg=arg,finallyEntry?(this.method=\"next\",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if(\"throw\"===record.type)throw record.arg;return\"break\"===record.type||\"continue\"===record.type?this.next=record.arg:\"return\"===record.type?(this.rval=this.arg=record.arg,this.method=\"return\",this.next=\"end\"):\"normal\"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){var i,entry;for(i=this.tryEntries.length-1;i>=0;--i){entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},\"catch\":function(tryLoc){var i,entry,record,thrown;for(i=this.tryEntries.length-1;i>=0;--i){entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){record=entry.completion;if(\"throw\"===record.type){thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error(\"illegal catch attempt\")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},\"next\"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}module.exports=_regeneratorRuntime,module.exports.__esModule=true,module.exports[\"default\"]=module.exports;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj){\"@babel/helpers - typeof\";return(module.exports=_typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj},module.exports.__esModule=true,module.exports[\"default\"]=module.exports),_typeof(obj)}module.exports=_typeof,module.exports.__esModule=true,module.exports[\"default\"]=module.exports;\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\nvar runtime=__webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();module.exports=runtime;// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry{regeneratorRuntime=runtime}catch(accidentalStrictMode){if(typeof globalThis===\"object\"){globalThis.regeneratorRuntime=runtime}else{Function(\"r\",\"regeneratorRuntime = r\")(runtime)}}\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){var info,value;try{info=gen[key](arg);value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err)}_next(undefined)})}}\n\n//# sourceURL=webpack://outreach-website-frontend/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"menu": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	__webpack_require__("./flask_build/scripts/menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./flask_build/styles/menu.scss");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;