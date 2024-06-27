import React, { useEffect, useRef } from 'react';
import styles from './style.module.css';

const Skills = () => {
  const skills = [
    { name: 'MERN', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'UI/UX Figma', level: 80 },
    { name: 'Content Creation', level: 95 },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${entry.target.dataset.level}%`;
          } else {
            entry.target.style.width = '0%';
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} ${styles.skills}`} data-glow>
      <h2  className={styles.heading}>Skills</h2>
      {skills.map((skill, index) => (
        <div key={skill.name} className={styles.skillItem}>
          <span className={styles.skillName}>{skill.name}</span>
          <div className={styles.skillBar}>
            <div
              ref={(el) => (skillRefs.current[index] = el)}
              className={styles.skillLevel}
              data-level={skill.level}
              style={{ width: 0 }}
            ></div>
          </div>
        </div>
      ))}

      <div className={styles.lang}>
        <span> C, C++ </span>
        <span> Python </span>
        <span> Javascript </span>
        <span> Java </span>
      </div>
      
    </section>
  );
};

export default Skills;
