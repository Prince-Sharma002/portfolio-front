import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { PiCodeThin } from "react-icons/pi";

const AchievementsSection = styled.section`
  background: linear-gradient(135deg, white 0%, white 100%);
  padding: 4rem 2rem;
  color: black;
  grid-column: span 12;
  border-radius: 20px;
  overflow: hidden; // Ensure no scrollbar appears outside the section
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  color: rgb(63, 63, 63);
  font-size: 2.5rem;
  font-weight: bolder;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #FFC107;
    margin: 0.5rem auto 0;
  }
`;

const AchievementsContainer = styled.div`
  position: relative;
  padding: 0 20px;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    background: linear-gradient(to right, transparent, white);
    pointer-events: none;
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(25% - 20px); // Show exactly 4 items in desktop
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // IE and Edge
  padding-bottom: 20px; // Space for scrollbar

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  @media (max-width: 1200px) {
    grid-auto-columns: calc(33.33% - 20px);
  }

  @media (max-width: 768px) {
    grid-auto-columns: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    grid-auto-columns: calc(100% - 20px);
  }
`;

const AchievementCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 250px; /* Ensure consistent height */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;


const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FFC107;
`;

const AchievementTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const AchievementDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const ReadMoreLink = styled.a`
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  margin-top: auto;
  align-self: flex-start;
  
  &:hover {
    text-decoration: underline;
  }
`;


const StyledArrowIcon = styled(FaArrowRight)`
  position: absolute;
  right: 1rem;
  color: gray;
  font-size: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  transition: color 0.3s ease;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};

  &:hover {
    color: #007BFF;
  }
`;

const StyledLeftArrowIcon = styled(FaArrowLeft)`
  position: absolute;
  left: 1rem;
  color: gray;
  font-size: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  transition: color 0.3s ease;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};

  &:hover {
    color: #007BFF;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;




// Your achievements array remains the same
const achievements = [
  {
    icon: <FaTrophy />,
    title: "Smart India Hackathon'23 Winner",
    description: "secured first place in the prestigious Smart India Hackathon, organized under the Ministry of Jal Shakti.",
    link: 'https://www.linkedin.com/posts/prince-sharma-047973253_smartindiahackathon-digitalabrdruids-sih2023-activity-7144621869306945536-VaMe?utm_source=share&utm_medium=member_desktop' // Example link
  },
  {
    icon: <FaMedal />,
    title: "IDEATHON 2.0 3rd Position",
    description: "secured 3rd place in the Ideathon 2.0 Hackathon at ABESIT, competing among all 2nd-year students.",
    link: 'https://www.linkedin.com/posts/prince-sharma-047973253_reactjs-firebase-developer-activity-7154081852335525888-J5fU/?utm_source=share&utm_medium=member_desktop' // Example link
  },
  {
    icon: <FaAward />,
    title: " Core Member - Web Developer @GDGC ABESIT'24",
    description: "I’m proud to be a Core Member of the Web Development team at GDGC ABESIT'24, contributing to innovative projects.",
    link: 'https://www.linkedin.com/posts/prince-sharma-047973253_googledevelopers-gdsc-abesit-activity-7245896128531996672-z9zn?utm_source=share&utm_medium=member_desktop' // Example link
  },
  {
    icon: <FaCertificate />,
    title: "300+ DSA Problems Solved on GeeksForGeeks",
    description: "I solved 300+ DSA problems on GeeksForGeeks, improving my problem-solving skills and understanding of algorithms.",
    link: 'https://www.geeksforgeeks.org/user/prince128n7xq/' // Example link
  },
  {
    icon: <IoMdRocket />,
    title: "ISRO SIH'24 - Top 47 Team",
    description: "Out of thousands of participants, we ranked among the top 47 teams in India for ISRO's problem statements.",
    link: 'https://www.linkedin.com/posts/prince-sharma-047973253_sih2024-techfixer-isro-activity-7277622696543186944-aGt4/?utm_source=share&utm_medium=member_desktop' // Example link
  },
  {
    icon: <PiCodeThin />,
    title: "Code-A-Thon 3.0 2nd Position",
    description: "secured the Consolation Prize in the CSE Department's Code-A-Thon 3.0 during my 3rd year at ABESIT",
    link: 'https://www.linkedin.com/posts/prince-sharma-047973253_codeathon-teamwork-disastermanagement-activity-7278487141259661316-8a7t/?utm_source=share&utm_medium=member_desktop' // Example link
  },
  // ... other achievements
];

const Achievements = () => {

  const gridRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // -10 for small buffer
    }
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('scroll', checkScrollPosition);
      // Check initial state
      checkScrollPosition();
    }
    return () => {
      if (grid) {
        grid.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const scrollRight = () => {
    if (gridRef.current) {
      const scrollAmount = gridRef.current.clientWidth;
      gridRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    if (gridRef.current) {
      const scrollAmount = gridRef.current.clientWidth;
      gridRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AchievementsSection>
      <SectionTitle>Top Achievements</SectionTitle>
      <AchievementsContainer>
        <StyledLeftArrowIcon 
          onClick={scrollLeft} 
          show={showLeftArrow}
        />
        <AchievementsGrid ref={gridRef}>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index}>
              <CardContent>
                <IconWrapper>{achievement.icon}</IconWrapper>
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementDescription>{achievement.description}</AchievementDescription>
                <ReadMoreLink 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read More
                </ReadMoreLink>
              </CardContent>
            </AchievementCard>
          ))}
        </AchievementsGrid>
        <StyledArrowIcon 
          onClick={scrollRight} 
          show={showRightArrow}
        />
      </AchievementsContainer>
    </AchievementsSection>
  );
};

export default Achievements;