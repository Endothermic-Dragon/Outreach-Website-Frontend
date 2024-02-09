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

/***/ "./src/scripts/log-hours.js":
/*!**********************************!*\
  !*** ./src/scripts/log-hours.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./src/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nfunction updatePrep(){var initiative_id=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].value;if((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"option[value=\\\"\".concat(initiative_id,\"\\\"]\"))[0].dataset.lead==\"true\"){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".vary-disabled\")[0].classList.remove(\"disabled\")}else{(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".vary-disabled\")[0].classList.add(\"disabled\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"input[type='checkbox']\")[0].checked=false}}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time, #end-time\").onAll(\"input\",()=>{var start=new Date((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].value);var end=new Date((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#end-time\")[0].value);// Two weeks to log time\nvar startLimit=new Date().getTime()-14*24*60*60*1000;startLimit=new Date().setTime(startLimit);if(startLimit>start){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].setCustomValidity(\"You can only log hours for two weeks.\")}else if(start>=end){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].setCustomValidity(\"Start time must be before end time.\")}else if(end-start>24*60*60*1000){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].setCustomValidity(\"Cannot log more than 24 hours at once.\")}else{(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].setCustomValidity(\"\")}});function startTimeTimestamp(){return Math.floor((new Date((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].value)-new Date(\"Jan 1 2020 00:00:00 GMT\"))/1000/60)}function endTimeTimestamp(){return Math.floor((new Date((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#end-time\")[0].value)-new Date(\"Jan 1 2020 00:00:00 GMT\"))/1000/60)}function handleSubmit(e){e.preventDefault();fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./log-hours\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),initiative_id:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#initiative\")[0].value,prep_time:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#event-leader\")[0].checked,duration:endTimeTimestamp()-startTimeTimestamp(),start_time:startTimeTimestamp()})}).then(()=>{location.href=\"user-dashboard.html\"})}fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./initiatives\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"}}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){data=yield data.json();// Sanitize\nvar div=document.createElement(\"div\");data=data.map(el=>{// Sanitize\ndiv.innerText=el.initiative_id;el.initiative_id=div.innerHTML;div.innerText=el.initiative_name;el.initiative_name=div.innerHTML;return\"<option value=\\\"\".concat(el.initiative_id,\"\\\" data-lead=\\\"\").concat(el.leads.includes(localStorage.getItem(\"user-id\")),\"\\\">\").concat(el.initiative_name,\"</option>\")});(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].innerHTML+=data.join(\"\\n\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].on(\"change\",updatePrep);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].on(\"submit\",handleSubmit)});return function(){return _ref.apply(this,arguments)}}());\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/log-hours.js?");

/***/ }),

/***/ "./src/styles/log-hours.scss":
/*!***********************************!*\
  !*** ./src/styles/log-hours.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./src/styles/log-hours.scss?");

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
/******/ 	__webpack_require__("./src/styles/log-hours.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/log-hours.js");
/******/ 	
/******/ })()
;