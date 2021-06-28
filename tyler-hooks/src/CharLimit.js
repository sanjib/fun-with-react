import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const CharLimit = () => {
  const charLimit                           = 10
  const [text, setText]                     = useState('')
  const [submitDisabled, setSubmitDisabled] = useState(true)

  useEffect(() => {
    document.title = `${charLimit - text.length} chars left`

    if (text.length === 0 || text.length > charLimit) {
      setSubmitDisabled(true)
      return
    }
    setSubmitDisabled(false)
  }, [text])


  return (
    <>
      <Link to="/">
        <Button variant="light">
          Go Back
        </Button>
      </Link>
      <h1>Character Limit</h1>

      <Form.Group className="my-3">
        <Form.Control as="textarea" rows="3"
                      value={text}
                      placeholder={'Type your message'}
                      onChange={(e) => setText(e.target.value)}/>
      </Form.Group>
      <Button disabled={submitDisabled}> Submit </Button>
      {' '}
      {`${charLimit - text.length} chars left`}
    </>
  )
}

export default CharLimit