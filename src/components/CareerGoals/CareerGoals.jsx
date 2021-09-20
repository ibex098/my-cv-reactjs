import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import fullStack from 'assets/img/lap-trinh-vien-fullstack.png';
import './CareerGoals.scss';

const CareerGoals = (props) => {
  return (
    <div className='CareerGoals' id='careerGoals'>
      <div className='CareerGoalsOverlay'>
        <Container>
          <Row>
            <div className='CareerGoalsTitle text-center'>
              <h2>Career Goals</h2>
            </div>
            <Carousel variant='dark' sm={12} controls={false}>
              <Carousel.Item>
                <Row className=''>
                  <Col sm={12} md={6} className='justify-content-center'>
                    <img
                      className='d-block w-100 img-fluid'
                      src={fullStack}
                      alt='First slide'
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <div className='CareerGoalsCaption'>
                      <ul>
                        <li>
                          <i className='fas fa-laptop me-2'></i>Apply the
                          knowledge learned to practical work and gradually
                          improve programming skills.
                        </li>
                        <li>
                          <i className='fas fa-shield-alt me-2'></i>Learn more
                          about database management, API, Security.
                        </li>
                        <li>
                          <i className='fas fa-database me-2'></i>Improve your
                          back-end programming skills to become a Full-Stack
                          developer and Mobile App developer in the future.
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className=''>
                  <Col sm={12} md={6} className='justify-content-center'>
                    <img
                      className='d-block w-100 img-fluid'
                      src={fullStack}
                      alt='First slide'
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <div className='CareerGoalsCaption'>
                      <ul>
                        <li>
                          <i className='fas fa-laptop me-2'></i>Apply the
                          knowledge learned to practical work and gradually
                          improve programming skills.
                        </li>
                        <li>
                          <i className='fas fa-shield-alt me-2'></i>Learn more
                          about database management, API, Security.
                        </li>
                        <li>
                          <i className='fas fa-database me-2'></i>Improve your
                          back-end programming skills to become a Full-Stack
                          developer and Mobile App developer in the future.
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </div>
  );
};

CareerGoals.protoTypes = {};

export default CareerGoals;
