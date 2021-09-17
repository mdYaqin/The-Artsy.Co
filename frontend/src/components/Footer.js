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
              <div className='row justify-content-around'>
                <div className='chatbox'>
                  {userInfo && !userInfo.isAdmin && <ChatBox />}
                </div>

                <div className='col-4'>
                  <h4 className='text-primary'>Get in touch</h4>
                  <div className='row'>
                    <div>
                      <div className=''>
                        <i className='fas fa-map-marker-alt  mt-2 text-primary'></i>
                        &nbsp; Sembawang, Singapore
                      </div>
                      <div className=''>
                        <i className='fas fa-mobile-alt mt-2 text-primary'></i>
                        &nbsp; +(65) 86619154
                      </div>
                      <div className=''>
                        <i className='fas fa-envelope mt-2 text-primary'></i>
                        &nbsp; maryam.artsy.co@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <h4 className='text-primary'>About The Company</h4>
                  <p>
                    The Artsy.co provide an easy way for customers to choose
                    stickers from all sizes and with all levels of printing
                    knowledge to order online.
                  </p>
                  <div className='row'>
                    <ul className='social-network social-circle'>
                      <li>
                        <a
                          href='http://instagram.com/the.artsy.co/'
                          target='_blank'
                        >
                          <i className='fab fa-instagram fa-2x text-primary'></i>
                        </a>
                      </li>
                      <li>
                        <a href='http://github.com/mdYaqin/' target='_blank'>
                          <i className='fab fa-github fa-2x text-primary'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
          {/* </div> */}
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
