
// components/CustomCursor.js
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;