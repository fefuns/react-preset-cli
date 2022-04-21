import React, { Component } from 'react'
import { Layout } from 'antd'
import SiderMenu from './components/SiderMenu'
import './style.less'

const { Sider, Content } = Layout
const localJson = require('../../../package.json')
const version = localJson.version

class LayoutBase extends Component {
  state = {
    // 用户是管理员的其它企业
    entityOthers: [],
  }

  componentDidMount() {}
  render() {
    return (
      <Layout className='app-root'>
        <Sider
          className='app-sider'
          style={{
            overflowX: 'hidden',
            overflowY: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top:
              (document.getElementById('companyHeader') &&
                document.getElementById('companyHeader').clientHeight) ||
              0,
          }}
          theme='light'
        >
          <SiderMenu />
        </Sider>
        <Layout className='app-main' style={{ marginLeft: 200 }} data-version={version}>
          <Content className='app-page-wrap'>{this.props.children}</Content>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutBase
