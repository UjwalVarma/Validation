import React, { useState } from 'react';
import './index.css';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? '' : 'Please enter a valid email address');
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 8;
    setPasswordError(isValid ? '' : 'Password must be at least 8 characters long');
    return isValid;
  };

  const validateConfirmPassword = () => {
    const isValid = password === confirmPassword;
    setConfirmPasswordError(isValid ? '' : 'Passwords do not match');
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Form cannot be submitted');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label><b>Email:</b></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className={emailError ? 'error' : ''}
          />
          <div className="error">{emailError}</div>
        </div>
        <div>
          <label><b>Password:</b></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            className={passwordError ? 'error' : ''}
          />
          <div className="error">{passwordError}</div>
        </div>
        <div>
          <label><b>Confirm Password:</b></label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            className={confirmPasswordError ? 'error' : ''}
          />
          <div className="error">{confirmPasswordError}</div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormComponent;
