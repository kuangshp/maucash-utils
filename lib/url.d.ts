/**
 * 从url中提取key出来
 * @param {*} url
 * @param {*} key
 * console.log(getUrlParam2('/cat/?token=aa', 'token')) ---> 输出aa
 */
export declare const getUrlParam: (url: {
    replace: (arg0: RegExp, arg1: (_$0: any, $1: string | number, $2: any) => void) => void;
}, key: string) => string;
