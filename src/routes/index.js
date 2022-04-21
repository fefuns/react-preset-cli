import { lazy } from 'react'
import { LayoutBase, LayoutBlank } from 'layouts'

/**
 * 参考 vue-router 添加了 meta 额外信息控制
 * meta: {
 *   *title: '页面标题' 或者 '菜单名称'
 *    desc: '详细描述'，辅助说明
 *    hidden: true,  表示该路由不是一个菜单类型。比如登录页，404等都需要设置该属性。因为它们不属于菜单
 *    link: '外链地址', 有时候可能会有菜单需要跳转到别的网址去，比如使用说明之类的
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
            exact: true,
            component: lazy(() => import('views/Basic/SetState')),
            meta: {
              title: 'setState',
              desc: '关于setState究竟是同步还是异步？',
            },
          },
        ],
      },
      {
        path: '/react-hooks',
        component: LayoutBlank,
        meta: {
          title: 'react-hooks',
        },
        children: [
          {
            path: '/useState',
            component: lazy(() => import('views/Basic/LifeCycle')),
            meta: {
              title: 'useState',
              desc: '关于setState究竟是同步还是异步？',
            },
          },
        ],
      },
      {
        path: '/special-route',
        component: LayoutBlank,
        meta: {
          title: '特殊路由',
        },
        children: [
          {
            path: '/external-link',
            meta: {
              title: '测试外链',
              link: 'https://www.baidu.com',
            },
          },
          {
            path: '/active-menu/list',
            component: lazy(() => import('views/SpecialRoute/ActiveMenu/List')),
            meta: {
              title: '指定高亮菜单',
              desc: '比如可能列表页是一个菜单，但是进了详情页之后，列表页高亮就消失了。这也是需要通过指定详情页路由的 meta 的 activeMenu 字段来指定需要高亮的菜单来特殊处理的',
            },
          },
          {
            path: '/active-menu/:id',
            component: lazy(() => import('views/SpecialRoute/ActiveMenu/Detail')),
            meta: {
              title: '模拟详情页',
              desc: '比如可能列表页是一个菜单，但是进了详情页之后，列表页高亮就消失了。这也是需要通过meta中的activeMenu字段来指定需要高亮的菜单来特殊处理的。此处具体实现看 layouts/LayoutBase/components/AppMenu 文件',
              activeMenu: '/special-route/active-menu/list',
              hidden: true,
            },
          },
        ],
      },

      /**
       * 以下两项写在最下面
       */
      {
        path: '/',
        exact: true,
        redirect: '/basic/set-state',
        meta: {
          hidden: true,
        },
      },
      {
        path: '*',
        redirect: '/404',
        meta: {
          hidden: true,
        },
      },
    ],
  },
]
export default routes
