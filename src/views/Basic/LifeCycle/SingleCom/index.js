import React, { Component } from 'react'
import { Button } from 'antd'

class SingleCom extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      count: 0,
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    // 不要依靠这个生命周期来防止渲染，因为这可能导致错误。更多的去考虑使用内置的 PureComponent
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    console.log('render()')
    return (
      <div style={{ height: 2000 }}>
        看控制台打印的单文件生命周期顺序：
        {this.renderJsx()}
        {this.renderArray()}
        {this.renderString()}
        <Button onClick={this.handleUpdate}>更新组件</Button>
      </div>
    )
  }
  renderJsx = () => <p>render函数可以返回JSX</p>
  renderArray = () => [<p key={1}>render函数可以返回数组</p>, <p key={2}>bbb</p>]
  renderString = () => 'render函数可以返回字符串'
  handleUpdate() {
    this.setState({
      count: 2,
    })
  }
}

export default SingleCom
