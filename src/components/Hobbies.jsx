// components/Hobbies.js
import React from 'react';
import styles from './style.module.css';

const Hobbies = () => {
  const hobbies = ['Photography', 'Guitar', 'Chess', 'Car Designing'];

  return (
    <section className={`${styles.section} ${styles.hobbies}`} data-glow>
      <h2  className={styles.heading}>Hobbies & Interests</h2>
      <div className={styles.hobbyList}>
        {hobbies.map((hobby) => (
          <span key={hobby} className={styles.hobbyItem}>
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;