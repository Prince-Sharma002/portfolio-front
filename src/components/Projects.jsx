import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaMedium } from "react-icons/fa6";
import leakage from "../assets/leakage.png";
import sofia from "../assets/sofia.png";
import studypilot from "../assets/studypilot.png";
import weather from "../assets/weather.png";
import styles from './style.module.css';


const Section = styled.section`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  grid-column: span 8;
  overflow-y: scroll;
  margin-top: 1.5rem;
  height: 47rem;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  }

  /* Custom scrollbar styling */
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

const ProjectsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-column: span 8;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ProjectCard = styled.div`
  margin-top: 1rem;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap : 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const projects = [
  {
    title: "SOFIA - Advanced Conversational AI Chatbot",
    description: "A Google PaLM API based Conversational Chatbot with voice input/output and image processing - React.js, Bootstrap.",
    image: sofia,
    appLink: "https://palmapi-67c47.web.app/",
    articleLink: "https://tinyurl.com/35panaf8"
  },
  {
    title: "Weather Assistant",
    description: "A voice-operated OpenWeatherMap API-based Weather Application for real-time weather information - React.js, SCSS, Firebase Authentication.",
    image: weather,
    appLink: "https://my-project-8cd2e.web.app/",
    articleLink : "https://medium.com/@prince12845sharma/building-a-dynamic-weather-application-with-voice-and-text-search-in-react-729fc5d6717e"
  },
  {
    title: "Water Leakage Detector",
    description: "A Random Forest model to detect water leakage in pipelines based on pressure and flow of water - Python (Django), HTML, CSS, JavaScript.",
    image: leakage,
    gitLink : "https://github.com/Prince-Sharma002/Water-Leakage-Detection/tree/master"
  },
  {
    title: "Study Pilot",
    description: "A comprehensive productivity management application for college campuses, integrating a to-do list, notes, stopwatch, lost panel, and academic calendar - React.js, Firestore Database, Tailwind.",
    image: studypilot,
    appLink : "https://todo-app-alpha-gilt.vercel.app/"
  }
];

const Projects = () => {
  return (
    <Section>
      <h2  className={styles.heading}>My Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
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
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;
