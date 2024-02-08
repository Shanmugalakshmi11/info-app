// AboutMe.js
import React from "react";
import myProfileImage from "./images/profile.jpeg"; // Import your profile image

const AboutMe = () => {
  return (
    <div style={aboutMeContainer}>
      <img src={myProfileImage} alt="My Profile" style={profileImageStyle} />
      <div style={contentContainer}>
        <h2 style={headingStyle}>About Me</h2>
        <p style={paragraphStyle}>
          &nbsp; &nbsp;&nbsp;Hi, I'm Shanmugalakshmi Chandrasekaran. I am a
          passionate web developer with expertise in Cloud expertise. <br></br>I
          enjoy creating web applications that provide meaningful solutions.
          Feel free to explore more about my journey and projects!
        </p>
      </div>
    </div>
  );
};

// Styles
const aboutMeContainer = {
  maxWidth: "800px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  textAlign: "center",
  overflow: "hidden",
};

const profileImageStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%", // Make the image round
  marginBottom: "20px",
};

const contentContainer = {
  textAlign: "left",
};

const headingStyle = {
  color: "#333",
  marginBottom: "10px",
  textAlign: "center",
};

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
  textAlign: "justify",
};

export default AboutMe;
