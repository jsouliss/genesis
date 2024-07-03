import React from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h1>Home page</h1>
            <Content/>
        </div>
    );
};

export default Home;