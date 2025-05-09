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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQSxNQUFNWixPQUFPYSxPQUFPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1Q7QUFFQSxpRUFBZTtJQUNiaEIsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJueWhldGVyLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVCxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19QT1JULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRCxcbiAgfSk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gIGF3YWl0IGNsaWVudC5lbmQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeTogcXVlcnksXG59O1xuIl0sIm5hbWVzIjpbIkNsaWVudCIsInF1ZXJ5IiwicXVlcnlPYmplY3QiLCJjbGllbnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIlBPU1RHUkVTX0hPU1QiLCJwb3J0IiwiUE9TVEdSRVNfUE9SVCIsInVzZXIiLCJQT1NUR1JFU19VU0VSIiwiZGF0YWJhc2UiLCJQT1NUR1JFU19EQiIsInBhc3N3b3JkIiwiUE9TVEdSRVNfUEFTU1dPUkQiLCJjb25uZWN0IiwicmVzdWx0IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    // const dbVersionResult = await database.query(\"SHOW server_version;\");\n    // const dbMaxConnectionsResult = await database.query(\"SHOW max_connections;\");\n    // const dbUsedConnectionsResult = await database.query(`\n    //   SELECT COUNT(*)::int\n    //   FROM pg_stat_activity\n    //   WHERE state = 'active';\n    //   `);\n    // const dbInfo = {\n    //   version: dbVersionResult.rows[0].server_version,\n    //   max_connections: parseInt(\n    //     dbMaxConnectionsResult.rows[0].max_connections,\n    //     10,\n    //   ),\n    //   used_connections: dbUsedConnectionsResult.rows[0].count,\n    // };\n    response.status(200).json({\n        updated_at: updatedAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUV4QyxNQUFNQyx3QkFBd0IsTUFBTVAsK0RBQWMsQ0FBQztJQUNuRCxNQUFNUyx1QkFBdUJGLHNCQUFzQkcsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsY0FBYztJQUV6RSx3RUFBd0U7SUFDeEUsZ0ZBQWdGO0lBQ2hGLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixRQUFRO0lBRVIsbUJBQW1CO0lBQ25CLHFEQUFxRDtJQUNyRCwrQkFBK0I7SUFDL0Isc0RBQXNEO0lBQ3RELFVBQVU7SUFDVixPQUFPO0lBQ1AsNkRBQTZEO0lBQzdELEtBQUs7SUFFTFIsU0FBU0YsTUFBTSxDQUFDLEtBQUtXLElBQUksQ0FBQztRQUN4QkMsWUFBWVQ7UUFDWlUsY0FBYztZQUNaZCxVQUFVO2dCQUNSZSxTQUFTTjtZQUNYO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsaUVBQWVSLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJueWhldGVyLy4vcGFnZXMvYXBpL3YxL3N0YXR1cy9pbmRleC5qcz84NGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhYmFzZSBmcm9tIFwiaW5mcmEvZGF0YWJhc2UuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICBjb25zdCBkYXRhYmFzZVZlcnNpb25SZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcIlNIT1cgc2VydmVyX3ZlcnNpb247XCIpO1xuICBjb25zdCBkYXRhYmFzZVZlcnNpb25WYWx1ZSA9IGRhdGFiYXNlVmVyc2lvblJlc3VsdC5yb3dzWzBdLnNlcnZlcl92ZXJzaW9uO1xuXG4gIC8vIGNvbnN0IGRiVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIik7XG4gIC8vIGNvbnN0IGRiTWF4Q29ubmVjdGlvbnNSZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcIlNIT1cgbWF4X2Nvbm5lY3Rpb25zO1wiKTtcbiAgLy8gY29uc3QgZGJVc2VkQ29ubmVjdGlvbnNSZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShgXG4gIC8vICAgU0VMRUNUIENPVU5UKCopOjppbnRcbiAgLy8gICBGUk9NIHBnX3N0YXRfYWN0aXZpdHlcbiAgLy8gICBXSEVSRSBzdGF0ZSA9ICdhY3RpdmUnO1xuICAvLyAgIGApO1xuXG4gIC8vIGNvbnN0IGRiSW5mbyA9IHtcbiAgLy8gICB2ZXJzaW9uOiBkYlZlcnNpb25SZXN1bHQucm93c1swXS5zZXJ2ZXJfdmVyc2lvbixcbiAgLy8gICBtYXhfY29ubmVjdGlvbnM6IHBhcnNlSW50KFxuICAvLyAgICAgZGJNYXhDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLm1heF9jb25uZWN0aW9ucyxcbiAgLy8gICAgIDEwLFxuICAvLyAgICksXG4gIC8vICAgdXNlZF9jb25uZWN0aW9uczogZGJVc2VkQ29ubmVjdGlvbnNSZXN1bHQucm93c1swXS5jb3VudCxcbiAgLy8gfTtcblxuICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICB1cGRhdGVkX2F0OiB1cGRhdGVkQXQsXG4gICAgZGVwZW5kZW5jaWVzOiB7XG4gICAgICBkYXRhYmFzZToge1xuICAgICAgICB2ZXJzaW9uOiBkYXRhYmFzZVZlcnNpb25WYWx1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXR1cztcbiJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsInN0YXR1cyIsInJlcXVlc3QiLCJyZXNwb25zZSIsInVwZGF0ZWRBdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRhdGFiYXNlVmVyc2lvblJlc3VsdCIsInF1ZXJ5IiwiZGF0YWJhc2VWZXJzaW9uVmFsdWUiLCJyb3dzIiwic2VydmVyX3ZlcnNpb24iLCJqc29uIiwidXBkYXRlZF9hdCIsImRlcGVuZGVuY2llcyIsInZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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