'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NumberWidget;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _row = _interopRequireDefault(require("../core/row"));
var _label = _interopRequireDefault(require("../core/label"));
var _control = _interopRequireDefault(require("../core/control"));
var _numberInput = _interopRequireDefault(require("../core/numberInput"));
var _numberRange = _interopRequireDefault(require("../core/numberRange"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        value: state.value
      };
    }
    return null;
  }
*/
function NumberWidget(_ref) {
  var value = _ref.value,
    decimals = _ref.decimals,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    label = _ref.label,
    onChange = _ref.onChange,
    onFinishChange = _ref.onFinishChange;
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    valueState = _useState2[0],
    setValue = _useState2[1];
  var handleFinishChange = function handleFinishChange(value) {
    setValue(value);
    if (onFinishChange) {
      onFinishChange(value);
    }
  };
  var handleChange = function handleChange(value) {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  var row;
  if (min !== undefined && max !== undefined) {
    // Range w/input
    row = /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_label["default"], null, label), /*#__PURE__*/_react["default"].createElement(_control["default"], null, /*#__PURE__*/_react["default"].createElement(_numberRange["default"], {
      decimals: decimals,
      value: valueState,
      min: min,
      max: max,
      step: step,
      onChange: handleChange.bind(this),
      onFinishChange: handleFinishChange.bind(this)
    })));
  } else {
    // Input only
    row = /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_label["default"], null, label), /*#__PURE__*/_react["default"].createElement(_control["default"], null, /*#__PURE__*/_react["default"].createElement(_numberInput["default"], {
      decimals: decimals,
      value: valueState,
      onChange: handleChange.bind(this),
      onFinishChange: handleFinishChange.bind(this),
      width: "100%"
    })));
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, row);
}
NumberWidget.propTypes = {
  value: _propTypes["default"].number,
  decimals: _propTypes["default"].number,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
NumberWidget.defaultProps = {
  value: 0
};