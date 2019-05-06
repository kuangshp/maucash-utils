"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toString = Object.prototype.toString;
/**
 * 判断是否为对象
 * @param {Object} obj 
 */

var isObject = exports.isObject = function isObject(obj) {
  return Object.is(_toString.call(obj), '[object Object]');
};
/**
 * 判断是否为正则
 * @param {*} v 
 */


var isRegExp = exports.isRegExp = function isRegExp(v) {
  return Object.is(_toString.call(v), '[object RegExp]');
};
/**
 * 判断是否为有效的序列
 * @param {*} val 
 */


var isValidArrayIndex = exports.isValidArrayIndex = function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
};
/**
 * 判断是否为字符串
 * @param {*} str 
 */


var isString = exports.isString = function isString(str) {
  return Object.is(_toString.call(str), '[object String]');
};