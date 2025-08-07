import React, { useEffect, useState } from 'react';
import { getProfile, updateProfile, getUserDonations } from '../api/user';
import { getUserVolunteers } from '../api/volunteer';
import { removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import NavbarS3 from '../components/NavbarS3/NavbarS3';
import Logo from '../images/logo.png';
import '../ngo-dashboard.css';

const UserDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [donations, setDonations] = useState([]);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const prof = await getProfile();
        setProfile(prof.data);
        setForm({ name: prof.data.name, email: prof.data.email });
        const dons = await getUserDonations();
        setDonations(dons.data);
        const vols = await getUserVolunteers();
        setVolunteers(vols.data);
      } catch (err) {
        setError('Session expired. Please login again.');
        setTimeout(() => { removeToken(); navigate('/login'); }, 1500);
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await updateProfile(form);
      setProfile(res.data);
      setSuccess('Profile updated!');
      setEdit(false);
    } catch {
      setError('Update failed');
    }
  };

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  if (loading)
    return (
      <div
        className="ngo-dashboard-bg d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        }}
      >
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status"></div>
          <div>Loading...</div>
        </div>
      </div>
    );

  return (
    <>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <div
        className="ngo-dashboard-bg py-4 px-2 px-md-0"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
          paddingTop: '120px',
        }}
      >
        <div className="container-fluid" style={{ maxWidth: 1300 }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
            <div
              className="ngo-dashboard-title"
              style={{
                fontWeight: 700,
                fontSize: 28,
                color: '#2e26b2',
                letterSpacing: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                onClick={() => navigate('/')}
                title="Go to Home"
              >
                {/* <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: 38,
                    marginRight: 8,
                    borderRadius: 8,
                    boxShadow: '0 2px 8px #2e26b220',
                    background: '#fff',
                  }}
                /> */}
              </span>
              Welcome, {profile?.name || 'User'}!
            </div>
            <button
              className="ngo-dashboard-btn"
              style={{
                background: '#FBAD17',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '10px 28px',
                fontWeight: 600,
                fontSize: 16,
                boxShadow: '0 2px 8px #2e26b220',
                transition: 'background 0.2s',
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="row g-4 flex-column-reverse flex-md-row">
            <div className="col-12 col-md-5">
              <div
                className="ngo-dashboard-card shadow-lg"
                style={{
                  borderRadius: 18,
                  background: '#fff',
                  padding: 32,
                  minHeight: 320,
                  boxShadow: '0 8px 32px rgba(44,62,80,0.08)',
                  marginBottom: 24,
                }}
              >
                <div
                  className="ngo-dashboard-section-title"
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    color: '#2e26b2',
                    marginBottom: 18,
                    letterSpacing: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span role="img" aria-label="profile">
                    <svg width="24" height="24" fill="#FBAD17" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-5 0-8 2.5-8 4.5V21h16v-2.5c0-2-3-4.5-8-4.5z"/></svg>
                  </span>
                  Profile
                </div>
                {edit ? (
                  <form onSubmit={handleUpdate} className="w-100">
                    <input
                      className="ngo-auth-input mb-2"
                      style={{
                        borderRadius: 8,
                        border: '1px solid #e0e7ff',
                        padding: 12,
                        fontSize: 16,
                      }}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Name"
                    />
                    <input
                      className="ngo-auth-input mb-2"
                      style={{
                        borderRadius: 8,
                        border: '1px solid #e0e7ff',
                        padding: 12,
                        fontSize: 16,
                      }}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="Email"
                    />
                    <div className="d-flex gap-2">
                      <button
                        className="ngo-dashboard-btn me-2"
                        style={{
                          background: '#2e26b2',
                          color: '#fff',
                          borderRadius: 8,
                          padding: '8px 20px',
                          fontWeight: 600,
                        }}
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        style={{ borderRadius: 8, padding: '8px 20px' }}
                        onClick={() => setEdit(false)}
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="ngo-dashboard-profile" style={{ fontSize: 17 }}>
                    <div>
                      <b>Name:</b> {profile?.name}
                    </div>
                    <div>
                      <b>Email:</b> {profile?.email}
                    </div>
                    <button
                      className="ngo-dashboard-btn mt-3"
                      style={{
                        background: '#2e26b2',
                        color: '#fff',
                        borderRadius: 8,
                        padding: '8px 20px',
                        fontWeight: 600,
                      }}
                      onClick={() => setEdit(true)}
                    >
                      Edit Profile
                    </button>
                  </div>
                )}
                {error && <div className="alert alert-danger py-1 mt-2">{error}</div>}
                {success && <div className="alert alert-success py-1 mt-2">{success}</div>}
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div
                className="ngo-dashboard-card mb-4 shadow-lg"
                style={{
                  borderRadius: 18,
                  background: '#fff',
                  padding: 32,
                  boxShadow: '0 8px 32px rgba(44,62,80,0.08)',
                  marginBottom: 24,
                }}
              >
                <div
                  className="ngo-dashboard-section-title"
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    color: '#FBAD17',
                    marginBottom: 18,
                    letterSpacing: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span role="img" aria-label="donation">
                    <svg width="24" height="24" fill="#2e26b2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </span>
                  My Donations
                </div>
                {donations.length === 0 ? (
                  <div className="text-muted">No donations yet.</div>
                ) : (
                  <div className="table-responsive">
                    <table
                      className="ngo-dashboard-table table table-bordered table-sm mt-2"
                      style={{ borderRadius: 12, overflow: 'hidden' }}
                    >
                      <thead style={{ background: '#f3f4fa' }}>
                        <tr>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Payment ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donations.map(d => (
                          <tr key={d._id}>
                            <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                            <td style={{ color: '#2e26b2', fontWeight: 600 }}>₹{d.amount}</td>
                            <td>{d.paymentId}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div
                className="ngo-dashboard-card shadow-lg"
                style={{
                  borderRadius: 18,
                  background: '#fff',
                  padding: 32,
                  boxShadow: '0 8px 32px rgba(44,62,80,0.08)',
                }}
              >
                <div
                  className="ngo-dashboard-section-title"
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    color: '#2e26b2',
                    marginBottom: 18,
                    letterSpacing: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span role="img" aria-label="volunteer">
                    <svg width="24" height="24" fill="#FBAD17" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-5 0-8 2.5-8 4.5V21h16v-2.5c0-2-3-4.5-8-4.5z"/></svg>
                  </span>
                  My Volunteer Activity
                </div>
                {volunteers.length === 0 ? (
                  <div className="text-muted">No volunteer activity yet.</div>
                ) : (
                  <div className="table-responsive">
                    <table
                      className="ngo-dashboard-table table table-bordered table-sm mt-2"
                      style={{ borderRadius: 12, overflow: 'hidden' }}
                    >
                      <thead style={{ background: '#f3f4fa' }}>
                        <tr>
                          <th>Date</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Qualification</th>
                          <th>Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {volunteers.map(v => (
                          <tr key={v._id}>
                            <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.qualification}</td>
                            <td>{v.note || v.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-5" style={{ color: '#aaa', fontSize: 14 }}>
            Thank you for being part of{' '}
            <span style={{ color: '#2e26b2', fontWeight: 600 }}>
              Reddington Global Care Foundation
            </span>
            .<br />
            <span style={{ fontSize: 13 }}>Together, we are making a difference!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;