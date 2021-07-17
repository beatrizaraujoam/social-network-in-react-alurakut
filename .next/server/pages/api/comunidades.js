(function() {
var exports = {};
exports.id = "pages/api/comunidades";
exports.ids = ["pages/api/comunidades"];
exports.modules = {

/***/ "./pages/api/comunidades.js":
/*!**********************************!*\
  !*** ./pages/api/comunidades.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ recebedorDeRequests; }
/* harmony export */ });
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datocms-client */ "datocms-client");
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "3a9782340b8b4df0d359bb792b880b";
    const client = new datocms_client__WEBPACK_IMPORTED_MODULE_0__.SiteClient(TOKEN);
    const registroCriado = await client.items.create(_objectSpread({
      itemType: "836335"
    }, request.body));
    console.log(registroCriado);
    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!"
  });
}

/***/ }),

/***/ "datocms-client":
/*!*********************************!*\
  !*** external "datocms-client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("datocms-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/comunidades.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvYXBpL2NvbXVuaWRhZGVzLmpzIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJkYXRvY21zLWNsaWVudFwiIl0sIm5hbWVzIjpbInJlY2ViZWRvckRlUmVxdWVzdHMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJUT0tFTiIsImNsaWVudCIsIlNpdGVDbGllbnQiLCJyZWdpc3Ryb0NyaWFkbyIsIml0ZW1zIiwiY3JlYXRlIiwiaXRlbVR5cGUiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYWRvcyIsInN0YXR1cyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLGVBQWVBLG1CQUFmLENBQW1DQyxPQUFuQyxFQUE0Q0MsUUFBNUMsRUFBc0Q7QUFDbkUsTUFBSUQsT0FBTyxDQUFDRSxNQUFSLEtBQW1CLE1BQXZCLEVBQStCO0FBQzdCLFVBQU1DLEtBQUssR0FBRyxnQ0FBZDtBQUNBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxzREFBSixDQUFlRixLQUFmLENBQWY7QUFFQSxVQUFNRyxjQUFjLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxLQUFQLENBQWFDLE1BQWI7QUFDM0JDLGNBQVEsRUFBRTtBQURpQixPQUV4QlQsT0FBTyxDQUFDVSxJQUZnQixFQUE3QjtBQUtBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sY0FBWjtBQUVBTCxZQUFRLENBQUNZLElBQVQsQ0FBYztBQUNaQyxXQUFLLEVBQUUscUJBREs7QUFFWlIsb0JBQWMsRUFBRUE7QUFGSixLQUFkO0FBSUE7QUFDRDs7QUFFREwsVUFBUSxDQUFDYyxNQUFULENBQWdCLEdBQWhCLEVBQXFCRixJQUFyQixDQUEwQjtBQUN4QkcsV0FBTyxFQUFFO0FBRGUsR0FBMUI7QUFHRCxDOzs7Ozs7Ozs7OztBQ3hCRCw0QyIsImZpbGUiOiJwYWdlcy9hcGkvY29tdW5pZGFkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXRlQ2xpZW50IH0gZnJvbSBcImRhdG9jbXMtY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlY2ViZWRvckRlUmVxdWVzdHMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IFRPS0VOID0gXCIzYTk3ODIzNDBiOGI0ZGYwZDM1OWJiNzkyYjg4MGJcIjtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgU2l0ZUNsaWVudChUT0tFTik7XG5cbiAgICBjb25zdCByZWdpc3Ryb0NyaWFkbyA9IGF3YWl0IGNsaWVudC5pdGVtcy5jcmVhdGUoe1xuICAgICAgaXRlbVR5cGU6IFwiODM2MzM1XCIsIC8vIElEIGRvIE1vZGVsIGRlIFwiQ29tbXVuaXRpZXNcIiBjcmlhZG8gcGVsbyBEYXRvXG4gICAgICAuLi5yZXF1ZXN0LmJvZHksXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZWdpc3Ryb0NyaWFkbyk7XG5cbiAgICByZXNwb25zZS5qc29uKHtcbiAgICAgIGRhZG9zOiBcIkFsZ3VtIGRhZG8gcXVhbHF1ZXJcIixcbiAgICAgIHJlZ2lzdHJvQ3JpYWRvOiByZWdpc3Ryb0NyaWFkbyxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXNwb25zZS5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICBtZXNzYWdlOiBcIkFpbmRhIG7Do28gdGVtb3MgbmFkYSBubyBHRVQsIG1hcyBubyBQT1NUIHRlbSFcIixcbiAgfSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRvY21zLWNsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==