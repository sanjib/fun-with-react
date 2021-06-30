import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Counter = () => {
  const [counter, setCounter] = useState(0)

  // const incCounter = () => setCounter(counter + 1)
  // const decCounter = () => setCounter(counter - 1)

  // const incCounter = () => setCounter(counter => counter + 1)
  // const decCounter = () => setCounter(counter => counter - 1)

  useEffect(() => {
    console.count('In useEffect')
    document.title = `Count: ${counter}`
  })

  console.count('Rendering')

  return (
    <>
      <Link to="/"><Button variant="light">Go Back</Button></Link>
      <h1> Counter {counter}</h1>
      <Button className="btn-sm" style={{ width: '30px' }}
              onClick={() => setCounter(c => c + 1)}
      >
        +</Button>
      {' '}
      <Button className="btn-sm" style={{ width: '30px' }}
              onClick={() => setCounter(c => c - 1)}
      >
        -</Button>
    </>
  )
}

export default Counter
