self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/AlurakutCommons.js":
/*!************************************!*\
  !*** ./src/lib/AlurakutCommons.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlurakutMenu": function() { return /* binding */ AlurakutMenu; },
/* harmony export */   "AlurakutProfileSidebarMenuDefault": function() { return /* binding */ AlurakutProfileSidebarMenuDefault; },
/* harmony export */   "OrkutNostalgicIconSet": function() { return /* binding */ OrkutNostalgicIconSet; },
/* harmony export */   "AlurakutStyles": function() { return /* binding */ AlurakutStyles; }
/* harmony export */ });
/* harmony import */ var C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\beatriz.araujo\\Desktop\\FRONT\\alura\\alurakut-main\\src\\lib\\AlurakutCommons.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var BASE_URL = "http://alurakut.vercel.app/";
var v = "1";

function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      props = (0,C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, ["href", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
} // ================================================================================================================
// Menu
// ================================================================================================================


_c = Link;
function AlurakutMenu(_ref2) {
  _s();

  var _this = this;

  var githubUser = _ref2.githubUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState2 = (0,C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      isMenuOpen = _React$useState2[0],
      setMenuState = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenu.Wrapper, {
    isMenuOpen: isMenuOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenu.Logo, {
        src: "".concat(BASE_URL, "/logo.svg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        style: {
          flex: 1
        },
        children: [{
          name: "Inicio",
          slug: "/"
        }, {
          name: "Amigos",
          slug: "/amigos"
        }, {
          name: "Comunidades",
          slug: "/comunidades"
        }].map(function (menuItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {
            href: "".concat(menuItem.slug.toLocaleLowerCase()),
            children: menuItem.name
          }, "key__".concat(menuItem.name.toLocaleLowerCase()), false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "/logout",
          children: "Sair"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            placeholder: "Pesquisar no Orkut"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return setMenuState(!isMenuOpen);
        },
        children: [isMenuOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/menu-open.svg?v=").concat(v)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 26
        }, this), !isMenuOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/menu-closed.svg?v=").concat(v)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenuProfileSidebar, {
      githubUser: githubUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(AlurakutMenu, "RQAUz5wknpCAe4Aflmp8yMbnXOU=");

_c2 = AlurakutMenu;
AlurakutMenu.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.header.withConfig({
  displayName: "AlurakutCommons__Wrapper",
  componentId: "sc-1vsk6a-0"
})(["width:100%;background-color:#308bc5;.alurakutMenuProfileSidebar{background:white;position:fixed;z-index:100;padding:46px;bottom:0;left:0;right:0;top:48px;transition:0.3s;pointer-events:", ";opacity:", ";transform:", ";@media (min-width:860px){display:none;}> div{max-width:400px;margin:auto;}a{font-size:18px;}.boxLink{font-size:18px;color:#2e7bb4;-webkit-text-decoration:none;text-decoration:none;font-weight:800;}hr{margin-top:12px;margin-bottom:8px;border-color:transparent;border-bottom-color:#ecf2fa;}}.container{background-color:#308bc5;padding:7px 16px;max-width:1110px;margin:auto;display:flex;justify-content:space-between;position:relative;z-index:101;@media (min-width:860px){justify-content:flex-start;}button{border:0;background:transparent;align-self:center;display:inline-block;@media (min-width:860px){display:none;}}nav{display:none;@media (min-width:860px){display:flex;}a{font-size:12px;color:white;padding:10px 16px;position:relative;text-decoration:none;&:after{content:\" \";background-color:#5292c1;display:block;position:absolute;width:1px;height:12px;margin:auto;left:0;top:0;bottom:0;}}}input{color:#ffffff;background:#f9f9f947;padding:10px 42px;border:0;background-image:url(", ");background-position:15px center;background-repeat:no-repeat;border-radius:1000px;font-size:12px;::placeholder{color:#ffffff;opacity:1;}}}"], function (_ref3) {
  var isMenuOpen = _ref3.isMenuOpen;
  return isMenuOpen ? "all" : "none";
}, function (_ref4) {
  var isMenuOpen = _ref4.isMenuOpen;
  return isMenuOpen ? "1" : "0";
}, function (_ref5) {
  var isMenuOpen = _ref5.isMenuOpen;
  return isMenuOpen ? "translateY(0)" : "translateY(calc(-100% - 48px))";
}, "".concat(BASE_URL, "/icons/search.svg"));
AlurakutMenu.Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.img.withConfig({
  displayName: "AlurakutCommons__Logo",
  componentId: "sc-1vsk6a-1"
})(["background-color:#ffffff;padding:9px 14px;border-radius:1000px;height:34px;"]);

function AlurakutMenuProfileSidebar(_ref6) {
  var githubUser = _ref6.githubUser;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "alurakutMenuProfileSidebar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "https://github.com/".concat(githubUser, ".png"),
        style: {
          borderRadius: "8px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          className: "boxLink",
          href: "/user/".concat(githubUser),
          children: ["@", githubUser]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }, this);
} // ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================


_c3 = AlurakutMenuProfileSidebar;
function AlurakutProfileSidebarMenuDefault() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutProfileSidebarMenuDefault.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/user.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), "Perfil"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/book.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), "Recados"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/camera.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), "Fotos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/sun.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this), "Depoimentos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/plus.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this), "GitHub Trends"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/logout",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "//icons/logout.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this), "Sair"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 5
  }, this);
}
_c4 = AlurakutProfileSidebarMenuDefault;
AlurakutProfileSidebarMenuDefault.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "AlurakutCommons__Wrapper",
  componentId: "sc-1vsk6a-2"
})(["a{font-size:12px;color:#2e7bb4;margin-bottom:16px;display:flex;align-items:center;justify-content:flex-start;text-decoration:none;img{width:16px;height:16px;margin-right:5px;}}"]); // ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================

function OrkutNostalgicIconSet(props) {
  var _this2 = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(OrkutNostalgicIconSet.List, {
    children: [[{
      name: "Recados",
      slug: "recados",
      icon: "book"
    }, {
      name: "Fotos",
      slug: "fotos",
      icon: "camera"
    }, {
      name: "Videos",
      slug: "videos",
      icon: "video-camera"
    }, {
      name: "Fãs",
      slug: "fas",
      icon: "star"
    }, {
      name: "Mensagens",
      slug: "mensagens",
      icon: "email"
    }].map(function (_ref7) {
      var name = _ref7.name,
          slug = _ref7.slug,
          icon = _ref7.icon;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          style: {
            gridArea: "title"
          },
          className: "OrkutNostalgicIconSet__title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "OrkutNostalgicIconSet__number",
          style: {
            gridArea: "number"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            className: "OrkutNostalgicIconSet__iconSample",
            src: "https://alurakut.vercel.app/icons/".concat(icon, ".svg")
          }, "orkut__icon_set__".concat(slug, "_img"), false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this2), props[slug] ? props[slug] : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 11
        }, _this2)]
      }, "orkut__icon_set__".concat(slug), true, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 9
      }, _this2);
    }), [{
      name: "Confiável",
      slug: "confiavel",
      icon: "smile"
    }, {
      name: "Legal",
      slug: "legal",
      icon: "cool"
    }, {
      name: "Sexy",
      slug: "sexy",
      icon: "heart"
    }].map(function (_ref8) {
      var _jsxDEV2;

      var name = _ref8.name,
          slug = _ref8.slug,
          icon = _ref8.icon;
      var total = props[slug] ? props[slug] : 2;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "OrkutNostalgicIconSet__title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 13
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", (_jsxDEV2 = {
          className: "OrkutNostalgicIconSet__iconComplex"
        }, (0,C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "OrkutNostalgicIconSet__number"), (0,C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "style", {
          gridArea: "number"
        }), (0,C_Users_beatriz_araujo_Desktop_FRONT_alura_alurakut_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "children", [0, 1, 2].map(function (_, index) {
          var isHeartActive = index <= total - 1;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "https://alurakut.vercel.app/icons/".concat(icon, ".svg"),
            style: {
              marginRight: "2px",
              opacity: isHeartActive ? 1 : "0.5"
            }
          }, "orkut__icon_set__".concat(slug, "_img_").concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 19
          }, _this2);
        })), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 13
        }, _this2)]
      }, "orkut__icon_set__".concat(slug), true, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 11
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 257,
    columnNumber: 5
  }, this);
}
_c5 = OrkutNostalgicIconSet;
OrkutNostalgicIconSet.List = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.ul.withConfig({
  displayName: "AlurakutCommons__List",
  componentId: "sc-1vsk6a-3"
})(["margin-top:32px;list-style:none;display:flex;justify-content:space-between;flex-wrap:wrap;li{font-size:12px;color:#5a5a5a;display:grid;grid-template-areas:\"title title\" \"number number\";&:not(:last-child){margin-right:5px;}.OrkutNostalgicIconSet__title{display:block;font-style:italic;}.OrkutNostalgicIconSet__number{min-width:15px;display:flex;align-items:center;justify-content:flex-start;.OrkutNostalgicIconSet__iconSample{margin-right:7px;}}}"]); // ================================================================================================================
// Login Page
// ================================================================================================================

var AlurakutLoginScreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)([":root{--backgroundPrimary:#d9e6f6;--backgroundSecondary:#f1f9fe;--backgroundTertiary:#ffffff;--backgroundQuarternary:#bbcde8;--colorPrimary:#2e7bb4;--colorSecondary:#388bb0;--colorTertiary:#2f4a71;--colorQuarternary:#d81d99;--textPrimaryColor:#333333;--textSecondaryColor:#ffffff;--textTertiaryColor:#5a5a5a;--textQuarternaryColor:#c5c6ca;--commonRadius:8px;}.loginScreen{padding:16px;max-width:1110px;display:grid;--gap:12px;--gutter:16px;grid-gap:var(--gap);grid-template-areas:\"logoArea\" \"formArea\" \"footerArea\";@media (min-width:860px){grid-template-columns:2fr 1fr;grid-template-areas:\"logoArea formArea\" \"logoArea formArea\" \"footerArea footerArea\";}.logoArea{grid-area:logoArea;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);padding:var(--gutter);text-align:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center;min-height:263px;@media (min-width:860px){min-height:368px;}p{font-size:12px;line-height:1.2;&:not(:last-child){margin-bottom:12px;}strong{color:var(--colorQuarternary);}}img{max-height:45px;margin-bottom:36px;}}.formArea{grid-area:formArea;display:flex;flex-wrap:wrap;flex-direction:column;.box{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:var(--gutter);padding-left:50px;padding-right:50px;background-color:var(--backgroundSecondary);border-radius:var(--commonRadius);flex:1;&:not(:last-child){margin-bottom:var(--gap);}&:first-child{min-height:224px;@media (min-width:860px){min-height:282px;}}p{font-size:14px;}a{text-decoration:none;color:var(--colorPrimary);}input{width:100%;display:block;border:1px solid var(--textQuarternaryColor);padding:12px;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);margin-top:24px;margin-bottom:16px;}button{width:100%;display:block;border:0;padding:12px;border-radius:var(--commonRadius);background-color:var(--colorPrimary);color:var(--textSecondaryColor);}}}.footerArea{grid-area:footerArea;background-color:var(--backgroundQuarternary);border-radius:var(--commonRadius);padding:8px;p{font-size:12px;text-align:center;a{text-decoration:none;color:var(--colorPrimary);}}}}"]); // ================================================================================================================
// Reset Styles
// ================================================================================================================

var AlurakutStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["*::-webkit-scrollbar{width:8px;}*::-webkit-scrollbar-track{background:#f1f1f1;}*::-webkit-scrollbar-thumb{background:#888;border-radius:10px;}*::-webkit-scrollbar-thumb:hover{background:#555;}a,button{cursor:pointer;transition:0.3s;outline:0;&:hover,&:focus{opacity:0.8;}&:disabled{cursor:not-allowed;opacity:0.5;}}input{transition:0.3s;outline:0;&:disabled{cursor:not-allowed;opacity:0.5;}&:hover,&:focus{box-shadow:0px 0px 5px #33333357;}}", ""], AlurakutLoginScreen);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Link");
$RefreshReg$(_c2, "AlurakutMenu");
$RefreshReg$(_c3, "AlurakutMenuProfileSidebar");
$RefreshReg$(_c4, "AlurakutProfileSidebarMenuDefault");
$RefreshReg$(_c5, "OrkutNostalgicIconSet");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJ2IiwiTGluayIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQWx1cmFrdXRNZW51IiwiZ2l0aHViVXNlciIsIlJlYWN0IiwiaXNNZW51T3BlbiIsInNldE1lbnVTdGF0ZSIsImZsZXgiLCJuYW1lIiwic2x1ZyIsIm1hcCIsIm1lbnVJdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJXcmFwcGVyIiwic3R5bGVkIiwiTG9nbyIsIkFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIiwiYm9yZGVyUmFkaXVzIiwiQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IiwiT3JrdXROb3N0YWxnaWNJY29uU2V0IiwiaWNvbiIsImdyaWRBcmVhIiwidG90YWwiLCJfIiwiaW5kZXgiLCJpc0hlYXJ0QWN0aXZlIiwibWFyZ2luUmlnaHQiLCJvcGFjaXR5IiwiTGlzdCIsIkFsdXJha3V0TG9naW5TY3JlZW4iLCJjc3MiLCJBbHVyYWt1dFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDZCQUFqQjtBQUNBLElBQU1DLENBQUMsR0FBRyxHQUFWOztBQUVBLFNBQVNDLElBQVQsT0FBNEM7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVRDLEtBQVM7O0FBQzFDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFRixJQUFoQjtBQUFzQixZQUFRLE1BQTlCO0FBQUEsMkJBQ0UsbUdBQU9FLEtBQVA7QUFBQSxnQkFBZUQ7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUVEO0FBQ0E7QUFDQTs7O0tBVlNGLEk7QUFXRixTQUFTSSxZQUFULFFBQXNDO0FBQUE7O0FBQUE7O0FBQUEsTUFBZEMsVUFBYyxTQUFkQSxVQUFjOztBQUFBLHdCQUNSQyxxREFBQSxDQUFlLEtBQWYsQ0FEUTtBQUFBO0FBQUEsTUFDcENDLFVBRG9DO0FBQUEsTUFDeEJDLFlBRHdCOztBQUUzQyxzQkFDRSw4REFBQyxZQUFELENBQWMsT0FBZDtBQUFzQixjQUFVLEVBQUVELFVBQWxDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFLDhEQUFDLFlBQUQsQ0FBYyxJQUFkO0FBQW1CLFdBQUcsWUFBS1QsUUFBTDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFLLGFBQUssRUFBRTtBQUFFVyxjQUFJLEVBQUU7QUFBUixTQUFaO0FBQUEsa0JBQ0csQ0FDQztBQUFFQyxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsY0FBSSxFQUFFO0FBQXhCLFNBREQsRUFFQztBQUFFRCxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsY0FBSSxFQUFFO0FBQXhCLFNBRkQsRUFHQztBQUFFRCxjQUFJLEVBQUUsYUFBUjtBQUF1QkMsY0FBSSxFQUFFO0FBQTdCLFNBSEQsRUFJQ0MsR0FKRCxDQUlLLFVBQUNDLFFBQUQ7QUFBQSw4QkFDSiw4REFBQyxJQUFEO0FBRUUsZ0JBQUksWUFBS0EsUUFBUSxDQUFDRixJQUFULENBQWNHLGlCQUFkLEVBQUwsQ0FGTjtBQUFBLHNCQUlHRCxRQUFRLENBQUNIO0FBSlosNEJBQ2VHLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjSSxpQkFBZCxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREk7QUFBQSxTQUpMO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBa0JFO0FBQUEsZ0NBQ0U7QUFBRyxjQUFJLFdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLGlDQUNFO0FBQU8sdUJBQVcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUF5QkU7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sWUFBWSxDQUFDLENBQUNELFVBQUYsQ0FBbEI7QUFBQSxTQUFqQjtBQUFBLG1CQUNHQSxVQUFVLGlCQUFJO0FBQUssYUFBRyxZQUFLVCxRQUFMLG9DQUF1Q0MsQ0FBdkM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURqQixFQUVHLENBQUNRLFVBQUQsaUJBQ0M7QUFBSyxhQUFHLFlBQUtULFFBQUwsc0NBQXlDQyxDQUF6QztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBaUNFLDhEQUFDLDBCQUFEO0FBQTRCLGdCQUFVLEVBQUVNO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBdkNlRCxZOztNQUFBQSxZO0FBd0NoQkEsWUFBWSxDQUFDVyxPQUFiLEdBQXVCQyx3RUFBdkI7QUFBQTtBQUFBO0FBQUEsMDBDQWNzQjtBQUFBLE1BQUdULFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCQSxVQUFVLEdBQUcsS0FBSCxHQUFXLE1BQTFDO0FBQUEsQ0FkdEIsRUFlZTtBQUFBLE1BQUdBLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCQSxVQUFVLEdBQUcsR0FBSCxHQUFTLEdBQXhDO0FBQUEsQ0FmZixFQWdCaUI7QUFBQSxNQUFHQSxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUNYQSxVQUFVLEdBQUcsZUFBSCxHQUFxQixnQ0FEcEI7QUFBQSxDQWhCakIsWUFpR2lDVCxRQWpHakM7QUE2R0FNLFlBQVksQ0FBQ2EsSUFBYixHQUFvQkQscUVBQXBCO0FBQUE7QUFBQTtBQUFBOztBQU9BLFNBQVNFLDBCQUFULFFBQW9EO0FBQUEsTUFBZGIsVUFBYyxTQUFkQSxVQUFjO0FBQ2xELHNCQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUNFLFdBQUcsK0JBQXdCQSxVQUF4QixTQURMO0FBRUUsYUFBSyxFQUFFO0FBQUVjLHNCQUFZLEVBQUU7QUFBaEI7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxTQUFiO0FBQXVCLGNBQUksa0JBQVdkLFVBQVgsQ0FBM0I7QUFBQSwwQkFDSUEsVUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFhRSw4REFBQyxpQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJELEMsQ0FFRDtBQUNBO0FBQ0E7OztNQXhCU2EsMEI7QUF5QkYsU0FBU0UsaUNBQVQsR0FBNkM7QUFDbEQsc0JBQ0UsOERBQUMsaUNBQUQsQ0FBbUMsT0FBbkM7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsWUFBS3RCLFFBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLGdDQUNFO0FBQUssYUFBRyxZQUFLQSxRQUFMO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsWUFBS0EsUUFBTDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFhRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLFlBQUtBLFFBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsZUFvQkU7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLFlBQUtBLFFBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxZQUFJLEVBQUMsU0FBUjtBQUFBLGdDQUNFO0FBQUssYUFBRyxZQUFLQSxRQUFMO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7TUFsQ2VzQixpQztBQW1DaEJBLGlDQUFpQyxDQUFDTCxPQUFsQyxHQUE0Q0MscUVBQTVDO0FBQUE7QUFBQTtBQUFBLHlMLENBaUJBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTSyxxQkFBVCxDQUErQmxCLEtBQS9CLEVBQXNDO0FBQUE7O0FBQzNDLHNCQUNFLDhEQUFDLHFCQUFELENBQXVCLElBQXZCO0FBQUEsZUFDRyxDQUNDO0FBQUVPLFVBQUksRUFBRSxTQUFSO0FBQW1CQyxVQUFJLEVBQUUsU0FBekI7QUFBb0NXLFVBQUksRUFBRTtBQUExQyxLQURELEVBRUM7QUFBRVosVUFBSSxFQUFFLE9BQVI7QUFBaUJDLFVBQUksRUFBRSxPQUF2QjtBQUFnQ1csVUFBSSxFQUFFO0FBQXRDLEtBRkQsRUFHQztBQUFFWixVQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBSSxFQUFFLFFBQXhCO0FBQWtDVyxVQUFJLEVBQUU7QUFBeEMsS0FIRCxFQUlDO0FBQUVaLFVBQUksRUFBRSxLQUFSO0FBQWVDLFVBQUksRUFBRSxLQUFyQjtBQUE0QlcsVUFBSSxFQUFFO0FBQWxDLEtBSkQsRUFLQztBQUFFWixVQUFJLEVBQUUsV0FBUjtBQUFxQkMsVUFBSSxFQUFFLFdBQTNCO0FBQXdDVyxVQUFJLEVBQUU7QUFBOUMsS0FMRCxFQU1DVixHQU5ELENBTUs7QUFBQSxVQUFHRixJQUFILFNBQUdBLElBQUg7QUFBQSxVQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxVQUFlVyxJQUFmLFNBQWVBLElBQWY7QUFBQSwwQkFDSjtBQUFBLGdDQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQUVDLG9CQUFRLEVBQUU7QUFBWixXQURUO0FBRUUsbUJBQVMsRUFBQyw4QkFGWjtBQUFBLG9CQUlHYjtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLG1CQUFTLEVBQUMsK0JBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRWEsb0JBQVEsRUFBRTtBQUFaLFdBRlQ7QUFBQSxrQ0FJRTtBQUVFLHFCQUFTLEVBQUMsbUNBRlo7QUFHRSxlQUFHLDhDQUF1Q0QsSUFBdkM7QUFITCx3Q0FDMkJYLElBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsRUFTR1IsS0FBSyxDQUFDUSxJQUFELENBQUwsR0FBY1IsS0FBSyxDQUFDUSxJQUFELENBQW5CLEdBQTRCLENBVC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBLG9DQUE2QkEsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESTtBQUFBLEtBTkwsQ0FESCxFQTRCRyxDQUNDO0FBQUVELFVBQUksRUFBRSxXQUFSO0FBQXFCQyxVQUFJLEVBQUUsV0FBM0I7QUFBd0NXLFVBQUksRUFBRTtBQUE5QyxLQURELEVBRUM7QUFBRVosVUFBSSxFQUFFLE9BQVI7QUFBaUJDLFVBQUksRUFBRSxPQUF2QjtBQUFnQ1csVUFBSSxFQUFFO0FBQXRDLEtBRkQsRUFHQztBQUFFWixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFLE1BQXRCO0FBQThCVyxVQUFJLEVBQUU7QUFBcEMsS0FIRCxFQUlDVixHQUpELENBSUssaUJBQTBCO0FBQUE7O0FBQUEsVUFBdkJGLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLFVBQWpCQyxJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxVQUFYVyxJQUFXLFNBQVhBLElBQVc7QUFDOUIsVUFBTUUsS0FBSyxHQUFHckIsS0FBSyxDQUFDUSxJQUFELENBQUwsR0FBY1IsS0FBSyxDQUFDUSxJQUFELENBQW5CLEdBQTRCLENBQTFDO0FBQ0EsMEJBQ0U7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUMsOEJBQWhCO0FBQUEsb0JBQWdERDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFDRSxtQkFBUyxFQUFDO0FBRFosMExBRVksK0JBRlosOEtBR1M7QUFBRWEsa0JBQVEsRUFBRTtBQUFaLFNBSFQsaUxBS0csQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVVgsR0FBVixDQUFjLFVBQUNhLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQzNCLGNBQU1DLGFBQWEsR0FBR0QsS0FBSyxJQUFJRixLQUFLLEdBQUcsQ0FBdkM7QUFDQSw4QkFDRTtBQUVFLGVBQUcsOENBQXVDRixJQUF2QyxTQUZMO0FBR0UsaUJBQUssRUFBRTtBQUNMTSx5QkFBVyxFQUFFLEtBRFI7QUFFTEMscUJBQU8sRUFBRUYsYUFBYSxHQUFHLENBQUgsR0FBTztBQUZ4QjtBQUhULHdDQUMyQmhCLElBRDNCLGtCQUN1Q2UsS0FEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERjtBQVVELFNBWkEsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUEsb0NBQTZCZixJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBd0JELEtBOUJBLENBNUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEREO01BL0RlVSxxQjtBQWdFaEJBLHFCQUFxQixDQUFDUyxJQUF0QixHQUE2QmQsb0VBQTdCO0FBQUE7QUFBQTtBQUFBLDBjLENBaUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNZSxtQkFBbUIsR0FBR0Msc0RBQUgsaXFFQUF6QixDLENBd0lBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxjQUFjLEdBQUdELHNEQUFILG9jQXlDdkJELG1CQXpDdUIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMDA0MDAwMGZhOGFiOTk4ZGMzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9cIjtcbmNvbnN0IHYgPSBcIjFcIjtcblxuZnVuY3Rpb24gTGluayh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgPGEgey4uLnByb3BzfT57Y2hpbGRyZW59PC9hPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBBbHVyYWt1dE1lbnUoeyBnaXRodWJVc2VyIH0pIHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldE1lbnVTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPEFsdXJha3V0TWVudS5XcmFwcGVyIGlzTWVudU9wZW49e2lzTWVudU9wZW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEFsdXJha3V0TWVudS5Mb2dvIHNyYz17YCR7QkFTRV9VUkx9L2xvZ28uc3ZnYH0gLz5cblxuICAgICAgICA8bmF2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsgbmFtZTogXCJJbmljaW9cIiwgc2x1ZzogXCIvXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJBbWlnb3NcIiwgc2x1ZzogXCIvYW1pZ29zXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJDb211bmlkYWRlc1wiLCBzbHVnOiBcIi9jb211bmlkYWRlc1wiIH0sXG4gICAgICAgICAgXS5tYXAoKG1lbnVJdGVtKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2BrZXlfXyR7bWVudUl0ZW0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake21lbnVJdGVtLnNsdWcudG9Mb2NhbGVMb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8YSBocmVmPXtgL2xvZ291dGB9PlNhaXI8L2E+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhciBubyBPcmt1dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXRlKCFpc01lbnVPcGVuKX0+XG4gICAgICAgICAge2lzTWVudU9wZW4gJiYgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9tZW51LW9wZW4uc3ZnP3Y9JHt2fWB9IC8+fVxuICAgICAgICAgIHshaXNNZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL21lbnUtY2xvc2VkLnN2Zz92PSR7dn1gfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8QWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIgZ2l0aHViVXNlcj17Z2l0aHViVXNlcn0gLz5cbiAgICA8L0FsdXJha3V0TWVudS5XcmFwcGVyPlxuICApO1xufVxuQWx1cmFrdXRNZW51LldyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGJjNTtcblxuICAuYWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcGFkZGluZzogNDZweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDQ4cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBwb2ludGVyLWV2ZW50czogJHsoeyBpc01lbnVPcGVuIH0pID0+IChpc01lbnVPcGVuID8gXCJhbGxcIiA6IFwibm9uZVwiKX07XG4gICAgb3BhY2l0eTogJHsoeyBpc01lbnVPcGVuIH0pID0+IChpc01lbnVPcGVuID8gXCIxXCIgOiBcIjBcIil9O1xuICAgIHRyYW5zZm9ybTogJHsoeyBpc01lbnVPcGVuIH0pID0+XG4gICAgICBpc01lbnVPcGVuID8gXCJ0cmFuc2xhdGVZKDApXCIgOiBcInRyYW5zbGF0ZVkoY2FsYygtMTAwJSAtIDQ4cHgpKVwifTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgID4gZGl2IHtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuYm94TGluayB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzJlN2JiNDtcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG5cbiAgICBociB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2YyZmE7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGJjNTtcbiAgICBwYWRkaW5nOiA3cHggMTZweDtcbiAgICBtYXgtd2lkdGg6IDExMTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NjBweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5MmMxO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTQ3O1xuICAgICAgcGFkZGluZzogMTBweCA0MnB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YCR7QkFTRV9VUkx9L2ljb25zL3NlYXJjaC5zdmdgfSk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICA6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuQWx1cmFrdXRNZW51LkxvZ28gPSBzdHlsZWQuaW1nYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICBoZWlnaHQ6IDM0cHg7XG5gO1xuXG5mdW5jdGlvbiBBbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhcih7IGdpdGh1YlVzZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtnaXRodWJVc2VyfS5wbmdgfVxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI4cHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm94TGlua1wiIGhyZWY9e2AvdXNlci8ke2dpdGh1YlVzZXJ9YH0+XG4gICAgICAgICAgICBAe2dpdGh1YlVzZXJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQoKSB7XG4gIHJldHVybiAoXG4gICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL3VzZXIuc3ZnYH0gLz5cbiAgICAgICAgICBQZXJmaWxcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvYm9vay5zdmdgfSAvPlxuICAgICAgICAgIFJlY2Fkb3NcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvY2FtZXJhLnN2Z2B9IC8+XG4gICAgICAgICAgRm90b3NcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvc3VuLnN2Z2B9IC8+XG4gICAgICAgICAgRGVwb2ltZW50b3NcbiAgICAgICAgPC9hPlxuICAgICAgPC9uYXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9wbHVzLnN2Z2B9IC8+XG4gICAgICAgICAgR2l0SHViIFRyZW5kc1xuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS8vaWNvbnMvbG9nb3V0LnN2Z2B9IC8+XG4gICAgICAgICAgU2FpclxuICAgICAgICA8L2E+XG4gICAgICA8L25hdj5cbiAgICA8L0FsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyPlxuICApO1xufVxuQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyZTdiYjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9ya3V0Tm9zdGFsZ2ljSWNvblNldFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIE9ya3V0Tm9zdGFsZ2ljSWNvblNldChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxPcmt1dE5vc3RhbGdpY0ljb25TZXQuTGlzdD5cbiAgICAgIHtbXG4gICAgICAgIHsgbmFtZTogXCJSZWNhZG9zXCIsIHNsdWc6IFwicmVjYWRvc1wiLCBpY29uOiBcImJvb2tcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRm90b3NcIiwgc2x1ZzogXCJmb3Rvc1wiLCBpY29uOiBcImNhbWVyYVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJWaWRlb3NcIiwgc2x1ZzogXCJ2aWRlb3NcIiwgaWNvbjogXCJ2aWRlby1jYW1lcmFcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRsOjc1wiLCBzbHVnOiBcImZhc1wiLCBpY29uOiBcInN0YXJcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTWVuc2FnZW5zXCIsIHNsdWc6IFwibWVuc2FnZW5zXCIsIGljb246IFwiZW1haWxcIiB9LFxuICAgICAgXS5tYXAoKHsgbmFtZSwgc2x1ZywgaWNvbiB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31gfT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3sgZ3JpZEFyZWE6IFwidGl0bGVcIiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX251bWJlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBncmlkQXJlYTogXCJudW1iZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9X2ltZ2B9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9faWNvblNhbXBsZVwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9pY29ucy8ke2ljb259LnN2Z2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3Byb3BzW3NsdWddID8gcHJvcHNbc2x1Z10gOiAwfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgICAge1tcbiAgICAgICAgeyBuYW1lOiBcIkNvbmZpw6F2ZWxcIiwgc2x1ZzogXCJjb25maWF2ZWxcIiwgaWNvbjogXCJzbWlsZVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMZWdhbFwiLCBzbHVnOiBcImxlZ2FsXCIsIGljb246IFwiY29vbFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTZXh5XCIsIHNsdWc6IFwic2V4eVwiLCBpY29uOiBcImhlYXJ0XCIgfSxcbiAgICAgIF0ubWFwKCh7IG5hbWUsIHNsdWcsIGljb24gfSkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbCA9IHByb3BzW3NsdWddID8gcHJvcHNbc2x1Z10gOiAyO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fdGl0bGVcIj57bmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25Db21wbGV4XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19udW1iZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBncmlkQXJlYTogXCJudW1iZXJcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7WzAsIDEsIDJdLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0hlYXJ0QWN0aXZlID0gaW5kZXggPD0gdG90YWwgLSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfV9pbWdfJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvaWNvbnMvJHtpY29ufS5zdmdgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzSGVhcnRBY3RpdmUgPyAxIDogXCIwLjVcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvT3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3Q+XG4gICk7XG59XG5Pcmt1dE5vc3RhbGdpY0ljb25TZXQuTGlzdCA9IHN0eWxlZC51bGBcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1YTVhNWE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJ0aXRsZSB0aXRsZVwiXG4gICAgICBcIm51bWJlciBudW1iZXJcIjtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgLk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX251bWJlciB7XG4gICAgICBtaW4td2lkdGg6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25TYW1wbGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvZ2luIFBhZ2Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IEFsdXJha3V0TG9naW5TY3JlZW4gPSBjc3NgXG4gIDpyb290IHtcbiAgICAtLWJhY2tncm91bmRQcmltYXJ5OiAjZDllNmY2O1xuICAgIC0tYmFja2dyb3VuZFNlY29uZGFyeTogI2YxZjlmZTtcbiAgICAtLWJhY2tncm91bmRUZXJ0aWFyeTogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmRRdWFydGVybmFyeTogI2JiY2RlODtcbiAgICAtLWNvbG9yUHJpbWFyeTogIzJlN2JiNDtcbiAgICAtLWNvbG9yU2Vjb25kYXJ5OiAjMzg4YmIwO1xuICAgIC0tY29sb3JUZXJ0aWFyeTogIzJmNGE3MTtcbiAgICAtLWNvbG9yUXVhcnRlcm5hcnk6ICNkODFkOTk7XG4gICAgLS10ZXh0UHJpbWFyeUNvbG9yOiAjMzMzMzMzO1xuICAgIC0tdGV4dFNlY29uZGFyeUNvbG9yOiAjZmZmZmZmO1xuICAgIC0tdGV4dFRlcnRpYXJ5Q29sb3I6ICM1YTVhNWE7XG4gICAgLS10ZXh0UXVhcnRlcm5hcnlDb2xvcjogI2M1YzZjYTtcbiAgICAtLWNvbW1vblJhZGl1czogOHB4O1xuICB9XG5cbiAgLmxvZ2luU2NyZWVuIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1heC13aWR0aDogMTExMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLS1nYXA6IDEycHg7XG4gICAgLS1ndXR0ZXI6IDE2cHg7XG4gICAgZ3JpZC1nYXA6IHZhcigtLWdhcCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwibG9nb0FyZWFcIlxuICAgICAgXCJmb3JtQXJlYVwiXG4gICAgICBcImZvb3RlckFyZWFcIjtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwibG9nb0FyZWEgZm9ybUFyZWFcIlxuICAgICAgICBcImxvZ29BcmVhIGZvcm1BcmVhXCJcbiAgICAgICAgXCJmb290ZXJBcmVhIGZvb3RlckFyZWFcIjtcbiAgICB9XG4gICAgLmxvZ29BcmVhIHtcbiAgICAgIGdyaWQtYXJlYTogbG9nb0FyZWE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kVGVydGlhcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDI2M3B4O1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2OHB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yUXVhcnRlcm5hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZm9ybUFyZWEge1xuICAgICAgZ3JpZC1hcmVhOiBmb3JtQXJlYTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLmJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZ2FwKTtcbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyMjRweDtcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0UXVhcnRlcm5hcnlDb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kVGVydGlhcnkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0U2Vjb25kYXJ5Q29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5mb290ZXJBcmVhIHtcbiAgICAgIGdyaWQtYXJlYTogZm9vdGVyQXJlYTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRRdWFydGVybmFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJlc2V0IFN0eWxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IEFsdXJha3V0U3R5bGVzID0gY3NzYFxuICAqOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbiAgfVxuICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzg4ODtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB9XG4gIGEsXG4gIGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgb3V0bGluZTogMDtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG4gIGlucHV0IHtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIG91dGxpbmU6IDA7XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzMzMzMzMzU3O1xuICAgIH1cbiAgfVxuXG4gICR7QWx1cmFrdXRMb2dpblNjcmVlbn1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9