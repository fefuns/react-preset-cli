
import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);
  // const userInfo = {name: 'fefuns', age} // 如果是这样写的话，改变count同样会去触发子组件更新，说明有些情况下，光靠memo包裹子组件还不够
  // const userInfo = useMemo(() => ({name: 'fefuns', age}), []); // 如果是这样写的话，改变age也不能触发子组件更新了，说明第二个参数依赖项还是得有，不然改了age也不会改这个userInfo
  const userInfo = useMemo(() => ({name: 'fefuns', age}), [age]); // 用useMemo缓存数据，并根据age依赖项来改变。
  
  console.log('父组件渲染', count, age)
  function changeCount() {
    setCount(count + 1)
  }
  function changeAge() {
    setAge(age + 1)
  }
  // function onChange(e) {
  //   console.log(e.target.value)
  // }
  const onChange = useCallback(e => {
    console.log(e.target.value)
  }, [])
  return <>
    父组件state改变了，子组件也会无条件重新渲染，哪怕子组件完全不需要依赖父组件的props <br />

    <button onClick={changeCount}>改变父组件的state-count</button>
    <br />
    count的值为{count}
    <br />
    <button onClick={changeAge}>改变年龄</button>
    <br />
    memo的作用是让你的子组件只在相关的props改变的时候才去重新渲染子组件。如果改变的是父组件本身的，且与子组件完全无关的属性，就不去重新渲染子组件
    <br />
    <Child userInfo={userInfo} onChange={onChange}/>
  </>
}