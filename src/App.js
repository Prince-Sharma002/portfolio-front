// App.js
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import SkillsCompo from './components/SkillsCompo';
import AcademicComponent from './components/AcademicComponent';
import styles from './App.module.css';
import ProjectBucket from './components/ProjectBucket';
const App = () => {

  return (
    <div  className={styles.container}>
      <Intro />
      <Projects />
      <SkillsCompo />
      <AcademicComponent />
      <Hobbies />
      <Achievements />
      
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
