"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_pages_NotificationsPage_NotificationsPage_jsx"],{

/***/ "./src/pages/NotificationsPage/NotificationsPage.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/NotificationsPage/NotificationsPage.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/Nav/NavActionsCreator */ "./src/store/Nav/NavActionsCreator.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_icons_material_ControlPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ControlPoint */ "./node_modules/@mui/icons-material/ControlPoint.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var NotificationsPage = function NotificationsPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ControlPoint__WEBPACK_IMPORTED_MODULE_4__["default"], null)),
      _useState2 = _slicedToArray(_useState, 2),
      btnMore = _useState2[0],
      setBtnMore = _useState2[1];

  var auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth;
  });
  var notifications = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.nav.listnotifications;
  });
  var current = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.nav.listnotificationscurrentpage;
  });
  var next = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.nav.listnotificationsnextpage;
  });
  var tempGetData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var getNotifications = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
      var url;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_1__.showHideLoading)(true));
              url = "/users/".concat(auth.uid, "/notifications").concat(page ? '?page=' + page : '');
              _context.next = 5;
              return _services_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url).then(function (response) {
                var data = response.data.data;
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_1__.setListNotifications)(data));
              }).catch(function (error) {
                console.log('Error ' + error);
              }).finally(function () {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_1__.showHideLoading)(false));
              });

            case 5:
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getNotifications(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  tempGetData.current = getNotifications;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    tempGetData.current(0);
  }, []);

  var moreNotifications = function moreNotifications() {
    setBtnMore( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: "#fff"
      },
      size: 20
    }));
    getNotifications(next);
    setBtnMore( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ControlPoint__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      expanded = _useState4[0],
      setExpanded = _useState4[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  var readNotification = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
      var url;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              url = "/users/".concat(auth.uid, "/notifications/").concat(key);
              _context2.next = 4;
              return _services_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url).then(function (response) {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_1__.changeReadNotification)(key));
              }).catch(function (error) {
                console.log('Error ' + error);
              });

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.log('Error ' + _context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function readNotification(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h3",
    color: "initial"
  }, "Notificaciones"), notifications && notifications.map(function (e) {
    var fecha = new Date(Date.parse(e.createdAt));
    var mes = fecha.getMonth() < 10 ? "0".concat(fecha.getMonth()) : fecha.getMonth();
    var dia = fecha.getDay() < 10 ? "0".concat(fecha.getDay()) : fecha.getDay();
    var back = e.read ? '#f0f0f0' : '#ffffff';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      expanded: expanded === e.id,
      key: e.id,
      style: {
        marginBottom: "10px",
        background: back
      },
      onChange: handleChange(e.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_9__["default"], null),
      "aria-controls": "panel-".concat(e.id, "-content"),
      onClick: function onClick() {
        return readNotification(e.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], null, e.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "".concat(fecha.getFullYear(), "-").concat(mes, "-").concat(dia)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      style: {
        paddingBottom: "50px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: e.notification
      }
    })));
  }), current !== next && next !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: "50px",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    size: "medium",
    onClick: moreNotifications,
    startIcon: btnMore,
    style: {
      color: '#ffffff'
    }
  }, "Notificaciones")) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationsPage);

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
//# sourceMappingURL=src_pages_NotificationsPage_NotificationsPage_jsx.bundle.js.map