import React from 'react';
import { Github, Mail, Phone, Linkedin, Twitter, Instagram, ExternalLink, MapPin, Coffee } from 'lucide-react';
import { MdCastForEducation } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { FaPerson } from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const styles = {
    footer: {
      background: 'linear-gradient(to right, #1a1a2e, #16213e)',
      color: '#ffffff',
      padding: '48px 0',
      width: '100%',
      maxWidth: window.innerWidth <= 760 ? '22rem' : '100%',
      margin:  window.innerWidth <= 760 ? '0rem auto 0rem 0rem' : '2rem auto 0rem auto',

      gridColumn: 'span 12',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '0px'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    heading: {
      fontSize: '20px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '16px'
    },
    text: {
      color: '#e0e0e0',
      lineHeight: '1.6',
      fontSize: '15px'
    },
    locationWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#e0e0e0'
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#e0e0e0',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    socialContainer: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px'
    },
    socialLink: {
      color: '#e0e0e0',
      transition: 'color 0.2s ease, transform 0.2s ease',
      cursor: 'pointer'
    },
    divider: {
      borderTop: '1px solid #2a2a3e',
      marginTop: '32px',
      paddingTop: '32px'
    },
    copyrightContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    },
    copyrightText: {
      color: '#888888',
      fontSize: '14px'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.gridContainer}>
          {/* About Section */}
          <div style={styles.section}>
            <p style={styles.text}>
              Thank you for exploring my portfolio! Feel free to connect with me on social media.
            </p>
            <div style={styles.locationWrapper}>
              <MapPin size={16} />
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Quick Links</h3>
            <div style={styles.linkContainer}>
              <div 
                onClick={() => scrollToSection('about')} 
                style={styles.link} 
                onMouseOver={e => e.target.style.color = '#ffffff'} 
                onMouseOut={e => e.target.style.color = '#e0e0e0'}
              >
                <FaPerson size={16} />
                <span>About Me</span>
              </div>
              <div 
                onClick={() => scrollToSection('skills')} 
                style={styles.link}
                onMouseOver={e => e.target.style.color = '#ffffff'} 
                onMouseOut={e => e.target.style.color = '#e0e0e0'}
              >
                <Coffee size={16} />
                <span>Skills</span>
              </div>
              <div 
                onClick={() => scrollToSection('academic')} 
                style={styles.link}
                onMouseOver={e => e.target.style.color = '#ffffff'} 
                onMouseOut={e => e.target.style.color = '#e0e0e0'}
              >
                <MdCastForEducation size={16} />
                <span>Education</span>
              </div>
              <div 
                onClick={() => scrollToSection('project')} 
                style={styles.link}
                onMouseOver={e => e.target.style.color = '#ffffff'} 
                onMouseOut={e => e.target.style.color = '#e0e0e0'}
              >
                <Github size={16} />
                <span>Projects</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Get in Touch</h3>
            <div style={styles.linkContainer}>
              <a href="tel:+919354718323" style={styles.link} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = '#e0e0e0'}>
                <Phone size={16} />
                <span>(+91) 9354718323</span>
              </a>
              <a href="mailto:prince12845sharma@gmail.com" style={styles.link} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = '#e0e0e0'}>
                <Mail size={16} />
                <span>prince12845sharma@gmail.com</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div style={styles.socialContainer}>
              <a 
                href="https://github.com/Prince-Sharma002" 
                style={styles.socialLink}
                onMouseOver={e => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.transform = 'translateY(0)';
                }}
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/prince-sharma-047973253/"
                style={styles.socialLink}
                onMouseOver={e => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.transform = 'translateY(0)';
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/prince128n7xq/"
                style={styles.socialLink}
                onMouseOver={e => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.transform = 'translateY(0)';
                }}
                aria-label="Twitter"
              >
                <SiGeeksforgeeks size={24} />
              </a>
              <a 
                href="https://medium.com/@prince12845sharma"
                style={styles.socialLink}
                onMouseOver={e => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.transform = 'translateY(0)';
                }}
                aria-label="Twitter"
              >
                <FaMediumM size={24} />
              </a>
              <a 
                href="https://twitter.com/prince007sharma"
                style={styles.socialLink}
                onMouseOver={e => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.transform = 'translateY(0)';
                }}
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.instagram.com/princeparasarrr/"
                style={styles.socialLink}
                onMouseOver={e => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.transform = 'translateY(0)';
                }}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={styles.divider}>
          <div style={styles.copyrightContainer}>
            <p style={styles.copyrightText}>
              © {currentYear} Prince Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;