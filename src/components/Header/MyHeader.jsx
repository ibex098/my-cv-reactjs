import React, { useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import myLogo from 'assets/img/logoBBMonsterCake.png';
import './MyHeader.scss';

function MyHeader(props) {
  const [scrollTop, setScrollTop] = useState(false);
  const addClassOnScroll = () => {
    if (window.scrollY >= 80) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  window.addEventListener('scroll', addClassOnScroll);
  return (
    <header className={scrollTop ? 'myHeader scrollTop' : 'myHeader'}>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='#myBanner'>
            <Image src={myLogo} alt='myLogo' rounded className='myHeaderLogo' />{' '}
          </Navbar.Brand>
          {/* responsive */}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='myHeaderContent'
          >
            <Nav navbarScroll className='ms-auto'>
              <Nav.Link href='#myBanner' className='myHeaderLink'>
                Home
              </Nav.Link>
              <Nav.Link href='#about' className='myHeaderLink'>
                About
              </Nav.Link>
              <Nav.Link href='#careerGoals' className='myHeaderLink'>
                Career Goals
              </Nav.Link>
              <Nav.Link href='#skills' className='myHeaderLink'>
                Skills
              </Nav.Link>
              <Nav.Link href='#education' className='myHeaderLink'>
                Education
              </Nav.Link>
              <Nav.Link href='#workExperience' className='myHeaderLink'>
                Work Experience
              </Nav.Link>
              <Nav.Link href='#contact' className='myHeaderLink'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

MyHeader.propTypes = {};

export default MyHeader;
