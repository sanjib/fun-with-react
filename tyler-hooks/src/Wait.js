import { useEffect, useState } from 'react'


const Wait = ({ delay = 1000, placeholder, ui }) => {
  const [delayOver, setDelayOver] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setDelayOver(true), delay)

    return () => window.clearTimeout(id)
  }, [delayOver, delay])

  return delayOver ? ui : placeholder
}

export default Wait