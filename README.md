# Talk is cheap, show you the code !

###### 装了个逼，以下不保证我都会，只保证我有学有思考过

- React 基础：
  - 生命周期
    - 单文件生命周期
    - 父子组件生命周期
  - setState 执行机制
    - 不可变值
    - 同步还是异步？宏任务还是微任务？
    - 可能被合并
  - 列表 & key
  - React.refs
  - 非受控组件
  - 高阶组件 HOC
  - RenderProps
  - Portals
- 组件通信
- react-hooks:
  - useState
  - useEffect
  - ...
  - 自定义 hooks:
    - ...
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
  - 有些路由是菜单有些不是，怎么区分
  - 多级目录，无限套娃
  - 侧边栏外链
  - 页面刷新了也要默认展开当前菜单的所有父级
  - 进去详情页也要高亮显示列表页菜单
  - 权限问题，这个感觉比 vue 的简单得多，vue 的常规做法还需要后端返回对应的路由格式，用 addRoute 去动态添加路由
  - 如果我想缓存一个页面...类似 vue 的 keep-alive
  - 不得不吐槽 react-router 更换个页面标题远不如 vue-router 方便！
  - 面包屑
  - 快捷导航
  - 懒加载

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
    - bind 的模拟实现
    - call 的模拟实现
    - new 的模拟实现
    - instanceof 的模拟实现
    - promise 的模拟实现
    - 找数组的最大值
    - 数组扁平化
    - 数组去重
    - 把一个数组转为树
    - 把一个树转为数组
    - 深拷贝
    - 防抖
    - 节流
    - EventBus 自定义事件
    - 手写 curry 函数，实现函数柯里化
    - 手写 LazyMan，实现 sleep 机制
