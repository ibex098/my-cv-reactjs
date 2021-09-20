import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WorkExperience.scss';

function WorkExperience(props) {
  return (
    <div className='workExperience' id='workExperience'>
      <div className='workExperienceOverlay'>
        <Container>
          <Row>
            <h2 className='text-center mb-5'>Work Experience</h2>
            <Col sm={12} md={12} className='mb-5'>
              <div className='workExperienceContent p-4'>
                <h4>Synthesis project</h4>
                <div>
                  <p className='my-color-green'>05/2020 - 07/2020</p>
                  <p>
                    Working position:{' '}
                    <span className='my-text-bold'>Full-Stack</span>
                  </p>
                  <Row>
                    <Col sm={12} md={6} className='p-3'>
                      <h5 className='text-center'>Responsibility </h5>
                      <div className='Responsibility'>
                        <p>
                          Building an{' '}
                          <span className='my-text-bold'>E-learning</span>{' '}
                          online learning website to meet the needs of online
                          learning by buying courses and paying online. After
                          studying online, students can evaluate and comment on
                          the course as well as take the tests given by the
                          lecturer to complete the course.
                        </p>
                        <ul>
                          <li>
                            Use <span className='my-color-green'>NodeJs</span>{' '}
                            and <span className='my-color-green'>Express</span>{' '}
                            to build Restful API for project.
                          </li>
                          <li>
                            Using{' '}
                            <span className='my-color-green'>MongoDB</span> to
                            build the database for the project.
                          </li>
                          <li>
                            Build interfaces using HTML5, CSS, CSS, Bootstrap 4.
                          </li>
                          <li>
                            Use <span className='my-color-green'>ReactJS</span>{' '}
                            to call the API from the server and complete the
                            functionality of the project.
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col sm={12} md={6} className='p-3'>
                      <h5 className='text-center'>Result</h5>
                      <div className='Result'>
                        <p>
                          Complete the project on time, cultivate more knowledge
                          about HTML, CSS, SCSS programming languages. Also
                          learn new technologies including:
                        </p>
                        <ul>
                          <li>
                            Back-end programming with NodeJs-Express and
                            Mongodb.
                          </li>
                          <li>
                            Front-end programming with ReactJs:{' '}
                            <span className='my-color-green'>redux</span>,{' '}
                            <span className='my-color-green'>
                              react-router-dom
                            </span>
                            , <span className='my-color-green'>node-sass</span>{' '}
                            , and some libraries that support reactJs.
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col sm={12} md={12}>
              <div className='workExperienceContent p-4'>
                <h4>
                  Hong Ky Technology Trading Joint Stock Company (HongKyTech)
                </h4>
                <div>
                  <p className='my-color-green'>07/2020 - 12/2020</p>
                  <p>
                    Working position:{' '}
                    <span className='my-text-bold'>
                      Front-end Development Intern
                    </span>
                  </p>
                  <Row>
                    <Col sm={12} md={6} className='p-3'>
                      <h5 className='text-center'>Responsibility </h5>
                      <div className='Responsibility'>
                        <p>
                          Participating in the project of building a website to
                          sell lottery tickets{' '}
                          <a
                            href='https://www.tailoc68.vn/'
                            target='_blank'
                            rel='noreferrer'
                            className='my-text-bold'
                          >
                            Viettlot
                          </a>{' '}
                          as a front-end development using{' '}
                          <span className='my-color-green'>VueJs</span> (
                          https://www.tailoc68.vn/).
                        </p>
                        <ul>
                          <li>Build the website homepage interface.</li>
                          <li>
                            Build the homepage interface and call the API
                            necessary to put the data on the homepage.
                          </li>
                          <li>
                            Build account details page: update information and
                            change password.
                          </li>
                          <li>
                            Implement the search results page through Viettlot's
                            live video on the youtube platform.
                          </li>
                          <li>
                            <span className='my-color-green'>Responsive</span>{' '}
                            pages have been implemented and some other pages to
                            fit the screen sizes mobile as well as tablet.
                          </li>
                          <li>
                            Build and implement the full functions of the admin
                            page: user permissions, posts, payment methods,
                            deposit, withdrawal, notifications,...
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col sm={12} md={6} className='p-3'>
                      <h5 className='text-center'>Result</h5>
                      <div className='Result'>
                        <p>
                          Complete on time the assigned tasks in the process of
                          participating in the Viettlot project, and at the same
                          time participate in the process of testing the
                          website's functions to complete the necessary
                          functions.
                        </p>
                        <ul>
                          <li>
                            Cultivate more skills at work from everyone in the
                            company such as: search skills, teamwork skills,
                            work and time management skills, communication
                            skills at work.
                          </li>
                          <li>
                            Embrace new technology that is VueJs as well as
                            support libraries of VueJs:{' '}
                            <span className='my-color-green'>Vuex</span>,{' '}
                            <span className='my-color-green'>boostrapVue</span>,{' '}
                            <span className='my-color-green'>vue-router</span>.
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

WorkExperience.propTypes = {};

export default WorkExperience;
