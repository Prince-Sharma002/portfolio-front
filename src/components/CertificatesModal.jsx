import React, { useState } from 'react';
import { ExternalLink, Download, Info } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

// Import your images
import sih from '../assets/sih.jpeg';
import ideathon from '../assets/ideathon.jpeg';
import python from '../assets/python.png';
import ip from '../assets/ip.jpeg';
import isro from '../assets/isro.jpeg';
import codeathon from '../assets/codeathon.jpeg';
import hacknovate from "../assets/hacknovate6.jpg"
import drdo from "../assets/DRDO.jpg"
import cloud from "../assets/AWS Cloud Certificate.jpg"
import devops from "../assets/AWS DevOps.jpg"
import container from "../assets/Container Certificate.jpg"

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const modalAppear = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);


`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 90%; // Changed from max-width to width
  min-width: 1200px; // Added minimum width
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${modalAppear} 0.3s ease-out;
  
  @media (max-width: 1280px) {
    min-width: auto;
    width: 90%;
  }


  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  z-index: 1;
  color: #666;
  transition: color 0.3s ease;
  
  &:hover {
    color: #000;
  }
`;

const CertificateCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
  min-width: 300px; // Added minimum width
  width: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 760px) {
    font-size: 0.6rem; 
    left:-90px; 
    }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.67%; // Changed to 3:2 aspect ratio
  overflow: hidden;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 1rem;
  
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), transparent);
  padding: 2rem 1rem 1rem;
  color: white;
  transform: translateY(-60%);
  transition: transform 0.3s ease;
  
  ${CertificateCard}:hover & {
    transform: translateY(0);
    animation: ${slideUp} 0.3s ease-out;
  }
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;

  ${CertificateCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IconButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
`;

const CertificatesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const certificates = [
    { 
      id: 1, 
      title: "SIH 2023 Winner", 
      date: "2023-12-20", 
      image: sih,
      linkdinLink : "https://www.linkedin.com/posts/prince-sharma-047973253_smartindiahackathon-digitalabrdruids-sih2023-activity-7144621869306945536-VaMe?utm_source=share&utm_medium=member_desktop",
      description: (
        <>
          Winner 🏆 of Smart India Hackathon 2023 - Developed an innovative solution for real-world problems.
          <br /><br />
          <strong>Project:</strong> Flow-tech Repairs <br />
          <strong>Problem Statement:</strong> 1288 (Ministry of Jal Shakti) <br /><br />
          <strong>Problem Tackled:</strong> Non-Revenue Water (NRW) transformation into Revenue Water. <br />
          <strong>Solution:</strong> Created "Flow-tech Repairs," an app for managing pipeline leakage complaints. <br />
          <strong>ML Model:</strong> Utilized the Hazen-Williams equation for validating NRW data and calculating water loss. <br />
          <strong>Mapping Integration:</strong> Interactive maps display leakage-prone areas and complaint zones.
        </>
      ),
    },
    { 
      id: 1, 
      title: "Project Intern @DRDO", 
      date: "2025-06-06", 
      image: drdo,
      description: (
        <>
          <br /><br />
          <strong>Project:</strong> AI Fairness Detection System <br />
          <strong>Solution:</strong> Designed an AI fairness evaluation system to detect bias in ML models. <br />
          <strong>Tech Stack:</strong>  Flask, AIF360, React, and statistical metrics to analyze bias across protected attributes <br />
        </>
      ),
    },
    { 
      id: 2, 
      title: "IDEATHON 2.0 3rd Position", 
      date: "2024-1-17", 
      image: ideathon,
      linkdinLink : "https://www.linkedin.com/posts/prince-sharma-047973253_reactjs-firebase-developer-activity-7154081852335525888-J5fU?utm_source=share&utm_medium=member_desktop",
      description: (
        <>
            Secured the 3rd 🏆 position in IDEATHON 2.0 held at ABESIT, competing against over 200 teams consisting of 2nd-year B.Tech and 1st-year MCA students!
            <br/>
            <br/>
            <strong> Project </strong>: To-Do List App for Academic Events and Lost Items
            <br/> <br/>
            <strong>Technology Stack:</strong>
            <ul>
              <li>
              <strong> Frontend </strong>: Built with React, offering a responsive and intuitive design.
              </li>
              <li>
              <strong> Backend </strong>: Firebase for seamless data storage and real-time syncing.
              </li>
            </ul>

        </>
      )
  
    },
    { 
      id: 3, 
      title: "ISRO SIH'24 - Top 47 Team", 
      date: "2024-12-14", 
      image: isro,
      linkdinLink : "https://www.linkedin.com/posts/prince-sharma-047973253_sih2024-techfixer-isro-activity-7277622696543186944-aGt4?utm_source=share&utm_medium=member_desktop",
      description: (
        <>
          As part of Team TECH FIXER, we had the honor of addressing ISRO’s challenging.

          <br/> <br/>
          <strong> Problem </strong> : On-device semantic segmentation of WMS services with geospatial data export.
          <br/>
          <strong> Problem Statement: </strong>  1735 (ISRO)
          <br/> <br/>
          Out of thousands of participants, we ranked among the top 47 teams in India for ISRO's problem statements. This grand finale journey was a transformative experience, filled with intense competition and invaluable lessons.
          <br/> <br/>
        </>
      )
    },
    { 
      id: 4, 
      title: "Code-A-Thon 3.0 2nd Position", 
      date: "2024-12-24", 
      image: codeathon,
      linkdinLink : "https://www.linkedin.com/posts/prince-sharma-047973253_codeathon-teamwork-disastermanagement-activity-7278487141259661316-8a7t?utm_source=share&utm_medium=member_desktop",
      description: (
        <>
          Proud to have secured the Consolation Prize in the CSE Department's Code-A-Thon 3.0 during Year 3 at ABESIT!
          <br/> <br/>
          Among the many remarkable projects, our submission, SegMap: An Interactive Map for Disaster Management and Environmentalists, stood out and was recognized for its innovation and impact.
          <br/> <br/>
          <strong>SegMap </strong> is built using the <strong> MERN stack </strong> and integrated with an <strong> ML analysis tool </strong> for disaster data in <strong> GeoJSON </strong>, aiming to revolutionize disaster management and environmental visualization.
        </>
      )
    },
    { 
      id: 5, 
      title: "Hacknovate 6.0 Tech Lead", 
      date: "2025-03-05", 
      image: hacknovate,
      linkdinLink : "https://www.linkedin.com/posts/prince-sharma-047973253_hacknovate6-techteam-hackathonjourney-activity-7316085944757932032-x_12?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6c53cBRZ6cLuxGieb3FvPGLWbXCN6UTMs",
      description: (
        <>
         Led technical setup, event execution, and partnerships. Actively contribute in Hacknovate 6.0 official website for a seamless user experience.
        </>
      )
    },
    { 
      id: 5, 
      title: "AWS Cloud Essentials", 
      date: "2025-07-08", 
      image: cloud,
      description: (
        <>
        Architected and maintained AWS cloud solutions, leveraging services like EC2, S3, and Lambda to enhance scalability, reliability, and cost efficiency across projects.
        </>
      )
    },
    { 
      id: 5, 
      title: "AWS DevOps", 
      date: "2025-07-08", 
      image: devops,
      description: (
        <>
          Designed and implemented CI/CD pipelines using AWS DevOps tools, optimizing deployments and infrastructure automation. Improved system efficiency, reliability, and scalability for robust application delivery.     
          
        </>
      )
    },

    { 
      id: 6, 
      title: "Basic of Python Completion", 
      date: "2023-08-31", 
      image: python,
      description: "Completed comprehensive Python programming course covering fundamentals and advanced concepts"
    },
    { 
      id: 7, 
      title: "12th Informatics Practices Topper", 
      date: "2022-06-23", 
      image: ip,
      description: (
        <>
        Achieved top rank in 12th-grade <strong> Informatics Practices </strong> with an outstanding score of <strong> 97 marks </strong>.
        <br/> <br/>
        Throughout the course, I gained foundational knowledge in <strong>SQL basics</strong>, mastering concepts like database queries and operations, and <strong>Python programming</strong>, exploring its applications in data manipulation and automation. 
        <br/> <br/>
        This solidified my interest in technology and programming and laid the groundwork for my future pursuits in computer science.
        </>
      )
    }
  ];

  const handleImagePreview = (image) => {
    window.open(image, '_blank');
  };

  const handleDownload = async (image, title) => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">My Certificates</h2>
        
        <div className="" style={{padding:"5rem" , marginBottom:"3rem"}} >
          {certificates.map((cert) => (
            <CertificateCard style={{marginBottom:"2rem"}} key={cert.id}>
              <CertificateGrid>
              <ImageContainer>
                <CertificateImage src={cert.image} alt={cert.title} />
                <ActionButtons>
                  <IconButton
                    onClick={() => handleImagePreview(cert.image)}
                    title="Preview"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDownload(cert.image, cert.title)}
                    title="Download"
                  >
                    <Download className="w-5 h-5 text-gray-700" />
                  </IconButton>
                </ActionButtons>
              </ImageContainer>
                  <div style={{ textAlign: "center" }}>
                    <h1 className="text-xxxl font-bold mb-2">{cert.title}</h1>
                    <p className="text-sm mb-2">{cert.date}</p>
                    <p className="text-sm opacity-90" style={{ textAlign: "left" }}>
                    <a 
                      href={cert.linkdinLink} 
                      style={{
                        textAlign: "left", 
                        display: "block", 
                        color: "#0A66C2", // LinkedIn brand color
                        textDecoration: "none", 
                        fontWeight: "bold", 
                        marginBottom: "1rem"
                      }}
                    >
                      LinkedIn
                    </a>
                      {cert.description}
                    </p>
                  </div>
              </CertificateGrid>
            </CertificateCard>
          ))}
        </div>
      </ModalContent>
    </ModalBackground>
  );
};

export default CertificatesModal;