import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

const List = props => {
  const history = useHistory()
  const goDetail = () => {
    history.push('/special-route/active-menu/1')
  }
  return (
    <div>
      我是列表页，但是点到详情页去了以后，我列表页的菜单还会高亮吗？
      <Button type='link' onClick={goDetail}>
        查看详情
      </Button>
    </div>
  )
}

export default List
