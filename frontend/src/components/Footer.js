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
        <footer className='mainfooter' role='contentinfo'>
          <div className='footer-middle'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3 col-sm-6'></div>
                <div className='col-md-3 '>
                  <i class='fab fa-cc-paypal fa-3x'></i>
                </div>

                <div className='col-md-3 col-sm-6'>
                  {userInfo && !userInfo.isAdmin && <ChatBox />}
                </div>
                <div className='col-md-3'>
                  <h4>Follow Us</h4>
                  <ul className='social-network social-circle'>
                    <a
                      href='http://instagram.com/the.artsy.co/'
                      target='_blank'
                    >
                      <i className='fab fa-instagram fa-3x'></i>
                    </a>
                  </ul>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12 copy'>
                  <p className='text-center'>
                    &copy; Copyright 2021 - The Artsy.Co. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <Row>
          <Col className='text-center py-3'>Copyright &copy; The Artsy.Co</Col>
          <Col className='ml-auto'>
            {userInfo && !userInfo.isAdmin && <ChatBox />}
          </Col>
        </Row> */}
      </Container>
    </footer>
  )
}

export default Footer
