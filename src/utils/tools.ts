/**
 * 获取数据类型
 * @param x
 */
export function getType(x: any): string {
  const originType = Object.prototype.toString.call(x) // '[object String]'、'[object Array]' 等
  return originType.replace('[object', '').replace(']', '').toLowerCase()
}

/**
 * 自定义 instanceof
 * instanceof 原理：
 * 根据原型链
 * [].__proto__ = Array.prototype
 * Array.prototype.__proto__ === Object.prototype
 * Object.protoType__proto__ == null
 * 所以, [] 既是 Array 的实例，也是 Object 的实例
 * [] instanceof Array === true
 * [] instanceof Object === true
 * 手写思路：
 * 需要两个参数，一个是实例，一个是原型，返回一个 布尔值
 * @param instance
 * @param origin
 * @returns
 */
export function myInstanceof(instance: any, origin: any): boolean {
  // 1. undefined == null => true
  // 2. null 和 undefined 不属于任何类型的实例，直接返回 false
  if (instance == null) {
    return false
  }
  const type = typeof instance
  if (type !== 'object' && type !== 'function') {
    // 所有的基础数据类型（值类型）都不属于任何类型的实例 '123' instanceof Number => false
    return false
  }
  let tempInstance = instance // 为了防止修改 instance，先将要检测的实例赋值给一个临时变量
  while (tempInstance) {
    if (tempInstance.__proto__ === origin.prototype) {
      return true
    }
    // 顺着原型链，继续往上找。比如上面 [].__proto 并不会直接等于 Object.prototype。但是[] instanceof Object，又需要返回true。
    tempInstance = tempInstance.__proto__
  }
  return false
}

/**
 * 手写实现 bind 函数
 * - 返回一个新函数，但不执行
 * - 绑定 this 和 部分参数
 * - 如果是箭头函数，无法改变 this，只能改变参数
 * context: bind 传入的this
 * bindArgs: bind 传入的其他参数
 * 比如
 * const fn = function(a, b) {};
 * const fn1 = fn.bind({obj:1}, 'a')。
 * fn1('b')
 *
 * 实现原理：
 * 1. bind函数改变了this指向
 * 2. bind函数是Function.prototype上的方法
 * 3. bind函数的返回值也是函数
 * 4. bind函数调用之后返回的函数的参数也同样接收处理
 */
// @ts-ignore
// eslint-disable-next-line
Function.prototype.myBind = function (context: any, ...bindArgs: any[]) {
  const self = this // 1.获取到原函数
  // 2.返回一个新的函数
  return function (...args: any[]) {
    // 3. bindArgs 是 上面例子中 fn.bind里面的 'a'，args 是 fn1('b') 里面的 b
    const newArgs = bindArgs.concat(args)
    // 返回执行原函数
    return self.apply(context, newArgs)
  }
}

/**
 * 手写实现 call 函数
 * - bind 是返回一个新函数（不执行）, call 和 apply 会立即执行函数
 * - 绑定 this
 * - 传入执行参数
 *
 * 实现原理：
 * 1. 将函数设为对象的方法
 * 2. 执行该函数
 * 3. 删除该对象方法
 * 4. 注意的是this参数可以为null, 为null的时候，视为指向 全局对象。this参数还可以是值类型，为值类型的时候，返回该值类型的包装对象
 */
// @ts-ignore
// eslint-disable-next-line
Function.prototype.myCall = function (context: any, ...args: any[]) {
  if (context == null) {
    context = globalThis // globalThis 在浏览器中是指 Window，在node.js中指 Global
  }
  if (typeof context !== 'object') {
    // eslint-disable-next-line
    context = new Object(context) // 如果第一个参数是值类型，就把它变为值类型的包装对象 fn.call(1) => new Number(1)
  }
  const key = Symbol()
  context[key] = this // this 就是原函数。
  const res = context[key](...args) // 绑定了 this
  delete context[key] // 清理掉 key，防止污染
  return res
}

/**
 * 手写实现 apply
 * apply 和 call 基本一样，只是第二个参数是个数组而已
 */
// @ts-ignore
// eslint-disable-next-line
Function.prototype.myApply = function (context: any, args: any[]) {
  if (context == null) {
    context = globalThis // globalThis 在浏览器中是指 Window，在node.js中指 Global
  }
  if (typeof context !== 'object') {
    // eslint-disable-next-line
    context = new Object(context) // 如果第一个参数是值类型，就把它变为值类型的包装对象 fn.call(1) => new Number(1)
  }
  const key = Symbol()
  context[key] = this // this 就是原函数。
  const res = context[key](args) // 绑定了 this
  delete context[key] // 清理掉 key，防止污染
  return res
}

/**
 * 手写实现  new
 * constructor: 构造函数
 * args: 参数
 * 实现原理：
 * 1. 创建（或者说构造）一个全新的对象
 * 2. 这个新对象会被执行[原型]链接
 * 3. 这个新对象会绑定到函数调用的this
 * 4. 如果构造函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
 */
// <T> ... :T 泛型 定义了什么类型，就返回什么类型
export function myNew<T>(constructor: Function, ...args: any[]): T {
  // 1. 创建一个空对象，继承 constructor 原型
  // const obj = Object.create({});
  // obj.__proto__ = constructor.prototype; 或者直接
  const obj = Object.create(constructor.prototype)
  // 2. 将 obj 作为 this, 执行constructor, 传入参数
  const res = constructor.apply(obj, args)
  // 3. 判断 构造函数返回值是不是一个对象，是对象就直接返回，不是的话就返回创建的新对象
  return typeof res === 'object' ? res : obj
}

/**
 * 数组扁平化
 * 方法1：最简单的方法，直接es6搞定
 */
export function flatten(arr: any[]): any[] {
  return arr.flat(Infinity)
}

/**
 * 方法2： while 循环 + 扩展运算符
 * 首先要知道的是  [].concat(3,4) 等同于 [].concat(...[3,4])
 */
export function flatten1(arr: any[]): any[] {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
/**
 * 方法3：reduce 数组中的每个元素按序执行一个由您提供的 reducer 函数，
 * 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。不改变原数组
 */
export function flatten2(arr: any[]): any[] {
  return arr.reduce(function (prev, current) {
    return prev.concat(Array.isArray(current) ? flatten2(current) : current)
  }, [])
}
/**
 * 方法4： 最原始的方法 for/forEach循环
 */
export function flatten3(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatten3(item))
    } else {
      res.push(item)
    }
  })
  return res
}

/**
 * 找数组的最大值
 * 方法1：Math.max
 */
export function getArrMax(arr: number[]): number {
  // return Math.max.apply(null, arr); // 或者
  return Math.max(...arr)
}
/**
 * 方法2：reduce
 */
export function getArrMax1(arr: number[]): number {
  return arr.reduce(function (prev, current) {
    return current > prev ? current : prev
  })
}
/**
 * 方法3：先排序再找最大值
 * @param arr
 * @returns
 */
export function getArrMax2(arr: number[]): number {
  const sortArr = arr.sort((a, b) => a - b)
  return sortArr[sortArr.length - 1]
}
