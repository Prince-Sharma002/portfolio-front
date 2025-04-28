import { useState } from 'react';

export default function ExperienceTimeline() {
  const [activeExperience, setActiveExperience] = useState(null);
  
  const experiences = [
    {
        id: 1,
        title: "Core Member - Web Developer",
        company: "GDGC' ABESIT",
        period: "2024 Jul - Present",
        description: "the official ABESIT GDGC’24 website and organized web development events to foster innovation and learning.",
        skills: ["Next.js", "acentricity ui","Tailwindcss", "Javascript"],
        color: "#FF69B4" // Green with opacity
    },
    {
      id: 2,
      title: "Tech Head",
      company: "SheBuilds Hackathon",
      period: "2025 Feb - 2025 Apr",
      description: "Developed the official website for SheBuilds Hackemon website .The platform served as a hub for event details, registrations, and updates",
      skills: ["React.js", "shadcn", "acentricity ui","Tailwindcss", "Javascript"],
      color: "rgba(43, 236, 114, 0.59)" // Hot Pink
    },
    {
      id: 3,
      title: "Tech Lead",
      company: "Hacknovate 6.0",
      period: "2024 Jan - 2025 Apr",
      description: "Developed the official website for Hacknovate 6.0.The platform served as a hub for event details, registrations, and updates",
      skills: ["React.js", "Tailwindcss","Framer Motion", "Magic UI", "MongoDB"],
      color: "#00CED1" // Dark Turquoise
    },

  ];

  // Handle responsive design with window resize
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem 1rem",
      gridColumn: "span 12",
    }}>
      <h2 style={{
        fontSize: "2.5rem",
        fontWeight: "bolder",
        textAlign: "center",
        marginBottom: "3rem",
        color : "rgb(63, 63, 63)",
        padding: "0.5rem"
      }}>
        Professional Experience
      </h2>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "2rem" : "0",
        position: "relative",
      }}>
        {/* Timeline Bar */}
        {!isMobile && (
          <div style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            background: "linear-gradient(to bottom, #FF69B4, rgba(168, 85, 247, 0.5))",
            borderRadius: "4px",
          }} />
        )}

        {/* Experience Cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "2rem",
        }}>
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse",
                alignItems: isMobile ? "flex-start" : "center",
                width: "100%",
              }}
            >
              <div style={{
                width: isMobile ? "100%" : "42%",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                background: "#fff",
                border: `2px solid ${exp.color}`,
                transform: activeExperience === exp.id ? "translateY(-5px)" : "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                zIndex: "1",
              }}
              onMouseEnter={() => setActiveExperience(exp.id)}
              onMouseLeave={() => setActiveExperience(null)}
              >
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "8px",
                  background: exp.color,
                  borderRadius: "8px 8px 0 0",
                }}></div>
                
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                  color: "#333"
                }}>
                  {exp.title}
                </h3>
                
                <h4 style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#555"
                }}>
                  {exp.company}
                </h4>
                
                <div style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#fff",
                  background: exp.color,
                  margin: "0.5rem 0"
                }}>
                  {exp.period}
                </div>
                
                <p style={{
                  margin: "1rem 0",
                  color: "#666",
                  lineHeight: "1.6"
                }}>
                  {exp.description}
                </p>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1rem"
                }}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} style={{
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                      background: `${exp.color}30`,
                      color: "#333",
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Timeline Circle */}
              {!isMobile && (
                <div style={{
                  width: "16%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: "2"
                }}>
                  <div style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: exp.color,
                    border: "4px solid white",
                    boxShadow: "0 0 0 4px rgba(0,0,0,0.1)",
                    transform: activeExperience === exp.id ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }} />
                </div>
              )}
              
              {/* Empty space for alternating layout */}
              {!isMobile && <div style={{ width: "42%" }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}