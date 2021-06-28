import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Todo = () => {
  const [todosList, setTodosList] = useState([])
  const [addTodo, setAddTodo]     = useState('')

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (addTodo.trim() === '') {
      alert('Please type a todo')
      return
    }

    setTodosList([...todosList, { task: addTodo, isDone: false }])
    setAddTodo('')
  }

  const removeTodoHandler = (index) => {
    setTodosList([
      ...todosList.slice(0, index),
      ...todosList.slice(index + 1, todosList.length),
    ])
  }

  const toggleDoneHandler = (index) => {
    setTodosList([
      ...todosList.slice(0, index),
      { ...todosList[index], isDone: !todosList[index].isDone },
      ...todosList.slice(index + 1, todosList.length),
    ])
  }

  return (
    <>
      <Link to="/"><Button variant="light">Go Back</Button></Link>
      <h1>Todo </h1>
      <Form onSubmit={addTodoHandler}>
        <Form.Group controlId="addTodo">
          <Form.Control type="text"
                        className="my-2"
                        value={addTodo}
                        onChange={(e) => setAddTodo(e.target.value)}/>
          {' '}
          <Button type="submit">Add Todo</Button>
        </Form.Group>
      </Form>

      <h2>Current Todos</h2>
      {todosList.length === 0
       ? 'There are no todos currently.'
       :
       <ListGroup>
         {todosList.map((todo, index) => (
           <ListGroup.Item key={index}>
             <Button style={{ width: '100px' }}
                     className="btn-sm btn-light btn-outline-danger"
                     onClick={() => removeTodoHandler(index)}>Remove</Button>
             {' '}
             {todo.isDone
              ?
              <>
                <Button style={{ width: '110px' }}
                        className="btn-sm btn-light btn-outline-secondary"
                        onClick={() => toggleDoneHandler(index)}>Mark Undone</Button>
                {' '}
                <span style={{ textDecoration: 'line-through' }}>{todo.task}</span>
              </>
              :
              <>
                <Button style={{ width: '110px' }}
                        className="btn-sm btn-light btn-outline-success"
                        onClick={() => toggleDoneHandler(index)}>Mark Done</Button>
                {' '}
                {todo.task}
              </>
             }
           </ListGroup.Item>
         ))}
       </ListGroup>
      }
    </>
  )
}

export default Todo
