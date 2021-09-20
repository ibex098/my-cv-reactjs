import React from 'react';

import AboutMe from 'components/AboutMe/AboutMe';
import Banner from 'components/Banner/Banner';
import CareerGoals from 'components/CareerGoals/CareerGoals';
import Contact from 'components/Contact/Contact';
import Education from 'components/Education/Education';
import Skills from 'components/Skills/Skills';
import WorkExperience from 'components/WorkExperience/WorkExperience';

function MyCVHome(props) {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const careerGoalsRef = useRef(null);
  // const skillsRef = useRef(null);
  // const contactRef = useRef(null);

  // useEffect(() => {
  //   let observer;

  //   if (
  //     homeRef.current &&
  //     aboutRef.current &&
  //     careerGoalsRef.current &&
  //     skillsRef.current &&
  //     contactRef.current
  //   ) {
  //     const option = {
  //       threshold: 0.2,
  //     };
  //     observer = new IntersectionObserver((entries, observer) => {
  //       console.log({ entries });
  //       entries.forEach((entry) => {
  //         const navElement = document.querySelector(
  //           `a[href="/#${entry.target.id}"]`
  //         );
  //         if (
  //           entry.isIntersecting &&
  //           !navElement.classList.contains("active")
  //         ) {
  //           navElement.classList.add("active");
  //         } else if (
  //           !entry.isIntersecting &&
  //           navElement.classList.contains("active")
  //         ) {
  //           navElement.classList.remove("active");
  //         }
  //       });
  //     }, option);
  //     observer.observe(homeRef.current);
  //     observer.observe(aboutRef.current);
  //     observer.observe(careerGoalsRef.current);
  //     observer.observe(skillsRef.current);
  //     observer.observe(contactRef.current);
  //   }
  //   return () => observer.disconnect();
  // }, [homeRef, aboutRef, careerGoalsRef, skillsRef, contactRef]);
  return (
    <>
      <Banner />
      <AboutMe />
      <CareerGoals />
      <Skills />
      <Education />
      <WorkExperience />
      <Contact />
      {/* <CareerGoals /> */}
    </>
  );
}

export default MyCVHome;
