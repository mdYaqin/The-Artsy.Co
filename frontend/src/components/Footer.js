import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import ChatBox from './ChatBox'

const Footer = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; The Artsy.Co</Col>
          <Col className='text-center py-2'>
            {userInfo && !userInfo.isAdmin && <ChatBox />}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
