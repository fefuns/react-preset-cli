import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Modal } from 'antd'
import routes from 'routes'
import { cloneDeep } from 'lodash'
import './style.less'
import { delStorage } from 'utils'
import { getCurRoute, formatRoutes } from 'utils/routerHelper'

const { SubMenu } = Menu
const MenuItem = Menu.Item
// 获取父级菜单
const getMenuItems = (routes, props) => {
  if (!routes) {
    return []
  }
  return routes
    .filter(item => {
      const meta = item.meta || {}
      const hidden = meta.hidden
      return !hidden
    })
    .map((item, index) => {
      return getSubMenuItems(item, index, props)
    })
}
// 获取子级菜单
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSubMenuItems = (item, index, props) => {
  if (
    item.children &&
    item.children.some(child => child.meta && child.meta.title && !child.meta.hidden)
  ) {
    const childrenItems = getMenuItems(item.children, props)
    if (childrenItems && childrenItems.length > 0) {
      const subMenu = (
        <SubMenu
          key={item.path}
          data-key={item.path}
          title={
            <>
              {/* {item.meta.icon} */}
              <span className='menu-text'>{item.meta.title}</span>
            </>
          }
        >
          {childrenItems}
        </SubMenu>
      )

      return subMenu
    }
    return null
  }
  const navItem = (
    <MenuItem
      key={item.path}
      data-key={item.path}
      onClick={() => {
        // 外链功能
        if (item.meta?.link) {
          window.open(item.meta.link)
        }
        return false
      }}
    >
      {item.meta?.link ? (
        <span className='menu-text'>{item.meta?.title}</span>
      ) : (
        <Link to={item.path}>
          {/* {item.meta.icon} */}
          <span className='menu-text'>{item.meta?.title}</span>
        </Link>
      )}
    </MenuItem>
  )

  return navItem
}

// 获取所有有子项的菜单路径，用于判断默认需要展开哪些菜单项
function getParentPaths(routes, props) {
  let paths = []
  if (!routes) {
    return []
  }
  const getPaths = function (arr) {
    const allMenus = arr.filter(item => {
      const meta = item.meta || {}
      const hidden = meta.hidden
      return !hidden
    })

    allMenus.forEach(item => {
      if (
        item.children &&
        item.children.some(child => child.meta && child.meta.title && child.meta.isMenu)
      ) {
        paths.push(item.path)
        getPaths(item.children, props)
      }
    })
  }
  getPaths(routes)
  return paths
}

// 退出登录
const logout = () => {
  const path = window.location.origin
  Modal.confirm({
    centered: true,
    title: '确定要退出登录吗？',
    onOk: () => {
      delStorage('loginInfo')
      window.location.href = '/login'
    },
  })
}
// 侧边菜单
const SiderMenu = props => {
  const { location } = props
  const { pathname } = location

  // 当前路由
  const curRoute = getCurRoute(routes, pathname) || {}
  const activeMenu = (curRoute.meta && curRoute.meta.activeMenu) || ''
  const formatedRoutes = formatRoutes(cloneDeep(routes), '').filter(item => item.path === '/')[0]
    .children

  const parentPaths = getParentPaths(formatedRoutes, props)
  const openKeys = parentPaths.filter(item => pathname.startsWith(item))
  console.log(openKeys)

  return (
    <Menu
      selectedKeys={activeMenu ? [activeMenu] : [pathname]}
      defaultOpenKeys={openKeys}
      mode='inline'
      className='sider-menu'
      theme='dark'
    >
      {getMenuItems(formatedRoutes, props)}
    </Menu>
  )
}

export default withRouter(SiderMenu)
