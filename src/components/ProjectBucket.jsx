import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDribbble, FaMedium } from 'react-icons/fa';
import { FcSpeaker ,FcMusic , FcBullish, FcAlarmClock , FcCommandLine} from "react-icons/fc";
import { MdLocalGroceryStore } from "react-icons/md";
import { PiDiceOneDuotone } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";


const BucketContainer = styled.div`
  position: absolute;
  width: 12.5rem;
  height: 12.5rem;
  margin: 20px auto;
  z-index:200;
  top:45rem;
  right:1rem;
  @media (max-width: 768px) {  /* Target mobile screens */
    top: 52rem;
  }

`;

const BucketBody = styled.div`
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 160px;
  background: linear-gradient(45deg,rgb(255, 148, 77),rgba(255, 251, 7, 1));
  border-radius: 0 0 100px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 4px solid rgb(228, 148, 0);
  border-top: none;
  box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 760px) {
      font-size: 0.6rem;
      width:  100px;
      height:  6rem; 
      bottom:-750px; 
      right:10px;
      border: 2px solid rgb(228, 148, 0);
    }

  `;

const BucketRim = styled.div`
  position: absolute;
  top: 40px;
  width: 220px;
  height: 10px;
  background:rgb(0, 206, 209);
  left: -10px;
  border-radius: 15px;
  z-index: 2;

  @media (max-width: 760px) {
      left: -50px;
      width: 8.2rem;
      height: 5px; 
      top: 852px; 
    }
`;

const IconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const SocialIcon = styled.a`
  color:rgb(255, 79, 167);
  font-size: 1.8rem;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
    transform: translateY(-5px) rotate(${props => Math.random() * 30 - 15}deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectBucket = () => {
  const icons = [
    { Icon: FcSpeaker, link: 'https://prince-sharma002.github.io/readingApp/', position: { left: '6%', top: '50%' } },
    { Icon: FcMusic, link: 'https://web-development-sigma-eight.vercel.app/', position: { left: '30%', top: '50%' } },
    { Icon: MdLocalGroceryStore, link: 'https://web-development-264p.vercel.app/', position: { left: '40%', top: '80%' } },
    { Icon: FaInstagram, link: 'https://web-development-bqr7.vercel.app/#', position: { left: '20%', top: '70%' } },
    { Icon: PiDiceOneDuotone, link: 'https://web-development-xzi8.vercel.app/', position: { left: '60%', top: '70%' } },
    { Icon: FcAlarmClock, link: 'https://web-development-szbk.vercel.app/', position: { left: '75%', top: '57%' } },
    { Icon: FcCommandLine, link: 'https://prince-sharma002.github.io/TextEdit/', position: { left: '45%', top: '60%' } },
    { Icon: FcBullish, link: 'https://prince-sharma002-bengaluru-price-prediction-bac-stramlit-o58iyt.streamlit.app/', position: { left: '60%', top: '47%' } },
    { Icon: IoLogoJavascript, link: 'https://web-development-zlyv.vercel.app/', position: { left: '80%', top: '37%' } },
  ];

  return (
    <BucketContainer
    style={{
      width: window.innerWidth <= 760 ? '5rem' : '12.5rem',
    }}

    >
      <BucketRim />
      <BucketBody
            style={{
              width: window.innerWidth <= 760 ? '7rem' : '12.5rem',
            
            }}
      >
        <h1 className='font-extrabold' style={{position : "relative" , bottom : "30px"}}>Mini Projects</h1>
        {icons.map((icon, index) => (
          <IconContainer
            key={index}
            style={{

              left: icon.position.left,
              top: icon.position.top,
              zIndex: Math.floor(Math.random() * 3) + 1,
            }}
          >
            <SocialIcon 
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                width: window.innerWidth <= 760 ? '20px' : '40px',
                height: window.innerWidth <= 760 ? '20px' : '40px',
              }}

            >
              <icon.Icon />
            </SocialIcon>
          </IconContainer>
        ))}
      </BucketBody>
    </BucketContainer>
  );
};

export default ProjectBucket;