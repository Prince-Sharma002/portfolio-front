// components/Intro.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import styles from './style.module.css';
import img from '../assets/me.jpeg';
import CertificatesModal from './CertificatesModal';
import { FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope,  } from 'react-icons/fa';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaGithub } from 'react-icons/fa6';

const typewriter = keyframes`
  from { width: 0 }
  to { width: 60% }
`;

const blink = keyframes`
  from { border-color: transparent }
  to { border-color: orange }
`;

const highlightAnimation = keyframes`
  0% { background-size: 0 100%; }
  100% { background-size: 100% 100%; }
`;

const AnimatedTitle = styled.p`
  font-size: 0.5rem;
  color: #333;
  margin-top: 0.5rem;
  font-weight: 300;
  display: inline-block;
  overflow: hidden;
  border-right: 3px solid orange;
  white-space: nowrap;
  animation: 
    ${typewriter} 3s steps(40, end),
    ${blink} .75s step-end infinite;
  
  background: linear-gradient(to right, rgba(255,165,0,0.2) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  
  &.highlight {
    animation: ${highlightAnimation} 1s forwards;
    background-position: left bottom;
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1.3); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1.3); }
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  margin: 2rem auto;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: ${rotate} 10s linear infinite;
  }

  &::before {
    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    top: -50%;
    left: -50%;
  }

  &::after {
    background: linear-gradient(45deg, #a18cd1, #fbc2eb);
    bottom: -50%;
    right: -50%;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const ColoredCircle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${pulse} 2s infinite ease-in-out;

  &:nth-child(1) {
    background-color: #FFD700;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    background-color: #FF69B4;
    bottom: 20px;
    left: 20px;
  }

  &:nth-child(3) {
    background-color: #00CED1;
    bottom: 20px;
    right: 20px;
  }
`;

const SidePanelSlide = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const SidePanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #f8f8f8;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  padding: 2rem;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.open {
    animation: ${SidePanelSlide} 0.3s forwards;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ResumeContent = styled.div`
  margin-top: 2rem;
  a{
    text-decoration: none;
    }

  h2, h3, h4 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const SectionTitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

// certificates
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const buttonStyle = {
  backgroundColor: "transparent",
  color: "#FFD700",
  fontSize: "1rem",
  borderColor: "transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  marginLeft  : "0.5rem"
};

const iconStyle = {
  display: "inline-block",
  animation: "pulseRotate 2s infinite",
};

const animationStyles = `
  @keyframes pulseRotate {
    0% {
      transform: scale(1) rotate(0deg);
      color: gray;
    }
    50% {
      transform: scale(1.2) rotate(180deg);
      color: lightblue;
    }
    100% {
      transform: scale(1) rotate(360deg);
      color: gray;
    }
  }

  button:hover span {
    animation: pulseRotate 1s infinite;
  }
`;

const Intro = () => {
  const [showHighlight, setShowHighlight] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHighlight(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleCertificates = () => {
    setIsCertificatesOpen(!isCertificatesOpen);
  };


  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Set the language
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in this browser.');
    }
  };

  return (
    <>
      <section className={`${styles.section} ${styles.intro}`} data-glow>
        <div id='about' className={styles.introText}>
          <h1>About Me</h1>
          <p>I'm Prince Sharma</p>
          <AnimatedTitle className={showHighlight ? 'highlight' : ''}>
            Creative Developer & Designer
          </AnimatedTitle>
          <style>{animationStyles}</style>
          <p style={{ marginTop: "2rem" }}>
        I’m a B.Tech (CSE) student at ABESIT with a passion for creating unique and innovative projects. I specialize in MERN stack, Flask, Machine Learning in Python, Unity, and Firebase, with expertise in programming languages like C, C++, JavaScript, Python, Java, and SQL.
        <br />
        I love exploring new technologies and turning creative ideas into impactful solutions. Let's connect and build something amazing!  
        <button style={buttonStyle} onClick={() => speak("I am a, B Tech Computer Science student at A b e s i t with a passion for creating unique and innovative projects. I specialize in Mern stack, Flask, Machine Learning in Python, Unity, and Firebase, with expertise in programming languages like C, C++, JavaScript, Python, Java, and SQL. I love exploring new technologies and turning creative ideas into impactful solutions. Let's connect and build something amazing")}>
          <span style={iconStyle} >
            <HiMiniSpeakerWave />
          </span>
        </button>
      </p>
          
          <button className={styles.resume} onClick={togglePanel}>View Resume</button>
          <button className={styles.resume} onClick={toggleCertificates} >Show Certificates</button>
        </div>
        <AvatarContainer>
          <ColoredCircle />
          <ColoredCircle />
          <ColoredCircle />
          <AvatarWrapper>
            <AvatarImage src={img} alt="Avatar" />
          </AvatarWrapper>
        </AvatarContainer>
      </section>

      <SidePanel className={isPanelOpen ? 'open' : ''}>
        <CloseButton onClick={togglePanel}>&times;</CloseButton>
        <ResumeContent>
          <h2>Prince Sharma</h2>
          <p> <strong> Contact :</strong> <FaEnvelope /> <a style={{ textDecoration : "none" ,  }} href="mailto:prince12845sharma@gmail.com?subject=Contact me%20is%20I like to hear you">    prince12845sharma@gmail.com   </a> | <FaPhone /> (+91) 9354718323 </p>
          <p> <strong> Github :</strong> <FaGithub/>  <a href='https://github.com/Prince-Sharma002'> https://github.com/Prince-Sharma002 </a> </p>
          <p> <strong> Linkedin :</strong> <FaLinkedin/> <a href="https://www.linkedin.com/in/prince-sharma-047973253/"> www.linkedin.com/in/prince-sharma-047973253 </a>  </p>

          <br />

          <SectionTitle>Skills</SectionTitle>
          <ul>
            <li>Web Development: MERN Stack, Flask, Bootstrap, Tailwind CSS</li>
            <li>Programming Languages: C, C++, JavaScript, Python, Java, SQL</li>
            <li>Machine Learning: Python-based ML development</li>
            <li>Backend & Database: Firebase, MongoDB, MySQL</li>
            <li>Design Tools: Figma</li>
          </ul>

          <br />
          <SectionTitle>Education</SectionTitle>
          <p>B.Tech (CSE) - ABESIT (Pursuing) - <Highlight>CGPA: 7.98</Highlight> (2026)</p>
          <p>12th - BrightLand School - <Highlight>94.8%</Highlight> (2022)</p>
          <p>10th - BrightLand School - <Highlight>90%</Highlight> (2020)</p>

          <br />
          <SectionTitle>Academic Projects</SectionTitle>
          <p><Highlight>SOFIA</Highlight> - An Advanced Conversational AI Chatbot with Google’s PaLM API</p>
          <ul>
            <li>A Google PaLM API based Conversational Chatbot with additional functionalities of voice input, output and image processing - React.js, Bootstrap.</li>
            <li><a href="https://palmapi-67c47.web.app/" target="_blank" rel="noopener noreferrer"> App Link </a></li>
            <li><a href="https://tinyurl.com/35panaf8" target="_blank" rel="noopener noreferrer"> Medium Article </a></li>
          </ul>
          <p><Highlight>Weather Assistant</Highlight> - Voice operated APIs based Weather Application</p>
          <ul>
            <li>An OpenWeatherMap APIs based Weather Application for real-time weather information operated using user voice - React.js, SCSS, Firebase Authentication.</li>
            <li><a href="https://my-project-8cd2e.web.app/weather" target="_blank" rel="noopener noreferrer">App Link</a></li>
            <li><a href="https://tinyurl.com/35panaf8" target="_blank" rel="noopener noreferrer">Medium Article</a></li>
          </ul>
          <p><Highlight>Water Leakage Detector</Highlight> based on Pressure and Flow of Water pipeline</p>
          <ul>
            <li>A Random Forest model which detects water leakage in pipeline based on pressure and flow of water - Python (Django), HTML, CSS, JavaScript.</li>
            <li> <a href='https://github.com/Prince-Sharma002/Water-Leakage-Detection/tree/master' target='_blank' rel="noopener noreferrer"> Github Link </a>  </li>
          </ul>
          <p><Highlight>Study Pilot</Highlight> - Comprehensive Productivity Management Application</p>
          <ul>
            <li>Developed a productivity management application for college campuses, integrating a to-do list, notes, stopwatch, lost panel, and academic calendar - React.js, Firestore Database, Tailwind.</li>
            <li><a href="https://todo-app-alpha-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">App Link</a></li>
          </ul>

          <SectionTitle>Minor Projects</SectionTitle>
          <ul>
            <li>Contact Management Program - C++, CSV (<a href="https://github.com/Prince-Sharma002/CPP-Projects"  rel="noopener noreferrer">Github Link</a>) </li>
            <li>Response Saver Chatbot - Python (Flask), React.js, SCSS (<a href="https://github.com/Prince-Sharma002/Flask-React-chatbot" rel="noopener noreferrer">Github Link</a>)</li>
            <li>TextEdit Application - React.js (<a href="https://prince-sharma002.github.io/TextEdit/"  rel="noopener noreferrer">App Link</a>)</li>
            <li>Clone web page - Netflix, LinkedIn</li>
            <li>SPEAKIFY : Reading Application - React.js, Bootstrap (<a href="https://prince-sharma002.github.io/readingApp/" rel="noopener noreferrer">App Link</a>) </li>
          </ul>

          <br />
          <SectionTitle>Achievements</SectionTitle>
          <ul>
            <li>Smart India Hackathon (SIH) 2023 Winner - Worked on a project tackling Non-revenue water problem.</li>
            <li>IDEATHON 2.0 3rd Position - Developed an application Study Pilot, a management application for college campuses.</li>
            <li>Code-A-Thon 3.0 - 2nd Position.
Developed SegMap, an interactive map designed for disaster management and environmentalists.</li>
         
            <li>300+ Problems Solved on <a href="https://www.geeksforgeeks.org/user/prince128n7xq/"> GeeksforGeeks </a> </li>
         
          </ul>
          
          <br />
          <SectionTitle>ACTIVITIES and EXPERIENCE</SectionTitle>
            <ul>
                <li>
                  <p> <strong> 2024 GDGC ABESIT Core Member  </strong></p>
                  <p>Created the official ABESIT GDGC’24  website  and organized web development events to foster innovation and learning. </p>
                </li>
                <li>
                  <p> <strong>ISRO SIH'24 - Top 47 Team</strong> </p>
                  <p>
                  Secured a top 47 position in the Smart India Hackathon 2024, collaborating with ISRO mentors, including E and F-level scientists. Gained valuable insights into solving real-world challenges, enhancing technical expertise, teamwork, and innovation in a high-pressure environment.
                  </p>
                </li>
            </ul>
          <br/>
          <SectionTitle>Hobbies</SectionTitle>
          <ul>
            <li>Writing articles on platforms like <a href="https://auth.geeksforgeeks.org/user/prince128n7xq/articles"> GeeksforGeeks </a>  and  <a href="https://medium.com/@prince12845sharma"> Medium </a> </li>
            <li>Playing chess and kho-kho to enhance strategic thinking and teamwork.</li>
            <li>Enjoying guitar playing and sketching as creative hobbies.</li>
          </ul>
        </ResumeContent>
      </SidePanel>
      <CertificatesModal isOpen={isCertificatesOpen} onClose={toggleCertificates} />
    </>
  );
};

export default Intro;
