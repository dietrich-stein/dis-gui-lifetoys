"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyle = exports.StyleContext = void 0;
var _react = require("react");
var defaultStyle = {
  labelWidth: 96,
  colorLabelWidth: '20%',
  // relative to 100% of controlWidth
  colorRangeWidth: '70%',
  // relative to 80% of controlWidth
  colorInputWidth: '30%',
  // relative to 80% of controlWidth
  controlWidth: 192,
  paddingY: 3,
  paddingX: 3,
  highlight: '#0FA',
  medlight: '#063',
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
exports.defaultStyle = defaultStyle;
var StyleContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.StyleContext = StyleContext;