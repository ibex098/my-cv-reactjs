import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Banner from '../../components/Banner/Banner';
import CareerGoals from '../../components/CareerGoals/CareerGoals';
import Education from '../../components/Education/Education';
import MyHeader from '../../components/Header/MyHeader';
import Skills from '../../components/Skills/Skills';




function MyCVHome(props) {
  return (
    <>
      <MyHeader />
      <Banner />
      <AboutMe />
      <Education />
      <CareerGoals />
      <Skills />
      {/* <CareerGoals /> */}
    </>
  );
}

export default MyCVHome;