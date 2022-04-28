import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import AuthRoute from 'components/AuthRoute'
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
        if (!whiteList.includes(path)) {
          return <AuthRoute component={RenderComponent} {...props} />
        } else {
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
