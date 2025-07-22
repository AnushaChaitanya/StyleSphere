import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

function Register() {
  const navigate = useNavigate();

  // Create state for all fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);

      if (response.status === 200) {
        alert('Registered successfully!');
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('User already exists!');
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} required />

          <label htmlFor="phone">Contact</label>
          <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required />

          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="gender">Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
