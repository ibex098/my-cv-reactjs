import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Education.scss';
import EducationModal from './EducationModal';

Education.propTypes = {};

function Education(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='education' id='education'>
      <Container>
        <Row>
          <Col sm={12} className='educationTitle'>
            <h2>Education</h2>
          </Col>
          <Col sm={12} md={6}>
            <div className='educationContent'>
              <i className='fas fa-university'></i>
              <h5>
                <span>Hutech</span> University
              </h5>
              <p>09/2016 - 11-2020</p>
              <ul>
                <li>Specialization: Software Engineering</li>
                <li>Degree: College degree</li>
                <li>Graduation: Pretty good</li>
                <li>medium score: Chưa có</li>
              </ul>
              <div className='text-center'>
                {/* <Button
                  variant='primary'
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  transcript
                </Button> */}
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='educationContent'>
              <i className='fab fa-centercode'></i>
              <a
                href='https://cybersoft.edu.vn/'
                target='_blank'
                rel='noreferrer'
              >
                <h5>
                  <span>CyberSoft</span> Academy
                </h5>
              </a>
              <p>05/2019 - 11-2019</p>
              <ul>
                <li>Specialization: front-end programming</li>
                <li>Graduation: Pretty good</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <EducationModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
}

export default Education;
