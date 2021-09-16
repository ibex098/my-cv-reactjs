import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import myImg from "../../assets/img/ab-img.png";
import "./AboutMe.scss";

AboutMe.propTypes = {};

function AboutMe(props) {
  return (
    <div className="aboutMe" id="about">
      <Container>
        <Row>
          <Col sm={6} className="aboutMeImage">
            <Image src={myImg} alt="aboutMe" className="img-fluid" />
          </Col>
          <Col sm={6} className="aboutMeContent">
            <h2>About Me</h2>
            <p>
              Hello, I’m a Nhan Nguyen, web-developer based on Ho Chi Minh city,
              Viet Nam.My hobbies are listening to music, taking pictures,
              cooking and learning new front-end programming technologies. I
              have rich experience in web site design & building and
              customization. Also I am good at
            </p>
            <div className="contentTechnology">
              <ul>
                <li>
                  <span>HTML5</span>
                </li>
                <li>
                  <span>CSS3</span>
                </li>
                <li>
                  <span>SCSS/SASS</span>
                </li>
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>ReactJs</span>
                </li>
                <li>
                  <span>VueJs</span>
                </li>
                <li>
                  <span>Bootstrap 4</span>
                </li>
                <li>
                  <span>Bootstrap-Vue</span>
                </li>
                <li>
                  <span>React-bootstrap</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
