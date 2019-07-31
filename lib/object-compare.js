"use strict";
/*
 * @Description:对象的比较
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @LastEditors: 水痕
 * @Date: 2019-05-06 11:34:41
 * @LastEditTime: 2019-07-31 14:47:12
 */
Object.defineProperty(exports, "__esModule", { value: true });
var data_type_1 = require("./data-type");
/**
 * @Description: 对象比较的方法
 * @param {obj1}
 * @param {obj2}
 * @param {isDeep} 默认是浅比较
 * @return: boolean
 */
exports.objectEqual = function (obj1, obj2, isDeep) {
    if (isDeep === void 0) { isDeep = false; }
    var flag = true;
    if (!data_type_1.isObject(obj1)) {
        throw new TypeError(obj1 + "\u4E0D\u662F\u5BF9\u8C61");
    }
    if (!data_type_1.isObject(obj2)) {
        throw new TypeError(obj2 + "\u4E0D\u662F\u5BF9\u8C61");
    }
    // 比较两个对象内存地址
    if (Object.is(obj1, obj2)) {
        flag = true;
    }
    var key1 = Object.keys(obj1);
    var key2 = Object.keys(obj2);
    if (!Object.is(key1.length, key2.length)) {
        flag = false;
    }
    for (var _i = 0, key1_1 = key1; _i < key1_1.length; _i++) {
        var key = key1_1[_i];
        if (isDeep) {
            if (obj2.hasOwnProperty(key)) {
                if (data_type_1.isObject(obj1[key]) && data_type_1.isObject(obj2[key])) {
                    return exports.objectEqual(obj1[key], obj2[key]);
                }
            }
            else {
                flag = false;
            }
        }
        else {
            if (obj2.hasOwnProperty(key)) {
                if (data_type_1.isObject(obj1[key])) {
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
