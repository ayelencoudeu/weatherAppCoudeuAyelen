/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Spinner from 'react-bootstrap/Spinner'

function SpinnerRender () {
  return (
    <div className='vw-100'>
      <h2 style={{ color: '#fff' }}>Weather APP</h2>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </div>
  )
}

export default SpinnerRender
