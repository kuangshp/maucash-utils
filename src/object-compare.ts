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

import { isObject } from './data-type';

/**
 * @Description: 对象比较的方法
 * @param {obj1}
 * @param {obj2}
 * @param {isDeep} 默认是浅比较
 * @return: boolean
 */
export const objectEqual = (
  obj1: { [x: string]: any },
  obj2: { [x: string]: any; hasOwnProperty?: any },
  isDeep = false,
): boolean => {
  let flag = true;
  if (!isObject(obj1)) {
    throw new TypeError(`${obj1}不是对象`);
  }
  if (!isObject(obj2)) {
    throw new TypeError(`${obj2}不是对象`);
  }
  // 比较两个对象内存地址
  if (Object.is(obj1, obj2)) {
    flag = true;
  }
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (!Object.is(key1.length, key2.length)) {
    flag = false;
  }

  for (let key of key1) {
    if (isDeep) {
      if (obj2.hasOwnProperty(key)) {
        if (isObject(obj1[key]) && isObject(obj2[key])) {
          return objectEqual(obj1[key], obj2[key]);
        }
      } else {
        flag = false;
      }
    } else {
      if (obj2.hasOwnProperty(key)) {
        if (isObject(obj1[key])) {
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
