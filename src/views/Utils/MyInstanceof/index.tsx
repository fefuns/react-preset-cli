import React from 'react'
import { myInstanceof } from 'utils/tools'

export default function GetType() {
  return (
    <>
      <h1>手写实现 instanceof</h1>
      <div>
        {myInstanceof(1, Object).toString()} <br />
        {myInstanceof([], Object).toString()}
      </div>
    </>
  )
}
