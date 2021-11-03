"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_pages_AccountPage_AccountPage_jsx"],{

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

/***/ "./src/pages/AccountPage/AccountPage.jsx":
/*!***********************************************!*\
  !*** ./src/pages/AccountPage/AccountPage.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase */ "./src/services/firebase.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _helpers_ValidateRut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/ValidateRut.js */ "./src/helpers/ValidateRut.js");
/* harmony import */ var _helpers_ValidateEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/ValidateEmail */ "./src/helpers/ValidateEmail.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/Save */ "./node_modules/@mui/icons-material/Save.js");
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/AddAPhoto */ "./node_modules/@mui/icons-material/AddAPhoto.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_Auth_AuthActionsCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Auth/AuthActionsCreator */ "./src/store/Auth/AuthActionsCreator.js");
/* harmony import */ var _components_InputTextRut_InputTextRutComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/InputTextRut/InputTextRutComponent */ "./src/components/InputTextRut/InputTextRutComponent.jsx");
/* harmony import */ var _store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/Nav/NavActionsCreator */ "./src/store/Nav/NavActionsCreator.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var AccountPage = function AccountPage() {
  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(auth.firstname),
      _useState2 = _slicedToArray(_useState, 2),
      firstname = _useState2[0],
      setFirstname = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(auth.lastname),
      _useState4 = _slicedToArray(_useState3, 2),
      lastname = _useState4[0],
      setLastname = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("".concat(auth.rut, "-").concat(auth.dv)),
      _useState6 = _slicedToArray(_useState5, 2),
      rut = _useState6[0],
      setRut = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rut),
      _useState8 = _slicedToArray(_useState7, 2),
      inputRut = _useState8[0],
      setInputRut = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      checkRut = _useState10[0],
      setCheckRut = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(auth.email),
      _useState12 = _slicedToArray(_useState11, 2),
      email = _useState12[0],
      setEmail = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(email),
      _useState14 = _slicedToArray(_useState13, 2),
      inputEmail = _useState14[0],
      setInputEmail = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      checkEmail = _useState16[0],
      setCheckEmail = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      error = _useState18[0],
      setError = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState20 = _slicedToArray(_useState19, 2),
      errorMsg = _useState20[0],
      setErrorMsg = _useState20[1];

  var validarRut = function validarRut(_rut) {
    setInputRut(_rut);

    if ((0,_helpers_ValidateRut_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_rut)) {
      setCheckRut(false);
      setRut(_rut);
    } else {
      setRut('');
      setCheckRut(true);
      setInputRut(_rut);
    }
  };

  var validarEmail = function validarEmail(email) {
    setInputEmail(email);

    if ((0,_helpers_ValidateEmail__WEBPACK_IMPORTED_MODULE_5__["default"])(email)) {
      setCheckEmail(false);
      setEmail(email);
    } else {
      setEmail('');
      setCheckEmail(true);
      setInputEmail(email);
    }
  };

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState22 = _slicedToArray(_useState21, 2),
      progress = _useState22[0],
      setProgress = _useState22[1];

  var handleImageChange = function handleImageChange(e) {
    setProgress(0);

    if (e.target.files[0]) {
      var image = e.target.files[0];
      var extension = /[.]/.exec(image.name) ? /[^.]+$/.exec(image.name) : 'undefined';
      var filename = "imagenes/foto/".concat(auth.uid, ".").concat(extension);
      var storageRef = _services_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref(filename).put(image);
      storageRef.on('state_changed', function (snapshot) {
        setProgress(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, function (err) {
        console.log(err);
      }, function () {
        dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_9__.showHideLoading)(true));
        storageRef.snapshot.ref.getDownloadURL().then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return uploadImage(url);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).finally(function () {
          dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_9__.showHideLoading)(false));
        });
      });
    }
  };

  var uploadImage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(foto) {
      var url;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "/users/".concat(auth.uid, "/account");
              _context2.next = 3;
              return _services_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, {
                foto: foto
              }).then(function (response) {
                var accessToken = response.data.data.access_token;
                var jwt = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(accessToken);
                var currentTime = Math.floor(Date.now() / 1000);

                if (currentTime < jwt.exp) {
                  window.localStorage.setItem('_token', accessToken);
                  dispatch((0,_store_Auth_AuthActionsCreator__WEBPACK_IMPORTED_MODULE_7__.signIn)(accessToken));
                }
              }).catch(function (error) {
                console.log(error);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function uploadImage(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      formValid = _useState24[0],
      setFormValid = _useState24[1];

  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _rut$split, _rut$split2, ruts, dv, formData;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _rut$split = rut.split(/-/), _rut$split2 = _slicedToArray(_rut$split, 2), ruts = _rut$split2[0], dv = _rut$split2[1];
              formData = {
                firstname: firstname,
                lastname: lastname,
                rut: ruts,
                dv: dv,
                email: email
              }; //socket.emit('msg', { msg: "hola desde el cliente"})

              dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_9__.showHideLoading)(true));
              _context3.next = 5;
              return _services_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put("/users/".concat(auth.uid, "/account"), formData).then(function (response) {
                var data = response.data.data;

                if (data.logout === 1) {
                  window.localStorage.removeItem('_token');
                  window.location = '/';
                } else {
                  var accessToken = data.access_token;
                  window.localStorage.setItem('_token', accessToken);
                  dispatch((0,_store_Auth_AuthActionsCreator__WEBPACK_IMPORTED_MODULE_7__.signIn)(accessToken));
                }
              }).catch(function (error) {
                console.log(error);

                if (error.response.data.data.messages) {
                  setErrorMsg(error.response.data.data.messages);
                } else {
                  setErrorMsg(error.message);
                }

                setError(true);
                console.log(error);
              }).finally(function () {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_9__.showHideLoading)(false));
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Mi Cuenta";
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (firstname && lastname && rut && email) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [firstname, lastname, rut, email]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h3",
    color: "initial"
  }, "Mi Cuenta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 4,
    className: "mt-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    alt: auth.name,
    src: auth.foto,
    sx: {
      width: 200,
      height: 200,
      margin: '0 auto'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    id: "newImage",
    onChange: handleImageChange,
    accept: "image/*"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: function onClick() {
      return document.querySelector('#newImage').click();
    },
    style: {
      cursor: "pointer",
      marginTop: "10px",
      marginBottom: "10px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "determinate",
    value: progress,
    color: "error"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    error: firstname ? false : true,
    label: "Nombre",
    id: "firstname",
    value: firstname,
    onChange: function onChange(e) {
      return setFirstname(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    error: lastname ? false : true,
    label: "Apellido",
    id: "lastname",
    value: lastname,
    onChange: function onChange(e) {
      return setLastname(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    error: checkRut,
    label: "R.U.T.",
    id: "rut",
    value: inputRut,
    onChange: function onChange(e) {
      return validarRut(e.target.value.toUpperCase());
    },
    fullWidth: true,
    InputProps: {
      inputComponent: _components_InputTextRut_InputTextRutComponent__WEBPACK_IMPORTED_MODULE_8__["default"]
    },
    margin: "normal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    error: checkEmail,
    label: "Correo Eletr\xF3nico",
    id: "email",
    value: inputEmail,
    onChange: function onChange(e) {
      return validarEmail(e.target.value);
    },
    fullWidth: true,
    margin: "normal"
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    severity: "error",
    style: {
      textAlign: "left",
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, "Error"), errorMsg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: handleSubmit,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_19__["default"], null),
    variant: "contained",
    className: "mt-20 ".concat(formValid ? 'buttonPrimary' : ''),
    disabled: !formValid
  }, "Guardar")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccountPage);

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

/***/ }),

/***/ "./src/services/firebase.js":
/*!**********************************!*\
  !*** ./src/services/firebase.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/storage */ "./node_modules/firebase/compat/storage/dist/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyDDIMJkHO5dGnTjx-wRikj0_-qu7_hFQt4",
  authDomain: "escalab-node-react.firebaseapp.com",
  projectId: "escalab-node-react",
  storageBucket: "escalab-node-react.appspot.com",
  messagingSenderId: "135581204752",
  appId: "1:135581204752:web:6f2563f85053d0365be595"
};
var app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

}]);
//# sourceMappingURL=src_pages_AccountPage_AccountPage_jsx.bundle.js.map