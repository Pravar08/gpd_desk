import axios from 'axios';

const API_BASE_URL = 'http://13.51.239.249:8000'; // Adjust port if needed

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000, // Timeout after 5 seconds
});

export default api;
