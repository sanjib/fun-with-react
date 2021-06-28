import React, { useState } from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const posts = [
  {
    id  : 0,
    img : 'https://ui.dev/images/content/code-splitting.png',
    text: 'Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.',
  },
  {
    id  : 1,
    img : 'https://ui.dev/images/content/composition-vs-inheritance.png',
    text: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.',
  },
  {
    id  : 2,
    img : 'https://ui.dev/images/content/modules.png',
    text: 'I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.',
  },
]

const summary = text => {
  const words = text.substr(0, 100).split(' ')
  words.pop()
  return words.join(' ')
}

// const expensiveFn = () => {
//   console.log('expensiveFn is being run')
//   return 99999999999
// }

const ShowHide = () => {
  const [nowOpenId, setNowOpenId] = useState(0)
  
  // const [test, setTest]           = useState(expensiveFn)
  // console.log(test)

  return (
    <>
      <Link to="/">
        <Button variant="light"> Go Back </Button>
      </Link>
      <h1>Show Hide</h1>
      <ListGroup>
        {posts.map(post => (
          post.id === nowOpenId
          ?
          <ListGroup.Item active key={post.id}>
            <Row>
              <Col md={2}>
                <Image src={post.img} alt={post.text.substr(0, 5)} fluid/>
              </Col>
              <Col>
                <p>{post.text}</p>
              </Col>
            </Row>
          </ListGroup.Item>
          :
          <ListGroup.Item action key={post.id} onClick={() => setNowOpenId(post.id)}>
            <Row>
              <Col md={2}>
                <Image src={post.img} alt={post.text.substr(0, 5)} fluid/>
              </Col>
              <Col>
                <p>{summary(post.text)}... [read more]</p>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default ShowHide