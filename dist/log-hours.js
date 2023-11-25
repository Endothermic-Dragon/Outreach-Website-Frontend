"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || []).push([["log-hours"],{

/***/ "./flask_build/scripts/log-hours.js":
/*!******************************************!*\
  !*** ./flask_build/scripts/log-hours.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./flask_build/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nfunction updatePrep(){var initiative_id=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].value;if((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"option[value=\\\"\".concat(initiative_id,\"\\\"]\"))[0].dataset.lead==\"true\"){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".vary-disabled\")[0].classList.remove(\"disabled\")}else{(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".vary-disabled\")[0].classList.add(\"disabled\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"input[type='checkbox']\")[0].checked=false}}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"input[type='number']\").onAll(\"input\",()=>{if((parseInt((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#hours\")[0].value)||0)*60+(parseInt((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mins\")[0].value)||0)>600){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mins\")[0].setCustomValidity(\"Total time must be less than 10 hours.\")}else{(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mins\")[0].setCustomValidity(\"\")}});(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].on(\"input\",(e,el)=>{var now=new Date(el.value);// Two weeks to log time\nvar startLimit=new Date().getTime()-14*24*60*60*1000;startLimit=new Date().setTime(startLimit);if(startLimit>now){el.setCustomValidity(\"You can only log hours for two weeks.\")}else if(now>new Date){el.setCustomValidity(\"You can't log hours in the future.\")}else{el.setCustomValidity(\"\")}});function startTimeTimestamp(){return Math.floor((new Date((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#start-time\")[0].value)-new Date(\"Jan 1 2020 00:00:00 GMT\"))/1000/60)}function handleSubmit(e){e.preventDefault();fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./log-hours\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),initiative_id:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#initiative\")[0].value,prep_time:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#event-leader\")[0].checked,duration:parseInt((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#hours\")[0].value)*60+parseInt((0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mins\")[0].value),start_time:startTimeTimestamp()})}).then(()=>location.href=\"user-dashboard.html\")}fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./initiatives\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"}}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){data=yield data.json();data=data.map(el=>\"<option value=\\\"\".concat(el.initiative_id,\"\\\" data-lead=\\\"\").concat(el.leads.includes(localStorage.getItem(\"user-id\")),\"\\\">\").concat(el.initiative_name,\"</option>\"));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].innerHTML+=data.join(\"\\n\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].on(\"change\",updatePrep);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].on(\"submit\",handleSubmit)});return function(){return _ref.apply(this,arguments)}}());\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/log-hours.js?");

/***/ }),

/***/ "./flask_build/styles/log-hours.scss":
/*!*******************************************!*\
  !*** ./flask_build/styles/log-hours.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/log-hours.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./flask_build/styles/log-hours.scss"), __webpack_exec__("./flask_build/scripts/log-hours.js"));
/******/ }
]);