// class 是 function 的语法糖

import { myNew } from 'utils/tools'

// class Foo {
//   constructor(name) {
//     this.name = name
//     this.city = '北京'
//   }
//   getName() {
//     return this.name
//   }
// }

function Foo(name) {
  this.name = name
  this.city = '北京'
}
Foo.prototype.getName = function () {
  return this.name
}

const f = new Foo('fefuns')
const fa = myNew(Foo, 'fefuns')
console.log(
  '1. 如果构造函数自己没有返回对象，new操作符就会返回一个新对象。这个新对象里面会有这个构造函数里面的属性和方法'
)
console.log(f)
console.log(fa)
function Foo1(name) {
  this.name = name
  this.city = '武汉'
  return {
    a: 1,
  }
}
Foo1.prototype.getName = function () {
  return this.name
}
const f1 = new Foo1('fefuns')
const fa1 = new Foo1('fefuns')
console.log('2. 如果构造函数自己返回了对象，new操作符就会直接返回构造函数里返回的那个对象')
console.log(f1)
console.log(fa1)
