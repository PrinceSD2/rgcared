import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle common errors
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);
export const postWithFormData = (url, formData) => {
  return axiosInstance.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Set the content type for file uploads
    },
  });
};
export default axiosInstance;
