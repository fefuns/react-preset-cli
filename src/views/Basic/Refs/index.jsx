import React, { Component, useRef, createRef, useEffect } from 'react'

// 3. 如果是函数式组件，需要用 useRef() 方法
const RefDemo3 = () => {
  const ref3 = useRef();
  useEffect(() => {
    console.log('ref3', ref3.current)
  }, [])
  return (
    <div ref={ref3}>demo-ref3</div>
  )
}

export class RefsDemo extends Component {
  ref1 = createRef();
  ref2 = createRef();
  componentDidMount() { 
    console.log('ref1', this.refs.ref1)  // 1. 通过传入字符串来实现
    console.log('ref2', this.ref2.current) // 2. 通过传入对象来实现  
   }
  render() {
    return (
      <div>
        <h1>React 中的 Refs提供了一种方式，允许我们访问 DOM节点或在 render方法中创建的 React元素。主要有三种方式来创建</h1>
        <h2>1. 传入字符串，使用时通过 this.refs.xxx 来获取对应的元素。但是在react的严格模式下会有警告信息：Warning: A string ref, "ref1", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref</h2>
        <div ref="ref1">demo-ref1</div>
        <h2>2. 传入对象，对象是通过 React.createRef() 方式创建出来，使用时获取到创建的对象中存在 current 属性就是对应的元素</h2>
        <div ref={this.ref2}>demo-ref2</div>
        <h2>3. 传入hook，hook是通过 useRef() 方式创建，使用时通过生成hook对象的 current 属性就是对应的元素</h2>
        <RefDemo3/>
      </div>
    )
  }
}


export default RefsDemo