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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: \"localhost\",\n        port: 5432,\n        user: \"postgres\",\n        database: \"postgres\",\n        password: process.env.POSTGRESS_PASSWORD\n    });\n    await client.connect();\n    await client.query(queryObject);\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7SUFDMUM7SUFDQSxNQUFNUixPQUFPUyxPQUFPO0lBQ3BCLE1BQU1ULE9BQU9GLEtBQUssQ0FBQ0M7SUFDbkIsTUFBTVcsU0FBUyxNQUFNVixPQUFPRixLQUFLLENBQUNDO0lBQ2xDLE1BQU1DLE9BQU9XLEdBQUc7SUFDaEIsT0FBT0Q7QUFDVDtBQUVBLGlFQUFlO0lBQ2JaLE9BQU9BO0FBQ1QsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFibnloZXRlci8uL2luZnJhL2RhdGFiYXNlLmpzP2UzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcInBnXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgcG9ydDogNTQzMixcbiAgICB1c2VyOiBcInBvc3RncmVzXCIsXG4gICAgZGF0YWJhc2U6IFwicG9zdGdyZXNcIixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNTX1BBU1NXT1JELFxuICB9KTtcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5T2JqZWN0KTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5T2JqZWN0KTtcbiAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5OiBxdWVyeSxcbn07XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwb3J0IiwidXNlciIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNTX1BBU1NXT1JEIiwiY29ubmVjdCIsInJlc3VsdCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1 + 1 as sum;\");\n    console.log(result.rows);\n    response.status(200).json({\n        nøkkel: \"er mennesker over gjennomsnittet\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXJELGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBQ3ZCTCxTQUFTRixNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1FBQ3hCQyxRQUFRO0lBQ1Y7QUFDRjtBQUVBLGlFQUFlVCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFibnloZXRlci8uL3BhZ2VzL2FwaS92MS9zdGF0dXMvaW5kZXguanM/ODRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2luZnJhL2RhdGFiYXNlLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXR1cyhyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcIlNFTEVDVCAxICsgMSBhcyBzdW07XCIpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQucm93cyk7XG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xuICAgIG7DuGtrZWw6IFwiZXIgbWVubmVza2VyIG92ZXIgZ2plbm5vbXNuaXR0ZXRcIixcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXR1cztcbiJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsInN0YXR1cyIsInJlcXVlc3QiLCJyZXNwb25zZSIsInJlc3VsdCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJqc29uIiwibsO4a2tlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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