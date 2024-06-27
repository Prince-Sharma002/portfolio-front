import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

const AchievementsSection = styled.section`
  background: linear-gradient(135deg, white 0%, white  100%);
  padding: 4rem 2rem;
  color: black;
  grid-column: span 12;
  border-radius:20px;
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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
 
  margin: 0 auto;
`;

const AchievementCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

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
`;

const AchievementDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const achievements = [
  {
    icon: <FaTrophy />,
    title: "1st Place Hackathon",
    description: "Won first place in the Smart India Hackathon"
  },
  {
    icon: <FaMedal />,
    title: "3rd Position",
    description: "Secured 3rd place in Mini Project 2nd Year"
  },
  {
    icon: <FaAward />,
    title: "3+ Microsoft Badges",
    description: "Acheived 3+ Microsoft Badges in different fields of technology"
  },
  {
    icon: <FaCertificate />,
    title: "200+ Problems Solved",
    description: "Solved 200+ DSA problems of GeeksForGeeks"
  }
];

const Achievements = () => {
  return (
    <AchievementsSection>
      <SectionTitle>Achievements</SectionTitle>
      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index}>
            <IconWrapper>{achievement.icon}</IconWrapper>
            <AchievementTitle>{achievement.title}</AchievementTitle>
            <AchievementDescription>{achievement.description}</AchievementDescription>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </AchievementsSection>
  );
};

export default Achievements;