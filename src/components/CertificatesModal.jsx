import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ideathon from '../assets/ideathon.jpeg';
import ip from '../assets/ip.jpeg';
import python from '../assets/python.png';
import sih from '../assets/sih.jpeg';

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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  animation: ${modalAppear} 0.3s ease-out;
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

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const CertificateCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

const CertificateTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const CertificateDate = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const CertificatesModal = ({ isOpen, onClose }) => {
  const certificates = [
    { id: 1, title: "SIH 2023 Winner", date: "2023-12-20", image: sih },
    { id: 2, title: "IDEATHON 2.0 3rd Position", date: "2024-1-17", image : ideathon },
    { id: 3, title: "Basic of Python Completion", date: "2023-08-31", image : python },
    { id: 3, title: "12th Informatics Practices Topper ", date: "2022-06-23", image : ip },
  ];

  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>My Certificates</h2>
        <CertificateGrid>
          {certificates.map((cert) => (
            <CertificateCard key={cert.id}>
              <CertificateImage src={cert.image} alt={cert.title} />
              <CertificateTitle>{cert.title}</CertificateTitle>
              <CertificateDate>{cert.date}</CertificateDate>
            </CertificateCard>
          ))}
        </CertificateGrid>
      </ModalContent>
    </ModalBackground>
  );
};

export default CertificatesModal;