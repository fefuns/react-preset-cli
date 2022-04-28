import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PageLoading from 'components/PageLoading'
// import AuthRoute from 'components/AuthRoute'
import { getStorage } from 'utils'
import routes from 'routes'
import { cloneDeep } from 'lodash'
import { formatRoutes } from 'utils/routerHelper'

// 免登录白名单
const whiteList = ['/login', '/register', '/404', '/403', '/500']

// 非重定向的页面路由
function PageRoute(pageConfig) {
  const { component: RenderComponent, path, ...rest } = pageConfig
  useEffect(() => {
    const {
      meta: { title },
    } = rest || {}
    document.title = title || 'XXX后台管理系统'
    window.scrollTo(0, 0)
  })

  return (
    <Route
      {...rest}
      component={props => {
        // 需要登录的页面
        if (!whiteList.includes(path)) {
          return (
            <Route
              {...rest}
              component={props => {
                const loginInfo = getStorage('loginInfo') || {}
                // 有用户名则代表已登录，这里为了简单模拟只是用localStorage的方式，实际业务中应该从redux或者mobx中获取是否已登录的信息
                const isLogged = loginInfo.username || ''
                // 已登录
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
                    return <RenderComponent {...props} />
                  } else {
                    // 没权限跳转403
                    return <Redirect to='/403' />
                  }
                } else {
                  // 未登录跳转login
                  return <Redirect to='/login' />
                }
              }}
            ></Route>
          )
        } else {
          // 不需要登录的页面
          return <Route component={RenderComponent} {...props} />
        }
      }}
    ></Route>
  )
}
// 渲染路由组件
function RenderRoutes({ routes }) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {routes.map((route, index) => {
          const { children } = route

          if (!children) {
            if (route.redirect) {
              const { redirect, path, ...others } = route
              return <Redirect key={index} from={route.path} to={redirect} {...others} />
              // } else if (!whiteList.includes(route.path)) {
              //   // 需要权限：登录也算
              //   const { component, ...others } = route
              //   return <AuthRoute key={index} component={component} {...others} />
              // } else {
              //   const { component, ...others } = route
              //   return <Route key={index} component={component} {...others} />
              // }
            } else {
              return <PageRoute key={index} {...route} />
            }
          } else {
            const { component: LayoutComponent, children, ...others } = route
            const RenderComponent = props => (
              <LayoutComponent {...props}>
                <RenderRoutes routes={children} />
              </LayoutComponent>
            )
            return <Route key={index} {...others} component={RenderComponent} />
          }
        })}
      </Switch>
    </Suspense>
  )
}

export default function App() {
  const formatedRoutes = formatRoutes(cloneDeep(routes), '')
  return (
    <BrowserRouter>
      <RenderRoutes routes={formatedRoutes} />
    </BrowserRouter>
  )
}
