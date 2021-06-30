import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK':
      return { ...state, score: state.score + 1 }
    case 'TICK':
      return { ...state, timeLeft: state.timeLeft - 1 }
    case 'STOP':
      window.clearInterval(action.id)
      return state
    default:
      return state
  }
}

const useGame = () => {
  const timeLeft          = 3
  const [state, dispatch] = useReducer(gameReducer, {
    timeLeft,
    score: 0,
  })

  useEffect(() => {
    const idClearInterval = window.setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)

    const idClearTimeout = window.setTimeout(() => {
      dispatch({ type: 'STOP', id: idClearInterval })
    }, timeLeft * 1000)

    return () => window.clearTimeout(idClearTimeout)
  }, [])

  return [state, dispatch]
}

const ClickGame = () => {
  const [{ timeLeft, score }, dispatch] = useGame()

  return (
    <>
      <Link to={'/'}><Button variant={'light'}>Go Back</Button></Link>
      <h1>Click Game</h1>

      <h4>Time Left: {timeLeft}</h4>
      <h2>Score: {score}</h2>

      {timeLeft
       ? <Button onClick={() => dispatch({ type: 'CLICK' })}>Click</Button>
       : ''}
    </>
  )
}

export default ClickGame
