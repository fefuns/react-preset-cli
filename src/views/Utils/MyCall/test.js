import 'utils/tools'

const fn = function (a, b, c) {
  console.log('this', this)
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
}
console.log('fn')
fn('a', 'b', 'c')
console.log('1. call也可以改变this的指向，但是它和bind不一样的是，它返回的是函数调用，立即执行')
fn.call({ obj: 1 }, 'a1', 'b1', 'c1')
fn.myCall({ obj: 1 }, 'a1', 'b1', 'c1')
console.log('2. 如果call 的第一个参数是值类型，非严格模式下，就会返回 这个值的包装对象')
fn.call(1)
fn.myCall(1)
console.log(
  '3. 如果 call的第一个参数是空，非严格模式下，就会默认指向当前环境的全局对象，浏览器环境中是Window，node中是Global'
)
fn.call()
fn.myCall()
