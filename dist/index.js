"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataType = require("./data-type");

Object.keys(_dataType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dataType[key];
    }
  });
});

var _objectGetValue = require("./object-get-value");

Object.keys(_objectGetValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objectGetValue[key];
    }
  });
});

var _objectCompare = require("./object-compare");

Object.keys(_objectCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objectCompare[key];
    }
  });
});