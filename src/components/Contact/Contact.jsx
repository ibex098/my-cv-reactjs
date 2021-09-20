import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

import './Contact.scss';

function Contact(props) {
   return (
      <div className='contact' id='contact'>
         <div className='contactTitle mb-4'>
            <h2 className='text-center'>Contact Me</h2>
         </div>
         <div className='contactOverlay '>
            <Container className='pt-4'>
               <Row className='contactContent'>
                  <Col sm={12} md={6}>
                     <Row>
                        <Col sm={12} className='contactInfo'>
                           <div className='infoContent p-3'>
                              <div className='infoContentIcon'>
                                 <i className='fas fa-location-arrow'></i>
                              </div>
                              <div className='infoContentText'>
                                 <h4>Address</h4>
                                 <p>
                                    434/73/103 Pham Van Chieu, Ward 9, District
                                    Go Vap
                                 </p>
                                 <p>Ho Chi Minh City</p>
                              </div>
                           </div>
                        </Col>
                        <Col sm={12} className='contactInfo mt-3'>
                           <div className='infoContent p-3'>
                              <div className='infoContentIcon'>
                                 <i className='fas fa-envelope'></i>
                              </div>
                              <div className='infoContentText'>
                                 <h4>Email</h4>
                                 <p>nhan120298@gmail.com</p>
                              </div>
                           </div>
                        </Col>
                        <Col sm={12} className='contactInfo mt-3'>
                           <div className='infoContent p-3'>
                              <div className='infoContentIcon'>
                                 <i class='fas fa-phone'></i>
                              </div>
                              <div className='infoContentText'>
                                 <h4>Address</h4>
                                 <p>+84 924 444 740</p>
                                 <p>+84 327 042 804</p>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </Col>

                  <Col sm={12} md={6} className='contactContentForm'>
                     <Form>
                        <Form.Group
                           className='mb-3'
                           controlId='exampleForm.ControlInput1'
                        >
                           <Form.Control type='text' placeholder='First Name' />
                        </Form.Group>

                        <Form.Group
                           className='mb-3'
                           controlId='exampleForm.ControlInput1'
                        >
                           <Form.Control type='text' placeholder='Last Name' />
                        </Form.Group>

                        <Form.Group
                           className='mb-3'
                           controlId='exampleForm.ControlInput1'
                        >
                           <Form.Control type='email' placeholder='Email' />
                        </Form.Group>

                        <Form.Group
                           className='mb-3'
                           controlId='exampleForm.ControlTextarea1'
                        >
                           <Form.Control
                              as='textarea'
                              rows={8}
                              placeholder='Your Message'
                           />
                        </Form.Group>

                        <Form.Group>
                           <Button variant='primary' type='submit'>
                              Send Message
                           </Button>
                        </Form.Group>
                     </Form>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
}

export default Contact;
