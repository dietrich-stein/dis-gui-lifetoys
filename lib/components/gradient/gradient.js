'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));
var _components = require("../components");
var _stop = _interopRequireDefault(require("./stop.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Gradient = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Gradient, _React$PureComponent);
  var _super = _createSuper(Gradient);
  function Gradient(props) {
    var _this;
    _classCallCheck(this, Gradient);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleStopFieldMouseDown", function (e) {
      if (e.target !== _this.refs.stopfield) return;
      var stops = _this.state.stops.slice();
      var rect = e.target.getBoundingClientRect();
      var stop = (e.pageX - rect.left) / rect.width;
      var c = _this.getGradientValue(_this.getCleanStops(), stop);
      stops.push({
        stop: stop,
        red: c.red,
        green: c.green,
        blue: c.blue
      });
      var newState = (0, _immutabilityHelper["default"])(_this.state, {
        $set: {
          stops: stops,
          selectedStop: stops.length - 1
        }
      });
      _this.setState(newState, function () {
        _this.handleChange();
        _this.handleFinishChange();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleRemoveStop", function () {
      var stops = _this.state.stops.slice();
      stops.splice(_this.state.selectedStop, 1);
      var newState = (0, _immutabilityHelper["default"])(_this.state, {
        $set: {
          stops: stops,
          selectedStop: 0
        }
      });
      _this.setState(newState, function () {
        _this.handleChange();
        _this.handleFinishChange();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeRed", function (value) {
      var stops = _this.state.stops.slice();
      stops[_this.state.selectedStop].red = parseInt(value);
      var newState = (0, _immutabilityHelper["default"])(_this.state, {
        $set: {
          stops: stops
        }
      });
      _this.setState(newState, _this.handleChange);
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeGreen", function (value) {
      var stops = _this.state.stops.slice();
      stops[_this.state.selectedStop].green = parseInt(value);
      var newState = (0, _immutabilityHelper["default"])(_this.state, {
        $set: {
          stops: stops
        }
      });
      _this.setState(newState, _this.handleChange);
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeBlue", function (value) {
      var stops = _this.state.stops.slice();
      stops[_this.state.selectedStop].blue = parseInt(value);
      var newState = (0, _immutabilityHelper["default"])(_this.state, {
        $set: {
          stops: stops
        }
      });
      _this.setState(newState, _this.handleChange);
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      if (_this.props.onChange) {
        _this.props.onChange(_this.getCleanStops());
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleFinishChange", function () {
      if (_this.props.onFinishChange) {
        _this.props.onFinishChange(_this.getCleanStops());
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleCanvasClick", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleStopChange", function (e) {
      var stops = _this.state.stops.slice();
      stops[e.index].stop = e.stop;
      var newState = (0, _immutabilityHelper["default"])(_this.state, {
        $set: {
          stops: stops
        }
      });
      _this.setState(newState, _this.handleChange);
    });
    _defineProperty(_assertThisInitialized(_this), "handleStopClick", function (e) {
      _this.setState({
        selectedStop: e.index
      });
    });
    _this.state = {
      expanded: _this.props.expanded,
      stops: _this.props.stops,
      selectedStop: 0
    };
    return _this;
  }
  _createClass(Gradient, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var stopSide = this.context.style.computed.fontHeight;
      return /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement(_components.Label, null, this.props.label), /*#__PURE__*/_react["default"].createElement(_components.Control, null, /*#__PURE__*/_react["default"].createElement("canvas", {
        ref: "canvas",
        onClick: this.handleCanvasClick.bind(this),
        style: {
          width: "".concat(this.context.style.controlWidth, "px"),
          position: 'relative',
          height: "".concat(this.context.style.computed.itemHeight, "px"),
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
          cursor: 'pointer'
        }
      }), this.state.expanded && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        ref: "stopfield",
        onMouseDown: this.handleStopFieldMouseDown,
        style: {
          width: "".concat(this.context.style.controlWidth, "px"),
          height: "".concat(stopSide * 1.875, "px"),
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }
      }, this.state.stops.map(function (stop, index) {
        return /*#__PURE__*/_react["default"].createElement(_stop["default"], {
          key: 'stop' + index,
          index: index,
          stop: stop.stop,
          red: stop.red,
          green: stop.green,
          blue: stop.blue,
          selected: index === _this2.state.selectedStop,
          onClick: _this2.handleStopClick.bind(_this2),
          onChange: _this2.handleStopChange.bind(_this2),
          onFinishChange: _this2.handleFinishChange.bind(_this2)
        });
      })), /*#__PURE__*/_react["default"].createElement(_components.ColorRange, {
        label: "Red",
        value: this.state.stops[this.state.selectedStop].red,
        onChange: this.handleChangeRed.bind(this),
        onFinishChange: this.handleFinishChange.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(_components.ColorRange, {
        label: "Green",
        value: this.state.stops[this.state.selectedStop].green,
        onChange: this.handleChangeGreen.bind(this),
        onFinishChange: this.handleFinishChange.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(_components.ColorRange, {
        label: "Blue",
        value: this.state.stops[this.state.selectedStop].blue,
        onChange: this.handleChangeBlue.bind(this),
        onFinishChange: this.handleFinishChange.bind(this)
      }), this.state.stops.length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.handleRemoveStop,
        style: {
          backgroundColor: this.context.style.lowlight,
          color: this.context.style.highlight,
          font: this.context.style.font,
          padding: "".concat(this.context.style.paddingY, "px 0px"),
          marginTop: "".concat(this.context.style.paddingY, "px"),
          textAlign: 'center',
          cursor: 'pointer',
          width: '100%',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'
        }
      }, "Remove Stop"))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateCanvas();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateCanvas();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;
      var newState = (0, _immutabilityHelper["default"])(this.state, {
        $set: {
          stops: nextProps.stops
        }
      });
      this.setState(newState, function () {
        _this3.handleChange();
        _this3.handleFinishChange();
      });
    }
  }, {
    key: "getCleanStops",
    value: function getCleanStops() {
      // Returns this.state.stops, bounded to [0..1] and sorted.
      var stops = this.state.stops.slice();
      stops.sort(function (a, b) {
        return a.stop - b.stop;
      });
      if (stops[0].stop > 0) {
        stops.unshift({
          stop: 0,
          red: stops[0].red,
          green: stops[0].green,
          blue: stops[0].blue
        });
      }
      var lastStop = stops[stops.length - 1];
      if (lastStop.stop < 1) {
        stops.push({
          stop: 1,
          red: lastStop.red,
          green: lastStop.green,
          blue: lastStop.blue
        });
      }
      return stops;
    }
  }, {
    key: "getGradientValue",
    value: function getGradientValue(cleanStops, frac) {
      for (var i = 0; i < cleanStops.length - 1; i++) {
        if (frac >= cleanStops[i].stop && frac <= cleanStops[i + 1].stop) {
          var left = cleanStops[i];
          var right = cleanStops[i + 1];
          var ifrac = (frac - left.stop) / (right.stop - left.stop);
          return {
            red: Math.round(left.red + ifrac * (right.red - left.red)),
            green: Math.round(left.green + ifrac * (right.green - left.green)),
            blue: Math.round(left.blue + ifrac * (right.blue - left.blue))
          };
        }
      }
      throw 'Error calculating gradient value.';
    }
  }, {
    key: "updateCanvas",
    value: function updateCanvas() {
      var stops = this.getCleanStops();
      var canvas = this.refs.canvas;
      canvas.width = 512;
      canvas.height = 1;
      var ctx = canvas.getContext('2d');
      for (var x = 0; x < canvas.width; x++) {
        var frac = x / (canvas.width - 1);
        var c = this.getGradientValue(stops, frac);
        ctx.fillStyle = "rgb(".concat(c.red, ", ").concat(c.green, ", ").concat(c.blue, ")");
        ctx.fillRect(x, 0, 1, 1);
      }
    }
  }]);
  return Gradient;
}(_react["default"].PureComponent);
exports["default"] = Gradient;
Gradient.propTypes = {
  expanded: _propTypes["default"].bool,
  stops: _propTypes["default"].array,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
Gradient.defaultProps = {
  expanded: false,
  stops: [{
    red: 255,
    green: 0,
    blue: 0,
    stop: 0.125
  }, {
    red: 255,
    green: 255,
    blue: 0,
    stop: 0.5
  }, {
    red: 255,
    green: 255,
    blue: 255,
    stop: 0.875
  }]
};
Gradient.contextTypes = {
  style: _propTypes["default"].object
};