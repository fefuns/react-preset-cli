import React, {useState} from 'react';

// 子组件 class 写法
// class Son extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>父组件向子组件传递：子组件通过props接收父组件传递过来的参数</h1>
//         <p>子组件接收的number: {this.props.number}</p>
//         <input type="number" onChange={this.props.onChange}/>
//       </>
//     )
//   }
// }
// // 父组件 class 写法
// class Father extends React.Component {
//   state = {
//     number: 0
//   }
//   handleChange = (e) => {
//     this.setState({
//       number: e.target.value
//     })
//   }
//   render() {
//     return (
//       <>
//         <h1>子组件向父组件传递：父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值</h1>
//         <p>父组件number: {this.state.number}</p>
//         <Son number={this.state.number} onChange={this.handleChange}/>
//       </>
//     )
//   }
// }

function Son(props) {
  return (
    <>
      <h1>父组件向子组件传递：子组件通过props接收父组件传递过来的参数</h1>
      <p>子组件接收的number: {props.number}</p>
      <input type="number" onChange={props.onChange}/>
    </>
  )
}

function Father() {
  const [number, setNumber] = useState(0);
  function handleChange(e) {
    setNumber(e.target.value)
  }
  return (
    <>
      <h1>子组件向父组件传递：父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值</h1>
      <p>父组件number: {number}</p>
      <Son number={number} onChange={handleChange}/>
    </>
  )
}

export default Father