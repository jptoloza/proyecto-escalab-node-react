"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_pages_AdminPage_AdminUsersPage_AdminUsersEditPage_jsx"],{

/***/ "./src/components/InputTextRut/InputTextRutComponent.jsx":
/*!***************************************************************!*\
  !*** ./src/components/InputTextRut/InputTextRutComponent.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-imask */ "./node_modules/react-imask/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["onChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var InputTextRut = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function InputTextRut(props, ref) {
  var onChange = props.onChange,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(react_imask__WEBPACK_IMPORTED_MODULE_0__.IMaskInput, _extends({}, other, {
    mask: "00000000-#",
    definitions: {
      '#': /[0-9kK]/
    },
    inputRef: ref,
    onAccept: function onAccept(value) {
      return onChange({
        target: {
          name: props.name,
          value: value
        }
      });
    },
    overwrite: true
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (InputTextRut);

/***/ }),

/***/ "./src/components/UsersComponent/UserEditComponent.jsx":
/*!*************************************************************!*\
  !*** ./src/components/UsersComponent/UserEditComponent.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _helpers_ValidateRut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/ValidateRut */ "./src/helpers/ValidateRut.js");
/* harmony import */ var _helpers_ValidateEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/ValidateEmail */ "./src/helpers/ValidateEmail.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _components_InputTextRut_InputTextRutComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/InputTextRut/InputTextRutComponent */ "./src/components/InputTextRut/InputTextRutComponent.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormHelperText/FormHelperText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/Nav/NavActionsCreator */ "./src/store/Nav/NavActionsCreator.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/Save */ "./node_modules/@mui/icons-material/Save.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var UserEditComponent = function UserEditComponent() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)(),
      id = _useParams.id;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      firstname = _useState2[0],
      setFirstname = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      lastname = _useState4[0],
      setLastname = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      rut = _useState6[0],
      setRut = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      checkRut = _useState8[0],
      setCheckRut = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      email = _useState10[0],
      setEmail = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      checkEmail = _useState12[0],
      setCheckEmail = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      error = _useState14[0],
      setError = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      errorMsg = _useState16[0],
      setErrorMsg = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Seleccione Estado'),
      _useState18 = _slicedToArray(_useState17, 2),
      activeMsg = _useState18[0],
      setActiveMsg = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      active = _useState20[0],
      setActive = _useState20[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();

  var validarRut = function validarRut(_rut) {
    setRut(_rut);

    if ((0,_helpers_ValidateRut__WEBPACK_IMPORTED_MODULE_2__["default"])(_rut)) {
      setCheckRut(false);
    } else {
      setCheckRut(true);
    }
  };

  var validarEmail = function validarEmail(email) {
    setEmail(email);

    if ((0,_helpers_ValidateEmail__WEBPACK_IMPORTED_MODULE_3__["default"])(email)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      formValid = _useState22[0],
      setFormValid = _useState22[1];

  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _rut$split, _rut$split2, ruts, dv, formData;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _rut$split = rut.split(/-/), _rut$split2 = _slicedToArray(_rut$split, 2), ruts = _rut$split2[0], dv = _rut$split2[1];
              formData = {
                firstname: firstname,
                lastname: lastname,
                rut: ruts,
                dv: dv,
                email: email,
                active: active
              };
              setError(false);
              dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__.showHideLoading)(true));
              _context2.next = 6;
              return _services_axios__WEBPACK_IMPORTED_MODULE_4__["default"].put("/users/".concat(id), formData).then(function (response) {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__.setSnackBar)({
                  msg: 'Usuario Actualizado.',
                  show: true
                }));
                history.push('/admin/users');
              }).catch(function (error) {
                if (error.response.data.data.messages) {
                  setErrorMsg(error.response.data.data.messages);
                } else {
                  setErrorMsg(error.message);
                }

                setError(true);
              }).finally(function () {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__.showHideLoading)(false));
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (firstname && lastname && rut && email && active !== null && !checkEmail && !checkRut) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [firstname, lastname, rut, email, active, checkEmail, checkRut]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var getData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__.showHideLoading)(true));
                _context.next = 3;
                return _services_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("/users/".concat(id)).then(function (response) {
                  var data = response.data.data;
                  setFirstname(data.firstname);
                  setLastname(data.lastname);
                  var rut = "".concat(data.rut, "-").concat(data.dv);
                  validarRut(rut);
                  validarEmail(data.email);
                  setActive(data.active);
                  setActiveMsg('');
                }).catch(function (error) {
                  dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__.setSnackBar)({
                    msg: 'Usuario no existe',
                    show: true
                  }));
                  history.push('/admin/users');
                }).finally(function () {
                  dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_6__.showHideLoading)(false));
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }();

    getData();
  }, [dispatch, id, history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    color: "initial"
  }, "Editar Usuario"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    error: firstname ? false : true,
    label: "Nombre",
    id: "firstname",
    value: firstname !== null ? firstname : '',
    onChange: function onChange(e) {
      return setFirstname(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    error: lastname ? false : true,
    label: "Apellido",
    id: "lastname",
    value: lastname !== null ? lastname : '',
    onChange: function onChange(e) {
      return setLastname(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    error: checkRut,
    label: "R.U.T.",
    id: "rut",
    value: rut !== null ? rut : '',
    onChange: function onChange(e) {
      return validarRut(e.target.value.toUpperCase());
    },
    fullWidth: true,
    InputProps: {
      inputComponent: _components_InputTextRut_InputTextRutComponent__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    error: checkEmail,
    label: "Correo Eletr\xF3nico",
    id: "email",
    value: email !== null ? email : '',
    onChange: function onChange(e) {
      return validarEmail(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "fieldset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "legend"
  }, "Usuario Activo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    row: true,
    "aria-label": "active",
    name: "row-radio-buttons-group",
    value: active,
    onChange: function onChange(e) {
      e.preventDefault();
      setActive(e.target.value);
      setActiveMsg('');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "true",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    label: "S\xED"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "false",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    label: "No"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      color: '#ff0000'
    },
    color: "error"
  }, activeMsg))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    severity: "error",
    style: {
      textAlign: "left",
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Error"), errorMsg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onClick: handleSubmit,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_20__["default"], null),
    variant: "contained",
    className: "mt-20 ".concat(formValid ? 'buttonPrimary' : ''),
    disabled: !formValid
  }, "Guardar")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserEditComponent);

/***/ }),

/***/ "./src/helpers/ValidateEmail.js":
/*!**************************************!*\
  !*** ./src/helpers/ValidateEmail.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/* harmony default export */ __webpack_exports__["default"] = (validateEmail);

/***/ }),

/***/ "./src/helpers/ValidateRut.js":
/*!************************************!*\
  !*** ./src/helpers/ValidateRut.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var validateRut = function validateRut(rut) {
  if (rut) {
    rut = rut.replace(/\./g, '');

    if (!/^[0-9]+[-]{1}[0-9kK]{1}$/.test(rut)) {
      return false;
    }

    var tmp = rut.split('-');
    var dv = tmp[1];
    var _rut = tmp[0];

    if (dv === 'k') {
      dv = 'K';
    }

    var M = 0,
        S = 1;

    for (; _rut; _rut = Math.floor(_rut / 10)) {
      S = (S + _rut % 10 * (9 - M++ % 6)) % 11;
    }

    var checkDv = S ? (S - 1).toString() : 'K';
    return dv === checkDv;
  } else {
    return false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (validateRut);

/***/ }),

/***/ "./src/pages/AdminPage/AdminUsersPage/AdminUsersEditPage.jsx":
/*!*******************************************************************!*\
  !*** ./src/pages/AdminPage/AdminUsersPage/AdminUsersEditPage.jsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_UsersComponent_UserEditComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/UsersComponent/UserEditComponent */ "./src/components/UsersComponent/UserEditComponent.jsx");
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIos */ "./node_modules/@mui/icons-material/ArrowBackIos.js");







var AdminUsersEditPage = function AdminUsersEditPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h3",
    color: "initial"
  }, "Usuarios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_system__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/admin/users"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    size: "small",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, "Usuarios")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UsersComponent_UserEditComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminUsersEditPage);

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
//# sourceMappingURL=src_pages_AdminPage_AdminUsersPage_AdminUsersEditPage_jsx.bundle.js.map