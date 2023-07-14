'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
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
var Range = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Range, _React$PureComponent);
  var _super = _createSuper(Range);
  function Range(props) {
    var _this;
    _classCallCheck(this, Range);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }
  _createClass(Range, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: "container",
        onMouseDown: this.onMouseDown.bind(this),
        style: {
          width: this.props.width,
          height: "".concat(this.context.style.computed.itemHeight, "px"),
          position: 'relative'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: "track",
        style: {
          position: 'absolute',
          width: '100%',
          height: '1px',
          left: '0px',
          backgroundColor: this.context.style.lowlight
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        ref: "thumb",
        style: {
          position: 'absolute',
          backgroundColor: this.context.style.lowlight,
          border: "1px solid ".concat(this.context.style.highlight),
          boxSizing: 'border-box',
          borderRadius: '0px',
          cursor: 'pointer'
        }
      }));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateLayout();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.updateLayout();
      if (this.context.folder) {
        this.unsubscribeFolder = this.context.folder.subscribe(function (expanded) {
          if (expanded) _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeFolder) this.unsubscribeFolder();
    }
  }, {
    key: "updateLayout",
    value: function updateLayout() {
      var container = this.refs.container;
      var cHeight = container.clientHeight;
      var cWidth = container.clientWidth;
      var track = this.refs.track;
      track.style.top = "".concat(cHeight / 2 - 0.5, "px");
      var thumb = this.refs.thumb;
      var thumbSize = this.context.style.computed.fontHeight * 0.9;
      thumb.style.top = "".concat(this.context.style.computed.itemHeight / 2 - thumbSize / 2, "px");
      var frac = (this.state.value - this.props.min) / (this.props.max - this.props.min);
      var left = frac * cWidth - thumbSize / 2;
      left = Math.max(left, 0);
      left = Math.min(left, cWidth - thumbSize);
      thumb.style.left = "".concat(left, "px");
      thumb.style.width = "".concat(thumbSize, "px");
      thumb.style.height = "".concat(thumbSize, "px");
    }
  }, {
    key: "moveThumb",
    value: function moveThumb(pageX) {
      var container = this.refs.container;
      var cWidth = container.clientWidth;
      var thumbSize = this.context.style.computed.fontHeight * 0.9;
      var x = pageX - container.getBoundingClientRect().left;
      var frac = 0;
      if (x < thumbSize / 2) {
        frac = 0;
      } else if (x > cWidth - thumbSize / 2) {
        frac = 1;
      } else {
        frac = (x - thumbSize / 2) / (cWidth - thumbSize);
      }
      var value = frac * (this.props.max - this.props.min) + this.props.min;
      if (this.props.step !== undefined) {
        var stops = [];
        var _x = this.props.min;
        while (_x < this.props.max) {
          stops.push(_x);
          _x += this.props.step;
        }
        stops.push(this.props.max);
        var min = stops[0];
        for (var i = 0; i < stops.length; i++) {
          var stop = stops[i];
          var dmin = Math.abs(min - value);
          var dstop = Math.abs(stop - value);
          if (dstop < dmin) {
            min = stop;
          }
        }
        value = min;
      }
      this.setState({
        value: value
      });
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      e.preventDefault();
      this.moveThumb(e.pageX);
      var onMouseMove = function (e) {
        this.moveThumb(e.pageX);
      }.bind(this);
      var onMouseUp = function () {
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('mousemove', onMouseMove);
        if (this.props.onFinishChange) {
          this.props.onFinishChange(this.state.value);
        }
      }.bind(this);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  }]);
  return Range;
}(_react["default"].PureComponent);
exports["default"] = Range;
Range.propTypes = {
  value: _propTypes["default"].number.isRequired,
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number,
  width: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  OnFinishChange: _propTypes["default"].func
};
Range.defaultProps = {
  width: '100%'
};
Range.contextTypes = {
  style: _propTypes["default"].object,
  folder: _propTypes["default"].shape({
    subscribe: _propTypes["default"].func
  })
};