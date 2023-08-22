'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FolderWidget;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));
var _row = _interopRequireDefault(require("../core/row"));
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
    if (props.expanded !== state.expanded) {
      return {
        expanded: state.expanded
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expanded !== expanded) {
      subscriptionsState.forEach(fn => fn(expanded));
    }
  }

  const getChildContext = () => {
    return merge(cloneDeep(this.context), {
      style: {
        labelWidth: styleContext.labelWidth - 4,
      },
      folder: {
        subscribe: (fn) => {
          this.subscribe(fn);
          return () => this.unsubscribe(fn);
        }
      }
    });
  };
*/
function FolderWidget(_ref) {
  var children = _ref.children,
    expanded = _ref.expanded,
    label = _ref.label,
    onChange = _ref.onChange,
    onFinishChange = _ref.onFinishChange;
  var _useState = (0, _react.useState)(expanded),
    _useState2 = _slicedToArray(_useState, 2),
    expandedState = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    subscriptionsState = _useState4[0],
    setSubscriptionsState = _useState4[1];
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);
  var subscribe = function subscribe(fn) {
    subscriptionsState.push(fn);
  };
  var unsubscribe = function unsubscribe(fn) {
    subscriptionsState.splice(subscriptionsState.indexOf(fn), 1);
  };
  var handleClick = function handleClick() {
    setExpanded(!expandedState);
    if (onChange) {
      onChange(expandedState);
    }
    if (onFinishChange) {
      onFinishChange(expandedState);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: styleContext.backgroundColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: styleContext.label.fontColor,
      font: styleContext.font,
      fontWeight: styleContext.label.fontWeight,
      padding: "".concat(styleContext.paddingY, "px ").concat(styleContext.paddingX, "px"),
      borderBottom: styleContext.separator,
      cursor: 'pointer',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    },
    onClick: handleClick.bind(this)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: "".concat(styleContext.paddingY, "px ").concat(styleContext.paddingX, "px"),
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center'
    }
  }, label, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "".concat(styleContext.computed.fontHeight * 0.75),
    height: "".concat(styleContext.computed.fontHeight * 0.75),
    style: {
      display: expandedState ? 'none' : 'inline-block',
      marginLeft: styleContext.paddingX
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "scale(".concat(styleContext.computed.fontHeight * 0.75 / 100, ")")
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    className: "shape",
    points: "25,0 75,50 25,100",
    fill: styleContext.label.fontColor
  }))), /*#__PURE__*/_react["default"].createElement("svg", {
    width: "".concat(styleContext.computed.fontHeight * 0.75),
    height: "".concat(styleContext.computed.fontHeight * 0.75),
    style: {
      display: expandedState ? 'inline-block' : 'none',
      marginLeft: styleContext.paddingX
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "scale(".concat(styleContext.computed.fontHeight * 0.75 / 100, ")")
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    className: "shape",
    points: "0,25 50,75 100,25",
    fill: styleContext.label.fontColor
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderLeft: "4px solid ".concat(styleContext.lowlight),
      display: "".concat(expandedState ? 'block' : 'none')
    }
  }, children));
}
FolderWidget.propTypes = {
  expanded: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
FolderWidget.defaultProps = {
  expanded: false
};