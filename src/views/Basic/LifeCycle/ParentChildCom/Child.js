import React, { Component } from 'react'
import { Button } from 'antd'

class Child extends Component {
  constructor(props) {
    super(props)
    console.log('子-constructor')
    this.state = {
      counter: 0,
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('子-getDerivedStateFromProps')
    /**
     * 这里有个比较坑的地方，很多文章都是让你这么写，本意是让props改变count的时候，都要重置一下子组件的counter值，但是这种方式就不能子组件自己去改变counter了。
     * 更合理的方式应该是 当你的父组件 count 改变的时候，我就把子组件的 counter 重置到和 count一样，但是当子组件自己去更新counter的时候，我需要优先以子组件自身的counter为准
     * 所以个人以为，如果实在要用这个生命周期，应该是用下面未注释的方式来写。并且需要在父组件引用子组件的地方  加上一个 key 属性
     * 但是这样话说回来，我为什么不直接在 constuctor 里面去直接写
     * this.state = {
     *  counter: props.count
     * }
     * 呢？个人感觉这个生命周期非常鸡肋，尽量不用 https://www.jianshu.com/p/558fb92a12dc
     */
    // if(props.count !== state.counter) {
    //   return {
    //     counter: props.count
    //   }
    // }
    // return null

    return {
      counter: state.counter || props.count,
    }
  }
  componentDidMount() {
    console.log('子-componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('子-shouldComponentUpdate', nextProps, nextState)
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('子-getSnapshotBeforeUpdate', prevProps, prevState)
    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('子-componentDidUpdate', prevProps, prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('子-componentWillUnmount')
  }
  render() {
    console.log('子-render()')
    const { count } = this.props
    const { counter } = this.state
    return (
      <div>
        <h3>子组件</h3>
        <p>父组件传过来的属性 count ： {count}</p>
        <p>子组件自身状态 counter ： {counter}</p>
        <Button onClick={this.changeCounter}>改变自身状态 counter</Button>
      </div>
    )
  }
  changeCounter = () => {
    let { counter } = this.state
    this.setState({
      counter: ++counter,
    })
  }
}

export default Child
