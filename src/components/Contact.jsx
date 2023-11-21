import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({} );
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form action="">
              <Row>
                <Col sm={6} className='px-1'>
                  <input type="text" placeholder='First Name' value={formDetails.firstName} onChange={(e) => setFormDetails({ ...formDetails, firstName: e.target.value })} />
                </Col>
              </Row>
            </form>

        </Row>
      </Container>
    </section>
  )
}

export default Contact
