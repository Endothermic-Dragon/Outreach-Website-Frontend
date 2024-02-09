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

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./src/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nvar _$$;function getScrollbarWidth(){var outer=document.createElement(\"div\");outer.style.visibility=\"hidden\";outer.style.overflow=\"scroll\";document.body.appendChild(outer);var inner=document.createElement(\"div\");outer.appendChild(inner);var scrollbarWidth=outer.offsetWidth-inner.offsetWidth;outer.remove(outer);return scrollbarWidth}var sidebar=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0];if(sidebar.scrollHeight>sidebar.clientHeight){sidebar.style.setProperty(\"--scrollbar-width\",\"\".concat(getScrollbarWidth(),\"px\"))}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar > div:not(:last-child)\").onAll(\"click\",(e,el)=>{location.href=el.dataset.url});(_$$=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar > div[data-url=\\\"\".concat(location.pathname.slice(1),\"\\\"]\"))[0])===null||_$$===void 0||_$$.classList.add(\"selected\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".menu-bars\")[0].on(\"click\",()=>{(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".menu-bars\")[0].classList.toggle(\"open\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].classList.toggle(\"open\")});(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].on(\"mouseenter\",()=>(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar-shadow\")[0].classList.add(\"open\"));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].on(\"mouseleave\",()=>(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar-shadow\")[0].classList.remove(\"open\"));// Sign in\nfunction signIn(){var client=google.accounts.oauth2.initCodeClient({client_id:\"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com\",scope:\"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile\",ux_mode:\"popup\",callback:response=>{fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./auth\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({code:response.code})}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(res){if(res.status!==200){alert(\"Could not log in. Please try again.\");return}var data=yield res.json();localStorage.setItem(\"session-token\",data.session_token);localStorage.setItem(\"user-id\",data.user_id);localStorage.setItem(\"tags\",JSON.stringify(data.tags));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sign-in\")[0].classList.add(\"disabled\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sign-in\")[0].removeEventListener(\"click\",signIn);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].classList.add(\"signed-in\");if(data.tags.includes(\"mentor\")){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].classList.add(\"mentor\")}});return function(){return _ref.apply(this,arguments)}}())}});client.requestCode()}function notify(message,time){var container=document.createElement(\"div\");var barContainer=document.createElement(\"div\");barContainer.style.height=\"7.5px\";var bar=document.createElement(\"div\");bar.style.height=\"7.5px\";bar.style.width=\"0\";bar.style.animation=\"NotificationBar \".concat(time,\"s linear 1\");bar.style.backgroundColor=\"red\";barContainer.appendChild(bar);container.appendChild(barContainer);var textContainer=document.createElement(\"div\");textContainer.innerText=message;textContainer.style.padding=\"7.5px 15px 15px 15px\";container.appendChild(textContainer);var styling;if(window.innerWidth>400){styling={position:\"absolute\",bottom:\"15px\",right:\"30px\",\"font-family\":\"system-ui,-apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,Oxygen,Ubuntu,Cantarell,\\\"Open Sans\\\",\\\"Helvetica Neue\\\",sans-serif\",\"background-color\":\"white\",\"font-size\":\"18px\",width:\"250px\",border:\"5px solid black\"}}else{styling={position:\"absolute\",bottom:\"15px\",left:\"15px\",right:\"15px\",\"font-family\":\"system-ui,-apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,Oxygen,Ubuntu,Cantarell,\\\"Open Sans\\\",\\\"Helvetica Neue\\\",sans-serif\",\"background-color\":\"white\",\"font-size\":\"18px\",border:\"5px solid black\"}}for(var key in styling){container.style[key]=styling[key]}document.body.appendChild(container);setTimeout(()=>{var delay=0.3;container.style.opacity=0;container.style.animation=\"NotificationPop \".concat(delay,\"s ease-out 1\");setTimeout(()=>container.remove(),delay*1000)},time*1000)}if((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar > div[data-url=\\\"\".concat(location.pathname.slice(1),\"\\\"]\"))[0]){fetch(\"\".concat(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend,\"./pre-auth\"),{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\")})}).then(/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(res){if(res.status!=200){notify(\"You are not signed in. To access working features of this website, please navigate to the menu and log in through Google.\",7.5);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sign-in\")[0].classList.remove(\"disabled\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sign-in\")[0].on(\"click\",signIn)}else{(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].classList.add(\"signed-in\");if(JSON.parse(localStorage.getItem(\"tags\")).includes(\"mentor\")){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".sidebar\")[0].classList.add(\"mentor\")}}});return function(){return _ref2.apply(this,arguments)}}())}\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/menu.js?");

/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./src/styles/menu.scss?");

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
/******/ 	__webpack_require__("./src/scripts/menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/menu.scss");
/******/ 	
/******/ })()
;