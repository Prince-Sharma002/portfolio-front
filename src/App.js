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

const bubbleColors = ['#3B82F6', '#22C55E', '#A855F7', '#F97316'];

const App = () => {
  useEffect(() => {
    const createBubbles = () => {
      const container = document.body;
      for (let i = 0; i < 50; i++) {
        const bubble = document.createElement('div');
        const size = Math.random() * 10 + 5; // Random size between 5px and 15px
        const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

        Object.assign(bubble.style, {
          position: 'absolute',
          borderRadius: '50%',
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animation: `float ${Math.random() * 10 + 5}s linear infinite`,
          opacity: 0.7,
          zIndex : -1,
        });

        container.appendChild(bubble);

        // Remove the bubble after the animation
        bubble.addEventListener('animationend', () => {
          container.removeChild(bubble);
        });
      }
    };

    createBubbles();
  }, []);

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
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
