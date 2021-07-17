self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJ2IiwiTGluayIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQWx1cmFrdXRNZW51IiwiZ2l0aHViVXNlciIsIlJlYWN0IiwiaXNNZW51T3BlbiIsInNldE1lbnVTdGF0ZSIsImZsZXgiLCJuYW1lIiwic2x1ZyIsIm1hcCIsIm1lbnVJdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJXcmFwcGVyIiwic3R5bGVkIiwiTG9nbyIsIkFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIiwiYm9yZGVyUmFkaXVzIiwiQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IiwiT3JrdXROb3N0YWxnaWNJY29uU2V0IiwiaWNvbiIsImdyaWRBcmVhIiwidG90YWwiLCJfIiwiaW5kZXgiLCJpc0hlYXJ0QWN0aXZlIiwibWFyZ2luUmlnaHQiLCJvcGFjaXR5IiwiTGlzdCIsIkFsdXJha3V0TG9naW5TY3JlZW4iLCJjc3MiLCJBbHVyYWt1dFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDZCQUFqQjtBQUNBLElBQU1DLENBQUMsR0FBRyxHQUFWOztBQUVBLFNBQVNDLElBQVQsT0FBNEM7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVRDLEtBQVM7O0FBQzFDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFRixJQUFoQjtBQUFzQixZQUFRLE1BQTlCO0FBQUEsMkJBQ0UsbUdBQU9FLEtBQVA7QUFBQSxnQkFBZUQ7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUVEO0FB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O01BL0RlVSxxQjtBQWdFaEJBLHFCQUFxQixDQUFDUyxJQUF0QixHQUE2QmQsb0VBQTdCO0FBQUE7QUFBQTtBQUFBLDBjLENBaUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNZSxtQkFBbUIsR0FBR0Msc0RBQUgsaXFFQUF6QixDLENBd0lBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxjQUFjLEdBQUdELHNEQUFILG9jQXlDdkJELG1CQXpDdUIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTAwNDAwMDBmYThhYjk5OGRjM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2FsdXJha3V0LnZlcmNlbC5hcHAvXCI7XG5jb25zdCB2ID0gXCIxXCI7XG5cbmZ1bmN0aW9uIExpbmsoeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cbiAgICAgIDxhIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvYT5cbiAgICA8L05leHRMaW5rPlxuICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gQWx1cmFrdXRNZW51KHsgZ2l0aHViVXNlciB9KSB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRNZW51U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxBbHVyYWt1dE1lbnUuV3JhcHBlciBpc01lbnVPcGVuPXtpc01lbnVPcGVufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxBbHVyYWt1dE1lbnUuTG9nbyBzcmM9e2Ake0JBU0VfVVJMfS9sb2dvLnN2Z2B9IC8+XG5cbiAgICAgICAgPG5hdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgIHtbXG4gICAgICAgICAgICB7IG5hbWU6IFwiSW5pY2lvXCIsIHNsdWc6IFwiL1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQW1pZ29zXCIsIHNsdWc6IFwiL2FtaWdvc1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ29tdW5pZGFkZXNcIiwgc2x1ZzogXCIvY29tdW5pZGFkZXNcIiB9LFxuICAgICAgICAgIF0ubWFwKChtZW51SXRlbSkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtga2V5X18ke21lbnVJdGVtLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgICBocmVmPXtgJHttZW51SXRlbS5zbHVnLnRvTG9jYWxlTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lbnVJdGVtLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgaHJlZj17YC9sb2dvdXRgfT5TYWlyPC9hPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXIgbm8gT3JrdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0ZSghaXNNZW51T3Blbil9PlxuICAgICAgICAgIHtpc01lbnVPcGVuICYmIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvbWVudS1vcGVuLnN2Zz92PSR7dn1gfSAvPn1cbiAgICAgICAgICB7IWlzTWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9tZW51LWNsb3NlZC5zdmc/dj0ke3Z9YH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIGdpdGh1YlVzZXI9e2dpdGh1YlVzZXJ9IC8+XG4gICAgPC9BbHVyYWt1dE1lbnUuV3JhcHBlcj5cbiAgKTtcbn1cbkFsdXJha3V0TWVudS5XcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhiYzU7XG5cbiAgLmFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBhZGRpbmc6IDQ2cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA0OHB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgcG9pbnRlci1ldmVudHM6ICR7KHsgaXNNZW51T3BlbiB9KSA9PiAoaXNNZW51T3BlbiA/IFwiYWxsXCIgOiBcIm5vbmVcIil9O1xuICAgIG9wYWNpdHk6ICR7KHsgaXNNZW51T3BlbiB9KSA9PiAoaXNNZW51T3BlbiA/IFwiMVwiIDogXCIwXCIpfTtcbiAgICB0cmFuc2Zvcm06ICR7KHsgaXNNZW51T3BlbiB9KSA9PlxuICAgICAgaXNNZW51T3BlbiA/IFwidHJhbnNsYXRlWSgwKVwiIDogXCJ0cmFuc2xhdGVZKGNhbGMoLTEwMCUgLSA0OHB4KSlcIn07XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICA+IGRpdiB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmJveExpbmsge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICMyZTdiYjQ7XG4gICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuXG4gICAgaHIge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNmMmZhO1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDhiYzU7XG4gICAgcGFkZGluZzogN3B4IDE2cHg7XG4gICAgbWF4LXdpZHRoOiAxMTEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTJjMTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk0NztcbiAgICAgIHBhZGRpbmc6IDEwcHggNDJweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Ake0JBU0VfVVJMfS9pY29ucy9zZWFyY2guc3ZnYH0pO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbkFsdXJha3V0TWVudS5Mb2dvID0gc3R5bGVkLmltZ2BcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuYDtcblxuZnVuY3Rpb24gQWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIoeyBnaXRodWJVc2VyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Z2l0aHViVXNlcn0ucG5nYH1cbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiOHB4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmPXtgL3VzZXIvJHtnaXRodWJVc2VyfWB9PlxuICAgICAgICAgICAgQHtnaXRodWJVc2VyfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0KCkge1xuICByZXR1cm4gKFxuICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQuV3JhcHBlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy91c2VyLnN2Z2B9IC8+XG4gICAgICAgICAgUGVyZmlsXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL2Jvb2suc3ZnYH0gLz5cbiAgICAgICAgICBSZWNhZG9zXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL2NhbWVyYS5zdmdgfSAvPlxuICAgICAgICAgIEZvdG9zXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL3N1bi5zdmdgfSAvPlxuICAgICAgICAgIERlcG9pbWVudG9zXG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmF2PlxuICAgICAgPGhyIC8+XG4gICAgICA8bmF2PlxuICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvcGx1cy5zdmdgfSAvPlxuICAgICAgICAgIEdpdEh1YiBUcmVuZHNcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL2xvZ291dFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vL2ljb25zL2xvZ291dC5zdmdgfSAvPlxuICAgICAgICAgIFNhaXJcbiAgICAgICAgPC9hPlxuICAgICAgPC9uYXY+XG4gICAgPC9BbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQuV3JhcHBlcj5cbiAgKTtcbn1cbkFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMmU3YmI0O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPcmt1dE5vc3RhbGdpY0ljb25TZXRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBPcmt1dE5vc3RhbGdpY0ljb25TZXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8T3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3Q+XG4gICAgICB7W1xuICAgICAgICB7IG5hbWU6IFwiUmVjYWRvc1wiLCBzbHVnOiBcInJlY2Fkb3NcIiwgaWNvbjogXCJib29rXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkZvdG9zXCIsIHNsdWc6IFwiZm90b3NcIiwgaWNvbjogXCJjYW1lcmFcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVmlkZW9zXCIsIHNsdWc6IFwidmlkZW9zXCIsIGljb246IFwidmlkZW8tY2FtZXJhXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkbDo3NcIiwgc2x1ZzogXCJmYXNcIiwgaWNvbjogXCJzdGFyXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1lbnNhZ2Vuc1wiLCBzbHVnOiBcIm1lbnNhZ2Vuc1wiLCBpY29uOiBcImVtYWlsXCIgfSxcbiAgICAgIF0ubWFwKCh7IG5hbWUsIHNsdWcsIGljb24gfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9YH0+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRBcmVhOiBcInRpdGxlXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fdGl0bGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19udW1iZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZ3JpZEFyZWE6IFwibnVtYmVyXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfV9pbWdgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25TYW1wbGVcIlxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvaWNvbnMvJHtpY29ufS5zdmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtwcm9wc1tzbHVnXSA/IHByb3BzW3NsdWddIDogMH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgIHtbXG4gICAgICAgIHsgbmFtZTogXCJDb25macOhdmVsXCIsIHNsdWc6IFwiY29uZmlhdmVsXCIsIGljb246IFwic21pbGVcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTGVnYWxcIiwgc2x1ZzogXCJsZWdhbFwiLCBpY29uOiBcImNvb2xcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU2V4eVwiLCBzbHVnOiBcInNleHlcIiwgaWNvbjogXCJoZWFydFwiIH0sXG4gICAgICBdLm1hcCgoeyBuYW1lLCBzbHVnLCBpY29uIH0pID0+IHtcbiAgICAgICAgY29uc3QgdG90YWwgPSBwcm9wc1tzbHVnXSA/IHByb3BzW3NsdWddIDogMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9YH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX3RpdGxlXCI+e25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19pY29uQ29tcGxleFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fbnVtYmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZ3JpZEFyZWE6IFwibnVtYmVyXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1swLCAxLCAyXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNIZWFydEFjdGl2ZSA9IGluZGV4IDw9IHRvdGFsIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31faW1nXyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwL2ljb25zLyR7aWNvbn0uc3ZnYH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc0hlYXJ0QWN0aXZlID8gMSA6IFwiMC41XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L09ya3V0Tm9zdGFsZ2ljSWNvblNldC5MaXN0PlxuICApO1xufVxuT3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwidGl0bGUgdGl0bGVcIlxuICAgICAgXCJudW1iZXIgbnVtYmVyXCI7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX3RpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgICAuT3JrdXROb3N0YWxnaWNJY29uU2V0X19udW1iZXIge1xuICAgICAgbWluLXdpZHRoOiAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAuT3JrdXROb3N0YWxnaWNJY29uU2V0X19pY29uU2FtcGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2dpbiBQYWdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBBbHVyYWt1dExvZ2luU2NyZWVuID0gY3NzYFxuICA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kUHJpbWFyeTogI2Q5ZTZmNjtcbiAgICAtLWJhY2tncm91bmRTZWNvbmRhcnk6ICNmMWY5ZmU7XG4gICAgLS1iYWNrZ3JvdW5kVGVydGlhcnk6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kUXVhcnRlcm5hcnk6ICNiYmNkZTg7XG4gICAgLS1jb2xvclByaW1hcnk6ICMyZTdiYjQ7XG4gICAgLS1jb2xvclNlY29uZGFyeTogIzM4OGJiMDtcbiAgICAtLWNvbG9yVGVydGlhcnk6ICMyZjRhNzE7XG4gICAgLS1jb2xvclF1YXJ0ZXJuYXJ5OiAjZDgxZDk5O1xuICAgIC0tdGV4dFByaW1hcnlDb2xvcjogIzMzMzMzMztcbiAgICAtLXRleHRTZWNvbmRhcnlDb2xvcjogI2ZmZmZmZjtcbiAgICAtLXRleHRUZXJ0aWFyeUNvbG9yOiAjNWE1YTVhO1xuICAgIC0tdGV4dFF1YXJ0ZXJuYXJ5Q29sb3I6ICNjNWM2Y2E7XG4gICAgLS1jb21tb25SYWRpdXM6IDhweDtcbiAgfVxuXG4gIC5sb2dpblNjcmVlbiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXgtd2lkdGg6IDExMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC0tZ2FwOiAxMnB4O1xuICAgIC0tZ3V0dGVyOiAxNnB4O1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1nYXApO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcImxvZ29BcmVhXCJcbiAgICAgIFwiZm9ybUFyZWFcIlxuICAgICAgXCJmb290ZXJBcmVhXCI7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImxvZ29BcmVhIGZvcm1BcmVhXCJcbiAgICAgICAgXCJsb2dvQXJlYSBmb3JtQXJlYVwiXG4gICAgICAgIFwiZm9vdGVyQXJlYSBmb290ZXJBcmVhXCI7XG4gICAgfVxuICAgIC5sb2dvQXJlYSB7XG4gICAgICBncmlkLWFyZWE6IGxvZ29BcmVhO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAyNjNweDtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NjBweCkge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNjhweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclF1YXJ0ZXJuYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmZvcm1BcmVhIHtcbiAgICAgIGdyaWQtYXJlYTogZm9ybUFyZWE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC5ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRTZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWdhcCk7XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWluLWhlaWdodDogMjI0cHg7XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyODJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dFF1YXJ0ZXJuYXJ5Q29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFRlcnRpYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dFNlY29uZGFyeUNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZm9vdGVyQXJlYSB7XG4gICAgICBncmlkLWFyZWE6IGZvb3RlckFyZWE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kUXVhcnRlcm5hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXNldCBTdHlsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBBbHVyYWt1dFN0eWxlcyA9IGNzc2BcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM4ODg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgfVxuICBhLFxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIG91dGxpbmU6IDA7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuICBpbnB1dCB7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBvdXRsaW5lOiAwO1xuICAgICY6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMzMzMzMzM1NztcbiAgICB9XG4gIH1cblxuICAke0FsdXJha3V0TG9naW5TY3JlZW59XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==