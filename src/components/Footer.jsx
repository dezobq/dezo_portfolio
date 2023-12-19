import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm' 
import logo from '../assets/img/dezo-logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          
          <Col sm={6}> 
          <div className="social-icon">
              <a
                href="https://github.com/dezobq"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/andre-b-queiroz/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/dezoqueiroz/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
         
            <p>&copy; Copyright 2023. All Rights Reserved</p>
          </Col>
          </Row>
      </Container>
      
    </footer >

  ) 
}

export default Footer