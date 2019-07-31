/**
 * 从对象中获取值的工具方法
 * @param {*} obj 对象
 * @param {*} expr 字符串
 */
export declare const objectGetVal: (obj: {
    [propName: string]: any;
}, expr: {
    split: (arg0: string) => {
        reduce: (arg0: (prev: any, next: any) => any, arg1: any) => void;
    };
}) => void;
