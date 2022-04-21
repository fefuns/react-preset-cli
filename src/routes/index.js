import { lazy } from 'react'
import { LayoutBase, LayoutBlank } from 'layouts'

/**
 * 参考 vue-router 添加了 meta 额外信息控制
 * meta: {
 *   *title: '页面标题' 或者 '菜单名称'
 *    desc: '详细描述'，辅助说明
 *
 * }
 */

const routes = [
  {
    path: '/login',
    component: lazy(() => import('views/Login')),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/register',
    component: lazy(() => import('views/Register')),
    meta: {
      title: '注册',
      hidden: true,
    },
  },
  {
    path: '/404',
    component: lazy(() => import('views/ErrorPage/404')),
    meta: {
      title: '您访问的页面不存在',
      hidden: true,
    },
  },
  {
    path: '/403',
    component: lazy(() => import('views/ErrorPage/403')),
    meta: {
      title: '你没有权限访问该页面',
      hidden: true,
    },
  },
  {
    path: '/500',
    component: lazy(() => import('views/ErrorPage/500')),
    meta: {
      title: '很抱歉，目前服务器正在维护中',
      hidden: true,
    },
  },

  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/basic',
        component: LayoutBlank,
        meta: {
          title: 'react基础',
        },
        children: [
          {
            path: '/set-state',
            component: lazy(() => import('views/Basic/SetState')),
            meta: {
              title: 'setState',
              desc: '关于setState究竟是同步还是异步？',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/',
    redirect: '/basic/set-state',
  },
]
export default routes
