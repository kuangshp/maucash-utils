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

/**
 * 从url中提取key出来
 * @param {*} url
 * @param {*} key
 * console.log(getUrlParam2('/cat/?token=aa', 'token')) ---> 输出aa
 */
export const getUrlParam = (
  url: {
    replace: (
      arg0: RegExp,
      arg1: (_$0: any, $1: string | number, $2: any) => void,
    ) => void;
  },
  key: string,
): string => {
  let result: any;
  let Oparam: { [propsName: string]: any } = {};
  url.replace(
    /[\?&]?(\w+)=(\w+)/g,
    (_$0: any, $1: string | number, $2: any) => {
      Oparam[$1] === void 0
        ? (Oparam[$1] = $2)
        : (Oparam[$1] = [].concat(Oparam[$1], $2));
    },
  );
  key === void 0 || key === ''
    ? (result = Oparam)
    : (result = Oparam[key] || '');
  return result;
};
