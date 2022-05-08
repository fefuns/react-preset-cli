import 'utils/tools'

const fn = function (a, b, c) {
  console.log('this', this)
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
}
console.log('fn')
fn('a', 'b', 'c')
// const fn1 = fn.bind({obj: 1}, 'a1', 'b1', 'c1');
const fn1 = fn.myBind({ obj: 1 }, 'a1', 'b1', 'c1')
console.log('1. bind 函数返回一个新的函数，但是不执行。需要后面继续 fn1() 才会执行')
fn1()
// const fn2 = fn.bind({obj: 2}, 'a2');
const fn2 = fn.myBind({ obj: 2 }, 'a2')
console.log('2. bind  函数可以绑定this和部分参数')
fn2('b2', 'c2')
//
const f = (a, b, c) => {
  console.log('this', this)
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
}
console.log('箭头函数中的this')
f()
// const fn3 = f.bind({obj: 3}, 'a3', 'b3', 'c3')
const fn3 = f.myBind({ obj: 3 }, 'a3', 'b3', 'c3')
console.log('3. bind 函数不可以改变箭头函数this的指向')
fn3()
