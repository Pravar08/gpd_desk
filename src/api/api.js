import api from './index';

export const fetchGPSLogs = async (limit = 300, page = 1) => {
  try {
    const response = await api.get(`/api/gps-logs?limit=${limit}&page=${page}`);
    console.log(`Fetched GPS Logs (Page ${page}):`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching GPS logs:', error);
    return [];
  }
};

// Example usage
