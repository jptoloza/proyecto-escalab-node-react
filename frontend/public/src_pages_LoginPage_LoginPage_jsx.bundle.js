"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_pages_LoginPage_LoginPage_jsx"],{

/***/ "./node_modules/@mui/material/Link/Link.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Link/Link.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementTypeAcceptingRef.js");
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/style.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@mui/material/utils/useIsFocusVisible.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _linkClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linkClasses */ "./node_modules/@mui/material/Link/linkClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"];














const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const useUtilityClasses = ownerState => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ['root', `underline${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(underline)}`, component === 'button' && 'button', focusVisible && 'focusVisible']
  };
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_7__["default"])(slots, _linkClasses__WEBPACK_IMPORTED_MODULE_8__.getLinkUtilityClass, classes);
};

const LinkRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_9__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
  name: 'MuiLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(ownerState.underline)}`], ownerState.component === 'button' && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  const color = (0,_mui_system__WEBPACK_IMPORTED_MODULE_11__.getPath)(theme, `palette.${transformDeprecatedColors(ownerState.color)}`) || ownerState.color;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.underline === 'none' && {
    textDecoration: 'none'
  }, ownerState.underline === 'hover' && {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }, ownerState.underline === 'always' && {
    textDecoration: 'underline',
    textDecorationColor: color !== 'inherit' ? (0,_mui_system__WEBPACK_IMPORTED_MODULE_12__.alpha)(color, 0.4) : undefined,
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  }, ownerState.component === 'button' && {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    [`&.${_linkClasses__WEBPACK_IMPORTED_MODULE_8__["default"].focusVisible}`]: {
      outline: 'auto'
    }
  });
});
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Link(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_13__["default"])({
    props: inProps,
    name: 'MuiLink'
  });

  const {
    className,
    color = 'primary',
    component = 'a',
    onBlur,
    onFocus,
    TypographyClasses,
    underline = 'always',
    variant = 'inherit'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const [focusVisible, setFocusVisible] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const handlerRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_15__["default"])(ref, focusVisibleRef);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = event => {
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LinkRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    classes: TypographyClasses,
    color: color,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState: ownerState,
    variant: variant
  }, other));
});
 true ? Link.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the link.
   * @default 'primary'
   */
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _mui_utils__WEBPACK_IMPORTED_MODULE_16__["default"],

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]),

  /**
   * `classes` prop applied to the [`Typography`](/api/typography/) element.
   */
  TypographyClasses: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['always', 'hover', 'none']),

  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./node_modules/@mui/material/Link/linkClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Link/linkClasses.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLinkUtilityClass": function() { return /* binding */ getLinkUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/core */ "./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js");

function getLinkUtilityClass(slot) {
  return (0,_mui_core__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiLink', slot);
}
const linkClasses = (0,_mui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
/* harmony default export */ __webpack_exports__["default"] = (linkClasses);

/***/ }),

/***/ "./src/assets/images/Google_icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/Google_icon.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  clipRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "none",
  d: "M0 0h128v128H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0127.585 64",
  fill: "#FBBC05",
  fillRule: "evenodd"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0135.95-25.937",
  fill: "#EA4335",
  fillRule: "evenodd"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M65.457 101.818a37.77 37.77 0 01-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597",
  fill: "#34A853",
  fillRule: "evenodd"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049",
  fill: "#4285F4",
  fillRule: "evenodd"
}));

function SvgGoogleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 128 128",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGoogleIcon);

/***/ }),

/***/ "./src/assets/images/remote.svg":
/*!**************************************!*\
  !*** ./src/assets/images/remote.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M342.362 20.06l3.47-5.362a80.387 80.387 0 00-3.56-8.333l-2.244 1.812 1.777-2.745C340.112 2.1 338.78 0 338.78 0s-6.958 10.965-9.283 22.575l4.452 6.88-4.929-3.98a32.522 32.522 0 00-.27 4.078c0 13.75 4.49 24.895 10.03 24.895s10.03-11.146 10.03-24.895a42.818 42.818 0 00-2.295-12.848z",
  fill: "#e6e6e6"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M366.92 31.98l6.245-1.338a80.386 80.386 0 003.375-8.41l-2.868-.304 3.197-.685c1.16-3.554 1.702-5.98 1.702-5.98s-12.673 2.833-22.526 9.398l-1.718 8.014-.67-6.3a32.524 32.524 0 00-3.075 2.692c-9.722 9.723-14.428 20.78-10.511 24.696s14.973-.789 24.696-10.511a42.818 42.818 0 007.462-10.707z",
  fill: "#e6e6e6"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M369.2 85.184c-14.48.926-30.26-.054-47.045 0V46.752c14.791 2.303 30.565 2.066 47.046 0zM472.802 115.151l2.262-3.496a52.424 52.424 0 00-2.321-5.434l-1.463 1.181 1.158-1.79c-1.104-2.173-1.972-3.542-1.972-3.542a50.241 50.241 0 00-6.054 14.721l2.903 4.488-3.214-2.597a21.21 21.21 0 00-.176 2.66c0 8.967 2.928 16.236 6.54 16.236s6.542-7.27 6.542-16.236a27.923 27.923 0 00-1.497-8.378z",
  fill: "#e6e6e6"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M488.817 122.925l4.072-.873a52.42 52.42 0 002.201-5.483l-1.87-.2 2.085-.446c.756-2.318 1.11-3.9 1.11-3.9a50.241 50.241 0 00-14.69 6.13l-1.12 5.225-.437-4.108a21.208 21.208 0 00-2.006 1.755c-6.34 6.34-9.41 13.551-6.855 16.106s9.765-.515 16.106-6.855a27.923 27.923 0 004.866-6.983z",
  fill: "#e6e6e6"
});

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M490.304 157.622c-9.443.604-19.733-.036-30.68 0v-25.063a110.584 110.584 0 0030.68 0zM484.473 231.898c-8.34.533-17.425-.031-27.091 0v-22.13a97.647 97.647 0 0027.09 0zM167.508 82.481h364.547v10.183H167.508z",
  fill: "#e6e6e6"
});

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M167.508 154.78h364.547v10.183H167.508zM167.508 227.078h364.547v10.183H167.508z"
});

var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 470.958,
  cy: 197.548,
  r: 20.366,
  fill: "#e6e6e6"
});

var _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 470.958,
  cy: 197.548,
  r: 16.293,
  fill: "#fff"
});

var _ref9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 470.958,
  cy: 197.548,
  r: 4.073,
  fill: "#e6e6e6"
});

var _ref10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M485.214 196.53v2.036h-16.293v-2.037z"
});

var _ref11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M471.976 199.584h-2.037V183.29h2.037zM339.725 105.104H353.2v53.339h-13.475z"
});

var _ref12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M339.725 113.526H353.2v6.176h-13.475zM339.725 140.476H353.2v6.176h-13.475z"
});

var _ref13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M318.951 105.104h13.475v53.339h-13.475z"
});

var _ref14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M318.951 113.526h13.475v6.176h-13.475zM318.951 140.476h13.475v6.176h-13.475z"
});

var _ref15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M352.735 110.863l12.076-5.98 23.666 47.802-12.076 5.979z"
});

var _ref16 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M356.472 118.41l12.076-5.978 2.74 5.534-12.076 5.979zM368.429 142.562l12.076-5.978 2.74 5.535-12.076 5.978z"
});

var _ref17 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M219.567 177.403h13.475v53.339h-13.475z"
});

var _ref18 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M219.567 185.825h13.475v6.176h-13.475zM219.567 212.775h13.475v6.176h-13.475z"
});

var _ref19 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M198.793 177.403h13.475v53.339h-13.475z"
});

var _ref20 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M198.793 185.825h13.475v6.176h-13.475zM198.793 212.775h13.475v6.176h-13.475z"
});

var _ref21 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M232.577 183.16l12.076-5.978 23.666 47.801-12.076 5.979z"
});

var _ref22 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M236.313 190.708l12.077-5.978 2.74 5.534-12.076 5.98zM248.271 214.86l12.076-5.979 2.74 5.535-12.075 5.979z"
});

var _ref23 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M345.835 177.403h13.475v53.339h-13.475z"
});

var _ref24 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M345.835 185.825h13.475v6.176h-13.475zM345.835 212.775h13.475v6.176h-13.475z"
});

var _ref25 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M325.061 177.403h13.475v53.339h-13.475z"
});

var _ref26 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M325.061 185.825h13.475v6.176h-13.475zM325.061 212.775h13.475v6.176h-13.475z"
});

var _ref27 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M358.845 183.16l12.076-5.978 23.666 47.801-12.076 5.979z"
});

var _ref28 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M362.581 190.708l12.076-5.979 2.74 5.535-12.075 5.979zM374.538 214.86l12.076-5.978 2.74 5.534-12.075 5.98z"
});

var _ref29 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M449.987 32.646h53.556v53.556h-53.556z"
});

var _ref30 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M460.699 43.357h32.134v32.134h-32.134z"
});

var _ref31 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M470 54.143l6.814 11.801 6.813 11.801h-27.254l6.814-11.801L470 54.143z"
});

var _ref32 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M481.839 56.398l6.814 11.801L495.466 80h-27.254l6.814-11.801 6.813-11.801z"
});

var _ref33 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 486.631,
  cy: 48.994,
  r: 3.946,
  fill: "#e6e6e6"
});

var _ref34 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M179.123 32.646h53.556v53.556h-53.556z"
});

var _ref35 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#ccc",
  d: "M189.834 43.357h32.134v32.134h-32.134z"
});

var _ref36 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M199.136 54.143l6.813 11.801 6.814 11.801h-27.254l6.813-11.801 6.814-11.801z"
});

var _ref37 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M210.975 56.398l6.813 11.801L224.601 80h-27.253l6.813-11.801 6.814-11.801z"
});

var _ref38 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 215.766,
  cy: 48.994,
  r: 3.946,
  fill: "#e6e6e6"
});

var _ref39 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M71.497 397.845l3.47-5.362a80.387 80.387 0 00-3.56-8.333l-2.243 1.812 1.776-2.745c-1.693-3.333-3.025-5.432-3.025-5.432s-6.958 10.965-9.283 22.574l4.452 6.881-4.928-3.98a32.524 32.524 0 00-.27 4.077c0 13.75 4.49 24.896 10.03 24.896s10.03-11.146 10.03-24.896a42.818 42.818 0 00-2.295-12.847z",
  fill: "#6c63ff"
});

var _ref40 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M96.055 409.765l6.245-1.338a80.386 80.386 0 003.375-8.41l-2.868-.304 3.198-.686c1.16-3.553 1.702-5.98 1.702-5.98s-12.674 2.834-22.527 9.399l-1.717 8.014-.67-6.3a32.524 32.524 0 00-3.075 2.692c-9.723 9.722-14.429 20.78-10.512 24.696s14.974-.79 24.696-10.512a42.818 42.818 0 007.462-10.706z",
  fill: "#6c63ff"
});

var _ref41 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M98.336 462.969c-14.48.926-30.26-.054-47.046 0v-38.432c14.792 2.303 30.565 2.066 47.046 0z",
  fill: "#3f3d56"
});

var _ref42 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M500.998 475.031h195.511v253.554H500.998zM92.664 488.269h10.183v240.316H92.664z"
});

var _ref43 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M0 457.72h696.509v20.366H0zM87.573 478.086h20.366v20.366H87.573z"
});

var _ref44 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M614.155 489.796l-1.146 4.583h-28.512l-1.718-4.583h-72.617v46.842h177.182v-46.842h-73.189zM614.155 548.857l-1.146 4.582h-28.512l-1.718-4.582h-72.617v46.841h177.182v-46.841h-73.189zM614.155 607.918l-1.146 4.582h-28.512l-1.718-4.582h-72.617v46.841h177.182v-46.841h-73.189zM614.155 666.979l-1.146 4.582h-28.512l-1.718-4.582h-72.617v46.841h177.182v-46.841h-73.189z"
});

var _ref45 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M377.785 454.665h-60.079l2.036-26.475h56.006l2.037 26.475z"
});

var _ref46 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M314.651 451.611h67.207v6.11h-67.207z"
});

var _ref47 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M462.812 257.627H233.188a6.11 6.11 0 00-6.11 6.11V403.75h241.844V263.737a6.11 6.11 0 00-6.11-6.11z",
  fill: "#3f3d56"
});

var _ref48 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M227.078 403.751v22.912a6.11 6.11 0 006.11 6.11h229.624a6.11 6.11 0 006.11-6.11V403.75z",
  fill: "#e6e6e6"
});

var _ref49 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  d: "M239.298 270.355h217.914V392.55H239.298z"
});

var _ref50 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 348.254,
  cy: 418.007,
  r: 6.11,
  fill: "#3f3d56"
});

var _ref51 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M865.035 727.057c-22.254 1.424-46.502-.082-72.298 0v-59.06c22.73 3.538 46.97 3.175 72.298 0z",
  fill: "#3f3d56"
});

var _ref52 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M831.432 673.3h-6.11l2.037-119.351h2.036l2.037 119.351zM858.926 674.107h-6.11l2.037-119.352h2.036l2.037 119.352zM806.993 674.107h-6.11l2.037-119.352h2.036l2.037 119.352z"
});

var _ref53 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M836.523 477.577l9.863-15.243a228.514 228.514 0 00-10.118-23.686l-6.378 5.15 5.05-7.803c-4.813-9.474-8.6-15.442-8.6-15.442s-19.78 31.17-26.388 64.172l12.656 19.56-14.01-11.316a92.452 92.452 0 00-.77 11.593c0 39.085 12.766 70.77 28.513 70.77s28.512-31.685 28.512-70.77c0-12.117-2.742-24.794-6.523-36.521z",
  fill: "#e6e6e6"
});

var _ref54 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M864.017 479.614l9.863-15.243a228.515 228.515 0 00-10.119-23.687l-6.377 5.151 5.05-7.804c-4.813-9.473-8.6-15.442-8.6-15.442s-19.78 31.17-26.388 64.173l12.656 19.56-14.011-11.317a92.452 92.452 0 00-.769 11.593c0 39.086 12.766 70.771 28.512 70.771s28.512-31.685 28.512-70.77c0-12.118-2.74-24.795-6.522-36.521z",
  fill: "#6c63ff"
});

var _ref55 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M812.085 479.614l9.862-15.243a228.517 228.517 0 00-10.118-23.687l-6.378 5.151 5.05-7.804c-4.813-9.473-8.6-15.442-8.6-15.442s-19.78 31.17-26.388 64.173l12.656 19.56-14.01-11.317a92.452 92.452 0 00-.77 11.593c0 39.086 12.766 70.771 28.513 70.771s28.512-31.685 28.512-70.77c0-12.118-2.742-24.795-6.523-36.521z",
  fill: "#6c63ff"
});

var _ref56 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M309.964 304.848h58.756v3.373h-58.756z"
});

var _ref57 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#6c63ff",
  d: "M309.964 317.151h90.732v3.373h-90.732zM309.964 328.742h73.945v3.373h-73.945z"
});

var _ref58 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M309.964 340.29h43.168v3.373h-43.168zM309.964 351.837h65.151v3.373h-65.151zM283.184 303.649h7.195v7.195h-7.195z"
});

var _ref59 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#6c63ff",
  d: "M283.184 315.24h7.195v7.195h-7.195zM283.184 326.831h7.195v7.195h-7.195z"
});

var _ref60 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M283.184 338.423h7.195v7.195h-7.195zM283.184 350.014h7.195v7.195h-7.195z"
});

var _ref61 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M447.115 298.463h-30.833a107.84 107.84 0 010-36.763h30.833a66.148 66.148 0 000 36.763z",
  fill: "#6c63ff"
});

var _ref62 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M222.764 372.144l-12.685-3.092a32.657 32.657 0 01-32.05-39.124 42.685 42.685 0 0142.63-42.738 42.685 42.685 0 0142.739 42.631c7.192 25.028-15.334 48.49-40.634 42.323z",
  fill: "#2f2e41"
});

var _ref63 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 236.62,
  cy: 345.243,
  r: 31.364,
  fill: "#ffb8b8"
});

var _ref64 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M216.165 361.607s-9.545 32.727-15 35.455 43.637 6.818 43.637 6.818-1.364-31.364 1.363-34.091-30-8.182-30-8.182z",
  fill: "#ffb8b8"
});

var _ref65 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M265.256 563.426s61.364-5.455 69.546 15-5.455 141.818-5.455 141.818h-25.909v-99.546s-110.472-31.401-110.472-42.31 72.29-14.962 72.29-14.962z",
  fill: "#2f2e41"
});

var _ref66 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M325.256 714.79l13.637 5.454s16.363-1.364 9.545 10.91a27.004 27.004 0 01-19.09 13.635s-25.91 9.546-27.274 0 6.819-28.636 6.819-28.636zM231.165 563.426s61.364-5.455 69.546 15-5.455 141.818-5.455 141.818h-25.909v-99.546s-78.418-18.164-78.418-29.073c0-5.125-5.344-31.17 4.073-36.658 10.628-6.193 36.163 8.459 36.163 8.459z",
  fill: "#2f2e41"
});

var _ref67 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M291.165 714.79l13.637 5.454s16.363-1.364 9.545 10.91a27.004 27.004 0 01-19.09 13.635s-25.91 9.546-27.274 0 6.819-28.636 6.819-28.636z",
  fill: "#2f2e41"
});

var _ref68 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M202.529 392.97l40.98 4.455a30.182 30.182 0 0126.269 23.767l15.933 75.415s5.454 75-5.455 79.091-25.909-16.363-46.364-13.636-47.045 8.864-47.045 8.864-4.223-134.248-4.773-145.228c-1.1-21.951 20.455-32.727 20.455-32.727z",
  fill: "#575a89"
});

var _ref69 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M299.6 567.322l16.824 9.908s30.183-4.331 29.24 6.278-33.888 8.558-33.888 8.558l-20.275-12.493z",
  fill: "#ffb8b8"
});

var _ref70 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 175.743,
  cy: 299.475,
  r: 20.26,
  fill: "#2f2e41"
});

var _ref71 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M194.436 288.584a20.25 20.25 0 00-24.246-19.836 20.25 20.25 0 1112.63 38.164 20.243 20.243 0 0011.616-18.328zM211.817 300.074l27.313-5.03 21.005 13.166a31.863 31.863 0 0114.677 31.095l-21.037-5.332-4.71-11.812-5.611 9.196-29.334 37.75-16.47-10.488-14.683-23.01z",
  fill: "#2f2e41"
});

var _ref72 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M234.309 404.57l13.636-6.818s28.637 4.091 34.091 23.182 30 151.364 30 151.364l-23.182 10.91-32.727-80.455z",
  fill: "#575a89"
});

var _ref73 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  opacity: 0.2,
  d: "M245.917 458.23l13.648 52.975 24.202 59.496-.839 2.06-28.865-60.562-8.146-53.969z"
});

var _ref74 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M144.084 750.379l-4.813-1.658 46.625-138.49 6.74 2.322-48.552 137.826zM322.291 750.379l4.814-1.658-46.626-138.49-6.739 2.322 48.551 137.826zM223.77 778.981l5.091.018 1.582-161.892-7.128-.025.455 161.899z"
});

var _ref75 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M132.3 528.856l13.966 56.445a44.826 44.826 0 0032.642 32.722 238.26 238.26 0 00118.547-.764l20.85-5.5c12.117-3.194 21.227-13.6 22.09-26.1a25.685 25.685 0 00-2.323-12.872q-.123-.26-.246-.515a34.064 34.064 0 00-29.598-19.138l-22.09-.713-80.444-35.64s-27.667-14.053-50.412-15.626c-15.02-1.04-26.599 13.085-22.982 27.701z",
  fill: "#6c63ff"
});

var _ref76 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#e6e6e6",
  d: "M543.257 351.309h79.426v107.939h-79.426z"
});

var _ref77 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  d: "M552.421 363.764h61.097v83.03h-61.097z"
});

var _ref78 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#3f3d56",
  d: "M576.467 385.492h29.602v3.373h-29.602zM559.87 383.625h7.195v7.195h-7.195zM576.467 399.748h29.602v3.373h-29.602zM559.87 397.881h7.195v7.195h-7.195zM576.467 414.004h29.602v3.373h-29.602zM559.87 412.137h7.195v7.195h-7.195z"
});

var _ref79 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: 579.915,
  y: 354.364,
  width: 6.11,
  height: 6.11,
  rx: 3.055,
  fill: "#3f3d56"
});

function SvgRemote(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 882.346,
    height: 778.999
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref39, _ref40, _ref41, _ref42, _ref43, _ref44, _ref45, _ref46, _ref47, _ref48, _ref49, _ref50, _ref51, _ref52, _ref53, _ref54, _ref55, _ref56, _ref57, _ref58, _ref59, _ref60, _ref61, _ref62, _ref63, _ref64, _ref65, _ref66, _ref67, _ref68, _ref69, _ref70, _ref71, _ref72, _ref73, _ref74, _ref75, _ref76, _ref77, _ref78, _ref79);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgRemote);

/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.jsx":
/*!*******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_Google_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/Google_icon.svg */ "./src/assets/images/Google_icon.svg");
/* harmony import */ var _store_Auth_AuthActionsCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/Auth/AuthActionsCreator */ "./src/store/Auth/AuthActionsCreator.js");
/* harmony import */ var _store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Nav/NavActionsCreator */ "./src/store/Nav/NavActionsCreator.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _assets_images_remote_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/remote.svg */ "./src/assets/images/remote.svg");
/* harmony import */ var _LoginPage_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoginPage.scss */ "./src/pages/LoginPage/LoginPage.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var LoginPage = function LoginPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_10__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var responseGoogle = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
      var form;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (res.error) {
                _context.next = 7;
                break;
              }

              form = {
                token: res.tokenId
              };
              dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_7__.showHideLoading)(true));
              _context.next = 5;
              return _services_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/auth', form).then(function (response) {
                return response.data;
              }).then(function (response) {
                var accessToken = response.data.access_token;
                var jwt = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(accessToken);
                var currentTime = Math.floor(Date.now() / 1000);

                if (currentTime < jwt.exp) {
                  window.localStorage.setItem('_token', accessToken);
                  dispatch((0,_store_Auth_AuthActionsCreator__WEBPACK_IMPORTED_MODULE_6__.signIn)(accessToken));
                  history.push('/');
                } else {
                  throw new Error('Token no válido.');
                }
              }).catch(function (e) {
                if (e.response) {
                  setErrorMsg(e.response.data.data.messages);
                } else {
                  if (_typeof(e) == 'object') {
                    setErrorMsg(e.message);
                  } else {
                    setErrorMsg(error);
                  }
                }

                setError(true);
              }).finally(function () {
                dispatch((0,_store_Nav_NavActionsCreator__WEBPACK_IMPORTED_MODULE_7__.showHideLoading)(false));
              });

            case 5:
              _context.next = 8;
              break;

            case 7:
              console.log(res.error);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function responseGoogle(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "login-container",
    container: true,
    spacing: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    xl: 4,
    className: "login-column-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: _assets_images_remote_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "",
    style: {
      maxWidth: "100%"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    xl: 4,
    className: "login-column-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h4",
    color: "initial",
    className: "login-title"
  }, "AlumnApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body1",
    className: "login-body-color"
  }, "Para iniciar sesi\xF3n haga clic en el bot\xF3n \"acceder con mi cuenta Gmail\"."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_4__.GoogleLogin, {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    render: function render(renderProps) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
        onClick: renderProps.onClick,
        disabled: renderProps.disabled,
        className: "login-buttonLogin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
        src: _assets_images_Google_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
        alt: "Logo Mat",
        className: "login-logoGoole"
      }), "Acceder con su Cuenta Gmail");
    },
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin',
    prompt: "consent"
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    severity: "error",
    style: {
      textAlign: "left",
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, "Error"), errorMsg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    severity: "info",
    style: {
      textAlign: "left",
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, "Soporte"), "Para obtener ayuda haga ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    href: "/soporte"
  }, "clic aqu\xED"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    xl: 12,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body1",
    className: "login-body-color"
  }, "2021 \xA9Alumn-app.com"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.scss ***!
  \*************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login-container {\n  min-width: 100%;\n  min-height: 100vh;\n  justify-content: center; }\n\n.login-logoGoole {\n  width: 20px;\n  padding: 5px;\n  border-bottom: 2px solid transparent;\n  display: inline-block;\n  vertical-align: middle; }\n\n.login-buttonLogin {\n  background: transparent;\n  width: 100%;\n  margin-top: 40px;\n  border: 1px solid #233aaa;\n  background-color: #3f51b5;\n  cursor: pointer;\n  color: #fff; }\n\n.login-column-left {\n  margin-top: 100px !important;\n  text-align: right;\n  dispaly: blocK; }\n\n.login-column-right {\n  margin-top: 100px !important;\n  text-align: left;\n  padding: 20px; }\n\n.login-title {\n  margin-bottom: 20px; }\n\n.login-body-color {\n  color: #363635; }\n\n.login-div-support {\n  margin-top: 10px; }\n\n@media (max-width: 900px) {\n  .login-column-left {\n    display: none; } }\n", "",{"version":3,"sources":["webpack://./src/pages/LoginPage/LoginPage.scss"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,iBAAiB;EACjB,uBAAuB,EAAA;;AAGzB;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,qBAAqB;EACrB,sBAAsB,EAAA;;AAGxB;EACE,uBAAuB;EACvB,WAAW;EACX,gBAAe;EACf,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;EACf,WAAW,EAAA;;AAGb;EACE,4BAA4B;EAC5B,iBAAiB;EACjB,cAAa,EAAA;;AAGf;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,aAAY,EAAA;;AAGd;EACE,mBAAmB,EAAA;;AAGrB;EACE,cAAc,EAAA;;AAGhB;EACE,gBAAgB,EAAA;;AAKlB;EACE;IACI,aAAY,EAAA,EACf","sourcesContent":[".login-container {\n  min-width: 100%;\n  min-height: 100vh;\n  justify-content: center;\n}\n\n.login-logoGoole {\n  width: 20px;\n  padding: 5px;\n  border-bottom: 2px solid transparent;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.login-buttonLogin {\n  background: transparent;\n  width: 100%;\n  margin-top:40px;\n  border: 1px solid #233aaa;\n  background-color: #3f51b5;\n  cursor: pointer;\n  color: #fff;\n}\n\n.login-column-left {\n  margin-top: 100px !important;\n  text-align: right;\n  dispaly:blocK;\n}\n\n.login-column-right {\n  margin-top: 100px !important;\n  text-align: left;\n  padding:20px;\n}\n\n.login-title {\n  margin-bottom: 20px;\n}\n\n.login-body-color {\n  color: #363635;\n}\n\n.login-div-support {\n  margin-top: 10px;\n  \n}\n\n\n@media (max-width: 900px) {\n  .login-column-left {\n      display:none;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.scss":
/*!********************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LoginPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_LoginPage_LoginPage_jsx.bundle.js.map