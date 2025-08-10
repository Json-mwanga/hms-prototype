import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to My Fullstack App</h1>
            <p>This is the homepage of the application.</p>
        </div>
    );
};

export default Home;