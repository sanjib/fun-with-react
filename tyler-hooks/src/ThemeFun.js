import React, { useState } from 'react'
import './styleTheme.css'

const ThemeFun = () => {
  const [theme, setTheme] = useState('light')

  const toDark  = () => setTheme('dark')
  const toLight = () => setTheme('light')

  return (
    <div className={theme}>
      {theme === 'light'
       ? <button onClick={toDark}>🔦 fun</button>
       : <button onClick={toLight}>💡 fun</button>}
    </div>
  )

}

export default ThemeFun