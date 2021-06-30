import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Wait from './Wait'


const WaitDelay = () => {
  return (
    <>
      <Link to={'/'}>
        <Button variant={'light'}>Go Back</Button>
      </Link>
      <h1>Wait Delay</h1>

      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </>
  )
}

export default WaitDelay