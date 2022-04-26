import React from 'react'
import PropTypes from 'prop-types'

class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: 'calc(100vh - 160px)', background: '#f90' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

const App = () => (
  <div style={{ height: 'calc(100vh - 160px)' }}>
    <Mouse render={({ x, y }) => (
      <>
        <h1>鼠标的位置是 ({x}, {y})</h1>
        <p>render props 和 hoc 一样，都是react用来处理公共逻辑的抽离。核心思想是通过一个函数将class组件的state作为props传递给纯函数组件 <br /><br />
          核心分析: <br /><br />
          从demo中很容易看到，新建的Mouse组件的render方法中返回了 <code dangerouslySetInnerHTML={{__html: '{this.props.render(this.state)}'}}></code>这个函数，将其state作为参数传入其的props.render方法中，调用时直接取组件所需要的state即可。
          优势：<br /><br />
          <ul>
            <li>支持ES6，和HOC一样</li>
            <li>不用担心prop的命名问题，在render函数中只取需要的state</li>
            <li>相较于HOC，不会产生无用的空组件加深层级</li>
            <li>最重要的是，这里的构建模型是动态的，所有改变都在render中触发，能更好的利用react的生命周期。</li>
          </ul>
        </p>
      </>
    )} />
  </div>
)

export default App;