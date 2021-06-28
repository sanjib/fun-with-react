import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'


function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData]       = useState(null)
  const [error, setError]     = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.id) {
          setLoading(false)
          setError(`Post not found`)
          return
        }
        setData(data)
        setError(null)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })

  }, [url])

  return { loading, data, error }
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

const FetchPost = () => {
  const [index, setIndex] = React.useState(0)

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
