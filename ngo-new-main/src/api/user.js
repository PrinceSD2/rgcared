import axios from 'axios';
import { getToken } from '../utils/auth';
const API_URL = process.env.REACT_APP_API_URL;

export const getProfile = () => axios.get(`${API_URL}/user/profile`, { headers: { Authorization: `Bearer ${getToken()}` } });
export const updateProfile = (data) => axios.put(`${API_URL}/user/profile`, data, { headers: { Authorization: `Bearer ${getToken()}` } });
export const getUserDonations = () => axios.get(`${API_URL}/user/donations`, { headers: { Authorization: `Bearer ${getToken()}` } });
