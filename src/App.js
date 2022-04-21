import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import AuthRoute from 'components/AuthRoute'
import routes from 'routes'
import { cloneDeep } from 'lodash'
import { formatRoutes } from 'utils/routerHelper'

// 渲染路由组件
const RenderRoutes = ({ routes }) => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {routes.map((route, index) => {
          const { children, meta = {} } = route
          const authId = meta.authId || []

          if (!children) {
            if (route.redirect) {
              const { redirect, path, ...others } = route
              return <Redirect key={index} from={route.path} to={redirect} {...others} />
            } else if (authId.length > 0) {
              // 需要权限：登录也算
              const { component, ...others } = route
              return <AuthRoute key={index} component={component} {...others} />
            } else {
              const { component, ...others } = route
              return <Route key={index} component={component} {...others} />
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
export default () => {
  const formatedRoutes = formatRoutes(cloneDeep(routes), '')
  return (
    <BrowserRouter>
      <RenderRoutes routes={formatedRoutes} />
    </BrowserRouter>
  )
}
