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


const App = () => {
  return (
    <div className={styles.container}>
      <CustomCursor />
      <Intro />
      <Projects />
      <Contact />
      <Skills />
      <Hobbies />
      <Achievements />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
