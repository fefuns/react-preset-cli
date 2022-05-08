# Talk is cheap, show you the code !

###### 装了个逼，以下不保证我都会，只保证我有学有思考过

- React 基础：
  - 生命周期
    - 单文件生命周期
    - 父子组件生命周期
  - setState 执行机制
    - 不可变值
    - 同步还是异步？如果是异步？那它是宏任务还是微任务？
    - 可能被合并
  - 列表 & key
  - React.refs
  - 非受控组件
  - 高阶组件 HOC
  - RenderProps
  - Portals
  - Context
- react-hooks:
  - useState
  - useEffect
  - useRef
  - useContext
  - useReducer
  - useMemo
  - useCallback
  - 自定义 hooks
  - Hooks 常见的坑点
- 组件通信
- 性能优化
  - SCU
  - PureComponent
  - memo, useMemo, useCallback
  - react 做浅比较的原理是利用了 Object.js() 方法
- 八股文：
  - react 的特性
  - vdom 与 diff
  - JSX 的本质
  - 合成事件机制
  - batchUpdate 机制
  - 事务机制
  - fiber
- 业务需求

  - 仿钉钉/企业微信的审批流程图，
  - im 聊天
  - oa 系统全套，审批，打卡，日志，云盘，工资条，公告

- react-router

  - 中心化配置（所有配置写在 routes/index.js 里面，集中管理）
  - 有些路由是菜单有些不是，怎么区分？
  - 多级菜单，嵌套路由，而且 vue-router 可以嵌套的子组件 path 不以 / 开头 来自动拼接上父路径，而 react-router 始终要写全路径，有没有方法可以做到像 vue 那样？
  - vue-router 可以通过 router.beforeEach 来判断是否需要登录的白名单页面，是否已登录（未登录跳转至登录页），是否有权限（没权限跳转 403 页面），以及页面标题的更换，react-router 也没有这种钩子函数，如何实现？
  - 单页应用有时候切换页面，页面滚动条并没有在最顶部，vue-router 中可以通过滚动行为 scrollBehavior 来设置，react-router 又如何实现？
  - 菜单默认展开设置？ 页面刷新了也要默认展开当前菜单的所有父级，即 antd 的 defaultOpenKeys 是根据 url 动态设置的
  - react 如何像 vue 那样实现路由懒加载？
  - 特殊菜单路由
    - 外链
    - 列表页是一个菜单，详情页不是。进去详情页后，如何让列表页菜单高亮？
  - 如果我想缓存一个页面...类似 vue 的 keep-alive，如何实现？
  - 面包屑组件
  - 快捷导航标签页功能

- 工具函数
  - utils/http.js
    - 阻止重复请求，请求拦截器，响应拦截器。全局 api 与业务页面 api 接口放置位置的思考
  - utils/index.js 工作用的频率可能还比较高
    - localStorage/sessionStorage 获取，设置，删除
    - 获取 url 参数
    -
  - utils/routerHelper.js react-router 真比 vue-router 难用！！搞些辅助函数
  - utils/validate.js 常用的正则。正则博大精深！！！
  - utils/tools.js 手写的小玩意
    - 判断数据类型
    - instanceof 的模拟实现
    - bind 的模拟实现
    - call 的模拟实现
    - new 的模拟实现
    - 数组扁平化
    - 找数组的最大值
    - 数组去重
    - 把一个数组转为树
    - 把一个树转为数组
    - 深拷贝
    - 防抖
    - 节流
    - promise 的模拟实现
    - EventBus 自定义事件
    - 手写 curry 函数，实现函数柯里化
    - 手写 LazyMan，实现 sleep 机制
