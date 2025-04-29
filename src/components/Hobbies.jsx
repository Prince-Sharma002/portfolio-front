// components/Hobbies.js
import React from 'react';
import { Guitar, Camera, Square, PenTool, Book } from 'lucide-react';
import { MdOutlineArticle } from "react-icons/md";

const Hobbies = () => {
  const hobbies = [
    { name: 'Sketch', icon: <PenTool />, color: 'rgb(249, 116, 22)' },
    { name: 'Chess', icon: <Square />, color: 'rgb(169, 85, 247)' },
    { name: 'Article Writing', icon: <Book />, color: 'rgb(34, 197, 94)' },
    { name: 'Guitar', icon: <Guitar />, color: 'rgb(59, 131, 246)' },
    { name: 'Photography', icon: <Camera />, color: 'rgb(255, 40, 173)' },
  ];
  

  return (
    <section 
      
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem 20rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '24px',
        background: '#f9f9f9',
        gridColumn: 'span 12',
        position: 'relative',
        overflow: 'hidden',
        borderRadius : "20px",
        maxWidth: window.innerWidth <= 760 ? '22rem' : '1200px',
        margin:  window.innerWidth <= 760 ? '0rem auto 3rem 0rem' : '0rem auto 3rem auto',

      }}
    >
      <h2 style={{ 
      fontSize: window.innerWidth <= 760 ? '2rem' : '2.5rem',
      fontWeight: 'bold', marginBottom: '1rem' }}>
       My Interests
      </h2>
      <div
        style={{
          display: 'flex',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
          padding:"10px",
        }}
      >
        {hobbies.map((hobby) => (
          <div
            key={hobby.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              borderRadius: '10px',
              background: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              width: window.innerWidth <= 760 ? '50px' : '120px',
              height: window.innerWidth <= 760 ? '50px' : '120px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              const text = e.currentTarget.querySelector('.hobbyText');
              if (text) {
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
              }
              const icon = e.currentTarget.querySelector('.icon');
              
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              const text = e.currentTarget.querySelector('.hobbyText');
              if (text) {
                text.style.opacity = '0';
                text.style.transform = 'translateY(20px)';
              }
              const icon = e.currentTarget.querySelector('.icon');
              
            }}
          >
            <div
              className="icon"
              style={{
                fontSize: '2.5rem',
                color: hobby.color,
                transition: 'color 0.3s ease',
              }}
            >
              {hobby.icon}
            </div>
            <span
              className="hobbyText"
              style={{
                position: 'absolute',
                bottom: '10px',
                fontSize: window.innerWidth <= 760 ? '0.5rem' : '1rem',
                fontWeight: 'bold',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {hobby.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
