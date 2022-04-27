import React, { useEffect, useState } from 'react';

export default function App() {
  const [obj, setObj] = useState({a: 1})
  useEffect(() => {
    setObj({a: 2})
    console.log(obj.a)
  // }, [obj]) // 当useEffect第二个参数是一个引用类型的时候，会造成死循环
  }, [obj.a])
  return <>
  <h1>坑3：当useEffect第二个参数是一个引用类型的时候，会造成死循环</h1></>
}