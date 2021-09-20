import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.scss';

function Footer(props) {
  return (
    <div className='footer py-5'>
      <Container>
        <Row>
          <Col sm={6}>
            <p>All right reserved Nhan Nguyen @ 2021</p>
          </Col>
          <Col sm={6}>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/BlueFox.N98/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/nhanez098'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://t.me/dier0298/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-telegram-plane'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/kuli098'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
