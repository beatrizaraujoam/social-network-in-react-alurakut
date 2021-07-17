(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginScreen; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\beatriz.araujo\\Desktop\\FRONT\\alura\\alurakut-main\\pages\\login.js";
 // Hook do NextJS



function LoginScreen() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const [githubUser, setGithubUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("beatrizaraujoam");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    style: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "loginScreen",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "logoArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://alurakut.vercel.app/logo.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Conecte-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), " aos seus amigos e familiares usando recados e mensagens instant\xE2neas"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Conhe\xE7a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), " novas pessoas atrav\xE9s de amigos de seus amigos e comunidades"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Compartilhe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), " seus v\xEDdeos, fotos e paix\xF5es em um s\xF3 lugar"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "formArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "box",
          onSubmit: infosDoEvento => {
            infosDoEvento.preventDefault(); // alert('Alguém clicou no botão!')

            console.log("Usuário: ", githubUser);
            fetch("https://alurakut.vercel.app/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                githubUser: githubUser
              })
            }).then(async respostaDoServer => {
              const dadosDaResposta = await respostaDoServer.json();
              const token = dadosDaResposta.token;
              nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, "USER_TOKEN", token, {
                path: "/",
                maxAge: 86400 * 7
              });
              router.push("/");
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Acesse agora mesmo com seu usu\xE1rio do ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "GitHub"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 53
            }, this), "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Usu\xE1rio",
            value: githubUser,
            onChange: evento => {
              setGithubUser(evento.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), githubUser.length === 0 ? "Preencha o campo" : "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
          className: "box",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Ainda n\xE3o \xE9 membro? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 35
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "ENTRAR J\xC1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "footerArea",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["\xA9 2021 alura.com.br - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Sobre o Orkut.br"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 35
          }, this), " -", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Centro de seguran\xE7a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Privacidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 51
          }, this), " -", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Termos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Contato"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9naW5TY3JlZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnaXRodWJVc2VyIiwic2V0R2l0aHViVXNlciIsIlJlYWN0IiwiZGlzcGxheSIsImZsZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsImRhZG9zRGFSZXNwb3N0YSIsImpzb24iLCJ0b2tlbiIsIm5vb2tpZXMiLCJwYXRoIiwibWF4QWdlIiwicHVzaCIsImV2ZW50byIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUNwQyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJDLHFEQUFBLENBQWUsaUJBQWYsQ0FBcEM7QUFFQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVM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RUU7QUFBUSxpQkFBUyxFQUFDLFlBQWxCO0FBQUEsK0JBQ0U7QUFBQSwrREFDd0I7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHhCLFFBQzJELEdBRDNELGVBRUU7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsc0JBRXdDO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZ4QyxRQUVzRSxHQUZ0RSxlQUdFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLHNCQUcyQjtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxRkQsQzs7Ozs7Ozs7Ozs7QUM5RkQseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBIb29rIGRvIE5leHRKU1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblNjcmVlbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtnaXRodWJVc2VyLCBzZXRHaXRodWJVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKFwiYmVhdHJpemFyYXVqb2FtXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblNjcmVlblwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsb2dvQXJlYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwL2xvZ28uc3ZnXCIgLz5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5Db25lY3RlLXNlPC9zdHJvbmc+IGFvcyBzZXVzIGFtaWdvcyBlIGZhbWlsaWFyZXMgdXNhbmRvXG4gICAgICAgICAgICByZWNhZG9zIGUgbWVuc2FnZW5zIGluc3RhbnTDom5lYXNcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkNvbmhlw6dhPC9zdHJvbmc+IG5vdmFzIHBlc3NvYXMgYXRyYXbDqXMgZGUgYW1pZ29zIGRlIHNldXNcbiAgICAgICAgICAgIGFtaWdvcyBlIGNvbXVuaWRhZGVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5Db21wYXJ0aWxoZTwvc3Ryb25nPiBzZXVzIHbDrWRlb3MsIGZvdG9zIGUgcGFpeMO1ZXMgZW0gdW0gc8OzXG4gICAgICAgICAgICBsdWdhclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1BcmVhXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17KGluZm9zRG9FdmVudG8pID0+IHtcbiAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAvLyBhbGVydCgnQWxndcOpbSBjbGljb3Ugbm8gYm90w6NvIScpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXN1w6FyaW86IFwiLCBnaXRodWJVc2VyKTtcbiAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvYXBpL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBnaXRodWJVc2VyOiBnaXRodWJVc2VyIH0pLFxuICAgICAgICAgICAgICB9KS50aGVuKGFzeW5jIChyZXNwb3N0YURvU2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGFkb3NEYVJlc3Bvc3RhID0gYXdhaXQgcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBkYWRvc0RhUmVzcG9zdGEudG9rZW47XG4gICAgICAgICAgICAgICAgbm9va2llcy5zZXQobnVsbCwgXCJVU0VSX1RPS0VOXCIsIHRva2VuLCB7XG4gICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgIG1heEFnZTogODY0MDAgKiA3LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBY2Vzc2UgYWdvcmEgbWVzbW8gY29tIHNldSB1c3XDoXJpbyBkbyA8c3Ryb25nPkdpdEh1Yjwvc3Ryb25nPiFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzdcOhcmlvXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dpdGh1YlVzZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0R2l0aHViVXNlcihldmVudG8udGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Z2l0aHViVXNlci5sZW5ndGggPT09IDAgPyBcIlByZWVuY2hhIG8gY2FtcG9cIiA6IFwiXCJ9XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQWluZGEgbsOjbyDDqSBtZW1icm8/IDxiciAvPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FTlRSQVIgSsOBPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyQXJlYVwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgwqkgMjAyMSBhbHVyYS5jb20uYnIgLSA8YSBocmVmPVwiL1wiPlNvYnJlIG8gT3JrdXQuYnI8L2E+IC17XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPkNlbnRybyBkZSBzZWd1cmFuw6dhPC9hPiAtIDxhIGhyZWY9XCIvXCI+UHJpdmFjaWRhZGU8L2E+IC17XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlRlcm1vczwvYT4gLSA8YSBocmVmPVwiL1wiPkNvbnRhdG88L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9