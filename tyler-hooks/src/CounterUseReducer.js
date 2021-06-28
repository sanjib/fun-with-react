import React, { useReducer, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Slider = ({ min, max, onChangeProp }) => {
  const [value, setValue] = useState(1)

  return (
    <Form.Group>
      <Form.Label>Step {value}</Form.Label>{' '}
      <Form.Control type={'range'}
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => {
                      const slidedValue = Number(e.target.value)
                      onChangeProp(slidedValue)
                      setValue(slidedValue)
                    }}
      />

    </Form.Group>
  )
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step }
    case 'DECREMENT':
      return { ...state, count: state.count - state.step }
    case 'UPDATE_STEP':
      return { ...state, step: action.step }
    case 'RESET':
      return { ...state, count: 0 }
    default:
      return state
  }
}

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    { count: 0, step: 1 },
  )

  return (
    <>
      <Link to={'/'}><Button variant={'light'}>Go Back</Button></Link>
      <h1>Counter With useReducer</h1>

      <h2>{state.count}</h2>

      <Slider min={1} max={10} onChangeProp={(value) => {
        dispatch({
          type: 'UPDATE_STEP',
          step: value,
        })
      }}/>

      <Button onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>{' '}
      <Button onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>{' '}
      <Button variant={'secondary'} onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>{' '}

    </>
  )
}

export default CounterUseReducer
