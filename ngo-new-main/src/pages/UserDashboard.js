import React, { useEffect, useState } from 'react';
import { getProfile, updateProfile, getUserDonations } from '../api/user';
import { getUserVolunteers } from '../api/volunteer';
import { removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

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

  if (loading) return <div className="container text-center mt-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Dashboard</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
      </div>
      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="card p-3 shadow-sm">
            <h4>Profile</h4>
            {edit ? (
              <form onSubmit={handleUpdate}>
                <input className="form-control mb-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                <input className="form-control mb-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                <button className="btn btn-success btn-sm me-2" type="submit">Save</button>
                <button className="btn btn-secondary btn-sm" onClick={() => setEdit(false)} type="button">Cancel</button>
              </form>
            ) : (
              <>
                <div><b>Name:</b> {profile?.name}</div>
                <div><b>Email:</b> {profile?.email}</div>
                <button className="btn btn-primary btn-sm mt-2" onClick={() => setEdit(true)}>Edit Profile</button>
              </>
            )}
            {error && <div className="alert alert-danger py-1 mt-2">{error}</div>}
            {success && <div className="alert alert-success py-1 mt-2">{success}</div>}
          </div>
        </div>
        <div className="col-md-7">
          <div className="card p-3 shadow-sm mb-4">
            <h4>My Donations</h4>
            {donations.length === 0 ? <div>No donations yet.</div> : (
              <table className="table table-bordered table-sm mt-2">
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
            )}
          </div>
          <div className="card p-3 shadow-sm">
            <h4>My Volunteer Activity</h4>
            {volunteers.length === 0 ? <div>No volunteer activity yet.</div> : (
              <table className="table table-bordered table-sm mt-2">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
