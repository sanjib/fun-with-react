import React, { useState, useEffect } from 'react'

function useWindowDimensions() {
  const [width, setWidth]   = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', listener)

    return () => window.removeEventListener('remove', listener)
  }, [])

  return { width, height }
}

const WindowDimension = () => {
  const { width, height } = useWindowDimensions()

  return (
    <>
      <h1>Window Dimension</h1>
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </>
  )
}

export default WindowDimension
