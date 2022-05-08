import React, { useEffect } from 'react'
import { getArrMax, getArrMax1, getArrMax2 } from 'utils/tools'

export default function GetType() {
  const arr = [1, 11, 2, 65, 12, 110, 468]
  useEffect(() => {
    console.log(getArrMax(arr))
    console.log(getArrMax1(arr))
    console.log(getArrMax2(arr))
  })
  return (
    <>
      <h1>求数组最大值</h1>
    </>
  )
}
