import React, { useState , useEffect } from 'react';
import bl from './bl.png';

const Bubble = ({ color }) => {
  const [position, setPosition] = useState({
    left: Math.random() * 150,
    top: Math.random() * 300,
  });

  const bubbleStyle = {
    position: 'absolute',
    left: `${position.left}%`,
    top: `${position.top}%`,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
    opacity: 0.3,
    transition: 'all 3s ease-in-out',
    zIndex: 0,
  };

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition({
        left: Math.random() * 100,
        top: Math.random() * 100,
      });
    }, 3000);

    return () => clearInterval(moveInterval);
  }, []);

  return <div style={bubbleStyle} />;
};


const AcademicComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const bubbleColors = ['#3B82F6', '#22C55E', '#A855F7', '#F97316'];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "ABES Institute of Technology",
      period: "2022-2026",
      status: "On-Going",
      color: "#4F46E5",
      backgroundImage: '/bl.png', // Add the path to your background image
      Score : "7.98 CGPA",
    },
    {
      degree: "Senior Secondary School (CBSE)",
      institution: "Brightland School",
      period: "2020-2022",
      status: "Completed",
      color: "#7C3AED",
      backgroundImage: 'url(/path-to-secondary-image.jpg)', // Add the path to your background image
      Score : "95.7%"
    },
    {
      degree: "High School (ICSE)",
      institution: "SGRR Public School",
      period: "2018-2020",
      status: "Completed",
      color: "#9333EA",
      backgroundImage: 'url(/path-to-highschool-image.jpg)', // Add the path to your background image
      Score : "90%",
    }
  ];

  const styles = {
    container: {
      maxWidth: window.innerWidth <= 760 ? '22rem' : '1200px',
      margin:  window.innerWidth <= 760 ? '0rem auto 3rem 0rem' : '10rem auto 3rem auto',
      padding: '40px 20px',
      position: 'relative',
      gridColumn: 'span 12',
      overflow: 'hidden',
    },
    bubblesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    },
    content: {
      position: 'relative',
      zIndex: 1,
    },
    title: {
      fontSize: window.innerWidth <= 760 ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #4299e1, #4299e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'fadeIn 0.5s ease-out',
    },
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: '100%',
        backgroundColor: '#E5E7EB',
      },
    },
    card: (index, isHovered, color, backgroundImage) => ({
        position: 'relative',
        width: '100%',
        padding: '20px',
        background: `white ${backgroundImage || ''}`,
        backgroundSize: 'cover', // Ensure the background image covers the card
        backgroundPosition: 'center', // Center the background image
        borderRadius: '12px',
        marginBottom: '30px',
        boxShadow: isHovered
          ? `0 10px 30px -10px ${color}`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'scale(1.02) translateY(-5px)' : 'scale(1)',
        transition: 'all 0.3s ease',
        animation: `slideIn ${0.5 + index * 0.2}s ease-out`,
        cursor: 'pointer',
        border: `2px solid ${color}`,
        opacity: isHovered ? 1 : 0.9,
      }),
    degree: {
      fontSize: window.innerWidth <= 760 ? '1rem' : '1.5rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#1F2937',
    },
    institution: {
      fontSize: window.innerWidth <= 760 ? '0.7rem' : '1rem',
      color: '#4B5563',
      marginBottom: '12px',
    },
    periodContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    period: {
      fontSize: window.innerWidth <= 760 ? '0.7rem' : '0.9rem',
      color: '#6B7280',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    status: (color, isHovered) => ({
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: window.innerWidth <= 760 ? '0.6rem' : '0.875rem',
      backgroundColor: isHovered ? color : '#F3F4F6',
      color: isHovered ? 'white' : color,
      transition: 'all 0.3s ease',
    }),
    dot: (color, isHovered) => ({
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: color,
      display: 'inline-block',
      marginRight: '8px',
      animation: isHovered ? 'pulse 2s infinite' : 'none',
    }),
  };

  const keyframes = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
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
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.5;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div id='academic' style={styles.container}>
        
          <div style={styles.bubblesContainer}>
            {[...Array(30)].map((_, i) => (
              <Bubble
                key={i}
                color={bubbleColors[i % bubbleColors.length]}
              />
            ))}
          </div>        

        
        <h2 style={styles.title}> Academic Journey</h2>
        <p style={{marginBottom : "3rem" , fontSize:"1rem" , textAlign:"center"}}> 
            Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
        </p>

        <div style={styles.timeline}>
          
                    {education.map((edu, index) => (
            <div
                key={index}
                style={styles.card(index, hoveredCard === index, edu.color, edu.backgroundImage)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
            >
                <h3 style={styles.degree}>{edu.degree}</h3>
                <p style={styles.institution}>{edu.institution}</p>
                <div style={styles.periodContainer}>
                <span style={styles.period}>
                    <span style={styles.dot(edu.color, hoveredCard === index)} />
                    {edu.period}
                </span>
                <span style={styles.period}>
                    <span style={styles.dot(edu.color, hoveredCard === index)} />
                    {edu.Score}
                </span>
                <span style={styles.status(edu.color, hoveredCard === index)}>
                    {edu.status}
                </span>
                </div>
            </div>
            ))}


        </div>
      </div>
    </>
  );
};

export default AcademicComponent;
