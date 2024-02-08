// Footer.js
import React from "react";

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p>&copy; 2022 Your Website. All rights reserved.</p>
    </div>
  );
};

// Styles
const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "10px",
  textAlign: "center",
};

export default Footer;
