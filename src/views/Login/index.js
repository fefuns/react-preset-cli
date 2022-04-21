/**
 * 注册页
 */
import React from 'react'
import { Card, Form, Input, Button, Space } from 'antd'
import { useHistory } from 'react-router-dom'
import { setStorage } from 'utils'
import './style.less'

const FormItem = Form.Item
const Login = () => {
  const history = useHistory()
  const onFinish = values => {
    // 简单处理一下
    setStorage('loginInfo', values)
    history.push('/')
  }
  const goRegister = () => {
    history.push('/register')
  }
  return (
    <div className='login-main'>
      <Card title='用户登录' style={{ width: 300 }}>
        <Form onFinish={onFinish} className='login-form'>
          <FormItem name='username' rules={[{ required: true, message: '请输入账号!' }]}>
            <Input placeholder='用户名：任意字符串' />
          </FormItem>
          <FormItem name='password' rules={[{ required: true, message: '请输入密码!' }]}>
            <Input type='password' placeholder='密码：任意字符串' />
          </FormItem>
          <FormItem>
            <Space gutter={24}>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                登录
              </Button>
              <Button type='link' className='login-form-button' onClick={goRegister}>
                没有账号？去注册
              </Button>
            </Space>
          </FormItem>
        </Form>
      </Card>
    </div>
  )
}
export default Login
