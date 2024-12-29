import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

const AchievementsSection = styled.section`
  background: linear-gradient(135deg, white 0%, white 100%);
  padding: 4rem 2rem;
  color: black;
  grid-column: span 12;
  border-radius: 20px;
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

const AchievementCard = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
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
    title: "SIH'23 Winner",
    description: "Won first place in the Smart India Hackathon",
    link: 'https://www.sih.gov.in' // Example link
  },
  {
    icon: <FaMedal />,
    title: "3rd Position",
    description: "Secured 3rd place in <Ideathon 2.0> Hackathon",
    link: 'https://www.ideathon.com' // Example link
  },
  {
    icon: <FaAward />,
    title: "GDGC Core Member",
    description: "Web Developer Core Member @GDGC ABESIT'24",
    link: 'https://gdgc.com' // Example link
  },
  {
    icon: <FaCertificate />,
    title: "300+ Problems Solved",
    description: "Solved 300+ DSA problems of GeeksForGeeks",
    link: 'https://www.geeksforgeeks.org' // Example link
  }
];

const Achievements = () => {
  return (
    <AchievementsSection>
      <SectionTitle> Top Achievements</SectionTitle>
      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} href={achievement.link} target="_blank" rel="noopener noreferrer">
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
