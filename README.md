### 一、使用方法
* 1、下载包

  ```js
  npm install maucash-utils
  ```

* 2、根据需要导入想要的包

  ```js
  import {} from 'maucash-utils'
  ```

### 二、数据类型的判断

* 1、`isString`
* 2、`isObject`
* 3、`isRegExp`
* 4、`isValidArrayIndex`

### 三、从对象中提取数据

* 1、`objectGetVal`
* 2、使用方式

  ```js
  let dataJson = {
    'aa': {
      'bb': {
        'cc': {
          'dd': {
            'ee': '你好'
          }
        }
      }
    }
  }
  console.log(objectGetVal(dataJson, 'aa.bb.cc.dd.ee'))
  ```
