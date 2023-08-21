'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GUI;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _row = _interopRequireDefault(require("./core/row"));
var _styleContext = require("./styleContext");
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
    if (props.expanded !== state.expanded) {
      return {
        expanded: state.expanded | props.alwaysOpen
      };
    }
    return null;
  }
  getChildContext() {
    return {
      style: this.style,
    }
  }
*/

function GUI(_ref) {
  var style = _ref.style,
    expanded = _ref.expanded,
    alwaysOpen = _ref.alwaysOpen,
    className = _ref.className,
    children = _ref.children;
  var _useState = (0, _react.useState)(expanded),
    _useState2 = _slicedToArray(_useState, 2),
    expandedState = _useState2[0],
    setExpanded = _useState2[1];
  var calculateFontHeight = function calculateFontHeight(font) {
    var div = document.createElement('div');
    div.style.font = font;
    div.style.overflow = 'hidden';
    div.style.whiteSpace = 'nowrap';
    div.innerHTML = '~!@#$%^&*()_+`1234567890-=QWERTYUIOP{}|qwertyuiop[]\\ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./';
    document.body.appendChild(div);
    var height = div.clientHeight;
    document.body.removeChild(div);
    return height;
  };
  var mergedStyle = (0, _lodash["default"])(JSON.parse(JSON.stringify(_styleContext.defaultStyle)), style);
  mergedStyle.computed = {};
  mergedStyle.computed.fontHeight = calculateFontHeight(mergedStyle.font);
  mergedStyle.computed.itemHeight = mergedStyle.computed.fontHeight + mergedStyle.paddingY * 2;
  mergedStyle.computed.minRowHeight = mergedStyle.computed.itemHeight + mergedStyle.paddingY * 2;
  var renderStyle = {
    position: 'fixed'
  };
  if (mergedStyle.right !== undefined) {
    renderStyle.right = mergedStyle.right;
  } else if (mergedStyle.left !== undefined) {
    renderStyle.left = mergedStyle.left;
  } else {
    renderStyle.right = '8px';
  }
  if (mergedStyle.top !== undefined) {
    renderStyle.top = mergedStyle.top;
  } else if (mergedStyle.bottom !== undefined) {
    renderStyle.bottom = mergedStyle.bottom;
  } else {
    renderStyle.top = '0px';
  }
  var noSelectStyle = {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    MozAppearance: 'none'
  };
  var handleCloseControls = function handleCloseControls() {
    setExpanded(!expandedState);
  };
  return /*#__PURE__*/_react["default"].createElement(_styleContext.StyleContext.Provider, {
    value: mergedStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: renderStyle,
    className: className
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: expandedState ? 'block' : 'none'
    }
  }, children), !alwaysOpen && /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleCloseControls.bind(this),
    style: {
      font: mergedStyle.font,
      color: mergedStyle.label.fontColor,
      textAlign: 'center',
      width: mergedStyle.labelWidth + mergedStyle.controlWidth + 2 * mergedStyle.paddingX,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: noSelectStyle
  }, expandedState ? 'Close Controls' : 'Open Controls')))));
}
GUI.propTypes = {
  styleContext: _propTypes["default"].object,
  expanded: _propTypes["default"].bool,
  alwaysOpen: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
GUI.defaultProps = {
  expanded: true,
  alwaysOpen: false
};