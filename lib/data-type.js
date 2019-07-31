"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _toString = Object.prototype.toString;
/**
 * 判断是否为对象
 * @param {Object} obj
 */
exports.isObject = function (obj) {
    return Object.is(_toString.call(obj), '[object Object]');
};
/**
 * 判断是否为正则
 * @param {*} v
 */
exports.isRegExp = function (v) {
    return Object.is(_toString.call(v), '[object RegExp]');
};
/**
 * 判断是否为有效的序列
 * @param {*} val
 */
exports.isValidArrayIndex = function (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
};
/**
 * 判断是否为字符串
 * @param {*} str
 */
exports.isString = function (str) {
    return Object.is(_toString.call(str), '[object String]');
};
/**
 * 判断是否为promise对象
 * @param {*} obj
 */
exports.isPromise = function (obj) {
    return !!obj && (Object.is(typeof obj, 'object') || Object.is(typeof obj, 'function')) && (Object.is(typeof obj.then, 'function'));
};
