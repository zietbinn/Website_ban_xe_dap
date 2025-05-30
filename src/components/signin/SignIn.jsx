import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../../firebase-config';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      login(result.user);
      toast.success(`Welcome, ${result.user.displayName || 'User'}!`);
      navigate(location.state?.from || '/', { replace: true });
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      login(userCredential.user);
      toast.success('Login successful!');
      navigate(location.state?.from || '/', { replace: true });
    } catch (error) {
      toast.error(getErrorMessage(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case 'auth/invalid-email': return 'Invalid email format';
      case 'auth/user-not-found': return 'Email not registered';
      case 'auth/wrong-password': return 'Incorrect password';
      case 'auth/too-many-requests': return 'Too many attempts. Try again later';
      default: return 'Login failed. Please try again';
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Welcome Back</h2>
        
        <form onSubmit={handleEmailLogin} className="signin-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>

          <button type="submit" className="primary-btn" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button 
            className="social-btn google"
            onClick={() => handleSocialLogin(googleProvider)}
            disabled={isLoading}
          >
            <i className="fab fa-google"></i> Continue with Google
          </button>

          <button 
            className="social-btn facebook"
            onClick={() => handleSocialLogin(facebookProvider)}
            disabled={isLoading}
          >
            <i className="fab fa-facebook-f"></i> Continue with Facebook
          </button>
        </div>

        <div className="signin-footer">
          <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
          <p className="forgot-password" onClick={() => navigate('/forgot-password')}>
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;