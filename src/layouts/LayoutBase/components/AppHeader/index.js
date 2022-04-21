/**
 * 空页面路由
 */
import React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const AppHeader = props => (
  <Header
    className='app-header'
    style={{
      padding: 0,
    }}
  />
)

export default AppHeader
