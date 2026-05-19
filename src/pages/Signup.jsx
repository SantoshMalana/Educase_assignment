import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState('yes');

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="page white-bg">
      <h1>Create your<br/>PopX account</h1>
      
      <form onSubmit={handleSignup} className="signup-form">
        <div className="signup-form-fields">
          <div className="form-group white-bg">
            <label>Full Name <span className="required-asterisk">*</span></label>
            <input type="text" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group white-bg">
            <label>Phone number <span className="required-asterisk">*</span></label>
            <input type="tel" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group white-bg">
            <label>Email address <span className="required-asterisk">*</span></label>
            <input type="email" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group white-bg">
            <label>Password <span className="required-asterisk">*</span></label>
            <input type="password" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group white-bg">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" />
          </div>
          
          <div className="radio-group">
            <span className="radio-label">Are you an Agency? <span className="required-asterisk">*</span></span>
            <div className="radio-options">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="agency" 
                  value="yes" 
                  checked={isAgency === 'yes'} 
                  onChange={(e) => setIsAgency(e.target.value)} 
                />
                Yes
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="agency" 
                  value="no" 
                  checked={isAgency === 'no'} 
                  onChange={(e) => setIsAgency(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        </div>
        
        <div className="bottom-action">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
