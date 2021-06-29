import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <img src={logo} className={'App-logo'} alt="logo"/>
      hello 123
    </>
  )
}

export default App