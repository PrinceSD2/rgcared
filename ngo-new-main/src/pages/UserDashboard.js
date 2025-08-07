import React, { useEffect, useState } from 'react';
import { getProfile, updateProfile, getUserDonations } from '../api/user';
import { getUserVolunteers } from '../api/volunteer';
import { removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
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

  if (loading) return <div className="ngo-dashboard-bg d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}><div className="text-center">Loading...</div></div>;

  return (
    <div className="ngo-dashboard-bg py-4 px-2 px-md-0">
      <div className="container-fluid" style={{maxWidth:1200}}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
          <div className="ngo-dashboard-title">Welcome, {profile?.name || 'User'}!</div>
          <button className="ngo-dashboard-btn" onClick={handleLogout}>Logout</button>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <div className="ngo-dashboard-card">
              <div className="ngo-dashboard-section-title">Profile</div>
              {edit ? (
                <form onSubmit={handleUpdate} className="w-100">
                  <input className="ngo-auth-input mb-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Name" />
                  <input className="ngo-auth-input mb-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required placeholder="Email" />
                  <button className="ngo-dashboard-btn me-2" type="submit">Save</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEdit(false)} type="button">Cancel</button>
                </form>
              ) : (
                <div className="ngo-dashboard-profile">
                  <div><b>Name:</b> {profile?.name}</div>
                  <div><b>Email:</b> {profile?.email}</div>
                  <button className="ngo-dashboard-btn mt-2" onClick={() => setEdit(true)}>Edit Profile</button>
                </div>
              )}
              {error && <div className="alert alert-danger py-1 mt-2">{error}</div>}
              {success && <div className="alert alert-success py-1 mt-2">{success}</div>}
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="ngo-dashboard-card mb-4">
              <div className="ngo-dashboard-section-title">My Donations</div>
              {donations.length === 0 ? <div>No donations yet.</div> : (
                <div className="table-responsive">
                  <table className="ngo-dashboard-table table table-bordered table-sm mt-2">
                    <thead>
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
                          <td>₹{d.amount}</td>
                          <td>{d.paymentId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="ngo-dashboard-card">
              <div className="ngo-dashboard-section-title">My Volunteer Activity</div>
              {volunteers.length === 0 ? <div>No volunteer activity yet.</div> : (
                <div className="table-responsive">
                  <table className="ngo-dashboard-table table table-bordered table-sm mt-2">
                    <thead>
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
      </div>
    </div>
  );
};

export default UserDashboard;
