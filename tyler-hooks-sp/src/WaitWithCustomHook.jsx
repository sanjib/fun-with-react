import React, { useEffect, useState } from 'react'

function useWait(delay) {
  const [waitComplete, setWaitComplete] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setWaitComplete(true)
    }, delay)
    return () => window.clearTimeout(id)
  }, [delay])

  return waitComplete
}

function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay)

  return show === true
         ? ui
         : placeholder
}

const WaitWithCustomHook = () => {
  return (
    <>
      <h1>Wait With Custom Hook</h1>

      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </>
  )
}

export default WaitWithCustomHook
