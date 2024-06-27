import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #2c3e50, #3498db);
  color: #ecf0f1;
  padding: 3rem 0;
  grid-column: span 12;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: center;
  margin: 1rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bolder;
`;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e74c3c;
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <ColumnTitle>Call</ColumnTitle>
          <ColumnContent>
            <IconWrapper>
              <FaPhone />
              <span>123-456-7890</span>
            </IconWrapper>
          </ColumnContent>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Write</ColumnTitle>
          <ColumnContent>
            <IconWrapper>
              <FaEnvelope />
              <span>prince12845sharma@gmail.com</span>
            </IconWrapper>
          </ColumnContent>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Follow</ColumnTitle>
          <ColumnContent>
            <SocialIcons>
              <IconLink href="https://www.instagram.com/princeparasarrr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/prince-sharma-047973253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </IconLink>
              <IconLink href="https://x.com/prince007sharma" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </IconLink>
            </SocialIcons>
          </ColumnContent>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;