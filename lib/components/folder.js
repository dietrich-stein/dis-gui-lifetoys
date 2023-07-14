'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));
var _components = _interopRequireDefault(require("./components"));
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
var Folder = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Folder, _React$PureComponent);
  var _super = _createSuper(Folder);
  function Folder(props) {
    var _this;
    _classCallCheck(this, Folder);
    _this = _super.call(this, props);
    _this.subscriptions = [];
    _this.state = {
      expanded: _this.props.expanded
    };
    return _this;
  }
  _createClass(Folder, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.subscriptions.push(fn);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(fn) {
      this.subscriptions.splice(this.subscriptions.indexOf(fn), 1);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.expanded !== this.props.expanded) {
        if (nextProps.expanded !== this.state.expanded) {
          this.setState({
            expanded: nextProps.expanded
          });
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      if (prevState.expanded !== this.state.expanded) {
        this.subscriptions.forEach(function (fn) {
          return fn(_this2.state.expanded);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var rightDisplay = this.state.expanded ? 'none' : 'inline-block';
      var downDisplay = this.state.expanded ? 'inline-block' : 'none';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          backgroundColor: this.context.style.backgroundColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: this.context.style.label.fontColor,
          font: this.context.style.font,
          fontWeight: this.context.style.label.fontWeight,
          padding: "".concat(this.context.style.paddingY, "px ").concat(this.context.style.paddingX, "px"),
          borderBottom: this.context.style.separator,
          cursor: 'pointer',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'
        },
        onClick: this.handleClick.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: "".concat(this.context.style.paddingY, "px ").concat(this.context.style.paddingX, "px"),
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center'
        }
      }, this.props.label, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "".concat(this.context.style.computed.fontHeight * 0.75),
        height: "".concat(this.context.style.computed.fontHeight * 0.75),
        style: {
          display: rightDisplay,
          marginLeft: this.context.style.paddingX
        }
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "scale(".concat(this.context.style.computed.fontHeight * 0.75 / 100, ")")
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "shape",
        points: "25,0 75,50 25,100",
        fill: this.context.style.label.fontColor
      }))), /*#__PURE__*/_react["default"].createElement("svg", {
        width: "".concat(this.context.style.computed.fontHeight * 0.75),
        height: "".concat(this.context.style.computed.fontHeight * 0.75),
        style: {
          display: downDisplay,
          marginLeft: this.context.style.paddingX
        }
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "scale(".concat(this.context.style.computed.fontHeight * 0.75 / 100, ")")
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "shape",
        points: "0,25 50,75 100,25",
        fill: this.context.style.label.fontColor
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          borderLeft: "4px solid ".concat(this.context.style.lowlight),
          display: "".concat(this.state.expanded ? 'block' : 'none')
        }
      }, this.props.children));
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var _this3 = this;
      return (0, _lodash["default"])((0, _lodash2["default"])(this.context), {
        style: {
          labelWidth: this.context.style.labelWidth - 4
        },
        folder: {
          subscribe: function subscribe(fn) {
            _this3.subscribe(fn);
            return function () {
              return _this3.unsubscribe(fn);
            };
          }
        }
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.setState({
        expanded: !this.state.expanded
      }, function () {
        if (this.props.onChange) {
          this.props.onChange(this.state.expanded);
        }
        if (this.props.onFinishChange) {
          this.props.onFinishChange(this.state.expanded);
        }
      });
    }
  }]);
  return Folder;
}(_react["default"].PureComponent);
exports["default"] = Folder;
Folder.propTypes = {
  expanded: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
Folder.defaultProps = {
  expanded: false
};
Folder.childContextTypes = {
  style: _propTypes["default"].object,
  folder: _propTypes["default"].shape({
    subscribe: _propTypes["default"].func
  })
};
Folder.contextTypes = {
  style: _propTypes["default"].object
};