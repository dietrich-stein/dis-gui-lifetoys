'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorWidget;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext");
var _row = _interopRequireDefault(require("./row"));
var _label = _interopRequireDefault(require("./label"));
var _control = _interopRequireDefault(require("./control"));
var _colorRange = _interopRequireDefault(require("./colorRange"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
  static getDerivedStateFromProps(props, state) {
    const nextState = {};
    let hasChange = false;
    if (props.red !== state.red) {
      nextState.red = state.red;
      hasChange = true;
    }
    if (props.green !== state.green) {
      nextState.green = state.green;
      hasChange = true;
    }
    if (props.blue !== state.blue) {
      nextState.blue = state.blue;
      hasChange = true;
    }
    if (props.expanded !== state.expanded) {
      nextState.expanded = state.expanded;
      hasChange = true;
    }
    if (hasChange) {
      return nextState;
    }
    return null;
  }
*/

function ColorWidget(_ref) {
  var red = _ref.red,
    green = _ref.green,
    blue = _ref.blue,
    expanded = _ref.expanded,
    label = _ref.label,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(expanded),
    _useState2 = _slicedToArray(_useState, 2),
    expandedState = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0, _react.useState)(red),
    _useState4 = _slicedToArray(_useState3, 2),
    redState = _useState4[0],
    setRed = _useState4[1];
  var _useState5 = (0, _react.useState)(green),
    _useState6 = _slicedToArray(_useState5, 2),
    greenState = _useState6[0],
    setGreen = _useState6[1];
  var _useState7 = (0, _react.useState)(blue),
    _useState8 = _slicedToArray(_useState7, 2),
    blueState = _useState8[0],
    setBlue = _useState8[1];
  var style = (0, _react.useContext)(_styleContext.StyleContext);

  // Ensures ColorWidget.handleChange() gets mutated values
  (0, _react.useEffect)(function () {
    //console.log('ColorWidget, useEffect, redState:', redState, 'greenState:', greenState, 'blueState:', blueState);
    handleChange();
  }, [redState, greenState, blueState]);
  var handleColorClick = function handleColorClick() {
    setExpanded(!expandedState);
  };
  var handleChangeRed = function handleChangeRed(value) {
    //console.log('R ColorWidget.handleChangeRed, value:', value);
    setRed(value);
    handleChange();
  };
  var handleChangeGreen = function handleChangeGreen(value) {
    //console.log('G ColorWidget.handleChangeGreen, value:', value);
    setGreen(value);
    handleChange();
  };
  var handleChangeBlue = function handleChangeBlue(value) {
    //console.log('B ColorWidget.handleChangeBlue, value:', value);
    setBlue(value);
    handleChange();
  };
  var handleChange = function handleChange() {
    //console.log('ColorWidget.handleChange, rgb:', redState, greenState, blueState);
    if (onChange) {
      onChange({
        red: redState,
        green: greenState,
        blue: blueState
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_label["default"], null, label), /*#__PURE__*/_react["default"].createElement(_control["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleColorClick.bind(this),
    style: _defineProperty({
      font: style.font,
      backgroundColor: "rgb(".concat(redState, ", ").concat(greenState, ", ").concat(blueState, ")"),
      height: "".concat(style.computed.itemHeight, "px"),
      lineHeight: "".concat(style.computed.itemHeight, "px"),
      width: '100%',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      textShadow: 'black 0 0 4px, black 0 0 4px, black 0 0 4px, black 0 0 4px, black 0 0 4px',
      cursor: 'default',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    }, "cursor", 'pointer')
  }, redState, ", ", greenState, ", ", blueState), expandedState && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_colorRange["default"], {
    label: "Red",
    labelWidth: style.colorLabelWidth,
    inputWidth: style.colorInputWidth,
    value: redState,
    decimals: 0,
    onChange: handleChangeRed.bind(this)
  }), /*#__PURE__*/_react["default"].createElement(_colorRange["default"], {
    label: "Green",
    labelWidth: style.colorLabelWidth,
    inputWidth: style.colorInputWidth,
    value: greenState,
    onChange: handleChangeGreen.bind(this)
  }), /*#__PURE__*/_react["default"].createElement(_colorRange["default"], {
    label: "Blue",
    labelWidth: style.colorLabelWidth,
    inputWidth: style.colorInputWidth,
    value: blueState,
    onChange: handleChangeBlue.bind(this)
  }))));
}
ColorWidget.propTypes = {
  red: _propTypes["default"].number,
  green: _propTypes["default"].number,
  blue: _propTypes["default"].number,
  expanded: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
ColorWidget.defaultProps = {
  red: 0,
  green: 0,
  blue: 0,
  expanded: false
};
ColorWidget.contextTypes = {
  style: _propTypes["default"].object
};