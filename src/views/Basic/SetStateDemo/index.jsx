import React, { Component } from 'react'
import { Button } from 'antd'

class SetStateDemo extends Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    obj: {
      a: 1
    },
    merge: 0,
  }
  componentDidMount() {
    this.setState({
      count: 1,
    })
    console.log(this.state.count)  // 0 说明在组件生命周期中，setState是异步的。执行完后，不能立即拿到改变后的结果
    document.querySelector('#btn').addEventListener('click', this.bodyClickHandler)
  }
  componentWillUnmount() {
    document.querySelector('#btn').removeEventListener('click', this.bodyClickHandler)
  }
  render() {
    return <div>
      <h2>1. setState必须使用不可变值</h2>
      <p>{this.state.count}</p>
      <Button type="primary" onClick={this.changeCount}>累加</Button>
      <br />
      <br />
      <Button type='primary' onClick={this.changeList}>不可变值-数组</Button>
      {this.state.list.map(item => <p key={item}>{item}</p>)}
      <Button type='primary' onClick={this.changeObj}>不可变值-对象</Button>
      <br />
      {JSON.stringify(this.state.obj)}
      <br />
      <br />
      <br />
      <br />
      <h2>2. setState可能是同步也有可能是异步</h2>
      <Button type='primary'>异步的情况1: 组件生命周期内</Button>
      <br />
      <br />
      <Button type='primary' onClick={this.changeAsync2}>异步的情况2: react合成事件内</Button>
      <br />
      <br />
      <Button type='primary' onClick={this.changeSync1}>同步的情况1： setState在setTimeout函数里</Button>
      <br />
      <br />
      <Button type='primary' id='btn'>同步的情况2： setState在原生Dom事件回调函数里</Button>
      <br />
      <br />
      <Button type='primary' onClick={this.realSync}>其实本质还是同步</Button>
      <p>因为说它是异步吧，它既不属于微任务也不属于宏任务，哪怕你放到微任务代码后面，它依然会执行时机比微任务还要早。只不过被react处理成看起来像异步的样子, 因为要考虑性能，多次state修改，只进行一次DOM渲染。日常说的“异步”是不严谨的，但沟通成本低。</p>
      <br />
      <br />
      <br />
      <br />
      <h2>3. setState可能会被合并</h2>
      <Button type='primary' onClick={this.mergeMulti}>传入对象，会被合并</Button>
      <p>（基于上面“异步”的情况讨论，也就是组件生命周期内或者react合成事件内考虑。同步的情况是不会被合并的）</p>
      <p>merge: {this.state.merge}</p>
      <p>merge初始值为0，连续三次setState + 1之后，发现并没有变成3， 而是1，搞得像是三次被合并成了一次一样</p>
      <Button type='primary' onClick={this.mergeMulti2}>传入函数，不会被合并</Button>
    </div>
  }
  changeCount = () => {
    /**
     * 错误的用法
     * 哪怕你发现this.state.count打印的确是累加了，但是页面并没有变化
     */
    // this.state.count++ 
    // console.log(this.state.count) 
    /**
     * 1. setState 必须使用不可变值。不可变值也就是说在操作state的时候，不能直接去改写state的值。
     * 也就是说假如state是一个数组的时候，所有的数组会改变原数组的方法都不能直接去用。比如push,pop, splice等这些会改变原数组的方法。
     * 不能直接  this.state.list.push(5), 想添加数组，应该要用 this.state.list.concat(100) 或者 [...this.state.list, 100]
     * 
     */
    this.setState({
      count: this.state.count + 1
    })
  }
  changeList = () => {
    /**
     * 错误的用法
     */
    // this.state.list.push(4)
    // this.state.list.pop()
    // this.state.list.splice(0,1,1)
    // 正确的用法
    this.setState({
      // list: this.state.list.concat(4)
      // list: [...this.state.list, 4]
      // list: this.state.list.slice(0, 2),
      list: this.state.list.filter(item => item > 1)
    })
  }
  changeObj = () => {
    /**
     * 错误的用法
     */
    // this.state.obj.a = 2
    // this.state.obj.b = 1
    // 正确的用法
    this.setState({
      // obj: Object.assign({}, this.state.obj1, {a: 2}),
      obj: { ...this.state.obj, a: 2 }
    })
  }
  changeAsync2 = () => {
    this.setState({
      count: 2
    })
    console.log(this.state.count) // 不是2
  }
  changeSync1 = () => {
    setTimeout(() => {
      this.setState({
        count: 3
      })
      console.log(this.state.count) // 3
    }, 0)
  }
  bodyClickHandler = () => {
    this.setState({
      count: 4,
    })
    console.log(this.state.count)
  }
  realSync = () => {
    console.log('---start---')
    Promise.resolve().then(() => console.log('promise then'))
    this.setState({
      count: 5,
    }, () => {
      console.log('state', this.state.count)
    })
    console.log('---end---')
    /**
     * ---start---
     * ---end---
     * state 5
     * promise then
     * 
     * 根据事件轮询机制，异步里面分宏任务和微任务，宏任务不管你是不是先注册，执行时机都要比微任务要晚，而微任务就只看哪个先注册，就先打印哪个。
     * 也就是说，如果setState真的是异步任务的话，那这个 state 不管它是宏任务还是微任务，都应该在 promise then 后面打印才对。
     * 可实际上并不是预期的打印顺序
     * 这说明：
     * setState本质还是同步，只不过让React做成了异步的样子
     * 因为要考虑性能，多次state渲染，只进行一次DOM渲染
     */
  }
  mergeMulti = () => {
    this.setState({
      merge: this.state.merge + 1
    })
    this.setState({
      merge: this.state.merge + 1
    })
    this.setState({
      merge: this.state.merge + 1
    })
  }
  mergeMulti2 = () => {
    this.setState((prevState, props) => {
      return {merge: prevState.merge + 1}
    })
    this.setState((prevState, props) => {
      return {merge: prevState.merge + 1}
    })
    this.setState((prevState, props) => {
      return {merge: prevState.merge + 1}
    })
  }
}

export default SetStateDemo
