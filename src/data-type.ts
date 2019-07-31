const _toString = Object.prototype.toString

/**
 * 判断是否为对象
 * @param {Object} obj 
 */
export const isObject = (obj: {[propName: string]: any}) => {
  return Object.is(_toString.call(obj), '[object Object]');
}

/**
 * 判断是否为正则
 * @param {*} v 
 */
export const isRegExp = (v: any) => {
  return Object.is(_toString.call(v), '[object RegExp]');
}

/**
 * 判断是否为有效的序列
 * @param {*} val 
 */
export const isValidArrayIndex = (val: number) => {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * 判断是否为字符串
 * @param {*} str 
 */
export const isString = (str: any) => {
  return Object.is(_toString.call(str), '[object String]');
}

/**
 * 判断是否为promise对象
 * @param {*} obj 
 */
export const isPromise = (obj: { then: any; }) => {
  return !!obj && (Object.is(typeof obj, 'object') || Object.is(typeof obj, 'function')) && (Object.is(typeof obj.then, 'function'));
}