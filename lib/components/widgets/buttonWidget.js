'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonWidget;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext");
var _row = _interopRequireDefault(require("../core/row"));
var _label = _interopRequireDefault(require("../core/label"));
var _control = _interopRequireDefault(require("../core/control"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ButtonWidget(_ref) {
  var disabled = _ref.disabled,
    label = _ref.label,
    onClick = _ref.onClick;
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);
  var handleClick = function handleClick() {
    if (onClick && !disabled) {
      onClick();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_label["default"], null), /*#__PURE__*/_react["default"].createElement(_control["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleClick.bind(this),
    style: {
      opacity: disabled ? 0.5 : 1.0,
      backgroundColor: styleContext.lowlight,
      color: styleContext.highlight,
      font: styleContext.font,
      padding: "".concat(styleContext.paddingY, "px ").concat(styleContext.paddingX, "px"),
      textAlign: 'center',
      cursor: 'pointer',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    }
  }, label)));
}
ButtonWidget.propTypes = {
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func
};

/*ButtonWidget.contextTypes = {
  styleContext: PropTypes.object,
}*/