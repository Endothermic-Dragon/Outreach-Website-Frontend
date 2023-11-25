"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || []).push([["new-initiative"],{

/***/ "./flask_build/scripts/new-initiative.js":
/*!***********************************************!*\
  !*** ./flask_build/scripts/new-initiative.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./flask_build/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nvar selectHTML=\"\";function handle(e){var select,button;if(e.target.tagName==\"BUTTON\"&&[...e.target.classList].includes(\"remove\")){e.preventDefault();e.target.nextSibling.remove();e.target.remove()}if(e.target.tagName==\"BUTTON\"&&[...e.target.classList].includes(\"add\")){e.preventDefault();select=document.createElement(\"select\");select.required=true;select.innerHTML=selectHTML;button=document.createElement(\"button\");button.classList.add(\"remove\");button.innerHTML=\"-\";(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input\")[0].insertBefore(button,[...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input\")[0].children].at(-1));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input\")[0].insertBefore(select,[...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input\")[0].children].at(-1))}}fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./users\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\")})}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){if(data.status!=200){alert(\"Error \".concat(data.status,\"\\n\").concat(data.statusText));return}data=yield data.json();data=data.map(el=>\"<option value=\\\"\".concat(el.user_id,\"\\\">\").concat(el.name,\" (\").concat(el.email,\")</option>\"));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].innerHTML+=data.join(\"\\n\");selectHTML=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"select\")[0].innerHTML;(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input\")[0].on(\"click\",handle)});return function(){return _ref.apply(this,arguments)}}());(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].on(\"submit\",e=>{e.preventDefault();var categories=[];(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#Community\")[0].checked&&categories.push(\"Community\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#FIRST\")[0].checked&&categories.push(\"FIRST\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#STEM\")[0].checked&&categories.push(\"STEM\");var data={body:{session_token:localStorage.getItem(\"session-token\"),initiative_name:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#name\")[0].value,picture:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#picture\")[0].value,categories:categories,leads:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input select\").map(el=>el.value),description:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"textarea\").value}};console.log(data);fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./add-initiative\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),initiative_name:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#name\")[0].value.trim(),picture:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"#picture\")[0].value.trim(),categories:categories,leads:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".leads-input select\").map(el=>el.value),description:(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"textarea\")[0].value.trim()})}).then(()=>location.href=\"initiatives.html\")});\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/new-initiative.js?");

/***/ }),

/***/ "./flask_build/styles/new-initiative.scss":
/*!************************************************!*\
  !*** ./flask_build/styles/new-initiative.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/new-initiative.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./flask_build/styles/new-initiative.scss"), __webpack_exec__("./flask_build/scripts/new-initiative.js"));
/******/ }
]);