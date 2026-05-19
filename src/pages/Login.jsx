import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="page">
      <h1>Signin to your<br/>PopX account</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      
      <form onSubmit={handleLogin} className="signup-form">
        <div className="signup-form-fields">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" required />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
        </div>
        
        <div className="bottom-action">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
