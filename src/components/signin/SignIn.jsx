import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">HVN</span>
      </div>

      {/* Sign In Form */}
      <div className="signin-form">
        <h1>SIGN IN</h1>
        <p>Sign in with email address</p>
        <form>
          <input type="email" placeholder="yourname@gmail.com" className="email-input" />
          <button type="submit" className="signup-button">SIGN UP</button>
        </form>
        <p className="or-continue">Or continue with</p>
        <div className="social-buttons">
          <button className="social-button google">
            <span className="social-icon">G</span> Google
          </button>
          <button className="social-button facebook">
            <span className="social-icon">f</span> Facebook
          </button>
        </div>
        <p className="terms">
          By registering you with our <a href="/terms">Terms and Conditions</a>
        </p>
      </div>

      {/* Adventure Text */}
      <div className="adventure-text">
        <h2>SIGN IN TO YOUR<br />ADVENTURE!</h2>
      </div>
    </div>
  );
};

export default SignIn;