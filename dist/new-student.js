"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkoutreach_website_frontend"] = self["webpackChunkoutreach_website_frontend"] || []).push([["new-student"],{

/***/ "./flask_build/scripts/new-student.js":
/*!********************************************!*\
  !*** ./flask_build/scripts/new-student.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ \"./flask_build/scripts/global.js\");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\nvar count=1;function addStudentRow(e){count++;e.preventDefault();var subform=\"\\n  <input type=\\\"text\\\" placeholder=\\\"Full Name\\\" required><br>\\n  <input type=\\\"email\\\" placeholder=\\\"Email\\\" required><br>\\n  <select>\\n    <option value=\\\"-\\\" disabled selected>Department NA</option>\\n    <option value=\\\"documentation\\\">Documentation</option>\\n    <option value=\\\"finance\\\">Finance</option>\\n    <option value=\\\"pr\\\">Public Relations</option>\\n    <option value=\\\"carpentry\\\">Carpentry</option>\\n    <option value=\\\"design\\\">Design</option>\\n    <option value=\\\"electrical\\\">Electrical</option>\\n    <option value=\\\"mechanical\\\">Mechanical</option>\\n    <option value=\\\"programming\\\">Programming</option>\\n    <option value=\\\"safety\\\">Safety</option>\\n    <option value=\\\"strategy\\\">Strategy</option>\\n  </select><br>\\n  <input type=\\\"checkbox\\\" id=\\\"new-student-\".concat(count,\"\\\">\\n  <label for=\\\"new-student-\").concat(count,\"\\\"> New student</label><br>\\n  <input type=\\\"checkbox\\\" id=\\\"mentor-\").concat(count,\"\\\">\\n  <label for=\\\"mentor-\").concat(count,\"\\\"> Mentor</label><br>\\n  \");var newDiv=document.createElement(\"div\");var button=document.createElement(\"button\");button.classList.add(\"remove-row\");button.innerText=\"Remove student row\";button.addEventListener(\"click\",removeStudentRow);var hr=document.createElement(\"hr\");newDiv.innerHTML=subform;newDiv.appendChild(button);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].insertBefore(hr,[...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].children].at(-3));(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].insertBefore(newDiv,[...(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].children].at(-3))}function removeStudentRow(e){e.preventDefault();e.target.parentElement.previousSibling.remove();e.target.parentElement.remove()}function submitForm(){return _submitForm.apply(this,arguments)}// body: JSON.stringify({\n//   \"code\": code,\n//   \"searches\": [\"Eshaan Debnath debnathe@htps.us\", \"Adhithi Rajesh rajeshad@htps.us\"],\n//   \"department\": \"Programming\",\n//   \"tags\": \"returning-student\",\n// })\nfunction _submitForm(){_submitForm=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function*(e){e.preventDefault();(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"[type='submit']\")[0].disabled=true;var searches=[];var departments=[];var tags_s=[];(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form > div\").forEach(el=>{searches.push(el.querySelector(\"input\").value+\" \"+el.querySelector(\"[type='email']\").value);departments.push(el.querySelector(\"select\").value);var tags=[];el.querySelector(\"[id^='mentor']\").checked&&tags.push(\"mentor\");el.querySelector(\"[id^='new-student']\").checked&&tags.push(\"new\");tags_s.push(tags)});var code=yield crossFetch();fetch(_global_js__WEBPACK_IMPORTED_MODULE_1__.backend+\"./add-users\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({code:code,searches:searches,departments:departments,tags_s:tags_s,session_token:localStorage.getItem(\"session-token\")})}).then(()=>{window.location.href=\"all-students.html\"})});return _submitForm.apply(this,arguments)}function crossFetch(){return new Promise(resolve=>{var client=google.accounts.oauth2.initCodeClient({client_id:\"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com\",scope:\"https://www.googleapis.com/auth/contacts.readonly\",ux_mode:\"popup\",callback:res=>{resolve(res.code)}});client.requestCode()})}(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".add-another-student\")[0].on(\"click\",addStudentRow);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\".remove-row\")[0].on(\"click\",removeStudentRow);(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.$)(\"form\")[0].on(\"submit\",submitForm);\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/scripts/new-student.js?");

/***/ }),

/***/ "./flask_build/styles/new-student.scss":
/*!*********************************************!*\
  !*** ./flask_build/styles/new-student.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://outreach-website-frontend/./flask_build/styles/new-student.scss?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./flask_build/styles/new-student.scss"), __webpack_exec__("./flask_build/scripts/new-student.js"));
/******/ }
]);