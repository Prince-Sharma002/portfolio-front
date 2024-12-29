import React, { useState } from 'react';

const SkillsCompo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = [
    {
      category: "Web Development",
      icon: "🌐",
      items: ["MERN Stack", "Flask", "Bootstrap", "Tailwind CSS"],
      color: "#3B82F6",
      shadowColor: "rgba(59, 130, 246, 0.5)"
    },
    {
      category: "Programming Languages",
      icon: "💻",
      items: ["C", "C++", "JavaScript", "Python", "Java", "SQL"],
      color: "#22C55E",
      shadowColor: "rgba(34, 197, 94, 0.5)"
    },
    {
      category: "Machine Learning",
      icon: "🧠",
      items: ["Python-based ML development"],
      color: "#A855F7",
      shadowColor: "rgba(168, 85, 247, 0.5)"
    },
    {
      category: "Backend & Database",
      icon: "🗄️",
      items: ["Firebase", "MongoDB", "MySQL"],
      color: "#F97316",
      shadowColor: "rgba(249, 115, 22, 0.5)"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px',
      gridColumn: 'span 12', 
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '48px',
      background: 'linear-gradient(to right, #3B82F6, #A855F7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'fadeIn 0.5s ease-out',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
      gap: '24px',
    },
    card: (index, isHovered, color, shadowColor) => ({
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.5s ease',
      boxShadow: isHovered 
        ? `0 10px 30px -10px ${shadowColor}` 
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`,
    }),
    header: (color, isHovered) => ({
      backgroundColor: color,
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      paddingLeft: isHovered ? '24px' : '16px',
      transition: 'all 0.3s ease',
    }),
    icon: (isHovered) => ({
      fontSize: '24px',
      transform: isHovered ? 'rotate(12deg) scale(1.1)' : 'rotate(0) scale(1)',
      transition: 'transform 0.3s ease',
    }),
    categoryTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '600',
      margin: 0,
    },
    skillsContainer: {
      padding: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(4px)',
    },
    skillsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    skill: (isHovered, color) => ({
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      backgroundColor: isHovered ? color : '#f3f4f6',
      color: isHovered ? 'white' : '#4b5563',
      opacity: isHovered ? 0.9 : 1,
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'scale(1.1)',
        opacity: 1,
      },
    }),
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <h2 style={styles.title}>My Skills</h2>
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <div 
              key={index}
              style={styles.card(index, hoveredCard === index, skill.color, skill.shadowColor)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.header(skill.color, hoveredCard === index)}>
                <span style={styles.icon(hoveredCard === index)}>{skill.icon}</span>
                <h3 style={styles.categoryTitle}>{skill.category}</h3>
              </div>
              <div style={styles.skillsContainer}>
                <div style={styles.skillsWrapper}>
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      style={styles.skill(hoveredCard === index, skill.color)}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.opacity = hoveredCard === index ? '0.9' : '1';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsCompo;