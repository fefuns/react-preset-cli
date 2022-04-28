import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getStorage } from 'utils'

export default function AuthRoute(props) {
  const { component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      component={props => {
        const loginInfo = getStorage('loginInfo') || {}
        // 有用户名则代表已登录，这里为了简单模拟只是用localStorage的方式，实际业务中应该从redux或者mobx中获取是否已登录的信息
        const isLogged = loginInfo.username || ''
        if (isLogged) {
          // 后端返回的菜单权限列表
          const permissionList = loginInfo.permissionList || []
          // 本地路由配置中meta字段中的authKey，每个菜单对应一个authKey
          const authKey = (rest.meta && rest.meta.authKey) || ''
          /**
           * 是否有权限
           * 1. 本地路由配置中routes/index.js 没有给它设置authKey，则表示该页面登录就可见，比如dashboard这种页面
           * 2. 后端返回的菜单权限列表里有这个字段，就表示你也有这个页面的权限
           */
          const hasAuth = !authKey || permissionList.includes(authKey)
          if (hasAuth) {
            return <Component {...props} />
          } else {
            return <Redirect to='/403' />
          }
        } else {
          return <Redirect to='/login' />
        }
      }}
    ></Route>
  )
}
