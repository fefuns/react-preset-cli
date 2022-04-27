import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * 简单封装的 axios 请求功能，主要为了展示 自定义hooks如何封装
 * @param {*} url
 * @returns
 */
export function useAxios(url) {
  // 1. 定义数据
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()
  // 2. 修改数据
  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false)
      })
  }, [url])
  // 3. 返回数据
  return [loading, data, error]
}

/**
 * 对之前获取鼠标位置进行封装，对比class方式逻辑复用看看存在哪些优势
 */
export function useMousePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  function mouseMoveHandler(e) {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    // 绑定事件
    document.body.addEventListener('mousemove', mouseMoveHandler)
    // 解绑事件
    return () => document.body.removeEventListener('mousemove', mouseMoveHandler)
  }, [])
  return [x, y]
}
