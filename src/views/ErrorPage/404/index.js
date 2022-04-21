import React from 'react'
import './style.less'

const Error404 = () => (
  <section className='error-404'>
    <img src={require('./img/404.png').default} alt='404' />
    <p className='tips'>
      抱歉，你访问的页面不存在
      <br />
      <span className='tel'>
        电话：<b>xxx-xxxx-xxxx</b>
      </span>
    </p>
  </section>
)
export default Error404
