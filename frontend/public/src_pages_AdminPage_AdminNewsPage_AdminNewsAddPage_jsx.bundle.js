"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_pages_AdminPage_AdminNewsPage_AdminNewsAddPage_jsx"],{

/***/ "./src/components/NewsComponent/NewsAddComponent.jsx":
/*!***********************************************************!*\
  !*** ./src/components/NewsComponent/NewsAddComponent.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Save */ "./node_modules/@mui/icons-material/Save.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Nav/NavActionsCreator */ "./src/store/Nav/NavActionsCreator.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var NewsAddComponent = function NewsAddComponent() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      image = _useState4[0],
      setImage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      abstract = _useState6[0],
      setAbstract = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      externalurl = _useState8[0],
      setExternalurl = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      error = _useState10[0],
      setError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      errorMsg = _useState12[0],
      setErrorMsg = _useState12[1];

  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      formValid = _useState14[0],
      setFormValid = _useState14[1];

  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var formData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = {
                title: title,
                image: image,
                abstract: abstract,
                externalurl: externalurl
              };
              setError(false);
              dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_2__.showHideLoading)(true));
              _context.next = 5;
              return _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/news", formData).then(function (response) {
                //const data = response.data.data
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_2__.setSnackBar)({
                  msg: 'Noticia Creado.',
                  show: true
                }));
                history.push('/admin/news');
              }).catch(function (error) {
                if (error.response.data.data.messages) {
                  setErrorMsg(error.response.data.data.messages);
                } else {
                  setErrorMsg(error.message);
                }

                setError(true);
              }).finally(function () {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_2__.showHideLoading)(false));
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (title && image && abstract && externalurl) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [title, image, abstract, externalurl]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    color: "initial"
  }, "Nueva Noticia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: title ? false : true,
    label: "Titulo",
    value: title !== null ? title : '',
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: image ? false : true,
    label: "URL Imagen",
    value: image !== null ? image : '',
    onChange: function onChange(e) {
      return setImage(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      padding: '15px',
      color: abstract === '' || abstract === null ? '#ff0000' : ''
    }
  }, "Resumen de la noticia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      border: abstract === '' || abstract === null ? '1px solid #ff0000' : ''
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_4__.Editor, {
    apiKey: process.env.REACT_APP_TYNY_API_KEY,
    value: abstract,
    init: {
      height: 500,
      menubar: false,
      branding: false,
      language: 'es'
    },
    onEditorChange: function onEditorChange(content, editor) {
      return setAbstract(content);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: externalurl ? false : true,
    label: "URL de la Fuente",
    value: externalurl !== null ? externalurl : '',
    onChange: function onChange(e) {
      return setExternalurl(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    severity: "error",
    style: {
      textAlign: "left",
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Error"), errorMsg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleSubmit,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_11__["default"], null),
    variant: "contained",
    className: "mt-20 ".concat(formValid ? 'buttonPrimary' : ''),
    disabled: !formValid
  }, "Guardar")));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsAddComponent);

/***/ }),

/***/ "./src/pages/AdminPage/AdminNewsPage/AdminNewsAddPage.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/AdminPage/AdminNewsPage/AdminNewsAddPage.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_NewsComponent_NewsAddComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/NewsComponent/NewsAddComponent */ "./src/components/NewsComponent/NewsAddComponent.jsx");
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIos */ "./node_modules/@mui/icons-material/ArrowBackIos.js");







var AdminNewsAddPage = function AdminNewsAddPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h3",
    color: "initial"
  }, "Noticias"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_system__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/admin/news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    size: "small",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, "Noticias")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NewsComponent_NewsAddComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminNewsAddPage);

/***/ }),

/***/ "./src/services/axios.js":
/*!*******************************!*\
  !*** ./src/services/axios.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: process.env.REACT_APP_API_HOST
});
instance.interceptors.request.use(function (config) {
  if (window.localStorage.getItem('_token')) {
    config.headers.Authorization = 'bearer ' + window.localStorage.getItem('_token');
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

}]);
//# sourceMappingURL=src_pages_AdminPage_AdminNewsPage_AdminNewsAddPage_jsx.bundle.js.map