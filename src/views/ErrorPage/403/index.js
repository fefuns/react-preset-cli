import React from 'react'
import './style.less'

const Error404 = () => (
  <section className='error-403'>
    <img src={require('./img/403.png').default} alt='403' />
    <p className='tips'>你没有权限访问该页面，请联系企业管理员进行授权</p>
  </section>
)
export default Error404
