'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var defaultStyle = {
  labelWidth: 96,
  controlWidth: 192,
  paddingY: 3,
  paddingX: 3,
  highlight: '#0FA',
  readOnly: '#999',
  lowlight: '#444',
  lowlighterr: '#822',
  font: '11px Arial',
  backgroundColor: '#1A1A1A',
  separator: '1px solid #333',
  label: {
    fontColor: '#FFF',
    fontWeight: 'normal'
  }
};
var GUI = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(GUI, _React$PureComponent);
  var _super = _createSuper(GUI);
  function GUI(props) {
    var _this;
    _classCallCheck(this, GUI);
    _this = _super.call(this, props);
    _this.style = (0, _lodash["default"])(JSON.parse(JSON.stringify(defaultStyle)), _this.props.style);
    _this.style.computed = {};
    _this.style.computed.fontHeight = calculateFontHeight(_this.style.font);
    _this.style.computed.itemHeight = _this.style.computed.fontHeight + _this.style.paddingY * 2;
    _this.style.computed.minRowHeight = _this.style.computed.itemHeight + _this.style.paddingY * 2;
    _this.state = {
      expanded: _this.props.expanded
    };
    return _this;
  }
  _createClass(GUI, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.expanded !== this.props.expanded) {
        if (nextProps.expanded !== this.state.expanded) {
          this.setState({
            expanded: nextProps.expanded || nextProps.alwaysOpen
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var noSelect = {
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        MozAppearance: 'none'
      };
      var style = {
        position: 'fixed'
      };
      if (this.style.right !== undefined) {
        style.right = this.style.right;
      } else if (this.style.left !== undefined) {
        style.left = this.style.left;
      } else {
        style.right = '8px';
      }
      if (this.style.top !== undefined) {
        style.top = this.style.top;
      } else if (this.style.bottom !== undefined) {
        style.bottom = this.style.bottom;
      } else {
        style.top = '0px';
      }
      var expandText = this.state.expanded ? 'Close Controls' : 'Open Controls';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.state.expanded ? 'block' : 'none'
        }
      }, this.props.children), !this.props.alwaysOpen && /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.handleCloseControls.bind(this),
        style: {
          font: this.style.font,
          color: this.style.label.fontColor,
          textAlign: 'center',
          width: this.style.labelWidth + this.style.controlWidth + 2 * this.style.paddingX,
          cursor: 'pointer'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: noSelect
      }, expandText))));
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        style: this.style
      };
    }
  }, {
    key: "handleCloseControls",
    value: function handleCloseControls() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }]);
  return GUI;
}(_react["default"].PureComponent);
exports["default"] = GUI;
GUI.propTypes = {
  style: _propTypes["default"].object,
  expanded: _propTypes["default"].bool,
  alwaysOpen: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
GUI.defaultProps = {
  expanded: true,
  alwaysOpen: false
};
GUI.childContextTypes = {
  style: _propTypes["default"].object
};
function calculateFontHeight(font) {
  var div = document.createElement('div');
  div.style.font = font;
  div.style.overflow = 'hidden';
  div.style.whiteSpace = 'nowrap';
  div.innerHTML = '~!@#$%^&*()_+`1234567890-=QWERTYUIOP{}|qwertyuiop[]\\ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./';
  document.body.appendChild(div);
  var height = div.clientHeight;
  document.body.removeChild(div);
  return height;
}