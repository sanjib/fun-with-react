import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

const ApiRequest = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [index, setIndex]     = useState(0)
  const [post, setPost]       = useState({})

  useEffect(() => {
    fetchPost(postIds[index])
      .then((post) => {
        setLoading(false)
        if (!post.id) {
          setError(`Could not fetch post id: ${postIds[index]}`)
          return
        }
        setPost(post)
      })
  }, [index])

  return (
    <>
      <Link to={'/'}><Button variant={'light'}>Go Back</Button></Link>
      <h1>API Request</h1>

      {loading
       ? 'Loading...'
       : error
         ? error
         :
         <>
           <p>userId: {post.userId}</p>
           <p>id: {post.id}</p>
           <p>title: {post.title}</p>
           <p>body: {post.body}</p>
           <Button className={''}
                   disabled={!postIds[index - 1]}
                   onClick={() => setIndex(index => index - 1)}>Previous</Button>
           {' '}
           <Button className={''}
                   disabled={!postIds[index + 1]}
                   onClick={() => setIndex(index => index + 1)}>Next</Button>
         </>
      }
    </>
  )
}

export default ApiRequest
