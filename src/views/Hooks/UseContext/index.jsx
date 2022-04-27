import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import Child from './Child'

function App () {
  const [theme, setTheme] = useState('light')
  function changeTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return <ThemeContext.Provider value={theme}>
    <button onClick={changeTheme}>点击改变顶级组件主题</button>
    <Child />
  </ThemeContext.Provider>
}

export default App