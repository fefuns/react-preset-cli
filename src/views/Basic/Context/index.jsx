import React, { Component } from 'react'
import Child from './Child'

/**
 * 顶层组件
 * 假如顶层组件存放着主题相关的参数theme，子组件child需要用这个主题，孙子组件Grandson 也需要用这个主题，如果不用context，就需要像下面这么写，一层层的把 theme 往下传
 */
// class App extends Component {
//   state = {
//     theme: 'light'
//   };
//   render () {
//     return <Child theme={this.state.theme}/>
//   }
// }

/**
 * 使用Context的写法
 */
import ThemeContext from './ThemeContext'

class App extends Component {
  state = {
    theme: 'light',
  };
  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark': 'light'
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.changeTheme}>切换顶级组件主题</button>
        <Child />
      </ThemeContext.Provider>
    )
  }
}

export default App