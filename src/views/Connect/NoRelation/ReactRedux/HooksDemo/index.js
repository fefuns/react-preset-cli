import React, { useState } from 'react'

function Son1(props) {
  return (
    <>
      <h2>兄弟1：显示number</h2>
      <p>兄弟1接收的number: {props.number}</p>
    </>
  )
}
function Son2(props) {
  return (
    <>
      <h2>兄弟2：需要去改变兄弟1的number</h2>
      <input type='number' onChange={props.onChange} />
    </>
  )
}

function Father() {
  const [number, setNumber] = useState(0)
  function handleChange(e) {
    setNumber(e.target.value)
  }
  return (
    <>
      <h1>如果是兄弟组件之间的传递，则父组件作为中间层来实现数据的互通，通过使用父组件传递</h1>
      <p>父组件number: {number}</p>
      <Son1 number={number} onChange={handleChange} />
      <Son2 number={number} onChange={handleChange} />
    </>
  )
}

export default Father
