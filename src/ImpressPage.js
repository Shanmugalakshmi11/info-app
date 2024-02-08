// ImpressPage.js
import React from "react";

const ImpressPage = () => {
  return (
    <div style={impressPageContainer}>
      <h2 style={headingStyle}>Impress Page</h2>
      <p style={paragraphStyle}>
        This is the impress page content. Impress your visitors here!
      </p>
    </div>
  );
};

// Styles
const impressPageContainer = {
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

export default ImpressPage;
