import { cloneDeep } from 'lodash'
/**
 * vue 中路由配置嵌套路由的时候，children里面的子路由 path 不以 / 开头，就可以不写全，只单独写子路由地址，它会自动拼接上所有父路由的地址，而 react children里面的子路由 path 都必须要写全。该工具函数则可以实现子路由不必写全路由地址
 * @param {*} routes 路由配置数组
 * @param {*} parentPath 父路径地址
 * @returns
 */
const path = require('path')
export function formatRoutes(routes = [], parentPath = '') {
  return routes.map(item => {
    if (item.path) {
      const joinPath = path.join(parentPath || '', item.path)
      item.path = joinPath === '/' ? '/' : joinPath.replace(/\/$/, '')
    }

    if (item.children) {
      item.children = formatRoutes(item.children, item.path)
    }
    return item
  })
}

export function getCurRoute(routes, pathname) {
  pathname = pathname || window.location.pathname
  const basename = ''
  const pathRoute = pathname.replace(basename, '')
  let arr = pathRoute.split('/')
  arr.splice(0, 1)

  let regS = '^'
  arr.forEach(s => {
    // eslint-disable-next-line no-useless-escape
    regS += `\\\/(${s}|:[^/]+?)`
  })
  regS += `$`
  var reg = new RegExp(regS)
  const formatedRoutes = formatRoutes(cloneDeep(routes), '')
  let curMenu = {}
  const filterRoutes = function (arr) {
    if (arr && arr.length) {
      arr.forEach(item => {
        if (item.children) {
          filterRoutes(item.children)
        } else {
          if (reg.test(item.path)) {
            curMenu = item
          }
        }
      })
    }
  }
  filterRoutes(formatedRoutes)
  return curMenu
}
