import axios from 'axios';
import { getToken } from '../utils/auth';
const API_URL = process.env.REACT_APP_API_URL;

export const getUserVolunteers = () => axios.get(`${API_URL}/user/volunteers`, { headers: { Authorization: `Bearer ${getToken()}` } });
