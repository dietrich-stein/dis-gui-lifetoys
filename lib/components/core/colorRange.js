"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorRange;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext");
var _numberRange = _interopRequireDefault(require("./numberRange.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ColorRange(_ref) {
  var value = _ref.value,
    label = _ref.label,
    labelWidth = _ref.labelWidth,
    inputWidth = _ref.inputWidth,
    width = _ref.width,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    valueState = _useState2[0],
    setValue = _useState2[1];
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);

  /*useEffect(() => {
    console.log('ColorRange, useEffect, valueState:', valueState);
    setValue(valueState);
    handleChange(valueState);
  }, [valueState]);*/

  var handleChange = function handleChange(value) {
    //console.log('ColorRange.handleChange, value:', value);
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'left',
      marginBottom: '2px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: labelWidth,
      font: styleContext.font,
      color: styleContext.readOnly,
      alignSelf: 'center',
      paddingRight: '15px',
      userSelect: 'none'
    }
  }, label), /*#__PURE__*/_react["default"].createElement(_numberRange["default"], {
    value: valueState,
    min: 0,
    max: 255,
    step: 1,
    width: width,
    numberWidth: inputWidth,
    onChange: handleChange.bind(this)
  }));
}
ColorRange.propTypes = {
  value: _propTypes["default"].number.isRequired,
  label: _propTypes["default"].string,
  labelWidth: _propTypes["default"].string,
  inputWidth: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
ColorRange.defaultProps = {
  width: '100%',
  labelWidth: '20%',
  inputWidth: '20%'
};