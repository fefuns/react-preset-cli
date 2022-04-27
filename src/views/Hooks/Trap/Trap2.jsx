import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect...', count)
    // 定时任务
    const timer = setInterval(() => {
      console.log('setInterval...', count)
      setCount(count + 1)
    }, 1000)
    // 清除定时任务
    return () => clearInterval(timer)
  // }, []) // 如果是这种方式，会报错 React Hook useEffect has a missing dependency: 'count'. Either include it or remove the dependency array. You can also do a functional update 'setCount(c => ...)' if you only need 'count' in the 'setCount' call  react-hooks/exhaustive-deps
  }, [count])
  return <>
  <h1>坑2：useEffect第二个参数为空的时候，不能直接访问到state，会报错</h1>
  <p> 本意是想在didMount的时候，去开启一个定时器，让count去每隔一秒加1，然后willUnmout的时候清除定时器，但是这种方式会直接报错，需要把count依赖加上。或者直接不要第二个参数</p>
  count: {count}</>
}