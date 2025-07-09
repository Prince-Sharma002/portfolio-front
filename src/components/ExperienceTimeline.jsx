import { useState, useEffect } from 'react';
import { 
  Briefcase, Calendar, Award, Code, 
  Globe, Server, Database, Layout, ArrowUp,
  CheckCircle, Monitor, Users, Zap, Brain
} from 'lucide-react';

export default function ExperienceTimeline() {
  const [activeExperience, setActiveExperience] = useState(null);
  
  const experiences = [
    {
      id: 1,
      title: "Core Member - Web Developer",
      company: "GDGC' ABESIT",
      period: "Jul 2024 - Present",
      description: "Spearheaded the development of the official ABESIT GDGC'24 website, creating an engaging digital platform. Organized and facilitated web development workshops and events to foster innovation, collaboration, and continuous learning among peers.",
      skills: ["Next.js", "Accentricity UI", "Tailwind CSS", "JavaScript"],
      color: "#FF69B4", // Hot Pink
      icon: <Globe size={20} />,
      achievements: ["Integrated real-time event updates", "Improved site performance by 40%", "Organized 2 successful events"]
    },
    {
      id: 2,
      title: "Tech Head",
      company: "SheBuilds Hackathon",
      period: "Feb 2025 - Apr 2025",
      description: "Engineered the official SheBuilds Hackathon website that served as the central hub for event details, participant registrations, and real-time updates. Implemented responsive design principles ensuring optimal user experience across all devices.",
      skills: ["React.js", "Shadcn", "Accentricity UI", "Tailwind CSS", "JavaScript"],
      color: "rgb(43, 236, 114)", // Green with opacity
      icon: <Code size={20} />,
      achievements: ["Designed a theme-based, visually appealing website.", "Integrated real-time event updates", "Designed mobile-first user interface"]
    },
    {
      id: 3,
      title: "Tech Lead",
      company: "Hacknovate 6.0",
      period: "Jan 2025 - Apr 2025",
      description: "Architected and developed the official Hacknovate 6.0 website from concept to deployment. Created an interactive platform that streamlined event registrations, showcased project submissions, and provided comprehensive event information to participants and sponsors.",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Magic UI", "MongoDB"],
      color: "#00CED1", // Dark Turquoise
      icon: <Server size={20} />,
      achievements: ["Led a team of 5 developers", "Implemented a fully responsive and user-friendly website.", "Designed a theme-based, visually appealing website."]
    },
    {
      id: 1,
      title: "Project Intern",
      company: "DRDO",
      period: "Jun 2025 - July 2025",
      description: "Developed an AI fairness detection system to ensure unbiased model behavior and ethical AI deployment. Conducted in-depth analysis on model interpretability and fairness metrics, contributing to secure and responsible AI systems at DRDO.",
      skills: ["Python", "Machine Learning", "Fairness Metrics", "Flask", "React.js"],
      color: "#4682B4", // Steel Blue
      icon: <Brain size={20} />, // You can change icon if needed
      achievements: ["Designed and implemented fairness detection module", "Improved model transparency and reliability", "Collaborated with senior scientists on research"]
    },
  ];

  // Handle responsive design with window resize
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{
      fontFamily: "'Inter', 'SF Pro Display', sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 1.5rem",
      gridColumn: "span 12",
      position: "relative",
      background: "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))",
      borderRadius: "1rem",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",
        position: "relative"
      }}>
        <Briefcase 
          size={32} 
          style={{
            color: "black",
            marginRight: "1rem"
          }}
        />
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "800",
          textAlign: "center",
          color: "black",
          padding: "0.5rem",
          textShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}>
          Professional Experience
        </h2>
      </div>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "3rem" : "0",
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
            background: "linear-gradient(to bottom, #FF69B4, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5))",
            borderRadius: "4px",
            boxShadow: "0 0 15px rgba(255,105,180,0.3)"
          }} />
        )}

        {/* Experience Cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "3rem",
        }}>
          {experiences.reverse().map((exp, index) => (
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
                width: isMobile ? "80%" : "42%",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                border: `2px solid ${exp.color}`,
                transform: activeExperience === exp.id ? "translateY(-8px)" : "none",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                position: "relative",
                zIndex: "1",
                overflow: "hidden"
              }}
              onMouseEnter={() => setActiveExperience(exp.id)}
              onMouseLeave={() => setActiveExperience(null)}
              >
                {/* Background pattern */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "180px",
                  height: "180px",
                  background: `${exp.color}10`,
                  borderRadius: "50%",
                  transform: "translate(50%, -50%)",
                  zIndex: "-1"
                }}></div>
                
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "8px",
                  background: exp.color,
                  borderRadius: "8px 8px 0 0",
                }}></div>
                
                {/* Title with icon */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "0.75rem",
                  marginBottom: "0.5rem"
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: `${exp.color}30`,
                    marginRight: "0.75rem"
                  }}>
                    {exp.icon}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ?  "1rem" : "1.35rem" ,
                    fontWeight: "700",
                    color: "#222"
                  }}>
                    {exp.title}
                  </h3>
                </div>
                
                {/* Company */}
                <h4 style={{
                  fontSize:  "1.1rem",
                  fontWeight: "600",
                  color: "#444",
                  marginLeft: "2.75rem",
                  marginBottom: "0.75rem"
                }}>
                  {exp.company}
                </h4>
                
                {/* Period */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "2.75rem",
                  marginBottom: "1rem"
                }}>
                  <Calendar size={16} style={{ color: exp.color, marginRight: "0.5rem" }} />
                  <div style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "2rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#fff",
                    background: exp.color,
                  }}>
                    {exp.period}
                  </div>
                </div>
                
                {/* Description */}
                <p style={{
                  margin: "1.25rem 0",
                  color: "#555",
                  lineHeight: "1.7",
                  fontSize: isMobile ? "0.8rem" : "0.95rem"
                }}>
                  {exp.description}
                </p>
                
                {/* Achievements */}
                <div style={{
                  margin: "1.25rem 0"
                }}>
                  <h5 style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <Award size={16} style={{ marginRight: "0.5rem", color: exp.color }} />
                    Key Achievements
                  </h5>
                  <ul style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0.5rem 0"
                  }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.85rem",
                        color: "#666",
                        margin: "0.35rem 0"
                      }}>
                        <CheckCircle size={14} style={{ color: exp.color, marginRight: "0.5rem" }} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Skills */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                  marginTop: "1.25rem"
                }}>
                  {exp.skills.map((skill, i) => {
                    // Pick an appropriate icon based on the skill
                    let SkillIcon;
                    if (skill.toLowerCase().includes('react') || skill.toLowerCase().includes('next')) {
                      SkillIcon = <Code size={12} />;
                    } else if (skill.toLowerCase().includes('tailwind')) {
                      SkillIcon = <Layout size={12} />;
                    } else if (skill.toLowerCase().includes('mongo')) {
                      SkillIcon = <Database size={12} />;
                    } else if (skill.toLowerCase().includes('ui')) {
                      SkillIcon = <Monitor size={12} />;
                    } else {
                      SkillIcon = <Zap size={12} />;
                    }
                    
                    return (
                      <span key={i} style={{
                        padding: "0.35rem 0.75rem",
                        borderRadius: "1rem",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        background: `${exp.color}20`,
                        color: "#333",
                        display: "flex",
                        alignItems: "center",
                        border: `1px solid ${exp.color}40`,
                      }}>
                        <span style={{ marginRight: "0.35rem" }}>{SkillIcon}</span>
                        {skill}
                      </span>
                    );
                  })}
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
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: exp.color,
                    border: "4px solid white",
                    boxShadow: `0 0 0 4px rgba(0,0,0,0.1), 0 0 15px ${exp.color}80`,
                    transform: activeExperience === exp.id ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff"
                  }}>
                    {exp.icon}
                  </div>
                  
                  {/* Year label */}
                  <div style={{
                    position: "absolute",
                    top: "110%",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: exp.color,
                    background: "#fff",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    whiteSpace: "nowrap"
                  }}>
                    {exp.period.split(' - ')[0]}
                  </div>
                </div>
              )}
              
              {/* Empty space for alternating layout */}
              {!isMobile && <div style={{ width: "42%" }} />}
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div 
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #FF69B4, #00CED1)",
          color: "white",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          cursor: "pointer",
          zIndex: "100",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <ArrowUp size={20} />
      </div>
    </div>
  );
}