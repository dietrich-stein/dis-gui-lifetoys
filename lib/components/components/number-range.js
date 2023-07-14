'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _number = _interopRequireDefault(require("./number.js"));
var _range = _interopRequireDefault(require("./range.js"));
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
var NumberRange = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(NumberRange, _React$PureComponent);
  var _super = _createSuper(NumberRange);
  function NumberRange(props) {
    var _this;
    _classCallCheck(this, NumberRange);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }
  _createClass(NumberRange, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: this.props.width,
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/_react["default"].createElement(_range["default"], {
        value: this.state.value,
        min: this.props.min,
        max: this.props.max,
        step: this.props.step,
        width: this.props.rangeWidth,
        onChange: this.handleChange.bind(this),
        onFinishChange: this.handleFinishChange.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(_number["default"], {
        decimals: this.props.decimals,
        value: this.state.value,
        width: this.props.numberWidth,
        onChange: this.handleChange.bind(this),
        onFinishChange: this.handleFinishChange.bind(this)
      }));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      value = Math.min(this.props.max, Math.max(this.props.min, value));
      this.setState({
        value: value
      }, function () {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      });
    }
  }, {
    key: "handleFinishChange",
    value: function handleFinishChange(value) {
      value = Math.min(this.props.max, Math.max(this.props.min, value));
      this.setState({
        value: value
      }, function () {
        if (this.props.onFinishChange) {
          this.props.onFinishChange(this.state.value);
        }
      });
    }
  }]);
  return NumberRange;
}(_react["default"].PureComponent);
exports["default"] = NumberRange;
NumberRange.propTypes = {
  value: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number,
  width: _propTypes["default"].string,
  rangeWidth: _propTypes["default"].string,
  numberWidth: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  OnFinishChange: _propTypes["default"].func
};
NumberRange.defaultProps = {
  rangeWidth: '65%',
  numberWidth: '30%',
  width: '100%'
};