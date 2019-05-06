"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectGetVal = undefined;

var _dataType = require("./data-type");

/**
 * 从对象中获取值的工具方法
 * @param {*} obj 对象
 * @param {*} expr 字符串
 */
var objectGetVal = exports.objectGetVal = function objectGetVal(obj, expr) {
  if (!(0, _dataType.isObject)(obj)) {
    throw new Error("".concat(obj, "\u4E0D\u662F\u5BF9\u8C61"));
  }

  if (!(0, _dataType.isString)(expr)) {
    throw new Error("".concat(expr, "\u5FC5\u987B\u662F\u5B57\u7B26\u4E32"));
  }

  return expr.split('.').reduce(function (prev, next) {
    if (prev) {
      return prev[next];
    } else {
      return undefined;
    }
  }, obj);
};