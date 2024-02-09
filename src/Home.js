// Home.js
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay for data fetching (e.g., fetching from an API)
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={homeContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 style={headingStyle}>Welcome to My Website</h2>
          <p style={paragraphStyle}>This is the home page content.</p>
          <p>Design and Create</p>
        </>
      )}
    </div>
  );
};

// Styles
const homeContainer = {
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

export default Home;
