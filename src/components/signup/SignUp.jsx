import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../../firebase-config';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialSignUp = async (provider) => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      login(result.user);
      toast.success(`Welcome, ${result.user.displayName || 'User'}!`);
      navigate(location.state?.from || '/', { replace: true });
    } catch (error) {
      toast.error(`Sign up failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      login(userCredential.user);
      toast.success('Account created successfully!');
      navigate(location.state?.from || '/', { replace: true });
    } catch (error) {
      toast.error(getErrorMessage(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case 'auth/email-already-in-use': return 'Email already registered';
      case 'auth/invalid-email': return 'Invalid email format';
      case 'auth/weak-password': return 'Password should be at least 6 characters';
      default: return 'Sign up failed. Please try again';
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        
        <form onSubmit={handleEmailSignUp} className="signup-form">
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

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>

          <button type="submit" className="primary-btn" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button 
            className="social-btn google"
            onClick={() => handleSocialSignUp(googleProvider)}
            disabled={isLoading}
          >
            <i className="fab fa-google"></i> Continue with Google
          </button>

          <button 
            className="social-btn facebook"
            onClick={() => handleSocialSignUp(facebookProvider)}
            disabled={isLoading}
          >
            <i className="fab fa-facebook-f"></i> Continue with Facebook
          </button>
        </div>

        <div className="signup-footer">
          <p>Already have an account? <span onClick={() => navigate('/signin')}>Sign In</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;