"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || []).push([["user-dashboard"],{

/***/ "./flask_build/scripts/user-dashboard.js":
/*!***********************************************!*\
  !*** ./flask_build/scripts/user-dashboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./flask_build/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nvar user_id=new URLSearchParams(window.location.search).get(\"user_id\")||new URLSearchParams(window.location.search).get(\"user-id\")||localStorage.getItem(\"user-id\");if(user_id!=localStorage.getItem(\"user-id\")){(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".hours span\")[1].innerText=\"This user currently has\"}fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./user\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),user_id:user_id})}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){if(data.status!=200){alert(\"Error \".concat(data.status,\"\\n\").concat(data.statusText));return}data=yield data.json();(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-banner img\")[0].src=data.profile_picture;(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-details div:first-child\")[0].innerText=data.name;(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-details div a\")[0].innerText=data.email;(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-details div a\")[0].href=\"mailto:\".concat(data.email);data.mins=parseInt(data.initiative_mins)%60;data.hours=Math.floor(parseInt(data.initiative_mins)/60);var timeStr=[];if(data.hours==1){timeStr.push(\"1 hour\")}else if(data.hours!=0){timeStr.push(data.hours+\" hours\")}if(data.mins==1){timeStr.push(\"1 minute\")}else if(data.mins!=0){timeStr.push(data.mins+\" minutes\")}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".hours span\")[2].innerText=timeStr.join(\", \")||\"0 minutes\"});return function(){return _ref.apply(this,arguments)}}());function getLogs(){if([...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"button\")[0].classList].includes(\"disabled\")){return}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"button\")[0].classList.add(\"disabled\");fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./user-initiatives\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),user_id:user_id})}).then(/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){if(data.status!=200){alert(\"Error \".concat(data.status,\"\\n\").concat(data.statusText));return}data=yield data.json();yield fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./translate-initiative-ids\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({initiative_ids:data.initiative_data.map(el=>el.initiative_id)})}).then(/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(res){res=yield res.json();data.initiative_data=data.initiative_data.map((el,i)=>{el.initiative_name=res[i];return el})});return function(){return _ref3.apply(this,arguments)}}());data=data.initiative_data.map(/*#__PURE__*/function(){var _ref4=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(el){el.mins=(parseInt(el.duration)%60).toString().padStart(2,\"0\");el.hours=Math.floor(parseInt(el.duration)/60);var date=new Date(new Date(\"Jan 1 2020 00:00:00 GMT\").getTime()+parseInt(el.timestamp)*60*1000).toLocaleString().replaceAll(\" \",\"&nbsp;\").replace(\"&nbsp;\",\" \");var startTime=new Date(new Date(\"Jan 1 2020 00:00:00 GMT\").getTime()+parseInt(el.start_time)*60*1000).toLocaleString().replaceAll(\" \",\"&nbsp;\").replace(\"&nbsp;\",\" \");return[el.initiative_name,startTime,\"\".concat(el.hours,\":\").concat(el.mins),el.prep_time?\"True\":\"False\",date]});return function(){return _ref4.apply(this,arguments)}}());yield Promise.all(data).then(data=>{var tableBody=data.map(el=>{console.log(el);return\"<tr><td>\".concat(el[0],\"</td><td>\").concat(el[1],\"</td><td>\").concat(el[2],\"</td><td>\").concat(el[3],\"</td><td>\").concat(el[4],\"</td></tr>\")}).join(\"\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".logs\")[0].innerHTML=\"<table><thead><tr><th>Initiative Name</th><th>Start Time</th><th>Hour Logged</th><th>Lead Prep Time</th><th>Record Date</th></tr></thead><tbody>\".concat(tableBody,\"</tbody></table>\")})});return function(){return _ref2.apply(this,arguments)}}())}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"button\")[0].addEventListener(\"click\",getLogs);\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/user-dashboard.js?");

/***/ }),

/***/ "./flask_build/styles/user-dashboard.scss":
/*!************************************************!*\
  !*** ./flask_build/styles/user-dashboard.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/user-dashboard.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./flask_build/styles/user-dashboard.scss"), __webpack_exec__("./flask_build/scripts/user-dashboard.js"));
/******/ }
]);