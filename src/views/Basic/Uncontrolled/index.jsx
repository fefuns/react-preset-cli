import React, { Component, createRef } from 'react'

/**
 * 1. 受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据
 * 一般需要一个初始状态和一个状态更新事件函数
 */
class ControlledDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'lindaidai' };
  }
  handleChange = e => {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return <input name="username" value={this.state.username} onChange={this.handleChange} />
  }
}
/**
 * 2. 非受控组件：简单来讲，就是不受我们控制的组件
 * 一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态
 * 当需要时，可以使用ref查询DOM并查找当前值
 */
class UncontrolledDemo extends Component {
  inputRef = createRef();
  handleSubmit = (e) => {
    console.log('我们可以获得input内的值为', this.inputRef.current.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input defaultValue="lindaidai" ref={this.inputRef} />
        <input type="submit" value="提交" />
      </form>
    )
  }
}
class ControllDemo extends Component {
  render() {
    return (
      <>
        <h2>1. 受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据 <br />
          一般需要一个初始状态和一个状态更新事件函数</h2>
        <ControlledDemo />
        <h2>2. 非受控组件：简单来讲，就是不受我们控制的组件 <br />
          一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态 <br />
          当需要时，可以使用ref查询DOM并查找当前值</h2>
        <UncontrolledDemo />
        <h2>3. 大部分时候用该用受控组件来实现表单的功能，因为非受控组件它只能做到一次性取值（比如，提交的时候），提交时的验证也是如此。但是很多情况下，可能我们需要根据用户输入的字段实时的去校验是否合法，并且如果不合法的话要禁用提交按钮，又或者是我们要强制规范输入格式等，这都是非受控组件不方便做到的</h2>
      </>
    )
  }
}
export default ControllDemo