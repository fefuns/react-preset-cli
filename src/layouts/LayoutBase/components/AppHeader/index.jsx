import React from 'react'
import { Layout, Menu, Dropdown, Space, Modal } from 'antd'
import { getStorage, delStorage } from 'utils'
import './style.less';

const { Header } = Layout

export default function AppHeader(props) {
  // 简单演示，只用localStorage获取用户信息及退出登录，真实项目用redux或mobx
  const loginInfo = getStorage('loginInfo') || {};
  function handleLogout() {
    Modal.confirm({
      centered: true,
      title: '确定要退出登录吗？',
      onOk: () => {
        delStorage('loginInfo')
        window.location.href = '/login'
      },
    })
  }
  function handleClick({ key }) {
    if (key === 'logout') {
      handleLogout()
    }
  }
  return <Header className='app-header' style={{padding: '0 20px'}}>
    <div className="bread-crumb"></div>
    <div className="login-info">
      <Dropdown overlay={<Menu onClick={handleClick}>
        <Menu.Item key='logout'>退出登录</Menu.Item>
      </Menu>}>
        <Space>
          欢迎你，{loginInfo.username}
        </Space>
      </Dropdown>
    </div>
  </Header>
}

