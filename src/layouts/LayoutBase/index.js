import React, { Component } from 'react'
import { Layout } from 'antd'
import AppMenu from './components/AppMenu'
import AppHeader from './components/AppHeader'
import './style.less'

const { Sider, Content, Footer } = Layout

class LayoutBase extends Component {
  render() {
    return (
      <Layout className='app-root' hasSider>
        <Sider
          className='app-sider'
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className='logo' />
          <AppMenu />
        </Sider>
        <Layout
          className='app-site'
          style={{
            marginLeft: 200,
          }}
        >
          <AppHeader />
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div className='app-page'>{this.props.children}</div>
          </Content>
          <Footer className='app-footer'>React · 练习册</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutBase
