// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import ImpressPage from "./ImpressPage";
import InfoPage from "./InfoPage";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div style={navbarStyle}>
        {/* Navbar */}

        <Link to="/" style={navItemStyle}>
          Home
        </Link>

        <Link to="/about" style={navItemStyle}>
          About Me
        </Link>

        <Link to="/impress" style={navItemStyle}>
          Impress Page
        </Link>

        <Link to="/info" style={navItemStyle}>
          Info Page
        </Link>
      </div>{" "}
      <div>
        {/* Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/impress" element={<ImpressPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

// Styles
const navbarStyle = {
  backgroundColor: "#333",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px", // Add top margin
};

const navItemStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
};

export default App;
