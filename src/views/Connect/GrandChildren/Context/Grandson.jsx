/**
 * 孙子组件（或更深层级的后代组件）
 */
import React, { Component } from 'react'


/**
 * 孙子组件不用context，就需要继续从上层Child去拿到props.theme
 */
// class Grandson extends Component {
//   render() {
//     return <div>
//       孙子组件的主题是{this.props.theme}
//     </div>
//   }
// }

/**
 * 使用context的孙子组件
 */
import ThemeContext from './ThemeContext';
class Grandson extends Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 'light'
  // static contextType = ThemeContext
  render() {
    return <div>
      孙子组件的主题是{this.context}
    </div>
  }
}
// 另外一种写法，这种写法就不要上面的 static contextType = ThemeContext 了
Grandson.contextType = ThemeContext
export default Grandson