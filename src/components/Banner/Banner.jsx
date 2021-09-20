import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import myAvatar from '../../assets/img/myAvatar.jpg';
import './Banner.scss';

Banner.propTypes = {};

function Banner(props) {
   return (
      <div id='myBanner' className='myBanner'>
         <div className='myBannerOverlay'>
            <Container>
               <Row>
                  {/* Info */}
                  <Col xs={12} sm={6} className='myBannerInfo'>
                     <div>
                        <span>Hello I'm</span>
                     </div>
                     <h2>Nhan Nguyen</h2>
                     <h4>Front end Development</h4>
                     <ul>
                        <li>
                           <i className='fas fa-envelope'></i>
                           <a href='mailto:'>nhan120298@gmail.com</a>
                        </li>
                        <li>
                           <i className='fas fa-phone'></i>
                           <a href='mailto:'>+84 924 444 740</a>{' '}
                        </li>
                        <li>
                           <i className='fas fa-map-marker-alt'></i>
                           <a href='mailto:'>
                              {' '}
                              434/73/103 Pham Van Chieu, Ward 9, District Go Vap
                           </a>
                        </li>
                     </ul>
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
                  {/* Avatar */}
                  <Col xs={12} sm={6} className='myBannerAvatar'>
                     <div className='avatarBorder'>
                        <Image
                           src={myAvatar}
                           alt='myAvatar'
                           className='img-fluid'
                        />
                        {/* <img src={myAvatar} alt="myAvatar" className="img-fluid" /> */}
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
}

export default Banner;
