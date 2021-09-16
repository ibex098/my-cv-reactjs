import React from "react";
import PropTypes from "prop-types";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

import "./Skills.scss";

Skills.propTypes = {};

function Skills(props) {
  const skillScore = [
    { id: 1, title: "Javascript", score: 65 },
    { id: 2, title: "ReactJs", score: 70 },
    { id: 3, title: "VueJs", score: 70 },
    { id: 4, title: "CSS3", score: 75 },
    { id: 5, title: "SCSS", score: 85 },
    { id: 6, title: "HTML5", score: 86 },
    { id: 7, title: "GitHub/GitLap", score: 90 },
  ];

  return (
    <div className="skills" id="skills">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="skillsTechnical">
              <h3 className="text-center">Technical Skills</h3>
              <div className="mt-5">
                {skillScore.map((skill) => (
                  <div key={skill.id}>
                    <p className="mt-3">{skill.title}</p>
                    <ProgressBar now={skill.score} label={`${skill.score}%`} />
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="skillsProfessional">
              <h3 className="text-center">Professional Skills</h3>
              <div className="mt-5">
                <ul>
                  <li>
                    <div className="skillsProfessionalContent">
                      <svg viewBox="0 0 100 100">
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#eee"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#555"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                      </svg>
                      <p>90%</p>
                    </div>
                    <div>Communication</div>
                  </li>
                  <li>
                    <div className="skillsProfessionalContent">
                      <svg viewBox="0 0 100 100">
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#eee"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#555"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                      </svg>
                      <p>55%</p>
                    </div>
                    <div>Team Work</div>
                  </li>
                  <li>
                    <div className="skillsProfessionalContent">
                      <svg viewBox="0 0 100 100">
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#eee"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#555"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                      </svg>
                      <p>86%</p>
                    </div>
                    <div>Work Independently</div>
                  </li>
                  <li>
                    <div className="skillsProfessionalContent">
                      <svg viewBox="0 0 100 100">
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#eee"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                          stroke="#555"
                          strokeWidth="5"
                          fillOpacity="0"
                        ></path>
                      </svg>
                      <p>60%</p>
                    </div>
                    <div>Creativity</div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
