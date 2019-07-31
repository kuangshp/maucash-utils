/**
 * 判断是否为对象
 * @param {Object} obj
 */
export declare const isObject: (obj: {
    [propName: string]: any;
}) => boolean;
/**
 * 判断是否为正则
 * @param {*} v
 */
export declare const isRegExp: (v: any) => boolean;
/**
 * 判断是否为有效的序列
 * @param {*} val
 */
export declare const isValidArrayIndex: (val: number) => boolean;
/**
 * 判断是否为字符串
 * @param {*} str
 */
export declare const isString: (str: any) => boolean;
/**
 * 判断是否为promise对象
 * @param {*} obj
 */
export declare const isPromise: (obj: {
    then: any;
}) => boolean;
