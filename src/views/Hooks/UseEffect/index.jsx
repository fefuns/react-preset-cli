import React, { useEffect, useState } from 'react'

const LifeCycles = () => {
  const [count, setCount] = useState(0)
  /**
   * 模拟componentDidMount: 第二个参数是空数组的时候，就只会首次加载打印一次
   */
  // useEffect(() => {
  //   console.log('在此发送一个 ajax 请求')
  // }, [])


  /**
   * 模拟componentDidUpdate：
   * 1 没有第二个参数的时候，首次加载会打印一次，每次点击修改count 也会打印。
   * 2.第二个参数有具体的依赖哪个state的时候
   */
  // useEffect(() => {
  //   console.log('在此发送一个 ajax 请求')
  // })
  // useEffect(() => {
  //   console.log(`在此发送一个 ajax 请求${count}`)
  // }, [count])

  /**
   * 模拟 componentWillUnmount
   * useEffect中第一个为函数的参数中返回一个函数。
   */
  useEffect(() => {
    let timer = window.setInterval(() => {
      console.log(Date.now())
    }, 1000)
    return () => {
      window.clearInterval(timer)
    }
  }, [])
  /**
   * 【特别注意】
   * 当第二个参数为空数组的时候，本意是想着
   */
  useEffect(() => {
    console.log(1,`加载与更新阶段执行`)
    return () => {
      console.log(2, `卸载阶段执行？对，但不完全是。不仅仅只发生在卸载阶段，而是如果props发生了变化，也会打印2。所以准确的说，返回的函数，会在下一次effect执行之前被执行`)
    }
  })

  function handleClick(){
    setCount(count + 1)
  }
  return <div>
    <p>你点击了{count}次</p>
    <button onClick={handleClick}>点击改变count</button>
  </div>
}

export default LifeCycles
