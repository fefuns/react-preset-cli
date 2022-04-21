import React from 'react'
import './style.less'

const Error404 = () => (
  <section className='error-500'>
    <img src={require('./img/500.png').default} alt='500' />
    <p className='tips'>很抱歉，目前服务器正在维护中...</p>
  </section>
)
export default Error404
