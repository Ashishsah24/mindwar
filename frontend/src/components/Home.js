import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Countdown Timer App!</h1>
      <p>This app allows you to set a timer that counts down from 15 minutes.</p>
      
      {/* Start Timer Button */}
      <Link to="/timer">
        <button>Start Timer</button>
      </Link>

      {/* Adding some space between the buttons */}
      <div style={{ marginTop: '30px' }}>
        {/* Login Button */}
        <Link to="/login">
          <button>Login</button>
        </Link>
        
        {/* Sign Up Button */}
        <Link to="/signup" style={{ marginLeft: '10px' }}>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
