"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client();\n    await client.connect();\n    await client.query(queryObject);\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BO0lBQ3pCLE1BQU1HLE9BQU9DLE9BQU87SUFDcEIsTUFBTUQsT0FBT0YsS0FBSyxDQUFDQztJQUNuQixNQUFNRyxTQUFTLE1BQU1GLE9BQU9GLEtBQUssQ0FBQ0M7SUFDbEMsTUFBTUMsT0FBT0csR0FBRztJQUNoQixPQUFPRDtBQUNUO0FBRUEsaUVBQWU7SUFDYkosT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJueWhldGVyLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xuICBhd2FpdCBjbGllbnQuZW5kKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnk6IHF1ZXJ5LFxufTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiY29ubmVjdCIsInJlc3VsdCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nfunction status(request, response) {\n    console.log(_infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    response.status(200).json({\n        nøkkel: \"er mennesker over gjennomsnittet\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXJELFNBQVNDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ2pDQyxRQUFRQyxHQUFHLENBQUNMLDBEQUFRQTtJQUNwQkcsU0FBU0YsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQztRQUN4QkMsUUFBUTtJQUNWO0FBQ0Y7QUFFQSxpRUFBZU4sTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYm55aGV0ZXIvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9pbmZyYS9kYXRhYmFzZS5qc1wiO1xuXG5mdW5jdGlvbiBzdGF0dXMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc29sZS5sb2coZGF0YWJhc2UpO1xuICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBuw7hra2VsOiBcImVyIG1lbm5lc2tlciBvdmVyIGdqZW5ub21zbml0dGV0XCIsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXM7XG4iXSwibmFtZXMiOlsiZGF0YWJhc2UiLCJzdGF0dXMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm7DuGtrZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();