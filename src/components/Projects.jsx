
import leakage from "../assets/leakage.png";
import sofia from "../assets/sofia.png";
import studypilot from "../assets/studypilot.png";
import weather from "../assets/weather.png";
import complainbox from "../assets/complainbox.png";
import titanic from "../assets/titanic.png";

import styles from './style.module.css';

import React ,{useState} from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaMedium } from "react-icons/fa6";
import ProjectBucket from "./ProjectBucket";

const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  grid-column: span 8;
  overflow-y: auto;
  margin-top: 1.5rem;
  height: 52.5rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2d3748;
  border-bottom: 4px solid #4299e1;
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  position: relative;
  border: 2px solid gray;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;


const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover img {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
  color: white;
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
  pointer-events: none;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;


const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #4299e1;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  display: ${props => props.isExpanded ? 'block' : '-webkit-box'};
  -webkit-line-clamp: ${props => props.isExpanded ? 'none' : '3'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: gray;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    color: #2b6cb0;
    text-decoration: none;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e2e8f0;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4299e1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2b6cb0;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const ProjectCardcompo = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s ease',
      position: 'relative',
      border: '2px solid gray',
    }}>
      <ProjectImage>
        <img src={project.image} alt={project.title} />
        <ImageOverlay>
          <p>Click to learn more about {project.title}</p>
        </ImageOverlay>
      </ProjectImage>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription isExpanded={isExpanded}>
          {project.description}
        </ProjectDescription>
        <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '↑ Show Less' : '↓ Read More'}
        </ReadMoreButton>
        <ProjectLinks>
          {project.appLink && (
            <ProjectLink href={project.appLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </ProjectLink>
          )}
          {project.articleLink && (
            <ProjectLink href={project.articleLink} target="_blank" rel="noopener noreferrer">
              <FaMedium /> Article
            </ProjectLink>
          )}
          {project.gitLink && (
            <ProjectLink href={project.gitLink} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Github
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectInfo>
    </div>
  );
};


const Projects = () => {



  const projects = [
    {
      title: "Streamline Complaints Management with Real-Time Insights 📩 ",
      description: "Streamline your complaint box with a dashboard and dynamic map. Notify users of complaint progress via email for transparency and efficiency - MERN Stack, MapBox Map",
      image: complainbox,
      appLink: "https://complain-frontend.vercel.app/",
      gitLink: "https://github.com/Prince-Sharma002/Complain-Portal-MERN"
    },
    {
      title: "SOFIA - Advanced Conversational AI Chatbot 🤖",
      description: "A Google PaLM API based Conversational Chatbot with voice input/output and image processing - React.js, Bootstrap.",
      image: sofia,
      appLink: "https://palmapi-67c47.web.app/",
      articleLink: "https://tinyurl.com/35panaf8"
    },
    {
      title: "Weather Assistant  🌤️",
      description: "A voice-operated OpenWeatherMap API-based Weather Application for real-time weather information - React.js, SCSS, Firebase Authentication.",
      image: weather,
      appLink: "https://my-project-8cd2e.web.app/",
      articleLink: "https://medium.com/@prince12845sharma/building-a-dynamic-weather-application-with-voice-and-text-search-in-react-729fc5d6717e"
    },
    {
      title: "Titanic Survival Prediction 🚢",
      description: "I developed using a DecisionTreeClassifier and deployed with Streamlit for an intuitive and interactive user experience.",
      image: titanic,
      appLink: "https://prince-sharma002-titanic-survey-streamlit-app-wkgjq7.streamlit.app/#titanic-survival-prediction",
      gitLink: "https://github.com/Prince-Sharma002/Water-Leakage-Detection/tree/master"
    },
    {
      title: "Water Leakage Detector💧 ",
      description: "A Random Forest model to detect water leakage in pipelines based on pressure and flow of water - Python (Django), HTML, CSS, JavaScript.",
      image: leakage,
      gitLink: "https://github.com/Prince-Sharma002/Water-Leakage-Detection/tree/master"
    },
    {
      title: "Study Pilot📝",
      description: "A comprehensive productivity management application for college campuses, integrating a to-do list, notes, stopwatch, lost panel, and academic calendar - React.js, Firestore Database, Tailwind.",
      image: studypilot,
      appLink : "https://todo-app-alpha-gilt.vercel.app/",
    },
    {
      title: "Study Pilot📝",
      description: "A comprehensive productivity management application for college campuses, integrating a to-do list, notes, stopwatch, lost panel, and academic calendar - React.js, Firestore Database, Tailwind.",
      image: studypilot,
      appLink : "https://todo-app-alpha-gilt.vercel.app/",
    },
    {
      title: "Study Pilot📝",
      description: "A comprehensive productivity management application for college campuses, integrating a to-do list, notes, stopwatch, lost panel, and academic calendar - React.js, Firestore Database, Tailwind.",
      image: studypilot,
      appLink : "https://todo-app-alpha-gilt.vercel.app/",
    },
  ];

  return (
    <Section>
    <SectionTitle>My Projects</SectionTitle>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCardcompo key={index} project={project} />
      ))}
    </ProjectsGrid>
    <ProjectBucket />
  </Section>

  );
};

export default Projects;

