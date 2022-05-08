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
