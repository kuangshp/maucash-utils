"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectEqual = undefined;

var _dataType = require("./data-type");

/*
 * @Description:对象的比较
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @LastEditors: 水痕
 * @Date: 2019-05-06 11:34:41
 * @LastEditTime: 2019-05-06 13:53:27
 */

/**
 * @Description: 对象比较的方法
 * @param {obj1} 
 * @param {obj2} 
 * @param {isDeep} 默认是浅比较
 * @return: boolean
 */
var objectEqual = exports.objectEqual = function objectEqual(obj1, obj2) {
  var isDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var flag = true;

  if (!(0, _dataType.isObject)(obj1)) {
    throw new TypeError("".concat(obj1, "\u4E0D\u662F\u5BF9\u8C61"));
  }

  if (!(0, _dataType.isObject)(obj2)) {
    throw new TypeError("".concat(obj2, "\u4E0D\u662F\u5BF9\u8C61"));
  } // 比较两个对象内存地址


  if (Object.is(obj1, obj2)) {
    flag = true;
  }

  var key1 = Object.keys(obj1);
  var key2 = Object.keys(obj2);

  if (!Object.is(key1.length, key2.length)) {
    flag = false;
  }

  var _arr = key1;

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (isDeep) {
      if (obj2.hasOwnProperty(key)) {
        if ((0, _dataType.isObject)(obj1[key]) && (0, _dataType.isObject)(obj2[key])) {
          return objectEqual(obj1[key], obj2[key]);
        }
      } else {
        flag = false;
      }
    } else {
      if (obj2.hasOwnProperty(key)) {
        if ((0, _dataType.isObject)(obj1[key])) {
          continue;
        }
      }

      if (!obj2.hasOwnProperty(key) || obj1[key] != obj2[key]) {
        flag = false;
      }
    }
  }

  return flag;
};