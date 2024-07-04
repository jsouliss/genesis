// src/components/NavBar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a
                        href="/" className="home-link">
                        <span className="home-text">Home</span>
                        <span className="home-button"/>
                    </a>
                </li>
                <li>
                    <a
                        href="/posts" className="post-link">
                        <span className="post-text">Posts</span>
                        <span className="post-button"/>
                    </a>
                </li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <a href="/search" className="search-link">
                    <span className="search-icon"/>
                    <span className="search-button"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;