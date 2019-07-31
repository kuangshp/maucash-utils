/**
 * @Description: 对象比较的方法
 * @param {obj1}
 * @param {obj2}
 * @param {isDeep} 默认是浅比较
 * @return: boolean
 */
export declare const objectEqual: (obj1: {
    [x: string]: any;
}, obj2: {
    [x: string]: any;
    hasOwnProperty?: any;
}, isDeep?: boolean) => boolean;
