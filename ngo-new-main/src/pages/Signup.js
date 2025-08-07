import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import '../ngo-auth.css';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      await signup({ name, email, phone, password });
      setSuccess('Signup successful! Please login.');
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ngo-auth-bg" style={{backgroundImage: 'url(/images/image-gallery/image-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <div className="ngo-auth-card">
        <img src="/favicon-old.png" alt="NGO Logo" className="ngo-auth-logo" />
        <div className="ngo-auth-title">Create Your Account</div>
        <div className="ngo-auth-subtext">Join us and make a difference today!</div>
        <form onSubmit={handleSubmit} autoComplete="on">
          <input
            type="text"
            className="ngo-auth-input"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoFocus
          />
          <input
            type="email"
            className="ngo-auth-input"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            className="ngo-auth-input"
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            pattern="[0-9]{10,15}"
            title="Please enter a valid phone number"
          />
          <input
            type="password"
            className="ngo-auth-input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="ngo-auth-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          {error && <div className="alert alert-danger py-1 text-center" style={{marginBottom: 10}}>{error}</div>}
          {success && <div className="alert alert-success py-1 text-center" style={{marginBottom: 10}}>{success}</div>}
          <button type="submit" className="ngo-auth-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <div className="ngo-auth-footer">
          Already have an account?
          <a href="/login" className="ngo-auth-link">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
