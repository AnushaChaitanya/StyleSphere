import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  const navigate = useNavigate();

  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Store JWT token
        localStorage.setItem('token', response.data.token);

        alert('Login successful!');
        navigate('/'); // redirect to Home or Profile
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials! Please try again.');
      } else {
        alert('Login failed. Please try later.');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
        <p>
          Don&apos;t have an account?{' '}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
