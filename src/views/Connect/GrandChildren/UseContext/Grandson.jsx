import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Grandson() {
  const theme = useContext(ThemeContext)
  return <div>
    孙子组件的主题是{theme}
  </div>
}

export default Grandson