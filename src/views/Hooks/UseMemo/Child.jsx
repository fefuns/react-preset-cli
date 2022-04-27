import React, { memo } from 'react';

function Child({ userInfo }) {
  console.log('子组件渲染', userInfo)
  return <div>
    子组件，用户名{userInfo?.name}, 年龄{userInfo?.age}
  </div>
}
// export default Child
export default memo(Child)