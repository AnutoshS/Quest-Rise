import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: loginEmail,
        password: loginPassword,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div style={{ paddingBottom: '20px', paddingTop: '20px',}}>
      {/* Login Form */}
      <div
        style={{
          maxWidth: '525px',
          height: '500px',
          margin: '0 auto', // Center the form horizontally
          marginRight: '120px', // Add margin to shift it to the right
          padding: '20px',
          marginTop: '100px',
          border: '2px solid #000',
          borderRadius: '8px',
          
        }}
      >
        <h2>Admin Login</h2> <br />
        <div>
          <div style={{ marginBottom: '5px' }}>
            <label htmlFor="loginEmail" style={{ marginBottom: '5px' }}>
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              id="loginEmail"
              name="loginEmail"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="loginPassword" style={{ marginBottom: '5px' }}>
              <b>Password</b>
            </label>
            <input
              type="password"
              id="loginPassword"
              name="loginPassword"
              placeholder="Enter password"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <div>
            <a href="/show">
              <button
                type="button"
                style={{
                  width: '50%',
                  padding: '10px',
                  marginTop: '20px',
                  border: 'solid',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginLeft:'25%'
                }}
                onClick={handleLogin}
              >
                Sign in
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
