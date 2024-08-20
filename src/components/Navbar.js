// src/components/NavBar.js

import React from "react";
import "../styles/component_styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo" />
      <ul>
        <li>
          <a href="/" className="home-link">
            <span className="home-text">Home</span>
            <span className="home-button" />
          </a>
        </li>
        <li>
          <a href="/posts" className="post-link">
            <span className="post-text">Posts</span>
            <span className="post-button" />
          </a>
        </li>
        <li>
          <a href="/about" className="about-link">
            <span className="about-text">About Me</span>
            <span className="about-button" />
          </a>
        </li>
        <li>
          <a href="/search" className="search-link">
            <span className="search-icon" />
            <span className="search-button"></span>
          </a>
        </li>
      </ul>
      <a href="/signin" className="signin-container">
        <span className="signin-button" />
        <span className="signin-text">G.S.</span>
      </a>
    </nav>
  );
};

export default Navbar;
