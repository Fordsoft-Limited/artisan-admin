import axios from 'axios';
import LocalStorageService from './LocalStorageService'; // Import the LocalStorageService

const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    const token = LocalStorageService.getToken(); // Get the token from LocalStorageService
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
