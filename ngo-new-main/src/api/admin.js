import axios from 'axios';
import { getToken } from '../utils/auth';
const API_URL = process.env.REACT_APP_API_URL;

export const getAllUsers = () => axios.get(`${API_URL}/admin/users`, { headers: { Authorization: `Bearer ${getToken()}` } });
export const getAllDonations = () => axios.get(`${API_URL}/admin/donations`, { headers: { Authorization: `Bearer ${getToken()}` } });
export const deleteUser = (id) => axios.delete(`${API_URL}/admin/user/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } });
export const deleteDonation = (id) => axios.delete(`${API_URL}/admin/donation/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } });
