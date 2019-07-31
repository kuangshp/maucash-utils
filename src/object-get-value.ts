import { isObject, isString } from './data-type';
/**
 * 从对象中获取值的工具方法
 * @param {*} obj 对象
 * @param {*} expr 字符串
 */
export const objectGetVal = (obj: { [propName: string]: any; }, expr: { split: (arg0: string) => { reduce: (arg0: (prev: any, next: any) => any, arg1: any) => void; }; }) => {
  if (!isObject(obj)) {
    throw new Error(`${obj}不是对象`);
  }
  if (!isString(expr)) {
    throw new Error(`${expr}必须是字符串`);
  }
  return expr.split('.').reduce((prev, next) => {
    if (prev) {
      return prev[next]
    } else {
      return undefined;
    }
  }, obj)
};