// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../../styles/styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return false;
    }

    if (!passwordRegex.test(password)) {
      alert('Invalid password. It must be 8-15 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return false;
    }

    alert('Login successful!');
    // You can add further logic for handling the successful login
  };

  return (
    <div className="main-container">
      <div className="image-wrapper">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb682d4b-ca24-4e20-a3b1-f38da5d6a596?apiKey=94a6449fd86a4acd9dd45ac2c2bf0dcf&" className="img" alt="Background Image" />
        <div className="description">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e292c3b3-c53b-41b7-823a-2a30a08ab8a0?apiKey=94a6449fd86a4acd9dd45ac2c2bf0dcf&" className="img-2" alt="Logo" />
          <div className="input-container">
            <div className="input-wrapper">
              <img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" className="img-3" alt="Email Icon" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-wrapper">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f754b15f-17b4-4e67-8cf3-f10d5c3fa007?apiKey=94a6449fd86a4acd9dd45ac2c2bf0dcf&" className="img-4" alt="Password Icon" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          <button onClick={validateForm} className="login-button">LOGIN</button>
          <div className="not-registered">
            <Link to="/Auth/Register">Not Registered?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
