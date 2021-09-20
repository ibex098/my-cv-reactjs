import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Modal, Row } from 'react-bootstrap';

EducationModal.propTypes = {
   show: PropTypes.bool.isRequired,
};

function EducationModal(props) {
   return (
      <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
         <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
               My Scoreboard
            </Modal.Title>
         </Modal.Header>
         <Modal.Body className='show-grid'>
            <Container>
               <Row>
                  <Col xs={12} md={8}>
                     <h2>Coming Soon</h2>
                  </Col>
               </Row>
            </Container>
         </Modal.Body>
      </Modal>
   );
}

export default EducationModal;
