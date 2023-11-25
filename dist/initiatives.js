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

eval("var $=tag=>{var res=[...document.querySelectorAll(tag)];res.forEach(el=>el.on=(e,func)=>el.addEventListener(e,e=>func(e,el)));res.onAll=(e,func)=>res.map(el=>el.on(e,func));res.on=()=>{throw new TypeError(\"Cannot add event listener on multiple elements using \\\"on\\\". \"+\"Use \\\"onAll\\\" to add to multiple elements, or select one element.\")};return res};module.exports={\"$\":$,\"backend\":\"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/\"};\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/global.js?");

/***/ }),

/***/ "./src/scripts/initiatives.js":
/*!************************************!*\
  !*** ./src/scripts/initiatives.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./src/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nfetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./initiatives\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"}}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){data=yield data.json();data=data.map(/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(el){el.mins=parseInt(el.total_mins)%60;el.hours=Math.floor(parseInt(el.total_mins)/60);// Sanitize\nvar div=document.createElement(\"div\");div.innerText=el.description;el.description=div.innerHTML.replaceAll(\"<br>\",\"</div><div>\");yield fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./translate-user-ids\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({user_ids:el.leads})}).then(/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){el.leads=yield data.json()});return function(){return _ref3.apply(this,arguments)}}());// First name, last initial\n// el.leads = el.leads.map(el => {\n//   let split = el.split(\" \");\n//   if (split.length > 1){\n//     return `${split[0]} ${split.at(-1).slice(0,1)}.`\n//   }\n//   return split[0];\n// })\n// Sanitize\ndiv.innerText=el.leads.join(\", \");el.leads=div.innerHTML.replaceAll(\"<br>\",\"</div><div>\");return\"<section>\\n  <div class=\\\"image-container\\\">\\n    <img src=\\\"\".concat(el.picture,\"\\\">\\n  </div>\\n  <div class=\\\"info-container\\\" style=\\\"--img-url:url('\").concat(el.picture,\"')\\\">\\n    <h2>\").concat(el.initiative_name,\"</h2>\\n    <div class=\\\"leads\\\">Leads: \").concat(el.leads,\"</div>\\n    <div class=\\\"stats\\\">\\n      <div class=\\\"participants\\\"><img src=\\\"./static/person-icon.png\\\" alt=\\\"Participants\\\">\\n        <span>\").concat(el.total_participants,\" volunteer\").concat(el.total_participants>1?\"s\":\"\",\"</span>\\n      </div>\\n      <div class=\\\"hours\\\"><img src=\\\"./static/clock-icon.png\\\" alt=\\\"Time Spent\\\">\\n        <span>\").concat(el.hours||el.mins,\" \").concat(el.hours?\"hour\"+el.hours>1?\"s\":\"\":\"min\"+el.mins>1?\"s\":\"\",\"</span>\\n      </div>\\n    </div>\\n    <div class=\\\"description\\\">\\n      <div>\").concat(el.description,\"</div>\\n    </div>\\n  </div>\\n</section>\")});return function(){return _ref2.apply(this,arguments)}}());Promise.all(data).then(data=>(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".content\")[0].innerHTML+=data.join(\"\\n\"))});return function(){return _ref.apply(this,arguments)}}());\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/initiatives.js?");

/***/ }),

/***/ "./src/styles/initiatives.scss":
/*!*************************************!*\
  !*** ./src/styles/initiatives.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./src/styles/initiatives.scss?");

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
/******/ 	__webpack_require__("./src/styles/initiatives.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/initiatives.js");
/******/ 	
/******/ })()
;