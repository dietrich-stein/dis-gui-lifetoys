'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NumberInput;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext");
var _sprintf = _interopRequireDefault(require("sprintf"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Needs to be outside component to prevent re-render
var StyledNumberInput = _styledComponents["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  color: ", ";\n  font: ", ";\n  background-color: ", ";\n  border: none;\n  outline: none;\n  &::-webkit-inner-spin-button {\n    appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])), function (props) {
  return props.$vars.width;
}, function (props) {
  return props.$vars.highlight;
}, function (props) {
  return props.$vars.font;
}, function (props) {
  return props.$vars.backgroundColor;
});
function NumberInput(_ref) {
  var value = _ref.value,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    width = _ref.width,
    decimals = _ref.decimals,
    onChange = _ref.onChange;
  var isNumber = function isNumber(value) {
    return !isNaN(value) && value !== '';
  };
  var truncate = function truncate(value) {
    if (decimals !== undefined) {
      return (0, _sprintf["default"])("%.".concat(decimals, "f"), parseFloat(value));
    }
    return value;
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    invalidState = _useState2[0],
    setInvalid = _useState2[1];
  var _useState3 = (0, _react.useState)(truncate(value)),
    _useState4 = _slicedToArray(_useState3, 2),
    valueState = _useState4[0],
    setValue = _useState4[1];
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);

  /*useEffect(() => {
    console.log('NumberInput, useEffect, valueState:', valueState);
    setValue(valueState);
    handleChange(valueState);
  }, [valueState]);*/

  var handleChange = function handleChange(value) {
    var newValue = truncate(Math.min(max, Math.max(min, value)));
    setValue(newValue);
    //console.log('NumberInput.handleChange, newValue:', newValue);
    if (!invalidState && onChange) {
      onChange(newValue);
    }
  };
  var onKeyDownEvent = function onKeyDownEvent(event) {
    if (event.which === 13) {
      handleChange(event.target.value);
    }
  };
  var onBlurEvent = function onBlurEvent(event) {
    handleChange(event.target.value);
  };
  var onChangeEvent = function onChangeEvent(event) {
    //console.log('NumberInput.onChangeEvent, event.target.value:', event.target.value);
    if (!isNumber(event.target.value)) {
      setInvalid(true);
      //setValue(event.target.value);
      handleChange(event.target.value);
      return;
    }
    setInvalid(false);
    handleChange(event.target.value);
    //setValue(truncate(event.target.value));
  };

  var vars = {
    width: width,
    backgroundColor: invalidState ? styleContext.lowlighterr : styleContext.lowlight,
    lowlight: styleContext.lowlight,
    lowlighterr: styleContext.lowlighterr,
    highlight: styleContext.highlight,
    font: styleContext.font
  };
  return /*#__PURE__*/_react["default"].createElement(StyledNumberInput, {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: onChangeEvent.bind(this),
    onKeyDown: onKeyDownEvent.bind(this),
    onBlur: onBlurEvent.bind(this),
    $vars: vars
  });
}
NumberInput.propTypes = {
  value: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number,
  width: _propTypes["default"].string,
  decimals: _propTypes["default"].number,
  onChange: _propTypes["default"].func
};
NumberInput.defaultProps = {
  value: 0,
  min: 0,
  max: 1,
  step: 1,
  width: 'auto'
};

/*NumberInput.contextTypes = {
  styleContext: PropTypes.object,
}*/