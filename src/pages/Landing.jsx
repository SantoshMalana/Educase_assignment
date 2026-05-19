import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="page landing-page">
      <h1>Welcome to PopX</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      
      <Link to="/signup" className="btn btn-primary">
        Create Account
      </Link>
      <Link to="/login" className="btn btn-secondary">
        Already Registered? Login
      </Link>
    </div>
  );
};

export default Landing;
