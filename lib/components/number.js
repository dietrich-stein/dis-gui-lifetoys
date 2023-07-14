'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
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
var _Number = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Number, _React$PureComponent);
  var _super = _createSuper(Number);
  function Number(props) {
    var _this;
    _classCallCheck(this, Number);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }
  _createClass(Number, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        if (nextProps.value !== this.state.value) {
          this.setState({
            value: nextProps.value
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.min !== undefined && this.props.max !== undefined) {
        return /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement(_components.Label, null, this.props.label), /*#__PURE__*/_react["default"].createElement(_components.Control, null, /*#__PURE__*/_react["default"].createElement(_components.NumberRange, {
          decimals: this.props.decimals,
          value: this.state.value,
          min: this.props.min,
          max: this.props.max,
          step: this.props.step,
          onChange: this.handleChange.bind(this),
          onFinishChange: this.handleFinishChange.bind(this)
        })));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement(_components.Label, null, this.props.label), /*#__PURE__*/_react["default"].createElement(_components.Control, null, /*#__PURE__*/_react["default"].createElement(_components.Number, {
          decimals: this.props.decimals,
          value: this.state.value,
          onChange: this.handleChange.bind(this),
          onFinishChange: this.handleFinishChange.bind(this),
          width: "100%"
        })));
      }
    }
  }, {
    key: "handleFinishChange",
    value: function handleFinishChange(value) {
      this.setState({
        value: value
      });
      if (this.props.onFinishChange) {
        this.props.onFinishChange(value);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }]);
  return Number;
}(_react["default"].PureComponent);
exports["default"] = _Number;
_Number.propTypes = {
  value: _propTypes["default"].number,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
_Number.defaultProps = {
  value: 0
};
_Number.contextTypes = {
  style: _propTypes["default"].object
};