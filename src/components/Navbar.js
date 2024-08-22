// src/components/NavBar.js

import React from "react";
import "../styles/component_styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo" />
      <ul>
        <li>
          <Link to="/" className="home-link">
            <span className="home-text">Home</span>
            <span className="home-button" />
          </Link>
        </li>
        <li>
          <Link to="/posts" className="post-link">
            <span className="post-text">Posts</span>
            <span className="post-button" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="about-link">
            <span className="about-text">About Me</span>
            <span className="about-button" />
          </Link>
        </li>
        <li>
          <Link to="/search" className="search-link">
            <span className="search-icon" />
            <span className="search-button"></span>
          </Link>
        </li>
      </ul>
      <Link to="/signin" className="signin-container">
        <span className="signin-button" />
        <span className="signin-text">G.S.</span>
      </Link>
    </nav>
  );
};

export default Navbar;
