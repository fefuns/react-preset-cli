import React, { useState } from 'react';

// 子组件
function Child({ userInfo }) {
  // render: 初始化name 为 fefuns
  // re-render: 只恢复初始化的 fefuns，不会再重新设置新的值，只能用 setName修改
  const [name] = useState(userInfo.name)
  return <div>
    <p>子组件接收的props name: {userInfo.name}</p>
    <p>子组件自身的state name: {name}</p>
  </div>
}
export default function App() {
  const [name, setName] = useState('fefuns');
  const userInfo = { name }
  function changeName() {
    setName(name + 'a')
  }
  return <>
    <h1>hooks坑1：useState初始化值，只有第一次有效</h1>
    <button onClick={changeName}>改变父组件userInfo中的name</button>
    <Child userInfo={userInfo}/>
  </>
}