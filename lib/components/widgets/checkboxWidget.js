'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CheckboxWidget;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _row = _interopRequireDefault(require("../core/row"));
var _label = _interopRequireDefault(require("../core/label"));
var _control = _interopRequireDefault(require("../core/control"));
var _styleContext = require("../styleContext");
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
    if (props.checked !== state.checked) {
      return {
        checked: state.checked
      };
    }
    return null;
  }
*/

function CheckboxWidget(_ref) {
  var checked = _ref.checked,
    label = _ref.label,
    onChange = _ref.onChange,
    onFinishChange = _ref.onFinishChange;
  var _useState = (0, _react.useState)(checked),
    _useState2 = _slicedToArray(_useState, 2),
    checkedState = _useState2[0],
    setChecked = _useState2[1];
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);
  var handleClick = function handleClick() {
    setChecked(!checkedState);
    if (onChange) {
      onChange(!checkedState);
    }
    if (onFinishChange) {
      onFinishChange(!checkedState);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_label["default"], null, label), /*#__PURE__*/_react["default"].createElement(_control["default"], null, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "".concat(styleContext.computed.fontHeight),
    height: "".concat(styleContext.computed.fontHeight),
    onClick: handleClick.bind(this),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "scale(".concat(styleContext.computed.fontHeight / 100, ")")
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    className: "shape",
    x: "0",
    y: "0",
    width: "100",
    height: "100",
    fill: styleContext.lowlight
  }), checkedState && /*#__PURE__*/_react["default"].createElement("path", {
    transform: "translate(18.75 50)",
    d: "M0 0 L25 25 L62.5 -32.5",
    stroke: styleContext.highlight,
    strokeWidth: "15",
    fill: "none"
  })))));
}
CheckboxWidget.propTypes = {
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
CheckboxWidget.defaultProps = {
  checked: false
};

/*CheckboxWidget.contextTypes = {
  styleContext: PropTypes.object,
};*/