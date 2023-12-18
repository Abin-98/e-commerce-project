import React from 'react'
import { Container } from 'react-bootstrap'

const Header = (props) => {
  return (
    <Container fluid  className='headertext'>
      <span >The Generics</span>
      {props.extra}
    </Container>
  )
}

export default Header
