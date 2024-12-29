import React from "react";

const SkillsComponent = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    width: "100%",
    padding: "20px",
  };

  const sectionStyle = {
    height: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "10px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.2rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const frontendStyle = {
    ...sectionStyle,
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)", // Blue gradient
  };

  const backendStyle = {
    ...sectionStyle,
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange gradient
  };

  const machineLearningStyle = {
    ...sectionStyle,
    background: "linear-gradient(135deg, #16a085, #f4d03f)", // Green-yellow gradient
  };

  const languagesStyle = {
    ...sectionStyle,
    background: "linear-gradient(135deg, #c94b4b, #4b134f)", // Red-purple gradient
  };

  return (
    <div style={containerStyle}>
      <div style={frontendStyle}>
        <h3>Frontend</h3>
        <p>React, Bootstrap, Tailwind CSS, Figma</p>
      </div>
      <div style={backendStyle}>
        <h3>Backend</h3>
        <p>Node.js, Flask, Firebase</p>
      </div>
      <div style={machineLearningStyle}>
        <h3>Machine Learning</h3>
        <p>Python ML, TensorFlow, Scikit-Learn</p>
      </div>
      <div style={languagesStyle}>
        <h3>Languages</h3>
        <p>C, C++, JavaScript, Python, Java, SQL</p>
      </div>
    </div>
  );
};

export default SkillsComponent;
