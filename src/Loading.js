// Loading.js
import React from "react";

const Loading = () => {
  return (
    <div style={loadingContainer}>
      <p style={loadingText}>Loading...</p>
    </div>
  );
};

// Styles
const loadingContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const loadingText = {
  fontSize: "20px",
};

export default Loading;
