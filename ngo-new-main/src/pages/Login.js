import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import NavbarS3 from '../components/NavbarS3/NavbarS3';
import Logo from '../images/logo.png';
import '../ngo-auth.css';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await login({ email, password });
      setToken(res.data.token);
      if (adminMode) {
        if (res.data.user.isAdmin) {
          navigate('/admin');
        } else {
          setError('You are not an admin.');
          setLoading(false);
          return;
        }
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <div className="ngo-auth-bg" style={{backgroundImage: 'url(/images/image-gallery/image-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', paddingTop: '120px'}}>
        <div className="ngo-auth-card" style={{boxShadow: '0 8px 32px 0 rgba(44,62,80,0.25)', background: 'rgba(255,255,255,0.97)'}}>
          <img src="/favicon-old.png" alt="NGO Logo" className="ngo-auth-logo" style={{boxShadow: '0 2px 12px #2e26b2a0', borderRadius: '50%'}} />
          <div className="ngo-auth-title" style={{fontSize: '2rem', letterSpacing: '2px'}}>Welcome Back!</div>
          <div className="ngo-auth-subtext" style={{fontWeight: 500, color: '#1c3252', fontSize: '1.1rem'}}>Login to your account to support our mission</div>
          <form onSubmit={handleSubmit} autoComplete="on">
          <input
            type="email"
            className="ngo-auth-input"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
            style={{background: '#f7f8fa'}}
          />
          <input
            type="password"
            className="ngo-auth-input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{background: '#f7f8fa'}}
          />
          <div style={{display: 'flex', alignItems: 'center', margin: '10px 0 0 2px'}}>
            <input
              type="checkbox"
              id="adminMode"
              checked={adminMode}
              onChange={e => setAdminMode(e.target.checked)}
              style={{marginRight: 8, width: 16, height: 16}}
            />
            <label htmlFor="adminMode" style={{fontWeight: 500, color: '#2e26b2', cursor: 'pointer', fontSize: '1rem'}}>Login as Admin</label>
          </div>
          {error && <div className="alert alert-danger py-1 text-center" style={{marginBottom: 10}}>{error}</div>}
          <button type="submit" className="ngo-auth-btn" disabled={loading} style={{fontSize: '1.1rem', marginTop: 8, boxShadow: '0 2px 8px #2e26b230'}}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="ngo-auth-footer" style={{marginTop: 18, fontWeight: 500}}>
          Don't have an account?
          <a href="/signup" className="ngo-auth-link">Sign up</a>
        </div>
      </div>
    </div>
      </>
  );
};

export default Login;
