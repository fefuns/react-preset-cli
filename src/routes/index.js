import { lazy } from 'react'
import { LayoutBase, LayoutBlank } from 'layouts'

/**
 * 参考 vue-router 添加了 meta 额外信息控制
 * meta: {
 *   *title: '页面标题' 或者 '菜单名称'
 *    desc: '详细描述'，辅助说明
 *    hidden: true,  表示该路由不是一个菜单类型。比如登录页，404等都需要设置该属性。因为它们不属于菜单
 *    link: '外链地址', 有时候可能会有菜单需要跳转到别的网址去，比如使用说明之类的,
 *    activeMenu: '高亮菜单' 比如列表页是一个菜单，详情页不是，但是进入详情页的时候需要高亮显示列表页菜单
 *    authKey: '权限路由'  除去白名单页面，或者是不涉及到权限的页面，其他的路由页面都需要指定authKey用于匹配后端返回的权限列表
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
            path: '/life-cycle',
            component: LayoutBlank,
            meta: {
              title: '生命周期',
            },
            children: [
              {
                path: '/single-com',
                component: lazy(() => import('views/Basic/LifeCycle/SingleCom')),
                meta: {
                  title: '单组件生命周期',
                },
              },
              {
                path: '/parent-child-com',
                component: lazy(() => import('views/Basic/LifeCycle/ParentChildCom')),
                meta: {
                  title: '父子组件生命周期',
                },
              },
            ],
          },
          {
            path: '/set-state',
            component: lazy(() => import('views/Basic/SetStateDemo')),
            meta: {
              title: 'setState执行机制',
              desc: '它是同步还是异步？如果是异步，那它是属于宏任务还是微任务？',
            },
          },
          {
            path: '/list-key',
            component: lazy(() => import('views/Basic/ListKey')),
            meta: {
              title: '列表&key',
              desc: 'React中的key究竟有什么作用？',
            },
          },
          {
            path: '/refs',
            component: lazy(() => import('views/Basic/Refs')),
            meta: {
              title: 'React refs',
              desc: 'React refs的应用场景',
            },
          },
          {
            path: '/uncontrolled',
            component: lazy(() => import('views/Basic/Uncontrolled')),
            meta: {
              title: '非受控组件',
              desc: '什么是非受控组件？什么是受控组件？',
            },
          },
          {
            path: '/hoc',
            component: lazy(() => import('views/Basic/Hoc')),
            meta: {
              title: '高阶组件HOC',
              desc: '高阶组件是一个函数，能够接受一个组件并返回一个新的组件',
            },
          },
          {
            path: '/render-props',
            component: lazy(() => import('views/Basic/RenderProps')),
            meta: {
              title: 'RenderProps',
            },
          },
          {
            path: '/portals',
            component: lazy(() => import('views/Basic/Portals')),
            meta: {
              title: '传送门Portals',
              desc: 'Portals 提供了一种很好的方法，将子节点渲染到父组件 DOM 层次结构之外的 DOM 节点。',
            },
          },
          {
            path: '/context',
            component: lazy(() => import('views/Basic/Context')),
            meta: {
              title: '上下文Context',
              desc: '上下文(Context) 提供了一种通过组件树传递数据的方法，无需在每个级别手动传递 props 属性。',
            },
          },
        ],
      },
      {
        path: '/hooks',
        component: LayoutBlank,
        meta: {
          title: 'react-hooks',
        },
        children: [
          {
            path: '/useState',
            component: lazy(() => import('views/Hooks/UseState')),
            meta: {
              title: 'useState',
              desc: '用useState实现state和setState的功能',
            },
          },
          {
            path: '/useEffect',
            component: lazy(() => import('views/Hooks/UseEffect')),
            meta: {
              title: 'useEffect',
              desc: '用useEffect模拟实现componentDidMount 和 componentDidUpdate 以及 componentWillUnmount',
            },
          },
          {
            path: '/useRef',
            component: lazy(() => import('views/Hooks/UseRef')),
            meta: {
              title: 'useRef',
              desc: '通常用于获取DOM，来操作DOM',
            },
          },
          {
            path: '/useContext',
            component: lazy(() => import('views/Hooks/UseContext')),
            meta: {
              title: 'useContext',
              desc: '',
            },
          },
          {
            path: '/useReducer',
            component: lazy(() => import('views/Hooks/UseReducer')),
            meta: {
              title: 'useReducer',
              desc: '',
            },
          },
          {
            path: '/useMemo',
            component: lazy(() => import('views/Hooks/UseMemo')),
            meta: {
              title: 'useMemo',
              desc: 'memo是一个高阶组件，类似PureComponent，可以让子组件的props进行浅比较来阻止子组件的重新渲染，但是有些情况下，光靠memo还不够，还需要配合useMemo来缓存数据，进一步避免子组件进行不必要的重新渲染',
            },
          },
          {
            path: '/useCallback',
            component: lazy(() => import('views/Hooks/UseCallback')),
            meta: {
              title: 'useCallback',
              desc: 'memo是一个高阶组件，类似PureComponent，可以让子组件的props进行浅比较来阻止子组件的重新渲染，但是有些情况下，光靠memo还不够，还需要配合useMemo来缓存数据，进一步避免子组件进行不必要的重新渲染。但是useMemo只适合用来缓存数据，如果碰到子组件有回调函数来改变父组件状态，发现子组件又会发生不必要的重新渲染，所以就需要有useCallback来对这种回调函数进行处理',
            },
          },
          {
            path: '/customHooks',
            component: LayoutBlank,
            meta: {
              title: '自定义Hooks',
            },
            children: [
              {
                path: '/useAxios',
                component: lazy(() => import('views/Hooks/CustomHooks/UseAxios')),
                meta: {
                  title: 'useAxios',
                },
              },
              {
                path: '/useMousePosition',
                component: lazy(() => import('views/Hooks/CustomHooks/UseMousePosition')),
                meta: {
                  title: 'useMousePosition',
                  desc: '对比class组件中逻辑复用的HOC方式和RenderProps方式看看hooks来处理这种逻辑复用有什么优势',
                },
              },
            ],
          },
          {
            path: '/trap',
            component: LayoutBlank,
            meta: {
              title: 'Hooks坑点',
            },
            children: [
              {
                path: '/trap1',
                component: lazy(() => import('views/Hooks/Trap/Trap1')),
                meta: {
                  title: 'hooks 坑1',
                  desc: 'useState初始化值，只有第一次有效',
                },
              },
              {
                path: '/trap2',
                component: lazy(() => import('views/Hooks/Trap/Trap2')),
                meta: {
                  title: 'hooks 坑2',
                  desc: 'useEffect第二个参数是空的时候，不能直接访问到state，会报错',
                },
              },
              {
                path: '/trap3',
                component: lazy(() => import('views/Hooks/Trap/Trap3')),
                meta: {
                  title: 'hooks 坑3',
                  desc: 'useEffect第二个参数是一个引用类型的时候，会出现死循环',
                },
              },
            ],
          },
        ],
      },
      {
        path: '/connect',
        component: LayoutBlank,
        meta: {
          title: '组件通信',
        },
        children: [
          {
            path: '/father-son',
            component: lazy(() => import('views/Connect/FatherSon')),
            meta: {
              title: '父子组件通信',
            },
          },
          {
            path: '/brother',
            component: lazy(() => import('views/Connect/Brother')),
            meta: {
              title: '兄弟组件通信',
            },
          },
          {
            path: '/grandChildren',
            component: LayoutBlank,
            meta: {
              title: '后代组件通信',
            },
            children: [
              {
                path: '/context',
                component: lazy(() => import('views/Connect/GrandChildren/Context')),
                meta: {
                  title: 'class-context',
                  desc: 'class 写法',
                },
              },
              {
                path: '/use-context',
                component: lazy(() => import('views/Connect/GrandChildren/UseContext')),
                meta: {
                  title: 'hooks-useContext',
                  desc: 'hooks 写法',
                },
              },
            ],
          },
          {
            path: '/no-relation',
            component: LayoutBlank,
            meta: {
              title: '非关系组件通信',
            },
            children: [
              {
                path: '/react-redux',
                component: LayoutBlank,
                meta: {
                  title: 'react-redux',
                },
                children: [
                  {
                    path: '/class-demo',
                    component: lazy(() => import('views/Connect/NoRelation/ReactRedux/ClassDemo')),
                    meta: {
                      title: 'class用法',
                    },
                  },
                  {
                    path: '/hooks-demo',
                    component: lazy(() => import('views/Connect/NoRelation/ReactRedux/HooksDemo')),
                    meta: {
                      title: 'hooks用法',
                    },
                  },
                ],
              },
              {
                path: '/react-mobx',
                component: LayoutBlank,
                meta: {
                  title: 'react-mobx',
                },
                children: [
                  {
                    path: '/class-demo',
                    component: lazy(() => import('views/Connect/NoRelation/ReactMobx/ClassDemo')),
                    meta: {
                      title: 'class用法',
                    },
                  },
                  {
                    path: '/hooks-demo',
                    component: lazy(() => import('views/Connect/NoRelation/ReactMobx/HooksDemo')),
                    meta: {
                      title: 'hooks用法',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: '/optimizing',
        component: lazy(() => import('views/Basic/SetStateDemo')),
        meta: {
          title: '性能优化',
        },
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
      {
        path: '/tools',
        component: LayoutBlank,
        meta: {
          title: '工具函数',
        },
        children: [
          {
            path: '/getType',
            component: lazy(() => import('views/Utils/GetType')),
            meta: {
              title: '获取数据类型',
              desc: '手写一个getType函数，获取详细的数据类型',
            },
          },
          {
            path: '/my-instanceof',
            component: lazy(() => import('views/Utils/MyInstanceof')),
            meta: {
              title: '手写Instanceof',
              desc: '理解instanceof原理并实现',
            },
          },
          {
            path: '/my-bind',
            component: lazy(() => import('views/Utils/MyBind')),
            meta: {
              title: '手写bind函数',
              desc: '理解bind原理并实现',
            },
          },
          {
            path: '/my-call',
            component: lazy(() => import('views/Utils/MyCall')),
            meta: {
              title: '手写call函数',
              desc: '理解call原理并实现',
            },
          },
          {
            path: '/my-apply',
            component: lazy(() => import('views/Utils/MyApply')),
            meta: {
              title: '手写apply函数',
              desc: '理解apply原理并实现',
            },
          },
          {
            path: '/my-new',
            component: lazy(() => import('views/Utils/MyNew')),
            meta: {
              title: '手写 new 函数',
              desc: '理解new原理并实现',
            },
          },
          {
            path: '/flatten',
            component: lazy(() => import('views/Utils/Flatten')),
            meta: {
              title: '数组扁平化',
              desc: '将多维数组转成一维数组',
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
        redirect: '/basic/life-cycle/single-com',
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
