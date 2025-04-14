import React, { useState } from 'react';
import api from '../services/api';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      // Redirecionar para dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;