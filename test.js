const maucash = require('./dist');

let obj1 = {
  name: '哈哈',
  age: 20,
  location: {
    x: 200,
    y: 200,
  }
}
let obj2 = {
  name: '哈哈',
  age: 20,
  location: {
    x: 100,
    y: 200,
  }
}

console.log(maucash.objectEqual(obj1, obj2, true));