// InfoPage.js
import React from "react";

const InfoPage = () => {
  return (
    <div style={infoPageContainer}>
      <h2 style={headingStyle}>Info Page</h2>
      <p style={paragraphStyle}>
        This is the information page content. You can provide details, FAQs,
        contact information, or any other relevant information here.
      </p>
    </div>
  );
};

// Styles
const infoPageContainer = {
  maxWidth: "800px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  textAlign: "center", // Center-align the text
};

const headingStyle = {
  color: "#333",
};

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
};

export default InfoPage;
