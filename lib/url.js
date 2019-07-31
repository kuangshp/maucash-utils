"use strict";
/*
 * @Description: 处理url的方法
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @Date: 2019-07-05 14:51:33
 * @LastEditors: 水痕
 * @LastEditTime: 2019-07-31 14:52:24
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 从url中提取key出来
 * @param {*} url
 * @param {*} key
 * console.log(getUrlParam2('/cat/?token=aa', 'token')) ---> 输出aa
 */
exports.getUrlParam = function (url, key) {
    var result;
    var Oparam = {};
    url.replace(/[\?&]?(\w+)=(\w+)/g, function (_$0, $1, $2) {
        Oparam[$1] === void 0
            ? (Oparam[$1] = $2)
            : (Oparam[$1] = [].concat(Oparam[$1], $2));
    });
    key === void 0 || key === ''
        ? (result = Oparam)
        : (result = Oparam[key] || '');
    return result;
};
