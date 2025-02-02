"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _widgets = require("./components/widgets");
Object.keys(_widgets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _widgets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widgets[key];
    }
  });
});