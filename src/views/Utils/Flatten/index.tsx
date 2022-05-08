import React, { useEffect } from 'react'
import { flatten, flatten1, flatten2, flatten3 } from 'utils/tools'

export default function GetType() {
  const arr = [1, [2, 3], [4, [5, 6]], [7, [8, [9]]]]
  useEffect(() => {
    console.log(flatten(arr))
    console.log(flatten1(arr))
    console.log(flatten2(arr))
    console.log(flatten3(arr))
  })
  return (
    <>
      <h1>数组扁平化</h1>
    </>
  )
}
