import React, { memo } from 'react';

function Child({ userInfo, onChange }) {
  console.log('子组件渲染', userInfo)
  return <div>
    子组件，用户名{userInfo?.name}, 年龄{userInfo?.age}
    <br />
    子组件回调函数与父组件通信
    <input type="text" onChange={onChange} />
  </div>
}
// export default Child
export default memo(Child)