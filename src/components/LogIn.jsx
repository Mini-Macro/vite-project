import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; 
import './Login.css';

const LogIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setMessage('Login failed. Please check your credentials.');
      } else {
        setMessage('Login Succesful');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <div className="auth-container">
      <div className='auth-box'>
        <h2 className='auth-heading'>Let's FinKeep</h2>
        <div>
          <label className='auth-label' >
            Email:
            <input type="email" name="email" onChange={handleInputChange} className='auth-input' />
          </label>
        </div>
        <div>
          <label className='auth-label' >
            Password:
            <input type="password" name="password" onChange={handleInputChange} className='auth-input' />
          </label>
        </div>
        <div>
          <button className="auth-button2" onClick={handleLogin}>Login</button>
        </div>
        <div>
          <p className='auth-alert'>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
