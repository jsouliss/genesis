// src/components/NavBar.js
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo" />
      <ul>
        <li>
          <Link to="/home" className="navbar-link">
            <button className="navbar-button">
              <span className={"navbar-text"}>Home</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/posts" className="navbar-link">
            <button className="navbar-button">
              <span className={"navbar-text"}>Posts</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            <button className="navbar-button">
              <span className={"navbar-text"}>About Me</span>
            </button>
          </Link>
        </li>
        {/*
        <li>
            <Link to="/search" className="navbar-link">
            <button className="navbar-button">
              <img className={"search-icon"} src={searchIcon} alt="search" />
            </button>
          </Link>
        </li>
        */}
      </ul>
      {/*
      <Link to="/signin" className="signin-container">
        <button className="signin-button" />
        <span className="signin-text">G.S.</span>
      </Link>
      */}
      <div className="signin-container">
        <button className="signin-button" />
        <span className="signin-text">G.S.</span>
      </div>
    </nav>
  );
};

export default Navbar;
