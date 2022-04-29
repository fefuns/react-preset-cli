import React, { Component } from 'react'
import Grandson from './Grandson'

/**
 * 子组件不用context，就需要接收props传过来的theme属性，然后继续往下传给孙子组件 Grandson
 */
// class Child extends Component {
//   render() {
//     return <div>
//       <Grandson theme={this.props.theme} />
//     </div>
//   }
// }
/**
 * 使用context的子组件，就不需要通过props一层层的继续往下传给Grandson了
 */
 class Child extends Component {
  render() {
    return <div>
      <Grandson />
    </div>
  }
}

export default Child