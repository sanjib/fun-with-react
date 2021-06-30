import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ComplexForm = () => {
  const name     = useRef('')
  const email    = useRef('')
  const password = useRef('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Name:', name.current.value)
    console.log('Email:', email.current.value)
    console.log('Password:', password.current.value)
  }

  const handleReset = () => {
    name.current.value     = ''
    email.current.value    = ''
    password.current.value = ''
  }

  return (
    <>
      <Link to={'/'}><Button variant={'light'}>Go Back</Button></Link>
      <h1>Complex Form</h1>
      <label>
        Name:
        <input placeholder="name" type="text" ref={name}/>
      </label>
      <label>
        Email:
        <input placeholder="email" type="text" ref={email}/>
      </label>
      <label>
        Password:
        <input placeholder="password" type="text" ref={password}/>
      </label>

      <hr/>
      <button onClick={() => name.current.focus()}> Focus Name Input</button>
      <button onClick={() => email.current.focus()}> Focus Email Input</button>
      <button onClick={() => password.current.focus()}> Focus Password Input</button>
      <hr/>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default ComplexForm
