import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ListGroup } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1>UI.dev projects</h1>
      <ListGroup>
        <LinkContainer to="/theme-class">
          <ListGroup.Item action>Theme Class</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/theme-fun">
          <ListGroup.Item action>Theme Fun</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/counter">
          <ListGroup.Item action>Counter</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/todo">
          <ListGroup.Item action>Todo - my solution</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/todo-tyler">
          <ListGroup.Item action>Todo - Tyler's solution</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/show-hide">
          <ListGroup.Item action>Show Hide</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/char-limit">
          <ListGroup.Item action>Character Limit</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to="/wait-delay">
          <ListGroup.Item action>Wait Delay</ListGroup.Item>
        </LinkContainer>

        <LinkContainer to={'/api-req'}>
          <ListGroup.Item action>API Request</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/wait-with-custom-hook'}>
          <ListGroup.Item action>Wait With Custom Hook</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/window-dimension'}>
          <ListGroup.Item action>Window Dimension</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/fetch-post'}>
          <ListGroup.Item action>Fetch Post</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/counter-with-use-reducer'}>
          <ListGroup.Item action>Counter With useReducer</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/fetch-post-with-use-reducer'}>
          <ListGroup.Item action>Fetch Post With useReducer</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/complex-form'}>
          <ListGroup.Item action>Complex Form</ListGroup.Item></LinkContainer>

        <LinkContainer to={'/click-game'}>
          <ListGroup.Item action>Click Game</ListGroup.Item></LinkContainer>

      </ListGroup>
    </div>
  )
}

export default App
