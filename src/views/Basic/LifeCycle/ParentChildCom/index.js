import React, { Component } from 'react'
import { Button } from 'antd'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
    console.log('父-constructor')
    this.state = {
      count: 0,
      showChild: true,
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('父-getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('父-componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('父-shouldComponentUpdate', nextProps, nextState)
    // 不要依靠这个生命周期来防止渲染，因为这可能导致错误。更多的去考虑使用内置的 PureComponent
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('父-getSnapshotBeforeUpdate', prevProps, prevState)
    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('父-componentDidUpdate', prevProps, prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('父-componentWillUnmount')
  }
  render() {
    console.log('父-render()')
    const { count, showChild } = this.state
    return (
      <div>
        <h3>父组件</h3>
        <Button onClick={this.changeCount}>改变传给子组件的count</Button>
        <br />
        <br />
        <Button onClick={this.toggleShowChild}>卸载/挂载子组件</Button>
        {showChild ? <Child count={count} key={count} /> : null}
      </div>
    )
  }
  changeCount = () => {
    let { count } = this.state
    this.setState({
      count: ++count,
    })
  }
  toggleShowChild = () => {
    let { showChild } = this.state
    this.setState({
      showChild: !showChild,
    })
  }
}

export default Parent
