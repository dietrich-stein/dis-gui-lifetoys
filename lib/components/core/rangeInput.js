'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeInput;
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Needs to be outside component to prevent re-render
var StyledRangeInput = _styledComponents["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: ", ";\n  flex: 0;\n  padding: 0;\n  font-size: 12px;\n  cursor: pointer;\n  -webkit-appearance: none;\n  height: 10px;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  &::-webkit-slider-thumb {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    -webkit-appearance: none;\n    height: ", ";\n    width: ", ";\n    border-radius: 0;\n    border: 1px solid ", ";\n    background: ", ";\n  }\n"])), function (props) {
  return props.vars.width;
}, function (props) {
  return props.vars.lowlight;
}, function (props) {
  return props.vars.medlight;
}, function (props) {
  return props.vars.thumbHeight;
}, function (props) {
  return props.vars.thumbWidth;
}, function (props) {
  return props.vars.highlight;
}, function (props) {
  return props.vars.highlight;
});
function RangeInput(_ref) {
  var value = _ref.value,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    decimals = _ref.decimals,
    width = _ref.width,
    thumbHeight = _ref.thumbHeight,
    thumbWidth = _ref.thumbWidth,
    onChange = _ref.onChange;
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);
  var vars = {
    width: width,
    lowlight: styleContext.lowlight,
    medlight: styleContext.medlight,
    highlight: styleContext.highlight,
    thumbWidth: thumbWidth,
    thumbHeight: thumbHeight
  };
  var truncate = function truncate(value) {
    if (decimals !== undefined) {
      return sprintf("%.".concat(decimals, "f"), parseFloat(value));
    }
    return value;
  };
  var _useState = (0, _react.useState)(truncate(value)),
    _useState2 = _slicedToArray(_useState, 2),
    valueState = _useState2[0],
    setValue = _useState2[1];
  var handleChangeEvent = function handleChangeEvent(event) {
    var newValue = truncate(Math.min(max, Math.max(min, event.target.value)));
    //console.log('RangeInput.handleChange, newValue:', newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(StyledRangeInput, {
    type: "range",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: handleChangeEvent,
    vars: vars
  });
}
RangeInput.propTypes = {
  value: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number,
  width: _propTypes["default"].string,
  thumbHeight: _propTypes["default"].string,
  thumbWidth: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
RangeInput.defaultProps = {
  value: 0,
  min: 0,
  max: 1,
  step: 1,
  width: 'auto',
  thumbHeight: '10px',
  thumbWidth: '10px'
};

//RangeInput.contextTypes = {
//styleContext: PropTypes.object,
/*folder: PropTypes.shape({
  subscribe: PropTypes.func
}),*/
//}

/*
  componentDidMount() {
    if (this.context.folder) {
      this.unsubscribeFolder = this.context.folder.subscribe((expanded) => {
        if (expanded) {
          this.forceUpdate();
        }
      })
    }
  }
  componentWillUnmount() {
    if (this.unsubscribeFolder) {
      this.unsubscribeFolder();
    }
  }
*/