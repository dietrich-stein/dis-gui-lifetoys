'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GradientWidget;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styleContext = require("../styleContext.js");
var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));
var _row = _interopRequireDefault(require("../core/row"));
var _label = _interopRequireDefault(require("../core/label"));
var _control = _interopRequireDefault(require("../core/control"));
var _colorRange = _interopRequireDefault(require("../core/colorRange"));
var _colorStop = _interopRequireDefault(require("../core/colorStop.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function GradientWidget(_ref) {
  var _this = this;
  var expanded = _ref.expanded,
    stops = _ref.stops,
    label = _ref.label,
    onChange = _ref.onChange,
    onFinishChange = _ref.onFinishChange;
  var _useState = (0, _react.useState)(expanded),
    _useState2 = _slicedToArray(_useState, 2),
    expandedState = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0, _react.useState)(stops),
    _useState4 = _slicedToArray(_useState3, 2),
    stopsState = _useState4[0],
    setStops = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedStopState = _useState6[0],
    setSelectedStop = _useState6[1];
  var styleContext = (0, _react.useContext)(_styleContext.StyleContext);
  var canvasRef = /*#__PURE__*/(0, _react.createRef)();
  var stopfieldRef = /*#__PURE__*/(0, _react.createRef)();
  (0, _react.useEffect)(function () {
    updateCanvas();
  });
  var handleStopFieldMouseDown = function handleStopFieldMouseDown(event) {
    var el = event.target.closest('div');
    if (el !== stopfieldRef.current) {
      return;
    }
    var updatedStops = stops.slice();
    var rect = event.target.getBoundingClientRect();
    var newStop = (event.pageX - rect.left) / rect.width;
    var c = getGradientValue(getCleanStops(), newStop);
    updatedStops.push({
      stop: newStop,
      red: c.red,
      green: c.green,
      blue: c.blue
    });
    /*let newState = update(this.state, {
      $set: {
        stops: stops,
        selectedStopState: stops.length - 1
      }
    })*/
    setStops(updatedStops);
    setSelectedStop(updatedStops.length - 1);
    handleChange();
    handleFinishChange();
  };
  var handleRemoveStop = function handleRemoveStop() {
    var updatedStops = stops.slice();
    updatedStops.splice(selectedStopState, 1);
    /*let newState = update(this.state, {
      $set: {
        stops: stops,
        selectedStopState: 0
      }
    })*/
    setStops(updatedStops);
    setSelectedStop(0);
    handleChange();
    handleFinishChange();
  };
  var handleChangeRed = function handleChangeRed(value) {
    var updatedStops = stops.slice();
    updatedStops[selectedStopState].red = parseInt(value);
    /*let newState = update(this.state, {
      $set: {
        stops: stops
      }
    })*/
    setStops(updatedStops);
    handleChange();
  };
  var handleChangeGreen = function handleChangeGreen(value) {
    var updatedStops = stops.slice();
    updatedStops[selectedStopState].green = parseInt(value);
    /*let newState = update(this.state, {
      $set: {
        stops: stops
      }
    })*/
    setStops(updatedStops);
    handleChange();
  };
  var handleChangeBlue = function handleChangeBlue(value) {
    var updatedStops = stops.slice();
    updatedStops[selectedStopState].blue = parseInt(value);
    /*let newState = update(this.state, {
      $set: {
        stops: stops
      }
    })*/
    setStops(updatedStops);
    handleChange();
  };
  var handleChange = function handleChange() {
    if (onChange) {
      onChange(getCleanStops());
    }
  };
  var handleFinishChange = function handleFinishChange() {
    if (onFinishChange) {
      onFinishChange(getCleanStops());
    }
  };
  var handleCanvasClick = function handleCanvasClick() {
    setExpanded(!expandedState);
  };
  var handleStopChange = function handleStopChange(event) {
    var updatedStops = stops.slice();
    updatedStops[event.index].stop = event.stop;
    /*let newState = update(this.state, {
      $set: {
        stops: stops,
      }
    });*/
    setStops(updatedStops);
    handleChange();
  };
  var handleStopClick = function handleStopClick(event) {
    setSelectedStop(event.index);
  };
  var getCleanStops = function getCleanStops() {
    if (!stops) {
      return [];
    }
    // Returns stops, bounded to [0..1] and sorted.
    var cleanStops = stops.slice();
    cleanStops.sort(function (a, b) {
      return a.stop - b.stop;
    });
    if (cleanStops[0].stop > 0) {
      cleanStops.unshift({
        stop: 0,
        red: cleanStops[0].red,
        green: cleanStops[0].green,
        blue: cleanStops[0].blue
      });
    }
    var lastStop = cleanStops[cleanStops.length - 1];
    if (lastStop.stop < 1) {
      cleanStops.push({
        stop: 1,
        red: lastStop.red,
        green: lastStop.green,
        blue: lastStop.blue
      });
    }
    return cleanStops;
  };
  var getGradientValue = function getGradientValue(cleanStops, frac) {
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
  };
  var updateCanvas = function updateCanvas() {
    var stops = getCleanStops();
    var canvas = canvasRef.current;
    canvas.width = 512;
    canvas.height = 1;
    var ctx = canvas.getContext('2d');
    for (var x = 0; x < canvas.width; x++) {
      var frac = x / (canvas.width - 1);
      var c = getGradientValue(stops, frac);
      ctx.fillStyle = "rgb(".concat(c.red, ", ").concat(c.green, ", ").concat(c.blue, ")");
      ctx.fillRect(x, 0, 1, 1);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {}
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_label["default"], null, label), /*#__PURE__*/_react["default"].createElement(_control["default"], null, /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    onClick: handleCanvasClick.bind(this),
    style: {
      width: "".concat(styleContext.controlWidth, "px"),
      position: 'relative',
      height: "".concat(styleContext.computed.itemHeight, "px"),
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      cursor: 'pointer'
    }
  }), expandedState && 0 === 1 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: stopfieldRef,
    onMouseDown: handleStopFieldMouseDown.bind(this),
    style: {
      width: "".concat(styleContext.controlWidth, "px"),
      height: "".concat(styleContext.computed.fontHeight * 1.875, "px"),
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, stopsState.map(function (stop, index) {
    return /*#__PURE__*/_react["default"].createElement(_colorStop["default"], {
      key: 'stop' + index,
      index: index,
      stop: stop.stop,
      red: stop.red,
      green: stop.green,
      blue: stop.blue,
      selected: index === selectedStopState,
      onClick: handleStopClick.bind(_this),
      onChange: handleStopChange.bind(_this),
      onFinishChange: handleFinishChange.bind(_this)
    });
  })), /*#__PURE__*/_react["default"].createElement(_colorRange["default"], {
    label: "Red",
    value: stops[selectedStopState].red,
    onChange: handleChangeRed.bind(this),
    onFinishChange: handleFinishChange.bind(this)
  }), /*#__PURE__*/_react["default"].createElement(_colorRange["default"], {
    label: "Green",
    value: stops[selectedStopState].green,
    onChange: handleChangeGreen.bind(this),
    onFinishChange: handleFinishChange.bind(this)
  }), /*#__PURE__*/_react["default"].createElement(_colorRange["default"], {
    label: "Blue",
    value: stops[selectedStopState].blue,
    onChange: handleChangeBlue.bind(this),
    onFinishChange: handleFinishChange.bind(this)
  }), stopsState.length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleRemoveStop,
    style: {
      backgroundColor: styleContext.lowlight,
      color: styleContext.highlight,
      font: styleContext.font,
      padding: "".concat(styleContext.paddingY, "px 0px"),
      marginTop: "".concat(styleContext.paddingY, "px"),
      textAlign: 'center',
      cursor: 'pointer',
      width: '100%',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    }
  }, "Remove Stop")))));
}
GradientWidget.propTypes = {
  expanded: _propTypes["default"].bool,
  stops: _propTypes["default"].array,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func
};
GradientWidget.defaultProps = {
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

/*GradientWidget.contextTypes = {
  styleContext: PropTypes.object,
};*/