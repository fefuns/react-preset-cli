import React, { Component } from 'react'

/**
 * 高阶函数（Higher-order function），至少满足下列一个条件的函数
 * - 接受一个或多个函数作为输入
 * - 输出一个函数
 * 在React中，高阶组件即接受一个或多个组件作为参数并且返回一个组件，本质也就是一个函数，并不是一个组件
 */


/**
 * 例如，我有很多组件都需要有一个公共的功能，需要获取到当前鼠标的x,y坐标，那就可以通过高阶组件来实现这种共用逻辑的抽离。
 * 在实际应用中，常用用于与核心业务无关但又在镀铬模块使用的功能，如权限控制，日志记录，数据校验，异常处理，统计上报等，另外 redux 中的 connect 其实也是一个高阶组件
 */

const withMouse = (WrappedComponent) => {
  class withMouseComponent extends Component {
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    render() {
      return (
        <div style={{ height: 'calc(100vh - 160px)', background: '#f90' }} onMouseMove={this.handleMouseMove}>
          {/* 1. 透传所有的 props 2. 增加mouse属性 */}
          <WrappedComponent {...this.porps} mouse={this.state} />
        </div>
      )
    }
  }
  return withMouseComponent;
}

const App = (props) => {
  const { x, y } = props.mouse // 接收mouse属性
  return (
    <div style={{ height: 'calc(100vh - 160px)' }}>
      参考文章： https://zhuanlan.zhihu.com/p/31267131
      <h1>鼠标的位置是({x}, {y})</h1>
      <div>
        我们写的纯函数组件只负责处理展示，很多时候会发现，由于业务需求，组件需要被“增强”，例如响应浏览器事件等。如果只有一两个组件我们大可以全部重写为class形式，但如果有许多组件需要进行相似或相同的处理（例如都响应浏览器窗口改变这个事件）时，考虑到代码的复用性，很容易想到用函数处理，HOC也正是为了解决这样的问题而出现的。<br /><br />
        HOC最大的特点就是：接受一个组件作为参数，返回一个新的组件。 <br /> <br />
        优点：<br /><br />
        <ul>
          <li>支持ES6，光这一项就战胜了mixins</li>
          <li>复用性强，HOC是纯函数且返回值仍为组件，在使用时可以多层嵌套，在不同情境下使用特定的HOC组合也方便调试。</li>
          <li>同样由于HOC是纯函数，支持传入多个参数，增强了其适用范围。</li>
        </ul>
        <br />
        <br />
        缺点：<br /><br />
        <ul>
          <li>当有多个HOC一同使用时，无法直接判断子组件的props是哪个HOC负责传递的。</li>
          <li>重复命名的问题：若父子组件有同样名称的props，或使用的多个HOC中存在相同名称的props，则存在覆盖问题，而且react并不会报错。当然可以通过规范命名空间的方式避免。</li>
          <li>在react开发者工具中观察HOC返回的结构，可以发现HOC产生了许多无用的组件，加深了组件层级</li>
          <li>同时，HOC使用了静态构建，即当AppWithMouse被创建时，调用了一次withMouse中的静态构建。而在render中调用构建方法才是react所倡导的动态构建。与此同时，在render中构建可以更好的利用react的生命周期。</li>
        </ul>
        <br />
        <br />
        <p>而下一章的 render props 的出现解决了以上问题</p>
      </div>
    </div>
  )
}

const AppWithMouse = withMouse(App)
export default AppWithMouse
