import React, { useState ,useEffect  } from 'react';


const Bubble = ({ color }) => {
  const [position, setPosition] = useState({
    left: Math.random() * 100,
    top: Math.random() * 100,
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

const SkillsCompo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const bubbleColors = ['#3B82F6', '#22C55E', '#A855F7', '#F97316'];

  const skills = [
    {
      category: "Web Development",
      icon: "🌐",
      items: ["MERN Stack", "Next.js", "Flask", "Tailwind CSS" , "Bootstrap", "SCSS" , "Figma" , "Firebase Authentication",
        "Acentricity ui", "Shadcn ui"
      ],
      color: "#3B82F6",
      shadowColor: "rgba(59, 130, 246, 0.5)"
    },
    {
      category: "Programming Languages",
      icon: "💻",
      items: ["C", "C++", "JavaScript", "Typescript",  "Python",  "Java",  "SQL"],
      color: "#22C55E",
      shadowColor: "rgba(34, 197, 94, 0.5)"
    },
    {
      category: "Machine Learning and Python",
      icon: "🧠",
      items: ["Python-based ML development" , "leafmap", "SKlearn" ,"Streamlit" ,  ],
      color: "#A855F7",
      shadowColor: "rgba(168, 85, 247, 0.5)"
    },
    {
      category: "Database & Tools",
      icon: "🗄️",
      items: ["MongoDB" ,"Firebase" , "PostgreSQL", "MySQL" , "Postman" , "Git/GitHub" , "Kali Linux" , "Unity" ],
      color: "#F97316",
      shadowColor: "rgba(249, 115, 22, 0.5)"
    }
  ];

  const styles = {
    container: {
      maxWidth: window.innerWidth <= 760 ? '22rem' : '1000px', // Adjust for mobile
      margin:  window.innerWidth <= 760 ? '0rem auto 3rem 0rem' : '7rem auto 0rem auto',
      padding: '24px',
      gridColumn: 'span 12',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '600px',
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
      color :"black",
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
      fontSize: '1.5rem',
      transform: isHovered ? 'rotate(12deg) scale(1.1)' : 'rotate(0) scale(1)',
      transition: 'transform 0.3s ease',
    }),
    categoryTitle: {
      color: 'white',
      fontSize:  window.innerWidth <= 760 ? '1rem' : '1.25rem',
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
      fontSize: window.innerWidth <= 760 ? '0.6rem' : '0.7rem',
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
    <style >{keyframes}</style>
    <div  id='skills' style={styles.container}>
      <div style={styles.bubblesContainer}>
        {[...Array(30)].map((_, i) => (
          <Bubble
            key={i}
            color={bubbleColors[i % bubbleColors.length]}
          />
        ))}
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>My Skills</h2>
        <p style={{textAlign:"center", marginBottom: "3rem"}}>
          Skill is the unified force of experience, intellect, and passion in their operation
        </p>
        <div style={styles.grid}>
          {/* Your existing skills cards mapping */}
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
    </div>
  </>
  );
};

export default SkillsCompo;