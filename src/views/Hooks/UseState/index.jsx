import React, { useState } from 'react'

/**
 * 以前的 class 组件
 * 1. 大型组件很难拆分和重构，很难测试（即class不易拆分）
 * 2. 相同业务逻辑，分散到各个方法中，逻辑混乱（比如加载数据可能同时存在componentDidMount和componentDidUpdate中，同样的一个事件绑定和解绑分别在componentDidMount 和 componentWillUnmount中）
 * 3. 复用逻辑变得复杂，如 Mixins、HOC、Render Prop
 */
// class List1 extends Component {
//   render() {
//     const { list } = this.props
//     return (
//       <ul>
//         {list.map(item => (<li key={item.id}>
//           {item.title}
//         </li>))}
//       </ul>
//     )
//   }
// }
/**
 * 以前的函数组件
 * 1. 没有组件实例
 * 2. 没有生命周期
 * 3. 没有 state 和 setState, 只能接收 props，因为是一个纯函数，执行完即销毁，没法存储 state
 */
// function List2(props) {
//   const { list } = props;
//   return <ul>
//     {list.map(item => (<li key={item.id}>
//       {item.title}
//     </li>))}
//   </ul>
// }

const ClickCounter = () => {
  // 数组解构
  const [count, setCount] = useState(0)
  // 等同于
  // const arr = useState(0)
  // const count = arr[0]
  // const setCount = arr[1]
  const handleClick = () => {
    setCount(count + 1)
  }
  return <div>
    <p>你点击了{count}次</p>
    <button onClick={handleClick}>点击</button>
  </div>
}

export default ClickCounter
