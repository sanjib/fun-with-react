import React, { useState, useEffect, useReducer } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST':
      return { loading: true, error: null }
    case 'SUCCESS':
      return { loading: false, error: null, data: action.data }
    case 'FAILURE':
      return { loading: false, error: action.error }
    default:
      return state
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(
    fetchReducer,
    { loading: true, data: null, error: null },
  )

  useEffect(() => {
    dispatch({ type: 'REQUEST' })

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.id) {
          dispatch({ type: 'FAILURE', error: 'Could not fetch post' })
          return
        }
        dispatch({ type: 'SUCCESS', data })
      })
      .catch(err => {
        dispatch({ type: 'FAILURE', error: err.message })
      })

  }, [url])

  return state
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

const FetchPost = () => {
  const [index, setIndex] = useState(0)

  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`,
  )

  const incrementIndex = () => {
    setIndex((i) =>
      i === postIds.length - 1
      ? i
      : i + 1,
    )
  }

  if (loading === true) {
    return (
      <>
        <h1>Fetch Post</h1>
        <p>Loading...</p>
      </>)
  }

  if (error) {
    return (
      <>
        <h1>Fetch Post</h1>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </>
    )
  }

  return (
    <>
      <Link to={'/'}><Button variant={'light'}>Go Back</Button></Link>
      <h1>Fetch Post</h1>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {index === postIds.length - 1
       ? <p>No more posts</p>
       : <Button onClick={incrementIndex}>
         Next Post
       </Button>}
    </>
  )
}

export default FetchPost
