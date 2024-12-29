// App.js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import CustomCursor from './components/CustomCursor';
import styles from './App.module.css';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import SkillsComponent from './components/SkillsComponent';
import SkillsCompo from './components/SkillsCompo';
import AcademicComponent from './components/AcademicComponent';


const App = () => {
  return (
    <div className={styles.container}>
      <CustomCursor />
      <Intro />
      <Projects />
      {/* <Contact /> */}
      {/* <Skills /> */}
      <Achievements />
      <SkillsCompo />
      <AcademicComponent />
      <Hobbies />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
