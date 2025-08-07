import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllDonations, deleteUser, deleteDonation } from '../api/admin';
import { removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [tab, setTab] = useState('users');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const us = await getAllUsers();
        setUsers(us.data);
        const dons = await getAllDonations();
        setDonations(dons.data);
      } catch (err) {
        setError('Session expired or not admin. Please login as admin.');
        setTimeout(() => { removeToken(); navigate('/login'); }, 1500);
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    await deleteUser(id);
    setUsers(users.filter(u => u._id !== id));
  };
  const handleDeleteDonation = async (id) => {
    if (!window.confirm('Delete this donation?')) return;
    await deleteDonation(id);
    setDonations(donations.filter(d => d._id !== id));
  };
  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  if (loading) return <div className="container text-center mt-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
      </div>
      <div className="mb-3">
        <button className={`btn btn-${tab === 'users' ? 'primary' : 'secondary'} me-2`} onClick={() => setTab('users')}>Users</button>
        <button className={`btn btn-${tab === 'donations' ? 'primary' : 'secondary'}`} onClick={() => setTab('donations')}>Donations</button>
      </div>
      {tab === 'users' ? (
        <div className="card p-3 shadow-sm">
          <h4>All Users</h4>
          <table className="table table-bordered table-sm mt-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.isAdmin ? 'Yes' : 'No'}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(u._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="card p-3 shadow-sm">
          <h4>All Donations</h4>
          <table className="table table-bordered table-sm mt-2">
            <thead>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(d => (
                <tr key={d._id}>
                  <td>{d.userId || '-'}</td>
                  <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                  <td>₹{d.amount}</td>
                  <td>{d.paymentId}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteDonation(d._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <div className="alert alert-danger py-1 mt-2">{error}</div>}
    </div>
  );
};

export default AdminDashboard;
