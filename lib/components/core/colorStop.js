'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorStop;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ColorStop(_ref) {
  var _this = this;
  var selected = _ref.selected,
    stop = _ref.stop,
    red = _ref.red,
    green = _ref.green,
    blue = _ref.blue,
    index = _ref.index,
    onChange = _ref.onChange,
    onFinishChange = _ref.onFinishChange,
    onClick = _ref.onClick;
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);
  var svgRef = /*#__PURE__*/(0, _react.createRef)();
  var selectScale = selected ? 1.25 : 1;
  var s = styleContext.computed.fontHeight / 58 * selectScale;
  var border = styleContext.label.fontColor;
  var handleMouseDown = function handleMouseDown(event) {
    if (event.target !== svgRef.current) {
      return;
    }
    event.preventDefault();
    var field = svgRef.current.parentNode;
    var fieldRect = field.getBoundingClientRect();
    var onMouseMove = function (mouseMoveEvent) {
      var x = mouseMoveEvent.pageX - fieldRect.left;
      var stop = x / fieldRect.width;
      stop = Math.max(0, Math.min(1, stop));
      if (onChange) {
        onChange({
          index: index,
          stop: stop
        });
      }
    }.bind(_this);
    window.addEventListener('mousemove', onMouseMove);
    var onMouseUp = function () {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (onFinishChange) {
        onFinishChange();
      }
    }.bind(_this);
    window.addEventListener('mouseup', onMouseUp);
    if (onClick) {
      onClick({
        index: index
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("svg", {
    ref: svgRef,
    width: "".concat(58 * s, "px"),
    height: "".concat(87 * s, "px"),
    onMouseDown: handleMouseDown,
    style: {
      left: "".concat(stop * styleContext.controlWidth - selectScale * styleContext.computed.fontHeight / 2, "px"),
      position: 'absolute',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "scale(".concat(s, ")")
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(4, 9)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 25 L0 75 L50 75 L50 25 L25 0 Z",
    fill: "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"),
    stroke: border,
    strokeWidth: "4"
  }))));
}
ColorStop.propTypes = {
  selected: _propTypes["default"].bool,
  stop: _propTypes["default"].number,
  red: _propTypes["default"].number,
  green: _propTypes["default"].number,
  blue: _propTypes["default"].number,
  index: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
ColorStop.defaultProps = {
  selected: false,
  stop: 0,
  red: 0,
  green: 0,
  blue: 0
};