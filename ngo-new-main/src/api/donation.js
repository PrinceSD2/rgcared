import axios from 'axios';
import { getToken } from '../utils/auth';
const API_URL = process.env.REACT_APP_API_URL;

export const createDonation = (data) => axios.post(`${API_URL}/donation`, data, { headers: { Authorization: `Bearer ${getToken()}` } });
