"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || []).push([["initiatives"],{

/***/ "./flask_build/scripts/initiatives.js":
/*!********************************************!*\
  !*** ./flask_build/scripts/initiatives.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./flask_build/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nfetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./initiatives\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"}}).then(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){data=yield data.json();data=data.map(/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(el){el.mins=parseInt(el.total_mins)%60;el.hours=Math.floor(parseInt(el.total_mins)/60);// Sanitize\nvar div=document.createElement(\"div\");div.innerText=el.description;el.description=div.innerHTML.replaceAll(\"<br>\",\"</div><div>\");yield fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./translate-user-ids\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({user_ids:el.leads})}).then(/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(data){el.leads=yield data.json()});return function(){return _ref3.apply(this,arguments)}}());// First name, last initial\n// el.leads = el.leads.map(el => {\n//   let split = el.split(\" \");\n//   if (split.length > 1){\n//     return `${split[0]} ${split.at(-1).slice(0,1)}.`\n//   }\n//   return split[0];\n// })\n// Sanitize\ndiv.innerText=el.leads.join(\", \");el.leads=div.innerHTML.replaceAll(\"<br>\",\"</div><div>\");return\"<section>\\n  <div class=\\\"image-container\\\">\\n    <img src=\\\"\".concat(el.picture,\"\\\">\\n  </div>\\n  <div class=\\\"info-container\\\" style=\\\"--img-url:url('\").concat(el.picture,\"')\\\">\\n    <h2>\").concat(el.initiative_name,\"</h2>\\n    <div class=\\\"leads\\\">Leads: \").concat(el.leads,\"</div>\\n    <div class=\\\"stats\\\">\\n      <div class=\\\"participants\\\"><img src=\\\"./static/person-icon.png\\\" alt=\\\"Participants\\\">\\n        <span>\").concat(el.total_participants,\" volunteer\").concat(el.total_participants>1?\"s\":\"\",\"</span>\\n      </div>\\n      <div class=\\\"hours\\\"><img src=\\\"./static/clock-icon.png\\\" alt=\\\"Time Spent\\\">\\n        <span>\").concat(el.hours||el.mins,\" \").concat(el.hours?\"hour\"+el.hours>1?\"s\":\"\":\"min\"+el.mins>1?\"s\":\"\",\"</span>\\n      </div>\\n    </div>\\n    <div class=\\\"description\\\">\\n      <div>\").concat(el.description,\"</div>\\n    </div>\\n  </div>\\n</section>\")});return function(){return _ref2.apply(this,arguments)}}());Promise.all(data).then(data=>(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".content\")[0].innerHTML+=data.join(\"\\n\"))});return function(){return _ref.apply(this,arguments)}}());\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/initiatives.js?");

/***/ }),

/***/ "./flask_build/styles/initiatives.scss":
/*!*********************************************!*\
  !*** ./flask_build/styles/initiatives.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/initiatives.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./flask_build/styles/initiatives.scss"), __webpack_exec__("./flask_build/scripts/initiatives.js"));
/******/ }
]);