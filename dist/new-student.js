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

/***/ "./src/scripts/new-student.js":
/*!************************************!*\
  !*** ./src/scripts/new-student.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./src/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nvar count=1;function addStudentRow(e){count++;e.preventDefault();var subform=\"\\n  <input type=\\\"text\\\" placeholder=\\\"Full Name\\\" required><br>\\n  <input type=\\\"email\\\" placeholder=\\\"Email\\\" required><br>\\n  <select>\\n    <option value=\\\"-\\\" disabled selected>Department NA</option>\\n    <option value=\\\"documentation\\\">Documentation</option>\\n    <option value=\\\"finance\\\">Finance</option>\\n    <option value=\\\"pr\\\">Public Relations</option>\\n    <option value=\\\"carpentry\\\">Carpentry</option>\\n    <option value=\\\"design\\\">Design</option>\\n    <option value=\\\"electrical\\\">Electrical</option>\\n    <option value=\\\"mechanical\\\">Mechanical</option>\\n    <option value=\\\"programming\\\">Programming</option>\\n    <option value=\\\"safety\\\">Safety</option>\\n    <option value=\\\"strategy\\\">Strategy</option>\\n  </select><br>\\n  <input type=\\\"checkbox\\\" id=\\\"new-student-\".concat(count,\"\\\">\\n  <label for=\\\"new-student-\").concat(count,\"\\\"> New student</label><br>\\n  <input type=\\\"checkbox\\\" id=\\\"mentor-\").concat(count,\"\\\">\\n  <label for=\\\"mentor-\").concat(count,\"\\\"> Mentor</label><br>\\n  \");var newDiv=document.createElement(\"div\");var button=document.createElement(\"button\");button.classList.add(\"remove-row\");button.innerText=\"Remove student row\";button.addEventListener(\"click\",removeStudentRow);var hr=document.createElement(\"hr\");newDiv.innerHTML=subform;newDiv.appendChild(button);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].insertBefore(hr,[...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].children].at(-3));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].insertBefore(newDiv,[...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].children].at(-3))}function removeStudentRow(e){e.preventDefault();e.target.parentElement.previousSibling.remove();e.target.parentElement.remove()}function submitForm(){return _submitForm.apply(this,arguments)}// body: JSON.stringify({\n//   \"code\": code,\n//   \"searches\": [\"Eshaan Debnath debnathe@htps.us\", \"Adhithi Rajesh rajeshad@htps.us\"],\n//   \"department\": \"Programming\",\n//   \"tags\": \"returning-student\",\n// })\nfunction _submitForm(){_submitForm=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(e){e.preventDefault();(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"[type='submit']\")[0].disabled=true;var searches=[];var departments=[];var tags_s=[];(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form > div\").forEach(el=>{searches.push(el.querySelector(\"input\").value+\" \"+el.querySelector(\"[type='email']\").value);departments.push(el.querySelector(\"select\").value);var tags=[];el.querySelector(\"[id^='mentor']\").checked&&tags.push(\"mentor\");el.querySelector(\"[id^='new-student']\").checked&&tags.push(\"new\");tags_s.push(tags)});var code=yield crossFetch();fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./add-users\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({code:code,searches:searches,departments:departments,tags_s:tags_s,session_token:localStorage.getItem(\"session-token\")})}).then(()=>{window.location.href=\"all-students.html\"})});return _submitForm.apply(this,arguments)}function crossFetch(){return new Promise(resolve=>{var client=google.accounts.oauth2.initCodeClient({client_id:\"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com\",scope:\"https://www.googleapis.com/auth/contacts.readonly\",ux_mode:\"popup\",callback:res=>{resolve(res.code)}});client.requestCode()})}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".add-another-student\")[0].on(\"click\",addStudentRow);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".remove-row\")[0].on(\"click\",removeStudentRow);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].on(\"submit\",submitForm);\n\n//# sourceURL=webpack://outreach-website-frontend/./src/scripts/new-student.js?");

/***/ }),

/***/ "./src/styles/new-student.scss":
/*!*************************************!*\
  !*** ./src/styles/new-student.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./src/styles/new-student.scss?");

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
/******/ 	__webpack_require__("./src/styles/new-student.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/new-student.js");
/******/ 	
/******/ })()
;