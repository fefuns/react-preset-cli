import React, { useEffect, useRef } from 'react'

function UseRef() {
  const btnRef = useRef(null)
  useEffect(() => {
    console.log(btnRef.current) // DOM 节点
  }, [])
  return <div>
    <button ref={btnRef}>click</button>
  </div>
}

export default UseRef