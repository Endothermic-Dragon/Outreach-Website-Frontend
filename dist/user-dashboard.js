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

/***/ "./src/scripts/global.js":
/*!*******************************!*\
  !*** ./src/scripts/global.js ***!
  \*******************************/
/***/ ((module) => {

eval("var $=tag=>{var res=[...document.querySelectorAll(tag)];var _loop=function(el){el.on=(e,func)=>el.addEventListener(e,e=>func(e,el))};for(var el of res){_loop(el)}res.onAll=(e,func)=>res.map(el=>el.on(e,func));res.on=()=>{throw new TypeError(\"Cannot add event listener on multiple elements using \\\"on\\\". \"+\"Use \\\"onAll\\\" to add to multiple elements, or select one element.\")};return res};module.exports={$:$,backend:\"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/\"};\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/global.js?");

/***/ }),

/***/ "./src/scripts/user-dashboard.js":
/*!***************************************!*\
  !*** ./src/scripts/user-dashboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./src/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nvar user_id=new URLSearchParams(window.location.search).get(\"user_id\")||new URLSearchParams(window.location.search).get(\"user-id\")||localStorage.getItem(\"user-id\");if(user_id!=localStorage.getItem(\"user-id\")){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".hours span\")[1].innerText=\"This user currently has\"}fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./user\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),user_id:user_id})}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){if(data.status!=200){alert(\"Error \".concat(data.status,\"\\n\").concat(data.statusText));return}data=yield data.json();(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-banner div:first-child\")[0].innerText=data.name;(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-banner a\")[0].innerText=data.email;(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-banner a\")[0].href=\"mailto:\".concat(data.email);data.mins=parseInt(data.initiative_mins)%60;data.hours=Math.floor(parseInt(data.initiative_mins)/60);var timeStr=[];if(data.hours==1){timeStr.push(\"1 hour\")}else if(data.hours!=0){timeStr.push(\"\".concat(data.hours,\" hours\"))}if(data.mins==1){timeStr.push(\"1 minute\")}else if(data.mins!=0){timeStr.push(\"\".concat(data.mins,\" minutes\"))}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".hours span\")[2].innerText=timeStr.join(\", \")||\"0 minutes\"});return function(){return _ref.apply(this,arguments)}}());fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./user-initiatives\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),user_id:user_id})}).then(/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){if(data.status!=200){alert(\"Error \".concat(data.status,\"\\n\").concat(data.statusText));return}data=yield data.json();yield fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./translate-initiative-ids\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({initiative_ids:data.initiative_data.map(el=>el.initiative_id)})}).then(/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(res){res=yield res.json();data.initiative_data=data.initiative_data.map((el,i)=>{el.initiative_name=res[i];return el})});return function(){return _ref3.apply(this,arguments)}}());var div=document.createElement(\"div\");var tableBody=data.initiative_data.map(el=>{div.innerText=el.initiative_name;el.initiative_name=div.innerHTML;el.mins=(parseInt(el.duration)%60).toString().padStart(2,\"0\");el.hours=Math.floor(parseInt(el.duration)/60);var date=new Date(new Date(\"Jan 1 2020 00:00:00 GMT\").getTime()+parseInt(el.timestamp)*60*1000).toLocaleString().replaceAll(\" \",\"&nbsp;\").replace(\"&nbsp;\",\" \");var startTime=new Date(new Date(\"Jan 1 2020 00:00:00 GMT\").getTime()+parseInt(el.start_time)*60*1000).toLocaleString().replaceAll(\" \",\"&nbsp;\").replace(\"&nbsp;\",\" \");return[el.initiative_name,startTime,\"\".concat(el.hours,\":\").concat(el.mins),el.prep_time?\"True\":\"False\",date]}).map(el=>{return\"<tr><td>\".concat(el[0],\"</td><td>\").concat(el[1],\"</td><td>\").concat(el[2],\"</td><td>\").concat(el[3],\"</td><td>\").concat(el[4],\"</td></tr>\")}).join(\"\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".logs\")[0].innerHTML=\"<table><thead><tr><th>Initiative Name</th><th>Start Time</th><th>Hour Logged</th><th>Lead Prep Time</th><th>Record Date</th></tr></thead><tbody>\".concat(tableBody,\"</tbody></table>\")});return function(){return _ref2.apply(this,arguments)}}());\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/user-dashboard.js?");

/***/ }),

/***/ "./src/styles/user-dashboard.scss":
/*!****************************************!*\
  !*** ./src/styles/user-dashboard.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./src/styles/user-dashboard.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/styles/user-dashboard.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/user-dashboard.js");
/******/ 	
/******/ })()
;