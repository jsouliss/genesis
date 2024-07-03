// src/components/NavBar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/posts">Posts</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <a href="/search" className="search-link">
                    <span className="search-icon"/>
                    <span className="search-icon-bg"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;