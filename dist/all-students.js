"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || []).push([["all-students"],{

/***/ "./flask_build/scripts/all-students.js":
/*!*********************************************!*\
  !*** ./flask_build/scripts/all-students.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./flask_build/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nfetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./users\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\")})}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){if(data.status!=200){alert(\"Error \".concat(data.status,\"\\n\").concat(data.statusText));return}data=yield data.json();data=data.map(el=>{el.hours=Math.floor(parseInt(el.initiative_mins)/60);el.mins=(parseInt(el.initiative_mins)%60).toString().padStart(2,\"0\");return\"<tr data-user_id=\\\"\".concat(el.user_id,\"\\\">\\n      <td>\\n        <div><img src=\\\"\").concat(el.profile_picture,\"\\\"> \").concat(el.name,\"</div>\\n        <div><a href=\\\"mailto:\").concat(el.email,\"\\\" target=\\\"blank\\\">\").concat(el.email,\"</a></div>\\n      </td>\\n      <td>\").concat(el.department_name,\"</td>\\n      <td>\").concat(el.hours,\":\").concat(el.mins,\"</td>\\n      <td>\").concat(el.tags.join(\", \"),\"</td>\\n      <td><input type=\\\"checkbox\\\"></td>\\n      <td><a href=\\\"user-dashboard.html?user-id=\").concat(el.user_id,\"\\\">Visit &gt;</a></td>\\n    </tr>\")}).join(\"\\n\");(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"tbody\")[0].innerHTML+=data;var inputs=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"input[type='checkbox']\");inputs.forEach(el=>el.parentElement.addEventListener(\"click\",e=>{if(e.target==el){return}el.checked=!el.checked}))});return function(){return _ref.apply(this,arguments)}}());(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".delete-users button\")[0].on(\"click\",()=>{var inputs=(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"input[type='checkbox']\");inputs=inputs.filter(el=>el.checked);fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./delete-users\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({session_token:localStorage.getItem(\"session-token\"),// Add filter to array so as to not delete yourself\nuser_ids:inputs.map(el=>el.parentElement.parentElement.dataset.user_id)})}).then(location.reload())});\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/all-students.js?");

/***/ }),

/***/ "./flask_build/styles/all-students.scss":
/*!**********************************************!*\
  !*** ./flask_build/styles/all-students.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/all-students.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./flask_build/styles/all-students.scss"), __webpack_exec__("./flask_build/scripts/all-students.js"));
/******/ }
]);